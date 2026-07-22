import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/how-it-works/",
  title: "How CeremonyVerse Works — India to USA",
  description: "Free consultation, live video shopping in India, custom stitching, quality inspection, and delivery to your US door."
});

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Sourcing Process",
  description: "Five-step process for sourcing Indian wedding outfits from India to the USA: free consultation, style discovery, live video shopping in India, custom stitching, quality inspection, and door-to-door US delivery.",
  url: "/how-it-works/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "How It Works", url: "/how-it-works/" },
]);

const steps = [
  {
    number: "01",
    title: "Free Consultation (Always Free)",
    description:
      "Tell us about your wedding: ceremonies, party size, timeline, budget. We'll tell you honestly what's achievable and which service tier fits your needs. No sales pressure.",
  },
  {
    number: "02",
    title: "Style Discovery",
    description:
      "Share your inspiration — Pinterest boards, Instagram saves, photos from weddings you loved. We work with our outfit specialists and designers in India to find pieces that match your vision, your culture, and your budget.",
  },
  {
    number: "03",
    title: "Live Video Shopping in India",
    description:
      "This is what makes CeremonyVerse different. You join a live video call where our team in India shows you actual outfits — fabric draped, embroidery up close, color in natural light. The exact piece you approve gets reserved with your name and order number. No catalog photos. No surprises.",
  },
  {
    number: "04",
    title: "Custom Stitching to Your Measurements",
    description:
      "We guide you through a detailed measurement process on a video call. Your blouse, your silhouette, your exact fit — stitched by our local tailor partner specifically for you. Not Indian standard sizing. Your measurements.",
  },
  {
    number: "05",
    title: "Quality Inspection Before Shipping",
    description:
      "Before anything leaves India, we do a final inspection. We check the embroidery, the fabric, the stitching, the color — against what you approved. If anything is off, we fix it before it ships.",
  },
  {
    number: "06",
    title: "Delivered to Your US Door",
    description:
      "Your outfits are carefully packaged and shipped directly to your address in the United States. We handle the customs documentation and keep you updated throughout.",
  },
]

const sourceItems = [
  { title: "Bridal Lehengas", desc: "Custom bridal lehengas sourced and stitched to your exact measurements — from classic reds to pastels and contemporary silhouettes." },
  { title: "Sherwanis & Groom Outfits", desc: "Sherwanis, Indo-Western suits, and coordinated groom looks for every ceremony." },
  { title: "Bridesmaid Outfits", desc: "Coordinated lehengas, sarees, or salwar sets for your entire bridal party — all measurements managed by us." },
  { title: "Groomsmen Outfits", desc: "Matching kurta sets, Nehru jackets, or sherwanis for the groom's party." },
  { title: "Family Outfits", desc: "Coordinated outfits for both families — parents, siblings, and extended family across every ceremony." },
  { title: "Jewelry & Accessories", desc: "Bridal jewelry sets, bridesmaid accessories, and ceremonial pieces sourced from trusted artisans." },
  { title: "Ceremonial Items", desc: "Pooja thalis, kalire, coconut decorations, and ceremony-specific items sourced authentically from India." },
  { title: "Wedding Gifts", desc: "Curated gift boxes, return gifts, and trousseau items for guests and family." },
  { title: "Welcome Bags", desc: "Custom welcome bags with Indian snacks, personalized items, and cultural touches for your guests." },
  { title: "Pet Outfits", desc: "Yes, really. Matching pet outfits so your furry family member is part of the celebration too." },
]

const pricingTiers = [
  {
    name: "Free Consultation",
    price: "Free",
    description: "A no-commitment conversation about your wedding, your needs, and what's possible. Always free.",
  },
  {
    name: "Style Guide & Vendor List",
    price: "$249",
    description: "For couples sourcing 1–2 key outfits. Includes style discovery, curated vendor contacts, and measurement guidance.",
  },
  {
    name: "Guided Sourcing",
    price: "$799",
    description: "For couples sourcing outfits across multiple ceremonies. Includes multiple live video sessions, bridesmaid/groomsmen coordination, and quality inspection.",
  },
  {
    name: "Full Bridal Concierge",
    price: "$2,499",
    description: "End-to-end sourcing for your entire wedding party — every ceremony, every outfit, every family member. Dedicated coordinator, unlimited sessions, and priority shipping.",
  },
]

