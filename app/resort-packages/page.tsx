import Link from "next/link"
import { buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo"
import { RATE_REVIEWED_ON, resortRatePrograms } from "@/lib/resort-wedding-rates"

export const metadata = buildMetadata({
  path: "/resort-packages/",
  title: "Published Indian Destination Wedding Resort Packages",
  description: "Compare selected publicly available resort wedding programs across Mexico, Jamaica, and Punta Cana, with guest limits, room requirements, source links, and clear cost disclaimers.",
  keywords: "Indian destination wedding resort packages, South Asian wedding package Mexico, resort wedding package Jamaica, Punta Cana wedding package pricing",
})

const featuredPrograms = resortRatePrograms.filter((program) =>
  ["hyatt-south-asian", "moon-palace-cancun", "lopesan-costa-bavaro", "royalton-weddings", "hard-rock-mexico", "hard-rock-punta-cana"].includes(program.id),
)

const displayPrice = (program: (typeof featuredPrograms)[number]) => {
  const priced = program.packages.filter((pkg) => typeof pkg.basePrice === "number")
  if (!priced.length) return "Current written quote required"
  const lowest = Math.min(...priced.map((pkg) => pkg.basePrice as number))
  const highest = Math.max(...priced.map((pkg) => pkg.basePrice as number))
  const format = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value)
  return lowest === highest ? `From ${format(lowest)}` : `${format(lowest)}–${format(highest)}`
}

const faqItems = [
  { question: "Are these CeremonyVerse packages?", answer: "No. They are selected publicly available resort programs summarized for initial comparison. CeremonyVerse does not present them as its own offers, negotiated rates, reservations, or guaranteed pricing." },
  { question: "Is the public package price the complete wedding cost?", answer: "Usually not. Rooms, extra guests, added event hours, venue fees, décor, production, outside vendors, travel, taxes, service charges, permits, insurance, upgrades, and other requirements may be separate." },
  { question: "Does CeremonyVerse book the rooms or flights?", answer: "Not through this page. Room blocks, flights, transfers, insurance, and regulated travel services must be confirmed with the resort or an appropriately authorized independent provider identified in the signed scope." },
  { question: "How often is this information checked?", answer: `The current library was reviewed on ${RATE_REVIEWED_ON}. Resort pricing, inclusions, availability, and conditions can change without notice, so every item must be confirmed in a current written proposal.` },
]

const breadcrumbSchema = buildBreadcrumb([{ name: "Resort Packages", url: "/resort-packages/" }])
const faqSchema = buildFaqSchema(faqItems)

export default function ResortPackagesPage() {
  return (
    <main className="cv-restored-type min-h-screen bg-[#f8f5ef] text-[#201d1a]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <section className="bg-[#211d19] px-6 py-24 text-center text-white sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-[#caa867]">Resort intelligence · Reviewed {RATE_REVIEWED_ON}</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-medium leading-tight !text-white sm:text-7xl">Published resort packages, placed in context.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 !text-white/72">Use these public figures to begin a shortlist—not to mistake a package headline for the complete cost of a multi-day Gujarati or Hindu wedding.</p>
          <Link href="/contact/?service=mexico&from=resort-packages" className="mt-9 inline-flex rounded-full bg-[#caa867] px-8 py-4 text-sm font-semibold !text-[#211d19]">Discuss Your Resort Shortlist</Link>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 rounded-[1.75rem] border border-[#d5c9b8] bg-[#eee7dc] p-7 sm:p-9">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <h2 className="font-serif text-3xl font-medium sm:text-4xl">What every price means here</h2>
              <p className="leading-8 text-[#51483f]">The amount shown is the lowest or range of public base prices found in the linked resort program. It is not a CeremonyVerse fee, quote, negotiated rate, reservation, or guarantee. Read the conditions and obtain a current resort proposal before making a decision.</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredPrograms.map((program) => (
              <article key={program.id} className="flex flex-col rounded-[1.75rem] border border-[#ded5c7] bg-[#fffdf9] p-8 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80683b]">Public resort program</p>
                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight">{program.label}</h2>
                <p className="mt-4 font-serif text-3xl font-medium text-[#80683b]">{displayPrice(program)}</p>
                <div className="mt-7 flex-1 border-t border-[#ded5c7]">
                  {program.packages.slice(0, 3).map((pkg) => (
                    <div key={pkg.id} className="border-b border-[#ded5c7] py-5">
                      <h3 className="font-serif text-xl font-medium">{pkg.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#51483f]">{pkg.rateNote}</p>
                    </div>
                  ))}
                </div>
                <details className="mt-6 rounded-xl bg-[#eee7dc] p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-[#51483f]">Important public conditions</summary>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[#51483f]">{program.conditions.map((condition) => <li key={condition} className="flex gap-3"><span aria-hidden="true">—</span><span>{condition}</span></li>)}</ul>
                </details>
                <a href={program.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex font-semibold text-[#80683b]">View the resort-owned source <span aria-hidden="true" className="ml-2">↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee7dc] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Before comparing resorts</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-6xl">Ask for the missing total.</h2>
            <p className="mt-6 text-lg leading-8 text-[#51483f]">A useful resort proposal should allow the same assumptions to be compared across every destination.</p>
          </div>
          <div className="border-t border-[#cfc2af]">
            {[
              ["Rooms", "Minimum room nights, rates, deposits, attrition, concessions, cut-off dates, upgrades, comps, and event-access rules."],
              ["Events", "Every private function, duration, venue, setup, catering, bar, extension, weather alternative, and guest overage."],
              ["Production", "Mandap, décor, lighting, sound, power, stage, dance floor, entertainment, fire permissions, labor, and breakdown."],
              ["Final charges", "Taxes, service charges, outside-vendor fees, permits, insurance, staff meals, travel, tips, and contingency."],
            ].map(([title, text]) => <article key={title} className="grid gap-3 border-b border-[#cfc2af] py-7 sm:grid-cols-[150px_1fr]"><h3 className="font-serif text-2xl font-medium">{title}</h3><p className="text-base leading-7 text-[#51483f]">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Resort information FAQ</p>
          <h2 className="mt-4 text-center font-serif text-4xl font-medium sm:text-6xl">Start informed, then verify.</h2>
          <div className="mt-12 space-y-3">{faqItems.map((item) => <details key={item.question} className="rounded-2xl border border-[#d5c9b8] bg-[#fffdf9] p-6"><summary className="cursor-pointer font-semibold text-[#201d1a]">{item.question}</summary><p className="mt-4 leading-7 text-[#51483f]">{item.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="bg-[#80683b] px-6 py-24 text-center text-white">
        <h2 className="font-serif text-4xl font-medium !text-white sm:text-6xl">Bring the package headline. We’ll examine the full picture.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 !text-white/80">Your first 30-minute consultation with Mini is free.</p>
        <Link href="/contact/?service=mexico&from=resort-packages-final" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#2a241e]">Schedule Your Free Consultation</Link>
      </section>
    </main>
  )
}
