"use client"

import { useMemo, useState } from "react"
import { trackEvent } from "@/lib/analytics"
import { TravelPortalCta } from "@/components/travel-portal-cta"

/**
 * Room-Block Matrix Calculator — client-side planning tool.
 *
 * All math runs in the browser; nothing is sent anywhere until the visitor
 * chooses to submit the "Lock In" form, which POSTs the matrix to
 * /api/lead-capture (source: "room-block-matrix-calculator") so Mini's team
 * receives it through the same pipeline as the other planning tools.
 *
 * Logic (kept transparent on screen):
 *  - Base rooms = guests ÷ 2 (traditional Indian family distribution averages
 *    two guests per room: couples, a parent with a child, siblings pairing up)
 *  - +10% buffer for last-minute additions and resort occupancy quirks
 *  - Accessible, lobby-level rooms follow the elder-percentage slider
 *    (two elders per room, rounded up)
 *  - Room mix: guests travelling as family units → Double-Queen (parents with
 *    children); single/couple guests → King. The King count is never allowed
 *    to fall below the accessible-room count, because accessible rooms are
 *    typically king-bed configurations.
 */

const integerFormatter = new Intl.NumberFormat("en-US")

const inputClass =
  "mt-2 block min-h-12 w-full rounded-lg border border-[#d9cfbf] bg-white px-3 py-2.5 text-base text-[#1f1f1f] outline-none focus:border-[#7a6841]"

function buildMatrix(totalGuests: number, elderPct: number, familyPct: number) {
  const safeGuests = Math.max(0, Math.floor(totalGuests) || 0)
  const elderGuests = Math.round((safeGuests * elderPct) / 100)
  const familyGuests = Math.round((safeGuests * familyPct) / 100)
  const singleGuests = Math.max(0, safeGuests - familyGuests)

  const baseRooms = safeGuests / 2
  const bufferRooms = baseRooms * 0.1
  const totalRooms = Math.ceil(baseRooms + bufferRooms)

  const accessibleRooms = Math.ceil(elderGuests / 2)

  const kingRooms =
    totalRooms === 0 ? 0 : Math.round((totalRooms * singleGuests) / Math.max(safeGuests, 1))
  const kingRoomsFinal = Math.max(kingRooms, Math.min(accessibleRooms, totalRooms))
  const queenRooms = Math.max(0, totalRooms - kingRoomsFinal)

  return {
    totalGuests: safeGuests,
    elderGuests,
    familyGuests,
    singleGuests,
    baseRooms: Math.floor(baseRooms),
    bufferRooms: Math.ceil(bufferRooms),
    totalRooms,
    accessibleRooms,
    kingRooms: kingRoomsFinal,
    queenRooms,
  }
}

