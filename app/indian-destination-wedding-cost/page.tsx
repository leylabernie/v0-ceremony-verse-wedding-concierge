import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/indian-destination-wedding-cost/",
  title: "Indian Destination Wedding Cost: Complete Budget Guide",
  description:
    "Build the complete cost of an Indian destination wedding in Mexico or Punta Cana across rooms, events, vendors, planning, travel, taxes, and contingency.",
})

const costGroups = [
  {
    name: "Resort wedding events",
    items: ["Package base and included guest count", "Extra guests and extra event hours", "Private venues and venue fees", "Food, bar, stations, late-night service", "Taxes, service charges, gratuities, and overtime"],
  },
  {
    name: "Room block and family travel",
    items: ["Rooms paid or subsidized by the family", "Minimum nights and deposits", "Attrition, cancellation, and release exposure", "Flights and travel for immediate family", "Airport transfers, upgrades, and hospitality"],
  },
  {
    name: "Planning and production",
    items: ["Planning and on-site team", "Décor, Mandap, florals, furniture, and stage", "Audio, lighting, power, rigging, and dance floor", "Setup, breakdown, storage, security, permits, and insurance", "Site visits, planner travel, lodging, and added staffing"],
  },
  {
    name: "Wedding specialists",
    items: ["Photography and cinema", "DJ, MC, musicians, dhol, and entertainment", "Hair, makeup, Mehndi, and grooming", "Officiant or pandit and ceremony needs", "Stationery, content creation, child care, and special support"],
  },
  {
    name: "India sourcing and guest experience",
    items: ["Couple, family, and wedding-party outfits", "Jewelry, gifts, ceremony items, and welcome bags", "Shipping, insurance, customs, brokerage, and alterations", "Guest communication and hospitality desk", "Excursions, favors, emergency supplies, and departure support"],
  },
  {
    name: "Contingency and decisions",
    items: ["Currency movement and quote changes", "Weather moves and production changes", "Guest-count changes", "Vendor replacements and schedule changes", "A written contingency amount the family controls"],
  },
]

const faqItems = [
  {
    question: "What is the average cost of an Indian destination wedding in Mexico?",
    answer:
      "An average is rarely decision-safe because guest count, rooms, events, hours, resort tier, food, production, décor, vendors, travel, planning, taxes, and family-paid expenses vary sharply. Build a complete wedding-specific total from current written quotes instead of treating a headline package as the budget.",
  },
  {
    question: "Is the resort's South Asian wedding package the total cost?",
    answer:
      "Usually not. The package may cover a defined guest count, event length, menu, bar, venue, or basic setup. Extra guests, hours, spaces, upgrades, production, décor, outside vendors, planning, tax, service charges, rooms, travel, and other categories can remain separate.",
  },
  {
    question: "Should guest rooms be included in the wedding budget?",
    answer:
      "Track them even if guests pay their own rooms. Separate family-paid rooms and upgrades, guest-paid rooms, deposits, attrition exposure, concessions, and travel support. This shows both the host cost and the obligations created by the room-block contract.",
  },
  {
    question: "Does CeremonyVerse guarantee a fixed resort price?",
    answer:
      "No. Resort, room, package, venue, vendor, tax, service-charge, policy, and availability information can change. CeremonyVerse uses current written proposals and separates confirmed amounts, estimates, exclusions, and open questions before a decision.",
  },
  {
    question: "How can the $300 feasibility plan help?",
    answer:
      "The Destination Wedding Feasibility & Action Plan can review your guest count, events, budget structure, family-paid travel assumptions, cultural needs, and up to two current proposals. It identifies material gaps and next actions; it does not guarantee availability, pricing, visas, or an outcome.",
  },
]

const breadcrumbSchema = buildBreadcrumb([{ name: "Indian Destination Wedding Cost", url: "/indian-destination-wedding-cost/" }])
const faqSchema = buildFaqSchema(faqItems)

export default function IndianDestinationWeddingCostPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Complete-cost framework</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold !text-white sm:text-6xl">What does an Indian destination wedding really cost?</h1>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 !text-white/80">The complete cost is the resort events plus the room-block obligations, family travel, planning, production, vendors, cultural requirements, guest support, India sourcing, tax, service charges, and contingency. A package headline is only one line in that budget.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/planning-tools/budget/" className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]">Open the Free Budget Calculator</Link><Link href="/contact/?service=feasibility" className="rounded-full border border-white/55 px-7 py-4 text-sm font-semibold !text-white">Schedule Free Consultation</Link></div>
        </div>
      </section>

      <section className="border-b border-[#e6dfd5] bg-white px-6 py-10"><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">{[
        ["Host cost", "What the couple or family pays directly or guarantees."],
        ["Guest cost", "What guests pay for rooms, travel, documents, and personal expenses."],
        ["Contract exposure", "Deposits, attrition, cancellation, releases, change orders, and currency risk."],
      ].map(([title, text]) => <article key={title} className="rounded-xl border border-[#e6dfd5] bg-[#faf8f5] p-6"><h2 className="font-serif text-3xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-[#4d403a]">{text}</p></article>)}</div></section>

      <section className="px-6 py-20 sm:py-24"><div className="mx-auto max-w-6xl"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">One budget, six groups</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Which cost categories belong in the total?</h2><p className="mt-5 text-lg leading-8 text-[#4d403a]">Enter current written numbers where you have them. Mark everything else estimated, excluded, or unanswered so it cannot quietly disappear from the decision.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{costGroups.map((group) => <article key={group.name} className="rounded-2xl border border-[#e6dfd5] bg-white p-8"><h3 className="font-serif text-3xl font-semibold">{group.name}</h3><ul className="mt-6 space-y-3 text-sm leading-6 text-[#4d403a]">{group.items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-[#7a6841]">✓</span><span>{item}</span></li>)}</ul></article>)}</div></div></section>

      <section className="bg-white px-6 py-20 sm:py-24"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Normalize before comparing</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Why do two resort totals mislead families?</h2><p className="mt-5 leading-7 text-[#4d403a]">One proposal may include tax while another does not. One may include a basic event for 50 guests while another prices 150. One may show a ballroom but omit production. Build both versions with the same assumptions before calling either one less expensive.</p><Link href="/planning-tools/resort-comparison/" className="mt-7 inline-flex rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white">Compare Two Resort Proposals</Link></div><div className="overflow-hidden rounded-2xl border border-[#e6dfd5]"><table className="w-full border-collapse text-left text-sm leading-6"><thead className="bg-[#1f1f1f] text-white"><tr><th className="p-5">Normalize</th><th className="p-5">Use the same assumption</th></tr></thead><tbody>{[
        ["Guests and rooms", "Guest count, room nights, occupancy, family-paid rooms, and event-access rules"],
        ["Events", "Same event list, duration, venues, meal periods, bar, and added-guest count"],
        ["Production", "Same Mandap, stage, dance floor, audio, lighting, power, rigging, setup, and breakdown"],
        ["Outside costs", "Same planner, vendors, travel, décor, transfers, outfits, welcome items, tax, service charges, and contingency"],
        ["Contract risk", "Same treatment of deposits, attrition, cancellation, currency, weather moves, and change orders"],
      ].map(([left, right], index) => <tr key={left} className={`border-t border-[#e6dfd5] ${index % 2 === 0 ? "bg-[#faf8f5]" : "bg-white"}`}><th className="p-5 font-semibold">{left}</th><td className="p-5 text-[#4d403a]">{right}</td></tr>)}</tbody></table></div></div></section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24"><div className="mx-auto max-w-6xl"><div className="grid gap-6 lg:grid-cols-3">{[
        ["Budget calculator", "/planning-tools/budget/", "Test guest count, events, travel, and missing categories with your own numbers."],
        ["Guest & VIP calculator", "/planning-tools/guest-logistics/", "Separate family-paid rooms, flights, transfers, welcome items, and arrival support."],
        ["Room-block guide", "/indian-wedding-room-block-mexico/", "Understand deposits, attrition, concessions, cut-off dates, and provider responsibilities."],
      ].map(([title, href, text]) => <article key={href} className="flex flex-col rounded-2xl border border-[#d9cfbf] bg-white p-8"><h2 className="font-serif text-3xl font-semibold">{title}</h2><p className="mt-4 flex-1 leading-7 text-[#4d403a]">{text}</p><Link href={href} className="mt-6 font-semibold text-[#7a6841] underline underline-offset-4">Open this resource</Link></article>)}</div></div></section>

      <section className="px-6 py-20 sm:py-24"><div className="mx-auto max-w-5xl"><div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Cost FAQ</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Answers before you set the target</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2">{faqItems.map((faq) => <article key={faq.question} className="rounded-2xl border border-[#e6dfd5] bg-white p-8"><h3 className="font-serif text-2xl font-semibold">{faq.question}</h3><p className="mt-4 leading-7 text-[#4d403a]">{faq.answer}</p></article>)}</div><p className="mt-8 text-sm leading-6 text-[#5e4a40]">Reviewed August 11, 2026. Prices, availability, taxes, service charges, exchange rates, vendor rules, and resort terms can change. Use current written proposals and qualified legal, tax, insurance, immigration, or travel professionals where appropriate.</p></div></section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white"><div className="mx-auto max-w-3xl"><h2 className="font-serif text-4xl font-semibold !text-white sm:text-5xl">Turn the budget into a decision</h2><p className="mt-5 text-lg leading-8 !text-white/85">Start with the free calculator. If you need a written review of your guest count, events, travel obligations, and up to two current proposals, begin with the free consultation and optional $300 feasibility plan.</p><Link href="/contact/?service=feasibility" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]">Schedule Free Consultation</Link></div></section>
    </main>
  )
}
