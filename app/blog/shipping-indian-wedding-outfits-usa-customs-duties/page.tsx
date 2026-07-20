import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  path: "/blog/shipping-indian-wedding-outfits-usa-customs-duties/",
  title: "Shipping Indian Wedding Outfits to USA: Customs & Duties",
  description: "Everything NRI families need to know about shipping Indian wedding outfits to the USA \u2014 customs duties, shipping costs, delivery timelines, insurance, and avoiding delays.",
  keywords: ["shipping wedding outfits from india to usa", "us customs duties indian wedding lehengas", "DHL shipping india usa wedding outfits", "import lehenga usa"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "Shipping Indian Wedding Outfits to USA: Customs, Duties & Delivery Timeline",
  description: "Everything NRI families need to know about shipping Indian wedding outfits to the USA \u2014 customs duties, shipping costs, delivery timelines, insurance, and avoiding delays.",
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
          <p style={{ color: "#7a6841", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>CeremonyVerse · June 2026</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            How to Ship Indian Wedding Outfits to the USA: Customs, Duties & Timeline 2026
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Everything NRI families need to know about getting their wedding outfits from India to their US door — costs, customs, timelines, and insurance.
          </p>
        </div>
      </div>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>You found the perfect lehenga. The sherwani fits. The bridesmaid outfits match. Now comes the part that makes most NRI families nervous: getting everything from India to the USA without customs seizures, surprise duty bills, or shipping disasters.</p>
          <p style={{ marginTop: "1.2rem" }}>At CeremonyVerse, we ship wedding outfits for NRI families every week. Here is exactly what you need to know about shipping Indian wedding outfits to the US in 2026 — the costs, the customs process, the timelines, and how to protect yourself. Timing your shipment right is critical — read our <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride" style={{ color: "#7a6841" }}>when to order so outfits arrive on time</Link> guide alongside this one.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Shipping Costs: What You Will Actually Pay</h2>
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Service</th><th style={{ textAlign: "right", padding: "0.5rem 0", fontWeight: 600 }}>Time</th><th style={{ textAlign: "right", padding: "0.5rem 0", fontWeight: 600 }}>Cost</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>DHL/FedEx Express</td><td style={{ textAlign: "right" }}>3-5 days</td><td style={{ textAlign: "right" }}>$150-$250</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>DHL/FedEx Standard</td><td style={{ textAlign: "right" }}>7-12 days</td><td style={{ textAlign: "right" }}>$80-$150</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Speed Post (India Post)</td><td style={{ textAlign: "right" }}>10-20 days</td><td style={{ textAlign: "right" }}>$40-$80</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Air Freight (bulk orders)</td><td style={{ textAlign: "right" }}>5-8 days</td><td style={{ textAlign: "right" }}>$200-$400</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "1rem" }}><strong>Our recommendation:</strong> DHL Express for bridal lehengas and sherwanis (3-5 days, full tracking, insurance included). Standard DHL is fine for bridesmaid outfits and accessories if you have a 3+ week buffer.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>How Much Are US Customs Duties on Indian Wedding Lehengas?</h2>
          <p>This is where most NRI families get surprised. The US charges import duties on clothing from India based on the Harmonized Tariff Schedule (HTS) classification:</p>
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Item Type</th><th style={{ textAlign: "right", padding: "0.5rem 0", fontWeight: 600 }}>Duty Rate</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Silk/silk blend garments</td><td style={{ textAlign: "right" }}>12-18%</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Cotton garments</td><td style={{ textAlign: "right" }}>8-12%</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Synthetic/embroidered garments</td><td style={{ textAlign: "right" }}>15-28%</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Jewelry (costume/fashion)</td><td style={{ textAlign: "right" }}>5-8%</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Hand-loomed silk (with certificate)</td><td style={{ textAlign: "right" }}>0-5%</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "1rem" }}>Duty is calculated on the <strong>declared value</strong> of the goods. A reputable shipper will prepare proper commercial invoices with accurate HTS codes and fabric descriptions. If the invoice is vague or incorrect, customs may reclassify your items at a higher rate — or hold the package for inspection, adding 1-3 weeks. For the latest rates, see our <Link href="/blog/us-tariffs-indian-wedding-outfits-2026" style={{ color: "#7a6841" }}>2026 US tariffs guide</Link>.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>How to Avoid Customs Delays</h2>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Accurate commercial invoice:</strong> Must list each item with description, fabric composition, quantity, and value. Vague descriptions like &quot;clothes&quot; or &quot;gifts&quot; trigger inspections.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Correct HTS codes:</strong> Each fabric type has a specific code. Silk lehengas use different codes than cotton kurtas. Wrong codes = reclassification = higher duties.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Reasonable declared value:</strong> Under-declaring to avoid duties is customs fraud. If customs suspects under-valuation, they will hold the package, reassess at market value, and possibly fine you.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>&quot;Hand-loomed&quot; certificate:</strong> If your items qualify as hand-loomed under the US-India trade agreement, duties drop to 0-5%. Requires a certificate from the weaver/workshop.</li>
            <li><strong>Use a known courier:</strong> DHL and FedEx have established customs clearance processes. Speed Post and unknown couriers often get stuck in manual processing.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>How Long Does Shipping Take from India to the USA for Wedding Outfits?</h2>

          <p>Here is the realistic timeline from the moment your outfits leave the workshop in India to when they arrive at your US address:</p>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Stage</th><th style={{ textAlign: "right", padding: "0.5rem 0", fontWeight: 600 }}>Duration</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Quality inspection &amp; packaging in India</td><td style={{ textAlign: "right" }}>1-2 days</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Courier pickup &amp; transit to airport</td><td style={{ textAlign: "right" }}>1-2 days</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Air transit (India → US)</td><td style={{ textAlign: "right" }}>2-3 days</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>US customs clearance</td><td style={{ textAlign: "right" }}>1-3 days</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Final delivery to your address</td><td style={{ textAlign: "right" }}>1-2 days</td></tr>
                <tr><td style={{ padding: "0.5rem 0", fontWeight: 600 }}>Total (Express)</td><td style={{ textAlign: "right", fontWeight: 600 }}>6-12 days</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "1rem" }}><strong>Buffer time:</strong> Always add 1 week to the estimated delivery. Customs inspections, weather delays, and courier backlogs happen. If your wedding is March 15, plan for delivery by February 28. For a full month-by-month planning schedule, see our <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride" style={{ color: "#7a6841" }}>NRI wedding ordering timeline</Link>.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Insurance: Protect Your Investment</h2>
          <p>A bridal lehenga + jewelry + sherwani for a wedding can easily be worth $3,000-$8,000. If the package is lost, damaged, or stolen in transit, standard courier insurance may not cover the full value.</p>
          <p style={{ marginTop: "1rem" }}><strong>DHL/FedEx included insurance:</strong> Covers up to $100 by default. You can declare a higher value for an additional fee (typically $1-2 per $100 of declared value).</p>
          <p style={{ marginTop: "1rem" }}><strong>Third-party shipping insurance:</strong> Companies like Shipsurance or U-PIC offer coverage up to $10,000+ for international shipments. Cost is typically 1-3% of declared value.</p>
          <p style={{ marginTop: "1rem" }}><strong>What we do at CeremonyVerse:</strong> Every shipment is fully insured for the replacement value of the items. If a package is lost or damaged, we file the claim and source replacements at our cost — not yours.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Packaging: How to Ship Wedding Outfits Safely</h2>
          <p>Poor packaging is the #1 cause of damage. Here is how wedding outfits should be packed:</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.6rem" }}>Lehengas: Folded with tissue paper between layers, placed in a hard garment box, then inside a shipping box with bubble wrap</li>
            <li style={{ marginBottom: "0.6rem" }}>Sherwanis: Hung on a padded hanger inside a garment bag, then in a long shipping box</li>
            <li style={{ marginBottom: "0.6rem" }}>Jewelry: Each piece in individual soft pouch, then in a hard jewelry box with foam padding</li>
            <li>Fragile items: Double-boxed with 2-inch cushioning between inner and outer box</li>
          </ul>
          <p style={{ marginTop: "1rem" }}><strong>Never ship in plastic bags alone.</strong> We have seen lehengas arrive crushed because the seller shipped them in thin poly mailers. A proper garment box costs $5-10 and saves a $2,000 outfit.</p>

          {/* ─── RELATED GUIDES (Tier 2 Internal Linking) ─── */}
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "2.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Related Guides for NRI Families:
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride" style={{ color: "#7a6841" }}>
                  When to order so outfits arrive on time
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/us-tariffs-indian-wedding-outfits-2026" style={{ color: "#7a6841" }}>
                  2026 US tariffs on Indian wedding outfits
                </Link>
              </li>
              <li>
                <Link href="/blog/indian-wedding-outfit-scams-nri-brides" style={{ color: "#7a6841" }}>
                  How to avoid scams when buying from India
                </Link>
              </li>
            </ul>
          </div>

          {/* ─── LEAD-FIRST CTA ─── */}
          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "2rem", marginTop: "2.5rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Customs duties and shipping delays are the #1 reason NRI brides stress about outfits arriving on time — and most first-time buyers underestimate both cost and timeline by weeks. A package held at US Customs for inspection can derail your entire alteration schedule.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Want our shipping cost calculator?
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              <strong>Get our free Shipping Cost Calculator for NRI Brides</strong> — enter your outfit types for an instant estimate of duties, shipping fees, and total delivery time to your state. Plus: a pre-shipping checklist to clear customs smoothly. Enter your email below.
            </p>
            <Link href="/free-guides" style={{ display: "inline-block", background: "#2f2f2f", color: "#7a6841", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", marginBottom: "1.2rem" }}>
              Download the Shipping Calculator →
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#6f6a63", marginTop: "0.8rem" }}>
              Don&apos;t want to deal with customs paperwork yourself? <Link href="/services" style={{ color: "#7a6841", fontWeight: 600 }}>See how we handle international delivery</Link> — we prepare all documentation, insure every package, track delivery to your door.
            </p>
          </div>

          <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "#5e4a40" }}><strong>About CeremonyVerse:</strong> We source and ship Indian wedding outfits for NRI families — handling quality inspection, customs documentation, insured shipping, and delivery to your US door. <Link href="/faq" style={{ color: "#7a6841" }}>Read our FAQ</Link> or <Link href="/blog/us-tariffs-indian-wedding-outfits-2026" style={{ color: "#7a6841" }}>see our 2026 tariff guide</Link>.</p>
        </div>
      </article>
    </main>
  );
}
