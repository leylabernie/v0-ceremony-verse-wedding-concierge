"use client"

import Link from "next/link"
import { useMemo, useRef, useState } from "react"
import { trackEvent } from "@/lib/analytics"

interface GuestCosts {
  guestCount: string
  guestRooms: string
  averageNights: string
  nightlyRate: string
  hostedRooms: string
  hostedNights: string
  hostedNightlyRate: string
  vipTravelers: string
  averageFlight: string
  transferTravelers: string
  roundTripTransfer: string
  welcomeItems: string
  welcomeItemCost: string
}

const initialValues: GuestCosts = {
  guestCount: "",
  guestRooms: "",
  averageNights: "",
  nightlyRate: "",
  hostedRooms: "",
  hostedNights: "",
  hostedNightlyRate: "",
  vipTravelers: "",
  averageFlight: "",
  transferTravelers: "",
  roundTripTransfer: "",
  welcomeItems: "",
  welcomeItemCost: "",
}

const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
const inputClass = "mt-2 w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] px-4 py-3 font-normal text-right"

function numeric(value: string): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

export function GuestLogisticsClient() {
  const [values, setValues] = useState<GuestCosts>(initialValues)
  const started = useRef(false)

  const summary = useMemo(() => {
    const totalRoomNights = numeric(values.guestRooms) * numeric(values.averageNights)
    const roomBlockRetailValue = totalRoomNights * numeric(values.nightlyRate)
    const hostedRoomCost = numeric(values.hostedRooms) * numeric(values.hostedNights) * numeric(values.hostedNightlyRate)
    const vipFlightCost = numeric(values.vipTravelers) * numeric(values.averageFlight)
    const transferCost = numeric(values.transferTravelers) * numeric(values.roundTripTransfer)
    const welcomeCost = numeric(values.welcomeItems) * numeric(values.welcomeItemCost)
    const hostPaidGuestCost = hostedRoomCost + vipFlightCost + transferCost + welcomeCost
    const guests = numeric(values.guestCount)

    return {
      totalRoomNights,
      roomBlockRetailValue,
      hostedRoomCost,
      vipFlightCost,
      transferCost,
      welcomeCost,
      hostPaidGuestCost,
      perGuest: guests ? hostPaidGuestCost / guests : 0,
    }
  }, [values])

  const update = (field: keyof GuestCosts, value: string) => {
    if (!started.current) {
      started.current = true
      trackEvent("calculator_start", { calculator_name: "guest_vip_cost" })
    }
    setValues((previous) => ({ ...previous, [field]: value }))
  }

  const reset = () => {
    setValues(initialValues)
    started.current = false
  }

  const printCalculator = () => {
    trackEvent("calculator_export", { calculator_name: "guest_vip_cost" })
    window.print()
  }

  return (
    <section className="px-6 pb-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-3xl border border-[#e6dfd5] bg-white p-6 sm:p-9">
          <fieldset>
            <legend className="font-serif text-3xl font-semibold">Guest room estimate</legend>
            <p className="mt-2 leading-7 text-[#4d403a]">Use the same occupancy assumptions and tax-inclusive nightly rate when comparing resorts.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <NumberField label="Estimated guests" value={values.guestCount} onChange={(value) => update("guestCount", value)} />
              <NumberField label="Estimated guest rooms" value={values.guestRooms} onChange={(value) => update("guestRooms", value)} />
              <NumberField label="Average nights per room" value={values.averageNights} onChange={(value) => update("averageNights", value)} />
              <MoneyField label="Nightly rate with taxes/fees" value={values.nightlyRate} onChange={(value) => update("nightlyRate", value)} />
            </div>
          </fieldset>

          <fieldset className="mt-10 border-t border-[#eee7dd] pt-9">
            <legend className="font-serif text-3xl font-semibold">Family-paid rooms and flights</legend>
            <p className="mt-2 leading-7 text-[#4d403a]">Include only rooms or flights the wedding budget—not the guest—will pay.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <NumberField label="Rooms paid by family" value={values.hostedRooms} onChange={(value) => update("hostedRooms", value)} />
              <NumberField label="Paid nights per room" value={values.hostedNights} onChange={(value) => update("hostedNights", value)} />
              <MoneyField label="Hosted-room nightly rate" value={values.hostedNightlyRate} onChange={(value) => update("hostedNightlyRate", value)} />
              <NumberField label="VIP flight travelers" value={values.vipTravelers} onChange={(value) => update("vipTravelers", value)} />
              <MoneyField label="Average round-trip flight" value={values.averageFlight} onChange={(value) => update("averageFlight", value)} />
            </div>
          </fieldset>

          <fieldset className="mt-10 border-t border-[#eee7dd] pt-9">
            <legend className="font-serif text-3xl font-semibold">Transfers and welcome details</legend>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <NumberField label="Transfers paid by family" value={values.transferTravelers} onChange={(value) => update("transferTravelers", value)} />
              <MoneyField label="Round-trip transfer/person" value={values.roundTripTransfer} onChange={(value) => update("roundTripTransfer", value)} />
              <NumberField label="Welcome items" value={values.welcomeItems} onChange={(value) => update("welcomeItems", value)} />
              <MoneyField label="Cost per welcome item" value={values.welcomeItemCost} onChange={(value) => update("welcomeItemCost", value)} />
            </div>
          </fieldset>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row print:hidden">
            <button type="button" onClick={printCalculator} className="rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white">Print or Save as PDF</button>
            <button type="button" onClick={reset} className="rounded-full border border-[#7a6841] px-7 py-3 text-sm font-semibold text-[#7a6841]">Clear calculator</button>
          </div>
        </div>

        <aside className="cv-calculator-summary h-fit rounded-3xl bg-[#1f1f1f] p-7 text-white lg:sticky lg:top-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c5a059]">Guest-cost summary</p>
          <dl className="mt-6 space-y-5">
            <SummaryRow label="Estimated room nights" value={String(summary.totalRoomNights)} />
            <SummaryRow label="Room-block retail value" value={currencyFormatter.format(summary.roomBlockRetailValue)} />
            <SummaryRow label="Family-paid rooms" value={currencyFormatter.format(summary.hostedRoomCost)} />
            <SummaryRow label="Family-paid flights" value={currencyFormatter.format(summary.vipFlightCost)} />
            <SummaryRow label="Family-paid transfers" value={currencyFormatter.format(summary.transferCost)} />
            <SummaryRow label="Welcome items" value={currencyFormatter.format(summary.welcomeCost)} />
            <div className="border-t border-white/15 pt-5">
              <dt className="text-white/75">Host-paid guest support</dt>
              <dd className="mt-2 font-serif text-4xl font-semibold text-[#e8cf9d]">{currencyFormatter.format(summary.hostPaidGuestCost)}</dd>
            </div>
            {summary.perGuest ? <SummaryRow label="Host-paid cost per guest" value={currencyFormatter.format(summary.perGuest)} /> : null}
          </dl>
          <p className="mt-6 text-xs leading-5 text-white/60">
            The room-block retail value is not automatically the family&apos;s expense. Confirm who pays, what the contract guarantees, occupancy rules, attrition, cancellation, taxes, and any credits in writing.
          </p>
          <p className="mt-3 text-xs leading-5 text-white/60 print:hidden">
            Your entries stay in this browser and are not transferred to another calculator or the consultation form. Print or save the results if you want to discuss them.
          </p>
          <Link href="/planning-tools/budget/" onClick={() => trackEvent("calculator_cta_click", { calculator_name: "guest_vip_cost", next_step: "budget" })} className="mt-6 inline-flex w-full justify-center rounded-full bg-[#c5a059] px-5 py-3 text-sm font-semibold text-[#1f1f1f] print:hidden">Open Wedding Budget Calculator</Link>
          <Link href="/contact/?service=mexico&from=guest-calculator" onClick={() => trackEvent("calculator_cta_click", { calculator_name: "guest_vip_cost", next_step: "consultation" })} className="mt-3 inline-flex w-full justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white print:hidden">Discuss Guest Logistics</Link>
        </aside>
      </div>
    </section>
  )
}

function NumberField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="text-sm font-semibold text-[#1f1f1f]">
      {label}
      <input type="number" min="0" step="1" inputMode="numeric" value={value} onChange={(event) => onChange(event.target.value)} className={inputClass} />
    </label>
  )
}

function MoneyField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="text-sm font-semibold text-[#1f1f1f]">
      {label}
      <span className="relative mt-2 block">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6d625c]">$</span>
        <input type="number" min="0" inputMode="decimal" value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-xl border border-[#d9cfbf] bg-[#faf8f5] py-3 pl-8 pr-4 text-right font-normal" />
      </span>
    </label>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/15 pb-4">
      <dt className="text-white/75">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  )
}
