import { SeoNav } from "@/components/seo-nav"
import { NorthAmericaCoverage } from "@/components/north-america-coverage"
import Link from "next/link"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo"

// ─── SEO METADATA ───────────────────────────────────────────────────────────
// Targets: "indian wedding shopping illinois", "indian wedding shopping chicago",
// "indian bridal boutiques chicago", "indian wedding outfits chicago",
// "buy lehenga from india chicago", "nri indian wedding shopping illinois"
export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-illinois/",
  title: "Indian Wedding Shopping from India — Illinois",
  description:
    "Chicago and Illinois families can research Indian wedding outfits from India with eligible live review, written approvals, available pre-shipping review, and delivery coordination.",
  keywords: [
    "indian wedding shopping illinois",
    "indian wedding shopping chicago",
    "indian bridal boutiques chicago",
    "indian wedding outfits chicago",
    "buy lehenga from india chicago",
    "nri indian wedding shopping illinois",
    "indian wedding concierge chicago",
    "indian bridal wear illinois",
  ],
})

// ─── STRUCTURED DATA ────────────────────────────────────────────────────────
const serviceSchema = buildServiceSchema({
  name: "Illinois Indian Wedding Sourcing Service",
  description:
    "Indian wedding outfit sourcing for families in Illinois — Chicago, Naperville, Schaumburg, Aurora, Evanston, and across the state — with eligible live review, written approvals, and delivery coordination.",
  url: "/indian-wedding-shopping-illinois/",
  category: "Indian Wedding Sourcing for Illinois",
  areaServed: "Illinois, United States",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Illinois NRI Families", url: "/indian-wedding-shopping-illinois/" },
])

