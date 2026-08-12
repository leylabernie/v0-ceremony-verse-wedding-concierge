import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/indian-wedding-room-block-mexico/",
  title: "Indian Wedding Room Blocks in Mexico: Contract Guide",
  description:
    "Understand Mexico destination-wedding room blocks, including rates, minimum stays, deposits, attrition, concessions, cut-off dates, guest access, and provider roles.",
})

const terms = [
  ["Contracted room inventory", "The room types and number of rooms or room nights held under the agreement."],
  ["Minimum stay", "The number of nights a guest or the group must book under the applicable rate or event-access rule."],
  ["Deposit schedule", "When money is due, who pays it, what it secures, and whether it is refundable or credited."],
  ["Attrition", "The portion of the contracted room commitment that may go unused before financial responsibility applies."],
  ["Cut-off or release date", "When unbooked inventory may return to general sale or the contracted rate may stop being available."],
  ["Concessions", "Benefits tied to actual pickup or spend, such as complimentary rooms, upgrades, credits, or events."],
  ["Shoulder nights", "Nights before or after the main block that may have different inventory, rates, or terms."],
  ["Event access", "Rules for guests staying outside the block or off property, including day passes or added fees."],
]

const faqItems = [
  {
    question: "What is attrition in a destination-wedding room block?",
    answer:
      "Attrition describes the allowed shortfall, if any, between contracted room commitments and actual pickup before financial responsibility applies. The formula, measurement date, exclusions, mitigation, and remedy depend on the written contract; do not rely on a verbal summary.",
  },
  {
    question: "Should guests book outside the wedding room block?",
    answer:
      "First review event-access, transfer, support, rate, inventory, cancellation, and credit rules. An outside rate can look lower while excluding transfers, flexibility, concessions, or event entry. The family should not promise consequences that are not stated in the resort or provider terms.",
  },
  {
    question: "Who should collect guest room payments?",
    answer:
      "The named resort or appropriately licensed travel provider should handle room booking and travel payments under its agreement. CeremonyVerse can organize agreed guest information but does not currently sell rooms or present itself as a licensed travel agency.",
  },
  {
    question: "Are complimentary rooms guaranteed?",
    answer:
      "No. Complimentary rooms, upgrades, credits, and other concessions depend on the final written contract and often on actual pickup, qualified room nights, spend, room type, or other conditions. Confirm how each benefit is earned, calculated, applied, and lost.",
  },
  {
    question: "Can room rates change after a proposal?",
    answer:
      "Availability, inventory, rates, taxes, fees, currency treatment, and terms can change until the named contracting party confirms them. Use the current written agreement and make clear what is fixed, estimated, or subject to later adjustment.",
  },
]

const breadcrumbSchema = buildBreadcrumb([{ name: "Indian Wedding Room Blocks in Mexico", url: "/indian-wedding-room-block-mexico/" }])
const faqSchema = buildFaqSchema(faqItems)

export default function IndianWeddingRoomBlockMexicoPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white sm:py-28"><div className="mx-auto max-w-5xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Room-block decision guide</p><h1 className="mt-4 font-serif text-5xl font-semibold !text-white sm:text-6xl">How do Indian wedding room blocks in Mexico work?</h1><p className="mx-auto mt-7 max-w-4xl text-lg leading-8 !text-white/80">A room block is both a guest-booking system and a contract with financial, inventory, timing, cancellation, and event-access consequences. Understand those obligations before promising a rate or asking guests to book.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/planning-tools/resort-comparison/" className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]">Compare Room-Block Terms</Link><Link href="/contact/?service=feasibility" className="rounded-full border border-white/55 px-7 py-4 text-sm font-semibold !text-white">Schedule a Free 30-Minute Consultation</Link></div></div></section>

      <section className="px-6 py-20 sm:py-24"><div className="mx-auto max-w-6xl"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Read the exact contract</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Room-block terms families should understand</h2><p className="mt-5 text-lg leading-8 text-[#4d403a]">These plain-language definitions help you ask questions. They do not replace the resort's contract or qualified legal review.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2">{terms.map(([term, meaning]) => <article key={term} className="rounded-2xl border border-[#e6dfd5] bg-white p-7"><h3 className="font-serif text-2xl font-semibold">{term}</h3><p className="mt-3 leading-7 text-[#4d403a]">{meaning}</p></article>)}</div></div></section>

      <section className="bg-white px-6 py-20 sm:py-24"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Before signing</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">What should the family compare?</h2><p className="mt-5 leading-7 text-[#4d403a]">Normalize the room assumptions before comparing resorts. Then connect the block to event access, concessions, guest support, and the complete host budget.</p><Link href="/planning-tools/guest-logistics/" className="mt-7 inline-flex rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white">Calculate Family-Paid Travel</Link></div><ol className="space-y-4">{[
        "Room types, occupancy, child rules, inventory by night, and accessible-room handling",
        "Rates, taxes, fees, currency, deposit schedule, payment method, and what can change",
        "Minimum stay, minimum pickup, attrition formula, measurement dates, mitigation, and damages",
        "Cancellation, rescheduling, force majeure, name changes, substitutions, and refund timing",
        "Cut-off dates, release rules, waitlist, sold-out nights, shoulder nights, and overflow plan",
        "Complimentary rooms, upgrades, credits, rebates, and the exact pickup required to earn them",
        "Guest booking link, confirmation process, support channel, data handling, rooming list, and deadlines",
        "Outside-block guests, event access, day passes, transfers, resort fees, and wedding attendance rules",
      ].map((item, index) => <li key={item} className="flex gap-4 rounded-xl border border-[#e6dfd5] bg-[#faf8f5] p-5"><span className="font-serif text-2xl font-semibold text-[#7a6841]">{index + 1}</span><span className="leading-7 text-[#4d403a]">{item}</span></li>)}</ol></div></section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24"><div className="mx-auto max-w-6xl"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Clear responsibility</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Who handles rooms, guests, and travel?</h2><p className="mt-5 text-lg leading-8 text-[#4d403a]">The written agreements should match the actual authority of each party. Guest convenience does not justify an unclear payment or travel-sales structure.</p></div><div className="mt-12 grid gap-6 md:grid-cols-3">{[
        ["Resort or licensed provider", "Contracts and sells rooms or transfers, collects applicable payments, issues confirmations, and applies its booking, change, cancellation, and refund terms."],
        ["CeremonyVerse", "Organizes agreed family priorities, room-block questions, proposal comparisons, guest-information tasks, and arrival details without claiming to sell travel."],
        ["Family and guests", "Review current documents and terms, book through the approved channel, meet deadlines, provide accurate information, and make individual travel decisions."],
      ].map(([title, text]) => <article key={title} className="rounded-2xl border border-[#d9cfbf] bg-white p-8"><h3 className="font-serif text-3xl font-semibold">{title}</h3><p className="mt-5 leading-7 text-[#4d403a]">{text}</p></article>)}</div></div></section>

      <section className="px-6 py-20 sm:py-24"><div className="mx-auto max-w-5xl"><div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Room-block FAQ</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Questions to resolve before launch</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2">{faqItems.map((faq) => <article key={faq.question} className="rounded-2xl border border-[#e6dfd5] bg-white p-8"><h3 className="font-serif text-2xl font-semibold">{faq.question}</h3><p className="mt-4 leading-7 text-[#4d403a]">{faq.answer}</p></article>)}</div><p className="mt-8 text-sm leading-6 text-[#5e4a40]">Reviewed August 11, 2026. Contract terms, rates, inventory, taxes, fees, concessions, and provider requirements can change. This guide is planning information, not legal, financial, insurance, immigration, or travel-agent advice. Have the appropriate professionals review binding obligations.</p></div></section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white"><div className="mx-auto max-w-3xl"><h2 className="font-serif text-4xl font-semibold !text-white sm:text-5xl">Do not let the room block stay in the fine print</h2><p className="mt-5 text-lg leading-8 !text-white/85">Bring the current proposal or contract to the consultation. We will help separate guest-facing instructions, financial exposure, open questions, and responsibilities.</p><Link href="/contact/?service=feasibility" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]">Schedule a Free 30-Minute Consultation</Link></div></section>
    </main>
  )
}
