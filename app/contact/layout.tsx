import type { Metadata } from "next";
import Script from "next/script";
import { buildBreadcrumbSchema, buildServiceSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Book Your Free Indian Wedding Consultation | CeremonyVerse",
  description: "Schedule a free 30-minute consultation with CeremonyVerse. Tell us about your Indian wedding vision and we'll prepare a tailored sourcing proposal — bridal lehengas, sherwanis, jewelry, and more sourced directly from India.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/contact",
    languages: {
      "en-US": "https://www.ceremonyverse.com/contact",
      "en-GB": "https://www.ceremonyverse.com/indian-wedding-shopping-uk",
      "en-CA": "https://www.ceremonyverse.com/indian-wedding-shopping-canada",
      "en-AU": "https://www.ceremonyverse.com/indian-wedding-shopping-australia",
      "en-NZ": "https://www.ceremonyverse.com/indian-wedding-shopping-new-zealand",
      "x-default": "https://www.ceremonyverse.com/contact",
    },
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
  twitter: {
    card: "summary_large_image",
    site: "@ceremonyverse",
    title: "Book Your Free Indian Wedding Consultation | CeremonyVerse",
    description: "Schedule a free 30-minute consultation with CeremonyVerse. Tell us about your Indian wedding vision and we'll prepare a tailored sourcing proposal.",
    images: ["https://www.ceremonyverse.com/images/hero-lehenga.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Book Consultation", path: "/contact" },
  ]);

  const serviceSchema = buildServiceSchema({
    name: "Free Indian Wedding Consultation",
    description: "Schedule a free 30-minute consultation with CeremonyVerse. Tell us about your Indian wedding vision and we'll prepare a tailored sourcing proposal — bridal lehengas, sherwanis, jewelry, and more sourced directly from India.",
    path: "/contact",
    priceFrom: "0",
    priceCurrency: "USD",
    areaServed: ["USA", "UK", "Canada", "Australia", "New Zealand"],
  });

  return (
    <>
      <Script
        id="breadcrumb-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
      />
      <Script
        id="service-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }}
      />
      {children}
    </>
  );
}
