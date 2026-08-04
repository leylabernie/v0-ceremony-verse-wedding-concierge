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

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>The Ideal Timeline: 6-8 Months Before Wedding</h2>
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Month Before Wedding</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>What to Do</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>8 months</td><td style={{ padding: "0.5rem 0" }}>Research styles, create Pinterest board, finalize wedding color palette</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>7 months</td><td style={{ padding: "0.5rem 0" }}>Book consultation, finalize your sourcing partner, set budget</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>6 months</td><td style={{ padding: "0.5rem 0" }}>Place bridal lehenga order, submit measurements, finalize design</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>5 months</td><td style={{ padding: "0.5rem 0" }}>Order groom&apos;s sherwani, bridesmaid outfits, parents&apos; outfits</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>4 months</td><td style={{ padding: "0.5rem 0" }}>Video approval of fabrics and cuts for all outfits</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>3 months</td><td style={{ padding: "0.5rem 0" }}>Production underway — weekly photo updates</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>2 months</td><td style={{ padding: "0.5rem 0" }}>Final quality inspection, packaging, shipping to USA</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>1 month</td><td style={{ padding: "0.5rem 0" }}>Arrives in US, alterations if needed, final fitting</td></tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>How Late Is Too Late? Minimum Lead Times for Each Type of Outfit</h2>
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Outfit</th><th style={{ textAlign: "right", padding: "0.5rem 0", fontWeight: 600 }}>Min. Order Time</th><th style={{ textAlign: "right", padding: "0.5rem 0", fontWeight: 600 }}>Production</th><th style={{ textAlign: "right", padding: "0.5rem 0", fontWeight: 600 }}>Shipping</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Bridal lehenga (custom)</td><td style={{ textAlign: "right" }}>5 months</td><td style={{ textAlign: "right" }}>8-12 weeks</td><td style={{ textAlign: "right" }}>1-2 weeks</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Bridal lehenga (ready-made)</td><td style={{ textAlign: "right" }}>3 months</td><td style={{ textAlign: "right" }}>2-4 weeks</td><td style={{ textAlign: "right" }}>1-2 weeks</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Groom sherwani (custom)</td><td style={{ textAlign: "right" }}>4 months</td><td style={{ textAlign: "right" }}>6-8 weeks</td><td style={{ textAlign: "right" }}>1-2 weeks</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Bridesmaid lehengas (group)</td><td style={{ textAlign: "right" }}>4 months</td><td style={{ textAlign: "right" }}>6-8 weeks</td><td style={{ textAlign: "right" }}>1-2 weeks</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Parents&apos; sarees/sherwanis</td><td style={{ textAlign: "right" }}>3 months</td><td style={{ textAlign: "right" }}>4-6 weeks</td><td style={{ textAlign: "right" }}>1-2 weeks</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Jewelry &amp; accessories</td><td style={{ textAlign: "right" }}>2 months</td><td style={{ textAlign: "right" }}>2-4 weeks</td><td style={{ textAlign: "right" }}>1 week</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Mehndi/haldi outfits</td><td style={{ textAlign: "right" }}>2 months</td><td style={{ textAlign: "right" }}>1-2 weeks</td><td style={{ textAlign: "right" }}>1-2 weeks</td></tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1.2rem" }}>
            These are the absolute minimums. If you are at the minimum lead time, you have no room for errors, delays, or rework. We strongly recommend adding 4-6 weeks of buffer to every order. For shipping time estimates, see our guide on <Link href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/" style={{ color: "#7a6841" }}>how long shipping from India actually takes</Link>.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>What Happens If Your Outfit Arrives Late: Backup Plans for NRI Brides</h2>

          <p><strong>4 months out and nothing ordered:</strong> Still doable for most outfits. Skip custom designs and go with ready-made or semi-custom options. You will pay slightly more for expedited production (20-30% surcharge at most workshops). Bridal lehenga is still possible if you order this week.</p>
          <p style={{ marginTop: "1rem" }}><strong>3 months out:</strong> You need to move fast. Focus on the bridal lehenga and groom sherwani first — those have the longest production times. Bridesmaid and parent outfits can still be sourced if you act immediately. Consider express shipping (3-5 days vs. 7-12 days).</p>
          <p style={{ marginTop: "1rem" }}><strong>2 months or less:</strong> Custom outfits are likely not possible. Your options: (1) Buy ready-made from a boutique in India and ship express, (2) Find a US-based Indian boutique and pay the premium, (3) Work with a concierge who has ready stock. We keep a small selection of ready-made pieces for exactly this situation — <Link href="/contact/" style={{ color: "#7a6841" }}>contact us</Link> to check availability.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>The Golden Rule</h2>
          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem" }}>Start 2 months earlier than you think you need to.</p>
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
              The difference between a relaxed bride and a panicked bride often comes down to one thing: when she started. Brides who begin 8+ months out get better prices, better vendors, and actual time for alterations. Brides who wait until 3 months out pay more, stress more, and settle more.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Want our free planning timeline?
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              <strong>Download our free NRI Wedding Planning Timeline</strong> — month-by-month checklist telling you exactly when to order every outfit, when to schedule fittings, and when items should ship to hit your wedding date with room to spare. Enter your email and we&apos;ll send it.
            </p>
            <Link href="/free-guides/" style={{ display: "inline-block", background: "#2f2f2f", color: "#7a6841", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", marginBottom: "1.2rem" }}>
              Get the Free Timeline →
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#4d403a", marginTop: "0.8rem" }}>
              Not sure if you&apos;re on track? <Link href="/contact/" style={{ color: "#7a6841", fontWeight: 600 }}>Book a free timeline review call</Link> — tell us your wedding date and we&apos;ll map out exactly what needs to happen when, plus whether you still have time to source from India.
            </p>
          </div>

          <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "#5e4a40" }}><strong>About CeremonyVerse:</strong> We help NRI families source authentic Indian wedding outfits from India with live video approval and insured delivery. <Link href="/how-it-works/" style={{ color: "#7a6841" }}>Learn how we work</Link>, or browse our dedicated sourcing pages for <Link href="/haldi-outfits-usa/" style={{ color: "#7a6841" }}>Haldi outfits</Link> and <Link href="/reception-outfits-usa/" style={{ color: "#7a6841" }}>Reception outfits</Link>.</p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
