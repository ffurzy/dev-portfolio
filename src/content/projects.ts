export type ProjectLinks = {
  live?: string;
  source?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Short attribution shown opposite the title on the tile, e.g. category and year. */
  credit: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  description: string[];
  cover: string;
  images: string[];
  links: ProjectLinks;
};

// Covers live in public/projects/. Order here is the order in the grid.
export const projects: Project[] = [
  {
    slug: "stdout-chat",
    title: "stdout.chat",
    credit: "Anonymous chat · 2026",
    year: "2026",
    role: "Design and development",
    stack: ["SwiftUI", "Node.js", "TypeScript", "Vercel"],
    summary:
      "Anonymous text-only chat for iOS: strangers matched by shared interests, no video, no photos, no sign-up.",
    description: [
      "You pick up to five interests, get paired with someone who shares at least one, and talk. Every good conversation earns rank; chats are ephemeral and nothing is saved. #void is the one public room, where every line dissolves after 24 hours.",
      "The product is three pieces: the iOS app, a zero-dependency CLI on npm that reads and posts to #void from the terminal, and a static landing site on Vercel with guides and a live view of the room.",
    ],
    cover: "/projects/stdout-chat.jpg",
    images: ["/projects/stdout-chat.jpg", "/projects/stdout-chat-void.jpg"],
    links: { live: "https://stdout.chat", source: "https://github.com/stdout-chat/cli" },
  },
  {
    slug: "elina-gabitova",
    title: "Elina Gabitova",
    credit: "Portfolio site · 2026",
    year: "2026",
    role: "Design and development",
    stack: ["Astro", "React", "Tailwind CSS", "Cloudflare"],
    summary:
      "Portfolio for a landscape designer working in the Hamptons and New York: projects, field work, about and contact.",
    description: [
      "A quiet, image-first site where the work does the talking. Each project gets its own page with a full-width gallery, location and year; a separate field-work section shows gardens as they grow in.",
      "Built with Astro so every page ships as static HTML with almost no JavaScript — the only island is the mobile menu. Styled with Tailwind, deployed on Cloudflare.",
    ],
    cover: "/projects/elina-gabitova.jpg",
    images: ["/projects/elina-gabitova.jpg", "/projects/elina-gabitova-project.jpg"],
    links: { live: "https://elinagabitova.com" },
  },
];
