import Image from "next/image"
import Link from "next/link"
import { mexicoAvailabilityMessage, mexicoPackages } from "@/lib/mexico-packages"

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
  {
    title: "Mexico Wedding Concierge",
    description:
      "Full, partial, and day-of Mexico wedding planning with optional family concierge, guest, arrival, and India-sourcing support.",
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
      "We coordinate the pre-shipping review, packing, documentation, carrier handoff, and tracking through delivery to your US address.",
  },
]

const pricingTiers = [
  {
    name: "Style Guide & Vendor List",
    price: "$249",
    description: "For families comfortable placing and managing their own orders.",
    features: [
      "30-minute consultation",
      "Personalized style and budget brief",
      "Curated starting options and vendor guidance",
      "One written follow-up",
    ],
  },
  {
    name: "Guided Sourcing",
    price: "$799",
    description: "For help with the decisions that are hardest to make remotely.",
    features: [
      "Everything in the Style Guide tier",
      "Two to four live video shopping sessions",
      "Selection, measurement, and order coordination",
      "Pre-shipping quality review",
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
      "Yes. CeremonyVerse offers full planning, partial planning, and day-of coordination for Mexico destination weddings, delivered with qualified Mexico-based planning professionals. Family concierge, guest, arrival, and India-sourcing support can be included in the private written proposal.",
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
          src="/images/hero-lehenga.webp"
          alt="Red bridal lehenga illustrating Indian wedding outfit sourcing"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8cf9d]">
              India shopping concierge · Mexico wedding concierge
            </p>
            <h1 className="mb-7 font-serif text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Shop India. Plan Mexico. One organized wedding partner.
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              CeremonyVerse helps US families source wedding outfits and essentials from India and
              offers Mexico wedding planning, on-site coordination, family concierge, guest support,
              and arrival services through one private proposal.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#d6bb7d]"
              >
                Get My Free Outfit Plan
              </Link>
              <Link
                href="/how-it-works/"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Compare Both Services
              </Link>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/75">
              Free 30-minute consultation · No payment or contract required for the call
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6dfd5] bg-white px-6 py-6">
        <div className="mx-auto grid max-w-6xl gap-4 text-center text-sm text-[#4d403a] sm:grid-cols-4">
          <p>US phone, email & accountability</p>
          <p>Live video review where available</p>
          <p>Itemized written quotes</p>
          <p>Mexico-based planning execution</p>
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
              The service is built for families who want India&apos;s selection but need a reliable US-based
              point of contact to organize decisions, approvals, measurements, and shipping.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              Mexico wedding concierge
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              Choose the Mexico planning and family support you need
            </h2>
            <p className="text-lg leading-8 text-[#4d403a]">
              Package details are public so you can compare the scope. Pricing stays private and is
              shared only after we understand your dates, events, guest count, and priorities.
            </p>
            <p className="mt-5 font-semibold text-[#7a6841]">{mexicoAvailabilityMessage}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mexicoPackages.map((tier) => (
              <article key={tier.name} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">{tier.category}</p>
                <h3 className="cv-package-title">{tier.name}</h3>
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
              Item costs, shipping, and customs are separate. They are shown in writing before you
              approve a purchase.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
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
                    Most hands-on starting point
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
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Why Bhamini built CeremonyVerse
            </p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">
              Built from family wedding experience—not invented case studies
            </h2>
            <p className="mb-5 text-lg leading-8 text-[#4d403a]">
              Bhamini organized Indian outfits and ceremony details for two multi-day weddings in her
              own family, including an interfaith celebration in New Jersey and a destination wedding
              in Mexico. Those were family experiences, not paid client engagements.
            </p>
            <p className="leading-7 text-[#4d403a]">
              CeremonyVerse turns those lessons into two defined services: India shopping and sourcing
              for US families, plus Mexico wedding planning and family concierge delivered with qualified
              local planning professionals. Every responsibility is confirmed in the private proposal.
            </p>
            <Link href="/about/" className="mt-7 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">
              Read Bhamini&apos;s story
            </Link>
          </div>
          <div className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8 sm:p-10">
            <h3 className="mb-6 font-serif text-2xl font-semibold">Two services with clear boundaries</h3>
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <p className="mb-3 font-semibold text-[#365c45]">We do</p>
                <ul className="space-y-3 text-sm leading-6 text-[#4d403a]">
                  <li>Curate and source requested wedding items</li>
                  <li>Coordinate shopping calls and approvals</li>
                  <li>Organize measurements and order details</li>
                  <li>Support inspection, shipping, and tracking</li>
                  <li>Offer full, partial, and day-of Mexico planning</li>
                  <li>Organize agreed guest, arrival, and family details</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-semibold text-[#8b3f3f]">We do not</p>
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
            In 30 minutes, we&apos;ll separate the event budget from rooms and travel, identify the right
            Mexico planning package, and discuss only the extra support your family actually needs.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]"
          >
            Book My Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
