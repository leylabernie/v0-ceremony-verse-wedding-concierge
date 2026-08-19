import Image from "next/image"
import Link from "next/link"
import { destinationPackagePricingNote, mexicoAvailabilityMessage, mexicoPackages } from "@/lib/mexico-packages"
import { destinationFeasibilityPlan } from "@/lib/destination-feasibility-plan"

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
    label: "Destination wedding planning",
    title: "Family coordination with local planning and execution",
    description:
      "Plan a Gujarati or Hindu destination celebration across Mexico or Punta Cana through a private scope built around your resort, events, guest count, and priorities.",
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

const proofImages = [
  {
    src: "/images/proof/family-wedding-mandap-couple.webp",
    alt: "Bride and groom beneath a floral mandap at a family destination wedding in Mexico",
    label: "Family wedding in Mexico · not a client project",
    position: "object-[center_35%]",
  },
  {
    src: "/images/proof/prior-outfit-couple.webp",
    alt: "Couple wearing coordinated custom Indian wedding outfits from a completed pre-launch sourcing project",
    label: "Pre-launch outfit sourcing · completed work",
    position: "object-[center_25%]",
  },
  {
    src: "/images/proof/prior-outfit-wedding-party.webp",
    alt: "Wedding party wearing coordinated Indian outfits from a completed pre-launch sourcing project",
    label: "Pre-launch outfit coordination · completed work",
    position: "object-center",
  },
  {
    src: "/images/proof/prior-outfit-groomsmen.webp",
    alt: "Groom and groomsmen wearing coordinated Indian wedding outfits from a completed pre-launch sourcing project",
    label: "Pre-launch groom-party sourcing · completed work",
    position: "object-center",
  },
]

const faqs = [
  {
    question: "Does CeremonyVerse plan weddings?",
    answer:
      "Yes. CeremonyVerse offers destination-wedding planning and support for Gujarati and Hindu celebrations across Mexico and Punta Cana. The private written proposal defines the planning, on-site, family-support, guest, and optional India-sourcing services selected for the wedding.",
  },
  {
    question: "What happens during the free consultation?",
    answer:
      "We review your destination, dates or timeframe, estimated guest count, event plan, budget scope, and the decisions that are currently unclear. The first 30-minute consultation requires no payment or contract.",
  },
  {
    question: "Who handles the work in Mexico or Punta Cana?",
    answer:
      "CeremonyVerse is the family-facing coordinator. The contracted destination team handles the local planning and on-site scope listed in your private proposal, while resorts and qualified providers control their own bookings and payments.",
  },
  {
    question: "Can India wedding-outfit sourcing be added?",
    answer:
      "Yes. India sourcing is an optional separate service for couples and families who need it. Destination planning stands on its own, and any sourcing scope and outside product or shipping costs are shown separately in writing.",
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
              Mexico &amp; Punta Cana · Serving families across the United States &amp; Canada
            </p>
            <h1 className="mb-7 font-serif text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Gujarati &amp; Hindu destination weddings in Mexico and Punta Cana
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Bring a multi-day celebration together through one family-facing coordinator, culturally informed
              planning, an experienced destination team, and on-site execution defined for your wedding.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/?service=mexico&from=homepage-hero"
                className="inline-flex items-center justify-center rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#d6bb7d]"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/indian-destination-wedding-planner-mexico/"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Destination Planning
              </Link>
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
            The featured photograph shows a family destination wedding in Mexico that helped shape CeremonyVerse—not
            a CeremonyVerse client event.
          </p>
          <div className="grid gap-4 text-center text-sm text-[#4d403a] sm:grid-cols-4">
            <p>Gujarati &amp; Hindu focus</p>
            <p>Mexico &amp; Punta Cana planning</p>
            <p>Mexico City-based local execution</p>
            <p>Optional India outfit sourcing</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6dfd5] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Experience you can see</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Real family experience and completed sourcing work</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              CeremonyVerse was shaped by firsthand involvement in three multi-day Indian family weddings in Mexico.
              The photographs below are labeled clearly so family experience and pre-launch outfit-sourcing work are
              never presented as CeremonyVerse destination-planning client projects.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {proofImages.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-2xl border border-[#e6dfd5] bg-[#faf8f5]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e6dfd5]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-cover ${photo.position}`}
                  />
                </div>
                <figcaption className="p-4 text-sm font-semibold leading-6 text-[#4d403a]">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Family experience</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">Three Mexico wedding journeys</h3>
              <p className="mt-4 leading-7 text-[#4d403a]">See the firsthand family wedding experiences that shaped the questions, safeguards, and family support used today.</p>
              <Link href="/real-weddings/" className="mt-6 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">See the family experience</Link>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Public customer feedback</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">Independent review profile</h3>
              <p className="mt-4 leading-7 text-[#4d403a]">Read feedback published independently on Trustpilot. CeremonyVerse does not convert these reviews into self-awarded website ratings.</p>
              <a href="https://www.trustpilot.com/review/ceremonyverse.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">Read CeremonyVerse reviews on Trustpilot</a>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Clear planning relationship</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">One family contact, experienced local execution</h3>
              <p className="mt-4 leading-7 text-[#4d403a]">See how CeremonyVerse, the destination team, resorts, and providers work together before you select a paid scope.</p>
              <Link href="/how-it-works/" className="mt-6 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">Review the complete process</Link>
            </article>
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

      <section className="bg-white px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">One plan, clear owners</p>
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">Know who handles each part of the wedding</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">Your written scope connects the teams without blurring legal, booking, payment, or delivery responsibilities.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["CeremonyVerse", "Your family-facing coordinator for priorities, approvals, decision records, agreed guest information, and the selected planning or sourcing scope."],
              ["Contracted destination team", "The destination planning and on-site team responsible for the local work specifically listed in your private proposal."],
              ["Resorts and qualified providers", "The organizations that issue their own contracts and control room, travel, transfer, venue, vendor, and other third-party bookings and payments."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-[#4d403a]">{description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-[#5e4a40]">
            The final contract identifies included work, exclusions, fees, payment milestones, approvals, change rules,
            and outside costs before paid planning starts.
          </p>
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
          <Link href="/contact/?service=mexico&from=homepage-final" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
