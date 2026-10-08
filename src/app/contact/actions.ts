"use server";

import { headers } from "next/headers";
import { site } from "@/content/site";
import {
  formatEnquiryEmail,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryInput,
} from "@/lib/enquiry";

export type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; errors?: EnquiryErrors; values?: EnquiryInput };

const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 3;
const recent = new Map<string, number[]>();

// Per-instance memory is enough here: it stops a stuck finger or a naive script,
// and a serverless cold start simply forgets, which is fine for a portfolio.
function overLimit(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > LIMIT;
}

export async function sendEnquiry(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const field = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value : "";
  };
  const values: EnquiryInput = {
    name: field("name"),
    email: field("email"),
    message: field("message"),
    link: field("link"),
  };

  // Honeypot: real people never see this field. Bots that fill it get a quiet "success".
  if (field("company")) return { status: "success" };

  const result = validateEnquiry(values);
  if (!result.ok) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors: result.errors,
      values,
    };
  }

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (overLimit(ip)) {
    return {
      status: "error",
      message: "That's a few messages in a row. Please try again in a few minutes.",
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const inbox = site.links.email?.replace(/^mailto:/, "");
  if (!apiKey || !inbox) {
    return {
      status: "error",
      message: "The form isn't set up yet. Please email me directly.",
      values,
    };
  }

  const { subject, text } = formatEnquiryEmail(result.value);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `Portfolio <${inbox}>`,
      to: [inbox],
      reply_to: result.value.email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    return {
      status: "error",
      message: "Something went wrong on my side. Please email me directly.",
      values,
    };
  }
  return { status: "success" };
}
