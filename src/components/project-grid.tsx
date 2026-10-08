import type { Project } from "@/content/projects";
import { ProjectTile } from "@/components/project-tile";
import { ContactTile } from "@/components/contact-tile";

type ProjectGridProps = {
  projects: Project[];
  /** Append an invitation tile as the last cell. */
  withContact?: boolean;
  className?: string;
};

// With fewer than three cells a three-column row looks unfinished,
// so the grid tops out at two columns until the third one lands.
const threeColumns = "sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-gutter";
const twoColumns = "sm:grid-cols-2 sm:gap-x-gutter";

export function ProjectGrid({
  projects,
  withContact = false,
  className = "",
}: ProjectGridProps) {
  const cells = projects.length + (withContact ? 1 : 0);
  const columns = cells >= 3 ? threeColumns : twoColumns;
  return (
    <ul className={`grid grid-cols-1 gap-x-[40px] gap-y-[100px] ${columns} ${className}`}>
      {projects.map((project) => (
        <ProjectTile key={project.slug} project={project} />
      ))}
      {withContact && <ContactTile />}
    </ul>
  );
}
