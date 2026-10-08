import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { projects } from "../src/content/projects";
import { site } from "../src/content/site";

const publicDir = join(__dirname, "..", "public");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

describe("projects", () => {
  it("have unique, url-safe slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(slugPattern);
  });

  it("point to images that exist in public/", () => {
    for (const p of projects) {
      for (const src of [p.cover, ...p.images]) {
        expect(existsSync(join(publicDir, src)), `${p.slug}: ${src}`).toBe(true);
      }
    }
  });

  it("have the copy the pages render", () => {
    for (const p of projects) {
      expect(p.title.trim(), p.slug).not.toBe("");
      expect(p.summary.trim(), p.slug).not.toBe("");
      expect(p.description.length, p.slug).toBeGreaterThan(0);
      expect(p.stack.length, p.slug).toBeGreaterThan(0);
    }
  });

  it("link out over https only", () => {
    for (const p of projects) {
      for (const href of Object.values(p.links)) {
        expect(href, p.slug).toMatch(/^https:\/\//);
      }
    }
  });
});

describe("site", () => {
  it("has a canonical https url without a trailing slash", () => {
    expect(site.url).toMatch(/^https:\/\/[^/]+$/);
  });

  it("has usable contact links", () => {
    expect(site.links.email).toMatch(/^mailto:[^@\s]+@[^@\s]+$/);
    for (const href of [site.links.github, site.links.linkedin]) {
      if (href) expect(href).toMatch(/^https:\/\//);
    }
  });
});
