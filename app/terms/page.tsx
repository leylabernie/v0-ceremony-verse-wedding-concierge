import Link from "next/link";
import { buildMetadata, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/terms/",
  title: "Terms of Service — CeremonyVerse",
  description:
    "CeremonyVerse Terms of Service: our services, payment terms, shipping and customs, refunds, intellectual property, liability, and the agreement that governs your use of our Indian wedding sourcing concierge.",
  keywords: [
    "CeremonyVerse terms of service",
    "Indian wedding concierge agreement",
    "wedding sourcing refund policy",
    "NRI wedding contract terms",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Terms of Service", url: "/terms/" },
]);

export default function TermsPage() {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      {/* Hero */}
      <div style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#7a6841", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            CeremonyVerse · Legal
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.2, margin: "0 0 1rem" }}>
            Terms of Service
          </h1>
          <p style={{ color: "#7a6841", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Last updated: July 2026
          </p>
        </div>
      </div>

      {/* Body */}
      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.125rem", lineHeight: 1.8, color: "#2f2f2f" }}>
          <p>
            By accessing or using CeremonyVerse services, you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use our services. These terms
            apply to all visitors, clients, and others who access or use our website and services.
            We may revise these terms from time to time, and the most current version will always
            be posted on this page with an updated revision date.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            1. Our Services
          </h2>
          <p>
            CeremonyVerse is a US-based concierge service that helps families source Indian wedding
            items — including bridal lehengas, sherwanis, bridesmaid and family outfits, jewelry,
            ceremonial items, return gifts, welcome bags, and related wedding essentials — directly
            from India. Our services include style consultation, live video shopping sessions with
            vetted Indian artisans and vendors, quality inspection, custom tailoring coordination,
            international shipping, US customs handling, and delivery to your US address.
          </p>
          <p style={{ marginTop: "1rem" }}>
            We act as your sourcing agent and concierge — not as the manufacturer of the items we
            help you source. The artisan workshops, jewelers, weavers, and tailors in India remain
            independent third parties. We vet them carefully and stand behind the quality of what
            we ship, but we do not own or operate their workshops.
          </p>
          <p style={{ marginTop: "1rem" }}>
            CeremonyVerse also offers destination-wedding planning and coordination in Cancun and
            Riviera Maya. The signed scope identifies the covered events and deliverables. Resorts,
            venues, vendors, officiants, travel providers, and carriers remain independent third
            parties with their own contracts, charges, availability, and policies.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            2. Service Tiers and Payment
          </h2>
          <p>
            CeremonyVerse offers three India-shopping service tiers: Style Guide &amp; Vendor List
            ($249), Guided Sourcing ($799), and Full Bridal Concierge ($2,499). Mexico planning
            tiers are listed separately on the pricing page and may require a custom scope. The
            30-minute initial consultation is free. Service tier fees become non-refundable once work begins or a vendor
            introduction, sourcing call, or vendor list has been delivered, because that work has
            already been performed by our team.
          </p>
          <p style={{ marginTop: "1rem" }}>
            The cost of the actual wedding items — outfits, jewelry, gifts, ceremonial items — is
            separate from the service tier fee. Your signed proposal or service agreement states
            the payment schedule, accepted payment methods, and any approval milestones that apply
            to the contracted scope. Review that schedule before signing or paying.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            3. Shipping, Customs, and Duties
          </h2>
          <p>
            Approved items may be shipped from India to a US address using an available international
            carrier. Carrier service, insurance availability, declared value, shipping estimate, and
            customs estimate are itemized for the applicable shipment. Transit and customs-clearance
            times are estimates, not guarantees. Duties or fees actually assessed are the receiving
            client&apos;s responsibility unless the signed agreement expressly states otherwise.
          </p>
          <p style={{ marginTop: "1rem" }}>
            For a detailed breakdown of how US customs handles Indian wedding outfits and jewelry,
            see our{" "}
            <Link href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/" style={{ color: "#7a6841" }}>
              shipping and customs duties guide
            </Link>
            . Textile duties vary by HTS classification, fiber content, construction, declared value,
            country of origin, and the tariff rules in effect when the shipment enters the US.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            4. Refunds and Returns
          </h2>
          <p>
            Custom-tailored outfits (lehengas, sherwanis, blouses, suits made to your measurements)
            are non-returnable and non-refundable, because they cannot be resold to another client.
            This is the standard practice for custom bridal wear worldwide and is the same policy
            followed by Indian boutiques in the US and India alike.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Ready-to-wear items and jewelry may be returned within 7 days of delivery, provided
            they are unused, unworn, with all original tags and packaging intact. Return shipping
            to India is the responsibility of the client. Refunds are issued to the original payment
            method within 14 business days of our team receiving and inspecting the returned item.
          </p>
          <p style={{ marginTop: "1rem" }}>
            If an item arrives damaged or does not match the approved specifications, contact us
            within 48 hours of delivery with photos. We will arrange a replacement, alteration, or
            remedy the documented issue according to the applicable signed proposal, vendor terms,
            and service agreement. Eligible sourcing tiers include a pre-shipping review, but the
            available remedy depends on the item and contracted terms.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            5. Sizing and Measurements
          </h2>
          <p>
            For custom-tailored items, we conduct a three-way video measurement call with an expert
            tailor (Masterji) to map your measurements accurately. You are responsible for taking
            the measurements as directed during that call and for confirming the final measurement
            chart before production begins. Once production begins, measurement changes cannot be
            guaranteed. Eligible made-to-measure garments include Fit Assurance with up to $150
            toward reasonable local alteration costs after delivery, subject to your signed proposal
            and service terms. Fit Assurance does not cover issues caused by inaccurate, incomplete,
            or changed measurements supplied by the client.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            6. Intellectual Property
          </h2>
          <p>
            All content on this website — including text, images, design, logos, and the
            CeremonyVerse brand — is the property of CeremonyVerse and protected by US and
            international copyright law. You may not reproduce, republish, or redistribute any
            content from this site without written permission. Client wedding photographs shared
            with us remain the property of the client; we use them on our website and marketing
            materials only with explicit written consent via our intake questionnaire.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            7. Limitation of Liability
          </h2>
          <p>
            CeremonyVerse is not liable for indirect, incidental, or consequential damages arising
            from the use of our services. Our total liability for any claim arising from our
            services is limited to the amount you have paid us for the specific service tier or
            item at issue. We are not liable for delays caused by Indian production, customs
            holds, weather, or other events outside our control, but we will always communicate
            proactively and work to find solutions.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            8. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of the Commonwealth of Pennsylvania and the
            United States. Any disputes will be resolved in the state or federal courts located in
            Philadelphia County, Pennsylvania. We will always attempt to resolve any concern
            informally first — please reach out to{" "}
            <a href="mailto:bhamini@ceremonyverse.com" style={{ color: "#7a6841" }}>bhamini@ceremonyverse.com</a>{" "}
            or by WhatsApp at{" "}
            <a href="https://wa.me/12153419990" style={{ color: "#7a6841" }}>+1 (215) 341-9990</a>.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            9. Contact
          </h2>
          <p>
            Questions about these terms? Contact us anytime:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              Email:{" "}
              <a href="mailto:bhamini@ceremonyverse.com" style={{ color: "#7a6841" }}>
                bhamini@ceremonyverse.com
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              WhatsApp:{" "}
              <a href="https://wa.me/12153419990" style={{ color: "#7a6841" }}>
                +1 (215) 341-9990
              </a>
            </li>
            <li>
              <Link href="/contact/" style={{ color: "#7a6841" }}>
                Book a free 30-minute consultation →
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
