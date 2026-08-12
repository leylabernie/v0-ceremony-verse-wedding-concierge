import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/when-to-order-indian-wedding-outfits-nri-bride/",
  title: "When to Order Indian Wedding Outfits: NRI Timeline",
  description: "Month-by-month NRI timeline for ordering Indian wedding outfits from India \u2014 when to start, when to lock vendors, and customs buffer.",
  keywords: ["when to order indian wedding outfits from India", "NRI bride timeline", "indian wedding outfit lead time", "bridal lehenga production time"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "When to Order Indian Wedding Outfits: NRI Timeline",
  description: "Month-by-month NRI timeline for ordering Indian wedding outfits from India \u2014 when to start, when to lock vendors, and customs buffer.",
  url: "/blog/when-to-order-indian-wedding-outfits-nri-bride/",
  datePublished: "2026-03-01",
  keywords: ["when to order indian wedding outfits from India", "NRI bride timeline", "indian wedding outfit lead time", "bridal lehenga production time"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "When to Order Indian Wedding Outfits from India: NRI Timelin", url: "/blog/when-to-order-indian-wedding-outfits-nri-bride/" },
]);

export default function TimelineGuidePage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>CeremonyVerse · June 2026</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            When Should NRI Brides Order Wedding Outfits from India? Month-by-Month Timeline
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            The realistic month-by-month timeline — from first consultation to delivery at your door. Plus what happens if you are behind schedule.
          </p>
        </div>
      </div>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>A common planning question is whether there is still enough time to source from India. The answer depends on the item, vendor, customization, approvals, shipping, customs, and alteration buffer. Use this timeline as a planning framework—not a guaranteed minimum.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Build the Timeline Backward from Your Event</h2>
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Stage</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>What to Confirm</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Requirements</td><td style={{ padding: "0.5rem 0" }}>Ceremonies, people, items, family approvals, priorities, and complete budget</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Vendor review</td><td style={{ padding: "0.5rem 0" }}>Seller identity, item evidence, capacity, written estimate, payment, cancellation, and remedy terms</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Order approval</td><td style={{ padding: "0.5rem 0" }}>Exact item references, measurements, customization, outside costs, and decision deadlines</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Production</td><td style={{ padding: "0.5rem 0" }}>Responsible provider, available progress evidence, change process, and current completion estimate</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Shipping</td><td style={{ padding: "0.5rem 0" }}>Carrier, service level, documents, insurance options, customs responsibility, and claim process</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Local fitting</td><td style={{ padding: "0.5rem 0" }}>First-fitting date, alteration provider, allowance, backup option, and event-day handoff</td></tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>What Changes the Lead Time?</h2>
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Variable</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Question to Ask</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Ready-made or custom</td><td>Is the selected item in stock, made to order, altered, or fully custom?</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Handwork and materials</td><td>Are the required materials available, and what work remains after approval?</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Group quantity</td><td>Can the vendor produce the approved quantity in one run, and how will variation be handled?</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Approvals</td><td>Who decides, what evidence is available, and when does a missed decision change the estimate?</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Transport and customs</td><td>What does the carrier currently estimate, and which party handles documents, fees, and claims?</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Alterations</td><td>When can a local tailor perform the first fitting and any follow-up work?</td></tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1.2rem" }}>
            No table can provide an absolute minimum. Add a meaningful buffer for decisions, vendor changes, carrier or customs delays, and local alterations. For the variables behind a shipment estimate, see our <Link href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/" style={{ color: "#7a6841" }}>shipping guide</Link>.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>What Happens If Your Outfit Arrives Late: Backup Plans for NRI Brides</h2>

          <p><strong>If the schedule is compressed:</strong> Ask vendors for current ready-made and limited-customization options, confirm the carrier service actually available for the route, and reserve a local backup. Do not rely on an expedited estimate until the responsible provider confirms it in writing.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>The Golden Rule</h2>
          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem" }}>Start early enough to preserve options and a fitting buffer.</p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>Workshops can get busy, fabric can sell out, and vendor capacity changes. Starting earlier generally creates more options and a better alteration buffer, but the actual timeline still depends on the selected item and vendor. Planning your budget alongside your timeline? Check out <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "#7a6841" }}>what drives bridal lehenga cost</Link>.</p>
          </div>

          {/* ─── RELATED GUIDES (Tier 2 Internal Linking) ─── */}
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "2.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Related Guides for NRI Brides:
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/" style={{ color: "#7a6841" }}>
                  How long shipping from India actually takes
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "#7a6841" }}>
                  How much a bridal lehenga costs from India with shipping
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
              Starting earlier can preserve more vendor, customization, and alteration options, but the useful start date depends on the actual items and providers.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Want more free planning tools?
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Open the no-email-gate resource library for the NRI shopping timeline, outfit checklist, vendor red flags, calculators, and other web-based planning tools.
            </p>
            <Link href="/free-guides/" style={{ display: "inline-block", background: "#2f2f2f", color: "#7a6841", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", marginBottom: "1.2rem" }}>
              Open Free Planning Resources →
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#4d403a", marginTop: "0.8rem" }}>
              Not sure if you&apos;re on track? <Link href="/contact/" style={{ color: "#7a6841", fontWeight: 600 }}>Request a consultation</Link> to review your date, items, known estimates, and remaining decisions.
            </p>
          </div>

          <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "#5e4a40" }}><strong>About CeremonyVerse:</strong> We help families organize item research, measurements, written approvals, and the delivery responsibilities included in the selected service scope. <Link href="/how-it-works/" style={{ color: "#7a6841" }}>Learn how we work</Link>, or browse our dedicated sourcing pages for <Link href="/haldi-outfits-usa/" style={{ color: "#7a6841" }}>Haldi outfits</Link> and <Link href="/reception-outfits-usa/" style={{ color: "#7a6841" }}>Reception outfits</Link>.</p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
