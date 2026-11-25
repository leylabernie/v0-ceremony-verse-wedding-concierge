"use client"

import { proposalRisk } from "@/lib/planning-intent"
import { useCalculatorThreshold } from "@/hooks/use-calculator-threshold"
import Link from "next/link"
import { useMemo, useRef, useState } from "react"
import { captureEvent, trackEvent } from "@/lib/analytics"
import { CalculatorLeadCapture } from "@/components/calculator-lead-capture"
import { TravelPortalCta } from "@/components/travel-portal-cta"

const termMetrics = [
  { key: "eventScope", label: "Event venues, hours and inclusions" },
  { key: "food", label: "Indian, Jain and dietary requirements" },
  { key: "ceremonies", label: "Fire, baraat, music and ceremony approvals" },
  { key: "vendors", label: "Outside-vendor rules and fees" },
  { key: "weather", label: "Written weather-backup plan" },
  { key: "roomBlock", label: "Reserved-room fees and cancellation rules" },
  { key: "guestAccess", label: "Guest access, mobility and arrival logistics" },
] as const

type TermKey = (typeof termMetrics)[number]["key"]
type TermRating = "unknown" | "concern" | "partial" | "clear"

interface ResortValues {
  name: string
  destination: string
  weddingQuote: string
  taxesFees: string
  uncoveredNights: string
  penaltyRate: string
  vendorFees: string
  familyRooms: string
  familyNights: string
  nightlyRate: string
  transferTravelers: string
  transferPerPerson: string
  roomBlockRooms: string
  roomBlockNights: string
  guestRoomRate: string
  terms: Record<TermKey, TermRating>
}

const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

function numeric(value: string): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

function buildResort(name: string): ResortValues {
  return {
    name,
    destination: "",
    weddingQuote: "",
    taxesFees: "",
    vendorFees: "", uncoveredNights: "", penaltyRate: "",
    familyRooms: "",
    familyNights: "",
    nightlyRate: "",
    transferTravelers: "",
    transferPerPerson: "",
    roomBlockRooms: "",
    roomBlockNights: "",
    guestRoomRate: "",
    terms: Object.fromEntries(termMetrics.map(({ key }) => [key, "unknown"])) as Record<TermKey, TermRating>,
  }
}

function summarize(resort: ResortValues) {
  const hostedRooms = numeric(resort.familyRooms) * numeric(resort.familyNights) * numeric(resort.nightlyRate)
  const hostedTransfers = numeric(resort.transferTravelers) * numeric(resort.transferPerPerson)
  const knownHostCost = numeric(resort.weddingQuote) + numeric(resort.taxesFees) + numeric(resort.vendorFees) + hostedRooms + hostedTransfers
  const roomBlockExposure = numeric(resort.roomBlockRooms) * numeric(resort.roomBlockNights) * numeric(resort.guestRoomRate)
  const ratingValues: Record<TermRating, number> = { unknown: 0, concern: 1, partial: 2, clear: 3 }
  const answered = termMetrics.filter(({ key }) => resort.terms[key] !== "unknown")
  const termScore = answered.length
    ? Math.round((answered.reduce((total, { key }) => total + ratingValues[resort.terms[key]], 0) / (answered.length * 3)) * 100)
    : 0
  const documentation = Math.round((answered.length / termMetrics.length) * 100)
  const missingTerms = termMetrics.filter(({ key }) => resort.terms[key] === "unknown")

  const risk = proposalRisk(numeric(resort.uncoveredNights), numeric(resort.penaltyRate), numeric(resort.vendorFees))
  return { risk, hostedRooms, hostedTransfers, knownHostCost, roomBlockExposure, termScore, documentation, missingTerms }
}

const inputClass = "mt-1 w-full rounded-xl border border-[#E8DCCB] bg-[#FDFBF7] px-3 py-2.5 font-normal"
const labelClass = "text-xs font-semibold text-[#5e4a40]"

