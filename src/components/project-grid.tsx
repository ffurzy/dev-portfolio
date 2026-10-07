import type { Project } from "@/content/projects";
import { ProjectTile } from "@/components/project-tile";

type ProjectGridProps = {
  projects: Project[];
  className?: string;
};

export function ProjectGrid({ projects, className = "" }: ProjectGridProps) {
  return (
    <ul
      className={`grid grid-cols-1 gap-x-[40px] gap-y-[40px] sm:grid-cols-2 sm:gap-y-element lg:grid-cols-3 lg:gap-x-gutter ${className}`}
    >
      {projects.map((project) => (
        <ProjectTile key={project.slug} project={project} />
      ))}
    </ul>
  );
}
