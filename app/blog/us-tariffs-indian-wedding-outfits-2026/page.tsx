import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/us-tariffs-indian-wedding-outfits-2026/",
  title: "US Tariffs on Indian Wedding Outfits: NRI Guide 2026",
  description: "How to estimate US customs costs for Indian wedding outfit shipments using garment classification, fiber content, declared value, and current tariff rules.",
  keywords: ["US tariffs Indian wedding outfits 2026", "de minimis exemption ended", "customs duties lehenga USA", "Section 122 surcharge wedding clothes"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "US Tariffs on Indian Wedding Outfits: What NRI Brides Need to Know in 2026",
  description: "How to estimate US customs costs for Indian wedding outfit shipments using garment classification, fiber content, declared value, and current tariff rules.",
  url: "/blog/us-tariffs-indian-wedding-outfits-2026/",
  datePublished: "2026-03-01",
  keywords: ["US tariffs Indian wedding outfits 2026", "de minimis exemption ended", "customs duties lehenga USA", "Section 122 surcharge wedding clothes"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "US Tariffs on Indian Wedding Outfits: What NRI Brides Need t", url: "/blog/us-tariffs-indian-wedding-outfits-2026/" },
]);

export default function TariffsBlogPost() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      
      <SeoNav />
      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · March 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            US Tariffs on Indian Wedding Outfits: What NRI Brides Need to Know in 2026
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Tariff rules can change quickly. Here is the durable framework for estimating your landed cost without relying on one universal percentage.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>
            If you have been planning your Indian wedding in the US and scrolling through lehenga inspiration at midnight, you have probably hit a wall of conflicting tariff headlines. The confusion is understandable: customs cost depends on the product classification and the rules in effect when the shipment enters the country, not a single permanent rate for every outfit.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Here is the useful truth: how your outfit is constructed, what fibers it contains, its declared value, where it was made, and how it reaches you can all affect the assessment. Let us break down the planning framework clearly.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            What Determines the Duty on an Indian Wedding Outfit
          </h2>
          <p>
            US Customs classifies commercial garments under the Harmonized Tariff Schedule. A silk saree, synthetic lehenga, embroidered blouse, and sherwani can fall under different classifications because fiber content, construction, and product type matter.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            Your shipment estimate should account for:
          </p>
          <ol style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li>The base HTS classification for the specific garment and its primary fiber content.</li>
            <li>Any country-wide or product-specific tariff measures in effect on the entry date.</li>
            <li>The declared value, shipping documentation, and whether the shipment is commercial cargo or accompanied baggage.</li>
          </ol>
          <p style={{ marginTop: "1.2rem" }}>
            The practical result: do not budget from a generic percentage copied from social media. Request a shipment-specific estimate and keep a contingency because US Customs makes the final classification and assessment.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Does This Apply to Your Wedding Lehenga?
          </h2>
          <p>The answer depends entirely on <em>how</em> your outfit reaches you.</p>

          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 600, color: "#2f2f2f", marginTop: "1.8rem", marginBottom: "0.6rem" }}>
            If you carry it home in your suitcase from India
          </h3>
          <p>
            Accompanied baggage follows traveler rules rather than the commercial courier process. Declare purchases, keep itemized receipts, and verify the current CBP traveler guidance before your return date because exemption amounts and additional measures can change.
          </p>

          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.25rem", fontWeight: 600, color: "#2f2f2f", marginTop: "1.8rem", marginBottom: "0.6rem" }}>
            If your outfit is shipped directly from India to your US address
          </h3>
          <p>
            Courier shipments enter through a commercial customs process. The carrier or broker uses the invoice and product details to classify the goods, and US Customs may assess duties or request more documentation. Build the estimate from the actual garments in the shipment.
          </p>

          {/* Table */}
          <div style={{ overflowX: "auto", marginTop: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.93rem" }}>
              <thead>
                <tr style={{ background: "#2f2f2f", color: "#f8f6f2" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 500 }}>Scenario</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 500 }}>Tariff applies?</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontWeight: 500 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: "#fff", borderBottom: "1px solid #e6dfd5" }}>
                  <td style={{ padding: "0.75rem 1rem" }}>Carried in your suitcase from India</td>
                  <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>Traveler rules</td>
                  <td style={{ padding: "0.75rem 1rem" }}>Declare purchases and verify current CBP traveler guidance</td>
                </tr>
                <tr style={{ background: "#f8f6f2", borderBottom: "1px solid #e6dfd5" }}>
                  <td style={{ padding: "0.75rem 1rem" }}>Shipped by courier from India</td>
                  <td style={{ padding: "0.75rem 1rem", fontWeight: 500 }}>May be assessed</td>
                  <td style={{ padding: "0.75rem 1rem" }}>HTS classification plus measures in effect on the entry date</td>
                </tr>
                <tr style={{ background: "#fff" }}>
                  <td style={{ padding: "0.75rem 1rem" }}>Custom-made vs. ready-made</td>
                  <td style={{ padding: "0.75rem 1rem" }}>Classification-specific</td>
                  <td style={{ padding: "0.75rem 1rem" }}>Construction and fiber content can change the classification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            How CeremonyVerse Handles This For You
          </h2>
          <p>
            This is exactly the kind of complexity that makes working with a dedicated <Link href="/services/" style={{ color: "#7a6841" }}>Indian wedding shopping concierge</Link> worth it — versus trying to coordinate everything yourself across twelve time zones.
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Sourcing with documentation in mind.</strong> Ask the selected vendor for accurate invoicing, item descriptions, fiber information, country-of-origin information, and the shipment documents requested by the carrier or customs professional.</li>
            <li><strong>Documented shipping options.</strong> CeremonyVerse can organize the available route, carrier quote, service level, insurance option, required documents, and estimated charges for comparison. The selected carrier and qualified customs professional control classification, routing requirements, clearance, and final delivery.</li>
            <li><strong>Transparent cost planning.</strong> CeremonyVerse records shipping and customs estimates as separate inputs. The carrier or government agency may assess a different amount, so keep a contingency.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Tips for NRI Brides — Whoever You Work With
          </h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <li><strong>Decide the delivery route early.</strong> Commercial courier shipments and accompanied baggage follow different processes; verify the rules for the route you will actually use.</li>
            <li><strong>Get a proper invoice — always.</strong> Get an itemized invoice showing each outfit, fabric content, and individual price. This is your documentation if customs questions the declared value.</li>
            <li><strong>Know your HTS code.</strong> Different fabrics attract different duty rates. A silk lehenga and a polyester-blend lehenga are assessed differently. Ask your shipper to confirm the correct code before dispatch.</li>
            <li><strong>Factor in timing.</strong> Build extra time into your customs clearance timeline, especially for heavier multi-outfit packages or shipments with mixed product types.</li>
            <li><strong>Do not rely on social media for customs guidance.</strong> Tariff rules changed multiple times in 2025 alone. Information shared in Reddit or Facebook groups from even six months ago may be outdated.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            This Is Manageable — With the Right Help
          </h2>
          <p>
            The tariff landscape for buying Indian wedding outfits for US-based weddings can be stressful. The manageable path is accurate classification, honest valuation, complete documentation, a shipment-specific estimate, and enough timing buffer for customs review.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            The key is using current written information from the providers who control each step: the vendor for item details, the carrier for service and documents, and a qualified customs professional or U.S. authority for classification and assessment. See <Link href="/how-it-works/" style={{ color: "#7a6841" }}>how our process works</Link> or read our <Link href="/faq/" style={{ color: "#7a6841" }}>frequently asked questions</Link> about shipping, duties, and timelines.
          </p>

          {/* CTA Box */}
          <div style={{ background: "#2f2f2f", borderRadius: "8px", padding: "2rem", marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: "#f8f6f2", marginBottom: "0.75rem" }}>
              Ready to start sourcing?
            </p>
            <p style={{ color: "#7a6841", fontSize: "0.95rem", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Request a free 30-minute consultation. Bring your budget, inspiration references, and timeline so we can document the in-scope decisions and outside-provider responsibilities.
            </p>
            <Link
              href="/contact/"
              style={{ display: "inline-block", background: "#7a6841", color: "#2f2f2f", padding: "0.8rem 2rem", borderRadius: "4px", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", letterSpacing: "0.03em" }}
            >
              Schedule a Free 30-Minute Consultation
            </Link>
            <p style={{ color: "#4d403a", fontSize: "0.95rem", marginTop: "1rem" }}>
              Or WhatsApp: <a href="https://wa.me/12153419990" style={{ color: "#7a6841" }}>+1 (215) 341-9990</a>
            </p>
          </div>

          {/* Sources */}
          <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid #e6dfd5" }}>
            <p style={{ fontSize: "0.9rem", color: "#4d403a", lineHeight: 1.7 }}>
              <strong>Sources:</strong>{" "}
              <a href="https://www.whitehouse.gov/briefings-statements/2026/02/united-states-india-joint-statement/" target="_blank" rel="noopener noreferrer" style={{ color: "#4d403a" }}>White House US–India Joint Statement, Feb 6 2026</a>{" · "}
              <a href="https://www.whitehouse.gov/presidential-actions/2026/02/imposing-a-temporary-import-surcharge-to-address-fundamental-international-payments-problems/" target="_blank" rel="noopener noreferrer" style={{ color: "#4d403a" }}>Section 122 Proclamation, Feb 20 2026</a>{" · "}
              <a href="https://content.govdelivery.com/accounts/USDHSCBP/bulletins/40b3b7b" target="_blank" rel="noopener noreferrer" style={{ color: "#4d403a" }}>CBP Section 122 Duties Guidance</a>{" · "}
              <a href="https://www.reuters.com/business/retail-consumer/what-end-de-minimis-exemption-means-us-shoppers-businesses-2025-08-29/" target="_blank" rel="noopener noreferrer" style={{ color: "#4d403a" }}>Reuters: End of De Minimis Exemption, Aug 2025</a>{" · "}
              <a href="https://www.cbp.gov/travel/us-citizens/know-before-you-go/what-expect-when-you-return" target="_blank" rel="noopener noreferrer" style={{ color: "#4d403a" }}>CBP Personal Exemption Guide</a>
            </p>
          </div>

        </div>

        {/* Back to blog */}
        <div style={{ marginTop: "3rem" }}>
          <Link href="/blog/" style={{ color: "#7a6841", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Back to Blog
          </Link>
          <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "#4d403a" }}>
            More helpful resources: <Link href="/services/" style={{ color: "#7a6841" }}>Our Services</Link> · <Link href="/how-it-works/" style={{ color: "#7a6841" }}>How It Works</Link> · <Link href="/pricing/" style={{ color: "#7a6841" }}>Pricing</Link> · <Link href="/faq/" style={{ color: "#7a6841" }}>FAQ</Link> · <Link href="/free-guides/" style={{ color: "#7a6841" }}>Free Guides</Link>
          </p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
