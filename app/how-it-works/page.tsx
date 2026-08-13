import Link from "next/link"
import {
  JsonLd,
  buildBreadcrumb,
  buildFaqSchema,
  buildHowToSchema,
  buildMetadata,
  buildServiceSchema,
} from "@/lib/seo"
import { destinationFeasibilityCredit, destinationFeasibilityPlan } from "@/lib/destination-feasibility-plan"

export const metadata = buildMetadata({
  path: "/how-it-works/",
  title: "How CeremonyVerse Works: Consultation to Wedding Closeout",
  description:
    "Follow the CeremonyVerse process from a free consultation through a written scope, destination decisions, family coordination, wedding-week execution, and closeout.",
})

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Destination Planning and India Outfit Sourcing",
  description:
    "A documented client process for Gujarati and Hindu destination-wedding planning across Mexico and Punta Cana, with optional paid India wedding-outfit sourcing.",
  url: "/how-it-works/",
  category: "Destination Wedding Planning and India Outfit Sourcing",
  areaServed: ["United States", "Canada", "Mexico", "Dominican Republic"],
})

const phases = [
  {
    name: "Before the planning contract",
    steps: [
      ["Start here", "Short website registration", "Submit essential contact, timing, destination, and guest-count details. Scheduling access and the pre-call questionnaire are provided automatically; there is no prior approval gate."],
      ["Immediately after registration", "Request a time and complete the questionnaire", "Request your free consultation time, then complete the short pre-call questionnaire before the call. Most questions are optional and the same-browser registration details are prefilled."],
      ["First conversation", "Free 30-minute consultation", "Discuss dates, destination ideas, guest origins, event count, Gujarati or Hindu requirements, accessibility, food, what the budget must cover, and whether India outfit sourcing is needed."],
      ["After the call", "Written next-step recommendation", "CeremonyVerse explains whether a free resource, the separate $300 feasibility plan, a planning package, or an India-sourcing scope is the appropriate next step. No paid work begins automatically."],
      ["When feasibility needs proof", "$300 feasibility plan, if selected", "CeremonyVerse reviews the agreed figures and current written information, holds the working session, and delivers the written action brief under the published terms."],
    ],
  },
  {
    name: "Contract and active planning",
    steps: [
      ["Planning begins here", "Proposal, contract and first payment", "The proposal identifies deliverables, exclusions, staffing, CeremonyVerse fees, known third-party costs, payment milestones, change rules, and cancellation terms. Planning begins only after the contract and required first payment."],
      ["Immediately after activation", "Kickoff and responsibility map", "Confirm decision-makers, approvals, communication cadence, shared checklist, document locations, and target calendar. Resort, planning, travel, transfer, vendor, sourcing, and family responsibilities receive named owners."],
      ["Early planning", "Destination and resort comparison", "Compare event spaces, room-block terms, concessions, vendor rules, Indian and Jain food needs, fire rules, accessibility, transfers, weather backup, and complete written cost."],
      ["Before resort deposits", "Resort, venue and room-block decision", "Organize the open questions and decision record before approval. The resort or qualified provider issues its own contract, booking terms, deposit request, and guest booking process."],
      ["Throughout planning", "Event plan, design and vendor decisions", "Move timelines, cultural requirements, menus, design, décor, production, entertainment, beauty, photography, and vendor quotes through written review and approval."],
      ["After the room block opens", "Guest information, booking and arrivals", "When included, CeremonyVerse organizes agreed guest information, family updates, deadline reminders, welcome details, and rooming or arrival records while the applicable providers handle bookings and payments."],
      ["When wardrobe dates are set", "India outfit sourcing, if contracted", "Coordinate the approved wardrobe brief, eligible live reviews, measurements, written approvals, order follow-up, available pre-shipping review, and delivery tracking. Products and outside costs remain separate."],
    ],
  },
  {
    name: "Finalization, wedding week and closeout",
    steps: [
      ["As the wedding approaches", "Final confirmations and master plan", "Reconcile final counts, menus, rooming information, arrivals, vendor schedules, balances, seating, ceremony needs, weather plans, emergency contacts, and the final run of show."],
      ["On site", "Wedding-week execution", "The contracted destination team completes the final walkthrough and coordinates provider arrivals, setup, event transitions, timelines, guest-facing information, and issue escalation for the signed scope."],
      ["After the final event", "Closeout and debrief", "Track agreed rental returns, outstanding provider items, lost-and-found, remaining deliverables, and post-event records before the engagement closes."],
    ],
  },
]

