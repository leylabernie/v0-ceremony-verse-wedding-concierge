import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/indian-wedding-outfit-checklist-every-ceremony/",
  title: "Indian Wedding Outfit Checklist: 42–51 Outfits for NRI Families",
  description: "The complete outfit-by-ceremony checklist for NRI families \u2014 from the bride and groom to parents, siblings, and guests. 42\u201351 total outfits, nothing missed.",
  keywords: ["indian wedding outfit checklist for nri families usa", "what to wear indian wedding", "indian wedding family outfits", "indian wedding outfit count"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "Indian Wedding Outfit Checklist for NRI Families: Who Needs What (42\u201351 Outfits)",
  description: "The complete outfit-by-ceremony checklist for NRI families \u2014 from the bride and groom to parents, siblings, and guests. 42\u201351 total outfits, nothing missed.",
  url: "/blog/indian-wedding-outfit-checklist-every-ceremony/",
  datePublished: "2026-03-01",
  keywords: ["indian wedding outfit checklist for nri families usa", "what to wear indian wedding", "indian wedding family outfits", "indian wedding outfit count"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "Indian Wedding Outfit Checklist for NRI Families: Who Needs ", url: "/blog/indian-wedding-outfit-checklist-every-ceremony/" },
]);

export default function OutfitChecklistPage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>CeremonyVerse · June 2026</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            The Complete Indian Wedding Outfit Checklist for NRI Families in the USA
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Build one item-by-item wardrobe list around your actual ceremonies, participants, dress requirements, reuse plans, and budget.
          </p>
        </div>
      </div>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>Use this as an illustrative planning worksheet, not a universal ceremony or wardrobe requirement and not a CeremonyVerse client case. Build the actual list with the couple and family, and use any relevant ceremony authority for cultural or religious decisions. For group-order logistics, see our guide on <Link href="/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/" style={{ color: "#7a6841" }}>coordinating bridesmaid lehengas from India</Link>.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Example Bride Wardrobe Categories</h2>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Ceremony</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Outfit</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Engagement / Roka</td><td style={{ padding: "0.5rem 0" }}>Light lehenga, anarkali, or designer saree</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Mehndi</td><td style={{ padding: "0.5rem 0" }}>Green/yellow lehenga or cotton suit (must be comfortable for sitting 3+ hours)</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Haldi</td><td style={{ padding: "0.5rem 0" }}>Yellow outfit you do not mind getting turmeric on (budget-friendly)</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Sangeet</td><td style={{ padding: "0.5rem 0" }}>Sparkly lehenga or gown — heavy embroidery shows well under lights</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Wedding Day</td><td style={{ padding: "0.5rem 0" }}><strong>Bridal lehenga</strong> — the main event outfit</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Reception</td><td style={{ padding: "0.5rem 0" }}>Reception gown or lighter lehenga (you will be tired — comfort matters)</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "0.8rem", fontSize: "0.95rem" }}><strong>Jewelry needed:</strong> Bridal set (necklace, earrings, maang tikka, bangles), matching jewelry for each secondary outfit, henna-appropriate rings and bracelets. Curious about costs? See <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "#7a6841" }}>how much bridal lehengas cost from India</Link>.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Example Groom Wardrobe Categories</h2>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Ceremony</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Outfit</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Engagement / Roka</td><td style={{ padding: "0.5rem 0" }}>Kurta pajama or bandhgala jacket</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Mehndi</td><td style={{ padding: "0.5rem 0" }}>Casual kurta (white or pastel — will get henna on it)</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Haldi</td><td style={{ padding: "0.5rem 0" }}>White kurta (turmeric stains everything)</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Sangeet</td><td style={{ padding: "0.5rem 0" }}>Indo-western jacket or embroidered kurta</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Wedding Day</td><td style={{ padding: "0.5rem 0" }}><strong>Sherwani</strong> — the main event outfit</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Reception</td><td style={{ padding: "0.5rem 0" }}>Tuxedo or bandhgala suit</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "0.8rem", fontSize: "0.95rem" }}><strong>Accessories:</strong> Turban/pagri with feather/kalgi for wedding, matching stole/dupatta, Mojari shoes (2 pairs — one for wedding, one backup), pocket square for reception.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Family Wedding Outfits: What Parents, Grandparents & Relatives Need</h2>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Who</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Outfit</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Bride&apos;s mother</td><td style={{ padding: "0.5rem 0" }}>Heavy saree (Banarasi, Kanjeevaram, or designer) for wedding + lighter saree for sangeet</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Groom&apos;s mother</td><td style={{ padding: "0.5rem 0" }}>Heavy saree for wedding (coordinate with bride&apos;s mother — not the same color)</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Bride&apos;s father</td><td style={{ padding: "0.5rem 0" }}>Sherwani or bandhgala for wedding + kurta pajama for sangeet/mehndi</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Groom&apos;s father</td><td style={{ padding: "0.5rem 0" }}>Sherwani or bandhgala for wedding + kurta pajama for other events</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Grandmothers</td><td style={{ padding: "0.5rem 0" }}>Comfortable sarees with easy-to-manage draping. Consider pre-stitched sarees for ease.</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Grandfathers</td><td style={{ padding: "0.5rem 0" }}>Kurta pajama or simple sherwani. Prioritize comfort over heavy embroidery.</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "0.8rem", fontSize: "0.95rem" }}><strong>Planning prompt:</strong> If the families want coordinated wedding-day saree colors, record each person&apos;s preference and approval deadline early enough for the selected vendor&apos;s current estimate. Matching the bride&apos;s palette or choosing complementary shades is optional, not a cultural rule.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Bridesmaids & Groomsmen</h2>

          <p><strong>Bridesmaids:</strong> Matching lehengas or anarkalis in a coordinated palette. Obtain an item-specific written quote covering fabric, work, customization, quantity, service fee, shipping, customs estimate, alteration allowance, and remedy terms. Ordering in one production run may reduce—but cannot eliminate—handmade color variation. Read our guide on <Link href="/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/" style={{ color: "#7a6841" }}>coordinating bridesmaid lehengas from India</Link>.</p>
          <p style={{ marginTop: "1rem" }}><strong>Groomsmen:</strong> If the couple approves a coordinated look, record each participant, exact garment, measurements, color reference, quantity, item-specific quote, service scope, shipping, customs estimate, alteration allowance, and remedy terms.</p>

          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem" }}>Set Priorities Before Requesting Quotes</p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>Let the couple and family rank ceremony importance, comfort, reuse, photography, customization, and budget. Do not apply a universal spending ratio or assume one fabric or supplier will be inexpensive.</p>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Illustrative Count—Replace with Your Family&apos;s List</h2>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Role</th><th style={{ textAlign: "right", padding: "0.5rem 0", fontWeight: 600 }}># of Outfits</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Bride</td><td style={{ textAlign: "right" }}>6</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Groom</td><td style={{ textAlign: "right" }}>6</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>4 Parents</td><td style={{ textAlign: "right" }}>8-12</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>6 Bridesmaids</td><td style={{ textAlign: "right" }}>6</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>6 Groomsmen</td><td style={{ textAlign: "right" }}>6</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Extended family (10 people)</td><td style={{ textAlign: "right" }}>10-15</td></tr>
                <tr><td style={{ padding: "0.5rem 0", fontWeight: 600 }}>Total</td><td style={{ textAlign: "right", fontWeight: 600 }}>42-51 outfits</td></tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            Total Cost: Compare Every Line Item
          </h2>

          <p>Do not multiply generic per-outfit estimates into a promised savings figure. Obtain written quotes for each garment, customization, service fee, shipping plan, customs estimate, and alteration allowance, then compare equivalent scopes.</p>

          <p style={{ marginTop: "1.2rem" }}>
            Group orders can have substantial cost and timing differences by fabric, handwork, and vendor. Plan early and compare like-for-like written quotes. See our <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" style={{ color: "#7a6841" }}>NRI wedding timeline guide</Link> to build a buffer.
          </p>

          {/* ─── RELATED GUIDES (Tier 2 Internal Linking) ─── */}
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "2.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Related Guides for NRI Families:
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/how-much-does-bridal-lehenga-cost-india-2026/" style={{ color: "#7a6841" }}>
                  How much bridal lehengas cost from India with shipping
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/" style={{ color: "#7a6841" }}>
                  How to order bridesmaid lehengas from India for a US wedding
                </Link>
              </li>
              <li>
                <Link href="/services/" style={{ color: "#7a6841" }}>
                  Wedding outfit sourcing for NRI families — how CeremonyVerse works
                </Link>
              </li>
            </ul>
          </div>

          {/* ─── LEAD-FIRST CTA ─── */}
          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "2rem", marginTop: "2.5rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              The total number of outfits depends on your actual ceremonies, participants, and reuse plan. One shared checklist can identify missing decisions before a last-minute purchase becomes necessary.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Want more free planning tools?
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Open CeremonyVerse&apos;s no-email-gate resource library for the wedding-outfit checklist, shopping timeline, destination budget calculator, family responsibility map, and other web-based tools.
            </p>
            <Link href="/free-guides/" style={{ display: "inline-block", background: "#2f2f2f", color: "#7a6841", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", marginBottom: "1.2rem" }}>
              Open Free Planning Resources →
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#4d403a", marginTop: "0.8rem" }}>
              Overwhelmed by the outfit count? <Link href="/contact/" style={{ color: "#7a6841", fontWeight: 600 }}>Book a free introductory consultation</Link> to discuss the wardrobe scope, timing, and which service tier may fit. A detailed private plan begins only under the applicable written scope.
            </p>
          </div>

          <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "#5e4a40" }}><strong>About CeremonyVerse:</strong> CeremonyVerse organizes India-sourcing research, eligible live review, measurements, written approvals, and delivery support within the selected tier. Availability depends on the selected item and vendor. <Link href="/contact/" style={{ color: "#7a6841" }}>Book a free consultation</Link> to discuss your wedding outfit needs.</p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
