import Link from "next/link"
import { buildMetadata, buildServiceSchema, JsonLd } from "@/lib/seo"
import { PlanningPackageSummary } from "@/components/planning-package-summary"

export const metadata = buildMetadata({
  path: "/destination-wedding-planning/",
  title: "Gujarati & Hindu Destination Wedding Planning",
  description: "Plan a multi-day Indian wedding in Mexico, Jamaica, or Punta Cana with Mini Patel: cultural requirements, event flow, room-block review, and optional India outfit sourcing.",
})

const destinations = [
  ["Cancún", "cancun"],
  ["Riviera Maya", "riviera-maya"],
  ["Los Cabos", "los-cabos"],
  ["Jamaica", "jamaica"],
  ["Punta Cana", "punta-cana"],
]

export default function DestinationWeddingPlanningPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="planning-service" data={buildServiceSchema({
        name: "Gujarati & Hindu Destination Wedding Planning",
        description: "Family-facing planning for multi-day celebrations in Mexico, Jamaica, and Punta Cana. All services are subject to a private written scope.",
        url: "/destination-wedding-planning/",
        areaServed: ["Mexico", "Jamaica", "Punta Cana, Dominican Republic"],
      })} />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-sm uppercase tracking-widest text-[#7a6841]">For NRI families across the USA &amp; Canada</p>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl sm:text-6xl">Your traditions. One coordinated destination wedding.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8">Work directly with Mini on a Gujarati or Hindu celebration in Mexico, Jamaica, or Punta Cana. Begin with the guest experience, cultural requirements, and complete budget—not just a resort photograph.</p>
        <Link href="/schedule/?from=planning-hub" className="mt-8 inline-flex rounded-full bg-[#7a6841] px-7 py-4 font-semibold text-white">Book a free 30-minute consultation</Link>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-16 md:grid-cols-3" aria-label="Planning priorities">
        {[
          ["Food and ritual requirements", "Document vegetarian, satvik, and Jain needs separately. Seek written resort or caterer confirmation of menus, preparation, outside-catering permissions, and ceremony requirements before committing."],
          ["A weekend that flows", "Coordinate Mehndi, Haldi, Sangeet, Baraat, Vidhi, and Reception around family priorities, guest mobility, setup time, sound limits, and weather backups."],
          ["Room-block risk review", "Review deposits, attrition, cancellation dates, minimum stays, and host-paid rooms. Seek written concessions and responsibilities; no savings or risk-free contract is guaranteed."],
        ].map(([title, text]) => <article key={title} className="rounded-2xl border border-[#d9cfbf] bg-white p-7"><h2 className="font-serif text-2xl">{title}</h2><p className="mt-4 leading-7">{text}</p></article>)}
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="font-serif text-3xl">Choose your destination</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{destinations.map(([name, slug]) => <Link key={slug} href={`/destinations/${slug}-indian-wedding/`} className="rounded-2xl border border-[#d9cfbf] bg-white p-6 font-semibold underline">{name} planning guide</Link>)}</div>
        <p className="mt-6 leading-7">Mini’s documented family-wedding experience is in Mexico. Jamaica and Punta Cana are service destinations, not claims of completed client weddings. Local execution and provider responsibilities are defined in your proposal.</p>
        <Link href="/indian-destination-wedding-planner-mexico/" className="mt-4 inline-block underline">Explore Mexico planning in detail</Link>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="mb-6 font-serif text-3xl">Choose the support you need</h2>
        <PlanningPackageSummary />
        <Link href="/pricing/" className="mt-6 inline-block font-semibold underline">Compare package tiers and written fee terms</Link>
        <p className="mt-4 leading-7">Destination-specific scope and pricing must be confirmed in writing. Start with the <Link href="/destination-wedding-feasibility-plan/" className="underline">$300 Feasibility &amp; Action Plan</Link> if you need a written starting point before full planning.</p>
      </section>
      <section className="bg-white px-6 py-16"><div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl">Planning, travel, and outfits—clearly separated</h2>
        <p className="mt-5 leading-7">CeremonyVerse handles the planning and coordination scope you select. <a href="https://ceremonyversetravel.com" target="_blank" rel="noopener noreferrer" className="underline">CeremonyVerse Travel</a> is the companion portal for guest travel and room-block inquiries; suppliers control availability, rates, and booking terms. CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc. / OutsideAgents.com.</p>
        <p className="mt-5 leading-7">Optional <Link href="/buy-indian-wedding-outfits-from-india/" className="underline">flat-fee India outfit sourcing</Link> has its own written scope, with products, shipping, duties, and alterations separate from the service fee.</p>
      </div></section>
    </main>
  )
}
