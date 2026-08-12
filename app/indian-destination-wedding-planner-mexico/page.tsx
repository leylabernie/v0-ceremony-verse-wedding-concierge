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
  path: "/indian-destination-wedding-planner-mexico/",
  title: "Indian Destination Wedding Mexico: Cancún vs Riviera Maya",
  description:
    "Family-side planning for Gujarati and Hindu destination weddings across Mexico. Compare resort packages, room blocks, complete budgets, cultural needs, and guest logistics.",
  keywords:
    "Indian destination wedding Mexico, Indian wedding Cancun, Indian wedding Riviera Maya, South Asian wedding resort Mexico, Indian wedding Mexico cost, Cancun wedding planning guide",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Mexico Destination Wedding Guide", url: "/indian-destination-wedding-planner-mexico/" },
]);

const serviceSchema = buildServiceSchema({
  name: "Indian Destination Wedding Planning Support in Mexico",
  description:
    "Family-facing destination-wedding planning support for Gujarati and Hindu weddings across Mexico, with a written division of responsibilities among CeremonyVerse, the local planning partner, authorized travel providers, resorts, vendors, and the family.",
  url: "/indian-destination-wedding-planner-mexico/",
  category: "Indian Destination Wedding Planning",
  areaServed: ["Mexico", "Dominican Republic", "United States", "Canada"],
});

const faqItems = [
  {
    question: "How much does an Indian destination wedding in Mexico cost?",
    answer:
      "There is no responsible universal total. A published resort package is only one part of the budget. Guest count, room-block terms, number and length of events, venue fees, food and beverage, production, decor, entertainment, photography, beauty, transport, travel, taxes, service charges, and planning fees all affect the final amount. Compare complete written proposals using the same assumptions.",
  },
  {
    question: "Is Cancun or Riviera Maya better for an Indian wedding?",
    answer:
      "Neither is automatically better. Cancun may reduce transfer time and simplify access for some guest groups. Riviera Maya may offer a setting or property that better matches the event plan. Compare the exact resort, spaces, room-block proposal, vendor policies, weather backup, and guest experience.",
  },
  {
    question: "How early should we plan a Mexico destination wedding?",
    answer:
      "Starting 12 months or more before the preferred dates usually gives more flexibility for resort proposals, room blocks, key vendors, guest travel, and custom outfits. High-demand dates or complex multi-day events may require more time. Availability must be confirmed for your actual dates.",
  },
  {
    question: "Is a South Asian resort package the total wedding price?",
    answer:
      "Usually not. Packages may cover a defined guest count, specific event hours, food and beverage, basic decor, or selected services. Additional guests, extra hours, private spaces, outside vendors, upgraded menus, production, taxes, service charges, travel, and other items may be separate. Read the current proposal and contract rather than relying on a headline price.",
  },
  {
    question: "Does CeremonyVerse sell a fixed Indian destination wedding package for Mexico?",
    answer:
      "No fixed CeremonyVerse package replaces the resort's current proposal or a wedding-specific written scope. CeremonyVerse helps families compare resort packages, room-block terms, event costs, planning responsibilities, and exclusions using the same assumptions before a decision is made.",
  },
  {
    question: "What should we ask about Indian catering?",
    answer:
      "Ask who prepares the food, whether outside catering is permitted, how dietary and allergy requirements are handled, whether separate preparation is available, what tasting process applies, and which fees, minimums, service charges, and taxes are additional. Put the agreed menu and operating conditions in writing.",
  },
  {
    question: "Where in Mexico does CeremonyVerse provide destination-wedding support?",
    answer:
      "CeremonyVerse provides destination-wedding planning and support across Mexico. Cancun and Riviera Maya appear often because they are part of the firsthand family experience, but they are not the service limits. Punta Cana is also included in current service coverage.",
  },
];

const faqSchema = buildFaqSchema(faqItems);

const howToSchema = buildHowToSchema({
  name: "How to Compare Indian Destination Wedding Options in Mexico",
  description:
    "A decision framework for comparing Cancun and Riviera Maya resorts for a South Asian wedding.",
  url: "/indian-destination-wedding-planner-mexico/",
  totalTime: "PT45M",
  steps: [
    {
      name: "Normalize the guest and event assumptions",
      text: "Use the same guest count, room nights, event list, event hours, meal plan, ceremony requirements, and budget categories for every proposal.",
    },
    {
      name: "Compare the room-block contract",
      text: "Review rates, minimum stays, deposits, attrition, complimentary rooms, upgrades, cut-off dates, cancellation terms, and guest booking support.",
    },
    {
      name: "Compare event-space and vendor policies",
      text: "Confirm guaranteed spaces, capacity, weather backups, curfews, production rules, outside-vendor fees, catering conditions, and ceremony-specific permissions.",
    },
    {
      name: "Build the complete budget",
      text: "Add package costs, additional guests and hours, taxes, service charges, decor, production, specialists, guest logistics, planning, travel, and contingency.",
    },
    {
      name: "Choose only after written confirmation",
      text: "Use the complete written proposal and contract—not a brochure, social post, or headline package price—to make the final decision.",
    },
  ],
});

