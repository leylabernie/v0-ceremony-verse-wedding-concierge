import Link from "next/link"
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildHowToSchema,
  buildMetadata,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/nri-gujarati-wedding-timeline-12-months/",
  title: "NRI Gujarati Wedding Timeline — 12-Month Month-by-Month Checklist",
  description:
    "A month-by-month NRI Gujarati wedding planning timeline from 12 months out to the wedding day — destination choice, resort proposals, outfit sourcing from India, customs, ceremony plan, and on-site execution.",
  keywords: [
    "NRI Gujarati wedding timeline",
    "Gujarati wedding planning 12 months",
    "Indian destination wedding timeline",
    "NRI bride planning checklist",
    "Gujarati Hindu wedding month by month",
  ],
  publishedTime: "2026-09-16",
  authorName: "Mini",
  ogType: "article",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Guides", url: "/blog/" },
  { name: "12-Month NRI Gujarati Wedding Timeline", url: "/nri-gujarati-wedding-timeline-12-months/" },
])

const phases = [
  {
    phase: "12 months out",
    title: "Set the foundation",
    tasks: [
      "Confirm the wedding date with both families and the Maharaj&rsquo;s availability before any resort conversation.",
      "Set the total budget range in writing &mdash; what each side is contributing, and what is included.",
      "Choose the destination region (Cancún, Riviera Maya, Los Cabos, Punta Cana, or Jamaica) based on guest list and airport access.",
      "Start a shared family planning document &mdash; one master file that holds every decision, contract, and approval.",
    ],
  },
  {
    phase: "11 months out",
    title: "Shortlist resorts and request proposals",
    tasks: [
      "Identify three to five resorts in your chosen region that have hosted multi-day Indian weddings.",
      "Request written proposals from each &mdash; never accept a verbal &ldquo;we can do that.&rdquo;",
      "Confirm in writing each resort&rsquo;s capability for Jain and satvik menu versions, mandap staging, and a baraat route.",
      "Gather every guest&rsquo;s email into a shared contact list so save-the-dates can go out on schedule.",
    ],
  },
  {
    phase: "10 months out",
    title: "Compare proposals and choose the resort",
    tasks: [
      "Read every line item of every proposal &mdash; outside-vendor fees, day passes, vendor meals, staging, cleanup.",
      "Use the five-question checklist from our resort proposal guide to compare them side by side.",
      "Sign the contract with the resort that gave you the most clarity in writing, not the one with the lowest headline price.",
      "Lock the room block with building assignments &mdash; not just a rate, but which building, which view category, and proximity to the lobby.",
    ],
  },
  {
    phase: "9 months out",
    title: "Start outfit sourcing",
    tasks: [
      "Begin bridal lehenga research &mdash; identify silhouettes, color stories, and the level of handwork you want.",
      "Identify two or three India sourcing partners who will get on a live video call before you pay.",
      "Start the groom&rsquo;s sherwani research in parallel &mdash; color, fabric, and accessories.",
      "Order the bridal lehenga now if you are ready &mdash; the 5&ndash;7 month production window starts the day you approve the design.",
    ],
  },
  {
    phase: "7 months out",
    title: "Lock in outside vendors",
    tasks: [
      "Sign the decorator &mdash; confirm in writing that the mandap design matches the resort&rsquo;s staging dimensions.",
      "Sign the DJ &mdash; specifically a DJ who knows Garba and traditional Gujarati wedding songs, not a resort in-house DJ.",
      "Book the mehndi artist &mdash; confirm natural henna only, no chemical black henna, and a per-guest rate.",
      "Sign the photographer and videographer &mdash; they must have Gujarati-wedding experience to capture Kanyadaan, Saptapadi, and Vidaai correctly.",
      "Book the Maharaj and confirm your family&rsquo;s specific ceremony sequence in writing.",
    ],
  },
  {
    phase: "6 months out",
    title: "Order groom&rsquo;s sherwani and wedding party outfits",
    tasks: [
      "Order the groom&rsquo;s sherwani now &mdash; the 4&ndash;6 month production window includes measurement, approval, production, and shipping.",
      "Coordinate bridesmaid and groomsmen measurements over video &mdash; one shared measurement worksheet per person.",
      "Order parent outfits &mdash; mothers and fathers on both sides, plus any specific family roles (uncle performing Kanyadaan, etc.).",
      "Approve bridal lehenga fabric and handwork by live video if production has not started.",
    ],
  },
  {
    phase: "5 months out",
    title: "Send save-the-dates and confirm guest logistics",
    tasks: [
      "Send save-the-dates with the resort booking link and the room-block code &mdash; not just the dates.",
      "Compile the flight manifest &mdash; every guest&rsquo;s arrival airport, flight number, arrival time, and transfer assignment.",
      "Confirm airport transfer arrangements with a company that accepts a shared manifest for 100+ guests.",
      "Confirm the resort&rsquo;s day-pass policy for non-resort guests in writing &mdash; including the cap, if any.",
    ],
  },
  {
    phase: "4 months out",
    title: "Plan the ceremony sequence with the resort",
    tasks: [
      "Walk through the four-day sequence with the resort event manager &mdash; Mehndi, Haldi, Sangeet, Baraat, wedding, reception, brunch.",
      "Confirm the mandap staging &mdash; dimensions, weight, wind load, and the resort&rsquo;s approval process for outdoor structures.",
      "Confirm the baraat route from the lobby to the mandap &mdash; the horse, the noise plan, and the breakfast buffet conflict.",
      "Confirm the Haldi outdoor space with shade and a wash-up area, plus the turmeric cleanup fee in writing.",
      "Confirm the Mehndi curfew &mdash; most Gujarati Mehndi events run past midnight, and not every resort permits it.",
    ],
  },
  {
    phase: "3 months out",
    title: "Finalize food, decor, and production",
    tasks: [
      "Finalize the Jain and satvik menu versions in writing &mdash; every dish, every labeling plan, every buffet line.",
      "Approve the mandap floral design and confirm the decorator has the resort&rsquo;s dimension sheet.",
      "Confirm AV requirements for the Sangeet and reception &mdash; DJ, lighting, video, and the outside-vendor fee for each.",
      "Order return gifts from India &mdash; budget for shipping and US customs clearance.",
    ],
  },
  {
    phase: "2 months out",
    title: "Outfit approvals and shipping",
    tasks: [
      "Approve the bridal lehenga, the groom&rsquo;s sherwani, and every wedding party outfit by live video.",
      "Confirm the courier &mdash; origin, destination, service level, declared value, insurance, and tracking.",
      "Budget for US customs duties and confirm the HTS classification with the courier before the shipment leaves India.",
      "Book a local tailor in your home city for the post-delivery alteration window &mdash; usually two to three weeks.",
    ],
  },
  {
    phase: "1 month out",
    title: "Final approvals and family logistics",
    tasks: [
      "Confirm every vendor&rsquo;s arrival time, contact, and on-site handoff &mdash; in writing, in one document.",
      "Send the final guest count to the resort, the caterer, and every vendor who billed per head.",
      "Confirm the legal marriage path &mdash; civil ceremony at home or civil ceremony in Mexico &mdash; with all paperwork in hand.",
      "Pack the outfits in carry-on luggage, never in checked baggage, with photo documentation of the contents.",
    ],
  },
  {
    phase: "Wedding week",
    title: "On-site handoff",
    tasks: [
      "Arrive two to three days before the first event &mdash; not the night before.",
      "Walk the resort with the event manager &mdash; every event space, every backup plan, every vendor entrance.",
      "Hold an alignment meeting with the destination team &mdash; one master document, every milestone, every owner.",
      "Hand off on-site execution to the contracted team &mdash; and then be present with your family, not operational.",
    ],
  },
]

