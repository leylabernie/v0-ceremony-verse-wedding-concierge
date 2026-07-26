import Link from "next/link";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-washington-dc/",
  title: "Indian Wedding Shopping Washington DC — NRI Bridal Concierge DMV",
  description: "Source Indian wedding outfits to Washington DC, Maryland, and Virginia. CeremonyVerse delivers bridal lehengas, sherwanis, and family ceremony wear directly from India to the DMV area with live video shopping and custom stitching.",
  keywords: "Indian wedding shopping Washington DC, DC bridal lehenga, NRI wedding concierge DC, Indian wedding outfits Maryland Virginia, buy Indian wedding outfits DMV, Indian wedding shopping DC area",
});

const serviceSchema = buildServiceSchema({
  name: "Washington DC Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for NRI families in Washington DC, Maryland, and Northern Virginia — with live video shopping from India and doorstep delivery to the DMV area.",
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
          DMV Area &middot; Nationwide Service
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping Washington DC &mdash; Serving the DMV Area
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          CeremonyVerse sources bridal lehengas, sherwanis, bridesmaid outfits, and family ceremony wear directly from artisans in Surat, Delhi, and Kanchipuram &mdash; with live video shopping and DHL/FedEx delivery to your door across Washington DC, Maryland, and Northern Virginia.
        </p>
        <Link
          href="/contact"
          style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
        >
          Book Free Consultation
        </Link>
      </section>

      {/* Why DMV */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why DMV NRI families choose CeremonyVerse
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "One of the largest Indian-American populations in the US",
                desc: "The DMV area is home to one of the biggest and most diverse Indian-American communities in the country. From Fairfax County and Loudoun County in Virginia to Montgomery County and Prince George&apos;s in Maryland, tens of thousands of Indian families call the Washington metro area home &mdash; and that means a lot of Indian weddings every year.",
              },
              {
                title: "Limited local selection with high markups",
                desc: "DC and Northern Virginia have a handful of Indian boutiques, but the selection is narrow and prices are often 2-3x what you&apos;d pay sourcing directly from India. Maryland has even fewer options. Many DMV families end up driving to New Jersey or New York to shop &mdash; or worse, ordering online from India and dealing with sizing issues, quality problems, and customs headaches.",
              },
              {
                title: "Federal workers, tech professionals, and diplomats need reliability",
                desc: "The DMV is unique. Between federal employees, World Bank and IMF staff, tech workers in the Dulles corridor, and diplomatic families, NRI brides and grooms here often have demanding schedules and need a service that works with tight timelines and delivers exactly what was promised. CeremonyVerse was built for clients who value precision and accountability.",
              },
              {
                title: "Close to Philadelphia &mdash; we understand the East Coast NRI community",
                desc: "CeremonyVerse is headquartered in Philadelphia, just 2.5 hours from DC. We understand the East Coast NRI community intimately &mdash; the cultural expectations, the multi-ceremony timelines, the interfaith and intercultural weddings that are increasingly common in the DC metro area. We operate on EST, so you get same-business-day responses.",
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
              Everything starts with a free 30-minute consultation on EST. You tell us about your wedding &mdash; ceremonies, party size, timeline, budget. We tell you honestly what&apos;s achievable and which service tier fits. No sales pressure, no inflated promises. We schedule around your availability, whether you&apos;re a federal employee with a fixed lunch hour or a consultant with a packed calendar.
            </p>
            <p style={{ marginBottom: "16px" }}>
              From there, we set up live video shopping sessions with our team in India. You see actual outfits &mdash; fabric, embroidery, color in natural light &mdash; and pick exactly what you want. Your measurements are taken on a video call (not a generic sizing chart), and everything is custom stitched in India. Before it ships, our family in Surat does a quality inspection and sends you photos. You approve, then it ships via DHL or FedEx to your DMV address.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Whether you&apos;re planning a grand Indian wedding near the Smithsonian, an intimate celebration in Georgetown, or a multi-day celebration at a venue in Tysons Corner &mdash; we understand the specific outfit traditions each community requires. The DMV&apos;s Indian community is incredibly diverse, and we source with cultural precision for Gujarati, Punjabi, South Indian, Bengali, and interfaith ceremonies alike.
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
            We deliver to your door anywhere in Washington DC, Maryland, and Northern Virginia.
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
              { tier: "Free Consultation", price: "Free", desc: "Tell us about your wedding, your outfit needs, and your budget. We'll share how we can help &mdash; no obligation." },
              { tier: "Style Guide &amp; Vendor List", price: "$249", desc: "Curated starting point for self-directed brides. Style discovery, curated vendor contacts, and measurement guidance." },
              { tier: "Guided Sourcing", price: "$799", desc: "Live video shopping sessions with our team in India, bridesmaid and groomsmen coordination, and quality inspection." },
              { tier: "Full Bridal Concierge", price: "$2,499", desc: "End-to-end sourcing for your entire wedding party &mdash; every ceremony, every outfit, every family member. Dedicated coordinator." },
            ].map((item) => (
              <div key={item.tier} style={{ background: "#fff", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <h3 style={{ fontWeight: 600, fontSize: "17px", color: "#1f1f1f", marginBottom: "4px" }}>{item.tier}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#7a6841", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "17px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "16px", fontSize: "14px", color: "#4d403a" }}>
            Outfit costs, shipping, and customs are itemized separately. <a href="/pricing" style={{ color: "#7a6841", textDecoration: "underline" }}>See full pricing breakdown</a>.
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
                a: "Yes. We deliver via DHL or FedEx to any address in the DMV area &mdash; Washington DC, Montgomery County, Prince George&apos;s County, Fairfax County, Loudoun County, Arlington, Alexandria, and beyond. Delivery typically takes 3-5 business days once shipped from India. We serve the entire Washington metro region.",
              },
              {
                q: "How much does a bridal lehenga cost delivered to the DC area?",
                a: "Most DMV clients save 40-60% compared to what they&apos;d pay at the few Indian boutiques in Northern Virginia or Maryland. Sangeet and mehndi outfits run $150-300 landed. Mid-bridal lehengas run $700-1,500. Premium bridal lehengas with heavy zardozi run $1,500-3,000. These prices include our service fee, international shipping, and US customs duties.",
              },
              {
                q: "I'm a federal employee getting married in DC &mdash; can you work with my security clearance venue?",
                a: "Absolutely. We ship all outfits to your home address or personal residence &mdash; not to venues. There are no venue restrictions or security clearance complications because the delivery is entirely between our courier (DHL/FedEx) and your personal address. Many of our DMV clients are federal employees, and this process works smoothly for all of them.",
              },
              {
                q: "Can you help with outfits for a Northern Virginia Indian wedding?",
                a: "Yes. We serve Northern Virginia extensively &mdash; from Tysons Corner and Reston to Leesburg, Ashburn, and Loudoun County. We&apos;re familiar with the wedding venues in the area and can advise on outfit choices that complement your specific venue. Whether it&apos;s a grand celebration at a Tysons ballroom or an intimate gathering in Leesburg wine country, we source accordingly.",
              },
              {
                q: "How long before my DC wedding should I start sourcing?",
                a: "We recommend starting 6-12 months before your wedding date. This gives enough time for the consultation, video shopping, custom stitching (8-12 weeks), quality inspection, and international shipping. For simpler outfits like sangeet or mehndi wear, 3-4 months can work. But for bridal lehengas with heavy customization, earlier is always better &mdash; especially during peak wedding season in the DMV.",
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
            From DC embassy-community bridal lehengas to Northern Virginia Telugu wedding sarees &mdash;
            one concierge, every ceremony, every outfit delivered across the DMV.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
            <Link href="/buy-bridal-lehenga-from-india-usa" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/buy-sherwani-from-india-usa" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Groom Sherwanis</Link>
            <Link href="/kanchipuram-silk-sarees-usa" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Kanchipuram Sarees</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridesmaid &amp; Family</Link>
            <Link href="/reception-outfits-usa" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Reception Outfits</Link>
            <Link href="/mehndi-outfits-usa" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Mehndi Outfits</Link>
            <Link href="/how-it-works" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>How It Works</Link>
          </div>
          <p style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "#7a6841", marginBottom: "10px" }}>
            Serving Indian-American brides across the US
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/indian-wedding-shopping-philadelphia" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Philadelphia</Link>
            <Link href="/indian-wedding-shopping-new-york" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>New York</Link>
            <Link href="/indian-wedding-shopping-new-jersey" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>New Jersey</Link>
            <Link href="/indian-wedding-shopping-california" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>California</Link>
            <Link href="/indian-wedding-shopping-texas" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Texas</Link>
            <Link href="/indian-wedding-shopping-georgia" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Georgia</Link>
            <Link href="/indian-wedding-shopping-florida" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Florida</Link>
            <Link href="/indian-wedding-shopping-massachusetts" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Massachusetts</Link>
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
            Book a free 30-minute consultation. We&apos;ll review your wedding vision, timeline, and budget &mdash; and recommend exactly what level of support you need. No commitment, no pressure.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
            >
              Book Free Consultation
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
