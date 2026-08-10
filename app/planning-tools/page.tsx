import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/planning-tools/",
  title: "Free Indian Destination Wedding Calculators",
  description:
    "Use free CeremonyVerse calculators for destination-wedding budgets, resort proposals, guest costs, and India-to-USA-or-Canada shipping and customs.",
  keywords:
    "Indian destination wedding budget planner, Mexico wedding resort comparison, destination wedding guest tracker, Gujarati wedding planning checklist, Punta Cana Indian wedding planning",
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Planning Tools", url: "/planning-tools/" }])

const tools = [
  {
    title: "Wedding Budget Calculator",
    description:
      "Separate event, family-travel, and shopping costs; see the total, target gap, quote confidence, and missing cost areas.",
    href: "/planning-tools/budget/",
    label: "Calculate the budget",
  },
  {
    title: "Resort Proposal Calculator",
    description:
      "Compare two written proposals across known host costs, room-block exposure, cultural requirements, and contract clarity.",
    href: "/planning-tools/resort-comparison/",
    label: "Compare two resorts",
  },
  {
    title: "Guest & VIP Cost Calculator",
    description:
      "Calculate room nights, family-paid rooms and flights, transfers, welcome items, and the host-paid guest-support total.",
    href: "/planning-tools/guest-logistics/",
    label: "Calculate guest costs",
  },
  {
    title: "USA & Canada Shipping & Customs Calculator",
    description:
      "Estimate the USD landed cost of India-sourced products, shipping, insurance, import charges, brokerage, alterations, and contingency.",
    href: "/planning-tools/shipping-customs/",
    label: "Calculate landed cost",
  },
  {
    title: "Family Responsibility Map",
    description:
      "Assign one owner, approver, deadline, and status to the decisions that often become scattered across a large family.",
    href: "/planning-tools/family-responsibility-map/",
    label: "Organize decisions",
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
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Calculate before you commit</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#e8dfd2]">
            Use your own quotes and assumptions to test the complete budget, compare resorts, separate guest support,
            and estimate India-to-USA-or-Canada shipping and customs. No email address is required.
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
            Bring the completed calculations to a private consultation. CeremonyVerse can help identify missing costs,
            unclear resort language, and the next decisions that matter most—without asking you to start over.
          </p>
          <Link href="/contact/?service=mexico&from=planning-calculators" className="mt-7 inline-flex rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white">
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
