import { SeoNav } from "@/components/seo-nav"
import Link from "next/link"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo"

// ─── SEO METADATA ───────────────────────────────────────────────────────────
// Targets: "reception outfits usa", "reception lehenga", "indian wedding reception
// outfits", "reception gown indian", "modern reception indo western gown",
// "bride reception outfit", "groom reception outfit"
export const metadata = buildMetadata({
  path: "/reception-outfits-usa/",
  title: "Indian Wedding Reception Outfits USA — Sourced from India",
  description:
    "Indian wedding reception outfits sourced from India and delivered to your US door. Reception lehengas, indo-western gowns, and sherwanis — custom stitched to your measurements.",
  keywords: [
    "reception outfits usa",
    "reception lehenga",
    "indian wedding reception outfits",
    "reception gown indian",
    "modern reception indo western gown",
    "bride reception outfit",
    "groom reception outfit",
    "reception outfit from india",
    "indian reception lehenga usa",
  ],
})

// ─── STRUCTURED DATA ────────────────────────────────────────────────────────
const serviceSchema = buildServiceSchema({
  name: "Indian Wedding Reception Outfit Sourcing",
  description:
    "Show-stopping Indian wedding reception outfits sourced from India — modern lehengas, indo-western gowns, designer sherwanis, and coordinated party outfits in statement colors and embellishments, custom stitched and delivered to your US door.",
  url: "/reception-outfits-usa/",
  category: "Reception Outfit Sourcing",
  areaServed: "US",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Reception Outfits USA", url: "/reception-outfits-usa/" },
])

