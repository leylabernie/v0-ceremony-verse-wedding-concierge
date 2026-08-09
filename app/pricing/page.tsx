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
  path: "/pricing/",
  title: "CeremonyVerse Pricing | India Sourcing & Destination Planning",
  description:
    "Compare CeremonyVerse India sourcing fees and private-proposal destination planning and family support across Mexico and in Punta Cana.",
  keywords:
    "CeremonyVerse pricing, Indian wedding sourcing cost, Cancun Indian wedding planner cost, Riviera Maya wedding planning, Punta Cana Indian wedding planning",
})

const tiers = [
  {
    name: "Style Guide & Vendor List",
    price: "$249",
    numericPrice: 249,
    bestFor: "Best for: self-directed families",
    description: "You want a researched starting point but will contact vendors, order, and ship independently.",
    includes: [
      "One 30-minute consultation",
      "Written style, ceremony, and budget brief",
      "Curated starting options and vendor guidance",
      "One written clarification round",
    ],
    excludes: ["Live shopping sessions", "Vendor/order management", "Inspection or shipping coordination"],
  },
  {
    name: "Guided Sourcing",
    price: "$799",
    numericPrice: 799,
    bestFor: "Best for: one to several important outfits",
    description: "You want live help reviewing options and managing the high-risk steps of a remote order.",
    includes: [
      "Everything in Style Guide",
      "Two to four live video shopping sessions",
      "Selection and measurement coordination",
      "Written approvals and order follow-up",
      "Pre-shipping quality review",
      "Shipping-document and tracking support",
    ],
    excludes: ["Whole-party management beyond the agreed scope", "Product, shipping, or duty costs"],
    featured: true,
  },
  {
    name: "Full Bridal Concierge",
    price: "$2,499",
    numericPrice: 2499,
    bestFor: "Best for: couple plus wedding party",
    description: "You want one organized shopping process for the bride, groom, and party of up to eight people.",
    includes: [
      "Everything in Guided Sourcing",
      "Bride and groom wardrobe coordination",
      "Wedding-party coordination up to eight people",
      "Centralized measurements and approvals",
      "Consolidated order and delivery support",
      "One primary CeremonyVerse contact",
    ],
    excludes: ["Local wedding planning or on-site execution", "Product, shipping, or duty costs"],
  },
]

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Indian Wedding Sourcing Services",
  description:
    "Flat-fee India shopping concierge tiers and private-proposal destination-planning support for US families.",
  url: "/pricing/",
  offers: tiers.map((tier) => ({
    name: tier.name,
    price: tier.numericPrice,
    description: tier.description,
  })),
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Pricing", url: "/pricing/" }])

const faqItems = [
  {
    question: "Does CeremonyVerse charge a percentage of the outfit price?",
    answer:
      "No. The three standard sourcing tiers use the flat service fees shown on this page. Product costs, shipping, and any customs charges are separately itemized before you approve them.",
  },
  {
    question: "What will my outfits cost?",
    answer:
      "The answer depends on fabric, handwork, customization, quantity, and vendor availability. Because every order differs, we do not promise a universal discount. Your written quote shows the actual options available for your project.",
  },
  {
    question: "Can I start with a free consultation?",
    answer:
      "Yes. The 30-minute consultation is free and does not require a contract or payment. Paid work begins only after you select a scope and approve its written terms.",
  },
  {
    question: "What happens if my party is larger than eight people?",
    answer:
      "We prepare a custom written scope based on the number of people, ceremonies, items, and timeline. You can review it before deciding whether to proceed.",
  },
  {
    question: "Is wedding planning included?",
    answer:
      "Yes. CeremonyVerse offers Full Planning & Design, Partial Planning & Coordination, and Day-of Coordination & Management across Mexico and in Punta Cana. Family communication, guest support, and optional India sourcing can be included in the private written proposal.",
  },
]

