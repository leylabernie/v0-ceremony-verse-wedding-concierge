import Link from "next/link";
import { NorthAmericaCoverage } from "@/components/north-america-coverage";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/indian-wedding-shopping-massachusetts/",
  title: "Indian Wedding Shopping from India — Massachusetts",
  description: "Boston and Massachusetts families can research Indian wedding outfits from India with eligible live review, written approvals, available pre-shipping review, and delivery coordination.",
  keywords: "Indian wedding shopping Massachusetts, Boston bridal lehenga, Indian wedding outfits Boston MA, NRI wedding concierge Massachusetts, buy Indian wedding outfits Massachusetts, Indian wedding shopping Boston, Indian bridal wear Boston",
});

const serviceSchema = buildServiceSchema({
  name: "Massachusetts Indian Wedding Sourcing Service",
  description: "Indian wedding outfit sourcing for families in Massachusetts and the greater Boston area with eligible live review, written approvals, and delivery coordination.",
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
          Schedule a Free 30-Minute Consultation
        </Link>
      </section>

      <NorthAmericaCoverage guideName="Massachusetts" />

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
                desc: "CeremonyVerse is a U.S.-based service serving families across the United States and Canada. When you book a consultation, you reach an organized family-side contact—not a call-center script—and receive clear next steps for the agreed sourcing scope.",
              },
              {
                title: "Compare local and remote options",
                desc: "Massachusetts families can compare local inventory with documented India-sourcing options. Use equivalent written quotes that include the item, customization, service scope, shipping, customs estimate, alteration allowance, timing, and remedies.",
              },
              {
                title: "Document the sourcing scope",
                desc: "Massachusetts families can compare local boutique options with a documented India-sourcing path. CeremonyVerse organizes item references, approvals, measurements, outside costs, and available vendor terms so the family can evaluate both options on a comparable basis.",
              },
              {
                title: "North America consultation times",
                desc: "CeremonyVerse operates on Eastern Time and offers scheduled consultations for U.S. and Canadian families. Response timing and any time-sensitive order steps are confirmed for the selected service rather than promised universally.",
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
              { name: "Lantana's in Randolph", detail: "Randolph event venue" },
              { name: "The Tara Hotel & Event Center", detail: "Framingham — confirm current venue, catering, capacity, and outside-vendor terms directly" },
              { name: "DCU Center", detail: "Worcester — confirm current capacity, catering, production, and outside-vendor terms directly" },
              { name: "The Mansion at MountainView", detail: "Sturbridge — destination Indian weddings in Central MA" },
              { name: "The W Hotel Boston", detail: "Modern Boston setting — confirm current event, catering, capacity, and vendor terms directly" },
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
              Everything starts with a free 30-minute consultation. You tell us about your wedding — ceremonies, party size, timeline, and budget. We review the available service tiers, item requirements, and timing without requiring payment for the call.
            </p>
            <p style={{ marginBottom: "16px" }}>
              Depending on the selected tier and item, the process may include live video review or current item media, measurement and custom-order coordination, written approvals, available pre-shipping review, and tracked-delivery support. The written quote identifies the vendor, item, service scope, shipment estimate, and terms before paid work begins.
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
            Massachusetts and New England service areas to discuss with the selected vendor and carrier.
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
            CeremonyVerse remote consultations are available throughout New England. Item, vendor, carrier, and address eligibility must still be confirmed for each written scope.
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
              { tier: "Free 30-Minute Consultation", price: "Free", desc: "Tell us about your wedding, your outfit needs, and your budget. We'll share how we can help — no obligation." },
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
            Frequently Asked Questions for Massachusetts NRI Brides
          </h2>
          <div>
            {[
              {
                q: "Do you serve Boston and the surrounding Massachusetts suburbs?",
                a: "CeremonyVerse can coordinate delivery to an eligible Massachusetts or New England address when the selected vendor and carrier can serve it. The written quote identifies the carrier, service level, shipping estimate, customs responsibilities, and tracking plan. Carrier and customs dates are not guaranteed.",
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
                q: "Can you help coordinate outfits for a Gujarati or Hindu wedding in the Boston area?",
                a: "Yes. We can organize the family's approved ceremony, clothing, color, measurement, and delivery requirements into one sourcing brief. Your family and officiants remain the authority on religious customs.",
              },
              {
                q: "How far in advance should I start shopping for my Massachusetts wedding?",
                a: "Start as early as practical. The usable lead time depends on the selected item, customization, vendor capacity, approvals, shipping, customs, and alteration buffer. CeremonyVerse confirms the available timeline before an order is approved and does not promise rush production or delivery.",
              },
              {
                q: "Do you work with Indian student couples getting married in Massachusetts?",
                a: "Student couples can use the same service options as other families. The $799 Guided Sourcing tier includes live shopping and selected order coordination, while Full Bridal Concierge supports the couple and wedding party. Product, shipping, customs, and alteration costs remain separate.",
              },
              {
                q: "Can you coordinate both Indian and Western outfit needs for one Boston wedding?",
                a: "Yes, when those needs are included in the written sourcing scope. We can organize approved Indian and Western style references, measurements, selections, and delivery responsibilities without claiming expertise in traditions outside the agreed Gujarati or Hindu focus. Venue names do not imply a CeremonyVerse relationship or prior engagement.",
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
            From Boston and Cambridge bridal lehengas to coordinated family outfits for Marlborough celebrations
            &mdash; one documented process for the in-scope selections and Massachusetts delivery responsibilities.
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
            <Link href="/indian-wedding-shopping-washington-dc/" style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", color: "#4d403a", textDecoration: "none" }}>Washington DC</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", textAlign: "center", background: "#1f1f1f" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#f8f6f2", marginBottom: "16px" }}>
            Ready to discuss your wedding outfit needs in Massachusetts?
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#e8dfd2", marginBottom: "28px" }}>
            Book a free 30-minute consultation. We'll review your wedding vision, timeline, and budget and discuss which available service tier may fit. No commitment, no pressure.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact/"
              style={{ display: "inline-flex", alignItems: "center", background: "#7a6841", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "17px", fontWeight: 600, textDecoration: "none" }}
            >
              Schedule a Free 30-Minute Consultation
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
