export type DestinationPageData = {
  slug: string
  shortName: string
  title: string
  eyebrow: string
  description: string
  answer: string
  idealFor: string[]
  compareBeforeChoosing: string[]
  facts: { label: string; value: string; detail: string }[]
  eventRows: { event: string; verify: string; risk: string }[]
  resortExamples: string[]
  arrival: string
  foodAndCulture: string
  weatherAndBackup: string
  familySupport: string
  questions: string[]
  faqs: { question: string; answer: string }[]
  sources: { label: string; href: string; note: string }[]
}

export const destinationPages: Record<"cancun" | "rivieraMaya" | "puntaCana", DestinationPageData> = {
  cancun: {
    slug: "/destinations/cancun-indian-wedding/",
    shortName: "Cancún",
    title: "Indian destination wedding in Cancún",
    eyebrow: "Cancún planning guide",
    description:
      "Plan an Indian destination wedding in Cancún with clear room-block, multi-event, cultural, catering, weather-backup, and guest-logistics questions.",
    answer:
      "Cancún can work well for a multi-day Indian wedding when a specific resort—not the destination name alone—can support the guest count, private event spaces, food plan, Baraat or procession, Mandap requirements, production, sound limits, and an indoor weather backup. CeremonyVerse helps U.S. and Canadian families compare those facts before signing.",
    idealFor: [
      "Families prioritizing a straightforward arrival through Cancún International Airport",
      "Couples who want a broad selection of all-inclusive and luxury-resort formats",
      "Multi-event weddings that need several distinct venues within one property",
      "Guest groups that benefit from a concentrated resort experience and organized transfers",
    ],
    compareBeforeChoosing: [
      "Actual transfer time for the selected property and arrival window",
      "Guaranteed event venues, realistic seated capacity, and indoor backups",
      "Outside-vendor, catering, production, fire, sound, and curfew rules",
      "Room-block deposits, minimum stays, attrition, concessions, and cancellation terms",
    ],
    facts: [
      {
        label: "Primary gateway",
        value: "CUN",
        detail: "Cancún International Airport serves the destination; transfer time still depends on the exact resort and traffic.",
      },
      {
        label: "Best planning lens",
        value: "Property first",
        detail: "Hotel Zone, downtown, Costa Mujeres, and nearby resort areas should not be treated as one identical experience.",
      },
      {
        label: "Weather planning",
        value: "Written backup",
        detail: "Outdoor beauty is not a substitute for a contracted indoor venue, decision time, and move plan.",
      },
      {
        label: "Pricing rule",
        value: "Current quote only",
        detail: "Packages, spaces, taxes, vendor rules, and concessions can change; confirm every material term in writing.",
      },
    ],
    eventRows: [
      {
        event: "Welcome, Mehndi, or poolside gathering",
        verify: "Privacy, shade, rain cover, guest access, food stations, music limits, and the plan for arriving guests.",
        risk: "Treating a casual event as operationally simple when setup, catering, weather, and resort access still matter.",
      },
      {
        event: "Garba or Sangeet",
        verify: "Dance-floor footprint, stage, audio, lighting, power, rigging, rehearsal time, curfew, and indoor capacity.",
        risk: "Using the venue's cocktail capacity even though tables, performance space, production, and circulation reduce it.",
      },
      {
        event: "Hindu ceremony and Baraat",
        verify: "Approved route, gathering point, animal or vehicle rules, sound, fire permissions, Mandap anchoring, priest needs, and weather backup.",
        risk: "Assuming a resort's previous Indian weddings mean every ritual and production request is automatically permitted.",
      },
      {
        event: "Reception",
        verify: "Seated plan, stage, dance floor, bar, catering, speeches, sound limit, overtime, breakdown, and final indoor alternative.",
        risk: "Comparing only the headline package instead of the full event order and every additional guest or hour.",
      },
    ],
    resortExamples: [
      "Hyatt Ziva Cancún",
      "Moon Palace The Grand – Cancún",
      "Hard Rock Hotel Cancún",
      "AVA Resort Cancún",
      "Grand Palladium Costa Mujeres Resort & Spa",
      "TRS Coral Hotel",
      "Garza Blanca Resort & Spa Cancún",
      "Dreams Vista Cancún Golf & Spa Resort",
    ],
    arrival:
      "Official Mexican Caribbean tourism information identifies Cancún International Airport as the gateway for Cancún and notes that the Hotel Zone is close to the airport. That does not make every advertised Cancún resort equally close. Build a manifest by flight, arrival time, terminal, luggage needs, mobility needs, child-seat needs, and provider—not just a total guest count.",
    foodAndCulture:
      "Ask who actually prepares Indian, Gujarati, Jain, vegan, allergy-sensitive, and children's meals; which kitchen and service rules apply; whether tasting is available; and what fees or minimums are additional. Your family and officiant approve the cultural plan. The destination team converts the approved plan into layouts, equipment, venue rules, timelines, vendor instructions, and guest communication.",
    weatherAndBackup:
      "Cancún is in the Atlantic basin, where the official hurricane season runs June 1 through November 30. A season date does not predict conditions for one wedding, but it makes a written backup plan essential. Confirm the indoor venue, capacity, décor move, production move, decision authority, notification process, and any added cost before the contract is final.",
    familySupport:
      "CeremonyVerse can organize the cultural brief, family decision owners, proposal comparison, complete-cost worksheet, meeting follow-ups, guest-information plan, and optional India sourcing. The selected destination planning team manages contracted local planning and on-site execution. Rooms, flights, transfers, and regulated travel services remain with the resort or an appropriately licensed provider.",
    questions: [
      "Which exact venue and indoor backup are held for every event?",
      "What capacity applies after the Mandap, stage, dance floor, production, tables, bars, and service paths are drawn?",
      "What deposits, minimum stays, attrition, cut-off dates, cancellation terms, and concessions apply to the room block?",
      "Which outside vendors are allowed, and what fees, insurance, access, power, rigging, security, and meal requirements apply?",
      "Who prepares each menu, and how are Jain, allergy, vegan, and specialty-food requirements documented?",
      "What are the Baraat route, sound, fire, curfew, beach, and ceremony-structure rules?",
      "Who decides a weather move, by what deadline, and what cost or design changes follow?",
      "Who is physically present during setup, each event, transitions, breakdown, and guest emergencies?",
    ],
    faqs: [
      {
        question: "How much does an Indian destination wedding in Cancún cost?",
        answer:
          "There is no responsible universal total. Guest count, event count and hours, room obligations, private venues, food and beverage, production, décor, entertainment, photography, beauty, transport, planning, tax, service charges, and contingency all affect the result. Compare complete written proposals using the same assumptions.",
      },
      {
        question: "Is Cancún better than Riviera Maya for an Indian wedding?",
        answer:
          "Not automatically. Cancún may simplify airport access for some properties, while a Riviera Maya resort may better fit the setting or event plan. The better choice is the property and contract that win on guest access, spaces, food, cultural feasibility, complete cost, weather backup, and execution.",
      },
      {
        question: "Can a Cancún resort host a Baraat and Hindu ceremony?",
        answer:
          "Many properties can support elements of an Indian wedding, but permission is property- and plan-specific. Confirm the exact route, gathering point, vehicle or animal rules, sound, fire, Mandap installation, priest requirements, security, and backup venue in writing.",
      },
      {
        question: "Does CeremonyVerse book guest rooms or flights?",
        answer:
          "CeremonyVerse does not currently sell rooms, flights, or transfers. Those services remain with the resort or an appropriately licensed provider. CeremonyVerse can organize agreed family and guest information without presenting itself as a travel agency.",
      },
    ],
    sources: [
      {
        label: "Mexican Caribbean — Cancún",
        href: "https://mexicancaribbean.travel/destination/cancun/",
        note: "Official destination and gateway information",
      },
      {
        label: "Mexican Caribbean travel information",
        href: "https://mexicancaribbean.travel/travel-information/",
        note: "Official airport and regional travel information",
      },
      {
        label: "National Hurricane Center climatology",
        href: "https://www.nhc.noaa.gov/climo/",
        note: "Official Atlantic hurricane-season dates",
      },
    ],
  },
  rivieraMaya: {
    slug: "/destinations/riviera-maya-indian-wedding/",
    shortName: "Riviera Maya",
    title: "Indian destination wedding in Riviera Maya",
    eyebrow: "Riviera Maya planning guide",
    description:
      "Plan an Indian destination wedding in Riviera Maya with resort-layout, transfer, multi-event, cultural, catering, mobility, and weather-backup checks.",
    answer:
      "Riviera Maya can suit an Indian destination wedding when the chosen resort's scale, venues, guest movement, food operation, vendor rules, weather backup, and transfer plan match the celebration. The region stretches along a large section of coast, so a property near Puerto Morelos and one near Tulum should never be compared as if location and logistics were identical.",
    idealFor: [
      "Families who value a resort setting with several outdoor and indoor venue styles",
      "Couples willing to compare property layout and airport transfer time carefully",
      "Multi-day celebrations that benefit from keeping guests together at one resort",
      "Weddings that can plan mobility, weather, production, and vendor access early",
    ],
    compareBeforeChoosing: [
      "Whether CUN or Tulum airport is practical for the selected resort and guest origins",
      "Walking distance, carts or shuttles, accessibility, and room-to-event movement",
      "Beach, garden, terrace, ballroom, and rain-backup capacity with real layouts",
      "Vendor access, setup windows, production routes, storage, security, and breakdown",
    ],
    facts: [
      {
        label: "Regional scale",
        value: "About 130 km",
        detail: "Official regional tourism describes Riviera Maya as extending from Puerto Morelos to Tulum.",
      },
      {
        label: "Airport choices",
        value: "CUN or TQO",
        detail: "Cancún and Tulum airports may be relevant; compare current routes and exact ground transfers for your guests.",
      },
      {
        label: "Hidden variable",
        value: "Resort layout",
        detail: "A beautiful large property can create long walks, cart dependence, and difficult event transitions.",
      },
      {
        label: "Pricing rule",
        value: "Normalize quotes",
        detail: "Use the same guest count, events, hours, spaces, taxes, fees, and third-party categories for every proposal.",
      },
    ],
    eventRows: [
      {
        event: "Mehndi, Haldi, or welcome event",
        verify: "Shade, water, wash areas, privacy, décor limits, food stations, music, resort guest traffic, and rain backup.",
        risk: "Selecting an outdoor location from photos without checking midday heat, guest comfort, wind, insects, or service access.",
      },
      {
        event: "Garba or Sangeet",
        verify: "Flooring, dance and stage dimensions, power, lighting, audio, curfew, transport from guest rooms, and indoor capacity.",
        risk: "Assuming a distant venue is easy for elders, children, performers, and guests in formal clothing.",
      },
      {
        event: "Hindu ceremony and procession",
        verify: "Baraat route, gathering area, property traffic, fire and sound rules, Mandap load-in, priest setup, seating, and backup.",
        risk: "Finalizing décor before the resort confirms access, anchoring, wind, fire, power, and breakdown rules.",
      },
      {
        event: "Reception and late-night transition",
        verify: "Seated layout, kitchen distance, production access, curfew, overtime, after-party options, transport, and breakdown timing.",
        risk: "Treating the final event as isolated from guest fatigue, venue distance, weather moves, and vendor teardown.",
      },
    ],
    resortExamples: [
      "Hard Rock Hotel Riviera Maya",
      "Generations Riviera Maya",
      "El Dorado Royale",
      "Grand Velas Riviera Maya",
      "Grand Palladium Kantenah Resort & Spa",
      "Hyatt Ziva Riviera Cancún",
      "Hilton Tulum Riviera Maya All-Inclusive Resort",
      "Dreams Natura Resort & Spa",
    ],
    arrival:
      "The official Mexican Caribbean tourism site identifies both Cancún International Airport and Tulum International Airport as gateways for Riviera Maya. The right airport depends on current routes, the resort's location, guest origins, arrival times, and ground-transport plan. Give guests one approved airport and transfer instruction for their booking—not a generic 'fly to Riviera Maya' message.",
    foodAndCulture:
      "A resort may advertise Indian-wedding experience while its current chef, caterer, menu, outside-food rule, or event team has changed. Request current menus and written operating conditions. Confirm Jain and allergy handling, separate preparation when required, vendor-meal requirements, tasting, overtime, late-night food, and how religious items or ceremony fire are reviewed.",
    weatherAndBackup:
      "Riviera Maya is also within the Atlantic basin. Outdoor plans must account for rain, wind, heat, humidity, insects, beach conditions, and seasonal storms without pretending to predict a specific date. Hold a real indoor backup for each critical event and document how décor, production, seating, catering, guest transport, and notifications move.",
    familySupport:
      "CeremonyVerse adds the family-side system: cultural priorities, decision owners, proposal comparison, budget categories, guest information, meeting follow-ups, and optional India sourcing. The contracted local team leads destination planning and on-site execution. Resort contracts and licensed travel services remain with the named providers.",
    questions: [
      "Which airport should guests use for this exact property, and what transfer time should be planned by arrival window?",
      "How far are guest-room categories from each event venue, and what accessible transport is available?",
      "Which event venues and indoor backups are guaranteed—not merely requested?",
      "How are venue capacities calculated after every production and service element is drawn?",
      "What are the Indian, Gujarati, Jain, allergy, outside-catering, tasting, and late-night-food rules?",
      "What vendor fees, insurance, access hours, storage, loading, power, rigging, security, and breakdown rules apply?",
      "How do room-block deposits, attrition, concessions, upgrades, cut-off dates, and event-access rules work?",
      "Who has final authority during weather changes, vendor issues, guest emergencies, and schedule delays?",
    ],
    faqs: [
      {
        question: "Is Riviera Maya the same as Cancún for wedding planning?",
        answer:
          "No. They share a regional gateway for many trips, but Riviera Maya covers a long coastal area with very different transfer times, property layouts, and operating conditions. Compare the exact resort and airport plan rather than using the destination names interchangeably.",
      },
      {
        question: "Which airport should guests use for a Riviera Maya wedding?",
        answer:
          "Cancún International Airport and Tulum International Airport may both be relevant. The correct instruction depends on the resort, current flight options, guest origins, and licensed ground-transfer plan. Confirm it before guests book.",
      },
      {
        question: "Can Riviera Maya resorts prepare Indian or Jain food?",
        answer:
          "Capabilities vary by property, date, chef, caterer, kitchen, and contract. Request current menus, tasting and preparation details, allergy procedures, outside-catering rules, fees, taxes, service charges, and final written confirmation for each event.",
      },
      {
        question: "How early should a large Riviera Maya Indian wedding start planning?",
        answer:
          "Starting 12 months or more before preferred dates usually gives more flexibility for resort proposals, rooms, venues, planners, vendors, and outfits. High-demand dates, large room blocks, or complex multi-day production may need more time; actual availability must be confirmed.",
      },
    ],
    sources: [
      {
        label: "Mexican Caribbean — Riviera Maya",
        href: "https://mexicancaribbean.travel/destination/riviera-maya/",
        note: "Official regional scale and gateway information",
      },
      {
        label: "Mexican Caribbean travel information",
        href: "https://mexicancaribbean.travel/travel-information/",
        note: "Official regional airport information",
      },
      {
        label: "National Hurricane Center climatology",
        href: "https://www.nhc.noaa.gov/climo/",
        note: "Official Atlantic hurricane-season dates",
      },
    ],
  },
  puntaCana: {
    slug: "/destinations/punta-cana-indian-wedding/",
    shortName: "Punta Cana",
    title: "Indian destination wedding in Punta Cana",
    eyebrow: "Punta Cana planning guide",
    description:
      "Plan an Indian destination wedding in Punta Cana with current airport, entry-form, resort, multi-event, cultural, catering, room-block, and weather checks.",
    answer:
      "Punta Cana can support a multi-day Indian destination wedding when the selected property, local execution team, food plan, venue inventory, room block, guest-entry process, and weather backup match the celebration. It should be compared with Mexico through complete written proposals—not chosen only because a resort package or room rate looks lower.",
    idealFor: [
      "Families whose guest map has practical flight options into Punta Cana International Airport",
      "Couples looking for a concentrated all-inclusive resort destination",
      "Multi-event weddings with a property that can confirm cultural and production requirements",
      "Guest groups that can follow one clear entry-form, airport, transfer, and room-block process",
    ],
    compareBeforeChoosing: [
      "Current flight patterns and the exact PUJ-to-resort transfer plan",
      "Official passport, visa, transit, and Dominican E-Ticket requirements for each traveler",
      "Indian and Jain menu capability, outside-catering rules, tasting, and kitchen operations",
      "Local vendor depth, planner coverage, production access, weather backup, and complete cost",
    ],
    facts: [
      {
        label: "Primary gateway",
        value: "PUJ",
        detail: "Punta Cana International Airport serves the region; official tourism guidance shows transfer time varies by resort area.",
      },
      {
        label: "Entry process",
        value: "Free E-Ticket",
        detail: "Dominican authorities require the electronic entry and exit form for commercial-flight passengers.",
      },
      {
        label: "Planning focus",
        value: "Local execution",
        detail: "Confirm who is on site, who manages vendors and resort decisions, and who handles changes during every event.",
      },
      {
        label: "Pricing rule",
        value: "Complete host cost",
        detail: "Compare rooms, events, vendors, production, tax, service charges, travel, planning, and contingency together.",
      },
    ],
    eventRows: [
      {
        event: "Welcome, Mehndi, or Haldi",
        verify: "Shade, rain cover, guest arrival flow, privacy, food service, wash areas, décor, music, and resort access.",
        risk: "Assuming tropical outdoor space needs little production or backup planning.",
      },
      {
        event: "Sangeet or Garba",
        verify: "Stage, dance floor, audio, lighting, power, rigging, rehearsal, curfew, vendor access, and indoor backup capacity.",
        risk: "Choosing by ballroom capacity before the real event footprint and service paths are drawn.",
      },
      {
        event: "Hindu ceremony and Baraat",
        verify: "Approved route, gathering point, sound, vehicle or animal rules, ceremony fire, Mandap installation, priest requirements, and backup.",
        risk: "Treating general South Asian experience as approval for the family's exact Gujarati or Hindu plan.",
      },
      {
        event: "Reception",
        verify: "Seated layout, stage, catering, bar, sound, overtime, transport, vendor breakdown, and the weather-move process.",
        risk: "Comparing a wedding-package headline without added guests, hours, production, vendors, tax, service charges, and planning.",
      },
    ],
    resortExamples: [
      "Hyatt Ziva Cap Cana",
      "Hard Rock Hotel & Casino Punta Cana",
      "Lopesan Costa Bávaro Resort, Spa & Casino",
      "Grand Palladium Punta Cana Resort & Spa",
      "Paradisus Palma Real Golf & Spa Resort",
      "Barceló Bávaro Palace",
      "Dreams Macao Beach Punta Cana",
      "Majestic Colonial Punta Cana",
    ],
    arrival:
      "The Dominican Republic Ministry of Tourism says PUJ is near Punta Cana and Cap Cana, while transfer times increase for Bávaro, Arena Gorda, Macao, and Uvero Alto. The official E-Ticket is free and required for commercial-flight entry and exit. Each traveler remains responsible for current passport, visa, transit, health, and entry requirements; do not promise that an entire guest list can enter under one rule.",
    foodAndCulture:
      "Ask for current Indian and Jain menus, chef or caterer details, tasting rules, allergy handling, outside-food policy, kitchen access, service hours, fees, minimums, taxes, and service charges. Confirm the Baraat, ceremony fire, Mandap, religious items, sound, production, and vendor rules separately. A prior Indian wedding is useful context, not permission for your exact plan.",
    weatherAndBackup:
      "Punta Cana is in the Atlantic basin, whose official hurricane season runs June 1 through November 30. Conditions are not guaranteed in any season. Contract the indoor backup, capacity, weather-decision deadline, décor and production move, guest notice, transport change, and any price effect for every important outdoor event.",
    familySupport:
      "CeremonyVerse supports U.S. and Canadian families with the cultural brief, destination comparison, budget categories, decision tracking, guest-information organization, and optional India sourcing. The contracted Punta Cana team handles the agreed local planning and on-site execution. The resort or licensed provider handles rooms, transfers, flights, and regulated travel services.",
    questions: [
      "Which guest origins have practical current flights into PUJ for the preferred dates?",
      "What current passport, visa, transit, and E-Ticket steps apply to each traveler?",
      "Which exact venues and indoor backups are guaranteed for every event?",
      "What Indian, Gujarati, Jain, allergy, outside-catering, kitchen, tasting, and late-night-food rules apply?",
      "What is permitted for the Baraat, ceremony fire, Mandap, sound, stage, dance floor, rigging, and power?",
      "How do room rates, minimum stays, deposits, attrition, concessions, cut-off dates, and event-access rules work?",
      "What local vendor, staffing, travel, lodging, tax, and production costs sit outside the resort package?",
      "Who is physically on site and authorized to solve resort, vendor, guest, and weather problems?",
    ],
    faqs: [
      {
        question: "Is Punta Cana good for an Indian destination wedding?",
        answer:
          "It can be when a specific property and local team meet the event, food, cultural, room-block, guest-access, production, weather-backup, and budget requirements. The destination name alone does not prove fit.",
      },
      {
        question: "Do Punta Cana wedding guests need an E-Ticket?",
        answer:
          "Dominican authorities require commercial-flight passengers entering or departing the country to complete the official free electronic entry and exit form. Travelers should use the official government site and verify all other current document requirements individually.",
      },
      {
        question: "Is Punta Cana cheaper than Mexico for an Indian wedding?",
        answer:
          "There is no universal winner. Compare the same rooms, guest count, events, hours, menus, venues, planners, vendors, production, transport, taxes, service charges, travel, and contingency. A lower headline package can exclude expensive required categories.",
      },
      {
        question: "Can CeremonyVerse plan beyond Cancún and Riviera Maya?",
        answer:
          "Yes. Current destination-wedding service coverage includes Mexico and Punta Cana. The written proposal confirms availability, the selected destination team, local execution, CeremonyVerse family support, and any optional India sourcing.",
      },
    ],
    sources: [
      {
        label: "Dominican Republic Tourism — Punta Cana",
        href: "https://www.godominicanrepublic.com/destinations/punta-cana",
        note: "Official destination and airport overview",
      },
      {
        label: "Dominican Republic Tourism — air travel",
        href: "https://www.godominicanrepublic.com/travel/air-and-sea-travel",
        note: "Official airport-area transfer guidance",
      },
      {
        label: "Dominican Republic entry requirements",
        href: "https://www.godominicanrepublic.com/travel/entry-requirements",
        note: "Official E-Ticket and entry-information page",
      },
      {
        label: "National Hurricane Center climatology",
        href: "https://www.nhc.noaa.gov/climo/",
        note: "Official Atlantic hurricane-season dates",
      },
    ],
  },
}
