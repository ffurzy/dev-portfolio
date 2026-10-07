import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-section-sm md:pt-section">
      <p className="mx-auto max-w-[600px] text-center text-subheading text-graphite">
        There is nothing at this address.{" "}
        <Link href="/" className="text-ash">
          Back to the projects.
        </Link>
      </p>
    </section>
  );
}