const budgetRows = [
  ["Resort and room block", "Guest room rates, minimum stays, deposits, attrition, concessions, upgrades, and cancellation terms"],
  ["Private events and catering", "Spaces, event hours, menus, open bars, minimums, additional guests, overtime, taxes, and service charges"],
  ["Decor and production", "Mandap or ceremony structure, stage, florals, furniture, dance floor, lighting, audio, rigging, power, and load-in"],
  ["Wedding specialists", "Planning, photography, cinema, DJ or entertainment, beauty, mehndi, officiants, transport, stationery, and content creation"],
  ["Guest experience", "Airport transfers, welcome events, bags, excursions, accessibility support, child care, hospitality desk, and emergency plans"],
  ["India shopping", "Outfits, tailoring, accessories, gifts, shipping, duty, contingency time, and any Mexico delivery arrangements"],
];

const timeline = [
  {
    when: "12+ months before",
    title: "Set the decision framework",
    text: "Define the date range, guest origins, estimated guest count, ceremony needs, event list, room expectations, accessibility needs, and working budget. Request comparable resort proposals.",
  },
  {
    when: "9–12 months before",
    title: "Contract the foundation",
    text: "Select the property after legal and financial review, then confirm the planner and the most date-sensitive specialists. Launch guest communication only after the room-block process is clear.",
  },
  {
    when: "6–9 months before",
    title: "Design the operating plan",
    text: "Develop each event, confirm catering and production feasibility, begin custom shopping, and create a guest information structure for travel, rooms, attire, and schedules.",
  },
  {
    when: "3–6 months before",
    title: "Move from ideas to approvals",
    text: "Approve menus, layouts, decor direction, entertainment, ceremony logistics, vendor access, transport, beauty schedules, and outfit milestones. Track every open item with an owner and due date.",
  },
  {
    when: "Final 90 days",
    title: "Finalize counts and contingencies",
    text: "Reconcile guest data, rooming lists, dietary needs, payments, insurance, travel, shipping, vendor paperwork, weather plans, medical contacts, and the master event timeline.",
  },
];

