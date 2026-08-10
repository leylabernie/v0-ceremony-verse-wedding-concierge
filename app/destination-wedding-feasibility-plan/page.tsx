import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import {
  destinationFeasibilityCredit,
  destinationFeasibilityPlan,
} from "@/lib/destination-feasibility-plan"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, buildServiceSchema, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: destinationFeasibilityPlan.href,
  title: "$300 Destination Wedding Feasibility Plan",
  description:
    "Turn your guest count, events, travel obligations, working budget, and current proposals into a written destination-wedding action plan for Mexico or Punta Cana.",
  keywords:
    "destination wedding feasibility plan, Indian destination wedding consultation, Mexico wedding budget review, Punta Cana wedding planning consultation, Gujarati destination wedding planning",
})

const serviceSchema = buildServiceSchema({
  name: destinationFeasibilityPlan.name,
  description: destinationFeasibilityPlan.description,
  url: destinationFeasibilityPlan.href,
  category: "Destination Wedding Feasibility and Planning",
  areaServed: "Mexico and Punta Cana",
  offers: [
    {
      name: destinationFeasibilityPlan.name,
      price: destinationFeasibilityPlan.price,
      description: destinationFeasibilityPlan.description,
    },
  ],
})

const breadcrumbSchema = buildBreadcrumb([
  { name: destinationFeasibilityPlan.name, url: destinationFeasibilityPlan.href },
])

const faqItems = [
  {
    question: "Is the free call still available?",
    answer:
      "Yes. Start with a free 30-minute fit call. The call confirms whether CeremonyVerse serves the destination, wedding type, timeframe, and help requested. The paid plan begins only after the written scope and payment terms are accepted.",
  },
  {
    question: "Is the $300 fee refundable?",
    answer: destinationFeasibilityCredit,
  },
  {
    question: "Does the plan tell us which resort to book?",
    answer:
      "The plan can compare current written information and identify which options deserve further review. It is not a resort quote, availability confirmation, or booking authorization. A resort should not be selected until its current written proposal, policies, and contract terms are reviewed.",
  },
  {
    question: "Will CeremonyVerse tell us that our budget is guaranteed to work?",
    answer:
      "No. The plan uses the couple's own figures and available current documents to identify feasibility questions, pressure points, and next decisions. Resort, vendor, travel, currency, tax, and service-charge changes prevent any responsible guarantee.",
  },
]

export default function DestinationWeddingFeasibilityPlanPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={buildFaqSchema(faqItems)} />
      <SeoNav />

      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            A paid decision plan—not a paid sales call
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight !text-white sm:text-6xl">
            Know what needs to be true before you commit
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 !text-white/80">
            The {destinationFeasibilityPlan.name} turns the facts you already have into a written path forward
            for a Gujarati or Hindu destination wedding across Mexico or in Punta Cana.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={destinationFeasibilityPlan.contactHref}
              className="inline-flex rounded-full bg-[#c5a059] px-8 py-4 text-sm font-semibold !text-[#1f1f1f]"
            >
              Start with the Free Fit Call
            </Link>
            <span className="text-sm !text-white/70">No payment is collected through the inquiry form.</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-3xl border border-[#d9cfbf] bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">One-time service fee</p>
            <p className="mt-5 font-serif text-6xl font-semibold">{destinationFeasibilityPlan.priceLabel}</p>
            <p className="mt-5 leading-7 text-[#4d403a]">{destinationFeasibilityPlan.bestFor}</p>
            <div className="mt-7 rounded-2xl bg-[#f4eee4] p-5 text-sm leading-6 text-[#4d403a]">
              {destinationFeasibilityCredit}
            </div>
          </article>

          <article className="rounded-3xl border border-[#d9cfbf] bg-white p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">What you receive</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">A decision you can use after the call</h2>
            <ul className="mt-7 space-y-4 leading-7 text-[#4d403a]">
              {destinationFeasibilityPlan.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="font-semibold text-[#7a6841]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Simple path</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Free fit call → paid plan → informed decision</h2>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Free 30-minute fit call", "We listen first, confirm fit, and identify which facts or documents are needed. The call is not the paid deliverable."],
              ["02", "$300 working plan", "After you approve the written scope, we review your numbers and current information, hold the working session, and prepare the action brief."],
              ["03", "Choose your next step", "Use the plan on its own, revise the wedding assumptions, or apply the $300 credit toward a CeremonyVerse planning agreement within 30 days."],
            ].map(([number, title, text]) => (
              <li key={number} className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-7">
                <span className="font-semibold text-[#7a6841]">{number}</span>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#4d403a]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#d9cfbf] bg-white p-8 sm:p-10">
            <h2 className="font-serif text-3xl font-semibold">Bring what you already have</h2>
            <ul className="mt-6 space-y-3 leading-7 text-[#4d403a]">
              <li>• Possible dates and destination ideas</li>
              <li>• Likely and maximum guest counts</li>
              <li>• Event count and non-negotiable ceremonies</li>
              <li>• The total working budget and what it must cover</li>
              <li>• Guest origins and any family-paid rooms, flights, or transfers</li>
              <li>• Up to two current written proposals, if already received</li>
            </ul>
            <Link href="/planning-tools/" className="mt-7 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">
              Use the free calculators first
            </Link>
          </article>

          <article className="rounded-3xl bg-[#1f1f1f] p-8 text-white sm:p-10">
            <h2 className="font-serif text-3xl font-semibold !text-white">What this plan does not include</h2>
            <ul className="mt-6 space-y-3 leading-7 !text-white/75">
              {destinationFeasibilityPlan.excludes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="!text-[#c5a059]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm leading-6 !text-white/65">
              Delivery timing, documents to be reviewed, payment instructions, and any project-specific limits are
              confirmed in writing before payment.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#f0ebe3] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-4xl font-semibold sm:text-5xl">Questions before paying</h2>
          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-2xl border border-[#d9cfbf] bg-white p-6">
                <summary className="cursor-pointer font-semibold">{item.question}</summary>
                <p className="mt-4 leading-7 text-[#4d403a]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold !text-white sm:text-5xl">Start by telling us the facts</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 !text-white/85">
            The free fit call determines whether CeremonyVerse and the {destinationFeasibilityPlan.shortName} match
            what you need. There is no payment or contract required to submit the inquiry.
          </p>
          <Link
            href={destinationFeasibilityPlan.contactHref}
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]"
          >
            Request My Free Fit Call
          </Link>
        </div>
      </section>
    </main>
  )
}
