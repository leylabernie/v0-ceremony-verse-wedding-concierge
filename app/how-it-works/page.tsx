import Link from "next/link"
import {
  JsonLd,
  buildBreadcrumb,
  buildFaqSchema,
  buildHowToSchema,
  buildMetadata,
  buildServiceSchema,
} from "@/lib/seo"
import { destinationFeasibilityPlan } from "@/lib/destination-feasibility-plan"

export const metadata = buildMetadata({
  path: "/how-it-works/",
  title: "How CeremonyVerse Wedding Planning & Sourcing Works",
  description:
    "Follow the CeremonyVerse path from feasibility and written comparisons through destination planning, guest support, optional India sourcing, and consultation.",
  keywords:
    "Indian destination wedding planning process, Gujarati wedding planning Mexico, Punta Cana Indian wedding planning, India wedding sourcing process",
})

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Destination Planning and India Wedding Sourcing",
  description:
    "A documented process for Gujarati and Hindu destination-wedding planning across Mexico and in Punta Cana, with optional guest support and India wedding sourcing.",
  url: "/how-it-works/",
  category: "Destination Wedding Planning and India Wedding Sourcing",
  areaServed: ["United States", "Canada", "Mexico", "Punta Cana, Dominican Republic"],
})

const breadcrumbSchema = buildBreadcrumb([{ name: "How It Works", url: "/how-it-works/" }])

const sharedSteps = [
  {
    name: "Test feasibility",
    text: "Use your dates, guest count, event plan, travel origins, budget scope, and any written resort information to identify what is known and what is still missing.",
  },
  {
    name: "Compare written options",
    text: "Compare resort, room-block, vendor, cultural, travel, sourcing, and cost information using the same assumptions rather than relying on a package headline.",
  },
  {
    name: "Define the private scope",
    text: "Choose the planning, on-site, family-support, guest, or India-sourcing responsibilities needed for the wedding. The proposal states inclusions, exclusions, fees, and outside costs.",
  },
  {
    name: "Approve decisions in writing",
    text: "Keep selections, responsibilities, payment milestones, deadlines, and limitations visible before paid work, production, booking, or shipping proceeds.",
  },
  {
    name: "Plan and execute the agreed work",
    text: "CeremonyVerse organizes the selected planning or sourcing scope while resorts, carriers, vendors, and other independent providers remain responsible for their own confirmed services.",
  },
]

const howToSchema = buildHowToSchema({
  name: "How CeremonyVerse Destination Planning and India Sourcing Works",
  description:
    "A five-step path from feasibility and written comparisons to a private scope, documented approvals, and execution.",
  url: "/how-it-works/",
  steps: sharedSteps,
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
      "If you need a written feasibility decision before full planning, CeremonyVerse may recommend the $300 Destination Wedding Feasibility & Action Plan. It includes a working session, review of your own worksheets and up to two current proposals, a written action brief, and a follow-up. You can also proceed to a different written scope when that is a better fit.",
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

const destinationSteps = [
  "Define dates, guest origins, event count, ceremony needs, accessibility needs, and everything the budget must cover.",
  "Compare suitable regions and current written resort proposals, including room blocks, cultural requirements, outside-vendor rules, weather backup, and complete host costs.",
  "Select the appropriate planning and on-site scope based on what is already booked and what still needs a clear owner.",
  "Organize the agreed event plan, family decisions, guest information, arrivals, welcome details, vendors, deadlines, and contingencies.",
  "Finalize confirmations and execute the contracted on-site responsibilities without presenting an outside provider's promise as CeremonyVerse's guarantee.",
]

const sourcingSteps = [
  "Define the people, ceremonies, requested items, measurements, timeline, destination, and working item budget.",
  "Review available options or a custom brief using the documentation and review method included in the selected service tier.",
  "Approve the item, measurements, price, limitations, and applicable purchase or production milestone in writing.",
  "Use the agreed pre-shipping review to compare visible details with the approval record when that review is available.",
  "Coordinate U.S. or Canada shipping documents and available tracking while carriers and customs authorities control assessments, clearance, and final delivery timing.",
]

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
            One clear visitor journey
          </p>
          <h1 className="font-serif text-4xl font-semibold !text-white sm:text-6xl">
            Understand the wedding before choosing the service
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 !text-white/75">
            Start with feasibility, compare the written options, estimate the complete cost, and then request only
            the destination-planning, guest-support, or India-sourcing help your family needs.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/planning-tools/"
              className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]"
            >
              Start with Free Calculators
            </Link>
            <Link
              href="/contact/?from=how-it-works"
              className="rounded-full border border-white/50 px-7 py-4 text-sm font-semibold !text-white"
            >
              Request a Private Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Shared process</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Five steps keep the decision visible</h2>
          </div>
          <ol className="grid gap-5 lg:grid-cols-5">
            {sharedSteps.map((step, index) => (
              <li key={step.name} className="rounded-2xl border border-[#e6dfd5] bg-white p-6">
                <span className="text-sm font-semibold text-[#7a6841]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{step.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4d403a]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Choose one or both</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Two service paths, one documented scope</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              The private proposal combines these paths only when the wedding genuinely needs both.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            <article className="rounded-3xl border border-[#d9cfbf] bg-[#faf8f5] p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Mexico · Punta Cana</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">Destination-wedding planning</h2>
              <ol className="mt-7 space-y-5">
                {destinationSteps.map((step, index) => (
                  <li key={step} className="grid gap-3 border-t border-[#e6dfd5] pt-5 sm:grid-cols-[36px_1fr]">
                    <span className="font-semibold text-[#7a6841]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="leading-7 text-[#4d403a]">{step}</p>
                  </li>
                ))}
              </ol>
              <Link
                href="/indian-wedding-coordination-mexico/"
                className="mt-8 inline-flex rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white"
              >
                Explore Destination Planning
              </Link>
            </article>

            <article className="rounded-3xl border border-[#d9cfbf] bg-[#faf8f5] p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">India · United States &amp; Canada</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">Wedding shopping and sourcing</h2>
              <ol className="mt-7 space-y-5">
                {sourcingSteps.map((step, index) => (
                  <li key={step} className="grid gap-3 border-t border-[#e6dfd5] pt-5 sm:grid-cols-[36px_1fr]">
                    <span className="font-semibold text-[#7a6841]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="leading-7 text-[#4d403a]">{step}</p>
                  </li>
                ))}
              </ol>
              <Link
                href="/shop-from-india/"
                className="mt-8 inline-flex rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white"
              >
                Explore India Shopping
              </Link>
            </article>
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
            In a free 30-minute consultation, CeremonyVerse reviews the timeframe, guest and event counts, destination
            ideas, budget scope, and open questions before recommending a practical next step.
          </p>
          <Link
            href="/contact/?from=how-it-works"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]"
          >
            Request My Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
