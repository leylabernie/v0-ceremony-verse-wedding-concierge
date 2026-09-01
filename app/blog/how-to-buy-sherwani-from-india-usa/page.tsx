import Link from "next/link"
import { EditorialBlogPage } from "@/components/editorial-blog-page"
import { buildBlogPosting, buildBreadcrumb, buildMetadata } from "@/lib/seo"

const path = "/blog/how-to-buy-sherwani-from-india-usa/"
const title = "How to Buy a Sherwani from India for Your US Wedding"
const description = "A groom’s guide to sherwani silhouettes, fabric, remote measurements, written approvals, shipping, customs planning, and alteration buffers."

export const metadata = buildMetadata({ path, title, description, keywords: ["buy sherwani from India USA", "sherwani for groom USA", "custom sherwani measurements", "sherwani sourcing guide"], publishedTime: "2026-09-01", authorName: "CeremonyVerse", ogType: "article" })

const faqs = [
  { q: "Can a sherwani be made remotely without visiting India?", a: "Yes, but remote measurements and video review do not guarantee fit. Use the selected vendor’s measurement chart, preserve every approval in writing, and reserve time and budget for a local fitting." },
  { q: "How far ahead should a groom start?", a: "Start early enough to compare vendors, document measurements, complete production, clear shipping and customs, and allow local alterations. The actual lead time depends on the selected garment and vendor rather than one universal deadline." },
  { q: "What is the difference between a sherwani and a bandhgala?", a: "A sherwani is generally longer and more ceremonial. A bandhgala is jacket length with a closed Nehru-style collar and often works for a sangeet or reception." },
  { q: "Does CeremonyVerse guarantee fabric, color, fit, or delivery?", a: "No. CeremonyVerse can help organize item research, vendor communication, measurements, video review, written approvals, and pre-shipment checks within the selected scope. The vendor, carrier, customs authorities, and local tailor remain responsible for their work." },
]
const schemas = [
  { id: "schema-blogposting", data: buildBlogPosting({ headline: title, description, url: path, datePublished: "2026-09-01", keywords: ["buy sherwani from India USA", "sherwani for groom USA", "custom sherwani measurements"] }) },
  { id: "schema-breadcrumb", data: buildBreadcrumb([{ name: "Blog", url: "/blog/" }, { name: title, url: path }]) },
  { id: "schema-faq", data: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) } },
]

export default function Page() {
  return <EditorialBlogPage title={title} dek={description} date="September 2026" schemas={schemas} faqs={faqs} related={[
    { href: "/blog/indian-wedding-shopping-timeline-checklist/", label: "Indian wedding outfit shopping timeline" },
    { href: "/blog/indian-wedding-outfit-scams-nri-brides/", label: "Remote-order red flags" },
    { href: "/blog/shipping-indian-wedding-outfits-usa-customs-duties/", label: "Shipping and customs planning" },
  ]}>
    <p>You can source a sherwani from India while living in the United States, but a successful order depends on more than choosing a catalog photo. The useful record includes the exact garment, material representation, measurements, customization, payment terms, production evidence, shipping responsibility, and remedy terms.</p>
    <h2>Choose the Silhouette Before the Decoration</h2>
    <ul>
      <li><strong>Classic sherwani or achkan:</strong> a longer, structured option commonly selected for the wedding ceremony.</li>
      <li><strong>Bandhgala:</strong> a shorter, jacket-style option that can suit a sangeet or reception.</li>
      <li><strong>Indo-Western:</strong> a fusion silhouette with contemporary tailoring details.</li>
      <li><strong>Angrakha-inspired:</strong> an asymmetric wrap-front option that creates a distinct formal look.</li>
    </ul>
    <p>Confirm what each product name means with the selected vendor. Labels are not standardized across workshops.</p>
    <h2>Understand the Material and Handwork Claim</h2>
    <p>Raw silk, art silk, velvet, brocade, and jacquard behave differently in heat, movement, photographs, and alterations. Zardozi, chikankari, thread, sequin, stone, and pearl work also differ in weight and maintenance. Request the exact fiber representation, lining, handwork description, included pieces, and current item evidence in writing.</p>
    <h2>Remote Measurements: Use the Vendor’s Chart</h2>
    <p>Do not translate a US suit size into a sherwani size or add your own ease. Ask the selected vendor which body and garment measurements are required, which layers to wear while measuring, and who adds construction ease. Chest, waist, hips, shoulder, sleeve, bicep, armhole, garment length, trouser length, height, footwear, and fit preference may all matter.</p>
    <ol>
      <li>Use a soft measuring tape and a helper or qualified local tailor.</li>
      <li>Label every unit and preserve the final vendor-approved chart.</li>
      <li>Record the intended inner kurta, footwear, and preferred fit.</li>
      <li>Plan a local fitting; remote custom work may still need alterations.</li>
    </ol>
    <h2>Plan the Groom’s Looks by Function</h2>
    <p>For a Gujarati or Hindu celebration, many families choose a lighter, movement-friendly look for haldi or mehndi, a more expressive option for garba or sangeet, the most ceremonial sherwani for the baraat and wedding, and a distinct bandhgala or fusion look for the reception. Family tradition, venue weather, event timing, and the couple’s approved palette should guide the final choices.</p>
    <h2>Compare the Complete Written Cost</h2>
    <table><thead><tr><th>Cost input</th><th>What to document</th></tr></thead><tbody>
      <tr><td>Garment</td><td>Exact item, material, handwork, included pieces, and customization</td></tr>
      <tr><td>Service</td><td>Included research, communication, review, and approval steps</td></tr>
      <tr><td>Delivery</td><td>Carrier quote, declared value, insurance option, customs responsibility, and claim process</td></tr>
      <tr><td>Local work</td><td>Fitting date, alteration quote, and backup option</td></tr>
    </tbody></table>
    <p>There is no universal guarantee that an India order will cost less than a US boutique. Compare equivalent written scopes and current quotes. For the broader comparison, read <Link href="/blog/cost-of-sourcing-indian-wedding-outfits-from-india/">the three sourcing paths</Link>.</p>
  </EditorialBlogPage>
}
