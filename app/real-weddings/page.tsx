import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/real-weddings/",
  title: "Destination Wedding Experience Behind CeremonyVerse",
  description: "Explore the Mexico destination-wedding experience that shaped CeremonyVerse at Hard Rock Hotel Cancun, Generations Riviera Maya, and a Royalton resort.",
  keywords: ["Indian destination wedding Mexico experience", "Hard Rock Hotel Cancun Indian wedding", "Generations Riviera Maya Indian wedding", "Royalton Indian wedding Mexico"],
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Experience", url: "/real-weddings/" }])
const experiences = [
  ["Hard Rock Hotel Cancun", "Approximately 150 guests", "A large multi-day celebration with complex event flow, family stays, outside vendors, and guest logistics."],
  ["Generations Riviera Maya", "Approximately 130 guests · February 2023", "A Riviera Maya celebration that reinforced the importance of resort layout, guest movement, and clear local ownership."],
  ["Royalton resort in Mexico", "Approximately 80 guests · 2024", "A more intimate destination celebration that shaped the questions CeremonyVerse asks about scale, timing, and family priorities."],
]

export default function WeddingExperiencePage() {
  return (
    <main className="bg-[#f8f5ef] text-[#201d1a]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <section className="bg-[#211d19] px-6 py-24 text-center text-white sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-[#caa867]">Experience behind the service</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-medium !text-white sm:text-7xl">Three Mexico wedding journeys that shaped CeremonyVerse.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 !text-white/72">The practical lessons behind a more organized family relationship, clearer responsibilities, and thoughtful multi-day planning.</p>
        </div>
      </section>
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {experiences.map(([venue, detail, description], index) => (
            <article key={venue} className="rounded-[2rem] border border-[#ded5c7] bg-[#fffdf9] p-9 sm:p-11">
              <p className="font-serif text-5xl text-[#9b7c43]">0{index + 1}</p>
              <h2 className="mt-8 font-serif text-3xl font-medium">{venue}</h2>
              <p className="mt-4 text-sm font-semibold text-[#80683b]">{detail}</p>
              <p className="mt-6 leading-8 text-[#51483f]">{description}</p>
            </article>
          ))}
          <p className="lg:col-span-3 mt-2 text-sm leading-6 text-[#6b5b4d]">These celebrations took place before CeremonyVerse began accepting destination-planning clients. They are shared as background experience—not client case studies, reviews, or testimonials.</p>
        </div>
      </section>
      <section className="bg-[#80683b] px-6 py-24 text-center text-white">
        <h2 className="font-serif text-4xl font-medium !text-white sm:text-6xl">Ready to discuss your celebration?</h2>
        <Link href="/contact/?from=experience" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold !text-[#2a241e]">Schedule Your Free Consultation</Link>
      </section>
    </main>
  )
}
