import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, buildServiceSchema, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/destinations/",
  title: "Indian Destination Weddings: Mexico, Jamaica & Punta Cana",
  description: "Compare Mexico, Jamaica, and Punta Cana for a multi-day Gujarati or Hindu destination wedding, including guest access, room blocks, cultural fit, resort costs, and local execution.",
  image: "/images/sourcing/couple-mandap.webp",
})

const destinations = [
  {
    name: "Mexico",
    places: "Cancún · Riviera Maya · Los Cabos · Mexico City and beyond",
    summary: "The broadest planning range, from all-inclusive beachfront resorts to city celebrations, supported by a Mexico City–based destination team.",
    links: [
      ["Cancún", "/destinations/cancun-indian-wedding/"],
      ["Riviera Maya", "/destinations/riviera-maya-indian-wedding/"],
      ["Los Cabos", "/destinations/los-cabos-indian-wedding/"],
    ],
  },
  {
    name: "Jamaica",
    places: "Montego Bay · Trelawny · Ocho Rios",
    summary: "A resort-specific comparison of guest access, room commitments, cultural permissions, food, event spaces, weather alternatives, and the local team.",
    links: [["Explore Jamaica", "/destinations/jamaica-indian-wedding/"]],
  },
  {
    name: "Punta Cana",
    places: "Dominican Republic",
    summary: "All-inclusive resort planning evaluated through guest travel, room-block exposure, cultural execution, local vendors, event venues, and complete written cost.",
    links: [["Explore Punta Cana", "/destinations/punta-cana-indian-wedding/"]],
  },
]

const comparisonPoints = [
  ["Guest access", "Airports, passport and visa responsibilities, transfers, mobility needs, children, elders, and arrival patterns."],
  ["Resort commitment", "Room rates, minimum stays, deposits, attrition, concessions, cut-off dates, upgrades, and event-access rules."],
  ["Celebration fit", "Event spaces, food, cultural permissions, Mandap and Baraat needs, production, sound, weather backup, and curfews."],
  ["Complete host cost", "Resort package, private events, vendors, décor, production, planning, travel, tax, service charges, and contingency."],
]

const faqItems = [
  { question: "Which destinations does CeremonyVerse support?", answer: "Current planning coverage includes Mexico, Jamaica, and Punta Cana. CeremonyVerse is not limited to Cancún, Riviera Maya, or Los Cabos within Mexico. Availability and the selected local team are confirmed in writing." },
  { question: "Which destination is least expensive?", answer: "No destination is universally least expensive. A valid comparison uses the same guest count, room nights, events, hours, venues, catering, production, vendors, planning, travel, taxes, service charges, and contingency." },
  { question: "Can we see public resort-package information first?", answer: "Yes. CeremonyVerse maintains a curated starting library of public resort information. It is comparison material—not a CeremonyVerse quote, negotiated rate, or guarantee." },
  { question: "Can India sourcing be added?", answer: "Yes. Optional India sourcing can be aligned with the destination plan. Its service fee, products, shipping, customs, and alterations are separately itemized." },
]

