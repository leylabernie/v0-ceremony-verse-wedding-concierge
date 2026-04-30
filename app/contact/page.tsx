"use client"

import { useState } from "react"
import { SeoNav } from "@/components/seo-nav"
import { SeoFooter } from "@/components/seo-footer"

interface FormData {
  name: string
  email: string
  phone: string
  eventDate: string
  bridesmaidsCount: string
  groomsmenCount: string
  vision: string
  contractAcknowledged: boolean
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  bridesmaidsCount: "",
  groomsmenCount: "",
  vision: "",
  contractAcknowledged: false,
}

const WA_LINK = "https://wa.me/12153419990?text=Hi%2C%20I%27m%20interested%20in%20CeremonyVerse%20services."

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canSubmit = () => {
    return formData.name && formData.email && formData.eventDate && formData.contractAcknowledged
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b0d66e16-f374-4c58-91c8-fb6f47a4c5dc",
          subject: `New CeremonyVerse Consultation Request — ${formData.name}`,
          from_name: "CeremonyVerse Website",
          replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          event_date: formData.eventDate,
          bridesmaids: formData.bridesmaidsCount || "0",
          groomsmen: formData.groomsmenCount || "0",
          wedding_vision: formData.vision || "Not provided",
          to_email: "bhamini@ceremonyverse.com",
        }),
      })

      const result = await response.json()
      if (result.success) {
        setIsSubmitted(true)
      } else {
        const msg = encodeURIComponent(
          `Hi! I'd like to book a consultation.\nName: ${formData.name}\nEvent date: ${formData.eventDate}\nVision: ${formData.vision}`
        )
        window.open(`https://wa.me/12153419990?text=${msg}`, "_blank")
        setIsSubmitted(true)
      }
    } catch {
      const msg = encodeURIComponent(
        `Hi! I'd like to book a consultation.\nName: ${formData.name}\nEvent date: ${formData.eventDate}\nVision: ${formData.vision}`
      )
      window.open(`https://wa.me/12153419990?text=${msg}`, "_blank")
      setIsSubmitted(true)
    }

    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
        <SeoNav />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh", padding: "48px 24px" }}>
          <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", border: "2px solid #c7b28a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c7b28a" strokeWidth="2">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
            <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "12px", fontWeight: 500 }}>
              You're on your way
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.4rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "16px" }}>
              Application Received
            </h1>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "32px" }}>
              Thank you, {formData.name}. Our team will review your vision and reach out within 24-48 hours at <strong style={{ color: "#1f1f1f" }}>{formData.email}</strong>.
            </p>
            <div style={{ background: "#f0ebe3", border: "1px solid #e6dfd5", borderRadius: "16px", padding: "28px", textAlign: "left" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "20px" }}>
                What happens next
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "We review your wedding vision and timeline",
                  "A specialist reaches out via email within 24-48 hours",
                  "We schedule a 30-minute video consultation",
                  "You receive a customized sourcing proposal",
                ].map((item, index) => (
                  <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem", color: "#c7b28a", fontWeight: 600, flexShrink: 0 }}>0{index + 1}</span>
                    <span style={{ fontSize: "14px", lineHeight: 1.6, color: "#6a5c55" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: "24px" }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", padding: "12px 24px", borderRadius: "999px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
        <SeoFooter />
      </div>
    )
  }

  return (
    <div style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      <SeoNav />

      {/* Hero */}
      <section style={{ padding: "80px 24px 32px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "14px", fontWeight: 500 }}>
          Begin Your Journey
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 600, color: "#1f1f1f", lineHeight: 1.12, marginBottom: "22px" }}>
          Book Your Free Consultation
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6a5c55", marginBottom: "24px" }}>
          Tell us about your wedding vision. We'll prepare a tailored sourcing proposal - no commitment required.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "20px", paddingTop: "20px", borderTop: "1px solid #e6dfd5" }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#25D366", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
            WhatsApp Us
          </a>
          <span style={{ color: "#e6dfd5" }}>|</span>
          <a href="mailto:bhamini@ceremonyverse.com" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6a5c55", textDecoration: "none", fontSize: "14px" }}>
            bhamini@ceremonyverse.com
          </a>
          <span style={{ color: "#e6dfd5" }}>|</span>
          <span style={{ color: "#6a5c55", fontSize: "14px" }}>Response within 24-48 hrs</span>
        </div>
      </section>

      {/* Documents */}
      <section style={{ padding: "0 24px 16px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <a href="/ceremonyverse-intake-questionnaire.pdf" download style={{ flex: 1, minWidth: "200px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "12px", padding: "16px 20px", background: "#f0ebe3", border: "1px solid #e6dfd5", textDecoration: "none" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c7b28a" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#1f1f1f" }}>Client Intake Questionnaire</p>
              <p style={{ fontSize: "11px", color: "#8a6f63" }}>Download before your consultation</p>
            </div>
          </a>
          <a href="/ceremonyverse-service-agreement.pdf" download style={{ flex: 1, minWidth: "200px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "12px", padding: "16px 20px", background: "#f0ebe3", border: "1px solid #e6dfd5", textDecoration: "none" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c7b28a" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/>
            </svg>
            <div>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#1f1f1f" }}>Service Agreement</p>
              <p style={{ fontSize: "11px", color: "#8a6f63" }}>Review our terms before signing</p>
            </div>
          </a>
        </div>
      </section>

      {/* Calendly */}
      <section style={{ padding: "16px 24px 24px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c7b28a", marginBottom: "8px", fontWeight: 500 }}>
              Fastest Way to Connect
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.8rem", fontWeight: 600, color: "#1f1f1f", marginBottom: "8px" }}>
              Pick a Time That Works for You
            </h2>
            <p style={{ fontSize: "14px", color: "#6a5c55" }}>
              Free 30-minute consultation - no commitment required
            </p>
          </div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/lab-bhamini/30min?hide_gdpr_banner=1&primary_color=c7b28a"
            style={{ minWidth: "320px", height: "700px", border: "1px solid #e6dfd5", borderRadius: "16px", overflow: "hidden" }}
          />
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "16px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "#6a5c55" }}>
          - or fill out the form below and we'll reach out within 24-48 hours -
        </p>
      </div>

      {/* Form */}
      <section style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          {error && (
            <div style={{ marginBottom: "24px", padding: "16px", borderRadius: "12px", fontSize: "14px", color: "#b91c1c", background: "#fef2f2", border: "1px solid #fecaca" }}>
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div style={{ background: "#fff", border: "1px solid #e6dfd5", borderRadius: "16px", padding: "32px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

                {/* Name */}
                <div>
                  <label htmlFor="name" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#1f1f1f", marginBottom: "8px" }}>
                    Full Name <span style={{ color: "#c7b28a" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", fontSize: "14px", border: "1px solid #e6dfd5", background: "#f8f6f2", color: "#1f1f1f", outline: "none", boxSizing: "border-box" }}
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label htmlFor="email" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#1f1f1f", marginBottom: "8px" }}>
                      Email <span style={{ color: "#c7b28a" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", fontSize: "14px", border: "1px solid #e6dfd5", background: "#f8f6f2", color: "#1f1f1f", outline: "none", boxSizing: "border-box" }}
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#1f1f1f", marginBottom: "8px" }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", fontSize: "14px", border: "1px solid #e6dfd5", background: "#f8f6f2", color: "#1f1f1f", outline: "none", boxSizing: "border-box" }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="eventDate" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#1f1f1f", marginBottom: "8px" }}>
                    Wedding Date <span style={{ color: "#c7b28a" }}>*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    value={formData.eventDate}
                    onChange={(e) => updateFormData("eventDate", e.target.value)}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", fontSize: "14px", border: "1px solid #e6dfd5", background: "#f8f6f2", color: "#1f1f1f", outline: "none", boxSizing: "border-box" }}
                    required
                  />
                </div>

                {/* Party size */}
                <div>
                  <label style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#1f1f1f", marginBottom: "8px" }}>
                    Wedding Party Size
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label htmlFor="bridesmaids" style={{ display: "block", fontSize: "12px", color: "#6a5c55", marginBottom: "8px" }}>Bridesmaids</label>
                      <input
                        type="number"
                        id="bridesmaids"
                        min="0"
                        max="30"
                        value={formData.bridesmaidsCount}
                        onChange={(e) => updateFormData("bridesmaidsCount", e.target.value)}
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", fontSize: "14px", textAlign: "center", border: "1px solid #e6dfd5", background: "#f8f6f2", color: "#1f1f1f", outline: "none", boxSizing: "border-box" }}
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label htmlFor="groomsmen" style={{ display: "block", fontSize: "12px", color: "#6a5c55", marginBottom: "8px" }}>Groomsmen</label>
                      <input
                        type="number"
                        id="groomsmen"
                        min="0"
                        max="30"
                        value={formData.groomsmenCount}
                        onChange={(e) => updateFormData("groomsmenCount", e.target.value)}
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", fontSize: "14px", textAlign: "center", border: "1px solid #e6dfd5", background: "#f8f6f2", color: "#1f1f1f", outline: "none", boxSizing: "border-box" }}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Vision */}
                <div>
                  <label htmlFor="vision" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#1f1f1f", marginBottom: "8px" }}>
                    Your Wedding Vision
                  </label>
                  <textarea
                    id="vision"
                    value={formData.vision}
                    onChange={(e) => updateFormData("vision", e.target.value)}
                    rows={5}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", fontSize: "14px", border: "1px solid #e6dfd5", background: "#f8f6f2", color: "#1f1f1f", outline: "none", resize: "none", boxSizing: "border-box" }}
                    placeholder="Tell us about your dream wedding - color themes, cultural elements, specific outfits you have in mind..."
                  />
                </div>

                {/* Checkbox */}
                <div style={{ borderTop: "1px solid #e6dfd5", paddingTop: "20px" }}>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={formData.contractAcknowledged}
                      onChange={(e) => updateFormData("contractAcknowledged", e.target.checked)}
                      style={{ marginTop: "4px", width: "16px", height: "16px", accentColor: "#c7b28a", cursor: "pointer" }}
                      required
                    />
                    <span style={{ fontSize: "14px", lineHeight: 1.6, color: "#6a5c55" }}>
                      <span style={{ color: "#c7b28a" }}>*</span>{" "}
                      I understand that CeremonyVerse operates on a{" "}
                      <strong style={{ color: "#1f1f1f" }}>Gate-Approval contract system</strong>.
                      Once a design is approved, changes are permitted only within 24 hours.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!canSubmit() || isLoading}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "none",
                    cursor: canSubmit() && !isLoading ? "pointer" : "not-allowed",
                    background: canSubmit() && !isLoading ? "#c7b28a" : "#e6dfd5",
                    color: canSubmit() && !isLoading ? "#fff" : "#b0a898",
                  }}
                >
                  {isLoading ? "Sending..." : "Submit Application"}
                </button>

              </div>
            </div>
          </form>
          <p style={{ textAlign: "center", fontSize: "12px", color: "#6a5c55", marginTop: "20px" }}>
            Your information is secure and will only be used to prepare your consultation.
          </p>
        </div>
      </section>
    <SeoFooter />
    </div>
  )
}
