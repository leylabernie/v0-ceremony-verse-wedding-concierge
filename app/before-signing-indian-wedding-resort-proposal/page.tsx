import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/before-signing-indian-wedding-resort-proposal/",
  title: "5 Questions Before Choosing an Indian Wedding Resort",
  description:
    "A concise decision guide for comparing Mexico resort proposals for Gujarati and Hindu destination weddings.",
  keywords:
    "Indian wedding resort proposal questions, Gujarati destination wedding Mexico, Hindu destination wedding resort, Mexico wedding planning",
})

const decisionQuestions = [
  {
    number: "01",
    question: "Is this the complete cost?",
    answer:
      "Ask what changes when guest count, event hours, menus, decor, private spaces, taxes, service charges, or vendor choices change.",
  },
  {
    number: "02",
    question: "Will the guest plan hold?",
    answer:
      "Confirm rooms, rates, cut-off dates, pickup or attrition exposure, event access, and who answers guest travel questions.",
  },
  {
    number: "03",
    question: "Can each cultural event actually happen here?",
    answer:
      "Get written answers for event spaces, indoor backup, sound limits, Indian food, mandap, baraat, sangeet, mehndi, haldi, and vendor rules.",
  },
  {
    number: "04",
    question: "Who is responsible during wedding week?",
    answer:
      "Know who owns coordination, local delivery, guest movement, vendor access, family approvals, and urgent decisions during the week.",
  },
  {
    number: "05",
    question: "What must be written before we say yes?",
    answer:
      "Have every exception, concession, fee, backup plan, cancellation term, change rule, and responsibility appear in the final written document.",
  },
] as const

const faqs = [
  {
    question: "What if one of these answers is unclear?",
    answer:
      "Do not rush the decision. Bring the question, any proposal, and your current guest or event assumptions to the free consultation. CeremonyVerse can help identify what needs a written answer and what can wait.",
  },
  {
    question: "What if we have two resort proposals?",
    answer:
      "Compare them using the same guest count, event outline, room assumptions, and cost categories. The Resort Proposal Calculator gives you a private place to organize the difference before your next call.",
  },
  {
    question: "Is this legal or travel advice?",
    answer:
      "No. This is a planning guide. Resorts, travel providers, local planners, lawyers, insurance professionals, and other qualified advisers should answer matters within their own expertise and review binding documents.",
  },
]

const breadcrumbSchema = buildBreadcrumb([
  { name: "Free Guides", url: "/free-guides/" },
  { name: "5 Questions Before Choosing", url: "/before-signing-indian-wedding-resort-proposal/" },
])
const faqSchema = buildFaqSchema(faqs)

export default function BeforeSigningIndianWeddingResortProposalPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">A five-question decision guide · no email gate</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold !text-white sm:text-6xl">Before you choose a resort, ask these five questions</h1>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 !text-white/80">
            A short starting point for Gujarati and Hindu families comparing Mexico destination-wedding proposals. You do not need to complete a long worksheet before you ask for help.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=feasibility&from=five-question-guide-hero" className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]">
              Bring Your Question to a Free Consultation
            </Link>
            <Link href="/planning-tools/resort-comparison/" className="rounded-full border border-white/55 px-7 py-4 text-sm font-semibold !text-white">
              Compare Two Proposals
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Start here</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">One clear answer can make the next step lighter</h2>
          <p className="mt-5 text-lg leading-8 text-[#4d403a]">
            Use these questions to guide the next resort, planner, catering, or family conversation. You are looking for a clear written answer—not a reason to do more work on your own.
          </p>
        </div>
      </section>

      <section className="border-y border-[#e6dfd5] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {decisionQuestions.map((item) => (
              <article key={item.number} className="flex min-h-full flex-col rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-7">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#7a6841]">{item.number}</p>
                <h2 className="mt-3 font-serif text-2xl font-semibold">{item.question}</h2>
                <p className="mt-4 leading-7 text-[#4d403a]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">When you need more detail</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Use a tool only when it helps the decision</h2>
            <p className="mt-5 leading-7 text-[#4d403a]">
              If you are comparing two written proposals, use the private Resort Proposal Calculator. If you have one question that is holding up the plan, start with the free 30-minute conversation instead.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start xl:flex-row">
              <Link href="/planning-tools/resort-comparison/" className="inline-flex justify-center rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white">
                Compare Two Resorts
              </Link>
              <Link href="/contact/?service=feasibility&from=five-question-guide-detail" className="inline-flex justify-center rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841]">
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-[#d9cfbf] bg-white p-7">
                <h3 className="font-serif text-2xl font-semibold">{faq.question}</h3>
                <p className="mt-4 leading-7 text-[#4d403a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-6 text-[#5e4a40]">
          This guide is planning information, not legal, financial, insurance, immigration, or travel-agent advice. Use current provider documents and qualified professionals for binding decisions.
        </p>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0dfbd]">A simple next step</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold !text-white sm:text-5xl">You do not need every answer before the first call</h2>
          <p className="mt-5 text-lg leading-8 !text-white/85">
            Your first 30-minute consultation is free. Bring the one decision that feels unclear, and we will help you identify the next question to resolve before you commit.
          </p>
          <Link href="/contact/?service=feasibility&from=five-question-guide-final" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
