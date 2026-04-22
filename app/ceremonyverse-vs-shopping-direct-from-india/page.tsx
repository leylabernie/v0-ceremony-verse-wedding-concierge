import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "CeremonyVerse vs Shopping Direct from India | Compare",
  description: "Should you buy Indian wedding outfits directly from India or use CeremonyVerse's concierge? Compare risks, costs, and outcomes side by side.",
  alternates: {
    canonical: "https://ceremonyverse.com/ceremonyverse-vs-shopping-direct-from-india",
  },
  keywords: "buy lehenga from India vs concierge, Indian wedding shopping comparison, CeremonyVerse vs direct shopping India",
  openGraph: {
    title: "CeremonyVerse vs Shopping Direct from India | Compare",
    description: "Should you buy Indian wedding outfits directly from India or use CeremonyVerse's concierge? Compare risks, costs, and outcomes side by side.",
    type: "website",
    url: "https://ceremonyverse.com/ceremonyverse-vs-shopping-direct-from-india",
  },
};

const comparisonRows = [
  {
    factor: "Vendor Selection",
    direct: "You find vendors via Instagram, WhatsApp groups, or family referrals. No vetting.",
    cv: "We work only with artisan partners we know personally and have vetted over years.",
  },
  {
    factor: "Seeing the Product",
    direct: "Photos only — often edited, filtered, or stolen from other vendors.",
    cv: "Live video call — you see the exact fabric draped, embroidery up close, colors in natural light.",
  },
  {
    factor: "Sizing",
    direct: "You send measurements and hope. Standard Indian sizes don't match US body types.",
    cv: "We collect 15+ measurements, add strategic ease allowances, and guarantee the fit.",
  },
  {
    factor: "Payment",
    direct: "Full payment upfront, or 50/50. No protection if something goes wrong.",
    cv: "Milestone-based: 25% deposit, 35% after approval, 30% after inspection, 10% on delivery.",
  },
  {
    factor: "Quality Control",
    direct: "You see it when it arrives. If it's wrong, there's no recourse.",
    cv: "Pre-shipping inspection in India. Nothing ships until you approve.",
  },
  {
    factor: "Customs & Shipping",
    direct: "You figure it out yourself — duties, documentation, insurance.",
    cv: "We handle all documentation, advise on duties upfront (12–27%), and fully insure every shipment.",
  },
  {
    factor: "Coordination",
    direct: "You manage every vendor, every timeline, every WhatsApp thread.",
    cv: "One point of contact. We manage all vendors, timelines, and communication.",
  },
  {
    factor: "If Something Goes Wrong",
    direct: "You're on your own, 8,000 miles away.",
    cv: "US-based accountability. Fit guarantee with alteration cost coverage.",
  },
]

export default function CeremonyVerseVsDirectPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 56px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Honest Comparison
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          CeremonyVerse vs. Shopping Directly from India
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          Most NRI brides start by trying to shop directly — a contact through a cousin, an Instagram vendor with beautiful photos, a WhatsApp group recommendation. Most of them eventually call us after something goes wrong. We'd rather you skip that part.
        </p>
        <a
          href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
        >
          Book Free Consultation
        </a>
      </section>

      {/* Side-by-Side Comparison */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "40px" }}>
            How they compare, factor by factor
          </h2>

          {/* Column headers */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px", maxWidth: "860px", margin: "0 auto 16px" }}>
            <div style={{ background: "#f9f6f3", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "16px 20px", textAlign: "center" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6a5c55", marginBottom: "4px", fontWeight: 500 }}>Option A</p>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", fontWeight: 600, color: "#1f1f1f" }}>Shopping Direct from India</p>
            </div>
            <div style={{ background: "#c7b28a", border: "1px solid #c7b28a", borderRadius: "12px", padding: "16px 20px", textAlign: "center" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: "4px", fontWeight: 500 }}>Option B</p>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", fontWeight: 600, color: "#fff" }}>With CeremonyVerse</p>
            </div>
          </div>

          {/* Comparison rows */}
          <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
            {comparisonRows.map((row) => (
              <div key={row.factor}>
                <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c7b28a", fontWeight: 600, marginBottom: "8px", paddingLeft: "4px" }}>
                  {row.factor}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div style={{ background: "#f9f6f3", borderRadius: "12px", padding: "18px 20px", border: "1px solid #e6dfd5" }}>
                    <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#6a5c55", margin: 0 }}>{row.direct}</p>
                  </div>
                  <div style={{ background: "#fdf9f4", borderRadius: "12px", padding: "18px 20px", border: "1px solid #c7b28a" }}>
                    <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#1f1f1f", margin: 0 }}>{row.cv}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Cost Section */}
      <section style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "28px" }}>
            The real cost of shopping direct
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55", marginBottom: "24px" }}>
            The outfit itself may look cheaper when shopping direct — and sometimes it is. But the sticker price rarely tells the full story. Before you decide, factor in:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              { label: "Wrong item received", detail: "Total loss. No refund, no recourse, no time to reorder." },
              { label: "Sizing is off", detail: "Alterations in the US can run $200–$500, and not every alteration is fixable." },
              { label: "Quality doesn't match photos", detail: "Re-ordering means double the cost, double the wait, and half the runway before your wedding." },
              { label: "Customs mistakes", detail: "Incorrect documentation can result in delays, penalties, or seizure of the shipment." },
              { label: "Your time", detail: "Dozens of hours managing vendors across time zones, language barriers, and WhatsApp threads — often with no result." },
            ].map((item) => (
              <div key={item.label} style={{ background: "#f9f6f3", borderRadius: "12px", padding: "18px 22px", border: "1px solid #e6dfd5", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ color: "#c7b28a", fontSize: "18px", lineHeight: 1, marginTop: "2px", flexShrink: 0 }}>—</span>
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 600, color: "#1f1f1f", marginBottom: "4px" }}>{item.label}</p>
                  <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55", margin: 0 }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.35rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", fontStyle: "italic" }}>
            "The cheapest option isn't always the one with the lowest price tag."
          </p>
        </div>
      </section>

      {/* When Direct Shopping Works */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            When shopping direct actually makes sense
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <p style={{ marginBottom: "16px" }}>
              We'll be straight with you: if you have a trusted family member in India who can physically visit shops, handle quality inspections, negotiate pricing, manage shipping logistics, and be available to fix problems when they arise — shopping direct can work beautifully. That person on the ground is the entire infrastructure that makes it viable.
            </p>
            <p style={{ marginBottom: "16px" }}>
              CeremonyVerse exists for families who don't have that — or whose family contact is already stretched thin managing their own wedding responsibilities. We also work with families whose contacts in India know fashion but don't know customs, documentation, or US sizing expectations.
            </p>
            <p>
              If your situation is the former, trust your person. If it's the latter, that's exactly what we're here for.
            </p>
          </div>
        </div>
      </section>

      {/* What CeremonyVerse Is NOT */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            What CeremonyVerse is not
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              {
                label: "Not a marketplace",
                desc: "We don't list outfits for sale. There's no catalog to browse, no cart to fill. Every sourcing engagement is custom.",
              },
              {
                label: "Not a boutique",
                desc: "We don't stock inventory. The outfits we source are made to order, by hand, by artisan partners we've worked with for years.",
              },
              {
                label: "Not a wedding planner",
                desc: "We don't manage your venue, vendors, or event logistics. We manage one thing — sourcing your wedding outfits from India — and we do it exceptionally well.",
              },
              {
                label: "We are a concierge",
                desc: "We manage the entire outfit sourcing process on your behalf: vendor selection, live viewing, measurement collection, quality inspection, customs documentation, and US delivery.",
              },
            ].map((item) => (
              <div key={item.label} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.label}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6a5c55", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "56px 24px", textAlign: "center", background: "#fff" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Skip the risk. Start with a free consultation.
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "28px" }}>
            Tell us about your wedding, your outfit vision, and your timeline. We'll walk you through exactly how CeremonyVerse works — and whether we're the right fit for your family.
          </p>
          <a
            href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", background: "#c7b28a", color: "#fff", padding: "14px 32px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
