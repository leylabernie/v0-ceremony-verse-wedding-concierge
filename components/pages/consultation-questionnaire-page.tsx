"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { trackEvent } from "@/lib/analytics"

const serviceFocusOptions = [
  "Destination wedding planning",
  "Destination Wedding Feasibility & Action Plan ($300)",
  "India wedding shopping and sourcing",
  "Both destination planning and India sourcing",
  "Not sure yet",
] as const

type ServiceFocus = (typeof serviceFocusOptions)[number]

interface QuestionnaireData {
  requestId: string
  serviceFocus: ServiceFocus | ""
  name: string
  email: string
  relationship: string
  decisionMakers: string
  weddingTimeframe: string
  dateFlexibility: string
  weekdayAvailability: string
  planningStage: string
  planningSupportStatus: string
  destinationIdeas: string
  resortStatusDetails: string
  likelyGuestCount: string
  maximumGuestCount: string
  guestsFromIndia: string
  events: string[]
  otherEvents: string
  essentialRequirements: string
  comfortableBudget: string
  budgetMustCover: string
  guestTravelPayment: string
  topPriorities: string
  possibleSimplifications: string
  biggestConcern: string
  indiaSourcingNeeds: string
  sourcingPartySize: string
  sourcingDeadline: string
  questionsForCall: string
  privacyConsent: boolean
  nurtureConsent: boolean
  website: string
}

const eventOptions = [
  "Welcome event",
  "Mehndi",
  "Garba or Sangeet",
  "Pithi, Haldi, or Vidhi",
  "Wedding ceremony",
  "Reception",
  "Farewell event",
  "Other",
]

const inputClass =
  "w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#7a6841] focus:ring-2 focus:ring-[#7a6841]/15"
const labelClass = "mb-2 block text-sm font-semibold text-[#1f1f1f]"
const sectionClass = "rounded-3xl border border-[#e6dfd5] bg-white p-6 shadow-sm sm:p-9"
const optionalDetailsClass = "rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] px-5 py-4"

function focusFromType(type: string | null): ServiceFocus | "" {
  const focusByType: Record<string, ServiceFocus> = {
    destination: "Destination wedding planning",
    feasibility: "Destination Wedding Feasibility & Action Plan ($300)",
    india: "India wedding shopping and sourcing",
    both: "Both destination planning and India sourcing",
    unsure: "Not sure yet",
  }
  return type ? focusByType[type] || "" : ""
}

function validRequestId(value: string | null): string {
  return value && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
    ? value
    : ""
}


function focusFromStored(value: string | undefined): ServiceFocus | "" {
  const focusByService: Record<string, ServiceFocus> = {
    "Destination wedding planning": "Destination wedding planning",
    "Destination Wedding Feasibility & Action Plan ($300)": "Destination Wedding Feasibility & Action Plan ($300)",
    "India shopping": "India wedding shopping and sourcing",
    "India shopping + destination wedding planning": "Both destination planning and India sourcing",
    "Not sure": "Not sure yet",
  }
  return value ? focusByService[value] || "" : ""
}

function readConsultationPrefill(): {
  name: string
  email: string
  serviceInterest: string
  eventTimeframe: string
} {
  if (typeof window === "undefined") {
    return { name: "", email: "", serviceInterest: "", eventTimeframe: "" }
  }

  try {
    const value = JSON.parse(window.sessionStorage.getItem("ceremonyverseConsultationPrefill") || "{}") as Record<string, unknown>
    return {
      name: typeof value.name === "string" ? value.name : "",
      email: typeof value.email === "string" ? value.email : "",
      serviceInterest: typeof value.serviceInterest === "string" ? value.serviceInterest : "",
      eventTimeframe: typeof value.eventTimeframe === "string" ? value.eventTimeframe : "",
    }
  } catch {
    return { name: "", email: "", serviceInterest: "", eventTimeframe: "" }
  }
}

