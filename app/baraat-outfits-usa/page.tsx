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
        <p style={{ fontSize: "13px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Baraat Ceremony
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Baraat outfits sourced from India — the groom's grand entry, done right.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          The Baraat is the groom's moment. A full-length sherwani, coordinated groomsmen, family dressed to celebrate — we source every piece directly from India, custom stitched to every measurement, and delivered to your US door.
        </p>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What we source for Baraat
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Groom's Baraat Sherwani", desc: "Full-length sherwani with safa, custom stitched to your exact measurements. Ivory, cream, gold, or any color — your vision, our execution." },
              { title: "Groomsmen Kurta Sets", desc: "Coordinated bandhgalas or kurta sets in complementary colors. All measurements collected from groomsmen across any state." },
              { title: "Sehra & Accessories", desc: "Groom's sehra, kaleere, and dupatta sourced to complete the look. Every detail coordinated." },
              { title: "Groom's Family Attire", desc: "Coordinated sherwanis and kurtas for the groom's father and brothers. Festive, traditional, and unified." },
              { title: "Mojari & Footwear", desc: "Traditional mojari footwear sourced from India to complete the groom's look — in matching or complementary tones." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "15px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
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
            { q: "How long does a custom sherwani take?", a: "Allow 12–16 weeks for a custom sherwani — measurements, production, and shipping. We recommend starting at least 10 months before your wedding date." },
            { q: "Can you coordinate groomsmen across multiple states?", a: "Yes — we send the measurement guide to each groomsman, follow up to collect all measurements, and ship to a single address or individually. Multi-state coordination is something we do regularly." },
            { q: "What if the groom has never worn a sherwani before?", a: "No problem at all. We guide non-South Asian grooms through everything — what styles look best, how to wear it, and what accessories go with it. Many of our clients are first-time sherwani wearers." },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "15px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#4d403a" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
