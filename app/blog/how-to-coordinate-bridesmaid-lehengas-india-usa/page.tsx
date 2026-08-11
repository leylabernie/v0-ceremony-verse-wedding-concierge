import { buildMetadata, buildBlogPosting, buildBreadcrumb, JsonLd } from "@/lib/seo";
import Link from "next/link";
import { SourcingCallout } from "@/components/sourcing-callout";

export const metadata = buildMetadata({
  path: "/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/",
  title: "How to Order Matching Bridesmaid Lehengas from India",
  description: "How to coordinate 2\u201314 bridesmaid lehengas from India \u2014 sizing across multiple states, color matching, fabric consistency, and shipping logistics for NRI brides.",
  keywords: ["matching bridesmaid lehengas from India", "coordinate bridesmaid outfits USA wedding", "bridesmaid lehenga sizing guide", "order multiple lehengas from India"],
  publishedTime: "2026-03-01",
  authorName: "CeremonyVerse",
  ogType: "article",
});

const blogPostingSchema = buildBlogPosting({
  headline: "How to Order Matching Bridesmaid Lehengas from India for a US Wedding",
  description: "How to coordinate 2\u201314 bridesmaid lehengas from India \u2014 sizing across multiple states, color matching, fabric consistency, and shipping logistics for NRI brides.",
  url: "/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/",
  datePublished: "2026-03-01",
  keywords: ["matching bridesmaid lehengas from India", "coordinate bridesmaid outfits USA wedding", "bridesmaid lehenga sizing guide", "order multiple lehengas from India"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Blog", url: "/blog/" },
  { name: "How to Order Matching Bridesmaid Lehengas from India for a U", url: "/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/" },
]);

export default function BridesmaidGuidePage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <JsonLd id="schema-blogposting" data={blogPostingSchema} />
        <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>CeremonyVerse · June 2026</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            How to Order Bridesmaid Lehengas from India: Color, Sizing & Delivery Guide
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            The complete guide to sourcing matching bridesmaid lehengas from India — color palettes, sizing for different bodies, consistent quality, and group order logistics.
          </p>
        </div>
      </div>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>Coordinating bridesmaid outfits for an Indian wedding can involve different measurements, locations, approval schedules, budgets, and alteration needs. A remote group order also has to account for dye-lot variation, handmade differences, shipping, customs, and a local fitting buffer rather than assuming every outfit will appear identical.</p>
          <p style={{ marginTop: "1.2rem" }}>This guide explains a practical group-order process whether you work with CeremonyVerse or manage the vendors yourself. Start with our <Link href="/blog/indian-wedding-outfit-checklist-every-ceremony/" style={{ color: "#7a6841" }}>full wedding outfit checklist</Link> to see how bridesmaid outfits fit into the overall plan.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>How to Manage Color Variation Across Multiple Lehengas</h2>

          <p>Start with a family-approved palette, then compare physical or current visual references where available. Fabric, dye lot, lighting, camera, and screen settings can change how a color appears.</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Pastels:</strong> Ask each person to approve the selected reference and review opacity, lining, and likely dye-lot variation.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Jewel tones:</strong> Compare the selected shade under natural and event-style lighting when current media or a swatch is available.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Metallics:</strong> Confirm the base fabric, metallic treatment, jewelry pairing, care instructions, and how the material appears on camera.</li>
            <li><strong>Related shades:</strong> If the group uses lighter or darker versions of one color, record which shade belongs to each person rather than relying on names such as “rose” or “wine.”</li>
          </ul>
          <p style={{ marginTop: "1rem" }}><strong>Family approval matters:</strong> Color meanings and ceremony expectations vary. Let the couple and family approve the palette rather than applying a universal avoid list.</p>

          <p style={{ marginTop: "1.2rem" }}>
            <strong>To reduce color variation:</strong> A single production brief and, when available, one fabric bolt or dye batch can help. Handmade materials, screens, lighting, and dye lots can still vary.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Step 2: Pick the Right Style for Your Group</h2>
          <p>Not every bridesmaid wants (or looks good in) the same outfit. Here are the options:</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.8rem" }}><strong>Matching lehengas:</strong> One approved style and color with each participant&apos;s measurements and comfort needs documented.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Same color, different styles:</strong> Each bridesmaid gets a lehenga in the same color family but with slight style variations — different necklines, sleeve lengths, or skirt fullness. Most flattering for mixed body types.</li>
            <li style={{ marginBottom: "0.8rem" }}><strong>Color gradient (ombre effect):</strong> Bridesmaids wear lehengas in graduated shades of the same color family. Incredibly photogenic but requires precise dye matching.</li>
            <li><strong>Lehengas for some, anarkalis for others:</strong> Bridesmaids who prefer more coverage or comfort can wear anarkali suits in the same color and fabric as the lehengas. Still looks coordinated.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Step 3: Get Measurements Right (This Is Where Most Fail)</h2>
          <p>Size labels and measurement charts vary by vendor and garment. Use the selected vendor&apos;s chart and preserve a local-fitting plan:</p>
          <p style={{ marginTop: "1rem" }}><strong>Option A: Self-measurement with video guide.</strong> Send each bridesmaid a 5-minute video tutorial showing exactly how to take bust, waist, hip, and length measurements. Have them send photos of the measuring tape against their body for verification.</p>
          <p style={{ marginTop: "1rem" }}><strong>Option B: Virtual measurement session.</strong> A scheduled group call can help participants follow the selected vendor&apos;s chart and record questions. It does not replace a qualified local fitting or guarantee fit.</p>
          <p style={{ marginTop: "1rem" }}><strong>Option C: Local tailor measurements.</strong> Have each bridesmaid visit a local Indian tailor in their city for professional measurements. Most accurate but logistically harder.</p>

          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem" }}>Confirm Ease and Alteration Allowance</p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>Do not apply a universal ease rule. Ask the selected vendor how ease, seam allowance, layers, and fit preferences are handled, then request a local alteration quote for each participant.</p>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Build the Group Budget from Written Inputs</h2>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Input</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>What to Record</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Garments</td><td>Exact item, quantity, materials, customization, included pieces, and vendor terms</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Service</td><td>CeremonyVerse scope, included work, limits, and excluded outside costs</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Delivery</td><td>Carrier quote, customs estimate, insurance option, documents, and claim responsibility</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Fitting</td><td>Local tailor quote, alteration allowance, first-fitting date, and backup option</td></tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "1.2rem" }}>
            India sourcing may expand the available colors, handwork, and group-order options, but there is no universal savings percentage. Ordering one production run from a single workshop can reduce—though not eliminate—color variation.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Step 4: Order from the Same Workshop</h2>
          <p>A single vendor or production run may reduce coordination risk. If multiple sellers are used, document the likely differences:</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.6rem" }}>Fabric dye lots will differ — even for the same &quot;color name&quot;</li>
            <li style={{ marginBottom: "0.6rem" }}>Embroidery thread colors will not match</li>
            <li style={{ marginBottom: "0.6rem" }}>Delivery timelines will be different — some arrive early, some late</li>
            <li>Quality standards will vary dramatically</li>
          </ul>
          <p style={{ marginTop: "1rem" }}>A single workshop can use one production brief and, when available, the same fabric bolt or dye batch. This can reduce variation, but handmade color and material differences should still be expected.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Step 5: The Timeline</h2>
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>When</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Action</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Requirements</td><td style={{ padding: "0.5rem 0" }}>Approve palette, style options, quantity, comfort needs, and complete budget</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Measurements</td><td style={{ padding: "0.5rem 0" }}>Use the selected vendor&apos;s chart and record each participant&apos;s approval</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Order</td><td style={{ padding: "0.5rem 0" }}>Confirm item references, costs, estimate, payment, cancellation, and remedy terms</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Production</td><td style={{ padding: "0.5rem 0" }}>Record available evidence, change process, and current vendor estimate</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Delivery and fitting</td><td style={{ padding: "0.5rem 0" }}>Confirm shipment responsibilities, customs, tracking, first fitting, and backup plan</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>2 months out</td><td style={{ padding: "0.5rem 0" }}>Ship to USA, arrives 1.5 months before wedding</td></tr>
              </tbody>
            </table>
          </div>

          {/* ─── RELATED GUIDES (Tier 2 Internal Linking) ─── */}
          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "2.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Related Guides for NRI Brides:
            </p>
            <ul style={{ paddingLeft: "1.2rem", fontSize: "0.95rem" }}>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/indian-wedding-outfit-checklist-every-ceremony/" style={{ color: "#7a6841" }}>
                  Full wedding outfit checklist for the whole family
                </Link>
              </li>
              <li style={{ marginBottom: "0.4rem" }}>
                <Link href="/blog/when-to-order-indian-wedding-outfits-nri-bride/" style={{ color: "#7a6841" }}>
                  How to build a bridesmaid-order timeline with buffers
                </Link>
              </li>
              <li>
                <Link href="/blog/indian-wedding-outfit-scams-nri-brides/" style={{ color: "#7a6841" }}>
                  How to avoid scams when ordering group outfits from India
                </Link>
              </li>
            </ul>
          </div>

          {/* ─── LEAD-FIRST CTA ─── */}
          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "2rem", marginTop: "2.5rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Getting 6 bridesmaids in matching lehengas that actually look matching is one of the hardest parts of NRI wedding planning — and the fastest way to blow your budget if colors don&apos;t match or sizes are wrong. One group order mistake and you&apos;re re-ordering from India (3+ months) or panic-buying at US prices.
            </p>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem", color: "#2f2f2f" }}>
              Want our bridesmaid ordering worksheet?
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              <strong>Download our Bridesmaid Ordering Worksheet</strong> — color coordination template, measurement collection form for each bridesmaid, and group order checklist. Drop your email and it&apos;s yours.
            </p>
            <Link href="/free-guides/" style={{ display: "inline-block", background: "#2f2f2f", color: "#7a6841", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none", marginBottom: "1.2rem" }}>
              Get the Bridesmaid Worksheet →
            </Link>
            <p style={{ fontSize: "0.9rem", color: "#4d403a", marginTop: "0.8rem" }}>
              Want us to coordinate your whole bridesmaid order? <Link href="/contact/" style={{ color: "#7a6841", fontWeight: 600 }}>See how group ordering works</Link> — consistent colors, accurate sizing for every body, one delivery to your door.
            </p>
          </div>

          <p style={{ marginTop: "2rem", fontSize: "0.95rem", color: "#5e4a40" }}><strong>About CeremonyVerse:</strong> We source bridesmaid lehengas, bridal outfits, groom sherwanis, and family wedding attire directly from India for NRI weddings. <Link href="/contact/" style={{ color: "#7a6841" }}>Book a consultation</Link> to discuss your wedding outfit needs.</p>
        </div>
              <SourcingCallout />
      </article>
    </main>
  );
}
