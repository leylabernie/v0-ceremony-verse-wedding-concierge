import { SeoNav } from "@/components/seo-nav"
import Link from "next/link"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, buildFaqSchema, JsonLd } from "@/lib/seo"

// ─── SEO METADATA ───────────────────────────────────────────────────────────
// Targets: "indian wedding shopping illinois", "indian wedding shopping chicago",
// "indian bridal boutiques chicago", "indian wedding outfits chicago",
// "buy lehenga from india chicago", "nri indian wedding shopping illinois"
export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-illinois/",
  title: "Indian Wedding Shopping Illinois",
  description:
    "Chicago and Illinois families can source Indian wedding outfits from India with live video shopping, custom stitching, quality checks, and coordinated delivery.",
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
    "Indian wedding outfit sourcing for NRI families in Illinois — Chicago, Naperville, Schaumburg, Aurora, Evanston, and across the state — with live video shopping, custom stitching, and US delivery to your door.",
  url: "/indian-wedding-shopping-illinois/",
  category: "Indian Wedding Sourcing for Illinois",
  areaServed: "US-IL",
})

const breadcrumbSchema = buildBreadcrumb([
  { name: "Illinois NRI Families", url: "/indian-wedding-shopping-illinois/" },
])

const faqSchema = buildFaqSchema([
  {
    question: "How much can I save by sourcing from India vs. Chicago Indian boutiques?",
    answer:
      "There is no universal savings percentage. Compare the approved product, CeremonyVerse service tier, shipping, customs estimate, alteration allowance, timeline, and return terms with written Illinois boutique quotes.",
  },
  {
    question: "Do you serve brides in cities outside Chicago, like Naperville, Schaumburg, or Aurora?",
    answer:
      "Absolutely. While Chicago has the largest Indian community in Illinois, we serve NRI families across the entire state — including Naperville, Schaumburg, Aurora, Evanston, Oak Brook, Downers Grove, Bolingbrook, and beyond. Our process is fully remote with live video shopping, so your physical location in Illinois does not matter. We deliver to your door anywhere in the state.",
  },
  {
    question: "How do you ensure the quality of outfits before they ship to Illinois?",
    answer:
      "We have an in-person quality control team in India that inspects every outfit for fabric quality, embroidery detail, and measurement accuracy before it ships. We send you high-resolution photos and videos for final approval. Only after you approve does the shipment leave for Illinois via DHL or FedEx with full tracking and insurance.",
  },
  {
    question: "Can you coordinate outfits for a multi-day Illinois Indian wedding?",
    answer:
      "Yes. Illinois Indian weddings — particularly in Chicago and Naperville — are often grand multi-day events spanning Mehndi, Haldi, Sangeet, the main ceremony, and reception. We coordinate outfits for the entire wedding party across all ceremonies: bride, groom, bridesmaids, groomsmen, both families, and even ceremonial items. One point of contact managing everything end-to-end.",
  },
  {
    question: "How long does shipping from India to Illinois take?",
    answer:
      "Once your outfit is ready and approved, international shipping via DHL or FedEx typically takes 5 to 10 business days to reach your Illinois address. Customs clearance adds 2 to 4 days. Total door-to-door delivery time after quality approval is typically 1 to 2 weeks. We handle all customs documentation and duties — you do not have to deal with any of it.",
  },
  {
    question: "What is the best time to start sourcing my Indian wedding outfits?",
    answer:
      "We recommend starting 6 to 12 months before your wedding date. Top artisan workshops in India book quickly, and custom outfits require production time. Illinois has a popular wedding season from May through October (avoiding the harsh winter), so we especially recommend starting early if your wedding is during this peak season.",
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
          Illinois is home to one of the largest Indian communities in the US, with vibrant
          communities in Chicago, Naperville, Schaumburg, Aurora, and Evanston. CeremonyVerse
          connects NRI families across Illinois directly with India&apos;s finest craftspeople
          for bridal lehengas, sherwanis, and coordinated wedding outfits — custom stitched
          and delivered to your door.
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
                desc: "Chicago's Devon Avenue is the local hub for Indian shopping, but the boutique selection is small compared to what's available in India. Finding the exact lehenga style, color, and embroidery you envisioned often means settling for what's in stock.",
              },
              {
                title: "Harsh Illinois Winters",
                desc: "Illinois winters make travel to India difficult during peak planning season. Many families try to squeeze shopping trips between November and March, hitting weather delays and tight timelines. Our remote video shopping model eliminates the need to travel at all.",
              },
              {
                title: "High Local Prices",
                desc: "Indian wedding boutiques on Devon Avenue and in Naperville carry significant overhead. The same bridal lehenga available in Chandni Chowk or Surat for a fraction of the price gets marked up substantially once it reaches an Illinois showroom.",
              },
              {
                title: "Spread-Out Communities",
                desc: "Illinois Indian families are spread across Chicago, the western suburbs (Naperville, Schaumburg, Aurora), and beyond. Coordinating in-person shopping trips across the bridal party is impractical — but our remote process handles measurements and ordering from anywhere.",
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
              Our process is simple: share your wedding vision, ceremony schedule, and budget.
              We connect you through live video shopping sessions with our outfit specialists
              in India, showing you fabrics, colors, and embroidery options in real time. You
              select what you love, and we handle custom measurements, tailoring, quality
              checks, and doorstep delivery to your home in Chicago, Naperville, Schaumburg,
              Aurora, Evanston, or anywhere in Illinois.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Illinois families often plan grand, multi-day celebrations — particularly in
              Chicago and the western suburbs where the largest Indian communities are
              concentrated. We understand the scale involved — coordinating outfits for
              Sangeet, Haldi, Mehndi, the main ceremony, and reception across the entire
              family. Our concierge approach means one point of contact managing it all.
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
            Illinois cities we serve
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
            We deliver to your door anywhere in Illinois. Our most-served cities include:
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
                tier: "Free Consultation",
                price: "Free",
                desc: "Tell us about your wedding, your outfit needs, and your budget. We'll share how we can help — no obligation.",
              },
              {
                tier: "Style Guide",
                price: "$249",
                desc: "A curated lookbook tailored to your ceremonies, body type, and budget — with specific recommendations from India's top outfit specialists.",
              },
              {
                tier: "Guided Sourcing",
                price: "$799",
                desc: "Live video shopping sessions, direct access to artisan partners in India, measurement guidance, and managed ordering for your key outfits.",
              },
              {
                tier: "Full Bridal Concierge",
                price: "$2,499",
                desc: "End-to-end outfit management for the entire wedding party — bride, groom, bridesmaids, groomsmen, and family. Every ceremony covered.",
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
                q: "How much can I save by sourcing from India vs. Chicago Indian boutiques?",
                a: "There is no universal savings percentage. Compare the approved product, CeremonyVerse service tier, shipping, customs estimate, alteration allowance, timeline, and return terms with written Illinois boutique quotes.",
              },
              {
                q: "Do you serve brides in cities outside Chicago, like Naperville, Schaumburg, or Aurora?",
                a: "Absolutely. While Chicago has the largest Indian community in Illinois, we serve NRI families across the entire state — including Naperville, Schaumburg, Aurora, Evanston, Oak Brook, Downers Grove, Bolingbrook, and beyond. Our process is fully remote with live video shopping, so your physical location in Illinois does not matter. We deliver to your door anywhere in the state.",
              },
              {
                q: "How do you ensure the quality of outfits before they ship to Illinois?",
                a: "We have an in-person quality control team in India that inspects every outfit for fabric quality, embroidery detail, and measurement accuracy before it ships. We send you high-resolution photos and videos for final approval. Only after you approve does the shipment leave for Illinois via DHL or FedEx with full tracking and insurance.",
              },
              {
                q: "Can you coordinate outfits for a multi-day Illinois Indian wedding?",
                a: "Yes. Illinois Indian weddings — particularly in Chicago and Naperville — are often grand multi-day events spanning Mehndi, Haldi, Sangeet, the main ceremony, and reception. We coordinate outfits for the entire wedding party across all ceremonies: bride, groom, bridesmaids, groomsmen, both families, and even ceremonial items. One point of contact managing everything end-to-end.",
              },
              {
                q: "How long does shipping from India to Illinois take?",
                a: "Once your outfit is ready and approved, international shipping via DHL or FedEx typically takes 5 to 10 business days to reach your Illinois address. Customs clearance adds 2 to 4 days. Total door-to-door delivery time after quality approval is typically 1 to 2 weeks. We handle all customs documentation and duties — you do not have to deal with any of it.",
              },
              {
                q: "What is the best time to start sourcing my Indian wedding outfits?",
                a: "We recommend starting 6 to 12 months before your wedding date. Top artisan workshops in India book quickly, and custom outfits require production time. Illinois has a popular wedding season from May through October (avoiding the harsh winter), so we especially recommend starting early if your wedding is during this peak season.",
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
            Book a free consultation or message us on WhatsApp at +1 (215) 341-9990. We&apos;ll
            walk you through exactly how we can help your Illinois family shop from India with
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
            Other states we serve
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
              { label: "CA Bridal Wear", url: "/indian-bridal-wear-california/" },
              { label: "TX Bridal Wear", url: "/indian-bridal-wear-texas/" },
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
