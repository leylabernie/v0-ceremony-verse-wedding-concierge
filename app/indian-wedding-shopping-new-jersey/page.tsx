import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Indian Wedding Shopping from India — Serving New Jersey NRI Families | CeremonyVerse",
  description: "NRI bride in New Jersey? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits from India — live video shopping, custom stitching, delivered to your NJ door.",
  keywords: "Indian wedding shopping New Jersey, NRI bride NJ, bridal lehenga New Jersey, Indian wedding outfits NJ, sherwani New Jersey, Edison Indian wedding, Jersey City NRI bride, Parsippany Indian wedding outfits, lehenga from India to NJ, CeremonyVerse New Jersey",
}

export default function IndianWeddingShoppingNewJerseyPage() {
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
            name: "CeremonyVerse — New Jersey",
            url: "https://ceremonyverse.com/indian-wedding-shopping-new-jersey",
            description:
              "Indian wedding outfit sourcing service for NRI families in New Jersey. Live video shopping from trusted artisan partners in India, delivered to your NJ door.",
            areaServed: {
              "@type": "State",
              name: "New Jersey",
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
          Serving New Jersey NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#2f2f2f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving New Jersey NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "32px", maxWidth: "620px", margin: "0 auto 32px" }}>
          Planning an Indian wedding in New Jersey? CeremonyVerse connects you with trusted artisan partners across India so you can shop for bridal lehengas, sherwanis, and family outfits — all through live video calls, without traveling to India.
        </p>
        <a
          href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20an%20NRI%20bride%20in%20New%20Jersey%20and%20interested%20in%20CeremonyVerse%20services."
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
            The real challenges NRI brides in New Jersey face
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Limited local options", desc: "Indian boutiques along Oak Tree Road in Edison or in Jersey City offer a decent selection — but the variety, customization, and pricing simply cannot match what's available in India. You end up choosing from whatever's in stock." },
              { title: "No time to fly to India", desc: "Between work commitments, venue bookings, and coordinating with family across time zones, fitting a shopping trip to India into your schedule feels impossible — especially for NRI families based in New Jersey." },
              { title: "Trusting online sellers is risky", desc: "Instagram sellers and random online shops make big promises, but you can't feel the fabric or check embroidery quality through a filtered photo. Many NRI brides have been burned by what arrives versus what was shown." },
              { title: "Coordinating family outfits across continents", desc: "Your bridesmaids are in Jersey City, your parents are in Parsippany, and your in-laws are in India. Getting everyone measured, matched, and dressed cohesively is a logistical headache." },
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
            How CeremonyVerse works for New Jersey families
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", textAlign: "center", maxWidth: "640px", margin: "0 auto 32px" }}>
            We act as your personal wedding shopping team in India. You tell us what you want — we source it, show it to you live on video, handle quality checks, custom stitching, and ship it to your New Jersey address.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Live video shopping sessions", desc: "Join a live video call with our outfit specialists at trusted artisan workshops across India. See the real fabric, embroidery detail, and color — not a filtered photo." },
              { title: "Custom stitching to your measurements", desc: "Every outfit is stitched to your exact measurements. We collect sizing details from you and your bridal party, coordinate with craftspeople, and ensure the fit is right." },
              { title: "Quality inspection before shipping", desc: "Before anything ships to New Jersey, our team inspects every piece — checking stitching, embroidery, fabric quality, and color accuracy against what you approved." },
              { title: "Delivered to your NJ door", desc: "Fully insured shipping from India to your New Jersey address. Track your order every step of the way. No customs headaches — we handle all of it." },
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
            Proudly serving New Jersey's Indian community
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "16px" }}>
            New Jersey is home to one of the largest Indian communities in the United States. From the bustling Indian corridor along Oak Tree Road in Edison and Iselin to the growing South Asian families in Jersey City, Parsippany, and Princeton, NJ has a vibrant desi community with deep cultural roots.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "16px" }}>
            Whether you're a Gujarati family in Edison planning a traditional garba and wedding, a Punjabi bride in Jersey City dreaming of a statement red lehenga, or a South Indian family in Parsippany looking for Kanchipuram silk sarees — CeremonyVerse brings the best of India's wedding outfit artisan partners to your doorstep.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63" }}>
            Indian Wedding Shopping Made Easy — no matter where in New Jersey you call home.
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
              { tier: "Complete", price: "$599", desc: "For brides and grooms who want full sourcing support for their main wedding outfits.", features: ["3 live video shopping sessions", "Sourcing for up to 6 outfits", "Detailed quality inspection", "Custom stitching coordination", "Insured shipping to NJ"] },
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
            { q: "How long does shipping take from India to New Jersey?", a: "Standard insured shipping takes 10–14 business days to most NJ addresses. Express shipping options are available for urgent orders. We provide full tracking from dispatch to delivery." },
            { q: "Can I visit the boutiques virtually before committing?", a: "Yes — that's exactly what our live video shopping sessions are for. You join a video call with our outfit specialists at artisan workshops in India and see everything in real time before making any decision." },
            { q: "What if the outfit doesn't fit when it arrives?", a: "Because every piece is custom stitched to your measurements, fit issues are rare. We also do a pre-shipping quality and measurement check. If adjustments are needed, we work with you to resolve it." },
            { q: "Do you serve all of New Jersey?", a: "Yes — we deliver to every address in New Jersey, from Edison and Jersey City to Parsippany, Princeton, Cherry Hill, and everywhere in between." },
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
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20an%20NRI%20bride%20in%20New%20Jersey%20and%20interested%20in%20CeremonyVerse%20services."
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
