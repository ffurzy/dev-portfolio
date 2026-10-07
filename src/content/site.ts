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
    github: string;
    linkedin: string;
    email: string;
  };
};

// Links are placeholders until the real ones are set.
export const site: SiteContent = {
  name: "Dmitrii Musikhin",
  title: "Dmitrii Musikhin — Web Developer",
  description:
    "Full-stack developer working with TypeScript, React and Node.js, building web products since 2023.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmitrii.dev",
  hero: "Dmitrii Musikhin is a full-stack developer working with TypeScript, React and Node.js. Building web products since 2023, from the database to the interface, with a focus on clean structure and things that just work.",
  about: [
    "I came to development in 2023 and have been building for the web since: interfaces in React and Next.js, backends in Node.js and NestJS, with TypeScript on both sides. In 2026 I completed Yandex Practicum's 20-month Full-Stack Developer programme, which covered the full path from layout and accessibility to Node.js services, application security, testing and Python backends.",
  ],
  experience: [
    {
      period: "2025 — 2026",
      role: "Full-Stack Developer: Extended Program, Yandex Practicum",
    },
    { period: "2023 — now", role: "Freelance full-stack developer" },
  ],
  links: {
    github: "https://github.com/dmitriimusikhin",
    linkedin: "https://www.linkedin.com/in/dmitriimusikhin",
    email: "mailto:hello@dmitrii.dev",
  },
};
