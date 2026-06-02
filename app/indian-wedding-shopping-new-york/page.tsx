import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Wedding Shopping in New York | CeremonyVerse",
  description: "Expert Indian wedding outfit shopping concierge for brides in New York. We handle sourcing, coordination, and logistics for NY brides.",
  openGraph: {
    title: "Indian Wedding Shopping in New York | CeremonyVerse",
    description: "Expert Indian wedding outfit shopping concierge for brides in New York.",
    url: "https://www.ceremonyverse.com/indian-wedding-shopping-new-york",
    siteName: "CeremonyVerse",
    images: [
      {
        url: "https://www.ceremonyverse.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Wedding Shopping in New York | CeremonyVerse",
    description: "Expert Indian wedding outfit shopping concierge for brides in New York.",
  },
  alternates: {
    canonical: "https://www.ceremonyverse.com/indian-wedding-shopping-new-york",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CeremonyVerse - NY Wedding Shopping",
  "image": "https://www.ceremonyverse.com/og-image.jpg",
  "url": "https://www.ceremonyverse.com/indian-wedding-shopping-new-york",
  "telephone": "+1-555-019-2834",
  "areaServed": {
    "@type": "State",
    "name": "New York"
  },
  "description": "Expert Indian wedding outfit shopping concierge for brides in New York. We handle sourcing, coordination, and logistics.",
  "priceRange": "$$$",
  "serviceType": "Wedding Shopping Concierge"
};

export default function NewYorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <div className="bg-white">
        <div className="relative bg-stone-900 text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/hero-ny.jpg" 
              alt="Indian wedding shopping in New York"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Indian Wedding Shopping in New York
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your personal shopping concierge for Indian wedding outfits. We source, coordinate, and manage logistics for NY brides.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg mx-auto text-stone-700">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Serving New York Brides</h2>
            <p className="mb-6">
              Planning an Indian wedding in New York? From Queens to Manhattan, we help NRIs and local brides navigate the complex world of Indian wedding attire. Our shopping concierge service handles everything from vendor selection to final alterations.
            </p>
            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">How We Help NY Brides</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Virtual and in-person shopping coordination</li>
              <li>Vendor management across India and the US</li>
              <li>Timeline management for all ceremonies</li>
              <li>Logistics and shipping coordination</li>
            </ul>
            
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
              >
                Start Your Shopping Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
