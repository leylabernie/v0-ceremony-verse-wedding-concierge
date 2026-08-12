export type MexicoPackage = {
  name: string
  priceLabel?: string
  numericPrice?: number
  timeline: string
  bestFor: string
  description: string
  includes: string[]
  excludes: string[]
  cta: string
  href: string
  category: "Planning" | "Concierge"
}

export const mexicoPackages: MexicoPackage[] = [
  {
    name: "Full Planning & Design",
    priceLabel: "Starting at $8,000 USD",
    numericPrice: 8000,
    timeline: "Begins 9+ months before the wedding",
    bestFor: "Best for: couples who want comprehensive planning from the beginning",
    description:
      "A start-to-finish planning and design experience for a cohesive, multi-day destination wedding.",
    includes: [
      "Research and coordination of suitable local vendor options",
      "Venue sourcing and management",
      "Guidance during essential site visits",
      "Structured weekly progress meetings and updates",
      "Coordination and on-site management for the agreed multi-day events",
      "Gujarati or Hindu cultural brief, family decision map, and approval tracking",
      "Resort-proposal, complete-budget, and guest-information review",
      "Alignment with optional CeremonyVerse India sourcing when requested",
    ],
    excludes: [
      "Resort, venue, vendor, travel, or production charges",
      "Taxes, planner travel or lodging, added staffing, and services outside the signed proposal",
    ],
    cta: "Request a Private Proposal",
    href: "/contact/?service=mexico",
    category: "Planning",
  },
  {
    name: "Partial Planning & Coordination",
    priceLabel: "Starting at $5,500 USD",
    numericPrice: 5500,
    timeline: "Begins about 6 months before the wedding",
    bestFor: "Best for: couples who have secured a venue and initial vendors",
    description:
      "Professional takeover of the remaining planning, logistics, and execution so every event works as one celebration.",
    includes: [
      "Vendor-management takeover and contract review",
      "Detailed timelines for the agreed multi-day festivities",
      "Ongoing planning and logistics support",
      "On-site execution and management for the scheduled events",
      "Cultural-requirements handover, family decision map, and approval tracking",
      "Guest-information schedule and optional India-sourcing alignment",
    ],
    excludes: [
      "Work completed before the package begins",
      "Resort, venue, vendor, travel, production, tax, or added-staffing charges",
    ],
    cta: "Request a Private Proposal",
    href: "/contact/?service=mexico",
    category: "Planning",
  },
  {
    name: "Event Coordination & Management",
    priceLabel: "Starting at $4,000 USD",
    numericPrice: 4000,
    timeline: "Begins with a structured final handover",
    bestFor: "Best for: couples with finalized plans, contracts, and vendors",
    description:
      "A complete handover and on-site management service so the couple can step back and enjoy the celebration.",
    includes: [
      "Comprehensive handover of finalized details and vendor confirmations",
      "One on-site point of contact for the contracted vendors",
      "Master timeline orchestration from start to finish",
      "Behind-the-scenes troubleshooting during the agreed event scope",
      "Final cultural, family-contact, and responsibility handover",
    ],
    excludes: [
      "Full planning or vendor sourcing before handover",
      "Planner travel, lodging, added staffing, or services outside the signed proposal",
    ],
    cta: "Check 2027 Availability",
    href: "/contact/?service=mexico",
    category: "Planning",
  },
  {
    name: "Family Concierge Support",
    timeline: "Available alongside a destination-planning package",
    bestFor: "Best for: families who want one organized US-based contact",
    description:
      "CeremonyVerse keeps family questions, decisions, meeting follow-ups, and agreed guest details organized across the planning journey.",
    includes: [
      "Family priorities and decision tracking",
      "Meeting notes and follow-up reminders",
      "Family and guest-information coordination",
      "Connection to CeremonyVerse India wedding sourcing when requested",
    ],
    excludes: [
      "Legal, immigration, or travel-agent advice",
      "Responsibilities outside the signed concierge scope",
    ],
    cta: "Discuss Family Concierge Support",
    href: "/contact/?service=mexico",
    category: "Concierge",
  },
  {
    name: "Guest Travel & Arrival Support",
    timeline: "Custom scope based on guest count and travel days",
    bestFor: "Best for: destination guest logistics and the arrival experience",
    description:
      "A tailored support plan for guest information, rooming details, transfers, arrivals, and welcome touches.",
    includes: [
      "Guest flight and rooming-list organization",
      "Transfer coordination through independent providers",
      "Arrival guidance and welcome-kit planning",
      "Optional hospitality-desk support",
    ],
    excludes: [
      "Selling flights, rooms, or transfers",
      "Provider charges and items outside the signed scope",
    ],
    cta: "Request a Custom Proposal",
    href: "/contact/?service=mexico",
    category: "Concierge",
  },
]

export const mexicoAvailabilityMessage =
  "Planning date availability is confirmed after the destination, event dates, and required on-site scope are reviewed."

export const destinationPackagePricingNote =
  "Starting prices cover the listed CeremonyVerse planning scope for an agreed wedding. The final written proposal may change with dates, destination, event count, guest count, site visits, travel, lodging, staffing, complexity, and requested additions. Resort, room, venue, catering, vendor, production, décor, travel-provider, tax, service-charge, permit, insurance, shipping, customs, and other third-party costs are separate unless the signed proposal expressly includes them. Availability, prices, and terms are not guaranteed until confirmed in writing."
