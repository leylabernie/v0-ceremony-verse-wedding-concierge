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

const roleBoundaries = [
  {
    title: "Your family & officiant",
    description: "Keep ceremony authority, cultural choices, and final family decisions.",
  },
  {
    title: "Mini & CeremonyVerse",
    description: "Organize the agreed family-facing planning scope: priorities, approvals, shared information, and handoffs.",
  },
  {
    title: "Independent local providers",
    description: "Carry only the local planning and on-site tasks identified in their own written scope.",
  },
  {
    title: "Resorts & qualified providers",
    description: "Issue their own contracts and control their bookings, fees, and delivery responsibilities.",
  },
]

const proofPrinciples = [
  {
    title: "Family experience is labelled",
    description: "Family wedding images are never presented as CeremonyVerse client projects.",
  },
  {
    title: "Client stories require permission",
    description: "A future testimonial or case study appears only with the real client’s documented approval.",
  },
  {
    title: "Independent reviews stay independent",
    description: "Public reviews remain on their original platform instead of being recreated as marketing copy.",
  },
]

const startingRoutes = [
  {
    step: "01",
    question: "We are still choosing a destination",
    answer: "Compare guest travel, event flow, room-block risk, cultural requirements, and weather backup before a resort photo makes the decision for you.",
    href: "/destinations/",
    cta: "Compare destinations",
  },
  {
    step: "02",
    question: "We have dates or resort proposals in hand",
    answer: "Bring the questions that feel unclear. The first conversation helps separate what needs a written answer from what can wait.",
    href: "/before-signing-indian-wedding-resort-proposal/",
    cta: "Use the 27-question checklist",
  },
  {
    step: "03",
    question: "We want the plan to feel calmer now",
    answer: "Turn guest count, event flow, budget assumptions, travel obligations, and existing quotes into a clear next-step action brief.",
    href: destinationFeasibilityPlan.href,
    cta: "See the $300 action plan",
  },
]

