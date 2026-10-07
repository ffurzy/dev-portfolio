# dmitrii-portfolio

Personal developer portfolio. Static Next.js site built on the "Brisbane Web Developer" design system (see [DESIGN.md](DESIGN.md)): achromatic palette, system sans, one serif caption, warm shadows under imagery only.

## Stack

Next.js (App Router) · TypeScript strict · Tailwind v4 · pnpm · Node 24 (via fnm, see `.node-version`)

## Run

```bash
pnpm install
pnpm dev
```

Opens on http://localhost:3000.

## Checks

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
```

## Content

Everything editable lives in `src/content/`:

- `site.ts` — name, hero paragraph, about text, experience, contact links, canonical URL.
- `projects.ts` — the project list. Each entry needs a unique `slug`; covers go in `public/projects/`.

Pages: `/` (hero + project grid), `/projects/[slug]`, `/about`. All routes are prerendered at build time.

## Design rules

Tokens are defined once in `src/app/globals.css`. Keep to the six neutral colours, 5px radius, weight 400, serif at 13px only. The full reference is in `DESIGN.md`.