export default function MexicoDestinationGuidePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />
      <JsonLd id="schema-service" data={serviceSchema} />

      <SeoNav />

      <section className="bg-[#1f1f1f] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#c5a059]">
            2027 planning guide
          </p>
          <h1
            className="text-4xl font-semibold leading-tight md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Indian destination wedding planning in Mexico
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#e8dfd2] md:text-xl">
            Compare Cancun and Riviera Maya using the contract, total budget, ceremony requirements, and guest
            experience—not a resort brochure or a package headline.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/?service=mexico"
              className="rounded-lg bg-[#7a6841] px-8 py-4 text-lg font-bold text-white"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/planning-tools/"
              className="rounded-lg border-2 border-[#c5a059] px-8 py-4 text-lg font-bold text-white"
            >
              Use Free Wedding Calculators
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#7a6841]">
              The first decision
            </p>
            <h2
              className="text-3xl font-semibold text-[#1f1f1f] md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Cancun versus Riviera Maya
            </h2>
            <p className="mt-5 leading-relaxed text-[#4d403a]">
              Destination names are useful search filters, not final answers. The property and contract determine
              whether the wedding actually works.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7a6841]">Cancun</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#1f1f1f]">Often useful when access leads.</h3>
              <ul className="mt-6 space-y-3 leading-relaxed text-[#4d403a]">
                <li>• Compare transfer time from Cancun International Airport for the actual property.</li>
                <li>• Check whether the resort can keep multiple events private and operationally distinct.</li>
                <li>• Verify event-space capacity using your layouts, stage, dance floor, and production—not a cocktail maximum.</li>
                <li>• Review urban noise, property density, guest movement, and weather backups.</li>
              </ul>
              <Link href="/destinations/cancun-indian-wedding/" className="mt-6 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">Open the complete Cancún Indian wedding guide</Link>
            </article>
            <article className="rounded-2xl border border-[#e6dfd5] bg-white p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#7a6841]">Riviera Maya</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#1f1f1f]">Often useful when setting leads.</h3>
              <ul className="mt-6 space-y-3 leading-relaxed text-[#4d403a]">
                <li>• Compare airport transfer time and the plan for late arrivals or split travel days.</li>
                <li>• Evaluate privacy, walking distances, golf-cart or shuttle needs, and accessibility.</li>
                <li>• Check rain, wind, heat, insects, beach access, sound limits, and indoor backups.</li>
                <li>• Confirm whether the chosen property—not just its brand—supports the full event plan.</li>
              </ul>
              <Link href="/destinations/riviera-maya-indian-wedding/" className="mt-6 inline-flex font-semibold text-[#7a6841] underline underline-offset-4">Open the complete Riviera Maya Indian wedding guide</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#7a6841]">
                The number that matters
              </p>
              <h2
                className="text-3xl font-semibold text-[#1f1f1f] md:text-4xl"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Build a complete wedding budget.
              </h2>
              <p className="mt-5 leading-relaxed text-[#4d403a]">
                Published South Asian packages can be useful starting data. They are not automatically comparable,
                and they rarely represent the entire wedding spend. Normalize every proposal with the same guest
                count, room nights, event hours, inclusions, taxes, and service charges.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link href="/planning-tools/budget/" className="inline-flex justify-center rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white">Open the Budget Calculator</Link>
                <Link href="/indian-destination-wedding-cost/" className="inline-flex justify-center rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841]">Read the Complete-Cost Guide</Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#e6dfd5]">
              {budgetRows.map(([category, detail], index) => (
                <div
                  key={category}
                  className={`grid gap-2 p-5 md:grid-cols-[0.35fr_0.65fr] ${index % 2 === 0 ? "bg-[#faf8f5]" : "bg-white"}`}
                >
                  <h3 className="font-semibold text-[#1f1f1f]">{category}</h3>
                  <p className="leading-relaxed text-[#4d403a]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-[#d8c8a2] bg-[#fbf6ea] p-6 text-sm leading-relaxed text-[#5f5132]">
            <strong>Pricing caution:</strong> Resort packages and policies change. Verify every amount and inclusion
            directly with the resort or authorized provider before relying on it. CeremonyVerse does not guarantee
            third-party pricing, availability, package terms, or currency conversions.
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#7a6841]">
              A practical sequence
            </p>
            <h2
              className="text-3xl font-semibold text-[#1f1f1f] md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Indian wedding Mexico planning timeline
            </h2>
          </div>
          <div className="mt-12 space-y-5">
            {timeline.map((item, index) => (
              <article key={item.when} className="grid gap-5 rounded-2xl border border-[#e6dfd5] bg-white p-7 md:grid-cols-[0.22fr_0.78fr]">
                <div>
                  <span className="text-sm font-semibold text-[#7a6841]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-2 font-semibold text-[#1f1f1f]">{item.when}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1f1f1f]">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-[#4d403a]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm leading-relaxed text-[#655a54]">
            This is a planning framework, not an availability promise. Your sequence changes with the resort,
            dates, contract deadlines, ceremony requirements, and vendor team.
          </p>
        </div>
      </section>

      <section className="bg-[#1f1f1f] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c5a059]">
              Contract questions
            </p>
            <h2
              className="text-3xl font-semibold md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Do not book until these answers are clear.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Room block", "What happens if guests book outside the block, stay fewer nights, cancel, or miss the cut-off date?"],
              ["Event spaces", "Which spaces are guaranteed, when are they assigned, and what comparable indoor backup is included?"],
              ["Outside vendors", "Who is allowed, what insurance or paperwork is required, and which access or buyout fees apply?"],
              ["Food and beverage", "What menus, dietary controls, service hours, minimums, tastings, taxes, and service charges apply?"],
              ["Production", "What rules govern mandaps, baraats, sound, rigging, power, flames, fireworks, animals, load-in, and curfews?"],
              ["Exit terms", "What deposits are refundable, what happens after a force-majeure event, and how are date changes handled?"],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-[#f8f6f2]">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#d9d0c5]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#7a6841]">
              Clear planning responsibilities
            </p>
            <h2
              className="text-3xl font-semibold text-[#1f1f1f] md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Know who owns each decision
            </h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#e6dfd5]">
            {[
              ["CeremonyVerse", "Family-facing brief, cultural and sourcing requirements, proposal comparison, approvals, guest-information organization, communication oversight, and one central family contact within the written scope."],
              ["Mexico-based planning partner", "Local venue and vendor planning, negotiations, production coordination, operational timelines, and on-site execution under the partner's client agreement."],
              ["Authorized travel provider or resort", "Room blocks, reservations, guest payments, travel documents, transfers, travel changes, and any travel-related commissions or regulated services."],
              ["Resort and contracted vendors", "Their stated spaces, products, staffing, food and beverage, production, delivery, pricing, policies, safety, and contract performance."],
              ["Couple and family", "Final decisions, accurate guest and ceremony information, approvals, payments, travel documents, insurance choices, and compliance with contract deadlines."],
            ].map(([owner, responsibility], index) => (
              <div key={owner} className={`grid gap-2 p-6 md:grid-cols-[0.28fr_0.72fr] ${index % 2 === 0 ? "bg-[#faf8f5]" : "bg-white"}`}>
                <h3 className="font-semibold text-[#1f1f1f]">{owner}</h3>
                <p className="leading-relaxed text-[#4d403a]">{responsibility}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[#655a54]">
            CeremonyVerse does not independently sell travel. Travel services must be handled by a properly authorized
            provider, directly by the resort, or through another legally appropriate arrangement. The private proposal
            identifies the selected scope, fees, payment terms, exclusions, and third-party costs before paid work begins.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2
            className="text-center text-3xl font-semibold text-[#1f1f1f] md:text-4xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Indian destination wedding Mexico FAQ
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
            Bring us the proposals before you sign them.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#f4eee6]">
            CeremonyVerse can help organize the comparison, identify unanswered questions, and recommend the
            planning package and family-support scope that fit what you have already completed.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/?service=mexico"
              className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-[#1f1f1f]"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/buy-indian-wedding-outfits-from-india/"
              className="rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white"
            >
              Add India Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
