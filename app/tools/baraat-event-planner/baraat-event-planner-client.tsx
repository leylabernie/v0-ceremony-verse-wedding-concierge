"use client"

import { useMemo, useState } from "react"
import { trackEvent } from "@/lib/analytics"

/**
 * Multi-day Baraat & Event Logistics Planner — client-side checklist builder.
 *
 * Every selection maps to a concrete resort-venue requirement, drawn from
 * what actually went wrong (or nearly did) at the three family weddings in
 * Mexico: the baraat horse that wasn't noise-trained, the Haldi that needed
 * shade and a wash-up station, the outside-vendor sound fees nobody caught.
 * Nothing leaves the browser except the visitor's own download.
 */

type EventKey = "ganeshPuja" | "mehndi" | "sangeet" | "baraat" | "vidai" | "reception"

type ProcessionType = "Horse" | "Car" | "Golf Cart" | "Walking"
type SoundSetup =
  | "Acoustic dhol only"
  | "Dhol + small PA speakers"
  | "Full DJ setup with stage sound"
  | "Live band with stage sound"

const PROCESSION_TYPES: ProcessionType[] = ["Horse", "Car", "Golf Cart", "Walking"]

const SOUND_SETUPS: SoundSetup[] = [
  "Acoustic dhol only",
  "Dhol + small PA speakers",
  "Full DJ setup with stage sound",
  "Live band with stage sound",
]

const baraatProcessionRequirements: Record<ProcessionType, string[]> = {
  Horse: [
    "Requires 400-meter unobstructed flat pathway separate from main resort traffic",
    "Confirm in writing that the horse is trained for loud dhol and baraat crowds — a resort horse generally is not",
    "Confirm the handler, cleanup, and any animal-related liability terms before signing",
  ],
  Car: [
    "Requires written resort approval for a decorated vehicle on property",
    "Confirm the route avoids guest rooms and pools, with turning space at the start and end",
  ],
  "Golf Cart": [
    "Requires a decorated golf cart rental — confirm whether the resort or an outside vendor supplies it",
    "Confirm pathway widths and that carts are permitted across lawns and event areas",
  ],
  Walking: [
    "Requires a defined procession route with an escort or marshal",
    "Confirm the route is flat, shaded where possible, and separate from pool and guest traffic",
  ],
}

const baraatSoundRequirements: Record<SoundSetup, string[]> = {
  "Acoustic dhol only": [
    "No route power needed — still confirm the dhol player is an approved outside vendor with any fee that applies",
  ],
  "Dhol + small PA speakers": [
    "Requires portable power on the route — confirm the resort permits battery packs or generators",
  ],
  "Full DJ setup with stage sound": [
    "Requires a dedicated power circuit at the stage area, not shared with the kitchen",
    "Requires the outside-vendor AV fee and sound-limit permission confirmed in the proposal",
  ],
  "Live band with stage sound": [
    "Requires stage space, load-in time, power, and vendor meals if the band is on site over four hours",
  ],
}

const EVENTS: { key: EventKey; label: string; blurb: string; requirements: string[] }[] = [
  {
    key: "ganeshPuja",
    label: "Ganesh Puja",
    blurb: "Opening prayers, usually the first morning.",
    requirements: [
      "Requires a quiet indoor room or shaded garden — morning light matters for the muhurat",
      "Requires chowki seating space for 8–12 elders close to the mandap",
      "Confirm the priest's audio needs; a single microphone is usually enough",
    ],
  },
  {
    key: "mehndi",
    label: "Mehndi",
    blurb: "Afternoon henna celebration for the bride's side.",
    requirements: [
      "Requires a shaded outdoor area for the afternoon sun",
      "Requires a wash-up station nearby — turmeric and henna both stain",
      "Confirm the outside mehndi artist's fee, seating, and whether guests watch or participate",
    ],
  },
  {
    key: "sangeet",
    label: "Sangeet",
    blurb: "The big rehearsal-party night with performances.",
    requirements: [
      "Requires outdoor sound permit baseline",
      "Requires a covered evening venue with live-sound permission past 10 PM",
      "Requires stage and dance-floor dimensions confirmed against your choreography",
      "Requires a dedicated power circuit for the DJ, not shared with the kitchen",
    ],
  },
  {
    key: "baraat",
    label: "Baraat",
    blurb: "The groom's procession into the ceremony.",
    requirements: [], // populated from the two dropdowns below
  },
  {
    key: "vidai",
    label: "Vidai",
    blurb: "The emotional farewell after the ceremony.",
    requirements: [
      "Requires a private, quiet space — the farewell needs separation from the party",
      "Confirm early luggage pickup and porter support for the departing family",
    ],
  },
  {
    key: "reception",
    label: "Reception",
    blurb: "The grand final evening.",
    requirements: [
      "Requires a grand ballroom or lawn with stage and dance floor",
      "Confirm outside-vendor meal fees — photographers and DJs on site over four hours are charged",
      "Confirm any outside-food or cake-cutting fees in the banquet documentation",
    ],
  },
]

function buildChecklist(
  selected: Record<EventKey, boolean>,
  processionType: ProcessionType,
  soundSetup: SoundSetup,
) {
  return EVENTS.filter((event) => selected[event.key]).map((event) => ({
    label: event.label,
    items:
      event.key === "baraat"
        ? [...baraatProcessionRequirements[processionType], ...baraatSoundRequirements[soundSetup]]
        : event.requirements,
  }))
}

