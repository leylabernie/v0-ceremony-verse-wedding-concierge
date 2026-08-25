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

export const lopesanCostaBavaro: DestinationPageData = {
  slug: "/resorts/lopesan-costa-bavaro-indian-wedding/",
  shortName: "Lopesan Costa Bávaro",
  title: "Indian wedding at Lopesan Costa Bávaro",
  eyebrow: "Lopesan Costa Bávaro planning guide",
  description:
    "Plan an Indian wedding at Lopesan Costa Bávaro in Punta Cana with published package prices, venue options, guest-count tiers, and the multi-event, catering, and room-block questions to confirm in writing.",
  answer:
    "Lopesan Costa Bávaro publishes more wedding-package pricing than almost any Punta Cana resort: five named packages from $999 for the couple to $12,999–$15,799 for 50–99 guests, with beach, rooftop-terrace, and garden ceremonies. A multi-event Indian wedding still needs much more than one package — separate event spaces, Indian menu confirmation, room-block terms, and written per-event pricing. CeremonyVerse helps U.S. and Canadian families verify those facts before signing.",
  idealFor: [
    "Families comparing Punta Cana value with published, tiered package pricing instead of quote-only resorts",
    "Weddings of 50–99 guests where the Unique Glam package tiers apply, with published additional-guest rates",
    "Couples who want beach, rooftop-terrace, or garden ceremony options within one property",
    "Families planning a welcome cocktail and private reception alongside the ceremony",
  ],
  compareBeforeChoosing: [
    "Whether one package can cover a multi-event Indian weekend or whether each event needs separate contracting",
    "Indian menu availability and per-event catering pricing from a current written proposal",
    "Room-block minimums, comp structure, and the attrition clause for the family's real guest count",
    "Sound curfews, Mandap setup rules, Baraat feasibility, and indoor weather backup per event space",
  ],
  facts: [
    {
      label: "Published package range",
      value: "$999 – $15,799",
      detail:
        "Five named packages: Secretly I Do $999 for the couple, Endless Knot $1,899 up to 10 guests, Eternal Vow $3,999 up to 30, Everlasting Love $8,599 up to 40, and Unique Glam $12,999 for 50–70 or $15,799 for 71–99 guests. These are published ceremony-and-reception package prices, not complete Indian wedding totals.",
    },
    {
      label: "Largest published design",
      value: "Up to 250 guests",
      detail:
        "The Unique Glam package is published for up to 250 guests with additional-guest charges of $85 per adult after the selected tier. Per-event space capacity and setup limits still require a current written proposal.",
    },
    {
      label: "Ceremony venues",
      value: "Beach · Terrace · Garden",
      detail:
        "Published ceremony venues include the beach, rooftop terrace, and garden. Which venue fits a Mandap setup, guest counts, and weather backup must be confirmed in writing for the actual dates.",
    },
    {
      label: "Pricing rule",
      value: "Current quote only",
      detail:
        "Published prices are adult rates — the resort says children are charged at 50%. Legal or religious ceremony fees and anything not listed in the selected package are not included; confirm all terms in a current proposal.",
    },
  ],
  eventRows: [
    {
      event: "Welcome cocktail or Mehndi gathering",
      verify:
        "Privacy, shade, rain cover, guest access, food stations, music limits, and arrival plans for guests still flying in.",
      risk:
        "Assuming a package welcome cocktail equals a full Mehndi event with seating, henna stations, and dinner service.",
    },
    {
      event: "Garba or Sangeet",
      verify:
        "Dance-floor footprint, stage, audio, lighting, power, rigging, rehearsal time, curfew, and indoor capacity.",
      risk:
        "A property sized for beach ceremonies may still lack one soundproofed late-night space for a full Sangeet.",
    },
    {
      event: "Haldi or Pithi",
      verify:
        "A space that tolerates color and water, cleanup fees, guest access, and protection for resort furnishings.",
      risk:
        "Cleanup and damage terms appearing as unexpected charges after the event instead of agreed pricing before it.",
    },
    {
      event: "Wedding ceremony with Mandap",
      verify:
        "Mandap location options across beach, rooftop terrace, and garden; setup and rigging rules; fire or flameless Havan policy; and ceremony seating.",
      risk:
        "A published beach-arch package being assumed to include a full Mandap setup it was never designed for.",
    },
    {
      event: "Reception",
      verify:
        "Seated capacity, stage and dance-floor size, production and rigging, curfew, overtime rates, and catering minimums.",
      risk:
        "Comparing the published reception package without the added hours, production, and per-person costs an Indian reception needs.",
    },
    {
      event: "Baraat",
      verify:
        "Procession route on property, vehicle or horse options and welfare rules, permits, music, and associated fees.",
      risk:
        "A signature celebration being reduced to a parking-lot lap because the route was never confirmed in writing.",
    },
  ],
  resortExamples: [
    "Hyatt Ziva Cap Cana",
    "Hard Rock Hotel & Casino Punta Cana",
    "Grand Palladium Punta Cana Resort & Spa",
    "Paradisus Palma Real Golf & Spa Resort",
    "Barceló Bávaro Palace",
    "Dreams Macao Beach Punta Cana",
  ],
  arrival:
    "Punta Cana International Airport (PUJ) is the gateway for Bávaro and Punta Cana resorts. That does not make every flight equally simple: build a guest manifest by arrival time, terminal, luggage needs, mobility needs, child-seat needs, and transfer provider — not just a total guest count. Confirm transfer time and group-arrival coordination in writing for the actual arrival window.",
  foodAndCulture:
    "The published packages include ceremony elements, cakes, cocktail hours, and private dinners in Western formats, with food stations mentioned for the largest tier. Advertised inclusions are not a contracted Indian menu: confirm per event whether the kitchen can deliver Indian service for the family's actual guest list, the tasting process, per-person pricing, service charges, and how Jain, vegetarian, and regional Gujarati preferences are handled.",
  weatherAndBackup:
    "Outdoor beauty is not a substitute for a contracted indoor backup. Confirm, for each outdoor event, the guaranteed backup space, the decision deadline for moving, who executes and pays for the move, and how the change affects catering, production, and the ceremony schedule. Ask what happens when more than one wedding on the property needs its backup at the same time.",
  familySupport:
    "CeremonyVerse works as the family-facing planning layer for U.S. and Canadian families: comparing the written proposal against the family's event plan and guest count, separating confirmed facts from open questions, coordinating the Mexico City-based destination team for the agreed local and on-site scope where applicable, and keeping family approvals, guest information, and decisions connected through one named contact. Rooms, flights, transfers, and resort contracts remain with the resort and named licensed providers under their own terms.",
  questions: [
    "Which exact event spaces are guaranteed in writing for each celebration, with seated capacity, setup times, and exclusivity?",
    "Can the kitchen deliver Indian service per event — menu format, tasting process, per-person pricing, and service charges?",
    "What are the room-block minimums, comp structure, and attrition terms for our guest count and dates, counted how, over which nights?",
    "What are the Mandap location options, fire or flameless Havan rules, and power or rigging requirements for the ceremony?",
    "What is the Baraat route on the property, what vehicle or horse options exist, and what permits and fees apply?",
    "What sound curfews apply to each event space, and what does overtime cost after the curfew?",
    "What is the contracted indoor weather backup for each outdoor event, the decision deadline, and the move plan and cost?",
    "How do published additional-guest charges, children's rates, and package tiers interact with our real guest count?",
  ],
  resortPackageBenchmarks: [
    {
      resort: "Lopesan Costa Bávaro — published wedding packages",
      publicDetail:
        "Five named packages with public prices: Secretly I Do $999 for 2 guests, Endless Knot $1,899 up to 10, Eternal Vow $3,999 up to 30, Everlasting Love $8,599 up to 40, and Unique Glam $12,999 for 50–70 guests or $15,799 for 71–99.",
      planningNote:
        "Published extra-guest prices are adult rates; children are charged at 50%. Legal or religious ceremony fees and any item not listed in the selected package are not included. A multi-event Indian wedding needs per-event written pricing, not one package.",
      sourceHref: "https://www.lopesancostabavaro.com/en/weddings-events/",
    },
    {
      resort: "Unique Glam — the large-wedding tier",
      publicDetail:
        "Published for 50–70 guests at $12,999 and 71–99 guests at $15,799, with $85 per additional adult guest and a published design limit of 250 people. Includes a two-hour welcome beach cocktail, premium wedding-day cocktail, private dinner for the selected tier, cake, and premium open bar.",
      planningNote:
        "The welcome cocktail and private dinner elements overlap with Indian welcome-event needs, but Mandap setup, Sangeet production, Indian menus, and additional events must be confirmed and priced in a current written proposal.",
      sourceHref: "https://www.lopesancostabavaro.com/en/weddings-events/",
    },
    {
      resort: "Moon Palace Cancún — comparison benchmark",
      publicDetail:
        "A Cancún resort's published packages from a Complimentary option to $15,000 for up to 75 guests, with an advertised in-house Indian chef and 300+ guest capacity for South Asian celebrations.",
      planningNote:
        "Useful as a cross-destination comparison point: package scope, guest tiers, and published Indian-kitchen capability differ sharply between Punta Cana and Cancún properties.",
      sourceHref: "https://www.moonpalacecancun.com/weddings",
    },
  ],
  faqs: [
    {
      question: "Can you have an Indian wedding at Lopesan Costa Bávaro?",
      answer:
        "Yes — the resort publishes wedding packages sized up to a 250-guest design limit and offers beach, rooftop-terrace, and garden ceremony venues. A multi-day Indian wedding needs more than one package: per-event spaces, Indian menu confirmation, and room-block terms must all be confirmed in a current written proposal.",
    },
    {
      question: "How much does a wedding at Lopesan Costa Bávaro cost?",
      answer:
        "Published packages range from $999 for a couple-only ceremony to $12,999–$15,799 for 50–99 guests, with $85 per additional adult beyond the tier. These are package prices, not complete Indian wedding totals: a multi-event celebration with rooms, travel, production, and catering for 100+ guests is quoted separately in a current written proposal.",
    },
    {
      question: "Which Lopesan package fits a large Indian wedding?",
      answer:
        "The Unique Glam package is the published large-wedding tier: $12,999 for 50–70 guests, $15,799 for 71–99, and additional adults at $85 each up to the published 250-guest design limit. It includes a welcome beach cocktail, wedding-day cocktail, private dinner, cake, and premium open bar — but not Mandap setup, Sangeet production, or Indian menus, which require separate written pricing.",
    },
    {
      question: "Does Lopesan Costa Bávaro serve Indian food?",
      answer:
        "The published packages describe Western-format dinners, cocktails, and food stations; the resort's ability to deliver full Indian service per event must be confirmed in writing — menu format, tasting process, per-person pricing, and service charges for the family's actual guest list.",
    },
    {
      question: "Are children charged the same at Lopesan Costa Bávaro?",
      answer:
        "No — the resort publishes that children are charged at 50% of the adult rate for package extras. Confirm in writing how children are counted in each event's catering and seating, and for the room block.",
    },
    {
      question: "Is Lopesan Costa Bávaro affiliated with CeremonyVerse?",
      answer:
        "No. CeremonyVerse is an independent planning service with no resort affiliation. This page summarizes published public information so families can ask better questions; the resort's own current proposal and contract control all pricing, availability, and terms.",
    },
  ],
  sources: [
    {
      label: "Lopesan Costa Bávaro: Weddings and Events",
      href: "https://www.lopesancostabavaro.com/en/weddings-events/",
      note: "Official package page listing the five named packages with prices, guest tiers, venues, and inclusions.",
    },
    {
      label: "Punta Cana destination guide",
      href: "https://www.ceremonyverse.com/destinations/punta-cana-indian-wedding/",
      note: "CeremonyVerse's Punta Cana planning guide covering guest access, room blocks, multi-event feasibility, and weather backup.",
    },
    {
      label: "Moon Palace Cancún: Weddings",
      href: "https://www.moonpalacecancun.com/weddings",
      note: "Official comparison benchmark showing how package scope and published Indian-kitchen capability differ across destinations.",
    },
  ],
  comparisonSection: {
    heading: "Which Punta Cana properties can families compare beside Lopesan?",
    intro:
      "Lopesan is one property, not a default. These are other Punta Cana properties families may ask CeremonyVerse to evaluate on the same written questions. Inclusion does not mean affiliation, preferred status, guaranteed South Asian capability, availability, or a recommendation. Current resort proposals and contracts control.",
  },
  sourcesReviewedOn: "August 25, 2026",
}

