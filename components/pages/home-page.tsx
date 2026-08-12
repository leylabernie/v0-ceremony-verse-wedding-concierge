import Image from "next/image"
import Link from "next/link"
import { SourcingTierGuide } from "@/components/sourcing-tier-guide"
import { destinationPackagePricingNote, mexicoAvailabilityMessage, mexicoPackages } from "@/lib/mexico-packages"
import { destinationFeasibilityPlan } from "@/lib/destination-feasibility-plan"

const serviceGroups = [
  {
    title: "Bride & Groom",
    description:
      "Bridal lehengas, sarees, sherwanis, bandhgalas, reception looks, and accessories selected around your event, budget, and timeline.",
  },
  {
    title: "Wedding Party & Family",
    description:
      "Coordinated bridesmaid, groomsmen, parent, sibling, and guest outfits with one shared palette and an organized measurement process.",
  },
  {
    title: "Jewelry & Ceremony Essentials",
    description:
      "Bridal jewelry, jutties, gifts, welcome-bag items, and ceremony supplies sourced only when the requested item and vendor can be responsibly verified.",
  },
]

const calculatorTools = [
  {
    title: "Budget Calculator",
    description: "Separate event costs from family travel, test the target, and see which cost areas are still missing.",
    href: "/planning-tools/budget/",
    cta: "Calculate My Budget",
  },
  {
    title: "Resort Proposal Calculator",
    description: "Compare two written proposals across known costs, room-block exposure, cultural needs, and unclear terms.",
    href: "/planning-tools/resort-comparison/",
    cta: "Compare Two Resorts",
  },
  {
    title: "Guest & VIP Cost Calculator",
    description: "Estimate family-paid rooms, flights, transfers, welcome items, and the guest-support total.",
    href: "/planning-tools/guest-logistics/",
    cta: "Calculate Guest Costs",
  },
  {
    title: "Shipping & Customs Calculator",
    description: "Estimate the USD landed cost of India-sourced items for delivery across the United States or Canada.",
    href: "/planning-tools/shipping-customs/",
    cta: "Calculate Landed Cost",
  },
]

const destinationHighlights = [
  {
    name: "Cancún",
    href: "/destinations/cancun-indian-wedding/",
    description: "Compare airport access, resort areas, multi-event spaces, food, room blocks, vendor rules, and weather backup.",
  },
  {
    name: "Riviera Maya",
    href: "/destinations/riviera-maya-indian-wedding/",
    description: "Compare airport choice, transfer distance, resort layout, guest mobility, venue variety, production, and complete cost.",
  },
  {
    name: "Los Cabos",
    href: "/destinations/los-cabos-indian-wedding/",
    description: "Compare SJD access, regional location, venue format, guest movement, food, vendors, production, room blocks, and weather backup.",
  },
  {
    name: "Punta Cana",
    href: "/destinations/punta-cana-indian-wedding/",
    description: "Compare PUJ access, guest-entry steps, resorts, cultural and food execution, local vendors, room blocks, and weather planning.",
  },
]

const servicePillars = [
  {
    label: "India shopping & sourcing",
    title: "Wedding wardrobes and essentials, organized remotely",
    description:
      "Source outfits, jewelry, ceremonial items, gifts, and welcome-bag pieces through one documented process, with remote service across the United States and Canada.",
    features: [
      "Bride, groom, wedding-party, and family outfits",
      "Jewelry, gifts, welcome-bag items, and ceremony essentials",
      "Measurements, written approvals, available pre-shipping review, and delivery support",
    ],
    href: "/buy-indian-wedding-outfits-from-india/",
    cta: "Explore India Shopping",
  },
  {
    label: "Destination wedding planning",
    title: "Family coordination with local planning and execution",
    description:
      "Plan a Gujarati or Hindu destination celebration anywhere in Mexico or in Punta Cana through a private scope built around your resort, events, guest count, and priorities.",
    features: [
      "Planning support defined from the beginning",
      "Multi-day timelines and on-site event management",
      "Family and guest coordination included at the selected planning-package level",
    ],
    href: "/indian-wedding-coordination-mexico/",
    cta: "Explore Destination Planning",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Start with a free outfit-plan call",
    description:
      "Share your dates, ceremonies, party size, budget, and inspiration. We identify what is realistic and which level of help fits.",
  },
  {
    number: "02",
    title: "Review options before committing",
    description:
      "Depending on your service tier, you receive curated options or join live video shopping sessions to review the actual piece, fabric, color, and work.",
  },
  {
    number: "03",
    title: "Approve details in writing",
    description:
      "Selections, measurements, costs, and milestones are documented. Custom work begins only after the applicable approval and payment milestone.",
  },
  {
    number: "04",
    title: "Inspect, ship, and track",
    description:
      "We coordinate the applicable pre-shipping review, packing, documents, carrier handoff, and available tracking for delivery across the United States or Canada.",
  },
]