const weddingWeekMoments = [
  {
    eyebrow: "Arrival & welcome",
    title: "Guests should feel considered before the first event.",
    description: "The early questions—arrivals, room timing, welcome details, family groupings, and the first shared evening—shape the ease of the entire weekend.",
    src: "/images/proof/family-destination-baarat.webp",
    alt: "Family members celebrating at a destination wedding in Mexico",
    note: "Family wedding in Mexico · shared as inspiration, not a CeremonyVerse client event.",
    position: "object-[58%_center]",
  },
  {
    eyebrow: "Ceremony & tradition",
    title: "Keep the ceremony yours; make the practical path visible.",
    description: "Family and officiant authority stay where they belong while timing, venue needs, guest movement, and on-site responsibilities become clear around each moment.",
    src: "/images/proof/family-wedding-mandap-couple.webp",
    alt: "Couple beneath a floral mandap at a family destination wedding in Mexico",
    note: "Family wedding in Mexico · shared as inspiration, not a CeremonyVerse client event.",
    position: "object-[center_35%]",
  },
  {
    eyebrow: "Celebration & family style",
    title: "Let the joyful parts feel effortless when they arrive.",
    description: "A multi-day celebration works best when the decisions, guest information, handoffs, and visual details are connected before wedding week begins.",
    src: "/images/proof/prior-outfit-wedding-party.webp",
    alt: "Wedding party wearing coordinated Indian outfits from a completed pre-launch sourcing project",
    note: "Completed pre-launch outfit coordination · shown as inspiration, not destination-planning client work.",
    position: "object-center",
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
              Bring the celebration your family is picturing. Mini keeps the next decisions, family handoffs, and
              wedding-week information clear, with a Mexico City-based destination team for the local and on-site scope
              defined in writing for your wedding.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/?service=mexico&from=homepage-hero"
                className="inline-flex items-center justify-center rounded-full bg-[#c5a059] px-7 py-4 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#d6bb7d]"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/before-signing-indian-wedding-resort-proposal/"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Use the 27-Question Checklist
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
            <p>Mini, one family-facing contact</p>
            <p>Gujarati &amp; Hindu focus</p>
            <p>Local scope defined in writing</p>
            <p>United States &amp; Canada family support</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6dfd5] bg-[#f4eee4] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Start with the question in front of you</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">The next decision can make the whole plan feel lighter</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              You do not need a perfect brief before asking for help. Start where the uncertainty is most present, then move through the rest of the celebration with a clearer view.
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

      <section className="border-b border-[#e6dfd5] bg-[#f4eee4] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Before you commit</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Who does what, in one clear view</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              Your private proposal connects the work without blurring ceremony authority, booking control, or on-site delivery responsibilities.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roleBoundaries.map((role, index) => (
              <article key={role.title} className="rounded-2xl border border-[#d9cfbf] bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#7a6841]">0{index + 1}</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{role.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#4d403a]">{role.description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-6 text-[#5e4a40]">
            The final written scope identifies the included work, exclusions, fees, payment milestones, approvals, and outside costs before paid planning begins.
          </p>
        </div>
      </section>

      <section className="border-b border-[#e6dfd5] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Picture the wedding week</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">The celebration should feel like yours. The plan should hold it together.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#4d403a]">
              Every destination wedding has its own rhythm. CeremonyVerse makes the decision path, guest information, and working handoffs visible so you can stay present for the moments that matter.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {weddingWeekMoments.map((moment) => (
              <figure key={moment.eyebrow} className="group overflow-hidden rounded-2xl border border-[#e6dfd5] bg-[#faf8f5]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e6dfd5]">
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover transition duration-500 motion-safe:group-hover:scale-[1.03] ${moment.position}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">{moment.eyebrow}</p>
                </div>
                <figcaption className="p-6">
                  <h3 className="font-serif text-2xl font-semibold">{moment.title}</h3>
                  <p className="mt-3 leading-7 text-[#4d403a]">{moment.description}</p>
                  <p className="mt-5 text-xs leading-5 text-[#6a5b52]">{moment.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link href="/how-it-works/" className="inline-flex rounded-full border border-[#7a6841] px-7 py-3.5 text-sm font-semibold text-[#7a6841] transition hover:bg-[#7a6841] hover:text-white">
              See how the planning path works
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6dfd5] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Client proof, shared carefully</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">A truthful place for future client stories</h2>
            <p className="mt-5 text-lg leading-8 text-[#4d403a]">
              CeremonyVerse is building its public proof with care. Family experience, earlier sourcing work, client testimonials, and case studies are always labelled by what they are—not used interchangeably.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Family experience</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">Mini, founder and destination-wedding concierge</h3>
              <p className="mt-4 leading-7 text-[#4d403a]">Based in Philadelphia, Mini keeps family priorities, approvals, guest information, and decision records connected through one named point of contact.</p>
              <Link href="/about/" className="mt-6 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">Meet Mini and read the background</Link>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">How the process was shaped</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">Three Mexico wedding journeys</h3>
              <p className="mt-4 leading-7 text-[#4d403a]">See the family wedding experiences that shaped the questions, safeguards, and family support used today. They are labeled as family events, not client projects.</p>
              <Link href="/real-weddings/" className="mt-6 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">See the family experience</Link>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Clear role boundaries</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">Local scope is visible before payment</h3>
              <p className="mt-4 leading-7 text-[#4d403a]">Local planning and on-site responsibilities are listed in your private proposal so you can see the working relationship before paying.</p>
              <Link href="/how-it-works/" className="mt-6 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">Review the complete process</Link>
            </article>
          </div>
          <div className="mt-8 rounded-3xl border border-[#d7c7a4] bg-[#f4eee4] p-7 sm:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Proof standards</p>
              <h3 className="mt-3 font-serif text-3xl font-semibold">Testimonials and case studies will be earned, not invented</h3>
              <p className="mt-4 leading-7 text-[#4d403a]">Client quotes, event stories, names, images, and outcomes appear only after real work is complete and public permission is documented.</p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {proofPrinciples.map((principle) => (
                <article key={principle.title} className="rounded-2xl border border-[#d9cfbf] bg-white p-7">
                  <h4 className="font-serif text-2xl font-semibold">{principle.title}</h4>
                  <p className="mt-4 text-sm leading-6 text-[#4d403a]">{principle.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-7 text-center">
              <a href="https://www.trustpilot.com/review/ceremonyverse.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7a6841] underline underline-offset-4">Read independent public reviews on Trustpilot</a>
            </div>
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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roleBoundaries.map(({ title, description }) => (
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
          <div className="mt-10 rounded-3xl bg-[#1f1f1f] p-8 text-white sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">A better standard than a badge</p>
                <h3 className="mt-3 font-serif text-3xl font-semibold !text-white">How to evaluate CeremonyVerse before paying</h3>
                <p className="mt-4 leading-7 !text-white/75">You should not have to rely on a logo, rating graphic, or sales promise to understand the risk.</p>
              </div>
              <ul className="space-y-4 text-sm leading-6 !text-white/85 sm:text-base sm:leading-7">
                <li className="flex gap-3"><span aria-hidden="true" className="font-semibold text-[#c5a059]">01</span><span>Your first 30-minute call is free, with no payment or contract required.</span></li>
                <li className="flex gap-3"><span aria-hidden="true" className="font-semibold text-[#c5a059]">02</span><span>Public prices, planning tools, process details, and policies are available without an email gate.</span></li>
                <li className="flex gap-3"><span aria-hidden="true" className="font-semibold text-[#c5a059]">03</span><span>Your private proposal lists the exact scope, owners, fees, exclusions, milestones, and outside costs before paid work begins.</span></li>
                <li className="flex gap-3"><span aria-hidden="true" className="font-semibold text-[#c5a059]">04</span><span>Resorts and qualified travel, transfer, and vendor providers issue and control their own contracts, bookings, and payments.</span></li>
              </ul>
            </div>
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
          <Link href="/contact/?service=mexico&from=homepage-final" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1f1f1f]">
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