const faqs = [
  {
    question: "Can we plan in less than 12 months?",
    answer:
      "Yes, but the tradeoffs are real. A 9-month timeline compresses the outfit window &mdash; you can still get a bridal lehenga produced and shipped, but you lose the approval buffer and any contingency for a re-cut. A 6-month timeline forces you to buy off-the-rack or pay rush-production fees on every outfit, and it removes the room-block flexibility that lets you negotiate building assignments. The 12-month timeline is not the fastest possible plan; it is the fastest plan that still has contingency built in. If you are starting at 9 or 6 months, prioritize the resort contract and the bridal lehenga in the first 30 days &mdash; everything else can compress.",
  },
  {
    question: "When should we order the bridal lehenga?",
    answer:
      "Order the bridal lehenga 5&ndash;7 months before the wedding date. The 9-month mark on this timeline is when you start research and identify your sourcing partners; the order itself goes in once you have approved the design, fabric, and handwork by live video. The 5&ndash;7 month window covers design approval, production (typically 4&ndash;10 weeks for a custom piece), shipping (5&ndash;10 business days by courier), US customs clearance (1&ndash;5 business days, sometimes longer), and a local alteration window of 2&ndash;3 weeks. Starting later removes the alteration buffer; starting earlier gives you time to re-cut if the first piece does not work.",
  },
  {
    question: "What is the most important thing in the first 60 days?",
    answer:
      "The resort contract. The resort controls more of your wedding than any other vendor &mdash; the spaces, the food, the room block, the outside-vendor fees, and the staging. Signing the wrong resort contract at month 10 cannot be undone at month 4 without losing the deposit and starting over. The first 60 days should produce a written, signed resort contract with every fee, every building assignment, every menu capability, and every event space confirmed in writing. Outfit sourcing and vendor selection all happen downstream of that contract.",
  },
  {
    question: "When do we book the room block?",
    answer:
      "Book the room block at month 10 &mdash; the same time you sign the resort contract. The room block is part of the contract, not a separate document. The four things to confirm in writing at signing are: (1) the building assignments, not just the rate, (2) the view category for each room type, (3) the proximity to the lobby for elderly relatives, and (4) the cutoff date after which unsold rooms return to resort inventory. At one of the family weddings I describe on /real-weddings/, we asked for the rate and got a great rate &mdash; but the resort split our block across two buildings, and elderly aunts ended up a 10-minute walk from the main lobby. Building assignments in writing, every time.",
  },
  {
    question: "What does the family-side planner do in the final 30 days?",
    answer:
      "The final 30 days are about consolidation and handoff, not new decisions. The family-side planner confirms every vendor&rsquo;s arrival time, sends the final guest count, confirms the legal marriage paperwork, walks the resort with the event manager, holds an alignment meeting with the destination team, and then hands on-site execution to the contracted team. The family&rsquo;s job in the final 30 days is to be present &mdash; to attend the Mehndi, sit for the Haldi, walk the baraat, and stand at the mandap &mdash; not to manage logistics. If you are still making operational decisions in the final week, the planning failed earlier in the timeline.",
  },
  {
    question: "What if we miss a milestone?",
    answer:
      "It depends on which milestone. Missing the resort contract at month 10 is recoverable but expensive &mdash; you lose leverage on room-block negotiations and may pay premium rates for last-minute availability. Missing the bridal lehenga order at month 9 means you are buying off-the-rack or paying rush fees. Missing vendor sign-ups at month 7 means your first-choice vendors may be booked. Missing the save-the-date send at month 5 means guests cannot lock flights, which compresses your room-block pickup. The 12-month timeline is designed with two-week buffers built in; if you miss a milestone, move the next one forward, not the wedding date.",
  },
]

