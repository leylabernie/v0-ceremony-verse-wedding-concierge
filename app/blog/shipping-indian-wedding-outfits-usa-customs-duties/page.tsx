import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/shipping-indian-wedding-outfits-usa-customs-duties/",
  title: "Shipping Indian Outfits to USA: Customs, Taxes & Tariff Rules",
  description: "Plan classification, declared value, duties, carrier charges, customs review, tracking, and delivery estimates for an India-to-USA outfit shipment.",
  keywords: ["shipping wedding outfits from india to usa", "us customs duties indian wedding lehengas", "DHL shipping india usa wedding outfits", "import lehenga usa"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "Shipping Indian Wedding Outfits to USA: Customs, Duties & Delivery Timeline",
  description: "Plan classification, declared value, duties, carrier charges, customs review, tracking, insurance options, and delivery estimates for an India-to-USA outfit shipment.",
  url: "/blog/shipping-indian-wedding-outfits-usa-customs-duties/",
  datePublished: "2026-03-01",
  keywords: ["shipping wedding outfits from india to usa", "us customs duties indian wedding lehengas", "DHL shipping india usa wedding outfits", "import lehenga usa"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "Shipping Indian Wedding Outfits to USA: Customs, Duties & De", url: "/blog/shipping-indian-wedding-outfits-usa-customs-duties/" },
]);

