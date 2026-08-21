import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import {
  JsonLd,
  buildBreadcrumb,
  buildFaqSchema,
  buildHowToSchema,
  buildMetadata,
  buildServiceSchema,
} from "@/lib/seo"

const path = "/gujarati-destination-wedding-mexico/"

export const metadata = buildMetadata({
  path,
  title: "Gujarati Weddings in Mexico",
  description:
    "Plan a Gujarati wedding in Mexico with Mini. Clarify family decisions, resort questions, guest needs, and provider handoffs.",
  keywords: [
    "Gujarati wedding in Mexico",
    "Gujarati destination wedding Mexico",
    "Gujarati wedding planner Mexico",
    "Gujarati wedding Cancun",
    "Gujarati wedding Riviera Maya",
    "Indian destination wedding planning Mexico",
  ],
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Gujarati Wedding in Mexico", url: path },
])

const serviceSchema = buildServiceSchema({
  name: "Gujarati Family Planning Support for Weddings in Mexico",
  description:
    "Family-facing Gujarati destination-wedding planning support for Mexico. CeremonyVerse organizes the agreed family-side planning process while independent local providers, resorts, travel providers, and vendors retain their separately defined responsibilities.",
  url: path,
  category: "Gujarati Destination Wedding Planning",
  areaServed: ["Mexico", "United States", "Canada"],
})

const eventFlow = [
  {
    number: "01",
    name: "Vidhi",
    detail: "Ganesh Sthapan, Mandap Muhart, Pithi, Gruh Shanti, and Varadh",
    question: "Which family members, sacred items, timing, privacy, food, and setup details need to be clear before a space is treated as confirmed?",
  },
  {
    number: "02",
    name: "Garba / Sangeet",
    detail: "With Mehendi",
    question: "How should performances, Mehendi, music, dance floor, guest movement, sound limits, and the timing of the evening work together?",
  },
  {
    number: "03",
    name: "Baraat",
    detail: "Arrival and procession",
    question: "What must be confirmed about the route, timing, music, viewing, safety, resort rules, and the family arrival experience?",
  },
  {
    number: "04",
    name: "Pheras",
    detail: "With Vidai",
    question: "How will the mandap, priest or pundit needs, fire permissions, shade, seating, ceremony timing, Vidai, and family movement be organized?",
  },
  {
    number: "05",
    name: "Reception",
    detail: "The final celebration",
    question: "How should dinner, program, performances, production, family photos, and the final guest experience come together?",
  },
]

const decisionQuestions = [
  ["The family brief", "Which ceremonies matter most, what must feel right, and who gives the final family answer?"],
  ["The resort proposal", "Which spaces, event hours, food conditions, production rules, weather plans, and cost categories are actually included?"],
  ["The guest experience", "What do relatives need to know about room deadlines, arrivals, mobility, attire, meals, and the event schedule?"],
  ["The provider handoffs", "Which person owns every unresolved question, deadline, approval, and local execution handoff?"],
]

const ownershipRows = [
  ["Your family", "Sets the celebration priorities, shares accurate guest and ceremony information, and makes the final decisions."],
  ["Mini and CeremonyVerse", "Organizes the agreed Gujarati family-side planning process: cultural requirements, decision records, family questions, timing, communication, and provider handoffs within the signed scope."],
  ["Independent Mexico local provider", "Completes only the local planning and on-site responsibilities identified in that provider’s written scope."],
  ["Resorts and qualified providers", "Control their own availability, policies, contracts, bookings, payments, and the services they agree to deliver."],
]

const faqItems = [
  {
    question: "What does Mini help our family organize?",
    answer:
      "Mini leads the agreed family-facing planning process. That can include organizing Gujarati ceremony priorities, family approvals, resort and provider questions, guest-information needs, decision records, and clear handoffs. The selected written scope identifies the actual responsibilities and exclusions.",
  },
  {
    question: "Who handles local planning and the wedding week in Mexico?",
    answer:
      "For Mexico weddings, an independent local provider handles only the destination and on-site responsibilities listed in that provider’s written scope. That role is separate from CeremonyVerse’s family-facing planning role, and the family remains free to select its provider.",
  },
  {
    question: "Can we book rooms, flights, or transfers through CeremonyVerse?",
    answer:
      "Resorts and properly authorized travel or transfer providers handle their own bookings, payments, travel changes, and transportation confirmations. CeremonyVerse organizes only the planning responsibilities included in its written scope.",
  },
  {
    question: "What should we bring to a first Gujarati wedding planning call?",
    answer:
      "Bring the date range, likely Mexico destination or resort ideas, approximate guest count, ceremony outline, family decision-makers, budget categories, and the questions that are keeping your family from moving forward. You do not need a finished plan before the call.",
  },
]

