import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildBlogPosting, buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo";

const title = "Hidden Resort Fees for a 4-Day Indian Wedding in Cancún";
const description =
  "The private-event minimums, outside-vendor fees, production charges, day passes, and taxes that a multi-day Indian wedding in Cancún adds beyond the resort package.";
const path = "/blog/hidden-resort-fees-4-day-indian-wedding-cancun/";
const lastModified = "2026-09-08T12:00:00-04:00";

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
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: title,
  description,
  url: path,
  datePublished: "2026-09-08T12:00:00-04:00",
  dateModified: lastModified,
  authorName: "CeremonyVerse",
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
      "It is a charge resorts apply when a decorator, DJ, photographer, makeup artist, or other provider is not on the resort's approved list. Published regional cost guides commonly place these fees at roughly $500 to $1,000 or more per outside vendor, and fees can apply per event day. The resort's current written proposal controls the actual amount.",
  },
  {
    question: "Do guests staying at other resorts need day passes for wedding events?",
    answer:
      "Usually yes at all-inclusive properties. Guests not staying at the host resort typically need a day or evening pass for each event they attend, and published regional guides commonly show these at roughly $100 to $200 or more per person per event. Multiply passes by events when comparing resorts.",
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
          A traditional four-day celebration — Mendhi, Haldi, Sangeet, the wedding with Baraat, and a reception — is
          not one resort event. It is four or five private events, each with its own minimums, rules, and surcharges.
          The fees that surprise families are rarely hidden on purpose; they simply live in a different section of the
          proposal than the package price.
        </p>
        <p className="mb-12 text-sm text-[#4d403a]">By CeremonyVerse · Updated September 8, 2026</p>

        <div className="space-y-7 text-[1.06rem] leading-8 text-[#4d403a]">
          <p>
            The direct answer first: on top of the published wedding package, a multi-day Indian wedding in Cancún
            commonly adds private-event minimums for each event, outside-vendor fees, production and staging for the
            Sangeet, setup and overtime charges, day passes for guests staying elsewhere, and taxes and service
            charges applied at the end. Together these can equal or exceed the package price itself. Every figure
            below is a planning range — the resort&apos;s current written proposal controls the actual amounts.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">1. Private-event minimums — one per event, not one per wedding</h2>
          <p>
            All-inclusive resorts treat each celebration as a separate private event with its own food-and-beverage
            minimum. A four-day program — Mendhi night, Haldi or Pithi morning, Sangeet, and the wedding followed by
            the reception — can mean four or five minimums. At upscale Cancún properties, published planning guides
            commonly show private-event minimums in the range of several thousand dollars per event, rising with
            venue exclusivity and season. The correct comparison question is never &quot;what is the wedding
            package?&quot; but &quot;what are the minimums for every event we are hosting?&quot;
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">2. Outside-vendor fees</h2>
          <p>
            If your decorator, DJ, photographer, makeup artist, or mehndi artist is not on the resort&apos;s approved
            list, the resort typically charges an outside-vendor fee — commonly reported around $500 to $1,000 or
            more per vendor, and often per event day. Five traveling or local vendors across four event days can add
            a five-figure line before a single flower is installed. Ask for the approved-vendor list and the exact
            outside-vendor fee schedule in writing before choosing providers.
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
            Installation labor is billed separately from décor. Beach and lawn mandaps cannot be drilled into the
            ground, so they require weighted bases; fresh flowers often need conditioning time on site; and each
            event&apos;s teardown window may be shorter than families expect. Confirm setup and teardown windows,
            labor rates, and any overnight-security requirement for installed décor in the written proposal.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">5. Overtime and late-night surcharges</h2>
          <p>
            Private events at all-inclusive resorts usually have a curfew — commonly around 10 or 11 p.m. — after
            which hourly overtime charges apply. Sangeets and receptions rarely end early, so the safest plan is to
            price the overtime rate and the noise-curfew rules before signing, not during the wedding week. Some
            venues require events to move indoors or end entirely at a fixed hour.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">6. Day passes for guests staying elsewhere</h2>
          <p>
            Guests who book other hotels or vacation rentals typically need a day or evening pass to attend events at
            an all-inclusive resort, commonly around $100 to $200 or more per person per event. Fifty outside guests
            across two events can quietly become a five-figure line. If many guests will stay off property, compare
            resorts by their day-pass policy as seriously as by their package price.
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
            Most Cancún and Riviera Maya resorts add tax and service charges to event charges, and published regional
            cost guides commonly place the combined addition in the range of 15 to 20 percent or more. The critical
            planning detail is not the exact percentage — it is whether every quote you compare already includes it.
            Always ask: &quot;Is this number the final billed amount, or the pre-tax, pre-service base?&quot;
          </p>

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
            <strong>Source note:</strong> Fee ranges in this article reflect published Cancún and Riviera Maya
            destination-wedding cost guides and family-reported figures reviewed on September 8, 2026. Amounts vary
            by property, season, guest count, and event count, and they change over time. The resort&apos;s current
            written proposal and event contract control all actual fees. This article is planning information, not
            legal, tax, or travel-provider advice.
          </p>
        </div>
      </article>
    </main>
  );
}
