"use client"

import { useMemo, useState } from "react"
import { trackEvent } from "@/lib/analytics"

/**
 * Resort Strategy Matcher — five-step consultation wizard.
 *
 * One question per step, conditional cultural-events step (only for South
 * Asian weddings), and a final contact frame. The compiled payload POSTs to
 * /api/lead-capture (source: "strategy-matcher", calculatorType:
 * "consultation-wizard") so Mini's team receives the full requirement set
 * through the same pipeline as every other planning tool.
 */

const VISIONS = ["South Asian Destination Wedding", "Luxury Honeymoon", "Family Resort Escape", "Group Cruise"] as const

const CULTURAL_EVENTS = ["Ganesh Puja", "Mehndi", "Sangeet", "Baraat Procession", "Vidai", "Reception"] as const

const BARAAT_STYLES = ["Traditional Horse", "Luxury Car", "Golf Cart", "Walking Only"] as const

const DIETARY = ["Strict Jain Catering", "Satvik Menu Setup", "Pure Vegetarian Kitchen", "Halal Options", "Standard International"] as const

type Vision = (typeof VISIONS)[number]
type StepKey = "vision" | "logistics" | "events" | "dietary" | "contact"

const STEP_TITLES: Record<StepKey, { eyebrow: string; title: string; blurb: string }> = {
  vision: {
    eyebrow: "Step 1 · Vision",
    title: "What are you planning?",
    blurb: "Pick the celebration closest to what you have in mind — the resort strategy changes completely between them.",
  },
  logistics: {
    eyebrow: "Step 2 · Guest size & logistics",
    title: "How many people are coming, and who needs care?",
    blurb: "Guest count drives the room block; the elder answer drives which buildings and floors we fight for in writing.",
  },
  events: {
    eyebrow: "Step 3 · Cultural events",
    title: "Which traditional events are you hosting?",
    blurb: "Each event needs its own venue, permits, and power. Tick everything — the resort must hold space for each one in the written proposal.",
  },
  dietary: {
    eyebrow: "Step 4 · Dietary priorities",
    title: "Which culinary requirements apply?",
    blurb: "Strict requirements succeed only when they reach the kitchen coordinator early — select all that apply, or none if everyone eats anything.",
  },
  contact: {
    eyebrow: "Step 5 · Your details",
    title: "Where should Mini send your strategy match?",
    blurb: "Mini Patel personally reviews every submission and replies with the next practical step — no payment, no obligation.",
  },
}

const fieldClass =
  "mt-2 block min-h-12 w-full rounded-lg border border-[#d9cfbf] bg-white px-3 py-2.5 text-base text-[#1f1f1f] outline-none focus:border-[#7a6841]"

