import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { calculatorSchema } from "@/lib/schema"
import { BudgetTrackerClient } from "./budget-tracker-client"

export const metadata = buildMetadata({
  path: "/planning-tools/budget-tracker/",
  title: "Gujarati & South Asian Wedding Budget Tracker | Free Tool | CeremonyVerse",
  description: "A free wedding budget tracker for Gujarati and South Asian weddings. Track estimated vs. actual costs across events, outfits, decor, vendors, and guest logistics.",
  keywords: "Gujarati wedding budget tracker, South Asian wedding budget, Garba Sangeet budget, Indian wedding budget planner",
})

const breadcrumb = buildBreadcrumb([{ name: "Planning Tools", url: "/planning-tools/" }, { name: "Budget Tracker", url: "/planning-tools/budget-tracker/" }])
const schema = calculatorSchema({ name: "Gujarati & South Asian Wedding Budget Tracker", description: "A free browser-saved wedding budget tracker designed for Gujarati and South Asian multi-event celebrations.", url: "/planning-tools/budget-tracker/" })

export default function Page() {
  return (
    <main className="bg-[#faf8f5] px-6 py-16 text-[#1f1f1f] sm:py-20">
      <JsonLd id="schema-breadcrumb" data={breadcrumb} />
      <JsonLd id="schema-tool" data={schema} />
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Free planning tool</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Budget Tracker</h1>
        <p className="mt-4 max-w-3xl leading-7 text-[#4d403a]">Set your budget, track estimated vs. actual costs, and understand where your money is going. Pre-filled for Gujarati and South Asian weddings, with categories for mandap, outfits, Garba/Sangeet, ceremony, and guest logistics.</p>
        <BudgetTrackerClient />
      </div>
    </main>
  )
}