const allSteps = phases.flatMap((phase) => phase.steps)
const breadcrumbSchema = buildBreadcrumb([{ name: "How It Works", url: "/how-it-works/" }])
const howToSchema = buildHowToSchema({
  name: "How CeremonyVerse Works from Consultation to Wedding Closeout",
  description: "A destination-wedding planning path from the free consultation through wedding closeout.",
  url: "/how-it-works/",
  steps: allSteps.map(([, name, text]) => ({ name, text })),
})

const faqItems = [
  {
    question: "Do we have to use both destination planning and India sourcing?",
    answer: "No. Either service can be selected independently. A combined private proposal is used only when the family wants both destination-wedding support and India outfit sourcing organized together.",
  },
  {
    question: "What happens after the free consultation?",
    answer: `CeremonyVerse recommends the next appropriate step in writing. That may be a free resource, the separate $300 Destination Wedding Feasibility & Action Plan, a planning package, or an India-sourcing scope. ${destinationFeasibilityCredit}`,
  },
  {
    question: "When does CeremonyVerse planning officially begin?",
    answer: "Planning begins after the CeremonyVerse destination-planning contract is signed and the required first payment is received. The contract identifies the selected package, responsibilities, exclusions, fees, payment milestones, change rules, and outside costs.",
  },
  {
    question: "Who handles rooms, flights, guest payments, and airport transfers?",
    answer: "The applicable resort or qualified travel or transfer provider handles its own bookings, payments, travel changes, and transportation confirmations. CeremonyVerse organizes only the responsibilities included in its signed planning scope.",
  },
]
const faqSchema = buildFaqSchema(faqItems)

export default function HowItWorksPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">From first registration to final closeout</p>
          <h1 className="font-serif text-4xl font-semibold !text-white sm:text-6xl">See exactly how CeremonyVerse works with you</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 !text-white/75">Begin with a free 30-minute consultation. Paid planning starts only after written terms, a signed contract, and the required first payment.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=mexico&from=how-it-works" className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]">Schedule Free Consultation</Link>
            <Link href="/planning-tools/" className="rounded-full border border-white/50 px-7 py-4 text-sm font-semibold !text-white">Use Free Planning Calculators</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">The complete client journey</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Consultation, contract, planning, wedding and closeout</h2>
          </div>
          <div className="space-y-12">
            {phases.map((phase, phaseIndex) => {
              const previousCount = phases.slice(0, phaseIndex).reduce((total, item) => total + item.steps.length, 0)
              return (
                <section key={phase.name} className="rounded-3xl border border-[#d9cfbf] bg-[#f4eee4] p-6 sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Phase {phaseIndex + 1}</p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{phase.name}</h3>
                  <ol className="mt-7 grid gap-5 lg:grid-cols-2">
                    {phase.steps.map(([timing, name, text], stepIndex) => (
                      <li key={name} className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-7">
                        <div className="flex items-start justify-between gap-4">
                          <span className="font-serif text-3xl font-semibold text-[#7a6841]">{String(previousCount + stepIndex + 1).padStart(2, "0")}</span>
                          <span className="rounded-full bg-[#f4eee4] px-3 py-1 text-right text-xs font-semibold text-[#7a6841]">{timing}</span>
                        </div>
                        <h4 className="mt-4 font-serif text-2xl font-semibold">{name}</h4>
                        <p className="mt-3 leading-7 text-[#4d403a]">{text}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#7a6841] bg-[#f4eee4] p-7 sm:p-10">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Optional paid starting plan</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">{destinationFeasibilityPlan.name} — {destinationFeasibilityPlan.priceLabel}</h2>
              <p className="mt-4 max-w-4xl leading-7 text-[#4d403a]">Use the free call to confirm the right starting point. Choose the paid plan when you need a written decision brief before committing to full planning.</p>
              <p className="mt-4 max-w-4xl text-sm font-semibold leading-6 text-[#7a6841]">{destinationFeasibilityCredit}</p>
            </div>
            <Link href={destinationFeasibilityPlan.href} className="inline-flex justify-center rounded-full bg-[#7a6841] px-7 py-3.5 text-sm font-semibold text-white">Review the $300 Plan</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f0ebe3] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Before you begin</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Common process questions</h2>
          </div>
          <div className="space-y-4">
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
          <h2 className="font-serif text-4xl font-semibold !text-white sm:text-5xl">Bring the facts you already have. You will not be asked to start over.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 !text-white/85">CeremonyVerse reviews the timeframe, guest and event counts, destination ideas, budget scope, and open questions before explaining any separate paid next step.</p>
          <Link href="/contact/?service=mexico&from=how-it-works-final" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]">Schedule Free Consultation</Link>
        </div>
      </section>
    </main>
  )
}
