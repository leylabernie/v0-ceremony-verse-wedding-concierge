import { SeoNav } from "@/components/seo-nav"
import Link from "next/link"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo"

// ─── SEO METADATA ───────────────────────────────────────────────────────────
// Targets: "haldi outfits usa", "yellow haldi dress", "haldi ceremony outfits",
// "lightweight haldi lehenga", "haldi function outfits", "haldi outfits for bride"
export const metadata = buildMetadata({
  path: "/haldi-outfits-usa/",
  title: "Haldi Ceremony Outfits USA — Sourced from India",
  description:
    "Bright, cheerful Haldi ceremony outfits sourced from India and delivered to your US door. Yellow haldi dresses, lightweight lehengas, anarkalis, and coordinated family outfits — custom stitched to your measurements.",
  keywords: [
    "haldi outfits usa",
    "yellow haldi dress",
    "haldi ceremony outfits",
    "lightweight haldi lehenga",
    "haldi function outfits",
    "haldi outfits for bride",
    "haldi outfits for bridesmaids",
    "buy haldi outfit from india",
    "haldi ceremony outfits usa",
  ],
})

// ─── STRUCTURED DATA ────────────────────────────────────────────────────────
const serviceSchema = buildServiceSchema({
  name: "Haldi Ceremony Outfit Sourcing",
  description:
    "Bright, festive Haldi ceremony outfits sourced from India — yellow haldi dresses, lightweight lehengas, anarkalis, and kurta sets in traditional turmeric colors, custom stitched to your measurements and delivered to your US door.",
  url: "/haldi-outfits-usa/",
  category: "Haldi Ceremony Outfit Sourcing",
  areaServed: "US",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Haldi Outfits USA", url: "/haldi-outfits-usa/" },
])

