import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { GlobalFooter } from "@/components/global-footer";
import WhatsAppButton from "@/components/whatsapp-button";
import MobileStickyCTA from "@/components/mobile-sticky-cta";

// Use absolute title so root layout's title.template doesn't double-suffix.
// Explicitly set noindex AND DO NOT rely on the inherited layout robots
// (index, follow) — we need a single noindex tag.
export const metadata = {
  title: { absolute: "404: Page Not Found | CeremonyVerse" },
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false, nocache: true },
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div style={{ height: "136px" }} />
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a6841", fontWeight: 600, marginBottom: "1rem" }}>
          404 — Page Not Found
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "1rem", lineHeight: 1.2 }}>
          We couldn&apos;t find that page.
        </h1>
        <p style={{ fontSize: "1.05rem", color: "#4d403a", lineHeight: 1.7, marginBottom: "2rem" }}>
          The link may have moved, or the page you&apos;re looking for is no longer here.
          Try one of these popular pages instead, or contact us directly — we&apos;re happy to help.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", justifyContent: "center", marginBottom: "2.5rem" }}>
          <Link href="/" style={{ background: "#7a6841", color: "#fff", padding: "0.8rem 1.6rem", borderRadius: "999px", fontWeight: 600, textDecoration: "none" }}>
            Back to Home
          </Link>
          <Link href="/services/" style={{ background: "transparent", color: "#4d403a", border: "1px solid #7a6841", padding: "0.8rem 1.6rem", borderRadius: "999px", fontWeight: 600, textDecoration: "none" }}>
            Our Services
          </Link>
          <Link href="/contact/" style={{ background: "transparent", color: "#4d403a", border: "1px solid #e6dfd5", padding: "0.8rem 1.6rem", borderRadius: "999px", fontWeight: 600, textDecoration: "none" }}>
            Contact Us
          </Link>
        </div>
        <p style={{ fontSize: "0.95rem", color: "#5e4a40" }}>
          Prefer WhatsApp? Message us at{" "}
          <a href="https://wa.me/12153419990" target="_blank" rel="noopener noreferrer" style={{ color: "#7a6841", fontWeight: 600 }}>
            +1 (215) 341-9990
          </a>
          .
        </p>
      </main>
      <WhatsAppButton />
      <MobileStickyCTA />
      <GlobalFooter />
    </>
  );
}
