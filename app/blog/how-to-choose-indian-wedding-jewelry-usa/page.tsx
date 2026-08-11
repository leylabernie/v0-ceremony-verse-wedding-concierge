import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";
import {
  JsonLd,
  buildBlogPosting,
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
} from "@/lib/seo";

const path = "/blog/how-to-choose-indian-wedding-jewelry-usa/";

export const metadata = buildMetadata({
  path,
  title: "How to Choose Indian Wedding Jewelry from India",
  description:
    "Compare Indian wedding jewelry by material, stone representation, weight, comfort, measurements, hallmark evidence, seller terms, shipping, and complete landed cost.",
  publishedTime: "2026-07-03",
  modifiedTime: "2026-08-11",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "How to Choose Indian Wedding Jewelry from India",
  description:
    "A practical comparison and approval process for Indian wedding jewelry ordered from India for a U.S. or Canadian wedding.",
  url: path,
  datePublished: "2026-07-03",
  dateModified: "2026-08-11",
  keywords: [
    "Indian wedding jewelry from India",
    "Indian bridal jewelry USA",
    "Kundan and Polki jewelry comparison",
    "BIS HUID gold jewelry",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "How to Choose Indian Wedding Jewelry", url: path },
]);

const faqItems = [
  {
    question: "Does a video call prove that Indian wedding jewelry is authentic?",
    answer:
      "No. Current video can help confirm that an item exists and show visible details, but it does not prove metal purity, stone identity, durability, exact color, or seller performance. Request item-specific written representations and independent evidence appropriate to the value and claim.",
  },
  {
    question: "What should I ask for when jewelry is described as solid gold?",
    answer:
      "Request the karat and fineness, weight, itemized invoice, hallmark details when applicable, HUID for current BIS-hallmarked Indian gold jewelry, seller identity, return or remedy terms, and any independent testing or appraisal you need. Verify current BIS guidance rather than relying only on a seller photo.",
  },
  {
    question: "Can CeremonyVerse guarantee jewelry materials or value?",
    answer:
      "No. CeremonyVerse can help document the seller's representations, item evidence, approvals, shipping, and responsibilities. Material verification, appraisal, insurance coverage, customs assessment, and seller remedies remain with the qualified provider or authority that controls them.",
  },
];

const faqSchema = buildFaqSchema(faqItems);

const comparisons = [
  ["Kundan", "A setting and finishing tradition often associated with stones or glass in a decorative setting. Ask what every material actually is; the style name alone does not establish stone or metal value."],
  ["Polki", "A trade description commonly used for uncut-diamond jewelry. Request the seller's written stone representation, weight details, treatments or enhancements, metal, invoice, and any grading or appraisal evidence you require."],
  ["Temple-style jewelry", "A broad style description that may be made in solid precious metal, plated silver, or base metal. Confirm motifs with the family and document the actual construction and materials."],
  ["Meenakari", "Enamel work that may appear on the front, reverse, or accents. Review close current media, base metal, finish, dimensions, care instructions, and repair terms."],
];

const approvalQuestions = [
  "What is the base metal, plating, karat or fineness, stone material, and total or piece weight?",
  "Which statements are seller representations, and which are supported by a hallmark, lab report, grading report, or appraisal?",
  "What exact pieces are included, and what are their dimensions, fastening methods, and adjustable ranges?",
  "Can the wearer tolerate the weight and movement with the complete outfit, hairstyle, veil or dupatta, and ceremony schedule?",
  "What current photos or video identify the exact item—not only a catalog sample?",
  "Who receives payment, and what written return, repair, replacement, cancellation, and dispute terms apply?",
  "How will the item be declared, insured, shipped, cleared, delivered, and documented for a claim?",
];

export default function HowToChooseIndianWeddingJewelryBlogPost() {
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
            How to choose Indian wedding jewelry from India
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#e8dfd2]">
            Compare the actual material, evidence, weight, comfort, dimensions, seller terms, shipping, and complete
            landed cost—without treating a style name or video call as proof of authenticity.
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-16 text-[#2f2f2f]">
        <section className="mx-auto max-w-3xl space-y-5 text-lg leading-8">
          <p>
            Indian wedding jewelry affects the complete look, but it is also a product decision involving comfort,
            material claims, value, shipping, customs, insurance, and remedies. Start with the approved outfit and the
            wearer&apos;s preferences, then compare actual pieces together; no single metal tone, necklace length, or style
            is mandatory for every bride or family.
          </p>
          <p>
            A style word such as Kundan, Polki, temple, or Meenakari does not by itself establish the base metal, stone,
            purity, age, craftsmanship, or price. Put those facts in writing before payment.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-center text-3xl font-semibold md:text-4xl">Understand the style name—and verify the item</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {comparisons.map(([title, text]) => (
              <section key={title} className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#4d403a]">{text}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-white p-7 md:p-10">
          <h2 className="text-3xl font-semibold">Seven questions before approval</h2>
          <ol className="mt-7 space-y-4">
            {approvalQuestions.map((question, index) => (
              <li key={question} className="grid gap-3 border-b border-[#e6dfd5] pb-4 last:border-b-0 md:grid-cols-[2rem_1fr]">
                <span className="font-semibold text-[#7a6841]">{index + 1}.</span>
                <span className="leading-7 text-[#4d403a]">{question}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
            <h2 className="text-2xl font-semibold">Gold hallmark evidence from India</h2>
            <p className="mt-4 leading-7 text-[#4d403a]">
              The Bureau of Indian Standards says the current hallmark for gold jewelry introduced with HUID contains
              the BIS logo, purity in carat and fineness, and a six-character alphanumeric HUID. BIS says consumers can
              verify the HUID through the BIS Care app. Applicability can depend on the item, seller, transaction, and
              current rules, so do not convert that guidance into a universal claim about every jewelry product.
            </p>
            <a className="mt-5 inline-flex font-semibold text-[#7a6841] underline" href="https://www.bis.gov.in/hallmarking-overview/hallmarking-faqs/hallmarking-faq/?lang=en" target="_blank" rel="noopener noreferrer">
              Bureau of Indian Standards hallmarking FAQ
            </a>
          </section>
          <section className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
            <h2 className="text-2xl font-semibold">Comfort and fitting checkpoint</h2>
            <p className="mt-4 leading-7 text-[#4d403a]">
              Obtain the weight and dimensions of each piece. Test the complete combination long enough to assess
              pressure, movement, fastening, skin contact, hairstyle, dupatta placement, hearing, and ceremony tasks.
              Stop if a piece causes pain, numbness, skin reaction, or unsafe movement, and consult an appropriate local
              professional for adjustment.
            </p>
          </section>
        </section>

        <section className="mt-16 rounded-2xl border border-[#d8c8a2] bg-[#fbf6ea] p-7 md:p-9">
          <h2 className="text-2xl font-semibold">What live video can and cannot do</h2>
          <p className="mt-4 leading-7 text-[#5f5132]">
            Current live or recorded media can help confirm visible details, dimensions, movement, and that an item is
            available for review. It cannot establish metal purity, stone identity, durability, exact screen-to-item
            color, future seller performance, customs treatment, or final fit. Preserve written item representations,
            approvals, invoices, and applicable independent evidence.
          </p>
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
          <h2 className="text-3xl font-semibold">Need jewelry coordinated with the full outfit plan?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#f4eee6]">
            CeremonyVerse can help organize the item brief, vendor evidence, written representations, approvals, and
            shipping responsibilities included in the selected sourcing scope.
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
