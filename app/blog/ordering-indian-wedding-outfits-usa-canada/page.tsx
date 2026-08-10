import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildBlogPosting, buildBreadcrumb, buildFaqSchema, buildMetadata, JsonLd } from "@/lib/seo";

const title = "Ordering Indian Wedding Outfits from India to the USA or Canada";
const description =
  "A practical guide to ordering Indian wedding outfits for U.S. or Canadian delivery, including vendor evidence, measurements, written approvals, shipping, duties, taxes, brokerage, and alterations.";
const path = "/blog/ordering-indian-wedding-outfits-usa-canada/";

export const metadata = buildMetadata({
  path,
  title,
  description,
  keywords: [
    "order Indian wedding outfits from India USA",
    "Indian wedding outfits Canada shipping",
    "bridal lehenga customs USA Canada",
    "India wedding outfit sourcing",
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
  keywords: ["Indian wedding outfits USA", "Indian wedding outfits Canada", "India sourcing", "customs and shipping"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: title, url: path },
]);

const faqSchema = buildFaqSchema([
  {
    question: "Will Indian wedding outfits arrive duty-free in the United States?",
    answer:
      "Do not assume that. U.S. Customs and Border Protection determines entry treatment and any duty based on the shipment and current rules. The garment's classification, fiber content, construction, declared value, origin, and entry method can matter, while carriers or brokers may charge separate clearance fees.",
  },
  {
    question: "What charges can apply to an outfit delivered in Canada?",
    answer:
      "A Canadian shipment may be assessed duty, GST or HST, applicable provincial tax, and courier brokerage, disbursement, or clearance fees. The final government assessment and carrier terms control; a planning estimate is not a guarantee.",
  },
  {
    question: "Does tracking guarantee the delivery date?",
    answer:
      "No. Tracking provides carrier scan information, not a guaranteed customs decision or delivery date. Confirm the service level, tracking method, insurance, claim procedure, importer or recipient, and responsibility for duties, taxes, brokerage, storage, and redelivery in writing.",
  },
  {
    question: "How can CeremonyVerse help with India sourcing?",
    answer:
      "Depending on the selected written scope, CeremonyVerse can organize vendor and item evidence, eligible live review, measurements, approvals, order follow-up, available pre-shipping review, and U.S. or Canadian shipping-document and tracking coordination. Product, carrier, customs, fit, and delivery outcomes remain subject to the responsible providers and signed terms.",
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
          India sourcing and delivery · 9 min read
        </p>
        <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#1f1f1f] md:text-5xl">{title}</h1>
        <p className="mb-6 text-lg leading-8 text-[#4d403a]">
          The reliable way to compare an India order is to document the item, fit plan, approvals, complete landed
          cost, shipping responsibilities, and local alteration buffer before payment.
        </p>
        <p className="mb-12 text-sm text-[#4d403a]">By CeremonyVerse · Published August 10, 2026</p>

        <div className="space-y-7 text-[1.06rem] leading-8 text-[#4d403a]">
          <p>
            Ordering a bridal lehenga, sherwani, sarees, bridesmaid outfits, jewelry, gifts, or ceremony items from
            India can expand the available choices for a family in the United States or Canada. It also creates a
            longer chain of responsibility: seller, tailor, sourcing support, exporter, carrier, customs authority,
            broker, recipient, and local alteration professional.
          </p>
          <p>
            A good process does not promise perfect fit, exact screen color, duty-free entry, or a guaranteed delivery
            date. It makes the important facts visible before approval and records who owns each next step.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">1. Create an item brief before contacting sellers</h2>
          <p>
            For each wearer and event, record the item type, size or made-to-measure need, preferred silhouette,
            acceptable colors, fabric or handwork priorities, modesty needs, budget, required-by date, and local
            fitting plan. Separate “must have” from “inspiration.” A reference image can communicate direction; it
            should not become a request for a counterfeit label or unauthorized exact copy.
          </p>
          <p>
            For a group order, name one family approver. Matching ten people requires written color, fabric, trim,
            measurement, quantity, and substitution decisions. Approval by scattered chat messages is difficult to
            audit when an item changes.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">2. Ask for item-specific vendor evidence</h2>
          <p>
            A polished social account is not item evidence. Ask for the seller&apos;s legal or trading name, business
            location, current contact details, written price, payment recipient, item availability, materials,
            construction, included pieces, measurements, customization limits, production estimate, cancellation or
            remedy terms, and shipment origin.
          </p>
          <p>
            Live video may help when the vendor and item allow it, but it does not authenticate every material claim
            and is not universally available. Document the selected item or approved custom specification, the price,
            and the next approval step. Use a traceable payment method whose protections you have reviewed for that
            transaction; coverage and dispute deadlines vary.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">3. Use the selected vendor&apos;s measurement chart</h2>
          <p>
            Do not combine measurement instructions from several sellers. Use the chart and garment-construction
            method for the vendor making the piece. Record the measuring date, person who measured, body versus
            finished-garment measurement, intended underlayers, heel height, fit preference, and any mobility or
            modesty requirement.
          </p>
          <p>
            Plan for a local fitting even when the garment is made to measure. Bodies, construction, posture, fabric,
            and fit preferences vary, and remote measurements do not reproduce an in-person fitting. Leave time and
            money for local alterations rather than scheduling delivery immediately before travel or the wedding.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">4. Compare landed cost—not only the outfit price</h2>
          <p>
            Put every amount in one currency and separate the CeremonyVerse service fee from the product and outside
            costs. Include the outfit or items, tailoring, domestic movement in India, packing, international shipping,
            insurance, estimated duty, estimated taxes, brokerage or clearance, currency conversion, local alterations,
            other written charges, and contingency.
          </p>
          <p>
            The free <Link href="/planning-tools/shipping-customs/" className="font-semibold text-[#7a6841] underline">Shipping and Customs Calculator</Link> provides separate U.S. and Canadian planning fields. It does not lock an exchange rate or guarantee a customs assessment, carrier scan, or delivery date.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">5. Understand the U.S. and Canadian difference</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#e1d8c9] bg-white">
            <table className="min-w-[680px] w-full border-collapse text-left text-[0.96rem] leading-7">
              <thead className="bg-[#f1ece4] text-[#1f1f1f]">
                <tr>
                  <th className="p-4 font-semibold">Cost or responsibility</th>
                  <th className="p-4 font-semibold">United States delivery</th>
                  <th className="p-4 font-semibold">Canadian delivery</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Government charges", "Duty or other charges may apply under the current entry treatment.", "Duty, GST/HST, and applicable provincial tax may apply."],
                  ["Classification facts", "Fiber, construction, origin, value, and entry details can affect treatment.", "Type of goods, origin, value, and current Canadian rules can affect treatment."],
                  ["Carrier or broker", "Clearance or brokerage costs may be separate from shipping.", "Courier brokerage, disbursement, advancement, or clearance costs may be separate."],
                  ["Final authority", "U.S. Customs and Border Protection and the responsible entry providers control.", "Canada Border Services Agency and the responsible carrier or broker control."],
                ].map(([item, usa, canada]) => (
                  <tr key={item} className="border-t border-[#e6dfd5] align-top">
                    <th className="p-4 font-semibold text-[#1f1f1f]">{item}</th>
                    <td className="p-4">{usa}</td>
                    <td className="p-4">{canada}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            U.S. Customs and Border Protection warns that an online purchase price that includes shipping and handling
            does not necessarily include duty or clearance costs. Review CBP&apos;s official
            <a href="https://www.cbp.gov/trade/basic-import-export/internet-purchases" target="_blank" rel="noopener noreferrer" className="ml-1 font-semibold text-[#7a6841] underline">Internet Purchases guidance</a>.
          </p>
          <p>
            The Canada Border Services Agency explains that imported goods may be assessed duty and taxes, and that
            courier service fees can be separate. Review the official CBSA pages for
            <a href="https://www.cbsa-asfc.gc.ca/import/courier/menu-eng.html" target="_blank" rel="noopener noreferrer" className="ml-1 font-semibold text-[#7a6841] underline">imports by mail or courier</a> and
            <a href="https://www.cbsa-asfc.gc.ca/import/postal-postale/dtytx-drttx-eng.html" target="_blank" rel="noopener noreferrer" className="ml-1 font-semibold text-[#7a6841] underline">duty and taxes on mailed goods</a>.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">6. Approve the shipment plan in writing</h2>
          <p>
            Before release, identify the exact destination, recipient, importer responsibility, carrier, service level,
            tracking method, declared value, commercial invoice details, country of origin, available insurance,
            exclusions, claim procedure, and who pays duties, taxes, brokerage, storage, redelivery, or return costs.
            Confirm whether the shipment will go to the U.S. or Canadian home address, another family member, or the
            wedding destination. These are different logistics plans.
          </p>
          <p>
            “Tracked shipping” means the selected carrier provides scan information under its service. It does not
            mean every movement will scan on time, customs will clear on a particular date, or final delivery is
            guaranteed. Insurance is governed by the insurer or carrier&apos;s coverage, exclusions, evidence, and claim terms.
          </p>

          <h2 className="pt-4 font-serif text-3xl font-semibold text-[#1f1f1f]">7. Keep a destination-side recovery plan</h2>
          <p>
            Schedule delivery early enough for inspection, a local fitting, corrections, missing-item follow-up, and
            travel packing. Photograph the unopened package and label, then follow the seller, carrier, or service
            agreement&apos;s evidence procedure when opening. Record any issue promptly without discarding packaging.
          </p>
          <p>
            Decide in advance which pieces have a local substitute if they do not arrive or cannot be altered. The
            most important bridal or ceremony item should not be the shipment with the smallest buffer.
          </p>

          <div className="mt-10 rounded-2xl border border-[#d7c7a4] bg-white p-7">
            <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">Final approval checklist</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6">
              <li>The exact item or custom specification and included pieces are documented.</li>
              <li>Measurements, fit preferences, alteration responsibility, and deadlines are written.</li>
              <li>The seller, payee, price, remedy terms, and substitution rules are clear.</li>
              <li>Product, shipping, insurance, estimated import charges, brokerage, and contingency are separated.</li>
              <li>The importer or recipient and destination address are confirmed.</li>
              <li>The carrier, tracking, documentation, insurance, and claim procedure are recorded.</li>
              <li>The schedule includes inspection, local fitting, corrections, and a backup plan.</li>
            </ul>
          </div>

          <div className="mt-12 rounded-2xl bg-[#1f1f1f] p-8 text-center text-white">
            <h2 className="font-serif text-3xl font-semibold">Want help organizing an India-sourcing order?</h2>
            <p className="mt-4 leading-7 text-[#e8dfd2]">
              CeremonyVerse serves families throughout the United States and Canada. The free consultation identifies
              the appropriate sourcing tier and the written responsibilities before any paid work begins.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact/?service=india&from=outfit-ordering-guide" className="rounded-full bg-[#c5a059] px-7 py-3 font-semibold text-[#1f1f1f]">
                Request a Free Consultation
              </Link>
              <Link href="/pricing/#india-shopping" className="rounded-full border border-[#c5a059] px-7 py-3 font-semibold text-white">
                Review Sourcing Tiers
              </Link>
            </div>
          </div>

          <p className="border-t border-[#e6dfd5] pt-6 text-sm leading-6">
            <strong>Source note:</strong> Customs information was reviewed from official U.S. Customs and Border
            Protection and Canada Border Services Agency pages on August 10, 2026. Government rules, carrier terms,
            assessments, and fees can change. This article is general planning information, not customs, tax, legal,
            insurance, or carrier advice.
          </p>
        </div>
      </article>
    </main>
  );
}
