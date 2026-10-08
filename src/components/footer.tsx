import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-section-sm flex flex-wrap justify-between gap-element py-[30px] text-meta text-ash md:mt-section">
      <span>
        © {year} {site.name}
      </span>
      <nav aria-label="Contact" className="flex gap-element">
        <Link href="/contact">Contact</Link>
        {site.links.github && (
          <a href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {site.links.linkedin && (
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
      </nav>
    </footer>
  );
}
