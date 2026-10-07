import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  id?: string;
};

// The single serif moment in the system. Never larger than 13px.
export function SectionLabel({ children, id }: SectionLabelProps) {
  return (
    <h2 id={id} className="font-serif text-caption text-ash">
      {children}
    </h2>
  );
}
