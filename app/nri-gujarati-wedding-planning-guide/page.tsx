import Link from "next/link"
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildHowToSchema,
  buildMetadata,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/nri-gujarati-wedding-planning-guide/",
  title: "NRI Gujarati Wedding Planning Guide — Mexico, Jamaica & Punta Cana",
  description:
    "The complete guide to planning a Gujarati destination wedding from the USA or Canada — destinations, costs, ceremonies, outfits, customs, timelines, and the questions to ask before signing a resort proposal.",
  keywords: [
    "NRI Gujarati wedding planning",
    "Gujarati destination wedding guide",
    "Gujarati wedding planning from USA",
    "Gujarati Hindu wedding planning timeline",
    "Gujarati wedding Mexico",
  ],
  image: "/images/proof/family-destination-baarat.webp",
  ogType: "article",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Guides", url: "/blog/" },
  { name: "NRI Gujarati Wedding Planning Guide", url: "/nri-gujarati-wedding-planning-guide/" },
])

const faqs = [
  {
    question: "How early should we start planning a Gujarati destination wedding from the USA or Canada?",
    answer:
      "Start 9 to 14 months before the wedding date. The first 60 days go to choosing the destination, comparing two or three resort proposals in writing, and locking a room block. The next 90 days go to outfit sourcing (lehengas and sherwanis from India typically take 4–6 months including measurements, approvals, production, shipping, customs, and local alterations), vendor selection, and a written event-by-event plan. The final 90 days are approvals, guest logistics, and on-site execution handoff. A 6-month timeline is possible but compresses the outfit and resort windows and removes most contingency buffers.",
  },
  {
    question: "How much does a Gujarati destination wedding in Mexico cost?",
    answer:
      "A 4-day Gujarati destination wedding in Mexico with approximately 150 guests typically runs $80,000–$180,000 USD total cost across resort events, outside vendors (decorator, DJ, mehndi, photographer), production, family travel, and India-sourced outfits. The resort package itself is usually 30–45% of that total. The largest avoidable cost overruns are outside-vendor fees, day-pass fees for non-resort guests, vendor meals, staging for the mandap, and turmeric cleanup after the Haldi. Our complete cost guide at /indian-destination-wedding-cost/ breaks down each line item.",
  },
  {
    question: "Can a resort kitchen cook Jain or satvik food for our Gujarati wedding?",
    answer:
      "Some can, some cannot, and almost none will volunteer the distinction in the proposal. 'Vegetarian' in a resort contract is not the same as 'Jain vegetarian' (no onion, no garlic, no root vegetables) or 'satvik vegetarian' (no onion, no garlic, prepared without tasting). Confirm in writing the week you sign the contract — not the week before the wedding — which menu items need Jain or satvik versions, how the resort kitchen will label them at the buffet, and whether an outside caterer is permitted if the resort cannot meet the requirement.",
  },
  {
    question: "When should we order the bridal lehenga and groom's sherwani from India?",
    answer:
      "Order the bridal lehenga 5–7 months before the wedding date and the groom's sherwani 4–6 months before. Both timelines include measurement sessions, design approval, production (4–10 weeks for a custom piece), shipping (5–10 business days by courier), US customs clearance (1–5 business days, sometimes longer), and a local alteration window of 2–3 weeks. If you are ordering for the wedding party (bridesmaids, groomsmen, parents), add 2–4 weeks to coordinate group measurements and approvals.",
  },
  {
    question: "What is the difference between a resort wedding coordinator and a family-side planner?",
    answer:
      "A resort wedding coordinator works for the resort and is responsible for executing the resort's contracted scope — the events on resort property, the resort's in-house vendors, and the resort's billing. A family-side planner (what CeremonyVerse is) works for the family and is responsible for organizing the questions, approvals, cost items, and family-side decisions across every vendor and provider — including the resort, but also the outside decorator, DJ, mehndi artist, photographer, transfer company, and India sourcing partners. Families planning a multi-day Indian destination wedding almost always need both.",
  },
  {
    question: "Do we need a legal Hindu wedding ceremony in the USA or Canada in addition to the destination ceremony?",
    answer:
      "A religious Hindu ceremony performed at a destination resort is not automatically a legally recognized marriage in the United States or Canada. To be legally married, you need either a civil ceremony in your home jurisdiction (typically at a city hall or with a registered officiant) or a legally recognized ceremony at the destination that complies with that country's marriage laws. Mexico, Jamaica, and the Dominican Republic each have their own legal-marriage requirements including document translation, witnesses, and sometimes a civil judge. See our legal requirements guide for the destination-specific path.",
  },
]

