import Image from "next/image"
import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/about/",
  title: "About CeremonyVerse — Indian Destination Wedding Planning",
  description: "Meet Mini, founder of CeremonyVerse, and learn how firsthand destination-wedding experience and a Mexico City planning team support Gujarati and Hindu celebrations.",
  keywords: "About CeremonyVerse, Gujarati destination wedding planning, Hindu wedding planning Mexico Jamaica Punta Cana, India wedding sourcing",
})

const breadcrumbSchema = buildBreadcrumb([{ name: "About", url: "/about/" }])

const experiences = [
  ["Hard Rock Hotel Cancun", "Approximately 150 guests"],
  ["Generations Riviera Maya", "Approximately 130 guests · February 2023"],
  ["Royalton resort in Mexico", "Approximately 80 guests · 2024"],
]

export default function AboutPage() {
  return (
    <main className="bg-[#f8f5ef] text-[#201d1a]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      <section className="bg-[#211d19] px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-[#caa867]">Meet Mini · Founder &amp; Destination Wedding Concierge</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-medium leading-tight !text-white sm:text-7xl">A thoughtful bridge between your family and the destination.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 !text-white/74 sm:text-xl">Founded by Mini, CeremonyVerse is a U.S.-based service for Gujarati and Hindu families planning celebrations in Mexico, Jamaica, and Punta Cana.</p>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#eee7dc]">
            <Image src="/images/proof/family-wedding-mandap-couple.webp" alt="Bride and groom beneath a floral mandap" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-contain" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Why CeremonyVerse exists</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-6xl">Beautiful weddings need more than beautiful ideas.</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-[#51483f]">
              <p>Firsthand involvement in multi-day destination celebrations revealed where families carry the greatest pressure: resort decisions, ceremony requirements, guest travel, rooming details, approvals, wardrobes, and knowing who owns each task.</p>
              <p>Mini created CeremonyVerse to keep those decisions connected. You have one U.S.-based contact, while the experienced Mexico City–based destination team manages the local planning and on-site work identified in your signed proposal.</p>
              <p>It is a personal working relationship—not a sales call center or an anonymous handoff after the first conversation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eee7dc] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">Experience that shaped the service</p>
            <h2 className="mt-4 font-serif text-4xl font-medium sm:text-6xl">Three celebrations. Hundreds of practical lessons.</h2>
            <p className="mt-6 text-lg leading-8 text-[#51483f]">These settings informed how CeremonyVerse thinks about multi-day schedules, guest movement, family communication, cultural needs, resort limitations, and wedding-week execution.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[#cfc2af] bg-[#cfc2af] md:grid-cols-3">
            {experiences.map(([venue, detail], index) => (
              <article key={venue} className="bg-[#fffdf9] p-9 sm:p-11">
                <p className="font-serif text-4xl text-[#9b7c43]">0{index + 1}</p>
                <h3 className="mt-8 font-serif text-3xl font-medium">{venue}</h3>
                <p className="mt-4 text-sm font-semibold text-[#80683b]">{detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-6 text-[#6b5b4d]">For clarity: these celebrations took place before CeremonyVerse began accepting destination-planning clients. They explain the experience behind the service and are not presented as CeremonyVerse client case studies or testimonials.</p>
        </div>
      </section>

      <section className="bg-[#fffdf9] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#ded5c7] p-9 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#80683b]">Your CeremonyVerse relationship</p>
              <h2 className="mt-4 font-serif text-4xl font-medium">One consistent contact: Mini.</h2>
              <p className="mt-6 leading-8 text-[#51483f]">Mini organizes priorities, questions, decisions, agreed guest details, and the selected planning or sourcing scope. You know who to contact and what happens next.</p>
            </article>
            <article className="rounded-[2rem] border border-[#ded5c7] p-9 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#80683b]">At the destination</p>
              <h2 className="mt-4 font-serif text-4xl font-medium">Experienced local planning and execution.</h2>
              <p className="mt-6 leading-8 text-[#51483f]">The Mexico City–based destination team handles the planning, vendor coordination, negotiations, and on-site responsibilities specifically included in the private proposal.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#80683b] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-medium !text-white sm:text-6xl">Begin with a real conversation.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 !text-white/80">Your first 30 minutes are free. Share where you are in the process and receive a clear, pressure-free next step.</p>
          <Link href="/contact/?from=about" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#2a241e]">Schedule Your Free Consultation</Link>
        </div>
      </section>
    </main>
  )
}
