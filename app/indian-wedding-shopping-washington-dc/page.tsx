import Link from "next/link";
import { NorthAmericaCoverage } from "@/components/north-america-coverage";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-washington-dc/",
  title: "Indian Wedding Shopping from India — Washington DC",
  description: "DMV families can research Indian wedding outfits from India with eligible live review, written approvals, and delivery coordination across DC, Maryland, and Virginia.",
  keywords: "Indian wedding shopping Washington DC, DC bridal lehenga, NRI wedding concierge DC, Indian wedding outfits Maryland Virginia, buy Indian wedding outfits DMV, Indian wedding shopping DC area",
});

const serviceSchema = buildServiceSchema({
  name: "Washington DC Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for families in Washington DC, Maryland, and Northern Virginia with eligible live review, written approvals, and delivery coordination.",
  url: "/indian-wedding-shopping-washington-dc/",
  areaServed: "Washington DC, Maryland, Northern Virginia — DMV Area",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Washington DC", url: "/indian-wedding-shopping-washington-dc/" },
]);

export default function WashingtonDCPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          DMV Area &middot; USA &amp; Canada-Wide Service
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping Washington DC &mdash; Serving the DMV Area
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          CeremonyVerse helps DMV families research and source Indian wedding outfits through our strongest working relationships in Surat and Delhi, with other vendors considered when they can be responsibly reviewed.
        </p>
        <Link
          href="/contact/"
          style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
        >
          Schedule a Free 30-Minute Consultation
        </Link>
      </section>

      <NorthAmericaCoverage guideName="Washington, D.C. and the DMV" />

      {/* Why DMV */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why DMV NRI families choose CeremonyVerse
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "Coordinate across the DMV",
                desc: "Families across Washington, Maryland, and Northern Virginia may need to coordinate wedding decisions across several households and schedules. One documented brief keeps item, measurement, approval, and delivery details together.",
              },
              {
                title: "Compare complete written costs",
                desc: "DC, Northern Virginia, and Maryland have Indian boutiques, but local in-stock selection can be limiting for multi-event or full-family orders. Some DMV families drive to New Jersey or New York to shop, while others order online from India and face sizing, quality, and customs uncertainty without a verification process.",
              },
              {
                title: "Federal workers, tech professionals, and diplomats need reliability",
                desc: "Remote review can help families who cannot set aside an international shopping trip. The written scope identifies what CeremonyVerse coordinates, what the vendor provides, and which timing or product details remain estimates.",
              },
              {
                title: "U.S.-based communication",
                desc: "CeremonyVerse is based in the Philadelphia area and operates on Eastern Time. Consultation windows, response timing, and any time-sensitive order steps are confirmed for the selected service rather than promised universally.",
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

      {/* How it works for DMV families */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            How CeremonyVerse works for DMV families
          </h2>
          <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>
              Everything starts with a free 30-minute introductory consultation. Share the ceremonies, party size, timeline, and budget so we can discuss which available service tier may fit. After the website questionnaire is submitted, a WhatsApp scheduling request opens and the available call time is confirmed there.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Depending on the selected tier and item, the process may include live video review or current item media, measurement and custom-order coordination, written approvals, available pre-shipping review, and tracked-delivery support. The written quote identifies the vendor, item, service scope, shipment estimate, and terms before paid work begins.
            </p>
            <p style={{ marginBottom: "16px" }}>
              DMV weddings span many traditions and venues. We begin with your family&apos;s approved ceremony and clothing requirements rather than assuming one set of rules applies to every community.
            </p>
          </div>
        </div>
      </section>

      {/* Serving the DMV Area */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Serving the DMV Area
          </h2>
          <p style={{ textAlign: "center", color: "#4d403a", marginBottom: "32px", fontSize: "17px" }}>
            DMV service areas to discuss with the selected vendor and carrier.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["Washington DC", "Bethesda", "Rockville", "Gaithersburg", "Silver Spring", "Fairfax", "Tysons Corner", "Arlington", "Alexandria", "Reston", "Herndon", "Leesburg", "Ashburn", "McLean", "Falls Church", "Vienna VA", "Germantown", "Columbia MD", "Fredericksburg", "Potomac"].map((loc) => (
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
              { tier: "Free 30-Minute Consultation", price: "Free", desc: "Tell us about your wedding, your outfit needs, and your budget. We'll share how we can help &mdash; no obligation." },
              { tier: "Guided Sourcing", price: "$799", desc: "Live shopping and order coordination for selected wedding outfits, subject to item and vendor availability." },
              { tier: "Full Bridal Concierge", price: "$2,499", desc: "One organized sourcing process for the bride, groom, and wedding party of up to eight people." },
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
            Frequently Asked Questions for DMV NRI Brides
          </h2>
          <div>
            {[
              {
                q: "Do you deliver to Maryland and Virginia?",
                a: "CeremonyVerse can coordinate delivery to an eligible address in Washington, Maryland, or Northern Virginia when the selected vendor and carrier can serve it. The written quote identifies the carrier, service level, shipping estimate, customs responsibilities, and tracking plan. Carrier and customs dates are not guaranteed.",
              },
              {
                q: "How much does a bridal lehenga cost delivered to the DC area?",
                a: "Cost depends on fabric, handwork, customization, vendor, shipment, and any assessed duty. We itemize the product, flat CeremonyVerse tier, shipping, and customs estimate so you can compare the landed quote with DMV-area or out-of-state options.",
              },
              {
                q: "I'm a federal employee getting married in DC &mdash; can you work with my security clearance venue?",
                a: "We can discuss delivery to an eligible home address. Carrier service, customs timing, building or community access rules, and the need for an in-person recipient must be confirmed before shipment.",
              },
              {
                q: "Can you help with outfits for a Northern Virginia Indian wedding?",
                a: "Yes. Northern Virginia families can request the same remote sourcing services. We use the family's approved ceremony, clothing, color, budget, and venue requirements rather than claiming authority over a venue or community-specific tradition.",
              },
              {
                q: "How long before my DC wedding should I start sourcing?",
                a: "Lead time depends on the selected item, vendor capacity, customization, approval timing, carrier, customs, and alteration buffer. Request current written estimates and start early enough to preserve options and a local fitting window; no universal minimum is guaranteed.",
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

      {/* Related outfit pages & regions */}
      <section style={{ padding: "56px 24px", background: "#faf8f5" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#7a6841", marginBottom: "12px" }}>
            Explore More
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
            Outfit sourcing for every DMV ceremony
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "20px" }}>
            From DC bridal lehengas to coordinated family outfits for Northern Virginia celebrations &mdash; one
            documented process for the in-scope selections, approvals, and DMV delivery responsibilities.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/buy-sherwani-from-india-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Groom Sherwanis</Link>
            <Link href="/kanchipuram-silk-sarees-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Kanchipuram Sarees</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridesmaid &amp; Family</Link>
            <Link href="/reception-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
            <Link href="/mehndi-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Mehndi Outfits</Link>
            <Link href="/how-it-works/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>How It Works</Link>
          </div>
          <p style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#7a6841", marginBottom: "10px" }}>
            Serving families across the USA and Canada
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/indian-wedding-shopping-philadelphia/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Philadelphia</Link>
            <Link href="/indian-wedding-shopping-new-york/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>New York</Link>
            <Link href="/indian-wedding-shopping-new-jersey/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>New Jersey</Link>
            <Link href="/indian-wedding-shopping-california/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>California</Link>
            <Link href="/indian-wedding-shopping-texas/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Texas</Link>
            <Link href="/indian-wedding-shopping-georgia/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Georgia</Link>
            <Link href="/indian-wedding-shopping-florida/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Florida</Link>
            <Link href="/indian-wedding-shopping-massachusetts/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Massachusetts</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "16px" }}>
            Serving DC, Maryland &amp; Virginia
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Book a free 30-minute consultation. We&apos;ll review your wedding vision, timeline, and budget and discuss which available service tier may fit. No commitment, no pressure.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact/"
              style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
            >
              Schedule a Free 30-Minute Consultation
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20in%20the%20DC%20area%20and%20interested%20in%20CeremonyVerse."
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
