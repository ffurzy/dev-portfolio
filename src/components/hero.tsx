import { site } from "@/content/site";

// No headline, no button — the paragraph is the hero, and the page's h1 for search.
export function Hero() {
  return (
    <section className="pt-section-sm md:pt-section">
      <h1 className="mx-auto max-w-[600px] text-center text-subheading text-graphite">
        {site.hero}
      </h1>
    </section>
  );
}