export function RoomBlockMatrixClient() {
  const [guests, setGuests] = useState("120")
  const [elderPct, setElderPct] = useState(25)
  const [familyPct, setFamilyPct] = useState(60)
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("") // honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [error, setError] = useState("")

  const matrix = useMemo(
    () => buildMatrix(Number.parseInt(guests, 10) || 0, elderPct, familyPct),
    [guests, elderPct, familyPct],
  )

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "submitting") return

    if (!firstName.trim() || !email.trim()) {
      setError("Please add your first name and email so Mini can send your matrix.")
      return
    }

    setStatus("submitting")
    setError("")

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: firstName.trim(),
          email: email.trim(),
          source: "room-block-matrix-calculator",
          calculatorType: "room-block-matrix",
          pageUrl: typeof window !== "undefined" ? window.location.href : "/tools/room-block-matrix/",
          results: matrix,
          website,
        }),
      })

      if (!response.ok) throw new Error("Request failed")

      trackEvent("calculator_lead_capture", { calculatorType: "room-block-matrix" })
      setStatus("success")
    } catch {
      setStatus("error")
      setError(
        "Something went wrong. Please email hello@ceremonyverse.com and we'll lock in your matrix directly.",
      )
    }
  }

  const statCards = [
    { label: "Total rooms needed", value: matrix.totalRooms, hint: `${matrix.baseRooms} base + ${matrix.bufferRooms} buffer (10%)` },
    { label: "Accessible, lobby-level rooms", value: matrix.accessibleRooms, hint: `${matrix.elderGuests} elder guests ÷ 2 per room` },
    { label: "King-bed rooms", value: matrix.kingRooms, hint: "Couples & single travellers" },
    { label: "Double-Queen rooms", value: matrix.queenRooms, hint: "Family units — parents with children" },
  ]

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-5">
        {/* Inputs */}
        <div className="rounded-2xl border border-[#e6dfd5] bg-white p-7 lg:col-span-2">
          <h2 className="font-serif text-2xl font-semibold">Your family&apos;s numbers</h2>

          <label className="mt-6 block text-sm font-semibold text-[#1f1f1f]">
            Total estimated guests
            <input
              type="number"
              min="0"
              step="1"
              inputMode="numeric"
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className={inputClass}
            />
          </label>

          <div className="mt-6">
            <div className="flex items-baseline justify-between text-sm font-semibold text-[#1f1f1f]">
              <span>Percentage of elderly / grandparents</span>
              <span className="font-serif text-lg text-[#7a6841]">{elderPct}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={elderPct}
              onChange={(event) => setElderPct(Number.parseInt(event.target.value, 10))}
              className="mt-2 w-full accent-[#7a6841]"
              aria-label="Percentage of elderly and grandparents"
            />
            <p className="mt-1 text-xs text-[#5e4a40]">{matrix.elderGuests} elder guests — these drive accessible, lobby-level rooms.</p>
          </div>

          <div className="mt-6">
            <div className="flex items-baseline justify-between text-sm font-semibold text-[#1f1f1f]">
              <span>Guests arriving as family units</span>
              <span className="font-serif text-lg text-[#7a6841]">{familyPct}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={familyPct}
              onChange={(event) => setFamilyPct(Number.parseInt(event.target.value, 10))}
              className="mt-2 w-full accent-[#7a6841]"
              aria-label="Percentage of guests arriving as family units"
            />
            <p className="mt-1 text-xs text-[#5e4a40]">
              {matrix.familyGuests} family-unit guests (Double-Queen) · {matrix.singleGuests} singles &amp; couples (King).
            </p>
          </div>

          <p className="mt-6 text-xs leading-5 text-[#5e4a40]">
            This is a planning matrix, not a resort quote. Confirm buildings, floors, accessibility, and every count
            in the resort&apos;s current written proposal.
          </p>
        </div>

        {/* Results */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border-2 border-[#7a6841] bg-[#f8f6f2] p-7">
            <h2 className="font-serif text-2xl font-semibold text-[#7a6841]">Your room-block matrix</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {statCards.map((card) => (
                <div key={card.label} className="rounded-xl border border-[#e6dfd5] bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5e4a40]">{card.label}</p>
                  <p className="mt-2 font-serif text-4xl font-semibold text-[#7a6841]">
                    {integerFormatter.format(card.value)}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#5e4a40]">{card.hint}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#5e4a40]">
              Elders are placed first, in accessible rooms near the lobby and elevator. The 10% buffer covers
              last-minute aunts, uncles, and &ldquo;can we squeeze one more?&rdquo; — the questions every Indian
              family actually gets.
            </p>

            {status === "success" ? (
              <div role="status" className="mt-6 rounded-xl border border-[#a1b79b] bg-[#f0f5ed] p-5">
                <p className="font-serif text-xl font-semibold text-[#2f4a35]">Your matrix is on its way to Mini</p>
                <p className="mt-2 text-sm leading-6 text-[#4d403a]">
                  Mini&apos;s team will review your numbers and reply with the next practical step — no payment, no
                  obligation. Keep editing the sliders anytime; the math updates instantly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 rounded-xl border border-[#e6dfd5] bg-white p-5">
                {/* Honeypot field — visually hidden, ignored by humans. */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <p className="font-serif text-lg font-semibold text-[#1f1f1f]">Want Mini to pressure-test these numbers?</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="flex flex-col text-sm font-medium text-[#4d403a]">
                    <span className="sr-only">First name</span>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      className="rounded-lg border border-[#d9cfbf] bg-white px-3 py-2.5 text-sm text-[#2f2f2f] outline-none focus:border-[#7a6841]"
                    />
                  </label>
                  <label className="flex flex-col text-sm font-medium text-[#4d403a]">
                    <span className="sr-only">Email address</span>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="rounded-lg border border-[#d9cfbf] bg-white px-3 py-2.5 text-sm text-[#2f2f2f] outline-none focus:border-[#7a6841]"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#7a6841] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#5e4a40] disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Lock In This Room Block Matrix with Mini"}
                </button>
                {error ? (
                  <p className="mt-2 text-sm text-[#a13b2f]" role="alert">
                    {error}
                  </p>
                ) : (
                  <p className="mt-2 text-xs leading-5 text-[#5e4a40]">
                    Sends your matrix to Mini&apos;s team. No payment, no spam — see the{" "}
                    <a href="https://www.ceremonyverse.com/privacy/" className="underline">
                      privacy notice
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </div>

          <TravelPortalCta source="room-block-matrix" className="mt-6" />
        </div>
      </div>
    </section>
  )
}
