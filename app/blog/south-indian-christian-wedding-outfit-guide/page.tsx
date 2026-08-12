import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import {
  JsonLd,
  buildBlogPosting,
  buildBreadcrumb,
  buildFaqSchema,
  buildMetadata,
} from "@/lib/seo"

const title = "South Indian Christian Wedding Outfit Planning Guide"
const description =
  "Plan South Indian Christian wedding outfits with family and church approvals, a ceremony-by-ceremony wardrobe brief, measurements, sourcing records, and alteration time."
const path = "/blog/south-indian-christian-wedding-outfit-guide/"

export const metadata = buildMetadata({
  path,
  title,
  description,
  publishedTime: "2026-03-01T12:00:00-05:00",
  modifiedTime: "2026-08-11T12:00:00-04:00",
  authorName: "CeremonyVerse",
  ogType: "article",
})

const blogPostingSchema = buildBlogPosting({
  headline: title,
  description,
  url: path,
  datePublished: "2026-03-01T12:00:00-05:00",
  dateModified: "2026-08-11T12:00:00-04:00",
  authorName: "CeremonyVerse",
  keywords: [
    "South Indian Christian wedding outfits",
    "Christian wedding family dress code",
    "South Indian Christian bride outfit",
  ],
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: title, url: path },
])

const faqSchema = buildFaqSchema([
  {
    question: "What should a South Indian Christian bride wear?",
    answer:
      "There is no single answer that applies to every denomination, parish, region, or family. Confirm each ceremony's requirements with the couple, family, and church authority before choosing a saree, gown, lehenga, veil, jewelry, or reception change.",
  },
  {
    question: "Who decides the family dress code for a South Indian Christian wedding?",
    answer:
      "The couple and family should agree on the visual plan, while the applicable church or religious authority should confirm ceremony requirements. Record those decisions before vendors begin work.",
  },
  {
    question: "Can CeremonyVerse define South Indian Christian customs?",
    answer:
      "No. CeremonyVerse does not replace the family, parish, clergy, or a qualified cultural adviser. Its role can be limited to documenting an approved outfit brief and coordinating sourcing, measurements, approvals, and delivery responsibilities within a written scope.",
  },
  {
    question: "How early should a family order coordinated wedding outfits from India?",
    answer:
      "Build the schedule from the actual vendor's written estimate, approval rounds, production, shipping, customs, the first local fitting, alterations, and a contingency buffer. Avoid relying on one universal lead time.",
  },
])

const planningRows = [
  ["Church ceremony", "Confirm modesty, color, garment, veil or head-covering, jewelry, and changing-room requirements with the applicable church authority."],
  ["Reception", "Record whether the couple or family wants a second look, how formal it should be, and how much changing time is available."],
  ["Bride and groom", "List every approved garment, accessory, shoe, measurement, fitting, and backup responsibility by event."],
  ["Wedding party", "Confirm whether outfits must match exactly or only coordinate, then document color references, fabric tolerance, sizing, and individual approvals."],
  ["Parents and family", "Ask the family to identify any role-specific expectations instead of assuming that one regional rule applies to everyone."],
]

export default function SouthIndianChristianWeddingOutfitGuide() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <JsonLd id="schema-blogposting" data={blogPostingSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <SeoNav />

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#7a6841]">
          Outfit-planning framework · Updated August 2026
        </p>
        <h1 className="mb-6 font-serif text-4xl font-semibold leading-tight text-[#1f1f1f] md:text-5xl">
          {title}
        </h1>
        <p className="mb-8 text-lg leading-8 text-[#4d403a]">
          South Indian Christian weddings vary by denomination, parish, region, and family. This guide helps families
          turn their own approved requirements into a clear outfit and sourcing plan; it does not declare one dress
          code or set religious customs.
        </p>

        <div className="space-y-8 text-[1.06rem] leading-8 text-[#4d403a]">
          <section>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-[#1f1f1f]">
              Start with the people who have authority
            </h2>
            <p>
              Before selecting clothing, ask the couple, immediate family, and applicable church authority to confirm
              the ceremony requirements. Record what is required, what is preferred, and what is flexible. If two
              families have different regional or denominational practices, document the final decision instead of
              asking a vendor to decide.
            </p>
            <p className="mt-4">
              Useful questions include whether the church has modesty or color requirements, whether the bride or
              groom will change for the reception, whether any garment is presented or changed during the ceremony,
              and which family members need coordinated outfits.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-[#1f1f1f]">
              Build one ceremony-by-ceremony wardrobe brief
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-[#dfd7cc] bg-white">
              <table className="w-full border-collapse text-left text-base">
                <thead className="bg-[#f1ece5] text-[#1f1f1f]">
                  <tr>
                    <th className="p-4 font-semibold">Decision area</th>
                    <th className="p-4 font-semibold">What to confirm and record</th>
                  </tr>
                </thead>
                <tbody>
                  {planningRows.map(([area, action]) => (
                    <tr key={area} className="border-t border-[#e7e0d7] align-top">
                      <th className="p-4 font-semibold text-[#1f1f1f]">{area}</th>
                      <td className="p-4">{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-[#1f1f1f]">
              Turn the approved plan into vendor-ready records
            </h2>
            <ul className="list-disc space-y-3 pl-6">
              <li>Assign one item record to each person and event; do not reuse an old measurement sheet without checking it.</li>
              <li>Save dated color and design references and state which details may vary because an item is handmade.</li>
              <li>Record fabric, lining, sleeve, neckline, length, closure, embroidery, accessories, and customization in writing.</li>
              <li>Identify who approves the item, who pays the vendor, and which written return, change, or remake terms apply.</li>
              <li>Plan a local fitting and alteration option instead of treating remote measurements as a fit guarantee.</li>
            </ul>
            <p className="mt-4">
              The free <Link href="/blog/how-to-take-lehenga-measurements-at-home/" className="font-semibold text-[#7a6841] underline">lehenga measurement guide</Link> and
              the <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" className="font-semibold text-[#7a6841] underline">outfit-ordering timeline</Link> can help organize those records.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-3xl font-semibold text-[#1f1f1f]">
              Plan group orders around decisions, not a universal deadline
            </h2>
            <p>
              A coordinated order may involve several households, changing measurements, vendor capacity, item
              approvals, production, multiple shipments, customs review, and local alterations. Obtain the selected
              vendor&apos;s current written estimate, then work backward from the first local fitting rather than only the
              wedding date. Include time for one missed approval or required correction.
            </p>
          </section>

          <section className="rounded-2xl border border-[#d9c9ad] bg-[#f4efe7] p-7">
            <h2 className="mb-3 font-serif text-3xl font-semibold text-[#1f1f1f]">
              CeremonyVerse&apos;s limited role
            </h2>
            <p>
              CeremonyVerse can help turn a family- and church-approved wardrobe plan into a sourcing brief, vendor
              comparison, measurement record, approval trail, and delivery plan within the selected written scope.
              The family and church remain responsible for cultural and religious decisions, while vendors, carriers,
              customs authorities, and local tailors control their own work and decisions.
            </p>
            <Link
              href="/contact/?service=india"
              className="mt-6 inline-flex rounded-full bg-[#7a6841] px-7 py-3 font-semibold text-white no-underline"
            >
              Schedule a Free 30-Minute Consultation
            </Link>
          </section>
        </div>
      </article>
    </main>
  )
}
