import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Real Weddings — NRI Families We've Dressed | CeremonyVerse",
  description: "See real NRI wedding stories — bridal lehengas, sherwanis, bridesmaid coordination, and family outfits sourced from India by CeremonyVerse. Real families, real results.",
  keywords: "NRI wedding stories, indian wedding concierge results, real NRI weddings, CeremonyVerse portfolio, indian wedding outfits sourced from india",
}

const weddingStories = [
  {
    accentColor: "#c7b28a",
    type: "4-Day Gujarati & South Indian Christian Wedding",
    couple: "Kaval & April",
    location: "Philadelphia, PA",
    sourced: [
      "Bridal lehenga & reception lehenga",
      "14 bridesmaid outfits",
      "14 groomsmen outfits",
      "Full family outfits for both sides",
      "Kanchipuram silk sarees (personal sourcing trip to Kanchipuram)",
      "Ceremonial items, return gifts & sweets",
      "Welcome bags",
      "Pet outfit",
    ],
    quote: "CeremonyVerse dressed everyone — including our dog.",
    highlight: "28+ coordinated outfits across multiple US states",
  },
  {
    accentColor: "#b89e72",
    type: "4-Day Gujarati Destination Wedding",
    couple: "Karan & Sonal",
    location: "Destination Wedding, Mexico",
    sourced: [
      "Bride & groom outfits for each day of the wedding",
      "Full bridal party coordination",
      "Entire family coordinated per day",
      "2 dog outfits",
      "Ceremonial items, return gifts & sweets",
      "Welcome bags",
    ],
    quote: "Flawless from start to finish.",
    highlight: "4 days of coordinated outfits + destination logistics",
  },
  {
    accentColor: "#d4c09a",
    type: "South Indian Christian Wedding",
    couple: "Charly & Viola",
    location: "Philadelphia, PA",
    sourced: [
      "Bridesmaids outfits",
      "Groom outfit",
    ],
    quote: "Every decision made with care. Our families were blown away.",
    highlight: "Heritage-honoring outfits for an intercultural celebration",
  },
  {
    accentColor: "#c7b28a",
    type: "Gujarati Wedding",
    couple: "Druma & Parin",
    location: "USA",
    sourced: [
      "Pure Kanchipuram silk sarees (Bhamini traveled to Kanchipuram personally)",
      "Custom matching outfits from local boutique",
    ],
    quote: "She traveled to Kanchipuram specifically to source pure silk sarees — the real thing, not a compromise.",
    highlight: "Personal sourcing trip to Kanchipuram for authentic silk",
  },
  {
    accentColor: "#b89e72",
    type: "Large Bridesmaid Coordination",
    couple: "Shilpa",
    location: "USA",
    sourced: [
      "12 bridesmaid outfits coordinated remotely",
      "Full measurements & sizing managed for US bridesmaids",
    ],
    quote: "I didn't have to worry about a single one.",
    highlight: "12 bridesmaids coordinated remotely while bride was in India",
  },
  {
    accentColor: "#d4c09a",
    type: "South Indian Christian Wedding in India",
    couple: "Shincy",
    location: "USA (Wedding in India)",
    sourced: [
      "Bridal outfit sourced from Delhi",
      "Full remote coordination from the US",
      "Cross-timezone fittings & measurement management",
      "End-to-end shipping & logistics to India",
    ],
    quote: "CeremonyVerse sourced my bridal outfit from Delhi for me \u2014 handling everything remotely so I didn\u2019t have to stress while planning from the US.",
    highlight: "Entire bridal outfit sourced & coordinated remotely across US-India time zones",
  },
]

const stats = [
  { number: "50+", label: "Weddings Dressed" },
  { number: "8", label: "Cultural Traditions Served" },
  { number: "15+", label: "US States Delivered To" },
  { number: "100%", label: "Fit Guarantee Honored" },
]

export default function RealWeddingsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 56px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Real Families. Real Weddings.
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Every Wedding Tells a Story — Here Are Some of Ours
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          From 4-day Gujarati celebrations to intimate South Indian Christian ceremonies, every CeremonyVerse wedding is different. What they share: flawless outfits, zero stress, and families who felt taken care of.
        </p>
        <a
          href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
        >
          Plan Your Wedding
        </a>
      </section>

      {/* Wedding Stories */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "10px" }}>
            Wedding Stories
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", textAlign: "center", maxWidth: "560px", margin: "0 auto 40px" }}>
            Each story is different. Every outfit is intentional.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {weddingStories.map((story) => (
              <div
                key={story.couple}
                style={{ background: "#f9f6f3", borderRadius: "16px", border: "1px solid #e6dfd5", overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {/* Accent bar */}
                <div style={{ height: "5px", background: story.accentColor }} />
                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Type label */}
                  <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: story.accentColor, fontWeight: 600, marginBottom: "10px" }}>
                    {story.type}
                  </p>
                  {/* Couple & Location */}
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.45rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "2px" }}>
                    {story.couple}
                  </h3>
                  <p style={{ fontSize: "12px", color: "#6a5c55", marginBottom: "18px", letterSpacing: "0.04em" }}>
                    {story.location}
                  </p>
                  {/* What was sourced */}
                  <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#1f1f1f", fontWeight: 600, marginBottom: "8px" }}>
                    What We Sourced
                  </p>
                  <ul style={{ paddingLeft: "16px", margin: "0 0 20px", flex: 1 }}>
                    {story.sourced.map((item) => (
                      <li key={item} style={{ fontSize: "13px", lineHeight: 1.65, color: "#6a5c55", marginBottom: "3px" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {/* Quote */}
                  <blockquote style={{ margin: "0 0 16px", padding: "14px 16px", background: "#fff", borderLeft: `3px solid ${story.accentColor}`, borderRadius: "0 8px 8px 0" }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem", fontStyle: "italic", color: "#1f1f1f", lineHeight: 1.5, margin: 0 }}>
                      &ldquo;{story.quote}&rdquo;
                    </p>
                  </blockquote>
                  {/* Highlight stat */}
                  <div style={{ background: story.accentColor + "1a", border: `1px solid ${story.accentColor}40`, borderRadius: "8px", padding: "10px 14px", textAlign: "center" }}>
                    <p style={{ fontSize: "12px", fontWeight: 600, color: "#1f1f1f", margin: 0 }}>
                      {story.highlight}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.9rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "40px" }}>
            The Numbers
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{ background: "#f9f6f3", borderRadius: "14px", border: "1px solid #e6dfd5", padding: "32px 20px", textAlign: "center" }}
              >
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.8rem", fontWeight: 600, color: "#c7b28a", margin: "0 0 6px", lineHeight: 1 }}>
                  {stat.number}
                </p>
                <p style={{ fontSize: "13px", color: "#6a5c55", margin: 0, fontWeight: 500 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Wedding Could Be Next CTA */}
      <section style={{ padding: "56px 24px", background: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
            Your Wedding Could Be Next
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.2, marginBottom: "18px" }}>
            Let&apos;s Make Your Wedding Story One Worth Telling
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "32px" }}>
            Every wedding starts with a free consultation. Tell us about your vision, your timeline, and your family — and we&apos;ll show you exactly how we can help.
          </p>
          <a
            href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "14px 34px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none", marginBottom: "20px" }}
          >
            Start Your Free Consultation
          </a>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#6a5c55", marginTop: "24px", fontStyle: "italic" }}>
            Photos coming soon — with our clients&apos; permission, we&apos;ll be adding outfit galleries to each story.
          </p>
        </div>
      </section>
    </div>
  )
}
