import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Becomes the canonical and og:url. */
  path: string;
  images?: string[];
};

// Every page needs its own canonical and og tags: metadata set in the root layout is
// inherited as-is, so a shared canonical would mark all pages as copies of the home page.
export function pageMetadata({
  title,
  description,
  path,
  images,
}: PageMetadataInput): Metadata {
  const fullTitle = `${title} — ${site.name}`;
  // Overriding openGraph drops the inherited root opengraph-image, so restore it as the default.
  const ogImages = images ?? ["/opengraph-image"];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ogImages,
    },
  };
}
