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

// Placeholder projects — replace with real work. Covers live in public/projects/.
export const projects: Project[] = [
  {
    slug: "ledger",
    title: "Ledger",
    credit: "Web app · 2025",
    year: "2025",
    role: "Full-stack development",
    stack: ["Next.js", "NestJS", "PostgreSQL"],
    summary:
      "Personal finance dashboard that turns bank exports into monthly budgets and long-term trends.",
    description: [
      "Ledger imports CSV statements from any bank, normalises merchants and categories, and keeps a running picture of where money goes. Budgets are set per category and roll over month to month.",
      "The backend is a NestJS service with a small rules engine for categorisation; the frontend is a server-rendered Next.js app with no client state beyond the current filter.",
    ],
    cover: "/projects/ledger.svg",
    images: ["/projects/ledger.svg", "/projects/atlas.svg"],
    links: { live: "https://example.com", source: "https://github.com" },
  },
  {
    slug: "atlas",
    title: "Atlas",
    credit: "Internal tool · 2025",
    year: "2025",
    role: "Backend and interface",
    stack: ["NestJS", "React", "Redis"],
    summary:
      "Service catalogue and on-call directory for a platform team of forty engineers.",
    description: [
      "Atlas keeps one record per service: owners, dependencies, runbooks and the current on-call rotation. It replaced three spreadsheets and a wiki page nobody trusted.",
      "Data is synced nightly from the deploy pipeline and PagerDuty, so the catalogue stays correct without anyone maintaining it by hand.",
    ],
    cover: "/projects/atlas.svg",
    images: ["/projects/atlas.svg"],
    links: { source: "https://github.com" },
  },
  {
    slug: "relay",
    title: "Relay",
    credit: "iOS app · 2024",
    year: "2024",
    role: "iOS development",
    stack: ["SwiftUI", "CloudKit"],
    summary: "A small iOS app for handing off reading lists between devices and people.",
    description: [
      "Relay is a share-sheet extension and a list. Save a link on the phone, open it on the iPad, send the whole list to a friend. Sync runs through CloudKit; there is no account to create.",
    ],
    cover: "/projects/relay.svg",
    images: ["/projects/relay.svg", "/projects/orbit.svg"],
    links: { live: "https://apps.apple.com" },
  },
  {
    slug: "orbit",
    title: "Orbit",
    credit: "Marketing site · 2024",
    year: "2024",
    role: "Frontend development",
    stack: ["Next.js", "Tailwind CSS"],
    summary:
      "Launch site for a hardware startup, built to ship in two weeks and stay fast.",
    description: [
      "Static Next.js site with a content layer in MDX. Every page renders on the server; the only JavaScript shipped is for the pre-order form.",
    ],
    cover: "/projects/orbit.svg",
    images: ["/projects/orbit.svg"],
    links: { live: "https://example.com" },
  },
  {
    slug: "canvas",
    title: "Canvas",
    credit: "Web app · 2023",
    year: "2023",
    role: "Full-stack development",
    stack: ["Next.js", "NestJS", "WebSockets"],
    summary:
      "Collaborative whiteboard for remote planning sessions, with live cursors and history.",
    description: [
      "Canvas keeps a shared board in sync across a room using a NestJS WebSocket gateway and an operation log. Boards can be rewound to any point and exported as a single image.",
    ],
    cover: "/projects/canvas.svg",
    images: ["/projects/canvas.svg", "/projects/signal.svg"],
    links: { source: "https://github.com" },
  },
  {
    slug: "signal",
    title: "Signal",
    credit: "CLI · 2023",
    year: "2023",
    role: "Design and development",
    stack: ["TypeScript", "Node.js"],
    summary:
      "Command-line tool that watches a set of endpoints and reports changes in plain text.",
    description: [
      "Signal polls URLs on a schedule, diffs the responses and prints a short, readable report. It is meant to run in cron and be read in an email.",
    ],
    cover: "/projects/signal.svg",
    images: ["/projects/signal.svg"],
    links: { source: "https://github.com" },
  },
];
