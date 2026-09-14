import Link from "next/link"
import { notFound } from "next/navigation"
import { venuePlanningGuides } from "@/lib/venue-planning-guides"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const dynamicParams = false
export function generateStaticParams() { return venuePlanningGuides.map(guide => ({ venue: guide.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ venue: string }> }) {
  const { venue } = await params
  const guide = venuePlanningGuides.find(g => g.slug === venue)
  if (!guide) notFound()
  return buildMetadata({ path: `/guides/${guide.slug}/`, title: `${guide.venue} Wedding Planning Guide`, description: guide.description })
}

export default async function VenueGuidePage({ params }: { params: Promise<{ venue: string }> }) {
  const { venue } = await params
  const guide = venuePlanningGuides.find(g => g.slug === venue)
  if (!guide) notFound()
  return <main className="bg-[#faf8f5] text-[#1f1f1f]">
    <JsonLd id="schema-breadcrumb" data={buildBreadcrumb([{ name: "Resort Guides", url: "/resorts/" }, { name: `${guide.venue} Planning Guide`, url: `/guides/${guide.slug}/` }])} />
    <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-24"><div className="mx-auto max-w-5xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">{guide.region} · Venue planning guide</p>
      <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight !text-white sm:text-6xl">The Complete Guide to Planning a Wedding at {guide.venue}</h1>
      <p className="mt-7 max-w-4xl text-lg leading-8 !text-white/80">{guide.intro}</p>
      <p className="mt-5 text-sm !text-white/60">Independent CeremonyVerse research · Reviewed September 14, 2026 · For families across the USA and Canada</p>
      <Link href="/planning-tools/ceremony-timeline/" className="mt-8 inline-flex rounded-full bg-[#c5a059] px-7 py-4 font-semibold !text-[#1f1f1f]">Build your free ceremony timeline →</Link>
    </div></section>
    <article className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <section><h2 className="font-serif text-3xl font-semibold sm:text-4xl">The planner’s blueprint for {guide.venue}</h2>{guide.blueprint.map(p => <p key={p} className="mt-5 text-lg leading-8 text-[#4d403a]">{p}</p>)}<Link href={guide.profile} className="mt-6 inline-block font-semibold text-[#7a6841] underline">Compare the resort’s package and feasibility details →</Link></section>
      <section className="mt-16"><h2 className="font-serif text-3xl font-semibold sm:text-4xl">Critical venue logistics you need to know</h2><p className="mt-5 leading-7 text-[#4d403a]">Published details are identified below. The planning steps are CeremonyVerse suggestions to discuss with the resort; unconfirmed access windows, capacities and technical requirements remain questions for your contract.</p><div className="mt-8 grid gap-6 md:grid-cols-2">{guide.logistics.map(item => <section key={item.title} className="rounded-2xl border border-[#d9cfbf] bg-white p-6 sm:p-8"><h3 className="font-serif text-2xl font-semibold">{item.title}</h3>{item.fact && <p className="mt-4 rounded-xl bg-[#f2ece2] p-4 text-sm leading-6"><strong>Published detail:</strong> {item.fact}{item.source !== undefined && <> <a href={guide.sources[item.source].href} className="font-semibold text-[#705d37] underline" target="_blank" rel="noopener noreferrer">Official source</a>.</>}</p>}<p className="mt-5 leading-7 text-[#4d403a]">{item.advice}</p></section>)}</div></section>
      <section className="mt-16"><h2 className="font-serif text-3xl font-semibold sm:text-4xl">A four-day framework to adapt with your family</h2><p className="mt-5 leading-7 text-[#4d403a]">Illustrative sequence only. Your rituals, flight patterns and contracted spaces determine the final order and timing.</p><ol className="mt-7 grid gap-4 sm:grid-cols-2">{guide.days.map(day => <li key={day.day} className="rounded-xl border border-[#e6dfd5] bg-white p-6"><h3 className="font-semibold text-[#7a6841]">{day.day}</h3><p className="mt-3 leading-7 text-[#4d403a]">{day.plan}</p></li>)}</ol></section>
      <section className="mt-16"><h2 className="font-serif text-3xl font-semibold sm:text-4xl">Four questions to settle before a deposit</h2><ol className="mt-6 list-decimal space-y-4 pl-6 leading-7 text-[#4d403a]">{guide.questions.map(q => <li key={q}>{q}</li>)}</ol></section>
      <section className="mt-16 rounded-2xl bg-[#1f1f1f] p-7 text-white sm:p-10"><h2 className="font-serif text-3xl font-semibold !text-white sm:text-4xl">Streamline your ceremony logistics right now</h2><p className="mt-5 leading-8 !text-white/80">Build a working ceremony timeline for your celebration at {guide.venue}. Adjust the start time, guest count and ceremony block to see planning checkpoints and guest handoffs. Download your timeline and an original symbolic script with a friend officiant guide.</p><p className="mt-4 leading-7 !text-white/75">Preview the timeline freely. Enter your details for the downloadable toolkit; planning emails are optional. Use the separate budget calculator to allocate your own quoted costs.</p><div className="mt-7 flex flex-col items-start gap-4"><Link href="/planning-tools/ceremony-timeline/" className="rounded-full bg-[#c5a059] px-6 py-4 font-semibold !text-[#1f1f1f]">Launch your CeremonyVerse planning tool →</Link><Link href="/planning-tools/budget/" className="font-semibold !text-white underline">Check your budget allocations →</Link></div></section>
      <section className="mt-14"><h2 className="font-serif text-2xl font-semibold">Sources and planning support</h2><p className="mt-4 text-sm leading-6 text-[#4d403a]">Official pages reviewed September 14, 2026. Published terms can change and some resort pages contain older material; obtain a current written quote. CeremonyVerse is an independent planning business. This guide does not claim a venue affiliation or a past wedding at this property.</p><ul className="mt-5 space-y-3">{guide.sources.map(source => <li key={source.href}><a href={source.href} className="text-sm font-semibold text-[#7a6841] underline" target="_blank" rel="noopener noreferrer">{source.label}</a></li>)}</ul><div className="mt-8 flex flex-col items-start gap-4"><Link href="/contact/?from=venue-planning-guide" className="rounded-full bg-[#7a6841] px-6 py-3 font-semibold text-white">Schedule a free 30-minute consultation</Link><Link href="/destination-wedding-feasibility-plan/" className="font-semibold text-[#7a6841] underline">Explore the $300 Feasibility Plan →</Link></div></section>
      <nav aria-label="More venue planning guides" className="mt-12 border-t border-[#d9cfbf] pt-8"><h2 className="font-serif text-2xl font-semibold">Compare another venue</h2><ul className="mt-5 space-y-3">{venuePlanningGuides.filter(g => g.slug !== guide.slug).map(g => <li key={g.slug}><Link href={`/guides/${g.slug}/`} className="font-semibold text-[#7a6841] underline">{g.venue} planning guide →</Link></li>)}</ul></nav>
    </article>
  </main>
}
