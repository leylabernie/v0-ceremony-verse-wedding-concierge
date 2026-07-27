import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/gujarati-wedding-outfits-usa/",
  title: "Gujarati Wedding Outfits \u2014 Sourced from India, Delivered to USA",
  description: "Gujarati wedding outfits for Garba, Mehndi, Pithi, Mameru, wedding ceremony, and reception \u2014 chaniya choli, lehenga, sherwani, and sarees with US delivery."
});

const serviceSchema = buildServiceSchema({
  name: "Gujarati Wedding Outfit Sourcing",
  description: "Gujarati wedding outfits sourced from India \u2014 chaniya choli for Garba, traditional Mameru outfits, ceremony lehengas and sherwanis, with US delivery.",
  url: "/gujarati-wedding-outfits-usa/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Gujarati Wedding Outfits", url: "/gujarati-wedding-outfits-usa/" },
]);

export default function GujaratiWeddingOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Gujarati Wedding Specialists
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Gujarati Wedding Outfits Sourced from India — For NRI Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          A Gujarati wedding is a multi-day celebration with distinct outfit requirements for each ceremony — from Garba night to Saptapadi. CeremonyVerse has deep experience dressing Gujarati families across multiple ceremonies. We source authentic chaniya cholis, bridal lehengas, sherwanis, and coordinated family outfits directly from India.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <Link href="/contact/" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
            Book Free Consultation
          </Link>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ fontSize: "17px", color: "#4d403a", textDecoration: "none" }}>
            WhatsApp: +1 (215) 341-9990
          </a>
        </div>
      </section>

      {/* Ceremony Outfits */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Outfits for every Gujarati ceremony
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Garba Night — Chaniya Choli", desc: "The Garba is the heart of a Gujarati wedding celebration. We source vibrant, mirror-work chaniya cholis from Kutch and Jaipur — designed for spinning and dancing, with the right flare and weight for movement." },
              { title: "Mehndi Ceremony", desc: "Bright, festive outfits in yellows, greens, and oranges. Comfortable enough for sitting through mehndi application, yet photo-ready. Coordinated pieces for the bridal party sourced together." },
              { title: "Haldi / Pithi Ceremony", desc: "Simple, cheerful outfits — often in yellow or light colors — designed to handle the turmeric paste. We source cotton and georgette pieces that are beautiful yet practical for this joyful ritual." },
              { title: "Mameru Ceremony", desc: "The Mameru is a cherished Gujarati tradition where the maternal uncle gifts the bride her wedding outfit and trousseau. We help source the traditional saree or lehenga for this ceremony, ensuring it honors the significance of the occasion." },
              { title: "Saptapadi — Bridal Lehenga", desc: "The main wedding ceremony demands a statement bridal lehenga — rich reds, maroons, or pinks with heavy embroidery and traditional Gujarati motifs. Custom stitched to perfection by our artisan partners." },
              { title: "Reception & Family Outfits", desc: "Coordinated sarees, lehengas, and sherwanis for the reception and family photographs. We manage measurements across the entire family — both sides — and deliver everything together." },
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
            Our experience with Gujarati weddings
          </h2>
          <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse has dressed Gujarati families for multi-day weddings — including a destination wedding in Mexico — sourcing everything from Garba chaniya cholis to bridal lehengas to coordinated family outfits. We have even made a special trip to Kanchipuram to source pure Kanchipuram silk sarees for a Gujarati family who wanted the finest silk for the mothers and aunties.
            </p>
            <p style={{ marginBottom: "16px" }}>
              We understand that a Gujarati wedding isn't one outfit — it's six or seven. Each ceremony has its own palette, its own formality level, and its own cultural significance. The Garba chaniya choli needs to move with you. The Mameru saree needs to honor tradition. The bridal lehenga needs to take everyone's breath away. We source each piece with that understanding.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Our artisan partners in Surat, Jaipur, Delhi, and Kanchipuram specialize in exactly the kind of craftsmanship Gujarati celebrations demand — intricate mirror work, bandhani, gota patti, and heavy zardozi embroidery. Every outfit is custom stitched to your measurements and delivered to your US address.
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
              { tier: "Free Consultation", price: "Free", desc: "Tell us about your Gujarati wedding, the ceremonies planned, and your outfit vision. We'll share how we can help — no obligation." },
              { tier: "Style Guide", price: "$149", desc: "A curated lookbook covering every ceremony — Garba, Mehndi, Pithi, Mameru, Saptapadi, and Reception — with specific outfit recommendations." },
              { tier: "Guided Sourcing", price: "$599", desc: "Live video shopping sessions with artisan partners in India, measurement guidance, and managed ordering for your key outfits." },
              { tier: "Full Bridal Concierge", price: "$1,499", desc: "End-to-end outfit management for every ceremony and every family member. Bride, groom, bridesmaids, groomsmen, parents, and extended family — all coordinated." },
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
            <Link href="/mehndi-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Mehndi Outfits</Link>
            <Link href="/sangeet-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Sangeet Outfits</Link>
            <Link href="/haldi-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Haldi Outfits</Link>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/buy-sherwani-from-india-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Groom Sherwanis</Link>
            <Link href="/kanchipuram-silk-sarees-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Kanchipuram Sarees</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridesmaid Outfits</Link>
            <Link href="/reception-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px 80px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "14px" }}>
            Every ceremony, every outfit
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Garba chaniya choli, Mameru saree, Saptapadi lehenga, reception looks &mdash; sourced from India for your multi-day Gujarati wedding, all delivered to your US door.
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
