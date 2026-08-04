import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
  buildServiceSchema,
  JsonLd,
} from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/services/",
  title: "Indian Wedding Shopping & Mexico Planning Services",
  description:
    "CeremonyVerse offers India wedding shopping and sourcing plus Indian destination-wedding planning in Cancun and Riviera Maya.",
  keywords:
    "Indian wedding shopping concierge, bridal lehenga sourcing, Cancun Indian wedding planner, Riviera Maya Indian wedding, Mexico destination wedding coordination, NRI wedding shopping",
})

const offers = [
  {
    name: "Style Guide & Vendor List",
    price: 249,
    description: "A curated starting point for families managing their own purchases.",
  },
  {
    name: "Guided Sourcing",
    price: 799,
    description: "Live shopping, selection, measurement, order, and pre-shipping review support.",
  },
  {
    name: "Full Bridal Concierge",
    price: 2499,
    description: "End-to-end shopping coordination for the couple and wedding party up to eight people.",
  },
  {
    name: "Mexico Vendor Network Access",
    price: 499,
    description: "Introductions to vetted planning, entertainment, photography, decor, and beauty contacts in Mexico.",
  },
  {
    name: "Mexico Day-Of Coordination",
    price: 1500,
    description: "On-site coordination for one event in Cancun or Riviera Maya.",
  },
  {
    name: "Mexico Multi-Day Coordination",
    price: 4500,
    description: "Planning and on-site coordination for a multi-day Indian destination wedding.",
  },
]

