"use client"

import Link from "next/link"
import { useMemo, useRef, useState } from "react"
import { trackEvent } from "@/lib/analytics"
import { ResortRateSelector } from "./resort-rate-selector"

const costCategories = [
  { key: "resortEvents", label: "Resort wedding package, venues, food and beverage", group: "Wedding events" },
  { key: "decorProduction", label: "Decor, staging, lighting, sound and production", group: "Wedding events" },
  { key: "photoVideo", label: "Photography and videography", group: "Wedding events" },
  { key: "entertainment", label: "DJ, performers and entertainment", group: "Wedding events" },
  { key: "beauty", label: "Hair, makeup and mehndi", group: "Wedding events" },
  { key: "planning", label: "Planning, coordination and family support", group: "Wedding events" },
  { key: "taxes", label: "Taxes, service charges, gratuities and required fees", group: "Wedding events" },
  { key: "vipFlights", label: "Flights paid for family or VIP guests", group: "Family and guest travel" },
  { key: "vipRooms", label: "Hotel nights paid for family or VIP guests", group: "Family and guest travel" },
  { key: "transportation", label: "Airport transfers and local transportation", group: "Family and guest travel" },
  { key: "welcome", label: "Welcome items, guest assistance and hosted activities", group: "Family and guest travel" },
  { key: "attire", label: "Wedding outfits, jewelry and ceremony items", group: "Optional wedding shopping" },
  { key: "shipping", label: "Shipping, duties, customs and local alterations", group: "Optional wedding shopping" },
  { key: "other", label: "Other contracted or required costs", group: "Other" },
] as const

type CategoryKey = (typeof costCategories)[number]["key"]
type CategoryGroup = (typeof costCategories)[number]["group"]
type CostValues = Record<CategoryKey, string>
type CostStatus = "not-researched" | "estimate" | "written-quote" | "not-needed"
type CostStatuses = Record<CategoryKey, CostStatus>

const categoryGroups = Array.from(new Set(costCategories.map((category) => category.group))) as CategoryGroup[]
const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

function buildInitialCosts(): CostValues {
  return Object.fromEntries(costCategories.map(({ key }) => [key, ""])) as CostValues
}

function buildInitialStatuses(): CostStatuses {
  return Object.fromEntries(costCategories.map(({ key }) => [key, "not-researched"])) as CostStatuses
}

function numeric(value: string): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

function boundedPercentage(value: string): number {
  return Math.min(100, numeric(value))
}

