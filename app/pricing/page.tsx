import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

import { CustomsCalculator } from "@/components/customs-calculator"

export const metadata = {
  title: "Indian Wedding Concierge Pricing | CeremonyVerse",
  description: "Transparent pricing for CeremonyVerse's Indian wedding shopping concierge. From $149 for a Style Guide to $1,499 for Full Bridal Concierge. No hidden fees.",
  alternates: {
    canonical: "https://ceremonyverse.com/pricing",
  },
  keywords: "indian wedding concierge pricing, NRI wedding sourcing cost, bridal concierge india usa, indian wedding outfit sourcing fee, ceremonyverse pricing",
  openGraph: {
    title: "Indian Wedding Concierge Pricing | CeremonyVerse",
    description: "Transparent pricing for CeremonyVerse's Indian wedding shopping concierge. From $149 for a Style Guide to $1,499 for Full Bridal Concierge. No hidden fees.",
    type: "website",
    url: "https://ceremonyverse.com/pricing",
  
    images: [
      {
        url: "https://ceremonyverse.com/images/hero-lehenga.jpg",
        width: 1200,
        height: 630,
        alt: "CeremonyVerse — Indian Wedding Shopping Concierge",
      },
    ],
  },
};

const WA_LINK = "https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."

const tiers = [
  {
    name: "Style Guide & Vendor List",
    price: "From $149",
    tagline: "For the self-directed bride who just needs a curated starting point.",
    features: [
      "Personalized outfit style guide",
      "Curated list of 3–5 vetted artisan workshops",
      "Budget guidance and style notes",
      "One 30-min consultation call",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Guided Sourcing",
    price: "From $599",
    tagline: "Live sourcing sessions so you can see and approve every piece before it ships.",
    features: [
      "Everything in Style Guide tier",
      "2–4 live video shopping sessions",
      "Fabric sourcing & color matching to your shade",
      "Color accuracy confirmation",
      "Pre-shipping inspection",
    ],
    cta: "Book Consultation",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Full Bridal Concierge",
    price: "From $1,499",
    tagline: "We handle everything — from first inspiration to your door.",
    features: [
      "Everything in Guided Sourcing tier",
      "Full wedding party coordination",
      "Custom design sourcing",
      "Measurement management for all members",
      "End-to-end shipping & delivery support",
      "Dedicated sourcing manager",
    ],
    cta: "Plan My Wedding Party",
    featured: false,
  },
]

const faqItems = [
  {
    q: "Is the free consultation really free?",
    a: "Yes, always. 30 minutes, no obligation. We'll answer your questions honestly, even if CeremonyVerse isn't the right fit.",
  },
  {
    q: "Can I start with a Style Guide and upgrade later?",
    a: "Yes, we apply your Style Guide fee toward Guided Sourcing or Full Concierge. You're never paying twice for the same work.",
  },
  {
    q: "What if my wedding is less than 4 months away?",
    a: "Contact us. We'll tell you honestly what's achievable given your timeline — and what tradeoffs to expect.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, milestone-based: 25% deposit, 35% after approval, 30% after inspection, 10% on delivery. You're never paying in full upfront.",
  },
]

const comparisonRows = [
  {
    vs: "US Indian Boutique",
    benefit: "30–50% savings on outfits, plus live video verification of every piece before it ships.",
  },
  {
    vs: "Shopping Direct from India",
    benefit: "No risk of scams, sizing guaranteed, full coordination — we handle every detail so you don't have to.",
  },
  {
    vs: "Online Indian Retailers",
    benefit: "See the exact item on video, custom fitted to your measurements, with a personal manager throughout.",
  },
]

export default function PricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I avoid lehenga scams on Instagram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CeremonyVerse uses a 3-step verification process: (1) Live Video Approval - you see the actual piece on video before purchase, (2) Vetted Partners - we work only with established artisan workshops in India with years of track record, (3) Milestone Payments - you pay in stages (25% deposit, 35% after approval, 30% after inspection, 10% on delivery), never in full upfront. This protects you from the common scams where you pay upfront and never receive the item."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Section 122 surcharge for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Section 122 surcharge is a temporary 15% import surcharge imposed by the US government in February 2026. It stacks on top of the base tariff rate (18% for Indian garments). This means a $2,000 lehenga will incur approximately $300 in Section 122 surcharge alone. Use our Customs & Tariffs Calculator to estimate the total landed cost for your specific item."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a Sabyasachi style lehenga for under $2,000?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Artisan-Direct model connects you with master embroiderers and designers in India who create pieces comparable to Sabyasachi's aesthetic at 30-50% lower cost. You pay for the actual labor and materials, not the luxury brand markup. A custom bridal lehenga sourced through CeremonyVerse typically costs $1,200-$2,500 including all US duties and fees, versus $4,000-$8,000+ at US boutiques."
        }
      }
    ]
  };

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Transparent Pricing
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Know Exactly What You're Paying — Before You Start
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          No hidden markups. Our sourcing fee is clearly itemized. You see the full breakdown: outfit cost, sourcing fee, shipping, and customs.
        </p>
      </section>

      {/* Pricing Tiers */}
      <section style={{ padding: "0 24px 56px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", alignItems: "start" }}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: "#f9f6f3",
                borderRadius: "16px",
                padding: "32px 28px",
                border: tier.featured ? "2px solid #c7b28a" : "1px solid #e6dfd5",
                position: "relative",
                boxShadow: tier.featured ? "0 4px 24px rgba(199,178,138,0.18)" : "none",
              }}
            >
              {tier.badge && (
                <div style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#c7b28a",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "4px 16px",
                  borderRadius: "999px",
                  whiteSpace: "nowrap",
                }}>
                  {tier.badge}
                </div>
              )}
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "6px" }}>
                {tier.name}
              </h2>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 600, color: "#c7b28a", marginBottom: "10px" }}>
                {tier.price}
              </p>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55", marginBottom: "20px" }}>
                {tier.tagline}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0" }}>
                {tier.features.map((f) => (
                  <li key={f} style={{ fontSize: "13px", lineHeight: 1.65, color: "#6a5c55", paddingBottom: "8px", paddingLeft: "18px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "1px", color: "#c7b28a", fontWeight: 700, fontSize: "12px" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: tier.featured ? "#c7b28a" : "transparent",
                  color: tier.featured ? "#fff" : "#c7b28a",
                  border: tier.featured ? "none" : "1.5px solid #c7b28a",
                  padding: "12px 24px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <p style={{ textAlign: "center", fontSize: "13px", color: "#6a5c55", marginTop: "28px", maxWidth: "640px", margin: "28px auto 0", lineHeight: 1.7 }}>
          All tiers include itemized quotes showing outfit cost, sourcing fee, shipping, and customs — fully transparent, no surprises.
        </p>
      </section>

      {/* What's NOT Included */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "20px" }}>
            What's NOT Included in the Fee
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", textAlign: "center" }}>
            The sourcing fee covers our service. Outfit costs, shipping, and customs duties are separate — and quoted upfront before you commit. You'll see the full number before any payment is made.
          </p>
        </div>
      </section>

      {/* Real Cost Example */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "28px" }}>
            Real Cost Example
          </h2>
          <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6a5c55", textAlign: "center", marginBottom: "28px" }}>
            A typical Full Bridal Concierge client sourcing a bridal lehenga, 2 reception outfits, and 6 bridesmaid lehengas might see:
          </p>
          <div style={{ background: "#f9f6f3", borderRadius: "16px", border: "1px solid #e6dfd5", overflow: "hidden" }}>
            {[
              { label: "Outfit costs", value: "$3,000–$8,000", note: "paid directly to artisans" },
              { label: "Sourcing fee", value: "$1,499", note: "paid to CeremonyVerse" },
              { label: "Shipping", value: "$200–$400", note: "" },
              { label: "Customs duty", value: "12–27% on outfit value", note: "" },
            ].map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 28px",
                  borderBottom: i < 3 ? "1px solid #e6dfd5" : "none",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
              >
                <div>
                  <span style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f" }}>{row.label}</span>
                  {row.note && (
                    <span style={{ fontSize: "12px", color: "#6a5c55", marginLeft: "8px" }}>({row.note})</span>
                  )}
                </div>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.15rem", fontWeight: 600, color: "#c7b28a" }}>{row.value}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "#6a5c55", textAlign: "center", marginTop: "16px", fontStyle: "italic" }}>
            Total: transparently itemized before you commit.
          </p>
        </div>
      </section>

      {/* How We Compare */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            How We Compare
          </h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {comparisonRows.map((row) => (
              <div
                key={row.vs}
                style={{
                  background: "#f9f6f3",
                  borderRadius: "14px",
                  padding: "22px 28px",
                  border: "1px solid #e6dfd5",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c7b28a", fontWeight: 500, marginBottom: "4px" }}>
                    vs.
                  </p>
                  <p style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f" }}>{row.vs}</p>
                </div>
                <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#6a5c55" }}>{row.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {faqItems.map((item) => (
              <div key={item.q} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px 28px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#6a5c55" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customs Calculator Section */}
      <CustomsCalculator />

      {/* Bottom CTA */}
      <section style={{ padding: "48px 24px 72px", textAlign: "center", background: "#fff" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Book Your Free 30-Minute Consultation
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "28px" }}>
            No commitment. No pressure. Just honest answers about your wedding sourcing.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>
    <SeoFooter />
    </div>
  )
}