import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  id?: string;
  /** "h1" for the page's top label so every page has exactly one h1. */
  as?: "h1" | "h2";
};

// The single serif moment in the system. Never larger than 13px.
export function SectionLabel({ children, id, as: Tag = "h2" }: SectionLabelProps) {
  return (
    <Tag id={id} className="font-serif text-caption text-ash">
      {children}
    </Tag>
  );
}
