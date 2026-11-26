"use client"

import { useMemo, useState } from "react"
import { useLocalStorageState } from "@/hooks/use-local-storage-state"

type Row = { id: string; category: string; item: string; estimated: string; actual: string }
const uid = () => Math.random().toString(36).slice(2, 10)
const money = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
const DEFAULTS: Row[] = [
  { id: uid(), category: "Venue & Catering", item: "Venue / resort package & catering", estimated: "", actual: "" },
  { id: uid(), category: "Mandap & Decor", item: "Mandap, florals, decor, and rentals", estimated: "", actual: "" },
  { id: uid(), category: "Outfits & Jewelry", item: "Wedding, Garba/Sangeet, and reception outfits/jewelry", estimated: "", actual: "" },
  { id: uid(), category: "Photo & Video", item: "Photography, videography, and content coverage", estimated: "", actual: "" },
  { id: uid(), category: "Entertainment", item: "DJ, dhol, Garba/Sangeet entertainment", estimated: "", actual: "" },
  { id: uid(), category: "Ceremony & Officiant", item: "Pandit/officiant, ceremony items, muhurat setup", estimated: "", actual: "" },
  { id: uid(), category: "Beauty & Mehndi", item: "Hair, makeup, mehndi artists", estimated: "", actual: "" },
  { id: uid(), category: "Guest Logistics", item: "Travel, transfers, welcome bags, room block extras", estimated: "", actual: "" },
]

export function BudgetTrackerClient() {
  const [totalBudget, setTotalBudget] = useLocalStorageState<string>("cv-budget-total-v1", "")
  const [rows, setRows, hydrated] = useLocalStorageState<Row[]>("cv-budget-rows-v1", DEFAULTS)
  const [draft, setDraft] = useState<Row>({ id: "", category: "", item: "", estimated: "", actual: "" })

  const totals = useMemo(() => {
    const estimated = rows.reduce((n, r) => n + (Number(r.estimated) || 0), 0)
    const actual = rows.reduce((n, r) => n + (Number(r.actual) || 0), 0)
    const budget = Number(totalBudget) || 0
    return { estimated, actual, budget, remaining: budget - (actual || estimated) }
  }, [rows, totalBudget])

  const add = () => {
    if (!draft.item.trim()) return
    setRows(rs => [...rs, { ...draft, id: uid(), category: draft.category.trim() || "Other", item: draft.item.trim() }])
    setDraft({ id: "", category: "", item: "", estimated: "", actual: "" })
  }
  const update = (id: string, patch: Partial<Row>) => setRows(rs => rs.map(r => r.id === id ? { ...r, ...patch } : r))
  const remove = (id: string) => setRows(rs => rs.filter(r => r.id !== id))

  return (
    <div className="mt-10 space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[#e6dfd5] bg-white p-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7a6841]">Total budget</p><input className="mt-2 w-full rounded-xl border border-[#d9cfbf] px-3 py-2 text-lg font-semibold" type="number" min="0" placeholder="$0" value={totalBudget} onChange={e => setTotalBudget(e.target.value)} /></div>
        {[[ "Estimated", totals.estimated], ["Actual", totals.actual], ["Remaining", totals.remaining]].map(([l, v]) => (
          <div key={String(l)} className="rounded-2xl border border-[#e6dfd5] bg-white p-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7a6841]">{l}</p><p className={`mt-2 font-serif text-3xl font-semibold ${l==="Remaining" && Number(v)<0 ? "text-[#9a2a2a]" : ""}`}>{money(Number(v))}</p></div>
        ))}
      </div>

      <section className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold">Add line item</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Category (e.g., Garba Entertainment)" value={draft.category} onChange={e => setDraft({ ...draft, category: e.target.value })} />
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Item *" value={draft.item} onChange={e => setDraft({ ...draft, item: e.target.value })} />
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Estimated $" type="number" min="0" value={draft.estimated} onChange={e => setDraft({ ...draft, estimated: e.target.value })} />
          <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Actual $" type="number" min="0" value={draft.actual} onChange={e => setDraft({ ...draft, actual: e.target.value })} />
        </div>
        <button type="button" onClick={add} className="mt-3 rounded-full bg-[#7a6841] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6a5938]">Add item</button>
      </section>

      <section className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold">Budget items</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-[720px] w-full text-sm">
            <thead><tr className="border-b border-[#e6dfd5] text-left text-[#5e4a40]"><th className="py-3 pr-3">Category</th><th className="py-3 pr-3">Item</th><th className="py-3 pr-3">Estimated</th><th className="py-3 pr-3">Actual</th><th className="py-3 pr-3">Difference</th><th className="py-3"></th></tr></thead>
            <tbody>
              {rows.map(r => {
                const diff = (Number(r.actual) || 0) - (Number(r.estimated) || 0)
                return (
                  <tr key={r.id} className="border-b border-[#f0ebe3] align-top">
                    <td className="py-3 pr-3"><input className="w-full min-w-[120px] rounded-lg border border-[#e6dfd5] px-2 py-1" value={r.category} onChange={e => update(r.id, { category: e.target.value })} /></td>
                    <td className="py-3 pr-3"><input className="w-full min-w-[160px] rounded-lg border border-[#e6dfd5] px-2 py-1" value={r.item} onChange={e => update(r.id, { item: e.target.value })} /></td>
                    <td className="py-3 pr-3"><input className="w-28 rounded-lg border border-[#e6dfd5] px-2 py-1" type="number" min="0" value={r.estimated} onChange={e => update(r.id, { estimated: e.target.value })} /></td>
                    <td className="py-3 pr-3"><input className="w-28 rounded-lg border border-[#e6dfd5] px-2 py-1" type="number" min="0" value={r.actual} onChange={e => update(r.id, { actual: e.target.value })} /></td>
                    <td className={`py-3 pr-3 font-medium ${diff > 0 ? "text-[#9a2a2a]" : diff < 0 ? "text-[#2f6b3a]" : "text-[#5e4a40]"}`}>{diff === 0 ? "—" : `${diff > 0 ? "+" : ""}${money(diff)}`}</td>
                    <td className="py-3"><button type="button" onClick={() => remove(r.id)} className="text-xs font-semibold text-[#8a7f74] hover:text-[#7a6841]">Remove</button></td>
                  </tr>
                )
              })}
              {!rows.length && <tr><td colSpan={6} className="py-8 text-center text-[#6b6058]">{hydrated ? "No budget items yet." : "Loading..."}</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
      <p className="text-xs leading-5 text-[#6b6058]">Saved locally in your browser. Designed for Gujarati and South Asian wedding budgets, including multi-event costs like Garba, Sangeet, mehndi, and ceremony essentials. This is a planning tracker, not a quote.</p>
    </div>
  )
}
