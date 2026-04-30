import type { Metadata } from "next";
import Script from "next/script";
import { buildFAQSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Free NRI Wedding Planning Guides | CeremonyVerse",
  description: "Download free Indian wedding planning guides — price guide, outfit checklist, planning timeline, and vendor red flags. For NRI brides and families sourcing from India.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/free-guides",
  },
  openGraph: {
    title: "Free NRI Wedding Planning Guides | CeremonyVerse",
    description: "Download free Indian wedding planning guides — price guide, outfit checklist, planning timeline, and vendor red flags. For NRI brides and families sourcing from India.",
    type: "website",
    url: "https://www.ceremonyverse.com/free-guides",
    images: [
      {
        url: "https://www.ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
};

export default function FreeGuidesLayout({ children }: { children: React.ReactNode }) {
  const faqSchema = buildFAQSchema([
    {
      question: "Are the guides really free?",
      answer: "Yes, completely free. We ask for your email so we can send you the download link and occasional wedding planning tips. You can unsubscribe anytime.",
    },
    {
      question: "Who are these guides for?",
      answer: "NRI brides and families in the US who are planning an Indian wedding and want to source outfits, jewelry, or ceremony items from India. Whether you're just starting to research or actively shopping, there's a guide for your stage.",
    },
    {
      question: "Will I be signed up for marketing emails?",
      answer: "You'll receive a few helpful wedding planning emails after downloading. Every email has a one-click unsubscribe link. We never share your email with third parties.",
    },
  ]);

  return (
    <>
      <Script
        id="faq-schema-free-guides"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />
      {children}
    </>
  );
}
