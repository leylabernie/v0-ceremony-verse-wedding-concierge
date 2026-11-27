import Link from "next/link"
import { destinationFeasibilityCredit, getFeasibilityPlanCta } from "@/lib/destination-feasibility-plan"

export function FeasibilityBriefPreview() {
  const checkout = getFeasibilityPlanCta()
  return (
    <section className="bg-[#f4eee4] px-6 py-16" aria-labelledby="action-brief-preview">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#7a6841]">What you receive · Written action brief preview</p>
        <h2 id="action-brief-preview" className="mt-3 font-serif text-3xl sm:text-4xl">Your $300 plan, organized for the next decision</h2>
        <p className="mt-5 max-w-3xl leading-7">This is the brief’s structure, not a sample client result or resort quote. Findings depend on the figures and documents you provide; missing information is flagged, not filled in with invented estimates.</p>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            ["01", "Guest-count & event-budget comparison", "A shared cost basis for up to two scenarios when useful: guest count, event count, host-paid travel, known taxes and fees, and missing cost categories."],
            ["02", "Resort proposal red-flag checklist", "Review up to two current proposals, if supplied: catering permissions, dietary requirements, outside-vendor fees, event minimums, rain backup, and questions needing written answers."],
            ["03", "Room-block exposure summary", "Separate host-paid rooms from guest-paid rooms. Flag known deposits, attrition, cancellation dates, and unresolved contract questions. This is not legal advice or a booking authorization."],
            ["04", "Decision owners & next actions", "A prioritized question list: what to confirm, who needs to answer, and which commitment should wait for written information. Includes a private 20-minute clarification follow-up."],
          ].map(([number, title, text]) => <li key={number} className="rounded-2xl border border-[#d9cfbf] bg-white p-7"><span className="font-semibold text-[#7a6841]">{number}</span><h3 className="mt-3 font-serif text-2xl">{title}</h3><p className="mt-4 leading-7">{text}</p></li>)}
        </ol>
        <div className="mt-6 rounded-2xl border border-[#d9cfbf] bg-white p-7"><h3 className="font-serif text-2xl">Your 30-day planning credit</h3><p className="mt-3 leading-7">{destinationFeasibilityCredit}</p></div>
        <div className="mt-7 flex flex-wrap gap-5">
          {checkout.configured && <a href={checkout.href} {...(checkout.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="rounded-full bg-[#7a6841] px-7 py-4 font-semibold text-white">Book &amp; Pay $300</a>}
          <Link href="/schedule/?from=action-brief-preview" className="rounded-full border border-[#7a6841] px-7 py-4 font-semibold">Book a free consultation</Link>
        </div>
        {!checkout.configured && <p className="mt-4 text-sm leading-6">Payment instructions are shared after the written scope is agreed. No online checkout is currently offered here.</p>}
      </div>
    </section>
  )
}
