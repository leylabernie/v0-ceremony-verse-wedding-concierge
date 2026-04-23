import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

export const metadata = {
  title: "Privacy Policy | CeremonyVerse",
  description: "CeremonyVerse Privacy Policy — how we collect, use, and protect your personal information when you use our Indian wedding concierge services.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | CeremonyVerse",
    description: "CeremonyVerse Privacy Policy — how we collect, use, and protect your personal information.",
    type: "website",
    url: "https://www.ceremonyverse.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />
      <section style={{ padding: "80px 24px 72px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3rem)", fontWeight: 600, color: "#1f1f1f", marginBottom: "8px" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: "14px", color: "#6a5c55", marginBottom: "40px" }}>
            Last updated: March 2026
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px", fontSize: "15px", lineHeight: 1.8, color: "#6a5c55" }}>
            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Information We Collect
              </h2>
              <p style={{ marginBottom: "12px" }}>
                At CeremonyVerse, we collect information you provide directly to us, including your name, email address, phone number, wedding date, and preferences when you submit our consultation form or communicate with our team.
              </p>
              <p>
                We also collect certain information automatically when you visit our website, such as your IP address, browser type, and pages visited. This helps us improve our services and provide you with a better experience.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                How We Use Your Information
              </h2>
              <p style={{ marginBottom: "12px" }}>We use the information we collect to:</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Process your consultation requests and provide our sourcing services",
                  "Communicate with you about your orders, design approvals, and shipping updates",
                  "Send you promotional communications (with your consent)",
                  "Improve our website and services",
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
                Information Sharing
              </h2>
              <p style={{ marginBottom: "12px" }}>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services (such as sharing measurements with our manufacturing partners in India) or as required by law.
              </p>
              <p>
                Our manufacturing partners are bound by strict confidentiality agreements and only receive the information necessary to fulfill your orders.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encrypted communications, secure servers, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Your Rights
              </h2>
              <p style={{ marginBottom: "12px" }}>
                You have the right to access, correct, or delete your personal information at any time. You may also opt out of promotional communications by following the unsubscribe instructions in our emails.
              </p>
              <p>
                To exercise these rights, please contact us at privacy@ceremonyverse.com.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "12px" }}>
                Contact Us
              </h2>
              <p style={{ marginBottom: "12px" }}>If you have any questions about this Privacy Policy, please contact us at:</p>
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
