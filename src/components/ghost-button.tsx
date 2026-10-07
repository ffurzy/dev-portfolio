import Link from "next/link";
import type { ReactNode } from "react";

type GhostButtonProps = {
  href: string;
  children: ReactNode;
};

const className =
  "inline-block rounded-md border border-ink px-[15px] py-[10px] text-meta leading-none text-ink";

function isInternal(href: string): boolean {
  return href.startsWith("/");
}

// Pure outline: 5px radius, 1px ink border, no fill, no shadow.
// Internal routes get client navigation; everything else is a plain anchor.
export function GhostButton({ href, children }: GhostButtonProps) {
  if (isInternal(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
