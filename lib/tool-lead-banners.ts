import type { ToolLeadBannerProps } from "@/components/planning-tools/ToolLeadBanner"

export const toolLeadBanners = {
  "budget-tracker": {
    badgeText: "MINI'S BUDGET TIP",
    title: "Navigating Resort Minimums or Outside Catering Fees?",
    description: "Before you sign, identify which resort line items need written clarification: outside-catering permissions, vendor access, décor charges, and event minimums. Start with a free call to discuss your questions and whether a paid proposal review would help.",
    primaryCtaText: "Book a Free 30-Min Consultation",
    primaryCtaHref: "/schedule/?from=tool-budget-tracker",
    secondaryCtaText: "Ask on WhatsApp",
    secondaryCtaHref: "https://api.whatsapp.com/send/?phone=12153419990&text=Hi%20Mini%2C%20I%20am%20using%20the%20budget%20tracker%20and%20have%20a%20question%20about%20my%20resort%20proposal.&type=phone_number&app_absent=0",
  },
  "vendor-manager": {
    badgeText: "CONTRACT QUESTIONS",
    title: "Reviewing Quotes for Outside Indian Caterers or Mandap Decorators?",
    description: "Ask your resort to confirm outside-vendor permissions, access rules, and any day-pass or setup charges in writing. Talk with Mini about your vendor questions and the right next step; the introductory call is not a contract audit or legal review.",
    primaryCtaText: "Discuss Vendor Questions with Mini",
    primaryCtaHref: "/schedule/?from=tool-vendor-manager",
  },
  "guest-list": {
    badgeText: "ROOM BLOCK CHECK",
    title: "Working Out Your Room-Block Commitment?",
    description: "Guest counts are not room-night commitments. Discuss host-paid rooms, likely stays, deposit dates, release deadlines, and attrition questions before committing. Resort terms vary; Mini can help identify which written answers you still need.",
    primaryCtaText: "Discuss Your Room Block for Free",
    primaryCtaHref: "/schedule/?from=tool-guest-list",
  },
  "wedding-checklist": {
    badgeText: "LOGISTICS CHECK",
    title: "Planning a Multi-Day Gujarati or Hindu Destination Wedding?",
    description: "From written satvik catering requirements to Baraat routes and venue permissions, bring your three- or four-day event questions to Mini. Start with a free introductory call to discuss your timeline and the planning support you need.",
    primaryCtaText: "Book Your Free Planning Call",
    primaryCtaHref: "/schedule/?from=tool-checklist",
  },
  "vision-boards": {
    badgeText: "DÉCOR & SOURCING",
    title: "Sourcing Mandap Décor or Traditional Outfits from India?",
    description: "Turn your inspiration into questions about sourcing, shipping, customs costs, and destination setup. Explore Mini's flat-fee India outfit sourcing and discuss whether décor coordination fits your written planning scope. Products and third-party charges are separate; savings are not guaranteed.",
    primaryCtaText: "Talk to Mini About Sourcing",
    primaryCtaHref: "/schedule/?from=tool-vision-boards",
  },
} satisfies Record<string, ToolLeadBannerProps>
