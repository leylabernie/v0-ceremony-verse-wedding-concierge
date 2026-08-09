"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

const costCategories = [
  ["resortEvents", "Resort wedding package, venues, food and beverage"],
  ["decorProduction", "Decor, staging, lighting, sound and production"],
  ["photoVideo", "Photography and videography"],
  ["entertainment", "DJ, performers and entertainment"],
  ["beauty", "Hair, makeup and mehndi"],
  ["planning", "Planning, coordination and family support"],
  ["transportation", "Airport transfers and local transportation"],
  ["vipTravel", "Flights and hotel nights paid for family or VIP guests"],
  ["attire", "Wedding outfits, jewelry and ceremony sourcing"],
  ["shipping", "Shipping, duties, customs and local alterations"],
  ["taxes", "Taxes, service charges and gratuities not already included"],
  ["other", "Other contracted or required costs"],
] as const

type CategoryKey = (typeof costCategories)[number][0]
type CostValues = Record<CategoryKey, string>

const initialCosts = Object.fromEntries(costCategories.map(([key]) => [key, ""])) as CostValues
const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

function numeric(value: string): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

export function BudgetPlannerClient() {
  const [costs, setCosts] = useState<CostValues>(initialCosts)
  const [targetBudget, setTargetBudget] = useState("")
  const [guestCount, setGuestCount] = useState("")
  const [contingencyRate, setContingencyRate] = useState("10")

  const summary = useMemo(() => {
    const subtotal = Object.values(costs).reduce((total, value) => total + numeric(value), 0)
    const contingency = subtotal * (numeric(contingencyRate) / 100)
    const total = subtotal + contingency
    const target = numeric(targetBudget)
    const guests = numeric(guestCount)
    return {
      subtotal,
      contingency,
      total,
      difference: target ? target - total : 0,
      perGuest: guests ? total / guests : 0,
    }
  }, [contingencyRate, costs, guestCount, targetBudget])

  const reset = () => {
    setCosts(initialCosts)
    setTargetBudget("")
    setGuestCount("")
    setContingencyRate("10")
  }

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-3xl border border-[#e6dfd5] bg-white p-6 sm:p-9">
          <div className="grid gap-5 sm:grid-cols-3">
            <label className="text-sm font-semibold text-[#1f1f1f]">
              Target total budget
              <input type="number" min="0" value={targetBudget} onChange={(event) => setTargetBudget(event.target.value)} className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal" placeholder="$90,000" />
            </label>
            <label className="text-sm font-semibold text-[#1f1f1f]">
              Estimated guests
              <input type="number" min="0" value={guestCount} onChange={(event) => setGuestCount(event.target.value)} className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal" placeholder="150" />
            </label>
            <label className="text-sm font-semibold text-[#1f1f1f]">
              Contingency percentage
              <input type="number" min="0" max="100" value={contingencyRate} onChange={(event) => setContingencyRate(event.target.value)} className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal" />
            </label>
          </div>

          <div className="mt-9 space-y-4">
            {costCategories.map(([key, label]) => (
              <label key={key} className="grid items-center gap-3 rounded-xl border border-[#eee7dd] p-4 sm:grid-cols-[1fr_180px]">
                <span className="leading-6 text-[#4d403a]">{label}</span>
                <span className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d625c]">$</span>
                  <input type="number" min="0" value={costs[key]} onChange={(event) => setCosts((previous) => ({ ...previous, [key]: event.target.value }))} className="w-full rounded-lg border border-[#d9cfbf] bg-[#faf8f5] py-2.5 pl-7 pr-3 text-right" aria-label={`${label} cost`} />
                </span>
              </label>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => window.print()} className="rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white">Print or Save as PDF</button>
            <button type="button" onClick={reset} className="rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841]">Clear worksheet</button>
          </div>
        </div>

        <aside className="h-fit rounded-3xl bg-[#1f1f1f] p-7 text-white lg:sticky lg:top-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">Your running total</p>
          <dl className="mt-6 space-y-5">
            <div className="flex justify-between gap-4 border-b border-white/15 pb-4"><dt className="text-white/75">Entered costs</dt><dd className="font-semibold">{currencyFormatter.format(summary.subtotal)}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/15 pb-4"><dt className="text-white/75">Contingency</dt><dd className="font-semibold">{currencyFormatter.format(summary.contingency)}</dd></div>
            <div><dt className="text-white/75">Planning total</dt><dd className="mt-2 font-serif text-4xl font-semibold text-[#e8cf9d]">{currencyFormatter.format(summary.total)}</dd></div>
            {summary.perGuest ? <div className="flex justify-between gap-4"><dt className="text-white/75">Cost per guest</dt><dd>{currencyFormatter.format(summary.perGuest)}</dd></div> : null}
            {numeric(targetBudget) ? (
              <div className={`rounded-xl p-4 ${summary.difference >= 0 ? "bg-emerald-900/40" : "bg-red-900/40"}`}>
                <dt className="text-sm text-white/75">Difference from target</dt>
                <dd className="mt-1 text-xl font-semibold">{summary.difference >= 0 ? "Remaining " : "Over target "}{currencyFormatter.format(Math.abs(summary.difference))}</dd>
              </div>
            ) : null}
          </dl>
          <p className="mt-6 text-xs leading-5 text-white/60">
            This is a planning worksheet, not a CeremonyVerse or resort quote. Verify taxes, service charges, room-block credits,
            outside-vendor fees, weather backup, and every included item in the actual written contracts.
          </p>
          <Link href="/contact/?service=mexico" className="mt-6 inline-flex w-full justify-center rounded-full bg-[#c5a059] px-5 py-3 text-sm font-semibold text-[#1f1f1f]">Discuss the completed budget</Link>
        </aside>
      </div>
    </section>
  )
}
