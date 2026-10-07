import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectTileProps = {
  project: Project;
};

export function ProjectTile({ project }: ProjectTileProps) {
  return (
    <li>
      <Link href={`/projects/${project.slug}`} className="group block">
        {/* Mat frame: the artwork sits inside a mist surface, like a print in a mount. */}
        <div className="rounded-md bg-mist p-[7%] shadow-warm transition-[translate,box-shadow] duration-200 ease-out group-hover:-translate-y-[3px] group-hover:shadow-warm-lift motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[3px]">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-element flex items-baseline justify-between gap-element text-meta">
          <span className="text-ink">{project.title}</span>
          <span className="text-right text-ash">{project.credit}</span>
        </div>
      </Link>
    </li>
  );
}
