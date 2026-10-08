import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell me about your project and I'll reply within a day.",
};

export default function ContactPage() {
  const email = site.links.email?.replace(/^mailto:/, "");
  return (
    <article className="mt-section-sm md:mt-section">
      <SectionLabel>Contact</SectionLabel>

      <p className="mt-element max-w-[600px] text-subheading text-graphite">
        Need a website, an app, or not sure yet what you need? Write a few lines and
        I&apos;ll reply within a day.
      </p>

      <div className="mt-[55px] max-w-[600px]">
        <ContactForm />
      </div>

      <p className="mt-[55px] max-w-[600px] text-meta text-ash">
        Prefer email?{" "}
        {email && (
          <a href={site.links.email} className="text-slate">
            {email}
          </a>
        )}
        {site.links.github && (
          <>
            {" · "}
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate"
            >
              GitHub
            </a>
          </>
        )}
      </p>
    </article>
  );
}