const faqSchema = buildFaqSchema(faqItems)

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <SeoNav />

      <section className="bg-[#1f1f1f] px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            Flat service fees
          </p>
          <h1 className="mb-6 font-serif text-5xl font-semibold !text-white sm:text-6xl">
            Pay for the level of help you need
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/80">
            India sourcing uses flat service fees instead of a percentage of the outfit price. Destination
            planning uses a private scope. Products, resorts, venues, vendors, travel, shipping, and customs
            are itemized outside the applicable CeremonyVerse service fee unless the proposal says otherwise.
          </p>
        </div>
      </section>

      <section id="mexico-concierge" className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
              Destination wedding planning
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold !text-[#f8f6f2] sm:text-5xl">
              Choose the level of planning and family support you need
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Package details are public so you can compare the scope. Pricing is shared only in a private
              CeremonyVerse proposal after we understand your dates, events, guest count, and priorities.
            </p>
            <p className="mt-5 font-semibold text-[#e8cf9d]">{mexicoAvailabilityMessage}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mexicoPackages.map((tier) => (
              <article key={tier.name} className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-8 text-white">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#c5a059]">{tier.category}</p>
                <h3 className="cv-package-title !text-[#f8f6f2]">{tier.name}</h3>
                <p className="my-5 text-sm font-semibold !text-[#e8cf9d]">{tier.timeline}</p>
                <p className="mb-2 text-sm font-semibold !text-[#e8cf9d]">{tier.bestFor}</p>
                <p className="mb-7 leading-7 !text-[#e7ded3]">{tier.description}</p>
                <h4 className="mb-3 font-semibold !text-[#f8f6f2]">Included</h4>
                <ul className="mb-7 space-y-3 text-sm leading-6 !text-[#e7ded3]">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3"><span className="!text-[#c5a059]">✓</span><span className="!text-[#e7ded3]">{item}</span></li>
                  ))}
                </ul>
                <h4 className="mb-3 font-semibold !text-[#f8f6f2]">Not included</h4>
                <ul className="mb-8 flex-1 space-y-3 text-sm leading-6 !text-[#e7ded3]">
                  {tier.excludes.map((item) => (
                    <li key={item} className="flex gap-3"><span className="!text-[#e8cf9d]">—</span><span className="!text-[#e7ded3]">{item}</span></li>
                  ))}
                </ul>
                <Link href={tier.href} className="inline-flex justify-center rounded-full bg-[#c5a059] px-6 py-3.5 text-center text-sm font-semibold !text-[#1f1f1f]">
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              India shopping concierge
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              Flat-fee India sourcing tiers
            </h2>
            <p className="text-lg leading-8 text-[#4d403a]">
              Select the level of research, live shopping, and order coordination your family needs.
              Product, shipping, and customs costs remain separate.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-8 sm:p-9 ${
                  tier.featured
                    ? "border-[#7a6841] bg-[#f4eee4] shadow-xl"
                    : "border-[#e6dfd5] bg-white"
                }`}
              >
                {tier.featured && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">
                    Most hands-on starting point
                  </p>
                )}
                <h2 className="font-serif text-3xl font-semibold">{tier.name}</h2>
                <p className="my-5 font-serif text-5xl font-semibold">{tier.price}</p>
                <p className="mb-2 text-sm font-semibold text-[#7a6841]">{tier.bestFor}</p>
                <p className="mb-7 leading-7 text-[#4d403a]">{tier.description}</p>

                <h3 className="mb-3 font-semibold">Included</h3>
                <ul className="mb-7 space-y-3 text-sm leading-6 text-[#4d403a]">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#365c45]" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mb-3 font-semibold">Not included</h3>
                <ul className="mb-8 flex-1 space-y-3 text-sm leading-6 text-[#4d403a]">
                  {tier.excludes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#8b3f3f]" aria-hidden="true">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full bg-[#7a6841] px-6 py-3.5 text-sm font-semibold text-white"
                >
                  Discuss This Tier
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Every quote separates the costs
            </p>
            <h2 className="mb-6 font-serif text-4xl font-semibold sm:text-5xl">
              What you pay outside the service fee
            </h2>
            <p className="mb-7 text-lg leading-8 text-[#4d403a]">
              These amounts depend on the item and shipment. Your quote separates them so you can
              review the service fee and outside costs before approving paid work.
            </p>
            <div className="space-y-4">
              {[
                ["Products", "The approved outfit, jewelry, gift, or ceremony-item price from the selected vendor."],
                ["Shipping", "Carrier cost based on weight, dimensions, declared value, destination, and service level."],
                ["Customs", "Any duty or fee actually assessed by US customs or the carrier; estimates are not guarantees."],
                ["Local alterations", "If needed, unless your signed service terms specifically provide an alteration allowance."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-xl border border-[#e6dfd5] bg-[#faf8f5] p-5">
                  <h3 className="mb-2 font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-[#4d403a]">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl bg-[#1f1f1f] p-8 text-white sm:p-10">
            <h2 className="mb-5 font-serif text-3xl font-semibold !text-[#f8f6f2]">Before any paid work starts</h2>
            <ul className="space-y-5 text-sm leading-6 text-white/80">
              <li className="!text-white/80">You receive a written description of the selected tier or custom scope.</li>
              <li className="!text-white/80">You see which costs are fixed, estimated, or dependent on later selection.</li>
              <li className="!text-white/80">You review payment milestones, cancellation terms, and covered remedies.</li>
              <li className="!text-white/80">You can ask questions before signing or paying.</li>
            </ul>
            <Link href="/terms/" className="mt-8 inline-flex font-semibold !text-[#e8cf9d] underline underline-offset-4">
              Review website terms
            </Link>
          </aside>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Pricing FAQ</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Clear answers before you pay</h2>
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
          <h2 className="mb-5 font-serif text-4xl font-semibold !text-white sm:text-5xl">Start with the free call</h2>
          <p className="mb-8 text-lg leading-8 text-white/85">
            We&apos;ll review your dates, location, items, quantities, and budget, then tell you which India
            sourcing tier, destination-planning package, or family-support scope fits. No payment is required for the consultation.
          </p>
          <Link href="/contact/" className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">
            Book My Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
