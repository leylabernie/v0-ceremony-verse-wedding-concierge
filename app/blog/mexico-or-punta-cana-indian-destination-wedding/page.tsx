import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildBlogPosting, buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo";

const title = "Mexico or Punta Cana for an Indian Destination Wedding?";
const description =
  "Compare Mexico and Punta Cana for an Indian destination wedding using guest travel, resorts, event spaces, food, vendor rules, total cost, and execution.";
const path = "/blog/mexico-or-punta-cana-indian-destination-wedding/";

export const metadata = buildMetadata({
  path,
  title,
  description,
  keywords: [
    "Mexico vs Punta Cana Indian wedding",
    "Indian destination wedding Punta Cana",
    "Gujarati wedding Mexico",
    "Hindu destination wedding comparison",
  ],
  publishedTime: "2026-08-10T12:00:00-04:00",
  modifiedTime: "2026-08-10T12:00:00-04:00",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: title,
  description,
  url: path,
  datePublished: "2026-08-10T12:00:00-04:00",
  dateModified: "2026-08-10T12:00:00-04:00",
  authorName: "CeremonyVerse",
  keywords: ["Mexico vs Punta Cana Indian wedding", "Indian destination wedding", "Gujarati Hindu wedding"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: title, url: path },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Is Mexico or Punta Cana cheaper for an Indian destination wedding?",
    answer:
      "Neither destination is automatically cheaper. Compare current written proposals with the same guest count, events, venue privacy, food and beverage, decor, production, vendor rules, room-block terms, taxes, service charges, travel, and planning scope.",
  },
  {
    question: "Which destination is easier for guests traveling from India?",
    answer:
      "That depends on each traveler's passport, visas or residence status, route, connection points, airline requirements, and dates. Check both destinations before signing a room block; do not assume that residence in the United States or Canada makes every traveler's documents equivalent.",
  },
  {
    question: "Does CeremonyVerse plan weddings in both destinations?",
    answer:
      "Yes. CeremonyVerse currently supports Gujarati and Hindu destination weddings across Mexico and in Punta Cana. The private proposal defines the selected planning, on-site, family-support, guest, and optional India-sourcing services.",
  },
  {
    question: "How should a family make the final choice?",
    answer:
      "Use a written comparison based on guest travel, resort and venue fit, ceremony schedule, cultural and dietary needs, room-block terms, outside-vendor rules, total host cost, and the execution team. Choose only after the important assumptions are confirmed or clearly marked as unresolved.",
  },
]);

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-blogposting" data={blogPostingSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <SeoNav />

      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7a6841]">
          Destination comparison · 8 min read
        </p>
        <h1 className="mb-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-[#1f1f1f] md:text-5xl">{title}</h1>
        <p className="mb-6 max-w-3xl text-lg leading-8 text-[#4d403a]">
          The better destination is the one that fits your real guests, ceremonies, written resort terms, and total
          host budget—not the one with the most attractive starting package.
        </p>
        <p className="mb-12 text-sm text-[#4d403a]">By CeremonyVerse · Published August 10, 2026</p>

        <div className="space-y-7 text-[1.06rem] leading-8 text-[#4d403a]">
          <p>
            Mexico and Punta Cana can both support multi-event Indian destination weddings, but they are not
            interchangeable. Mexico offers many resort regions and property styles across the country. Punta Cana is
            one destination area in the Dominican Republic with its own airport access, resort corridor, entry system,
            and vendor environment. The choice should be made property by property and proposal by proposal.
          </p>
          <p>
            CeremonyVerse&apos;s current destination focus is Gujarati and Hindu weddings across Mexico and in Punta
            Cana. Families can work with CeremonyVerse from anywhere in the United States or Canada. This comparison
            does not claim that one destination is universally easier, cheaper, or better.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">The short comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#e1d8c9] bg-white">
            <table className="min-w-[720px] w-full border-collapse text-left text-[0.96rem] leading-7">
              <thead className="bg-[#f1ece4] text-[#1f1f1f]">
                <tr>
                  <th className="p-4 font-semibold">Decision area</th>
                  <th className="p-4 font-semibold">Mexico</th>
                  <th className="p-4 font-semibold">Punta Cana</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Destination shape", "Multiple resort areas across the country; compare the exact region and property.", "A concentrated resort destination in the Dominican Republic; compare the exact property and transfer plan."],
                  ["Guest documents", "Requirements depend on passport and qualifying visas or residence documents.", "Requirements depend on passport and qualifying visas or residence documents; the official E-Ticket is required."],
                  ["Resort fit", "A broad shortlist can be useful, but package names and rules vary by property.", "A focused shortlist can be easier to compare, but package names and rules still vary by property."],
                  ["Events and culture", "Confirm spaces, rain backups, fire and production rules, Indian or Jain meals, and outside vendors in writing.", "Confirm the same items; do not assume a resort's South Asian experience covers your exact ceremonies or menu."],
                  ["Cost", "No universal winner. Use the complete written host cost.", "No universal winner. Use the complete written host cost."],
                  ["Execution", "Use a locally capable team for the selected Mexican region and resort.", "Use a locally capable team for Punta Cana and the selected resort."],
                ].map(([area, mexico, puntaCana]) => (
                  <tr key={area} className="border-t border-[#e6dfd5] align-top">
                    <th className="p-4 font-semibold text-[#1f1f1f]">{area}</th>
                    <td className="p-4">{mexico}</td>
                    <td className="p-4">{puntaCana}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">1. Start with the guest travel map</h2>
          <p>
            List where guests will begin their trips, especially immediate family traveling from India, and identify
            which travelers may need an individual document check. Compare practical flight options, connection
            points, airport transfers, arrival concentration, mobility needs, and the risk of guests booking the wrong
            airport or travel date.
          </p>
          <p>
            For Mexico, official guidance shows that visa requirements and possible exemptions depend on the actual
            passport and valid supporting document. For the Dominican Republic, official guidance also distinguishes
            travelers by nationality and qualifying visa or residence status. Every passenger entering or leaving the
            Dominican Republic must complete its official electronic entry and exit form. Review Mexico&apos;s
            <a href="https://consulmex.sre.gob.mx/boston/index.php/visas-english" target="_blank" rel="noopener noreferrer" className="ml-1 font-semibold text-[#7a6841] underline">current consular guidance</a>, the Dominican Republic&apos;s
            <a href="https://usa.mirex.gob.do/preguntas-frecuentes/" target="_blank" rel="noopener noreferrer" className="ml-1 font-semibold text-[#7a6841] underline">official visa and entry FAQ</a>, and the
            <a href="https://migracion.gob.do/en/e-ticket-electronic-ticket-of-entry-and-exit-of-the-dominican-republic/" target="_blank" rel="noopener noreferrer" className="ml-1 font-semibold text-[#7a6841] underline">official Dominican E-Ticket page</a>.
          </p>
          <p>
            Do not write “all guests can enter” in an invitation or planning document. Instead, give guests the
            official links and make each traveler responsible for current passports, visas, transit permissions, and
            required documents.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">2. Compare real event spaces, not destination photos</h2>
          <p>
            A beach image does not tell you whether the property can support a Mandap, a Baraat route, several hours
            of Garba, a private dinner, production power, weather backup, accessibility, or the sound level your
            entertainment requires. Ask both destinations the same questions for every event.
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>Which exact venue and backup are held for each date and time?</li>
            <li>What guest count, seating layout, stage, Mandap, dance floor, and production footprint are permitted?</li>
            <li>When can vendors enter, and when must setup and breakdown finish?</li>
            <li>What are the sound, fire, power, rigging, weather, and outside-vendor rules?</li>
            <li>Which menu and bar services are included, and which are charged per guest or per hour?</li>
          </ul>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">3. Test food and cultural execution in writing</h2>
          <p>
            “Indian wedding experience” can mean very different things. Ask for current menus, tasting rules,
            separate Jain or allergy procedures, kitchen and outside-catering rules, late-night food options, and the
            service plan for each event. If an outside caterer or specialty item is important, confirm the vendor fee,
            storage, kitchen access, staffing, security, transport, and liability requirements before treating it as
            approved.
          </p>
          <p>
            The same principle applies to ceremony knowledge. Your family and officiant approve the religious and
            cultural plan. The destination team translates that approved plan into venues, timelines, equipment,
            vendor instructions, and guest communication.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">4. Compare the complete host cost</h2>
          <p>
            Build one worksheet for each proposal using the same assumptions. Include the wedding package, private
            events, venues, food and beverage, additional guests, rooms paid by the family, planner and on-site team,
            decor, entertainment, photography, transfers, welcome items, vendor fees, production, taxes, service
            charges, travel, optional India sourcing, and contingency.
          </p>
          <p>
            A complimentary or low-cost ceremony package can still sit inside an expensive multi-event plan. A higher
            package price can include items that reduce later charges. Use the
            <Link href="/planning-tools/resort-comparison/" className="ml-1 font-semibold text-[#7a6841] underline">resort proposal calculator</Link> and the
            <Link href="/planning-tools/budget/" className="ml-1 font-semibold text-[#7a6841] underline">budget calculator</Link> to expose missing categories instead of choosing by the first total shown.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">5. Compare room-block risk and guest experience</h2>
          <p>
            Review minimum room nights, deposits, payment dates, attrition or cancellation terms, concessions,
            upgrades, children&apos;s rules, accessibility, and what happens when a guest books outside the block. Ask
            whether wedding-event access depends on staying at the resort and whether day-pass or guest fees apply.
          </p>
          <p>
            Then picture the full guest journey: airport arrival, transfer, check-in, room readiness, event directions,
            dietary questions, schedule changes, emergencies, and departure. The destination that creates the clearest
            manageable journey for your actual guest list may be more valuable than a small package difference.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">6. Choose the execution team with the destination</h2>
          <p>
            Local execution is not interchangeable. Confirm who knows the property, who manages the resort and
            vendors, who is present during setup and events, and who can make time-sensitive decisions. CeremonyVerse
            can organize the family-side plan, guest details, sourcing, and overall responsibilities; the private
            proposal defines the selected destination team and on-site scope.
          </p>

          <div className="mt-10 rounded-2xl border border-[#d7c7a4] bg-white p-7">
            <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">Choose Mexico when… choose Punta Cana when…</h2>
            <p className="mt-5">
              Choose Mexico when a specific Mexican property and region win on guest access, event fit, written costs,
              cultural execution, and contract terms. Choose Punta Cana when a specific Punta Cana property wins on
              those same facts. If neither proposal has enough evidence, the correct answer is not yet—not a guess.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1f1f1f] p-8 text-center text-white">
            <h2 className="font-serif text-3xl font-semibold">Need a written Mexico-versus-Punta-Cana decision?</h2>
            <p className="mt-4 leading-7 text-[#e8dfd2]">
              Start with a free consultation. The optional $300 Destination Wedding Feasibility &amp; Action Plan can
              review your facts and up to two current proposals, then document the important gaps and next actions.
            </p>
            <Link href="/contact/?service=feasibility&from=mexico-punta-cana-guide" className="mt-7 inline-flex rounded-full bg-[#c5a059] px-7 py-3 font-semibold text-[#1f1f1f]">
              Request a Free Consultation
            </Link>
          </div>

          <p className="border-t border-[#e6dfd5] pt-6 text-sm leading-6">
            <strong>Source note:</strong> Entry-document references were reviewed from official Mexican and Dominican
            government pages on August 10, 2026. Requirements can change and eligibility is traveler-specific. This
            article is planning information, not immigration, legal, insurance, or travel-provider advice.
          </p>
        </div>
      </article>
    </main>
  );
}
