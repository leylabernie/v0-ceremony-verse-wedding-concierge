import { buildFaqSchema, JsonLd } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { destinationPackagePricingNote, mexicoAvailabilityMessage, mexicoPackages } from "@/lib/mexico-packages"
import { destinationFeasibilityPlan } from "@/lib/destination-feasibility-plan"
// Design: Editorial Proof, Not Pageantry. Preserve the existing charcoal, parchment,
// antique-gold, serif-led CeremonyVerse visual system while helping a prospective bride
// picture the wedding weekend before she is asked to evaluate the planning scope.

const calculatorTools = [
  {
    title: "Budget Calculator",
    description: "Separate event costs from family travel, test the target, and see which cost areas are still missing.",
    href: "/planning-tools/budget-tracker/",
    cta: "Calculate My Budget",
  },
  {
    title: "Resort Proposal Calculator",
    description: "Compare two written proposals across known costs, room-block exposure, cultural needs, and unclear terms.",
    href: "/planning-tools/",
    cta: "Compare Two Resorts",
  },
  {
    title: "Guest & VIP Cost Calculator",
    description: "Estimate family-paid rooms, flights, transfers, welcome items, and the guest-support total.",
    href: "/planning-tools/guest-list/",
    cta: "Calculate Guest Costs",
  },
  {
    title: "Shipping & Customs Calculator",
    description: "Estimate the USD landed cost of India-sourced items for delivery across the United States or Canada.",
    href: "/planning-tools/",
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
    name: "Jamaica",
    href: "/destinations/jamaica-indian-wedding/",
    description: "Compare resort location, airport choice, cultural and food requirements, multi-event spaces, room blocks, and the destination team.",
  },
  {
    name: "Punta Cana",
    href: "/destinations/punta-cana-indian-wedding/",
    description: "Compare PUJ access, guest-entry steps, resorts, cultural and food execution, local vendors, room blocks, and weather planning.",
  },
]

const servicePillars = [
  {
    label: "Destination wedding planning",
    title: "Family coordination with local planning and execution",
    description:
      "Plan a Gujarati or Hindu destination celebration across Mexico, Jamaica, or Punta Cana through a private scope built around your resort, events, guest count, and priorities.",
    features: [
      "Planning support defined from the beginning",
      "Multi-day timelines and on-site event management",
      "Family and guest coordination included at the selected planning-package level",
    ],
    href: "/indian-destination-wedding-planner-mexico/",
    cta: "Explore Destination Planning",
  },
  {
    label: "Optional India wedding-outfit sourcing",
    title: "Add wedding wardrobes when your family needs them",
    description:
      "Source outfits, jewelry, approved gifts, welcome-bag pieces, and related accessories through one documented process, with remote service across the United States and Canada.",
    features: [
      "Bride, groom, wedding-party, and family outfits",
      "Jewelry, approved gifts, welcome-bag pieces, and outfit accessories",
      "Measurements, written approvals, available pre-shipping review, and delivery support",
    ],
    href: "/buy-indian-wedding-outfits-from-india/",
    cta: "Explore India Shopping",
  },
]

const faqs = [
  {
    question: "Does CeremonyVerse plan weddings?",
    answer:
      "Yes. CeremonyVerse offers destination-wedding planning and support for Gujarati and Hindu celebrations across Mexico, Jamaica, and Punta Cana. The private written proposal defines the planning, on-site, family-support, guest, and optional India-sourcing services selected for the wedding.",
  },
  {
    question: "What happens during the free consultation?",
    answer:
      "We review your destination, dates or timeframe, estimated guest count, event plan, budget scope, and the decisions that are currently unclear. The first 30-minute consultation requires no payment or contract.",
  },
  {
    question: "Who handles the work in Mexico, Jamaica, or Punta Cana?",
    answer:
      "CeremonyVerse is the family-facing coordinator. The contracted destination team handles the local planning and on-site scope listed in your private proposal, while resorts and qualified providers control their own bookings and payments.",
  },
  {
    question: "Can India wedding-outfit sourcing be added?",
    answer:
      "Yes. India sourcing is an optional separate service for couples and families who need it. Destination planning stands on its own, and any sourcing scope and outside product or shipping costs are shown separately in writing.",
  },
  {
    question: "What can I expect when planning with CeremonyVerse?",
    answer:
      "You work directly with Mini to organize your resort questions, ceremony plans, guest arrangements, and budget decisions. CeremonyVerse is a new company shaped by firsthand family-wedding experience in Mexico. Your written proposal identifies the work included, planning fees, and destination-team responsibilities. Start with a free 30-minute consultation to discuss whether the service fits your wedding.",
  },
  {
    question: "Are the photos on this site from real CeremonyVerse weddings?",
    answer:
      "Today, the event photography on this site is from the family wedding Mini planned — labeled as such everywhere it appears, because that wedding is the company's origin, not its client list. Founding Family weddings will replace it over the coming year, with each family's written permission. We will never pass off a stock photo or someone else's wedding as client work.",
  },
]

