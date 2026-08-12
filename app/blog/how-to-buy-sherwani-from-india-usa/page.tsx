import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/how-to-buy-sherwani-from-india-usa/",
  title: "How to Buy a Sherwani from India to USA in 2026 — Groom's Complete Guide",
  description: "Step-by-step guide for grooms buying a sherwani from India and shipping to USA: fabric choices (silk vs velvet), how to take sherwani measurements, customs duties, shipping costs, and coordinating groomsmen outfits.",
  keywords: ["how to buy sherwani from India to USA", "buy sherwani online USA 2026", "groom sherwani India shipping customs", "sherwani measurements guide", "Indian groom outfit USA"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "How to Buy a Sherwani from India for a US Wedding (Complete Guide with Prices)",
  description: "Complete guide for grooms and groomsmen buying a sherwani from India to the USA \u2014 fabric, fit, customs, shipping, and how to coordinate the full wedding party.",
  url: "/blog/how-to-buy-sherwani-from-india-usa/",
  datePublished: "2026-03-01",
  keywords: ["how to buy a sherwani from India USA", "sherwani price India 2026", "buy sherwani online USA", "groom sherwani customs duties"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "How to Buy a Sherwani from India for a US Wedding (Complete ", url: "/blog/how-to-buy-sherwani-from-india-usa/" },
]);

