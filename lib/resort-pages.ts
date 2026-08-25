import type { DestinationPageData } from "@/lib/destination-pages"

/**
 * Resort-level planning pages.
 *
 * These pages reuse the destination landing component with the same structure
 * and styling. Every published figure must come from a cited public source
 * (see resortPackageBenchmarks.sourceHref and sources). Anything the resort
 * has not published — per-event capacity, menu pricing, room-block terms,
 * fire, sound, or Baraat rules — is framed as a question to confirm in a
 * current written proposal, never as a fact.
 */
export const moonPalaceCancun: DestinationPageData = {
  slug: "/resorts/moon-palace-cancun-indian-wedding/",
  shortName: "Moon Palace Cancún",
  title: "Indian wedding at Moon Palace Cancún",
  eyebrow: "Moon Palace Cancún planning guide",
  description:
    "Plan an Indian wedding at Moon Palace Cancún with published package prices, the in-house Indian kitchen, room-block questions, and the event, Mandap, Baraat, sound, and weather-backup terms to confirm in writing.",
  answer:
    "Moon Palace Cancún is one of the most experienced South Asian wedding resorts in Cancún: the Palace wedding team advertises celebrations for 300+ guests, an in-house Indian chef, customizable stages, henna artists, and Baraat horses. A fit decision still depends on written event-space guarantees, current menu pricing, room-block and attrition terms, and each family's guest count — not the brochure. CeremonyVerse helps U.S. and Canadian families verify those facts before signing.",
  idealFor: [
    "Families with 100–300+ guests who want a property experienced with large multi-day South Asian celebrations",
    "Couples who value an in-house Indian kitchen over imported catering for welcome, Sangeet, and reception menus",
    "Guest groups that benefit from a single all-inclusive property with organized arrival through Cancún International Airport",
    "Weddings planned far enough ahead to secure specific event spaces and group terms for peak dates",
  ],
  compareBeforeChoosing: [
    "Written event-space guarantees, seated capacity, and setup times for every event on the schedule",
    "Indian menu format, tasting process, per-event pricing, service charges, and taxes from a current proposal",
    "Room-block minimums, comp structure, and the attrition clause measured against the family's real guest count",
    "Mandap location options, fire or flameless Havan rules, Baraat route and fees, and sound curfews per space",
  ],
  facts: [
    {
      label: "Published capacity",
      value: "300+ guests",
      detail:
        "The Palace wedding team advertises Moon Palace for large, multi-day South Asian celebrations of 300 or more guests. Seated capacity per event space and setup limits must be confirmed in a current written proposal.",
    },
    {
      label: "Public package range",
      value: "$0 – $15,000",
      detail:
        "Moon Palace publishes wedding packages from a Complimentary ceremony option to a $15,000 Luxe package for up to 75 guests. These are package starting prices, not complete multi-event Indian wedding totals.",
    },
    {
      label: "Indian kitchen",
      value: "In-house chef",
      detail:
        "The resort's wedding team advertises an in-house Indian chef with menus including samosas, chicken tikka masala, and traditional rice dishes. Menu format, tastings, and per-event pricing require a current proposal.",
    },
    {
      label: "Pricing rule",
      value: "Current quote only",
      detail:
        "Packages, spaces, taxes, vendor rules, and concessions change. CeremonyVerse treats every material term as unconfirmed until it appears in a current resort-written quote for the family's dates.",
    },
  ],
  eventRows: [
    {
      event: "Welcome dinner, Mehndi, or poolside gathering",
      verify:
        "Privacy, shade, rain cover, guest access, food stations, music limits, and the arrival plan for guests still flying in.",
      risk:
        "Treating a casual event as operationally simple when setup, catering, weather, and resort access still matter.",
    },
    {
      event: "Garba or Sangeet",
      verify:
        "Dance-floor footprint, stage, audio, lighting, power, rigging, rehearsal time, curfew, and indoor capacity.",
      risk:
        "A property that hosts 300 guests for dinner may still lack one soundproofed space for a late-night Garba.",
    },
    {
      event: "Haldi or Pithi",
      verify:
        "Space that tolerates color and water, cleanup fees, guest access, and protection for resort furnishings.",
      risk:
        "Cleanup and damage terms appearing as unexpected charges after the event instead of agreed pricing before it.",
    },
    {
      event: "Wedding ceremony with Mandap",
      verify:
        "Mandap location options, setup and rigging rules, fire or flameless Havan policy, power, and ceremony seating.",
      risk:
        "Ceremony design being dictated by unpublished venue rules discovered after the contract is signed.",
    },
    {
      event: "Reception",
      verify:
        "Seated capacity, stage and dance-floor size, production and rigging, curfew, overtime rates, and catering minimums.",
      risk:
        "Capacity or curfew limits forcing program changes for the largest, most photographed event of the weekend.",
    },
    {
      event: "Baraat",
      verify:
        "Procession route on property, horse or vehicle options and welfare rules, permits, music, and associated fees.",
      risk:
        "A signature celebration being reduced to a parking-lot lap because the route was never confirmed in writing.",
    },
  ],
  resortExamples: [
    "Hyatt Ziva Cancún",
    "Hard Rock Hotel Cancún",
    "AVA Resort Cancún",
    "Grand Palladium Costa Mujeres Resort & Spa",
    "TRS Coral Hotel",
    "Garza Blanca Resort & Spa Cancún",
  ],
  arrival:
    "Cancún International Airport (CUN) is the gateway for Moon Palace Cancún. That does not make every flight equally simple: build a guest manifest by arrival time, terminal, luggage needs, mobility needs, child-seat needs, and transfer provider — not just a total guest count. Confirm the property's transfer time and any group-arrival coordination in writing for the actual arrival window.",
  foodAndCulture:
    "The Palace wedding team advertises an in-house Indian chef with menus such as samosas, chicken tikka masala, and lemon and jeera rice, alongside customizable wedding stages, henna artists, and Baraat horses. Advertised capability is not a contracted inclusion: confirm the menu format per event, the tasting process, per-person pricing, service charges, and how the kitchen handles Jain, vegetarian, and regional Gujarati preferences for the family's actual guest list.",
  weatherAndBackup:
    "Outdoor beauty is not a substitute for a contracted indoor backup. Confirm, for each outdoor event, the guaranteed backup space, the decision deadline for moving, who executes and pays for the move, and how the change affects catering, production, and the ceremony schedule. Ask what happens when more than one wedding on the property needs its backup at the same time.",
  familySupport:
    "CeremonyVerse works as the family-facing planning layer for U.S. and Canadian families: comparing the written proposal against the family's event plan and guest count, separating confirmed facts from open questions, coordinating the Mexico City-based destination team for the agreed local and on-site scope, and keeping family approvals, guest information, and decisions connected through one named contact. Rooms, flights, transfers, and resort contracts remain with the resort and named licensed providers under their own terms.",
  questions: [
    "Which exact event spaces are guaranteed in writing for each celebration, with seated capacity, setup times, and exclusivity?",
    "What does the in-house Indian kitchen cover per event — menu format, tasting process, per-person pricing, and service charges?",
    "What are the room-block minimums, comp structure, and attrition terms for our guest count and dates, counted how, over which nights?",
    "What are the Mandap location options, fire or flameless Havan rules, and power or rigging requirements for the ceremony?",
    "What is the Baraat route on the property, what vehicle or horse options exist, and what permits and fees apply?",
    "What sound curfews apply to each event space, and what does overtime cost after the curfew?",
    "What is the contracted indoor weather backup for each outdoor event, the decision deadline, and the move plan and cost?",
    "Which outside vendors — priest, decor, production, entertainment — are permitted, and what are the outside-vendor fees?",
  ],
  resortPackageBenchmarks: [
    {
      resort: "Moon Palace Cancún — public wedding packages",
      publicDetail:
        "Five published packages: a Complimentary ceremony option (eligibility rules apply), Petite at $2,150 for up to 10 guests, Classic at $3,650 for up to 30, Prestige at $12,000 for up to 50, and Luxe at $15,000 for up to 75 guests.",
      planningNote:
        "Guest-overage rates and itemized venue and catering upgrades are not published. Group benefits and wedding credits depend on room-night and contract terms and are not subtracted in any calculator.",
      sourceHref: "https://www.moonpalacecancun.com/weddings",
    },
    {
      resort: "Palace Weddings — South Asian experience",
      publicDetail:
        "The Palace wedding team advertises an in-house Indian chef with exclusive menus, diverse food stations, fully customizable wedding stages, henna artists, authentic Baraat horses, and a capacity of 300+ guests for multi-day South Asian celebrations.",
      planningNote:
        "These are advertised capabilities, not contracted inclusions. Each element — chef, stage, henna, Baraat — must appear with pricing and terms in a current written proposal for the family's dates.",
      sourceHref: "https://weddings.thepalacecompany.com/blog/weddings-mexico",
    },
    {
      resort: "Hyatt Inclusive Collection — South Asian package (comparison)",
      publicDetail:
        "A published South Asian wedding package starting at $12,295 for up to 79 guests, including a five-event program with a decorated Mandap ceremony and an Indian wedding-reception buffet.",
      planningNote:
        "Requires at least 25 rooms for three nights or 75 cumulative room nights. Useful as a comparison point: a different resort group's published South Asian pricing shows how package scope differs across properties.",
      sourceHref: "https://www.hyattinclusivecollection.com/en/special-offers/south-asian-weddings/",
    },
  ],
  faqs: [
    {
      question: "Can you have an Indian wedding at Moon Palace Cancún?",
      answer:
        "Yes. The Palace wedding team advertises Moon Palace Cancún for large, multi-day South Asian celebrations of 300 or more guests, with an in-house Indian chef, customizable stages, henna artists, and Baraat horses. The fit decision depends on written event-space guarantees, current menu pricing, room-block terms, and the family's guest count.",
    },
    {
      question: "How much does a wedding at Moon Palace Cancún cost?",
      answer:
        "Moon Palace publishes wedding packages from a Complimentary option to the $15,000 Luxe package for up to 75 guests. These are package starting prices, not complete Indian wedding totals: a multi-event celebration with rooms, travel, production, and catering for 150+ guests is quoted separately in a current written proposal.",
    },
    {
      question: "Does Moon Palace Cancún have Indian food?",
      answer:
        "Yes. The resort's wedding team advertises an in-house Indian chef with menus including samosas, chicken tikka masala, and lemon and jeera rice, plus diverse food stations. Menu format per event, the tasting process, per-person pricing, and service charges must be confirmed in a current proposal.",
    },
    {
      question: "How many guests can a Moon Palace Cancún wedding host?",
      answer:
        "The Palace wedding team advertises capacity for 300+ guests for large multi-day South Asian celebrations. Per-event seated capacity, setup limits, and space availability for the family's actual dates must be confirmed in writing before booking.",
    },
    {
      question: "How do room blocks work for a Moon Palace wedding?",
      answer:
        "Groups reserve rooms under the wedding's account, with group benefits and wedding credits depending on room-night and contract terms. The critical clause is attrition — the share of room nights the family owes if bookings fall short. For guest lists of 150+ that shift in the final months, negotiate that clause before signing.",
    },
    {
      question: "Is Moon Palace Cancún affiliated with CeremonyVerse?",
      answer:
        "No. CeremonyVerse is an independent planning service with no resort affiliation. This page summarizes published public information so families can ask better questions; Moon Palace's own current proposal and contract control all pricing, availability, and terms.",
    },
  ],
  sources: [
    {
      label: "Moon Palace Cancún: Weddings",
      href: "https://www.moonpalacecancun.com/weddings",
      note: "Official package page listing the Complimentary, Petite, Classic, Prestige, and Luxe packages with starting prices and guest maximums.",
    },
    {
      label: "Palace Weddings: Asian-inspired ceremonies",
      href: "https://weddings.thepalacecompany.com/blog/weddings-mexico",
      note: "Official Palace wedding team publication describing the in-house Indian chef and menus, customizable stages, henna artists, Baraat horses, and 300+ guest capacity.",
    },
    {
      label: "Hyatt Inclusive Collection: South Asian Wedding Package",
      href: "https://www.hyattinclusivecollection.com/en/special-offers/south-asian-weddings/",
      note: "Official comparison benchmark: a published South Asian wedding package starting at $12,295 for up to 79 guests with five-event programming.",
    },
  ],
  comparisonSection: {
    heading: "Which Cancún properties can families compare beside Moon Palace?",
    intro:
      "Moon Palace is one property, not a default. These are other Cancún-area properties families may ask CeremonyVerse to evaluate on the same written questions. Inclusion does not mean affiliation, preferred status, guaranteed South Asian capability, availability, or a recommendation. Current resort proposals and contracts control.",
  },
  sourcesReviewedOn: "August 24, 2026",
}