const howToSchema = buildHowToSchema({
  name: "How to Start Planning a Gujarati Wedding in Mexico",
  description: "A family-centered process for organizing Gujarati ceremony priorities, resort questions, guest planning, and clear provider roles before committing.",
  url: path,
  totalTime: "PT30M",
  steps: [
    { name: "Confirm the family ceremony brief", text: "Agree on the selected Gujarati ceremony sequence, family priorities, event participation, and the decision-makers who can give final approval." },
    { name: "Normalize resort and guest assumptions", text: "Use the same guest count, event schedule, room expectations, food needs, accessibility considerations, and budget categories for every proposal." },
    { name: "Assign responsibility lines", text: "Keep the family-side planning, independent local-provider scope, and resort or other provider responsibilities clear before treating a detail as confirmed." },
    { name: "Bring the open questions to a planning call", text: "Use the free consultation to identify the next decision, any missing written answers, and whether a separate paid scope would be useful." },
  ],
})

export default function GujaratiDestinationWeddingMexicoPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-faq" data={buildFaqSchema(faqItems)} />
      <JsonLd id="schema-howto" data={howToSchema} />
      <SeoNav />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Gujarati destination wedding planning in Mexico</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight sm:text-6xl">Plan a Gujarati wedding in Mexico with your whole family in mind.</h1>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-white/80">
            Mini helps organize the Gujarati family-side planning process before small unknowns become expensive, stressful decisions. Bring the event sequence, family approvals, resort questions, guest realities, and local-provider handoffs into one clear conversation.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=mexico&from=gujarati-mexico-landing" className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold text-[#1f1f1f]">Schedule a Gujarati Wedding Planning Call</Link>
            <Link href="/planning-tools/family-responsibility-map/" className="rounded-full border border-white/55 px-7 py-4 text-sm font-semibold text-white">Start With the Family Responsibility Map</Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">The family event flow</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Five moments. One family plan.</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              For families using this Gujarati event sequence, each celebration needs its own family decisions, resort questions, and written handoffs before the wedding-week plan is treated as final.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {eventFlow.map((event) => (
              <article key={event.number} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-6">
                <p className="font-serif text-3xl font-semibold text-[#7a6841]">{event.number}</p>
                <h3 className="mt-4 font-serif text-2xl font-semibold">{event.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#7a6841]">{event.detail}</p>
                <p className="mt-5 text-sm leading-6 text-[#4d403a]">{event.question}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Before a commitment</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">The first question is not “Which resort?”</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              The first question is whether the details that matter to your family have owners, answers, and a realistic path forward. CeremonyVerse helps make those questions visible before a family confuses a package headline with a complete plan.
            </p>
            <Link href="/blog/how-to-plan-gujarati-hindu-destination-wedding-mexico/" className="mt-7 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">Read the Gujarati-Mexico planning guide</Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#e6dfd5] bg-white">
            {decisionQuestions.map(([title, detail], index) => (
              <article key={title} className={`grid gap-3 p-6 md:grid-cols-[0.3fr_0.7fr] ${index % 2 === 0 ? "bg-[#faf8f5]" : "bg-white"}`}>
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="leading-7 text-[#4d403a]">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">One celebration, clear responsibilities</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">A family-centered plan does not erase provider boundaries.</h2>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-[#d9cfbf] bg-white">
            {ownershipRows.map(([owner, detail], index) => (
              <article key={owner} className={`grid gap-3 p-6 md:grid-cols-[0.28fr_0.72fr] ${index % 2 === 0 ? "bg-[#faf8f5]" : "bg-white"}`}>
                <h3 className="font-serif text-2xl font-semibold">{owner}</h3>
                <p className="leading-7 text-[#4d403a]">{detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/how-it-works/" className="inline-flex rounded-full border border-[#7a6841] px-7 py-3.5 text-sm font-semibold text-[#7a6841]">See Exactly How CeremonyVerse Works</Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-3xl border border-[#d9cfbf] bg-[#faf8f5] p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">When you need written answers</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">Move from family questions to a clear next decision.</h2>
            <p className="mt-5 leading-7 text-[#4d403a]">
              Choose the $300 Destination Wedding Feasibility &amp; Action Plan when your family needs to compare proposals, identify missing answers, organize guest and budget assumptions, or create a written question list before making a larger commitment.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link href="/destination-wedding-feasibility-plan/" className="inline-flex rounded-full bg-[#7a6841] px-7 py-3.5 text-sm font-semibold text-white">Review the $300 Decision Plan</Link>
            <span className="max-w-xs text-sm leading-6 text-[#5e4a40] lg:text-right">The free call clarifies the next step. No payment is collected through the inquiry form.</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Questions families ask first</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Start with the questions that need a real answer.</h2>
          </div>
          <div className="mt-10 space-y-5">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <h3 className="font-serif text-2xl font-semibold">{item.question}</h3>
                <p className="mt-4 leading-7 text-[#4d403a]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Bring the outline your family already has.</h2>
          <p className="mt-5 text-lg leading-8 text-white/85">
            Share the date range, guest count, event sequence, destination ideas, and the question your family needs to resolve next. The free first call is for organizing that next decision—not for asking your family to commit on the call.
          </p>
          <Link href="/contact/?service=mexico&from=gujarati-mexico-landing-final" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">Schedule a Free Gujarati Wedding Planning Call</Link>
        </div>
      </section>
    </main>
  )
}
