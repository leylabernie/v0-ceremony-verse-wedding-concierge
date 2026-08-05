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
import { mexicoAvailabilityMessage, mexicoPackages } from "@/lib/mexico-packages";

export const metadata = buildMetadata({
  path: "/indian-wedding-coordination-mexico/",
  title: "Indian Wedding Planning Mexico",
  description:
    "Full planning, partial planning, day-of coordination, family concierge, guest support, and India sourcing for Indian weddings in Cancun and Riviera Maya.",
  keywords:
    "Indian wedding planner Mexico, Cancun Indian wedding planning, Riviera Maya Indian wedding concierge, South Asian wedding Mexico, Hindu wedding Cancun, Mexico destination wedding support",
});

const serviceSchema = buildServiceSchema({
  name: "Mexico Indian Wedding Planning and Concierge",
  description:
    "Full, partial, and day-of wedding planning for South Asian and intercultural weddings in Cancun and Riviera Maya, with optional family, guest, arrival, and India-shopping support.",
  url: "/indian-wedding-coordination-mexico/",
  areaServed: "Cancun and Riviera Maya, Mexico",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Mexico Wedding Concierge", url: "/indian-wedding-coordination-mexico/" },
]);

const faqItems = [
  {
    question: "Who plans and runs the wedding in Mexico?",
    answer:
      "CeremonyVerse offers the planning package and coordinates the client experience. Qualified Mexico-based planning professionals handle the local resort, vendor, timeline, and on-site responsibilities defined in the private CeremonyVerse proposal.",
  },
  {
    question: "What do CeremonyVerse Mexico wedding services cost?",
    answer:
      "Mexico wedding pricing is private because the correct scope depends on dates, venue status, event count, guest count, logistics, and the level of planning and family support required. After the consultation, the client receives one bundled CeremonyVerse proposal. Resort, venue, vendor, travel, transfer, product, shipping, and customs costs are identified separately when applicable.",
  },
  {
    question: "Can you help us choose between Cancun and Riviera Maya?",
    answer:
      "Yes. We compare options against your guest origins, guest count, dates, event schedule, accessibility needs, ceremony requirements, room-block terms, and budget. A resort is not recommended until its current written policies are reviewed.",
  },
  {
    question: "Can you plan Hindu, Sikh, Muslim, Christian, or intercultural events?",
    answer:
      "CeremonyVerse can coordinate logistics for traditions defined by the couple, families, and their chosen officiants. We do not replace religious or legal authorities, and we confirm venue and vendor feasibility before promising a specific setup.",
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
  name: "How to Start Planning an Indian Wedding in Mexico",
  description:
    "A practical first-pass process for an Indian or South Asian wedding in Cancun or Riviera Maya.",
  url: "/indian-wedding-coordination-mexico/",
  totalTime: "PT30M",
  steps: [
    {
      name: "Define the wedding brief",
      text: "List possible dates, guest origins, estimated guest count, event count, ceremony requirements, accessibility needs, and working budget.",
    },
    {
      name: "Compare locations and written resort terms",
      text: "Review Cancun and Riviera Maya options, then compare event spaces, room blocks, food and beverage terms, production rules, outside-vendor policies, weather plans, and cancellation terms.",
    },
    {
      name: "Choose the right planning package",
      text: "Compare Full Planning & Design, Partial Planning & Coordination, and Day-of Coordination & Management against what has already been booked and what still needs an owner.",
    },
    {
      name: "Choose any additional family support",
      text: "Add only the family-concierge, guest-information, arrival, welcome-item, or India-sourcing responsibilities that would genuinely make the process easier.",
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
            Cancun &amp; Riviera Maya
          </p>
          <h1
            className="mb-6 text-4xl font-semibold leading-tight md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Mexico wedding planning, with CeremonyVerse beside the family.
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#e8dfd2] md:text-xl">
            Choose full planning, partial planning, or day-of coordination, then add family concierge,
            guest arrival, welcome-item, or India wedding-shopping support only where you need it.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/?service=mexico"
              className="rounded-lg bg-[#7a6841] px-8 py-4 text-lg font-bold text-white shadow-lg"
            >
              Discuss Your Mexico Wedding
            </Link>
            <Link
              href="/pricing/#mexico-concierge"
              className="rounded-lg border-2 border-[#c5a059] px-8 py-4 text-lg font-bold text-white"
            >
              Compare Package Details
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
              Family experience became an organized planning system.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[#4d403a]">
            <p>
              Founder Bhamini Bernie&apos;s experience comes from three family wedding journeys: two multi-day
              weddings for her sons—one at a Hard Rock resort in Mexico and one that moved from Mexico to New
              Jersey during the pandemic—plus her nephew&apos;s Mexico wedding.
            </p>
            <p>
              These family experiences shaped the questions CeremonyVerse asks before planning begins: what the
              budget covers, how many guests are traveling, which events matter most, and which responsibilities
              belong to the planning team, the resort, the travel provider, and the family.
            </p>
            <p>
              CeremonyVerse presents the selected planning and concierge responsibilities in one private proposal.
              Qualified Mexico-based professionals carry out the local work assigned to them, while outside resort,
              venue, vendor, and travel costs remain clearly identified.
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
              Five ways to support your Mexico wedding
            </h2>
            <p className="mt-5 leading-relaxed text-[#4d403a]">
              Package details are public. Pricing is shared only in a private proposal after consultation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {mexicoPackages.map((tier) => (
              <article key={tier.name} className="flex flex-col rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7a6841]">{tier.category}</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-[#1f1f1f]">{tier.name}</h3>
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
            The private proposal identifies CeremonyVerse&apos;s bundled service, outside costs, payment milestones,
            and who is responsible for each decision. Nothing is booked or charged without written approval.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
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
          </div>
          <div className="mt-8 text-center">
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
              Local planning expertise, family-side organization, and India sourcing.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#e6dfd5] p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#1f1f1f]">Mexico planning + family concierge</h3>
              <p className="mt-4 leading-relaxed text-[#4d403a]">
                Qualified Mexico-based planning professionals handle the local resort, vendor, timeline, and
                on-site responsibilities in the selected package. CeremonyVerse can also organize family
                questions, guest information, transfer details, arrival support, and welcome kits.
              </p>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#1f1f1f]">India wedding shopping</h3>
              <p className="mt-4 leading-relaxed text-[#4d403a]">
                Remote sourcing for outfits, accessories, gifts, and ceremonial items, with approvals and costs
                itemized separately from resort, venue, vendor, and other outside wedding costs.
              </p>
              <Link href="/shop-from-india/" className="mt-5 inline-flex font-medium text-[#7a6841]">
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
            Mexico wedding concierge FAQ
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
            We will tell you what may be realistic, which package fits what you have already completed, and which
            family-side services—if any—would genuinely make the process easier. Pricing stays private.
          </p>
          <Link
            href="/contact/?service=mexico"
            className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 text-lg font-bold text-[#1f1f1f]"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
