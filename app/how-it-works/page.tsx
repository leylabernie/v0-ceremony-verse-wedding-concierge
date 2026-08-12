import Link from "next/link"
import {
  JsonLd,
  buildBreadcrumb,
  buildFaqSchema,
  buildHowToSchema,
  buildMetadata,
  buildServiceSchema,
} from "@/lib/seo"
import {
  destinationFeasibilityCredit,
  destinationFeasibilityPlan,
} from "@/lib/destination-feasibility-plan"

export const metadata = buildMetadata({
  path: "/how-it-works/",
  title: "How CeremonyVerse Works: Consultation to Wedding Closeout",
  description:
    "Follow the CeremonyVerse client process from the free consultation and signed planning contract through resort decisions, guest coordination, wedding-week execution, and closeout.",
  keywords:
    "Indian destination wedding planning process, Gujarati wedding planning Mexico, Punta Cana Indian wedding planning, India wedding sourcing process",
})

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Destination Planning and India Wedding Sourcing",
  description:
    "A documented client process for Gujarati and Hindu destination-wedding planning across Mexico and in Punta Cana, from the first consultation through wedding closeout, with optional India wedding sourcing.",
  url: "/how-it-works/",
  category: "Destination Wedding Planning and India Wedding Sourcing",
  areaServed: ["United States", "Canada", "Mexico", "Punta Cana, Dominican Republic"],
})

const breadcrumbSchema = buildBreadcrumb([{ name: "How It Works", url: "/how-it-works/" }])

type JourneyPhase = {
  name: string
  description: string
  steps: Array<{
    timing: string
    name: string
    text: string
    outcome: string
  }>
}

const journeyPhases: JourneyPhase[] = [
  {
    name: "Before the planning contract",
    description: "Understand the wedding, choose the right starting point, and review every paid term before committing.",
    steps: [
      {
        timing: "Start here",
        name: "Free 30-minute consultation",
        text: "We discuss possible dates and destinations, guest origins and estimated count, the event list, Gujarati or Hindu traditions, accessibility and food needs, what the budget must cover, and whether India sourcing is needed. No payment or contract is required for this call.",
        outcome: "You receive a clear recommendation for the next appropriate step.",
      },
      {
        timing: "After the call",
        name: "Written next-step recommendation",
        text: "CeremonyVerse recommends either the standalone $300 Destination Wedding Feasibility & Action Plan or the planning package that matches what has already been completed and what still needs an owner. You decide whether to proceed after reviewing the written terms.",
        outcome: "There is no automatic enrollment and no paid work begins yet.",
      },
      {
        timing: "When feasibility needs proof",
        name: "$300 feasibility plan, if selected",
        text: "We review the agreed figures and current documents, hold the working session, and deliver the written action brief. When you sign a CeremonyVerse destination-planning contract within 30 days after plan delivery, the full $300 is credited toward your CeremonyVerse planning service fee.",
        outcome: "You may use the plan on its own or continue into full planning.",
      },
    ],
  },
  {
    name: "Contract and active planning",
    description: "The signed scope activates the working relationship, assigns responsibilities, and moves every major decision into one documented plan.",
    steps: [
      {
        timing: "Planning begins here",
        name: "Proposal, contract and first payment",
        text: "Your proposal identifies the package, events, deliverables, exclusions, staffing, CeremonyVerse fees, known third-party costs, payment milestones, change rules, and cancellation terms. Planning begins only after the CeremonyVerse contract is signed and the required first payment is received.",
        outcome: "You know what CeremonyVerse owns, what you approve, and what outside providers control.",
      },
      {
        timing: "Immediately after activation",
        name: "Kickoff and responsibility map",
        text: "We confirm the couple and family decision-makers, approval method, communication cadence, shared checklist, document locations, and target calendar. Each resort, planning, travel, transfer, vendor, sourcing, and family responsibility receives a named owner.",
        outcome: "Everyone can see who decides, who acts, and when an answer is due.",
      },
      {
        timing: "Early planning",
        name: "Destination and resort comparison",
        text: "Using current written information, the selected planning scope compares event spaces, room-block terms, minimum stays, attrition, concessions, outside-vendor rules, Indian and Jain food needs, havan or fire rules, accessibility, transfers, and weather backup. The responsible provider confirms its own pricing and availability in writing.",
        outcome: "You compare like-for-like terms instead of relying on a package headline.",
      },
      {
        timing: "Before resort deposits",
        name: "Resort, venue and room-block decision",
        text: "We organize the open questions and decision record before you approve the selected option. The resort or licensed provider issues its own contract, booking terms, deposit request, and—when applicable—the guest booking page. The couple signs and pays that provider directly unless the CeremonyVerse contract expressly states otherwise.",
        outcome: "The chosen spaces, room terms, deadlines, costs, and remaining conditions are documented.",
      },
      {
        timing: "Throughout the planning months",
        name: "Event plan, design and vendor decisions",
        text: "The team develops the multi-event plan for the welcome or mehndi, garba or sangeet, ceremony, reception, and any added events. Timelines, cultural requirements, menus, design direction, décor reuse, production, entertainment, beauty, photography, and vendor quotes move through written review and approval. Scope changes require a written change order.",
        outcome: "One working plan connects the traditions, design, budget, vendors, and schedule.",
      },
      {
        timing: "After the room block opens",
        name: "Guest information, booking and arrivals",
        text: "When included in the package, CeremonyVerse organizes guest information, family updates, deadline reminders, welcome details, and agreed rooming or arrival records. Resorts or licensed travel and transfer providers handle bookings, guest payments, travel changes, and transportation confirmations.",
        outcome: "Guests know where to book, which deadlines matter, and who handles travel-specific questions.",
      },
      {
        timing: "After colors, quantities and dates are set",
        name: "India sourcing, if contracted",
        text: "CeremonyVerse creates the approved wardrobe or item brief, coordinates eligible live reviews, measurements, written approvals, order follow-up, available pre-shipping review, and delivery tracking under the selected sourcing tier. Products, shipping, customs, duties, and alterations remain separate third-party costs.",
        outcome: "Sourcing follows the event plan instead of becoming a disconnected project.",
      },
    ],
  },
  {
    name: "Finalization, wedding week and closeout",
    description: "Reconcile the details, execute the contracted events, and finish with a written handoff instead of an unclear ending.",
    steps: [
      {
        timing: "As the wedding approaches",
        name: "Final confirmations and master plan",
        text: "The contracted team reconciles final guest and event counts, menus and dietary needs, rooming information, flight details supplied to the responsible transfer provider, vendor schedules, insurance or access requirements, balances, seating, ceremony needs, weather plans, emergency contacts, and the final run of show. The couple gives the required final approvals.",
        outcome: "The current confirmations, unresolved items, owners, and backup plans are visible before travel begins.",
      },
      {
        timing: "On site",
        name: "Wedding-week execution",
        text: "The contracted on-site team completes the final walkthrough, coordinates provider arrivals, setup, event transitions, timelines, guest-facing information, and issue escalation for the responsibilities in the signed scope. Resorts and vendors remain responsible for delivering their own contracted services.",
        outcome: "The family has one organized operating plan across the multi-day celebration.",
      },
      {
        timing: "After the final event",
        name: "Closeout and final handoff",
        text: "We track the agreed rental returns, outstanding provider balances or disputes, lost-and-found items, remaining vendor deliverables, and any post-event records named in the contract. CeremonyVerse completes the final handoff, data-retention or deletion steps, and a debrief before closing the engagement.",
        outcome: "The project ends only after the contracted closeout responsibilities are accounted for.",
      },
    ],
  },
]

