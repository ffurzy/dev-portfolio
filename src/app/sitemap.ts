import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];
  const projects: MetadataRoute.Sitemap = getProjects().map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));
  return [...pages, ...projects];
}
