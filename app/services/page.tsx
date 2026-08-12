import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, buildServiceSchema, JsonLd } from "@/lib/seo"
import { mexicoPackages } from "@/lib/mexico-packages"

export const metadata = buildMetadata({
  path: "/services/",
  title: "Destination Wedding Planning & India Sourcing Services",
  description: "CeremonyVerse offers destination-wedding coordination, partial planning, full planning, and optional India sourcing for Gujarati and Hindu celebrations.",
  keywords: "Indian destination wedding planning services, Gujarati wedding planner Mexico, Jamaica Indian wedding planning, India wedding sourcing USA Canada",
})

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Destination Wedding Planning and India Sourcing",
  description: "Destination-wedding planning across Mexico, Jamaica, and Punta Cana with optional India sourcing for families across the United States and Canada.",
  url: "/services/",
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Planning", url: "/services/" }])

const faqItems = [
  { question: "Which level of planning should we choose?", answer: "Event Coordination fits couples with finalized plans and vendors. Partial Planning fits couples with a venue and some vendors already secured. Full Planning fits couples who want start-to-finish support. The free consultation helps identify the appropriate level." },
  { question: "Are resort and vendor costs included?", answer: "No. Published prices are CeremonyVerse planning fees. Resort packages, rooms, venues, catering, travel, décor, entertainment, vendors, production, taxes, service charges, permits, insurance, and other third-party costs remain separate unless expressly included in the signed proposal." },
  { question: "Is India sourcing included?", answer: "India sourcing is optional and priced separately. It can be aligned with the wedding plan when requested, but it is not presented as a free package inclusion." },
  { question: "Does CeremonyVerse book guest travel?", answer: "CeremonyVerse can organize agreed guest information, rooming details, transfer information, arrivals, and welcome plans. Flights, rooms, transfers, insurance, and regulated travel services remain with the resort or appropriately authorized independent provider identified in the signed scope." },
]

const faqSchema = buildFaqSchema(faqItems)

const localAdditions = [
  ["Fire performances", "Subject to venue approval, performer insurance, fire and safety rules, permits where required, weather, location, and a written production quote."],
  ["Water-drum entertainment", "Subject to resort approval, performer availability, sound and staging rules, setup requirements, access, and a written quote."],
  ["Golf-cart logistics", "Subject to resort rules, authorized operators, passenger capacity, routes, accessibility needs, insurance, timing, and a written transport or rental quote."],
]

const sourcingCategories = [
  ["Bridal & groom", ["Bridal lehengas and reception outfits", "Kanchipuram, Banarasi, and occasion sarees", "Sherwanis, bandhgalas, and Indo-Western looks", "Jewelry, footwear, dupattas, and accessories"]],
  ["Wedding party & family", ["Bridesmaid and maid-of-honor outfits", "Groomsmen looks and accessories", "Parents, siblings, children, and guest outfits", "Shared palettes and coordinated measurement records"]],
  ["Ceremony, gifts & welcome", ["Ceremony-specific items and accessories", "Wedding favors and return gifts", "Welcome-bag products and packaging", "Pet outfits and selected special requests"]],
] as const

