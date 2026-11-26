import { calculatorSchema } from "@/lib/schema"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { BudgetTrackerClient } from "./budget-tracker-client"

export const metadata = buildMetadata({
  path: "/planning-tools/budget-tracker/",
  title: "Free Wedding Budget Tracker | CeremonyVerse",
  description: "Track your wedding budget with estimated and actual costs by category. Free, simple, and saved in your browser.",
  keywords: "wedding budget tracker, wedding budget planner, free wedding budget tool",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Budget Tracker", url: "/planning-tools/budget-tracker/" },
])

const toolSchema = calculatorSchema({
  name: 'Wedding Budget Tracker',
  url: "https://www.ceremonyverse.com/planning-tools/budget-tracker/",
  description: 'Track your wedding budget with estimated and actual costs by category.',
})

export default function BudgetTrackerPage() {
  return (
    <main className="bg-[#faf8f5] px-6 py-20 text-[#1f1f1f] sm:py-24">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-tool" data={toolSchema} />
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Free planning tool</p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Budget Tracker</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d403a]">
            Set a budget, track estimated and actual costs by category, and see what’s left. Simple, clear, and saved in your browser.
          </p>
        </header>
        <BudgetTrackerClient />
      </div>
    </main>
  )
}
