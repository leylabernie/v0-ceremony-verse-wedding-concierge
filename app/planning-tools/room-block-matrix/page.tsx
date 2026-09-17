import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { RoomBlockMatrixClient } from "./room-block-matrix-client"

export const metadata = buildMetadata({
  path: "/planning-tools/room-block-matrix/",
  title: "South Asian Wedding Room-Block Matrix Calculator",
  description:
    "Turn your guest count, elderly-grandparent share, and single-vs-family mix into a total room count with accessible lobby-level rooms and a King vs Double-Queen split for Mexico, Jamaica, or Punta Cana resorts.",
  keywords:
    "room block calculator Indian wedding, destination wedding room matrix, elderly accessible rooms wedding resort, Gujarati wedding room block Mexico, how many rooms for 100 guests Indian wedding",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Room-Block Matrix Calculator", url: "/planning-tools/room-block-matrix/" },
])

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "South Asian Wedding Room-Block Matrix Calculator",
  url: "https://www.ceremonyverse.com/planning-tools/room-block-matrix/",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  description:
    "A free calculator that converts an Indian destination-wedding guest count, elderly-grandparent percentage, and single-vs-family mix into a room-block matrix: total rooms with a 10% buffer, accessible lobby-level rooms, and a King vs Double-Queen breakdown.",
}

const planningChecks = [
  {
    title: "Name the building and floor in writing",
    body: "Elder rooms only count if the resort confirms the actual building, floor, and distance to the ballroom in the proposal — a rate is not a location.",
  },
  {
    title: "Confirm Jain and satvik kitchens per event",
    body: "Room counts and dietary needs are decided in the same negotiation. Dedicated cookware and no shared frying oil belong in the banquet documentation, not a verbal yes.",
  },
  {
    title: "Flag every non-resort guest early",
    body: "Elders staying at an accessible hotel nearby will need day passes for each event day. Confirm the policy and cost before signing, not at the final invoice.",
  },
]

export default function RoomBlockMatrixPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-calculator" data={calculatorSchema} />

      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            USA &amp; Canada family planning tool
          </p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">
            South Asian Wedding Room-Block Matrix Calculator
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
            Most resort proposals assume a Western wedding: one night, couples only. Ours are four days of events with
            grandparents, toddlers, and forty cousins. Move the sliders to see the room count, the accessible
            lobby-level rooms your elders need, and the King vs Double-Queen split — before a salesperson hands you a
            number built for someone else&apos;s wedding.
          </p>
        </div>
      </section>

      <RoomBlockMatrixClient />

      <section className="bg-[#f0ebe3] px-6 py-20 print:hidden">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Before you sign</p>
          <h2 className="font-serif text-4xl font-semibold">The matrix only holds if the proposal holds it</h2>
          <p className="mt-4 leading-7 text-[#4d403a]">
            A room count is a starting position for negotiation. These are the three confirmations that turn the
            matrix into a contract you can actually rely on.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {planningChecks.map((check) => (
            <article key={check.title} className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
              <h3 className="font-serif text-2xl font-semibold">{check.title}</h3>
              <p className="mt-4 leading-7 text-[#4d403a]">{check.body}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 sm:flex-row">
          <Link href="/indian-wedding-room-block-mexico/" className="rounded-full bg-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-white">
            Read the Mexico Room-Block Guide
          </Link>
          <Link href="/blog/south-asian-destination-wedding-guide/" className="rounded-full border border-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-[#7a6841]">
            Read the Full Room-Block Guide
          </Link>
        </div>
      </section>
    </main>
  )
}
