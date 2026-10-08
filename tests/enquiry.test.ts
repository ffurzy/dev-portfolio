import { describe, expect, it } from "vitest";
import { formatEnquiryEmail, validateEnquiry } from "../src/lib/enquiry";

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  message: "I need a small dashboard for our analytics team.",
  link: "",
};

describe("validateEnquiry", () => {
  it("accepts a complete enquiry and trims it", () => {
    const result = validateEnquiry({
      ...valid,
      name: "  Ada  ",
      link: " https://example.com ",
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.name).toBe("Ada");
      expect(result.value.link).toBe("https://example.com");
    }
  });

  it("drops an empty link instead of failing", () => {
    const result = validateEnquiry(valid);
    expect(result.ok && result.value.link).toBeUndefined();
  });

  it("requires a name", () => {
    const result = validateEnquiry({ ...valid, name: " " });
    expect(!result.ok && result.errors.name).toBeTruthy();
  });

  it("rejects a malformed email", () => {
    const result = validateEnquiry({ ...valid, email: "ada@" });
    expect(!result.ok && result.errors.email).toBeTruthy();
  });

  it("wants more than a couple of words", () => {
    const result = validateEnquiry({ ...valid, message: "hi" });
    expect(!result.ok && result.errors.message).toBeTruthy();
  });

  it("only takes https links", () => {
    for (const link of ["http://example.com", "example.com", "javascript:alert(1)"]) {
      const result = validateEnquiry({ ...valid, link });
      expect(!result.ok && result.errors.link, link).toBeTruthy();
    }
  });

  it("reports every broken field at once", () => {
    const result = validateEnquiry({ name: "", email: "", message: "", link: "" });
    expect(!result.ok && Object.keys(result.errors).sort()).toEqual([
      "email",
      "message",
      "name",
    ]);
  });
});

describe("formatEnquiryEmail", () => {
  it("puts the sender and message in the body", () => {
    const { subject, text } = formatEnquiryEmail({
      name: "Ada",
      email: "ada@example.com",
      message: "Hello there.",
      link: "https://example.com",
    });
    expect(subject).toBe("New enquiry from Ada");
    expect(text).toContain("Ada <ada@example.com>");
    expect(text).toContain("Link: https://example.com");
    expect(text).toContain("Hello there.");
  });
});
