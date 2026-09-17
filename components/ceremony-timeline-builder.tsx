"use client"

import Link from "next/link"
import { useState, type FormEvent } from "react"
import { BUDGETS, VENUES, TOOLKIT_PDF, PRIVACY_CONSENT_TEXT, PLANNING_CONSENT_TEXT, buildTimeline, timelineText, type CeremonyKind } from "@/lib/ceremony-toolkit"
import { trackEvent } from "@/lib/analytics"
import { TravelPortalCta } from "@/components/travel-portal-cta"

const field = "mt-2 block min-h-12 w-full min-w-0 rounded-lg border border-[#b9ad9c] bg-white px-3 py-2 text-base text-[#1f1f1f] focus:outline-2 focus:outline-offset-2 focus:outline-[#7a6841]"
const initial = { names: "", email: "", weddingDate: "", venue: VENUES[0] as string, budget: BUDGETS[0] as string, kind: "hindu" as CeremonyKind, startTime: "16:00", duration: 90, guests: 100, privacyConsent: false, planningConsent: false, website: "" }

export function CeremonyTimelineBuilder() {
  const [form, setForm] = useState(initial)
  const [dateUnknown, setDateUnknown] = useState(true)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState<typeof initial | null>(null)
  const update = <K extends keyof typeof initial>(key: K, value: typeof initial[K]) => { setForm(old => ({ ...old, [key]: value })); setSubmitted(null); setError("") }
  let rows: ReturnType<typeof buildTimeline> = []
  try { rows = buildTimeline(form) } catch { /* Keep the form editable while a number field is empty. */ }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (busy) return
    setBusy(true); setError("")
    const snapshot = { ...form, weddingDate: dateUnknown ? "" : form.weddingDate }
    try {
      const response = await fetch("/api/ceremony-toolkit/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(snapshot), signal: AbortSignal.timeout(25000) })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.error || "Please try again shortly.")
      setSubmitted(snapshot)
      if (!result.repeated) trackEvent("ceremony_toolkit_requested", { resource: "ceremony_timeline", ceremony_type: snapshot.kind })
    } catch (cause) { setError(cause instanceof Error && cause.name !== "TimeoutError" ? cause.message : "The request took too long. Please try again; your preview is still here.") }
    finally { setBusy(false) }
  }

  function downloadTimeline() {
    if (!submitted) return
    const url = URL.createObjectURL(new Blob([timelineText(submitted, submitted)], { type: "text/plain;charset=utf-8" }))
    const link = document.createElement("a")
    link.href = url; link.download = "ceremonyverse-my-ceremony-timeline.txt"; link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    trackEvent("ceremony_toolkit_downloaded", { resource: "personal_timeline", format: "txt" })
  }

  return <div className="grid items-start gap-8 lg:grid-cols-2">
    <form onSubmit={submit} className="min-w-0 rounded-2xl border border-[#d9cfbf] bg-white p-5 sm:p-8">
      <fieldset disabled={busy} className="min-w-0 space-y-6 disabled:opacity-70">
        <legend className="mb-5 font-serif text-3xl font-semibold">1. Build your timeline</legend>
        <label className="block font-semibold">Ceremony style<select className={field} value={form.kind} onChange={e => update("kind", e.target.value as CeremonyKind)}><option value="hindu">Gujarati / Hindu ceremony planning block</option><option value="symbolic">Modern 12-minute symbolic ceremony</option></select></label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block font-semibold">Ceremony start time<input className={field} type="time" required value={form.startTime} onChange={e => update("startTime", e.target.value)} /><span className="mt-2 block text-sm font-normal text-[#5e4a40]">Local time at your venue</span></label>
          <label className="block font-semibold">Estimated guests<input className={field} type="number" inputMode="numeric" required min={1} max={1000} step={1} value={form.guests || ""} onChange={e => update("guests", Number(e.target.value))} /></label>
        </div>
        {form.kind === "hindu" && <label className="block font-semibold">Ceremony block (minutes)<input className={field} type="number" inputMode="numeric" required min={15} max={180} step={1} value={form.duration || ""} onChange={e => update("duration", Number(e.target.value))} /><span className="mt-2 block text-sm font-normal text-[#5e4a40]">Your pandit and families confirm the rituals and actual duration.</span></label>}
        <label className="block font-semibold">Venue or destination<select className={field} value={form.venue} onChange={e => update("venue", e.target.value)}>{VENUES.map(v => <option key={v}>{v}</option>)}</select></label>
        <div className="border-t border-[#e6dfd5] pt-6">
          <h2 className="font-serif text-3xl font-semibold">2. Get your free download</h2>
          <p className="mt-3 text-sm leading-6 text-[#4d403a]">Unlock the ceremony toolkit PDF and your personalised timeline text file here. The PDF includes an original symbolic script and friend officiant checklist. Planning follow-up is optional.</p>
        </div>
        <label className="block font-semibold">Your names<input className={field} name="names" autoComplete="name" required minLength={2} maxLength={140} placeholder="Your name & your partner’s name" value={form.names} onChange={e => update("names", e.target.value)} /></label>
        <label className="block font-semibold">Email address<input className={field} type="email" name="email" autoComplete="email" required maxLength={254} value={form.email} onChange={e => update("email", e.target.value)} /><span className="mt-2 block text-sm font-normal text-[#5e4a40]">Your files download on this page. We only send planning emails if you choose them below.</span></label>
        <div><label className="flex items-start gap-3 text-sm"><input type="checkbox" checked={dateUnknown} className="mt-1 size-4 shrink-0 accent-[#7a6841]" onChange={e => { setDateUnknown(e.target.checked); update("weddingDate", "") }} />Our wedding date is not decided yet</label>
          {!dateUnknown && <label className="mt-4 block font-semibold">Wedding date<input className={field} type="date" required value={form.weddingDate} onChange={e => update("weddingDate", e.target.value)} /></label>}
        </div>
        <label className="block font-semibold">Estimated wedding budget (USD)<select className={field} value={form.budget} onChange={e => update("budget", e.target.value)}>{BUDGETS.map(b => <option key={b}>{b}</option>)}</select><span className="mt-2 block text-sm font-normal text-[#5e4a40]">Your estimate for wedding events; not a quote or minimum spend.</span></label>
        <div aria-hidden="true" className="hidden"><label>Website<input tabIndex={-1} autoComplete="off" name="website" value={form.website} onChange={e => update("website", e.target.value)} /></label></div>
        <label className="flex items-start gap-3 text-sm leading-6"><input type="checkbox" required checked={form.privacyConsent} onChange={e => update("privacyConsent", e.target.checked)} className="mt-1.5 size-4 shrink-0 accent-[#7a6841]" /><span>{PRIVACY_CONSENT_TEXT} <Link href="/privacy/" className="underline">Read the Privacy Notice</Link>.</span></label>
        <label className="flex items-start gap-3 text-sm leading-6"><input type="checkbox" checked={form.planningConsent} onChange={e => update("planningConsent", e.target.checked)} className="mt-1.5 size-4 shrink-0 accent-[#7a6841]" /><span>{PLANNING_CONSENT_TEXT} <strong className="font-semibold">Optional.</strong></span></label>
        <button type="submit" className="min-h-12 w-full rounded-full bg-[#7a6841] px-6 py-4 font-semibold text-white disabled:cursor-wait">{busy ? "Preparing your download…" : "Unlock my free ceremony toolkit"}</button>
      </fieldset>
      {error && <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-900">{error}</p>}
      {submitted && <div role="status" className="mt-6 rounded-xl border border-[#a1b79b] bg-[#f0f5ed] p-5">
        <h3 className="font-serif text-2xl font-semibold">Your files are ready</h3>
        <p className="mt-2 text-sm leading-6">Download both: the PDF is your reusable ceremony guide; the text file contains your own times and details.</p>
        <a href={TOOLKIT_PDF} download onClick={() => trackEvent("ceremony_toolkit_downloaded", { resource: "ceremony_toolkit", format: "pdf" })} className="mt-4 block rounded-lg bg-[#344832] px-4 py-3 text-center font-semibold text-white">Download ceremony toolkit PDF</a>
        <button type="button" onClick={downloadTimeline} className="mt-3 w-full rounded-lg border border-[#344832] px-4 py-3 font-semibold text-[#344832]">Download my timeline (.txt)</button>
        <p className="mt-4 text-sm leading-6">{submitted.planningConsent ? "You opted in to planning follow-up. You can stop those emails by replying stop." : "You have not subscribed to planning emails."} No consultation is booked by downloading.</p>
        <Link href="/contact/?from=ceremony-toolkit" className="mt-4 inline-block font-semibold underline">Want help with the next decisions? Request a free consultation →</Link>
        {/* Booking-portal CTA — dual-site engine (agents.md). */}
        <TravelPortalCta source="ceremony_toolkit" className="mt-4" />
      </div>}
    </form>
    <section aria-labelledby="timeline-preview-title" className="min-w-0 rounded-2xl bg-[#f2ece2] p-5 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Live preview · no email needed</p>
      <h2 id="timeline-preview-title" className="mt-3 font-serif text-3xl font-semibold">Your ceremony, with room to breathe</h2>
      <p className="mt-4 text-sm leading-6 text-[#4d403a]">Working draft for {form.venue.toLowerCase() === "not decided" ? "your venue" : form.venue}. These times are suggested planning checkpoints. Resort access, capacities and sound limits must be confirmed separately.</p>
      <ol className="mt-7 space-y-5" aria-live="polite" aria-atomic="true">{rows.length ? rows.map((row, index) => <li key={index} className="rounded-xl border border-[#ded4c5] bg-white p-5"><p className="font-semibold text-[#7a6841]">{row.time}</p><h3 className="mt-1 text-lg font-semibold">{row.title}</h3><p className="mt-2 text-sm leading-6 text-[#4d403a]">{row.note}</p></li>) : <li className="rounded-lg bg-white p-4">Enter a valid time, guest count and ceremony duration to see your preview.</li>}</ol>
      <div className="mt-7 border-t border-[#d9cfbf] pt-6"><h3 className="font-serif text-2xl font-semibold">Check the budget alongside the timeline</h3><p className="mt-3 text-sm leading-6 text-[#4d403a]">Use actual quotes to allocate event, family-travel and shopping costs. Our separate calculator shows the total and any gap against your target.</p><Link href="/planning-tools/budget/" className="mt-4 inline-block font-semibold text-[#705d37] underline">Open the free budget calculator →</Link></div>
    </section>
  </div>
}