export default function SherwaniGuidePage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      
      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · June 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            How to Buy a Sherwani from India for Your US Wedding: Prices, Sizing & Shipping
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            A practical guide for NRI grooms covering written quotes, measurements, seller evidence, shipping, customs, alteration planning, and remedies.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>
            If you are an NRI groom—or a parent, sibling, or friend helping one—remote sherwani shopping can involve seller, item, sizing, payment, shipping, customs, and remedy risk. Local and India-based options have different services and costs, so compare equivalent written scopes.
          </p>
          <p style={{ marginTop: "1.2rem" }}>
            This guide explains how to compare a sherwani from India: the main cost components,
            measurement risks, vendor warning signs, shipping documents, and customs planning.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            How Much Does a Groom Sherwani Cost in India? (Delivered to the USA)
          </h2>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e6dfd5" }}>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontWeight: 600 }}>Quote Input</th>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontWeight: 600 }}>What to Record</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Garment</td>
                  <td style={{ padding: "0.6rem 0" }}>Exact item, fiber representation, lining, handwork, included pieces, and customization</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Fit</td>
                  <td style={{ padding: "0.6rem 0" }}>Vendor measurement chart, approved measurements, fitting assumptions, and alteration allowance</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Service</td>
                  <td style={{ padding: "0.6rem 0" }}>Selected CeremonyVerse tier, included work, limits, and excluded outside costs</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem 0" }}>Delivery</td>
                  <td style={{ padding: "0.6rem 0" }}>Carrier quote, customs estimate, insurance option, documents, claim process, and remedy terms</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1.5rem" }}>
            <strong>How to compare price:</strong> Ask for the fabric composition, handwork, lining, included accessories, customization, alteration allowance, shipping, and return terms. Compare equivalent written scopes rather than assuming an India quote is automatically better than a US option. Planning your <Link href="/blog/indian-wedding-outfit-checklist-every-ceremony/" style={{ color: "#7a6841" }}>complete Indian wedding outfit checklist</Link> early helps coordinate the groom&apos;s sherwani with the rest of the family.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            How to Take Sherwani Measurements at Home for the Best Fit
          </h2>

          <p>
            Size labels and measurement charts vary by vendor and garment. Use the selected vendor&apos;s chart, record the intended layers and fit preference, and preserve time for a local fitting because remote measurements do not guarantee fit.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>Confirm these measurements using the selected vendor&apos;s chart:</strong>
          </p>

          <ol style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Chest:</strong> Measure around the fullest part of your chest, over a thin kurta or t-shirt. Add 2-3 inches for the inner kurta layer.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Shoulder width:</strong> Measure from the tip of one shoulder bone to the other. Sherwani shoulders should sit slightly broader than your natural shoulder for the traditional structured look.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Sleeve length:</strong> Measure from the shoulder tip to your wrist bone. Sherwani sleeves typically end at the wrist or 1 inch past.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Length:</strong> Measure from the top of your shoulder to 2-3 inches below your knee. Traditional sherwanis are knee-length or slightly longer.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Waist:</strong> Measure at your natural waistline, over the kurta.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Hip:</strong> Measure around the fullest part of your hips.</li>
          </ol>

          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Use the Vendor&apos;s Size and Alteration Guidance
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
              Do not apply a universal size-up rule. Ask how the vendor handles layers, ease, seam allowance, and between-size measurements, then request a local alteration quote.
            </p>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            What to Watch Out For: Common Sherwani Scams Targeting NRI Grooms
          </h2>

          <p>
            Remote buying can expose shoppers to recurring seller, catalog-image, material, sizing, color, payment, shipping, and remedy risks. These examples are general scenarios, not CeremonyVerse client stories:
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>1. Unsupported catalog images.</strong> A seller may show a designer or sample image without documenting whether the listing is the exact available piece or a reference for new production. <em>How to reduce the risk:</em> Ask for current item evidence when available and record the approved material, handwork, color reference, construction, included pieces, and remedy terms. Live video adds evidence but does not prove every claim.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>2. Unsupported material claims.</strong> A seller may label a blend as &quot;pure silk&quot; without item-specific evidence. <em>How to reduce the risk:</em> Ask for the exact fiber composition, any available certification, and the seller&apos;s written representation for the selected garment. Video appearance alone does not authenticate fiber content.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>3. The sizing switch.</strong> You send measurements, but the finished garment may still use a standard template or need adjustment. <em>How to reduce the risk:</em> Use the selected vendor&apos;s measurement chart, keep the approved chart in writing, ask which production evidence is available, and reserve time and budget for local alteration.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>4. The color bait-and-switch.</strong> Ivory in a studio photo looks different from ivory in natural light. Gold embroidery can look yellow or bronze depending on the lighting. <em>How to avoid it:</em> Ask the seller to take photos in natural daylight near a window — not under yellow artificial lights. Better yet, do a video call during India daytime hours.
          </p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>5. Undocumented payment terms.</strong> A buyer may be asked for payment before the item, milestone, cancellation terms, or remedy is clear. <em>How to reduce the risk:</em> Record the payment schedule in the signed agreement and use an available payment method with appropriate protection.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Shipping, Customs, and the Real Total Cost
          </h2>

          <p>
            The garment price is only one input. Build the complete written estimate from:
          </p>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e6dfd5" }}>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontWeight: 600 }}>Cost Input</th>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontWeight: 600 }}>How to Estimate It</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Sherwani</td>
                  <td style={{ padding: "0.6rem 0" }}>Current quote for the exact approved garment and included pieces</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>International shipping</td>
                  <td style={{ padding: "0.6rem 0" }}>Current carrier quote for the route, service level, shipment details, and declared value</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Estimated US customs assessment</td>
                  <td style={{ textAlign: "right", padding: "0.6rem 0" }}>Shipment-specific</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>US alterations</td>
                  <td style={{ padding: "0.6rem 0" }}>Local tailor quote and fitting schedule</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem 0", fontWeight: 600 }}>Complete estimate</td>
                  <td style={{ padding: "0.6rem 0", fontWeight: 600 }}>Item + service + shipping + customs estimate + alteration allowance + contingency</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1.5rem" }}>
            <strong>Compare complete written quotes:</strong> There is no universal savings amount. Compare the exact garment, material, handwork, customization, service fee, shipping, customs estimate, alteration allowance, timeline, and remedy terms with a U.S. boutique quote. Read our <Link href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/" style={{ color: "#7a6841" }}>shipping guide</Link> for the variables that affect a landed estimate.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Matching the Groomsmen: The Coordination Secret
          </h2>

          <p>
            For a group order, let the couple and family approve the palette and hierarchy, then record the requirements for each person:
          </p>

          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Color palette coordination:</strong> The groom wears the richest shade (deep burgundy, emerald, midnight blue), while groomsmen wear lighter tones from the same family (blush pink, sage green, powder blue). This creates visual hierarchy in photos.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Fabric consistency:</strong> If the groom wears raw silk, the groomsmen should wear the same fabric in different colors — not a cheaper substitute that looks different under flash photography.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Embroidery detail matching:</strong> Use the same embroidery technique (zardozi, resham, mirror work) across all outfits, varying the density. Groom gets full embroidery, groomsmen get collar/cuff details.</li>
          </ul>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>Pro tip:</strong> Ordering all groomsmen outfits from one workshop in one production run can reduce color variation, but handmade materials and dye lots still cannot be guaranteed identical.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Timeline: When Should You Order?
          </h2>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e6dfd5" }}>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontWeight: 600 }}>Stage</th>
                  <th style={{ textAlign: "left", padding: "0.6rem 0", fontWeight: 600 }}>What to Confirm</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Requirements</td>
                  <td style={{ padding: "0.6rem 0" }}>Ceremony, palette, layers, fit preference, group quantity, and complete budget</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Vendor review</td>
                  <td style={{ padding: "0.6rem 0" }}>Item evidence, capacity, measurement chart, current estimate, payment, and remedy terms</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Approval</td>
                  <td style={{ padding: "0.6rem 0" }}>Exact item references, measurements, customization, costs, and decision deadlines</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}>
                  <td style={{ padding: "0.6rem 0" }}>Shipping</td>
                  <td style={{ padding: "0.6rem 0" }}>Release condition, carrier, service level, documents, customs, insurance, and claims</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.6rem 0" }}>Local fitting</td>
                  <td style={{ padding: "0.6rem 0" }}>First-fitting date, alteration provider, allowance, and backup option</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1.2rem" }}>
            Timing matters just as much for the groom as it does for the bride. See our <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" style={{ color: "#7a6841" }}>when to order your wedding outfits from India</Link> guide for a full month-by-month timeline that covers both bride and groom planning.
          </p>

          {/* ─── COMMERCIAL CTA — directly connects blog readers to the buying funnel ─── */}
          <div style={{ background: "#faf8f5", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.75rem", marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#7a6841", marginBottom: "0.6rem" }}>
              Ready to Source Your Sherwani?
            </p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "0.6rem" }}>
              Compare a custom sherwani from India with US options
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#4d403a", marginBottom: "1rem", lineHeight: 1.6 }}>
              Compare the selected garment, measurements, service scope, shipping, customs estimate, alteration allowance, timeline, and remedy terms in writing.
            </p>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/buy-sherwani-from-india-usa/" style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>Buy a Sherwani from India</Link>
              <Link href="/contact/" style={{ display: "inline-block", background: "transparent", color: "#4d403a", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #7a6841" }}>Schedule a Free 30-Minute Consultation</Link>
              <Link href="/how-it-works/" style={{ display: "inline-block", background: "transparent", color: "#4d403a", padding: "0.7rem 1.4rem", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", border: "1px solid #e6dfd5" }}>How It Works</Link>
            </div>
          </div>

          {/* ─── RELATED GUIDES (Tier 2 Internal Linking) ─── */}
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "2.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Related Guides for NRI Grooms & Brides:
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "#7a6841" }}>
                  How much a bridal lehenga costs from India with shipping
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/indian-wedding-outfit-checklist-every-ceremony/" style={{ color: "#7a6841" }}>
                  Complete Indian wedding outfit checklist for the whole family
                </Link>
              </li>
              <li>
                <Link href="/blog/indian-wedding-outfit-scams-nri-brides/" style={{ color: "#7a6841" }}>
                  Common scams when buying wedding outfits from India
                </Link>
              </li>
            </ul>
          </div>

          {/* ─── LEAD-FIRST CTA ─── */}
          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "2rem", marginTop: "2.5rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              A groom&apos;s sherwani is highly visible throughout the wedding, so the item, fit plan, timing, and complete landed cost deserve the same written comparison as any other important outfit. India sourcing can expand the available options, but it does not guarantee better quality, a lower price, or exact fit.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Want help comparing sherwani options?
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Open CeremonyVerse&apos;s no-email-gate resource library for outfit checklists, complete-cost guidance, shopping timelines, vendor red flags, and planning calculators.
            </p>
            <Link href="/free-guides/" style={{ display: "inline-block", background: "#2f2f2f", color: "#7a6841", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", marginBottom: "1.2rem" }}>
              Open Free Planning Resources →
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#4d403a", marginTop: "0.8rem" }}>
              Want help researching a sherwani? <Link href="/services/" style={{ color: "#7a6841", fontWeight: 600 }}>See how groom sourcing works</Link> — eligible live review, vendor-specific measurement coordination, written approvals, and delivery support within the selected scope.
            </p>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #e6dfd5", margin: "2.5rem 0" }} />

          <p style={{ fontSize: "0.95rem", color: "#5e4a40" }}>
            <strong>About CeremonyVerse:</strong> CeremonyVerse is a U.S.-based Indian wedding shopping concierge. Eligible tiers may include live review, measurement coordination, written approvals, pre-shipping review, and delivery support when the selected item and vendor allow it. <Link href="/services/" style={{ color: "#7a6841" }}>See what we source</Link> or <Link href="/faq/" style={{ color: "#7a6841" }}>read our FAQ</Link>.
          </p>

        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
