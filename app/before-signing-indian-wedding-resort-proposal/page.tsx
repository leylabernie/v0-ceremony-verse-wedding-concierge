import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/before-signing-indian-wedding-resort-proposal/",
  title: "27 Questions Before Signing an Indian Wedding Resort Proposal",
  description:
    "Use this free checklist to compare Mexico and Punta Cana resort proposals for a Gujarati, Hindu, or South Asian destination wedding before you sign.",
  keywords:
    "Indian wedding resort proposal checklist, Gujarati destination wedding Mexico, Punta Cana Indian wedding contract questions, South Asian wedding hidden fees",
})

const sections = [
  {
    number: "01",
    title: "Complete cost and payment",
    introduction: "A resort package is only useful when the full cost, assumptions, timing, and exclusions are clear in writing.",
    questions: [
      "Which ceremony spaces, event hours, guest counts, menus, decor items, and services are included—and which are estimates or upgrades?",
      "What taxes, service charges, administrative fees, vendor fees, gratuities, or mandatory buyouts are additional?",
      "How are extra guests, extra event hours, private spaces, menu upgrades, and late-night functions priced?",
      "What payment schedule applies, who receives each payment, and which amounts are refundable, transferable, or non-refundable?",
      "Which currency, exchange-rate treatment, and quote-expiration date apply to every part of the proposal?",
    ],
  },
  {
    number: "02",
    title: "Rooms, guests, and travel",
    introduction: "Room blocks can shape the wedding budget, guest experience, and event access as much as the ceremony package does.",
    questions: [
      "Which room types, nights, occupancy rules, accessible-room options, and rates are actually held for the group?",
      "What is the booking cut-off, and what happens if inventory, rates, or key dates change before guests reserve?",
      "Is there a minimum stay, pickup requirement, attrition exposure, or financial responsibility if fewer rooms are booked?",
      "Can guests stay outside the block or off property, and if so, what event-access, day-pass, transfer, or added-fee rules apply?",
      "Who owns the guest booking process, travel payments, confirmations, changes, cancellations, and questions?",
    ],
  },
  {
    number: "03",
    title: "Events, spaces, and weather backup",
    introduction: "Ask about the precise event plan, not only a generic venue list or resort image gallery.",
    questions: [
      "Which exact spaces are held for each event, on which date and time, and when are any remaining assignments finalized?",
      "Are the spaces private, exclusive, and adequately sized for the guest count, ceremony format, and production plan?",
      "What comparable indoor or covered weather backup is included, and who decides when it will be used?",
      "What are the sound limits, curfews, duration limits, load-in windows, setup rules, and teardown responsibilities?",
      "What happens if another wedding, resort event, construction activity, or a change in resort operations affects the proposed space?",
    ],
  },
  {
    number: "04",
    title: "Culture, food, and production",
    introduction: "A multi-day Gujarati, Hindu, Sikh, Punjabi, or South Asian celebration needs written operational answers—not only verbal reassurance.",
    questions: [
      "Which ceremonies and traditions can the resort support, including a mehndi, haldi, sangeet or garba, baraat, mandap, pheras, vidai, or reception?",
      "What are the policies for a mandap, horse or baraat processional, dhol, DJ, dance floor, sound, rigging, power, flames, fireworks, and other production?",
      "Who prepares Indian food, and how are vegetarian, Jain, halal, allergy, separate-preparation, tasting, service-hour, and menu requirements handled?",
      "Is outside catering permitted; if so, which access, kitchen, licensing, insurance, equipment, or buyout fees apply?",
      "Which family, officiant, planner, catering, and resort decisions must be approved in writing—and by what date?",
    ],
  },
  {
    number: "05",
    title: "Vendors and wedding-week operations",
    introduction: "A beautiful proposal still needs a clear operating plan with accountable owners.",
    questions: [
      "Which outside vendors are permitted, and what insurance, paperwork, arrival, access, equipment, or vendor-fee requirements apply to each?",
      "Who is the named wedding coordinator, what does that role include, and who is available on site during each event?",
      "Who manages guest arrivals, transfers, rooming questions, luggage, elderly or accessibility needs, and urgent family issues?",
      "What written timeline, floor plan, menu confirmation, vendor schedule, and final contact list will be provided before wedding week?",
    ],
  },
  {
    number: "06",
    title: "Changes, cancellations, and final commitments",
    introduction: "The final questions clarify the risk that remains after the celebration is described.",
    questions: [
      "What is the process and financial effect if dates, guest counts, rooms, event spaces, menus, or vendors must change?",
      "What terms apply to cancellations, force-majeure events, refunds, credits, rescheduling, and vendor non-performance?",
      "Which promises, exceptions, concessions, and answers must be added to the final written agreement before the family signs?",
    ],
  },
] as const

