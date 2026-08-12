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
  resortPackageBenchmarks?: {
    resort: string
    publicDetail: string
    planningNote: string
    sourceHref: string
  }[]
  sources: { label: string; href: string; note: string }[]
}

export const destinationPages: Record<"cancun" | "rivieraMaya" | "losCabos" | "jamaica" | "puntaCana", DestinationPageData> = {
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
  losCabos: {
    slug: "/destinations/los-cabos-indian-wedding/",
    shortName: "Los Cabos",
    title: "Indian destination wedding in Los Cabos",
    eyebrow: "Los Cabos planning guide",
    description:
      "Plan an Indian destination wedding in Los Cabos with current airport, resort-area, venue, cultural, catering, room-block, production, and weather checks.",
    answer:
      "Los Cabos can fit a multi-day Indian destination wedding when the exact resort or venue, guest travel plan, food operation, cultural permissions, vendor team, production access, room block, and weather backups support the celebration. San José del Cabo, the Tourist Corridor, and Cabo San Lucas have different logistics, so compare the property and written scope—not only the destination name.",
    idealFor: [
      "Families whose guest map has practical current flight options into Los Cabos International Airport",
      "Couples comparing luxury resort, all-inclusive, and private-venue formats",
      "Multi-event weddings that can confirm enough distinct spaces and indoor backups",
      "Guest groups prepared for property-specific transfers and movement across the region",
    ],
    compareBeforeChoosing: [
      "SJD flight access and the exact airport-to-property transfer plan",
      "San José del Cabo, Tourist Corridor, or Cabo San Lucas location and guest movement",
      "Indian and Jain food capability, cultural permissions, outside-vendor rules, and production access",
      "Room-block exposure, venue commitments, weather backups, staffing, travel, and complete host cost",
    ],
    facts: [
      {
        label: "Primary gateway",
        value: "SJD",
        detail: "Los Cabos International Airport serves the region; the exact transfer still depends on the selected property and arrival window.",
      },
      {
        label: "Regional layout",
        value: "Two towns + corridor",
        detail: "San José del Cabo and Cabo San Lucas are linked by a resort corridor; they should not be treated as one identical location.",
      },
      {
        label: "Planning variable",
        value: "Venue format",
        detail: "Resort, villa, restaurant, farm, and other private-venue plans can carry different room, transport, vendor, catering, and permit responsibilities.",
      },
      {
        label: "Pricing rule",
        value: "One complete scope",
        detail: "Normalize resort, venue, food, production, vendors, planning, travel, taxes, service charges, and contingency before comparing.",
      },
    ],
    eventRows: [
      {
        event: "Welcome, Mehndi, or Haldi",
        verify: "Shade, wind, privacy, guest access, food stations, wash areas, music, transport, setup, and an indoor weather backup.",
        risk: "Choosing an exposed beach or terrace from photos without checking comfort, access, service paths, sound, and a move plan.",
      },
      {
        event: "Sangeet or Garba",
        verify: "Stage, dance floor, audio, lighting, power, rigging, rehearsal, curfew, vendor access, guest transport, and indoor capacity.",
        risk: "Relying on a headline venue capacity before production, tables, performance space, and service circulation are drawn.",
      },
      {
        event: "Hindu ceremony and Baraat",
        verify: "Approved route, gathering point, sound, vehicle or animal rules, ceremony fire, Mandap installation, priest requirements, wind plan, and backup.",
        risk: "Assuming prior Indian weddings prove approval for the family's exact ceremony, procession, fire, or production plan.",
      },
      {
        event: "Reception",
        verify: "Seated layout, stage, catering, bar, sound, overtime, transport, vendor breakdown, weather decision, and late-night options.",
        risk: "Comparing the venue fee without the complete food, production, vendor, transport, tax, service-charge, and staffing scope.",
      },
    ],
    resortExamples: [
      "Grand Velas Los Cabos",
      "Hard Rock Hotel Los Cabos",
      "Hyatt Ziva Los Cabos",
      "Hilton Los Cabos Beach & Golf Resort",
      "Marquis Los Cabos",
      "One&Only Palmilla",
      "Pueblo Bonito Pacifica Golf & Spa Resort",
      "Nobu Hotel Los Cabos",
    ],
    arrival:
      "Los Cabos Tourism and the airport operator identify Los Cabos International Airport as SJD. The region includes San José del Cabo, the Tourist Corridor, and Cabo San Lucas, so transfer time and routing depend on the exact property, traffic, arrival terminal, group size, luggage, and mobility needs. Confirm one approved airport and licensed-transfer process before guests book.",
    foodAndCulture:
      "Request current Indian, Gujarati, Jain, vegan, and allergy procedures for the selected property or caterer. Confirm who cooks each menu, tasting and kitchen rules, outside-food fees, religious items, ceremony fire, Mandap installation, Baraat permissions, sound, power, and vendor access. A venue's wedding marketing or prior South Asian event does not approve the family's exact plan.",
    weatherAndBackup:
      "Los Cabos is in the eastern North Pacific basin, where the official hurricane season runs May 15 through November 30. That season does not predict conditions for one date, and outdoor plans also need to consider wind, heat, sun, and property exposure. Contract the backup venue, capacity, move deadline, authority, guest notice, transport, design changes, and any added cost.",
    familySupport:
      "CeremonyVerse can organize the cultural brief, destination comparison, decision owners, budget categories, guest information, meeting follow-ups, and optional India sourcing. The contracted Los Cabos team handles the agreed local planning and on-site execution. The resort, venue, or appropriately licensed provider handles rooms, transfers, flights, and regulated travel services.",
    questions: [
      "Which airport and transfer instruction should guests use for this exact property?",
      "Which event venues and indoor backups are guaranteed for every event?",
      "What capacity remains after the Mandap, stage, dance floor, production, tables, bars, and service paths are drawn?",
      "What Indian, Gujarati, Jain, allergy, outside-catering, kitchen, tasting, and late-night-food rules apply?",
      "What is permitted for the Baraat, ceremony fire, Mandap, sound, rigging, power, setup, and breakdown?",
      "How do room rates, minimum stays, deposits, attrition, concessions, cut-off dates, and event-access rules work?",
      "Which venue, production, vendor, planner-travel, staffing, tax, service-charge, and transport costs are outside the headline package?",
      "Who is physically present and authorized to solve venue, vendor, guest, transport, and weather problems?",
    ],
    faqs: [
      {
        question: "Is Los Cabos good for an Indian destination wedding?",
        answer:
          "It can be when a specific property and local team meet the event, food, cultural, guest-access, room, vendor, production, weather-backup, and complete-cost requirements. The destination's general wedding reputation does not prove fit for one family's plan.",
      },
      {
        question: "Which airport should Los Cabos wedding guests use?",
        answer:
          "Los Cabos International Airport uses the code SJD and is the principal commercial gateway. Confirm current routes, the selected property's transfer plan, terminal instructions, and the responsible licensed provider before guests book.",
      },
      {
        question: "Is Los Cabos more expensive than Cancún or Riviera Maya?",
        answer:
          "There is no responsible universal answer. Compare the same rooms, events, hours, venues, food, production, vendors, planning, travel, taxes, service charges, and contingency. Property type and wedding scope can matter more than the destination label.",
      },
      {
        question: "Does CeremonyVerse cover Los Cabos?",
        answer:
          "Yes. Current destination-wedding service coverage includes Los Cabos and other areas of Mexico, plus Punta Cana. Availability, the selected local team, responsibilities, travel, and wedding-specific costs are confirmed in the written proposal.",
      },
    ],
    sources: [
      {
        label: "Los Cabos Tourism — airports",
        href: "https://www.visitloscabos.travel/plan/los-cabos-airports/",
        note: "Official SJD airport and regional access overview",
      },
      {
        label: "Los Cabos Tourism — useful information",
        href: "https://www.visitloscabos.travel/plan/useful-information/",
        note: "Official destination layout and travel information",
      },
      {
        label: "Los Cabos Tourism — weddings",
        href: "https://www.visitloscabos.travel/weddings/",
        note: "Official wedding-destination overview",
      },
      {
        label: "National Hurricane Center climatology",
        href: "https://www.nhc.noaa.gov/climo/",
        note: "Official eastern Pacific hurricane-season dates",
      },
    ],
  },
  jamaica: {
    slug: "/destinations/jamaica-indian-wedding/",
    shortName: "Jamaica",
    title: "Indian destination wedding in Jamaica",
    eyebrow: "Jamaica planning guide",
    description:
      "Plan an Indian destination wedding in Jamaica with current resort-package, South Asian capability, room-block, cultural, catering, guest-access, and weather checks.",
    answer:
      "Jamaica can support a multi-day Indian destination wedding when the selected resort, event spaces, cultural permissions, food operation, room block, guest travel plan, entertainment rules, and on-site team fit the celebration. Public package pages are useful for building a shortlist, but the current resort-written proposal—not a brochure headline—must control the decision.",
    idealFor: [
      "Families whose guest map has practical current flights to the airport serving the selected resort area",
      "Couples comparing all-inclusive properties with multi-event venue options",
      "South Asian weddings that can confirm food, ceremony, procession, production, and backup requirements in writing",
      "Guest groups that can follow one clear room-block, arrival, transfer, and resort-access process",
    ],
    compareBeforeChoosing: [
      "The exact airport, resort-area transfer, and licensed-provider plan for every arrival window",
      "Current South Asian package scope, event spaces, realistic capacities, and weather backups",
      "Indian and Jain food capability, outside-vendor rules, cultural permissions, sound, fire, and production access",
      "Room-block exposure, guest passes, taxes, service charges, planner travel, staffing, and complete host cost",
    ],
    facts: [
      {
        label: "Common north-coast gateway",
        value: "MBJ",
        detail: "Sangster International Airport serves Montego Bay; the right airport and transfer time still depend on the selected resort area.",
      },
      {
        label: "Public package pricing",
        value: "Starting point only",
        detail: "Published figures can be dated, chain-wide, or limited to a base ceremony. Require a current Jamaica-specific written quote.",
      },
      {
        label: "South Asian option",
        value: "Property-specific",
        detail: "Royalton Blue Waters publicly offers Kohinoor South Asian wedding packages, while exact scope and price require direct confirmation.",
      },
      {
        label: "Planning focus",
        value: "Exact local owners",
        detail: "Confirm who is physically present, who manages each provider, and who is authorized to solve changes during every event.",
      },
    ],
    eventRows: [
      {
        event: "Welcome, Mehndi, or Haldi",
        verify: "Shade, rain cover, guest arrival flow, privacy, food service, wash areas, décor, music, resort access, and any day-pass rules.",
        risk: "Treating a tropical outdoor event as simple when weather, access, catering, sound, and setup rules still apply.",
      },
      {
        event: "Sangeet or Garba",
        verify: "Stage, dance floor, audio, lighting, power, rigging, rehearsal, curfew, entertainment approvals, vendor access, and indoor backup.",
        risk: "Using a headline capacity before tables, performances, production, service paths, and rain backup are drawn.",
      },
      {
        event: "Hindu ceremony and Baraat",
        verify: "Approved route, gathering point, sound, vehicle rules, ceremony fire, Mandap installation, priest requirements, security, and backup.",
        risk: "Assuming a South Asian package automatically permits the family's exact Gujarati or Hindu rituals and production plan.",
      },
      {
        event: "Reception",
        verify: "Seated layout, stage, catering, bar, sound, overtime, entertainment, transport, breakdown, and the weather-move process.",
        risk: "Comparing the base wedding package without added guests, events, hours, production, vendors, taxes, service charges, and planning.",
      },
    ],
    resortExamples: [
      "Royalton Blue Waters",
      "Grand Palladium Jamaica Resort & Spa",
      "Bahia Principe Grand Jamaica",
      "Hyatt Ziva Rose Hall",
      "Moon Palace Jamaica",
      "Jewel Grande Montego Bay",
    ],
    resortPackageBenchmarks: [
      {
        resort: "Grand Palladium Jamaica",
        publicDetail:
          "The resort's Tropical Bliss page publicly showed $8,400 USD for up to 50 people for 2025, including a ceremony, one-hour cocktail, and three-hour private reception with listed base food, beverage, cake, seating, flowers, music, and coordination elements.",
        planningNote:
          "The page specifically directs couples to request updated 2026 pricing. Pictured upgrades, added events, guests, décor, production, outside vendors, travel, tax, service charges, and other additions may be separate.",
        sourceHref: "https://www.palladiumweddings.com/en/destinations/jamaica/mbj-tropical-bliss",
      },
      {
        resort: "Royalton Blue Waters",
        publicDetail:
          "The resort publicly offers Kohinoor South Asian wedding packages and says couples work with a certified South Asian wedding planner. Its public venue information includes ceremony options and a beach setting listed for up to 200 guests.",
        planningNote:
          "No current package price is published on the resort page. Request the exact events, menus, spaces, cultural permissions, added-guest charges, vendor rules, rain backups, taxes, and total written quote.",
        sourceHref: "https://www.royaltonresorts.com/resorts/blue-waters/special-occasions/weddings",
      },
      {
        resort: "Bahia Principe Jamaica",
        publicDetail:
          "Bahia Principe's public weddings page advertises Blissful from $689 and Joyful from $989 for participating resorts in the Dominican Republic, Mexico, and Jamaica. Its general guide describes ceremony, dinner, photo, sound, toast, and stay-perk elements by package.",
        planningNote:
          "Those are chain-wide public starting points, not a guaranteed Jamaica quote or complete Indian-wedding total. Exact hotel, venue, guest count, legal-ceremony supplement, guest passes, additions, availability, and current written terms control.",
        sourceHref: "https://www.bahia-principe.com/en/weddings/",
      },
    ],
    arrival:
      "The Jamaica Tourist Board lists international airports in Montego Bay and Kingston, plus an airport serving the Ocho Rios area. Do not assign one airport to the entire island. Confirm the selected resort's approved airport, current flights, licensed-transfer provider, travel time, luggage and mobility needs, child seats, arrival staffing, and missed-connection process before guests book.",
    foodAndCulture:
      "Request current Indian, Gujarati, Jain, vegan, children's, and allergy procedures for the exact property. Confirm who prepares each menu, tastings, kitchen and outside-catering rules, late-night food, religious items, ceremony fire, Mandap installation, Baraat route, sound, production, entertainment, and vendor access. A South Asian package name is useful evidence, not blanket approval.",
    weatherAndBackup:
      "Jamaica is in the Atlantic basin, whose official hurricane season runs June 1 through November 30. That season does not predict conditions for one wedding date. Contract the indoor backup, capacity, weather-decision deadline, authority, guest notice, production move, transport change, and any price effect for every important outdoor event.",
    familySupport:
      "CeremonyVerse supports U.S. and Canadian families through remote planning meetings, the cultural brief, destination comparison, budget categories, decisions, guest-information organization, and optional India sourcing. The experienced Mexico City-based destination partner and any named Jamaica providers handle only the local planning and on-site work assigned in the written proposal. Resorts or appropriately licensed providers handle rooms, flights, transfers, and regulated travel services.",
    questions: [
      "Which airport and licensed-transfer instruction applies to this exact resort?",
      "Which events, hours, venues, menus, décor, flowers, sound, cake, beverages, seating, and coordinator services are included in the current package?",
      "Which exact venues and indoor backups are guaranteed for every event?",
      "What Indian, Gujarati, Jain, allergy, kitchen, outside-catering, tasting, and late-night-food rules apply?",
      "What is permitted for the Baraat, ceremony fire, Mandap, sound, entertainment, golf-cart logistics, rigging, power, setup, and breakdown?",
      "How do room rates, minimum stays, deposits, attrition, concessions, cut-off dates, guest passes, and event-access rules work?",
      "Which added-event, guest, planner-travel, staffing, production, vendor, tax, service-charge, permit, insurance, and transport costs sit outside the package?",
      "Who is physically present and authorized to solve resort, vendor, guest, transfer, entertainment, and weather problems?",
    ],
    faqs: [
      {
        question: "How much does a Jamaica resort wedding package cost?",
        answer:
          "Public starting points vary widely by resort and scope. For example, Grand Palladium's dated 2025 Tropical Bliss page showed $8,400 for up to 50, Royalton Blue Waters requires a quote for its Kohinoor South Asian option, and Bahia Principe advertises chain-wide starting packages from $689. None is a complete Indian destination-wedding budget or guaranteed current Jamaica price.",
      },
      {
        question: "Which Jamaica resort publicly offers a South Asian wedding package?",
        answer:
          "Royalton Blue Waters publicly promotes Kohinoor South Asian wedding packages and a certified South Asian wedding planner. The current price, exact cultural permissions, menus, event spaces, vendor rules, and total scope must still be confirmed directly in writing.",
      },
      {
        question: "Can CeremonyVerse plan a Jamaica wedding virtually?",
        answer:
          "Planning meetings, decision records, proposal review, family coordination, and guest-information work can be handled remotely for U.S. and Canadian families. Any Jamaica site work or on-site execution is included only when the signed proposal names the responsible partner, travel, staffing, dates, and scope.",
      },
      {
        question: "Does CeremonyVerse book Jamaica rooms or flights?",
        answer:
          "CeremonyVerse does not independently sell rooms, flights, transfers, or travel insurance. Those services remain with the resort or another appropriately licensed provider named for the engagement.",
      },
    ],
    sources: [
      {
        label: "Jamaica Tourist Board — getting here",
        href: "https://www.visitjamaica.com/plan-your-adventure/getting-here/",
        note: "Official airport and travel-planning overview",
      },
      {
        label: "Grand Palladium Jamaica — Tropical Bliss",
        href: "https://www.palladiumweddings.com/en/destinations/jamaica/mbj-tropical-bliss",
        note: "Official dated package price, guest count, and listed inclusions",
      },
      {
        label: "Royalton Blue Waters — weddings",
        href: "https://www.royaltonresorts.com/resorts/blue-waters/special-occasions/weddings",
        note: "Official Kohinoor South Asian wedding and venue information",
      },
      {
        label: "Bahia Principe — weddings",
        href: "https://www.bahia-principe.com/en/weddings/",
        note: "Official chain-wide public package starting points and inclusions",
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
