import { VisibleFaqs } from "@/components/visible-faqs"
import { PlanningNextStep } from "@/components/planning-next-step"
import { BudgetPlannerClient } from "./budget-planner-client"
import { buildFaqSchema, buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import Link from "next/link"

export const metadata = buildMetadata({
  path: "/planning-tools/budget/",
  title: "Indian Destination Wedding Budget Calculator",
  description:
    "Estimate an Indian destination-wedding budget using reviewed resort starting rates for Mexico and Punta Cana, or your own written quotes for Mexico, Jamaica, and Punta Cana.",
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

const faqSchema = buildFaqSchema([{"question": "Is this destination wedding cost calculator free?", "answer": "Yes. You can use the calculator without paying a planning fee. The optional $300 Feasibility Plan is a separate service for couples who want a working session and a written action brief."}, {"question": "Can I compare Mexico, Jamaica, and Punta Cana?", "answer": "Yes. Use the same guest count, event schedule, room assumptions, and currency for each destination. Enter current written proposals where available. Published resort starting packages are dated benchmarks, not complete wedding quotes."}, {"question": "What should I add beyond the resort wedding package?", "answer": "Include private-event overages, d\u00e9cor, production, outside-vendor charges, planning and staffing, host-paid travel, room-block exposure, taxes, service charges, and a reserve. Add outfits and shipping separately if they belong in the host budget. Do not duplicate costs already included in a quoted package."}, {"question": "What should I bring to the free consultation?", "answer": "Bring your preferred destinations and dates, likely guest range, event list, host budget, guest travel expectations, and up to two current resort proposals if available. Flag every calculator line that is still an estimate."}])

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
            For optional sourcing, select the U.S. or Canada delivery destination and include the relevant shipping and import-cost estimate.
          </p>
          <p className="mx-auto mt-5 max-w-3xl leading-7 text-[#4d403a]">
            A resort package is not the complete wedding budget. Add rooms paid by the family, room-block exposure,
            planning and on-site staff, production, décor, specialists, transport, taxes, service charges, and a
            contingency. Read the <Link href="/indian-destination-wedding-cost/" className="font-semibold text-[#7a6841] underline underline-offset-4">complete Indian destination wedding cost guide</Link> before comparing totals.
          </p>
        </div>
      </section>
      <BudgetPlannerClient />
      <JsonLd id="schema-faq" data={faqSchema} />
      <VisibleFaqs schema={faqSchema} />
      <PlanningNextStep />
    </main>
  )
}