const faqSchema = buildFaqSchema([
  {
    question: "What color should I wear for my Haldi ceremony?",
    answer:
      "Yellow is the most traditional and popular Haldi color because turmeric paste is the centerpiece of the ceremony. Brides typically choose bright yellow, marigold, mustard, or sunflower yellow. Modern alternatives include orange, coral, lime green, and even pastel yellow for a softer look. We source across all color preferences and can recommend shades that photograph beautifully.",
  },
  {
    question: "What fabric is best for a Haldi outfit?",
    answer:
      "Lightweight, washable fabrics are best because the Haldi ceremony involves turmeric paste that can stain. Cotton, georgette, chiffon, and lighter silks are ideal. We recommend avoiding heavy velvet or pure silk for the Haldi function — those fabrics are better suited for the wedding day. We specifically source Haldi outfits in stain-friendly, comfortable fabrics.",
  },
  {
    question: "Should the bride wear a lehenga or anarkali for Haldi?",
    answer:
      "Both work beautifully. A lightweight lehenga allows for easy movement and looks stunning in photos, while an anarkali suit is more practical if you will be sitting for an extended Mehndi application afterward. Many brides choose a short lehenga or a cotton anarkali for Haldi. We help you decide based on your ceremony sequence and personal comfort.",
  },
  {
    question: "How far in advance should I order my Haldi outfit from India?",
    answer:
      "Order your Haldi outfit 4 to 6 months before the ceremony date. Haldi outfits are typically simpler than bridal lehengas, so production time is shorter — but international shipping, customs, and any alterations still require lead time. If you are coordinating Haldi outfits for bridesmaids and family, start 6 months out.",
  },
  {
    question: "Can you coordinate Haldi outfits for the whole bridal party?",
    answer:
      "Yes. Coordinated Haldi outfits for bridesmaids, family, and the couple are one of our specialties. We collect all measurements, source matching or complementary pieces in the same color palette, and manage the entire process so everything arrives together at your US address.",
  },
  {
    question: "How much does a Haldi outfit cost when sourced from India?",
    answer:
      "Haldi outfits sourced from India typically range from $150 to $800, depending on fabric, embroidery, and customization. Bridesmaid Haldi outfits typically range from $80 to $250 each. This is significantly less than US boutique prices for comparable quality. We provide transparent pricing in your free consultation.",
  },
])

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────
export default function HaldiOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />

      <SeoNav />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "80px 24px 48px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "17px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7a6841",
            marginBottom: "14px",
            fontWeight: 500,
          }}
        >
          Haldi Ceremony · Sourced from India · Delivered to USA
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 600,
            color: "#1f1f1f",
            lineHeight: 1.12,
            marginBottom: "22px",
          }}
        >
          Yellow Haldi outfits sourced from India, delivered to your US door.
        </h1>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#4d403a",
            marginBottom: "32px",
            maxWidth: "580px",
            margin: "0 auto 32px",
          }}
        >
          The Haldi ceremony is joyful, messy, and one of the most photographed moments of
          your wedding week. We source bright, cheerful Haldi outfits — lightweight lehengas,
          anarkalis, and kurta sets in traditional turmeric yellows, marigold oranges, and
          fresh greens — custom stitched to your measurements and coordinated across your
          entire bridal party and family.
        </p>
        <a
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#7a6841",
            color: "#fff",
            padding: "13px 30px",
            borderRadius: "999px",
            fontSize: "17px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Book Free Consultation
        </a>
      </section>

      {/* ─── WHAT WE SOURCE ──────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            What we source for your Haldi ceremony
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Bride's Haldi Outfit",
                desc: "Lightweight yellow lehenga, anarkali, or salwar set in turmeric yellow, marigold, or sunflower. Comfortable, stain-friendly fabric, beautiful for photos.",
              },
              {
                title: "Groom's Haldi Outfit",
                desc: "Coordinated yellow kurta, kurta-pyjama, or short Nehru jacket set. Lightweight cotton or linen blend that holds up to the ceremony.",
              },
              {
                title: "Bridesmaid Haldi Outfits",
                desc: "Coordinated salwar sets, lehengas, or anarkalis in matching or complementary yellow and orange shades. All measurements collected and managed by us.",
              },
              {
                title: "Family Outfits",
                desc: "Coordinated kurtas and salwar sets for both sides of the family in festive Haldi colors. Bright, comfortable, and photo-ready.",
              },
              {
                title: "Floral Jewelry & Accessories",
                desc: "Marigold floral jewelry, dupattas, and Haldi-appropriate accessories sourced together to complete the look.",
              },
              {
                title: "Haldi Ceremony Décor Items",
                desc: "Brass bowls, turmeric holders, and decorative thalis for the ceremony itself — sourced from India at artisan prices.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f9f6f3",
                  borderRadius: "14px",
                  padding: "24px",
                  border: "1px solid #e6dfd5",
                }}
              >
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "17px",
                    color: "#1f1f1f",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY FABRIC MATTERS FOR HALDI ────────────────────────────────── */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Why fabric choice matters for Haldi
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4d403a",
              marginBottom: "1.2rem",
            }}
          >
            The Haldi ceremony involves applying turmeric paste to the bride and groom, which
            means your outfit will get stained. This is intentional — the stained outfit is
            considered lucky and is often kept as a wedding keepsake. But it also means fabric
            choice is different from any other wedding outfit.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4d403a",
              marginBottom: "1.2rem",
            }}
          >
            We recommend lightweight, breathable fabrics that hold their color and drape
            beautifully in photos: <strong>cotton, georgette, chiffon, and lighter silks</strong>
            . Heavy velvet, pure silk, and intricate zardozi embroidery are better suited for
            the wedding day itself. We will guide you to the right fabric based on your
            ceremony style and how much Haldi paste will be involved.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4d403a",
            }}
          >
            Many brides also choose to have a separate, simpler &ldquo;messy Haldi&rdquo;
            outfit for the actual ceremony and a more elaborate one for the photos before and
            after. We can source both within the same budget.
          </p>
        </div>
      </section>

      {/* ─── COLOR PALETTE GUIDE ────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Popular Haldi color palettes for 2026
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                color: "#F5C518",
                name: "Turmeric Yellow",
                desc: "The classic. Bright, traditional, photographs beautifully against green decor.",
              },
              {
                color: "#FF8C00",
                name: "Marigold Orange",
                desc: "A warmer alternative to yellow. Pairs well with bridesmaids in yellow or coral.",
              },
              {
                color: "#9ACD32",
                name: "Lime Green",
                desc: "Fresh and modern. Popular for bridesmaids paired with a yellow bride outfit.",
              },
              {
                color: "#FFB6C1",
                name: "Coral Pink",
                desc: "Modern and photogenic. Works well for fusion or contemporary Haldi themes.",
              },
              {
                color: "#FFF8DC",
                name: "Ivory & Gold",
                desc: "Elegant heritage look. Pairs well with temple jewelry and minimal Haldi paste.",
              },
              {
                color: "#FFD700",
                name: "Sunflower Yellow",
                desc: "A softer yellow that flatters all skin tones. Popular for 2026 brides.",
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#f9f6f3",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid #e6dfd5",
                }}
              >
                <div
                  style={{
                    background: item.color,
                    height: "80px",
                    borderBottom: "1px solid #e6dfd5",
                  }}
                />
                <div style={{ padding: "16px" }}>
                  <h3
                    style={{
                      fontWeight: 600,
                      fontSize: "17px",
                      color: "#1f1f1f",
                      marginBottom: "6px",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p style={{ fontSize: "17px", lineHeight: 1.5, color: "#4d403a" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Haldi outfit FAQ
          </h2>
          {[
            {
              q: "What color should I wear for my Haldi ceremony?",
              a: "Yellow is the most traditional and popular Haldi color because turmeric paste is the centerpiece of the ceremony. Brides typically choose bright yellow, marigold, mustard, or sunflower yellow. Modern alternatives include orange, coral, lime green, and even pastel yellow for a softer look. We source across all color preferences and can recommend shades that photograph beautifully.",
            },
            {
              q: "What fabric is best for a Haldi outfit?",
              a: "Lightweight, washable fabrics are best because the Haldi ceremony involves turmeric paste that can stain. Cotton, georgette, chiffon, and lighter silks are ideal. We recommend avoiding heavy velvet or pure silk for the Haldi function — those fabrics are better suited for the wedding day. We specifically source Haldi outfits in stain-friendly, comfortable fabrics.",
            },
            {
              q: "Should the bride wear a lehenga or anarkali for Haldi?",
              a: "Both work beautifully. A lightweight lehenga allows for easy movement and looks stunning in photos, while an anarkali suit is more practical if you will be sitting for an extended Mehndi application afterward. Many brides choose a short lehenga or a cotton anarkali for Haldi. We help you decide based on your ceremony sequence and personal comfort.",
            },
            {
              q: "How far in advance should I order my Haldi outfit from India?",
              a: "Order your Haldi outfit 4 to 6 months before the ceremony date. Haldi outfits are typically simpler than bridal lehengas, so production time is shorter — but international shipping, customs, and any alterations still require lead time. If you are coordinating Haldi outfits for bridesmaids and family, start 6 months out.",
            },
            {
              q: "Can you coordinate Haldi outfits for the whole bridal party?",
              a: "Yes. Coordinated Haldi outfits for bridesmaids, family, and the couple are one of our specialties. We collect all measurements, source matching or complementary pieces in the same color palette, and manage the entire process so everything arrives together at your US address.",
            },
            {
              q: "How much does a Haldi outfit cost when sourced from India?",
              a: "Haldi outfits sourced from India typically range from $150 to $800, depending on fabric, embroidery, and customization. Bridesmaid Haldi outfits typically range from $80 to $250 each. This is significantly less than US boutique prices for comparable quality. We provide transparent pricing in your free consultation.",
            },
          ].map((item) => (
            <div
              key={item.q}
              style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}
            >
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: "17px",
                  color: "#1f1f1f",
                  marginBottom: "8px",
                }}
              >
                {item.q}
              </h3>
              <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            textAlign: "center",
            background: "#2f2f2f",
            borderRadius: "16px",
            padding: "48px 32px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#f8f6f2",
              marginBottom: "16px",
            }}
          >
            Ready to source your Haldi outfits?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#7a6841",
              marginBottom: "24px",
              maxWidth: "500px",
              margin: "0 auto 24px",
            }}
          >
            Book a free 30-minute consultation. We will walk you through fabric options, color
            palettes, and pricing — and start sourcing your Haldi outfits from India within a
            week.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: "#7a6841",
              color: "#2f2f2f",
              padding: "13px 30px",
              borderRadius: "999px",
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Book Free Consultation
          </a>
          <p style={{ color: "#4d403a", fontSize: "17px", marginTop: "16px" }}>
            Or WhatsApp:{" "}
            <a href="https://wa.me/12153419990" style={{ color: "#7a6841" }}>
              +1 (215) 341-9990
            </a>
          </p>
        </div>
      </section>

      {/* ─── RELATED CEREMONIES ─────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "#1f1f1f",
              marginBottom: "20px",
            }}
          >
            Other ceremony outfits we source
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            {[
              { label: "Mehndi Outfits", url: "/mehndi-outfits-usa/" },
              { label: "Sangeet Outfits", url: "/sangeet-outfits-usa/" },
              { label: "Baraat Outfits", url: "/baraat-outfits-usa/" },
              { label: "Bridal Lehengas", url: "/services/bridal-lehengas/" },
              { label: "Bridesmaid Outfits", url: "/bridesmaid-and-family-outfits-from-india/" },
              { label: "Groom Sherwanis", url: "/buy-sherwani-from-india-usa/" },
            ].map((item) => (
              <Link
                key={item.url}
                href={item.url}
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#fff",
                  border: "1px solid #e6dfd5",
                  borderRadius: "999px",
                  fontSize: "17px",
                  color: "#4d403a",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
