"use client"

import { useMemo, useState } from "react"
import { useLocalStorageState } from "@/hooks/use-local-storage-state"

type Guest = { id: string; name: string; email: string; phone: string; side: "Bride" | "Groom" | "Both" | "Other"; rsvp: "Pending" | "Attending" | "Declined"; party: string; notes: string }
const uid = () => Math.random().toString(36).slice(2, 10)
const EMPTY: Guest = { id: "", name: "", email: "", phone: "", side: "Both", rsvp: "Pending", party: "1", notes: "" }

export function GuestListClient() {
  const [guests, setGuests, hydrated] = useLocalStorageState<Guest[]>("cv-guest-list-v1", [])
  const [draft, setDraft] = useState<Guest>({ ...EMPTY, id: uid() })
  const [filter, setFilter] = useState("All")

  const stats = useMemo(() => {
    const attending = guests.filter(g => g.rsvp === "Attending")
    const partyCount = attending.reduce((n, g) => n + (Number(g.party) || 0), 0)
    return { total: guests.length, attending: attending.length, declined: guests.filter(g => g.rsvp === "Declined").length, pending: guests.filter(g => g.rsvp === "Pending").length, partyCount }
  }, [guests])

  const filtered = guests.filter(g => filter === "All" || g.rsvp === filter)
  const add = () => {
    if (!draft.name.trim()) return
    setGuests(gs => [{ ...draft, id: uid(), name: draft.name.trim() }, ...gs])
    setDraft({ ...EMPTY, id: uid() })
  }
  const update = (id: string, patch: Partial<Guest>) => setGuests(gs => gs.map(g => g.id === id ? { ...g, ...patch } : g))
  const remove = (id: string) => setGuests(gs => gs.filter(g => g.id !== id))

  return (
    <div className="mt-10 space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[["Total guests", stats.total], ["Attending", stats.attending], ["Pending", stats.pending], ["Attending party size", stats.partyCount]].map(([l, v]) => (
          <div key={String(l)} className="rounded-2xl border border-[#e6dfd5] bg-white p-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7a6841]">{l}</p><p className="mt-2 font-serif text-3xl font-semibold">{v}</p></div>
        ))}
      </div>

      <section className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold">Add guest</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Guest name *" value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} />
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Email" value={draft.email} onChange={e => setDraft({ ...draft, email: e.target.value })} />
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Phone" value={draft.phone} onChange={e => setDraft({ ...draft, phone: e.target.value })} />
          <select className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" value={draft.side} onChange={e => setDraft({ ...draft, side: e.target.value as Guest["side"] })}>{["Bride","Groom","Both","Other"].map(s => <option key={s}>{s}</option>)}</select>
          <select className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" value={draft.rsvp} onChange={e => setDraft({ ...draft, rsvp: e.target.value as Guest["rsvp"] })}>{["Pending","Attending","Declined"].map(s => <option key={s}>{s}</option>)}</select>
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Party size" type="number" min="1" value={draft.party} onChange={e => setDraft({ ...draft, party: e.target.value })} />
        </div>
        <textarea className="mt-3 w-full rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Notes (dietary needs, room, events...)" value={draft.notes} onChange={e => setDraft({ ...draft, notes: e.target.value })} />
        <button type="button" onClick={add} className="mt-3 rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6a5938]">Add guest</button>
      </section>

      <section className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-serif text-2xl font-semibold">Your guest list</h2>
          <div className="flex gap-2 flex-wrap">
            {["All","Pending","Attending","Declined"].map(f => <button key={f} type="button" onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-xs font-semibold ${filter===f?"bg-[#7a6841] text-white":"border border-[#d9cfbf] text-[#5e4a40]"}`}>{f}</button>)}
          </div>
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-[760px] w-full text-sm">
            <thead><tr className="border-b border-[#e6dfd5] text-left text-[#5e4a40]"><th className="py-3 pr-3">Name</th><th className="py-3 pr-3">Contact</th><th className="py-3 pr-3">Side</th><th className="py-3 pr-3">RSVP</th><th className="py-3 pr-3">Party</th><th className="py-3 pr-3">Notes</th><th className="py-3"></th></tr></thead>
            <tbody>
              {filtered.map(g => (
                <tr key={g.id} className="border-b border-[#f0ebe3] align-top">
                  <td className="py-3 pr-3 font-medium">{g.name}</td>
                  <td className="py-3 pr-3 text-[#5e4a40]"><div>{g.email || "—"}</div><div>{g.phone || ""}</div></td>
                  <td className="py-3 pr-3"><select className="rounded-lg border border-[#e6dfd5] px-2 py-1" value={g.side} onChange={e => update(g.id, { side: e.target.value as Guest["side"] })}>{["Bride","Groom","Both","Other"].map(s => <option key={s}>{s}</option>)}</select></td>
                  <td className="py-3 pr-3"><select className="rounded-lg border border-[#e6dfd5] px-2 py-1" value={g.rsvp} onChange={e => update(g.id, { rsvp: e.target.value as Guest["rsvp"] })}>{["Pending","Attending","Declined"].map(s => <option key={s}>{s}</option>)}</select></td>
                  <td className="py-3 pr-3"><input className="w-16 rounded-lg border border-[#e6dfd5] px-2 py-1" type="number" min="1" value={g.party} onChange={e => update(g.id, { party: e.target.value })} /></td>
                  <td className="py-3 pr-3"><input className="w-full min-w-[160px] rounded-lg border border-[#e6dfd5] px-2 py-1" value={g.notes} onChange={e => update(g.id, { notes: e.target.value })} /></td>
                  <td className="py-3"><button type="button" onClick={() => remove(g.id)} className="text-xs font-semibold text-[#8a7f74] hover:text-[#7a6841]">Remove</button></td>
                </tr>
              ))}
              {!filtered.length && <tr><td colSpan={7} className="py-8 text-center text-[#6b6058]">{hydrated ? "No guests yet. Add your first guest above." : "Loading..."}</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
      <p className="text-xs leading-5 text-[#6b6058]">Saved locally in your browser. Need shared guest tracking or RSVP collection? <a href="/schedule/?from=guest-list" className="text-[#7a6841] underline">Talk to CeremonyVerse</a>.</p>
    </div>
  )
}
