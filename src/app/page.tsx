import { Hero } from "@/components/hero";
import { SectionLabel } from "@/components/section-label";
import { ProjectGrid } from "@/components/project-grid";
import { getProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getProjects();
  return (
    <>
      <Hero />
      <section
        id="projects"
        aria-labelledby="projects-label"
        className="mt-section-sm scroll-mt-[30px] md:mt-section"
      >
        <SectionLabel id="projects-label">
          {projects.length} selected projects
        </SectionLabel>
        <ProjectGrid projects={projects} className="mt-section-sm md:mt-section" />
      </section>
    </>
  );
}
