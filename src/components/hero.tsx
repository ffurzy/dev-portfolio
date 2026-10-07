import { site } from "@/content/site";

// No headline, no button — the paragraph is the hero.
export function Hero() {
  return (
    <section className="pt-section-sm md:pt-section">
      <p className="mx-auto max-w-[600px] text-center text-subheading text-graphite">
        {site.hero}
      </p>
    </section>
  );
}