export function BaraatEventPlannerClient() {
  const [selected, setSelected] = useState<Record<EventKey, boolean>>({
    ganeshPuja: false,
    mehndi: false,
    sangeet: true,
    baraat: true,
    vidai: false,
    reception: true,
  })
  const [processionType, setProcessionType] = useState<ProcessionType>("Horse")
  const [soundSetup, setSoundSetup] = useState<SoundSetup>("Full DJ setup with stage sound")

  const checklist = useMemo(
    () => buildChecklist(selected, processionType, soundSetup),
    [selected, processionType, soundSetup],
  )
  const totalItems = checklist.reduce((sum, group) => sum + group.items.length, 0)

  function toggleEvent(key: EventKey) {
    setSelected((previous) => ({ ...previous, [key]: !previous[key] }))
  }

  function downloadChecklist() {
    const lines: string[] = [
      "CEREMONYVERSE — MULTI-DAY EVENT & BARAAT LOGISTICS CHECKLIST",
      `Procession type: ${processionType}`,
      `Sound setup: ${soundSetup}`,
      `Generated ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
      "",
      "Confirm every line in the resort's current written proposal — a verbal yes is not a confirmation.",
      "",
    ]
    for (const group of checklist) {
      lines.push(`${group.label.toUpperCase()}`)
      for (const item of group.items) lines.push(`  [ ] ${item}`)
      lines.push("")
    }
    lines.push("Planning guides: https://www.ceremonyverse.com")
    lines.push("Guest bookings: https://ceremonyversetravel.com")
    lines.push("CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc., Florida Seller of Travel No. FST ST15578.")

    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = "CeremonyVerse-Event-Venue-Checklist.txt"
    anchor.click()
    URL.revokeObjectURL(url)
    trackEvent("planning_tool_download", { planning_tool: "baraat_event_planner", file_type: "txt" })
  }

  const selectClass =
    "mt-2 block min-h-12 w-full rounded-lg border border-[#b9ad9c] bg-white px-3 py-2.5 text-base text-[#1f1f1f] outline-none focus:border-[#7a6841]"

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-5">
        {/* Selections */}
        <div className="rounded-2xl border border-[#e6dfd5] bg-white p-7 lg:col-span-2">
          <h2 className="font-serif text-2xl font-semibold">Which events are you hosting?</h2>
          <div className="mt-5 space-y-3">
            {EVENTS.map((event) => (
              <label
                key={event.key}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                  selected[event.key] ? "border-[#7a6841] bg-[#f8f6f2]" : "border-[#e6dfd5] bg-white"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected[event.key]}
                  onChange={() => toggleEvent(event.key)}
                  className="mt-1 size-4 shrink-0 accent-[#7a6841]"
                />
                <span>
                  <span className="block font-semibold text-[#1f1f1f]">{event.label}</span>
                  <span className="mt-0.5 block text-sm leading-6 text-[#5e4a40]">{event.blurb}</span>
                </span>
              </label>
            ))}
          </div>

          {selected.baraat ? (
            <div className="mt-5 rounded-xl border border-[#7a6841] bg-[#f8f6f2] p-5">
              <p className="font-semibold text-[#7a6841]">Baraat logistics</p>
              <label className="mt-3 block text-sm font-semibold text-[#1f1f1f]">
                Procession Type
                <select
                  value={processionType}
                  onChange={(event) => setProcessionType(event.target.value as ProcessionType)}
                  className={selectClass}
                >
                  {PROCESSION_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block text-sm font-semibold text-[#1f1f1f]">
                Estimated Sound Setup Needs
                <select
                  value={soundSetup}
                  onChange={(event) => setSoundSetup(event.target.value as SoundSetup)}
                  className={selectClass}
                >
                  {SOUND_SETUPS.map((setup) => (
                    <option key={setup} value={setup}>{setup}</option>
                  ))}
                </select>
              </label>
            </div>
          ) : null}
        </div>

        {/* Dynamic checklist output */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border-2 border-[#7a6841] bg-[#f8f6f2] p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-serif text-2xl font-semibold text-[#7a6841]">Your resort venue checklist</h2>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5e4a40]">
                {totalItems} requirement{totalItems === 1 ? "" : "s"} across {checklist.length} event{checklist.length === 1 ? "" : "s"}
              </p>
            </div>

            {checklist.length === 0 ? (
              <p className="mt-5 rounded-xl border border-[#e6dfd5] bg-white p-4 text-sm leading-6 text-[#5e4a40]">
                Tick the events you&apos;re hosting on the left and every resort requirement will build itself here.
              </p>
            ) : (
              <div className="mt-5 space-y-4">
                {checklist.map((group) => (
                  <div key={group.label} className="rounded-xl border border-[#e6dfd5] bg-white p-5">
                    <p className="font-serif text-lg font-semibold text-[#1f1f1f]">{group.label}</p>
                    <ul className="mt-3 space-y-2.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-[#4d403a]">
                          <span aria-hidden="true" className="text-[#7a6841]">□</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <p className="mt-4 text-xs leading-5 text-[#5e4a40]">
              Every line above came from a real moment at a family wedding — the horse that wasn&apos;t trained for a
              150-person baraat, the Haldi shade that cost extra, the vendor meals nobody quoted. Confirm each in the
              written proposal, not in a sales meeting.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={downloadChecklist}
                disabled={checklist.length === 0}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841] transition hover:bg-[#7a6841] hover:text-white disabled:opacity-50"
              >
                Download My Checklist (.txt)
              </button>
              <a
                href="https://ceremonyversetravel.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("calculator_cta_click", { calculator_name: "baraat_event_planner", next_step: "travel_portal" })}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[#7a6841] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#5e4a40]"
              >
                Search Resorts with Open Outdoor Pathways
              </a>
            </div>
            <p className="mt-3 text-center text-xs leading-5 text-[#5e4a40]">
              CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