export default function ShippingGuidePage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>CeremonyVerse · June 2026</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            How to Ship Indian Wedding Outfits to the USA: Customs, Duties & Timeline 2026
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Plan shipment-specific costs, customs questions, tracking, insurance options, delivery estimates, and a local alteration buffer.
          </p>
        </div>
      </div>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>International delivery adds carrier, documentation, customs, insurance, packaging, and claim decisions to the outfit plan. No guide can guarantee timing, charges, or condition on arrival.</p>
          <p style={{ marginTop: "1.2rem" }}>Shipping Indian wedding outfits to the U.S. requires item-specific information about classification, fiber, construction, declared value, carrier service, insurance, and the tariff rules in effect when the shipment enters the country. Use this guide as general planning information, then confirm the actual shipment with the carrier or customs professional. Read our <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" style={{ color: "#7a6841" }}>ordering-timeline guide</Link> alongside this one.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>How to Request a Shipment-Specific Quote</h2>
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Input</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>What to Confirm</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Shipment</td><td>Origin, destination, item description, quantity, weight, dimensions, and declared value</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Service</td><td>Carrier, service level, pickup window, tracking, signature, and current estimate</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Coverage</td><td>Available insurance or declared-value option, exclusions, limit, evidence, and claim process</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Customs</td><td>Required documents, responsible party, broker or carrier process, and possible assessments</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "1rem" }}><strong>Our recommendation:</strong> Use a trackable courier service with insurance for the declared value and confirm the carrier quote and delivery estimate for your exact shipment.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>How Much Are US Customs Duties on Indian Wedding Lehengas?</h2>
          <p>This is where most NRI families get surprised. The US charges import duties on clothing from India based on the Harmonized Tariff Schedule (HTS) classification:</p>
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Item Type</th><th style={{ textAlign: "right", padding: "0.5rem 0", fontWeight: 600 }}>Duty Rate</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Silk/silk blend garments</td><td style={{ textAlign: "right" }}>Classification-specific</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Cotton garments</td><td style={{ textAlign: "right" }}>Classification-specific</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Synthetic/embroidered garments</td><td style={{ textAlign: "right" }}>Classification-specific</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Jewelry (costume/fashion)</td><td style={{ textAlign: "right" }}>Material-specific</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Hand-loomed silk</td><td style={{ textAlign: "right" }}>Documentation-dependent</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "1rem" }}>The amount assessed can depend on classification, fiber, construction, country of origin, declared value, and the rules in effect on the entry date. Ask the carrier or qualified customs professional to review the actual shipment; the responsible government agency makes the final determination.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>How to Avoid Customs Delays</h2>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Accurate invoice:</strong> Ask the responsible provider which item descriptions, quantities, values, and other details are required.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Classification:</strong> Do not guess; use the information requested by the carrier, broker, or qualified customs professional.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Declared value:</strong> Use accurate information and do not ask a seller or shipper to under-declare the shipment.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Supporting documentation:</strong> Obtain accurate fiber, construction, and country-of-origin information when requested.</li>
            <li><strong>Carrier process:</strong> Compare service area, tracking, estimates, documentation support, coverage options, and claim terms for the actual route.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>How Long Does Shipping Take from India to the USA for Wedding Outfits?</h2>

          <p>Carrier timing depends on the origin, destination, service level, shipment details, handoff schedule, customs clearance, and final-mile conditions. Ask for a current estimate for the actual shipment.</p>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Stage</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>What to Confirm</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Release and packaging</td><td>Vendor readiness, any included review, packing method, and handoff date</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Courier pickup</td><td>Carrier, service level, pickup window, tracking, and shipment details</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>International transit</td><td>Current route estimate, exceptions, insurance option, and claim process</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>US customs clearance</td><td>Required documents, receiving party, broker or carrier process, and possible assessments</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Final delivery</td><td>Service area, signature requirements, tracking, and final-mile estimate</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "1rem" }}><strong>Buffer time:</strong> Build a meaningful contingency for carrier or customs delays and preserve a local fitting window. The right buffer depends on the event date, shipment, and backup plan.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Insurance: Protect Your Investment</h2>
          <p>Do not assume standard carrier liability equals the purchase price. Ask what coverage or declared-value options are available for the exact item and route.</p>
          <p style={{ marginTop: "1rem" }}><strong>Review in writing:</strong> Confirm the limit, exclusions, evidence requirements, claim deadline, deductible or fee, and the party responsible for filing a claim.</p>
          <p style={{ marginTop: "1rem" }}><strong>What CeremonyVerse documents:</strong> The approved shipment quote states the carrier service, declared value, and available insurance. Loss or damage claims and remedies follow the carrier coverage and signed service terms.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Packaging: How to Ship Wedding Outfits Safely</h2>
          <p>Packaging should be appropriate for the selected items, carrier rules, route, and coverage terms. Ask the vendor or packer to document the method and final carton details:</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.6rem" }}>Lehengas: Folded with tissue paper between layers, placed in a hard garment box, then inside a shipping box with bubble wrap</li>
            <li style={{ marginBottom: "0.6rem" }}>Sherwanis: Hung on a padded hanger inside a garment bag, then in a long shipping box</li>
            <li style={{ marginBottom: "0.6rem" }}>Jewelry: Each piece in individual soft pouch, then in a hard jewelry box with foam padding</li>
            <li>Fragile items: Double-boxed with 2-inch cushioning between inner and outer box</li>
          </ul>
          <p style={{ marginTop: "1rem" }}><strong>Before release:</strong> Confirm the packaging method, final weight and dimensions, shipment photos if available, and the carrier&apos;s restrictions or claim-evidence requirements.</p>

          {/* ─── RELATED GUIDES (Tier 2 Internal Linking) ─── */}
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "2.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Related Guides for NRI Families:
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" style={{ color: "#7a6841" }}>
                  How to plan an outfit-ordering timeline
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/us-tariffs-indian-wedding-outfits-2026/" style={{ color: "#7a6841" }}>
                  2026 US tariffs on Indian wedding outfits
                </Link>
              </li>
              <li>
                <Link href="/blog/indian-wedding-outfit-scams-nri-brides/" style={{ color: "#7a6841" }}>
                  How to avoid scams when buying from India
                </Link>
              </li>
            </ul>
          </div>

          {/* ─── LEAD-FIRST CTA ─── */}
          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "2rem", marginTop: "2.5rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Shipping and customs uncertainty can affect both the budget and the time available for local alterations. Estimate each cost category separately and keep a meaningful schedule buffer.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Want our shipping cost calculator?
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              <strong>Use the free Shipping &amp; Customs Calculator</strong> to organize product cost, shipping, insurance, estimated import charges, brokerage, alterations, and contingency. It is a planning estimate, not a customs assessment, carrier quote, or delivery promise.
            </p>
            <Link href="/planning-tools/shipping-customs/" style={{ display: "inline-block", background: "#2f2f2f", color: "#7a6841", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", marginBottom: "1.2rem" }}>
              Open the Shipping &amp; Customs Calculator →
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#4d403a", marginTop: "0.8rem" }}>
              Need sourcing support? <Link href="/buy-indian-wedding-outfits-from-india/" style={{ color: "#7a6841", fontWeight: 600 }}>Review the available service scopes</Link>. Eligible tiers can include shipping-document coordination and tracking support; the selected vendor, carrier, insurer, and customs authority remain responsible for their work.
            </p>
          </div>

          <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "#5e4a40" }}><strong>About CeremonyVerse:</strong> Eligible sourcing tiers may include pre-shipping review, shipping-document coordination, and tracking support. The selected vendor, carrier, insurer, and customs authority remain responsible for their respective work. <Link href="/faq/" style={{ color: "#7a6841" }}>Read our FAQ</Link> or <Link href="/blog/us-tariffs-indian-wedding-outfits-2026/" style={{ color: "#7a6841" }}>see our 2026 tariff guide</Link>.</p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
