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

export const metadata = buildMetadata({
  path: "/indian-wedding-coordination-mexico/",
  title: "Indian Wedding Planner Mexico | Cancun & Riviera Maya",
  description:
    "Indian wedding planning and coordination for Cancun and Riviera Maya, informed by real family weddings in Mexico. Compare services and book a free consultation.",
  keywords:
    "Indian wedding planner Mexico, Cancun Indian wedding planner, Riviera Maya Indian wedding coordinator, South Asian wedding Mexico, Hindu wedding Cancun, Mexico destination wedding planning",
});

const serviceSchema = buildServiceSchema({
  name: "Indian Wedding Planning in Cancun and Riviera Maya",
  description:
    "Planning support for South Asian and intercultural weddings in Cancun and Riviera Maya, with optional India wedding-shopping coordination.",
  url: "/indian-wedding-coordination-mexico/",
  areaServed: "Cancun and Riviera Maya, Mexico",
  offers: [
    {
      name: "Mexico Planning Consult",
      price: 499,
      description:
        "A planning review, written priorities, and introductions that are specifically listed in the agreement.",
    },
    {
      name: "Single-Event Coordination",
      price: 1500,
      description:
        "Coordination for one contracted event, with the covered planning and on-site work stated in writing.",
    },
    {
      name: "Multi-Day Wedding Planning",
      price: 4500,
      description:
        "Custom planning for a multi-event wedding weekend; final scope and price depend on dates, guest count, and event complexity.",
    },
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Mexico Wedding Planning", url: "/indian-wedding-coordination-mexico/" },
]);

const faqItems = [
  {
    question: "Does CeremonyVerse plan Indian weddings in Mexico?",
    answer:
      "CeremonyVerse offers planning support for weddings in Cancun and Riviera Maya. The exact events, vendor work, travel, and on-site coverage are listed in a written agreement before work begins.",
  },
  {
    question: "What does Mexico wedding planning cost?",
    answer:
      "CeremonyVerse fees start at $499 for a planning consult, $1,500 for one-event coordination, and $4,500 for a custom multi-day starting scope. Resort, venue, food and beverage, travel, decor, entertainment, photography, beauty, officiant, product, shipping, and customs costs are separate unless the agreement explicitly says otherwise.",
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
      "Yes. India shopping and Mexico planning are separate service paths that can be combined in one written scope. Purchases, tailoring, shipping, customs, and Mexico wedding costs remain itemized.",
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
      name: "Choose the CeremonyVerse planning scope",
      text: "Select a planning consult, single-event coordination, or a custom multi-day scope. Covered work and exclusions are documented before payment.",
    },
    {
      name: "Contract the venue and specialists",
      text: "Confirm the venue and the vendors needed for each event only after written availability, pricing, policies, and responsibilities are clear.",
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
            Indian wedding planning in Mexico, with the important details put in writing.
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#e8dfd2] md:text-xl">
            CeremonyVerse helps families compare locations, organize multi-event logistics, coordinate the
            contracted vendor team, and optionally connect Mexico planning with India wedding shopping.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/?service=mexico"
              className="rounded-lg bg-[#7a6841] px-8 py-4 text-lg font-bold text-white shadow-lg"
            >
              Discuss Your Mexico Wedding
            </Link>
            <Link
              href="/pricing/#mexico-planning"
              className="rounded-lg border-2 border-[#c5a059] px-8 py-4 text-lg font-bold text-white"
            >
              Review Planning Fees
            </Link>
          </div>
          <p className="mt-5 text-sm text-[#cfc6bb]">
            Free initial consultation · No resort or vendor availability is promised before written confirmation
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
              Family experience became a planning system.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-[#4d403a]">
            <p>
              Founder Bhamini Bernie&apos;s experience comes from three family wedding journeys: two multi-day
              weddings for her sons—one at a Hard Rock resort in Mexico and one that moved from Mexico to New
              Jersey during the pandemic—plus her nephew&apos;s Mexico wedding.
            </p>
            <p>
              Those experiences are relevant, but they are not presented as decades of paid client work. They
              shaped the questions CeremonyVerse asks about resort contracts, event flow, family coordination,
              outside-vendor restrictions, guest logistics, and wedding shopping from India.
            </p>
            <p>
              The current service is defined by your signed scope. Family-wedding contacts may be introduced when
              relevant and available; CeremonyVerse does not claim ownership of a universal Mexico vendor network.
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
              Three Mexico planning starting points
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                label: "Planning Consult",
                price: "$499",
                text: "A focused review of your brief, risks, priorities, and next decisions, plus only the introductions named in the agreement.",
              },
              {
                label: "Single-Event Coordination",
                price: "$1,500",
                text: "A starting scope for one event. The agreement identifies preparation, vendor communication, timeline, and on-site coverage.",
              },
              {
                label: "Multi-Day Planning",
                price: "From $4,500",
                text: "A custom scope for a wedding weekend. Final pricing depends on event count, guest count, dates, travel, and operational complexity.",
              },
            ].map((tier) => (
              <article key={tier.label} className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7a6841]">Mexico Planning</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#1f1f1f]">{tier.label}</h3>
                <p className="mt-4 text-3xl font-semibold text-[#7a6841]">{tier.price}</p>
                <p className="mt-5 leading-relaxed text-[#4d403a]">{tier.text}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-[#655a54]">
            CeremonyVerse fees do not include resort, venue, food and beverage, travel, lodging, decor,
            entertainment, photography, beauty, officiant, product, shipping, duty, or other third-party costs
            unless the signed agreement expressly includes them.
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
              Read the Mexico planning guide →
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
              One family, two service paths
            </p>
            <h2
              className="text-3xl font-semibold text-[#1f1f1f] md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Plan Mexico and shop India separately—or together.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#e6dfd5] p-8">
              <h3 className="text-2xl font-semibold text-[#1f1f1f]">Mexico wedding planning</h3>
              <p className="mt-4 leading-relaxed text-[#4d403a]">
                Location comparison, planning priorities, vendor coordination, timelines, guest logistics, and
                the on-site coverage included in your agreement.
              </p>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] p-8">
              <h3 className="text-2xl font-semibold text-[#1f1f1f]">India wedding shopping</h3>
              <p className="mt-4 leading-relaxed text-[#4d403a]">
                Remote sourcing for outfits, accessories, gifts, and ceremonial items, with approvals and costs
                managed separately from the Mexico wedding contracts.
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
            Mexico wedding planning FAQ
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
            We will tell you what CeremonyVerse can cover, what still needs third-party confirmation, and which
            planning level fits the wedding you are actually organizing.
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
