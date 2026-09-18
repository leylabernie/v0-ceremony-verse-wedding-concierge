import Link from "next/link";
import { buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/costs/",
  title: "Destination Hindu Wedding Costs & Logistics Guide (2026)",
  description:
    "Real cost breakdowns, customs fees for India outfit shipping, resort room block rules, and planning boundaries for South Asian destination weddings in Mexico and Punta Cana.",
  keywords: [
    "destination Hindu wedding cost 2026",
    "Gujarati destination wedding budget Mexico",
    "Punta Cana Indian wedding costs",
    "room block attrition clause resort wedding",
    "India outfit shipping customs duties USA Canada",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Home", url: "/" },
  { name: "Costs & Logistics Guide", url: "/costs/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "How much does a typical 3-day Gujarati or Hindu destination wedding in Mexico or Punta Cana cost?",
    answer:
      "For a celebration with 150 to 200 guests, total event costs typically range between $50,000 and $85,000 USD, excluding individual guest accommodation. Costs break down into resort event fees, South Asian catering, mandap decor, outside vendor passes, and planning fees.",
  },
  {
    question: "How do resort room block commitments work for destination weddings?",
    answer:
      "Resorts require an attrition clause (usually 75%-80%). Families must pay for unbooked room nights if guests fail to reserve through the group block. It is best to start with a smaller guaranteed block and expand as RSVPs are confirmed.",
  },
  {
    question: "What are the import duties when shipping wedding outfits from India to the US or Canada?",
    answer:
      "US shipments over $800 USD incur tariffs ranging from 6% to 18% depending on fabric. Canadian shipments incur full GST/HST plus standard textile tariffs up to 18% regardless of value.",
  },
  {
    question: "What is the difference between a resort coordinator and a family coordinator?",
    answer:
      "Resort coordinators manage resort-owned venues, catering, and staff. A family coordinator like CeremonyVerse manages multi-day timelines, family communications, outside vendor integration, and on-site ceremony flow.",
  },
]);

const budgetRows = [
  {
    category: "Resort Event Fees & Venues",
    range: "$12,000 – $22,000",
    includes:
      "Multi-day venue rentals, basic setup, lighting, sound permits, and beach/ballroom fees.",
  },
  {
    category: "South Asian Food & Catering",
    range: "$15,000 – $28,000",
    includes:
      "Halal/Vegetarian/Jain buffet menus across 3 to 4 events (Garba/Sangeet, Wedding Lunch, Reception).",
  },
  {
    category: "Decor, Mandap & Production",
    range: "$14,000 – $25,000",
    includes:
      "Mandap structure, floral arrangements, stage lighting, DJ/Dhol equipment, and guest seating.",
  },
  {
    category: "Outside Vendor Passes",
    range: "$2,000 – $6,000",
    includes:
      "Daily resort fees charged for bringing in non-resort photographers, hair/makeup, or priests.",
  },
  {
    category: "CeremonyVerse Planning",
    range: "$4,000 – $8,000",
    includes:
      "Fixed-fee family coordination, timeline management, and local operational handoffs.",
  },
];

const coordinatorComparison = [
  {
    focus: "Resort wedding coordinator",
    points: [
      "Manages resort-owned venues, in-house catering, and resort staff",
      "Works the resort's banquet calendar — often several wedding groups the same weekend",
      "Protects the resort's contract terms, not the family's",
      "Stops at the resort boundary: no help with outside vendors, family politics, or India logistics",
    ],
  },
  {
    focus: "CeremonyVerse family coordination",
    points: [
      "Manages the multi-day timeline across every event — Ganesh Puja through Reception",
      "Runs family communications, guest logistics, and elder mobility planning",
      "Integrates outside vendors (decorators, DJs, Maharaj, photographers) with the resort's rules in writing",
      "Attends the negotiation on the family's side and hands off on-site to a local operational partner",
    ],
  },
]

const h1 = "Destination Hindu Wedding Costs & Logistics Guide";