const faqSchema = buildFaqSchema(faqs)

const howToSchema = buildHowToSchema({
  name: "12-Month NRI Gujarati Wedding Planning Timeline",
  description:
    "A month-by-month planning timeline for an NRI Gujarati family organizing a 4-day destination wedding in Mexico, Jamaica, or Punta Cana with 100 to 200 guests and India-sourced outfits.",
  url: "/nri-gujarati-wedding-timeline-12-months/",
  totalTime: "P12M",
  steps: phases.map((phase) => ({
    name: `${phase.phase} — ${phase.title}`,
    text: phase.tasks.join(" "),
  })),
})

const aiSummary = `A 12-month NRI Gujarati wedding planning timeline starts with destination choice and budget setting at month 12, resort proposal comparison and signing at month 10 to 11, bridal lehenga sourcing from India at month 9 (the 5 to 7 month production window), groom's sherwani and wedding party outfits at month 6 (the 4 to 6 month production window), ceremony-sequence planning with the resort at month 4, food and decor finalization at month 3, outfit approvals and shipping at month 2, and final approvals and on-site handoff in the last 30 days. The full timeline assumes a 4-day destination wedding in Mexico, Jamaica, or Punta Cana with 100 to 200 guests, custom outfits sourced from India, and a contracted destination team handling on-site execution. Shorter timelines (9 months, 6 months) are possible but compress the outfit and resort windows and remove contingency buffers. The timeline is written by Mini, founder of CeremonyVerse, from her firsthand family-wedding experience at three Gujarati destination weddings in Mexico.`

