// Design intent: retain CeremonyVerse's restrained editorial resource library while adding a practical decision-first entry point.
import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/free-guides/",
  title: "Free Indian Wedding Planning Guides & Tools",
  description:
    "Open free CeremonyVerse tools for Indian destination-wedding budgets, resort comparisons, family responsibilities, guest logistics, and India wedding shopping.",
  keywords:
    "free Indian wedding planning tools, NRI wedding checklist, destination wedding budget planner, Mexico resort comparison, Indian wedding guest tracker",
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Free Guides", url: "/free-guides/" }])

const destinationTools = [
  ["Destination Decision Map", "Use three lenses to clarify guest reality, celebration needs, and the next destination-wedding question before you choose a path.", "/destination-decision-map/"],
  ["Destination Cost Guide", "Build the complete host budget across resort, events, production, planning, family travel, and contingency.", "/indian-destination-wedding-cost/"],
  ["Mexico Room Block Guide", "Understand inventory, pickup, attrition, cut-off dates, concessions, guest booking, and event-access terms.", "/indian-wedding-room-block-mexico/"],
  ["Budget Calculator", "Separate wedding-event, guest-travel, and optional shopping costs and compare the total with your target.", "/planning-tools/budget/"],
  ["Resort Proposal Calculator", "Compare two written resort proposals, room-block exposure, cultural requirements, and missing terms.", "/planning-tools/resort-comparison/"],
  ["Family Responsibility Map", "Assign an owner, approver, due date, and status to each important decision.", "/planning-tools/family-responsibility-map/"],
  ["Guest & VIP Cost Calculator", "Calculate family-paid rooms, flights, transfers, welcome items, and guest-support costs.", "/planning-tools/guest-logistics/"],
] as const

const shoppingGuides = [
  ["Wedding Outfit Checklist", "Plan outfits across ceremonies, the couple, family, and wedding party.", "/blog/indian-wedding-outfit-checklist-every-ceremony/"],
  ["NRI Shopping Timeline", "Understand when to research, measure, approve, produce, inspect, and ship.", "/blog/nri-wedding-planning-timeline/"],
  ["Vendor Red Flags", "Review evidence, payment, product, customization, and shipping risks before ordering.", "/avoid-indian-wedding-shopping-scams/"],
  ["Bridal Lehenga Cost Guide", "Separate product price from customization, shipping, duties, and alterations.", "/blog/how-much-does-bridal-lehenga-cost-india-2026/"],
] as const

function ResourceCards({ resources }: { resources: ReadonlyArray<readonly [string, string, string]> }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {resources.map(([title, description, href]) => (
        <article key={href} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-white p-7">
          <h3 className="font-serif text-2xl font-semibold text-[#1f1f1f]">{title}</h3>
          <p className="mt-3 flex-1 leading-7 text-[#4d403a]">{description}</p>
          <Link href={href} className="mt-6 inline-flex self-start font-semibold text-[#7a6841]">Open resource →</Link>
        </article>
      ))}
    </div>
  )
}

export default function FreeGuidesPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">No email gate</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Free Indian Wedding Planning Resources</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#e8dfd2]">
            Open the resource you need. CeremonyVerse does not require an email address or automatically subscribe you to marketing.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Mexico and Punta Cana</p>
          <h2 className="mb-9 font-serif text-4xl font-semibold">Destination-wedding planning tools</h2>
          <ResourceCards resources={destinationTools} />
        </div>
      </section>

      <section className="bg-[#f0ebe3] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">India sourcing</p>
          <h2 className="mb-9 font-serif text-4xl font-semibold">Wedding-shopping guides</h2>
          <ResourceCards resources={shoppingGuides} />
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <Link href="/contact/" className="inline-flex rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white">Schedule a Free 30-Minute Consultation</Link>
      </section>
    </main>
  )
}