export default function CostsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      {/* Header */}
      <header className="bg-[#1f1f1f] px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            2026 planning guide · written by{" "}
            <Link href="/about/mini/" className="text-[#c5a059] underline underline-offset-4">
              Mini
            </Link>
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">{h1}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Straight numbers, no sales pitch: what a multi-day Gujarati or Hindu destination wedding in
            Mexico and Punta Cana actually costs in 2026, the customs fees to expect when outfits ship
            from India, how resort room-block rules create financial risk, and the operational
            boundaries between the resort&apos;s team and yours.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6">
        {/* Cost breakdown table */}
        <section className="pt-16">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Typical 3-Day Wedding Budget (150–200 Guests)
          </h2>
          <p className="mt-4 leading-8 text-[#4d403a]">
            These are planning ranges, not quotes — every resort prices its own events. Added up, the
            categories below put a typical three-day celebration between $50,000 and $85,000 USD once
            families scale individual lines up or down. Guest flights and hotel rooms are paid by guests
            or handled separately through the room block.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#e6dfd5] bg-white">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm leading-6">
              <thead>
                <tr className="bg-[#7a6841] text-white">
                  <th scope="col" className="px-5 py-4 font-semibold">Expense Category</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Typical Cost Range (USD)</th>
                  <th scope="col" className="px-5 py-4 font-semibold">What It Includes</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((row, index) => (
                  <tr key={row.category} className={index % 2 === 0 ? "bg-white" : "bg-[#f8f6f2]"}>
                    <th scope="row" className="px-5 py-4 align-top font-semibold text-[#1f1f1f]">
                      {row.category}
                    </th>
                    <td className="whitespace-nowrap px-5 py-4 align-top font-semibold text-[#7a6841]">{row.range}</td>
                    <td className="px-5 py-4 align-top text-[#4d403a]">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-6 text-[#5e4a40]">
            On mobile, scroll the table sideways — every number is there. Compare it against your written
            resort proposal line by line, not against this page alone.
          </p>
        </section>

        {/* Q&A 1 — Room blocks */}
        <article className="pt-16">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            How do resort room block commitments work, and what is the financial risk for the family?
          </h2>
          <div className="mt-6 space-y-6 leading-8 text-[#4d403a]">
            <p>
              When a resort holds rooms for your wedding dates, the contract includes an attrition clause —
              usually 75% to 80% occupancy. That means the family guarantees that 75–80% of the blocked rooms
              will actually be booked by guests. Every unbooked room night below that line becomes a bill the
              family pays, often at full rack rate, before the wedding even starts.
            </p>
            <p>
              The risk is real because our guests book differently. Families wait for visa confirmations,
              school holidays, and — honestly — for the couple&apos;s parents to confirm dates out loud. If 40
              rooms go unreserved and your attrition line is 80%, the shortfall is not the resort&apos;s
              problem. It is a line item on your final invoice.
            </p>
            <p>Three strategies prevent that exposure:</p>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Start small, expand later.</strong> Sign a smaller guaranteed block and add rooms as
                RSVPs confirm. Adding rooms is almost always easier than removing liability.
              </li>
              <li>
                <strong>Get the cutoff and the numbers in writing.</strong> The cutoff date, the attrition
                percentage, the per-night penalty, and who collects guest deposits all belong in the proposal
                you sign — not in a sales call.
              </li>
              <li>
                <strong>Give guests one simple booking path.</strong> Most attrition shortfalls happen because
                guests booked elsewhere or waited too long. One shared booking link, one deadline, one reminder
                schedule.
              </li>
            </ul>
            <p>
              The full mechanics — building assignments, elder-friendly floors, day passes — are covered in the{" "}
              <Link href="/indian-wedding-room-block-mexico/" className="font-semibold text-[#7a6841] underline">
                Mexico room-block guide
              </Link>{" "}
              and the{" "}
              <Link href="/blog/south-asian-destination-wedding-guide/" className="font-semibold text-[#7a6841] underline">
                South Asian family room-block guide
              </Link>
              .
            </p>
          </div>
        </article>

        {/* Q&A 2 — Customs */}
        <article className="pt-16">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            What are the import duties and customs costs when shipping wedding outfits from India to the US or Canada?
          </h2>
          <div className="mt-6 space-y-6 leading-8 text-[#4d403a]">
            <p>
              <strong>United States:</strong> shipments valued over $800 USD lose the personal exemption
              (Section 321) and pay import tariffs that typically run 6% to 18% depending on the fabric and
              construction — silk garments sit at the higher end, cotton and synthetics lower. The assessment
              is made by US Customs and Border Protection on the declared value and classification.
            </p>
            <p>
              <strong>Canada:</strong> there is no low-value relief for wedding textiles. Shipments incur full
              GST/HST plus standard textile tariffs of up to 18% regardless of value, and brokerage fees stack
              on top. Budget the landed cost before you order, not after the courier texts you.
            </p>
            <div className="rounded-2xl border-2 border-[#7a6841] bg-[#f8f6f2] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5e4a40]">The landed cost formula</p>
              <p className="mt-3 font-serif text-xl leading-8 text-[#7a6841]">
                Total Cost = Garment Price + Tailoring + Express Shipping + Import Tariffs + Local Taxes
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5e4a40]">
                A $700 lehenga with $150 of tailoring and $180 of express shipping is not a $700 lehenga. Run
                every piece through this formula before you approve production.
              </p>
            </div>
            <p>
              The country-specific breakdowns — including brokerage, GST/HST on Canadian deliveries, and
              realistic timelines — are in the{" "}
              <Link href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/" className="font-semibold text-[#7a6841] underline">
                US shipping and customs guide
              </Link>{" "}
              and the{" "}
              <Link href="/indian-wedding-shopping-canada/" className="font-semibold text-[#7a6841] underline">
                Canada service and customs overview
              </Link>
              .
            </p>
          </div>
        </article>

        {/* Q&A 3 — Coordinator comparison */}
        <article className="pt-16">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            What is the difference between a resort wedding coordinator and an independent family coordinator?
          </h2>
          <p className="mt-6 leading-8 text-[#4d403a]">
            Both roles matter and they are not competitors — but they answer to different sides of the
            contract. Confusing them is how families end up assuming someone is handling logistics that nobody
            was hired to handle.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {coordinatorComparison.map((column) => (
              <div key={column.focus} className="rounded-2xl border border-[#e6dfd5] bg-white p-6">
                <h3 className="font-serif text-xl font-semibold text-[#7a6841]">{column.focus}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4d403a]">
                  {column.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden="true" className="text-[#7a6841]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 leading-8 text-[#4d403a]">
            In practice: the resort coordinator executes what the resort sells. A family coordinator —
            CeremonyVerse — plans the parts the resort never sold you: the four-day timeline, the Jain menu
            confirmations, the elder room placements, the outside vendor paperwork, and the questions that
            need answers before you sign.
          </p>
        </article>

        {/* Q&A 4 — Outside vendors & Maharaj */}
        <article className="pt-16">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Can we bring our own Hindu priest (Maharaj) and outside vendors to Mexico or Punta Cana?
          </h2>
          <div className="mt-6 space-y-6 leading-8 text-[#4d403a]">
            <p>
              Yes — with the resort&apos;s written approval and, in most cases, a fee. Outside vendor passes
              typically run <strong>$150 to $1,000 per vendor per day</strong>, depending on the property, the
              vendor type, and the event. A Maharaj attending one ceremony is a different cost than a
              photographer crew covering four days; get each one itemized.
            </p>
            <p>
              Three rules keep this from becoming a surprise invoice:
            </p>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Every outside vendor goes on one written list</strong> — name, role, dates, and hours
                on site. Vendors on the property more than four hours often trigger vendor meal charges too.
              </li>
              <li>
                <strong>Ask about night-stay waivers directly.</strong> Some properties waive or reduce pass
                fees if the vendor books a room night; others discount for multi-day crews. None of it is
                offered unless you ask for it in writing.
              </li>
              <li>
                <strong>Confirm the Maharaj&apos;s requirements early.</strong> Ceremony timing, a small mandap
                space, and whether fire rituals are permitted outdoors are resort-policy questions — confirm
                them in the banquet documentation, and reconfirm at the tasting.
              </li>
            </ul>
            <p>
              The vendor-by-vendor question list is in{" "}
              <Link href="/nri-gujarati-wedding-vendor-questions/" className="font-semibold text-[#7a6841] underline">
                questions to ask Gujarati wedding vendors before you book
              </Link>
              .
            </p>
          </div>
        </article>

        {/* CTA footer */}
        <section className="my-16 rounded-2xl bg-[#1f1f1f] p-8 text-center text-white sm:p-12">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Want to review your resort proposals or test your guest costs before committing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Bring the numbers you just read to a free 30-minute consultation, or run your own guest count
            through the budget calculator first — no payment, no contract.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/?service=mexico&from=costs-guide"
              className="rounded-full bg-[#c5a059] px-8 py-4 text-sm font-semibold text-[#1f1f1f] transition hover:bg-[#d4b06a]"
            >
              Schedule Free 30-Minute Consultation
            </Link>
            <Link
              href="/planning-tools/"
              className="rounded-full border border-[#c5a059] px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Try Free Budget Calculator
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