const breadcrumbSchema = buildBreadcrumb([{ name: "Destinations", url: "/destinations/" }])
const faqSchema = buildFaqSchema(faqItems)
const serviceSchema = buildServiceSchema({ name: "Indian Destination Wedding Planning in Mexico, Jamaica, and Punta Cana", description: "Family-facing planning, local execution coordination, cultural requirements, guest-information organization, and optional India sourcing for Gujarati and Hindu weddings.", url: "/destinations/", category: "Indian Destination Wedding Planning", areaServed: ["Mexico", "Jamaica", "Dominican Republic", "United States", "Canada"] })

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#201d1a]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-service" data={serviceSchema} />

      <section className="bg-[#211d19] px-6 py-24 text-center text-white sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-[#caa867]">Mexico · Jamaica · Punta Cana</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-medium leading-tight !text-white sm:text-7xl">A beautiful destination must also work beautifully.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 !text-white/72">We compare each destination through your guests, ceremonies, room commitments, complete cost, and the people responsible for local execution.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=mexico&from=destinations" className="rounded-full bg-[#caa867] px-7 py-4 text-sm font-semibold !text-[#211d19]">Schedule Your Free Consultation</Link>
            <Link href="/resort-packages/" className="rounded-full border border-white/50 px-7 py-4 text-sm font-semibold !text-white">Explore Resort Information</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#d8cdbc] bg-[#d8cdbc] lg:grid-cols-3">
            {destinations.map((destination) => (
              <article key={destination.name} className="flex min-h-[430px] flex-col bg-[#fffdf9] p-9 sm:p-11">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80683b]">{destination.places}</p>
                <h2 className="mt-6 font-serif text-4xl font-medium">{destination.name}</h2>
                <p className="mt-6 flex-1 leading-8 text-[#51483f]">{destination.summary}</p>
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                  {destination.links.map(([label, href]) => <Link key={href} href={href} className="font-semibold text-[#80683b]">{label} <span aria-hidden="true">→</span></Link>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee7dc] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">One comparison standard</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-6xl">What every destination should prove.</h2>
            <p className="mt-6 text-lg leading-8 text-[#51483f]">A package headline is only a starting point. The unanswered terms often determine whether the wedding is truly feasible.</p>
          </div>
          <div className="border-t border-[#cfc2af]">
            {comparisonPoints.map(([title, text]) => (
              <article key={title} className="grid gap-3 border-b border-[#cfc2af] py-7 sm:grid-cols-[170px_1fr]">
                <h3 className="font-serif text-2xl font-medium">{title}</h3>
                <p className="text-base leading-7 text-[#51483f]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf9] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[#ded5c7] p-9 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#80683b]">Published resort information</p>
            <h2 className="mt-4 font-serif text-4xl font-medium">See the headline—and what it does not cover.</h2>
            <p className="mt-6 leading-8 text-[#51483f]">Review current public package examples, guest limits, room-night conditions, event structure, and the questions still requiring written confirmation.</p>
            <Link href="/resort-packages/" className="mt-8 inline-flex rounded-full bg-[#80683b] px-7 py-3.5 text-sm font-semibold !text-white">Explore Resort Information</Link>
          </article>
          <article className="rounded-[2rem] border border-[#ded5c7] p-9 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#80683b]">Calculate before choosing</p>
            <h2 className="mt-4 font-serif text-4xl font-medium">Build the complete wedding budget.</h2>
            <p className="mt-6 leading-8 text-[#51483f]">Use one guest count and event plan across the resort package, rooms, venues, food, vendors, production, travel, taxes, service charges, and contingency.</p>
            <Link href="/planning-tools/budget/" className="mt-8 inline-flex rounded-full border border-[#80683b] px-7 py-3.5 text-sm font-semibold text-[#80683b]">Open the Budget Calculator</Link>
          </article>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Destination questions</p>
          <h2 className="mt-4 text-center font-serif text-4xl font-medium sm:text-6xl">Compare with the same facts.</h2>
          <div className="mt-12 space-y-3">{faqItems.map((item) => <details key={item.question} className="rounded-2xl border border-[#d5c9b8] bg-[#fffdf9] p-6"><summary className="cursor-pointer font-semibold text-[#201d1a]">{item.question}</summary><p className="mt-4 leading-7 text-[#51483f]">{item.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="bg-[#80683b] px-6 py-24 text-center text-white">
        <h2 className="font-serif text-4xl font-medium !text-white sm:text-6xl">Bring us your actual wedding facts.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 !text-white/80">We will help you identify the next useful comparison—not push a destination before the details are known.</p>
        <Link href="/contact/?service=mexico&from=destinations-final" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#2a241e]">Schedule Your Free Consultation</Link>
      </section>
    </main>
  )
}
