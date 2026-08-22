import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import {
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
  buildServiceSchema,
  JsonLd,
} from "@/lib/seo"
import { destinationPackagePricingNote, mexicoAvailabilityMessage, mexicoPackages } from "@/lib/mexico-packages"
import {
  destinationFeasibilityCredit,
  destinationFeasibilityPlan,
} from "@/lib/destination-feasibility-plan"

export const metadata = buildMetadata({
  path: "/pricing/",
  title: "Destination Wedding Planning & India Sourcing Pricing",
  description:
    "CeremonyVerse pricing: $4,000 event coordination, $5,500 partial planning, $8,000 full planning, a $300 feasibility plan, and flat-fee India sourcing.",
  keywords:
    "CeremonyVerse pricing, Indian wedding sourcing cost, Cancun Indian wedding planner cost, Riviera Maya wedding planning, Punta Cana Indian wedding planning",
})

const tiers = [
  {
    name: "Guided Sourcing",
    price: "$799",
    numericPrice: 799,
    bestFor: "Best for: one to several important outfits",
    description: "You want live help reviewing options and managing the high-risk steps of a remote order.",
    includes: [
      "Written style, ceremony, and budget brief",
      "Two to four live video shopping sessions",
      "Selection and measurement coordination",
      "Written approvals and order follow-up",
      "Available pre-shipping review against approved references",
      "U.S. or Canada shipping-document and tracking support",
    ],
    excludes: ["Whole-party management beyond the agreed scope", "Products, carrier charges, insurance, duties, taxes, brokerage, or alterations"],
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
      "Consolidated U.S. or Canada order and delivery support",
      "One primary CeremonyVerse contact",
    ],
    excludes: ["Local wedding planning or on-site execution", "Products, carrier charges, insurance, duties, taxes, brokerage, or alterations"],
  },
]

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Wedding Services",
  description:
    "Published destination-wedding planning packages, a $300 feasibility plan, and flat-fee India shopping support for families across the United States and Canada.",
  url: "/pricing/",
  offers: [
    {
      name: destinationFeasibilityPlan.name,
      price: destinationFeasibilityPlan.price,
      description: destinationFeasibilityPlan.description,
    },
    ...mexicoPackages
      .filter((tier): tier is typeof tier & { numericPrice: number } => typeof tier.numericPrice === "number")
      .map((tier) => ({
        name: tier.name,
        price: tier.numericPrice,
        description: tier.description,
      })),
    ...tiers.map((tier) => ({
      name: tier.name,
      price: tier.numericPrice,
      description: tier.description,
    })),
  ],
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Pricing", url: "/pricing/" }])

const faqItems = [
  {
    question: "Does CeremonyVerse charge a percentage of the outfit price?",
    answer:
      "No. The two standard sourcing tiers use the USD flat service fees shown on this page for U.S. and Canadian clients. Product costs, shipping, insurance, customs charges, taxes, brokerage, and alterations are separately itemized before approval.",
  },
  {
    question: "Do the same sourcing plans apply in Canada?",
    answer:
      "Yes. The standard service-tier fees are the same USD amounts for U.S. and Canadian clients. The selected vendor, carrier, and destination determine outside costs. Canadian duty, GST or HST, applicable provincial tax, brokerage, and disbursement charges are not included unless a signed agreement expressly says otherwise.",
  },
  {
    question: "What will my outfits cost?",
    answer:
      "The answer depends on fabric, handwork, customization, quantity, and vendor availability. Because every order differs, we do not promise a universal discount. Your written quote shows the actual options available for your project.",
  },
  {
    question: "Can I start with a free consultation?",
    answer:
      "Yes. Your first 30-minute introductory consultation is free and does not require a contract or payment. The $300 Destination Wedding Feasibility & Action Plan and all planning or sourcing packages are separate paid services. Paid work begins only after you select a scope and approve its written terms.",
  },
  {
    question: "Is the $300 plan fee credited if I continue with CeremonyVerse planning?",
    answer: destinationFeasibilityCredit,
  },
  {
    question: "What happens if my party is larger than eight people?",
    answer:
      "We prepare a custom written scope based on the number of people, ceremonies, items, and timeline. You can review it before deciding whether to proceed.",
  },
  {
    question: "Is wedding planning included?",
    answer:
      "Yes. Published starting fees are $4,000 for Event Coordination & Management, $5,500 for Partial Planning & Coordination, and $8,000 for Full Planning & Design. Each package includes the family and guest coordination listed for that level. The final written proposal reflects the destination, dates, events, guest count, travel, staffing, and complexity. Third-party costs remain separate unless expressly included.",
  },
]

const faqSchema = buildFaqSchema(faqItems)

