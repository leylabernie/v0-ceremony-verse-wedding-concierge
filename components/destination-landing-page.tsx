import Link from "next/link"
import type { DestinationPageData } from "@/lib/destination-pages"
import { JsonLd, buildBreadcrumb, buildFaqSchema, buildServiceSchema } from "@/lib/seo"

export function DestinationLandingPage({ data }: { data: DestinationPageData }) {
  const breadcrumbSchema = buildBreadcrumb([
    { name: "Destinations", url: "/destinations/" },
    { name: data.title, url: data.slug },
  ])
  const serviceSchema = buildServiceSchema({
    name: `${data.title} planning support`,
    description: data.description,
    url: data.slug,
    category: "Indian Destination Wedding Planning",
    areaServed: [data.shortName, "United States", "Canada"],
  })
  const faqSchema = buildFaqSchema(data.faqs)

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">{data.eyebrow}</p>
          <h1 className="font-serif text-5xl font-semibold leading-tight !text-white sm:text-6xl">{data.title}</h1>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 !text-white/80">{data.answer}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact/?service=mexico" className="rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold !text-[#1f1f1f]">
              Schedule a Free 30-Minute Consultation
            </Link>
            <Link href="/planning-tools/resort-comparison/" className="rounded-full border border-white/55 px-7 py-4 text-sm font-semibold !text-white">
              Compare Resort Proposals
            </Link>
          </div>
          <p className="mt-6 text-sm leading-6 !text-white/60">Serving families throughout the United States and Canada · Sources reviewed August 11, 2026</p>
        </div>
      </section>

      <section className="border-b border-[#e6dfd5] bg-white px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.facts.map((fact) => (
            <article key={fact.label} className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">{fact.label}</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">{fact.value}</h2>
              <p className="mt-3 text-sm leading-6 text-[#4d403a]">{fact.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-[#d9cfbf] bg-white p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">A stronger fit when</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">Who should consider {data.shortName}?</h2>
            <ul className="mt-7 space-y-4 leading-7 text-[#4d403a]">
              {data.idealFor.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-[#7a6841]">✓</span><span>{item}</span></li>)}
            </ul>
          </article>
          <article className="rounded-2xl border border-[#d9cfbf] bg-[#f4eee4] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Do not choose by brochure</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">What must be compared first?</h2>
            <ul className="mt-7 space-y-4 leading-7 text-[#4d403a]">
              {data.compareBeforeChoosing.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-[#7a6841]">→</span><span>{item}</span></li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Multi-day event reality</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Can the resort support the whole Indian wedding?</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">A South Asian package name is only a starting point. Map every celebration to an exact space, operating rule, cost, owner, and backup.</p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-[#e6dfd5]">
            <table className="min-w-[860px] w-full border-collapse text-left text-sm leading-6">
              <caption className="sr-only">Event requirements and planning risks for {data.shortName}</caption>
              <thead className="bg-[#1f1f1f] text-white"><tr><th className="p-5">Event</th><th className="p-5">Confirm in writing</th><th className="p-5">Common planning risk</th></tr></thead>
              <tbody>
                {data.eventRows.map((row, index) => (
                  <tr key={row.event} className={`border-t border-[#e6dfd5] align-top ${index % 2 === 0 ? "bg-[#faf8f5]" : "bg-white"}`}>
                    <th className="p-5 font-semibold text-[#1f1f1f]">{row.event}</th><td className="p-5 text-[#4d403a]">{row.verify}</td><td className="p-5 text-[#4d403a]">{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Evaluation list—not endorsements</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold">Which {data.shortName} resorts can families compare?</h2>
              <p className="mt-5 leading-7 text-[#4d403a]">These are properties families may ask CeremonyVerse to evaluate. Inclusion does not mean affiliation, preferred status, guaranteed South Asian capability, availability, or a recommendation. Current resort proposals and contracts control.</p>
              <Link href="/planning-tools/resort-comparison/" className="mt-7 inline-flex rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white">Open Resort Comparison Calculator</Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.resortExamples.map((resort) => <div key={resort} className="rounded-xl border border-[#e6dfd5] bg-white p-5 font-semibold text-[#4d403a]">{resort}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {[
            ["How should guests arrive?", data.arrival],
            ["How do food and culture work?", data.foodAndCulture],
            ["What weather backup is needed?", data.weatherAndBackup],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-[#d9cfbf] bg-white p-8">
              <h2 className="font-serif text-3xl font-semibold">{title}</h2>
              <p className="mt-5 leading-7 text-[#4d403a]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Before a deposit</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Questions for the resort and planning team</h2>
            <p className="mt-5 leading-7 text-[#4d403a]">Use the same questions for every proposal. A missing answer is a decision item—not permission to assume the most favorable outcome.</p>
          </div>
          <ol className="space-y-4">
            {data.questions.map((question, index) => (
              <li key={question} className="flex gap-4 rounded-xl border border-[#e6dfd5] bg-white p-5 text-[#4d403a]"><span className="font-serif text-2xl font-semibold text-[#7a6841]">{index + 1}</span><span className="leading-7">{question}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">One coordinated client experience</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold !text-white sm:text-5xl">How CeremonyVerse supports the family</h2>
            <p className="mt-6 text-lg leading-8 !text-white/75">{data.familySupport}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing/#mexico-concierge" className="rounded-full bg-[#c5a059] px-6 py-3 text-center text-sm font-semibold !text-[#1f1f1f]">View Planning Packages</Link>
              <Link href="/indian-wedding-room-block-mexico/" className="rounded-full border border-white/50 px-6 py-3 text-center text-sm font-semibold !text-white">Understand Room Blocks</Link>
            </div>
          </div>
          <aside className="rounded-2xl border border-white/15 bg-white/5 p-8">
            <h3 className="font-serif text-3xl font-semibold !text-white">Planning boundaries</h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 !text-white/70">
              <li>• CeremonyVerse does not claim resort affiliation or guaranteed pricing.</li>
              <li>• Rooms, flights, transfers, and regulated travel services remain with named resorts or licensed providers.</li>
              <li>• Local planning, on-site work, family support, and India sourcing are defined in the signed scope.</li>
              <li>• Resort, vendor, package, tax, service-charge, availability, and policy information can change.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Frequently asked</p><h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">{data.shortName} Indian wedding questions</h2></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {data.faqs.map((faq) => <article key={faq.question} className="rounded-2xl border border-[#e6dfd5] bg-white p-8"><h3 className="font-serif text-2xl font-semibold">{faq.question}</h3><p className="mt-4 leading-7 text-[#4d403a]">{faq.answer}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e6dfd5] bg-white px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl font-semibold">Sources and next planning steps</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {data.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-[#e6dfd5] p-5 text-[#4d403a] transition hover:border-[#7a6841]"><span className="font-semibold text-[#7a6841] underline">{source.label}</span><span className="mt-2 block text-sm leading-6">{source.note}</span></a>)}
          </div>
          <p className="mt-6 text-sm leading-6 text-[#5e4a40]">Sources reviewed August 11, 2026. Destination, entry, resort, vendor, weather, price, tax, service-charge, and policy information can change. Verify all material terms for the actual dates and travelers. This page is planning information, not legal, immigration, insurance, financial, or travel-agent advice.</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-[#7a6841]">
            <Link href="/destinations/" className="underline underline-offset-4">Compare all destinations</Link>
            <Link href="/indian-destination-wedding-cost/" className="underline underline-offset-4">Build the complete wedding cost</Link>
            <Link href="/blog/how-to-plan-gujarati-hindu-destination-wedding-mexico/" className="underline underline-offset-4">Read the Gujarati and Hindu Mexico guide</Link>
            <Link href="/lehenga-for-destination-wedding-mexico/" className="underline underline-offset-4">Plan the destination wardrobe</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl"><h2 className="font-serif text-4xl font-semibold !text-white sm:text-5xl">Is {data.shortName} right for your family?</h2><p className="mt-5 text-lg leading-8 !text-white/85">Bring your guest count, dates, event list, priorities, and any current proposals. We will separate confirmed facts from open questions and recommend the next step.</p><Link href="/contact/?service=mexico" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#1f1f1f]">Schedule a Free 30-Minute Consultation</Link></div>
      </section>
    </main>
  )
}