const pricingTiers = [
  {
    name: "Guided Sourcing",
    price: "$799",
    description: "For help with the decisions that are hardest to make remotely.",
    features: [
      "Personalized style and budget brief",
      "Two to four live video shopping sessions",
      "Selection, measurement, and order coordination",
      "Available pre-shipping review against approved references",
    ],
    featured: true,
  },
  {
    name: "Full Bridal Concierge",
    price: "$2,499",
    description: "For end-to-end sourcing across the couple and wedding party.",
    features: [
      "Everything in Guided Sourcing",
      "Bride, groom, and party coordination up to eight people",
      "Centralized measurements and approvals",
      "Shipping and delivery coordination",
    ],
  },
]

const faqs = [
  {
    question: "Does CeremonyVerse plan weddings?",
    answer:
      "Yes. CeremonyVerse offers destination-wedding planning and support for Gujarati and Hindu celebrations across Mexico and in Punta Cana. The private written proposal defines the planning, on-site, family-support, guest, and optional India-sourcing services selected for the wedding.",
  },
  {
    question: "Will I see an item before I buy it?",
    answer:
      "Guided Sourcing and Full Bridal Concierge include live video review when the vendor and item allow it. Custom orders also use written references and approval milestones. We explain any limitation before you commit.",
  },
  {
    question: "Are outfit prices included in the service fee?",
    answer:
      "No. The service fee pays for the level of concierge support shown above. Outfit or item costs, international shipping, and any customs charges are itemized separately before purchase.",
  },
  {
    question: "Can you guarantee an exact fit or identical color on every screen?",
    answer:
      "No remote service can honestly promise that. We reduce risk with detailed measurements, written approvals, video review, and alteration allowance where your signed service terms provide it. Screen settings and handmade production can create small variations.",
  },
]