const planningDecisionRoutes = [
  {
    title: "You are still choosing a destination or resort",
    next: "Start with the free consultation",
    description: "Bring your date range, guest count, ceremony outline, and destination ideas. The first call identifies the next decision without payment or a contract.",
    href: "/contact/?service=mexico&from=pricing-decision-guide",
  },
  {
    title: "You have proposals but need written answers",
    next: "Use the $300 feasibility plan",
    description: "Compare up to two current proposals, normalize guest and budget assumptions, and turn unanswered questions into a practical written action plan.",
    href: destinationFeasibilityPlan.href,
  },
  {
    title: "Your venue and vendors are largely in place",
    next: "Discuss Event Coordination",
    description: "Use a final handover and on-site management scope when your core decisions and contracts are already complete.",
    href: "/contact/?service=mexico&from=pricing-decision-guide-coordination",
  },
  {
    title: "You need ongoing planning from the beginning",
    next: "Discuss Partial or Full Planning",
    description: "Choose a written planning scope based on the dates, event count, guest complexity, local requirements, staffing, and responsibility lines still to be confirmed.",
    href: "/contact/?service=mexico&from=pricing-decision-guide-planning",
  },
]

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
            planning uses published starting fees and a wedding-specific written scope. Products, resorts, venues, vendors, travel, shipping, and customs
            are itemized outside the applicable CeremonyVerse service fee unless the proposal says otherwise.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-white/65">
            CeremonyVerse serves families across the entire United States and Canada. Published service fees are in USD.
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
              Package details and starting fees are public so you can compare the scope. Your final CeremonyVerse
              proposal reflects the dates, destination, events, guest count, staffing, travel, complexity, and additions.
            </p>
            <p className="mt-5 font-semibold text-[#e8cf9d]">{mexicoAvailabilityMessage}</p>
          </div>

          <section className="mb-10 rounded-3xl border border-white/15 bg-white/5 p-7 sm:p-9">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] !text-[#c5a059]">Choose your next conversation</p>
              <h3 className="mt-3 font-serif text-3xl font-semibold !text-[#f8f6f2]">Start with the decision you have in front of you</h3>
              <p className="mt-4 leading-7 !text-[#e7ded3]">These routes help you select the right conversation. They do not replace a wedding-specific written scope, proposal, or third-party quote.</p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {planningDecisionRoutes.map((route) => (
                <article key={route.title} className="flex flex-col rounded-2xl border border-white/15 bg-[#1f1f1f] p-6">
                  <h4 className="font-serif text-2xl font-semibold !text-[#f8f6f2]">{route.title}</h4>
                  <p className="mt-3 text-sm font-semibold !text-[#e8cf9d]">{route.next}</p>
                  <p className="mt-4 flex-1 text-sm leading-6 !text-[#e7ded3]">{route.description}</p>
                  <Link href={route.href} className="mt-6 inline-flex self-start font-semibold !text-[#e8cf9d] underline underline-offset-4">Choose this next step</Link>
                </article>
              ))}
            </div>
          </section>

          <article className="mb-10 rounded-3xl border border-[#c5a059]/50 bg-[#c5a059]/10 p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] !text-[#c5a059]">Paid starting plan</p>
                <h3 className="mt-3 font-serif text-3xl font-semibold !text-[#f8f6f2] sm:text-4xl">
                  {destinationFeasibilityPlan.name}
                </h3>
                <p className="mt-4 font-serif text-5xl font-semibold !text-white">{destinationFeasibilityPlan.priceLabel}</p>
              </div>
              <div>
                <p className="leading-7 !text-[#e7ded3]">{destinationFeasibilityPlan.bestFor}</p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 !text-[#e7ded3] sm:grid-cols-2">
                  {destinationFeasibilityPlan.includes.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="!text-[#c5a059]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 !text-[#e8cf9d]">{destinationFeasibilityCredit}</p>
                <Link
                  href={destinationFeasibilityPlan.href}
                  className="mt-6 inline-flex rounded-full bg-[#c5a059] px-6 py-3 text-sm font-semibold !text-[#1f1f1f]"
                >
                  See the $300 Plan
                </Link>
              </div>
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mexicoPackages.map((tier) => (
              <article key={tier.name} className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-8 text-white">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] !text-[#c5a059]">{tier.category}</p>
                <h3 className="cv-package-title !text-[#f8f6f2]">{tier.name}</h3>
                {tier.priceLabel ? <p className="mt-4 font-serif text-4xl font-semibold !text-white">{tier.priceLabel}</p> : null}
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
          <p className="mt-8 rounded-xl border border-[#c5a059]/40 bg-[#c5a059]/10 p-5 text-sm leading-6 !text-[#e8cf9d]">
            Family and guest coordination are included within the responsibilities shown for each planning package.
            Flights, rooms, transfers, and other independent provider charges remain separate unless expressly included
            in the signed proposal.
          </p>
          <p className="mt-8 text-sm leading-6 !text-white/65">{destinationPackagePricingNote}</p>
        </div>
      </section>

      <section id="india-sourcing" className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              India shopping concierge
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              India sourcing pricing
            </h2>
            <p className="text-lg leading-8 text-[#4d403a]">
              Select the level of research, live shopping, and order coordination your family needs.
              The same USD service tiers apply across the United States and Canada. Products, carrier charges,
              insurance, import charges, brokerage, and alterations remain separate.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
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
                    Recommended starting point
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
                ["Tracked shipping", "Current carrier cost based on weight, dimensions, declared value, destination, service level, and available tracking."],
                ["U.S. customs", "Any duty, government fee, or carrier clearance charge actually assessed; estimates are not guarantees."],
                ["Canada customs and taxes", "Any duty, GST/HST, applicable provincial tax, brokerage, disbursement, or related import charge actually assessed."],
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
            <Link href="/planning-tools/shipping-customs/" className="mt-4 block font-semibold !text-[#e8cf9d] underline underline-offset-4">
              Calculate U.S. or Canada landed cost
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
          <h2 className="mb-5 font-serif text-4xl font-semibold !text-white sm:text-5xl">Your first 30-minute consultation is free</h2>
          <p className="mb-8 text-lg leading-8 text-white/85">
            We&apos;ll review your dates, location, items, quantities, and budget, then tell you which India
            sourcing tier, $300 feasibility plan, or destination-planning package is appropriate. No payment or
            contract is required for the call; any paid next step is presented separately in writing.
          </p>
          <Link href="/contact/" className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">
            Schedule a Free 30-Minute Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