const clientJourney = journeyPhases.flatMap((phase) => phase.steps)

const howToSchema = buildHowToSchema({
  name: "How CeremonyVerse Works from Consultation to Wedding Closeout",
  description:
    "A step-by-step destination-wedding planning path from the free consultation and signed contract through resort selection, guest coordination, wedding-week execution, and closeout.",
  url: "/how-it-works/",
  steps: clientJourney.map((step) => ({ name: step.name, text: step.text })),
})

const faqItems = [
  {
    question: "Do we have to use both destination planning and India sourcing?",
    answer:
      "No. Either service can be selected independently. A combined private proposal is used only when the family wants both destination-wedding support and India sourcing organized together.",
  },
  {
    question: "What should we prepare before the consultation?",
    answer:
      "Bring the preferred dates or timeframe, estimated guest and event counts, travel origins, what the total budget must include, resorts already considered, and any important Gujarati, Hindu, Jain-food, accessibility, or family requirements.",
  },
  {
    question: "What happens after the free consultation?",
    answer:
      `Your first 30-minute consultation is free. After the call, CeremonyVerse may recommend the separate $300 Destination Wedding Feasibility & Action Plan or another paid written scope. You decide whether to proceed after reviewing the terms. ${destinationFeasibilityCredit}`,
  },
  {
    question: "When does CeremonyVerse planning officially begin?",
    answer:
      "Planning begins after the CeremonyVerse destination-planning contract is signed and the required first payment is received. The contract identifies the selected package, responsibilities, exclusions, fees, payment milestones, change rules, and outside costs before the kickoff is scheduled.",
  },
  {
    question: "Who handles room bookings, guest payments, and airport transfers?",
    answer:
      "The resort or applicable licensed travel or transfer provider handles its own bookings, payments, travel changes, and transportation confirmations. When included in the signed package, CeremonyVerse organizes agreed guest information, reminders, rooming details, and arrival records without acting as the travel provider.",
  },
  {
    question: "What happens after the wedding?",
    answer:
      "CeremonyVerse completes the closeout responsibilities named in the contract, which may include tracking rental returns, outstanding provider items, lost-and-found, remaining vendor deliverables, final records, and the agreed data handoff or deletion process. A final debrief closes the engagement.",
  },
  {
    question: "Will calculator entries be sent to CeremonyVerse automatically?",
    answer:
      "No. Calculator entries stay in the visitor's browser and are not attached to the consultation form. Print or save the worksheet, or copy the important totals and questions, if you want to discuss them.",
  },
  {
    question: "Does CeremonyVerse guarantee resort pricing, availability, fit, shipping, or customs timing?",
    answer:
      "No. Current written information from the applicable resort, vendor, carrier, or provider controls those outside services. CeremonyVerse documents the selected scope and explains known limitations before the related decision proceeds.",
  },
]

