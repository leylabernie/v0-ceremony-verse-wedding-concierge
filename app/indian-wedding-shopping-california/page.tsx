import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Indian Wedding Shopping from India — Serving California NRI Families | CeremonyVerse",
  description: "NRI bride in California? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits from India — live video shopping, custom stitching, delivered to your CA door.",
  keywords: "Indian wedding shopping California, NRI bride CA, bridal lehenga California, Indian wedding outfits CA, sherwani California, Bay Area Indian wedding, Fremont NRI bride, Sunnyvale Indian wedding outfits, Los Angeles Indian wedding, lehenga from India to California, CeremonyVerse California",
}

export default function IndianWeddingShoppingCaliforniaPage() {
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
            name: "CeremonyVerse — California",
            url: "https://ceremonyverse.com/indian-wedding-shopping-california",
            description:
              "Indian wedding outfit sourcing service for NRI families in California. Live video shopping from trusted artisan partners in India, delivered to your CA door.",
            areaServed: {
              "@type": "State",
              name: "California",
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
          Serving California NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#2f2f2f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving California NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "32px", maxWidth: "620px", margin: "0 auto 32px" }}>
          Planning an Indian wedding in California? CeremonyVerse is your personal wedding shopping team in India — sourcing bridal lehengas, sherwanis, and coordinated family outfits through live video calls, with custom stitching and delivery to your California home.
        </p>
        <a
          href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20an%20NRI%20bride%20in%20California%20and%20interested%20in%20CeremonyVerse%20services."
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
            The real challenges NRI brides in California face
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Bay Area stores are pricey", desc: "Indian boutiques in Fremont and Sunnyvale carry a selection — but Bay Area retail markups mean you're paying significantly more for outfits that may not match the quality or variety available directly from artisan partners in India." },
              { title: "LA's options are scattered", desc: "Los Angeles has Indian stores in Artesia and Cerritos, but they're spread out across the sprawl. Spending full weekends driving between stores to find the right outfit — and often leaving empty-handed — is a common frustration." },
              { title: "A 20-hour flight to India isn't practical", desc: "California is farther from India than the East Coast. A shopping trip means a longer flight, more jet lag, and more time away from work. For NRI brides juggling careers in Silicon Valley or Hollywood, it's rarely feasible." },
              { title: "Instagram shopping is a gamble", desc: "Gorgeous posts and reels from Indian designers look amazing — but what arrives at your Sunnyvale apartment can look very different. Without seeing the actual fabric and stitching, you're taking a risk on one of the most important outfits of your life." },
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
            How CeremonyVerse works for California families
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", textAlign: "center", maxWidth: "640px", margin: "0 auto 32px" }}>
            We become your personal shoppers in India. Tell us your vision and budget — we source options from trusted artisan partners, show you everything live on video, handle custom stitching and quality checks, and ship to your California address.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Live video shopping sessions", desc: "Join a video call with our outfit specialists at artisan workshops across India. See fabrics, embroidery, and real colors in real time — scheduled around Pacific Time so it works with your California schedule." },
              { title: "Custom stitching to your measurements", desc: "Every outfit is tailored to your exact measurements. We coordinate sizing for you, your partner, and your entire wedding party — whether they're in Fremont, Los Angeles, or San Diego." },
              { title: "Quality inspection before shipping", desc: "Our team personally inspects every piece before it ships — checking stitching, embroidery detail, fabric quality, and color accuracy against what you approved during video sessions." },
              { title: "Delivered to your CA door", desc: "Fully insured, tracked shipping from India to any California address. Bay Area condos, LA homes, San Diego apartments — we handle customs clearance and last-mile delivery." },
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
            Proudly serving California's Indian community
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "16px" }}>
            California is home to the largest Indian-American population of any state. The Bay Area alone — Fremont, Sunnyvale, Santa Clara, and Cupertino — has one of the densest concentrations of Indian families in the country, fueled by Silicon Valley's tech industry. Los Angeles, with its Artesia and Cerritos Indian corridors, has a vibrant and diverse South Asian community spanning Gujarati, Punjabi, Telugu, Tamil, and Bengali families.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "16px" }}>
            Whether you're a tech professional in Sunnyvale planning a fusion wedding, a Punjabi bride in Fresno organizing a full traditional celebration, a South Indian family in the Bay Area searching for Kanchipuram silk sarees, or a Bollywood-loving couple in LA wanting statement outfits — CeremonyVerse connects you with India's finest artisan partners without leaving California.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63" }}>
            Indian Wedding Shopping Made Easy — from the Bay to LA and everywhere in between.
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
              { tier: "Complete", price: "$599", desc: "For brides and grooms who want full sourcing support for their main wedding outfits.", features: ["3 live video shopping sessions", "Sourcing for up to 6 outfits", "Detailed quality inspection", "Custom stitching coordination", "Insured shipping to CA"] },
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
            { q: "How long does shipping take from India to California?", a: "Standard insured shipping takes 10–14 business days to most California addresses. Express options are available for rush orders. We provide full tracking from India to your doorstep." },
            { q: "Do video sessions work with Pacific Time?", a: "Yes — we schedule sessions that work with your California schedule. Our outfit specialists are flexible with timing, and many sessions happen during your evening hours (which is morning in India)." },
            { q: "What if the outfit doesn't fit?", a: "Every piece is custom stitched to your exact measurements, making fit issues uncommon. We also do a detailed pre-shipping measurement check. If any adjustments are needed, we coordinate a resolution." },
            { q: "Do you serve all of California?", a: "Yes — we deliver to every California address. Bay Area (Fremont, Sunnyvale, San Jose, San Francisco), Los Angeles, San Diego, Sacramento, Fresno, and everywhere in between." },
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
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20an%20NRI%20bride%20in%20California%20and%20interested%20in%20CeremonyVerse%20services."
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
