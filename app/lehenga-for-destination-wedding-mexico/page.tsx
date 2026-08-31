import Image from "next/image"
import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, buildServiceSchema, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/lehenga-for-destination-wedding-mexico/",
  title: "Lehenga for a Mexico Destination Wedding: Sourcing Guide",
  description:
    "Choose and source a lehenga for a Mexico destination wedding with practical fabric, movement, event, measurement, shipping, customs, alteration, and packing checks.",
  image: "/images/sourcing/bride-traditional.webp",
})

const eventNeeds = [
  ["Mehndi or welcome event", "Movement, sitting comfort, stain tolerance, breathable lining, manageable jewelry, and a backup for outdoor conditions."],
  ["Garba or Sangeet", "Full dance test, secure blouse and dupatta, shoe and hem plan, stage movement, perspiration, and easy emergency repair."],
  ["Hindu ceremony", "Sitting and standing transitions, ritual movement, jewelry, veil or dupatta handling, Mandap heat, footwear, and restroom practicality."],
  ["Reception", "Long wear, dancing, photography light, bustle or train control, comfortable closure, backup shoes, and late-night change options."],
]

const faqItems = [
  {
    question: "What fabric works for a destination-wedding lehenga in Mexico?",
    answer:
      "There is no single best fabric. Compare event time, indoor or outdoor venue, heat, humidity, rain backup, embroidery weight, lining, structure, movement, modesty, photography, and personal comfort. Test the full outfit rather than choosing by fabric name alone.",
  },
  {
    question: "How early should I order a lehenga from India for a Mexico wedding?",
    answer:
      "Work backward from the date the outfit must be physically available for fitting—not the wedding date. Allow time for selection, measurements, production, review, international shipping, customs, delivery, alterations, a full movement test, packing, and a contingency. Custom work or multiple coordinated outfits needs more time.",
  },
  {
    question: "Can CeremonyVerse guarantee an exact fit or screen color?",
    answer:
      "No remote service can responsibly guarantee either. CeremonyVerse reduces risk through measurement guidance, written specifications and approvals, available video review, pre-shipping checks within the selected scope, and time for local alterations. Handmade work and screen settings can create variation.",
  },
  {
    question: "Should the lehenga ship directly to Mexico?",
    answer:
      "Do not decide only by speed. Compare customs responsibilities, carrier service, insurance, delivery control, resort receiving rules, storage, tracking, alteration access, and the risk of a delay. Many families may prefer delivery to the U.S. or Canada with time for fitting before travel, but the correct route depends on the written plan.",
  },
  {
    question: "Can India sourcing be combined with destination planning?",
    answer:
      "Yes. CeremonyVerse can align the wardrobe timeline with the destination event schedule, color and venue decisions, family approvals, shipping, and packing. Product, shipping, customs, alteration, and service costs remain itemized unless the signed proposal expressly includes them.",
  },
]

const breadcrumbSchema = buildBreadcrumb([{ name: "Lehenga for a Mexico Destination Wedding", url: "/lehenga-for-destination-wedding-mexico/" }])
const faqSchema = buildFaqSchema(faqItems)
const serviceSchema = buildServiceSchema({
  name: "Destination Wedding Lehenga Sourcing from India",
  description:
    "Remote India sourcing, measurement and approval coordination, available live video review, pre-shipping support, and U.S. or Canada delivery planning for destination-wedding outfits.",
  url: "/lehenga-for-destination-wedding-mexico/",
  category: "Indian Wedding Outfit Sourcing",
  areaServed: ["United States", "Canada"],
})

export default function LehengaForMexicoDestinationWeddingPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-service" data={serviceSchema} />
      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-24"><div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Destination wardrobe guide</p><h1 className="mt-4 font-serif text-5xl font-semibold !text-white sm:text-6xl">How to choose a lehenga for a Mexico destination wedding</h1><p className="mt-7 text-lg leading-8 !text-white/80">Choose for the actual ceremony, venue, weather plan, movement, timeline, fitting, shipping, and travel—not only the product photo. CeremonyVerse can coordinate the sourcing and destination timelines for families across the United States and Canada.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/contact/?service=sourcing" className="rounded-full bg-[#c5a059] px-7 py-4 text-center text-sm font-semibold !text-[#1f1f1f]">Schedule a Free 30-Minute Consultation</Link><Link href="/planning-tools/shipping-customs/" className="rounded-full border border-white/55 px-7 py-4 text-center text-sm font-semibold !text-white">Estimate Landed Cost</Link></div></div><div className="relative aspect-[4/5] overflow-hidden rounded-3xl"><Image src="/images/sourcing/bride-traditional.webp" alt="Bride in an embroidered lehenga illustrating destination wedding wardrobe planning" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /></div></div></section>

      <section className="px-6 py-20 sm:py-24"><div className="mx-auto max-w-6xl"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Event first, outfit second</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">What should the lehenga do during each event?</h2><p className="mt-5 text-lg leading-8 text-[#4d403a]">The most beautiful outfit can still fail the event if it cannot handle dancing, sitting, heat, fast changes, long wear, travel, or the approved ceremony plan.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2">{eventNeeds.map(([event, need]) => <article key={event} className="rounded-2xl border border-[#e6dfd5] bg-white p-8"><h3 className="font-serif text-3xl font-semibold">{event}</h3><p className="mt-4 leading-7 text-[#4d403a]">{need}</p></article>)}</div></div></section>

      <section className="bg-white px-6 py-20 sm:py-24"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">One written wardrobe brief</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">What should be approved before ordering?</h2><p className="mt-5 leading-7 text-[#4d403a]">Document the outfit, wearer, event, venue, requested measurements, material, color reference, embroidery, lining, blouse, skirt, dupatta, closures, delivery route, price, and next approval step. Reference images guide the brief; they do not authorize counterfeit labels or exact unauthorized copies.</p><Link href="/how-to-buy-bridal-lehenga-from-india-to-usa/" className="mt-7 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">Read the complete bridal-lehenga buying guide</Link></div><ol className="space-y-4">{[
        "Event, venue, indoor or outdoor plan, expected movement, and comfort priorities",
        "Current body measurements, measurement method, footwear, shapewear, and alteration allowance",
        "Fabric, lining, structure, embroidery weight, color reference, blouse, skirt, and dupatta details",
        "Ready piece versus custom production, revision points, photos or video, and approval deadlines",
        "Item price, CeremonyVerse service fee, shipping, insurance, customs, brokerage, and alteration costs",
        "Delivery address, carrier, declared details, tracking, receiving person, fitting date, and backup timing",
      ].map((item, index) => <li key={item} className="flex gap-4 rounded-xl border border-[#e6dfd5] bg-[#faf8f5] p-5"><span className="font-serif text-2xl font-semibold text-[#7a6841]">{index + 1}</span><span className="leading-7 text-[#4d403a]">{item}</span></li>)}</ol></div></section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24"><div className="mx-auto max-w-6xl"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Protect the timeline</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Work backward from the final fitting</h2><p className="mt-5 text-lg leading-8 text-[#4d403a]">Do not use the vendor's dispatch estimate as the wedding deadline. Every handoff needs its own owner, evidence, and contingency.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[
        ["1. Select and specify", "Approve the real item or written custom specifications, full cost, measurements, and milestones."],
        ["2. Review before shipping", "Use the photos, video, measurements, condition, and packing checks included in the selected scope."],
        ["3. Deliver and alter", "Allow for carrier movement, customs, receiving, local fitting, correction, and a full movement test."],
        ["4. Pack for the destination", "Carry essential wedding clothing and jewelry according to current airline, customs, insurance, and security guidance."],
      ].map(([title, text]) => <article key={title} className="rounded-2xl border border-[#d9cfbf] bg-white p-7"><h3 className="font-serif text-2xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-6 text-[#4d403a]">{text}</p></article>)}</div></div></section>

      <section className="px-6 py-20 sm:py-24"><div className="mx-auto max-w-5xl"><div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Lehenga FAQ</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Destination outfit questions</h2></div><div className="mt-10 grid gap-5 md:grid-cols-2">{faqItems.map((faq) => <article key={faq.question} className="rounded-2xl border border-[#e6dfd5] bg-white p-8"><h3 className="font-serif text-2xl font-semibold">{faq.question}</h3><p className="mt-4 leading-7 text-[#4d403a]">{faq.answer}</p></article>)}</div><div className="mt-10 flex flex-wrap justify-center gap-5 text-sm font-semibold text-[#7a6841]"><Link href="/blog/mexico-wedding-wardrobe-sourcing-from-india/" className="underline underline-offset-4">Read the full Mexico wardrobe timeline</Link><Link href="/destinations/" className="underline underline-offset-4">Compare Mexico destinations</Link><Link href="/pricing/" className="underline underline-offset-4">Compare India sourcing tiers</Link></div><p className="mt-8 text-sm leading-6 text-[#5e4a40]">Reviewed August 11, 2026. Product availability, handmade details, screen color, production, shipping, customs, fit, weather, and delivery timing cannot be guaranteed. Current written specifications, quotes, carrier terms, and the signed service scope control.</p></div></section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white"><div className="mx-auto max-w-3xl"><h2 className="font-serif text-4xl font-semibold !text-white sm:text-5xl">Connect the wardrobe to the wedding plan</h2><p className="mt-5 text-lg leading-8 !text-white/85">Share the destination, dates, events, venue plan, wearer list, inspiration, measurements, and working budget. We will recommend the appropriate sourcing step and timeline.</p><Link href="/contact/?service=sourcing" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]">Schedule a Free 30-Minute Consultation</Link></div></section>
    </main>
  )
}
