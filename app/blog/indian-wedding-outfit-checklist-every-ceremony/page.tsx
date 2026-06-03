import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indian Wedding Outfit Checklist: What Every Family Member Needs | CeremonyVerse",
  description: "Complete Indian wedding outfit checklist for NRI families — what the bride, groom, parents, bridesmaids, groomsmen, and guests need for every ceremony. Downloadable PDF included.",
  keywords: "indian wedding outfit checklist, what to wear indian wedding, indian wedding guest outfit guide, indian wedding family outfits, mehndi outfit, sangeet outfit, haldi outfit",
};

export default function OutfitChecklistPage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#a69260", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>CeremonyVerse · June 2026</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.25, margin: "0 0 1.5rem" }}>
            Indian Wedding Outfit Checklist: What Every Family Member Needs for Every Ceremony
          </h1>
          <p style={{ color: "#a69260", fontSize: "0.95rem", lineHeight: 1.7 }}>
            The complete outfit-by-ceremony checklist for NRI families — from the bride and groom to parents, siblings, and guests. Nothing missed, nothing last-minute.
          </p>
        </div>
      </div>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#2f2f2f" }}>

          <p>Planning an Indian wedding in the US means coordinating outfits for 8-15+ people across 5-7 different events. Most NRI families we work with forget at least 3-4 outfits until the week before — leading to panic shopping at overpriced US boutiques. This checklist prevents that.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>The Bride</h2>

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
          <p style={{ marginTop: "0.8rem", fontSize: "0.95rem" }}><strong>Jewelry needed:</strong> Bridal set (necklace, earrings, maang tikka, bangles), matching jewelry for each secondary outfit, henna-appropriate rings and bracelets.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>The Groom</h2>

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

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Parents (Both Sets)</h2>

          <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
              <thead><tr style={{ borderBottom: "2px solid #e6dfd5" }}><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Who</th><th style={{ textAlign: "left", padding: "0.5rem 0", fontWeight: 600 }}>Outfit</th></tr></thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Bride&apos;s mother</td><td style={{ padding: "0.5rem 0" }}>Heavy saree (Banarasi, Kanjeevaram, or designer) for wedding + lighter saree for sangeet</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Groom&apos;s mother</td><td style={{ padding: "0.5rem 0" }}>Heavy saree for wedding (coordinate with bride&apos;s mother — not the same color)</td></tr>
                <tr style={{ borderBottom: "1px solid #f0ebe3" }}><td style={{ padding: "0.5rem 0" }}>Bride&apos;s father</td><td style={{ padding: "0.5rem 0" }}>Sherwani or bandhgala for wedding + kurta pajama for sangeet/mehndi</td></tr>
                <tr><td style={{ padding: "0.5rem 0" }}>Groom&apos;s father</td><td style={{ padding: "0.5rem 0" }}>Sherwani or bandhgala for wedding + kurta pajama for other events</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "0.8rem", fontSize: "0.95rem" }}><strong>Important:</strong> Both mothers should coordinate their wedding day saree colors 3-4 months in advance. We recommend the bride&apos;s mother wears a color from the bride&apos;s lehenga palette, and the groom&apos;s mother wears a complementary shade.</p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Bridesmaids & Groomsmen</h2>

          <p><strong>Bridesmaids (4-8 people):</strong> Matching lehengas or anarkalis in a coordinated palette. Budget ₹8,000-₹15,000 ($95-$175) per outfit from India vs. $300-$600+ in the US. Order all from the same workshop to guarantee color consistency.</p>
          <p style={{ marginTop: "1rem" }}><strong>Groomsmen (4-8 people):</strong> Matching kurtas with coordinating vests/jackets. Budget ₹3,500-₹7,000 ($40-$80) per outfit from India vs. $150-$300+ in the US. Ivory/cream kurtas with colored vests are the most popular combination.</p>

          <div style={{ background: "#faf8f4", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "1.5rem", marginTop: "1.5rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.8rem" }}>Pro Tip: The 80/20 Rule for Group Outfits</p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>Spend 80% of your group outfit budget on the wedding day outfits (when photos matter most) and 20% on mehndi/haldi outfits (where comfort matters more than perfection). For mehndi and haldi, cotton and lightweight fabrics from India cost almost nothing and work perfectly.</p>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>Grandparents, Siblings & Extended Family</h2>

          <p>Do not forget these family members — they are often overlooked until two weeks before:</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.6rem" }}><strong>Grandmothers:</strong> Comfortable sarees with easy-to-manage draping. Consider pre-stitched sarees for ease.</li>
            <li style={{ marginBottom: "0.6rem" }}><strong>Grandfathers:</strong> Kurta pajama or simple sherwani. Prioritize comfort over heavy embroidery.</li>
            <li style={{ marginBottom: "0.6rem" }}><strong>Younger siblings (not in wedding party):</strong> Kurta/lehenga sets that coordinate with the family palette.</li>
            <li style={{ marginBottom: "0.6rem" }}><strong>Cousins and close relatives flying in:</strong> Give them the color palette 2 months early so they can shop in India if visiting, or order through you.</li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>The Total Outfit Count</h2>

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

          <p style={{ marginTop: "1.2rem" }}><strong>At US boutique prices ($300-$600 per outfit):</strong> $12,600-$30,600<br/><strong>Sourcing from India ($80-$250 per outfit):</strong> $3,360-$12,750<br/><strong>Potential savings:</strong> $9,000-$17,000+</p>

          <div style={{ background: "#2f2f2f", borderRadius: "12px", padding: "2rem", marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ color: "#a69260", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.8rem" }}>Free Download</p>
            <p style={{ color: "#f8f6f2", fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem" }}>Indian Wedding Outfit Checklist PDF</p>
            <p style={{ color: "#b0a898", fontSize: "0.9rem", marginBottom: "1.5rem" }}>Printable checklist with every outfit, every ceremony, every family member.</p>
            <Link href="/free-guides" style={{ display: "inline-block", background: "#a69260", color: "#fff", padding: "12px 28px", borderRadius: "999px", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>Download Free Checklist →</Link>
          </div>

          <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "#5e4a40" }}><strong>About CeremonyVerse:</strong> We source bridal lehengas, sherwanis, bridesmaid outfits, and family wedding attire directly from India for NRI families — with live video approval before shipping. <Link href="/contact" style={{ color: "#a69260" }}>Book a free consultation</Link> to discuss your wedding outfit needs.</p>
        </div>
      </article>
    </main>
  );
}
