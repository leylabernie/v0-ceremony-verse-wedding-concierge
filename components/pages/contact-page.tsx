"use client"

import Link from "next/link"
import { useMemo, useState, useSyncExternalStore } from "react"
import { getAcquisitionContext, trackLead } from "@/lib/analytics"

interface LeadFormData {
  serviceInterest: string
  name: string
  email: string
  phone: string
  eventTimeframe: string
  eventLocation: string
  guestCount: string
  eventCount: string
  budgetRange: string
  budgetIncludes: string
  travelOrigins: string
  outfitPartySize: string
  vision: string
  referralSource: string
  privacyConsent: boolean
  website: string
}

const initialFormData: LeadFormData = {
  serviceInterest: "",
  name: "",
  email: "",
  phone: "",
  eventTimeframe: "",
  eventLocation: "",
  guestCount: "",
  eventCount: "",
  budgetRange: "",
  budgetIncludes: "",
  travelOrigins: "",
  outfitPartySize: "",
  vision: "",
  referralSource: "",
  privacyConsent: false,
  website: "",
}

const inputClass =
  "w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#7a6841] focus:ring-2 focus:ring-[#7a6841]/15"

const labelClass = "mb-2 block text-sm font-semibold text-[#1f1f1f]"

const subscribeToLocation = () => () => undefined
const getServerServiceInterest = () => ""
const getServiceInterestFromLocation = () => {
  const requestedService = new URLSearchParams(window.location.search).get("service")
  const serviceByQuery: Record<string, string> = {
    india: "India shopping",
    mexico: "Destination wedding planning",
    feasibility: "Destination Wedding Feasibility & Action Plan ($300)",
    both: "India shopping + destination wedding planning",
  }
  return requestedService ? serviceByQuery[requestedService] || "" : ""
}