const relatedGuides = [
  { href: "/nri-gujarati-wedding-planning-guide/", label: "NRI Gujarati Wedding Planning Guide — the master guide" },
  { href: "/blog/how-to-buy-bridal-lehenga-from-india-usa/", label: "How to buy a bridal lehenga from India to the USA" },
  { href: "/before-signing-indian-wedding-resort-proposal/", label: "5 questions to ask before signing a resort proposal" },
  { href: "/indian-destination-wedding-cost/", label: "Complete Indian destination wedding cost guide" },
  { href: "/blog/when-to-order-indian-wedding-outfits-nri-bride/", label: "When to order Indian wedding outfits — NRI bride timeline" },
  { href: "/planning-tools/budget/", label: "Free budget calculator (no email required)" },
  { href: "/about/mini/", label: "About Mini — the founder behind this timeline" },
]

export default function NriGujaratiWeddingTimelinePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />

      {/* Hero */}
      <section className="bg-[#1f1f1f] px-6 py-20 text-[#f8f6f2] sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            Planning timeline · written by{" "}
            <Link href="/about/mini/" className="text-[#c5a059] underline underline-offset-4">
              Mini
            </Link>
            , founder of CeremonyVerse
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
            The 12-Month NRI Gujarati Wedding Timeline
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
            A month-by-month checklist from 12 months out to the wedding week &mdash; covering destination choice, resort proposals, India outfit sourcing, customs, ceremony-sequence planning, and on-site handoff for a 4-day destination wedding in Mexico, Jamaica, or Punta Cana.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/?service=mexico&from=timeline-12-months"
              className="inline-flex rounded-full bg-[#c5a059] px-7 py-3 text-sm font-semibold text-[#1f1f1f]"
            >
              Schedule Free 30-Minute Consultation
            </Link>
            <Link
              href="/nri-gujarati-wedding-planning-guide/"
              className="inline-flex rounded-full border border-[#c5a059] px-7 py-3 text-sm font-semibold text-[#c5a059]"
            >
              Read the master planning guide
            </Link>
          </div>
        </div>
      </section>

      {/* AI summary */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Quick answer</p>
          <p className="mt-4 text-lg leading-8 text-[#4d403a]">{aiSummary}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-8">
        <article className="mx-auto max-w-3xl">
          <p className="text-lg leading-8 text-[#4d403a]">
            I built this timeline from three family Gujarati destination weddings in Mexico &mdash; Hard Rock Hotel Cancún in 2019 with around 150 guests, Generations Riviera Maya in February 2023 with around 130 guests, and Royalton in 2024 with around 80 guests. Each wedding taught me where the timeline has slack and where it does not. The outfit window has no slack. The resort contract window has no slack. Everything else has some. Treat the 12-month version as the fastest plan that still protects the family from operating in panic mode in the final 30 days.
          </p>
          <p className="mt-5 text-lg leading-8 text-[#4d403a]">
            The timeline below assumes 100 to 200 guests, a four-day event sequence (Mehndi, Haldi and Sangeet, Baraat and wedding, reception, farewell brunch), custom outfits sourced from India, and a contracted destination team handling on-site execution. If your wedding is smaller, you can compress the resort and vendor windows by 30 to 60 days. If your wedding is larger, do not compress &mdash; the room block and the family-travel logistics need every month they can get.
          </p>
        </article>
      </section>

      {/* Phase cards */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Month by month</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">The 12 phases, from foundation to wedding week</h2>
          <div className="mt-10 space-y-6">
            {phases.map((phase, index) => (
              <article
                key={phase.phase}
                id={`phase-${12 - index}`}
                className="scroll-mt-24 rounded-2xl border border-[#e6dfd5] bg-white p-7"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">{phase.phase}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#5e4a40]">Phase {String(index + 1).padStart(2, "0")} of 12</p>
                </div>
                <h3 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">{phase.title}</h3>
                <ul className="mt-4 space-y-3 text-[#4d403a]">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex gap-3 leading-7">
                      <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5a059]" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why this sequence callout */}
      <section className="bg-[#f4eee4] px-6 py-12">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Why this sequence</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">The two windows that cannot compress</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
            <p>
              The 12-month sequence exists because of two production windows that cannot be compressed without spending more money or accepting more risk. The first is the resort contract window: most Indian-wedding-capable resorts in Mexico, Jamaica, and Punta Cana book 10 to 14 months out for prime season (November through April), and the room-block leverage you have at month 10 is meaningfully better than the leverage you have at month 6. The second is the India outfit production window: a custom bridal lehenga with zardozi or resham handwork takes 4 to 10 weeks to produce, and that does not include the design approval cycle, the courier transit, the US customs clearance, or the local alteration window.
            </p>
            <p>
              Everything else on the timeline &mdash; vendor sign-ups, save-the-dates, ceremony-sequence planning, food and decor finalization &mdash; has some flex. Vendor sign-ups can move forward two weeks if your first-choice decorator is booked. Save-the-dates can move forward a month if your guest list is small. Food and decor finalization can move forward two weeks if your menu is straightforward. What cannot move is the resort contract and the bridal lehenga order &mdash; protect those two windows and the rest of the timeline will hold.
            </p>
          </div>
        </article>
      </section>

      {/* FAQ */}
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

      {/* Related guides */}
      <section className="bg-[#f4eee4] px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Related guides</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Where to go next</h2>
          <ul className="mt-6 space-y-3">
            {relatedGuides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="text-[#7a6841] underline underline-offset-4"
                >
                  {guide.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#7a6841] px-6 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Talk to Mini directly
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            If you are inside the 12-month window, talk to me before you sign the resort contract
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            The first 30-minute consultation is free. Tell me your dates, your guest count, your destination shortlist, and the milestone you are working on right now. I will either give you the next three steps from experience or point you to the resource that will.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/?service=mexico&from=timeline-12-months"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/nri-gujarati-wedding-planning-guide/"
              className="inline-flex rounded-full border border-white px-8 py-4 text-sm font-semibold text-white"
            >
              Read the master planning guide
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/75">
            Written by <Link href="/about/mini/" className="underline">Mini</Link>, founder of CeremonyVerse &middot; See <Link href="/real-weddings/" className="underline">the three family weddings behind this timeline</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
