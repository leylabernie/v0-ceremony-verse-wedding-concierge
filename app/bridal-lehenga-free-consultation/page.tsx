"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

const WHATSAPP_LINK =
  "https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20want%20to%20book%20a%20free%20bridal%20lehenga%20consultation."

const TRUST_SIGNALS = [
  { number: "500+", label: "Brides Served" },
  { number: "4.9/5", label: "Trustpilot Rating" },
  { number: "6-12", label: "Weeks Delivery" },
  { number: "100%", label: "Satisfaction Guarantee" },
]

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Book a Free Consult",
    desc: "30-minute call with Bhamini. Share your vision, budget, and timeline. No pressure, no commitment.",
  },
  {
    step: "2",
    title: "Live Video Shopping",
    desc: "See real lehengas from India on live video. Inspect the fabric, embroidery, and colors in real time before you commit.",
  },
  {
    step: "3",
    title: "Custom Fitting",
    desc: "We take 15+ measurements and manage custom stitching. Your lehenga fits perfectly — not almost right.",
  },
  {
    step: "4",
    title: "Delivered to Your Door",
    desc: "Quality inspected in India, customs handled, insured shipping. From artisan workshop to your doorstep in the USA.",
  },
]

const FAQ_ITEMS = [
  {
    q: "Is the consultation really free?",
    a: "Yes, 100% free. No credit card, no commitment. I genuinely want to help you make the right decision — even if that decision isn't CeremonyVerse.",
  },
  {
    q: "How much does a bridal lehenga from India cost?",
    a: "It depends on the level of embellishment. Beautiful lehengas start around $600. Hand-embroidered bridal pieces typically range from $1,500-$5,000. Sabyasachi-level pieces can go $5,000+. During our call, I'll give you honest pricing for exactly what you want.",
  },
  {
    q: "How do I know I won't get scammed?",
    a: "You see every outfit on live video before paying. You approve the exact piece. We inspect it in India before shipping. And you pay in milestones — 25% deposit, then 35% after approval, 30% after inspection, 10% on delivery. Your money is protected at every step.",
  },
  {
    q: "How long does delivery take?",
    a: "Custom bridal lehengas take 6-12 weeks. Readymade pieces can ship within 1-2 weeks. Rush orders are sometimes available. The key is starting early — top India vendors book 6-12 months out.",
  },
  {
    q: "Do you ship to countries outside the USA?",
    a: "Yes! We deliver to the USA, UK, Canada, Australia, and New Zealand. Customs documentation and duties are handled for you.",
  },
]

