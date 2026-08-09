import Link from "next/link";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-massachusetts/",
  title: "Indian Wedding Shopping from India — Massachusetts",
  description: "Boston and Massachusetts families can source Indian wedding outfits from India with live review, custom stitching, pre-shipping review, and delivery coordination.",
  keywords: "Indian wedding shopping Massachusetts, Boston bridal lehenga, Indian wedding outfits Boston MA, NRI wedding concierge Massachusetts, buy Indian wedding outfits Massachusetts, Indian wedding shopping Boston, Indian bridal wear Boston",
});

const serviceSchema = buildServiceSchema({
  name: "Massachusetts Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for NRI families in Massachusetts and the greater Boston area — with live video shopping from India and doorstep delivery.",
  url: "/indian-wedding-shopping-massachusetts/",
  areaServed: "Boston, MA — Greater Boston Area, Cambridge, Somerville, Burlington, Waltham, Shrewsbury, Worcester, Framingham, Quincy, Newton, Brookline, Malden, Woburn, Marlborough, Lowell, Springfield",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Massachusetts", url: "/indian-wedding-shopping-massachusetts/" },
]);

export default function MassachusettsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "17px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a6841", marginBottom: "14px", fontWeight: 500 }}>
          Serving Massachusetts Families · Remote India Shopping
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Indian Wedding Shopping Massachusetts — NRI Bridal Concierge Boston
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
          CeremonyVerse helps Massachusetts families research and source Indian wedding outfits through our strongest working relationships in Surat and Delhi, with other vendors considered when they can be responsibly reviewed.
        </p>
        <Link
          href="/contact/"
          style={{ display: "inline-block", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
        >
          Book Free Consultation
        </Link>
      </section>

      {/* Why Massachusetts */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Why Massachusetts NRI families choose CeremonyVerse
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              {
                title: "Real people, not a faceless website",
                desc: "CeremonyVerse is a US-based service shaped by firsthand family wedding experience. When you book a consultation, you reach an organized family-side contact—not a call-center script—and receive clear next steps for the agreed sourcing scope.",
              },
              {
                title: "Boston's Indian community is thriving",
                desc: "Massachusetts is home to one of the most educated and fastest-growing Indian-American populations in the country — fueled by MIT, Harvard, Tufts, UMass, and the booming biotech and tech corridor along Route 128. From Cambridge and Burlington to Shrewsbury and Framingham, Indian weddings are a major celebration here — and the demand for authentic outfits far outpaces local supply.",
              },
              {
                title: "Limited local shopping options in Massachusetts",
                desc: "Unlike New Jersey or Silicon Valley, the Boston area has only a handful of Indian wedding boutiques — mostly concentrated in a few spots along Route 9 in Framingham and Waltham. The selection is limited, markups are steep, and custom work means long waits with no video preview. For bridal lehengas, groom sherwanis, or coordinating outfits for 15+ family members, the local options simply don't measure up. CeremonyVerse gives you access to thousands of artisans across India without leaving your home in Massachusetts.",
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

      {/* Massachusetts-Indian Wedding Venues */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Popular Indian Wedding Venues in Massachusetts
          </h2>
          <p style={{ textAlign: "center", color: "#4d403a", marginBottom: "32px", fontSize: "17px" }}>
            CeremonyVerse can coordinate delivery planning for weddings at Massachusetts venues, subject to the selected carrier, address, and timeline.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {[
              { name: "Boston Marriott Long Wharf", detail: "Waterfront Indian weddings in the heart of Boston" },
              { name: "The Westin Copley Place", detail: "Elegant ballroom receptions in Back Bay" },
              { name: "Royal Plaza Trade Center", detail: "Marlborough — large-capacity Indian wedding celebrations" },
              { name: "Lantana's in Randolph", detail: "Classic New England venue popular with Indian families" },
              { name: "The Tara Hotel & Event Center", detail: "Framingham — Indian-owned venue with authentic catering" },
              { name: "DCU Center", detail: "Worcester — grand Indian wedding receptions for 500+" },
              { name: "The Mansion at MountainView", detail: "Sturbridge — destination Indian weddings in Central MA" },
              { name: "The W Hotel Boston", detail: "Modern luxury for fusion Indian weddings" },
            ].map((venue) => (
              <div key={venue.name} style={{ background: "#fff", borderRadius: "12px", padding: "20px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "16px", color: "#1f1f1f", marginBottom: "4px" }}>{venue.name}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.5, color: "#6b5e54" }}>{venue.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for Massachusetts families */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            How CeremonyVerse works for Massachusetts families
          </h2>
          <div style={{ fontSize: "17px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>
              Everything starts with a free 30-minute consultation. You tell us about your wedding — ceremonies, party size, timeline, budget. We tell you honestly what's achievable and which service tier fits. No sales pressure, no inflated promises. You can schedule consultations around EST — evenings, weekends, whatever works for your Massachusetts schedule.
            </p>
            <p style={{ marginBottom: "16px" }}>
              From there, we set up live video shopping sessions with our team in India. You see actual outfits — fabric, embroidery, color in natural light — and pick exactly what you want. Your measurements are taken on a video call (not a generic sizing chart), and everything is custom stitched in India. Before it ships, our family in Surat does a quality inspection and sends you photos. You approve, then it ships via DHL or FedEx to your Massachusetts address.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Massachusetts weddings span many traditions and venues. We begin with your family&apos;s approved ceremony and clothing requirements rather than assuming one set of rules applies to every community.
            </p>
            <p style={{ marginBottom: "16px" }}>
              The remote process is designed for families who cannot travel for every shopping step. Scheduled
              calls, written approvals, and shipment tracking reduce the need for an India or New Jersey shopping trip.
            </p>
          </div>
        </div>
      </section>

      {/* Serving Massachusetts */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Serving Greater Boston &amp; All of Massachusetts
          </h2>
          <p style={{ textAlign: "center", color: "#4d403a", marginBottom: "32px", fontSize: "17px" }}>
            We deliver to your door anywhere in Massachusetts and across New England.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["Boston", "Cambridge", "Somerville", "Brookline", "Newton", "Waltham", "Burlington", "Framingham", "Shrewsbury", "Worcester", "Quincy", "Malden", "Woburn", "Marlborough", "Lowell", "Springfield", "Amherst", "Northampton", "Natick", "Needham", "Lexington", "Arlington", "Medford", "Revere", "Lynn", "Salem", "Plymouth", "Cape Cod", "Andover", "Chelmsford"].map((loc) => (
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

      {/* New England neighbors */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "12px" }}>
            Also Serving New England
          </h2>
          <p style={{ textAlign: "center", color: "#4d403a", marginBottom: "24px", fontSize: "17px" }}>
            Many New England families book with us because the region has even fewer Indian wedding shopping options than Massachusetts.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["New Hampshire (Nashua, Manchester)", "Rhode Island (Providence, Cranston)", "Connecticut (Hartford, Stamford, New Haven)", "Vermont (Burlington)", "Maine (Portland)", "Upstate New York (Albany)", "New York City metro area"].map((loc) => (
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
            Frequently Asked Questions for Massachusetts NRI Brides
          </h2>
          <div>
            {[
              {
                q: "Do you serve Boston and the surrounding Massachusetts suburbs?",
                a: "Yes. We deliver via DHL or FedEx to any address in Massachusetts — from Boston and Cambridge to Burlington, Waltham, Framingham, Shrewsbury, Worcester, and beyond. We also serve Springfield, the Amherst/Northampton area, Cape Cod, and everywhere in between. Delivery typically takes 3-5 business days once shipped from India. We also serve all of New England — New Hampshire, Rhode Island, Connecticut, Vermont, and Maine.",
              },
              {
                q: "How much does a bridal lehenga from India cost delivered to Massachusetts?",
                a: "Cost depends on fabric, handwork, customization, vendor, shipment, and any assessed duty. We itemize the product, flat CeremonyVerse tier, shipping, and customs estimate so you can compare the landed quote with Massachusetts or out-of-state options.",
              },
              {
                q: "I've heard about Indian shops along Route 9 in Framingham — why shouldn't I just go there?",
                a: "Local shops can be useful when you want to try on or buy an in-stock piece. CeremonyVerse is an alternative when you want remote India sourcing, live review, documented approvals, or coordinated outfits across a group. Compare the actual quotes, timelines, and terms before choosing.",
              },
              {
                q: "Can you help with outfits for a South Indian or Bengali wedding in the Boston area?",
                a: "We can translate your family&apos;s approved ceremony and clothing requirements into a sourcing brief. Your family and officiants remain the authority on community-specific customs.",
              },
              {
                q: "How far in advance should I start shopping for my Massachusetts wedding?",
                a: "We recommend starting 4-6 months before your wedding date. Custom bridal lehengas with heavy embroidery take 8-12 weeks to craft in India, plus shipping time. Sangeet, mehndi, and reception outfits can usually be sourced in 4-6 weeks. If you're a busy professional at one of Boston's hospitals or tech companies, we make the process efficient — video calls on your schedule, clear timelines, and minimal back-and-forth. If you're under a tighter timeline, let us know — we can often expedite with our vendor relationships.",
              },
              {
                q: "Do you work with Indian student couples getting married in Massachusetts?",
                a: "Yes, and we love working with student couples. Boston has thousands of Indian graduate students at MIT, Harvard, Tufts, BU, Northeastern, UMass, and other schools. We understand you're on a budget and working with student timelines. Our Style Guide & Vendor List tier ($249) is particularly popular with student couples — it gives you everything you need to source outfits confidently on your own, with our curated vendor contacts and measurement guidance. And our Guided Sourcing tier ($799) gives you hands-on help without the full concierge commitment.",
              },
              {
                q: "I'm planning a fusion Indian-American wedding in Boston. Can you help?",
                a: "Yes. We can translate your approved ceremony plan and style preferences into a sourcing brief that includes Indian, Western, or blended outfit options. Venue names do not imply a CeremonyVerse relationship or prior engagement.",
              },
            ].map((faq, index) => (
              <div key={index} style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: index < 6 ? "1px solid #e6dfd5" : "none" }}>
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
            Outfit sourcing for every New England ceremony
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "20px" }}>
            From Boston Cambridge bridal lehengas to Marlborough Marathi muhuratam sarees &mdash;
            one concierge, every ceremony, every outfit delivered to your Massachusetts door.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
            <Link href="/buy-bridal-lehenga-from-india-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridal Lehengas</Link>
            <Link href="/buy-sherwani-from-india-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Groom Sherwanis</Link>
            <Link href="/kanchipuram-silk-sarees-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Kanchipuram Sarees</Link>
            <Link href="/banarasi-silk-sarees-usa/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Banarasi Sarees</Link>
            <Link href="/bridesmaid-and-family-outfits-from-india/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Bridesmaid &amp; Family</Link>
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
            <Link href="/indian-wedding-shopping-georgia/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Georgia</Link>
            <Link href="/indian-wedding-shopping-florida/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Florida</Link>
            <Link href="/indian-wedding-shopping-washington-dc/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Washington DC</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "16px" }}>
            Ready to find your perfect wedding outfit in Massachusetts?
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
              href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20in%20Massachusetts%20and%20interested%20in%20CeremonyVerse."
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
