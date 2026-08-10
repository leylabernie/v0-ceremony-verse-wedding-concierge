import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/south-indian-christian-wedding-outfits-usa/",
  title: "South Indian Christian Wedding Outfits \u2014 Sourced from India, Delivered to USA",
  description: "South Indian Christian wedding outfits \u2014 Kerala Christian, Tamil Christian, Telugu Christian traditions. Sarees, suits, and family outfits with US delivery."
});

const serviceSchema = buildServiceSchema({
  name: "South Indian Christian Wedding Outfit Sourcing",
  description: "South Indian Christian wedding outfits sourced from India \u2014 Kerala Christian, Tamil Christian, Telugu Christian traditions including Kanjivaram silk and kasavu sets.",
  url: "/south-indian-christian-wedding-outfits-usa/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "South Indian Christian Outfits", url: "/south-indian-christian-wedding-outfits-usa/" },
]);

export default function SouthIndianChristianWeddingOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Family-Led Outfit Sourcing
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          South Indian Christian Wedding Outfits — Church, Reception, and Family Looks Managed from India to the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Your family and officiants define the church, reception, regional, and clothing requirements. CeremonyVerse can organize the approved outfit brief, vendor options, measurements, written decisions, and U.S. delivery plan without claiming cultural or religious authority.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
            Get My Free Outfit Plan
          </Link>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ fontSize: "17px", color: "#4d403a", textDecoration: "none" }}>
            WhatsApp: +1 (215) 341-9990
          </a>
        </div>
      </section>

      {/* What Makes These Weddings Distinct */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What makes South Indian Christian weddings distinct
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Church Ceremony Bridal Saree", desc: "Document the family's approved color, fabric, weave, blouse, veil, jewelry, modesty, and church requirements before reviewing options." },
              { title: "Set Mundu & Kasavu", desc: "If your family requests a set mundu or kasavu look, record the required material, border, construction, quantity, and authenticity evidence in the sourcing brief." },
              { title: "Reception Outfits", desc: "Build a separate approved brief for sarees, lehengas, suits, or Indo-Western reception looks rather than assuming the church and reception requirements are the same." },
              { title: "Wedding-Party Coordination", desc: "Coordinate written color references, measurements, quantities, approvals, and alteration allowance. Handmade dye lots and screen colors cannot be guaranteed identical." },
              { title: "Family Sarees", desc: "Research sarees for parents and relatives only after the family identifies the preferred region, weave, material, budget, and event." },
              { title: "Community-Specific Requirements", desc: "CeremonyVerse translates your family's approved requirements into an item brief. Your family and officiants remain the authority on Syro-Malabar, Latin Catholic, Marthoma, Tamil Christian, or other customs." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            Family authority comes first
          </h2>
          <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse does not present one South Indian Christian community&apos;s clothing customs as universal and does not claim religious authority. The family and officiants approve the ceremony plan and clothing requirements.
            </p>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse then organizes the requested item research, available vendor evidence, measurements, written approvals, shipment estimate, and applicable terms. No weave, material, handwork, customization, or origin claim is made without support for the selected item.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Group coordination is available within the selected tier or custom written scope. Vendor capacity, handmade variation, local alteration needs, carrier service, and customs timing still apply.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Pricing
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { tier: "Free Consultation", price: "Free", desc: "Tell us about your South Indian Christian wedding — the ceremonies, your outfit vision, and your family's specific traditions. No obligation." },
              { tier: "Style Guide & Vendor List", price: "$249", desc: "A researched starting point for families who will contact vendors, order, and ship independently." },
              { tier: "Guided Sourcing", price: "$799", desc: "Live shopping and order coordination for selected wedding outfits, subject to item and vendor availability." },
              { tier: "Full Bridal Concierge", price: "$2,499", desc: "One organized sourcing process for the bride, groom, and wedding party of up to eight people." },
            ].map((item) => (
              <div key={item.tier} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "4px" }}>{item.tier}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#7a6841", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related ceremonies */}
      <section style={{ padding: "32px 24px 8px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a6841", fontWeight: 600, marginBottom: "16px" }}>
            Related ceremony &amp; outfit pages
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            <Link href="/kanchipuram-silk-sarees-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Kanchipuram Sarees</Link>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridesmaid Outfits</Link>
            <Link href="/reception-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
            <Link href="/gujarati-wedding-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Gujarati Wedding Outfits</Link>
            <Link href="/how-it-works/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>How It Works</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px 80px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "14px" }}>
            Outfits that honor your traditions
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Discuss family-approved kasavu, Kanchipuram, church-ceremony, reception, and wedding-party requirements in one documented consultation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
              Get My Free Outfit Plan
            </Link>
            <a href="https://wa.me/12153419990" style={{ fontSize: "17px", color: "#e8dfd2", textDecoration: "none" }}>
              WhatsApp: +1 (215) 341-9990
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
