import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free NRI Wedding Planning Guides | CeremonyVerse",
  description: "Download free Indian wedding planning guides — price guide, outfit checklist, planning timeline, and vendor red flags. For NRI brides and families sourcing from India.",
  alternates: {
    canonical: "https://ceremonyverse.com/free-guides",
  },
  openGraph: {
    title: "Free NRI Wedding Planning Guides | CeremonyVerse",
    description: "Download free Indian wedding planning guides — price guide, outfit checklist, planning timeline, and vendor red flags. For NRI brides and families sourcing from India.",
    type: "website",
    url: "https://ceremonyverse.com/free-guides",
    images: [
      {
        url: "https://ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
};

export default function FreeGuidesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
