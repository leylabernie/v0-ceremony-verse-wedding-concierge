import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/mehndi-outfits-usa/",
  title: "Mehndi Ceremony Outfits \u2014 Sourced from India, Delivered to USA",
  description: "Vibrant Mehndi ceremony outfits sourced from India \u2014 bright yellows, oranges, and greens with floral embroidery, for brides, bridesmaids, and family. US delivery."
});

const serviceSchema = buildServiceSchema({
  name: "Mehndi Ceremony Outfit Sourcing",
  description: "Vibrant Mehndi ceremony outfits sourced from India \u2014 choli, lehenga, anarkali, and kurta sets in traditional henna colors, with custom stitching and US delivery.",
  url: "/mehndi-outfits-usa/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Mehndi Outfits", url: "/mehndi-outfits-usa/" },
]);

export default function MehndiOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Mehndi & Haldi Ceremony
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Mehndi & Haldi outfits sourced from India, delivered to your US door.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          The Mehndi and Haldi ceremonies set the tone for everything that follows. We source bright, festive outfits — yellows, oranges, greens — custom stitched to your measurements and coordinated across your entire bridal party and family.
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
            What we source for Mehndi & Haldi
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Bride's Mehndi Lehenga", desc: "Bright yellow, green, or orange lehenga or anarkali — festive, comfortable for sitting, and beautiful for photos." },
              { title: "Haldi Outfit", desc: "Simple, cheerful outfit specifically for the Haldi — often cotton or georgette so it can get messy. Custom stitched to your fit." },
              { title: "Bridesmaid Outfits", desc: "Coordinated salwar sets, lehengas, or anarkalis in complementary colors. All measurements collected and managed by us." },
              { title: "Family Outfits", desc: "Coordinated kurtas and salwar sets for both sides of the family. Bright, festive palette to match the vibe." },
              { title: "Dupatta & Accessories", desc: "Contrasting or matching dupattas, floral jewelry, and mehndi-appropriate accessories sourced together." },
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
            <Link href="/sangeet-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Sangeet Outfits</Link>
            <Link href="/haldi-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Haldi Outfits</Link>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridesmaid Outfits</Link>
            <Link href="/baraat-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Baraat Outfits</Link>
            <Link href="/indian-wedding-guest-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Wedding Guest Outfits</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Mehndi outfit FAQ
          </h2>
          {[
            { q: "What colors are traditional for Mehndi outfits?", a: "Yellow is the most traditional Mehndi color, followed by orange, green, and pink. Many brides choose a bright yellow for Haldi and a more elaborate look for the Mehndi function. We source across all color preferences." },
            { q: "Should the Mehndi outfit be comfortable?", a: "Yes — you'll be sitting for extended periods during the Mehndi application. We recommend flats or low heels and a comfortable silhouette. We factor this into our sourcing recommendations." },
            { q: "How far in advance should I order Mehndi outfits?", a: "6–8 months before your ceremony date is ideal. Mehndi outfits are often ordered after the bridal lehenga — but don't leave them too late, especially if bridesmaid coordination is involved." },
            { q: "Can you coordinate bridesmaid outfits in matching colors?", a: "Yes — this is one of our specialties. We collect all measurements, source coordinating pieces, and manage the entire process so everything arrives together." },
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
            Plan your Mehndi &amp; Haldi looks with us
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            From the bride&rsquo;s yellow lehenga to coordinated bridesmaid sets and family kurtas &mdash; we source every piece from India, custom stitched and delivered to your US door.
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
