import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"
import { StrategyMatcherClient } from "./strategy-matcher-client"

export const metadata = buildMetadata({
  path: "/planning-tools/strategy-matcher/",
  title: "Resort Strategy Matcher — Personalized Consultation Wizard",
  description:
    "Answer five questions about your South Asian destination wedding, honeymoon, or group trip — guest count, elder mobility, cultural events, and Jain/Satvik/Halal catering — and Mini Patel reviews your requirements and replies with a personalized resort strategy.",
  keywords:
    "resort strategy matcher, South Asian destination wedding consultation, Jain catering resort requirements, elder accessible resort rooms, destination wedding questionnaire, personalized resort recommendation",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Planning Tools", url: "/planning-tools/" },
  { name: "Resort Strategy Matcher", url: "/planning-tools/strategy-matcher/" },
])

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Resort Strategy Matcher",
  url: "https://www.ceremonyverse.com/planning-tools/strategy-matcher/",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  description:
    "A free five-step consultation wizard that compiles a South Asian family's celebration type, guest logistics, cultural events, and strict dietary requirements into a personalized resort strategy reviewed by the founder.",
}

const afterSubmission = [
  {
    step: "Mini reviews personally",
    body: "Your answers land with Mini Patel — not a call center. She reads the cultural events, the elder-mobility answer, and the dietary requirements against resorts that can genuinely deliver them.",
  },
  {
    step: "Your tracking tracker arrives",
    body: "Check your email for the custom tracking tracker and scheduling instructions — the same room-block and dietary tools our planning families use, populated with your context.",
  },
  {
    step: "You choose the next step",
    body: "Book a free 30-minute strategy call, keep using the free tools, or walk away. Nothing is locked in until you sign a written proposal you understand.",
  },
]

export default function StrategyMatcherPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-calculator" data={calculatorSchema} />

      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            USA &amp; Canada family planning tool
          </p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Resort Strategy Matcher</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
            Five questions. One honest strategy. Tell us what you&apos;re planning, who&apos;s traveling, which
            events you&apos;re hosting, and how strict the kitchen needs to be — and Mini Patel reviews your answers
            personally before anything else happens.
          </p>
        </div>
      </section>

      <StrategyMatcherClient />

      <section className="bg-[#f0ebe3] px-6 py-20 print:hidden">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">What happens after you submit</p>
          <h2 className="font-serif text-4xl font-semibold">No call center. No scripted pitch.</h2>
          <p className="mt-4 leading-7 text-[#4d403a]">
            The wizard compiles your requirements; the human part stays human. Here is exactly what happens next.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {afterSubmission.map((item) => (
            <article key={item.step} className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
              <h3 className="font-serif text-2xl font-semibold">{item.step}</h3>
              <p className="mt-4 leading-7 text-[#4d403a]">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 sm:flex-row">
          <Link href="/how-it-works/" className="rounded-full bg-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-white">
            See How the Planning Process Works
          </Link>
          <Link href="/indian-destination-wedding-planner-mexico/" className="rounded-full border border-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-[#7a6841]">
            Explore Mexico Destination Planning
          </Link>
        </div>
      </section>
    </main>
  )
}
