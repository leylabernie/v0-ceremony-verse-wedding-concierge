import { VisibleFaqs } from "@/components/visible-faqs";
import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildBlogPosting, buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo";

const title = "Hidden Resort Fees for a 4-Day Indian Wedding in Cancún";
const description =
  "The private-event minimums, outside-vendor fees, production charges, day passes, and taxes that a multi-day Indian wedding in Cancún adds beyond the resort package.";
const path = "/blog/hidden-resort-fees-4-day-indian-wedding-cancun/";
const lastModified = "2026-09-13T12:00:00Z";

export const metadata = buildMetadata({
  path,
  title,
  description,
  keywords: [
    "hidden resort fees Indian wedding Cancun",
    "4 day Indian wedding all inclusive Cancun",
    "Indian destination wedding Mexico cost",
    "outside vendor fees Mexico resort",
  ],
  publishedTime: "2026-09-08T12:00:00-04:00",
  modifiedTime: lastModified,
  authorName: "Mini",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: title,
  description,
  url: path,
  datePublished: "2026-09-08T12:00:00-04:00",
  dateModified: lastModified,
  authorName: "Mini",
  keywords: [
    "hidden resort fees Indian wedding Cancun",
    "Indian wedding Cancun cost",
    "outside vendor fees Mexico resort",
    "multi-day Indian wedding Mexico",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: title, url: path },
]);

