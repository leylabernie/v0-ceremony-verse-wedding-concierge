"use client"

import { useMemo, useState } from "react"
import { CalculatorLeadCapture } from "@/components/calculator-lead-capture"
import { TravelPortalCta } from "@/components/travel-portal-cta"

/**
 * Catering Deadline Tracker — client-side date math, nothing sent anywhere
 * until the visitor uses the standard lead-capture card (which emails the
 * timeline through /api/lead-capture).
 *
 * Deadlines work backward from the wedding date:
 *  - 180 days: off-site South Asian specialty chef requests to resort management
 *  -  90 days: lock strict Jain / Satvik / Halal ingredients with the kitchen coordinator
 *  -  30 days: finalize the traveling vendor meal count (chefs, decorators, photo crews)
 *
 * Dates are parsed as local calendar dates (new Date(y, m, d)) — never UTC —
 * so the day math cannot drift by one across time zones.
 */

const DAY_MS = 86_400_000

type Milestone = {
  daysPrior: number
  title: string
  body: string
  date: Date
  daysUntil: number
  status: "upcoming" | "soon" | "overdue"
}

function parseLocalDate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return null
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
  return Number.isNaN(date.getTime()) ? null : date
}

function startOfToday(): Date {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

function diffDays(from: Date, to: Date): number {
  return Math.round((to.getTime() - from.getTime()) / DAY_MS)
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" })
}

export function CateringDeadlineTrackerClient() {
  const [weddingDate, setWeddingDate] = useState("")

  const milestones: Milestone[] | null = useMemo(() => {
    const wedding = parseLocalDate(weddingDate)
    if (!wedding) return null
    const today = startOfToday()
    const raw = [
      {
        daysPrior: 180,
        title: "Submit Off-Site Specialty Chef Requests",
        body: "Deadline to submit off-site South Asian catering specialty chef requests to resort management. Outside chefs are the exception, not the default — the written approval, licenses, and outside-vendor fees all start here.",
      },
      {
        daysPrior: 90,
        title: "Lock Strict Jain, Satvik & Halal Ingredients",
        body: "Final deadline to lock in strict Jain, Satvik, or Halal menu ingredients with the resort kitchen coordinator — dedicated cookware, no shared frying oil, no onion or garlic, confirmed in the banquet documentation.",
      },
      {
        daysPrior: 30,
        title: "Finalize the Traveling Vendor Meal Count",
        body: "Deadline to finalize the exact 'Traveling Vendor Meal Count' for outside chefs, decorators, and photo crews. Vendors on site over four hours are typically charged the resort's vendor meal rate.",
      },
    ]
    return raw.map((milestone) => {
      const date = new Date(wedding)
      date.setDate(date.getDate() - milestone.daysPrior)
      const daysUntil = diffDays(today, date)
      const status: Milestone["status"] = daysUntil < 0 ? "overdue" : daysUntil <= 14 ? "soon" : "upcoming"
      return { ...milestone, date, daysUntil, status }
    })
  }, [weddingDate])

  const wedding = useMemo(() => parseLocalDate(weddingDate), [weddingDate])

  const positionFor = (daysPrior: number) => ((180 - daysPrior) / 180) * 100
  const todayMarker = useMemo(() => {
    if (!wedding) return null
    const daysToWedding = diffDays(startOfToday(), wedding)
    if (daysToWedding < 0 || daysToWedding > 180) return null
    return { percent: positionFor(180 - daysToWedding), daysToWedding }
  }, [wedding])

  const statusChip = (milestone: Milestone) => {
    if (milestone.status === "overdue") {
      return { text: `${Math.abs(milestone.daysUntil)} days past — call the resort`, className: "border-[#c0392b]/40 bg-[#fdeded] text-[#a13b2f]" }
    }
    if (milestone.status === "soon") {
      return { text: `Due in ${milestone.daysUntil} day${milestone.daysUntil === 1 ? "" : "s"}`, className: "border-[#d4820a]/40 bg-[#fef9e7] text-[#9a6208]" }
    }
    return { text: `Due in ${milestone.daysUntil} days`, className: "border-[#a1b79b]/50 bg-[#f0f5ed] text-[#2f4a35]" }
  }

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Date input */}
        <div className="rounded-2xl border border-[#e6dfd5] bg-white p-7">
          <label className="block text-sm font-semibold text-[#1f1f1f]">
            Your target wedding date
            <input
              type="date"
              value={weddingDate}
              onChange={(event) => setWeddingDate(event.target.value)}
              className="mt-2 block min-h-12 w-full rounded-lg border border-[#d9cfbf] bg-white px-3 py-2.5 text-base text-[#1f1f1f] outline-none focus:border-[#7a6841] sm:max-w-xs"
            />
          </label>
          {!wedding ? (
            <p className="mt-4 text-sm leading-6 text-[#5e4a40]">
              Pick a date — even a rough target — and the three food deadlines build themselves, working backward
              from your wedding day.
            </p>
          ) : (
            <p className="mt-4 text-sm leading-6 text-[#4d403a]">
              Wedding day: <strong>{formatDate(wedding)}</strong>
              {todayMarker ? (
                <> · <strong>{todayMarker.daysToWedding === 0 ? "It's today!" : `${todayMarker.daysToWedding} day${todayMarker.daysToWedding === 1 ? "" : "s"} to go`}</strong></>
              ) : null}
            </p>
          )}
        </div>

        {/* Visual timeline */}
        {milestones ? (
          <div className="mt-8 rounded-2xl border-2 border-[#7a6841] bg-[#f8f6f2] p-7">
            <h2 className="font-serif text-2xl font-semibold text-[#7a6841]">Your catering countdown</h2>

            <div className="mt-10 hidden px-2 sm:block" aria-hidden="true">
              <div className="relative h-1.5 rounded-full bg-[#e6dfd5]">
                {todayMarker ? (
                  <div
                    className="absolute -top-1 z-10 flex flex-col items-center"
                    style={{ left: `${todayMarker.percent}%`, transform: "translateX(-50%)" }}
                  >
                    <span className="block size-3.5 rotate-45 border-2 border-[#5e4a40] bg-white" />
                    <span className="mt-1.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-[#5e4a40]">
                      Today
                    </span>
                  </div>
                ) : null}
                {[180, 90, 30, 0].map((daysPrior) => (
                  <div
                    key={daysPrior}
                    className="absolute -top-[5px]"
                    style={{ left: `${positionFor(daysPrior)}%`, transform: "translateX(-50%)" }}
                  >
                    <span className={`block size-[18px] rounded-full border-2 border-[#f8f6f2] ${daysPrior === 0 ? "bg-[#7a6841]" : "bg-[#c5a059]"}`} />
                    <span className="mt-1.5 block whitespace-nowrap text-center text-[10px] font-semibold uppercase tracking-wider text-[#5e4a40]">
                      {daysPrior === 0 ? "Wedding" : `T−${daysPrior}`}
                    </span>
                  </div>
                ))}
              </div>
              {/* spacer so the node labels don't clip */}
              <div className="h-8" />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {milestones.map((milestone) => {
                const chip = statusChip(milestone)
                return (
                  <div key={milestone.daysPrior} className="flex flex-col rounded-xl border border-[#e6dfd5] bg-white p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-serif text-3xl font-semibold text-[#7a6841]">T−{milestone.daysPrior}</span>
                      <span className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${chip.className}`}>
                        {chip.text}
                      </span>
                    </div>
                    <p className="mt-3 font-semibold leading-6 text-[#1f1f1f]">{milestone.title}</p>
                    <p className="mt-1 text-sm font-semibold text-[#7a6841]">{formatDate(milestone.date)}</p>
                    <p className="mt-2 text-sm leading-6 text-[#4d403a]">{milestone.body}</p>
                  </div>
                )
              })}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#5e4a40]">
              Dates are working assumptions, not resort commitments — some properties want chef requests even
              earlier than 180 days. Confirm each deadline in the resort&apos;s written catering documentation.
            </p>

            {/* Standard lead-capture card — emails the timeline to the visitor. */}
            <CalculatorLeadCapture
              calculatorType="catering-deadline-tracker"
              source="catering-timeline-tracker"
              results={{
                weddingDate: wedding ? formatDate(wedding) : "",
                milestones: milestones.map(({ daysPrior, title, date, daysUntil }) => ({
                  daysPrior,
                  title,
                  date: formatDate(date),
                  daysUntil,
                })),
              }}
              className="mt-6"
            />
          </div>
        ) : null}

        <TravelPortalCta source="catering_deadline_tracker" className="mt-8" />
      </div>
    </section>
  )
}
