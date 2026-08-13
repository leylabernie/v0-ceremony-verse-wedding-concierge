import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, buildServiceSchema, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/destinations/",
  title: "Indian Destination Weddings in Mexico & Punta Cana",
  description:
    "Compare Cancún, Riviera Maya, Los Cabos, and Punta Cana for a multi-day Gujarati or Hindu destination wedding, including guest access, room blocks, culture, costs, and execution.",
  image: "/images/sourcing/couple-mandap.webp",
})

const destinations = [
  {
    name: "Cancún",
    href: "/destinations/cancun-indian-wedding/",
    summary: "Compare airport access, Hotel Zone and nearby resort areas, event venues, food, vendor rules, room blocks, and written weather backups.",
    bestWhen: "Guest access and a broad resort shortlist lead the decision.",
  },
  {
    name: "Riviera Maya",
    href: "/destinations/riviera-maya-indian-wedding/",
    summary: "Compare a long coastal region through airport choice, resort layout, guest mobility, venue variety, production access, and complete cost.",
    bestWhen: "A specific resort setting and multi-event layout lead the decision.",
  },
  {
    name: "Los Cabos",
    href: "/destinations/los-cabos-indian-wedding/",
    summary: "Compare SJD access, San José del Cabo, the Tourist Corridor and Cabo San Lucas, venue format, food, vendors, production, room blocks, and weather backups.",
    bestWhen: "The guest map and a property-specific resort or private-venue plan lead the decision.",
  },
  {
    name: "Punta Cana",
    href: "/destinations/punta-cana-indian-wedding/",
    summary: "Compare PUJ access, entry steps, all-inclusive resorts, cultural and food execution, local vendors, room blocks, and weather planning.",
    bestWhen: "The guest travel map and a strong property-specific proposal win.",
  },
]

const faqItems = [
  {
    question: "Which destinations does CeremonyVerse currently support?",
    answer:
      "Current destination-wedding positioning includes Mexico and Punta Cana. Cancún, Riviera Maya, and Los Cabos have dedicated comparison pages, but CeremonyVerse is not limited to those areas of Mexico. Availability and the selected local team are confirmed in writing for each wedding.",
  },
  {
    question: "Which destination is cheaper for an Indian wedding?",
    answer:
      "No destination is universally cheaper. Compare the same guest count, room nights, events, hours, venues, catering, production, vendors, planning, travel, taxes, service charges, and contingency. A low resort-package headline may exclude several required categories.",
  },
  {
    question: "Does CeremonyVerse work with U.S. and Canadian families?",
    answer:
      "Yes. CeremonyVerse is the family-facing coordinator for clients throughout the United States and Canada. The signed scope separates CeremonyVerse family support, local destination planning and on-site execution, and any services handled by resorts or qualified travel providers.",
  },
  {
    question: "Can India sourcing be combined with destination planning?",
    answer:
      "Yes. Optional paid India sourcing can be added for wedding outfits, jewelry, approved gifts, welcome-bag pieces, and related accessories. Products, shipping, customs, alterations, and the sourcing service fee are itemized separately unless the written proposal expressly includes them.",
  },
]

