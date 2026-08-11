import Link from "next/link"
import { NorthAmericaCoverage } from "@/components/north-america-coverage"
import {
  JsonLd,
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
  buildServiceSchema,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-canada/",
  title: "Indian Wedding Shopping from India — Canada",
  description:
    "Canada-wide Indian wedding outfit sourcing with eligible live review, written approvals, tracked-shipping coordination, and itemized customs planning.",
  keywords:
    "Indian wedding shopping Canada, bridal lehenga Canada, sherwani Canada, Indian wedding outfits Toronto, Indian wedding outfits Vancouver, India wedding sourcing Canada",
})

const serviceSchema = buildServiceSchema({
  name: "Canada Indian Wedding Shopping and Sourcing",
  description:
    "Remote India wedding shopping for families across every Canadian province and territory, with documented approvals, tracked-shipping coordination, and itemized customs planning.",
  url: "/indian-wedding-shopping-canada/",
  category: "Indian Wedding Shopping — Canada",
  areaServed: "Canada",
  offers: [
    {
      name: "Style Guide & Vendor List",
      price: 249,
      description: "A curated starting point for families managing their own orders and shipment.",
    },
    {
      name: "Guided Sourcing",
      price: 799,
      description: "Live shopping and order coordination with shipping-document and tracking support.",
    },
    {
      name: "Full Bridal Concierge",
      price: 2499,
      description: "End-to-end sourcing coordination for the couple and wedding party up to eight people.",
    },
  ],
})

const faqItems = [
  {
    question: "Does CeremonyVerse serve all of Canada?",
    answer:
      "Yes. CeremonyVerse consultations and remote sourcing are available across every Canadian province and territory. A shipment proceeds only after the selected vendor and carrier confirm service to the exact address and the client approves the current written costs and terms.",
  },
  {
    question: "Are Canadian duties, taxes, and brokerage included in the service fee?",
    answer:
      "No. CeremonyVerse service fees are shown in USD. Product cost, international shipping, insurance, duty, GST or HST, applicable provincial tax, brokerage or disbursement charges, alterations, and other destination costs are separate unless the signed agreement expressly includes an item.",
  },
  {
    question: "Does CeremonyVerse guarantee delivery dates or customs clearance?",
    answer:
      "No. CeremonyVerse can coordinate shipment documents, carrier handoff, and available tracking. The vendor, carrier, Canada Border Services Agency, and other authorities control production, transportation, assessment, release, and final delivery timing.",
  },
  {
    question: "Can Canadian families use the CeremonyVerse pricing plans and calculator?",
    answer:
      "Yes. The three standard sourcing service fees are in USD. The North America Shipping & Customs Calculator uses USD entries and separates the service fee from product, shipping, insurance, estimated import charges, brokerage, alterations, and contingency.",
  },
]

const breadcrumbSchema = buildBreadcrumb([
  { name: "Indian Wedding Shopping Canada", url: "/indian-wedding-shopping-canada/" },
])

const faqSchema = buildFaqSchema(faqItems)

const regions = [
  "Ontario",
  "Quebec",
  "British Columbia",
  "Alberta",
  "Manitoba",
  "Saskatchewan",
  "Nova Scotia",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Prince Edward Island",
  "Northwest Territories",
  "Nunavut",
  "Yukon",
]

export default function IndianWeddingShoppingCanadaPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            Canada-wide remote service
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold !text-white sm:text-6xl">
            Indian Wedding Shopping from India for Canadian Families
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 !text-white/80">
            Coordinate bridal, groom, wedding-party, and family outfits through one documented process, with eligible
            live review, written approvals, tracked-shipping coordination, and country-specific customs planning.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=india&from=canada" className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]">
              Schedule Free Consultation
            </Link>
            <Link href="/planning-tools/shipping-customs/" className="rounded-full border border-white/50 px-7 py-4 text-sm font-semibold !text-white">
              Calculate Landed Cost
            </Link>
          </div>
          <p className="mt-6 text-sm leading-6 !text-white/65">
            CeremonyVerse service fees are in USD. Import charges and carrier costs are confirmed separately.
          </p>
        </div>
      </section>

      <NorthAmericaCoverage
        ctaHref="/planning-tools/shipping-customs/"
        ctaLabel="Open Shipping & Customs Calculator"
      />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">One process across Canada</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Local address, itemized import plan</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              The exact destination matters because carrier service, taxes, duties, brokerage, delivery conditions, and
              claim procedures can vary. CeremonyVerse records those items before an approved shipment is released.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Before purchase", "Item references, vendor terms, measurements, service scope, product price, and approval milestone."],
              ["Before shipment", "Declared value, item description, carrier and service level, insurance availability, estimated import charges, and recipient."],
              ["After carrier handoff", "Available tracking, delivery updates, customs requests, and any covered carrier claim coordinated under the signed terms."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Canada import costs</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold">What the quote must separate</h2>
              <p className="mt-5 leading-7 text-[#4d403a]">
                No universal customs percentage is promised. The written shipment plan uses the selected goods,
                declared value, country of origin, destination, and current provider information.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["International shipping", "Carrier, service level, weight, dimensions, declared value, and destination."],
                ["Duty and taxes", "Estimated duty, GST or HST, and any applicable provincial tax; the authority's final assessment controls."],
                ["Brokerage and clearance", "Any broker, courier-disbursement, advancement, remote-area, or related carrier charge stated in the current quote."],
                ["Insurance and claims", "Availability, declared-value limit, exclusions, evidence requirements, deadlines, and responsible claimant."],
              ].map(([title, description]) => (
                <article key={title} className="rounded-xl border border-[#e6dfd5] bg-[#faf8f5] p-6">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#4d403a]">{description}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-8 rounded-xl border border-[#d9cfbf] bg-[#f4eee4] p-5 text-sm leading-6 text-[#4d403a]">
            Canada Border Services Agency determines admissibility, value for duty, classification, duty, and release.
            Review the official{" "}
            <a href="https://www.cbsa-asfc.gc.ca/import/courier/menu-eng.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7a6841] underline">
              CBSA courier-import guidance
            </a>
            . Rates and assessments may change. The recipient must respond to carrier or customs requests and pay amounts
            assigned to the recipient unless the signed agreement expressly says otherwise.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">All provinces and territories</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Canada-wide consultation and sourcing support</h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <span key={region} className="rounded-full border border-[#e6dfd5] bg-white px-5 py-2 text-sm text-[#4d403a]">
                {region}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-sm leading-6 text-[#5e4a40]">
            Remote service is available throughout Canada. Shipment acceptance and delivery conditions remain subject to
            the selected carrier&apos;s current service for the exact address.
          </p>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">Canada FAQ</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold !text-white">Clear answers before you commit</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-2xl border border-white/15 bg-white/5 p-7">
                <h3 className="font-serif text-2xl font-semibold !text-white">{item.question}</h3>
                <p className="mt-4 leading-7 !text-white/75">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
