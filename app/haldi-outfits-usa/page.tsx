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
    "Research and source Haldi ceremony outfits from India with documented color references, measurements, written approvals, and U.S. delivery coordination.",
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
    "Haldi ceremony outfit research and sourcing for lehengas, anarkalis, salwar sets, and kurtas, with documented options and U.S. delivery coordination.",
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
      "Use the colors approved by your couple and family. CeremonyVerse can record the palette, fabric, comfort, reuse, quantity, and available item options without treating one family's choice as a universal rule.",
  },
  {
    question: "What fabric is best for a Haldi outfit?",
    answer:
      "Consider comfort, movement, care instructions, possible staining, climate, ceremony activities, and the family's preferences. Record the selected fabric and care needs rather than treating one material as universally best.",
  },
  {
    question: "Should the bride wear a lehenga or anarkali for Haldi?",
    answer:
      "Either can work when approved by the couple and family. Compare comfort, movement, coverage, ceremony sequence, care needs, and personal preference before choosing.",
  },
  {
    question: "How far in advance should I order my Haldi outfit from India?",
    answer:
      "Lead time depends on the selected item, vendor capacity, customization, quantity, approval timing, carrier, customs, and alteration buffer. Request current written estimates and begin early enough to preserve options and a local fitting window.",
  },
  {
    question: "Can you coordinate Haldi outfits for the whole bridal party?",
    answer:
      "Group coordination is available within the selected tier or custom written scope. The order plan records each participant, measurement, color reference, approval, shipment plan, and acceptable handmade variation.",
  },
  {
    question: "How much does a Haldi outfit cost when sourced from India?",
    answer:
      "Cost depends on the selected garment, fabric, handwork, customization, quantity, vendor, service tier, shipping, customs estimate, and alteration allowance. Compare complete written quotes rather than a universal price or savings range.",
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
          Haldi outfits from India, organized through a documented U.S. sourcing process.
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
          fresh greens — researched around your approved measurements and coordinated across your
          entire bridal party and family.
        </p>
        <a
          href="/contact/"
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
              a: "Use the colors approved by your couple and family. CeremonyVerse can record the palette, fabric, comfort, reuse, quantity, and available item options without treating one family's choice as a universal rule.",
            },
            {
              q: "What fabric is best for a Haldi outfit?",
              a: "Consider comfort, movement, care instructions, possible staining, climate, ceremony activities, and the family's preferences. Record the selected fabric and care needs rather than treating one material as universally best.",
            },
            {
              q: "Should the bride wear a lehenga or anarkali for Haldi?",
              a: "Either can work when approved by the couple and family. Compare comfort, movement, coverage, ceremony sequence, care needs, and personal preference before choosing.",
            },
            {
              q: "How far in advance should I order my Haldi outfit from India?",
              a: "Lead time depends on the selected item, vendor capacity, customization, quantity, approval timing, carrier, customs, and alteration buffer. Request current written estimates and begin early enough to preserve options and a local fitting window.",
            },
            {
              q: "Can you coordinate Haldi outfits for the whole bridal party?",
              a: "Group coordination is available within the selected tier or custom written scope. The order plan records each participant, measurement, color reference, approval, shipment plan, and acceptable handmade variation.",
            },
            {
              q: "How much does a Haldi outfit cost when sourced from India?",
              a: "Cost depends on the selected garment, fabric, handwork, customization, quantity, vendor, service tier, shipping, customs estimate, and alteration allowance. Compare complete written quotes rather than a universal price or savings range.",
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
            Request a consultation. We can organize available fabric options, color
            palettes, and pricing — and start sourcing your Haldi outfits from India within a
            week.
          </p>
          <a
            href="/contact/"
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