const startingRoutes = [
  {
    step: "00",
    question: "Start here — read the complete guide",
    answer: "The full NRI Gujarati wedding planning guide: destinations, costs, ceremonies, India outfit sourcing, US customs, and the questions to ask before signing a resort proposal. Written by Mini from her firsthand family-wedding experience.",
    href: "/nri-gujarati-wedding-planning-guide/",
    cta: "Read the complete guide",
  },
  {
    step: "01",
    question: "Parents with questions about a destination wedding",
    answer: "A separate guide for NRI Gujarati parents: the family-side concerns, expectations, and the destination-wedding decisions parents weigh before saying yes.",
    href: "/nri-gujarati-parents-guide-destination-wedding/",
    cta: "Read the parents guide",
  },
  {
    step: "02",
    question: "We want the full month-by-month plan",
    answer: "A 12-month NRI Gujarati wedding timeline covering bookings, wardrobes, ceremonies, and travel — month by month, in order.",
    href: "/nri-gujarati-wedding-timeline-12-months/",
    cta: "See the 12-month timeline",
  },
  {
    step: "03",
    question: "We are still choosing a destination",
    answer: "Compare guest travel, event flow, room-block risk, cultural requirements, and weather backup before a resort photo makes the decision for you.",
    href: "/destinations/",
    cta: "Compare destinations",
  },
  {
    step: "04",
    question: "We have dates or resort proposals in hand",
    answer: "Bring the questions that feel unclear. The first conversation helps separate what needs a written answer from what can wait.",
    href: "/before-signing-indian-wedding-resort-proposal/",
    cta: "See the 5 decision questions",
  },
  {
    step: "05",
    question: "We want the plan to feel calmer now",
    answer: "Turn guest count, event flow, budget assumptions, travel obligations, and existing quotes into a clear next-step action brief.",
    href: destinationFeasibilityPlan.href,
    cta: "See the $300 action plan",
  },
]

