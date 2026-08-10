import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { ResortComparisonClient } from "./resort-comparison-client"

export const metadata = buildMetadata({
  path: "/planning-tools/resort-comparison/",
  title: "Mexico & Punta Cana Wedding Resort Comparison Calculator",
  description:
    "For U.S. and Canadian families, compare two Indian destination-wedding resort proposals across Mexico or Punta Cana, including known host costs, room-block exposure, cultural needs, and written terms.",
  keywords:
    "Mexico Indian wedding resort comparison, Punta Cana wedding resort checklist, destination wedding room block questions, Indian wedding outside vendor fees",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Resort Proposal Calculator", url: "/planning-tools/resort-comparison/" },
])

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Mexico and Punta Cana Wedding Resort Proposal Comparison Calculator",
  url: "https://www.ceremonyverse.com/planning-tools/resort-comparison/",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  description: "A free client-entered comparison for two resort proposals, known host costs, room-block exposure, cultural requirements, and written terms.",
}

const sections = [
  {
    title: "Room block and guest costs",
    questions: [
      "What minimum room nights or room count must the group guarantee?",
      "Which room categories, occupancy limits, child policies, and single-occupancy rates apply?",
      "What deposit schedule, attrition, cancellation, and unused-room liability apply?",
      "Are complimentary rooms or concessions cash credits, upgrades, or limited-use benefits?",
      "What happens when guests book outside the block or through another website?",
    ],
  },
  {
    title: "Events, food, and cultural requirements",
    questions: [
      "Which venues and hours are included for each ceremony or event?",
      "What are the food-and-beverage minimums, per-person upgrades, service charges, and taxes?",
      "Can the culinary team provide Indian food, Jain food, no-onion/no-garlic meals, and separate preparation when required?",
      "Are outside caterers allowed, and what kitchen, staffing, transportation, or vendor fees apply?",
      "Which ceremony requirements need written resort approval, including fire, baraat, music, mandap, and late-night events?",
    ],
  },
  {
    title: "Decor, production, and outside vendors",
    questions: [
      "Which decor, sound, lighting, staging, power, rigging, and labor are included versus separately charged?",
      "Is there a required in-house vendor list or an outside-vendor fee for each category?",
      "What delivery windows, loading access, storage, setup, strike, and overtime rules apply?",
      "Are rehearsals, site visits, tastings, mockups, and vendor meals included or separately billed?",
      "Who is responsible for damage deposits, permits, insurance certificates, and resort approvals?",
    ],
  },
  {
    title: "Weather, access, and guest experience",
    questions: [
      "What is the written rain, wind, heat, and indoor-backup plan for every outdoor event?",
      "When must a weather decision be made, who makes it, and what relocation or reset fees can apply?",
      "How far are guest rooms from event spaces, and what accessibility or mobility support is available?",
      "What airport, transfer, check-in, welcome-desk, luggage, and late-arrival limitations should guests know?",
      "What construction, renovation, competing groups, curfews, beach conditions, or seasonal closures are expected?",
    ],
  },
]

export default function ResortComparisonPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-calculator" data={calculatorSchema} />
      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">For families across the USA &amp; Canada</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Resort Proposal Comparison Calculator</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#e8dfd2]">
            Enter the figures and terms from two written resort proposals. The calculator keeps host-paid costs separate from room-block exposure and shows which important answers are still missing.
          </p>
        </div>
      </section>

      <ResortComparisonClient />

      <section className="bg-[#f0ebe3] px-6 py-20 print:hidden">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Before a deposit</p>
            <h2 className="font-serif text-4xl font-semibold">Questions the numbers cannot answer</h2>
            <p className="mt-4 leading-7 text-[#4d403a]">Ask both resorts the same questions and keep each answer with the proposal or contract section that supports it.</p>
          </div>
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-[#e6dfd5] bg-white p-7 sm:p-10">
              <h2 className="font-serif text-3xl font-semibold">{section.title}</h2>
              <ol className="mt-6 space-y-4">
                {section.questions.map((question, index) => (
                  <li key={question} className="grid gap-3 border-t border-[#eee7dd] pt-4 sm:grid-cols-[36px_1fr]">
                    <span className="font-semibold text-[#7a6841]">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="leading-7 text-[#4d403a]">{question}</p>
                      <div className="mt-3 h-8 border-b border-dashed border-[#c7bcae] print:h-12" aria-hidden="true" />
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact/?service=mexico&from=resort-calculator" className="rounded-full bg-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-white">Request a Private Resort Review</Link>
            <Link href="/planning-tools/budget/" className="rounded-full border border-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-[#7a6841]">Open Budget Builder</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
