export interface VenuePlanningGuide {
  slug: string; venue: string; region: string; profile: string; description: string; intro: string
  blueprint: string[]
  logistics: { title: string; fact?: string; advice: string; source?: number }[]
  days: { day: string; plan: string }[]
  questions: string[]
  sources: { label: string; href: string }[]
}

export const venuePlanningGuides: VenuePlanningGuide[] = [
  {
    slug: "moon-palace-cancun-wedding-planning", venue: "Moon Palace Cancún", region: "Cancún, Mexico",
    profile: "/resorts/moon-palace-cancun-indian-wedding/",
    description: "Planning a wedding at Moon Palace Cancún? Explore Lake Terrace and Meditation Garden layouts, vendor-access questions and a free ceremony timeline.",
    intro: "For a Moon Palace Cancún wedding, start with the exact event space and your seated layout. A cocktail capacity is not a dinner capacity, and an attractive ceremony setting still needs an accessible route, a sound plan and a written weather backup.",
    blueprint: [
      "Build your venue brief around the people who will use it: the couple, grandparents, children, the pandit, musicians and production crew. For each event, ask the resort to mark the entrance, ceremony focal point, dining area, dance floor and service routes on one floor plan. Put your actual furniture and production needs on that plan before treating a brochure capacity as your usable guest count.",
      "Keep the property name precise in every email and quote. The Palace Company markets several Cancún properties, including Moon Palace Cancún, Moon Palace Nizuc and Moon Palace The Grand. Ask which property, room inventory and event spaces your agreement covers. A photograph or benefit from another property should not become an assumption in your wedding plan.",
      "For a Gujarati/Hindu celebration, create separate briefs for mehndi, haldi, sangeet, baraat, ceremony and reception. CeremonyVerse can help you organise the questions and compare the resort's written answers through the $300 Feasibility Plan. The aim is a usable decision record before you commit to the full celebration.",
    ],
    logistics: [
      { title: "Lake Terrace: separate cocktail and dinner layouts", fact: "The official wedding page lists Lake Terrace for 300 cocktail guests or 180 buffet guests. Meditation Garden is listed for 80 ceremony or cocktail guests, and 30 buffet guests.", advice: "For a 150-person celebration, the published Meditation Garden ceremony count would not fit the full group. Ask about a suitable ceremony space and a separate dinner layout. Even on Lake Terrace, get a drawing that includes the mandap or stage, dance floor, buffet, aisles and accessible seating; the published maximum is not an approval of that configuration.", source: 0 },
      { title: "Load-in and strike: get the working window", advice: "Ask when decorators can first enter each space, which service route they must use, and when every item must leave. Request the weather-backup setup window separately. Assign one coordinator to stagger deliveries, reserve a holding area for crates and confirm who pays for labour if the space changes. No universal three-hour setup window is assumed here." },
      { title: "Sound, lighting and ceremony visibility", advice: "Ask the resort's AV team to test the actual layout with the pandit's microphone, officiant microphone and processional music. For an outdoor setting, discuss wind noise, covered power and a visible route to the ceremony. For a ballroom backup, request an on-site sound check and a lighting plot. Speaker delay, rigging and technical specifications should follow the AV team's site assessment." },
      { title: "South Asian support: turn capabilities into booked services", fact: "The Palace Company's South Asian wedding material describes Indian-chef support and options such as henna, stages and baraat horses.", advice: "Ask which services are available at your exact property and on your dates, who provides them, and what each costs. Confirm vegetarian and Jain menus through the kitchen, and have the resort and pandit agree on ritual materials, fire permission and the baraat route in writing.", source: 1 },
    ],
    days: [
      { day: "Arrival day", plan: "Welcome desk, family assistance and a short resort-team briefing. Leave room for delayed flights before scheduling a required family event." },
      { day: "Celebration day", plan: "Mehndi or haldi followed by a sangeet, each with its own setup, catering and cleanup owner." },
      { day: "Wedding day", plan: "Sound check, guest seating, agreed baraat route, pandit-led ceremony, family photographs and a separately confirmed reception space." },
      { day: "Departure day", plan: "Optional farewell gathering, grouped transfers and a final check for personal items and vendor collections." },
    ],
    questions: ["Which exact property and event spaces appear in our contract?", "Does the signed floor plan fit our guests after the stage, dance floor and service lanes are included?", "Who makes the weather decision, and when must the backup room be ready?", "Which cultural services are included, outsourced or still unconfirmed?"],
    sources: [{ label: "Moon Palace Cancún: official wedding spaces and capacities", href: "https://www.moonpalacecancun.com/weddings" }, { label: "The Palace Company: South Asian wedding capabilities", href: "https://weddings.thepalacecompany.com/blog/weddings-mexico" }],
  },
  {
    slug: "hard-rock-riviera-maya-wedding-planning", venue: "Hard Rock Hotel Riviera Maya", region: "Riviera Maya, Mexico",
    profile: "/resorts/hard-rock-riviera-maya-indian-wedding/",
    description: "Planning a Hard Rock Riviera Maya wedding? Understand published vendor fees, outdoor event timing, production questions and your free ceremony timeline.",
    intro: "For a Hard Rock Riviera Maya wedding, review the vendor-access and private-function rules before building the production budget. Your DJ, décor team and photographer may create different costs across services, crew members and event days.",
    blueprint: [
      "Start with a production roster, not one combined décor estimate. List every company, the work it will perform, the number of people arriving, the equipment it brings and the dates it needs access. Give the same roster to the resort and each vendor so their quotes describe the same wedding.",
      "A multi-day Gujarati/Hindu celebration needs a schedule for the venue team as well as the family. The sangeet may need rehearsals and sound checks, the mandap may require a substantial build, and the ceremony may use a different audio setup from the reception. Give each event its own access, performance and strike blocks before approving an overall timeline.",
      "CeremonyVerse can help you compare the resulting written terms through the $300 Feasibility Plan. This guide focuses on operating questions; the separate resort profile covers broader package and cultural-fit considerations. Always identify Riviera Maya explicitly so terms for Hard Rock Cancún or another property are not substituted.",
    ],
    logistics: [
      { title: "Outside vendors: budget by service and access day", fact: "The resort's published requirements list a $1,500 outside-vendor fee per vendor, applied per service when a vendor provides multiple services. It covers one person for one day; additional crew or days require day passes.", advice: "Ask for a vendor-by-vendor fee schedule attached to your proposal, including any preferred-vendor exemptions. Have the resort explain how photography, video, décor and entertainment are classified. Avoid counting one fee for a combined team until that treatment is confirmed.", source: 0 },
      { title: "AV and heavy installations: clarify supervision and insurance", fact: "The same page lists a $1,500 supervision fee and a $500,000 insurance-policy requirement for outside AV, DJ equipment or heavy installations.", advice: "Ask whether this is additional to other vendor charges in your specific case. Before booking trussing, a tent or suspended décor, have the resort and supplier agree on approvals, access, power, rigging and insurance documentation. Request the permitted setup and strike times; do not assume a standard load-in allowance.", source: 0 },
      { title: "Outdoor timing: plan the evening handoff", fact: "Published private-function rules say pool areas are unavailable before 7 PM and outdoor functions must finish by 10:30 PM. Ballroom extensions require additional hours and staffing fees.", advice: "Treat these as published rules to reconfirm for your date and selected space. If you want dancing later into the evening, request an indoor continuation with its own quote, guest route and sound plan. Check whether the final song, guest departure and vendor strike have different deadlines.", source: 0 },
      { title: "Guest flow and sound: approve the actual layout", advice: "Request a floor plan showing the ceremony focal point, dining seats, dance floor, buffet and clear circulation lanes. Ask the AV team to specify microphone coverage after seeing that plan. Walk the route to the next event with the family-support lead and agree where guests can sit, get water or request assistance. A venue maximum alone does not show how comfortably that transition works." },
    ],
    days: [
      { day: "Arrival day", plan: "Confirm vendor rosters and passes; brief the family on meeting points and transport. Keep the welcome event flexible." },
      { day: "Pre-wedding day", plan: "Mehndi, haldi and sangeet as agreed with the family. Give sound checks and any rehearsal their own approved access periods." },
      { day: "Wedding day", plan: "Separate baraat, ceremony and reception cues. If the evening moves indoors, book and staff that handoff explicitly." },
      { day: "Departure day", plan: "Complete equipment collection against the vendor roster, reconcile return items and support departing guests." },
    ],
    questions: ["What is the total access cost for each vendor, service, crew member and day?", "Which supervision charges and insurance requirements apply to our actual production?", "What are the written music, guest-departure and strike deadlines for each space?", "If we move indoors, who resets the room, moves equipment and guides our guests?"],
    sources: [{ label: "Hard Rock Riviera Maya: published vendor and private-function rules", href: "https://hotel.hardrock.com/riviera-maya/marriage-requirements.aspx" }, { label: "Hard Rock Riviera Maya: official wedding overview", href: "https://hotel.hardrock.com/riviera-maya/weddings.aspx" }],
  },
  {
    slug: "lopesan-costa-bavaro-wedding-planning", venue: "Lopesan Costa Bávaro", region: "Punta Cana, Dominican Republic",
    profile: "/resorts/lopesan-costa-bavaro-indian-wedding/",
    description: "Planning a Lopesan Costa Bávaro wedding? Compare beach, garden and rooftop options, guest-count inclusions and a free ceremony planning timeline.",
    intro: "For a Lopesan Costa Bávaro wedding, match each package inclusion to your actual guest count and each event to an exact space. A symbolic ceremony package is a starting point; a multi-day Gujarati/Hindu wedding needs a separate cultural and production brief.",
    blueprint: [
      "Make two documents before selecting a package: an event map and an inclusion checklist. The event map names the space, guest count, access window, catering period and backup for every celebration. The checklist records the number of people covered by each included item. Together they reveal gaps that a package headline can hide.",
      "For guests travelling from the United States and Canada, plan the wedding week around arrival patterns and family needs. Put required ceremonies after the key participants are expected to arrive, identify who can help elders between spaces, and leave a clear channel for transport updates. Venue beauty matters most when the people you love can enjoy it comfortably.",
      "CeremonyVerse's $300 Feasibility Plan can help organise the decisions and compare written resort terms. Use this operating guide alongside the Lopesan resort profile for public package benchmarks. Your current proposal and contract should settle availability, included quantities and the complete event costs.",
    ],
    logistics: [
      { title: "Beach, garden or rooftop: ask for a usable event plan", fact: "Lopesan's wedding page describes beach and garden ceremony options; its larger packages also refer to a rooftop terrace.", advice: "Ask which exact space is offered for each event, with the guest layout, shade, accessible route, restrooms and weather alternative marked. For a rooftop event, verify lift access and supplier transport before assuming that a heavy mandap or a full production package can reach the space. Do not infer a capacity or acoustic treatment from a photograph.", source: 0 },
      { title: "Guest counts: reconcile every included item", fact: "The published Unique Glam package has 50–70 and 71–99 guest tiers, while some listed inclusions still refer to 50 guests.", advice: "Ask the resort to reconcile those quantities in your personalised quote. Confirm chairs, meals, cake, drinks and extra-person charges separately. A package's guest tier does not establish the safe capacity of a ceremony layout with a mandap, aisles and family seating.", source: 0 },
      { title: "Symbolic ceremony versus your religious ceremony", fact: "Package descriptions include a non-denominational minister and symbolic ceremony certificate.", advice: "If you want a Hindu ceremony, agree the pandit's role and access separately. Ask the resort to confirm ritual materials, sacred-fire permission, mandap installation and the baraat route. Ask the kitchen for a written vegetarian or Jain menu and clarify outside catering rules. The package wording does not confirm those arrangements.", source: 0 },
      { title: "Load-in, sound and the move to dinner", advice: "Request vendor access and strike windows for each chosen space, together with loading routes, equipment storage and any labour charges. Ask the AV team to test speech clarity at the ceremony and reception. Plan one staffed handoff from the ceremony to hospitality so guests know where to go while the family finishes photographs. Confirm the music cutoff and any overtime charge before putting a late finish on the invitation." },
    ],
    days: [
      { day: "Arrival day", plan: "Flexible welcome gathering and transfer support. Check the next day's spaces with the resort coordinator and family lead." },
      { day: "Pre-wedding day", plan: "Schedule mehndi or haldi and the evening celebration, with separate approved menus, equipment access and cleanup." },
      { day: "Wedding day", plan: "Confirm the pandit briefing or symbolic officiant rehearsal, guest seating, ceremony cues and the route to the reception." },
      { day: "Departure day", plan: "Optional farewell time, transfer reconfirmation and collection of outfits, gifts and personal ceremony items." },
    ],
    questions: ["Which specific beach, garden, rooftop or indoor space is reserved for each event?", "How many guests does every included meal, chair, cake and drink allowance cover?", "Which Hindu ceremony requirements and catering requests has the resort accepted in writing?", "What are our vendor-access, sound, weather-decision and strike deadlines?"],
    sources: [{ label: "Lopesan Costa Bávaro: official wedding spaces and package inclusions", href: "https://www.lopesancostabavaro.com/en/weddings-events/" }],
  },
]
