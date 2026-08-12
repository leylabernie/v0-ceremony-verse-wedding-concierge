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
            Last updated: August 11, 2026
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
            We may revise these terms from time to time, and the current version will
            be posted on this page with an updated revision date.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            1. Our Services
          </h2>
          <p>
            CeremonyVerse is a U.S.-based concierge service that helps families across the United States and Canada source Indian wedding
            items — including bridal lehengas, sherwanis, bridesmaid and family outfits, jewelry,
            ceremonial items, return gifts, welcome bags, and related wedding essentials — directly
            from India. Depending on the selected tier and vendor, services may include style consultation,
            live video review, measurement and tailoring coordination, pre-shipping review, and
            shipping-document and tracking support for delivery across the United States or Canada.
          </p>
          <p style={{ marginTop: "1rem" }}>
            We act as your sourcing agent and concierge — not as the manufacturer of the items we
            help you source. The artisan workshops, jewelers, weavers, and tailors in India remain
            independent third parties. We review available vendor information and document approvals
            within the contracted scope, but we do not own their workshops, manufacture their products,
            or eliminate the risks inherent in handmade and remotely purchased items.
          </p>
          <p style={{ marginTop: "1rem" }}>
            For destination weddings across Mexico and in Punta Cana, CeremonyVerse can offer full planning,
            partial planning, event coordination, family communication, guest-information, arrival,
            welcome-item, and India-sourcing support. The client&apos;s wedding-specific written proposal identifies the
            selected services, outside costs, exclusions, payment terms, and approval responsibilities.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            2. Service Tiers and Payment
          </h2>
          <p>
            CeremonyVerse offers two India-shopping service tiers: Guided Sourcing ($799) and Full Bridal
            Concierge ($2,499). The Destination Wedding
            Feasibility &amp; Action Plan is $300. Destination packages start at $4,000 for Event Coordination &amp;
            Management, $5,500 for Partial Planning &amp; Coordination, and $8,000 for Full Planning &amp; Design.
            The final written proposal reflects the selected destination, dates, events, guest count, travel,
            staffing, complexity, additions, and the family and guest responsibilities included at that package
            level. The initial 30-minute
            consultation is free. The signed proposal or service agreement identifies when paid work begins and
            the cancellation, refund, and rescheduling rules that apply to that scope.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Public CeremonyVerse fees are stated in U.S. dollars. Published fees may change for future inquiries,
            but the CeremonyVerse service fee in an accepted written agreement controls the contracted scope.
            Exchange rates, payment-provider charges, and independent-provider prices are outside costs unless the
            signed agreement expressly includes them.
          </p>
          <p style={{ marginTop: "1rem" }}>
            The $300 Destination Wedding Feasibility &amp; Action Plan fee is non-refundable once work begins.
            If the client signs a CeremonyVerse destination-planning agreement within 30 days after the
            written plan is delivered, the $300 is credited toward the CeremonyVerse planning service fee.
            The credit does not apply to resort, venue, vendor, travel, or other independent-provider costs.
          </p>
          <p style={{ marginTop: "1rem" }}>
            The cost of the actual wedding items — outfits, jewelry, gifts, ceremonial items — is
            separate from the service tier fee. Your signed proposal or service agreement states
            the payment schedule, accepted payment methods, and any approval milestones that apply
            to the contracted scope. Review that schedule before signing or paying.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            3. Destination Services, Travel, and Other Providers
          </h2>
          <p>
            Resorts, venues, local professionals, vendors, travel companies, airlines, hotels, transfer
            companies, and carriers may be independent providers. Each provider remains
            responsible for the services assigned to it. CeremonyVerse does not bind another provider
            beyond the authority stated in a signed written agreement, and another provider cannot bind
            CeremonyVerse.
          </p>
          <p style={{ marginTop: "1rem" }}>
            The final CeremonyVerse proposal states what the client pays CeremonyVerse, which outside
            costs are paid directly to another provider, the applicable milestones, and the cancellation
            and refund terms. CeremonyVerse does not sell flights or hotel rooms. Travel reservations and
            transfer bookings are completed with the applicable provider unless a signed agreement states
            otherwise, and no booking or deposit is authorized without the client&apos;s written approval.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Website calculators and publicly available resort information are provided only as planning
            estimates. They are not resort quotes, offers, contracts, availability promises, or guarantees.
            Resorts and other providers may change or withdraw prices, packages, inclusions, eligible dates,
            guest limits, minimum stays, room-block requirements, venues, menus, taxes, service charges,
            surcharges, promotions, availability, cancellation terms, and other policies at any time,
            including without notice. The provider&apos;s current written proposal and signed contract control.
            Confirm all amounts and terms directly with the applicable provider before relying on a calculator
            result, paying a deposit, signing an agreement, or booking travel. CeremonyVerse is not affiliated
            with and cannot bind a listed resort unless a signed written agreement expressly states otherwise.
          </p>
          <p style={{ marginTop: "1rem" }}>
            A special request, promotion, credit, room type, event space, menu, transfer, early check-in, late
            check-out, upgrade, or other benefit is not confirmed until the responsible provider accepts it in
            writing and any required payment has cleared. Separate provider terms and conditions apply to promotions,
            credits, and insurance products. CeremonyVerse does not guarantee that a provider will honor an informal,
            expired, or unconfirmed request.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Each traveler is responsible for checking current passport validity, visa, entry, health, transit, and
            return requirements with the relevant government and carrier before booking and travel. Requirements can
            change and may differ by citizenship, residence, routing, and destination. Travel insurance is optional
            unless a signed provider contract requires it. Any coverage, exclusions, purchase deadline, cancellation
            benefit, and claim decision are governed by the insurer&apos;s policy; CeremonyVerse is not the insurer and
            does not guarantee coverage or claim payment.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            4. Shipping, Customs, and Duties
          </h2>
          <p>
            Approved items may be shipped from India to an address in the United States or Canada using an available
            international carrier. The applicable written shipment plan identifies the destination, carrier and
            service level, available tracking, insurance availability, declared value, shipping estimate, customs
            estimate, importer or recipient, and claim procedure. Carrier acceptance, scans, transit, customs release,
            and final delivery times are estimates, not guarantees.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Duties, taxes, brokerage, disbursement or advancement fees, storage, address-correction, remote-area,
            redelivery, and other charges actually assessed are the receiving client&apos;s responsibility unless the
            signed agreement expressly states otherwise. For Canadian deliveries, this can include duty, GST or HST,
            applicable provincial tax, and carrier or customs-broker charges. The U.S. Customs and Border Protection,
            Canada Border Services Agency, other government authorities, and the selected carrier control
            classification, admissibility, value, assessment, release, and inspection decisions.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Customs and landed-cost figures on the website or in a preliminary quote are estimates only. The final
            government or carrier assessment controls and may differ because of classification, fiber content,
            construction, declared value, country of origin, exchange rate, destination, and rules in effect at entry.
            The recipient must respond to reasonable carrier or customs requests and pay amounts assigned to the
            recipient before release or delivery.
          </p>
          <p style={{ marginTop: "1rem" }}>
            For U.S.-specific planning information,
            see our{" "}
            <Link href="/blog/shipping-indian-wedding-outfits-usa-customs-duties/" style={{ color: "#7a6841" }}>
              U.S. shipping and customs duties guide
            </Link>
            . Canadian families can review the{" "}
            <Link href="/indian-wedding-shopping-canada/" style={{ color: "#7a6841" }}>
              Canada service and customs overview
            </Link>
            .
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            5. Refunds and Returns
          </h2>
          <p>
            Cancellation, return, replacement, alteration, and refund rights depend on the selected
            service, item, vendor terms, production stage, and applicable law. Custom or altered items
            are often final sale once materials are purchased or production begins. The applicable terms
            are disclosed for approval before the related purchase or production milestone.
          </p>
          <p style={{ marginTop: "1rem" }}>
            A ready-to-wear item or jewelry return is available only when the selected vendor or seller
            accepts it and the item meets that provider&apos;s return conditions. The client receives the
            available vendor terms, return-shipping responsibility, and expected refund method before an
            eligible return is authorized.
          </p>
          <p style={{ marginTop: "1rem" }}>
            If an item arrives damaged or does not match the approved specifications, contact us
            within the notice period in the signed terms and preserve the packaging, photos, and carrier records.
            CeremonyVerse will help document the issue and pursue any replacement, alteration, refund, insurance claim, or
            other remedy available under the applicable signed proposal, vendor terms,
            carrier terms, and service agreement. Eligible sourcing tiers may include a pre-shipping review, but the
            available remedy depends on the item and contracted terms.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            6. Sizing and Measurements
          </h2>
          <p>
            For custom-tailored items, CeremonyVerse helps document the measurements requested by the
            selected vendor. You are responsible for providing accurate measurements and confirming the
            final chart before production begins. Once production begins, measurement changes cannot be
            guaranteed. Eligible made-to-measure garments may include Fit Assurance with up to $150
            toward reasonable local alteration costs after delivery when stated in the signed proposal.
            Fit Assurance does not cover issues caused by inaccurate, incomplete, or changed measurements
            supplied by the client.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            7. Intellectual Property
          </h2>
          <p>
            All content on this website — including text, images, design, logos, and the
            CeremonyVerse brand — is owned by CeremonyVerse or used with permission and is protected by
            applicable copyright law. You may not reproduce, republish, or redistribute that content
            without permission from the applicable rights holder. Reviews and wedding photographs remain
            subject to the rights of their authors, photographers, clients, and depicted individuals.
            CeremonyVerse uses them publicly only with separate written permission covering the intended
            brand, channel, and use; the consultation intake questionnaire does not grant marketing consent.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            8. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, CeremonyVerse is not liable for indirect, incidental, or consequential damages arising
            from the use of our services. Our total liability for any claim arising from our
            services is limited to the amount you have paid us for the specific service tier or
            item at issue. We are not liable for delays caused by Indian production, customs
            holds, weather, or other events outside our control. We communicate material updates available to us and work within the agreed scope to address issues. Nothing in these terms excludes or limits a right or remedy that applicable consumer law does not permit us to exclude or limit.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            9. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of the Commonwealth of Pennsylvania and the
            United States. Any disputes will be resolved in the state or federal courts located in
            Philadelphia County, Pennsylvania, subject to any mandatory consumer-protection or jurisdictional rights that apply where a client resides. We encourage clients to contact us so the parties can try to resolve a concern
            informally first — please reach out to{" "}
            <a href="mailto:hello@ceremonyverse.com" style={{ color: "#7a6841" }}>hello@ceremonyverse.com</a>{" "}
            or by WhatsApp at{" "}
            <a href="https://wa.me/12153419990" style={{ color: "#7a6841" }}>+1 (215) 341-9990</a>.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            10. Contact
          </h2>
          <p>
            Questions about these terms? Contact us anytime:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              Email:{" "}
              <a href="mailto:hello@ceremonyverse.com" style={{ color: "#7a6841" }}>
                hello@ceremonyverse.com
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
