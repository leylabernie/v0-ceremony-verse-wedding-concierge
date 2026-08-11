import { SeoNav } from "@/components/seo-nav"
import Link from "next/link"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo"

// ─── SEO METADATA ───────────────────────────────────────────────────────────
// Targets: "banarasi silk saree usa", "buy banarasi saree from india",
// "pure banarasi silk saree", "banarasi wedding saree", "varanasi silk saree",
// "banarasi zari saree", "organza banarasi saree"
export const metadata = buildMetadata({
  path: "/banarasi-silk-sarees-usa/",
  title: "Banarasi Silk Sarees from India — Delivered to USA",
  description:
    "Research Banarasi silk sarees with documented fiber, zari, origin, certification, blouse, price, and U.S. delivery information for the selected piece.",
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
    "Banarasi silk saree research and sourcing with documented fiber, zari, origin, available certification, blouse, price, and U.S. delivery information.",
  url: "/banarasi-silk-sarees-usa/",
  category: "Banarasi Silk Saree Sourcing",
  areaServed: "United States",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Banarasi Silk Sarees", url: "/banarasi-silk-sarees-usa/" },
])

const faqSchema = buildFaqSchema([
  {
    question: "How much does an authentic Banarasi silk saree cost when sourced from India?",
    answer:
      "There is no universal price or savings percentage. Compare the exact fiber, zari, weave, origin evidence, certification, blouse work, vendor terms, CeremonyVerse service fee, shipping, customs estimate, and alteration allowance for the selected saree.",
  },
  {
    question: "How is Banarasi silk different from Kanchipuram silk?",
    answer:
      "Banarasi and Kanchipuram refer to different regional weaving traditions, but product labels alone do not prove fiber, zari, origin, or construction. Compare the exact seller representations and available documentation for each selected saree.",
  },
  {
    question: "What are the different types of Banarasi silk sarees?",
    answer:
      "Banarasi sarees are sold in several silk, organza, tissue, and blended constructions. Ask for the exact fiber, zari, weave, origin, and available certification for the selected piece rather than relying on a category name alone.",
  },
  {
    question: "How do I know my Banarasi saree is authentic?",
    answer:
      "Ask for the exact fiber and zari composition plus any available Silk Mark documentation for the selected saree. Eligible tiers can include live review, but video alone does not authenticate material composition.",
  },
  {
    question: "Can you source a specific Banarasi color or design?",
    answer:
      "Yes. Tell us your wedding color palette and we will source Banarasi sarees that coordinate with your bridal or bridesmaid outfits. Popular 2026 Banarasi colors include traditional red and maroon for the bride, ivory and gold for heritage looks, deep jewel tones (emerald, sapphire, burgundy) for evening events, and pastel shades for mehndi and haldi. We can also arrange custom blouse stitching to match.",
  },
  {
    question: "How long does it take to source a Banarasi saree from India to the USA?",
    answer:
      "Lead time depends on the selected saree, vendor availability, quantity, blouse work, approval timing, carrier, customs, and alteration buffer. The written quote records the current vendor and carrier estimates plus each party's delivery responsibilities.",
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
            fontSize: "17px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7a6841",
            marginBottom: "14px",
            fontWeight: 500,
          }}
        >
          Banarasi Silk Sarees · Documented Sourcing · U.S. Delivery Coordination
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
          Banarasi sarees researched by represented fiber, zari, weave, origin, and evidence.
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
          Banarasi sarees are sold in silk, organza, tissue, and blended constructions with
          different zari and weaving claims. CeremonyVerse can research a selected saree and
          document the represented fiber, zari, origin, certification, blouse work, and terms.
        </p>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#5e4a40",
            marginBottom: "32px",
            maxWidth: "560px",
            margin: "0 auto 32px",
          }}
        >
          Certification and live review are not universal. Ask for the evidence available for the
          selected piece and approve the written references before purchase.
        </p>
        <Link
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
        </Link>
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
            Compare Banarasi saree constructions
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#4d403a",
              textAlign: "center",
              marginBottom: "32px",
              maxWidth: "640px",
              margin: "0 auto 32px",
            }}
          >
            Review each available piece by its represented fiber, zari, weave, origin, certification,
            blouse work, price, and vendor terms rather than relying on a category name alone.
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
                desc: "Katan is a product category that may be represented with different fiber and zari compositions. Confirm the exact selected piece and evidence.",
                color: "#9C2A2A",
              },
              {
                title: "Organza Banarasi",
                desc: "Organza Banarasi sarees can vary by fiber, motif method, weight, and transparency. Review the exact piece and seller representations.",
                color: "#E8B4B8",
              },
              {
                title: "Tissue Banarasi",
                desc: "Tissue-labelled sarees can vary by fiber, metallic yarn, weight, transparency, and finish. Review the exact piece and seller representations.",
                color: "#C9A84C",
              },
              {
                title: "Shattir Banarasi",
                desc: "Shattir-labelled sarees can vary by fiber, weight, construction, and finish. Confirm those details for the selected piece.",
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
              fontSize: "17px",
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
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>
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
            Why authenticity needs documentation
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
                desc: "An origin or heritage claim should be supported for the selected piece rather than inferred from a product title or catalog description.",
              },
              {
                title: "Fiber composition",
                desc: "Banarasi sarees are sold in different silk and blended compositions. Confirm the exact fiber representation for the selected piece.",
              },
              {
                title: "Zari composition",
                desc: "Zari composition varies. Confirm whether the exact piece is represented as metallic yarn, silver zari, or another construction.",
              },
              {
                title: "Available certification",
                desc: "When pure silk is requested, ask for available Silk Mark documentation and keep the seller's representation in the approval record.",
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
                <p style={{ fontSize: "17px", color: "#4d403a", lineHeight: 1.6 }}>
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
              fontSize: "17px",
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
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4d403a",
              marginBottom: "1.2rem",
            }}
          >
            <strong>Kanchipuram and Banarasi sarees</strong> refer to different regional weaving
            traditions, but individual products vary in represented fiber, border, zari, construction,
            and origin evidence. Compare the selected pieces rather than treating either label as proof.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#4d403a",
              marginBottom: "1.2rem",
            }}
          >
            Families can source <strong>both</strong> for different ceremonies —
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
                fontSize: "17px",
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
              a: "There is no universal price or savings percentage. Compare the exact fiber, zari, weave, origin evidence, certification, blouse work, vendor terms, CeremonyVerse service fee, shipping, customs estimate, and alteration allowance for the selected saree.",
            },
            {
              q: "How is Banarasi silk different from Kanchipuram silk?",
              a: "Banarasi and Kanchipuram refer to different regional weaving traditions, but product labels alone do not prove fiber, zari, origin, or construction. Compare the exact seller representations and available documentation for each selected saree.",
            },
            {
              q: "What are the different types of Banarasi silk sarees?",
              a: "Banarasi sarees are sold in several silk, organza, tissue, and blended constructions. Ask for the exact fiber, zari, weave, origin, and available certification for the selected piece rather than relying on a category name alone.",
            },
            {
              q: "How do I know my Banarasi saree is authentic?",
              a: "Ask for the exact fiber and zari composition plus any available Silk Mark documentation for the selected saree. Eligible tiers can include live review, but video alone does not authenticate material composition.",
            },
            {
              q: "Can you source a specific Banarasi color or design?",
              a: "Yes. Tell us your wedding color palette and we will source Banarasi sarees that coordinate with your bridal or bridesmaid outfits. Popular 2026 Banarasi colors include traditional red and maroon for the bride, ivory and gold for heritage looks, deep jewel tones (emerald, sapphire, burgundy) for evening events, and pastel shades for mehndi and haldi. We can also arrange custom blouse stitching to match.",
            },
            {
              q: "How long does it take to source a Banarasi saree from India to the USA?",
              a: "Lead time depends on the selected saree, vendor availability, quantity, blouse work, approval timing, carrier, customs, and alteration buffer. The written quote records the current vendor and carrier estimates plus each party's delivery responsibilities.",
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

      {/* ─── Related outfit & ceremony pages ──────────────────────────── */}
      <section style={{ padding: "56px 24px", background: "#faf8f5" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#7a6841", marginBottom: "12px" }}>
            Complete Your Bridal Trousseau
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
            Pair your Banarasi with the rest of your wedding wardrobe
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "28px" }}>
            From the bridal lehenga for the main ceremony to a Kanchipuram for the reception, source
            approved sarees and outfits through one documented concierge scope — coordinated styling, combined
            shipping, and a single point of contact in India.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/kanchipuram-silk-sarees-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Kanchipuram Silk Sarees</Link>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridesmaid &amp; Family Outfits</Link>
            <Link href="/reception-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
            <Link href="/gujarati-wedding-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Gujarati Wedding Outfits</Link>
            <Link href="/how-it-works/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>How It Works</Link>
          </div>
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
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#7a6841",
              marginBottom: "24px",
              maxWidth: "500px",
              margin: "0 auto 24px",
            }}
          >
            Request a consultation. We can help compare Banarasi product categories,
            varieties, motif options, evidence, and pricing. Paid sourcing begins only after you
            approve the written scope and available timeline.
          </p>
          <Link
            href="/contact/"
            style={{
              display: "inline-block",
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
          </Link>
          <p style={{ color: "#4d403a", fontSize: "17px", marginTop: "16px" }}>
            Or WhatsApp:{" "}
            <a href="https://wa.me/12153419990" style={{ color: "#7a6841" }}>
              +1 (215) 341-9990
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