const serviceSchema = buildServiceSchema({
  name: "Indian Wedding Shopping and Mexico Planning",
  description:
    "US-based support for sourcing Indian wedding essentials from India and planning Indian destination weddings in Cancun and Riviera Maya.",
  url: "/services/",
  offers,
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Services", url: "/services/" }])

const faqItems = [
  {
    question: "What can CeremonyVerse help me source?",
    answer:
      "Depending on vendor availability and the requested quality, CeremonyVerse can help source bridal and groom outfits, wedding-party and family outfits, jewelry, accessories, gifts, welcome-bag items, and ceremony essentials.",
  },
  {
    question: "Does CeremonyVerse plan or coordinate weddings?",
    answer:
      "Yes, within our Mexico destination-wedding service area in Cancun and Riviera Maya. India shopping and sourcing is a separate service line. Your written scope identifies whether you hired one service or both.",
  },
  {
    question: "Are product and shipping costs included in the service fee?",
    answer:
      "No. The service fee covers the concierge work described in your tier. Product costs, international shipping, and any customs charges are quoted separately and require your approval.",
  },
  {
    question: "Can you copy a designer outfit?",
    answer:
      "We do not sell unauthorized replicas or promise an exact copy of a designer's work. We can use your references to understand silhouette, color, and overall preferences, then help locate original options within your budget.",
  },
]

const faqSchema = buildFaqSchema(faqItems)

const categories = [
  {
    title: "Bridal & Groom",
    items: [
      "Bridal lehengas and reception outfits",
      "Kanchipuram, Banarasi, and occasion sarees",
      "Sherwanis, bandhgalas, and Indo-Western looks",
      "Jewelry, footwear, dupattas, and accessories",
    ],
  },
  {
    title: "Wedding Party & Family",
    items: [
      "Bridesmaid and maid-of-honor outfits",
      "Groomsmen looks and accessories",
      "Parents, siblings, children, and guest outfits",
      "Shared palettes and coordinated measurement records",
    ],
  },
  {
    title: "Ceremony, Gifts & Welcome",
    items: [
      "Ceremony-specific items and accessories",
      "Wedding favors and return gifts",
      "Welcome-bag products and packaging",
      "Pet outfits and selected special requests",
    ],
  },
]

const mexicoServices = [
  {
    title: "Vendor Network Access",
    price: "$499",
    description: "A vetted starting network for planning, DJ, photography, decor, and beauty vendors. You contact and manage the vendors after the introduction.",
  },
  {
    title: "Day-Of Coordination",
    price: "$1,500",
    description: "On-site coordination for one contracted event in Cancun or Riviera Maya, based on an agreed timeline and vendor list.",
  },
  {
    title: "Multi-Day Coordination",
    price: "From $4,500",
    description: "Planning and on-site support for a multi-day Indian destination wedding. The final scope depends on event count, guest count, venues, and complexity.",
  },
]

const workflow = [
  "Define the ceremonies, quantities, budget, and deadline",
  "Choose a service tier and receive a written scope",
  "Review options or join live shopping sessions",
  "Approve selections, costs, measurements, and milestones",
  "Complete pre-shipping review and carrier documentation",
  "Track delivery and address any covered issue under the signed terms",
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <SeoNav />

      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            Two services · One US-based point of contact
          </p>
          <h1 className="mb-6 font-serif text-5xl font-semibold sm:text-6xl">
            Shop India for your wedding—or plan it in Mexico
          </h1>
          <p className="mx-auto mb-9 max-w-3xl text-lg leading-8 text-white/80">
            CeremonyVerse organizes India shopping and sourcing for US families, and separately plans
            Indian destination weddings in Cancun and Riviera Maya. Couples can hire either service or
            combine both under one written scope.
          </p>
          <Link
            href="/contact/"
            className="inline-flex rounded-full bg-[#c5a059] px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
          >
            Get My Free Outfit Plan
          </Link>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
              Mexico destination weddings
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              Indian wedding planning in Cancun and Riviera Maya
            </h2>
            <p className="text-lg leading-8 text-white/75">
              The Mexico service grew from Bhamini&apos;s firsthand experience coordinating her son&apos;s
              multi-day destination wedding and the vendor relationships built through that process.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {mexicoServices.map((service) => (
              <article key={service.title} className="rounded-2xl border border-white/15 bg-white/5 p-8">
                <h3 className="font-serif text-2xl font-semibold">{service.title}</h3>
                <p className="my-5 font-serif text-4xl text-[#c5a059]">{service.price}</p>
                <p className="leading-7 text-white/75">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link
              href="/indian-wedding-coordination-mexico/"
              className="inline-flex rounded-full bg-[#c5a059] px-7 py-3.5 text-sm font-semibold text-[#1f1f1f]"
            >
              Explore Mexico Planning
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Shopping scope
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">What we can help organize</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <article key={category.title} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <h3 className="mb-5 font-serif text-2xl font-semibold">{category.title}</h3>
                <ul className="space-y-3 text-sm leading-6 text-[#4d403a]">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#7a6841]" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-[#5e4a40]">
            Availability, authenticity documentation, customization, and timelines vary by item and
            vendor. We confirm what can be supported before accepting a paid sourcing scope.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              A defined process
            </p>
            <h2 className="mb-6 font-serif text-4xl font-semibold sm:text-5xl">
              What happens after the consultation
            </h2>
            <ol className="space-y-4">
              {workflow.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-xl border border-[#e6dfd5] bg-[#faf8f5] p-5">
                  <span className="font-serif text-xl text-[#7a6841]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="leading-7 text-[#4d403a]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="rounded-2xl bg-[#1f1f1f] p-8 text-white sm:p-10">
            <h2 className="mb-6 font-serif text-3xl font-semibold">Outside our scope</h2>
            <p className="mb-7 leading-7 text-white/75">
              Clear boundaries protect your wedding and keep CeremonyVerse focused on the work it is
              built to perform.
            </p>
            <ul className="space-y-4 text-sm leading-6 text-white/80">
              <li>Local wedding planning outside the contracted Mexico service area</li>
              <li>Vendor services or venue charges not listed in the CeremonyVerse planning fee</li>
              <li>Uncontracted events or deliverables outside the written Mexico scope</li>
              <li>Unauthorized designer replicas or counterfeit labels</li>
              <li>Guaranteed customs dates, duty amounts, or identical handmade results</li>
            </ul>
            <Link href="/how-it-works/" className="mt-9 inline-flex font-semibold text-[#e8cf9d] underline underline-offset-4">
              Review the full process
            </Link>
          </aside>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Frequently asked
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Know the boundaries before you buy</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {faqItems.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <h3 className="mb-4 font-serif text-2xl font-semibold">{faq.question}</h3>
                <p className="leading-7 text-[#4d403a]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">Not sure which tier fits?</h2>
          <p className="mb-8 text-lg leading-8 text-white/85">
            Bring your ceremony list, location, deadline, party size, and budget. We&apos;ll tell you what is
            realistic for India shopping, Mexico planning, or a combined scope.
          </p>
          <Link href="/contact/" className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">
            Book the Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
