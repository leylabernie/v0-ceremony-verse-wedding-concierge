import { EditorialBlogPage } from "@/components/editorial-blog-page"
import { buildBlogPosting, buildBreadcrumb, buildMetadata } from "@/lib/seo"

const path = "/blog/indian-wedding-jewelry-customs-shipping-usa/"
const title = "Bringing Indian Wedding Jewelry to the US: Customs and Shipping"
const description = "Personal luggage and international shipments follow different customs processes. Learn what to document and where to verify current US requirements."
export const metadata = buildMetadata({ path, title, description, keywords: ["importing Indian wedding jewelry to USA", "shipping jewelry from India to USA", "Indian bridal jewelry customs"], publishedTime: "2026-09-01", authorName: "CeremonyVerse", ogType: "article" })
const faqs = [
  { q: "Does the $10,000 FinCEN Form 105 rule apply to ordinary jewelry?", a: "Not merely because jewelry is worth more than $10,000. FinCEN Form 105 applies to currency and defined monetary instruments. Jewelry purchased abroad still must be disclosed as required by CBP, but it is not automatically a monetary instrument." },
  { q: "Should jewelry bought abroad be declared on arrival?", a: "Yes. CBP instructs travelers to declare jewelry purchased abroad. The final duty or exemption treatment depends on the facts of the trip and the item." },
  { q: "Is the $800 de minimis exemption available for current shipments?", a: "CBP states that duty-free de minimis treatment has been suspended for merchandise shipments from all countries. Verify the current entry and duty requirements with CBP, the carrier, or a licensed customs broker before shipping." },
  { q: "Can CeremonyVerse act as a customs broker?", a: "No. CeremonyVerse can help organize vendor records, invoices, shipment information, and questions within the selected sourcing scope. Customs classification, entry, duty assessment, and brokerage must be handled by the responsible carrier, broker, importer, and authorities." },
]
const schemas = [
  { id: "schema-blogposting", data: buildBlogPosting({ headline: title, description, url: path, datePublished: "2026-09-01", keywords: ["importing Indian wedding jewelry to USA", "shipping jewelry from India to USA"] }) },
  { id: "schema-breadcrumb", data: buildBreadcrumb([{ name: "Blog", url: "/blog/" }, { name: title, url: path }]) },
  { id: "schema-faq", data: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) } },
]
export default function Page() {
  return <EditorialBlogPage title={title} dek={description} date="Reviewed September 2026" schemas={schemas} faqs={faqs} related={[
    { href: "/blog/indian-wedding-shopping-timeline-checklist/", label: "Indian wedding outfit shopping timeline" },
    { href: "/blog/shipping-indian-wedding-outfits-usa-customs-duties/", label: "Outfit shipping and customs guide" },
    { href: "/blog/how-to-choose-indian-wedding-jewelry-usa/", label: "How to compare Indian wedding jewelry" },
  ]}>
    <p><strong>Jewelry carried by a traveler and jewelry sent as a shipment are not the same customs process.</strong> Confirm the current rules for the actual item, value, origin, destination, and transport method before purchasing or shipping.</p>
    <p><em>This guide is general planning information, not legal or customs advice.</em></p>
    <h2>Scenario 1: Jewelry Traveling with You</h2>
    <p>CBP instructs travelers to declare jewelry purchased abroad when clearing US customs. Keep itemized receipts, appraisal or composition records when available, and a written inventory. The responsible officer determines admissibility and any assessment based on the facts.</p>
    <p>If jewelry was owned in the United States before the trip, CBP provides a process using Form 4457 to document certain personal effects before departure. Complete that process with CBP before traveling rather than trying to establish prior ownership after returning.</p>
    <h2>Important Correction About FinCEN Form 105</h2>
    <p>FinCEN Form 105 concerns more than $10,000 in currency or defined monetary instruments transported, mailed, or shipped across the border. Its definition lists currency, traveler’s checks, certain bearer negotiable instruments, and bearer securities. Ordinary wedding jewelry is not automatically included merely because it is valuable.</p>
    <h2>Scenario 2: Jewelry Shipped from India</h2>
    <p>CBP states that duty-free de minimis treatment for merchandise valued at $800 or less has been suspended for shipments from all countries. A low declared value therefore should not be treated as an automatic duty-free path. The carrier or customs broker may require item composition, country of origin, value, invoice, recipient information, and other entry documentation.</p>
    <h2>Documentation Checklist</h2>
    <ul>
      <li>Itemized commercial invoice and truthful declared value</li>
      <li>Seller identity and contact information</li>
      <li>Material and gemstone description supported by available records</li>
      <li>Country of origin and intended personal use</li>
      <li>Purchase receipt, appraisal, or valuation record when available</li>
      <li>Carrier, insurance, signature, claims, and customs-contact details</li>
    </ul>
    <h2>Verify with Official Sources</h2>
    <ul>
      <li><a href="https://www.help.cbp.gov/s/article/Article1137" rel="noopener noreferrer">CBP: importing diamonds and jewelry</a></li>
      <li><a href="https://www.cbp.gov/trade/basic-import-export/e-commerce/faqs" rel="noopener noreferrer">CBP: e-commerce and de minimis FAQs</a></li>
      <li><a href="https://www.fincen.gov/system/files/shared/fin105_cmir.pdf" rel="noopener noreferrer">FinCEN Form 105 and monetary-instrument definition</a></li>
    </ul>
    <p>Before a valuable shipment moves, ask the carrier or a licensed customs broker for the current entry process and a written estimate. CeremonyVerse does not control customs decisions, duties, clearance timing, loss, or carrier claims.</p>
  </EditorialBlogPage>
}
