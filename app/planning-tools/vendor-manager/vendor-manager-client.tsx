"use client"

import { useState } from "react"
import { useLocalStorageState } from "@/hooks/use-local-storage-state"

type Vendor = { id: string; category: string; name: string; contact: string; email: string; phone: string; cost: string; status: "Researching" | "Contacted" | "Booked" | "Paid" | "Declined"; notes: string }
const uid = () => Math.random().toString(36).slice(2, 10)
const EMPTY: Vendor = { id: "", category: "", name: "", contact: "", email: "", phone: "", cost: "", status: "Researching", notes: "" }

export function VendorManagerClient() {
  const [vendors, setVendors, hydrated] = useLocalStorageState<Vendor[]>("cv-vendors-v1", [])
  const [draft, setDraft] = useState<Vendor>({ ...EMPTY, id: uid() })
  const add = () => { if (!draft.name.trim()) return; setVendors(vs => [{ ...draft, id: uid(), name: draft.name.trim(), category: draft.category.trim() || "Other" }, ...vs]); setDraft({ ...EMPTY, id: uid() }) }
  const update = (id: string, patch: Partial<Vendor>) => setVendors(vs => vs.map(v => v.id === id ? { ...v, ...patch } : v))
  const remove = (id: string) => setVendors(vs => vs.filter(v => v.id !== id))

  return (
    <div className="mt-10 space-y-6">
      <section className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold">Add vendor</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Category (Photographer, Venue...)" value={draft.category} onChange={e => setDraft({ ...draft, category: e.target.value })} />
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Vendor name *" value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} />
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Contact person" value={draft.contact} onChange={e => setDraft({ ...draft, contact: e.target.value })} />
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Email" value={draft.email} onChange={e => setDraft({ ...draft, email: e.target.value })} />
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Phone" value={draft.phone} onChange={e => setDraft({ ...draft, phone: e.target.value })} />
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Cost / quote" type="number" min="0" value={draft.cost} onChange={e => setDraft({ ...draft, cost: e.target.value })} />
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <select className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" value={draft.status} onChange={e => setDraft({ ...draft, status: e.target.value as Vendor["status"] })}>{["Researching","Contacted","Booked","Paid","Declined"].map(s => <option key={s}>{s}</option>)}</select>
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Notes" value={draft.notes} onChange={e => setDraft({ ...draft, notes: e.target.value })} />
        </div>
        <button type="button" onClick={add} className="mt-3 rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6a5938]">Add vendor</button>
      </section>

      <section className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold">Your vendors</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-[860px] w-full text-sm">
            <thead><tr className="border-b border-[#e6dfd5] text-left text-[#5e4a40]"><th className="py-3 pr-3">Category</th><th className="py-3 pr-3">Vendor</th><th className="py-3 pr-3">Contact</th><th className="py-3 pr-3">Cost</th><th className="py-3 pr-3">Status</th><th className="py-3 pr-3">Notes</th><th className="py-3"></th></tr></thead>
            <tbody>
              {vendors.map(v => (
                <tr key={v.id} className="border-b border-[#f0ebe3] align-top">
                  <td className="py-3 pr-3 font-medium">{v.category}</td>
                  <td className="py-3 pr-3"><div className="font-medium">{v.name}</div><div className="text-[#6b6058]">{v.contact}</div></td>
                  <td className="py-3 pr-3 text-[#5e4a40]"><div>{v.email || "—"}</div><div>{v.phone || ""}</div></td>
                  <td className="py-3 pr-3"><input className="w-24 rounded-lg border border-[#e6dfd5] px-2 py-1" type="number" min="0" value={v.cost} onChange={e => update(v.id, { cost: e.target.value })} /></td>
                  <td className="py-3 pr-3"><select className="rounded-lg border border-[#e6dfd5] px-2 py-1" value={v.status} onChange={e => update(v.id, { status: e.target.value as Vendor["status"] })}>{["Researching","Contacted","Booked","Paid","Declined"].map(s => <option key={s}>{s}</option>)}</select></td>
                  <td className="py-3 pr-3"><input className="w-full min-w-[140px] rounded-lg border border-[#e6dfd5] px-2 py-1" value={v.notes} onChange={e => update(v.id, { notes: e.target.value })} /></td>
                  <td className="py-3"><button type="button" onClick={() => remove(v.id)} className="text-xs font-semibold text-[#8a7f74] hover:text-[#7a6841]">Remove</button></td>
                </tr>
              ))}
              {!vendors.length && <tr><td colSpan={7} className="py-8 text-center text-[#6b6058]">{hydrated ? "No vendors yet. Add your first vendor above." : "Loading..."}</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
      <p className="text-xs leading-5 text-[#6b6058]">Saved locally in your browser. Need help evaluating or coordinating vendors? <a href="/schedule/?from=vendor-manager" className="text-[#7a6841] underline">Book a consultation</a>.</p>
    </div>
  )
}
