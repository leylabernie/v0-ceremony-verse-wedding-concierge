import { BudgetPlannerClient } from "./budget-planner-client"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/planning-tools/budget/",
  title: "Indian Destination Wedding Budget Builder",
  description:
    "Build a realistic Indian destination-wedding budget using your own resort, event, decor, travel, planning, and sourcing costs for Mexico or Punta Cana.",
  keywords:
    "Indian destination wedding budget calculator, Mexico wedding budget planner, Punta Cana Indian wedding cost, Gujarati destination wedding budget",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Budget Builder", url: "/planning-tools/budget/" },
])

export default function BudgetPlannerPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Planning worksheet</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Indian Destination Wedding Budget Builder</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
            Enter only the costs you have researched or been quoted. The tool adds them, applies your chosen contingency,
            and shows the difference from your target. It does not invent a package price or promise that a budget is sufficient.
          </p>
        </div>
      </section>
      <BudgetPlannerClient />
    </main>
  )
}
