"use client"

import Link from "next/link"
import { useMemo, useState, useSyncExternalStore } from "react"
import { getAcquisitionContext, trackLead } from "@/lib/analytics"

interface LeadFormData {
  serviceInterest: string; name: string; email: string; phone: string; clientCountry: string; eventTimeframe: string; eventLocation: string; guestCount: string; eventCount: string; budgetRange: string; budgetIncludes: string; travelOrigins: string; outfitPartySize: string; vision: string; referralSource: string; privacyConsent: boolean; website: string
}

const initialFormData: LeadFormData = { serviceInterest: "", name: "", email: "", phone: "", clientCountry: "", eventTimeframe: "", eventLocation: "", guestCount: "", eventCount: "", budgetRange: "", budgetIncludes: "", travelOrigins: "", outfitPartySize: "", vision: "", referralSource: "", privacyConsent: false, website: "" }
const inputClass = "w-full rounded-xl border border-[#d5c9b8] bg-[#fffdf9] px-4 py-3.5 text-sm text-[#201d1a] outline-none transition focus:border-[#80683b] focus:ring-2 focus:ring-[#80683b]/15"
const labelClass = "mb-2 block text-sm font-semibold text-[#201d1a]"
const subscribeToLocation = () => () => undefined
const getServerServiceInterest = () => ""
const getServiceInterestFromLocation = () => {
  const requested = new URLSearchParams(window.location.search).get("service")
  const map: Record<string, string> = { india: "India shopping", sourcing: "India shopping", mexico: "Destination wedding planning", feasibility: "Destination Wedding Feasibility & Action Plan ($300)", both: "India shopping + destination wedding planning" }
  return requested ? map[requested] || "" : ""
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
  const requestedServiceInterest = useSyncExternalStore(subscribeToLocation, getServiceInterestFromLocation, getServerServiceInterest)
  const serviceInterest = formData.serviceInterest || requestedServiceInterest
  const destinationService = serviceInterest.toLowerCase().includes("destination")
  const update = <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => setFormData((previous) => ({ ...previous, [field]: value }))
  const canSubmit = Boolean(serviceInterest && formData.name.trim() && formData.email.trim() && formData.clientCountry.trim() && formData.eventTimeframe.trim() && formData.privacyConsent)

  const fallbackText = useMemo(() => ["Hello CeremonyVerse, I would like to schedule my free 30-minute consultation.", `Service: ${serviceInterest || "Not provided"}`, `Name: ${formData.name || "Not provided"}`, `Email: ${formData.email || "Not provided"}`, `Phone / WhatsApp: ${formData.phone || "Not provided"}`, `Wedding timeframe: ${formData.eventTimeframe || "Not provided"}`, `Destination: ${formData.eventLocation || "Not provided"}`].join("\n"), [formData, serviceInterest])
  const whatsappFallbackUrl = `https://wa.me/12153419990?text=${encodeURIComponent(fallbackText)}`
  const emailFallbackUrl = `mailto:hello@ceremonyverse.com?subject=${encodeURIComponent("CeremonyVerse consultation request")}&body=${encodeURIComponent(fallbackText)}`
  const schedulingMessage = ["Hello CeremonyVerse, I completed the website registration and would like to request a time for my free 30-minute consultation.", `Request ID: ${requestId}`, `Name: ${formData.name}`, `Service: ${serviceInterest}`].join("\n")
  const schedulingUrl = `https://wa.me/12153419990?text=${encodeURIComponent(schedulingMessage)}`

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!canSubmit || isLoading) return
    setIsLoading(true); setError(""); setShowFallback(false)
    try {
      const response = await fetch("/api/consultation/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, serviceInterest, attribution: getAcquisitionContext() }) })
      const result = (await response.json()) as { success?: boolean; fallbackRequired?: boolean; error?: string; questionnaireSent?: boolean; questionnaireUrl?: string; requestId?: string }
      if (!response.ok || !result.success) { setError(result.error || "We could not deliver the form. Please use WhatsApp or email below."); setShowFallback(Boolean(result.fallbackRequired)); return }
      trackLead("form", "consultation-request")
      setQuestionnaireUrl(result.questionnaireUrl || ""); setQuestionnaireSent(Boolean(result.questionnaireSent)); setRequestId(result.requestId || "")
      window.sessionStorage.setItem("ceremonyverseConsultationPrefill", JSON.stringify({ name: formData.name, email: formData.email, serviceInterest, eventTimeframe: formData.eventTimeframe }))
      setIsSubmitted(true)
    } catch { setError("We could not connect to the secure form. Please use WhatsApp or email below."); setShowFallback(true) }
    finally { setIsLoading(false) }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.26em] text-[#80683b]">You’re ready for the next step</p>
          <h1 className="mt-4 text-center font-serif text-5xl font-medium sm:text-6xl">Thank you, {formData.name}.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-[#51483f]">Your registration is complete. Choose a consultation time and complete the short questionnaire before the call so the conversation can focus on your wedding.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <article className="rounded-[2rem] border border-[#ded5c7] bg-[#fffdf9] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#80683b]">Step 1</p>
              <h2 className="mt-3 font-serif text-3xl font-medium">Request a time</h2>
              <p className="mt-4 leading-7 text-[#51483f]">Request an available time for your free 30-minute consultation. There is no approval wait.</p>
              <a href={schedulingUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackLead("whatsapp", "consultation-scheduling")} className="mt-7 inline-flex rounded-full bg-[#128c7e] px-6 py-3 text-sm font-semibold !text-white">Request an Available Time</a>
            </article>
            <article className="rounded-[2rem] border border-[#ded5c7] bg-[#fffdf9] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#80683b]">Step 2</p>
              <h2 className="mt-3 font-serif text-3xl font-medium">Complete the questionnaire</h2>
              <p className="mt-4 leading-7 text-[#51483f]">{questionnaireSent ? "Your questionnaire was emailed automatically. Most questions are optional and it usually takes 5–7 minutes." : "Your registration arrived. Use the secure questionnaire link below if the email does not arrive."}</p>
              {questionnaireUrl ? <Link href={questionnaireUrl} className="mt-7 inline-flex rounded-full border border-[#80683b] px-6 py-3 text-sm font-semibold text-[#80683b]">Open My Questionnaire</Link> : <p className="mt-6 text-sm text-[#6b5b4d]">Check your email for the questionnaire link.</p>}
            </article>
          </div>
          <p className="mt-7 text-center text-sm leading-6 text-[#6b5b4d]">Scheduling and the questionnaire may be completed in either order. Please finish both before the call.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <section className="bg-[#211d19] px-6 py-20 text-center text-white sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] !text-[#caa867]">Begin without pressure</p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-5xl font-medium !text-white sm:text-7xl">Your first 30 minutes are free.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 !text-white/72">Tell us where you are in the process. We’ll use the call to understand your wedding, answer the most important questions, and explain the right next step—if there is one.</p>
          <div className="mx-auto mt-9 grid max-w-3xl gap-3 text-sm sm:grid-cols-3"><p className="!text-white/68">1 · Register below</p><p className="!text-white/68">2 · Request a time</p><p className="!text-white/68">3 · Complete the questionnaire</p></div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl">
          <div className="rounded-[2rem] border border-[#ded5c7] bg-[#fffdf9] p-6 shadow-[0_20px_60px_rgba(47,38,28,0.07)] sm:p-10">
            <div className="mb-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#80683b]">Short registration</p>
              <h2 className="mt-3 font-serif text-4xl font-medium">Start with the essentials.</h2>
              <p className="mt-4 leading-7 text-[#51483f]">No payment is required. The optional $300 written plan and planning packages are discussed only after the free call and require a separate written scope.</p>
            </div>
            <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={(event) => update("website", event.target.value)} /></div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2"><label htmlFor="serviceInterest" className={labelClass}>What would you like to discuss? *</label><select id="serviceInterest" value={serviceInterest} onChange={(event) => update("serviceInterest", event.target.value)} className={inputClass} required><option value="">Select</option><option value="Destination wedding planning">Destination wedding planning</option><option value="India shopping">India wedding sourcing</option><option value="India shopping + destination wedding planning">Planning and India sourcing</option><option value="Not sure">I’m not sure yet</option></select></div>
              <div><label htmlFor="name" className={labelClass}>Full name *</label><input id="name" className={inputClass} value={formData.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" required /></div>
              <div><label htmlFor="email" className={labelClass}>Email *</label><input id="email" type="email" className={inputClass} value={formData.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" required /></div>
              <div><label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label><input id="phone" type="tel" className={inputClass} value={formData.phone} onChange={(event) => update("phone", event.target.value)} autoComplete="tel" /></div>
              <div><label htmlFor="clientCountry" className={labelClass}>Where do you live? *</label><select id="clientCountry" className={inputClass} value={formData.clientCountry} onChange={(event) => update("clientCountry", event.target.value)} required><option value="">Select</option><option value="United States">United States</option><option value="Canada">Canada</option><option value="Other">Other</option></select></div>
              <div><label htmlFor="eventTimeframe" className={labelClass}>Wedding timeframe *</label><input id="eventTimeframe" className={inputClass} value={formData.eventTimeframe} onChange={(event) => update("eventTimeframe", event.target.value)} placeholder="Month/year or not decided" required /></div>
              <div><label htmlFor="eventLocation" className={labelClass}>Destination or location</label><input id="eventLocation" className={inputClass} value={formData.eventLocation} onChange={(event) => update("eventLocation", event.target.value)} placeholder={destinationService ? "Mexico, Jamaica, or Punta Cana" : "City or destination"} /></div>
              <div><label htmlFor="guestCount" className={labelClass}>Estimated guests</label><input id="guestCount" type="number" min="0" max="5000" className={inputClass} value={formData.guestCount} onChange={(event) => update("guestCount", event.target.value)} placeholder="150" /></div>
            </div>
            <label className="mt-7 flex items-start gap-3 text-sm leading-6 text-[#51483f]"><input type="checkbox" checked={formData.privacyConsent} onChange={(event) => update("privacyConsent", event.target.checked)} className="mt-1 h-4 w-4 accent-[#80683b]" required /><span>I agree that CeremonyVerse may use these details to respond to my consultation request. This does not subscribe me to marketing. See the <Link href="/privacy/" className="font-semibold text-[#80683b] underline">privacy policy</Link>.</span></label>
            {error ? <div className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-900" role="alert"><p>{error}</p>{showFallback ? <div className="mt-4 flex flex-col gap-3 sm:flex-row"><a href={whatsappFallbackUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#128c7e] px-5 py-3 text-center font-semibold !text-white">Send with WhatsApp</a><a href={emailFallbackUrl} className="rounded-full border border-red-800 px-5 py-3 text-center font-semibold text-red-900">Send by Email</a></div> : null}</div> : null}
            <button type="submit" disabled={!canSubmit || isLoading} className="mt-8 w-full rounded-full bg-[#80683b] px-6 py-4 text-sm font-semibold !text-white transition disabled:cursor-not-allowed disabled:bg-[#d8d0c4]">{isLoading ? "Sending securely…" : "Continue to My Free Consultation"}</button>
            <p className="mt-4 text-center text-xs leading-5 text-[#6b5b4d]">The $300 plan is not charged here. If you later purchase it and sign a CeremonyVerse planning contract within 30 days after delivery, the full $300 is credited toward the CeremonyVerse planning fee.</p>
          </div>
        </form>
      </section>
    </main>
  )
}
