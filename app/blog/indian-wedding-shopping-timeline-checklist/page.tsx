import { EditorialBlogPage } from "@/components/editorial-blog-page"
import { buildBlogPosting, buildBreadcrumb, buildMetadata } from "@/lib/seo"

const path = "/blog/indian-wedding-shopping-timeline-checklist/"
const title = "The Indian Wedding Outfit Shopping Timeline: What to Order When"
const description = "A practical planning sequence for custom outfits, jewelry, family orders, shipping, customs, fittings, alterations, and backup options."
export const metadata = buildMetadata({ path, title, description, keywords: ["Indian wedding shopping timeline", "NRI wedding outfit shopping checklist", "when to order Indian wedding outfits"], publishedTime: "2026-09-01", authorName: "CeremonyVerse", ogType: "article" })
const faqs = [
  { q: "When should outfit shopping begin?", a: "Begin with the highest-priority, longest-lead pieces as soon as the event plan and budget are stable enough to request current vendor estimates. There is no universal deadline because ready-made, altered, made-to-order, and fully custom items have different timelines." },
  { q: "Why is a local fitting buffer necessary?", a: "Even carefully documented remote measurements cannot guarantee fit. A fitting buffer gives a qualified local tailor time to assess and complete permitted alterations." },
  { q: "What if the schedule is already compressed?", a: "Prioritize ready-made or limited-customization choices, obtain current written delivery estimates, reduce approval rounds, and preserve a local backup. Do not treat expedited delivery as guaranteed." },
]
const schemas = [
  { id: "schema-blogposting", data: buildBlogPosting({ headline: title, description, url: path, datePublished: "2026-09-01", keywords: ["Indian wedding shopping timeline", "NRI wedding outfit shopping checklist"] }) },
  { id: "schema-breadcrumb", data: buildBreadcrumb([{ name: "Blog", url: "/blog/" }, { name: title, url: path }]) },
  { id: "schema-faq", data: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) } },
]
export default function Page() {
  return <EditorialBlogPage title={title} dek={description} date="September 2026" schemas={schemas} faqs={faqs} related={[
    { href: "/blog/how-to-buy-sherwani-from-india-usa/", label: "How to source a groom’s sherwani" },
    { href: "/blog/how-to-take-lehenga-measurements-at-home/", label: "How to document lehenga measurements" },
    { href: "/blog/indian-wedding-jewelry-customs-shipping-usa/", label: "Jewelry customs and shipping guide" },
    { href: "/blog/cost-of-sourcing-indian-wedding-outfits-from-india/", label: "Compare the three sourcing paths" },
    { href: "/blog/indian-wedding-outfit-scams-nri-brides/", label: "Review remote-order red flags" },
  ]}>
    <p>The most reliable outfit plan works backward from the first local fitting—not merely from the wedding date. Vendor selection, family approvals, production, international delivery, customs review, and alterations happen in sequence, and each estimate can change.</p>
    <h2>Quick-Reference Planning Sequence</h2>
    <table><thead><tr><th>Planning window</th><th>Priority</th></tr></thead><tbody>
      <tr><td>Early planning</td><td>Event wardrobe, couple’s principal outfits, budget, responsibilities, and vendor research</td></tr>
      <tr><td>After primary choices</td><td>Jewelry, sarees, family and wedding-party coordination, measurements, and written approvals</td></tr>
      <tr><td>Before production deadlines</td><td>Haldi, mehndi, garba or sangeet, and supporting outfits</td></tr>
      <tr><td>Before the first local fitting</td><td>Delivery tracking, customs responsibility, local tailor appointment, and alteration allowance</td></tr>
      <tr><td>Final buffer</td><td>Accessories, packing, emergency kit, and realistic backup options</td></tr>
    </tbody></table>
    <h2>Start with the Longest-Lead, Highest-Priority Pieces</h2>
    <p>The bridal lehenga and principal groom’s outfit often involve the most decisions, construction work, and family coordination. Begin with a requirements brief: event, silhouette, palette, material preferences, measurements, complete budget, evidence needed before approval, and local fitting date.</p>
    <h2>Coordinate Jewelry and Family Outfits Next</h2>
    <p>Jewelry, sarees, parents’ outfits, and wedding-party orders can involve multiple people and approvals. Record each person’s role, events, item list, measurements, decision owner, budget, and backup. For valuable jewelry, separate personal travel rules from shipped-import rules and verify current requirements.</p>
    <h2>Add Function-Specific Looks Only After Priorities Are Stable</h2>
    <p>Haldi, mehndi, garba or sangeet, and reception looks should fit the actual event schedule and venue conditions. Avoid ordering extra outfits simply because a generic checklist lists them; family traditions and priorities differ.</p>
    <h2>Protect the Fitting and Alteration Window</h2>
    <p>Schedule a qualified local tailor before the shipment arrives when possible. Record what can and cannot be altered, fitting dates, costs, and a backup plan. A delivery estimate is not the same as a wearable-by date.</p>
    <h2>Common Timeline Mistakes</h2>
    <ul>
      <li>Counting only carrier transit and ignoring approvals, production, customs, and alterations.</li>
      <li>Ordering multiple secondary looks before the principal outfits and budget are stable.</li>
      <li>Assuming silence from a vendor means production is on schedule.</li>
      <li>Skipping seller and item evidence because the deadline feels close.</li>
      <li>Leaving no local fitting or backup window.</li>
    </ul>
  </EditorialBlogPage>
}