export function ContactPage() {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showFallback, setShowFallback] = useState(false)
  const requestedServiceInterest = useSyncExternalStore(
    subscribeToLocation,
    getServiceInterestFromLocation,
    getServerServiceInterest,
  )
  const serviceInterest = formData.serviceInterest || requestedServiceInterest
  const destinationService = serviceInterest.toLowerCase().includes("destination")

  const updateFormData = <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => {
    setFormData((previous) => ({ ...previous, [field]: value }))
  }

  const canSubmit = Boolean(
    serviceInterest &&
      formData.name.trim() &&
      formData.email.trim() &&
      formData.eventTimeframe.trim() &&
      formData.privacyConsent,
  )

  const fallbackText = useMemo(
    () =>
      [
        "Hello CeremonyVerse, I would like to request a free fit call.",
        `Service: ${serviceInterest || "Not provided"}`,
        `Name: ${formData.name || "Not provided"}`,
        `Email: ${formData.email || "Not provided"}`,
        `Phone / WhatsApp: ${formData.phone || "Not provided"}`,
        `Wedding timeframe: ${formData.eventTimeframe || "Not provided"}`,
        `Destination or location: ${formData.eventLocation || "Not provided"}`,
        `Estimated guests: ${formData.guestCount || "Not provided"}`,
        `Number of events: ${formData.eventCount || "Not provided"}`,
        `Budget range: ${formData.budgetRange || "Not provided"}`,
        `What the budget must cover: ${formData.budgetIncludes || "Not provided"}`,
        `Travel origins: ${formData.travelOrigins || "Not provided"}`,
        `Outfit party size: ${formData.outfitPartySize || "Not provided"}`,
        `Priorities and concerns: ${formData.vision || "Not provided"}`,
      ].join("\n"),
    [formData, serviceInterest],
  )

  const whatsappFallbackUrl = `https://wa.me/12153419990?text=${encodeURIComponent(fallbackText)}`
  const emailFallbackUrl = `mailto:bhamini@ceremonyverse.com?subject=${encodeURIComponent(
    "CeremonyVerse consultation request",
  )}&body=${encodeURIComponent(fallbackText)}`

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!canSubmit || isLoading) return

    setIsLoading(true)
    setError("")
    setShowFallback(false)

    try {
      const response = await fetch("/api/consultation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceInterest,
          attribution: getAcquisitionContext(),
        }),
      })
      const result = (await response.json()) as {
        success?: boolean
        fallbackRequired?: boolean
        error?: string
      }

      if (!response.ok || !result.success) {
        setError(result.error || "We could not deliver the form. Please use WhatsApp or email below.")
        setShowFallback(Boolean(result.fallbackRequired))
        return
      }

      trackLead("form", "consultation-request")
      setIsSubmitted(true)
    } catch {
      setError("We could not connect to the secure form. Please use WhatsApp or email below.")
      setShowFallback(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#faf8f5] px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#7a6841] text-3xl text-[#7a6841]">
            ✓
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            Request received
          </p>
          <h1 className="font-serif text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
            Thank you, {formData.name}.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#4d403a]">
            Your information was delivered securely. CeremonyVerse will review your wedding timeframe, destination,
            guest needs, and priorities before replying through the contact details you provided.
          </p>
          <div className="mt-10 rounded-2xl border border-[#e6dfd5] bg-white p-8 text-left">
            <h2 className="font-serif text-2xl font-semibold text-[#1f1f1f]">Use the waiting time well</h2>
            <ul className="mt-5 space-y-3 text-[#4d403a]">
              <li>• List what the total budget must include, especially guest or VIP travel.</li>
              <li>• Note any resorts already considered and whether a deposit has been paid.</li>
              <li>• Write down Gujarati, Hindu, Jain-food, ceremony, or family requirements.</li>
              <li>• Gather any room-block or venue proposal you already received.</li>
            </ul>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/planning-tools/"
              className="rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white"
            >
              Open Planning Tools
            </Link>
            <Link
              href="/"
              className="rounded-full border border-[#7a6841] px-7 py-3 text-sm font-semibold text-[#7a6841]"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            Begin with the facts
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#1f1f1f] sm:text-6xl">
            Request a Private Wedding Fit Call
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d403a]">
            Tell us what you are planning, what the budget must cover, and where your guests are traveling from.
            CeremonyVerse supports Gujarati and Hindu destination weddings across Mexico and Punta Cana, plus wedding
            shopping and sourcing from India.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-[#5e4a40]">
            <a className="font-semibold text-[#128c7e]" href="https://wa.me/12153419990" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <span aria-hidden="true">·</span>
            <a className="font-semibold text-[#7a6841]" href="mailto:bhamini@ceremonyverse.com">
              bhamini@ceremonyverse.com
            </a>
            <span aria-hidden="true">·</span>
            <span>Free 30-minute fit call · No payment required to submit</span>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[#e6dfd5] bg-white p-6 shadow-sm sm:p-10">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(event) => updateFormData("website", event.target.value)}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="serviceInterest" className={labelClass}>
                  What do you need? <span className="text-[#7a6841]">*</span>
                </label>
                <select
                  id="serviceInterest"
                  value={serviceInterest}
                  onChange={(event) => updateFormData("serviceInterest", event.target.value)}
                  className={inputClass}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Destination Wedding Feasibility & Action Plan ($300)">$300 Destination Wedding Feasibility &amp; Action Plan</option>
                  <option value="Destination wedding planning">Destination wedding planning and support</option>
                  <option value="India shopping">India wedding shopping and sourcing</option>
                  <option value="India shopping + destination wedding planning">Both destination planning and India sourcing</option>
                  <option value="Not sure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className={labelClass}>
                  Full name <span className="text-[#7a6841]">*</span>
                </label>
                <input id="name" className={inputClass} value={formData.name} onChange={(event) => updateFormData("name", event.target.value)} autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-[#7a6841]">*</span>
                </label>
                <input id="email" type="email" className={inputClass} value={formData.email} onChange={(event) => updateFormData("email", event.target.value)} autoComplete="email" required />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
                <input id="phone" type="tel" className={inputClass} value={formData.phone} onChange={(event) => updateFormData("phone", event.target.value)} autoComplete="tel" />
              </div>
              <div>
                <label htmlFor="eventTimeframe" className={labelClass}>
                  Wedding timeframe <span className="text-[#7a6841]">*</span>
                </label>
                <input id="eventTimeframe" className={inputClass} value={formData.eventTimeframe} onChange={(event) => updateFormData("eventTimeframe", event.target.value)} placeholder="Exact date, month/year, or not decided" required />
              </div>

              <div>
                <label htmlFor="eventLocation" className={labelClass}>Destination or event location</label>
                <input id="eventLocation" className={inputClass} value={formData.eventLocation} onChange={(event) => updateFormData("eventLocation", event.target.value)} placeholder={destinationService ? "Mexico region, resort, or Punta Cana" : "City, state, or destination"} />
              </div>
              <div>
                <label htmlFor="travelOrigins" className={labelClass}>Where will most guests travel from?</label>
                <input id="travelOrigins" className={inputClass} value={formData.travelOrigins} onChange={(event) => updateFormData("travelOrigins", event.target.value)} placeholder="For example: US, Canada, India" />
              </div>
              <div>
                <label htmlFor="guestCount" className={labelClass}>Estimated guests</label>
                <input id="guestCount" type="number" min="0" max="5000" className={inputClass} value={formData.guestCount} onChange={(event) => updateFormData("guestCount", event.target.value)} placeholder="150" />
              </div>
              <div>
                <label htmlFor="eventCount" className={labelClass}>Number of wedding events</label>
                <input id="eventCount" type="number" min="1" max="20" className={inputClass} value={formData.eventCount} onChange={(event) => updateFormData("eventCount", event.target.value)} placeholder="4" />
              </div>

              <div>
                <label htmlFor="budgetRange" className={labelClass}>Estimated total budget</label>
                <select id="budgetRange" className={inputClass} value={formData.budgetRange} onChange={(event) => updateFormData("budgetRange", event.target.value)}>
                  <option value="">Select a range</option>
                  <option value="Under $75,000">Under $75,000</option>
                  <option value="$75,000–$100,000">$75,000–$100,000</option>
                  <option value="$100,000–$150,000">$100,000–$150,000</option>
                  <option value="$150,000–$250,000">$150,000–$250,000</option>
                  <option value="$250,000+">$250,000+</option>
                  <option value="Not decided">Not decided</option>
                </select>
              </div>
              <div>
                <label htmlFor="outfitPartySize" className={labelClass}>People needing India-sourced outfits</label>
                <input id="outfitPartySize" type="number" min="0" max="100" className={inputClass} value={formData.outfitPartySize} onChange={(event) => updateFormData("outfitPartySize", event.target.value)} placeholder="0" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="budgetIncludes" className={labelClass}>What must that budget include?</label>
                <textarea id="budgetIncludes" rows={3} className={inputClass} value={formData.budgetIncludes} onChange={(event) => updateFormData("budgetIncludes", event.target.value)} placeholder="For example: resort events, decor, planner, flights and one-week stay for 15 family members, outfits, transfers..." />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="vision" className={labelClass}>Priorities, traditions, and biggest concerns</label>
                <textarea id="vision" rows={5} className={inputClass} value={formData.vision} onChange={(event) => updateFormData("vision", event.target.value)} placeholder="Tell us about Gujarati or Hindu ceremonies, Jain-food needs, resorts already considered, contracts or deposits, guest concerns, India sourcing, and what feels hardest right now." />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="referralSource" className={labelClass}>How did you find CeremonyVerse?</label>
                <input id="referralSource" className={inputClass} value={formData.referralSource} onChange={(event) => updateFormData("referralSource", event.target.value)} placeholder="Google, referral, WhatsApp, Instagram, or another source" />
              </div>
            </div>

            <label className="mt-7 flex items-start gap-3 text-sm leading-6 text-[#4d403a]">
              <input
                type="checkbox"
                checked={formData.privacyConsent}
                onChange={(event) => updateFormData("privacyConsent", event.target.checked)}
                className="mt-1 h-4 w-4 accent-[#7a6841]"
                required
              />
              <span>
                I agree that CeremonyVerse may use these details to respond to this request. This does not subscribe
                me to marketing. See the <Link href="/privacy/" className="font-semibold text-[#7a6841] underline">privacy policy</Link>.
              </span>
            </label>

            {error ? (
              <div className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-900" role="alert" aria-live="polite">
                <p>{error}</p>
                {showFallback ? (
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a href={whatsappFallbackUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackLead("whatsapp", "consultation-fallback")} className="rounded-full bg-[#128c7e] px-5 py-3 text-center font-semibold text-white">
                      Send with WhatsApp
                    </a>
                    <a href={emailFallbackUrl} onClick={() => trackLead("email", "consultation-fallback")} className="rounded-full border border-red-800 px-5 py-3 text-center font-semibold text-red-900">
                      Send by Email
                    </a>
                  </div>
                ) : null}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={!canSubmit || isLoading}
              className="mt-8 w-full rounded-full px-6 py-4 text-sm font-semibold transition disabled:cursor-not-allowed disabled:bg-[#e6dfd5] disabled:text-[#9a948d]"
              style={canSubmit && !isLoading ? { background: "#7a6841", color: "#fff" } : undefined}
            >
              {isLoading ? "Sending Securely…" : "Send Consultation Request"}
            </button>
            <p className="mt-4 text-center text-xs leading-5 text-[#6d625c]">
              Do not include passport numbers, payment-card details, medical records, or other sensitive documents in this form.
            </p>
          </div>
        </form>
      </section>
    </main>
  )
}
