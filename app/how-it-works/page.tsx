import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, buildHowToSchema, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/how-it-works/",
  title: "How CeremonyVerse Works — India to USA",
  description: "See the CeremonyVerse process for India wedding sourcing: consultation, written approvals, measurement support, pre-shipping review, and US delivery coordination."
});

const serviceSchema = buildServiceSchema({
  name: "CeremonyVerse Sourcing Process",
  description: "Six-step process for sourcing Indian wedding outfits from India to the USA: consultation, style discovery, eligible live video review, measurement coordination, pre-shipping review, and delivery coordination.",
  url: "/how-it-works/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "How It Works", url: "/how-it-works/" },
]);

const faqSchema = buildFaqSchema([
  {
    question: "How long does the whole process take?",
    answer: "Timing depends on the selected item, vendor, customization, approvals, and shipping conditions. Your written scope includes the available vendor estimate. Starting 4–6 months before your first ceremony gives more room for production, delivery, and local alterations if needed.",
  },
  {
    question: "Can I see the outfit before paying?",
    answer: "Eligible sourcing tiers include live video shopping or a documented review before you approve an item purchase. CeremonyVerse service-fee payment milestones are separate and are shown in your written terms.",
  },
  {
    question: "What if something is wrong when it arrives?",
    answer: "Document the concern promptly with photos. We compare it with the written approval record and follow the remedy, return, or alteration provisions in your signed terms. Remote custom clothing does not carry a universal fit or color guarantee.",
  },
  {
    question: "Do you ship to all US states?",
    answer: "Nationwide US delivery coordination is available when the selected vendor and carrier can serve the address. Carrier availability, customs clearance, and delivery timing remain outside CeremonyVerse's control.",
  },
]);

const howToSchema = buildHowToSchema({
  name: "How to Source Indian Wedding Outfits from India to the USA",
  description: "Six-step process for sourcing Indian wedding outfits from India to the USA through CeremonyVerse — from the free consultation to delivery coordination.",
  url: "/how-it-works/",
  totalTime: "PT2H",  // ISO 8601 duration
  steps: [
    { name: "Free Consultation", text: "Tell us about your wedding: ceremonies, party size, timeline, budget. We'll tell you honestly what's achievable and which service tier fits your needs. No sales pressure." },
    { name: "Style Discovery", text: "Share your inspiration — Pinterest boards, Instagram saves, photos from weddings you loved. We work with our outfit specialists and designers in India to find pieces that match your vision, your culture, and your budget." },
    { name: "Live Video Shopping in India", text: "For eligible tiers and available items, join a live video review to examine fabric, embroidery, and color in the vendor's environment. The selected item or custom brief is documented for written approval before purchase or production." },
    { name: "Measurement Coordination", text: "For made-to-measure items, we help document measurements in the vendor's requested format and obtain written approval before production." },
    { name: "Pre-Shipping Review", text: "For eligible tiers, we compare visible details of the completed item with the approval record before shipment and share any concern with you." },
    { name: "US Delivery Coordination", text: "We coordinate shipping documents and tracking for the approved shipment. The carrier and US customs control final clearance and delivery timing." },
  ],
});

const steps = [
  {
    number: "01",
    title: "Free Consultation (Always Free)",
    description:
      "Tell us about your wedding: ceremonies, party size, timeline, location, and budget. We identify whether India shopping, destination planning, day-of coordination, family-side support, or a combined scope fits the request.",
  },
  {
    number: "02",
    title: "Style Discovery",
    description:
      "Share your inspiration — Pinterest boards, Instagram saves, photos from weddings you loved. We work with our outfit specialists and designers in India to find pieces that match your vision, your culture, and your budget. A Punjabi bride planning a sangeet in pastel gota patti gets a different curation than a South Indian Christian bride wanting a Kanchipuram silk for the church ceremony. We don't send you a generic catalog — we curate based on your specific traditions, your body type, and what photographs well in your venue's lighting.",
  },
  {
    number: "03",
    title: "Live Video Shopping in India",
    description:
      "For eligible tiers, you join a live video call where available outfits can be shown in detail—fabric drape, embroidery, and color in the vendor's environment. We document the selected item or custom brief and obtain written approval before purchase or production.",
  },
  {
    number: "04",
    title: "Measurement Coordination",
    description:
      "For made-to-measure items, we help collect and document the measurements requested by the selected vendor. You review the final chart before production. Remote custom clothing may still require local alteration, so any Fit Assurance applies only when included in the signed terms.",
  },
  {
    number: "05",
    title: "Pre-Shipping Review",
    description:
      "For eligible tiers, we review visible details of the completed item against the written approval record before shipment. If we identify a concern, we document it and discuss the available vendor response with you before proceeding.",
  },
  {
    number: "06",
    title: "US Delivery Coordination",
    description:
      "We coordinate the approved shipment's documents and tracking for US delivery. Transit time, customs clearance, assessed duties, and final carrier delivery are outside CeremonyVerse's control and are not guaranteed.",
  },
]

