import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  const projects = getProjects();
  return (
    <>
      <Hero />
      <section
        id="projects"
        aria-label="Selected projects"
        className="mt-section-sm scroll-mt-[30px] md:mt-section"
      >
        <ProjectGrid projects={projects} withContact />
      </section>
    </>
  );
}
