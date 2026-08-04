import Image from "next/image";
import Link from "next/link";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-new-york/",
  title: "Indian Wedding Shopping from India \u2014 New York NRI Families",
  description: "New York NRI families: source bridal lehengas, sherwanis, and Indian wedding outfits directly from India \u2014 live video shopping, custom stitching, delivered to your NY door."
});

const serviceSchema = buildServiceSchema({
  name: "New York Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for NRI families in New York \u2014 NYC, Long Island, Westchester, Albany, Buffalo \u2014 with US delivery.",
  url: "/indian-wedding-shopping-new-york/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "New York NRI Families", url: "/indian-wedding-shopping-new-york/" },
]);

export default function NewYorkPage() {
  return (
    <>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <div className="bg-white">
        <div className="relative bg-stone-900 text-white py-24">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/hero-lehenga.webp" 
              alt="Indian wedding shopping in New York"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Indian Wedding Shopping in New York: <br/>Buy Directly from India
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Compare India-sourced bridal lehengas, sherwanis, and family outfits with New York options using itemized costs, eligible live review, and delivery coordination.
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg mx-auto text-stone-700">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Why NY Brides Choose CeremonyVerse</h2>
            <p className="mb-6">
              New York is a global hub for Indian fashion, but local boutiques in <strong>Jackson Heights, Queens, and Hicksville</strong> often come with high overhead costs. CeremonyVerse gives you direct access to top artisan workshops in India, ensuring you get authentic craftsmanship without the premium New York price tag.
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