const faqSchema = buildFaqSchema(faqs)

const howToSchema = buildHowToSchema({
  name: "How to Plan a Gujarati Destination Wedding from the USA or Canada",
  description:
    "A 5-step planning framework for NRI Gujarati families organizing a multi-day destination wedding in Mexico, Jamaica, or Punta Cana.",
  url: "/nri-gujarati-wedding-planning-guide/",
  totalTime: "P9M",
  steps: [
    {
      name: "Choose the destination and compare resort proposals",
      text: "Compare 2–3 resorts across airport access, room-block terms, multi-event space, cultural fit (Jain/satvik capability, mandap staging, baraat route), outside-vendor policy, and complete cost. Get every fee in writing before signing.",
    },
    {
      name: "Lock the room block and guest logistics",
      text: "Confirm room assignments by family unit and mobility need, not just by rate. Compile a shared flight manifest and transfer plan. Identify non-resort guests and confirm day-pass policy in writing.",
    },
    {
      name: "Start outfit sourcing from India",
      text: "Begin the bridal lehenga 5–7 months out and the groom's sherwani 4–6 months out. Use live video review, document measurements and approvals, and budget for shipping, US customs, and a local tailor.",
    },
    {
      name: "Confirm ceremony-by-ceremony plan with the resort",
      text: "Walk through the Mehndi, Haldi, Pithi, Baraat, wedding ceremony, and reception with the resort event manager. Confirm staging, vendor meals, cleanup fees (turmeric removal is real), and Jain/satvik menu versions in writing.",
    },
    {
      name: "Final approvals and on-site handoff",
      text: "In the final 30 days, confirm every vendor's arrival time, every approval milestone, and every family-side decision. Hand off the on-site execution to the contracted destination team and the resort's event manager.",
    },
  ],
})