export function ResortComparisonClient() {
  const [resorts, setResorts] = useState<[ResortValues, ResortValues]>([buildResort("Resort A"), buildResort("Resort B")])
  const started = useRef(false)

  const summaries = useMemo(() => resorts.map(summarize) as [ReturnType<typeof summarize>, ReturnType<typeof summarize>], [resorts])

  const attrition = Math.max(...summaries.map(s => s.risk.penalty))
  const fees = Math.max(...resorts.map(r => numeric(r.vendorFees)))
  useCalculatorThreshold("resort", "attrition_penalty", attrition > 5000, attrition)
  useCalculatorThreshold("resort", "outside_vendor_fees", fees > 3000, fees)

  const markStarted = () => {
    if (started.current) return
    started.current = true
    trackEvent("calculator_start", { calculator_name: "resort_quote_comparison" })
  }

  const updateResort = (index: 0 | 1, field: keyof Omit<ResortValues, "terms">, value: string) => {
    markStarted()
    setResorts((previous) => {
      const next = [...previous] as [ResortValues, ResortValues]
      next[index] = { ...next[index], [field]: value }
      return next
    })
  }

  const updateTerm = (index: 0 | 1, key: TermKey, value: TermRating) => {
    markStarted()
    setResorts((previous) => {
      const next = [...previous] as [ResortValues, ResortValues]
      next[index] = { ...next[index], terms: { ...next[index].terms, [key]: value } }
      return next
    })
  }

  const reset = () => {
    setResorts([buildResort("Resort A"), buildResort("Resort B")])
    started.current = false
  }

  const printComparison = () => {
    trackEvent("calculator_export", {
      calculator_name: "resort_quote_comparison",
      resort_a_documentation: summaries[0].documentation,
      resort_b_documentation: summaries[1].documentation,
    })
    window.print()
  }

  return (
    <section className="py-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 xl:grid-cols-2">
          {resorts.map((resort, resortIndex) => {
            const index = resortIndex as 0 | 1
            const summary = summaries[index]
            return (
              <article key={index} className="rounded-3xl border border-[#EFE7DC] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] sm:p-10">
                <div className="grid gap-4 sm:grid-cols-[1fr_180px]">
                  <label className={labelClass}>
                    Resort name
                    <input value={resort.name} onFocus={markStarted} onChange={(event) => updateResort(index, "name", event.target.value)} className={inputClass} placeholder={`Resort ${index === 0 ? "A" : "B"}`} />
                  </label>
                  <label className={labelClass}>
                    Destination
                    <select value={resort.destination} onChange={(event) => updateResort(index, "destination", event.target.value)} className={inputClass}>
                      <option value="">Select</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Punta Cana">Punta Cana</option>
                    </select>
                  </label>
                </div>

                <fieldset className="mt-8">
                  <legend className="font-serif text-2xl font-semibold">Known host costs</legend>
                  <p className="mt-1 text-sm leading-6 text-[#5e4a40]">Enter only figures stated in the proposal or supplied by the provider.</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <MoneyInput label="Wedding and event quote" value={resort.weddingQuote} onChange={(value) => updateResort(index, "weddingQuote", value)} />
                    <MoneyInput label="Taxes and service fees" value={resort.taxesFees} onChange={(value) => updateResort(index, "taxesFees", value)} />
                    <MoneyInput label="Outside-vendor fees" value={resort.vendorFees} onChange={(value) => updateResort(index, "vendorFees", value)} />
                  </div>
                </fieldset>

                <fieldset className="mt-8">
                  <legend className="font-serif text-2xl font-semibold">Family-paid rooms and transfers</legend>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <NumberInput label="Rooms paid by family" value={resort.familyRooms} onChange={(value) => updateResort(index, "familyRooms", value)} />
                    <NumberInput label="Nights per room" value={resort.familyNights} onChange={(value) => updateResort(index, "familyNights", value)} />
                    <MoneyInput label="Nightly rate with fees" value={resort.nightlyRate} onChange={(value) => updateResort(index, "nightlyRate", value)} />
                    <NumberInput label="Transfers paid by family" value={resort.transferTravelers} onChange={(value) => updateResort(index, "transferTravelers", value)} />
                    <MoneyInput label="Round-trip transfer/person" value={resort.transferPerPerson} onChange={(value) => updateResort(index, "transferPerPerson", value)} />
                  </div>
                </fieldset>

                <fieldset className="mt-8">
                  <legend className="font-serif text-2xl font-semibold">Rooms you promised to fill</legend>
                  <p className="mt-1 text-sm leading-6 text-[#5e4a40]">This is shown separately because guests may pay their own rooms, while the contract can still leave you with extra fees.</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    <NumberInput label="Required rooms" value={resort.roomBlockRooms} onChange={(value) => updateResort(index, "roomBlockRooms", value)} />
                    <NumberInput label="Required nights" value={resort.roomBlockNights} onChange={(value) => updateResort(index, "roomBlockNights", value)} />
                    <NumberInput label="Empty room nights still charged after free reductions and credits" value={resort.uncoveredNights} onChange={v => updateResort(index, "uncoveredNights", v)} />
                    <MoneyInput label="Fee for each empty room, each night (USD)" value={resort.penaltyRate} onChange={v => updateResort(index, "penaltyRate", v)} />
                    <MoneyInput label="Average guest room rate" value={resort.guestRoomRate} onChange={(value) => updateResort(index, "guestRoomRate", value)} />
                  </div>
                </fieldset>

                <fieldset className="mt-8">
                  <legend className="font-serif text-2xl font-semibold">Written terms</legend>
                  <div className="mt-5 space-y-3">
                    {termMetrics.map(({ key, label }) => (
                      <label key={key} className="grid items-center gap-3 rounded-xl border border-[#eee7dd] p-3 sm:grid-cols-[1fr_180px]">
                        <span className="text-sm leading-6 text-[#4d403a]">{label}</span>
                        <select value={resort.terms[key]} onChange={(event) => updateTerm(index, key, event.target.value as TermRating)} className="rounded-xl border border-[#E8DCCB] bg-[#FDFBF7] px-3 py-2.5 text-sm" aria-label={`${resort.name}: ${label}`}>
                          <option value="unknown">Not confirmed</option>
                          <option value="concern">Written concern</option>
                          <option value="partial">Partly clear</option>
                          <option value="clear">Clear in writing</option>
                        </select>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="cv-calculator-summary mt-8 rounded-2xl bg-[#6B2A35] p-6 text-white">
                  <h2 className="font-serif text-3xl font-semibold !text-white">{resort.name || `Resort ${index === 0 ? "A" : "B"}`} summary</h2>
                  <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                    <Result label="Estimated Out-of-Pocket Empty Room Fee ($)" value={currencyFormatter.format(summary.risk.penalty)} />
                    <Result label="Known host cost" value={currencyFormatter.format(summary.knownHostCost)} />
                    <Result label="Reserved rooms at the listed price" value={currencyFormatter.format(summary.roomBlockExposure)} />
                    <Result label="Written-term strength" value={summary.documentation ? `${summary.termScore}%` : "Not scored"} />
                    <Result label="Terms documented" value={`${summary.documentation}%`} />
                  </dl>
                  {summary.missingTerms.length ? (
                    <p className="mt-5 text-xs leading-5 text-white/65">Still unconfirmed: {summary.missingTerms.map(({ label }) => label).join(", ")}.</p>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-[#d9cfbf] bg-[#f4eee4] p-6 sm:p-8">
          <h2 className="font-serif text-3xl font-semibold">How to read the comparison</h2>
          <p className="mt-3 leading-7 text-[#4d403a]">
            A lower entered total is not automatically the better resort. Compare what each total includes, the fees for unfilled rooms, cultural requirements, backup spaces, and the strength of the written terms. “Not confirmed” is a question to resolve—not a negative score.
          </p>
          <p className="mt-3 text-sm leading-6 text-[#5e4a40] print:hidden">
            Analytics records the risk category and USD amount when a warning appears. Your worksheet is not sent with the consultation form. Print or save the comparison if you want to discuss it.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
          <Link href="/schedule/?from=resort-calculator" onClick={() => trackEvent("calculator_cta_click", { calculator_name: "resort_quote_comparison" })} className="rounded-full bg-[#6B2A35] hover:bg-[#542129] px-7 py-3 text-center text-sm font-semibold text-white">Request a Proposal Review</Link>
          <button type="button" onClick={printComparison} className="rounded-full border border-[#7a6841] px-7 py-3 text-sm font-semibold text-[#7a6841]">Print or Save as PDF</button>
          <button type="button" onClick={reset} className="rounded-full border border-[#c7bcae] px-7 py-3 text-sm font-semibold text-[#5e4a40]">Clear comparison</button>
        </div>

        {/* Lead-capture offer — appears with results; never gates the calculator. */}
        {summaries.some(s => s.risk.high) && <aside className="my-6 rounded-xl border border-amber-600 bg-amber-50 p-5 text-[#2C221E]">
          <strong>⚠️ Warning: Potential Extra Fees Found:</strong> Your figures indicate potential empty room penalties or fees for bringing outside suppliers. <Link onClick={() => captureEvent({ name: "calc_cta_clicked", properties: { calculator: "resort", cta_target: "30min_consult", source_rule: "high_financial_risk" } })} className="underline" href="/schedule/?from=resort-calc-high-risk">Review your proposal line by line with Mini on a free 30-minute call</Link> or <Link onClick={() => captureEvent({ name: "calc_cta_clicked", properties: { calculator: "resort", cta_target: "300_feasibility_plan", source_rule: "high_financial_risk" } })} className="underline" href="/destination-wedding-feasibility-plan/">apply your calculation to the $300 Feasibility &amp; Action Plan</Link>. The full fee is credited if you sign a planning contract within 30 days of plan delivery.
        </aside>}
        <CalculatorLeadCapture
          calculatorType="resort-comparison"
          results={summaries}
          className="mt-8 print:hidden"
        />
        {/* Booking-portal CTA — dual-site engine (agents.md). */}
        <TravelPortalCta source="resort_quote_comparison" href="https://ceremonyversetravel.com/resorts/" className="mt-8 print:hidden" />
      </div>
    </section>
  )
}

function MoneyInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className={labelClass}>
      {label}
      <span className="relative mt-1 block">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d625c]">$</span>
        <input type="number" min="0" inputMode="decimal" value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-xl border border-[#E8DCCB] bg-[#FDFBF7] py-2.5 pl-7 pr-3 text-right font-normal" />
      </span>
    </label>
  )
}

function NumberInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className={labelClass}>
      {label}
      <input type="number" min="0" step="1" inputMode="numeric" value={value} onChange={(event) => onChange(event.target.value)} className={`${inputClass} text-right`} />
    </label>
  )
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/15 p-4">
      <dt className="text-xs text-white/65">{label}</dt>
      <dd className="mt-1 text-xl font-semibold text-[#e8cf9d]">{value}</dd>
    </div>
  )
}
