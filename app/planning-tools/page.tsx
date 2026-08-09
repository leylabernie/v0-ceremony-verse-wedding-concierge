import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/planning-tools/",
  title: "Free Indian Destination Wedding Planning Tools",
  description:
    "Use CeremonyVerse planning tools for destination-wedding budgets, resort comparisons, family responsibilities, and guest logistics across Mexico and Punta Cana.",
  keywords:
    "Indian destination wedding budget planner, Mexico wedding resort comparison, destination wedding guest tracker, Gujarati wedding planning checklist, Punta Cana Indian wedding planning",
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Planning Tools", url: "/planning-tools/" }])

const tools = [
  {
    title: "Wedding Budget Builder",
    description:
      "Enter your own costs and see the total, contingency, cost per guest, and difference from your target budget.",
    href: "/planning-tools/budget/",
    label: "Build the budget",
  },
  {
    title: "Resort Comparison Worksheet",
    description:
      "Compare room-block terms, event inclusions, outside-vendor fees, food requirements, weather plans, and guest logistics.",
    href: "/planning-tools/resort-comparison/",
    label: "Compare resorts",
  },
  {
    title: "Family Responsibility Map",
    description:
      "Assign one owner, approver, deadline, and status to the decisions that often become scattered across a large family.",
    href: "/planning-tools/family-responsibility-map/",
    label: "Organize decisions",
  },
  {
    title: "Guest Logistics Checklist",
    description:
      "Track names, rooms, arrival details, transfers, dietary needs, welcome items, and missing information without collecting sensitive documents.",
    href: "/planning-tools/guest-logistics/",
    label: "Organize guests",
  },
]

export default function PlanningToolsPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            Free CeremonyVerse resources
          </p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Make the wedding easier to evaluate</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#e8dfd2]">
            These tools help Gujarati and Hindu families organize a destination wedding across Mexico or Punta Cana.
            They use your information rather than invented package promises, and they do not require an email address.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <article key={tool.href} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-white p-8 sm:p-10">
              <h2 className="font-serif text-3xl font-semibold">{tool.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-[#4d403a]">{tool.description}</p>
              <Link href={tool.href} className="mt-7 inline-flex self-start rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841] transition hover:bg-[#7a6841] hover:text-white">
                {tool.label} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f0ebe3] px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Need help interpreting the numbers?</h2>
          <p className="mt-4 leading-7 text-[#4d403a]">
            Bring the completed information to a private consultation. CeremonyVerse can help identify missing costs,
            unclear resort language, and the next decisions that matter most.
          </p>
          <Link href="/contact/?service=mexico" className="mt-7 inline-flex rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white">
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
