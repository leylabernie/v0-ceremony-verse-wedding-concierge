import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

export const metadata = {
  title: "Indian Wedding Guest Outfits from India | NRI USA | CeremonyVerse",
  description: "Need Indian wedding guest outfits in the USA? CeremonyVerse sources lehengas, sarees, anarkalis, and sherwanis from India — live video shopping, custom stitching, delivered to your US door.",
  alternates: {
    canonical: "https://ceremonyverse.com/indian-wedding-guest-outfits-usa",
  },
  keywords: "indian wedding guest outfits usa, lehenga for wedding guest usa, indian wedding guest dress usa, NRI wedding guest outfit, buy indian outfit for wedding usa",
  openGraph: {
    title: "Indian Wedding Guest Outfits from India | NRI USA | CeremonyVerse",
    description: "Need Indian wedding guest outfits in the USA? CeremonyVerse sources lehengas, sarees, anarkalis, and sherwanis from India — live video shopping, custom stitching, delivered to your US door.",
    type: "website",
    url: "https://ceremonyverse.com/indian-wedding-guest-outfits-usa",
  
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

export default function IndianWeddingGuestOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Wedding Guest Outfits
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Guest Outfits from India — For NRI Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Attending an Indian wedding in the US and need the perfect outfit? We source lehengas, sarees, anarkalis, sharara sets, and sherwanis directly from India — live video shopping, custom stitched to your measurements, and delivered to your door.
        </p>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Why guests struggle */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why finding a wedding guest outfit in the US is harder than it should be
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { title: "Limited Selection at US Boutiques", desc: "Most Indian boutiques in the US carry a narrow range of styles, colors, and sizes. You end up choosing from whatever's available — not what actually suits you or the occasion." },
              { title: "High Markups on Imported Pieces", desc: "Outfits sold through US-based stores carry significant markups — often 2–3x what you'd pay sourcing directly from India. You're paying for the middleman, not the quality." },
              { title: "No Way to Coordinate with Family", desc: "When family members in India are shopping locally and you're in the US, it's nearly impossible to coordinate colors, styles, and formality levels across everyone." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we source for guests */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What we source for wedding guests
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Lehengas", desc: "Semi-formal and formal lehengas perfect for sangeet, reception, or main ceremony. Sourced in the colors and embroidery styles that match the event's dress code." },
              { title: "Sarees", desc: "Silk sarees, chiffon sarees, and designer drapes — sourced from across India's regional weaving traditions. Pre-stitched blouse included, custom to your measurements." },
              { title: "Anarkalis & Gowns", desc: "Floor-length anarkalis and Indo-Western gowns for guests who want elegance without the complexity of a lehenga or saree." },
              { title: "Sharara Sets", desc: "Relaxed yet festive sharara and gharara sets — ideal for Mehndi, Haldi, or daytime ceremonies where comfort matters." },
              { title: "Sherwanis for Male Guests", desc: "Sherwanis, Nehru jackets, and kurta-pajama sets for male guests. Coordinated with the family's color palette if needed." },
              { title: "Coordinated Family Sets", desc: "Matching or complementary outfits for the entire family — parents, siblings, and extended family — all sourced together so everyone looks cohesive." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            How it works
          </h2>
          <div style={{ display: "grid", gap: "24px" }}>
            {[
              { step: "01", title: "Live Video Shopping", desc: "We connect you with trusted partners in India via live video call. You see the fabric, embroidery, and drape in real time — no guessing from static photos." },
              { step: "02", title: "Custom Stitching", desc: "Every outfit is custom stitched to your exact measurements. No alterations needed when it arrives — it's made for you from the start." },
              { step: "03", title: "Delivered to Your US Door", desc: "We handle packaging, international shipping, and customs clearance. Your outfit arrives at your home in the US, ready to wear." },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#c7b28a", lineHeight: 1 }}>{item.step}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: "15px", color: "#1f1f1f", marginBottom: "6px" }}>{item.title}</h3>
                  <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline notice */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", background: "#fff8ed", border: "1px solid #e6dfd5", borderRadius: "14px", padding: "28px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
            Planning your timeline
          </h2>
          <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6a5c55" }}>
            Wedding guests often start looking for outfits later than brides — but sourcing from India still takes time. Between live video sessions, fabric selection, custom stitching, and international shipping, plan for a <strong style={{ color: "#1f1f1f" }}>minimum of 8–10 weeks</strong> from your first consultation to delivery. The earlier you start, the more options you'll have.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Pricing
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { tier: "Free Consultation", price: "Free", desc: "A 20-minute call to understand your needs, timeline, and budget. No commitment." },
              { tier: "Style Guide", price: "$149", desc: "A personalized lookbook with curated outfit recommendations based on your event, body type, and preferences." },
              { tier: "Guided Sourcing", price: "$599", desc: "We manage the full sourcing process — live video sessions, measurements, stitching coordination, and delivery for one outfit." },
              { tier: "Full Bridal Concierge", price: "$1,499", desc: "End-to-end outfit management for the bride or entire family across all wedding events. Multiple outfits, full coordination." },
            ].map((item) => (
              <div key={item.tier} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <p style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c7b28a", fontWeight: 600, marginBottom: "8px" }}>{item.tier}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#1f1f1f", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Guest outfit FAQ
          </h2>
          {[
            { q: "I'm attending a wedding in 6 weeks — is that enough time?", a: "It's tight. We recommend a minimum of 8–10 weeks for sourcing from India. If you're under that timeline, reach out immediately and we'll let you know what's realistic based on your needs." },
            { q: "Can you help me figure out what to wear?", a: "Yes — our Style Guide service ($149) includes a personalized lookbook based on the event type, dress code, your preferences, and body type. Or start with a free consultation to talk it through." },
            { q: "I need outfits for my whole family. Can you coordinate everything?", a: "Absolutely. Coordinated family sets are one of our most popular requests. We collect everyone's measurements, source complementary outfits, and ship everything together." },
            { q: "How do measurements work if I'm in the US?", a: "We send you a simple measurement guide. You can measure at home or visit a local tailor to get your numbers. We review everything before stitching begins." },
            { q: "What if I don't like what I see on the video call?", a: "No pressure to buy. The live video session lets you see multiple options in real time. If nothing feels right, we keep looking — or we adjust the brief and schedule another session." },
          ].map((item) => (
            <div key={item.q} style={{ borderBottom: "1px solid #e6dfd5", padding: "18px 0" }}>
              <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Ready to find your outfit?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "28px" }}>
            Start with a free consultation — we'll help you figure out what you need, what's realistic for your timeline, and how to get it sourced from India.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <a href="/" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
              Book Free Consultation — ceremonyverse.com
            </a>
            <a href="https://wa.me/12153419990" style={{ fontSize: "14px", color: "#6a5c55", textDecoration: "none" }}>
              WhatsApp: +1 (215) 341-9990
            </a>
          </div>
        </div>
      </section>
    <SeoFooter />
    </div>
  )
}