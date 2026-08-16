// CEREMONYVERSE EDITORIAL STYLE: Preserve the warm, restrained destination-wedding visual system; change only copy and conversion flow, never the established design language.
"use client"

import Link from "next/link"
import { useMemo, useRef, useState, useSyncExternalStore } from "react"
import { getAcquisitionContext, trackEvent, trackLead } from "@/lib/analytics"

interface LeadFormData {
  serviceInterest: string
  name: string
  email: string
  phone: string
  clientCountry: string
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
  clientCountry: "",
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
    sourcing: "India shopping",
    mexico: "Destination wedding planning",
    feasibility: "Destination Wedding Feasibility & Action Plan ($300)",
    both: "India shopping + destination wedding planning",
  }
  return requestedService ? serviceByQuery[requestedService] || "" : ""
}

export function ContactPage() {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData)
  const [formStep, setFormStep] = useState<1 | 2>(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showFallback, setShowFallback] = useState(false)
  const [questionnaireUrl, setQuestionnaireUrl] = useState("")
  const [questionnaireSent, setQuestionnaireSent] = useState(false)
  const [requestId, setRequestId] = useState("")
  const formStarted = useRef(false)
  const requestedServiceInterest = useSyncExternalStore(
    subscribeToLocation,
    getServiceInterestFromLocation,
    getServerServiceInterest,
  )
  const serviceInterest = formData.serviceInterest || requestedServiceInterest

  const updateFormData = <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => {
    if (!formStarted.current) {
      formStarted.current = true
      trackEvent("consultation_form_started", { page_path: "/contact/" })
    }
    setFormData((previous) => ({ ...previous, [field]: value }))
  }

  const canSubmit = Boolean(
    serviceInterest &&
      formData.name.trim() &&
      formData.email.trim() &&
      formData.clientCountry.trim() &&
      formData.eventTimeframe.trim() &&
      formData.eventLocation.trim() &&
      formData.guestCount.trim() &&
      formData.privacyConsent,
  )

  const continueToPreparation = () => {
    if (!canSubmit) return
    trackEvent("consultation_step_completed", {
      form_step: "essentials",
      service_interest: serviceInterest,
      event_timeframe: formData.eventTimeframe,
      event_location_status: formData.eventLocation,
      guest_count_band: formData.guestCount,
    })
    setFormStep(2)
  }

  const fallbackText = useMemo(
    () =>
      [
        "Hello CeremonyVerse, I would like to request my free 30-minute consultation.",
        `Service: ${serviceInterest || "Not provided"}`,
        `Name: ${formData.name || "Not provided"}`,
        `Email: ${formData.email || "Not provided"}`,
        `Phone / WhatsApp: ${formData.phone || "Not provided"}`,
        `Home country: ${formData.clientCountry || "Not provided"}`,
        `Wedding timeframe: ${formData.eventTimeframe || "Not provided"}`,
        `Destination or location: ${formData.eventLocation || "Not provided"}`,
        `Estimated guests: ${formData.guestCount || "Not provided"}`,
      ].join("\n"),
    [formData, serviceInterest],
  )

  const whatsappFallbackUrl = `https://wa.me/12153419990?text=${encodeURIComponent(fallbackText)}`
  const emailFallbackUrl = `mailto:hello@ceremonyverse.com?subject=${encodeURIComponent(
    "CeremonyVerse consultation request",
  )}&body=${encodeURIComponent(fallbackText)}`

  const schedulingMessage = [
    "Hello CeremonyVerse, I registered on the website and would like to request a time for my free 30-minute consultation.",
    `Request ID: ${requestId}`,
    `Name: ${formData.name}`,
    `Service: ${serviceInterest}`,
  ].join("\n")
  const schedulingUrl = `https://wa.me/12153419990?text=${encodeURIComponent(schedulingMessage)}`

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
        questionnaireSent?: boolean
        questionnaireUrl?: string
        requestId?: string
      }

      if (!response.ok || !result.success) {
        trackEvent("consultation_registration_failed", {
          failure_type: result.fallbackRequired ? "delivery_unavailable" : "request_rejected",
        })
        setError(result.error || "We could not deliver the form. Please use WhatsApp or email below.")
        setShowFallback(Boolean(result.fallbackRequired))
        return
      }

      trackLead("form", "consultation-request")
      trackEvent("consultation_registration_completed", {
        service_interest: serviceInterest,
        questionnaire_email_confirmed: Boolean(result.questionnaireSent),
      })
      const submittedRequestId = result.requestId || ""
      setQuestionnaireUrl(result.questionnaireUrl || "")
      setQuestionnaireSent(Boolean(result.questionnaireSent))
      setRequestId(submittedRequestId)
      window.sessionStorage.setItem(
        "ceremonyverseConsultationPrefill",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          serviceInterest,
          eventTimeframe: formData.eventTimeframe,
        }),
      )
      setIsSubmitted(true)
    } catch {
      trackEvent("consultation_registration_failed", { failure_type: "network_error" })
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Your planning request is in</p>
          <h1 className="font-serif text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
            Thank you, {formData.name}.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#4d403a]">
            Your first 30-minute CeremonyVerse consultation is free. Choose a time now, then complete the short pre-call questionnaire so the conversation can begin with your family’s actual decisions—not a generic script.
          </p>
          <a
            href={schedulingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("consultation_scheduling_click", {
                scheduling_method: "whatsapp",
                service_interest: serviceInterest,
              })
            }
            className="mt-8 inline-flex rounded-full bg-[#128c7e] px-7 py-3.5 text-sm font-semibold text-white"
          >
            Choose My Consultation Time
          </a>
          {questionnaireUrl ? (
            <div className="mt-8 rounded-2xl border border-[#d7c7a4] bg-[#f4eee4] p-8 text-left">
              <h2 className="font-serif text-2xl font-semibold text-[#1f1f1f]">Complete the pre-call questionnaire</h2>
              <p className="mt-4 leading-7 text-[#4d403a]">
                {questionnaireSent
                  ? "We emailed your questionnaire automatically. Most questions are optional, and it usually takes 3–5 minutes."
                  : "Your registration arrived, but the questionnaire email could not be confirmed. You can complete it securely here."}
              </p>
              <Link
                href={questionnaireUrl}
                onClick={() =>
                  trackEvent("consultation_questionnaire_opened", {
                    source: "registration_confirmation",
                    service_interest: serviceInterest,
                  })
                }
                className="mt-6 inline-flex rounded-full border border-[#7a6841] px-7 py-3 text-sm font-semibold text-[#7a6841]"
              >
                Complete My Questionnaire
              </Link>
              <p className="mt-4 text-sm leading-6 text-[#6a5b52]">
                Scheduling and questionnaire completion can happen in either order; the questionnaire is due before the call.
              </p>
            </div>
          ) : null}
          <div className="mt-10 rounded-2xl border border-[#e6dfd5] bg-white p-8 text-left">
            <h2 className="font-serif text-2xl font-semibold text-[#1f1f1f]">Bring what you have—not a perfect brief</h2>
            <ul className="mt-5 space-y-3 text-[#4d403a]">
              <li>• A date range, estimated guest count, and any events your family considers essential.</li>
              <li>• Mexico ideas, current resort proposals, room-block terms, or venue information if you have them.</li>
              <li>• The question your family needs answered next and the people who should be part of the decision.</li>
              <li>• Please do not send payment details, travel documents, or other sensitive personal information.</li>
            </ul>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Gujarati &amp; Hindu destination wedding planning in Mexico</p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#1f1f1f] sm:text-6xl">
            Start with the Mexico wedding decision your family needs to make next.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d403a]">
            Share the essentials below. CeremonyVerse will use them to prepare a family-centered conversation about your ceremonies, resort questions, guest experience, and local-planning needs. You do not need a finished resort proposal or a complete guest list to begin.
          </p>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#d7c7a4] bg-[#f4eee4] px-6 py-5 text-left text-sm leading-6 text-[#4d403a]">
            <p className="font-semibold text-[#1f1f1f]">The free call and any paid service are separate.</p>
            <p className="mt-2">
              Your first 30-minute consultation is free. It does not reserve a resort, vendor, date, or planning package. CeremonyVerse will clarify the most important next decision before recommending a paid service or private proposal, if either is appropriate.
            </p>
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

            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7a6841]">
              <span className={formStep === 1 ? "flex h-7 w-7 items-center justify-center rounded-full bg-[#7a6841] text-white" : "flex h-7 w-7 items-center justify-center rounded-full border border-[#7a6841]"}>1</span>
              <span>Start your request</span>
              <span className="h-px w-8 bg-[#d7c7a4]" />
              <span className={formStep === 2 ? "flex h-7 w-7 items-center justify-center rounded-full bg-[#7a6841] text-white" : "flex h-7 w-7 items-center justify-center rounded-full border border-[#d7c7a4] text-[#8a7d73]"}>2</span>
              <span className={formStep === 2 ? "text-[#7a6841]" : "text-[#8a7d73]"}>Help us prepare</span>
            </div>

            {formStep === 1 ? (
              <>
                <div className="mb-7">
                  <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">Start your free Mexico wedding planning request</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-[#4d403a]">Tell us the essentials so we can prepare a useful call. We use these details only to respond to your request and prepare the conversation.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="serviceInterest" className={labelClass}>What would be most useful right now? <span className="text-[#7a6841]">*</span></label>
                    <select id="serviceInterest" value={serviceInterest} onChange={(event) => updateFormData("serviceInterest", event.target.value)} className={inputClass} required>
                      <option value="">Select a planning need</option>
                      <option value="Destination wedding planning">I need Gujarati / Hindu multi-day planning support</option>
                      <option value="Destination Wedding Feasibility & Action Plan ($300)">I have resort proposals or decisions to compare</option>
                      <option value="India shopping">I am also interested in India wedding shopping and sourcing</option>
                      <option value="India shopping + destination wedding planning">I need both destination planning and India sourcing</option>
                      <option value="Not sure">I am not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="name" className={labelClass}>First name <span className="text-[#7a6841]">*</span></label>
                    <input id="name" className={inputClass} value={formData.name} onChange={(event) => updateFormData("name", event.target.value)} autoComplete="name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email address <span className="text-[#7a6841]">*</span></label>
                    <input id="email" type="email" className={inputClass} value={formData.email} onChange={(event) => updateFormData("email", event.target.value)} autoComplete="email" required />
                  </div>
                  <div>
                    <label htmlFor="clientCountry" className={labelClass}>Where do you live? <span className="text-[#7a6841]">*</span></label>
                    <select id="clientCountry" className={inputClass} value={formData.clientCountry} onChange={(event) => updateFormData("clientCountry", event.target.value)} required>
                      <option value="">Select</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventTimeframe" className={labelClass}>When is the wedding? <span className="text-[#7a6841]">*</span></label>
                    <select id="eventTimeframe" className={inputClass} value={formData.eventTimeframe} onChange={(event) => updateFormData("eventTimeframe", event.target.value)} required>
                      <option value="">Select a timeframe</option>
                      <option value="Less than 6 months">Less than 6 months</option>
                      <option value="6–9 months">6–9 months</option>
                      <option value="9–12 months">9–12 months</option>
                      <option value="12–18 months">12–18 months</option>
                      <option value="18+ months">18+ months</option>
                      <option value="Not decided yet">Not decided yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eventLocation" className={labelClass}>Where are you in the Mexico decision? <span className="text-[#7a6841]">*</span></label>
                    <select id="eventLocation" className={inputClass} value={formData.eventLocation} onChange={(event) => updateFormData("eventLocation", event.target.value)} required>
                      <option value="">Select one</option>
                      <option value="We have a resort">We have a resort</option>
                      <option value="We are comparing resorts">We are comparing resorts</option>
                      <option value="We have a region in mind">We have a region in mind</option>
                      <option value="We are exploring Mexico">We are exploring Mexico</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guestCount" className={labelClass}>Estimated guest count <span className="text-[#7a6841]">*</span></label>
                    <select id="guestCount" className={inputClass} value={formData.guestCount} onChange={(event) => updateFormData("guestCount", event.target.value)} required>
                      <option value="">Select a range</option>
                      <option value="Under 75">Under 75</option>
                      <option value="75–125">75–125</option>
                      <option value="126–200">126–200</option>
                      <option value="201–300">201–300</option>
                      <option value="300+">300+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>
                <label className="mt-7 flex items-start gap-3 text-sm leading-6 text-[#4d403a]">
                  <input type="checkbox" checked={formData.privacyConsent} onChange={(event) => updateFormData("privacyConsent", event.target.checked)} className="mt-1 h-4 w-4 accent-[#7a6841]" required />
                  <span>I agree that CeremonyVerse may use these details to respond to my consultation request. This does not subscribe me to marketing. See the <Link href="/privacy/" className="font-semibold text-[#7a6841] underline">privacy policy</Link>.</span>
                </label>
                <button type="button" onClick={continueToPreparation} disabled={!canSubmit} className="mt-8 w-full rounded-full px-6 py-4 text-sm font-semibold transition disabled:cursor-not-allowed disabled:bg-[#e6dfd5] disabled:text-[#9a948d]" style={canSubmit ? { background: "#7a6841", color: "#fff" } : undefined}>Continue to the planning questions</button>
              </>
            ) : (
              <>
                <div className="mb-7">
                  <h2 className="font-serif text-3xl font-semibold text-[#1f1f1f]">What would make the first call most useful?</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-[#4d403a]">These answers are optional. They help us begin with the right question rather than asking your family to repeat the same context later.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone / WhatsApp <span className="font-normal text-[#6d625c]">(optional)</span></label>
                    <input id="phone" type="tel" className={inputClass} value={formData.phone} onChange={(event) => updateFormData("phone", event.target.value)} autoComplete="tel" placeholder="Useful if you prefer a faster reply" />
                  </div>
                  <div>
                    <label htmlFor="eventCount" className={labelClass}>Which events are you considering? <span className="font-normal text-[#6d625c]">(optional)</span></label>
                    <select id="eventCount" className={inputClass} value={formData.eventCount} onChange={(event) => updateFormData("eventCount", event.target.value)}>
                      <option value="">Select the closest fit</option>
                      <option value="Welcome / Mehndi / Haldi">Welcome event, Mehndi, or Haldi</option>
                      <option value="Garba / Sangeet">Garba or Sangeet</option>
                      <option value="Baraat / Pheras">Baraat or Pheras</option>
                      <option value="Reception">Reception</option>
                      <option value="Multiple events">Multiple events</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="vision" className={labelClass}>Anything we should know before the call? <span className="font-normal text-[#6d625c]">(optional)</span></label>
                    <textarea id="vision" className={`${inputClass} min-h-32 resize-y`} value={formData.vision} onChange={(event) => updateFormData("vision", event.target.value)} placeholder="For example: the decision that feels most unclear, a resort proposal you want to compare, or a family priority. Please do not include payment details, travel documents, or other sensitive personal information." />
                  </div>
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => setFormStep(1)} className="rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841]">Back to essentials</button>
                  <button type="submit" disabled={!canSubmit || isLoading} className="flex-1 rounded-full px-6 py-4 text-sm font-semibold transition disabled:cursor-not-allowed disabled:bg-[#e6dfd5] disabled:text-[#9a948d]" style={canSubmit && !isLoading ? { background: "#7a6841", color: "#fff" } : undefined}>{isLoading ? "Sending Securely…" : "Request My Free 30-Minute Planning Call"}</button>
                </div>
              </>
            )}

            {error ? (
              <div className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-900" role="alert" aria-live="polite">
                <p>{error}</p>
                {showFallback ? (
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a href={whatsappFallbackUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#128c7e] px-5 py-3 text-center font-semibold text-white">
                      Send with WhatsApp
                    </a>
                    <a href={emailFallbackUrl} className="rounded-full border border-red-800 px-5 py-3 text-center font-semibold text-red-900">
                      Send by Email
                    </a>
                  </div>
                ) : null}
              </div>
            ) : null}

            <p className="mt-4 text-center text-xs leading-5 text-[#6d625c]">
              No payment is required to register or attend the first 30-minute consultation. A consultation request does not reserve a resort, vendor, wedding date, or planning package.
            </p>
          </div>
        </form>
      </section>
    </main>
  )
}
