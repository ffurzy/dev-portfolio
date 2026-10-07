import { projects, type Project } from "@/content/projects";

// Content is hand-edited, so guard the one invariant routing depends on.
function assertUniqueSlugs(list: Project[]): void {
  const seen = new Set<string>();
  for (const { slug } of list) {
    if (seen.has(slug)) throw new Error(`Duplicate project slug: "${slug}"`);
    seen.add(slug);
  }
}

assertUniqueSlugs(projects);

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