export function HomePage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="home-faq" data={buildFaqSchema(faqs)} />
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
              Mexico, Jamaica &amp; Punta Cana · Serving families across the United States &amp; Canada
            </p>
            <h1 className="mb-7 font-serif text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Gujarati &amp; Hindu destination weddings in Mexico, Jamaica, and Punta Cana
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Plan your multi-day celebration with someone who has actually done it: Mini planned her
              own family&apos;s four-day Gujarati wedding in Riviera Maya — every resort proposal, every
              ceremony, every guest — and now does the same for families across the USA and Canada.
              Start with a free 30-minute call about your dates, guest count, and biggest planning question.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/schedule/?from=homepage-hero"
                className="inline-flex items-center justify-center rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#d6bb7d]"
              >
                Book your free 30-minute call
              </Link>
              <a
                href="https://wa.me/12153419990?text=Hi%20Mini%2C%20I%20would%20like%20a%20free%20wedding%20consultation.%20Wedding%20timeframe%3A%20__.%20Destination%3A%20__.%20Estimated%20guests%3A%20__.%20My%20main%20question%3A%20__."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp Mini Directly
              </a>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/75">
              Your first 30-minute consultation is free · No payment, contract, or prior approval required
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6dfd5] bg-white px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-center text-xs leading-5 text-[#6a5b52]">
            The Riviera Maya baraat that started CeremonyVerse — planned end to end by Mini for her own family.
          </p>
          <div className="grid gap-4 text-center text-sm text-[#4d403a] sm:grid-cols-4">
            <p>Mini, one family-facing contact</p>
            <p>Gujarati &amp; Hindu focus · satvik &amp; Jain catering confirmed in writing</p>
            <p>Registered Seller of Travel · FL, CA &amp; WA</p>
            <p>United States &amp; Canada family support</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-serif text-4xl">The family weddings behind CeremonyVerse</h2>
        <p className="my-5">These are Mini&apos;s family weddings, not client projects.</p>
        <ul className="grid gap-4 sm:grid-cols-3">{['Hard Rock Hotel Cancún · 2019','Generations Riviera Maya · February 2023','Royalton · 2024'].map(wedding=><li key={wedding} className="rounded-xl border bg-white p-5">{wedding}</li>)}</ul>
        <Link href="/real-weddings/" className="mt-5 inline-block underline">Read about the family weddings</Link>
      </section>
      <section id="founding-families" className="bg-[#f4eee4] px-6 py-12"><div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl">Founding Families: plan directly with Mini</h2>
        <p className="my-4">Your written agreement names who runs each event. Mini either leads on site or coordinates your family while the contracted local team runs the events.</p>
        <Link href="/schedule/?from=founding-families" className="underline">Ask about availability and written planning fees</Link>
      </div></section>
      <section className="border-b border-[#e6dfd5] bg-[#f4eee4] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Free resources, no email wall</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Steal our homework before you ever pay us</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              The complete planning guide, the 12-month timeline, the parents&apos; guide, and the calculators — free, no email wall. If you never hire us, use them anyway. If you do hire us, you&apos;ll already know we do our homework.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {startingRoutes.map((route) => (
              <article key={route.step} className="flex min-h-full flex-col rounded-2xl border border-[#d9cfbf] bg-white p-7 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#7a6841]">{route.step}</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{route.question}</h3>
                <p className="mt-4 flex-1 leading-7 text-[#4d403a]">{route.answer}</p>
                <Link href={route.href} className="mt-7 inline-flex self-start font-semibold text-[#7a6841] underline underline-offset-4 transition hover:text-[#5e4a40]">
                  {route.cta}
                </Link>
              </article>
            ))}
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
          <div className="mt-8 text-center"><Link href="/destinations/" className="inline-flex rounded-full bg-[#7a6841] px-7 py-3.5 text-sm font-semibold text-white">Compare Current Destinations</Link></div>
        </div>
      </section>

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

      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Destination-wedding planning</p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">Choose the planning and family support you need</h2>
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
                  and current written proposals into a practical action brief.
                </p>
                <p className="mt-4 max-w-4xl font-semibold leading-7 text-[#7a6841]">
                  Sign a CeremonyVerse destination-planning contract within 30 days after the written plan is delivered,
                  and the full $300 is credited toward your CeremonyVerse planning service fee.
                </p>
              </div>
              <Link href={destinationFeasibilityPlan.href} className="inline-flex justify-center rounded-full bg-[#7a6841] px-7 py-3.5 text-sm font-semibold text-white">
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
                <Link href={tier.href} className="inline-flex justify-center rounded-full border border-[#7a6841] px-5 py-3 text-center text-sm font-semibold text-[#7a6841]">
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-[#5e4a40]">{destinationPackagePricingNote}</p>
        </div>
      </section>

      <section className="bg-[#f4eee4] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Destination planning first · India sourcing when needed</p>
            <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">Keep the destination plan central, then add India sourcing only if it helps</h2>
            <p className="text-lg leading-8 text-[#4d403a]">
              Destination planning stands on its own. India sourcing is a separate paid service that can be added only when it is useful and explicitly included in your proposal.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            {servicePillars.map((service) => (
              <article key={service.label} className="flex flex-col rounded-2xl border border-[#d9cfbf] bg-white p-8 sm:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">{service.label}</p>
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
                <Link href={service.href} className="inline-flex items-center justify-center self-start rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841] transition hover:bg-[#7a6841] hover:text-white">
                  {service.cta}
                </Link>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Honest answers before you commit</p>
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
            <Link href="/faq/" className="font-semibold text-[#7a6841] underline underline-offset-4">Read all frequently asked questions</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0dfbd]">Start with clarity</p>
          <h2 className="mb-5 font-serif text-4xl font-semibold sm:text-5xl">Tell us where your destination-wedding plan stands</h2>
          <p className="mb-8 text-lg leading-8 text-white/85">
            Your first 30-minute consultation is free. We&apos;ll separate the event budget from rooms and travel,
            identify the right destination-planning scope, and explain any paid next step before you decide.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/schedule/?from=homepage-final" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">
              Book your free 30-minute call
            </Link>
            <a href="https://wa.me/12153419990" className="px-5 py-3 underline">WhatsApp Mini instead</a>
          </div>
        </div>
      </section>
    </main>
  )
}
