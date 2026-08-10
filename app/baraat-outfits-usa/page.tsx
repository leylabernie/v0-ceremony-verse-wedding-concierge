import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/baraat-outfits-usa/",
  title: "Baraat Outfits \u2014 Sourced from India, Delivered to USA",
  description: "Baraat outfits for the groom, groomsmen, and family \u2014 sherwanis, safas (turbans), and coordinated accessories sourced from India with US delivery."
});

const serviceSchema = buildServiceSchema({
  name: "Baraat Outfit Sourcing",
  description: "Baraat outfits for the groom, groomsmen, and family \u2014 sherwanis, safas, sehra, and coordinated accessories sourced from India with US delivery.",
  url: "/baraat-outfits-usa/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Baraat Outfits", url: "/baraat-outfits-usa/" },
]);

export default function BaraatOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Baraat Ceremony
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Baraat outfits sourced from India — the groom's grand entry, done right.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Organize the groom&apos;s sherwani, wedding-party outfits, family attire, and approved accessories in one documented sourcing process. Customization and delivery depend on the selected item and vendor.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
            Book Free Consultation
          </Link>
          <a href="https://wa.me/12153419990" style={{ fontSize: "17px", color: "#4d403a", textDecoration: "none" }}>
            WhatsApp: +1 (215) 341-9990
          </a>
        </div>
      </section>

      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What we source for Baraat
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Groom's Baraat Sherwani", desc: "Full-length sherwani with optional safa, researched to match the approved color, style, measurements, and vendor capabilities." },
              { title: "Groomsmen Kurta Sets", desc: "Coordinate bandhgalas or kurta sets with shared color references and individual measurement records." },
              { title: "Sehra & Accessories", desc: "Add family-approved accessories only when the requested item, vendor, and terms can be responsibly reviewed." },
              { title: "Groom's Family Attire", desc: "Coordinated sherwanis and kurtas for the groom's father and brothers. Festive, traditional, and unified." },
              { title: "Mojari & Footwear", desc: "Traditional mojari footwear sourced from India to complete the groom's look — in matching or complementary tones." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 24px 8px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a6841", fontWeight: 600, marginBottom: "16px" }}>
            Related ceremonies &amp; outfits
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            <Link href="/reception-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
            <Link href="/buy-sherwani-from-india-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Groom Sherwanis</Link>
            <Link href="/mehndi-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Mehndi Outfits</Link>
            <Link href="/sangeet-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Sangeet Outfits</Link>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridesmaid Outfits</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Baraat outfit FAQ
          </h2>
          {[
            { q: "Should the Baraat sherwani be different from the wedding sherwani?", a: "Many grooms wear the same sherwani for both the Baraat and the wedding ceremony, while others prefer a separate look. We can source one or both depending on your preference and budget." },
            { q: "How long does a custom sherwani take?", a: "The timeline depends on the selected item, customization, vendor capacity, approvals, shipping, customs, and alteration buffer. Confirm a written timeline before purchase." },
            { q: "Can you coordinate groomsmen across multiple states?", a: "Group coordination is available within the selected tier or custom written scope. The order plan identifies each participant, measurement record, approval, destination, and available shipping arrangement." },
            { q: "What if the groom has never worn a sherwani before?", a: "We can explain common silhouettes, layering, accessories, measurement requirements, and dressing steps in plain language. Final style and cultural choices remain with the couple and family." },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "48px 24px 80px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "14px" }}>
            Your Baraat, your grand entry
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Discuss the groom, groomsmen, family, and accessory requirements in one consultation. Item, customization, vendor, shipping, customs, and remedy terms are confirmed before purchase.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
              Book Free Consultation
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
