import { EditorialBlogPage } from "@/components/editorial-blog-page"
import { buildBlogPosting, buildBreadcrumb, buildMetadata } from "@/lib/seo"

const path = "/blog/cost-of-sourcing-indian-wedding-outfits-from-india/"
const title = "How Much Does It Cost to Source Indian Wedding Outfits from India?"
const description = "Compare three sourcing paths for NRI families: shopping in India, buying through a US boutique, or coordinating a remote India order."
export const metadata = buildMetadata({ path, title, description, keywords: ["cost of Indian wedding shopping from India", "NRI wedding shopping budget", "buy lehenga India vs USA boutique"], publishedTime: "2026-09-01", authorName: "CeremonyVerse", ogType: "article" })
const faqs = [
  { q: "Is it always cheaper to buy wedding outfits in India?", a: "No. The garment quote may be lower, but the complete comparison can include travel, service fees, shipping, customs assessments, payment costs, local alterations, and contingency. Compare current written totals for equivalent items." },
  { q: "What should be included in a shopping-trip budget?", a: "Include flights, lodging, local transport, time away from work, baggage or shipping, customs declarations, alterations after returning, and the garments themselves." },
  { q: "What does remote sourcing add?", a: "Depending on the agreed scope, it can organize research, vendor communication, live video review, measurements, written approvals, and pre-shipment review. It does not replace the vendor, carrier, customs broker, or local tailor." },
]
const schemas = [
  { id: "schema-blogposting", data: buildBlogPosting({ headline: title, description, url: path, datePublished: "2026-09-01", keywords: ["cost of Indian wedding shopping from India", "NRI wedding shopping budget"] }) },
  { id: "schema-breadcrumb", data: buildBreadcrumb([{ name: "Blog", url: "/blog/" }, { name: title, url: path }]) },
  { id: "schema-faq", data: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) } },
]
export default function Page() {
  return <EditorialBlogPage title={title} dek={description} date="September 2026" schemas={schemas} faqs={faqs} related={[
    { href: "/blog/indian-wedding-shopping-timeline-checklist/", label: "Build the outfit-shopping timeline" },
    { href: "/blog/how-to-buy-sherwani-from-india-usa/", label: "Sherwani sourcing guide" },
    { href: "/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/", label: "Kanchipuram saree evidence guide" },
  ]}>
    <p>NRI families commonly choose among three paths: travel to India and shop in person, buy through a US boutique, or coordinate a remote India order. Each path moves cost and risk to a different place. A useful comparison includes time, evidence, fit, delivery, and remedies—not only the garment price.</p>
    <h2>Path 1: Travel to India and Shop in Person</h2>
    <p>This path offers broad selection and in-person inspection, especially when the family is already traveling. Add flights, lodging, local transportation, time away from work, baggage or shipping, customs declarations, and post-trip alterations to the garment total. A short shopping window can also compress decisions.</p>
    <h2>Path 2: Buy Through a US Boutique</h2>
    <p>A US boutique can offer in-person try-on, local communication, and clearer domestic remedies. Selection may be limited to stocked or orderable inventory, while import, staffing, rent, and retail-service costs are reflected in the price. Ask whether the piece is ready-made, altered, made to order, or fully custom.</p>
    <h2>Path 3: Coordinate a Remote India Order</h2>
    <p>Remote sourcing can preserve access to India-based vendors without requiring a shopping trip. Depending on the written scope, CeremonyVerse can help organize item research, vendor communication, live video review, measurements, written approvals, and pre-shipment quality-check options. Item cost, vendor work, shipping, customs, insurance, alterations, and remedies remain separate unless expressly included.</p>
    <h2>Compare the Same Complete Scope</h2>
    <table><thead><tr><th>Factor</th><th>India trip</th><th>US boutique</th><th>Remote sourcing</th></tr></thead><tbody>
      <tr><td>Physical try-on before purchase</td><td>Often</td><td>Often for stocked pieces</td><td>No; video/photo evidence</td></tr>
      <tr><td>Selection</td><td>Potentially broad</td><td>Stock-dependent</td><td>Vendor-dependent</td></tr>
      <tr><td>Travel cost</td><td>Yes</td><td>No</td><td>No</td></tr>
      <tr><td>International delivery</td><td>Baggage or shipment</td><td>Usually handled before retail sale</td><td>Shipment-specific</td></tr>
      <tr><td>Local fitting</td><td>May still be needed</td><td>May be available</td><td>Plan separately</td></tr>
      <tr><td>Best fit</td><td>Families already traveling</td><td>Buyers prioritizing in-person service</td><td>Families seeking guided access without travel</td></tr>
    </tbody></table>
    <h2>Build a Landed, Fitted Estimate</h2>
    <ol>
      <li>Record the exact item, fiber representation, handwork, included pieces, and customization.</li>
      <li>Add the selected service fee and state exactly what it covers.</li>
      <li>Add current shipping, declared-value, insurance, duty, tax, and brokerage estimates where applicable.</li>
      <li>Add a local fitting and alteration allowance.</li>
      <li>Record payment, cancellation, claim, and remedy terms before approval.</li>
    </ol>
    <p>No path is universally cheapest. The right choice depends on whether the family is already traveling, how important physical try-on is, how much coordination it wants to own, and what the current written quotes actually include.</p>
  </EditorialBlogPage>
}
