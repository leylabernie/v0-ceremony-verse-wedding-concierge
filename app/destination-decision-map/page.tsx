// Design intent: preserve CeremonyVerse's quiet editorial palette, serif-led hierarchy, and honest no-pressure planning guidance.
import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/destination-decision-map/",
  title: "Destination Wedding Decision Map | Mexico & Punta Cana",
  description:
    "Use a free three-part planning map to clarify guest reality, celebration needs, and the next written destination-wedding decision for Mexico or Punta Cana.",
  keywords:
    "destination wedding decision map, Indian wedding Mexico planning, Punta Cana wedding planning, resort proposal questions, Gujarati Hindu destination wedding guide",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Free Guides", url: "/free-guides/" },
  { name: "Destination Decision Map", url: "/destination-decision-map/" },
])

const decisionLenses = [
  {
    number: "01",
    eyebrow: "Guest reality",
    title: "Start with the people the weekend needs to hold.",
    intro:
      "A destination can look perfect before the family travel, room, transfer, and support questions come into view. Make those questions visible first.",
    prompts: [
      "Which guests are travelling the farthest or have the least flexible travel needs?",
      "What still needs a written answer about rooms, transfers, arrival timing, or family-paid travel?",
      "What total family cost is still being discussed in pieces instead of one complete view?",
    ],
  },
  {
    number: "02",
    eyebrow: "Celebration rhythm",
    title: "Protect the moments that must feel like your family.",
    intro:
      "A destination decision is also a decision about how each ceremony, meal, gathering, and weather backup will work together across the weekend.",
    prompts: [
      "Which ceremonies, food needs, or cultural details require a direct written confirmation?",
      "Where do event flow, guest movement, production, or weather backup still feel unclear?",
      "What is the one moment your family most wants to feel unhurried and well held?",
    ],
  },
  {
    number: "03",
    eyebrow: "Ownership and evidence",
    title: "Give every open question a next owner.",
    intro:
      "The next decision feels lighter when a question has one named owner, one piece of evidence still needed, and one agreed next action.",
    prompts: [
      "Who is responsible for getting the next answer: your family, the resort, a qualified provider, or CeremonyVerse?",
      "What written proposal, term, schedule, or cost detail would make the comparison more reliable?",
      "Is the right next step a destination comparison, a cost calculation, or a conversation?",
    ],
  },
] as const

const nextPaths = [
  {
    label: "Compare destinations",
    description: "See Mexico and Punta Cana through guest access, event feasibility, cultural needs, weather, and total planning context.",
    href: "/destinations/",
    cta: "Compare destinations →",
  },
  {
    label: "Test the family cost",
    description: "Separate event costs, family travel, room assumptions, and missing areas before the total becomes a surprise.",
    href: "/planning-tools/budget/",
    cta: "Open the budget calculator →",
  },
  {
    label: "Bring the map to a conversation",
    description: "Use the free 30-minute consultation to identify which answer needs to come next. No payment or contract is required.",
    href: "/contact/?service=mexico&from=destination-decision-map",
    cta: "Schedule a free consultation →",
  },
] as const

export default function DestinationDecisionMapPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Free · private · no email gate</p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">Choose the next destination decision with the whole wedding weekend in view.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#e8dfd2]">
            This three-part map helps Gujarati and Hindu families make the next question visible before a resort photo, a partial proposal, or a long group chat decides the direction for them.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-[#cfc4b5]">
            It organizes questions. It does not promise availability, savings, travel booking, resort access, or provider outcomes.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 sm:py-14">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 rounded-2xl border border-[#e3d9c9] bg-[#f0ebe3] px-7 py-7 md:flex-row md:items-center md:px-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Use this in ten minutes</p>
            <p className="mt-2 max-w-2xl font-serif text-2xl leading-8 text-[#2a2623]">Write the first answer that comes to mind. The goal is not a complete brief; it is a clearer next decision.</p>
          </div>
          <Link href="#three-lenses" className="inline-flex shrink-0 self-start rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#665633] focus:outline-none focus:ring-2 focus:ring-[#7a6841] focus:ring-offset-2 md:self-auto">
            Start the map
          </Link>
        </div>
      </section>

      <section id="three-lenses" className="px-6 pb-20 pt-8 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Three lenses before a decision</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">Make the question more complete before you try to make it final.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {decisionLenses.map((lens) => (
              <article key={lens.number} className="flex h-full flex-col rounded-2xl border border-[#e6dfd5] bg-white p-7 shadow-[0_10px_30px_rgba(68,55,40,0.04)]">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-serif text-3xl text-[#7a6841]">{lens.number}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">{lens.eyebrow}</p>
                </div>
                <h3 className="mt-7 font-serif text-2xl font-semibold leading-8">{lens.title}</h3>
                <p className="mt-4 leading-7 text-[#4d403a]">{lens.intro}</p>
                <ol className="mt-7 space-y-4 border-t border-[#eee8df] pt-6">
                  {lens.prompts.map((prompt, index) => (
                    <li key={prompt} className="flex gap-3 text-sm leading-6 text-[#4d403a]">
                      <span className="mt-0.5 font-semibold text-[#7a6841]">{index + 1}.</span>
                      <span>{prompt}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0ebe3] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Choose the next move</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">A map is useful when it turns into one clear action.</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">Choose the path that matches the uncertainty in front of you. You do not need to solve the entire wedding before taking it.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {nextPaths.map((path) => (
              <article key={path.href} className="flex flex-col rounded-2xl border border-[#e3d9c9] bg-[#faf8f5] p-7">
                <h3 className="font-serif text-2xl font-semibold">{path.label}</h3>
                <p className="mt-4 flex-1 leading-7 text-[#4d403a]">{path.description}</p>
                <Link href={path.href} className="mt-7 inline-flex self-start font-semibold text-[#7a6841] transition hover:text-[#584827] focus:outline-none focus:ring-2 focus:ring-[#7a6841] focus:ring-offset-4">
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">One clear conversation can help</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">Bring the open question. We will help you identify the next written answer.</h2>
          <p className="mt-6 text-lg leading-8 text-[#4d403a]">Your first 30-minute consultation is free. No payment, contract, or prior approval is required.</p>
          <Link href="/contact/?service=mexico&from=destination-decision-map-final" className="mt-8 inline-flex rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#665633] focus:outline-none focus:ring-2 focus:ring-[#7a6841] focus:ring-offset-2">
            Schedule a Free 30-Minute Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
