import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectTileProps = {
  project: Project;
};

export function ProjectTile({ project }: ProjectTileProps) {
  return (
    <li>
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-mist shadow-warm">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-element flex items-baseline justify-between gap-element text-meta">
          <span className="text-ink">{project.title}</span>
          <span className="text-right text-ash">{project.credit}</span>
        </div>
      </Link>
    </li>
  );
}