const faqs = [
  {
    q: "How long does the whole process take?",
    a: "From consultation to delivery, the typical timeline is 8–12 weeks. Rush orders (6 weeks) are sometimes possible depending on the complexity. We recommend starting 4–6 months before your first ceremony to keep things relaxed.",
  },
  {
    q: "Can I see the outfit before paying?",
    a: "Yes. During your live video shopping session, you see the exact outfit — fabric, color, embroidery — in real time. You approve the specific piece before any payment is collected. After stitching, we do a final video inspection with you before shipping.",
  },
  {
    q: "What if something is wrong when it arrives?",
    a: "We handle it. If an outfit doesn't match what you approved — in color, fit, or quality — we work with our team in India to fix or replace it. Our quality inspection before shipping is designed to catch issues early, but if anything slips through, we make it right.",
  },
]

export default function HowItWorksPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh", color: "#2f2f2f" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
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
          Our Process
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
          How CeremonyVerse works — from your vision to your door.
        </h1>
        <p
          style={{
                        fontSize: "17px",
            lineHeight: 1.7,
            color: "#4d403a",
            marginBottom: "32px",
            maxWidth: "600px",
            margin: "0 auto 32px",
          }}
        >
          Six clear steps. No guesswork. You see and approve everything before it ships — because your wedding outfits are too important for surprises.
        </p>
      </section>

      {/* Steps */}
      <section style={{ padding: "24px 24px 64px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                padding: "32px 0",
                borderBottom: i < steps.length - 1 ? "1px solid #e6dfd5" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "2.4rem",
                  fontWeight: 300,
                  color: "#7a6841",
                  lineHeight: 1,
                  minWidth: "52px",
                  flexShrink: 0,
                }}
              >
                {step.number}
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#1f1f1f",
                    marginBottom: "10px",
                    lineHeight: 1.25,
                  }}
                >
                  {step.title}
                </h2>
                <p
                  style={{
                                        fontSize: "17px",
                    lineHeight: 1.7,
                    color: "#4d403a",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Source */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "17px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a6841",
              marginBottom: "14px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Everything You Need
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "36px",
            }}
          >
            What we source
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {sourceItems.map((item) => (
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
                <p
                  style={{
                                        fontSize: "17px",
                    lineHeight: 1.6,
                    color: "#4d403a",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "17px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7a6841",
              marginBottom: "14px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Simple Pricing
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "36px",
            }}
          >
            Service tiers
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "28px 24px",
                  border: "1px solid #e6dfd5",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                                        fontSize: "17px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#7a6841",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  {tier.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "#1f1f1f",
                    marginBottom: "12px",
                  }}
                >
                  {tier.price}
                </p>
                <p
                  style={{
                                        fontSize: "17px",
                    lineHeight: 1.6,
                    color: "#4d403a",
                    marginBottom: "16px",
                  }}
                >
                  {tier.description}
                </p>
                <a
                  href={tier.name === "Free Consultation" ? "/contact" : "/contact"}
                  style={{
                    display: "inline-block",
                    background: tier.name === "Free Consultation" ? "transparent" : "#7a6841",
                    color: tier.name === "Free Consultation" ? "#7a6841" : "#fff",
                    padding: "10px 24px",
                    borderRadius: "999px",
                    fontSize: "17px",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: tier.name === "Free Consultation" ? "1px solid #7a6841" : "1px solid #7a6841",
                  }}
                >
                  {tier.name === "Free Consultation" ? "Book Free Call" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 24px 64px", background: "#fff" }}>
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
            Frequently asked questions
          </h2>
          {faqs.map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
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
              <p
                style={{
                                    fontSize: "17px",
                  lineHeight: 1.6,
                  color: "#4d403a",
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              marginBottom: "14px",
            }}
          >
            Ready to get started?
          </h2>
          <p
            style={{
                            fontSize: "17px",
              lineHeight: 1.7,
              color: "#4d403a",
              marginBottom: "28px",
            }}
          >
            Book a free consultation — no commitment, no pressure. Or message us directly on WhatsApp.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
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
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                color: "#1f1f1f",
                padding: "13px 30px",
                borderRadius: "999px",
                fontSize: "17px",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid #7a6841",
              }}
            >
              WhatsApp +1 (215) 341-9990
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
