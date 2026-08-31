import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/faq/",
  title: "Destination Wedding Planning & India Outfit Sourcing FAQ",
  description: "Answers about Gujarati and Hindu destination-wedding planning in Mexico, provider responsibilities, pricing, and optional India outfit sourcing.",
})

const faqItems = [
  { question: "Where does CeremonyVerse currently plan destination weddings?", answer: "Current destination-wedding planning is available in Mexico for families throughout the United States and Canada. Availability and the selected destination team are confirmed in writing." },
  { question: "Who handles the wedding at the destination?", answer: "CeremonyVerse is the family-facing coordinator. The contracted destination team handles agreed local planning and on-site execution. Resorts and qualified providers control their own contracts, bookings, payments, and services." },
  { question: "Is a resort package the complete wedding cost?", answer: "Usually not. Extra guests, event hours, private venues, food, production, décor, vendors, planning, rooms, travel, taxes, service charges, cultural requirements, and contingency may be separate." },
  { question: "Is the first consultation free?", answer: "Yes. The first 30-minute consultation is free. No payment or contract is required. Paid planning, the $300 feasibility plan, and India sourcing are separate services offered after written terms are reviewed." },
  { question: "When is the $300 fee credited?", answer: "When an eligible CeremonyVerse destination-planning contract is signed within 30 days after the written plan is delivered, the full $300 is credited toward the CeremonyVerse planning service fee. It does not apply to third-party charges." },
  { question: "Can India outfit sourcing be purchased separately?", answer: "Yes. India wedding-outfit sourcing is a separate paid service and may also be added to a destination-planning scope. Standalone ceremonial-item sourcing is paused until operational requirements are verified." },
  { question: "What can CeremonyVerse help source?", answer: "Depending on vendor availability and the signed scope, CeremonyVerse can help coordinate bridal and groom outfits, wedding-party and family outfits, sarees, blouses, jewelry, approved gifts, welcome-bag pieces, and related accessories." },
  { question: "Are products and shipping included in the sourcing fee?", answer: "No. Products, tailoring, carrier charges, insurance, customs duties, taxes, brokerage, and local alterations are separate unless signed terms expressly include them." },
  { question: "Can CeremonyVerse copy a designer outfit?", answer: "No. CeremonyVerse does not sell unauthorized replicas or counterfeit labels. References may be used to understand silhouette, color, and overall preferences before original options are researched." },
]

const faqSchema = buildFaqSchema(faqItems)
const breadcrumb = buildBreadcrumb([{ name: "FAQ", url: "/faq/" }])

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="faq-schema" data={faqSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumb} />
      <section className="px-6 pb-16 pt-32 text-center sm:pb-24 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[#7a6841]">The Trust Center</p>
          <h1 className="mb-6 font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">Your Questions, Answered</h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#4d403a]">Clear answers about Mexico planning, provider responsibilities, the free consultation, public starting fees, and optional paid India outfit sourcing.</p>
        </div>
      </section>
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {faqItems.map((faq) => (
              <article key={faq.question} className="flex min-h-[260px] flex-col rounded-2xl border border-[#e6dfd5] bg-white p-8 transition-shadow hover:shadow-lg sm:p-10">
                <h2 className="mb-6 font-serif text-xl font-semibold leading-snug sm:text-2xl">{faq.question}</h2>
                <p className="flex-1 leading-7 text-[#4d403a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Bring your specific wedding questions</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">The first 30-minute consultation is free. CeremonyVerse will explain what it can handle, what belongs with other providers, and the clearest next step.</p>
          <Link href="/contact/?service=mexico&from=faq-final" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">Schedule Free Consultation</Link>
        </div>
      </section>
    </main>
  )
}
