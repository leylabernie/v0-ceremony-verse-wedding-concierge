import Link from "next/link"
import { buildMetadata, buildBreadcrumb, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/about/",
  title: "About CeremonyVerse — Gujarati & Hindu Wedding Support",
  description:
    "Learn how CeremonyVerse combines firsthand family-side destination-wedding experience, a documented planning process, and optional India wedding-outfit sourcing.",
})

const breadcrumbSchema = buildBreadcrumb([{ name: "About", url: "/about/" }])

const familyWeddings = [
  ["Hard Rock Hotel Cancun", "Approximately 150 guests"],
  ["Generations Riviera Maya", "Approximately 130 guests · February 2023"],
  ["Royalton resort in Mexico", "Approximately 80 guests · 2024"],
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-[#f8f6f2]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">About CeremonyVerse</p>
          <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">Family-side clarity, backed by destination experience</h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#c5a059]">Mini · Founder &amp; Destination Wedding Concierge</p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#e8dfd2] md:text-xl">
            CeremonyVerse was shaped by firsthand family-side experience navigating multi-day Indian destination
            weddings in Mexico. It showed how easily resort decisions, cultural needs, guest logistics, wedding
            wardrobes, vendor responsibilities, and family communication can become disconnected.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">What the experience taught us</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Turn wedding complexity into visible decisions</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">The family experience is background, not a CeremonyVerse client portfolio. It shaped the questions, safeguards, and family-side support used today without presenting private celebrations as client work.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Multi-day event flow", "Keep ceremonies, family decisions, vendor deadlines, approvals, and on-site responsibilities in one working plan."],
              ["Guest and family logistics", "Organize travel origins, arrivals, rooms, accessibility needs, welcome details, and the information families need before the wedding."],
              ["Clear provider roles", "Record what CeremonyVerse, the destination team, the resort, each vendor, and the family are responsible for before paid work begins."],
            ].map(([title, detail]) => (
              <article key={title} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Working principle</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Firsthand family experience</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Three Mexico weddings that shaped the questions we ask</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">These were family weddings—not CeremonyVerse client engagements. They are shared as truthful background, not as testimonials, reviews, or a destination-planning portfolio.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {familyWeddings.map(([venue, detail]) => (
              <article key={venue} className="rounded-2xl border border-[#d9cfbf] bg-white p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Family wedding · not a client project</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{venue}</h3>
                <p className="mt-4 font-semibold text-[#5e4a40]">{detail}</p>
                <p className="mt-3 leading-7 text-[#4d403a]">Firsthand family wedding experience in Mexico</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-2xl border border-[#e6dfd5] bg-[#f4eee4] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">How the sourcing service started</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">A family wedding led to the first custom-outfit request</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">Before CeremonyVerse launched, Mini coordinated custom outfits for her son&apos;s wedding. After seeing the completed looks, another couple asked her to help organize their custom outfits. This pre-launch experience relates to outfit sourcing—not destination-planning client work.</p>
            <Link href="/buy-indian-wedding-outfits-from-india/" className="mt-7 inline-flex rounded-full border border-[#7a6841] px-7 py-3 font-semibold text-[#7a6841]">Explore India Outfit Sourcing</Link>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Current destination focus</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Destination planning across Mexico and Punta Cana</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#4d403a]">
              <p>CeremonyVerse supports Gujarati and Hindu destination weddings across Mexico and Punta Cana. CeremonyVerse is the family-facing point of contact for cultural requirements, approvals, guest organization, logistics oversight, transparency, and optional India outfit sourcing.</p>
              <p>The contracted destination team handles the selected local planning, vendor coordination, negotiations, and on-site execution. The private proposal identifies each party&apos;s responsibilities, fees, outside costs, approvals, payment handling, and exclusions before paid work.</p>
              <p>Families can work with CeremonyVerse from anywhere in the United States or Canada. CeremonyVerse does not independently sell rooms, flights, transfers, or travel insurance; those services remain with the applicable resort or qualified provider.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-center text-white sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Before you sign</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold !text-white sm:text-5xl">Inspect the process before relying on claims</h2>
          <p className="mt-5 text-lg leading-8 !text-white/75">Review public starting fees, the complete client journey, provider responsibilities, calculators, and the private written scope before paid work begins.</p>
          <Link href="/how-it-works/" className="mt-8 inline-flex rounded-full bg-[#c5a059] px-7 py-3.5 text-sm font-semibold !text-[#1f1f1f]">Review the Complete Process</Link>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Tell us what your family needs</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">Share your destination, dates, guest count, ceremonies, budget scope, and whether India outfit sourcing is needed. The first 30-minute consultation is free.</p>
          <Link href="/contact/?service=mexico&from=about-final" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">Schedule Free Consultation</Link>
        </div>
      </section>
    </main>
  )
}