export function BudgetPlannerClient() {
  const [costs, setCosts] = useState<CostValues>(buildInitialCosts)
  const [statuses, setStatuses] = useState<CostStatuses>(buildInitialStatuses)
  const [targetBudget, setTargetBudget] = useState("")
  const [guestCount, setGuestCount] = useState("")
  const [eventCount, setEventCount] = useState("")
  const [contingencyRate, setContingencyRate] = useState("10")
  const [resortRateSource, setResortRateSource] = useState("")
  const [resortSelectorKey, setResortSelectorKey] = useState(0)
  const started = useRef(false)

  const markStarted = () => {
    if (started.current) return
    started.current = true
    trackEvent("calculator_start", { calculator_name: "destination_wedding_budget" })
  }

  const summary = useMemo(() => {
    const groupTotals = Object.fromEntries(categoryGroups.map((group) => [group, 0])) as Record<CategoryGroup, number>
    for (const category of costCategories) {
      groupTotals[category.group] += numeric(costs[category.key])
    }

    const subtotal = Object.values(groupTotals).reduce((total, value) => total + value, 0)
    const contingency = subtotal * (boundedPercentage(contingencyRate) / 100)
    const total = subtotal + contingency
    const target = numeric(targetBudget)
    const guests = numeric(guestCount)
    const events = numeric(eventCount)
    const researched = costCategories.filter(({ key }) => numeric(costs[key]) > 0 || statuses[key] === "not-needed").length
    const written = costCategories.filter(({ key }) => statuses[key] === "written-quote").length
    const missing = costCategories.filter(({ key }) => statuses[key] === "not-researched" && !numeric(costs[key]))
    const completeness = Math.round((researched / costCategories.length) * 100)

    return {
      groupTotals,
      subtotal,
      contingency,
      total,
      difference: target ? target - total : 0,
      perGuest: guests ? total / guests : 0,
      perEvent: events ? groupTotals["Wedding events"] / events : 0,
      researched,
      written,
      missing,
      completeness,
    }
  }, [contingencyRate, costs, eventCount, guestCount, statuses, targetBudget])

  const updateCost = (key: CategoryKey, value: string) => {
    markStarted()
    setCosts((previous) => ({ ...previous, [key]: value }))
    if (key === "resortEvents") setResortRateSource("")
    if (numeric(value) > 0 && statuses[key] === "not-researched") {
      setStatuses((previous) => ({ ...previous, [key]: "estimate" }))
    }
  }

  const applyPublishedResortRate = (amount: number, sourceLabel: string, confidence: "estimate" | "written-quote") => {
    markStarted()
    setCosts((previous) => ({ ...previous, resortEvents: String(amount) }))
    setStatuses((previous) => ({ ...previous, resortEvents: confidence }))
    setResortRateSource(sourceLabel)
    trackEvent("calculator_rate_apply", {
      calculator_name: "destination_wedding_budget",
      resort_rate_source: sourceLabel,
      known_resort_amount: amount,
    })
  }

  const updateStatus = (key: CategoryKey, status: CostStatus) => {
    markStarted()
    setStatuses((previous) => ({ ...previous, [key]: status }))
    if (status === "not-needed") setCosts((previous) => ({ ...previous, [key]: "" }))
  }

  const reset = () => {
    setCosts(buildInitialCosts())
    setStatuses(buildInitialStatuses())
    setTargetBudget("")
    setGuestCount("")
    setEventCount("")
    setContingencyRate("10")
    setResortRateSource("")
    setResortSelectorKey((previous) => previous + 1)
    started.current = false
  }

  const updateContingency = (value: string) => {
    markStarted()
    if (value === "") {
      setContingencyRate("")
      return
    }
    const parsed = Number(value)
    if (!Number.isFinite(parsed)) {
      setContingencyRate("")
      return
    }
    setContingencyRate(parsed > 100 ? "100" : parsed < 0 ? "0" : value)
  }

  const printWorksheet = () => {
    trackEvent("calculator_export", {
      calculator_name: "destination_wedding_budget",
      completion_percent: summary.completeness,
    })
    window.print()
  }

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-3xl border border-[#e6dfd5] bg-white p-6 sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <label className="text-sm font-semibold text-[#1f1f1f]">
              Target total budget
              <input type="number" min="0" inputMode="decimal" value={targetBudget} onFocus={markStarted} onChange={(event) => setTargetBudget(event.target.value)} className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal" placeholder="90000" />
            </label>
            <label className="text-sm font-semibold text-[#1f1f1f]">
              Estimated guests
              <input type="number" min="0" step="1" inputMode="numeric" value={guestCount} onFocus={markStarted} onChange={(event) => setGuestCount(event.target.value)} className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal" placeholder="150" />
            </label>
            <label className="text-sm font-semibold text-[#1f1f1f]">
              Number of events
              <input type="number" min="0" step="1" inputMode="numeric" value={eventCount} onFocus={markStarted} onChange={(event) => setEventCount(event.target.value)} className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal" placeholder="4" />
            </label>
            <label className="text-sm font-semibold text-[#1f1f1f]">
              Contingency percentage
              <input type="number" min="0" max="100" inputMode="decimal" value={contingencyRate} onFocus={markStarted} onChange={(event) => updateContingency(event.target.value)} className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal" aria-describedby="contingency-help" />
              <span id="contingency-help" className="mt-1 block text-xs font-normal text-[#6d625c]">Enter 0–100%.</span>
            </label>
          </div>

          <ResortRateSelector key={resortSelectorKey} guestCount={guestCount} onApply={applyPublishedResortRate} />

          <div className="mt-9 space-y-8">
            {categoryGroups.map((group) => (
              <fieldset key={group} className="space-y-3">
                <legend className="font-serif text-2xl font-semibold text-[#1f1f1f]">{group}</legend>
                {costCategories.filter((category) => category.group === group).map(({ key, label }) => (
                  <div key={key} className="grid items-end gap-3 rounded-xl border border-[#eee7dd] p-4 md:grid-cols-[1fr_170px_170px]">
                    <div>
                      <p className="leading-6 text-[#4d403a]">{label}</p>
                      {key === "resortEvents" && resortRateSource ? <p className="mt-1 text-xs leading-5 text-[#7a6841]">Resort calculation source: {resortRateSource}</p> : null}
                    </div>
                    <label className="text-xs font-semibold text-[#5e4a40]">
                      Cost entered
                      <span className="relative mt-1 block">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d625c]">$</span>
                        <input type="number" min="0" inputMode="decimal" value={costs[key]} onChange={(event) => updateCost(key, event.target.value)} disabled={statuses[key] === "not-needed"} className="w-full rounded-lg border border-[#d9cfbf] bg-[#faf8f5] py-2.5 pl-7 pr-3 text-right disabled:cursor-not-allowed disabled:opacity-50" aria-label={`${label} cost`} />
                      </span>
                    </label>
                    <label className="text-xs font-semibold text-[#5e4a40]">
                      Confidence
                      <select value={statuses[key]} onChange={(event) => updateStatus(key, event.target.value as CostStatus)} className="mt-1 w-full rounded-lg border border-[#d9cfbf] bg-[#faf8f5] px-3 py-2.5 font-normal" aria-label={`${label} confidence`}>
                        <option value="not-researched">Not researched</option>
                        <option value="estimate">Working estimate</option>
                        <option value="written-quote">Written quote</option>
                        <option value="not-needed">Not needed</option>
                      </select>
                    </label>
                  </div>
                ))}
              </fieldset>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row print:hidden">
            <button type="button" onClick={printWorksheet} className="rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white">Print or Save as PDF</button>
            <button type="button" onClick={reset} className="rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841]">Clear calculator</button>
          </div>
        </div>

        <aside className="cv-calculator-summary h-fit rounded-3xl bg-[#1f1f1f] p-7 text-white lg:sticky lg:top-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">Your working budget</p>
          <dl className="mt-6 space-y-5">
            <div className="flex justify-between gap-4 border-b border-white/15 pb-4"><dt className="text-white/75">Wedding events</dt><dd className="font-semibold">{currencyFormatter.format(summary.groupTotals["Wedding events"])}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/15 pb-4"><dt className="text-white/75">Family &amp; guest travel</dt><dd className="font-semibold">{currencyFormatter.format(summary.groupTotals["Family and guest travel"])}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/15 pb-4"><dt className="text-white/75">Optional shopping</dt><dd className="font-semibold">{currencyFormatter.format(summary.groupTotals["Optional wedding shopping"])}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/15 pb-4"><dt className="text-white/75">Contingency</dt><dd className="font-semibold">{currencyFormatter.format(summary.contingency)}</dd></div>
            <div><dt className="text-white/75">Planning total</dt><dd className="mt-2 font-serif text-4xl font-semibold text-[#e8cf9d]">{currencyFormatter.format(summary.total)}</dd></div>
            {summary.perGuest ? <div className="flex justify-between gap-4"><dt className="text-white/75">Cost per guest</dt><dd>{currencyFormatter.format(summary.perGuest)}</dd></div> : null}
            {summary.perEvent ? <div className="flex justify-between gap-4"><dt className="text-white/75">Event costs per event</dt><dd>{currencyFormatter.format(summary.perEvent)}</dd></div> : null}
            {numeric(targetBudget) ? (
              <div className={`rounded-xl p-4 ${summary.difference >= 0 ? "bg-emerald-900/40" : "bg-red-900/40"}`}>
                <dt className="text-sm text-white/75">Difference from target</dt>
                <dd className="mt-1 text-xl font-semibold">{summary.difference >= 0 ? "Unallocated " : "Over target "}{currencyFormatter.format(Math.abs(summary.difference))}</dd>
              </div>
            ) : null}
          </dl>

          <div className="mt-7 rounded-xl border border-white/15 p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-white">Budget completeness</p>
              <span className="font-semibold text-[#e8cf9d]">{summary.completeness}%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15" aria-label={`${summary.completeness}% of cost areas researched`} role="img">
              <div className="h-full rounded-full bg-[#c5a059]" style={{ width: `${summary.completeness}%` }} />
            </div>
            <p className="mt-3 text-xs leading-5 text-white/65">{summary.researched} of {costCategories.length} cost areas addressed · {summary.written} supported by a written quote</p>
          </div>

          {summary.missing.length > 0 ? (
            <div className="mt-5">
              <p className="text-sm font-semibold text-white">Still missing</p>
              <ul className="mt-2 space-y-2 text-xs leading-5 text-white/65">
                {summary.missing.slice(0, 4).map(({ key, label }) => <li key={key}>• {label}</li>)}
                {summary.missing.length > 4 ? <li>• Plus {summary.missing.length - 4} more cost areas</li> : null}
              </ul>
            </div>
          ) : null}

          <p className="mt-6 text-xs leading-5 text-white/60">
            This is a planning calculation, not a CeremonyVerse or resort quote. A remaining amount is not automatically a saving; it may represent costs that have not yet been entered.
          </p>
          <p className="mt-3 text-xs leading-5 text-white/60 print:hidden">
            Your entries stay in this browser and are not sent with the consultation form. Print or save the worksheet if you want to discuss it.
          </p>
          <Link href="/contact/?service=mexico&from=budget-calculator" onClick={() => trackEvent("calculator_cta_click", { calculator_name: "destination_wedding_budget", completion_percent: summary.completeness })} className="mt-6 inline-flex w-full justify-center rounded-full bg-[#c5a059] px-5 py-3 text-sm font-semibold text-[#1f1f1f] print:hidden">Request a Budget Review</Link>
          <Link href="/planning-tools/guest-logistics/" className="mt-3 inline-flex w-full justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white print:hidden">Calculate Hosted Guest Costs</Link>
        </aside>
      </div>
    </section>
  )
}
