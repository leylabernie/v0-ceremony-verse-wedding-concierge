import Image from "next/image";
import Link from "next/link";
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

export default function NewJerseyPage() {
  return (
    <>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/hero-lehenga.webp" 
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
              Compare India-sourced bridal lehengas, sherwanis, and family outfits with New Jersey options using itemized costs, eligible live review, and delivery coordination.
            </p>
            <Link
              href="/contact/"
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
            
            <h3 className="text-2xl font-bold text-stone-900 mt-12 mb-6">What the process documents</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                <p className="font-semibold text-stone-900 mb-2">Before purchase</p>
                <p className="text-stone-700">Selected tier, product specifications, vendor price, shipping estimate, customs estimate, and written approval.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                <p className="font-semibold text-stone-900 mb-2">Before shipment</p>
                <p className="text-stone-700">Available pre-shipping review, carrier terms, declared value, tracking plan, and any contracted remedy or alteration allowance.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link
                href="/contact/"
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
