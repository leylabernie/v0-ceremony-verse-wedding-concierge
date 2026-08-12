export const destinationFeasibilityPlan = {
  name: "Destination Wedding Feasibility & Action Plan",
  shortName: "Feasibility & Action Plan",
  price: 300,
  priceLabel: "$300",
  href: "/destination-wedding-feasibility-plan/",
  contactHref: "/contact/?service=feasibility&from=feasibility-plan",
  bestFor:
    "Couples who need a realistic written starting plan before choosing a resort or committing to full planning.",
  description:
    "CeremonyVerse organizes the couple's own dates, guest range, event count, budget scope, travel obligations, and current written information into a practical decision plan.",
  includes: [
    "One private 60-minute working session after the free consultation",
    "Review of the completed CeremonyVerse budget and guest-cost worksheets",
    "Review of up to two current resort or planner proposals, if available",
    "Two guest-count or budget scenarios when they would clarify the decision",
    "A written action brief identifying cost categories, missing information, decision owners, and the next questions to ask",
    "One private 20-minute follow-up to clarify the written plan",
  ],
  excludes: [
    "A resort, venue, vendor, room-rate, or availability quote",
    "Legal, immigration, insurance, tax, or travel-agent advice",
    "Booking rooms, flights, transfers, venues, or vendors",
    "Full planning, vendor management, design, or on-site coordination",
  ],
  creditWindowDays: 30,
} as const

export const destinationFeasibilityCredit =
  `When you sign a CeremonyVerse destination-planning contract within ${destinationFeasibilityPlan.creditWindowDays} days after the written plan is delivered, the full ${destinationFeasibilityPlan.priceLabel} is credited toward your CeremonyVerse planning service fee. The credit does not apply to resort, venue, vendor, travel, or other third-party charges. If no planning contract is signed within that period, the ${destinationFeasibilityPlan.priceLabel} plan remains a completed standalone service and is non-refundable once work begins.`