export default function ServicesPage() {
  return (
    <main className="cv-restored-type min-h-screen bg-[#f8f5ef] text-[#201d1a]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <section className="bg-[#211d19] px-6 py-24 text-center text-white sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-[#caa867]">Planning support</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-medium leading-tight !text-white sm:text-7xl">Choose the level of help your wedding actually needs.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 !text-white/72">Three planning levels. One written scope. Family and guest coordination are included only as described within the selected package.</p>
          <Link href="/contact/?service=mexico&from=services" className="mt-9 inline-flex rounded-full bg-[#caa867] px-8 py-4 text-sm font-semibold !text-[#211d19]">Schedule Your Free Consultation</Link>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {mexicoPackages.map((service) => (
              <article key={service.name} className="flex flex-col rounded-[1.75rem] border border-[#ded5c7] bg-[#fffdf9] p-8 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80683b]">{service.timeline}</p>
                <h2 className="mt-5 font-serif text-3xl font-medium leading-tight">{service.name}</h2>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#6b5b4d]">{service.bestFor}</p>
                <p className="mt-5 leading-7 text-[#51483f]">{service.description}</p>
                <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#80683b]">Core responsibilities</h3>
                <ul className="mt-4 flex-1 space-y-3 text-sm leading-6 text-[#51483f]">
                  {service.includes.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-[#80683b]">✓</span><span>{item}</span></li>)}
                </ul>
                <details className="mt-7 border-t border-[#ded5c7] pt-5">
                  <summary className="cursor-pointer text-sm font-semibold text-[#80683b]">Review exclusions</summary>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[#51483f]">
                    {service.excludes.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true">—</span><span>{item}</span></li>)}
                  </ul>
                </details>
                <Link href="/pricing/#destination-planning" className="mt-8 inline-flex justify-center rounded-full border border-[#80683b] px-6 py-3.5 text-sm font-semibold text-[#80683b]">See Full Inclusions</Link>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-5xl text-center text-sm leading-6 text-[#6b5b4d]">All planning prices and full inclusions appear in one place on the Pricing page. Your wedding-specific proposal reflects the destination, dates, events, guest count, travel, lodging, staffing, complexity, and additions.</p>
        </div>
      </section>

      <section className="bg-[#eee7dc] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">What planning can connect</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-6xl">One plan across the celebration.</h2>
            <p className="mt-6 text-lg leading-8 text-[#51483f]">The exact responsibilities depend on the selected package, but the planning model keeps the major decisions from becoming separate, competing conversations.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#cfc2af] bg-[#cfc2af] sm:grid-cols-2">
            {[
              ["Destination & resort", "Written comparison of fit, room commitments, event spaces, food, culture, weather backup, and complete cost."],
              ["Events & vendors", "Local research, contract coordination, production, design, timelines, and on-site responsibilities according to scope."],
              ["Family & guests", "Decision tracking, meeting follow-ups, rooming details, transfer information, arrivals, and welcome planning where included."],
              ["Optional additions", "India sourcing and approved entertainment or mobility options are separately priced and added only when requested."],
            ].map(([title, text]) => (
              <article key={title} className="bg-[#fffdf9] p-8">
                <h3 className="font-serif text-2xl font-medium">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[#51483f]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#80683b]">Optional local additions</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Guest experiences and event logistics, quoted separately.</h2>
            <p className="mt-5 text-lg leading-8 text-[#51483f]">When requested, the destination team can seek written third-party options. These are additions—not free package inclusions.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {localAdditions.map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-[#d5c9b8] bg-[#fffdf9] p-8">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[#51483f]">{description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-6 text-[#6b5b4d]">Availability is never guaranteed. The resort or venue, provider, insurer, and applicable authorities control approval; the signed proposal identifies responsibility, price, payment terms, cancellation rules, and backup.</p>
        </div>
      </section>

      <section className="bg-[#fffdf9] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[2rem] border border-[#ded5c7] p-9 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#80683b]">Optional India sourcing</p>
            <h2 className="mt-4 font-serif text-4xl font-medium">Wardrobes and wedding items, when useful.</h2>
            <p className="mt-6 leading-8 text-[#51483f]">Live shopping, measurements, approvals, order follow-up, available pre-shipping review, and shipping-document support use separate flat fees.</p>
            <div className="mt-8 space-y-3">
              {sourcingCategories.map(([title, items]) => (
                <details key={title} className="rounded-xl border border-[#ded5c7] bg-[#f8f5ef] p-5">
                  <summary className="cursor-pointer font-semibold text-[#201d1a]">{title}</summary>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-[#51483f]">
                    {items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-[#80683b]">✓</span><span>{item}</span></li>)}
                  </ul>
                </details>
              ))}
            </div>
            <Link href="/pricing/#india-sourcing" className="mt-8 inline-flex font-semibold text-[#80683b]">See India sourcing fees <span aria-hidden="true" className="ml-2">→</span></Link>
          </article>
          <article className="rounded-[2rem] border border-[#ded5c7] p-9 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#80683b]">Resort intelligence</p>
            <h2 className="mt-4 font-serif text-4xl font-medium">Published programs, separated from our fee.</h2>
            <p className="mt-6 leading-8 text-[#51483f]">Review a curated starting library of publicly available resort programs, room requirements, guest limits, and the questions still requiring a written proposal.</p>
            <Link href="/resort-packages/" className="mt-8 inline-flex font-semibold text-[#80683b]">Explore resort information <span aria-hidden="true" className="ml-2">→</span></Link>
          </article>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Service questions</p>
          <h2 className="mt-4 text-center font-serif text-4xl font-medium sm:text-6xl">Know the boundaries before you sign.</h2>
          <div className="mt-12 space-y-3">{faqItems.map((item) => <details key={item.question} className="rounded-2xl border border-[#d5c9b8] bg-[#fffdf9] p-6"><summary className="cursor-pointer font-semibold text-[#201d1a]">{item.question}</summary><p className="mt-4 leading-7 text-[#51483f]">{item.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="bg-[#80683b] px-6 py-24 text-center text-white">
        <h2 className="font-serif text-4xl font-medium !text-white sm:text-6xl">Not sure which level fits?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 !text-white/80">Begin with the complimentary 30-minute consultation. No payment or contract is required for the call.</p>
        <Link href="/contact/?service=mexico&from=services-final" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#2a241e]">Schedule Your Free Consultation</Link>
      </section>
    </main>
  )
}
