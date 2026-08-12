"use client"

import Link from "next/link"
import { useMemo, useRef, useState } from "react"
import { trackEvent } from "@/lib/analytics"

const servicePlans = [
  { value: "0", label: "No CeremonyVerse tier selected" },
  { value: "799", label: "Guided Sourcing — $799 USD" },
  { value: "2499", label: "Full Bridal Concierge — $2,499 USD" },
]

const initialCosts = {
  products: "",
  shipping: "",
  insurance: "",
  duty: "",
  destinationTax: "",
  brokerage: "",
  alterations: "",
  other: "",
}

type CostKey = keyof typeof initialCosts

const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

function numeric(value: string): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

export function ShippingCustomsClient() {
  const [destination, setDestination] = useState<"United States" | "Canada">("United States")
  const [serviceFee, setServiceFee] = useState("0")
  const [costs, setCosts] = useState(initialCosts)
  const [contingencyRate, setContingencyRate] = useState("10")
  const [trackingConfirmed, setTrackingConfirmed] = useState(false)
  const [customsResponsibilityConfirmed, setCustomsResponsibilityConfirmed] = useState(false)
  const started = useRef(false)

  const markStarted = () => {
    if (started.current) return
    started.current = true
    trackEvent("calculator_start", { calculator_name: "north_america_shipping_customs" })
  }

  const summary = useMemo(() => {
    const outsideCosts = Object.values(costs).reduce((total, value) => total + numeric(value), 0)
    const subtotal = numeric(serviceFee) + outsideCosts
    const contingency = outsideCosts * (Math.min(100, numeric(contingencyRate)) / 100)
    return { outsideCosts, subtotal, contingency, total: subtotal + contingency }
  }, [contingencyRate, costs, serviceFee])

  const updateCost = (key: CostKey, value: string) => {
    markStarted()
    setCosts((previous) => ({ ...previous, [key]: value }))
  }

  const updateContingency = (value: string) => {
    markStarted()
    if (value === "") return setContingencyRate("")
    const parsed = Number(value)
    if (!Number.isFinite(parsed)) return setContingencyRate("")
    setContingencyRate(parsed > 100 ? "100" : parsed < 0 ? "0" : value)
  }

  const reset = () => {
    setDestination("United States")
    setServiceFee("0")
    setCosts(initialCosts)
    setContingencyRate("10")
    setTrackingConfirmed(false)
    setCustomsResponsibilityConfirmed(false)
    started.current = false
  }

  const printCalculator = () => {
    trackEvent("calculator_export", {
      calculator_name: "north_america_shipping_customs",
      destination_country: destination,
    })
    window.print()
  }

  const costFields: Array<{ key: CostKey; label: string; help: string }> = [
    { key: "products", label: "Approved products", help: "Outfits, jewelry, gifts, or ceremony items." },
    { key: "shipping", label: "International shipping quote", help: "Current written carrier or forwarder amount." },
    { key: "insurance", label: "Shipment insurance", help: "Use the quoted premium, not the insured value." },
    { key: "duty", label: "Estimated import duty", help: "The customs authority's final assessment controls." },
    {
      key: "destinationTax",
      label: destination === "Canada" ? "Estimated GST/HST and provincial tax" : "Estimated import tax or government fee",
      help: destination === "Canada" ? "Enter the current destination-specific estimate." : "Enter only when a current quote or authority indicates one.",
    },
    { key: "brokerage", label: "Brokerage and clearance charges", help: "Include stated courier disbursement or advancement fees." },
    { key: "alterations", label: "Local fitting and alterations", help: "Keep a destination-side fitting buffer." },
    { key: "other", label: "Other written shipment costs", help: "Remote-area, storage, redelivery, or other stated charges." },
  ]

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-3xl border border-[#e6dfd5] bg-white p-6 sm:p-9">
          <div className="grid gap-5 sm:grid-cols-3">
            <label className="text-sm font-semibold text-[#1f1f1f]">
              Delivery country
              <select
                value={destination}
                onChange={(event) => {
                  markStarted()
                  setDestination(event.target.value as "United States" | "Canada")
                }}
                className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal"
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-[#1f1f1f] sm:col-span-2">
              CeremonyVerse sourcing tier
              <select
                value={serviceFee}
                onChange={(event) => {
                  markStarted()
                  setServiceFee(event.target.value)
                }}
                className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal"
              >
                {servicePlans.map((plan) => <option key={plan.value} value={plan.value}>{plan.label}</option>)}
              </select>
            </label>
          </div>

          <p className="mt-5 rounded-xl border border-[#d9cfbf] bg-[#f4eee4] p-4 text-sm leading-6 text-[#4d403a]">
            Use USD for every entry. Canadian invoices may be issued in CAD; convert them consistently using the rate
            you choose and record that rate separately. This calculator does not provide or lock an exchange rate.
          </p>

          <fieldset className="mt-8">
            <legend className="font-serif text-3xl font-semibold">Landed-cost entries</legend>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {costFields.map((field) => (
                <label key={field.key} className="rounded-xl border border-[#eee7dd] p-4 text-sm font-semibold text-[#1f1f1f]">
                  {field.label}
                  <span className="relative mt-2 block">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d625c]">$</span>
                    <input
                      type="number"
                      min="0"
                      inputMode="decimal"
                      value={costs[field.key]}
                      onChange={(event) => updateCost(field.key, event.target.value)}
                      className="w-full rounded-lg border border-[#d9cfbf] bg-[#faf8f5] py-2.5 pl-7 pr-3 text-right font-normal"
                    />
                  </span>
                  <span className="mt-2 block text-xs font-normal leading-5 text-[#6d625c]">{field.help}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-6 block max-w-xs text-sm font-semibold text-[#1f1f1f]">
            Contingency percentage
            <input
              type="number"
              min="0"
              max="100"
              value={contingencyRate}
              onChange={(event) => updateContingency(event.target.value)}
              className="mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal"
            />
          </label>

          <fieldset className="mt-8 rounded-2xl border border-[#d9cfbf] bg-[#faf8f5] p-6">
            <legend className="px-2 font-serif text-2xl font-semibold">Shipment-readiness checks</legend>
            <div className="space-y-4 text-sm leading-6 text-[#4d403a]">
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={trackingConfirmed} onChange={(event) => { markStarted(); setTrackingConfirmed(event.target.checked) }} className="mt-1 h-4 w-4 accent-[#7a6841]" />
                <span>The current quote identifies the carrier, service level, tracking method, destination, and claim procedure.</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={customsResponsibilityConfirmed} onChange={(event) => { markStarted(); setCustomsResponsibilityConfirmed(event.target.checked) }} className="mt-1 h-4 w-4 accent-[#7a6841]" />
                <span>The written terms identify the importer or recipient and who pays duties, taxes, brokerage, storage, and redelivery charges.</span>
              </label>
            </div>
          </fieldset>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row print:hidden">
            <button type="button" onClick={printCalculator} className="rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white">Print or Save as PDF</button>
            <button type="button" onClick={reset} className="rounded-full border border-[#7a6841] px-7 py-3 text-sm font-semibold text-[#7a6841]">Clear calculator</button>
          </div>
        </div>

        <aside className="cv-calculator-summary h-fit rounded-3xl bg-[#1f1f1f] p-7 text-white lg:sticky lg:top-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">Working landed cost</p>
          <p className="mt-2 text-sm !text-white/65">Delivery to {destination}</p>
          <dl className="mt-6 space-y-5">
            <div className="flex justify-between gap-4 border-b border-white/15 pb-4"><dt className="!text-white/75">CeremonyVerse service fee</dt><dd className="font-semibold">{formatter.format(numeric(serviceFee))}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/15 pb-4"><dt className="!text-white/75">Products and outside costs</dt><dd className="font-semibold">{formatter.format(summary.outsideCosts)}</dd></div>
            <div className="flex justify-between gap-4 border-b border-white/15 pb-4"><dt className="!text-white/75">Outside-cost contingency</dt><dd className="font-semibold">{formatter.format(summary.contingency)}</dd></div>
            <div><dt className="!text-white/75">Estimated landed total</dt><dd className="mt-2 font-serif text-4xl font-semibold !text-[#e8cf9d]">{formatter.format(summary.total)}</dd></div>
          </dl>

          <div className="mt-7 rounded-xl border border-white/15 p-4 text-sm leading-6">
            <p className={trackingConfirmed ? "!text-emerald-200" : "!text-white/65"}>{trackingConfirmed ? "✓" : "○"} Tracking terms confirmed</p>
            <p className={`mt-2 ${customsResponsibilityConfirmed ? "!text-emerald-200" : "!text-white/65"}`}>{customsResponsibilityConfirmed ? "✓" : "○"} Customs responsibility confirmed</p>
          </div>

          <p className="mt-6 text-xs leading-5 !text-white/60">
            This is a planning estimate, not a carrier, customs, tax, or delivery quote. Prices, exchange rates,
            assessments, and availability may change. The current written provider documents and government assessment control.
          </p>
          <p className="mt-3 text-xs leading-5 !text-white/60 print:hidden">
            Your entries stay in this browser and are not sent to CeremonyVerse.
          </p>
          <Link href="/contact/?service=india&from=shipping-customs-calculator" className="mt-6 inline-flex w-full justify-center rounded-full bg-[#c5a059] px-5 py-3 text-sm font-semibold !text-[#1f1f1f] print:hidden">
            Discuss a Sourcing Quote
          </Link>
        </aside>
      </div>
    </section>
  )
}
