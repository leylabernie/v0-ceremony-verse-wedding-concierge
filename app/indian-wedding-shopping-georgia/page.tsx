import Link from "next/link";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-georgia/",
  title: "Indian Wedding Shopping from India — Georgia",
  description: "Atlanta and Georgia families can source bridal, groom, and family wedding outfits from India with live review, custom stitching, and delivery coordination.",
  keywords: "Indian wedding shopping Georgia, Atlanta bridal lehenga, Indian wedding outfits Atlanta GA, NRI wedding concierge Georgia, buy Indian wedding outfits Georgia, Indian wedding shopping Atlanta",
});

const serviceSchema = buildServiceSchema({
  name: "Georgia Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for NRI families in Georgia and the greater Atlanta area — with live video shopping from India and doorstep delivery.",
  url: "/indian-wedding-shopping-georgia/",
  areaServed: "Atlanta, GA — Greater Atlanta Area, Sandy Springs, Roswell, Johns Creek, Alpharetta, Marietta, Duluth, Suwanee, Peachtree Corners",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Georgia", url: "/indian-wedding-shopping-georgia/" },
]);

export default function GeorgiaPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Serving Georgia Families · Remote India Shopping
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping Georgia — NRI Bridal Concierge Atlanta
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          CeremonyVerse helps Georgia families research and source Indian wedding outfits through our strongest working relationships in Surat and Delhi, with other vendors considered when they can be responsibly reviewed.
        </p>
        <Link
          href="/contact/"
          style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
        >
          Book Free Consultation
        </Link>
      </section>

      {/* Why Georgia */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why Georgia NRI families choose CeremonyVerse
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "Real people, not a faceless website",
                desc: "CeremonyVerse is run by Bhamini — an NRI mother who has coordinated her own sons' weddings. When you book a consultation, you're talking to someone who understands the Indian wedding experience firsthand, not a call center agent reading a script. Your time zone, your schedule, your concerns.",
              },
              {
                title: "Atlanta's Indian community is booming",
                desc: "The Atlanta metro area has one of the fastest-growing Indian-American populations in the US — from Sandy Springs and Johns Creek to Alpharetta and Peachtree Corners. With that growth comes more Indian weddings, more demand for authentic outfits, and more families frustrated by the limited local shopping options.",
              },
              {
                title: "Limited local shopping options in Georgia",
                desc: "Unlike New Jersey or Silicon Valley, Atlanta doesn't have a dense corridor of Indian wedding boutiques. The few shops along Buford Highway carry limited inventory, and ordering custom pieces means either traveling out of state or ordering online from India — where scams, wrong sizing, and quality issues are common. CeremonyVerse eliminates all of that.",
              },
              {
                title: "Same-day access for consultations",
                desc: "We offer consultation times that work for your schedule — not 12-hour time zone differences. Need to discuss an urgent change to your order? WhatsApp us and get a response the same business day. Try that with a vendor in Surat at midnight their time.",
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

      {/* How it works for Georgia families */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            How CeremonyVerse works for Georgia families
          </h2>
          <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>
              Everything starts with a free 30-minute consultation. You tell us about your wedding — ceremonies, party size, timeline, budget. We tell you honestly what's achievable and which service tier fits. No sales pressure, no inflated promises. You can schedule consultations around EST — evenings, weekends, whatever works for your Georgia schedule.
            </p>
            <p style={{ marginBottom: "16px" }}>
              From there, we set up live video shopping sessions with our team in India. You see actual outfits — fabric, embroidery, color in natural light — and pick exactly what you want. Your measurements are taken on a video call (not a generic sizing chart), and everything is custom stitched in India. Before it ships, our family in Surat does a quality inspection and sends you photos. You approve, then it ships via DHL or FedEx to your Georgia address.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Georgia weddings span many traditions and venues. We begin with your family&apos;s approved ceremony and clothing requirements rather than assuming one set of rules applies to every community.
            </p>
          </div>
        </div>
      </section>

      {/* Serving the Greater Atlanta Area */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Serving the Greater Atlanta Area &amp; Beyond
          </h2>
          <p style={{ textAlign: "center", color: "#4d403a", marginBottom: "32px", fontSize: "17px" }}>
            We deliver to your door anywhere in Georgia and the Southeast.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["Atlanta", "Sandy Springs", "Roswell", "Johns Creek", "Alpharetta", "Marietta", "Duluth", "Suwanee", "Peachtree Corners", "Cumming", "Smyrna", "Kennesaw", "Peachtree City", "Buford", "Decatur", "Brookhaven", "Savannah", "Augusta", "Columbus", "Macon"].map((loc) => (
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
              { tier: "Free Consultation", price: "Free", desc: "Tell us about your wedding, your outfit needs, and your budget. We'll share how we can help — no obligation." },
              { tier: "Style Guide & Vendor List", price: "$249", desc: "Curated starting point for self-directed brides. Style discovery, curated vendor contacts, and measurement guidance." },
              { tier: "Guided Sourcing", price: "$799", desc: "Live video shopping sessions with our team in India, bridesmaid and groomsmen coordination, and quality inspection." },
              { tier: "Full Bridal Concierge", price: "$2,499", desc: "End-to-end sourcing for your entire wedding party — every ceremony, every outfit, every family member. Dedicated coordinator." },
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
            Frequently Asked Questions for Georgia NRI Brides
          </h2>
          <div>
            {[
              {
                q: "Do you serve Atlanta and the surrounding Georgia suburbs?",
                a: "Yes. We deliver via DHL or FedEx to any address in Georgia — from Atlanta proper to Sandy Springs, Johns Creek, Alpharetta, Roswell, Marietta, Duluth, Suwanee, Peachtree Corners, and beyond. We also serve Savannah, Augusta, and Columbus. Delivery typically takes 3-5 business days once shipped from India.",
              },
              {
                q: "How much does a bridal lehenga from India cost delivered to Georgia?",
                a: "Cost depends on fabric, handwork, customization, vendor, shipment, and any assessed duty. We itemize the product, flat CeremonyVerse tier, shipping, and customs estimate so you can compare the landed quote with Georgia or out-of-state options.",
              },
              {
                q: "I've heard about shops on Buford Highway — why shouldn't I just go there?",
                a: "Local stores can be useful when you want to try on or buy an in-stock piece. CeremonyVerse is an alternative when you want remote India sourcing, live review, documented approvals, or coordinated outfits across a group. Compare the actual quotes, timelines, and terms before choosing.",
              },
              {
                q: "Can you help with outfits for a Telugu or South Indian wedding in Atlanta?",
                a: "We can translate your family&apos;s approved ceremony and clothing requirements into a sourcing brief. Your family and officiants remain the authority on community-specific customs.",
              },
              {
                q: "How far in advance should I start shopping for my Atlanta wedding?",
                a: "We recommend starting 4-6 months before your wedding date. Custom bridal lehengas with heavy embroidery take 8-12 weeks to craft in India, plus shipping time. Sangeet, mehndi, and reception outfits can usually be sourced in 4-6 weeks. If you're under a tighter timeline, let us know — we can often expedite with our vendor relationships.",
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
            Outfit sourcing for every Georgia ceremony
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "20px" }}>
            From Atlanta Telugu bridal lehengas to South Indian silk sarees for Decatur muhuratams —
            one concierge, every ceremony.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/buy-sherwani-from-india-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Groom Sherwanis</Link>
            <Link href="/kanchipuram-silk-sarees-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Kanchipuram Sarees</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridesmaid &amp; Family</Link>
            <Link href="/mehndi-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Mehndi Outfits</Link>
            <Link href="/reception-outfits-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
            <Link href="/how-it-works/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>How It Works</Link>
          </div>
          <p style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#7a6841", marginBottom: "10px" }}>
            Serving Indian-American brides across the US
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/indian-wedding-shopping-philadelphia/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Philadelphia</Link>
            <Link href="/indian-wedding-shopping-new-york/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>New York</Link>
            <Link href="/indian-wedding-shopping-new-jersey/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>New Jersey</Link>
            <Link href="/indian-wedding-shopping-california/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>California</Link>
            <Link href="/indian-wedding-shopping-texas/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Texas</Link>
            <Link href="/indian-wedding-shopping-florida/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Florida</Link>
            <Link href="/indian-wedding-shopping-washington-dc/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Washington DC</Link>
            <Link href="/indian-wedding-shopping-massachusetts/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Massachusetts</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "16px" }}>
            Ready to find your perfect wedding outfit in Georgia?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Book a free 30-minute consultation. We'll review your wedding vision, timeline, and budget — and recommend exactly what level of support you need. No commitment, no pressure.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact/"
              style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
            >
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20in%20Georgia%20and%20interested%20in%20CeremonyVerse."
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