export function HomePage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <section className="relative min-h-[680px] overflow-hidden">
        <Image
          src="/images/proof/family-destination-baarat.webp"
          alt="Baraat celebration at a family destination wedding in Mexico"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8cf9d]">
              Serving families across the United States &amp; Canada
            </p>
            <h1 className="mb-7 font-serif text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Indian destination wedding planning for U.S. and Canadian families
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Plan a Gujarati or Hindu celebration across Mexico or in Punta Cana with one family-facing coordinator,
              contracted local planning and on-site execution, guest-information organization, practical calculators,
              and optional India sourcing.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={destinationFeasibilityPlan.contactHref}
                className="inline-flex items-center justify-center rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#d6bb7d]"
              >
                Schedule a Free 30-Minute Consultation
              </Link>
              <Link
                href="/planning-tools/"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Use Free Wedding Calculators
              </Link>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/75">
              Your first 30-minute consultation is free · No payment or contract required · The optional $300 written
              feasibility plan is a separate paid service
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6dfd5] bg-white px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-center text-xs leading-5 text-[#6a5b52]">
            Featured: a family destination wedding in Mexico that helped shape CeremonyVerse—not a CeremonyVerse
            client event.
          </p>
          <div className="grid gap-4 text-center text-sm text-[#4d403a] sm:grid-cols-4">
            <p>USA &amp; Canada remote service</p>
            <p>Live video review where available</p>
            <p>Itemized written quotes</p>
            <p>Private scope defined before paid work</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Start with the destination</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Compare the location through the complete wedding plan</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">Each destination guide covers guest access, room blocks, multi-event feasibility, cultural needs, food, production, weather backup, complete cost, and who handles each responsibility.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {destinationHighlights.map((destination) => (
              <article key={destination.href} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <h3 className="font-serif text-3xl font-semibold">Indian wedding in {destination.name}</h3>
                <p className="mt-4 flex-1 leading-7 text-[#4d403a]">{destination.description}</p>
                <Link href={destination.href} className="mt-7 font-semibold text-[#7a6841] underline underline-offset-4">Plan an Indian destination wedding in {destination.name}</Link>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center"><Link href="/destinations/" className="inline-flex rounded-full bg-[#7a6841] px-7 py-3.5 text-sm font-semibold text-white">Compare All Destinations</Link></div>
        </div>
      </section>

      <SourcingTierGuide />

      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Free · private · no email gate</p>
            <h2 className="mb-5 font-serif text-4xl font-semibold !text-white sm:text-5xl">Start with the numbers families usually miss</h2>
            <p className="text-lg leading-8 !text-white/75">
              Enter your own quotes and assumptions. CeremonyVerse does not insert a universal package price or require contact information to show the result.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {calculatorTools.map((tool) => (
              <article key={tool.href} className="flex flex-col rounded-2xl border border-white/15 bg-white/5 p-7 sm:p-8">
                <h3 className="font-serif text-2xl font-semibold !text-white">{tool.title}</h3>
                <p className="mt-3 flex-1 leading-7 !text-white/70">{tool.description}</p>
                <Link href={tool.href} className="mt-7 inline-flex self-start rounded-full bg-[#c5a059] px-6 py-3 text-sm font-semibold !text-[#1f1f1f] transition hover:bg-[#d6bb7d]">
                  {tool.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              One company · Two coordinated services
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              Plan the destination and shop India without managing disconnected teams
            </h2>
            <p className="text-lg leading-8 text-[#4d403a]">
              Choose either service independently, or combine them in one clearly defined proposal when your family needs both.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {servicePillars.map((service) => (
              <article key={service.label} className="flex flex-col rounded-2xl border border-[#d9cfbf] bg-white p-8 sm:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">
                  {service.label}
                </p>
                <h3 className="mb-4 font-serif text-3xl font-semibold">{service.title}</h3>
                <p className="mb-6 leading-7 text-[#4d403a]">{service.description}</p>
                <ul className="mb-8 flex-1 space-y-3 text-sm leading-6 text-[#4d403a]">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span aria-hidden="true" className="text-[#7a6841]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center self-start rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841] transition hover:bg-[#7a6841] hover:text-white"
                >
                  {service.cta}
                </Link>
              </article>
            ))}
          </div>

          <aside className="mt-8 rounded-2xl bg-[#1f1f1f] p-8 text-white sm:p-10">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div className="max-w-4xl">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
                  What shaped CeremonyVerse
                </p>
                <h3 className="mb-4 font-serif text-3xl font-semibold !text-white sm:text-4xl">
                  Firsthand family wedding experience, explained honestly
                </h3>
                <p className="leading-7 !text-white/75">
                  CeremonyVerse was shaped by firsthand family-side involvement in multi-day Indian destination
                  weddings in Mexico. Those private celebrations are not presented as CeremonyVerse client case
                  studies; the experience informs the questions, safeguards, and family support used today.
                </p>
              </div>
              <Link
                href="/about/"
                className="inline-flex items-center justify-center rounded-full bg-[#c5a059] px-6 py-3 text-sm font-semibold !text-[#1f1f1f] transition hover:bg-[#d6bb7d]"
              >
                Read the CeremonyVerse Story
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              What we help you source
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              One organized shopping process for the whole wedding wardrobe
            </h2>
            <p className="text-lg leading-8 text-[#4d403a]">
              The service is built for U.S. and Canadian families who want India&apos;s selection but need one
              U.S.-based contact to organize decisions, approvals, measurements, and shipping responsibilities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceGroups.map((service) => (
              <article key={service.title} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <h3 className="mb-4 font-serif text-2xl font-semibold">{service.title}</h3>
                <p className="leading-7 text-[#4d403a]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
              How it works
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              India shopping: fewer surprises because every decision is visible
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Remote shopping still has risks. Our job is to make those risks clear, document what you
              approve, and keep the process moving.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-2xl border border-white/15 bg-white/5 p-8">
                <p className="mb-5 font-serif text-3xl text-[#c5a059]">{step.number}</p>
                <h3 className="mb-3 font-serif text-2xl font-semibold">{step.title}</h3>
                <p className="leading-7 text-white/75">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Destination-wedding planning
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              Choose the planning and family support you need
            </h2>
            <p className="text-lg leading-8 text-[#4d403a]">
              Package details and starting planning fees are public so you can compare the scope. Your final written
              proposal reflects the destination, dates, events, guest count, staffing, travel, and requested additions.
            </p>
            <p className="mt-5 font-semibold text-[#7a6841]">{mexicoAvailabilityMessage}</p>
          </div>

          <article className="mb-9 rounded-3xl border border-[#7a6841] bg-[#f4eee4] p-7 shadow-sm sm:p-9">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Paid starting plan</p>
                <h3 className="mt-3 font-serif text-3xl font-semibold">{destinationFeasibilityPlan.name} — {destinationFeasibilityPlan.priceLabel}</h3>
                <p className="mt-4 max-w-4xl leading-7 text-[#4d403a]">
                  After the free consultation, turn your own guest count, event schedule, budget scope, travel obligations,
                  and current written proposals into a practical action brief. The fee can be credited toward a
                  CeremonyVerse destination-planning agreement under the published plan terms.
                </p>
              </div>
              <Link
                href={destinationFeasibilityPlan.href}
                className="inline-flex justify-center rounded-full bg-[#7a6841] px-7 py-3.5 text-sm font-semibold text-white"
              >
                See What $300 Includes
              </Link>
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mexicoPackages.map((tier) => (
              <article key={tier.name} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">{tier.category}</p>
                <h3 className="cv-package-title">{tier.name}</h3>
                {tier.priceLabel && <p className="mb-3 font-serif text-3xl font-semibold text-[#1f1f1f]">{tier.priceLabel}</p>}
                <p className="mb-4 text-sm font-semibold text-[#7a6841]">{tier.timeline}</p>
                <p className="mb-7 flex-1 leading-7 text-[#4d403a]">{tier.description}</p>
                <Link
                  href={tier.href}
                  className="inline-flex justify-center rounded-full border border-[#7a6841] px-5 py-3 text-center text-sm font-semibold text-[#7a6841]"
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-[#5e4a40]">{destinationPackagePricingNote}</p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Clear service fees
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              Choose how much help you need
            </h2>
            <p className="text-lg leading-8 text-[#4d403a]">
              Service fees are shown in USD. Products, shipping, insurance, U.S. or Canadian import charges,
              brokerage, and local alterations are separate and shown in writing before purchase approval.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
            {pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  tier.featured
                    ? "border-[#7a6841] bg-[#f4eee4] shadow-lg"
                    : "border-[#e6dfd5] bg-white"
                }`}
              >
                {tier.featured && (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">
                    Recommended starting point
                  </p>
                )}
                <h3 className="font-serif text-2xl font-semibold">{tier.name}</h3>
                <p className="my-5 font-serif text-4xl font-semibold">{tier.price}</p>
                <p className="mb-6 leading-7 text-[#4d403a]">{tier.description}</p>
                <ul className="mb-8 flex-1 space-y-3 text-sm leading-6 text-[#4d403a]">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span aria-hidden="true" className="text-[#7a6841]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white"
                >
                  Discuss My Wedding
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-[#5e4a40]">
            Large parties, unusual items, and compressed timelines may require a custom written quote.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Clear expectations
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              Boundaries that protect your family
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-[#4d403a]">
              You will know what CeremonyVerse is responsible for, what remains with an independent provider,
              and what no remote service can responsibly promise.
            </p>
          </div>
          <div className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8 sm:p-10">
            <h3 className="mb-6 font-serif text-2xl font-semibold">Our scope, stated plainly</h3>
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <p className="mb-3 font-semibold text-[#7a6841]">What we do</p>
                <ul className="space-y-3 text-sm leading-6 text-[#4d403a]">
                  <li>Curate and source requested wedding items</li>
                  <li>Coordinate shopping calls and approvals</li>
                  <li>Organize measurements and order details</li>
                  <li>Coordinate available pre-shipping review, delivery, and tracking</li>
                  <li>Coordinate destination planning through the selected written scope</li>
                  <li>Organize agreed guest, arrival, and family details</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-semibold text-[#7a6841]">What remains outside our scope</p>
                <ul className="space-y-3 text-sm leading-6 text-[#4d403a]">
                  <li>Act as the resort, airline, travel agency, or transfer company</li>
                  <li>Sell unauthorized designer replicas</li>
                  <li>Promise identical handmade results</li>
                  <li>Guarantee customs timing or duty amounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Honest answers before you commit
            </p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Common questions</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
                <h3 className="mb-4 font-serif text-2xl font-semibold">{faq.question}</h3>
                <p className="leading-7 text-[#4d403a]">{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq/" className="font-semibold text-[#7a6841] underline underline-offset-4">
              Read all frequently asked questions
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0dfbd]">
            Start with clarity
          </p>
          <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
            Tell us which path you need—or if you need both
          </h2>
          <p className="mb-8 text-lg leading-8 text-white/85">
            Your first 30-minute consultation is free. We&apos;ll separate the event budget from rooms and travel,
            identify the right destination-planning scope, and explain any paid next step before you decide.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
          >
            Schedule a Free 30-Minute Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
