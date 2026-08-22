"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"
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

const getContactEntryContext = () => {
  if (typeof window === "undefined") return { entry_point: "direct", requested_service: "" }
  const params = new URLSearchParams(window.location.search)
  return {
    entry_point: params.get("from") || "direct",
    requested_service: params.get("service") || "",
  }
}

export function ContactPage() {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showFallback, setShowFallback] = useState(false)
  const [questionnaireUrl, setQuestionnaireUrl] = useState("")
  const [questionnaireSent, setQuestionnaireSent] = useState(false)
  const [requestId, setRequestId] = useState("")
  const formStarted = useRef(false)
  const formReadyTracked = useRef(false)
  const requestedServiceInterest = useSyncExternalStore(
    subscribeToLocation,
    getServiceInterestFromLocation,
    getServerServiceInterest,
  )
  const serviceInterest = formData.serviceInterest || requestedServiceInterest

  const updateFormData = <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => {
    if (!formStarted.current) {
      formStarted.current = true
      trackEvent("consultation_form_started", {
        page_path: "/contact/",
        service_interest: field === "serviceInterest" ? String(value) : serviceInterest,
        ...getContactEntryContext(),
      })
    }
    setFormData((previous) => ({ ...previous, [field]: value }))
  }

  const canSubmit = Boolean(
    serviceInterest &&
      formData.name.trim() &&
      formData.email.trim() &&
      formData.eventTimeframe.trim() &&
      formData.privacyConsent,
  )

  useEffect(() => {
    if (!canSubmit || formReadyTracked.current) return
    formReadyTracked.current = true
    trackEvent("consultation_form_ready", {
      service_interest: serviceInterest,
      ...getContactEntryContext(),
    })
  }, [canSubmit, serviceInterest])

  const fallbackText = useMemo(
    () =>
      [
        "Hello CeremonyVerse, I would like to request my free 30-minute consultation.",
        `Service: ${serviceInterest || "Not provided"}`,
        `Name: ${formData.name || "Not provided"}`,
        `Email: ${formData.email || "Not provided"}`,
        `Wedding timeframe: ${formData.eventTimeframe || "Not provided"}`,
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
  const schedulingEmailBody = [
    "Hello CeremonyVerse, I registered on the website and would like to arrange my free 30-minute consultation.",
    `Request ID: ${requestId}`,
    `Name: ${formData.name}`,
    `Service: ${serviceInterest}`,
    "My preferred dates and times are:",
  ].join("\n")
  const schedulingEmailUrl = `mailto:hello@ceremonyverse.com?subject=${encodeURIComponent(
    "Arrange my CeremonyVerse consultation",
  )}&body=${encodeURIComponent(schedulingEmailBody)}`

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!canSubmit || isLoading) return

    setIsLoading(true)
    setError("")
    setShowFallback(false)

    const acquisition = getAcquisitionContext()
    const entryContext = getContactEntryContext()
    const submissionId = (() => {
      const key = "ceremonyverseConsultationSubmissionId"
      const existing = window.sessionStorage.getItem(key)
      if (existing) return existing
      const created = crypto.randomUUID()
      window.sessionStorage.setItem(key, created)
      return created
    })()
    trackEvent("consultation_registration_submitted", {
      service_interest: serviceInterest,
      source: acquisition.source,
      medium: acquisition.medium,
      ...entryContext,
    })

    try {
      const response = await fetch("/api/consultation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          clientCountry: formData.clientCountry || undefined,
          serviceInterest,
          submissionId,
          attribution: acquisition,
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
        source: acquisition.source,
        medium: acquisition.medium,
        ...entryContext,
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            Registration complete
          </p>
          <h1 className="font-serif text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
            Thank you, {formData.name}.
          </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#4d403a]">
                Choose the contact method that is easiest for you, then share your preferred dates and times. Complete the
                questionnaire before the call so Mini can prepare around your wedding. If you already completed this request’s
                questionnaire, use the same request link and ignore any duplicate reminder.
              </p>
          <div className="mt-8 rounded-3xl border border-[#e6dfd5] bg-white p-7 text-left sm:p-8">
            <h2 className="text-center font-serif text-2xl font-semibold text-[#1f1f1f]">Choose how to arrange your call</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
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
                className="inline-flex items-center justify-center rounded-full bg-[#128c7e] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                WhatsApp Availability
              </a>
              <a
                href="tel:+12153419990"
                onClick={() =>
                  trackEvent("consultation_scheduling_click", {
                    scheduling_method: "phone",
                    service_interest: serviceInterest,
                  })
                }
                className="inline-flex items-center justify-center rounded-full bg-[#7a6841] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Call (215) 341-9990
              </a>
              <a
                href={schedulingEmailUrl}
                onClick={() =>
                  trackEvent("consultation_scheduling_click", {
                    scheduling_method: "email",
                    service_interest: serviceInterest,
                  })
                }
                className="inline-flex items-center justify-center rounded-full border border-[#7a6841] px-5 py-3 text-center text-sm font-semibold text-[#7a6841]"
              >
                Email Preferred Times
              </a>
            </div>
            <p className="mt-5 text-center text-sm leading-6 text-[#6a5b52]">Mini confirms the agreed time directly after you share availability. No payment or calendar account is required.</p>
          </div>
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
            <h2 className="font-serif text-2xl font-semibold text-[#1f1f1f]">Helpful items for the call</h2>
            <ul className="mt-5 space-y-3 text-[#4d403a]">
              <li>• Any current resort proposal, room-block terms, or venue information.</li>
              <li>• Your event list and the traditions your family considers essential.</li>
              <li>• Known estimates and what the working budget must cover.</li>
            </ul>
          </div>
          <div className="mt-8 rounded-2xl border border-[#d7c7a4] bg-[#f4eee4] p-8 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">A short planning preview</p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-[#1f1f1f]">See how a clear planning picture can begin.</h2>
            <p className="mt-4 leading-7 text-[#4d403a]">Explore an original CeremonyVerse illustration of the ritual, family, and destination questions Mini helps bring into focus. It is fictional and does not replace your questionnaire or consultation.</p>
            <Link
              href="/planning-preview/"
              onClick={() => trackEvent("consultation_planning_preview_opened", { source: "registration_confirmation", service_interest: serviceInterest })}
              className="mt-6 inline-flex rounded-full border border-[#7a6841] px-7 py-3 text-sm font-semibold text-[#7a6841]"
            >
              Open My Planning Preview
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
            Your First 30-Minute Consultation Is Free
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#4d403a]">
            Share four essentials below, then choose WhatsApp, phone, or email to arrange your consultation. The
            remaining planning questions arrive automatically by email so registration stays short.
          </p>
          <ol className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-3">
            <li className="rounded-2xl border border-[#e6dfd5] bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">1 · Register</span>
              <p className="mt-2 text-sm leading-6 text-[#4d403a]">Share service, name, email, and wedding timeframe.</p>
            </li>
            <li className="rounded-2xl border border-[#e6dfd5] bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">2 · Arrange</span>
              <p className="mt-2 text-sm leading-6 text-[#4d403a]">Choose WhatsApp, phone, or email to share availability.</p>
            </li>
            <li className="rounded-2xl border border-[#e6dfd5] bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">3 · Prepare</span>
              <p className="mt-2 text-sm leading-6 text-[#4d403a]">Complete the 3–5 minute questionnaire before the call.</p>
            </li>
          </ol>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#d7c7a4] bg-[#f4eee4] px-6 py-5 text-left text-sm leading-6 text-[#4d403a]">
            <p className="font-semibold text-[#1f1f1f]">The free call and paid services are separate.</p>
            <p className="mt-2">
              Your first 30-minute consultation requires no payment or contract. The $300 feasibility plan and all
              planning or sourcing packages are separate paid services offered only after you review a written scope.
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

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="serviceInterest" className={labelClass}>
                  What do you need? <span className="text-[#7a6841]">*</span>
                </label>
                <select id="serviceInterest" value={serviceInterest} onChange={(event) => updateFormData("serviceInterest", event.target.value)} className={inputClass} required>
                  <option value="">Select a service</option>
                  <option value="Destination Wedding Feasibility & Action Plan ($300)">$300 Destination Wedding Feasibility &amp; Action Plan</option>
                  <option value="Destination wedding planning">Destination wedding planning and support</option>
                  <option value="India shopping">India wedding shopping and sourcing</option>
                  <option value="India shopping + destination wedding planning">Both destination planning and India sourcing</option>
                  <option value="Not sure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className={labelClass}>Full name <span className="text-[#7a6841]">*</span></label>
                <input id="name" className={inputClass} value={formData.name} onChange={(event) => updateFormData("name", event.target.value)} autoComplete="name" required />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email <span className="text-[#7a6841]">*</span></label>
                <input id="email" type="email" className={inputClass} value={formData.email} onChange={(event) => updateFormData("email", event.target.value)} autoComplete="email" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="eventTimeframe" className={labelClass}>Wedding timeframe <span className="text-[#7a6841]">*</span></label>
                <input id="eventTimeframe" className={inputClass} value={formData.eventTimeframe} onChange={(event) => updateFormData("eventTimeframe", event.target.value)} placeholder="Exact date, month/year, or not decided" required />
              </div>
            </div>

            <p className="mt-6 rounded-xl bg-[#f4eee4] px-4 py-3 text-sm leading-6 text-[#4d403a]">
              After registration, the short questionnaire asks about destination, guests, ceremonies, budget scope,
              and optional sourcing so Mini can prepare for your call.
            </p>

            <label className="mt-7 flex items-start gap-3 text-sm leading-6 text-[#4d403a]">
              <input
                type="checkbox"
                checked={formData.privacyConsent}
                onChange={(event) => updateFormData("privacyConsent", event.target.checked)}
                className="mt-1 h-4 w-4 accent-[#7a6841]"
                required
              />
              <span>
                I agree that CeremonyVerse may use these details to respond to my consultation request.
                This does not subscribe me to marketing. See the <Link href="/privacy/" className="font-semibold text-[#7a6841] underline">privacy policy</Link>.
              </span>
            </label>

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

            <button
              type="submit"
              disabled={!canSubmit || isLoading}
              className="mt-8 w-full rounded-full px-6 py-4 text-sm font-semibold transition disabled:cursor-not-allowed disabled:bg-[#e6dfd5] disabled:text-[#9a948d]"
              style={canSubmit && !isLoading ? { background: "#7a6841", color: "#fff" } : undefined}
            >
              {isLoading ? "Sending Securely…" : "Request My Free 30-Minute Consultation"}
            </button>
            <p className="mt-4 text-center text-xs leading-5 text-[#6d625c]">
              No payment is required to register or attend the first 30-minute consultation. After registration,
              choose how to share your availability and complete the emailed questionnaire before the call. Do not include sensitive documents.
            </p>
          </div>
        </form>
      </section>
    </main>
  )
}
