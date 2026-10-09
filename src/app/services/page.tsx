import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionLabel } from "@/components/section-label";
import { GhostButton } from "@/components/ghost-button";

export const metadata: Metadata = {
  title: "Web Development for Hamptons Businesses",
  description:
    "Websites and web apps for businesses in the Hamptons and New York: built from scratch, fixed price, live in two to four weeks. Based in Sag Harbor, NY.",
};

const packages = [
  {
    name: "Business website",
    price: "from $2,500",
    text: "Five to eight pages for a studio, shop, restaurant or practice: your work, your story, how to reach you. Fast, easy to update, yours to keep.",
  },
  {
    name: "Website with a system",
    price: "quoted per project",
    text: "Booking, a catalogue, client log-in or a members area. A real backend behind a quiet interface, built to grow with the business.",
  },
  {
    name: "Web app or internal tool",
    price: "quoted per project",
    text: "Dashboards, admin panels, the thing your team currently runs in spreadsheets. Scoped together, then built end to end.",
  },
  {
    name: "Care and updates",
    price: "$150 / month",
    text: "Hosting, backups, security updates and small changes when you need them, so the site keeps working after launch.",
  },
];

export default function ServicesPage() {
  return (
    <article className="mt-section-sm md:mt-section">
      <SectionLabel>Services</SectionLabel>

      <p className="mt-element max-w-[600px] text-subheading text-graphite">
        Websites and web apps for businesses in the Hamptons and New York. Built from
        scratch, at a fixed price agreed before work starts.
      </p>

      <section className="mt-section-sm md:mt-section">
        <SectionLabel>What I build</SectionLabel>
        <dl className="mt-element grid max-w-[720px] grid-cols-1 gap-y-[30px] sm:grid-cols-[200px_1fr] sm:gap-x-[40px]">
          {packages.map((item) => (
            <div key={item.name} className="contents">
              <dt className="text-body text-ink">
                {item.name}
                <span className="mt-[4px] block text-meta text-ash">{item.price}</span>
              </dt>
              <dd className="max-w-[480px] text-body text-graphite">{item.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-section-sm md:mt-section">
        <SectionLabel>How it works</SectionLabel>
        <p className="mt-element max-w-[600px] text-body text-graphite">
          Just send me a message about what you need. A few lines is enough, and I usually
          reply the same day. Most sites take two to four weeks. I&apos;m in Sag Harbor,
          so if you&apos;re local, we can also meet in person.
        </p>
        <div className="mt-[30px] flex flex-wrap items-baseline gap-element">
          <GhostButton href="/contact">Get in touch</GhostButton>
          {site.links.email && (
            <a href={site.links.email} className="text-meta text-ash">
              {site.links.email.replace(/^mailto:/, "")}
            </a>
          )}
        </div>
      </section>
    </article>
  );
}
