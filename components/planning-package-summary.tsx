import Link from "next/link"
import { mexicoPackages } from "@/lib/mexico-packages"
import { destinationFeasibilityPlan } from "@/lib/destination-feasibility-plan"

export function PlanningPackageSummary() {
  return <section className="bg-[#f4eee4] px-6 py-16">
    <div className="mx-auto max-w-6xl">
      <h2 className="font-serif text-4xl font-semibold">Indian destination wedding packages in Mexico: our planning fees</h2>
      <p className="mt-4 max-w-3xl leading-7 text-[#4d403a]">CeremonyVerse planning services are priced separately from the resort celebration, guest rooms, flights, food, décor, and vendors. Choose the support you need; a private written proposal confirms the final scope and fee.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-[#c5a059] bg-white p-7">
          <h3 className="font-serif text-3xl font-semibold">Feasibility &amp; Action Plan</h3>
          <p className="mt-3 text-xl font-semibold text-[#7a6841]">$300 USD</p>
          <p className="mt-3 leading-7">For couples comparing the destination, budget, and next commitment.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">{destinationFeasibilityPlan.includes.map(x=><li key={x}>{x}</li>)}</ul>
          <Link href={destinationFeasibilityPlan.href} className="mt-6 inline-block font-semibold text-[#7a6841] underline">Start with the $300 Feasibility Plan</Link>
        </article>
        {mexicoPackages.map(tier=><article key={tier.name} className="rounded-2xl border border-[#d9cfbf] bg-white p-7">
          <h3 className="font-serif text-3xl font-semibold">{tier.name}</h3>
          <p className="mt-3 text-xl font-semibold text-[#7a6841]">{tier.priceLabel}</p>
          <p className="mt-3 leading-7">{tier.bestFor}. {tier.timeline}.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7">{tier.includes.slice(0,4).map(x=><li key={x}>{x}</li>)}</ul>
          <Link href="/pricing/#mexico-concierge" className="mt-6 inline-block font-semibold text-[#7a6841] underline">Review all inclusions and exclusions</Link>
        </article>)}
      </div>
      <p className="mt-6 leading-7 text-[#4d403a]">The first 30-minute consultation is free. The $300 plan is optional and credited toward a CeremonyVerse planning service fee when the planning contract is signed within 30 days after delivery of the written plan. It is non-refundable once work begins. Resort and other third-party charges are separate.</p>
    </div>
  </section>
}
