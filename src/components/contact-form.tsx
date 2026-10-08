"use client";

import { useActionState, type ReactNode } from "react";
import { sendEnquiry, type FormState } from "@/app/contact/actions";
import type { EnquiryField } from "@/lib/enquiry";

const initial: FormState = { status: "idle" };

const fieldClass =
  "w-full rounded-md border bg-bone-canvas px-[15px] py-[10px] text-body text-ink outline-none placeholder:text-ash focus:border-ink";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendEnquiry, initial);

  if (state.status === "success") {
    return (
      <p className="text-subheading text-graphite" role="status">
        Thanks, your message is on its way. I&apos;ll reply within a day.
      </p>
    );
  }

  const errors = state.status === "error" ? state.errors : undefined;
  const values = state.status === "error" ? state.values : undefined;
  const border = (name: EnquiryField) => (errors?.[name] ? "border-ink" : "border-ash");

  return (
    <form action={action} noValidate className="relative grid gap-element">
      <Field label="Name" name="name" error={errors?.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          defaultValue={values?.name}
          className={`${fieldClass} ${border("name")}`}
        />
      </Field>

      <Field label="Email" name="email" error={errors?.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={values?.email}
          className={`${fieldClass} ${border("email")}`}
        />
      </Field>

      <Field label="Tell me about the project" name="message" error={errors?.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          defaultValue={values?.message}
          className={`${fieldClass} ${border("message")} resize-y`}
        />
      </Field>

      <Field
        label="Link, if there is one"
        name="link"
        error={errors?.link}
        hint="Figma, a current site, a repo"
      >
        <input
          id="link"
          name="link"
          type="url"
          inputMode="url"
          placeholder="https://"
          defaultValue={values?.link}
          className={`${fieldClass} ${border("link")}`}
        />
      </Field>

      {/* Honeypot: hidden from people, tempting for bots. */}
      <div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-[10px] flex flex-wrap items-baseline gap-element">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md border border-ink px-[15px] py-[10px] text-meta leading-none text-ink disabled:border-ash disabled:text-ash"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        {state.status === "error" && (
          <p className="text-meta text-ash" role="alert">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: EnquiryField;
  error?: string;
  hint?: string;
  children: ReactNode;
};

function Field({ label, name, error, hint, children }: FieldProps) {
  return (
    <div className="grid gap-[6px]">
      <label htmlFor={name} className="text-meta text-slate">
        {label}
        {hint && <span className="text-ash"> · {hint}</span>}
      </label>
      {children}
      {error && <p className="text-meta text-ash">{error}</p>}
    </div>
  );
}