const faqSchema = buildFaqSchema([
  {
    question: "How do I compare India sourcing with a Chicago boutique quote?",
    answer:
      "There is no universal savings percentage. Compare the approved product, CeremonyVerse service tier, shipping, customs estimate, alteration allowance, timeline, and return terms with written Illinois boutique quotes.",
  },
  {
    question: "Do you serve brides in cities outside Chicago, like Naperville, Schaumburg, or Aurora?",
    answer:
      "Families across Illinois can request the same remote sourcing services. Delivery remains subject to the selected vendor, carrier service area, shipment terms, and customs clearance stated in the written quote.",
  },
  {
    question: "How do you ensure the quality of outfits before they ship to Illinois?",
    answer:
      "Eligible sourcing tiers may include current item media, live review, or another documented pre-shipping check when the vendor and item allow it. The written scope identifies the review evidence, carrier terms, insurance options, tracking plan, and any remedy before shipment.",
  },
  {
    question: "Can you coordinate outfits for a multi-day Illinois Indian wedding?",
    answer:
      "Yes. Illinois Indian weddings — particularly in Chicago and Naperville — are often grand multi-day events spanning Mehndi, Haldi, Sangeet, the main ceremony, and reception. We coordinate outfits for the entire wedding party across all ceremonies: bride, groom, bridesmaids, groomsmen, both families, and even ceremonial items. One point of contact managing everything end-to-end.",
  },
  {
    question: "How long does shipping from India to Illinois take?",
    answer:
      "Carrier timing depends on origin, destination, service level, shipment details, handoff, customs, and final-mile conditions. The written quote identifies the carrier, current estimate, required documents, customs responsibilities, tracking, and claim process; timing and assessments are not guaranteed.",
  },
  {
    question: "What is the best time to start sourcing my Indian wedding outfits?",
    answer:
      "Start as early as practical. The usable lead time depends on the selected item, customization, vendor capacity, approvals, shipping, customs, and alteration buffer. CeremonyVerse confirms the available timeline before an order is approved and does not promise rush production or delivery.",
  },
])

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────
export default function IndianWeddingShoppingIllinoisPage() {
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
          Illinois NRI Families · Chicago · Naperville · Schaumburg
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
          Indian Wedding Shopping from India — Serving Illinois NRI Families
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
          Families in Chicago, Naperville, Schaumburg, Aurora, Evanston, and other Illinois
          communities can use CeremonyVerse to organize a documented India-sourcing process for
          bridal lehengas, sherwanis, and coordinated wedding outfits. Item availability,
          customization, delivery, and remedies are confirmed in writing before purchase.
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
          Schedule a Free 30-Minute Consultation
        </a>
      </section>

      <NorthAmericaCoverage guideName="Illinois" />

      {/* ─── PAIN POINTS ─────────────────────────────────────────────────── */}
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
            Why Illinois families struggle with Indian wedding shopping
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Limited Devon Avenue Selection",
                desc: "Devon Avenue gives Chicago-area families an in-person shopping option. Compare local inventory with documented India-sourcing quotes using the same item, customization, shipping, customs, alteration, timing, and remedy assumptions.",
              },
              {
                title: "Harsh Illinois Winters",
                desc: "Remote review can reduce the need for an international shopping trip. Availability depends on the selected vendor and item, and the family approves the documented references before purchase.",
              },
              {
                title: "High Local Prices",
                desc: "Indian wedding boutiques on Devon Avenue and in Naperville carry significant overhead. The same bridal lehenga available in Chandni Chowk or Surat for a fraction of the price gets marked up substantially once it reaches an Illinois showroom.",
              },
              {
                title: "Spread-Out Communities",
                desc: "When family members are spread across Chicago, Naperville, Schaumburg, Aurora, and other cities, one shared measurement, item, and approval record can keep the order organized.",
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

      {/* ─── HOW WE SERVE ILLINOIS ────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            How CeremonyVerse serves Illinois families
          </h2>
          <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse is a US-based Indian wedding shopping concierge. Our strongest stated
              working relationships are in Surat and Delhi; other vendors are considered when the
              requested item, capacity, documentation, and terms can be responsibly reviewed.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Share your wedding vision, ceremony schedule, budget, item requirements, and timing.
              When the selected vendor and item allow it, CeremonyVerse can coordinate live video review
              of visible fabrics, colors, and embroidery options. The agreed scope can include measurement
              documentation, written approvals, available pre-shipping review, and tracked-delivery coordination
              to an eligible Illinois address.
            </p>
            <p style={{ marginBottom: "16px" }}>
              For a multi-day celebration, the working list may include outfits for Sangeet, Haldi,
              Mehndi, the main ceremony, and reception across multiple family members. CeremonyVerse
              provides one family-facing contact for the sourcing responsibilities included in the
              written scope.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ILLINOIS CITIES WE SERVE ────────────────────────────────────── */}
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
            Illinois service areas
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
            Families in these Illinois cities can ask about vendor and carrier availability:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              { city: "Chicago", note: "Devon Avenue corridor" },
              { city: "Naperville", note: "Western suburb hub" },
              { city: "Schaumburg", note: "Northwest suburb" },
              { city: "Aurora", note: "Western suburb" },
              { city: "Evanston", note: "North suburb" },
              { city: "Oak Brook", note: "Western suburb" },
              { city: "Downers Grove", note: "Western suburb" },
              { city: "Bolingbrook", note: "Southwest suburb" },
              { city: "Schaumburg", note: "Northwest suburb" },
              { city: "Peoria", note: "Central Illinois" },
              { city: "Champaign", note: "Central Illinois" },
              { city: "Springfield", note: "State capital" },
            ].map((item) => (
              <div
                key={item.city + item.note}
                style={{
                  background: "#f9f6f3",
                  borderRadius: "10px",
                  padding: "16px",
                  border: "1px solid #e6dfd5",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "17px",
                    color: "#1f1f1f",
                    marginBottom: "4px",
                  }}
                >
                  {item.city}
                </p>
                <p style={{ fontSize: "17px", color: "#7a6841" }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px" }}>
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
            Pricing
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                tier: "Free 30-Minute Consultation",
                price: "Free",
                desc: "Tell us about your wedding, your outfit needs, and your budget. We'll share how we can help — no obligation.",
              },
              {
                tier: "Guided Sourcing",
                price: "$799",
                desc: "Live shopping and order coordination for selected wedding outfits, subject to item and vendor availability.",
              },
              {
                tier: "Full Bridal Concierge",
                price: "$2,499",
                desc: "One organized sourcing process for the bride, groom, and wedding party of up to eight people.",
              },
            ].map((item) => (
              <div
                key={item.tier}
                style={{
                  background: "#f9f6f3",
                  borderRadius: "14px",
                  padding: "24px",
                  border: "1px solid #e6dfd5",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "17px",
                    color: "#1f1f1f",
                    marginBottom: "4px",
                  }}
                >
                  {item.tier}
                </h3>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    color: "#7a6841",
                    marginBottom: "10px",
                  }}
                >
                  {item.price}
                </p>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────────────── */}
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
            Frequently Asked Questions for Illinois NRI Brides
          </h2>
          <div>
            {[
              {
                q: "How do I compare India sourcing with a Chicago boutique quote?",
                a: "There is no universal savings percentage. Compare the approved product, CeremonyVerse service tier, shipping, customs estimate, alteration allowance, timeline, and return terms with written Illinois boutique quotes.",
              },
              {
                q: "Do you serve brides in cities outside Chicago, like Naperville, Schaumburg, or Aurora?",
                a: "Families across Illinois can request the same remote sourcing services. Delivery remains subject to the selected vendor, carrier service area, shipment terms, and customs clearance stated in the written quote.",
              },
              {
                q: "How do you ensure the quality of outfits before they ship to Illinois?",
                a: "Eligible sourcing tiers may include current item media, live review, or another documented pre-shipping check when the vendor and item allow it. The written scope identifies the review evidence, carrier terms, insurance options, tracking plan, and any remedy before shipment.",
              },
              {
                q: "Can you coordinate outfits for a multi-day Illinois Indian wedding?",
                a: "Yes. Illinois Indian weddings — particularly in Chicago and Naperville — are often grand multi-day events spanning Mehndi, Haldi, Sangeet, the main ceremony, and reception. We coordinate outfits for the entire wedding party across all ceremonies: bride, groom, bridesmaids, groomsmen, both families, and even ceremonial items. One point of contact managing everything end-to-end.",
              },
              {
                q: "How long does shipping from India to Illinois take?",
                a: "Carrier timing depends on origin, destination, service level, shipment details, handoff, customs, and final-mile conditions. The written quote identifies the carrier, current estimate, required documents, customs responsibilities, tracking, and claim process; timing and assessments are not guaranteed.",
              },
              {
                q: "What is the best time to start sourcing my Indian wedding outfits?",
                a: "Start as early as practical. The usable lead time depends on the selected item, customization, vendor capacity, approvals, shipping, customs, and alteration buffer. CeremonyVerse confirms the available timeline before an order is approved and does not promise rush production or delivery.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "24px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid #e6dfd5",
                }}
              >
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#1f1f1f",
                    marginBottom: "8px",
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#1f1f1f",
              marginBottom: "16px",
            }}
          >
            Ready to start your wedding shopping?
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#4d403a",
              marginBottom: "24px",
            }}
          >
            Book a free 30-minute consultation or message us on WhatsApp at +1 (215) 341-9990. We&apos;ll
            explain how the available CeremonyVerse tiers may support your Illinois family with
            confidence.
          </p>
          <a
            href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
            target="_blank"
            rel="noopener noreferrer"
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
            WhatsApp Us Now
          </a>
        </div>
      </section>

      {/* ─── OTHER STATES WE SERVE ───────────────────────────────────────── */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
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
            Other state guides
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
              { label: "New York", url: "/indian-wedding-shopping-new-york/" },
              { label: "New Jersey", url: "/indian-wedding-shopping-new-jersey/" },
              { label: "California", url: "/indian-wedding-shopping-california/" },
              { label: "Texas", url: "/indian-wedding-shopping-texas/" },
              { label: "NY Bridal Wear", url: "/indian-bridal-wear-new-york-new-jersey/" },
            ].map((item) => (
              <Link
                key={item.url}
                href={item.url}
                style={{
                  display: "inline-block",
                  padding: "8px 16px",
                  background: "#f9f6f3",
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
