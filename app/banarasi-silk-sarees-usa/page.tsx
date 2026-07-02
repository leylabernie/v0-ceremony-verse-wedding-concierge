import { SeoNav } from "@/components/seo-nav"
import Link from "next/link"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo"

// ─── SEO METADATA ───────────────────────────────────────────────────────────
// Targets: "banarasi silk saree usa", "buy banarasi saree from india",
// "pure banarasi silk saree", "banarasi wedding saree", "varanasi silk saree",
// "banarasi zari saree", "organza banarasi saree"
export const metadata = buildMetadata({
  path: "/banarasi-silk-sarees-usa/",
  title: "Buy Banarasi Silk Sarees from India — Delivered to USA | CeremonyVerse",
  description:
    "Authentic pure Banarasi silk sarees hand-woven in Varanasi and delivered to your US door. Pure katan silk, organza, tissue, and shattir varieties with real gold and silver zari — Silk Mark certified with live video approval.",
  keywords: [
    "banarasi silk saree usa",
    "buy banarasi saree from india",
    "pure banarasi silk saree",
    "banarasi wedding saree",
    "varanasi silk saree",
    "banarasi zari saree",
    "organza banarasi saree",
    "banarasi saree for bride",
    "authentic banarasi silk",
  ],
})

// ─── STRUCTURED DATA ────────────────────────────────────────────────────────
const serviceSchema = buildServiceSchema({
  name: "Banarasi Silk Saree Sourcing",
  description:
    "Authentic pure Banarasi silk sarees hand-woven in Varanasi and delivered to your US door. Pure katan silk, organza, tissue, and shattir varieties with real gold and silver zari — Silk Mark certified with live video approval and custom blouse stitching.",
  url: "/banarasi-silk-sarees-usa/",
  category: "Banarasi Silk Saree Sourcing",
  areaServed: "US",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Banarasi Silk Sarees", url: "/banarasi-silk-sarees-usa/" },
])

