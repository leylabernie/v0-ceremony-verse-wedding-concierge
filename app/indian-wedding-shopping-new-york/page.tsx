import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Indian Wedding Shopping from India — Serving New York NRI Families | CeremonyVerse",
  description: "NRI bride in New York? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits from India — live video shopping, custom stitching, delivered to your NY door.",
  keywords: "Indian wedding shopping New York, NRI bride NY, bridal lehenga New York, Indian wedding outfits NY, sherwani New York, Jackson Heights Indian wedding, Flushing NRI bride, Long Island Indian wedding outfits, lehenga from India to NY, CeremonyVerse New York",
}

export default function IndianWeddingShoppingNewYorkPage() {
  return (
    <main className="min-h-screen bg-[var(--cv-bg)]">
      <SeoNav />

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "CeremonyVerse — New York",
            url: "https://ceremonyverse.com/indian-wedding-shopping-new-york",
            description:
              "Indian wedding outfit sourcing service for NRI families in New York. Live video shopping from trusted artisan partners in India, delivered to your NY door.",
            areaServed: {
              "@type": "State",
              name: "New York",
              containedInPlace: { "@type": "Country", name: "United States" },
            },
            serviceType: [
              "Indian Wedding Outfit Sourcing",
              "Bridal Lehenga Sourcing",
              "Sherwani Sourcing",
              "Personal Wedding Shopper India",
            ],
          }),
        }}
      />

      {/* HERO */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Serving New York NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#2f2f2f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving New York NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "32px", maxWidth: "620px", margin: "0 auto 32px" }}>
          Getting married in New York or planning a wedding from the city? CeremonyVerse is your personal wedding shopping team in India — sourcing bridal lehengas, sherwanis, and family outfits through live video sessions and delivering them straight to your NY door.
        </p>
        <a
          href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20an%20NRI%20bride%20in%20New%20York%20and%20interested%20in%20CeremonyVerse%20services."
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
        >
          Book Free Consultation
        </a>
      </section>

      {/* PAIN POINTS */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#2f2f2f", textAlign: "center", marginBottom: "32px" }}>
            The real challenges NRI brides in New York face
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Jackson Heights is not enough", desc: "Yes, Jackson Heights has Indian stores — but the selection is limited compared to what's available across India. You're choosing from whatever's on the rack, often at a steep markup, with minimal customization." },
              { title: "Manhattan prices, limited choices", desc: "Everything costs more in New York. Indian boutiques in the tri-state area charge premium prices for outfits that may not match the quality or variety you'd find working directly with artisan partners in India." },
              { title: "No time for a shopping trip to India", desc: "Between demanding work schedules, apartment logistics, and coordinating with venues across the city, most NRI brides in New York simply cannot carve out two weeks for an India shopping trip." },
              { title: "Coordinating outfits across boroughs", desc: "Your bridesmaids are in Brooklyn, your parents are on Long Island, and your in-laws are in Flushing. Coordinating measurements, colors, and styles across the city is a project in itself." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#2f2f2f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6f6a63" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT CEREMONYVERSE DOES */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#2f2f2f", textAlign: "center", marginBottom: "16px" }}>
            How CeremonyVerse works for New York families
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", textAlign: "center", maxWidth: "640px", margin: "0 auto 32px" }}>
            We become your eyes and hands in India. Share your vision — we source it, show you live on video, get it custom stitched, inspect it, and ship it to your New York address.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Live video shopping sessions", desc: "Connect via video call with our outfit specialists at artisan workshops across India. See fabrics, embroidery, and colors in real time — not through edited photos or Instagram reels." },
              { title: "Custom stitching to your measurements", desc: "Every outfit is tailored to your exact body measurements. We coordinate sizing for you, your partner, and your entire bridal party — no matter which borough they're in." },
              { title: "Quality inspection before shipping", desc: "Our team personally checks every piece before it leaves India — verifying stitching, embroidery detail, fabric quality, and color match against what you approved on video." },
              { title: "Delivered to your NY door", desc: "Fully insured, tracked shipping from India to anywhere in New York — Manhattan apartments, Long Island homes, or Westchester estates. We handle customs and logistics end to end." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#2f2f2f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6f6a63" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL COMMUNITY */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#2f2f2f", marginBottom: "16px" }}>
            Proudly serving New York's Indian community
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "16px" }}>
            New York is home to an enormous and diverse Indian community. Jackson Heights in Queens remains the heart of the South Asian diaspora, with its saree shops and jewelry stores lining 74th Street. Flushing has a growing Indian population, and Long Island — particularly Nassau County — is home to thousands of Indian-American families who celebrate weddings with full traditional grandeur.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "16px" }}>
            Whether you're a Sikh bride in Richmond Hill, a Bengali couple in Jersey City (just across the river), a Gujarati family on Long Island, or a South Indian bride in Flushing — CeremonyVerse brings India's best wedding outfit artisan partners directly to you.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63" }}>
            Indian Wedding Shopping Made Easy — wherever you are in the New York metro area.
          </p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#2f2f2f", textAlign: "center", marginBottom: "32px" }}>
            Simple, transparent pricing
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { tier: "Free", price: "Free", desc: "Quick consultation call to understand your wedding needs, timeline, and budget. No commitment.", features: ["15-minute discovery call", "Basic sourcing guidance", "Wedding timeline review"] },
              { tier: "Starter", price: "$149", desc: "Ideal for brides who know what they want and need help sourcing one or two key pieces from India.", features: ["1 live video shopping session", "Sourcing for up to 2 outfits", "Basic quality check", "Shipping coordination"] },
              { tier: "Complete", price: "$599", desc: "For brides and grooms who want full sourcing support for their main wedding outfits.", features: ["3 live video shopping sessions", "Sourcing for up to 6 outfits", "Detailed quality inspection", "Custom stitching coordination", "Insured shipping to NY"] },
              { tier: "Grand Wedding", price: "$1,499", desc: "End-to-end outfit sourcing for the entire wedding party — bride, groom, bridesmaids, groomsmen, and family.", features: ["Unlimited video sessions", "Full bridal party coordination", "Up to 20+ outfits sourced", "Priority quality inspection", "Dedicated outfit specialist", "Insured express shipping"] },
            ].map((item) => (
              <div key={item.tier} style={{ background: "#fff", borderRadius: "14px", padding: "28px", border: "1px solid #e6dfd5", display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c7b28a", fontWeight: 500, marginBottom: "6px" }}>{item.tier}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 600, color: "#2f2f2f", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6f6a63", marginBottom: "16px" }}>{item.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", flex: 1 }}>
                  {item.features.map((f) => (
                    <li key={f} style={{ fontSize: "13px", color: "#6f6a63", padding: "4px 0", paddingLeft: "16px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#c7b28a" }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#2f2f2f", textAlign: "center", marginBottom: "32px" }}>
            Frequently asked questions
          </h2>
          {[
            { q: "How long does shipping take from India to New York?", a: "Standard insured shipping takes 10–14 business days to most NY addresses. Express options are available for rush orders. We provide end-to-end tracking from India to your door." },
            { q: "Are your prices better than Jackson Heights stores?", a: "In most cases, yes — because you're working directly with artisan partners in India rather than paying the markup of a New York retail storefront. Plus, the variety and customization options are significantly wider." },
            { q: "What if the outfit doesn't fit?", a: "Every outfit is custom stitched to your exact measurements, so fit issues are uncommon. We also do a detailed measurement and quality check before shipping. If anything needs adjustment, we work with you to resolve it." },
            { q: "Do you deliver to all five boroughs and Long Island?", a: "Yes — we deliver to Manhattan, Brooklyn, Queens, the Bronx, Staten Island, Long Island, Westchester, and anywhere else in the New York metro area." },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#2f2f2f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6f6a63" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#2f2f2f", marginBottom: "16px" }}>
            Ready to start your wedding shopping?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "24px" }}>
            Book a free consultation to tell us about your wedding, your style, and your timeline. We'll take it from there.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20an%20NRI%20bride%20in%20New%20York%20and%20interested%20in%20CeremonyVerse%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
            >
              WhatsApp Us: +1 (215) 341-9990
            </a>
            <a
              href="https://ceremonyverse.com"
              style={{ fontSize: "13px", color: "#6f6a63", textDecoration: "underline" }}
            >
              Or visit ceremonyverse.com to book online
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
