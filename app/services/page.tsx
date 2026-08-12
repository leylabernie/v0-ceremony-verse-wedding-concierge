import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
  buildServiceSchema,
  JsonLd,
} from "@/lib/seo"
import { mexicoAvailabilityMessage, mexicoPackages } from "@/lib/mexico-packages"

export const metadata = buildMetadata({
  path: "/services/",
  title: "Indian Wedding Shopping & Destination Planning Services",
  description:
    "CeremonyVerse offers India wedding shopping plus destination planning, family support, and on-site coordination across Mexico, Jamaica, and Punta Cana.",
  keywords:
    "Indian wedding shopping concierge, bridal lehenga sourcing, Cancun Indian wedding planning, Riviera Maya Indian wedding planner, Punta Cana Indian wedding planning, NRI wedding shopping",
})

const serviceSchema = buildServiceSchema({
  name: "Indian Wedding Shopping and Destination Planning",
  description:
    "U.S.-based India sourcing for families across the United States and Canada, plus destination-wedding planning, on-site coordination, and family support across Mexico, Jamaica, and Punta Cana.",
  url: "/services/",
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
      "Yes. CeremonyVerse offers event coordination, partial planning, and full planning across Mexico, Jamaica, and Punta Cana. The Pricing page compares the published starting fees and scope, while the final written proposal identifies the selected planning, on-site, family-support, guest, and optional India-sourcing services.",
  },
  {
    question: "Are product and shipping costs included in the service fee?",
    answer:
      "No. The USD service fee covers the concierge work described in your tier. Product costs, international shipping, insurance, U.S. or Canadian customs charges, taxes, brokerage, and local alterations are quoted separately and require approval.",
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

const workflow = [
  "Define the ceremonies, quantities, budget, and deadline",
  "Choose a service tier and receive a written scope",
  "Review options or join live shopping sessions",
  "Approve selections, costs, measurements, and milestones",
  "Complete any in-scope pre-shipping review and carrier documentation",
  "Coordinate available tracking and follow the signed remedy terms for any covered issue",
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
            Serving families across the United States &amp; Canada
          </p>
          <h1 className="mb-6 font-serif text-5xl font-semibold sm:text-6xl">
            Shop India for your wedding—or plan your destination celebration
          </h1>
          <p className="mx-auto mb-9 max-w-3xl text-lg leading-8 text-white/80">
            CeremonyVerse organizes India shopping for families throughout the United States and Canada and offers
            destination planning and on-site coordination across Mexico, Jamaica, and Punta Cana. One written proposal defines the selected
            planning, family-support, guest, and optional India-sourcing services.
          </p>
          <p className="mx-auto mb-7 max-w-3xl text-sm leading-6 text-[#e8cf9d]">
            Your first 30-minute consultation is free. No payment or contract is required for the call.
          </p>
          <Link
            href="/contact/"
            className="inline-flex rounded-full bg-[#c5a059] px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
          >
            Schedule a Free 30-Minute Consultation
          </Link>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
              Destination weddings
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              Local planning and family support in one organized offering
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Review the available levels of help here, then compare all published package details and prices on the
              Pricing page. Your written CeremonyVerse proposal is based on your dates, events, guest count, location,
              and the support your family needs.
            </p>
            <p className="mt-5 font-semibold text-[#e8cf9d]">{mexicoAvailabilityMessage}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mexicoPackages.map((service) => (
              <article key={service.name} className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#c5a059]">{service.category}</p>
                <h3 className="cv-package-title !text-[#f8f6f2]">{service.name}</h3>
                <p className="mb-4 text-sm font-semibold !text-[#e8cf9d]">{service.timeline}</p>
                <p className="mb-6 flex-1 leading-7 text-white/75">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex justify-center rounded-full border border-[#c5a059] px-5 py-3 text-center text-sm font-semibold !text-[#f8f6f2]"
                >
                  {service.cta}
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing/#mexico-concierge"
              className="inline-flex rounded-full bg-[#c5a059] px-7 py-3.5 text-sm font-semibold text-[#1f1f1f]"
            >
              Compare Planning Pricing
            </Link>
            <Link
              href="/indian-wedding-coordination-mexico/"
              className="inline-flex rounded-full border border-[#c5a059] px-7 py-3.5 text-sm font-semibold !text-[#f8f6f2]"
            >
              Explore Destination Planning
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Optional local additions</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Guest experiences and event logistics, quoted separately</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              When requested, the destination team can seek written third-party options for permitted fire performances,
              water-drum entertainment, and golf-cart mobility or event logistics. These are additions—not free package inclusions.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Fire performances", "Subject to venue approval, performer insurance, fire and safety rules, permits where required, weather, location, and a written production quote."],
              ["Water-drum entertainment", "Subject to resort approval, performer availability, sound and staging rules, setup requirements, access, and a written quote."],
              ["Golf-cart logistics", "Subject to resort rules, authorized operators, passenger capacity, routes, accessibility needs, insurance, timing, and a written transport or rental quote."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-[#d9cfbf] bg-white p-8">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-[#4d403a]">{description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-6 text-[#5e4a40]">
            Availability is never guaranteed. The resort or venue, provider, insurer, and applicable authorities control
            approval; the signed proposal identifies the responsible party, price, payment terms, cancellation rules, and backup.
          </p>
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
              <li>Third-party charges not included in the signed CeremonyVerse proposal</li>
              <li>Resort, venue, vendor, travel, or transfer promises outside the assigned scope</li>
              <li>Booking or deposits without the couple&apos;s written approval</li>
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
            realistic for India shopping, destination planning, or family-side support during your free first
            30-minute consultation. Any paid next step is quoted separately in writing.
          </p>
          <Link href="/contact/" className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">
            Schedule a Free 30-Minute Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