const faqSchema = buildFaqSchema(faqItems)

const controls = [
  {
    title: "Visitor-entered estimates",
    text: "Calculators use only the figures and assumptions you enter. They do not insert a universal resort price or promise that the target is achievable.",
  },
  {
    title: "Written scope before paid work",
    text: "The selected responsibilities, exclusions, fees, outside costs, and payment milestones are stated before you decide whether to proceed.",
  },
  {
    title: "Outside promises stay outside",
    text: "Resort, vendor, airline, transfer, carrier, customs, and other independent-provider terms should be checked against their current written information.",
  },
]

export default function HowItWorksPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            From the first call to the final handoff
          </p>
          <h1 className="font-serif text-4xl font-semibold !text-white sm:text-6xl">
            See exactly how CeremonyVerse works with you
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 !text-white/75">
            Begin with a free 30-minute consultation. Paid planning starts only after the contract and required first
            payment, then continues through documented decisions, wedding-week execution, and closeout.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact/?from=how-it-works"
              className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]"
            >
              Schedule a Free 30-Minute Consultation
            </Link>
            <Link
              href="/planning-tools/"
              className="rounded-full border border-white/50 px-7 py-4 text-sm font-semibold !text-white"
            >
              Use Free Planning Calculators
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">The complete client journey</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Consultation, contract, planning, wedding and closeout</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              Full Planning follows the complete path. Partial Planning or Event Coordination begins at the point
              that matches what you have already completed and the responsibilities named in your signed package.
            </p>
          </div>
          <div className="space-y-12">
            {journeyPhases.map((phase, phaseIndex) => {
              const previousStepCount = journeyPhases
                .slice(0, phaseIndex)
                .reduce((total, item) => total + item.steps.length, 0)

              return (
                <section key={phase.name} className="rounded-3xl border border-[#d9cfbf] bg-[#f4eee4] p-6 sm:p-9">
                  <div className="mb-7 max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Phase {phaseIndex + 1}</p>
                    <h3 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">{phase.name}</h3>
                    <p className="mt-3 leading-7 text-[#4d403a]">{phase.description}</p>
                  </div>
                  <ol className="grid gap-5 lg:grid-cols-2">
                    {phase.steps.map((step, stepIndex) => {
                      const number = previousStepCount + stepIndex + 1

                      return (
                        <li key={step.name} className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-7">
                          <div className="flex items-start justify-between gap-4">
                            <span className="font-serif text-3xl font-semibold text-[#7a6841]">
                              {String(number).padStart(2, "0")}
                            </span>
                            <span className="rounded-full bg-[#f4eee4] px-3 py-1 text-right text-xs font-semibold text-[#7a6841]">
                              {step.timing}
                            </span>
                          </div>
                          <h4 className="mt-4 font-serif text-2xl font-semibold">{step.name}</h4>
                          <p className="mt-3 leading-7 text-[#4d403a]">{step.text}</p>
                          <p className="mt-5 border-t border-[#e6dfd5] pt-4 text-sm font-semibold leading-6 text-[#5e4a40]">
                            {step.outcome}
                          </p>
                        </li>
                      )
                    })}
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
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                {destinationFeasibilityPlan.name} — {destinationFeasibilityPlan.priceLabel}
              </h2>
              <p className="mt-4 max-w-4xl leading-7 text-[#4d403a]">
                Use the free call to confirm fit. Choose the paid plan when you need CeremonyVerse to turn your
                figures and current written information into a decision brief before you commit to full planning.
              </p>
              <p className="mt-4 max-w-4xl text-sm font-semibold leading-6 text-[#7a6841]">
                {destinationFeasibilityCredit}
              </p>
            </div>
            <Link
              href={destinationFeasibilityPlan.href}
              className="inline-flex justify-center rounded-full bg-[#7a6841] px-7 py-3.5 text-sm font-semibold text-white"
            >
              Review the $300 Plan
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Clear expectations</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">What protects the decision process</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {controls.map((control) => (
              <article key={control.title} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <h3 className="font-serif text-2xl font-semibold">{control.title}</h3>
                <p className="mt-4 leading-7 text-[#4d403a]">{control.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm leading-6 text-[#5e4a40]">
            The family weddings described on the <Link href="/about/" className="font-semibold text-[#7a6841] underline">About page</Link> are
            firsthand family experience, not CeremonyVerse client case studies.
          </p>
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
                <summary className="cursor-pointer font-semibold text-[#1f1f1f]">{item.question}</summary>
                <p className="mt-4 leading-7 text-[#4d403a]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold !text-white sm:text-5xl">
            Bring the facts you already have. You will not be asked to start over.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 !text-white/85">
            Your first 30-minute consultation is free. CeremonyVerse reviews the timeframe, guest and event counts,
            destination ideas, budget scope, and open questions before explaining any separate paid next step.
          </p>
          <Link
            href="/contact/?from=how-it-works"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]"
          >
            Schedule a Free 30-Minute Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
