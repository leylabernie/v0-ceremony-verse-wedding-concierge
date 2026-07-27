import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-philadelphia/",
  title: "Indian Wedding Shopping Philadelphia — NRI Bridal Concierge",
  description: "Philadelphia-based Indian wedding concierge. Source bridal lehengas, sherwanis, and family outfits directly from India — live video shopping, custom stitching, delivered to your Philadelphia door.",
  keywords: "Indian wedding shopping Philadelphia, Philadelphia bridal lehenga, NRI wedding concierge Philadelphia, Indian wedding outfits Philadelphia PA, buy Indian wedding outfits Philadelphia, South Indian wedding Philadelphia, Gujarati wedding Philadelphia",
});

const serviceSchema = buildServiceSchema({
  name: "Philadelphia Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for NRI families in Philadelphia and the greater Philadelphia area — with live video shopping from India and doorstep delivery.",
  url: "/indian-wedding-shopping-philadelphia/",
  areaServed: "Philadelphia, PA — Greater Philadelphia Area, South Jersey, Delaware",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Philadelphia", url: "/indian-wedding-shopping-philadelphia/" },
]);

export default function PhiladelphiaPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Philadelphia-Based · Nationwide Service
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping Philadelphia — We&apos;re Based Here
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          CeremonyVerse is headquartered in Philadelphia. We source bridal lehengas, sherwanis, bridesmaid outfits, and family ceremony wear directly from artisans in Surat, Delhi, and Kanchipuram — with live video shopping and delivery to your Philadelphia door.
        </p>
        <a
          href="/contact/"
          style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
        >
          Book Free Consultation
        </a>
      </section>

      {/* Why Philadelphia */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why Philadelphia NRI families choose CeremonyVerse
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "We&apos;re local — not a faceless website",
                desc: "CeremonyVerse is based in Philadelphia with a real local address, phone number, and business registration. When you book a consultation, you&apos;re talking to someone in your time zone who understands the NRI experience firsthand. Bhamini is a Philadelphia mother who has coordinated her own sons&apos; weddings — not a call center agent reading a script.",
              },
              {
                title: "Philadelphia&apos;s Indian community is growing",
                desc: "The Philadelphia metro area has a thriving Indian-American community — from Center City and University City to the suburbs of Wayne, Bryn Mawr, and Cherry Hill. With that growth comes more Indian weddings, more demand for authentic outfits, and more families who want to avoid the limited selection and high markups at the few local boutiques.",
              },
              {
                title: "Limited local shopping options",
                desc: "Unlike New York or New Jersey, Philadelphia doesn&apos;t have a dense corridor of Indian wedding boutiques. The few shops that exist carry limited inventory, and ordering custom pieces means either traveling to NJ/NY or ordering online from India — where scams, wrong sizing, and quality issues are common. CeremonyVerse eliminates all of that.",
              },
              {
                title: "Same-day access for consultations",
                desc: "Because we&apos;re Philadelphia-based, we can offer consultation times that work for your schedule — not 12-hour time zone differences. Need to discuss an urgent change to your order? WhatsApp us and get a response the same business day. Try that with a vendor in Surat.",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for Philadelphia families */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            How CeremonyVerse works for Philadelphia families
          </h2>
          <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>
              Everything starts with a free 30-minute consultation. You tell us about your wedding — ceremonies, party size, timeline, budget. We tell you honestly what&apos;s achievable and which service tier fits. No sales pressure, no inflated promises. Because we&apos;re in Philadelphia, you can schedule consultations around EST — evenings, weekends, whatever works for you.
            </p>
            <p style={{ marginBottom: "16px" }}>
              From there, we set up live video shopping sessions with our team in India. You see actual outfits — fabric, embroidery, color in natural light — and pick exactly what you want. Your measurements are taken on a video call (not a generic sizing chart), and everything is custom stitched in India. Before it ships, our family in Surat does a quality inspection and sends you photos. You approve, then it ships via DHL or FedEx to your Philadelphia address.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Whether you&apos;re planning a Gujarati wedding in Center City, a South Indian Christian ceremony at a Penn campus venue, or a Punjabi celebration in the suburbs — we understand the specific outfit traditions each community requires. Philadelphia&apos;s Indian community is diverse, and we source with cultural precision.
            </p>
          </div>
        </div>
      </section>

      {/* Serving the Greater Philadelphia Area */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Serving the Greater Philadelphia Area
          </h2>
          <p style={{ textAlign: "center", color: "#4d403a", marginBottom: "32px", fontSize: "17px" }}>
            We deliver to your door anywhere in the Philadelphia region.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["Philadelphia", "Center City", "University City", "Cherry Hill", "Bryn Mawr", "Wayne", "King of Prussia", "Wilmington", "Princeton", "Allentown", "Doylestown", "West Chester", "Harrisburg", "South Jersey", "Delaware Valley"].map((loc) => (
              <span
                key={loc}
                style={{
                  fontSize: "14px",
                  color: "#4d403a",
                  background: "#f9f6f3",
                  border: "1px solid #e6dfd5",
                  borderRadius: "999px",
                  padding: "6px 16px",
                }}
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Transparent Pricing
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { tier: "Free Consultation", price: "Free", desc: "Tell us about your wedding, your outfit needs, and your budget. We'll share how we can help — no obligation." },
              { tier: "Style Guide & Vendor List", price: "$249", desc: "Curated starting point for self-directed brides. Style discovery, curated vendor contacts, and measurement guidance." },
              { tier: "Guided Sourcing", price: "$799", desc: "Live video shopping sessions with our team in India, bridesmaid and groomsmen coordination, and quality inspection." },
              { tier: "Full Bridal Concierge", price: "$2,499", desc: "End-to-end sourcing for your entire wedding party — every ceremony, every outfit, every family member. Dedicated coordinator." },
            ].map((item) => (
              <div key={item.tier} style={{ background: "#fff", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "4px" }}>{item.tier}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#7a6841", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "16px", fontSize: "14px", color: "#4d403a" }}>
            Outfit costs, shipping, and customs are itemized separately. <a href="/pricing/" style={{ color: "#7a6841", textDecoration: "underline" }}>See full pricing breakdown</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions for Philadelphia NRI Brides
          </h2>
          <div>
            {[
              {
                q: "Are you actually based in Philadelphia?",
                a: "Yes. CeremonyVerse is a Philadelphia-based business with a real local address. Bhamini, the founder, lives in the Philadelphia area and has coordinated Indian weddings for her own sons — one in New Jersey and one in Mexico. You can reach us during East Coast business hours, and in-person consultations are available by appointment.",
              },
              {
                q: "How much does a bridal lehenga from India cost delivered to Philadelphia?",
                a: "Most of our Philadelphia clients save 40-60% compared to what they'd pay at Indian boutiques in New Jersey or New York. Sangeet and mehndi outfits run $150-300 landed. Mid-bridal lehengas run $700-1,500. Premium bridal lehengas with heavy zardozi run $1,500-3,000. These prices include our service fee, international shipping, and US customs duties.",
              },
              {
                q: "Do you deliver to Cherry Hill, Bryn Mawr, and the suburbs?",
                a: "Yes. We deliver via DHL or FedEx to any address in the greater Philadelphia area — including South Jersey suburbs like Cherry Hill and Princeton, the Main Line (Bryn Mawr, Wayne, King of Prussia), Wilmington, and Allentown. Delivery typically takes 3-5 business days once shipped from India.",
              },
              {
                q: "Can I meet you in person?",
                a: "Yes, by appointment. Many Philadelphia-area brides prefer to start with a video consultation and then meet in person for measurement sessions or to review fabric samples. We're flexible — whatever makes you most comfortable with the process.",
              },
              {
                q: "I'm planning a wedding at a Philadelphia venue — can you help with outfits for multiple ceremonies?",
                a: "Absolutely. Whether it's a 3-day Gujarati wedding, a South Indian Christian ceremony, or a multi-day Punjabi celebration — we source outfits for every ceremony and every family member. We understand the specific traditions each community follows and curate accordingly. Philadelphia venues like The Rittenhouse, The Logan, or Penn Museum each have their own aesthetic, and we can match your outfits to your venue.",
              },
            ].map((faq, index) => (
              <div key={index} style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: index < 4 ? "1px solid #e6dfd5" : "none" }}>
                <h3 style={{ fontWeight: 600, fontSize: "16px", color: "#1f1f1f", marginBottom: "8px" }}>{faq.q}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "16px" }}>
            Philadelphia-based. Ready to help.
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Book a free 30-minute consultation. We'll review your wedding vision, timeline, and budget — and recommend exactly what level of support you need. No commitment, no pressure.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/contact/"
              style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20in%20Philadelphia%20and%20interested%20in%20CeremonyVerse."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#f8f6f2", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none", border: "1px solid #7a6841" }}
            >
              WhatsApp +1 (215) 341-9990
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
