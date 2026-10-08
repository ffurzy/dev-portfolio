import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

// A missing page is shown as a missing project: an empty tile in the gallery.
export default function NotFound() {
  return (
    <section className="mt-section-sm md:mt-section">
      <p className="mx-auto max-w-[600px] text-center text-subheading text-graphite">
        This page was never built.{" "}
        <Link href="/" className="text-ash">
          Back to the projects.
        </Link>
      </p>
      <div className="mx-auto mt-section-sm max-w-[600px] md:mt-section">
        <div className="rounded-md bg-mist p-[7%] shadow-warm">
          <div className="aspect-[4/3] rounded-[3px] bg-bone-canvas" />
        </div>
        <div className="mt-element flex items-baseline justify-between gap-element text-meta">
          <span className="text-ink">404</span>
          <span className="text-ash">Page not found · {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
