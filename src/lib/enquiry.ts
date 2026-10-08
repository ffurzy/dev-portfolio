export type EnquiryInput = {
  name: string;
  email: string;
  message: string;
  link: string;
};

export type EnquiryField = keyof EnquiryInput;

export type Enquiry = {
  name: string;
  email: string;
  message: string;
  link?: string;
};

export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export type ValidationResult =
  { ok: true; value: Enquiry } | { ok: false; errors: EnquiryErrors };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MAX = 100;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 5000;

// Pure validation so it can be unit-tested without Next or the network.
export function validateEnquiry(input: EnquiryInput): ValidationResult {
  const errors: EnquiryErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const link = input.link.trim();

  if (!name) errors.name = "Please tell me your name.";
  else if (name.length > NAME_MAX) errors.name = "That name is a bit long.";

  if (!email) errors.email = "I need an email to reply to.";
  else if (!EMAIL.test(email)) errors.email = "That doesn't look like an email address.";

  if (message.length < MESSAGE_MIN)
    errors.message = "A few words about the project would help.";
  else if (message.length > MESSAGE_MAX)
    errors.message = "That's longer than I can read in one go.";

  if (link && !isHttpsUrl(link)) errors.link = "Links should start with https://";

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true, value: { name, email, message, link: link || undefined } };
}

function isHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

export function formatEnquiryEmail(enquiry: Enquiry): { subject: string; text: string } {
  const lines = [
    `From: ${enquiry.name} <${enquiry.email}>`,
    enquiry.link ? `Link: ${enquiry.link}` : null,
    "",
    enquiry.message,
  ].filter((line): line is string => line !== null);
  return { subject: `New enquiry from ${enquiry.name}`, text: lines.join("\n") };
}
