import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { BaraatEventPlannerClient } from "./baraat-event-planner-client"

export const metadata = buildMetadata({
  path: "/planning-tools/baraat-event-planner/",
  title: "Multi-Day Baraat & Event Logistics Planner",
  description:
    "Check the events you're hosting — Ganesh Puja, Mehndi, Sangeet, Baraat, Vidai, Reception — and get the resort venue checklist: procession pathways, sound permits, power, vendor fees, and elder-friendly logistics for Mexico, Jamaica, or Punta Cana.",
  keywords:
    "baraat horse resort requirements, Indian wedding event checklist resort, sangeet sound permit all inclusive, multi-day Indian wedding itinerary planner, baraat procession pathway resort",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Baraat & Event Logistics Planner", url: "/planning-tools/baraat-event-planner/" },
])

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Multi-Day Baraat & Event Logistics Planner",
  url: "https://www.ceremonyverse.com/planning-tools/baraat-event-planner/",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  description:
    "A free planner that converts the traditional events a South Asian family is hosting — Ganesh Puja, Mehndi, Sangeet, Baraat, Vidai, Reception — into a resort venue checklist covering procession pathways, sound permits, power, and vendor fees.",
}

const failurePatterns = [
  {
    title: "The horse wasn't the problem",
    body: "The resort had a horse. The horse was not trained for the noise and movement of an Indian baraat with 150 people walking behind it — discovered the day before, by the equestrian vendor's casual remark.",
  },
  {
    title: "The staging was",
    body: "The decorator's mandap design collided with the resort's staging size constraint — caught only because she asked. Had she not, the mandap would have been built in her workshop and not fit on site.",
  },
  {
    title: "The fees hid in the middle",
    body: "Outside-vendor fees, staging, turmeric cleanup, day passes, vendor meals — each a real line item that appeared after the proposal was signed, not before.",
  },
]

export default function BaraatEventPlannerPage() {
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
            Multi-Day Baraat &amp; Event Logistics Planner
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
            Resorts are built for one-night weddings. Yours is a Ganesh Puja at sunrise, a Haldi that stains, a
            Sangeet past midnight, and a baraat that needs a real pathway. Tick your events and the tool builds every
            resort requirement you should see in writing before you sign.
          </p>
        </div>
      </section>

      <BaraatEventPlannerClient />

      <section className="bg-[#f0ebe3] px-6 py-20 print:hidden">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Why this checklist exists</p>
          <h2 className="font-serif text-4xl font-semibold">Every line came from a real wedding</h2>
          <p className="mt-4 leading-7 text-[#4d403a]">
            Three family weddings in Mexico taught these lessons the expensive or stressful way. The checklist is how
            the next family learns them for free.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {failurePatterns.map((pattern) => (
            <article key={pattern.title} className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
              <h3 className="font-serif text-2xl font-semibold">{pattern.title}</h3>
              <p className="mt-4 leading-7 text-[#4d403a]">{pattern.body}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 sm:flex-row">
          <Link href="/blog/hidden-resort-fees-4-day-indian-wedding-cancun/" className="rounded-full bg-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-white">
            See the Hidden Resort Fees
          </Link>
          <Link href="/before-signing-indian-wedding-resort-proposal/" className="rounded-full border border-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-[#7a6841]">
            Questions to Ask Before Signing
          </Link>
        </div>
      </section>
    </main>
  )
}
