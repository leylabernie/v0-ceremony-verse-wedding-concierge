"use client";

import { SeoNav } from "@/components/seo-nav";
import { useState } from "react";

type GuideKey = "price-guide" | "checklist" | "timeline" | "vendor-flags";

interface Guide {
  key: GuideKey;
  icon: string;
  title: string;
  description: string;
}

const guides: Guide[] = [
  {
    key: "price-guide",
    icon: "💰",
    title: "India Sourcing Price Guide",
    description:
      "Real price ranges for lehengas, sherwanis, jewelry, and more — straight from India. Know what's fair before you order.",
  },
  {
    key: "checklist",
    icon: "✅",
    title: "Complete Wedding Outfit Checklist",
    description:
      "Every outfit needed across all 4 ceremonies — bride, bridesmaids, family, groom. Never miss a thing.",
  },
  {
    key: "timeline",
    icon: "📅",
    title: "NRI Wedding Planning Timeline",
    description:
      "Month-by-month countdown — exactly when to order what so nothing arrives late.",
  },
  {
    key: "vendor-flags",
    icon: "🚩",
    title: "Vendor Red Flags Guide",
    description:
      "10 signs an Indian wedding vendor is a scam. Protect yourself before you pay a single rupee.",
  },
];

export default function FreeGuidesPage() {
  const [activeGuide, setActiveGuide] = useState<GuideKey | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleGetGuide = (guideKey: GuideKey) => {
    setActiveGuide(guideKey);
    setEmail("");
    setSuccess(false);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeGuide || !email) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, guide: activeGuide }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);

        // Trigger automatic PDF download
        const link = document.createElement("a");
        link.href = data.downloadUrl;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setActiveGuide(null);
    setEmail("");
    setSuccess(false);
    setError("");
  };

  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <div
        style={{
          background: "#2f2f2f",
          padding: "4rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p
            style={{
              color: "#c7b28a",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            CeremonyVerse · Free Resources
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "#f8f6f2",
              lineHeight: 1.2,
              margin: "0 0 1rem",
            }}
          >
            Free Resources for NRI Brides
          </h1>
          <p
            style={{
              color: "#c7b28a",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Choose one guide — enter your email — download instantly
          </p>
        </div>
      </div>

      {/* Guide Cards Grid */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "3rem 1.5rem 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {guides.map((guide) => (
            <div
              key={guide.key}
              style={{
                background: "#fff",
                border: "1px solid #e6dfd5",
                borderRadius: "12px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.75rem",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(199, 178, 138, 0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={{ fontSize: "2rem", lineHeight: 1 }}>
                {guide.icon}
              </span>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#2f2f2f",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {guide.title}
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#6f6a63",
                  lineHeight: 1.65,
                  margin: 0,
                  flex: 1,
                }}
              >
                {guide.description}
              </p>
              <button
                onClick={() => handleGetGuide(guide.key)}
                style={{
                  marginTop: "0.5rem",
                  background: "#c7b28a",
                  color: "#fff",
                  border: "none",
                  borderRadius: "999px",
                  padding: "10px 24px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background 0.2s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#b29d74")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#c7b28a")
                }
              >
                Get Free Guide
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy note */}
      <p
        style={{
          textAlign: "center",
          fontSize: "0.82rem",
          color: "#9a948d",
          padding: "0 1.5rem 2rem",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        We respect your privacy. No spam. Unsubscribe anytime.
      </p>

      {/* FAQ */}
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "2rem 1.5rem 0",
        }}
      >
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
          Frequently asked questions
        </h2>
        {[
          {
            q: "Are the guides really free?",
            a: "Yes, completely free. We ask for your email so we can send you the download link and occasional wedding planning tips. You can unsubscribe anytime.",
          },
          {
            q: "Who are these guides for?",
            a: "NRI brides and families in the US who are planning an Indian wedding and want to source outfits, jewelry, or ceremony items from India. Whether you're just starting to research or actively shopping, there's a guide for your stage.",
          },
          {
            q: "Will I be signed up for marketing emails?",
            a: "You'll receive a few helpful wedding planning emails after downloading. Every email has a one-click unsubscribe link. We never share your email with third parties.",
          },
        ].map((item) => (
          <div
            key={item.q}
            style={{
              borderBottom: "1px solid #e6dfd5",
              padding: "18px 0",
            }}
          >
            <h3
              style={{
                fontWeight: 600,
                fontSize: "14px",
                color: "#1f1f1f",
                marginBottom: "8px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {item.q}
            </h3>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.6,
                color: "#6a5c55",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          textAlign: "center",
          padding: "2rem 1.5rem 4rem",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#2f2f2f",
            borderRadius: "12px",
            padding: "2.5rem 2rem",
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
            Ready to start sourcing?
          </h2>
          <p
            style={{
              color: "#c7b28a",
              fontSize: "0.95rem",
              marginBottom: "1.5rem",
              lineHeight: 1.7,
            }}
          >
            Get expert help sourcing your Indian wedding outfits directly from
            India.
          </p>
          <a
            href="https://wa.me/12153419990?text=Hi%20Bhamini!%20I%20just%20downloaded%20a%20free%20guide%20and%20I%27m%20interested%20in%20learning%20more."
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
              transition: "background 0.2s",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Book a Free Consultation →
          </a>
        </div>
      </div>

      {/* Email Capture Modal */}
      {activeGuide && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "1rem",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "2.5rem 2rem",
              maxWidth: "420px",
              width: "100%",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
            }}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                color: "#9a948d",
                cursor: "pointer",
                lineHeight: 1,
                padding: "4px",
              }}
              aria-label="Close"
            >
              ×
            </button>

            {success ? (
              /* Success state */
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>
                  🎉
                </span>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#2f2f2f",
                    marginBottom: "0.75rem",
                  }}
                >
                  Your guide is downloading!
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#6f6a63",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  Check your email for more wedding planning tips from
                  CeremonyVerse.
                </p>
                <button
                  onClick={handleCloseModal}
                  style={{
                    background: "#c7b28a",
                    color: "#fff",
                    border: "none",
                    borderRadius: "999px",
                    padding: "10px 28px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              /* Form state */
              <>
                <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }}>
                    {guides.find((g) => g.key === activeGuide)?.icon}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      color: "#2f2f2f",
                      lineHeight: 1.3,
                      margin: "0 0 0.5rem",
                    }}
                  >
                    {guides.find((g) => g.key === activeGuide)?.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#9a948d",
                    }}
                  >
                    Enter your email to download instantly
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      fontSize: "0.9rem",
                      border: "1px solid #e6dfd5",
                      borderRadius: "8px",
                      outline: "none",
                      fontFamily: "'DM Sans', sans-serif",
                      marginBottom: "0.75rem",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#c7b28a")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e6dfd5")
                    }
                  />

                  {error && (
                    <p
                      style={{
                        color: "#c0392b",
                        fontSize: "0.82rem",
                        marginBottom: "0.75rem",
                        textAlign: "center",
                      }}
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: loading ? "#d4c9a8" : "#c7b28a",
                      color: "#fff",
                      border: "none",
                      borderRadius: "999px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      cursor: loading ? "not-allowed" : "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      transition: "background 0.2s",
                    }}
                  >
                    {loading ? "Sending..." : "Download Free Guide"}
                  </button>
                </form>

                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#b5b0a8",
                    textAlign: "center",
                    marginTop: "1rem",
                    lineHeight: 1.5,
                  }}
                >
                  No spam. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
