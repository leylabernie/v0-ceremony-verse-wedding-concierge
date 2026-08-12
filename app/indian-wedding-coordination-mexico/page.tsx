import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import {
  JsonLd,
  buildBreadcrumb,
  buildFaqSchema,
  buildHowToSchema,
  buildMetadata,
  buildServiceSchema,
} from "@/lib/seo";
import { destinationPackagePricingNote, mexicoAvailabilityMessage, mexicoPackages } from "@/lib/mexico-packages";
import {
  destinationFeasibilityCredit,
  destinationFeasibilityPlan,
} from "@/lib/destination-feasibility-plan";

export const metadata = buildMetadata({
  path: "/indian-wedding-coordination-mexico/",
  title: "Indian Destination Wedding Planner Mexico",
  description:
    "Coordinated destination-wedding planning, family support, and optional India sourcing for Gujarati and Hindu weddings across Mexico and in Punta Cana.",
  keywords:
    "Gujarati destination wedding planning, Hindu wedding Cancun, Riviera Maya Indian wedding planner, Punta Cana Indian wedding planning, destination wedding family support, India wedding sourcing",
});

const serviceSchema = buildServiceSchema({
  name: "Gujarati and Hindu Destination Wedding Planning",
  description:
    "Coordinated destination planning and on-site execution across Mexico and in Punta Cana, with family support and guest logistics included by package level plus optional India sourcing.",
  url: "/indian-wedding-coordination-mexico/",
  areaServed: ["Mexico", "Punta Cana, Dominican Republic"],
  offers: [
    {
      name: destinationFeasibilityPlan.name,
      price: destinationFeasibilityPlan.price,
      description: destinationFeasibilityPlan.description,
    },
    ...mexicoPackages
      .filter((tier) => typeof tier.numericPrice === "number")
      .map((tier) => ({
        name: tier.name,
        price: tier.numericPrice as number,
        description: tier.description,
      })),
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Destination Wedding Planning", url: "/indian-wedding-coordination-mexico/" },
]);

const faqItems = [
  {
    question: "What can the destination-wedding service include?",
    answer:
      "Depending on the selected scope, CeremonyVerse offers full planning, partial planning, or event coordination through one client-facing scope that assigns local planning and on-site execution to the contracted destination team. Family communication, guest logistics, welcome details, and optional India sourcing may also be included. The final written proposal identifies exactly who handles each responsibility.",
  },
  {
    question: "What do CeremonyVerse destination-wedding services cost?",
    answer:
      `The Destination Wedding Feasibility & Action Plan is $300. ${destinationFeasibilityCredit} Starting fees are $4,000 for Event Coordination & Management, $5,500 for Partial Planning & Coordination, and $8,000 for Full Planning & Design. The final proposal identifies the wedding-specific services, exclusions, fees, travel, staffing, and third-party costs before paid work begins.`,
  },
  {
    question: "Can you help us compare resorts across Mexico and Punta Cana?",
    answer:
      "Yes. CeremonyVerse compares destination and resort options against your guest origins, dates, event schedule, accessibility needs, ceremony requirements, room-block terms, and budget. A resort is not recommended until its current written policies are reviewed.",
  },
  {
    question: "Which wedding traditions are the current focus?",
    answer:
      "CeremonyVerse is initially focused on Gujarati and Hindu families. Ceremony details are defined with the couple, family, chosen officiants, and qualified professionals; CeremonyVerse does not replace religious or legal authorities.",
  },
  {
    question: "Do Mexico resorts allow mandaps, baraats, outside vendors, and Indian catering?",
    answer:
      "Policies differ by resort, package, date, and contract. Some properties publish South Asian wedding packages, but outside-vendor rules, production access, event hours, food requirements, and fees must be verified directly in the current proposal.",
  },
  {
    question: "Can CeremonyVerse source our wedding outfits from India too?",
    answer:
      "Yes. India shopping can be added to the CeremonyVerse Mexico scope. Purchases, tailoring, shipping, customs, resort, venue, vendor, and other outside costs remain itemized separately.",
  },
  {
    question: "What are the legal requirements for marrying in Mexico?",
    answer:
      "Requirements depend on the ceremony type, Mexican state, nationality, residency, and current local rules. Confirm them with the applicable civil registry, venue, and qualified legal or wedding professional before booking travel. CeremonyVerse does not provide legal advice.",
  },
];

const faqSchema = buildFaqSchema(faqItems);

const howToSchema = buildHowToSchema({
  name: "How to Start Planning a Gujarati or Hindu Destination Wedding",
  description:
    "A practical first-pass process for a Gujarati or Hindu wedding across Mexico or in Punta Cana.",
  url: "/indian-wedding-coordination-mexico/",
  totalTime: "PT30M",
  steps: [
    {
      name: "Define the wedding brief",
      text: "List possible dates, guest origins, estimated guest count, event count, ceremony requirements, accessibility needs, and working budget.",
    },
    {
      name: "Compare locations and written resort terms",
      text: "Review suitable regions and resorts across Mexico or in Punta Cana, then compare event spaces, room blocks, food and beverage terms, production rules, outside-vendor policies, weather plans, and cancellation terms.",
    },
    {
      name: "Choose the right planning package",
      text: "Compare Full Planning & Design, Partial Planning & Coordination, and Event Coordination & Management against what has already been booked and what still needs an owner.",
    },
    {
      name: "Confirm the included family and guest support",
      text: "Review the family coordination, guest-information, arrival, and welcome-plan responsibilities included at the selected planning level, then add India sourcing only if needed.",
    },
    {
      name: "Build one operating plan",
      text: "Combine the event timeline, vendor contacts, guest logistics, approvals, payment dates, contingency plans, and any optional India shopping into one working plan.",
    },
  ],
});

const planningChecks = [
  "Which spaces are guaranteed for each event, and what is the rain or wind backup?",
  "What room-block, attrition, deposit, cancellation, and minimum-stay terms apply?",
  "Are outside planners, decorators, caterers, DJs, photographers, officiants, or animals allowed—and at what fee?",
  "What load-in times, rigging limits, sound curfews, power requirements, and security rules apply?",
  "Can the kitchen meet vegetarian, Jain, halal, allergy, and cross-contamination requirements in writing?",
  "What is included in the package, what is an upgrade, and which taxes and service charges are additional?",
];

export default function MexicoCoordinationPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />

      <SeoNav />

      <section className="px-6 py-24 text-[#f8f6f2]" style={{ background: "#1f1f1f" }}>
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#c5a059]">
            Mexico · Punta Cana
          </p>
          <h1
            className="mb-6 text-4xl font-semibold leading-tight md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Indian destination wedding planning for Mexico and Punta Cana
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#e8dfd2] md:text-xl">
            CeremonyVerse offers planning, on-site coordination, family support, guest organization, and optional India
            sourcing for Gujarati and Hindu destination weddings across Mexico and in Punta Cana.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={destinationFeasibilityPlan.contactHref}
              className="rounded-lg bg-[#7a6841] px-8 py-4 text-lg font-bold text-white shadow-lg"
            >
              Schedule a Free 30-Minute Consultation
            </Link>
            <Link
              href="/pricing/#mexico-concierge"
              className="rounded-lg border-2 border-[#c5a059] px-8 py-4 text-lg font-bold text-white"
            >
              Compare Package Details
            </Link>
            <Link
              href="/planning-tools/"
              className="rounded-lg border-2 border-white/45 px-8 py-4 text-lg font-bold text-white"
            >
              Use Free Wedding Calculators
            </Link>
          </div>
          <p className="mt-5 text-sm text-[#cfc6bb]">
            {mexicoAvailabilityMessage} No resort or vendor availability is promised before written confirmation.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#7a6841]">
              Why this service exists
            </p>
            <h2
              className="text-3xl font-semibold text-[#1f1f1f] md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Clear responsibilities create a more organized planning system.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[#4d403a]">
            <p>
              Before planning begins, CeremonyVerse organizes the facts that affect the written scope: what the budget
              covers, how many guests are traveling, which events matter most, which resort terms apply, and what still
              needs a clear owner, approver, deadline, or written answer.
            </p>
            <p>
              The proposal identifies the selected planning, on-site, family-support, guest, and India-sourcing
              services, along with exclusions, fees, payment terms, and outside costs. Public family-experience facts
              remain documented separately on the About page and are not presented as CeremonyVerse client projects.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#7a6841]">
              Choose the right level of help
            </p>
            <h2
              className="text-3xl font-semibold text-[#1f1f1f] md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Five ways to support your destination wedding
            </h2>
            <p className="mt-5 leading-relaxed text-[#4d403a]">
              Start with the published $300 feasibility plan, then compare the public starting fees and wedding-specific planning scopes.
            </p>
          </div>

          <article className="mb-10 rounded-3xl border border-[#7a6841] bg-[#f4eee4] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Paid starting plan</p>
                <h3 className="mt-3 font-serif text-3xl font-semibold text-[#1f1f1f]">{destinationFeasibilityPlan.name}</h3>
                <p className="mt-4 font-serif text-5xl font-semibold text-[#1f1f1f]">{destinationFeasibilityPlan.priceLabel}</p>
              </div>
              <div>
                <p className="leading-7 text-[#4d403a]">{destinationFeasibilityPlan.bestFor}</p>
                <p className="mt-4 text-sm leading-6 text-[#5e4a40]">{destinationFeasibilityCredit}</p>
                <Link
                  href={destinationFeasibilityPlan.href}
                  className="mt-6 inline-flex rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white"
                >
                  Review the $300 Deliverables
                </Link>
              </div>
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mexicoPackages.map((tier) => (
              <article key={tier.name} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7a6841]">{tier.category}</p>
                <h3 className="cv-package-title mt-3 text-[#1f1f1f]">{tier.name}</h3>
                {tier.priceLabel && <p className="mt-4 font-serif text-4xl font-semibold text-[#1f1f1f]">{tier.priceLabel}</p>}
                <p className="mt-1 text-sm font-semibold text-[#7a6841]">{tier.timeline}</p>
                <p className="mt-5 leading-relaxed text-[#4d403a]">{tier.description}</p>
                <h4 className="mb-3 mt-6 font-serif text-xl font-semibold text-[#1f1f1f]">Included</h4>
                <ul className="mb-7 flex-1 space-y-3 text-sm leading-6 text-[#4d403a]">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="text-[#7a6841]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className="inline-flex justify-center rounded-full bg-[#7a6841] px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-[#655a54]">
            {destinationPackagePricingNote}
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7a6841]">Cancun</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1f1f1f]">Start with guest logistics.</h2>
              <p className="mt-5 leading-relaxed text-[#4d403a]">
                Cancun can work well when flight access, shorter airport transfers, and a broad resort set matter.
                The decision still depends on the exact property, event spaces, room-block proposal, and current
                South Asian event policies—not the destination name alone.
              </p>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7a6841]">Riviera Maya</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1f1f1f]">Start with venue fit.</h2>
              <p className="mt-5 leading-relaxed text-[#4d403a]">
                Riviera Maya offers a wide range of resort settings farther south of Cancun. Compare transfer
                time, event-space privacy, weather backups, guest mobility, vendor access, and the total written
                contract before choosing a property.
              </p>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7a6841]">Punta Cana</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1f1f1f]">Start with service coverage.</h2>
              <p className="mt-5 leading-relaxed text-[#4d403a]">
                Punta Cana is included in CeremonyVerse&apos;s current destination-wedding service coverage. Compare the
                actual resort, travel requirements, room-block terms, event-space fit, outside-vendor rules, weather
                backup, and on-site production plan before committing.
              </p>
            </article>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 text-center sm:flex-row">
            <Link
              href="/destinations/"
              className="inline-flex justify-center rounded-full bg-[#7a6841] px-7 py-3 font-medium text-white"
            >
              Compare Destination Guides →
            </Link>
            <Link
              href="/indian-destination-wedding-planner-mexico/"
              className="inline-flex rounded-full bg-[#1f1f1f] px-7 py-3 font-medium text-white"
            >
              Read the Mexico decision guide →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c5a059]">
              Before any deposit
            </p>
            <h2
              className="text-3xl font-semibold md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Put these resort answers in writing.
            </h2>
          </div>
          <ol className="space-y-4">
            {planningChecks.map((check, index) => (
              <li key={check} className="flex gap-4 rounded-xl border border-white/15 bg-white/5 p-5">
                <span className="font-semibold text-[#c5a059]">{String(index + 1).padStart(2, "0")}</span>
                <span className="leading-relaxed text-[#e8dfd2]">{check}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#7a6841]">
              One family, clearly assigned responsibilities
            </p>
            <h2
              className="text-3xl font-semibold text-[#1f1f1f] md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Planning, family organization, guest logistics, and India sourcing.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#e6dfd5] p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#1f1f1f]">Destination planning + family support</h3>
              <p className="mt-4 leading-relaxed text-[#4d403a]">
                Each planning package includes the family and guest responsibilities listed for that level, alongside
                its resort and vendor coordination, production, timeline, cultural, and on-site work. Independent
                travel and other provider charges remain separate.
              </p>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#1f1f1f]">India wedding shopping</h3>
              <p className="mt-4 leading-relaxed text-[#4d403a]">
                Remote sourcing for outfits, accessories, gifts, and ceremonial items, with approvals and costs
                itemized separately from resort, venue, vendor, and other outside wedding costs.
              </p>
              <Link href="/buy-indian-wedding-outfits-from-india/" className="mt-5 inline-flex font-medium text-[#7a6841]">
                Explore India shopping →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2
            className="text-center text-3xl font-semibold text-[#1f1f1f] md:text-4xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Destination-wedding planning FAQ
          </h2>
          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#e6dfd5] bg-white p-6">
                <summary className="cursor-pointer font-semibold text-[#1f1f1f]">{item.question}</summary>
                <p className="mt-4 leading-relaxed text-[#4d403a]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7a6841] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-3xl font-semibold md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Start with your dates, guest count, location ideas, and budget.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#f4eee6]">
            The free consultation confirms whether the $300 written feasibility plan or a published starting package with a wedding-specific scope is the
            right next step. Any feasibility conclusion depends on the couple&apos;s current figures and written information.
          </p>
          <Link
            href={destinationFeasibilityPlan.contactHref}
            className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 text-lg font-bold text-[#1f1f1f]"
          >
            Schedule a Free 30-Minute Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
