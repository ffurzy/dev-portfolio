import Link from "next/link";
import { site } from "@/content/site";

// The last cell of the grid is an invitation, drawn like a project with no artwork yet.
export function ContactTile() {
  const email = site.links.email?.replace(/^mailto:/, "");
  return (
    <li>
      <Link href="/contact" className="group block">
        <div className="rounded-md bg-mist p-[7%] shadow-warm transition-[translate,box-shadow] duration-200 ease-out group-hover:-translate-y-[3px] group-hover:shadow-warm-lift motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
          <div className="flex aspect-[4/3] items-center justify-center rounded-[3px] bg-bone-canvas">
            <span className="text-meta text-ash">Your project could be here</span>
          </div>
        </div>
        <div className="mt-element flex items-baseline justify-between gap-element text-meta">
          <span className="text-ink">Get in touch</span>
          <span className="text-right text-ash">{email}</span>
        </div>
      </Link>
    </li>
  );
}