const sourceItems = [
  { title: "Bridal Lehengas", desc: "Bridal lehengas researched and sourced to match your approved color, silhouette, handwork, measurements, and budget brief." },
  { title: "Sherwanis & Groom Outfits", desc: "Sherwanis, Indo-Western suits, and coordinated groom looks for every ceremony." },
  { title: "Bridesmaid Outfits", desc: "Coordinated lehengas, sarees, or salwar sets for your entire bridal party — all measurements managed by us." },
  { title: "Groomsmen Outfits", desc: "Matching kurta sets, Nehru jackets, or sherwanis for the groom's party." },
  { title: "Family Outfits", desc: "Coordinated outfits for both families — parents, siblings, and extended family across every ceremony." },
  { title: "Jewelry & Accessories", desc: "Bridal jewelry sets, bridesmaid accessories, and ceremonial pieces sourced when the vendor and requested details can be responsibly reviewed." },
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
    description: "For couples sourcing outfits across multiple ceremonies. Includes eligible live video sessions, selection and measurement coordination, order follow-up, and pre-shipping review.",
  },
  {
    name: "Full Bridal Concierge",
    price: "$2,499",
    description: "End-to-end shopping coordination for the couple and wedding party of up to eight people, with centralized measurements, approvals, and delivery support.",
  },
]

const faqs = [
  {
    q: "How long does the whole process take?",
    a: "Timing depends on the selected item, vendor, customization, approvals, and shipping conditions. Your written scope includes the available vendor estimate. Starting 4–6 months before your first ceremony gives more room for production, delivery, and local alterations if needed.",
  },
  {
    q: "Can I see the outfit before paying?",
    a: "Eligible sourcing tiers include live video shopping or a documented review before you approve an item purchase. CeremonyVerse service-fee payment milestones are separate and are shown in your written terms.",
  },
  {
    q: "What if something is wrong when it arrives?",
    a: "Document the concern promptly with photos. We compare it with the written approval record and follow the remedy, return, or alteration provisions in your signed terms. Remote custom clothing does not carry a universal fit or color guarantee.",
  },
  {
    q: "How does the Mexico service work?",
    a: "CeremonyVerse offers Full Planning & Design, Partial Planning & Coordination, and Day-of Coordination & Management through a private proposal. An experienced partner leads the assigned local work in Cancun, Riviera Maya, or Punta Cana, while CeremonyVerse supports family communication and leads India sourcing when included.",
  },
  {
    q: "What if I only need one or two outfits, not a full wedding party?",
    a: "That's what our Style Guide and Vendor List tier ($249) is designed for. If you just need a bridal lehenga and a sherwani, we'll curate options based on your style preferences and connect you with the right vendors in Surat and Delhi. No need to commit to full concierge service. We also have a free guide on how to buy a bridal lehenga from India to the USA that walks you through the process.",
  },
]

export default function HowItWorksPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh", color: "#2f2f2f" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <JsonLd id="schema-faq" data={faqSchema} />
      <JsonLd id="schema-howto" data={howToSchema} />
    
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

      {/* VIDEO PROOF — Live Video Shopping */}
      <section style={{ padding: "32px 24px 64px", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
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
            See It In Action
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.6rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            What a live video shopping session looks like
          </h2>
          <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", borderRadius: "14px", overflow: "hidden", background: "#1f1f1f" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p style={{ textAlign: "center", fontSize: "14px", color: "#5e4a40", marginTop: "12px" }}>
            During your live video session, you see the exact outfit — fabric, embroidery, color — and approve before any payment beyond the deposit.
          </p>
        </div>
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

      {/* Process controls */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
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
            Process controls
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
            What protects the decision process
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.8rem", fontWeight: 600, color: "#7a6841", lineHeight: 1 }}>
                Written
              </div>
              <p style={{ fontSize: "17px", color: "#4d403a", marginTop: "8px" }}>
                Scope, approvals, and outside costs are documented before paid work proceeds
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.8rem", fontWeight: 600, color: "#7a6841", lineHeight: 1 }}>
                Milestones
              </div>
              <p style={{ fontSize: "17px", color: "#4d403a", marginTop: "8px" }}>
                Purchase, production, and shipping decisions follow the agreed project stages
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "24px" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.8rem", fontWeight: 600, color: "#7a6841", lineHeight: 1 }}>
                Itemized
              </div>
              <p style={{ fontSize: "17px", color: "#4d403a", marginTop: "8px" }}>
                Product, service, shipping, customs, venue, and vendor costs stay separated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "20px" }}>
            Not sure which service fits? Book a free 30-minute call and we&apos;ll outline the available
            India-shopping, destination-planning, or family-support path for your dates, scope, and budget.
          </p>
          <a
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
            Book Your Free 30-Minute Call
          </a>
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
      <section style={{ padding: "64px 24px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#f8f6f2",
              marginBottom: "14px",
            }}
          >
            Your wedding outfits are too important for online shopping roulette.
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#e8dfd2",
              marginBottom: "28px",
            }}
          >
            Book a free 30-minute consultation. We'll review your wedding vision, tell you honestly
            what's achievable in your timeline and budget, and recommend the right service tier.
            No commitment, no pressure — just clarity. Or message us directly on WhatsApp.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
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
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "transparent",
                color: "#f8f6f2",
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