const faqSchema = buildFaqSchema([
  {
    question: "What is the difference between a bridal lehenga and a reception lehenga?",
    answer:
      "The bridal lehenga is for the main wedding ceremony and is typically traditional red or maroon with heavy zardozi or gold embroidery. A reception lehenga is for the post-wedding reception party and is your chance to be more experimental — pastels, ombre, jewel tones, sequins, mirror work, or indo-western silhouettes. Many brides choose a lighter, more glamorous look for the reception because they will be socializing, dancing, and taking photos with guests.",
  },
  {
    question: "What colors are trending for reception lehengas in 2026?",
    answer:
      "The top 2026 reception lehenga colors are pastel ombre (blush pink to champagne, mint to ivory), ivory and gold (heritage luxe), deep jewel tones (emerald, sapphire, burgundy), champagne and rose gold, and modern metallics (silver sequin, copper). Black is also gaining acceptance for evening receptions. We help you pick a color that photographs beautifully under reception lighting and complements your skin tone.",
  },
  {
    question: "Should the bride wear a lehenga or gown for the reception?",
    answer:
      "Both work beautifully and it comes down to personal style. A reception lehenga gives you the full traditional Indian bridal look with a modern twist. An indo-western gown or floor-length anarkali is more contemporary and easier to walk and dance in. Some brides do a lehenga for the receiving line and change into a gown for dancing. We can source one or both within your budget.",
  },
  {
    question: "What should the groom wear for the reception?",
    answer:
      "For the reception, the groom typically wears a designer sherwani, indo-western suit, or a tailored bandhgala. Popular 2026 reception choices include velvet sherwanis in deep colors (navy, burgundy, emerald), ivory and gold sherwanis with subtle embroidery, or a tailored indo-western tuxedo with Indian detailing. We coordinate the groom's reception outfit with the bride's look for a cohesive photo aesthetic.",
  },
  {
    question: "How far in advance should I order my reception outfit from India?",
    answer:
      "Order your reception outfit 5 to 7 months before the wedding date. Reception outfits are often heavily embellished (sequins, mirror work, custom embroidery) which takes 8 to 12 weeks of production time. Add 3 to 4 weeks for international shipping and 2 to 3 weeks for any local alterations. If you are coordinating bridesmaid or family reception outfits, start 6 months out.",
  },
  {
    question: "How much does a reception lehenga cost when sourced from India?",
    answer:
      "Reception lehengas sourced from India typically range from $400 to $3,500, depending on embellishment, fabric, and designer tier. Designer-inspired pieces with sequin and mirror work start around $600. Couture-level reception lehengas with intricate handwork can reach $3,000 to $5,000 — still 40-60% less than comparable US boutique prices. We provide transparent tiered pricing in your free consultation.",
  },
])

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────
export default function ReceptionOutfitsPage() {
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
            fontSize: "13px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7a6841",
            marginBottom: "14px",
            fontWeight: 500,
          }}
        >
          Wedding Reception · Sourced from India · Delivered to USA
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
          Reception outfits that close your wedding week in style.
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
          The reception is your first appearance as a married couple — and the most photographed
          event of the week. We source show-stopping reception lehengas, indo-western gowns,
          designer sherwanis, and coordinated party outfits that blend modern glamour with
          Indian heritage. Custom stitched to your measurements and delivered to your US door.
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
            fontSize: "15px",
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
            What we source for your reception
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
                title: "Bride's Reception Lehenga",
                desc: "Modern lehenga in pastel ombre, jewel tones, or metallics with sequin, mirror, or crystal work. Lighter than the bridal lehenga but still a statement.",
              },
              {
                title: "Bride's Indo-Western Gown",
                desc: "Floor-length anarkali, cape gown, or fusion silhouette for the bride who wants a contemporary reception look. Easy to dance in.",
              },
              {
                title: "Groom's Reception Sherwani",
                desc: "Designer sherwani, indo-western suit, or bandhgala in velvet, silk, or modern fabric. Coordinated with the bride's look.",
              },
              {
                title: "Bridesmaid Reception Outfits",
                desc: "Coordinated lehengas, gowns, or anarkalis in complementary colors. All measurements collected and managed by us.",
              },
              {
                title: "Groomsmen Outfits",
                desc: "Coordinated sherwanis, kurta suits, or indo-western suits for the groom's party. Matched color palette.",
              },
              {
                title: "Family Reception Wear",
                desc: "Coordinated party outfits for both families — sarees, lehengas, kurta suits, and sherwanis in reception-appropriate colors.",
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
                    fontSize: "15px",
                    color: "#1f1f1f",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#4d403a" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2026 RECEPTION TRENDS ───────────────────────────────────────── */}
      <section style={{ padding: "48px 24px" }}>
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
            2026 reception outfit trends we are sourcing
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
            These are the silhouettes, colors, and details our artisan workshops in India are
            seeing the most demand for in 2026 weddings.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Pastel Ombre Lehengas",
                desc: "Blush-to-champagne, mint-to-ivory, or lavender-to-silver gradient lehengas with delicate sequin work. Photogenic and modern.",
              },
              {
                title: "Ivory & Gold Heritage",
                desc: "Pure silk or organza reception lehengas in ivory with gold zardozi. Timeless, elegant, photographs beautifully under any lighting.",
              },
              {
                title: "Detachable Cape Dupattas",
                desc: "Reception lehengas with detachable embroidered capes instead of traditional dupattas. Modern silhouette, traditional craftsmanship.",
              },
              {
                title: "Velvet Sherwanis",
                desc: "Deep-tone velvet sherwanis (navy, burgundy, emerald) with subtle thread embroidery. The groom's 2026 statement piece.",
              },
              {
                title: "Modest South Asian Bridal",
                desc: "Full-coverage silhouettes with sleeves, higher necklines, and longer hemlines — without sacrificing glamour. A growing request from modern brides.",
              },
              {
                title: "Temple-Style Vaddanam Belts",
                desc: "South Indian temple-style waist belts (vaddanam) worn over reception lehengas for heritage-inspired definition.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "24px",
                  border: "1px solid #e6dfd5",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#1f1f1f",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#4d403a" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RECEPTION VS WEDDING DAY ────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
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
            Reception outfit vs. wedding day outfit
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#4d403a",
              marginBottom: "1.2rem",
            }}
          >
            The wedding day outfit (the bridal lehenga or sherwani) is about tradition,
            heritage, and the ceremony itself. The reception outfit is your chance to express
            your personal style as a newly married couple — and to be comfortable enough to
            socialize, dance, and pose for hundreds of photos with guests.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#4d403a",
              marginBottom: "1.2rem",
            }}
          >
            <strong>Wedding day:</strong> Traditional red or maroon, heavy zardozi or gold
            embroidery, pure silk or velvet, full traditional jewelry, ceremonial weight.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#4d403a",
              marginBottom: "1.2rem",
            }}
          >
            <strong>Reception:</strong> Modern colors (pastels, jewel tones, metallics),
            lighter embellishments (sequin, mirror, crystal), easier-to-walk-in silhouette,
            statement jewelry, party-ready. Some brides even change hairstyles for the
            reception.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#4d403a",
            }}
          >
            Many of our clients source both from the same artisan workshop so the looks feel
            coordinated — same craftsmanship, different moods. We can also help you decide if a
            single outfit works for both, or if two distinct looks fit your budget better.
          </p>
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
            Reception outfit FAQ
          </h2>
          {[
            {
              q: "What is the difference between a bridal lehenga and a reception lehenga?",
              a: "The bridal lehenga is for the main wedding ceremony and is typically traditional red or maroon with heavy zardozi or gold embroidery. A reception lehenga is for the post-wedding reception party and is your chance to be more experimental — pastels, ombre, jewel tones, sequins, mirror work, or indo-western silhouettes. Many brides choose a lighter, more glamorous look for the reception because they will be socializing, dancing, and taking photos with guests.",
            },
            {
              q: "What colors are trending for reception lehengas in 2026?",
              a: "The top 2026 reception lehenga colors are pastel ombre (blush pink to champagne, mint to ivory), ivory and gold (heritage luxe), deep jewel tones (emerald, sapphire, burgundy), champagne and rose gold, and modern metallics (silver sequin, copper). Black is also gaining acceptance for evening receptions. We help you pick a color that photographs beautifully under reception lighting and complements your skin tone.",
            },
            {
              q: "Should the bride wear a lehenga or gown for the reception?",
              a: "Both work beautifully and it comes down to personal style. A reception lehenga gives you the full traditional Indian bridal look with a modern twist. An indo-western gown or floor-length anarkali is more contemporary and easier to walk and dance in. Some brides do a lehenga for the receiving line and change into a gown for dancing. We can source one or both within your budget.",
            },
            {
              q: "What should the groom wear for the reception?",
              a: "For the reception, the groom typically wears a designer sherwani, indo-western suit, or a tailored bandhgala. Popular 2026 reception choices include velvet sherwanis in deep colors (navy, burgundy, emerald), ivory and gold sherwanis with subtle embroidery, or a tailored indo-western tuxedo with Indian detailing. We coordinate the groom's reception outfit with the bride's look for a cohesive photo aesthetic.",
            },
            {
              q: "How far in advance should I order my reception outfit from India?",
              a: "Order your reception outfit 5 to 7 months before the wedding date. Reception outfits are often heavily embellished (sequins, mirror work, custom embroidery) which takes 8 to 12 weeks of production time. Add 3 to 4 weeks for international shipping and 2 to 3 weeks for any local alterations. If you are coordinating bridesmaid or family reception outfits, start 6 months out.",
            },
            {
              q: "How much does a reception lehenga cost when sourced from India?",
              a: "Reception lehengas sourced from India typically range from $400 to $3,500, depending on embellishment, fabric, and designer tier. Designer-inspired pieces with sequin and mirror work start around $600. Couture-level reception lehengas with intricate handwork can reach $3,000 to $5,000 — still 40-60% less than comparable US boutique prices. We provide transparent tiered pricing in your free consultation.",
            },
          ].map((item) => (
            <div
              key={item.q}
              style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}
            >
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#1f1f1f",
                  marginBottom: "8px",
                }}
              >
                {item.q}
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#4d403a" }}>{item.a}</p>
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
            Ready to source your reception outfit?
          </h2>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#7a6841",
              marginBottom: "24px",
              maxWidth: "500px",
              margin: "0 auto 24px",
            }}
          >
            Book a free 30-minute consultation. We will walk you through 2026 trends, color
            options, and pricing — and start sourcing your reception outfit from India within a
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
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Book Free Consultation
          </a>
          <p style={{ color: "#4d403a", fontSize: "15px", marginTop: "16px" }}>
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
              { label: "Haldi Outfits", url: "/haldi-outfits-usa/" },
              { label: "Mehndi Outfits", url: "/mehndi-outfits-usa/" },
              { label: "Sangeet Outfits", url: "/sangeet-outfits-usa/" },
              { label: "Baraat Outfits", url: "/baraat-outfits-usa/" },
              { label: "Bridal Lehengas", url: "/services/bridal-lehengas/" },
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
                  fontSize: "15px",
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