export default function BridalLehengaConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingDate: "",
    budget: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // GA event
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      ;(window as any).gtag("event", "generate_lead", { method: "ad_landing_page" })
    }

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.name.split(" ")[0],
          phone: formData.phone,
          source: "free_guide",
        }),
      })
    } catch {
      // Silently fail
    }

    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* ── Hero Section ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1f1f1f 0%, #2f2f2f 100%)",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p
            style={{
              color: "#c7b28a",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            Free Consultation — No Commitment
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 600,
              color: "#f8f6f2",
              lineHeight: 1.2,
              margin: "0 0 1.25rem",
            }}
          >
            See Your Dream Bridal Lehenga Live from India — Before You Pay a Single Rupee
          </h1>
          <p
            style={{
              color: "#c7b28a",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto 2rem",
            }}
          >
            Live video shopping with India&apos;s best artisan workshops. Custom fitting.
            Quality inspected. Delivered to your door in the USA.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#25D366",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
              }}
            >
              Book Free Consultation
            </a>
            <a
              href="#form"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "#c7b28a",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "2px solid #c7b28a",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Or Fill Out the Form ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #e6dfd5",
          padding: "1.5rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          {TRUST_SIGNALS.map((item) => (
            <div key={item.label}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#c7b28a",
                  margin: 0,
                }}
              >
                {item.number}
              </p>
              <p style={{ fontSize: "0.75rem", color: "#8a6f63", margin: "2px 0 0" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "#1f1f1f",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          How It Works
        </h2>
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {HOW_IT_WORKS.map((item) => (
            <div
              key={item.step}
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#c7b28a",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                }}
              >
                {item.step}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "#1f1f1f",
                    margin: "4px 0 6px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#6a5c55", lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "0 1.5rem 3rem",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "2rem",
            border: "1px solid #e6dfd5",
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              color: "#5a5a5a",
              lineHeight: 1.8,
              fontStyle: "italic",
              margin: "0 0 1rem",
            }}
          >
            &ldquo;I was terrified of getting scammed buying my bridal lehenga from India.
            Bhamini walked me through everything on video. I saw my lehenga being made,
            approved the fabric, and it arrived exactly as promised. My mother-in-law cried
            when she saw it.&rdquo;
          </p>
          <p style={{ fontSize: "0.85rem", color: "#c7b28a", fontWeight: 600, margin: 0 }}>
            — Priya S., New Jersey
          </p>
          <p style={{ fontSize: "0.78rem", color: "#8a6f63", margin: "2px 0 0" }}>
            Gujarati Wedding, October 2025
          </p>
        </div>
      </section>

      {/* ── Lead Capture Form ── */}
      <section id="form" style={{ maxWidth: "560px", margin: "0 auto", padding: "2rem 1.5rem 3rem" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "2.5rem 2rem",
            border: "1px solid #e6dfd5",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          {!submitted ? (
            <>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "#1f1f1f",
                  textAlign: "center",
                  marginBottom: "0.5rem",
                }}
              >
                Book Your Free Consultation
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#8a6f63",
                  textAlign: "center",
                  marginBottom: "2rem",
                  lineHeight: 1.6,
                }}
              >
                Fill out this form and Bhamini will personally reach out within 24 hours.
                Or chat instantly on{" "}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#25D366", fontWeight: 600 }}
                >
                  WhatsApp
                </a>
                .
              </p>

              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "0.9rem",
                    border: "1.5px solid #e6dfd5",
                    borderRadius: "10px",
                    outline: "none",
                    background: "#f8f6f2",
                    boxSizing: "border-box",
                  }}
                />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "0.9rem",
                    border: "1.5px solid #e6dfd5",
                    borderRadius: "10px",
                    outline: "none",
                    background: "#f8f6f2",
                    boxSizing: "border-box",
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "0.9rem",
                    border: "1.5px solid #e6dfd5",
                    borderRadius: "10px",
                    outline: "none",
                    background: "#f8f6f2",
                    boxSizing: "border-box",
                  }}
                />
                <input
                  type="text"
                  placeholder="Wedding date (optional)"
                  value={formData.weddingDate}
                  onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "0.9rem",
                    border: "1.5px solid #e6dfd5",
                    borderRadius: "10px",
                    outline: "none",
                    background: "#f8f6f2",
                    boxSizing: "border-box",
                  }}
                />
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "0.9rem",
                    border: "1.5px solid #e6dfd5",
                    borderRadius: "10px",
                    outline: "none",
                    background: "#f8f6f2",
                    boxSizing: "border-box",
                    color: formData.budget ? "#1f1f1f" : "#b0a898",
                  }}
                >
                  <option value="">Select your budget range</option>
                  <option value="under_1k">Under $1,000</option>
                  <option value="1k_3k">$1,000 – $3,000</option>
                  <option value="3k_5k">$3,000 – $5,000</option>
                  <option value="5k_plus">$5,000+</option>
                </select>
                <textarea
                  placeholder="Tell us about your dream lehenga (optional)"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "0.9rem",
                    border: "1.5px solid #e6dfd5",
                    borderRadius: "10px",
                    outline: "none",
                    background: "#f8f6f2",
                    boxSizing: "border-box",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: submitting ? "#d4c9a8" : "#c7b28a",
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: submitting ? "not-allowed" : "pointer",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    transition: "background 0.2s",
                  }}
                >
                  {submitting ? "Booking..." : "Book My Free Consultation"}
                </button>
              </form>

              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#b0a898",
                  textAlign: "center",
                  marginTop: "1rem",
                  lineHeight: 1.5,
                }}
              >
                No spam. No pressure. Your information is 100% private.
              </p>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "#c7b28a15",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c7b28a" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#1f1f1f",
                  marginBottom: "0.75rem",
                }}
              >
                You&apos;re Booked!
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#6a5c55", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Bhamini will personally reach out within 24 hours. Want to chat right now?
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#25D366",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: "999px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.25)",
                }}
              >
                Chat on WhatsApp Now
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ maxWidth: "680px", margin: "0 auto", padding: "1rem 1.5rem 3rem" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.8rem",
            fontWeight: 600,
            color: "#1f1f1f",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          Common Questions
        </h2>
        {FAQ_ITEMS.map((item) => (
          <div
            key={item.q}
            style={{
              borderBottom: "1px solid #e6dfd5",
              padding: "1.25rem 0",
            }}
          >
            <h3
              style={{
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#1f1f1f",
                marginBottom: "8px",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              {item.q}
            </h3>
            <p
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.7,
                color: "#6a5c55",
                margin: 0,
              }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </section>

      {/* ── Bottom CTA ── */}
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
        }}
      >
        <div
          style={{
            background: "#1f1f1f",
            borderRadius: "12px",
            padding: "2.5rem 2rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.6rem",
              fontWeight: 600,
              color: "#f8f6f2",
              margin: "0 0 0.75rem",
            }}
          >
            Top India vendors book 6–12 months out
          </h2>
          <p
            style={{
              color: "#c7b28a",
              fontSize: "0.95rem",
              marginBottom: "1.5rem",
              lineHeight: 1.7,
            }}
          >
            The earlier you start, the more options you have. Book now — even if your wedding is a year away.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#c7b28a",
                color: "#fff",
                padding: "12px 32px",
                borderRadius: "999px",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Book Free Consultation →
            </a>
            <Link
              href="/pricing"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "#c7b28a",
                padding: "12px 32px",
                borderRadius: "999px",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "1.5px solid #c7b28a",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <SeoFooter />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Free Bridal Lehenga Consultation",
            description:
              "Book a free 30-minute consultation with CeremonyVerse to source your bridal lehenga directly from India with live video shopping and door-to-door delivery.",
            provider: {
              "@type": "LocalBusiness",
              name: "CeremonyVerse",
              telephone: "+12153419990",
              url: "https://www.ceremonyverse.com",
            },
            areaServed: [
              { "@type": "Country", name: "USA" },
              { "@type": "Country", name: "UK" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "Australia" },
            ],
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free 30-minute consultation",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
