"use client"

import { useMemo, useState } from "react"
import { useLocalStorageState } from "@/hooks/use-local-storage-state"

type Item = { id: string; text: string; done: boolean }
type Group = { id: string; title: string; items: Item[] }

const uid = () => Math.random().toString(36).slice(2, 10)

const DEFAULTS: Group[] = [
  { id: "12m", title: "12+ months before", items: [
    { id: uid(), text: "Set your total budget and confirm family contributions (both sides)", done: false },
    { id: uid(), text: "Draft guest list estimate, households, and key events (Garba/Sangeet, Wedding, Reception)", done: false },
    { id: uid(), text: "Choose destination/venue direction and confirm it can host Gujarati/South Asian ceremonies", done: false },
    { id: uid(), text: "Book a planning consultation or planner familiar with multicultural weddings", done: false },
  ]},
  { id: "9m", title: "9–12 months before", items: [
    { id: uid(), text: "Confirm venue/resort, event dates, and ceremony spaces (mandap, Garba/Sangeet, reception)", done: false },
    { id: uid(), text: "Book priority vendors: photo/video, mehndi artist, DJ/entertainment, makeup, pandit/officiant", done: false },
    { id: uid(), text: "Start outfit and jewelry planning for each event (Pithi/Haldi, Garba, Wedding, Reception)", done: false },
    { id: uid(), text: "Set up room block, guest travel info, and airport transfer plan", done: false },
  ]},
  { id: "6m", title: "6–9 months before", items: [
    { id: uid(), text: "Send save-the-dates with travel details and event overview for guests", done: false },
    { id: uid(), text: "Finalize ceremony requirements, muhurat timing, and mandap/ritual items", done: false },
    { id: uid(), text: "Plan menu tastings, Jain/vegetarian/vegan options, and dietary requirements", done: false },
    { id: uid(), text: "Review contracts, deposits, outside-vendor fees, and payment schedule", done: false },
  ]},
  { id: "3m", title: "3–6 months before", items: [
    { id: uid(), text: "Finalize guest list, RSVPs, meal preferences, and event-by-event attendance", done: false },
    { id: uid(), text: "Confirm decor, mandap, Garba/Sangeet production, rentals, and baraat logistics", done: false },
    { id: uid(), text: "Arrange guest transportation, welcome bags, and event itineraries", done: false },
    { id: uid(), text: "Schedule outfit fittings, alterations, and jewelry/accessory checks", done: false },
  ]},
  { id: "1m", title: "Last month", items: [
    { id: uid(), text: "Confirm final headcounts, vendor timelines, and ceremony item checklist", done: false },
    { id: uid(), text: "Prepare favors, welcome bags, emergency/day-of kits, and ritual essentials", done: false },
    { id: uid(), text: "Share final itinerary with family, wedding party, vendors, and key elders", done: false },
    { id: uid(), text: "Pack travel documents, outfits by event, jewelry, and backup essentials", done: false },
  ]},
]

export function WeddingChecklistClient() {
  const [groups, setGroups, hydrated] = useLocalStorageState<Group[]>("cv-checklist-v1", DEFAULTS)
  const [drafts, setDrafts] = useState<Record<string, string>>({})

  const stats = useMemo(() => {
    const items = groups.flatMap(g => g.items)
    const done = items.filter(i => i.done).length
    return { done, total: items.length, pct: items.length ? Math.round((done / items.length) * 100) : 0 }
  }, [groups])

  const toggle = (gid: string, id: string) => setGroups(gs => gs.map(g => g.id === gid ? { ...g, items: g.items.map(i => i.id === id ? { ...i, done: !i.done } : i) } : g))
  const remove = (gid: string, id: string) => setGroups(gs => gs.map(g => g.id === gid ? { ...g, items: g.items.filter(i => i.id !== id) } : g))
  const add = (gid: string) => {
    const text = (drafts[gid] || "").trim()
    if (!text) return
    setGroups(gs => gs.map(g => g.id === gid ? { ...g, items: [...g.items, { id: uid(), text, done: false }] } : g))
    setDrafts(d => ({ ...d, [gid]: "" }))
  }
  const reset = () => { if (confirm("Reset checklist to defaults? Your custom items and progress will be cleared.")) setGroups(DEFAULTS) }

  return (
    <div className="mt-10 space-y-6">
      <div className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#7a6841]">{hydrated ? `${stats.done} of ${stats.total} tasks complete` : "Loading..."}</p>
            <div className="mt-2 h-3 w-full max-w-md overflow-hidden rounded-full bg-[#efe7dc]">
              <div className="h-full rounded-full bg-[#7a6841] transition-all" style={{ width: `${stats.pct}%` }} />
            </div>
          </div>
          <button type="button" onClick={reset} className="self-start rounded-full border border-[#d9cfbf] px-4 py-2 text-sm font-semibold text-[#5e4a40] hover:bg-[#faf8f5]">Reset checklist</button>
        </div>
      </div>

      {groups.map(group => (
        <section key={group.id} className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-semibold sm:text-3xl">{group.title}</h2>
          <ul className="mt-5 space-y-3">
            {group.items.map(item => (
              <li key={item.id} className="flex items-start gap-3 rounded-xl border border-[#efe7dc] px-4 py-3">
                <input type="checkbox" checked={item.done} onChange={() => toggle(group.id, item.id)} className="mt-1 size-5 shrink-0 accent-[#7a6841]" />
                <span className={`flex-1 text-sm leading-6 sm:text-base ${item.done ? "text-[#8a7f74] line-through" : "text-[#2f2f2f]"}`}>{item.text}</span>
                <button type="button" onClick={() => remove(group.id, item.id)} className="text-xs font-semibold text-[#8a7f74] hover:text-[#7a6841]">Remove</button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <input value={drafts[group.id] || ""} onChange={e => setDrafts(d => ({ ...d, [group.id]: e.target.value }))} onKeyDown={e => e.key === "Enter" && add(group.id)} placeholder="Add a custom task..." className="w-full rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm outline-none focus:border-[#7a6841]" />
            <button type="button" onClick={() => add(group.id)} className="rounded-xl bg-[#7a6841] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#6a5938]">Add</button>
          </div>
        </section>
      ))}
      <p className="text-xs leading-5 text-[#6b6058]">Saved locally in your browser. Designed with Gujarati and South Asian wedding timelines in mind, but customizable for any celebration.</p>
    </div>
  )
}
