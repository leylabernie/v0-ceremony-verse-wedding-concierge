import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-new-jersey/",
  title: "Indian Wedding Shopping from India \u2014 New Jersey NRI Families",
  description: "New Jersey NRI families: source bridal lehengas, sherwanis, and Indian wedding outfits directly from India \u2014 live video shopping, custom stitching, delivered to your NJ door."
});

const serviceSchema = buildServiceSchema({
  name: "New Jersey Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for NRI families in New Jersey \u2014 Edison, Jersey City, Princeton, Iselin, Parsippany \u2014 with US delivery.",
  url: "/indian-wedding-shopping-new-jersey/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "New Jersey NRI Families", url: "/indian-wedding-shopping-new-jersey/" },
]);

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CeremonyVerse - NJ Wedding Shopping",
  "image": "https://www.ceremonyverse.com/og-image.jpg",
  "url": "https://www.ceremonyverse.com/indian-wedding-shopping-new-jersey",
  "telephone": "+1 (215) 341-9990",
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "description": "Expert Indian wedding outfit shopping concierge for brides in New Jersey. We handle sourcing, coordination, and logistics.",
  "priceRange": "$$$",
  "serviceType": "Wedding Shopping Concierge",
  "email": "bhamini@ceremonyverse.com",
  "sameAs": [
    "https://www.instagram.com/ceremonyverse",
    "https://www.pinterest.com/ceremonyverse",
    "https://www.tiktok.com/@ceremonyverse",
    "https://wa.me/12153419990"
  ]
};

export default function NewJerseyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/hero-nj.jpg" 
              alt="Indian wedding shopping in New Jersey"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Indian Wedding Shopping in New Jersey: <br/>Buy Directly from India
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Skip the high markups in Edison. We source your dream bridal lehenga, sherwani, and family outfits directly from India with live video approval and door-to-door delivery in NJ.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg mx-auto text-stone-700">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Why NJ Brides Choose CeremonyVerse</h2>
            <p className="mb-6">
              New Jersey is home to some of the largest Indian communities in the USA, but local boutiques often have limited collections and high markups. Whether you are in <strong>Edison, Jersey City, Princeton, or Parsippany</strong>, CeremonyVerse gives you direct access to the latest 2026 bridal trends from India without the $3,000 flight.
            </p>
            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">How We Help NJ Brides</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Virtual and in-person shopping coordination</li>
              <li>Vendor management across India and the US</li>
              <li>Timeline management for all ceremonies</li>
              <li>Logistics and shipping coordination</li>
            </ul>
            
            <h3 className="text-2xl font-bold text-stone-900 mt-12 mb-6">What NJ Brides Say</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                <p className="text-stone-700 mb-4 italic">"Bhamini made the entire process stress-free. I was so worried about getting scammed, but the live video shopping sessions gave me complete confidence. My lehenga arrived perfectly fitted."</p>
                <p className="font-semibold text-stone-900">— Swati, Jersey City</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                <p className="text-stone-700 mb-4 italic">"Coordinating outfits for 12 bridesmaids across different states seemed impossible. CeremonyVerse handled everything with such professionalism. Highly recommend!"</p>
                <p className="font-semibold text-stone-900">— Karan & Sonal, Edison</p>
              </div>
            </div>
            
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
