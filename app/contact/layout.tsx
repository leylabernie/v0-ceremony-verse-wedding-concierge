import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Free Indian Wedding Consultation | CeremonyVerse",
  description: "Schedule a free 30-minute consultation with CeremonyVerse. Tell us about your Indian wedding vision and we'll prepare a tailored sourcing proposal — bridal lehengas, sherwanis, jewelry, and more sourced directly from India.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/contact",
  },
  keywords: "book indian wedding consultation, free wedding consultation, NRI wedding planner, bridal lehenga consultation, indian wedding concierge booking",
  openGraph: {
    title: "Book Your Free Indian Wedding Consultation | CeremonyVerse",
    description: "Schedule a free 30-minute consultation with CeremonyVerse. Tell us about your Indian wedding vision and we'll prepare a tailored sourcing proposal.",
    type: "website",
    url: "https://www.ceremonyverse.com/contact",
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
