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

// Add linkedin when there is a profile to show; empty hides the button.
export const site: SiteContent = {
  name: "Dmitrii Musikhin",
  title: "Dmitrii Musikhin — Full-Stack Developer",
  description:
    "Full-stack developer working with TypeScript, React and Node.js, building web products since 2023.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dmitriimusikhin.dev",
  hero: "Dmitrii Musikhin is a full-stack developer working with TypeScript, React and Node.js. Building web products since 2023, from the database to the interface, with a focus on clean structure and things that just work.",
  about: [
    "Hi, I'm Dmitrii, a full-stack developer freelancing since 2023. I build web products and mobile apps end to end with TypeScript, React and Node.js, and recently finished Yandex Practicum's 20-month full-stack programme, Python included.",
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
