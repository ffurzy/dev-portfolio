import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionLabel } from "@/components/section-label";
import { GhostButton } from "@/components/ghost-button";
import { getProjectBySlug, getProjects } from "@/lib/projects";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const meta = [project.year, project.role, project.stack.join(", ")].join(" · ");

  return (
    <article className="mt-section-sm md:mt-section">
      <SectionLabel>Project</SectionLabel>

      <div className="mt-element max-w-[600px]">
        <h1 className="text-subheading text-ink">{project.title}</h1>
        <p className="mt-element text-subheading text-graphite">{project.summary}</p>
        <p className="mt-element text-meta text-ash">{meta}</p>
        {(project.links.live || project.links.source) && (
          <div className="mt-[30px] flex flex-wrap gap-[10px]">
            {project.links.live && (
              <GhostButton href={project.links.live}>Visit site</GhostButton>
            )}
            {project.links.source && (
              <GhostButton href={project.links.source}>Source</GhostButton>
            )}
          </div>
        )}
      </div>

      <div className="mt-section-sm grid gap-element md:mt-section">
        {project.images.map((src, index) => (
          <div
            key={src + index}
            className="relative aspect-[16/10] overflow-hidden rounded-md bg-mist shadow-warm"
          >
            <Image
              src={src}
              alt={`${project.title}, screen ${index + 1}`}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-section-sm max-w-[600px] space-y-element text-body text-graphite md:mt-section">
        {project.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <p className="mt-section-sm text-meta text-ash md:mt-section">
        <Link href="/#projects">← All projects</Link>
      </p>
    </article>
  );
}
