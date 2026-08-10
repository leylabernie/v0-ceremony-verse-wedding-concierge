import { BudgetPlannerClient } from "./budget-planner-client"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/planning-tools/budget/",
  title: "Indian Destination Wedding Budget Calculator",
  description:
    "Estimate an Indian destination-wedding budget with current official resort starting rates or your written quotes for Mexico and Punta Cana.",
  keywords:
    "Indian destination wedding budget calculator, Mexico wedding budget planner, Punta Cana Indian wedding cost, Gujarati destination wedding budget",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Budget Calculator", url: "/planning-tools/budget/" },
])

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Indian Destination Wedding Budget Calculator",
  url: "https://www.ceremonyverse.com/planning-tools/budget/",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  description: "A free calculator with dated official resort starting rates, manual quote fields, destination-wedding event costs, guest travel, shopping, contingency, and target-budget comparisons.",
}

export default function BudgetPlannerPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-calculator" data={calculatorSchema} />
      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Planning calculator</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Indian Destination Wedding Budget Calculator</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
            Start with a current publicly posted resort package or use your own written proposal. The calculator separates package, venue, food and beverage, guest overages, family travel, and optional India shopping so you can see what is included and what is still unpriced.
          </p>
        </div>
      </section>
      <BudgetPlannerClient />
    </main>
  )
}
