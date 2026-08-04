"use client"

import Script from "next/script"
import { useEffect, useMemo, useState, useSyncExternalStore } from "react"
import { trackLead } from "@/lib/analytics"

interface FormData {
  serviceInterest: string
  name: string
  email: string
  phone: string
  eventDate: string
  eventLocation: string
  guestCount: string
  bridesmaidsCount: string
  groomsmenCount: string
  vision: string
}

const initialFormData: FormData = {
  serviceInterest: "",
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  eventLocation: "",
  guestCount: "",
  bridesmaidsCount: "",
  groomsmenCount: "",
  vision: "",
}

const subscribeToLocation = () => () => undefined
const getServerServiceInterest = () => ""
const getServiceInterestFromLocation = () => {
  const requestedService = new URLSearchParams(window.location.search).get("service")
  const serviceByQuery: Record<string, FormData["serviceInterest"]> = {
    india: "India shopping",
    mexico: "Mexico wedding concierge",
    both: "India shopping + Mexico wedding concierge",
  }

  return requestedService ? serviceByQuery[requestedService] || "" : ""
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [botcheck, setBotcheck] = useState("")
  const requestedServiceInterest = useSyncExternalStore(
    subscribeToLocation,
    getServiceInterestFromLocation,
    getServerServiceInterest,
  )
  const serviceInterest = formData.serviceInterest || requestedServiceInterest

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canSubmit = () => {
    return Boolean(serviceInterest && formData.name && formData.email && formData.eventDate)
  }

  const fallbackMessage = useMemo(
    () =>
      encodeURIComponent(
        `Hi Bhamini, I'd like to book a CeremonyVerse consultation.\nService: ${serviceInterest || "Not provided"}\nName: ${formData.name || "Not provided"}\nEmail: ${formData.email || "Not provided"}\nEvent date: ${formData.eventDate || "Not provided"}\nEvent location: ${formData.eventLocation || "Not provided"}\nGuest count: ${formData.guestCount || "Not provided"}\nVision: ${formData.vision || "Not provided"}`
      ),
    [formData, serviceInterest]
  )

  const whatsappFallbackUrl = `https://wa.me/12153419990?text=${fallbackMessage}`
  const emailFallbackUrl = `mailto:bhamini@ceremonyverse.com?subject=${encodeURIComponent(
    "CeremonyVerse consultation request"
  )}&body=${fallbackMessage}`

  useEffect(() => {
    const handleCalendlyEvent = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return
      const eventName = (event.data as { event?: string } | null)?.event
      if (eventName === "calendly.event_scheduled") {
        trackLead("calendly", "contact-page-inline-widget")
      }
    }

    window.addEventListener("message", handleCalendlyEvent)
    return () => window.removeEventListener("message", handleCalendlyEvent)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (botcheck) {
      setIsLoading(false)
      return
    }

    const whatsappWindow = window.open(whatsappFallbackUrl, "_blank")
    if (whatsappWindow) {
      whatsappWindow.opener = null
      trackLead("whatsapp", "contact-page-form-handoff")
      setIsSubmitted(true)
    } else {
      setError(
        "WhatsApp did not open. Your information is still filled in below—please use the WhatsApp or email button so your request is not lost."
      )
    }

    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-28 px-6" style={{ background: "var(--cv-bg)" }}>
        <div className="max-w-lg mx-auto text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ border: "2px solid var(--cv-accent)" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7a6841" strokeWidth="2">
              <polyline points="20,6 9,17 4,12" />
            </svg>
          </div>
          <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: "var(--cv-accent)" }}>
            You&apos;re on your way
          </p>
          <h1
            className="font-['Cormorant_Garamond'] text-4xl font-semibold mb-4"
            style={{ color: "var(--cv-foreground)" }}
          >
            Complete Your Request in WhatsApp
          </h1>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "#4d403a" }}>
            Thank you, {formData.name}. Your message is ready in WhatsApp. Tap <strong>Send</strong>
            there to deliver it; after that, our team will review your vision and respond within 24–48 hours.
          </p>
          <div
            className="rounded-2xl p-8 text-left"
            style={{ background: "#f0ebe3", border: "1px solid var(--cv-border)" }}
          >
            <h3
              className="font-['Cormorant_Garamond'] text-xl font-semibold mb-6"
              style={{ color: "var(--cv-foreground)" }}
            >
              What happens next
            </h3>
            <ul className="space-y-4">
              {[
                "We review your wedding vision and timeline",
                "Bhamini or a team member reaches out within 24–48 hours",
                "We confirm your free 30-minute consultation",
                "You leave the call with a realistic plan and recommended next step",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span
                    className="font-['Cormorant_Garamond'] text-lg shrink-0"
                    style={{ color: "var(--cv-accent)" }}
                  >
                    0{index + 1}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#4d403a" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href="https://wa.me/12153419990"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition"
              style={{ background: "#25D366", color: "#fff" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>
            <a
              href="/ceremonyverse-intake-questionnaire.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition"
              style={{ border: "1px solid var(--cv-border)", color: "var(--cv-foreground)" }}
            >
              Download Optional Prep Sheet
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--cv-bg)" }}>

      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase font-medium mb-4" style={{ color: "var(--cv-accent)" }}>
            Begin Your Journey
          </p>
          <h1
            className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6"
            style={{ color: "var(--cv-foreground)" }}
          >
            Get Your Free 30-Minute Wedding Plan
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "#4d403a" }}>
            Tell us whether you need India shopping, a Mexico planner introduction, family-side guest
            support, or a combination. We&apos;ll review the date, guest count, and what your budget must
            cover, then recommend a practical next step—with no payment required for the consultation.
          </p>

          {/* Quick contact strip */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-8 text-sm"
            style={{ borderTop: "1px solid var(--cv-border)" }}
          >
            <a
              href="https://wa.me/12153419990"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:opacity-80"
              style={{ color: "#25D366" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <span style={{ color: "var(--cv-border)" }}>|</span>
            <a
              href="mailto:bhamini@ceremonyverse.com"
              className="flex items-center gap-2 transition hover:opacity-80"
              style={{ color: "var(--cv-muted)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22,7-10,7L2,7"/>
              </svg>
              bhamini@ceremonyverse.com
            </a>
            <span style={{ color: "var(--cv-border)" }}>|</span>
            <span style={{ color: "var(--cv-muted)" }}>Response within 24–48 hrs</span>
          </div>
        </div>
      </section>

      {/* CALENDLY BOOKING */}
      <section className="pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: "var(--cv-accent)" }}>
              Fastest Way to Connect
            </p>
            <h2
              className="font-['Cormorant_Garamond'] text-3xl font-semibold mb-2"
              style={{ color: "var(--cv-foreground)" }}
            >
              Pick a Time That Works for You
            </h2>
            <p className="text-sm" style={{ color: "var(--cv-muted)" }}>
              No contract or payment required. You&apos;ll leave with a practical next step.
            </p>
          </div>
          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget rounded-2xl overflow-hidden"
            data-url="https://calendly.com/lab-bhamini/30min?hide_gdpr_banner=1&primary_color=c7b28a"
            style={{ minWidth: "320px", height: "700px", border: "1px solid var(--cv-border)" }}
          />
          <Script
            id="calendly-inline-widget-script"
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-3xl mx-auto px-6 py-4 text-center">
        <p className="text-xs" style={{ color: "var(--cv-muted)" }}>
          — or fill out the form below and we'll reach out within 24–48 hours —
        </p>
      </div>

      {/* FORM */}
      <section className="pb-28 px-6">
        <div className="max-w-xl mx-auto">
          {error && (
            <div className="mb-6 p-5 rounded-xl text-sm text-red-800 bg-red-50 border border-red-200" role="alert">
              <p className="font-medium mb-3">{error}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappFallbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLead("whatsapp", "contact-page-visible-fallback")}
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-white"
                  style={{ background: "#128C7E" }}
                >
                  Send with WhatsApp
                </a>
                <a
                  href={emailFallbackUrl}
                  onClick={() => trackLead("email", "contact-page-visible-fallback")}
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5"
                  style={{ border: "1px solid #991b1b", color: "#991b1b" }}
                >
                  Send by email
                </a>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div
              className="rounded-2xl p-8 sm:p-10"
              style={{ background: "#fff", border: "1px solid var(--cv-border)" }}
            >
              <div className="space-y-7">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="botcheck">Leave this field empty</label>
                  <input
                    id="botcheck"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={botcheck}
                    onChange={(event) => setBotcheck(event.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium mb-2" style={{ color: "var(--cv-foreground)" }}>
                    What do you need? <span style={{ color: "var(--cv-accent)" }}>*</span>
                  </label>
                  <select
                    id="serviceInterest"
                    value={serviceInterest}
                    onChange={(event) => updateFormData("serviceInterest", event.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                    style={{
                      border: "1px solid var(--cv-border)",
                      background: "var(--cv-bg)",
                      color: "var(--cv-foreground)",
                    }}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="India shopping">India wedding shopping</option>
                    <option value="Mexico wedding concierge">Mexico planner introduction / family concierge</option>
                    <option value="India shopping + Mexico wedding concierge">India shopping + Mexico concierge</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "var(--cv-foreground)" }}>
                    Full Name <span style={{ color: "var(--cv-accent)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                    style={{
                      border: "1px solid var(--cv-border)",
                      background: "var(--cv-bg)",
                      color: "var(--cv-foreground)",
                    }}
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "var(--cv-foreground)" }}>
                      Email <span style={{ color: "var(--cv-accent)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                      style={{
                        border: "1px solid var(--cv-border)",
                        background: "var(--cv-bg)",
                        color: "var(--cv-foreground)",
                      }}
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: "var(--cv-foreground)" }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                      style={{
                        border: "1px solid var(--cv-border)",
                        background: "var(--cv-bg)",
                        color: "var(--cv-foreground)",
                      }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium mb-2" style={{ color: "var(--cv-foreground)" }}>
                    Wedding Date <span style={{ color: "var(--cv-accent)" }}>*</span>
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    value={formData.eventDate}
                    onChange={(e) => updateFormData("eventDate", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                    style={{
                      border: "1px solid var(--cv-border)",
                      background: "var(--cv-bg)",
                      color: "var(--cv-foreground)",
                    }}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventLocation" className="block text-sm font-medium mb-2" style={{ color: "var(--cv-foreground)" }}>
                      Event Location
                    </label>
                    <input
                      type="text"
                      id="eventLocation"
                      value={formData.eventLocation}
                      onChange={(event) => updateFormData("eventLocation", event.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                      style={{
                        border: "1px solid var(--cv-border)",
                        background: "var(--cv-bg)",
                        color: "var(--cv-foreground)",
                      }}
                      placeholder="City, state, or Mexico venue"
                    />
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium mb-2" style={{ color: "var(--cv-foreground)" }}>
                      Estimated Guests
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      min="0"
                      value={formData.guestCount}
                      onChange={(event) => updateFormData("guestCount", event.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition"
                      style={{
                        border: "1px solid var(--cv-border)",
                        background: "var(--cv-bg)",
                        color: "var(--cv-foreground)",
                      }}
                      placeholder="e.g. 150"
                    />
                  </div>
                </div>

                {/* Party size */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "var(--cv-foreground)" }}>
                    Outfit Party Size (if applicable)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bridesmaids" className="block text-xs mb-2" style={{ color: "var(--cv-muted)" }}>
                        Bridesmaids
                      </label>
                      <input
                        type="number"
                        id="bridesmaids"
                        min="0"
                        max="30"
                        value={formData.bridesmaidsCount}
                        onChange={(e) => updateFormData("bridesmaidsCount", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm text-center outline-none transition"
                        style={{
                          border: "1px solid var(--cv-border)",
                          background: "var(--cv-bg)",
                          color: "var(--cv-foreground)",
                        }}
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label htmlFor="groomsmen" className="block text-xs mb-2" style={{ color: "var(--cv-muted)" }}>
                        Groomsmen
                      </label>
                      <input
                        type="number"
                        id="groomsmen"
                        min="0"
                        max="30"
                        value={formData.groomsmenCount}
                        onChange={(e) => updateFormData("groomsmenCount", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm text-center outline-none transition"
                        style={{
                          border: "1px solid var(--cv-border)",
                          background: "var(--cv-bg)",
                          color: "var(--cv-foreground)",
                        }}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                {/* Vision */}
                <div>
                  <label htmlFor="vision" className="block text-sm font-medium mb-2" style={{ color: "var(--cv-foreground)" }}>
                    Your Wedding Vision
                  </label>
                  <textarea
                    id="vision"
                    value={formData.vision}
                    onChange={(e) => updateFormData("vision", e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition resize-none"
                    style={{
                      border: "1px solid var(--cv-border)",
                      background: "var(--cv-bg)",
                      color: "var(--cv-foreground)",
                    }}
                    placeholder="Tell us about the events, outfits, Mexico venue, vendors already booked, cultural requirements, budget, and concerns..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!canSubmit() || isLoading}
                  className="w-full py-4 rounded-full text-sm font-semibold transition"
                  style={{
                    background: canSubmit() && !isLoading ? "#7a6841" : "#e6dfd5",
                    color: canSubmit() && !isLoading ? "#fff" : "#b0a898",
                    cursor: canSubmit() && !isLoading ? "pointer" : "not-allowed",
                  }}
                >
                  {isLoading ? "Opening WhatsApp..." : "Continue in WhatsApp"}
                </button>

              </div>
            </div>
          </form>

          <p className="text-center text-xs mt-6" style={{ color: "var(--cv-muted)" }}>
            Nothing is sent automatically. Your details stay in this browser until you choose WhatsApp or email.
          </p>
        </div>
      </section>
    </div>
  )
}
