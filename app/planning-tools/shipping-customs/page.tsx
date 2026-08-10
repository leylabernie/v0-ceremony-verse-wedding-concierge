import { ShippingCustomsClient } from "./shipping-customs-client"
import { JsonLd, buildBreadcrumb, buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/planning-tools/shipping-customs/",
  title: "USA & Canada Wedding Outfit Shipping and Customs Calculator",
  description:
    "Estimate the USD landed cost of India-sourced wedding outfits for delivery across the United States or Canada, including shipping, customs, taxes, brokerage, insurance, and alterations.",
  keywords:
    "India wedding outfit shipping calculator USA Canada, bridal lehenga customs calculator, Canada wedding outfit import cost, Indian clothing duties shipping estimate",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Shipping & Customs Calculator", url: "/planning-tools/shipping-customs/" },
])

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "North America Wedding Outfit Shipping & Customs Calculator",
  url: "https://www.ceremonyverse.com/planning-tools/shipping-customs/",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  description:
    "A free USD landed-cost calculator for India-sourced wedding products delivered to the United States or Canada.",
}

export default function ShippingCustomsPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-calculator" data={calculatorSchema} />
      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">United States &amp; Canada calculator</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-6xl">Wedding Outfit Shipping &amp; Customs Calculator</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
            Separate the CeremonyVerse service fee from products, tracked international shipping, insurance, estimated
            duties or taxes, customs brokerage, local alterations, and contingency. Use current written amounts and keep every entry in USD.
          </p>
        </div>
      </section>
      <ShippingCustomsClient />
    </main>
  )
}