const clusters = [
  {
    id: "destinations",
    label: "Choose your destination",
    description:
      "Compare resort areas, airport access, multi-event spaces, and cultural fit before signing a resort proposal.",
    links: [
      { href: "/destinations/", label: "All destination comparisons" },
      { href: "/destinations/cancun-indian-wedding/", label: "Cancún Indian weddings" },
      { href: "/destinations/riviera-maya-indian-wedding/", label: "Riviera Maya Indian weddings" },
      { href: "/destinations/los-cabos-indian-wedding/", label: "Los Cabos Indian weddings" },
      { href: "/destinations/punta-cana-indian-wedding/", label: "Punta Cana Indian weddings" },
      { href: "/destinations/jamaica-indian-wedding/", label: "Jamaica Indian weddings" },
      { href: "/blog/mexico-or-punta-cana-indian-destination-wedding/", label: "Mexico or Punta Cana — how to choose" },
    ],
  },
  {
    id: "gujarati-mexico",
    label: "Plan a Gujarati wedding in Mexico",
    description:
      "The most comprehensive resource for Gujarati families planning a multi-day destination wedding in Mexico.",
    links: [
      { href: "/gujarati-destination-wedding-mexico/", label: "Gujarati destination wedding Mexico" },
      { href: "/indian-destination-wedding-planner-mexico/", label: "Indian destination wedding planner Mexico" },
      { href: "/blog/how-to-plan-gujarati-hindu-destination-wedding-mexico/", label: "How to plan a Gujarati Hindu destination wedding in Mexico" },
      { href: "/blog/indian-destination-wedding-mexico-complete-guide/", label: "Indian destination wedding Mexico complete guide" },
    ],
  },
  {
    id: "costs",
    label: "Understand the complete cost",
    description:
      "The resort package is only 30–45% of total cost. These guides break down the rest.",
    links: [
      { href: "/indian-destination-wedding-cost/", label: "Complete Indian destination wedding cost guide" },
      { href: "/indian-wedding-room-block-mexico/", label: "Mexico room block guide" },
      { href: "/before-signing-indian-wedding-resort-proposal/", label: "5 questions to ask before signing a resort proposal" },
      { href: "/blog/hidden-resort-fees-4-day-indian-wedding-cancun/", label: "Hidden resort fees for a 4-day Indian wedding in Cancún" },
      { href: "/planning-tools/budget/", label: "Free budget calculator (no email required)" },
      { href: "/planning-tools/resort-comparison/", label: "Free resort proposal comparison tool" },
    ],
  },
  {
    id: "outfits",
    label: "Source wedding outfits from India",
    description:
      "Bridal lehengas, sherwanis, bridesmaid lehengas, and family outfits — coordinated remotely with measurements, approvals, and delivery.",
    links: [
      { href: "/gujarati-wedding-outfits-usa/", label: "Gujarati wedding outfits USA" },
      { href: "/blog/gujarati-wedding-outfit-guide/", label: "Gujarati wedding outfit guide — ceremony by ceremony" },
      { href: "/services/bridal-lehengas/", label: "Bridal lehenga sourcing service" },
      { href: "/blog/how-to-buy-bridal-lehenga-from-india-usa/", label: "How to buy a bridal lehenga from India to the USA — step by step" },
      { href: "/buy-sherwani-from-india-usa/", label: "Buy a sherwani from India to the USA" },
      { href: "/bridesmaid-and-family-outfits-from-india/", label: "Bridesmaid and family outfits from India" },
      { href: "/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/", label: "How to coordinate bridesmaid lehengas from India" },
      { href: "/blog/indian-wedding-outfit-checklist-every-ceremony/", label: "Indian wedding outfit checklist for every ceremony" },
      { href: "/blog/when-to-order-indian-wedding-outfits-nri-bride/", label: "When to order Indian wedding outfits — NRI timeline" },
    ],
  },
  {
    id: "customs-shipping",
    label: "Ship outfits through US customs",
    description:
      "The tariff landscape changed in 2025–2026. These guides cover what actually applies to your shipment.",
    links: [
      { href: "/blog/shipping-indian-wedding-outfits-usa-customs-duties/", label: "Shipping Indian wedding outfits — USA customs and duties" },
      { href: "/blog/us-tariffs-indian-wedding-outfits-2026/", label: "US tariffs on Indian wedding outfits in 2026" },
      { href: "/planning-tools/shipping-customs/", label: "Free shipping and customs landed-cost calculator" },
    ],
  },
  {
    id: "food-catering",
    label: "Confirm food and catering",
    description:
      "Jain, satvik, and pure-vegetarian requirements — and when an outside caterer is permitted.",
    links: [
      { href: "/blog/indian-wedding-catering-mexico-all-inclusive-resorts/", label: "Indian wedding catering at Mexico all-inclusive resorts" },
    ],
  },
  {
    id: "deep-dive-guides",
    label: "Deep-dive planning guides",
    description:
      "The six specialist guides that go deep on a single planning question — timeline, rituals, vendors, legal, parents, and guests.",
    links: [
      { href: "/nri-gujarati-wedding-timeline-12-months/", label: "12-month NRI Gujarati wedding planning timeline" },
      { href: "/nri-gujarati-wedding-rituals-explained/", label: "Gujarati wedding rituals explained for NRI families" },
      { href: "/nri-gujarati-wedding-vendor-questions/", label: "Questions to ask Gujarati wedding vendors before you book" },
      { href: "/nri-gujarati-wedding-legal-requirements-mexico/", label: "Legal requirements for a Gujarati wedding in Mexico" },
      { href: "/nri-gujarati-parents-guide-destination-wedding/", label: "NRI Gujarati parents guide to destination wedding planning" },
      { href: "/nri-gujarati-wedding-guest-etiquette/", label: "Gujarati wedding guest etiquette for non-Gujarati guests" },
    ],
  },
]