const breadcrumbSchema = buildBreadcrumb([{ name: "Destinations", url: "/destinations/" }])
const faqSchema = buildFaqSchema(faqItems)
const serviceSchema = buildServiceSchema({
  name: "Gujarati and Hindu Destination Wedding Planning in Mexico and Punta Cana",
  description:
    "Family-facing planning, local execution coordination, cultural requirements, guest-information organization, and optional paid India wedding-outfit sourcing.",
  url: "/destinations/",
  category: "Gujarati and Hindu Destination Wedding Planning",
  areaServed: ["Mexico", "Dominican Republic", "United States", "Canada"],
})

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-service" data={serviceSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Mexico &amp; Punta Cana</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold !text-white sm:text-6xl">Indian destination wedding locations, compared clearly</h1>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 !text-white/80">
            Choose the destination through your guest map, complete written cost, event spaces, cultural requirements,
            room-block risk, weather backup, and the team that will actually execute—not through a beach photo or package headline.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=mexico&from=destinations-hero" className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]">Schedule Free Consultation</Link>
            <Link href="/planning-tools/budget/" className="rounded-full border border-white/55 px-7 py-4 text-sm font-semibold !text-white">Calculate the Complete Budget</Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Start with the destination shortlist</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Four high-intent planning paths</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              Each guide asks different location-specific questions while using the same decision standard. No page claims an exclusive resort relationship or guaranteed price.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {destinations.map((destination) => (
              <article key={destination.href} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-white p-8 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Destination guide</p>
                <h2 className="mt-3 font-serif text-4xl font-semibold">{destination.name}</h2>
                <p className="mt-5 flex-1 leading-7 text-[#4d403a]">{destination.summary}</p>
                <p className="mt-6 rounded-xl bg-[#f4eee4] p-4 text-sm leading-6 text-[#4d403a]"><strong>Stronger fit when:</strong> {destination.bestWhen}</p>
                <Link href={destination.href} className="mt-7 inline-flex justify-center rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white">Plan an Indian wedding in {destination.name}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">One comparison standard</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">What should every destination prove?</h2>
              <p className="mt-5 leading-7 text-[#4d403a]">Use the same assumptions and evidence for every proposal. If one destination has a missing answer, do not silently give it the most favorable assumption.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Guest access", "Flights, passport and visa responsibilities, airport, transfers, mobility, children, elders, and arrivals."],
                ["Room block", "Rates, minimum stays, deposits, attrition, concessions, upgrades, cut-off dates, and event-access rules."],
                ["Event feasibility", "Exact spaces, seated layouts, Mandap, Baraat, production, sound, fire, setup, breakdown, and backups."],
                ["Complete host cost", "Rooms paid by family, events, catering, vendors, planning, production, décor, tax, service charges, travel, and contingency."],
                ["Food and culture", "Current Indian and Jain menus, kitchen rules, tasting, allergies, officiant requirements, and approved ceremony details."],
                ["Execution", "Named responsibility for resort, vendors, family decisions, guest information, travel services, on-site changes, and emergencies."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-xl border border-[#e6dfd5] bg-[#faf8f5] p-6">
                  <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#4d403a]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Complete wedding cost", "/indian-destination-wedding-cost/", "Build one budget across resort, events, rooms, vendors, planning, travel, and contingency."],
              ["Room-block terms", "/indian-wedding-room-block-mexico/", "Understand deposits, attrition, concessions, release dates, guest booking, and responsible providers."],
              ["Gujarati & Hindu plan", "/blog/how-to-plan-gujarati-hindu-destination-wedding-mexico/", "Map family decisions, ceremonies, food, production, vendors, and multi-day timing."],
              ["Destination wardrobe", "/lehenga-for-destination-wedding-mexico/", "Plan outfits, fabrics, measurements, shipping, customs, alterations, and handoff timing."],
            ].map(([title, href, text]) => (
              <article key={href} className="flex flex-col rounded-2xl border border-[#d9cfbf] bg-white p-7">
                <h2 className="font-serif text-2xl font-semibold">{title}</h2>
                <p className="mt-4 flex-1 text-sm leading-6 text-[#4d403a]">{text}</p>
                <Link href={href} className="mt-6 font-semibold text-[#7a6841] underline underline-offset-4">Open this planning guide</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Destination FAQ</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Questions families ask before choosing</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <h3 className="font-serif text-2xl font-semibold">{faq.question}</h3>
                <p className="mt-4 leading-7 text-[#4d403a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold !text-white sm:text-5xl">Bring us your actual wedding facts</h2>
          <p className="mt-5 text-lg leading-8 !text-white/85">We will help you compare the destination, complete cost, room-block exposure, cultural requirements, family responsibilities, and next decision.</p>
          <Link href="/contact/?service=mexico&from=destinations-final" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]">Schedule Free Consultation</Link>
        </div>
      </section>
    </main>
  )
}
