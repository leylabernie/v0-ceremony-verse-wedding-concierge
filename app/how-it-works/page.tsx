import Link from "next/link"
import { JsonLd, buildBreadcrumb, buildFaqSchema, buildHowToSchema, buildMetadata, buildServiceSchema } from "@/lib/seo"
import { destinationFeasibilityCredit } from "@/lib/destination-feasibility-plan"

export const metadata = buildMetadata({
  path: "/how-it-works/",
  title: "How CeremonyVerse Works: Four Clear Planning Phases",
  description: "Four clear phases for CeremonyVerse destination-wedding planning: a free 30-minute consultation, a defined recommendation, contracted planning, and wedding-week delivery.",
  keywords: "Indian destination wedding planning process, free wedding planning consultation, Gujarati wedding planning Mexico Jamaica Punta Cana",
})

const phases = [
  {
    name: "Complimentary introduction",
    label: "Phase one · Free for 30 minutes",
    text: "Register, request a time, and complete the short questionnaire. Mini uses the call to understand your destination ideas, dates, guest estimate, events, approximate budget, cultural priorities, and most urgent questions.",
    receive: "A candid conversation and a clear recommendation—without payment, a contract, or pressure to continue.",
  },
  {
    name: "Recommendation and scope",
    label: "Phase two · Choose only what is useful",
    text: "Some couples can move directly to a planning proposal. When current resort proposals or budget choices require deeper written research, CeremonyVerse may recommend the optional $300 Destination Wedding Feasibility & Action Plan.",
    receive: "A written next step. If you purchase the $300 plan and sign an eligible CeremonyVerse planning contract within 30 days after delivery, the full $300 is credited toward the planning fee.",
  },
  {
    name: "Contracted planning",
    label: "Phase three · One written scope",
    text: "Planning begins after the agreement is signed and the required first payment is received. Your proposal identifies the team, responsibilities, exclusions, CeremonyVerse fee, outside costs, milestones, approvals, travel, staffing, and on-site support.",
    receive: "An organized planning rhythm covering only the services you selected—from resort and vendor coordination to guest information, cultural details, and optional India sourcing.",
  },
  {
    name: "Wedding-week delivery",
    label: "Phase four · Finalize and celebrate",
    text: "The contracted team confirms timelines, vendors, event transitions, guest-facing details, weather alternatives, and escalation paths. Mini remains the consistent client contact while the destination team performs the local responsibilities in the agreement.",
    receive: "A coordinated wedding week followed by the contracted returns, outstanding provider items, remaining deliverables, and final closeout.",
  },
]

const faqItems = [
  { question: "Is the first consultation really free?", answer: "Yes. Your first 30-minute consultation with Mini requires no payment or contract. Any paid recommendation is presented separately after the call." },
  { question: "Do we have to purchase the $300 plan?", answer: "No. It is optional and recommended only when a written comparison or decision brief would be useful before full planning." },
  { question: "How does the $300 credit work?", answer: destinationFeasibilityCredit },
  { question: "When does planning officially begin?", answer: "Planning begins after the CeremonyVerse planning agreement is signed and the required first payment is received. The selected package and private proposal control the scope." },
]

const breadcrumbSchema = buildBreadcrumb([{ name: "Our Process", url: "/how-it-works/" }])
const serviceSchema = buildServiceSchema({ name: "CeremonyVerse Destination Wedding Planning", description: "A four-phase consultation-to-closeout planning process for Gujarati and Hindu destination weddings.", url: "/how-it-works/", category: "Destination Wedding Planning", areaServed: ["United States", "Canada", "Mexico", "Jamaica", "Punta Cana, Dominican Republic"] })
const howToSchema = buildHowToSchema({ name: "How CeremonyVerse Works", description: "Four phases from the complimentary introduction through wedding closeout.", url: "/how-it-works/", steps: phases.map((phase) => ({ name: phase.name, text: phase.text })) })
const faqSchema = buildFaqSchema(faqItems)

export default function HowItWorksPage() {
  return (
    <main className="cv-restored-type bg-[#f8f5ef] text-[#201d1a]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <section className="bg-[#211d19] px-6 py-24 text-center text-white sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-[#caa867]">Our approach</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-medium leading-tight !text-white sm:text-7xl">Four phases. One clearly defined relationship.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 !text-white/72">Start with a free conversation. Commit only after the recommendation, responsibilities, CeremonyVerse fee, and outside costs are clear.</p>
          <Link href="/contact/?from=process" className="mt-9 inline-flex rounded-full bg-[#caa867] px-8 py-4 text-sm font-semibold !text-[#211d19]">Schedule Your Free Consultation</Link>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <ol className="border-t border-[#cfc2af]">
            {phases.map((phase, index) => (
              <li key={phase.name} className="grid gap-6 border-b border-[#cfc2af] py-12 lg:grid-cols-[84px_0.8fr_1.25fr] lg:items-start">
                <span className="font-serif text-4xl text-[#9b7c43]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80683b]">{phase.label}</p>
                  <h2 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-4xl">{phase.name}</h2>
                </div>
                <div>
                  <p className="leading-8 text-[#51483f]">{phase.text}</p>
                  <div className="mt-6 border-l-2 border-[#caa867] pl-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#80683b]">What you receive</p>
                    <p className="mt-2 text-base leading-7 text-[#51483f]">{phase.receive}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#eee7dc] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Before you begin</p>
          <h2 className="mt-4 text-center font-serif text-4xl font-medium sm:text-6xl">Clear answers, before any commitment.</h2>
          <div className="mt-12 space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-2xl border border-[#d5c9b8] bg-[#fffdf9] p-6">
                <summary className="cursor-pointer font-semibold text-[#201d1a]">{item.question}</summary>
                <p className="mt-4 leading-7 text-[#51483f]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#80683b] px-6 py-24 text-center text-white">
        <h2 className="font-serif text-4xl font-medium !text-white sm:text-6xl">Start with clarity, not a commitment.</h2>
        <Link href="/contact/?from=process-final" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#2a241e]">Schedule Your Free 30-Minute Consultation</Link>
      </section>
    </main>
  )
}
