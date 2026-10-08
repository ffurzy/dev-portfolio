export type ExperienceItem = {
  period: string;
  role: string;
};

export type SiteContent = {
  name: string;
  title: string;
  description: string;
  /** Canonical origin, used for metadata, sitemap and robots. */
  url: string;
  /** Where the work is based and which places it serves; feeds copy and structured data. */
  location: {
    city: string;
    region: string;
    areaServed: string[];
  };
  hero: string;
  about: string[];
  experience: ExperienceItem[];
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
};

// Add linkedin when there is a profile to show; empty hides the button.
export const site: SiteContent = {
  name: "Dmitrii Musikhin",
  title: "Dmitrii Musikhin — Full-Stack Developer in Sag Harbor, NY",
  description:
    "Full-stack developer based in Sag Harbor, NY, building websites and apps for businesses across the Hamptons and New York. TypeScript, React, Node.js.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmitriimusikhin.dev",
  location: {
    city: "Sag Harbor",
    region: "NY",
    areaServed: [
      "Sag Harbor",
      "East Hampton",
      "Southampton",
      "The Hamptons",
      "Long Island",
      "New York",
    ],
  },
  hero: "Dmitrii Musikhin is a full-stack developer in Sag Harbor, NY, working with TypeScript, React and Node.js. Building websites and apps for businesses across the Hamptons and New York since 2023, from the database to the interface.",
  about: [
    "Hi, I'm Dmitrii, a full-stack developer freelancing since 2023. I build web products and mobile apps end to end with TypeScript, React and Node.js, and recently finished Yandex Practicum's 20-month full-stack programme, Python included.",
    "I'm based in Sag Harbor, NY, and work with businesses across the Hamptons and New York, in person or remotely.",
  ],
  experience: [
    {
      period: "2025 — 2026",
      role: "Full-Stack Developer: Extended Program, Yandex Practicum",
    },
    { period: "2023 — now", role: "Freelance full-stack developer" },
  ],
  links: {
    github: "https://github.com/ffurzy",
    linkedin: "",
    email: "mailto:hello@dmitriimusikhin.dev",
  },
};