const faqs = [
  {
    question: "Is this checklist a legal or travel review?",
    answer:
      "No. It is a planning tool for organizing questions. A resort, travel provider, local planner, lawyer, insurance professional, or other qualified adviser should answer matters within their own expertise and review any binding agreement.",
  },
  {
    question: "Can we use this for Mexico and Punta Cana?",
    answer:
      "Yes. The questions are designed for a multi-day South Asian destination wedding in Mexico or Punta Cana. The answers, fees, provider roles, and contract terms depend on the actual resort, destination, dates, and written proposal.",
  },
  {
    question: "What should we do if we are comparing two proposals?",
    answer:
      "Put the answers next to the same guest count, event plan, room assumptions, and budget categories. CeremonyVerse can help organize a comparison after the free consultation through the Destination Wedding Feasibility & Action Plan.",
  },
]

const breadcrumbSchema = buildBreadcrumb([
  { name: "Free Guides", url: "/free-guides/" },
  { name: "27 Questions Before Signing", url: "/before-signing-indian-wedding-resort-proposal/" },
])
const faqSchema = buildFaqSchema(faqs)

export default function BeforeSigningIndianWeddingResortProposalPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Free proposal checklist · no email gate</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold !text-white sm:text-6xl">27 questions to ask before signing an Indian wedding resort proposal</h1>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 !text-white/80">
            Use this practical checklist to compare Mexico or Punta Cana proposals for a Gujarati, Hindu, Sikh, Punjabi, or South Asian destination wedding. The right answer is the written one—not a brochure headline or a verbal promise.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=feasibility&from=proposal-checklist-hero" className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]">
              Bring Your Questions to a Free Consultation
            </Link>
            <Link href="/planning-tools/resort-comparison/" className="rounded-full border border-white/55 px-7 py-4 text-sm font-semibold !text-white">
              Compare Two Proposals
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Use this before the next call</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Get the answers in writing, then compare the same assumptions</h2>
          <p className="mt-5 text-lg leading-8 text-[#4d403a]">
            Bring this list to resort, planner, caterer, and travel conversations. Keep the proposal, room block, menu, event spaces, and vendor rules together so your family can see the complete decision rather than one attractive package line.
          </p>
        </div>
      </section>

      <section className="border-y border-[#e6dfd5] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-14">
          {sections.map((section) => (
            <section key={section.number} className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#7a6841]">{section.number}</p>
                <h2 className="mt-3 font-serif text-4xl font-semibold">{section.title}</h2>
                <p className="mt-4 leading-7 text-[#4d403a]">{section.introduction}</p>
              </div>
              <ol className="space-y-4">
                {section.questions.map((question, index) => (
                  <li key={question} className="flex gap-4 rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-5 sm:p-6">
                    <span className="font-serif text-2xl font-semibold text-[#7a6841]">{index + 1}</span>
                    <p className="pt-1 leading-7 text-[#4d403a]">{question}</p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Before you commit</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Three questions families ask next</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-[#d9cfbf] bg-white p-7">
                <h3 className="font-serif text-2xl font-semibold">{faq.question}</h3>
                <p className="mt-4 leading-7 text-[#4d403a]">{faq.answer}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-6 text-[#5e4a40]">
            This checklist is planning information, not legal, financial, insurance, immigration, or travel-agent advice. Current provider documents and qualified professionals should be used for binding decisions.
          </p>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0dfbd]">A practical next step</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold !text-white sm:text-5xl">Bring the proposals before you sign them</h2>
          <p className="mt-5 text-lg leading-8 !text-white/85">
            Your first 30-minute consultation is free. If you need a written comparison and action brief after the conversation, the $300 feasibility plan gives you a defined next step before ongoing planning begins.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=feasibility&from=proposal-checklist-final" className="rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]">
              Schedule a Free Consultation
            </Link>
            <Link href="/destination-wedding-feasibility-plan/" className="rounded-full border border-white/60 px-8 py-4 text-sm font-semibold !text-white">
              See What the $300 Plan Includes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