export const hardRockRivieraMaya: DestinationPageData = {
  slug: "/resorts/hard-rock-riviera-maya-indian-wedding/",
  shortName: "Hard Rock Riviera Maya",
  title: "Indian wedding at Hard Rock Riviera Maya",
  eyebrow: "Hard Rock Riviera Maya planning guide",
  description:
    "Plan an Indian wedding at Hard Rock Riviera Maya with the resort's published South Asian ceremony program, Indian Wedding Specialists, venue questions, and the written-proposal terms that decide the real total.",
  answer:
    "Hard Rock Riviera Maya is one of the most experienced South Asian wedding resorts in the Riviera Maya: the resort's own wedding page lists South Asian Weddings among its ceremony styles, with Indian Wedding Specialists, skilled Mehndi artists, and traditional Indian cuisine. It does not publish dependable package pricing on that page, so every material number — per-event venues, menus, production, room-block terms — must come from a current written proposal. CeremonyVerse helps U.S. and Canadian families get and pressure-test exactly that.",
  idealFor: [
    "Families who want a resort that explicitly markets South Asian wedding celebrations and Indian cuisine",
    "Couples who want a music-and-energy brand setting for a high-production Sangeet and reception",
    "Weddings using the adults-only Heaven section for ceremony options while keeping family sections for guests",
    "Families comfortable deciding from a written proposal rather than published package prices",
  ],
  compareBeforeChoosing: [
    "Per-event venue guarantees, seated capacity, setup times, and exclusivity for every celebration",
    "Indian menu format, tasting process, per-event pricing, service charges, and taxes from a current proposal",
    "Room-block minimums, comp structure, and the attrition clause for the family's real guest count",
    "Adults-only section rules — which venues children can attend, and how that maps to a family wedding",
  ],
  facts: [
    {
      label: "South Asian program",
      value: "Published",
      detail:
        "The resort's wedding page lists South Asian Weddings among its ceremony styles and describes Indian Wedding Specialists who organize details such as skilled Mehndi artists and traditional Indian cuisine. Advertised capability is not a contracted inclusion — each element must appear with pricing in a current written proposal.",
    },
    {
      label: "Public package pricing",
      value: "Quote required",
      detail:
        "The official wedding page describes packages, venues, and menus without publishing a dependable current wedding total. Every material number for an Indian wedding weekend must come from the resort's written proposal.",
    },
    {
      label: "Ceremony styles",
      value: "All sizes",
      detail:
        "Published ceremony styles range from a minimony of eight loved ones and micro-weddings up to 50 guests to large weddings of any size, alongside the South Asian program. Which style maps to which event in a multi-day Indian weekend must be defined in writing.",
    },
    {
      label: "Venue mix",
      value: "Beach · Garden",
      detail:
        "Published venues include adult-only beach-side ceremonies in the Heaven section and garden receptions fit for larger celebrations. Confirm in writing which venues fit the Mandap, the Sangeet, and the reception — and which are open to children.",
    },
  ],
  eventRows: [
    {
      event: "Welcome dinner, Mehndi, or poolside gathering",
      verify:
        "Privacy, shade, rain cover, guest access, food stations, music limits, and the plan for arriving guests.",
      risk:
        "Treating a casual welcome event as operationally simple when setup, catering, weather, and resort access still matter.",
    },
    {
      event: "Garba or Sangeet",
      verify:
        "Dance-floor footprint, stage, audio, lighting, power, rigging, rehearsal time, curfew, and indoor capacity.",
      risk:
        "A resort built for beach weddings may still schedule its largest indoor space to another group on the same night.",
    },
    {
      event: "Haldi or Pithi",
      verify:
        "A space that tolerates color and water, cleanup fees, guest access, and protection for resort furnishings.",
      risk:
        "Cleanup and damage terms appearing as unexpected charges after the event instead of agreed pricing before it.",
    },
    {
      event: "Wedding ceremony with Mandap",
      verify:
        "Mandap location options, setup and rigging rules, fire or flameless Havan policy, power, and ceremony seating.",
      risk:
        "Adults-only venue rules discovered after booking that exclude children and older family members from the ceremony.",
    },
    {
      event: "Reception",
      verify:
        "Seated capacity, stage and dance-floor size, production and rigging, curfew, overtime rates, and catering minimums.",
      risk:
        "Comparing venue fees without the complete food, production, vendor, tax, service-charge, and staffing scope.",
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
    "Generations Riviera Maya",
    "El Dorado Royale",
    "Grand Velas Riviera Maya",
    "Grand Palladium Kantenah Resort & Spa",
    "Hyatt Ziva Riviera Cancún",
    "Dreams Natura Resort & Spa",
  ],
  arrival:
    "Cancún International Airport (CUN) is the gateway for the Riviera Maya, with transfer time depending on the exact property and traffic. Build a guest manifest by arrival time, terminal, luggage needs, mobility needs, child-seat needs, and transfer provider — not just a total guest count. Confirm the property's transfer time and group-arrival coordination in writing for the actual arrival window.",
  foodAndCulture:
    "The resort's wedding page advertises Indian Wedding Specialists, skilled Mehndi artists, and traditional Indian cuisine. Advertised capability is not a contracted inclusion: confirm per event the menu format, the tasting process, per-person pricing, service charges, and how Jain, vegetarian, and regional Gujarati preferences are handled for the family's actual guest list.",
  weatherAndBackup:
    "Outdoor beauty is not a substitute for a contracted indoor backup. Confirm, for each outdoor event, the guaranteed backup space, the decision deadline for moving, who executes and pays for the move, and how the change affects catering, production, and the ceremony schedule. Ask what happens when more than one wedding on the property needs its backup at the same time.",
  familySupport:
    "CeremonyVerse works as the family-facing planning layer for U.S. and Canadian families: comparing the written proposal against the family's event plan and guest count, separating confirmed facts from open questions, coordinating the Mexico City-based destination team for the agreed local and on-site scope, and keeping family approvals, guest information, and decisions connected through one named contact. Rooms, flights, transfers, and resort contracts remain with the resort and named licensed providers under their own terms.",
  questions: [
    "Which exact event spaces are guaranteed in writing for each celebration, with seated capacity, setup times, and exclusivity?",
    "What does the Indian cuisine program cover per event — menu format, tasting process, per-person pricing, and service charges?",
    "What are the room-block minimums, comp structure, and attrition terms for our guest count and dates, counted how, over which nights?",
    "Which venues are adults-only, and how do those rules affect children and elders across our event schedule?",
    "What are the Mandap location options, fire or flameless Havan rules, and power or rigging requirements for the ceremony?",
    "What is the Baraat route on the property, what vehicle or horse options exist, and what permits and fees apply?",
    "What sound curfews apply to each event space, and what does overtime cost after the curfew?",
    "What is the contracted indoor weather backup for each outdoor event, the decision deadline, and the move plan and cost?",
  ],
  resortPackageBenchmarks: [
    {
      resort: "Hard Rock Riviera Maya — South Asian ceremony program",
      publicDetail:
        "The resort's official wedding page lists South Asian Weddings among its ceremony styles and describes Indian Wedding Specialists organizing skilled Mehndi artists and traditional Indian cuisine. Ceremony styles range from an eight-guest minimony to large weddings of any size.",
      planningNote:
        "No dependable current wedding-package price is published on this page. Confirm every event, guest count, venue, menu, bar, production, outside-vendor fee, tax, and service charge in the current written proposal.",
      sourceHref: "https://www.hardrockhotels.com/riviera-maya/weddings.aspx",
    },
    {
      resort: "Hyatt Inclusive Collection — Dulha & Dulhan package (comparison)",
      publicDetail:
        "A published South Asian wedding package starting at $12,295 for up to 79 guests, including a five-event program with a decorated Mandap ceremony and an Indian wedding-reception buffet.",
      planningNote:
        "Requires at least 25 rooms for three nights or 75 cumulative room nights. Useful as a comparison point: a different resort group publishes complete South Asian package pricing where Hard Rock requires a proposal.",
      sourceHref: "https://www.hyattinclusivecollection.com/en/special-offers/south-asian-weddings/",
    },
    {
      resort: "Lopesan Costa Bávaro — published packages (comparison)",
      publicDetail:
        "A Punta Cana resort's published packages from $999 for a couple to $12,999–$15,799 for 50–99 guests, with a 250-guest published design limit.",
      planningNote:
        "Useful as a cross-destination comparison point: published tier pricing makes initial budgeting easier, while Hard Rock's strengths are its explicit South Asian program and production-friendly brand.",
      sourceHref: "https://www.lopesancostabavaro.com/en/weddings-events/",
    },
  ],
  faqs: [
    {
      question: "Can you have an Indian wedding at Hard Rock Riviera Maya?",
      answer:
        "Yes. The resort's official wedding page lists South Asian Weddings among its ceremony styles and describes Indian Wedding Specialists, skilled Mehndi artists, and traditional Indian cuisine. The fit decision depends on written event-space guarantees, current menu pricing, room-block terms, and the family's guest count.",
    },
    {
      question: "How much does a wedding at Hard Rock Riviera Maya cost?",
      answer:
        "The resort does not publish a dependable current wedding-package price on its official wedding page. Every material number — per-event venues, menus, production, guest counts, taxes, and service charges — must come from a current written proposal for the family's actual dates and events.",
    },
    {
      question: "Does Hard Rock Riviera Maya serve Indian food?",
      answer:
        "The resort advertises traditional Indian cuisine through its Indian Wedding Specialists. Advertised capability is not a contracted inclusion: confirm the menu format per event, the tasting process, per-person pricing, and service charges in a current written proposal.",
    },
    {
      question: "Is Hard Rock Riviera Maya adults-only?",
      answer:
        "The resort has an adults-only Heaven section with beach-side ceremony venues, alongside family-accessible areas. Which venues children and elders can attend is a material planning question for a multi-event family wedding — confirm the venue-by-venue rules in writing before booking.",
    },
    {
      question: "How large can a Hard Rock Riviera Maya wedding be?",
      answer:
        "The resort's published ceremony styles include large weddings of any size alongside its South Asian program. Seated capacity per event space, setup limits, and availability for the family's actual dates must be confirmed in a current written proposal.",
    },
    {
      question: "Is Hard Rock Riviera Maya affiliated with CeremonyVerse?",
      answer:
        "No. CeremonyVerse is an independent planning service with no resort affiliation. This page summarizes published public information so families can ask better questions; the resort's own current proposal and contract control all pricing, availability, and terms.",
    },
  ],
  sources: [
    {
      label: "Hard Rock Hotels: Riviera Maya Weddings",
      href: "https://www.hardrockhotels.com/riviera-maya/weddings.aspx",
      note: "Official wedding page listing ceremony styles including South Asian Weddings, Indian Wedding Specialists, Mehndi artists, and traditional Indian cuisine.",
    },
    {
      label: "Riviera Maya destination guide",
      href: "https://www.ceremonyverse.com/destinations/riviera-maya-indian-wedding/",
      note: "CeremonyVerse's Riviera Maya planning guide covering airport choice, transfer distance, resort layout, guest mobility, and production.",
    },
    {
      label: "Hyatt Inclusive Collection: South Asian Wedding Package",
      href: "https://www.hyattinclusivecollection.com/en/special-offers/south-asian-weddings/",
      note: "Official comparison benchmark: a published South Asian wedding package starting at $12,295 for up to 79 guests.",
    },
  ],
  comparisonSection: {
    heading: "Which Riviera Maya properties can families compare beside Hard Rock?",
    intro:
      "Hard Rock is one property, not a default. These are other Riviera Maya properties families may ask CeremonyVerse to evaluate on the same written questions. Inclusion does not mean affiliation, preferred status, guaranteed South Asian capability, availability, or a recommendation. Current resort proposals and contracts control.",
  },
  sourcesReviewedOn: "August 25, 2026",
}

export const hyattInclusiveCollection: DestinationPageData = {
  slug: "/resorts/hyatt-inclusive-collection-indian-wedding/",
  shortName: "Hyatt Inclusive Collection",
  title: "Indian weddings at Hyatt Inclusive Collection resorts",
  eyebrow: "Hyatt Inclusive Collection planning guide",
  description:
    "Plan an Indian wedding at Hyatt Inclusive Collection resorts with the published Dulha & Dulhan South Asian package price, five-event program, room-night requirements, and the property-specific questions to confirm in writing.",
  answer:
    "Hyatt Inclusive Collection publishes one of the few complete South Asian wedding packages in the all-inclusive world: the Dulha & Dulhan package starting at $12,295 for up to 79 guests, covering a five-event program from welcome cocktail through Indian wedding-reception buffet with a decorated Mandap ceremony. It applies at named participating resorts in Mexico and Punta Cana, requires 25 rooms for three nights or 75 cumulative room nights, and additional guests, upgrades, and fees vary by resort. CeremonyVerse helps U.S. and Canadian families verify what the package covers — and what it does not — before signing.",
  idealFor: [
    "Families who want a published, complete South Asian package price instead of quote-only planning",
    "Weddings of up to 79 guests that fit the package's included-guest count before additional-guest charges",
    "Couples who want the five-event arc — welcome cocktail, Sangeet or Mehndi, ceremony, reception — pre-shaped by the package",
    "Families able to meet the room-night requirement of 25 rooms for three nights or 75 cumulative room nights",
  ],
  compareBeforeChoosing: [
    "Which named resorts participate, and which specific property fits the family's destination and guest list",
    "Additional-guest pricing, upgrades, and fees that vary by resort and are not in the starting price",
    "Room-block minimums, comp structure, and the attrition clause against the family's real guest count",
    "Mandap and fire or flameless Havan rules, Baraat feasibility, sound curfews, and indoor weather backup at the chosen property",
  ],
  facts: [
    {
      label: "Published package",
      value: "$12,295",
      detail:
        "The Dulha & Dulhan South Asian Wedding Package starts at $12,295 inclusive of up to 79 guests, with taxes and gratuities included for Romance packages. It is a starting price: additional guests, customizations, and some fees vary by resort and require a current written proposal.",
    },
    {
      label: "Five-event program",
      value: "Included arc",
      detail:
        "The published program covers a welcome cocktail party with private bar, Sangeet or Mehndi appetizers and buffet, ceremony beverages, and an Indian wedding-reception buffet with dessert, cake, and private bar — plus the Mandap ceremony setup.",
    },
    {
      label: "Room requirement",
      value: "25 rooms × 3 nights",
      detail:
        "The package requires at least 25 rooms for three nights, or 75 cumulative room nights. For families with 100+ guests, the room-block terms, comp structure, and attrition clause become the highest-stakes part of the contract.",
    },
    {
      label: "Booking window",
      value: "Book by Dec 20, 2027",
      detail:
        "The published offer says book by December 20, 2027, with wedding date and venue remaining subject to resort confirmation. Verify the current offer terms before relying on them.",
    },
  ],
  eventRows: [
    {
      event: "Welcome cocktail party",
      verify:
        "The package's welcome cocktail with private bar — guest count, duration, venue, food stations, and how it extends into a full Mehndi or welcome dinner if the family wants more.",
      risk:
        "Assuming the package cocktail equals a full welcome event with seating, entertainment, and dinner service.",
    },
    {
      event: "Sangeet or Mehndi",
      verify:
        "The package's Sangeet or Mehndi appetizers and buffet — dance-floor footprint, stage, audio, lighting, rigging, rehearsal time, curfew, and indoor capacity.",
      risk:
        "A package buffet fitting 79 guests while the family's Sangeet needs production, space, and hours the package does not include.",
    },
    {
      event: "Haldi or Pithi",
      verify:
        "A space that tolerates color and water, cleanup fees, guest access, and protection for resort furnishings — usually outside the published package.",
      risk:
        "Cleanup and damage terms appearing as unexpected charges after the event instead of agreed pricing before it.",
    },
    {
      event: "Wedding ceremony with Mandap",
      verify:
        "The package's decorated Mandap, ceremony seating, beverage station, sound system, and shoe-check station for beach ceremonies — plus fire or flameless Havan rules at the chosen resort.",
      risk:
        "The package Mandap design differing from the family's ceremonial requirements without a written customization plan.",
    },
    {
      event: "Reception",
      verify:
        "The package's Indian wedding-reception buffet, dessert, cake, and private bar — seated capacity, stage and dance-floor size, production, curfew, and overtime rates.",
      risk:
        "Comparing the package buffet without the added hours, production, and per-person costs a full Indian reception needs.",
    },
    {
      event: "Baraat",
      verify:
        "Procession route at the chosen property, vehicle or horse options and welfare rules, permits, music, and associated fees — usually outside the published package.",
      risk:
        "A signature celebration being reduced to a parking-lot lap because the route was never confirmed in writing.",
    },
  ],
  resortExamples: [
    "Secrets The Vine Cancun",
    "Dreams Vista Cancun Golf & Spa Resort",
    "Secrets Playa Mujeres Golf & Spa Resort",
    "Hyatt Zilara Riviera Maya",
    "Secrets Akumal Riviera Maya",
    "Dreams Natura Resort & Spa",
    "Breathless Riviera Cancun Resort & Spa",
    "Secrets Cap Cana Resort & Spa",
    "Dreams Macao Beach Punta Cana",
    "Breathless Punta Cana Resort & Spa",
  ],
  arrival:
    "Arrival depends entirely on the chosen participating property: Cancún International Airport (CUN) serves the Cancún and Riviera Maya resorts, while Punta Cana International Airport (PUJ) serves the Dominican properties. Build a guest manifest by arrival time, terminal, luggage needs, mobility needs, child-seat needs, and transfer provider — not just a total guest count. Confirm transfer time and group-arrival coordination in writing for the actual arrival window.",
  foodAndCulture:
    "The Dulha & Dulhan package is built around South Asian programming: Sangeet or Mehndi appetizers and buffet, and an Indian wedding-reception buffet with dessert, cake, and private bar. Advertised inclusions are still a starting point: confirm the menu format per event, the tasting process, per-person pricing beyond 79 guests, service charges, and how Jain, vegetarian, and regional Gujarati preferences are handled for the family's actual guest list.",
  weatherAndBackup:
    "Outdoor beauty is not a substitute for a contracted indoor backup. Confirm, for each outdoor event, the guaranteed backup space, the decision deadline for moving, who executes and pays for the move, and how the change affects catering, production, and the ceremony schedule. Ask what happens when more than one wedding on the property needs its backup at the same time.",
  familySupport:
    "CeremonyVerse works as the family-facing planning layer for U.S. and Canadian families: comparing the written proposal against the package inclusions and the family's event plan, separating confirmed facts from open questions, coordinating the Mexico City-based destination team for the agreed local and on-site scope, and keeping family approvals, guest information, and decisions connected through one named contact. Rooms, flights, transfers, and resort contracts remain with the resort and named licensed providers under their own terms.",
  questions: [
    "Which named resorts currently participate, and which specific property fits our destination and guest list?",
    "What are the additional-guest charges, upgrades, and fees beyond the published starting price at our chosen resort?",
    "What are the room-block minimums, comp structure, and attrition terms for our guest count and dates, counted how, over which nights?",
    "How does the package Mandap design align with our ceremonial requirements, and what customization is possible in writing?",
    "What are the fire or flameless Havan rules, Baraat feasibility, and sound curfews at the chosen property?",
    "What is the contracted indoor weather backup for each outdoor event, the decision deadline, and the move plan and cost?",
    "Which outside vendors — priest, decor, production, entertainment — are permitted, and what are the outside-vendor fees?",
    "How does the published booking window interact with our actual wedding date and venue confirmation process?",
  ],
  resortPackageBenchmarks: [
    {
      resort: "Hyatt Inclusive Collection — Dulha & Dulhan package",
      publicDetail:
        "Published South Asian wedding package starting at $12,295 inclusive of up to 79 guests: welcome cocktail party with private bar, Sangeet or Mehndi appetizers and buffet, ceremony setup with decorated Mandap and shoe-check station, and an Indian wedding-reception buffet with dessert, cake, and private bar.",
      planningNote:
        "Requires at least 25 rooms for three nights or 75 cumulative room nights. Additional guests and customizations vary by resort; the starting price is not a complete proposal. Book-by date and terms should be verified against the current offer.",
      sourceHref: "https://www.hyattinclusivecollection.com/en/special-offers/south-asian-weddings/",
    },
    {
      resort: "Moon Palace Cancún — comparison benchmark",
      publicDetail:
        "A Cancún resort's published packages from a Complimentary option to $15,000 for up to 75 guests, with an advertised in-house Indian chef and 300+ guest capacity for South Asian celebrations.",
      planningNote:
        "Useful as a comparison point: Moon Palace publishes tiered generic packages plus Indian-kitchen capability, while the Hyatt package pre-shapes the five-event South Asian arc in one price.",
      sourceHref: "https://www.moonpalacecancun.com/weddings",
    },
    {
      resort: "Lopesan Costa Bávaro — comparison benchmark",
      publicDetail:
        "A Punta Cana resort's published packages from $999 for a couple to $12,999–$15,799 for 50–99 guests, with a 250-guest published design limit.",
      planningNote:
        "Useful as a comparison point for Punta Cana families: tier pricing without a South Asian-specific program, versus the Hyatt package's included five-event arc.",
      sourceHref: "https://www.lopesancostabavaro.com/en/weddings-events/",
    },
  ],
  faqs: [
    {
      question: "What is the Hyatt Inclusive Collection South Asian wedding package?",
      answer:
        "The Dulha & Dulhan South Asian Wedding Package is a published program starting at $12,295 inclusive of up to 79 guests, covering a five-event arc: welcome cocktail party with private bar, Sangeet or Mehndi appetizers and buffet, ceremony setup with a decorated Mandap and shoe-check station, and an Indian wedding-reception buffet with dessert, cake, and private bar.",
    },
    {
      question: "How much does a Hyatt Inclusive Collection Indian wedding cost?",
      answer:
        "The published package starts at $12,295 for up to 79 guests, with taxes and gratuities included for Romance packages. Additional guests, upgrades, and some fees vary by resort. The complete total — rooms, travel, production, extra events, and per-person charges beyond the package — is defined only in a current written proposal.",
    },
    {
      question: "Which resorts does the Hyatt South Asian package apply to?",
      answer:
        "The package applies at named participating Hyatt Inclusive Collection resorts across Mexico and Punta Cana — a list that includes Secrets, Dreams, Breathless, Impression, and Hyatt-branded properties. Participation can change; confirm the current list and the specific property's availability in writing before planning around it.",
    },
    {
      question: "What are the room requirements for the Hyatt wedding package?",
      answer:
        "The published package requires at least 25 rooms for three nights, or 75 cumulative room nights. For families with larger guest lists, the room-block terms, comp structure, and attrition clause become the highest-stakes part of the contract and should be negotiated before signing.",
    },
    {
      question: "Does the Hyatt package include a Mandap ceremony?",
      answer:
        "Yes — the published package includes ceremony setup with a decorated Mandap, ceremony seating, beverage station, sound system, and shoe-check station for beach ceremonies. How the package Mandap design aligns with a family's specific ceremonial requirements, including fire or flameless Havan rules, must be confirmed in writing.",
    },
    {
      question: "Is Hyatt Inclusive Collection affiliated with CeremonyVerse?",
      answer:
        "No. CeremonyVerse is an independent planning service with no resort affiliation. This page summarizes published public information so families can ask better questions; the collection's own current proposal and contract control all pricing, availability, and terms.",
    },
  ],
  sources: [
    {
      label: "Hyatt Inclusive Collection: South Asian Wedding Package",
      href: "https://www.hyattinclusivecollection.com/en/special-offers/south-asian-weddings/",
      note: "Official package page with the Dulha & Dulhan package price, guest count, event program, room requirements, and booking window.",
    },
    {
      label: "Moon Palace Cancún: Weddings",
      href: "https://www.moonpalacecancun.com/weddings",
      note: "Official comparison benchmark for tiered generic packages plus Indian-kitchen capability at a single resort.",
    },
    {
      label: "Lopesan Costa Bávaro: Weddings and Events",
      href: "https://www.lopesancostabavaro.com/en/weddings-events/",
      note: "Official comparison benchmark for Punta Cana tier pricing without a South Asian-specific program.",
    },
  ],
  comparisonSection: {
    heading: "Which Hyatt Inclusive Collection properties can families compare?",
    intro:
      "The package applies at named participating resorts — these are examples families may ask CeremonyVerse to evaluate on the same written questions. Inclusion does not mean affiliation, preferred status, guaranteed availability, or a recommendation, and participation can change. Current resort proposals and contracts control.",
  },
  sourcesReviewedOn: "August 25, 2026",
}
