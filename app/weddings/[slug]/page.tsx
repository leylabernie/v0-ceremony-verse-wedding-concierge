import { Metadata } from "next";
import { notFound } from "next/navigation";
import { regionalPages } from "@/lib/regional-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = regionalPages.find((p) => p.slug === slug);

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  };
}

export async function generateStaticParams() {
  return regionalPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function RegionalWeddingPage({ params }: Props) {
  const { slug } = await params;
  const page = regionalPages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#a69260", marginBottom: "14px", fontWeight: 500 }}>
          {page.region}
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          {page.heroHeadline}
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#4d403a", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
          {page.heroSubheadline} {page.introText}
        </p>
        <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#a69260", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
          Book Free Consultation
        </a>
      </section>

      {/* Pain Points */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            {page.painPointsTitle}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {page.painPoints.map((item) => (
              <div key={item.title} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What CeremonyVerse Does */}
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "24px" }}>
            {page.howWeServeTitle}
          </h2>
          <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#4d403a" }}>
            <p style={{ marginBottom: "16px" }}>{page.howWeServeText}</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "48px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            Pricing
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { tier: "Free Consultation", price: "Free", desc: "Tell us about your wedding, your outfit needs, and your budget. We'll share how we can help — no obligation." },
              { tier: "Style Guide", price: "$149", desc: "A curated lookbook tailored to your ceremonies, body type, and budget — with specific recommendations from India's top outfit specialists." },
              { tier: "Guided Sourcing", price: "$599", desc: "Live video shopping sessions, direct access to artisan partners in India, measurement guidance, and managed ordering for your key outfits." },
              { tier: "Full Bridal Concierge", price: "$1,499", desc: "End-to-end outfit management for the entire wedding party — bride, groom, bridesmaids, groomsmen, and family. Every ceremony covered." },
            ].map((item) => (
              <div key={item.tier} style={{ background: "#f9f6f3", borderRadius: "14px", padding: "24px", border: "1px solid #e6dfd5", textAlign: "center" }}>
                <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f1f1f", marginBottom: "4px" }}>{item.tier}</h3>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#a69260", marginBottom: "10px" }}>{item.price}</p>
                <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#4d403a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "48px 24px", background: "#f8f6f2" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", textAlign: "center", marginBottom: "32px" }}>
            {page.faqTitle}
          </h2>
          <div style={{ spaceY: "24px" }}>
            {page.faqs.map((faq, index) => (
              <div key={index} style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid #e6dfd5" }}>
                <h3 style={{ fontWeight: 600, fontSize: "16px", color: "#1f1f1f", marginBottom: "8px" }}>{faq.q}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4d403a" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
            Ready to start your wedding shopping?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4d403a", marginBottom: "24px" }}>
            Book a free consultation at ceremonyverse.com or message us on WhatsApp at +1 (215) 341-9990. We&apos;ll walk you through exactly how we can help your {page.region} shop from India with confidence.
          </p>
          <a href="https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services." target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", background: "#a69260", color: "#fff", padding: "13px 30px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