const aiSummary = `Planning a Gujarati destination wedding from the USA or Canada means coordinating a 4-day event (Mehndi, Haldi, Baraat, wedding ceremony, and reception) at a resort in Mexico, Jamaica, or Punta Cana — while sourcing bridal lehengas, sherwanis, and family outfits from India and shipping them through US customs. The full planning timeline is 9–14 months. The total cost typically runs $80,000–$180,000 USD for 150 guests, of which the resort package is only 30–45%. The largest avoidable cost overruns are outside-vendor fees, day-pass fees for non-resort guests, vendor meals, mandap staging, and turmeric cleanup after the Haldi. This guide walks through destination choice, cost breakdowns, outfit sourcing, customs, food requirements (Jain, satvik, vegetarian), and the questions to ask before signing a resort proposal. It is written by Mini, the founder of CeremonyVerse, from her firsthand family experience at three Gujarati destination weddings in Mexico.`

export default function NriGujaratiWeddingPlanningGuidePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />

      <section className="bg-[#1f1f1f] px-6 py-20 text-[#f8f6f2] sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            The definitive guide · written by <Link href="/about/mini/" className="text-[#c5a059] underline underline-offset-4">Mini</Link>, founder of CeremonyVerse
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            The NRI Gujarati Wedding Planning Guide
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
            Everything an NRI Gujarati family needs to plan a multi-day destination wedding in Mexico, Jamaica, or Punta Cana — destinations, complete costs, ceremonies, India outfit sourcing, US customs, and the questions to ask before signing a resort proposal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/?service=mexico&from=gujarati-guide"
              className="inline-flex rounded-full bg-[#c5a059] px-7 py-3 text-sm font-semibold text-[#1f1f1f]"
            >
              Schedule Free 30-Minute Consultation
            </Link>
            <Link
              href="/real-weddings/"
              className="inline-flex rounded-full border border-[#c5a059] px-7 py-3 text-sm font-semibold text-[#c5a059]"
            >
              Read the three family weddings behind this guide
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            Quick answer
          </p>
          <p className="mt-4 text-lg leading-8 text-[#4d403a]">{aiSummary}</p>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#e6dfd5] bg-white p-7">
          <h2 className="font-serif text-2xl font-semibold">In this guide</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li><a href="#step-1" className="text-[#7a6841] underline underline-offset-4">1. Choose your destination</a></li>
            <li><a href="#step-2" className="text-[#7a6841] underline underline-offset-4">2. Compare resort proposals</a></li>
            <li><a href="#step-3" className="text-[#7a6841] underline underline-offset-4">3. Lock the room block and guest logistics</a></li>
            <li><a href="#step-4" className="text-[#7a6841] underline underline-offset-4">4. Source outfits from India</a></li>
            <li><a href="#step-5" className="text-[#7a6841] underline underline-offset-4">5. Confirm ceremony-by-ceremony plan</a></li>
            <li><a href="#costs" className="text-[#7a6841] underline underline-offset-4">Complete cost breakdown</a></li>
            <li><a href="#ceremonies" className="text-[#7a6841] underline underline-offset-4">The four-day ceremony sequence</a></li>
            <li><a href="#faqs" className="text-[#7a6841] underline underline-offset-4">Frequently asked questions</a></li>
          </ul>
        </div>
      </section>

      <section id="step-1" className="px-6 py-12 scroll-mt-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Step 01</p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Choose your destination</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
            <p>
              Gujarati destination weddings cluster around five resort areas: <strong>Cancún</strong>, <strong>Riviera Maya</strong>, <strong>Los Cabos</strong>, <strong>Punta Cana</strong>, and <strong>Jamaica</strong>. Each has different airport access, transfer distances, resort layouts, and cultural-fit tradeoffs. The decision should be driven by your guest list — where they are flying from, how many elderly relatives need short transfers, and how many rooms you need in one building.
            </p>
            <p>
              Cancún (CUN airport) has the most direct flights from US cities and the most resort capacity, which makes it the easiest choice for large guest lists. Riviera Maya is south of Cancún and adds 60–90 minutes of transfer time, but the resort layouts are quieter and the beach wedding spaces are more private. Los Cabos (SJD airport) on the Pacific side is a 4–6 hour flight from the East Coast, which makes it harder for East-Coast Gujarati families but easier for California and Texas families. Punta Cana (PUJ airport) in the Dominican Republic has strong resort infrastructure but adds a layer of document requirements for guests entering the DR. Jamaica has three resort areas (Montego Bay, Negril, Ocho Rios) and the shortest transfers from MBJ airport, but the resort capacity for 4-day Indian weddings is smaller than Mexico.
            </p>
            <p>
              Compare each destination in detail: <Link href="/destinations/" className="text-[#7a6841] underline underline-offset-4">all destination comparisons</Link>, <Link href="/destinations/cancun-indian-wedding/" className="text-[#7a6841] underline underline-offset-4">Cancún</Link>, <Link href="/destinations/riviera-maya-indian-wedding/" className="text-[#7a6841] underline underline-offset-4">Riviera Maya</Link>, <Link href="/destinations/los-cabos-indian-wedding/" className="text-[#7a6841] underline underline-offset-4">Los Cabos</Link>, <Link href="/destinations/punta-cana-indian-wedding/" className="text-[#7a6841] underline underline-offset-4">Punta Cana</Link>, <Link href="/destinations/jamaica-indian-wedding/" className="text-[#7a6841] underline underline-offset-4">Jamaica</Link>. If you are torn between two, see our <Link href="/blog/mexico-or-punta-cana-indian-destination-wedding/" className="text-[#7a6841] underline underline-offset-4">Mexico or Punta Cana comparison</Link>.
            </p>
          </div>
        </article>
      </section>

      <section id="step-2" className="bg-[#f4eee4] px-6 py-12 scroll-mt-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Step 02</p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Compare resort proposals in writing</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
            <p>
              A resort proposal is not a single number — it is a 6-to-12 page document with line items for the package, the room block, the outside-vendor fees, the staging, the production, the day passes, the vendor meals, and the cleanup. The single biggest mistake families make is signing based on the headline package price without reading the line items. The second biggest mistake is signing without asking the questions that the proposal does not volunteer.
            </p>
            <p>
              Before you sign any resort proposal, ask these five questions in writing: (1) What is the outside-vendor fee for AV versus decor, and is it per vendor or per event? (2) What is the day-pass policy for non-resort guests, and is there a cap? (3) What staging is required for the mandap, and what are the dimension constraints? (4) What is the cleanup fee for turmeric after the Haldi? (5) What is the vendor meal rate, and at what point does a vendor qualify for it?
            </p>
            <p>
              The full question list and a side-by-side comparison worksheet: <Link href="/before-signing-indian-wedding-resort-proposal/" className="text-[#7a6841] underline underline-offset-4">5 questions to ask before signing a resort proposal</Link>. Use our <Link href="/planning-tools/resort-comparison/" className="text-[#7a6841] underline underline-offset-4">free resort proposal comparison tool</Link> to compare two proposals line by line.
            </p>
          </div>
        </article>
      </section>

      <section id="step-3" className="px-6 py-12 scroll-mt-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Step 03</p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Lock the room block and guest logistics</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
            <p>
              The room block is more than a rate. It is a building assignment, a view category, a proximity-to-lobby decision, and an accessibility decision. At one of the family weddings I describe on <Link href="/real-weddings/" className="text-[#7a6841] underline underline-offset-4">/real-weddings/</Link>, we asked for the rate and got a great rate — but the resort split our block across two buildings, and elderly aunts ended up a 10-minute walk from the main lobby. The lesson: ask for the building assignments in writing before signing, not after.
            </p>
            <p>
              Guest logistics is the second half of this step. Compile a single shared document with every guest's flight number, arrival time, transfer assignment, and room assignment. Copy the resort's event manager, the transfer company, and (if you have one) the family-side planner. At a 130-guest wedding, a missing flight manifest meant guests waited at the airport for an hour because the transfer company had not been given the full list. That kind of arrival friction sets the tone for the entire weekend — and it is fully avoidable.
            </p>
            <p>
              For the room block specifically, see our <Link href="/indian-wedding-room-block-mexico/" className="text-[#7a6841] underline underline-offset-4">Mexico room block guide</Link>.
            </p>
          </div>
        </article>
      </section>

      <section id="step-4" className="bg-[#f4eee4] px-6 py-12 scroll-mt-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Step 04</p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Source wedding outfits from India</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
            <p>
              For most NRI Gujarati families, this is the most emotionally loaded part of the planning. The bridal lehenga, the groom's sherwani, the bridesmaid lehengas, the parents' outfits, the family outfits — all coordinated remotely, with measurements taken over video, approvals given in writing, fabric verified by live video, and a delivery deadline that cannot slip. Start the bridal lehenga 5–7 months before the wedding and the groom's sherwani 4–6 months before. Add 2–4 weeks for the wedding party.
            </p>
            <p>
              The four avoidable risks in India outfit sourcing are: (1) ordering from an Instagram seller who will not get on a live video call, (2) paying without documented payment and remedy terms, (3) trusting catalog photos instead of current item evidence, and (4) skipping the local alteration budget. I learned each of these from coordinating my own son's wedding outfits — see <Link href="/about/mini/" className="text-[#7a6841] underline underline-offset-4">my founder story</Link> for the full background.
            </p>
            <p>
              The step-by-step playbook: <Link href="/blog/how-to-buy-bridal-lehenga-from-india-usa/" className="text-[#7a6841] underline underline-offset-4">how to buy a bridal lehenga from India to the USA</Link>. For the groom: <Link href="/buy-sherwani-from-india-usa/" className="text-[#7a6841] underline underline-offset-4">buy a sherwani from India to the USA</Link>. For the wedding party: <Link href="/bridesmaid-and-family-outfits-from-india/" className="text-[#7a6841] underline underline-offset-4">bridesmaid and family outfits from India</Link> and <Link href="/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/" className="text-[#7a6841] underline underline-offset-4">how to coordinate bridesmaid lehengas</Link>. For the full ceremony-by-ceremony outfit list: <Link href="/blog/indian-wedding-outfit-checklist-every-ceremony/" className="text-[#7a6841] underline underline-offset-4">Indian wedding outfit checklist for every ceremony</Link>.
            </p>
          </div>
        </article>
      </section>

      <section id="step-5" className="px-6 py-12 scroll-mt-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Step 05</p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Confirm the ceremony-by-ceremony plan with the resort</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
            <p>
              A Gujarati destination wedding is typically four days of events: Mehndi (Thursday evening), Haldi and Pithi (Friday morning), Baraat and wedding ceremony (Saturday), and reception (Sunday). Each event has a different venue requirement, a different vendor requirement, and a different fee structure in the resort proposal. Walk through each event with the resort's event manager before signing — not after.
            </p>
            <p>
              The most overlooked ceremony-by-ceremony items are: (1) the Mehndi runs past midnight, which means the resort's event-space curfew needs to be confirmed in writing; (2) the Haldi needs a separate outdoor space with shade and a wash-up area, because turmeric stains pool decks and the cleanup is a real line item; (3) the baraat needs a clear path from the lobby to the mandap that does not trip over the breakfast buffet, and the baraat horse needs to be trained for noise; (4) the mandap needs staging with specific dimension constraints; (5) the reception's AV requirements (DJ, lighting, video) typically carry a higher outside-vendor fee than decor.
            </p>
            <p>
              Food is a ceremony-by-ceremony decision too. <strong>&ldquo;Vegetarian&rdquo; in a resort contract is not the same as Jain vegetarian or satvik vegetarian.</strong> Confirm in writing the week you sign the contract which menu items need Jain or satvik versions, how the kitchen will label them, and whether an outside caterer is permitted if the resort cannot meet the requirement. See our <Link href="/blog/indian-wedding-catering-mexico-all-inclusive-resorts/" className="text-[#7a6841] underline underline-offset-4">Indian wedding catering at Mexico all-inclusive resorts</Link> guide.
            </p>
          </div>
        </article>
      </section>

      <section id="costs" className="bg-[#f4eee4] px-6 py-12 scroll-mt-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Cost breakdown</p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">What a 4-day Gujarati destination wedding actually costs</h2>
          <p className="mt-6 text-lg leading-8 text-[#4d403a]">
            The table below is a planning framework based on the three family weddings I describe on <Link href="/real-weddings/" className="text-[#7a6841] underline underline-offset-4">/real-weddings/</Link> and the CeremonyVerse client proposals I have built. Your wedding-specific written proposals control the actual amounts. These are not quotes and not guarantees.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#d9cfbf] bg-white">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-[#efe8de] text-[#5e4a40]">
                <tr>
                  <th className="px-5 py-4 font-semibold">Cost area</th>
                  <th className="px-5 py-4 font-semibold">Typical share of total</th>
                  <th className="px-5 py-4 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e6dfd5] text-[#4d403a]">
                <tr>
                  <td className="px-5 py-4 font-semibold">Resort package (events, food, room block)</td>
                  <td className="px-5 py-4">30–45%</td>
                  <td className="px-5 py-4">Headline price — but only part of the total</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">Outside vendors (decorator, DJ, mehndi, photographer)</td>
                  <td className="px-5 py-4">15–25%</td>
                  <td className="px-5 py-4">Plus outside-vendor fees billed by the resort</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">Production (AV, lighting, mandap staging, baraat setup)</td>
                  <td className="px-5 py-4">10–15%</td>
                  <td className="px-5 py-4">Staging and cleanup fees often hidden in the proposal</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">Family travel (flights, transfers, extended stays)</td>
                  <td className="px-5 py-4">15–20%</td>
                  <td className="px-5 py-4">Paid by guests, but families often subsidize</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">India-sourced outfits (bride, groom, party, family)</td>
                  <td className="px-5 py-4">5–10%</td>
                  <td className="px-5 py-4">Plus shipping, US customs, and local alterations</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">Family-side planner / coordination fee</td>
                  <td className="px-5 py-4">3–6%</td>
                  <td className="px-5 py-4">CeremonyVerse's planning services start at $4,000 USD</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold">Contingency (day passes, vendor meals, last-minute fees)</td>
                  <td className="px-5 py-4">5–10%</td>
                  <td className="px-5 py-4">The avoidable overruns — caught by reading the proposal twice</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-base leading-7 text-[#4d403a]">
            For the complete line-item breakdown: <Link href="/indian-destination-wedding-cost/" className="text-[#7a6841] underline underline-offset-4">complete Indian destination wedding cost guide</Link>. For the fees resorts don't volunteer: <Link href="/blog/hidden-resort-fees-4-day-indian-wedding-cancun/" className="text-[#7a6841] underline underline-offset-4">hidden resort fees for a 4-day Indian wedding in Cancún</Link>. To model your own: <Link href="/planning-tools/budget/" className="text-[#7a6841] underline underline-offset-4">free budget calculator</Link>.
          </p>
        </article>
      </section>

      <section id="ceremonies" className="px-6 py-12 scroll-mt-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">The four-day sequence</p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">The Gujarati wedding weekend, day by day</h2>
          <p className="mt-6 text-lg leading-8 text-[#4d403a]">
            Most Gujarati destination weddings run Thursday through Sunday. The sequence below is the one I have seen work across three family weddings and the CeremonyVerse client weddings I have organized. Adjust to your family's traditions — every Gujarati family has its own variation.
          </p>
          <div className="mt-8 space-y-6">
            {[
              {
                day: "Thursday",
                title: "Mehndi evening",
                body: "Mehndi artists for the bride, bridesmaids, and female family members. A separate event space from the welcome dinner so guests can move between the two. Runs past midnight at most Gujarati weddings — confirm the resort's event-space curfew in writing.",
              },
              {
                day: "Friday morning",
                title: "Haldi and Pithi",
                body: "Outdoor space with shade and a wash-up area. Turmeric cleanup is a real resort line item — confirm the fee in the proposal, not at checkout. Separate the Haldi (bride's side) from the Pithi (groom's side) if your family tradition calls for it.",
              },
              {
                day: "Friday evening",
                title: "Sangeet / Garba night",
                body: "The social highlight of the weekend. Pool deck or ballroom depending on weather backup. DJ who knows Garba and filmi music is non-negotiable — most resort in-house DJs do not.",
              },
              {
                day: "Saturday",
                title: "Baraat, wedding ceremony, and reception",
                body: "Baraat procession from the lobby to the mandap — confirm the route, the horse, and the noise plan. Wedding ceremony at the mandap with the officiant (Maharaj) your family has chosen. Reception follows the ceremony with dinner, toasts, and dancing.",
              },
              {
                day: "Sunday",
                title: "Farewell brunch",
                body: "A casual send-off brunch for guests who are flying out. Confirm the resort's late-checkout policy for the families staying over.",
              },
            ].map((item) => (
              <div key={item.day} className="rounded-2xl border border-[#e6dfd5] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">{item.day}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{item.body}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="bg-[#f4eee4] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Go deeper
            </p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Every guide on this site, organized by where you are in your planning
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#4d403a]">
              Each cluster below links to the specific guides that cover that part of the planning. Pick the cluster that matches your current question.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {clusters.map((cluster) => (
              <article
                key={cluster.id}
                className="rounded-2xl border border-[#d9cfbf] bg-white p-7"
              >
                <h3 className="font-serif text-2xl font-semibold">{cluster.label}</h3>
                <p className="mt-2 leading-7 text-[#4d403a]">{cluster.description}</p>
                <ul className="mt-4 space-y-2">
                  {cluster.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-[#7a6841] underline underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="px-6 py-12 scroll-mt-24">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">FAQ</p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-[#e6dfd5] bg-white p-6"
              >
                <h3 className="font-serif text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="bg-[#7a6841] px-6 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Talk to Mini directly
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            If you&rsquo;re planning a Gujarati destination wedding, talk to me before you sign
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            The first 30-minute consultation is free. Tell me your destination, your resort options, your guest count, your dates, and the questions that feel unclear. I&rsquo;ll either answer them from experience or point you to the resource that will.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?service=mexico&from=gujarati-guide"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/about/mini/"
              className="inline-flex rounded-full border border-white px-8 py-4 text-sm font-semibold text-white"
            >
              Read Mini&rsquo;s full story
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/75">
            Or read more <Link href="/about/" className="underline">about CeremonyVerse</Link> · See <Link href="/real-weddings/" className="underline">the three family weddings behind this guide</Link> · Browse <Link href="/blog/" className="underline">all guides</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
