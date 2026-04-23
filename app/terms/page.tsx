import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

export const metadata = {
  title: "Terms of Service | CeremonyVerse",
  description: "CeremonyVerse Terms of Service — payment terms, design approval process, cancellation and refund policies for our Indian wedding concierge services.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/terms",
  },
  openGraph: {
    title: "Terms of Service | CeremonyVerse",
    description: "CeremonyVerse Terms of Service — payment terms, design approval process, cancellation and refund policies.",
    type: "website",
    url: "https://www.ceremonyverse.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />
      <section style={{ padding: "80px 24px 72px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3rem)", fontWeight: 600, color: "#1f1f1f", marginBottom: "8px" }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: "14px", color: "#6a5c55", marginBottom: "40px" }}>
            Last updated: March 2026
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px", fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Agreement to Terms
              </h2>
              <p>
                By accessing or using CeremonyVerse services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, clients, and others who access or use our website and services.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Our Services
              </h2>
              <p style={{ marginBottom: "12px" }}>
                CeremonyVerse provides wedding outfit sourcing and concierge services, connecting clients with verified artisan partners in India. Our services include:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Personalized consultation and design guidance",
                  "Artisan vetting and quality assurance",
                  "Order management and production oversight",
                  "US-based inspection and shipping coordination",
                ].map((item) => (
                  <li key={item} style={{ paddingLeft: "18px", position: "relative", marginBottom: "8px" }}>
                    <span style={{ position: "absolute", left: 0, color: "#c7b28a" }}>&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Payment Terms
              </h2>
              <p style={{ marginBottom: "12px" }}>
                Our standard payment structure requires a 50% deposit to begin production, with the remaining 50% due before final shipment. Custom payment arrangements may be discussed during your consultation.
              </p>
              <p>
                All prices are quoted in USD and do not include applicable taxes, duties, or customs fees, which are the responsibility of the client.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Design Approval Process
              </h2>
              <p>
                Our three-gate approval process (Fabric, Embroidery, Final) is designed to ensure your complete satisfaction. Once you approve a design gate, that element is considered final and changes may incur additional fees or production delays. We strongly encourage thorough review at each approval stage.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Cancellation &amp; Refunds
              </h2>
              <p style={{ marginBottom: "12px" }}>Due to the custom nature of our products, cancellation policies vary based on production stage:</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  { label: "Before fabric procurement:", detail: "Full refund minus consultation fee" },
                  { label: "After fabric procurement:", detail: "50% refund" },
                  { label: "After embroidery begins:", detail: "No refund available" },
                ].map((item) => (
                  <li key={item.label} style={{ paddingLeft: "18px", position: "relative", marginBottom: "8px" }}>
                    <span style={{ position: "absolute", left: 0, color: "#c7b28a" }}>&#8226;</span>
                    <strong style={{ color: "#1f1f1f" }}>{item.label}</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Intellectual Property
              </h2>
              <p>
                All content on our website, including text, images, logos, and design elements, is the property of CeremonyVerse and protected by copyright law. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Limitation of Liability
              </h2>
              <p>
                CeremonyVerse acts as an intermediary between clients and our sourcing partners. While we conduct thorough vetting and quality control, we cannot guarantee against all manufacturing defects or shipping delays. Our liability is limited to the value of services provided.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Contact Us
              </h2>
              <p style={{ marginBottom: "12px" }}>For questions about these Terms of Service, please contact us at:</p>
              <div style={{ background: "#f0ebe3", border: "1px solid #e6dfd5", borderRadius: "12px", padding: "20px" }}>
                <p><strong style={{ color: "#1f1f1f" }}>CeremonyVerse</strong><br />
                Email: bhamini@ceremonyverse.com<br />
                WhatsApp: +1 (215) 341-9990</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    <SeoFooter />
    </div>
  )
}
