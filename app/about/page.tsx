import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "About Bhamini — Founder of CeremonyVerse",
  description: "Meet Bhamini, founder of CeremonyVerse — the US-based Indian wedding shopping concierge for NRI families. Based in Philadelphia, sourcing directly from India.",
  alternates: {
    canonical: "https://ceremonyverse.com/about",
  },
  openGraph: {
    title: "About Bhamini — Founder of CeremonyVerse",
    description: "Meet Bhamini, founder of CeremonyVerse — the US-based Indian wedding shopping concierge for NRI families. Based in Philadelphia, sourcing directly from India.",
    type: "website",
    url: "https://ceremonyverse.com/about",
  };

export default function AboutPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Meet Your Concierge
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          I Started CeremonyVerse Because I Watched Too Many NRI Brides Get Burned
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          I'm Bhamini, and I built the service I wish had existed — a US-based Indian wedding shopping concierge that actually shows up for NRI families, from Philadelphia to wherever your family is scattered across the country.
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Founder Story */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            Why I built this
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              I started CeremonyVerse because I watched too many NRI brides get burned — beautiful outfits that arrived looking nothing like the photo, sherwanis that didn't fit, families in different states with no coordination, and vendors who disappeared after payment. I built the service I wish had existed.
            </p>
            <p style={{ marginBottom: "16px" }}>
              NRI families planning Indian weddings in the US are navigating two worlds at once. You want the real thing — authentic Kanchipuram silk, a sherwani cut to actually fit a man who grew up eating American food, bridesmaids sarees that all match because they came from the same weavers. But you're doing it from thousands of miles away, with no one on the ground to advocate for you.
            </p>
            <p style={{ marginBottom: "16px" }}>
              That's where I come in. I travel to India. I sit across from the weavers. I do the live video calls so you can see the saree in real light, not a studio photograph. I collect every measurement. I coordinate the shipping. And I'm here in Philadelphia when something needs to be resolved — not in a different time zone, not behind a contact form.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            How the concierge model works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { title: "Live Video Sourcing", desc: "I connect you directly with artisans and weavers in India via live video — so you see the actual fabric, the real color, the true weight. No catalog photos. No surprises when the box arrives." },
              { title: "Custom Stitching", desc: "Every blouse, every sherwani, every churidar is custom stitched to your exact measurements. I guide you through measuring, work with trusted master tailors, and handle all the back-and-forth so you don't have to." },
              { title: "Quality Checks Before Shipping", desc: "Before anything ships to the US, I verify quality — stitching, color accuracy, fit checks where possible. If something isn't right, it gets corrected in India, not after it's already in your living room." },
              { title: "US Delivery & Accountability", desc: "Everything ships directly to your US address. And if there's a problem, you're calling me — someone based in Philadelphia, in the same time zone, who has a real stake in making it right." },
              { title: "Multi-Family Coordination", desc: "I coordinate outfits across families in different states, with different ceremony roles and different body types. One point of contact. No group chat chaos. No one person becoming the de facto coordinator for 30 relatives." },
              { title: "Full-Wedding Scope", desc: "Bride, groom, bridesmaids, groomsmen, parents, grandparents, flower girls — I cover every ceremony outfit across every ceremony day, so your whole wedding looks intentional and coordinated." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Weddings */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            Real weddings I've worked on
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              <strong style={{ color: "#1f1f1f", fontWeight: 600 }}>Kaval &amp; April</strong> — A 4-day celebration blending Gujarati and South Indian Christian traditions, with 14 bridesmaids and groomsmen spread across multiple states. I made a trip to Kanchipuram specifically for this wedding to source silk for the family sarees and ensure every piece matched across ceremonies.
            </p>
            <p style={{ marginBottom: "16px" }}>
              <strong style={{ color: "#1f1f1f", fontWeight: 600 }}>Karan &amp; Sonal</strong> — A destination wedding in Mexico. Two dogs included in the celebration, zero outfit disasters. Coordinating Indian wedding attire for a destination event requires even more advance planning — every piece needed to arrive early enough to account for any adjustments.
            </p>
            <p style={{ marginBottom: "16px" }}>
              <strong style={{ color: "#1f1f1f", fontWeight: 600 }}>Charly &amp; Viola</strong> — A South Indian Christian wedding right here in Philadelphia. Local couple, full concierge treatment — from church ceremony sarees to reception outfits, all sourced directly from India.
            </p>
            <p style={{ marginBottom: "16px" }}>
              <strong style={{ color: "#1f1f1f", fontWeight: 600 }}>Dhan &amp; Christina</strong> — A wedding that required careful bridging of two family traditions and precise coordination for a large extended family across different cities.
            </p>
            <p style={{ marginBottom: "16px" }}>
              <strong style={{ color: "#1f1f1f", fontWeight: 600 }}>Druma &amp; Parin</strong> — Kanchipuram silk sarees were central to this wedding. I sourced directly from the weavers — the only place authentic Kanchipuram silk is actually made — so the family received genuine handwoven silk with real zari, not a department store approximation.
            </p>
            <p style={{ marginBottom: "0" }}>
              I've also coordinated 12+ bridesmaid sets across multiple weddings — matching sarees or churidars in consistent color families, collected from a single artisan to ensure there's no variation in dye or weave across the group.
            </p>
          </div>
        </div>
      </section>

      {/* Why I'm Different */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why I'm different from every other option
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { title: "I'm US-based", desc: "I'm in Philadelphia. When you have a problem — a blouse that doesn't fit, a color that looks off, a delivery that's running late — you're calling someone in your time zone who answers. There's no 'submit a ticket' and wait 72 hours." },
              { title: "I actually travel to India", desc: "I've been to Kanchipuram. I know the weavers by name. When I tell you a saree is genuine Kanchipuram silk with real zari, it's because I watched it being made. This isn't a drop-shipping operation." },
              { title: "I'm not a marketplace", desc: "I don't list vendors and take a commission. I work exclusively for you — sourcing, vetting, negotiating, and coordinating on your behalf. If a vendor isn't performing, I replace them. Your interests come first." },
              { title: "I'm not a boutique", desc: "You're not choosing from whatever's in stock. Every piece is sourced fresh for your wedding — your colors, your silhouette, your ceremony requirements, your measurements. Nothing is off-the-rack." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Let's talk about your wedding
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "24px" }}>
            The free consultation is genuinely free — no pitch, no pressure. Tell me about your ceremonies, your family, your timeline, and your vision. I'll tell you honestly what's possible and what it would take. Most families leave that first call feeling like they finally have a plan.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Book Free Consultation
          </a>
          <p style={{ fontSize: "13px", color: "#6a5c55", marginTop: "16px" }}>
            Or message directly on WhatsApp: <strong style={{ color: "#1f1f1f" }}>+1 (215) 341-9990</strong>
          </p>
        </div>
      </section>
    </div>
  )
}
