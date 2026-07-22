import Link from "next/link";
import { SeoNav } from "@/components/seo-nav";
import { buildMetadata, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/privacy/",
  title: "Privacy Policy — CeremonyVerse",
  description:
    "How CeremonyVerse collects, uses, stores, and protects your personal information when you use our Indian wedding sourcing concierge service. GDPR and CCPA-aligned.",
  keywords: [
    "CeremonyVerse privacy policy",
    "wedding concierge data privacy",
    "CCPA privacy policy",
    "GDPR privacy policy USA",
  ],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Privacy Policy", url: "/privacy/" },
]);

export default function PrivacyPage() {
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
            Privacy Policy
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
            At CeremonyVerse, we take your privacy seriously. This policy explains what information
            we collect, how we use it, who we share it with, how long we keep it, and the choices
            you have over your data. This policy is aligned with the California Consumer Privacy
            Act (CCPA) and the EU General Data Protection Regulation (GDPR) to the extent they
            apply to our US-based business.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            1. Information We Collect
          </h2>
          <p>
            <strong>Information you provide directly:</strong> When you submit our consultation
            form, book a call, or work with us as a client, we collect your name, email address,
            phone number, wedding date, wedding location, party size, budget range, style
            preferences, and any reference images or inspiration you share with us. For active
            clients, we also collect measurements, shipping address, and payment information
            (processed via Stripe; we never store full card numbers on our servers).
          </p>
          <p style={{ marginTop: "1rem" }}>
            <strong>Information collected automatically:</strong> When you visit our website, we
            collect your IP address, browser type, device type, pages visited, time on page, and
            referral source via Google Analytics 4 and Google Tag Manager. We use this data
            aggregated and anonymized to understand site performance and improve our content.
          </p>
          <p style={{ marginTop: "1rem" }}>
            <strong>Communications:</strong> When you email, text, or WhatsApp us, we keep a record
            of those communications to provide and improve our service. This includes the content
            of messages you send us, photos you share of outfits and references, and notes from
            consultation calls.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            2. How We Use Your Information
          </h2>
          <p>We use your information for the following purposes:</p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>To provide our service:</strong> coordinating consultations, sourcing calls,
              measurements, production, shipping, and delivery.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>To communicate with you:</strong> about your project, about new inventory
              from our Indian vendors that matches your stated preferences, and about timing
              reminders.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>To process payments:</strong> via Stripe, including invoicing, milestone
              billing, and refunds.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>To improve our website and service:</strong> aggregated analytics on which
              pages perform well, which blog posts are read, and where visitors drop off.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>For marketing:</strong> sending occasional emails about new services or
              vendor additions. You can unsubscribe at any time using the link in every email.
            </li>
            <li>
              <strong>For legal compliance:</strong> retaining records of transactions and
              communications as required by US tax and business law.
            </li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            3. Who We Share Your Information With
          </h2>
          <p>
            We share your information only with the parties necessary to deliver our service, and
            never sell your data. Specifically, we share:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Vetted Indian vendors and artisans:</strong> your measurements, fabric
              preferences, color references, and shipping address (for direct shipment when
              appropriate). We do not share your payment information with vendors.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Stripe:</strong> for payment processing. Stripe is PCI-DSS compliant and
              handles all card data on its secure infrastructure.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Shipping carriers (DHL, FedEx, UPS):</strong> your name, address, phone, and
              shipment contents for customs declaration.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Google Analytics:</strong> aggregated, anonymized traffic data. We do not
              share personally identifiable information with Google Analytics.
            </li>
            <li>
              <strong>Legal authorities:</strong> only when required by US law or valid court
              order.
            </li>
          </ul>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            4. Data Retention
          </h2>
          <p>
            We retain client records — including communications, measurements, and transaction
            records — for 7 years after the completion of your project, which is the standard
            retention period for US business and tax records. After that period, we delete or
            anonymize the records. Website analytics data is retained for 26 months in Google
            Analytics and then automatically deleted.
          </p>
          <p style={{ marginTop: "1rem" }}>
            If you request deletion of your data before the 7-year retention window closes, we
            will delete all personal information except what we are legally required to retain
            (typically transaction records for tax audit purposes).
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            5. Your Rights (CCPA and GDPR)
          </h2>
          <p>
            If you are a California resident (CCPA) or an EU/UK resident (GDPR), you have specific
            rights regarding your personal data:
          </p>
          <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Right to know:</strong> what personal information we have collected about you.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Right to delete:</strong> request that we delete your personal information.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Right to correct:</strong> request that we correct inaccurate information.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Right to opt out of sale:</strong> we do not sell your data, so this right
              is automatically honored.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Right to opt out of marketing:</strong> unsubscribe at any time via the link
              in any marketing email.
            </li>
            <li>
              <strong>Right to non-discrimination:</strong> we will not treat you differently for
              exercising any of these rights.
            </li>
          </ul>
          <p style={{ marginTop: "1rem" }}>
            To exercise any of these rights, email{" "}
            <a href="mailto:bhamini@ceremonyverse.com" style={{ color: "#7a6841" }}>bhamini@ceremonyverse.com</a>{" "}
            with the subject line &quot;Privacy Request.&quot; We will respond within 30 days.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            6. Data Security
          </h2>
          <p>
            We protect your data with industry-standard security measures: HTTPS encryption on all
            website traffic, Stripe-hosted payment processing (no card data on our servers),
            access controls limiting data access to authorized team members, regular password
            rotation, and two-factor authentication on all administrative accounts. No method of
            transmission over the internet is 100% secure, but we work hard to protect your
            information and have never had a data breach.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            7. Cookies
          </h2>
          <p>
            Our website uses essential cookies (required for the site to function) and analytics
            cookies (Google Analytics 4) to understand how visitors use the site. We do not use
            advertising cookies or third-party tracking pixels for ad retargeting. You can control
            cookies via your browser settings; disabling analytics cookies will not affect your
            ability to use the site.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            8. Children&apos;s Privacy
          </h2>
          <p>
            Our service is not directed at children under 16, and we do not knowingly collect
            personal information from children under 16. If you believe we have inadvertently
            collected such information, please contact us and we will delete it promptly.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            9. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The most current version will
            always be posted on this page with an updated revision date. If we make material
            changes that affect how we use your data, we will notify you by email before the
            change takes effect.
          </p>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.7rem", fontWeight: 600, color: "#2f2f2f", marginTop: "2.5rem", marginBottom: "1rem" }}>
            10. Contact
          </h2>
          <p>
            Questions about this policy or your data? Contact us:
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
              <Link href="/contact" style={{ color: "#7a6841" }}>
                Book a free 30-minute consultation →
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
