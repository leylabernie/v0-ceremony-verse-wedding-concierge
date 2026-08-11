import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";
import {
  JsonLd,
  buildBlogPosting,
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
} from "@/lib/seo";

const path = "/blog/indian-wedding-return-gifts-bulk-usa/";

export const metadata = buildMetadata({
  path,
  title: "Indian Wedding Return Gifts from India: Bulk Order Guide",
  description:
    "Plan Indian wedding favors and return gifts for USA or Canada with samples, personalization proofs, complete quotes, packing evidence, customs checks, and realistic timelines.",
  publishedTime: "2026-06-28",
  modifiedTime: "2026-08-11",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "Indian Wedding Return Gifts from India: Bulk Order Guide",
  description:
    "A documented process for comparing, approving, packing, and shipping bulk Indian wedding favors and return gifts to the United States or Canada.",
  url: path,
  datePublished: "2026-06-28",
  dateModified: "2026-08-11",
  keywords: [
    "Indian wedding return gifts",
    "bulk Indian wedding favors",
    "Indian wedding welcome gifts",
    "wedding favors from India",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "Indian Wedding Return Gifts", url: path },
]);

const faqItems = [
  {
    question: "How early should we order bulk Indian wedding return gifts?",
    answer:
      "There is no responsible universal lead time. Build a written schedule for sampling, proof approval, production, evidence review, packing, carrier handoff, customs, final delivery, and local assembly using the actual item, quantity, vendor, route, and event date.",
  },
  {
    question: "Are wedding favors from India cheaper than buying in the USA or Canada?",
    answer:
      "Not automatically. Compare the same item, material, quantity, personalization, packing, service, shipping, insurance, duty or tax, brokerage, storage, assembly, and remedy terms. No universal savings percentage applies.",
  },
  {
    question: "Can CeremonyVerse guarantee customs clearance or delivery timing?",
    answer:
      "No. CeremonyVerse can help document the item, shipment, carrier, import responsibilities, and estimates, but the carrier, border agency, and other third parties control their own decisions and timelines.",
  },
];

const faqSchema = buildFaqSchema(faqItems);

const checkpoints = [
  ["Item brief", "Record the use, material, dimensions, color, quantity, personalization, packing, destination, budget range, and event deadline."],
  ["Sample or proof", "Review a current item, sample, or personalization proof before approving the full quantity where feasible."],
  ["Complete quote", "Separate unit price, setup charges, minimum quantity, packing, shipping, insurance, estimated duty or tax, brokerage, and local assembly."],
  ["Written approval", "Confirm spelling, artwork, color reference, quantity, acceptable variation, payment recipient, change process, and remedy terms."],
  ["Production evidence", "When available, review visible quantity, personalization, condition, and packing evidence before shipment."],
  ["Delivery handoff", "Identify the importer or recipient, customs payer, claim owner, storage location, assembly team, and final venue-delivery responsibility."],
];

export default function BulkReturnGiftsGuideBlogPost() {
  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      <JsonLd id="schema-blogposting" data={blogPostingSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <header className="bg-[#1f1f1f] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">
            Reviewed August 11, 2026
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Indian wedding return gifts from India: a bulk-order guide
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#e8dfd2]">
            Choose and ship favors with documented samples, personalization, quantities, packing, outside costs,
            import responsibilities, and contingency time—not promises that every bulk order is cheap or easy.
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-16 text-[#2f2f2f]">
        <section className="mx-auto max-w-3xl space-y-5 text-lg leading-8">
          <p>
            Return gifts, favors, and welcome-bag items can involve dozens or hundreds of repeated pieces. A small
            sample error becomes a large order problem when the same misspelling, material change, or fragile packing
            is repeated across every unit.
          </p>
          <p>
            U.S.-based, Canadian, and India-based vendors can differ in inventory, minimum quantities, lead times,
            costs, and remedies. Compare equivalent written scopes rather than assuming one source is always better.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-3xl font-semibold md:text-4xl">Six checkpoints before approving a bulk order</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {checkpoints.map(([title, text], index) => (
              <section key={title} className="rounded-2xl border border-[#e6dfd5] bg-white p-6">
                <p className="text-sm font-semibold text-[#7a6841]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{text}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-white p-7 md:p-10">
          <h2 className="text-3xl font-semibold">Build the timeline from the actual order</h2>
          <p className="mt-5 leading-8 text-[#4d403a]">
            Request current estimates for sample or proof preparation, family approval, production, evidence review,
            packing, carrier collection, customs, final delivery, and local assembly. Add contingency based on the item,
            quantity, personalization, vendor capacity, destination, and event deadline. A generic four-, six-, or
            eight-week promise is not reliable enough for a wedding plan.
          </p>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
            <h2 className="text-2xl font-semibold">United States import questions</h2>
            <p className="mt-4 leading-7 text-[#4d403a]">
              Ask the carrier or broker how the shipment will be entered, which description and value documents are
              required, who acts as importer, and which charges may be collected. Current U.S. e-commerce procedures
              can change; check the applicable CBP guidance for the actual shipment.
            </p>
            <p className="mt-4 leading-7 text-[#4d403a]">
              Favors containing plants, seeds, wood, dried plant material, food, or other agricultural components need
              item-specific review. USDA APHIS says requirements vary by commodity and country of origin.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a className="font-semibold text-[#7a6841] underline" href="https://www.cbp.gov/trade/basic-import-export/e-commerce/faqs" target="_blank" rel="noopener noreferrer">U.S. Customs and Border Protection: e-commerce FAQs</a>
              <a className="font-semibold text-[#7a6841] underline" href="https://www.aphis.usda.gov/plant-imports/how-to-import" target="_blank" rel="noopener noreferrer">USDA APHIS: plant and plant-product import requirements</a>
            </div>
          </section>
          <section className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
            <h2 className="text-2xl font-semibold">Canada import questions</h2>
            <p className="mt-4 leading-7 text-[#4d403a]">
              Canada may assess duty, GST or HST, provincial tax, and separate courier or broker clearance fees.
              Confirm whether the shipment is personal or commercial, who pays each amount, and which documents and
              remedy process apply. A planning estimate is not the final border assessment.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a className="font-semibold text-[#7a6841] underline" href="https://www.cbsa-asfc.gc.ca/import/courier/menu-eng.html" target="_blank" rel="noopener noreferrer">Canada Border Services Agency: importing by mail or courier</a>
              <a className="font-semibold text-[#7a6841] underline" href="https://www.cbsa-asfc.gc.ca/import/courier/lvs-efv/prsn-eng.html" target="_blank" rel="noopener noreferrer">CBSA: casual goods imported by courier</a>
            </div>
          </section>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-3xl font-semibold">Frequently asked questions</h2>
          <div className="mx-auto mt-8 max-w-4xl space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-xl border border-[#e6dfd5] bg-white p-6">
                <summary className="cursor-pointer font-semibold">{item.question}</summary>
                <p className="mt-4 leading-7 text-[#4d403a]">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-[#7a6841] p-8 text-center text-white md:p-12">
          <h2 className="text-3xl font-semibold">Need one documented favor and welcome-gift plan?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#f4eee6]">
            Bring the guest count, item ideas, destination, deadline, and any current quotes. CeremonyVerse can help
            organize the brief, comparison, approvals, and shipping handoff within a written scope.
          </p>
          <Link href="/contact/" className="mt-7 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-[#1f1f1f]">
            Schedule Free Consultation
          </Link>
        </section>

        <div className="mt-12">
          <SourcingCallout />
        </div>
      </article>
    </main>
  );
}
