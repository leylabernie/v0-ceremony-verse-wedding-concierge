"use client"

import { useState } from "react"
import {
  calculateFoodBeverageEstimate,
  calculatePackageEstimate,
  getRateProgram,
  RATE_REVIEWED_ON,
  resortRateEntries,
  resortRatePrograms,
  type ResortDestination,
} from "@/lib/resort-wedding-rates"

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

function numeric(value: string): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

type ResortRateSelectorProps = {
  guestCount: string
  onApply: (amount: number, sourceLabel: string, confidence: "estimate" | "written-quote") => void
}

export function ResortRateSelector({ guestCount, onApply }: ResortRateSelectorProps) {
  const [resortId, setResortId] = useState("")
  const [packageId, setPackageId] = useState("")
  const [venueChoice, setVenueChoice] = useState("included")
  const [foodChoice, setFoodChoice] = useState("included")
  const [manualPackageQuote, setManualPackageQuote] = useState("")
  const [manualGuestOverage, setManualGuestOverage] = useState("")
  const [manualVenueQuote, setManualVenueQuote] = useState("")
  const [manualFoodQuote, setManualFoodQuote] = useState("")

  const selectedResort = resortRateEntries.find(({ id }) => id === resortId)
  const program = selectedResort ? getRateProgram(selectedResort.programId) : undefined
  const selectedPackage = program?.packages.find(({ id }) => id === packageId) ?? program?.packages[0]
  const guests = numeric(guestCount)

  const estimate = selectedPackage ? calculatePackageEstimate(selectedPackage, guests) : null

  const selectedFoodOption = program?.foodBeverageOptions?.find(({ id }) => id === foodChoice)
  const packageAmount = estimate?.missingPackagePrice ? numeric(manualPackageQuote) : estimate?.packageCost ?? 0
  const guestOverageAmount = estimate?.missingGuestPricing
    ? numeric(manualGuestOverage)
    : estimate?.publishedGuestOverage ?? 0
  const venueAmount = venueChoice === "manual" ? numeric(manualVenueQuote) : 0
  const foodAmount =
    foodChoice === "manual"
      ? numeric(manualFoodQuote)
      : selectedFoodOption
        ? calculateFoodBeverageEstimate(selectedFoodOption, guests)
        : 0
  const knownTotal = packageAmount + guestOverageAmount + venueAmount + foodAmount

  const needsPackageQuote = Boolean(estimate?.missingPackagePrice && !numeric(manualPackageQuote))
  const needsGuestQuote = Boolean(estimate?.missingGuestPricing && !numeric(manualGuestOverage))
  const outsideRange = Boolean(estimate?.outsidePublishedGuestRange)
  const hasIncompletePricing = needsPackageQuote || needsGuestQuote || outsideRange
  const usesWrittenQuote = Boolean(
    numeric(manualPackageQuote) ||
    numeric(manualGuestOverage) ||
    (venueChoice === "manual" && numeric(manualVenueQuote)) ||
    (foodChoice === "manual" && numeric(manualFoodQuote)),
  )

  const changeResort = (nextResortId: string) => {
    setResortId(nextResortId)
    const nextResort = resortRateEntries.find(({ id }) => id === nextResortId)
    const nextProgram = nextResort ? getRateProgram(nextResort.programId) : undefined
    setPackageId(nextProgram?.packages[0]?.id ?? "")
    setVenueChoice("included")
    setFoodChoice("included")
    setManualPackageQuote("")
    setManualGuestOverage("")
    setManualVenueQuote("")
    setManualFoodQuote("")
  }

  const changePackage = (nextPackageId: string) => {
    setPackageId(nextPackageId)
    setVenueChoice("included")
    setFoodChoice("included")
    setManualPackageQuote("")
    setManualGuestOverage("")
    setManualVenueQuote("")
    setManualFoodQuote("")
  }

  const sourceLabel = selectedResort && selectedPackage ? `${selectedResort.name} — ${selectedPackage.name}` : "Resort calculation"

  return (
    <section className="mt-9 rounded-2xl border border-[#cdbf9e] bg-[#f7f1e6] p-5 sm:p-7" aria-labelledby="published-rate-heading">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">Resort cost starting point</p>
          <h2 id="published-rate-heading" className="mt-2 font-serif text-3xl font-semibold">Choose a resort and wedding program</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5e4a40]">
            Official pages were checked on {RATE_REVIEWED_ON}. When a current price is public, the calculator loads it automatically. When it is not, the resort remains selectable and asks for the amount from your current written proposal.
          </p>
        </div>
        <span className="w-fit rounded-full border border-[#bba978] bg-white px-3 py-1 text-xs font-semibold text-[#5e4a40]">USD · rates or written quotes</span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <label className="text-sm font-semibold text-[#1f1f1f]">
          Resort
          <select value={resortId} onChange={(event) => changeResort(event.target.value)} className="mt-2 w-full rounded-xl border border-[#cdbf9e] bg-white px-4 py-3 font-normal">
            <option value="">Select a resort</option>
            {(["Mexico", "Punta Cana"] as ResortDestination[]).map((destination) => (
              <optgroup key={destination} label={destination}>
                {resortRateEntries.filter((resort) => resort.destination === destination).map((resort) => {
                  const resortProgram = getRateProgram(resort.programId)
                  const hasPublicNumber = Boolean(
                    resortProgram?.packages.some((packageRate) => packageRate.basePrice !== null) ||
                    resortProgram?.foodBeverageOptions?.length,
                  )
                  return <option key={resort.id} value={resort.id}>{resort.name} — {hasPublicNumber ? "public rate available" : "quote required"}</option>
                })}
              </optgroup>
            ))}
          </select>
          <span className="mt-1 block text-xs font-normal leading-5 text-[#6d625c]">The list includes the resorts on the reviewed public programs plus commonly compared Mexico and Punta Cana properties.</span>
        </label>

        <label className="text-sm font-semibold text-[#1f1f1f]">
          Wedding package or proposal
          <select value={selectedPackage?.id ?? ""} onChange={(event) => changePackage(event.target.value)} disabled={!program} className="mt-2 w-full rounded-xl border border-[#cdbf9e] bg-white px-4 py-3 font-normal disabled:cursor-not-allowed disabled:opacity-60">
            {!program ? <option value="">Select a resort first</option> : null}
            {program?.packages.map((packageRate) => (
              <option key={packageRate.id} value={packageRate.id}>
                {packageRate.name} — {packageRate.basePrice === null ? "current quote required" : packageRate.basePrice === 0 ? "$0 advertised" : `from ${currencyFormatter.format(packageRate.basePrice)}`}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedPackage && program ? (
        <div className="mt-6 space-y-5">
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-xl border border-[#ddd2b8] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a6841]">Venue included in package</p>
              <p className="mt-2 text-sm leading-6 text-[#4d403a]">{selectedPackage.includedVenue}</p>
            </article>
            <article className="rounded-xl border border-[#ddd2b8] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a6841]">Food &amp; beverage included</p>
              <p className="mt-2 text-sm leading-6 text-[#4d403a]">{selectedPackage.includedFoodBeverage}</p>
            </article>
          </div>

          <p className="rounded-xl bg-[#fffaf0] px-4 py-3 text-sm leading-6 text-[#5e4a40]">{selectedPackage.rateNote}</p>

          {estimate?.missingPackagePrice ? (
            <label className="block text-sm font-semibold text-[#1f1f1f]">
              Current resort wedding / ceremony quote
              <span className="relative mt-2 block max-w-sm">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d625c]">$</span>
                <input type="number" min="0" inputMode="decimal" value={manualPackageQuote} onChange={(event) => setManualPackageQuote(event.target.value)} className="w-full rounded-xl border border-[#cdbf9e] bg-white py-3 pl-7 pr-4" placeholder="Enter written quote" />
              </span>
            </label>
          ) : null}

          {estimate?.missingGuestPricing ? (
            <label className="block text-sm font-semibold text-[#1f1f1f]">
              Additional-guest amount from current proposal
              <span className="relative mt-2 block max-w-sm">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d625c]">$</span>
                <input type="number" min="0" inputMode="decimal" value={manualGuestOverage} onChange={(event) => setManualGuestOverage(event.target.value)} className="w-full rounded-xl border border-[#cdbf9e] bg-white py-3 pl-7 pr-4" placeholder="Not publicly priced" />
              </span>
            </label>
          ) : null}

          <div className="grid gap-4 lg:grid-cols-2">
            <label className="text-sm font-semibold text-[#1f1f1f]">
              Venue cost
              <select value={venueChoice} onChange={(event) => setVenueChoice(event.target.value)} className="mt-2 w-full rounded-xl border border-[#cdbf9e] bg-white px-4 py-3 font-normal">
                <option value="included">{estimate?.missingPackagePrice ? "Already included in written proposal — $0 additional" : "Use package-included venue — $0 additional"}</option>
                <option value="manual">Different, extra, or extended venue — enter written quote</option>
              </select>
              {venueChoice === "manual" ? (
                <span className="relative mt-2 block">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-normal text-[#6d625c]">$</span>
                  <input type="number" min="0" inputMode="decimal" value={manualVenueQuote} onChange={(event) => setManualVenueQuote(event.target.value)} className="w-full rounded-xl border border-[#cdbf9e] bg-white py-3 pl-7 pr-4 font-normal" placeholder="Venue quote" />
                </span>
              ) : null}
            </label>

            <label className="text-sm font-semibold text-[#1f1f1f]">
              Food &amp; beverage cost
              <select value={foodChoice} onChange={(event) => setFoodChoice(event.target.value)} className="mt-2 w-full rounded-xl border border-[#cdbf9e] bg-white px-4 py-3 font-normal">
                <option value="included">
                  {program.foodBeverageOptions
                    ? "No published add-on selected"
                    : estimate?.missingPackagePrice
                      ? "Already included in written proposal — $0 additional"
                      : "Use package-included food & beverage — $0 additional"}
                </option>
                {program.foodBeverageOptions?.map((option) => (
                  <option key={option.id} value={option.id}>{option.name} — {currencyFormatter.format(option.basePrice)} up to {option.includedGuests}</option>
                ))}
                <option value="manual">Different, upgraded, or additional F&amp;B — enter written quote</option>
              </select>
              {foodChoice === "manual" ? (
                <span className="relative mt-2 block">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-normal text-[#6d625c]">$</span>
                  <input type="number" min="0" inputMode="decimal" value={manualFoodQuote} onChange={(event) => setManualFoodQuote(event.target.value)} className="w-full rounded-xl border border-[#cdbf9e] bg-white py-3 pl-7 pr-4 font-normal" placeholder="Food & beverage quote" />
                </span>
              ) : selectedFoodOption ? (
                <span className="mt-2 block text-xs font-normal leading-5 text-[#6d625c]">{selectedFoodOption.description}</span>
              ) : null}
            </label>
          </div>

          <div className="rounded-2xl bg-[#1f1f1f] p-5 text-white">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <div><p className="text-xs text-white/60">Package</p><p className="mt-1 font-semibold">{currencyFormatter.format(packageAmount)}</p></div>
              <div><p className="text-xs text-white/60">Guest overage</p><p className="mt-1 font-semibold">{currencyFormatter.format(guestOverageAmount)}</p></div>
              <div><p className="text-xs text-white/60">Venue add-on</p><p className="mt-1 font-semibold">{currencyFormatter.format(venueAmount)}</p></div>
              <div><p className="text-xs text-white/60">F&amp;B add-on</p><p className="mt-1 font-semibold">{currencyFormatter.format(foodAmount)}</p></div>
              <div><p className="text-xs text-[#e8cf9d]">Known resort amount</p><p className="mt-1 font-serif text-2xl font-semibold text-[#e8cf9d]">{currencyFormatter.format(knownTotal)}</p></div>
            </div>
          </div>

          {hasIncompletePricing ? (
            <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950" role="status">
              <p className="font-semibold">A current written resort quote is still required.</p>
              <ul className="mt-1 list-disc space-y-1 pl-5">
                {needsPackageQuote ? <li>The complete wedding / ceremony package price is not publicly posted.</li> : null}
                {needsGuestQuote ? <li>The selected package does not publish a rate for guests above its included count.</li> : null}
                {outsideRange ? <li>Your guest count is outside the package&apos;s published guest range or design limit.</li> : null}
              </ul>
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => onApply(knownTotal, sourceLabel, usesWrittenQuote ? "written-quote" : "estimate")}
              disabled={!selectedPackage || (knownTotal === 0 && Boolean(estimate?.missingPackagePrice))}
              className="rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Use {currencyFormatter.format(knownTotal)} in the budget
            </button>
            <a href={program.sourceUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#6a572e] underline decoration-[#bba978] underline-offset-4">View official source</a>
          </div>

          <details className="rounded-xl border border-[#ddd2b8] bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold text-[#1f1f1f]">Important published conditions</summary>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[#5e4a40]">
              {program.conditions.map((condition) => <li key={condition}>{condition}</li>)}
            </ul>
          </details>
        </div>
      ) : (
        <p className="mt-6 rounded-xl border border-dashed border-[#bba978] bg-white px-4 py-5 text-sm leading-6 text-[#5e4a40]">
          Select a resort to load its current public starting rate where one is available, or enter the number from its current written proposal. No unpublished resort rate is guessed.
        </p>
      )}

      <div className="mt-6 border-t border-[#d8caa9] pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a6841]">Official resort pages reviewed</p>
        <ul className="mt-3 grid gap-2 text-xs leading-5 text-[#6d625c] sm:grid-cols-2">
          {resortRatePrograms.map((source) => (
            <li key={source.id}><a href={source.sourceUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">{source.sourceName}</a></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
