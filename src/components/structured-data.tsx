import { site } from "@/content/site";

// JSON-LD for search engines: who this is, where, and what area is served.
// Person + ProfessionalService is the pair Google reads for a one-person local service.
export function StructuredData() {
  const email = site.links.email?.replace(/^mailto:/, "");
  const sameAs = [site.links.github, site.links.linkedin].filter((href): href is string =>
    Boolean(href),
  );
  const address = {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: "US",
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: site.url,
        jobTitle: "Full-Stack Developer",
        email,
        address,
        sameAs,
        knowsAbout: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "SwiftUI"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: `${site.name} — Web Development`,
        url: site.url,
        description: site.description,
        founder: { "@id": `${site.url}/#person` },
        address,
        areaServed: site.location.areaServed.map((name) => ({ "@type": "Place", name })),
        serviceType: [
          "Web development",
          "Web application development",
          "iOS app development",
        ],
        priceRange: "$$",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
