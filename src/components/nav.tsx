import Link from "next/link";
import { site } from "@/content/site";
import { Monogram } from "@/components/monogram";

export function Nav() {
  return (
    <header className="flex items-center justify-between py-[30px]">
      <Link href="/" aria-label={`${site.name} — home`} className="flex items-center">
        <Monogram />
      </Link>
      <nav aria-label="Primary" className="flex gap-element text-meta text-ash">
        <Link href="/#projects">Projects</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
