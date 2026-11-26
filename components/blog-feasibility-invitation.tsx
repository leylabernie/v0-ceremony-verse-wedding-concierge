import Link from "next/link"
import {
  destinationFeasibilityPlan,
  getFeasibilityPlanCta,
} from "@/lib/destination-feasibility-plan"

export const BLOG_FEASIBILITY_CREDIT_STATEMENT =
  "Signing an eligible CeremonyVerse destination-planning contract within 30 days after written plan delivery credits the full $300 toward the planning service fee."

export function BlogFeasibilityInvitation({
  stripeFeasibilityUrl,
}: {
  stripeFeasibilityUrl?: string
} = {}) {
  const feasibilityCta = getFeasibilityPlanCta(
    stripeFeasibilityUrl ?? process.env.NEXT_PUBLIC_STRIPE_FEASIBILITY_URL,
  )

  return (
    <aside
      data-feasibility-invitation="true"
      aria-label="$300 Destination Wedding Feasibility & Action Plan"
      className="my-8 rounded-2xl border border-[#d7c7a4] bg-[#f4eee4] p-6 text-[#1f1f1f]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">
        Optional {destinationFeasibilityPlan.priceLabel} Written Decision Plan
      </p>
      <p className="mt-2 font-serif text-2xl font-semibold text-[#1f1f1f]">
        Start with the {destinationFeasibilityPlan.priceLabel} {destinationFeasibilityPlan.name}
      </p>
      <p className="mt-3 text-base leading-7 text-[#4d403a]">
        Want a written feasibility review before committing to full planning? After your free 30-minute consultation,
        the optional {destinationFeasibilityPlan.priceLabel} {destinationFeasibilityPlan.name} reviews your wedding brief
        and up to two current resort proposals line by line. {BLOG_FEASIBILITY_CREDIT_STATEMENT}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={feasibilityCta.href}
          {...(feasibilityCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex rounded-full bg-[#7a6841] px-5 py-2.5 text-sm font-semibold text-white no-underline"
        >
          {feasibilityCta.label}
        </a>
        <Link
          href={destinationFeasibilityPlan.href}
          className="inline-flex rounded-full border border-[#7a6841] bg-white px-5 py-2.5 text-sm font-semibold text-[#7a6841] no-underline"
        >
          Explore the $300 Feasibility Plan
        </Link>
        <Link
          href={destinationFeasibilityPlan.contactHref}
          className="inline-flex rounded-full border border-[#7a6841] px-5 py-2.5 text-sm font-semibold text-[#7a6841] no-underline"
        >
          Request a Free 30-Minute Consultation
        </Link>
      </div>
    </aside>
  )
}
