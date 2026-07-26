import Link from "next/link";
import { SeoNav } from "@/components/seo-nav"
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-guest-outfits-usa/",
  title: "Indian Wedding Guest Outfits \u2014 Sourced from India, Delivered to USA",
  description: "Indian wedding guest outfits sourced from India \u2014 sarees, anarkalis, lehengas, and kurtas for men and women attending Indian weddings in the USA."
});

const serviceSchema = buildServiceSchema({
  name: "Indian Wedding Guest Outfit Sourcing",
  description: "Indian wedding guest outfits sourced from India \u2014 sarees, anarkalis, lehengas, and kurtas for men and women, with custom stitching and US delivery.",
  url: "/indian-wedding-guest-outfits-usa/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Wedding Guest Outfits", url: "/indian-wedding-guest-outfits-usa/" },
]);

export default function IndianWeddingGuestOutfitsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
    
      <SeoNav />

      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Wedding Guest Outfits
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Guest Outfits from India — For NRI Families in the USA
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          Attending an Indian wedding in the US and need the perfect outfit? We source lehengas, sarees, anarkalis, sharara sets, and sherwanis directly from India — live video shopping, custom stitched to your measurements, and delivered to your door.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
            Book Free Consultation
          </Link>
          <a href="https://wa.me/12153419990" style={{ fontSize: "17px", color: "#4d403a", textDecoration: "none" }}>
            WhatsApp: +1 (215) 341-9990
          </a>
        </div>
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
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
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
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
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
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#7a6841", lineHeight: 1 }}>{item.step}</span>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "6px" }}>{item.title}</h3>
                  <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
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
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a" }}>
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
                <p style={{ fontSize: "17px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#7a6841", fontWeight: 600, marginBottom: "8px" }}>{item.tier}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 700, color: "#1f1f1f", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
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
              <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related ceremonies */}
      <section style={{ padding: "48px 24px 8px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a6841", fontWeight: 600, marginBottom: "16px" }}>
            Related ceremonies &amp; outfits
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/buy-sherwani-from-india-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Groom Sherwanis</Link>
            <Link href="/sangeet-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Sangeet Outfits</Link>
            <Link href="/reception-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
            <Link href="/mehndi-outfits-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Mehndi Outfits</Link>
            <Link href="/kanchipuram-silk-sarees-usa/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Kanchipuram Sarees</Link>
            <Link href="/how-it-works/" style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 16px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>How It Works</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px 80px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "14px" }}>
            Stop settling for what&rsquo;s in stock
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Get the same outfit you&rsquo;d want in India, custom stitched to your measurements and delivered to your US door &mdash; without the boutique markup.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}>
              Book Free Consultation
            </Link>
            <a href="https://wa.me/12153419990" style={{ fontSize: "17px", color: "#e8dfd2", textDecoration: "none" }}>
              WhatsApp: +1 (215) 341-9990
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