const faqSchema = buildFaqSchema([
  {
    question: "How much does an authentic Banarasi silk saree cost when sourced from India?",
    answer:
      "Authentic pure Banarasi silk sarees sourced directly from Varanasi weavers range from approximately $200 to $1,500 depending on the silk variety (katan, organza, tissue), zari weight, and design complexity. Pure katan silk Banarasi sarees with real gold zari typically start around $400. Tissue and organza Banarasi sarees start around $250. This is significantly less than US boutique prices for comparable quality.",
  },
  {
    question: "How is Banarasi silk different from Kanchipuram silk?",
    answer:
      "Banarasi silk comes from Varanasi (Banaras) in North India and is known for its fine, lightweight weave and intricate Mughal-inspired motifs (floral, jaal, paisley). Kanchipuram silk comes from Tamil Nadu in South India and is heavier with bold temple-inspired borders and pure gold zari. Both are pure mulberry silk, but Banarasi is more delicate and ornate, while Kanchipuram is heavier and more structured. Many brides source both for different ceremonies — Banarasi for the reception, Kanchipuram for the wedding.",
  },
  {
    question: "What are the different types of Banarasi silk sarees?",
    answer:
      "The four main types of pure Banarasi silk sarees are: (1) Pure Katan Silk — the most traditional, woven entirely from pure silk thread; (2) Organza — lightweight, sheer silk with printed or woven motifs, popular for daytime ceremonies; (3) Tissue Silk — shimmering silk with a metallic finish, often used for reception wear; (4) Shattir — a softer, lighter variant used for everyday and contemporary designs. We source all four varieties from verified weavers in Varanasi.",
  },
  {
    question: "How do I know my Banarasi saree is authentic?",
    answer:
      "We source only Silk Mark certified Banarasi sarees from verified weavers in Varanasi. Silk Mark is the Government of India's certification guaranteeing pure silk content. Additionally, we provide live video shopping so you can see the actual saree — its weight, sheen, zari work, and weave — before purchasing. We never source synthetic 'Banarasi-style' sarees or fake zari.",
  },
  {
    question: "Can you source a specific Banarasi color or design?",
    answer:
      "Yes. Tell us your wedding color palette and we will source Banarasi sarees that coordinate with your bridal or bridesmaid outfits. Popular 2026 Banarasi colors include traditional red and maroon for the bride, ivory and gold for heritage looks, deep jewel tones (emerald, sapphire, burgundy) for evening events, and pastel shades for mehndi and haldi. We can also arrange custom blouse stitching to match.",
  },
  {
    question: "How long does it take to source a Banarasi saree from India to the USA?",
    answer:
      "Allow 5 to 7 weeks for Banarasi saree sourcing — 1 to 2 weeks for selection and live video approval, 2 to 3 weeks for international shipping via DHL/FedEx, and 1 to 2 weeks for any customs clearance and local alterations. If you need multiple sarees for family members or want custom blouse stitching, start 8 weeks out. We handle all shipping, customs, and duties door-to-door.",
  },
])

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────
export default function BanarasiSareesPage() {
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
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#a69260",
            marginBottom: "14px",
            fontWeight: 500,
          }}
        >
          Banarasi Silk Sarees · Sourced in Varanasi · Delivered to USA
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
          Pure Banarasi silk, woven in Varanasi.
        </h1>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#4d403a",
            marginBottom: "12px",
            maxWidth: "600px",
            margin: "0 auto 12px",
          }}
        >
          Banarasi silk has been woven along the banks of the Ganges in Varanasi for over 800
          years. We work directly with master weavers there to source authentic pure silk
          Banarasi sarees — pure katan silk, organza, tissue, and shattir — with real gold or
          silver zari and intricate Mughal-inspired motifs.
        </p>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#5e4a40",
            marginBottom: "32px",
            maxWidth: "560px",
            margin: "0 auto 32px",
          }}
        >
          Each saree is Silk Mark certified. We show it to you on live video before you pay.
        </p>
        <a
          href="/#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#a69260",
            color: "#fff",
            padding: "13px 30px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Book Free Consultation
        </a>
      </section>

      {/* ─── BANARASI VARIETIES ──────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            Four varieties of pure Banarasi silk
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#4d403a",
              textAlign: "center",
              marginBottom: "32px",
              maxWidth: "640px",
              margin: "0 auto 32px",
            }}
          >
            Different Banarasi weaves suit different ceremonies. We source all four from
            verified weavers in Varanasi.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Pure Katan Silk",
                desc: "The most traditional Banarasi — woven entirely from pure silk thread with real gold or silver zari. Heavy, regal, and perfect for the wedding ceremony itself.",
                color: "#9C2A2A",
              },
              {
                title: "Organza Banarasi",
                desc: "Lightweight, sheer pure silk with printed or woven motifs. Popular for daytime ceremonies, mehndi, and modern brides. Photogenic and easy to drape.",
                color: "#E8B4B8",
              },
              {
                title: "Tissue Banarasi",
                desc: "Shimmering silk with a metallic finish. Elegant and modern — the 2026 favorite for receptions, sangeet, and engagement ceremonies.",
                color: "#C9A84C",
              },
              {
                title: "Shattir Banarasi",
                desc: "A softer, lighter variant of pure silk used for contemporary designs. Affordable luxury for family members, bridesmaids, and daytime events.",
                color: "#7B9E89",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f9f6f3",
                  borderRadius: "14px",
                  padding: "24px",
                  border: "1px solid #e6dfd5",
                  borderTop: `4px solid ${item.color}`,
                }}
              >
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#1f1f1f",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#4d403a" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MOTIFS & DESIGN ─────────────────────────────────────────────── */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
            Traditional Banarasi motifs
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#4d403a",
              marginBottom: "32px",
              maxWidth: "640px",
              margin: "0 auto 32px",
              textAlign: "center",
            }}
          >
            Banarasi sarees are known for their intricate Mughal-inspired motifs. Each pattern
            has a story. These are the most sought-after weaves in 2026.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Jaal (Net) Pattern",
                desc: "A continuous net-like pattern covering the entire saree body. The most traditional and intricate Banarasi weave.",
              },
              {
                title: "Kairi (Mango/Paisley)",
                desc: "The iconic paisley motif, often woven in gold zari. Symbolizes fertility and is popular for bridal Banarasi sarees.",
              },
              {
                title: "Floral Bouquet (Phool Patti)",
                desc: "Mughal-inspired floral sprays scattered across the body. Delicate, photogenic, and trending for 2026 weddings.",
              },
              {
                title: "Shikargarh (Hunting Scene)",
                desc: "A historic motif depicting hunting scenes, often reserved for heirloom pieces. Rare and collectible.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "20px",
                  border: "1px solid #e6dfd5",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#1f1f1f",
                    marginBottom: "6px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#4d403a" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY BANARASI ────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
            Why authentic Banarasi is different
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "800 years of heritage",
                desc: "Banarasi weaving has been practiced in Varanasi since the Mughal era. Each saree carries 800 years of craftsmanship passed down through generations of weavers.",
              },
              {
                title: "Pure mulberry silk",
                desc: "Authentic Banarasi sarees are woven from 100% pure mulberry silk — stronger, shinier, and more durable than any synthetic alternative.",
              },
              {
                title: "Real gold or silver zari",
                desc: "Traditional Banarasi sarees use real gold or silver zari thread for the metallic motifs, not synthetic metallic yarn. This is what gives them their heirloom value.",
              },
              {
                title: "Silk Mark certified",
                desc: "We source only Silk Mark certified Banarasi sarees — the Government of India's guarantee of pure silk authenticity.",
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
                    fontSize: "14px",
                    color: "#1f1f1f",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#4d403a", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BANARASI VS KANCHIPURAM ─────────────────────────────────────── */}
      <section style={{ padding: "56px 24px" }}>
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
            Banarasi or Kanchipuram — which is right for you?
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#4d403a",
              marginBottom: "1.2rem",
            }}
          >
            <strong>Banarasi silk</strong> comes from Varanasi in North India and is known for
            its fine, lightweight weave and Mughal-inspired motifs (floral, jaal, paisley).
            It is delicate, ornate, and photogenic — perfect for receptions, engagements, and
            daytime ceremonies.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#4d403a",
              marginBottom: "1.2rem",
            }}
          >
            <strong>Kanchipuram silk</strong> comes from Tamil Nadu in South India and is
            heavier with bold temple-inspired borders and pure gold zari. It is structured,
            regal, and traditional — the go-to choice for South Indian wedding ceremonies.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#4d403a",
              marginBottom: "1.2rem",
            }}
          >
            Many of our clients source <strong>both</strong> for different ceremonies —
            Kanchipuram for the wedding day and Banarasi for the reception or engagement. We
            can coordinate both within the same sourcing trip to India.
          </p>
          <p style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              href="/kanchipuram-silk-sarees-usa/"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                background: "#fff",
                border: "1px solid #e6dfd5",
                borderRadius: "999px",
                fontSize: "13px",
                color: "#4d403a",
                textDecoration: "none",
              }}
            >
              View our Kanchipuram silk sarees →
            </Link>
          </p>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
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
            Banarasi Saree FAQ
          </h2>
          {[
            {
              q: "How much does an authentic Banarasi silk saree cost when sourced from India?",
              a: "Authentic pure Banarasi silk sarees sourced directly from Varanasi weavers range from approximately $200 to $1,500 depending on the silk variety (katan, organza, tissue), zari weight, and design complexity. Pure katan silk Banarasi sarees with real gold zari typically start around $400. Tissue and organza Banarasi sarees start around $250. This is significantly less than US boutique prices for comparable quality.",
            },
            {
              q: "How is Banarasi silk different from Kanchipuram silk?",
              a: "Banarasi silk comes from Varanasi (Banaras) in North India and is known for its fine, lightweight weave and intricate Mughal-inspired motifs (floral, jaal, paisley). Kanchipuram silk comes from Tamil Nadu in South India and is heavier with bold temple-inspired borders and pure gold zari. Both are pure mulberry silk, but Banarasi is more delicate and ornate, while Kanchipuram is heavier and more structured. Many brides source both for different ceremonies — Banarasi for the reception, Kanchipuram for the wedding.",
            },
            {
              q: "What are the different types of Banarasi silk sarees?",
              a: "The four main types of pure Banarasi silk sarees are: (1) Pure Katan Silk — the most traditional, woven entirely from pure silk thread; (2) Organza — lightweight, sheer silk with printed or woven motifs, popular for daytime ceremonies; (3) Tissue Silk — shimmering silk with a metallic finish, often used for reception wear; (4) Shattir — a softer, lighter variant used for everyday and contemporary designs. We source all four varieties from verified weavers in Varanasi.",
            },
            {
              q: "How do I know my Banarasi saree is authentic?",
              a: "We source only Silk Mark certified Banarasi sarees from verified weavers in Varanasi. Silk Mark is the Government of India's certification guaranteeing pure silk content. Additionally, we provide live video shopping so you can see the actual saree — its weight, sheen, zari work, and weave — before purchasing. We never source synthetic 'Banarasi-style' sarees or fake zari.",
            },
            {
              q: "Can you source a specific Banarasi color or design?",
              a: "Yes. Tell us your wedding color palette and we will source Banarasi sarees that coordinate with your bridal or bridesmaid outfits. Popular 2026 Banarasi colors include traditional red and maroon for the bride, ivory and gold for heritage looks, deep jewel tones (emerald, sapphire, burgundy) for evening events, and pastel shades for mehndi and haldi. We can also arrange custom blouse stitching to match.",
            },
            {
              q: "How long does it take to source a Banarasi saree from India to the USA?",
              a: "Allow 5 to 7 weeks for Banarasi saree sourcing — 1 to 2 weeks for selection and live video approval, 2 to 3 weeks for international shipping via DHL/FedEx, and 1 to 2 weeks for any customs clearance and local alterations. If you need multiple sarees for family members or want custom blouse stitching, start 8 weeks out. We handle all shipping, customs, and duties door-to-door.",
            },
          ].map((item) => (
            <div
              key={item.q}
              style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}
            >
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#1f1f1f",
                  marginBottom: "8px",
                }}
              >
                {item.q}
              </h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#4d403a" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px" }}>
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
            Ready to source your Banarasi saree?
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#a69260",
              marginBottom: "24px",
              maxWidth: "500px",
              margin: "0 auto 24px",
            }}
          >
            Book a free 30-minute consultation. We will walk you through the four Banarasi
            varieties, motif options, and pricing — and start sourcing your authentic saree
            from Varanasi within a week.
          </p>
          <a
            href="/#contact"
            style={{
              display: "inline-block",
              background: "#a69260",
              color: "#2f2f2f",
              padding: "13px 30px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Book Free Consultation
          </a>
          <p style={{ color: "#6f6a63", fontSize: "13px", marginTop: "16px" }}>
            Or WhatsApp:{" "}
            <a href="https://wa.me/12153419990" style={{ color: "#a69260" }}>
              +1 (215) 341-9990
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