export function ConsultationQuestionnairePage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState<QuestionnaireData>(() => {
    const prefill = readConsultationPrefill()
    return {
      requestId: validRequestId(searchParams.get("request")),
      serviceFocus: focusFromType(searchParams.get("type")) || focusFromStored(prefill.serviceInterest),
      name: prefill.name,
      email: prefill.email,
      relationship: "",
      decisionMakers: "",
      weddingTimeframe: prefill.eventTimeframe,
      dateFlexibility: "",
      weekdayAvailability: "",
      planningStage: "",
      planningSupportStatus: "",
      destinationIdeas: "",
      resortStatusDetails: "",
      likelyGuestCount: "",
      maximumGuestCount: "",
      guestsFromIndia: "",
      events: [],
      otherEvents: "",
      essentialRequirements: "",
      comfortableBudget: "",
      budgetMustCover: "",
      guestTravelPayment: "",
      topPriorities: "",
      possibleSimplifications: "",
      biggestConcern: "",
      indiaSourcingNeeds: "",
      sourcingPartySize: "",
      sourcingDeadline: "",
      questionsForCall: "",
      privacyConsent: false,
      nurtureConsent: false,
      website: "",
    }
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [showFallback, setShowFallback] = useState(false)

  const destinationRelevant =
    formData.serviceFocus !== "India wedding shopping and sourcing" && Boolean(formData.serviceFocus)
  const indiaRelevant =
    formData.serviceFocus === "India wedding shopping and sourcing" ||
    formData.serviceFocus === "Both destination planning and India sourcing" ||
    formData.serviceFocus === "Not sure yet"

  const updateFormData = <K extends keyof QuestionnaireData>(field: K, value: QuestionnaireData[K]) => {
    setFormData((previous) => ({ ...previous, [field]: value }))
  }

  const toggleEvent = (eventName: string) => {
    updateFormData(
      "events",
      formData.events.includes(eventName)
        ? formData.events.filter((event) => event !== eventName)
        : [...formData.events, eventName],
    )
  }

  const canSubmit = Boolean(
    formData.serviceFocus &&
      formData.name.trim() &&
      formData.email.trim() &&
      formData.relationship &&
      formData.weddingTimeframe.trim() &&
      formData.topPriorities.trim() &&
      formData.privacyConsent,
  )

  const emailFallbackUrl = useMemo(() => {
    const compact = (value: string) => value.trim().slice(0, 180) || "Not provided"
    const body = [
      "Hello CeremonyVerse, the pre-call questionnaire could not be submitted through the website.",
      `Request ID: ${formData.requestId || "Not provided"}`,
      `Consultation focus: ${formData.serviceFocus || "Not provided"}`,
      `Wedding timeframe: ${compact(formData.weddingTimeframe)}`,
      "Please let me know the safest way to share any additional planning context. I will not include payment information, identity documents, or private files in this email.",
    ].join("\n\n")
    return `mailto:hello@ceremonyverse.com?subject=${encodeURIComponent(
      "CeremonyVerse pre-call questionnaire",
    )}&body=${encodeURIComponent(body)}`
  }, [formData])

  const schedulingMessage = [
    "Hello, I completed the CeremonyVerse consultation request and pre-call questionnaire.",
    `Request ID: ${formData.requestId}`,
    "I would like to choose a time for my free consultation.",
  ].join("\n")
  const schedulingUrl = `https://wa.me/12153419990?text=${encodeURIComponent(schedulingMessage)}`
  const schedulingEmailMessage = [
    "Hello CeremonyVerse, I completed my consultation request and pre-call questionnaire.",
    `Request ID: ${formData.requestId}`,
    `Name: ${formData.name}`,
    `Service: ${formData.serviceFocus}`,
    "My preferred dates and times are:",
  ].join("\n")
  const schedulingEmailUrl = `mailto:hello@ceremonyverse.com?subject=${encodeURIComponent(
    "Arrange my CeremonyVerse consultation",
  )}&body=${encodeURIComponent(schedulingEmailMessage)}`

  const handleSubmitAttempt = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading || !formData.privacyConsent) return

    const firstInvalidAnswer = event.currentTarget.form?.querySelector<HTMLElement>(":invalid")
    if (!firstInvalidAnswer) return

    window.alert(
      "Please complete all required questions marked with an asterisk (*) and correct any highlighted answer before sending your questionnaire.",
    )
    firstInvalidAnswer.focus()
    firstInvalidAnswer.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (isLoading) return
    if (!canSubmit) {
      setError("Please complete the required questions marked with an asterisk before sending.")
      setShowFallback(false)
      return
    }

    setIsLoading(true)
    setError("")
    setShowFallback(false)

    try {
      const response = await fetch("/api/consultation-questionnaire/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = (await response.json()) as {
        success?: boolean
        fallbackRequired?: boolean
        error?: string
      }

      if (!response.ok || !result.success) {
        setError(result.error || "We could not deliver the questionnaire. Please email your answers below.")
        setShowFallback(Boolean(result.fallbackRequired))
        return
      }

      trackEvent("consultation_questionnaire_completed", {
        service_focus: formData.serviceFocus,
        linked_request: Boolean(formData.requestId),
      })
      setIsSubmitted(true)
    } catch {
      setError("We could not connect to the secure form. Your answers are still on this page; please email them below.")
      setShowFallback(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (!formData.requestId) {
    return (
      <main className="min-h-screen bg-[#faf8f5] px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
            Consultation request required
          </p>
          <h1 className="font-serif text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">
            Start with a consultation request
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#4d403a]">
            Submit the short consultation form first so we can connect your answers to your request.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white"
          >
            Start Consultation Request
          </Link>
        </div>
      </main>
    )
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#faf8f5] px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#7a6841] text-3xl text-[#7a6841]">
            ✓
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">Questionnaire received</p>
          <h1 className="font-serif text-4xl font-semibold text-[#1f1f1f] sm:text-5xl">Thank you, {formData.name}.</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#4d403a]">
            Your answers are ready for Mini. If you have not chosen a consultation time, you can do that now.
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
                    service_interest: formData.serviceFocus,
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
                    service_interest: formData.serviceFocus,
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
                    service_interest: formData.serviceFocus,
                  })
                }
                className="inline-flex items-center justify-center rounded-full border border-[#7a6841] px-5 py-3 text-center text-sm font-semibold text-[#7a6841]"
              >
                Email Preferred Times
              </a>
            </div>
            <p className="mt-5 text-center text-sm leading-6 text-[#6a5b52]">Mini confirms the agreed time directly after you share availability. No payment or calendar account is required.</p>
          </div>
          <div className="mt-9 rounded-2xl border border-[#e6dfd5] bg-white p-8 text-left">
            <h2 className="font-serif text-2xl font-semibold text-[#1f1f1f]">Helpful for the call</h2>
            <ul className="mt-5 space-y-3 text-[#4d403a]">
              <li>• Any resort proposal, room-block terms, or venue information.</li>
              <li>• Your event list and essential traditions.</li>
              <li>• Your working budget and what it needs to cover.</li>
            </ul>
          </div>
          <Link href="/planning-tools/" className="mt-8 inline-flex rounded-full border border-[#7a6841] px-7 py-3 text-sm font-semibold text-[#7a6841]">
            Review Planning Tools
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <section className="bg-[#1f1f1f] px-6 py-20 text-center text-white sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">Prepare for your conversation</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-6xl">Pre-Call Wedding Questionnaire</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Answer the required questions and anything else you know. Most couples finish in about 3–5 minutes.
          </p>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="mx-auto max-w-4xl space-y-7 px-6 py-16 sm:py-20">
        <div className="rounded-2xl border border-[#d7c7a4] bg-[#f4eee4] px-6 py-5 text-sm leading-6 text-[#4d403a]">
          <p className="font-semibold text-[#1f1f1f]">Only the essentials are required.</p>
          <p className="mt-1">Questions marked with an asterisk are required. Open the optional sections only if you have more to share.</p>
        </div>
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

        <section className={sectionClass}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">1 · About your request</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">Who should we prepare for?</h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="serviceFocus" className={labelClass}>What should the consultation focus on? <span className="text-[#7a6841]">*</span></label>
              <select id="serviceFocus" className={inputClass} value={formData.serviceFocus} onChange={(event) => updateFormData("serviceFocus", event.target.value as ServiceFocus | "")} required>
                <option value="">Select the closest option</option>
                {serviceFocusOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="name" className={labelClass}>Full name <span className="text-[#7a6841]">*</span></label>
              <input id="name" className={inputClass} value={formData.name} onChange={(event) => updateFormData("name", event.target.value)} autoComplete="name" required />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email used for the request <span className="text-[#7a6841]">*</span></label>
              <input id="email" type="email" className={inputClass} value={formData.email} onChange={(event) => updateFormData("email", event.target.value)} autoComplete="email" required />
            </div>
            <div>
              <label htmlFor="relationship" className={labelClass}>Your relationship to the couple <span className="text-[#7a6841]">*</span></label>
              <select id="relationship" className={inputClass} value={formData.relationship} onChange={(event) => updateFormData("relationship", event.target.value)} required>
                <option value="">Select</option>
                <option value="Bride">Bride</option>
                <option value="Groom">Groom</option>
                <option value="Parent">Parent</option>
                <option value="Family member">Family member</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <details className={`${optionalDetailsClass} sm:col-span-2`}>
              <summary className="cursor-pointer text-sm font-semibold text-[#7a6841]">Add the decision-makers (optional)</summary>
              <div className="mt-5">
                <label htmlFor="decisionMakers" className={labelClass}>Who will make the final planning and budget decisions?</label>
                <input id="decisionMakers" className={inputClass} value={formData.decisionMakers} onChange={(event) => updateFormData("decisionMakers", event.target.value)} placeholder="Couple, parents, or shared family decision" />
              </div>
            </details>
          </div>
        </section>

        <section className={sectionClass}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">2 · Wedding essentials</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold">When are you planning?</h2>
          <div className="mt-7">
            <label htmlFor="weddingTimeframe" className={labelClass}>Wedding date or timeframe <span className="text-[#7a6841]">*</span></label>
            <input id="weddingTimeframe" className={inputClass} value={formData.weddingTimeframe} onChange={(event) => updateFormData("weddingTimeframe", event.target.value)} placeholder="Exact date, month/year, or season" required />
          </div>
          <details className={`${optionalDetailsClass} mt-6`}>
            <summary className="cursor-pointer text-sm font-semibold text-[#7a6841]">Add dates, events, and traditions (optional)</summary>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="dateFlexibility" className={labelClass}>How flexible are the dates?</label>
                <select id="dateFlexibility" className={inputClass} value={formData.dateFlexibility} onChange={(event) => updateFormData("dateFlexibility", event.target.value)}>
                  <option value="">Select</option>
                  <option value="Exact dates are fixed">Exact dates are fixed</option>
                  <option value="Month is fixed; dates are flexible">Month is fixed; dates are flexible</option>
                  <option value="Season or year only">Season or year only</option>
                  <option value="Dates are not decided">Dates are not decided</option>
                </select>
              </div>
              {destinationRelevant ? (
                <div>
                  <label htmlFor="weekdayAvailability" className={labelClass}>Could weekday events work?</label>
                  <select id="weekdayAvailability" className={inputClass} value={formData.weekdayAvailability} onChange={(event) => updateFormData("weekdayAvailability", event.target.value)}>
                    <option value="">Select</option>
                    <option value="Yes — weekdays are possible">Yes — weekdays are possible</option>
                    <option value="Maybe — depends on pricing and travel">Maybe — depends on pricing and travel</option>
                    <option value="No — weekends only">No — weekends only</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              ) : null}
            </div>
            <fieldset className="mt-7">
              <legend className={labelClass}>Which events are currently planned?</legend>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {eventOptions.map((eventName) => (
                  <label key={eventName} className="flex items-start gap-3 rounded-xl border border-[#e6dfd5] bg-white px-4 py-3 text-sm leading-6 text-[#4d403a]">
                    <input type="checkbox" checked={formData.events.includes(eventName)} onChange={() => toggleEvent(eventName)} className="mt-1 h-4 w-4 accent-[#7a6841]" />
                    <span>{eventName}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            {formData.events.includes("Other") ? (
              <div className="mt-6">
                <label htmlFor="otherEvents" className={labelClass}>Other events</label>
                <input id="otherEvents" className={inputClass} value={formData.otherEvents} onChange={(event) => updateFormData("otherEvents", event.target.value)} />
              </div>
            ) : null}
            <div className="mt-6">
              <label htmlFor="essentialRequirements" className={labelClass}>Essential traditions, food, accessibility, or family needs</label>
              <textarea id="essentialRequirements" rows={4} className={inputClass} value={formData.essentialRequirements} onChange={(event) => updateFormData("essentialRequirements", event.target.value)} placeholder="For example: Gujarati or Hindu ceremony requirements, Jain meals, elder mobility, children, or interfaith considerations" />
            </div>
          </details>
        </section>

        {destinationRelevant ? (
          <details className={sectionClass}>
            <summary className="cursor-pointer list-none">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Optional details</span>
              <span className="mt-3 block font-serif text-3xl font-semibold">Destination, guests, and budget</span>
            </summary>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="planningStage" className={labelClass}>Current stage</label>
                <select id="planningStage" className={inputClass} value={formData.planningStage} onChange={(event) => updateFormData("planningStage", event.target.value)}>
                  <option value="">Select</option>
                  <option value="Exploring destinations">Exploring destinations</option>
                  <option value="Comparing resorts">Comparing resorts</option>
                  <option value="Requested or received proposals">Requested or received proposals</option