import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/real-weddings/",
  title: "Wedding Experience Behind CeremonyVerse",
  description:
    "See the family weddings that shaped CeremonyVerse: a four-day interfaith wedding in New Jersey and an Indian destination wedding in Mexico.",
  keywords: [
    "Indian destination wedding Mexico experience",
    "Gujarati wedding Cancun",
    "interfaith Indian wedding New Jersey",
    "Indian wedding outfit coordination",
    "CeremonyVerse founder experience",
  ],
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Wedding Experience", url: "/real-weddings/" },
])

const experiences = [
  {
    label: "Founder family wedding · New Jersey",
    title: "A four-day Gujarati and South Indian Christian celebration",
    context:
      "The wedding was originally planned for Mexico and moved to New Jersey when COVID disrupted international travel. The change required the family to rebuild a multi-day, interfaith celebration locally.",
    responsibilities: [
      "Coordinating the needs of Hindu and Christian ceremonies",
      "Organizing bride, groom, wedding-party, and family outfits",
      "Managing ceremonial items, gifts, sweets, and welcome-bag details",
      "Working across a large bridal party and multiple family groups",
      "Adapting the plan after the destination and vendor structure changed",
    ],
    lesson:
      "This experience shaped CeremonyVerse's emphasis on written scopes, centralized measurements, ceremony-by-ceremony outfit planning, and a realistic timing buffer.",
  },
  {
    label: "Founder family wedding · Mexico",
    title: "A four-day Gujarati destination wedding",
    context:
      "Bhamini's son held a multi-day Indian destination wedding at the Hard Rock resort in Mexico. The family worked with local planning, entertainment, photography, decor, and beauty vendors while also coordinating Indian outfits and ceremony details.",
    responsibilities: [
      "Coordinating a multi-day Indian wedding schedule",
      "Working with a Mexico-based planner and local vendor team",
      "Managing outfit needs across the couple, wedding party, and family",
      "Organizing ceremony items, gifts, welcome bags, and special requests",
      "Learning which vendor handoffs require an on-site coordinator",
    ],
    lesson:
      "The vendor relationships and practical lessons from this wedding became the foundation for CeremonyVerse's Cancun and Riviera Maya planning tiers.",
  },
]

export default function WeddingExperiencePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <SeoNav />

      <section className="bg-[#1f1f1f] px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            The experience behind the service
          </p>
          <h1 className="mb-6 font-serif text-5xl font-semibold sm:text-6xl">
            Two family weddings that built the CeremonyVerse process
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/80">
            These are Bhamini&apos;s family weddings—not anonymous paid-client testimonials. They explain
            the firsthand experience behind CeremonyVerse&apos;s India shopping and Mexico family-concierge services.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl space-y-10">
          {experiences.map((experience, index) => (
            <article key={experience.title} className="overflow-hidden rounded-2xl border border-[#e6dfd5] bg-white">
              <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
                <div className="bg-[#f1eadf] p-8 sm:p-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">
                    {experience.label}
                  </p>
                  <p className="mb-5 font-serif text-6xl text-[#7a6841]">0{index + 1}</p>
                  <h2 className="font-serif text-3xl font-semibold sm:text-4xl">{experience.title}</h2>
                </div>
                <div className="p-8 sm:p-10">
                  <p className="mb-7 text-lg leading-8 text-[#4d403a]">{experience.context}</p>
                  <h3 className="mb-4 font-semibold">What the family coordinated</h3>
                  <ul className="mb-8 grid gap-3 text-sm leading-6 text-[#4d403a] sm:grid-cols-2">
                    {experience.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-[#7a6841]" aria-hidden="true">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl border border-[#e6dfd5] bg-[#faf8f5] p-5">
                    <h3 className="mb-2 font-semibold text-[#7a6841]">How it shaped CeremonyVerse</h3>
                    <p className="text-sm leading-6 text-[#4d403a]">{experience.lesson}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Choose the service you need
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Two separate paths that can work together</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8 sm:p-10">
              <h3 className="mb-4 font-serif text-3xl font-semibold">India Shopping & Sourcing</h3>
              <p className="mb-7 leading-7 text-[#4d403a]">
                Outfit, jewelry, gift, welcome-bag, and ceremony-item sourcing with live review,
                written approvals, measurement support, inspection, and US delivery coordination.
              </p>
              <Link href="/services/" className="font-semibold text-[#7a6841] underline underline-offset-4">
                Review sourcing services
              </Link>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8 sm:p-10">
              <h3 className="mb-4 font-serif text-3xl font-semibold">Mexico Planner Handoff &amp; Family Concierge</h3>
              <p className="mb-7 leading-7 text-[#4d403a]">
                A direct introduction to a Mexico-based planner, plus optional family, guest, arrival,
                welcome-item, and India-sourcing support under a separate CeremonyVerse scope.
              </p>
              <Link
                href="/indian-wedding-coordination-mexico/"
                className="font-semibold text-[#7a6841] underline underline-offset-4"
              >
                Review Mexico concierge
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
            Planning Mexico, shopping India, or both?
          </h2>
          <p className="mb-8 text-lg leading-8 text-white/85">
            Tell us your destination, ceremonies, party size, shopping needs, timeline, and budget.
            We&apos;ll recommend a clear service scope during the free consultation.
          </p>
          <Link href="/contact/" className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">
            Book the Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