const faqSchema = buildFaqSchema([
  {
    question: "How much should we budget for hidden fees on a multi-day Indian wedding in Cancún?",
    answer:
      "There is no single number, because each resort prices events separately. Families should budget for private-event minimums, outside-vendor fees, production and AV, setup and overtime charges, guest day passes, and taxes and service charges on top of the package price. Every amount belongs in the resort's current written proposal before signing.",
  },
  {
    question: "What is an outside-vendor fee at a Cancún or Riviera Maya resort?",
    answer:
      "It is a charge some resorts apply when a decorator, DJ, photographer, makeup artist, or other provider is not on the resort's approved list. The fee may be assessed per vendor, per person, or per event day, depending on the property. The resort's current written proposal controls the actual amount and basis.",
  },
  {
    question: "Do guests staying at other resorts need day passes for wedding events?",
    answer:
      "Often, but the rule varies by property. Guests not staying at the host resort may need a day or evening pass for each event they attend, and some resorts limit how many outside guests may enter. Confirm the current price, access hours, event coverage, and guest limit in writing before comparing resorts.",
  },
  {
    question: "How do we confirm all fees before signing a resort contract?",
    answer:
      "Ask the resort for a written, itemized estimate covering every event day: private-event minimums, outside-vendor fees, production, setup and teardown, overtime, security, power, permits, day passes, taxes, and service charges. If a number is not in writing, treat it as unknown rather than included.",
  },
]);

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-blogposting" data={blogPostingSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <SeoNav />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7a6841]">
          Destination-wedding costs · 8 min read
        </p>
        <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#1f1f1f] md:text-5xl">{title}</h1>
        <p className="mb-6 text-lg leading-8 text-[#4d403a]">
          A traditional four-day celebration — Mehndi, Haldi, Sangeet, the wedding with Baraat, and a reception — is
          not one resort event. It is four or five private events, each with its own minimums, rules, and surcharges.
          The fees that surprise families are rarely hidden on purpose; they simply live in a different section of the
          proposal than the package price.
        </p>
        <p className="mb-12 text-sm text-[#4d403a]">By <a href="/about/mini/" className="text-[#7a6841] underline underline-offset-4">Mini</a> · Updated September 13, 2026</p>

        <div className="space-y-7 text-[1.06rem] leading-8 text-[#4d403a]">
          <p>
            The direct answer first: on top of the published wedding package, a multi-day Indian wedding in Cancún
            commonly adds private-event minimums for each event, outside-vendor fees, production and staging for the
            Sangeet, setup and overtime charges, day passes for guests staying elsewhere, and taxes and service
            charges applied at the end. Together these can materially change the total. The resort&apos;s current written
            proposal controls the actual amounts and how each fee is assessed.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">1. Private-event minimums — one per event, not one per wedding</h2>
          <p>
            Resorts may price celebrations as separate private events with their own food-and-beverage
            minimums. A four-day program — Mehndi night, Haldi or Pithi morning, Sangeet, and the wedding followed by
            the reception — can mean four or five minimums, depending on the resort&apos;s event structure, venue
            exclusivity, and season. The correct comparison question is never &quot;what is the wedding
            package?&quot; but &quot;what are the minimums for every event we are hosting?&quot;
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">2. Outside-vendor fees</h2>
          <p>
            If your decorator, DJ, photographer, makeup artist, or mehndi artist is not on the resort&apos;s approved
            list, the resort may charge an outside-vendor fee. It may be calculated per vendor, per person, or per
            event day, so several traveling or local providers across a multi-day program can create a substantial
            additional cost. Ask for the approved-vendor list and the exact outside-vendor fee schedule in writing
            before choosing providers.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">3. Production: the Sangeet is a show, and shows need power</h2>
          <p>
            A Sangeet with family performances needs a stage, a real sound system, microphones, lighting, and a dance
            floor. A Baraat needs its own sound and safety plan. These are rental and technician charges separate
            from the DJ&apos;s fee, and they are one of the most commonly underestimated lines in a multi-day Indian
            wedding budget. Ask each resort what production equipment is included, what must be rented through the
            resort, and what outside companies are permitted to bring in.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">4. Setup, teardown, and mandap installation</h2>
          <p>
            Installation labor may be billed separately from décor. Beach and lawn mandaps need an approved anchoring
            method; fresh flowers often need conditioning time on site; and each
            event&apos;s teardown window may be shorter than families expect. Confirm setup and teardown windows,
            labor rates, and any overnight-security requirement for installed décor in the written proposal.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">5. Overtime and late-night surcharges</h2>
          <p>
            Private events at all-inclusive resorts have property- and venue-specific end times. After the contracted
            end time, overtime may be unavailable or may trigger hourly charges. Price the overtime rate and confirm
            the noise-curfew rules before signing, not during the wedding week. Some venues require events to move
            indoors or end entirely at a fixed hour.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">6. Day passes for guests staying elsewhere</h2>
          <p>
            Guests who book other hotels or vacation rentals may need a day or evening pass to attend events at an
            all-inclusive resort. Pricing, access hours, event coverage, and limits on outside guests vary by
            property. If many guests will stay off property, compare resorts by their written day-pass policy as
            seriously as by their package price.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">7. Room-block attrition</h2>
          <p>
            When a family commits to a block of guest rooms, the contract usually includes an attrition clause: if
            fewer rooms fill than promised, the family pays the difference. Read the attrition percentage, the
            evaluation date, and what counts as a &quot;filled&quot; room before signing. The{" "}
            <Link href="/indian-wedding-room-block-mexico/" className="font-semibold text-[#7a6841] underline">
              Mexico room-block guide
            </Link>{" "}
            lists the questions that protect families on this exact clause.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">8. Outside food, cake-cutting, and corkage fees</h2>
          <p>
            Outside sweets, an eggless cake from a specialty bakery, or prasad from the family may trigger per-item
            fees, and some resorts prohibit outside food entirely. Because Indian wedding catering has its own set of
            resort rules, we cover food, outside chefs, and Jain requirements separately in the{" "}
            <Link href="/blog/indian-wedding-catering-mexico-all-inclusive-resorts/" className="font-semibold text-[#7a6841] underline">
              Indian wedding catering guide for Mexico all-inclusive resorts
            </Link>
            .
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">9. Power drops, permits, and security</h2>
          <p>
            Live food stations such as chaat or dosa counters need dedicated power. Fire, sparklers, and fireworks are
            restricted or banned at many properties. Private events may require hired security. Each of these is a
            real line item with a real price, and each one is cheaper to confirm in the proposal than to discover
            during the wedding week.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">10. Taxes and service charges — applied to everything above</h2>
          <p>
            Resorts may add tax and service charges to event charges. The critical planning detail is the percentage
            shown in the current proposal, which lines it applies to, and whether every quote you compare already
            includes it.
            Always ask: &quot;Is this number the final billed amount, or the pre-tax, pre-service base?&quot;
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">A dollar sensitivity worksheet for a four-day wedding</h2>
<p>The numbers below are deliberately hypothetical planning inputs, not verified fee ranges or quotes for Cancún resorts. They show how to test budget exposure while waiting for the property’s written schedule. Replace every number before signing; zero means waived only if the resort confirms that in writing.</p>
<ul className="list-disc space-y-3 pl-6">
<li>Outside vendors: test $500–$1,500 per vendor against three vendors: $1,500–$4,500, before any repeat-day charge.</li>
<li>Additional venue or setup: test $1,000–$3,000 for each of two extra events: $2,000–$6,000.</li>
<li>Off-property access: test $100–$200 per guest per event for 20 guests attending twice: $4,000–$8,000.</li>
<li>Overtime: test $500–$1,500 per hour for two hours: $1,000–$3,000, only if extended hours are allowed.</li>
<li>Transfers: test $40–$100 round trip for 100 guests if the hosts pay: $4,000–$10,000. Vehicle type, route, baggage, and arrival waves need an actual transport quote.</li>
</ul>
<p>These illustrative lines alone span $12,500–$31,500 before any applicable taxes or service charges. Do not add them again if your proposal already includes them. For room-block exposure, test the actual contract formula: ten unfilled room nights at an assumed $300 would be $3,000 before any permitted release or credit. A reserve is useful, but it does not replace a missing quote.</p>
<h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">How to protect the family budget</h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>Request a written, itemized estimate for every event day — minimums, vendor fees, production, setup, overtime, security, power, permits, day passes, taxes, and service charges.</li>
            <li>Separate known quotes from estimates using the free <Link href="/planning-tools/budget/" className="font-semibold text-[#7a6841] underline">destination-wedding budget calculator</Link>, then review the <Link href="/indian-destination-wedding-cost/" className="font-semibold text-[#7a6841] underline">complete-cost framework for Indian destination weddings</Link>.</li>
            <li>Before signing, work through the <Link href="/before-signing-indian-wedding-resort-proposal/" className="font-semibold text-[#7a6841] underline">five questions to answer before signing an Indian wedding resort proposal</Link>.</li>
          </ol>
          <p>
            Comparing resorts is easier with the{" "}
            <Link href="/destinations/cancun-indian-wedding/" className="font-semibold text-[#7a6841] underline">Cancún Indian wedding guide</Link>, the{" "}
            <Link href="/destinations/riviera-maya-indian-wedding/" className="font-semibold text-[#7a6841] underline">Riviera Maya Indian wedding guide</Link>, and the{" "}
            <Link href="/resorts/" className="font-semibold text-[#7a6841] underline">resort profiles hub</Link>, which list the questions that reveal these fees early.
          </p>

          <div className="mt-12 rounded-2xl bg-[#1f1f1f] p-8 text-center text-white">
            <h2 className="font-serif text-3xl font-semibold">Already holding a resort proposal?</h2>
            <p className="mt-4 leading-7 text-[#e8dfd2]">
              A line-by-line review of what a proposal is silently missing is exactly what the optional $300
              Destination Wedding Feasibility &amp; Action Plan is for. The first conversation is always free.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact/?service=feasibility&from=hidden-fees-article" className="rounded-full bg-[#c5a059] px-7 py-3 font-semibold text-[#1f1f1f]">
                Schedule a Free 30-Minute Consultation
              </Link>
              <Link href="/destination-wedding-feasibility-plan/" className="rounded-full border border-[#c5a059] px-7 py-3 font-semibold text-white">
                See the $300 Feasibility Plan
              </Link>
            </div>
          </div>

          <p className="border-t border-[#e6dfd5] pt-6 text-sm leading-6">
            <strong>Source note:</strong> Resort fee structures vary by property and change over time. This article
            identifies cost categories to request and compare; it does not quote a current fee for any named resort.
            The resort&apos;s current written proposal and event contract control all actual fees. This article is
            planning information, not legal, tax, or travel-provider advice.
          </p>
        </div>
      <VisibleFaqs schema={faqSchema} />
      </article>
    </main>
  );
}
