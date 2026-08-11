import Image from "next/image";
import Link from "next/link";
import { NorthAmericaCoverage } from "@/components/north-america-coverage";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-new-jersey/",
  title: "Indian Wedding Shopping from India — New Jersey",
  description: "New Jersey families in Edison, Iselin, and beyond can source bridal, groom, and family wedding outfits from India with live review and delivery coordination."
});

const serviceSchema = buildServiceSchema({
  name: "New Jersey Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for NRI families in New Jersey \u2014 Edison, Jersey City, Princeton, Iselin, Parsippany \u2014 with US delivery.",
  url: "/indian-wedding-shopping-new-jersey/",
  category: "Indian Wedding Shopping — New Jersey",
  areaServed: "New Jersey, United States",
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
              Indian Wedding Shopping from India <br/>for New Jersey Families
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Compare India-sourced bridal lehengas, sherwanis, and family outfits with New Jersey options using itemized costs, eligible live review, and delivery coordination.
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>

        <NorthAmericaCoverage guideName="New Jersey" />

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg mx-auto text-stone-700">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Wedding Outfit Coordination for New Jersey Families</h2>
            <p className="mb-6">
              Families in <strong>Edison, Iselin, Jersey City, Princeton, and Parsippany</strong> can shop locally or compare those options with remote India sourcing. CeremonyVerse organizes the second path for the full wedding wardrobe: bride, groom, wedding party, parents, siblings, and ceremony-specific looks.
            </p>
            <h3 className="text-2xl font-bold text-stone-900 mt-8 mb-4">How We Help New Jersey Families</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Remote shopping and eligible live item review</li>
              <li>Shared style, color, measurement, and approval records</li>
              <li>Order timelines organized across wedding ceremonies</li>
              <li>Pre-shipping review and tracked-delivery coordination</li>
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

            <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
              <h3 className="text-2xl font-bold text-stone-900 mb-3">Looking only for a bridal lehenga?</h3>
              <p className="mb-3">
                Our NY–NJ bridal-wear guide focuses specifically on comparing local bridal shopping with custom lehenga sourcing from India.
              </p>
              <Link className="font-semibold text-amber-700 underline underline-offset-4" href="/indian-bridal-wear-new-york-new-jersey/">
                Read the NY &amp; NJ bridal-wear guide
              </Link>
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
