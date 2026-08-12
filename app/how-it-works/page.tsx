import Link from "next/link"
import { JsonLd, buildBreadcrumb, buildFaqSchema, buildHowToSchema, buildMetadata, buildServiceSchema } from "@/lib/seo"
import { destinationFeasibilityCredit } from "@/lib/destination-feasibility-plan"

export const metadata = buildMetadata({
  path: "/how-it-works/",
  title: "How CeremonyVerse Works: Free Call to Wedding Closeout",
  description: "A simple CeremonyVerse process: free 30-minute consultation, focused questionnaire, optional written plan, contract, destination planning, wedding-week execution, and closeout.",
  keywords: "Indian destination wedding planning process, free wedding planning consultation, Gujarati wedding planning Mexico Jamaica Punta Cana",
})

const steps = [
  { name: "Schedule the free consultation", label: "No payment or contract", text: "Submit a short registration, request an available time, and receive the pre-call questionnaire. Your first 30-minute conversation is free." },
  { name: "Prepare for one useful conversation", label: "Before the call", text: "Share your timeframe, guest and event estimates, destinations, budget scope, travel origins, cultural priorities, and any resort proposals you already have." },
  { name: "Receive an honest recommendation", label: "During the call", text: "We discuss feasibility, clarify what the budget must cover, identify major unknowns, and explain whether a free next step, the optional $300 written plan, or a planning package makes sense." },
  { name: "Use the written plan when you need deeper research", label: "Optional · $300", text: "If selected, CeremonyVerse turns your facts and up to two current proposals into a practical decision brief. We review it together before you decide whether to continue." },
  { name: "Review the scope and sign", label: "Before paid planning", text: "The proposal identifies the planning level, people, responsibilities, exclusions, CeremonyVerse fee, outside costs, payment milestones, approvals, change rules, travel, staffing, and on-site scope." },
  { name: "Plan the destination and guest experience", label: "Active planning", text: "The contracted team coordinates the applicable resort, venue, room-block, event, vendor, cultural, food, design, production, family, guest, arrival, and optional India-sourcing work." },
  { name: "Finalize and execute the wedding", label: "Wedding week", text: "Final confirmations, master timelines, weather plans, vendor arrivals, event transitions, guest-facing information, and issue escalation are managed under the signed responsibilities." },
  { name: "Close the celebration properly", label: "After the final event", text: "The team tracks the contracted returns, outstanding provider items, remaining deliverables, records, and final debrief before the engagement closes." },
]

const faqItems = [
  { question: "Is the first consultation really free?", answer: "Yes. The first 30-minute consultation requires no payment or contract. Paid work begins only after you approve the applicable written service and terms." },
  { question: "Do we have to purchase the $300 plan?", answer: "No. It is an optional standalone service for couples who need a written comparison or decision brief before choosing full planning. It is recommended only when that work is useful." },
  { question: "Is the $300 credited if we continue?", answer: destinationFeasibilityCredit },
  { question: "When does planning officially begin?", answer: "Planning begins after the CeremonyVerse planning contract is signed and the required first payment is received. The selected package and private proposal control the scope." },
]

const breadcrumbSchema = buildBreadcrumb([{ name: "Our Process", url: "/how-it-works/" }])
const serviceSchema = buildServiceSchema({ name: "CeremonyVerse Destination Wedding Planning", description: "A clear consultation-to-closeout planning process for Gujarati and Hindu destination weddings.", url: "/how-it-works/", category: "Destination Wedding Planning", areaServed: ["United States", "Canada", "Mexico", "Jamaica", "Punta Cana, Dominican Republic"] })
const howToSchema = buildHowToSchema({ name: "How CeremonyVerse Works", description: "From the free consultation through wedding closeout.", url: "/how-it-works/", steps: steps.map((step) => ({ name: step.name, text: step.text })) })
const faqSchema = buildFaqSchema(faqItems)

export default function HowItWorksPage() {
  return (
    <main className="bg-[#f8f5ef] text-[#201d1a]">
      <JsonLd id="schema-service" data={serviceSchema} /><JsonLd id="schema-breadcrumb" data={breadcrumbSchema} /><JsonLd id="schema-howto" data={howToSchema} /><JsonLd id="schema-faq" data={faqSchema} />
      <section className="bg-[#211d19] px-6 py-24 text-center text-white sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-[#caa867]">A simple, defined journey</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-medium leading-tight !text-white sm:text-7xl">From first conversation to final farewell.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 !text-white/72">Begin with a free 30-minute call. Choose paid work only after you understand the recommendation, people, responsibilities, fee, and outside costs.</p>
          <Link href="/contact/?from=process" className="mt-9 inline-flex rounded-full bg-[#caa867] px-8 py-4 text-sm font-semibold !text-[#211d19]">Schedule Your Free Consultation</Link>
        </div>
      </section>
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <ol className="border-t border-[#cfc2af]">
            {steps.map((step, index) => (
              <li key={step.name} className="grid gap-5 border-b border-[#cfc2af] py-10 md:grid-cols-[72px_1fr_1.5fr] md:items-start">
                <span className="font-serif text-4xl text-[#9b7c43]">{String(index + 1).padStart(2, "0")}</span>
                <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80683b]">{step.label}</p><h2 className="mt-3 font-serif text-3xl font-medium">{step.name}</h2></div>
                <p className="leading-8 text-[#51483f]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-[#eee7dc] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Before you begin</p>
          <h2 className="mt-4 text-center font-serif text-4xl font-medium sm:text-6xl">Clear answers, before any commitment.</h2>
          <div className="mt-12 space-y-3">{faqItems.map((item) => <details key={item.question} className="rounded-2xl border border-[#d5c9b8] bg-[#fffdf9] p-6"><summary className="cursor-pointer font-semibold text-[#201d1a]">{item.question}</summary><p className="mt-4 leading-7 text-[#51483f]">{item.answer}</p></details>)}</div>
        </div>
      </section>
      <section className="bg-[#80683b] px-6 py-24 text-center text-white"><h2 className="font-serif text-4xl font-medium !text-white sm:text-6xl">Start with clarity, not a commitment.</h2><Link href="/contact/?from=process-final" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#2a241e]">Schedule Your Free 30-Minute Consultation</Link></section>
    </main>
  )
}
