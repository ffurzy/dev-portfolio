import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/section-label";
import { GhostButton } from "@/components/ghost-button";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <article className="mt-section-sm md:mt-section">
      <SectionLabel>About</SectionLabel>

      <div className="mt-element max-w-[600px] space-y-element text-subheading text-graphite">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="mt-section-sm md:mt-section">
        <SectionLabel>Experience</SectionLabel>
        <dl className="mt-element grid max-w-[600px] grid-cols-[auto_1fr] gap-x-[40px] gap-y-[10px] text-meta">
          {site.experience.map((item) => (
            <div key={item.period + item.role} className="contents">
              <dt className="text-ash">{item.period}</dt>
              <dd className="text-ink">{item.role}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-section-sm md:mt-section">
        <SectionLabel>Contact</SectionLabel>
        <div className="mt-element flex flex-wrap gap-[10px]">
          <GhostButton href="/contact">Send a message</GhostButton>
          {site.links.github && (
            <GhostButton href={site.links.github}>GitHub</GhostButton>
          )}
          {site.links.linkedin && (
            <GhostButton href={site.links.linkedin}>LinkedIn</GhostButton>
          )}
        </div>
        {site.links.email && (
          <p className="mt-element text-meta text-ash">
            Or email{" "}
            <a href={site.links.email} className="text-slate">
              {site.links.email.replace(/^mailto:/, "")}
            </a>
          </p>
        )}
      </section>
    </article>
  );
}
