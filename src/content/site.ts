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
  hero: string;
  about: string[];
  experience: ExperienceItem[];
  links: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
};

// Placeholder copy — replace with real details.
export const site: SiteContent = {
  name: "Dmitrii Musikhin",
  title: "Dmitrii Musikhin — Web Developer",
  description:
    "Independent web developer building products with TypeScript, Next.js and NestJS.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmitrii.dev",
  hero: "Dmitrii Musikhin is an independent web developer building fast, well-structured products with TypeScript, Next.js and NestJS. Focused on clear interfaces, solid backends and the details in between.",
  about: [
    "I design and build web products end to end: from the data model and API to the interface people actually use. Most of my work lives in TypeScript — Next.js on the front, NestJS on the back — with the occasional SwiftUI app when a product needs to live on a phone.",
    "I care about things that are easy to overlook: predictable state, honest error handling, pages that load before you notice them. The result should feel quiet and obvious.",
  ],
  experience: [
    { period: "2024 — now", role: "Independent web developer" },
    { period: "2021 — 2024", role: "Senior full-stack engineer, product studio" },
    { period: "2018 — 2021", role: "Full-stack engineer, fintech" },
  ],
  links: {
    github: "https://github.com/ffurzy",
    linkedin: "",
    email: "mailto:test@test.test",
  },
};
