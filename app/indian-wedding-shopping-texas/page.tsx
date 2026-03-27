import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Indian Wedding Shopping from India — Serving Texas NRI Families | CeremonyVerse",
  description: "NRI bride in Texas? CeremonyVerse sources bridal lehengas, sherwanis, and Indian wedding outfits from India — live video shopping, custom stitching, delivered to your TX door.",
  keywords: "Indian wedding shopping Texas, NRI bride TX, bridal lehenga Texas, Indian wedding outfits TX, sherwani Texas, Houston Indian wedding, Dallas NRI bride, Plano Indian wedding outfits, Sugar Land Indian wedding, lehenga from India to Texas, CeremonyVerse Texas",
}

export default function IndianWeddingShoppingTexasPage() {
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
            name: "CeremonyVerse — Texas",
            url: "https://ceremonyverse.com/indian-wedding-shopping-texas",
            description:
              "Indian wedding outfit sourcing service for NRI families in Texas. Live video shopping from trusted artisan partners in India, delivered to your TX door.",
            areaServed: {
              "@type": "State",
              name: "Texas",
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
          Serving Texas NRI Families
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#2f2f2f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping from India — Serving Texas NRI Families
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "32px", maxWidth: "620px", margin: "0 auto 32px" }}>
          Planning a grand Indian wedding in Texas? CeremonyVerse connects you with trusted artisan partners across India so you can shop for bridal lehengas, sherwanis, and coordinated family outfits — all through live video, custom stitched, and delivered to your Texas home.
        </p>
        <a
          href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20an%20NRI%20bride%20in%20Texas%20and%20interested%20in%20CeremonyVerse%20services."
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
            The real challenges NRI brides in Texas face
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Hillcroft has limits", desc: "Houston's Hillcroft Avenue — also known as the Mahatma Gandhi District — has Indian boutiques, but the selection is narrow compared to what's available across India. You're picking from existing inventory, not designing your dream outfit." },
              { title: "Texas is spread out", desc: "Unlike the Northeast corridor, Indian communities in Texas are spread across Houston, Dallas, Plano, Sugar Land, Austin, and San Antonio. Driving hours between stores to find the right outfit is exhausting and often fruitless." },
              { title: "No time for an India trip", desc: "Texas NRI families are busy. Between tech jobs in the Dallas corridor, medical careers in Houston's Texas Medical Center, and managing wedding venues that book months in advance, a two-week India trip just isn't realistic." },
              { title: "Online shopping feels risky", desc: "Ordering a bridal lehenga from an Instagram seller you've never met is a gamble. Colors look different on screen. Fabric quality is impossible to judge. And returns to India? Nearly impossible." },
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
            How CeremonyVerse works for Texas families
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", textAlign: "center", maxWidth: "640px", margin: "0 auto 32px" }}>
            We act as your personal wedding shopping team in India. Share your style preferences and budget — we source options, show them to you live on video, handle custom stitching, inspect quality, and ship everything to your Texas address.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Live video shopping sessions", desc: "Join a video call with our outfit specialists at artisan workshops in India. See the actual fabric, embroidery work, and true colors in real time — no filters, no surprises." },
              { title: "Custom stitching to your measurements", desc: "Every outfit is tailored to your exact measurements. We collect sizing details from your entire wedding party — whether they're in Plano, Sugar Land, or anywhere else in Texas." },
              { title: "Quality inspection before shipping", desc: "Before anything leaves India, our team does a hands-on quality check — verifying stitching, embroidery detail, fabric weight, and color accuracy against what you approved." },
              { title: "Delivered to your Texas door", desc: "Insured, tracked shipping from India to any address in Texas. Houston, Dallas, Austin, San Antonio — we handle customs, logistics, and delivery coordination." },
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
            Proudly serving Texas's thriving Indian community
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "16px" }}>
            Texas has one of the fastest-growing Indian-American populations in the country. Houston's Hillcroft corridor and Sugar Land are home to a massive Gujarati, Telugu, and Tamil community. The Dallas-Fort Worth metro — especially Plano, Frisco, and Irving — has become a tech hub attracting thousands of Indian families. Austin's Indian population is growing rapidly as the city's tech industry expands.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63", marginBottom: "16px" }}>
            Whether you're a Telugu bride in Sugar Land planning a traditional pellikuthuru, a Punjabi family in Plano organizing a full week of celebrations, or a Gujarati couple in Houston looking for garba and wedding-day outfits — CeremonyVerse brings India's finest artisan partners to your Texas doorstep.
          </p>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6f6a63" }}>
            Indian Wedding Shopping Made Easy — everything's bigger in Texas, including our commitment to getting your outfits right.
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
              { tier: "Complete", price: "$599", desc: "For brides and grooms who want full sourcing support for their main wedding outfits.", features: ["3 live video shopping sessions", "Sourcing for up to 6 outfits", "Detailed quality inspection", "Custom stitching coordination", "Insured shipping to TX"] },
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
            { q: "How long does shipping take from India to Texas?", a: "Standard insured shipping takes 10–14 business days to most Texas addresses. Express options are available for time-sensitive orders. Full tracking is provided from dispatch to delivery." },
            { q: "Can I get outfits for multiple wedding events?", a: "Absolutely. Many Texas NRI weddings include Mehndi, Sangeet, wedding ceremony, and reception — each requiring different outfits. Our Complete and Grand Wedding tiers are designed for multi-event weddings." },
            { q: "What if the outfit doesn't fit?", a: "Every piece is custom stitched to your measurements, so fit issues are rare. We also perform a pre-shipping measurement verification. If adjustments are needed post-delivery, we work with you to resolve it." },
            { q: "Do you serve all Texas cities?", a: "Yes — we deliver to Houston, Dallas, Plano, Sugar Land, Austin, San Antonio, Frisco, Irving, and every other Texas address. If you have a Texas ZIP code, we can deliver to you." },
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
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20an%20NRI%20bride%20in%20Texas%20and%20interested%20in%20CeremonyVerse%20services."
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