export function StrategyMatcherClient() {
  const [vision, setVision] = useState<Vision | null>(null)
  const [guestCount, setGuestCount] = useState("")
  const [eldersTraveling, setEldersTraveling] = useState(false)
  const [events, setEvents] = useState<Record<string, boolean>>({})
  const [baraatStyle, setBaraatStyle] = useState<(typeof BARAAT_STYLES)[number]>("Traditional Horse")
  const [dietary, setDietary] = useState<Record<string, boolean>>({})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [targetDates, setTargetDates] = useState("")
  const [website, setWebsite] = useState("") // honeypot
  const [stepKey, setStepKey] = useState<StepKey>("vision")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [error, setError] = useState("")

  const steps = useMemo<StepKey[]>(() => {
    const base: StepKey[] = ["vision", "logistics"]
    if (vision === "South Asian Destination Wedding") base.push("events")
    base.push("dietary", "contact")
    return base
  }, [vision])

  const stepIndex = Math.max(0, steps.indexOf(stepKey))
  const currentStep = steps[stepIndex]
  const progress = steps.length > 1 ? (stepIndex / (steps.length - 1)) * 100 : 100
  const selectedEvents = CULTURAL_EVENTS.filter((event) => events[event])

  function goNext() {
    if (stepKey === "vision" && !vision) {
      setError("Choose what you're planning to continue.")
      return
    }
    if (stepKey === "logistics" && (Number.parseInt(guestCount, 10) || 0) < 1) {
      setError("Enter an estimated guest count (a rough number is fine).")
      return
    }
    setError("")
    const nextIndex = Math.min(stepIndex + 1, steps.length - 1)
    setStepKey(steps[nextIndex])
  }

  function goBack() {
    setError("")
    const previousIndex = Math.max(0, stepIndex - 1)
    setStepKey(steps[previousIndex])
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "submitting") return

    if (!name.trim() || !email.trim()) {
      setError("Please add your name and email so Mini can send your strategy match.")
      return
    }

    setStatus("submitting")
    setError("")

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          whatsapp: phone.trim(),
          targetDates: targetDates.trim(),
          source: "strategy-matcher",
          calculatorType: "consultation-wizard",
          guestCount: guestCount.trim(),
          eventsPlanned: selectedEvents.join(", "),
          pageUrl: typeof window !== "undefined" ? window.location.href : "/planning-tools/strategy-matcher/",
          results: {
            vision,
            guestCount: guestCount.trim(),
            eldersTraveling,
            culturalEvents: selectedEvents,
            baraatStyle: selectedEvents.includes("Baraat Procession") ? baraatStyle : null,
            dietaryPriorities: DIETARY.filter((item) => dietary[item]),
            targetDates: targetDates.trim(),
          },
          website,
        }),
      })

      if (!response.ok) throw new Error("Request failed")

      trackEvent("calculator_lead_capture", { calculatorType: "consultation-wizard" })
      setStatus("success")
    } catch {
      setStatus("error")
      setError(
        "Something went wrong. Please email hello@ceremonyverse.com and Mini will pick up your strategy match directly.",
      )
    }
  }

  if (status === "success") {
    return (
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div role="status" className="rounded-2xl border-2 border-[#7a6841] bg-[#f8f6f2] p-8 text-center sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Strategy match received</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#1f1f1f] sm:text-4xl">Thank you!</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[#4d403a]">
              Mini Patel is now reviewing your cultural and logistical requirements. Check your email for your custom
              tracking tracker and scheduling instructions.
            </p>
            <p className="mt-6 text-sm leading-6 text-[#5e4a40]">
              Something urgent in the meantime?{" "}
              <a href="https://wa.me/12153419990" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7a6841] underline">
                WhatsApp +1 (215) 341-9990
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 py-16 sm:py-20">
      <style>{`@keyframes cv-step-enter { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } } .cv-step-enter { animation: cv-step-enter 0.25s ease-out both; }`}</style>

      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border-2 border-[#7a6841] bg-[#f8f6f2] p-7 sm:p-10">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-baseline justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#5e4a40]">
              <span>
                Step {stepIndex + 1} of {steps.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#e6dfd5]">
              <div
                className="h-full rounded-full bg-[#7a6841] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div key={stepKey} className="cv-step-enter">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a6841]">{STEP_TITLES[currentStep].eyebrow}</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-[#1f1f1f]">{STEP_TITLES[currentStep].title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#5e4a40]">{STEP_TITLES[currentStep].blurb}</p>

            {/* Step 1 — Vision */}
            {stepKey === "vision" ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {VISIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setVision(option)
                      setError("")
                    }}
                    className={`rounded-xl border-2 p-5 text-left transition ${
                      vision === option
                        ? "border-[#7a6841] bg-white shadow-sm"
                        : "border-[#e6dfd5] bg-white hover:border-[#c5a059]"
                    }`}
                  >
                    <span className="block font-semibold text-[#1f1f1f]">{option}</span>
                  </button>
                ))}
              </div>
            ) : null}

            {/* Step 2 — Guest size & logistics */}
            {stepKey === "logistics" ? (
              <div className="mt-6">
                <label className="block text-sm font-semibold text-[#1f1f1f]">
                  Estimated Guest Count
                  <input
                    type="number"
                    min="0"
                    step="1"
                    inputMode="numeric"
                    value={guestCount}
                    onChange={(event) => setGuestCount(event.target.value)}
                    className={fieldClass}
                    placeholder="e.g., 120"
                  />
                </label>
                <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-[#e6dfd5] bg-white p-4">
                  <input
                    type="checkbox"
                    checked={eldersTraveling}
                    onChange={(event) => setEldersTraveling(event.target.checked)}
                    className="mt-1 size-4 shrink-0 accent-[#7a6841]"
                  />
                  <span className="text-sm leading-6 text-[#4d403a]">
                    <strong className="font-semibold text-[#1f1f1f]">
                      Will grandparents or elderly family members be traveling?
                    </strong>{" "}
                    (Enables lobby-level layout filtering — we prioritize ground floors, elevators, and rooms nearest
                    the ballroom.)
                  </span>
                </label>
              </div>
            ) : null}

            {/* Step 3 — Cultural events (South Asian weddings only) */}
            {stepKey === "events" ? (
              <div className="mt-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {CULTURAL_EVENTS.map((culturalEvent) => (
                    <label
                      key={culturalEvent}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                        events[culturalEvent] ? "border-[#7a6841] bg-white" : "border-[#e6dfd5] bg-white hover:border-[#c5a059]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={!!events[culturalEvent]}
                        onChange={(changeEvent) =>
                          setEvents((previous) => ({ ...previous, [culturalEvent]: changeEvent.target.checked }))
                        }
                        className="size-4 shrink-0 accent-[#7a6841]"
                      />
                      <span className="text-sm font-semibold text-[#1f1f1f]">{culturalEvent}</span>
                    </label>
                  ))}
                </div>
                {events["Baraat Procession"] ? (
                  <label className="mt-5 block text-sm font-semibold text-[#1f1f1f]">
                    Baraat Style
                    <select
                      value={baraatStyle}
                      onChange={(event) => setBaraatStyle(event.target.value as (typeof BARAAT_STYLES)[number])}
                      className={fieldClass}
                    >
                      {BARAAT_STYLES.map((style) => (
                        <option key={style} value={style}>{style}</option>
                      ))}
                    </select>
                  </label>
                ) : null}
              </div>
            ) : null}

            {/* Step 4 — Dietary priorities */}
            {stepKey === "dietary" ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {DIETARY.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setDietary((previous) => ({ ...previous, [item]: !previous[item] }))}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                      dietary[item]
                        ? "border-[#7a6841] bg-[#7a6841] text-white"
                        : "border-[#c7bcae] bg-white text-[#4d403a] hover:border-[#7a6841]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            ) : null}

            {/* Step 5 — Lead capture frame */}
            {stepKey === "contact" ? (
              <form onSubmit={handleSubmit} className="mt-6" noValidate={false}>
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
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-[#1f1f1f]">
                    Full name
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className={fieldClass}
                      autoComplete="name"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-[#1f1f1f]">
                    Email address
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className={fieldClass}
                      autoComplete="email"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-[#1f1f1f]">
                    Phone / WhatsApp <span className="font-normal text-[#5e4a40]">(optional)</span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      className={fieldClass}
                      autoComplete="tel"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-[#1f1f1f]">
                    Target wedding / travel date <span className="font-normal text-[#5e4a40]">(optional)</span>
                    <input
                      type="date"
                      value={targetDates}
                      onChange={(event) => setTargetDates(event.target.value)}
                      className={fieldClass}
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#7a6841] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#5e4a40] disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending to Mini…" : "Get My Resort Strategy Match"}
                </button>
                <p className="mt-3 text-center text-xs leading-5 text-[#5e4a40]">
                  Your answers stay private — see the{" "}
                  <a href="https://www.ceremonyverse.com/privacy/" className="underline">
                    privacy notice
                  </a>
                  . No payment is requested at any step.
                </p>
              </form>
            ) : null}

            {error ? (
              <p className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm leading-6 text-[#a13b2f]" role="alert">
                {error}
              </p>
            ) : null}
          </div>

          {/* Navigation */}
          {stepKey !== "contact" ? (
            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={goBack}
                disabled={stepIndex === 0}
                className="rounded-full border border-[#c7bcae] px-6 py-2.5 text-sm font-semibold text-[#5e4a40] transition hover:border-[#7a6841] disabled:invisible"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={goNext}
                className="rounded-full bg-[#7a6841] px-8 py-2.5 text-sm font-bold text-white transition hover:bg-[#5e4a40]"
              >
                Continue →
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
