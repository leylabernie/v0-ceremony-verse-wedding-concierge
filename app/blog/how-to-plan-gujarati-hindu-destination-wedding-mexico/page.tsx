import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildBlogPosting, buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo";

const title = "How to Plan a Gujarati or Hindu Destination Wedding in Mexico";
const description =
  "Plan a Gujarati or Hindu destination wedding in Mexico with clear guest-document, resort, budget, cultural, family, and on-site responsibilities.";
const path = "/blog/how-to-plan-gujarati-hindu-destination-wedding-mexico/";

export const metadata = buildMetadata({
  path,
  title,
  description,
  keywords: [
    "Gujarati destination wedding Mexico",
    "Hindu destination wedding Mexico",
    "Indian wedding planning Mexico",
    "Mexico Indian wedding planner",
  ],
  publishedTime: "2026-08-10T12:00:00-04:00",
  modifiedTime: "2026-08-11T16:00:00-04:00",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: title,
  description,
  url: path,
  datePublished: "2026-08-10T12:00:00-04:00",
  dateModified: "2026-08-11T16:00:00-04:00",
  authorName: "CeremonyVerse",
  keywords: ["Gujarati destination wedding Mexico", "Hindu wedding Mexico", "Indian wedding planning Mexico"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: title, url: path },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Does CeremonyVerse plan Gujarati and Hindu weddings throughout Mexico?",
    answer:
      "CeremonyVerse currently supports Gujarati and Hindu destination-wedding planning across Mexico, not only Cancun or Riviera Maya. The appropriate location depends on guest travel, resort fit, event needs, budget, dates, and the current written proposal.",
  },
  {
    question: "Should we plan a legal marriage or a symbolic ceremony in Mexico?",
    answer:
      "That is a legal and personal decision. Civil-marriage rules and document requirements can change, while religious and family ceremonies have separate needs. Confirm the current legal process with the applicable civil authority and qualified adviser before relying on a destination ceremony for legal status.",
  },
  {
    question: "What should families check before choosing a Mexico resort?",
    answer:
      "Confirm event spaces and rain backups, guest capacities, food and beverage, room-block terms, outside-vendor rules, production limits, sound restrictions, accessibility, transfers, taxes, service charges, and every cultural or dietary requirement in the resort's current written proposal.",
  },
  {
    question: "Who decides which Gujarati or Hindu traditions apply?",
    answer:
      "The couple, family, and officiant remain the authority. CeremonyVerse can organize the approved ceremony schedule, responsibilities, vendor questions, and logistics without presenting one family's customs as universal.",
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
          Destination-wedding planning · 9 min read
        </p>
        <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#1f1f1f] md:text-5xl">{title}</h1>
        <p className="mb-6 text-lg leading-8 text-[#4d403a]">
          A destination wedding becomes manageable when the family&apos;s cultural decisions, the resort&apos;s written
          terms, and each planner&apos;s responsibilities are organized in one working plan.
        </p>
        <p className="mb-12 text-sm text-[#4d403a]">By CeremonyVerse · Updated August 11, 2026</p>

        <div className="space-y-7 text-[1.06rem] leading-8 text-[#4d403a]">
          <p>
            For a Gujarati or Hindu family living in the United States or Canada, planning a wedding in Mexico is not
            simply a matter of selecting an all-inclusive package. The celebration may include several ceremonies,
            family members arriving from different countries, religious requirements, multiple private events,
            special meals, outfits and ceremony items from India, and decisions that must be approved across time
            zones.
          </p>
          <p>
            The safest starting point is a written decision framework. It should show what the family has approved,
            what the resort has confirmed, what remains an estimate, and who is responsible for every deadline. The
            current resort, vendor, carrier, and travel-provider documents always control their own prices, policies,
            and availability.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">1. Let the family and officiant define the ceremonies</h2>
          <p>
            Gujarati and Hindu weddings are not one fixed template. Begin with the couple, immediate family, and
            officiant. Record which ceremonies will take place, who participates, how long each one needs, what must
            be present, and which customs are essential rather than optional. A family may combine or separate
            Mehndi, Pithi or Vidhi, Garba or Sangeet, the wedding ceremony, and the reception. Another family may use a
            different sequence.
          </p>
          <p>
            This protects the wedding from a common mistake: choosing event spaces and times first, then discovering
            that the approved ceremony plan cannot fit them. CeremonyVerse organizes the family-approved plan; it does
            not replace the family or officiant as the authority on tradition.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">2. Define what the total budget must cover</h2>
          <p>
            A resort&apos;s wedding-package price is only one part of the host budget. List the resort package, private
            venues, food and beverage, guest overages, decor, production, photography, entertainment, planner and
            on-site support, vendor fees, transfers, welcome items, outfits, ceremony materials, taxes, service
            charges, family travel, and contingency. If the family is paying for VIP rooms or flights, include them
            explicitly.
          </p>
          <p>
            Use the free <Link href="/planning-tools/budget/" className="font-semibold text-[#7a6841] underline">destination-wedding budget calculator</Link> to
            separate known quotes from estimates, then review the <Link href="/indian-destination-wedding-cost/" className="font-semibold text-[#7a6841] underline">complete-cost framework</Link>. Do not assume that a particular guest count or resort is possible within a target budget until the important categories have current numbers.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">3. Check guest travel documents before signing the room block</h2>
          <p>
            Create a private guest-origin summary: passport nationality, country of residence, passport-expiration
            concerns, and whether anyone may need a visa or other documentation. Do not collect unnecessary document
            numbers in a general spreadsheet. The purpose is to identify risk early, especially when relatives will
            travel from India or another country outside the United States or Canada.
          </p>
          <p>
            Mexico&apos;s official guidance says entry requirements depend on the traveler&apos;s passport and supporting
            status. Some travelers may qualify for a visa exemption based on a valid multiple-entry visa or permanent
            residence from an eligible country, but the exact document and validity matter. Verify every traveler
            directly with a Mexican consulate and the airline before money becomes difficult to recover. Review the
            current <a href="https://www.gob.mx/sre/documentos/entry-requirements-for-mexico" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7a6841] underline">Government of Mexico entry guidance</a> and the
            relevant <a href="https://consulmex.sre.gob.mx/montreal/index.php/en/foreigners/visa/354-how-can-i-know-if-i-need-a-visa-to-go-to-me" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7a6841] underline">Mexican consular visa guidance</a>.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">4. Compare resorts by the wedding you actually need</h2>
          <p>
            Mexico means more than Cancun and Riviera Maya. The right shortlist can include other Mexican resort areas
            when the flights, property, dates, guest profile, and event requirements fit. Compare exact properties,
            not only brands or package names.
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Capacity and privacy for every event, plus a usable weather backup.</li>
            <li>Private-event duration, setup windows, sound limits, and curfews.</li>
            <li>Indian and Jain meal capability, allergy handling, tastings, and outside-food rules.</li>
            <li>Room-block minimums, attrition or cancellation terms, concessions, and payment dates.</li>
            <li>Outside-vendor fees, approved-vendor restrictions, production rules, power, rigging, and fire safety.</li>
            <li>Accessibility, child and senior needs, airport transfers, and movement between guest rooms and venues.</li>
          </ul>
          <p>
            Treat published packages as a starting point. Inclusions, menus, venues, taxes, fees, promotions, and
            availability may change until confirmed in the current written proposal and paid under its terms.
          </p>
          <p>
            Use the dedicated <Link href="/destinations/cancun-indian-wedding/" className="font-semibold text-[#7a6841] underline">Cancún Indian wedding guide</Link> and <Link href="/destinations/riviera-maya-indian-wedding/" className="font-semibold text-[#7a6841] underline">Riviera Maya Indian wedding guide</Link> to compare the location-specific questions. If the family is also considering the Dominican Republic, review the <Link href="/destinations/punta-cana-indian-wedding/" className="font-semibold text-[#7a6841] underline">Punta Cana Indian wedding guide</Link> using the same assumptions.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">5. Build one event-by-event operating plan</h2>
          <p>
            For each event, record the venue, start and end time, weather backup, guest count, ceremony requirements,
            food and beverage, decor, entertainment, sound, family decision-maker, resort contact, local planner, and
            final approval date. Add setup and breakdown time rather than planning only the guest-facing hours.
          </p>
          <p>
            A <Link href="/planning-tools/family-responsibility-map/" className="font-semibold text-[#7a6841] underline">family responsibility map</Link> prevents well-meaning relatives from giving conflicting instructions. The <Link href="/indian-wedding-room-block-mexico/" className="font-semibold text-[#7a6841] underline">Mexico room-block guide</Link> separately identifies booking, deposit, attrition, concession, and provider questions.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">6. Separate remote planning from Mexico execution</h2>
          <p>
            The family needs one communication path, but not every role should be blended together. CeremonyVerse can
            coordinate the family-side plan, guest information, sourcing, approvals, and overall responsibilities.
            Mexico execution requires local knowledge and on-site control. CeremonyVerse works with a Mexico-based
            local planner for the in-country details defined in the private proposal.
          </p>
          <p>
            Before signing, list who negotiates with the resort, who manages vendors, who owns guest-room questions,
            who receives shipments, who supervises setup, and who has authority during each event. The client-facing
            proposal should provide a clear service scope, responsibilities, outside costs, and approval process.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">7. Protect the timeline with written approval gates</h2>
          <p>
            Dates change when approvals drift. Use milestones for resort selection, room-block signing, ceremony and
            venue confirmation, menu approval, decor and production, guest travel updates, outfit orders, shipping,
            final counts, and the on-site handoff. Each milestone should identify the approver, the document being
            approved, the amount due, and the consequence of missing the date.
          </p>
          <p>
            Travel insurance may be worth considering, but coverage, exclusions, deadlines, and claim decisions are
            controlled by the insurer&apos;s policy. No planner can guarantee weather, travel, customs, supplier
            performance, or a special request that the responsible provider has not confirmed in writing.
          </p>

          <div className="mt-10 rounded-2xl border border-[#d7c7a4] bg-white p-7">
            <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">A useful first consultation should answer five questions</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-6">
              <li>Which destinations and resorts deserve further review?</li>
              <li>What must the working budget include?</li>
              <li>Which guest-document or travel risks need attention before contracting?</li>
              <li>Which cultural, dietary, family, and accessibility needs affect resort fit?</li>
              <li>What is the next paid deliverable, if any?</li>
            </ol>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1f1f1f] p-8 text-center text-white">
            <h2 className="font-serif text-3xl font-semibold">Start with your dates, guest count, events, and budget</h2>
            <p className="mt-4 leading-7 text-[#e8dfd2]">
              The first conversation is a free consultation. If you need a written feasibility decision before full
              planning, the optional $300 Destination Wedding Feasibility &amp; Action Plan may be the appropriate next step.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact/?service=feasibility&from=mexico-planning-guide" className="rounded-full bg-[#c5a059] px-7 py-3 font-semibold text-[#1f1f1f]">
                Schedule Free Consultation
              </Link>
              <Link href="/indian-wedding-coordination-mexico/" className="rounded-full border border-[#c5a059] px-7 py-3 font-semibold text-white">
                Review Destination Planning
              </Link>
            </div>
          </div>

          <p className="border-t border-[#e6dfd5] pt-6 text-sm leading-6">
            <strong>Source note:</strong> Travel-document information was reviewed from official Government of Mexico
            and Mexican consular pages on August 10, 2026. Rules and individual eligibility can change. This article
            is planning information, not immigration, legal, insurance, tax, or travel-provider advice.
          </p>
        </div>
      </article>
    </main>
  );
}
