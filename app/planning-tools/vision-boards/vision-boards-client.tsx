"use client"

import { useState } from "react"
import { useLocalStorageState } from "@/hooks/use-local-storage-state"

type Item = { id: string; url: string; note: string }
type Board = { id: string; name: string; items: Item[] }
const uid = () => Math.random().toString(36).slice(2, 10)
const DEFAULTS: Board[] = [
  { id: uid(), name: "Ceremony Decor", items: [] },
  { id: uid(), name: "Outfits & Jewelry", items: [] },
]

export function VisionBoardsClient() {
  const [boards, setBoards, hydrated] = useLocalStorageState<Board[]>("cv-vision-boards-v1", DEFAULTS)
  const [newBoard, setNewBoard] = useState("")
  const [drafts, setDrafts] = useState<Record<string, { url: string; note: string }>>({})

  const addBoard = () => { const name = newBoard.trim(); if (!name) return; setBoards(bs => [...bs, { id: uid(), name, items: [] }]); setNewBoard("") }
  const removeBoard = (id: string) => setBoards(bs => bs.filter(b => b.id !== id))
  const addItem = (bid: string) => {
    const d = drafts[bid] || { url: "", note: "" }
    if (!d.url.trim() && !d.note.trim()) return
    setBoards(bs => bs.map(b => b.id === bid ? { ...b, items: [{ id: uid(), url: d.url.trim(), note: d.note.trim() }, ...b.items] } : b))
    setDrafts(ds => ({ ...ds, [bid]: { url: "", note: "" } }))
  }
  const removeItem = (bid: string, iid: string) => setBoards(bs => bs.map(b => b.id === bid ? { ...b, items: b.items.filter(i => i.id !== iid) } : b))

  return (
    <div className="mt-10 space-y-6">
      <section className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold">Create a board</h2>
        <div className="mt-4 flex gap-2">
          <input className="w-full rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Board name (e.g., Reception Florals)" value={newBoard} onChange={e => setNewBoard(e.target.value)} onKeyDown={e => e.key === "Enter" && addBoard()} />
          <button type="button" onClick={addBoard} className="rounded-xl bg-[#7a6841] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#6a5938]">Add board</button>
        </div>
      </section>

      {boards.map(board => {
        const d = drafts[board.id] || { url: "", note: "" }
        return (
          <section key={board.id} className="rounded-2xl border border-[#e6dfd5] bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-serif text-2xl font-semibold">{board.name}</h2>
              <button type="button" onClick={() => removeBoard(board.id)} className="text-xs font-semibold text-[#8a7f74] hover:text-[#7a6841]">Remove board</button>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Image or inspiration URL" value={d.url} onChange={e => setDrafts(ds => ({ ...ds, [board.id]: { ...d, url: e.target.value } }))} />
              <input className="rounded-xl border border-[#d9cfbf] px-4 py-2.5 text-sm" placeholder="Note (what you love about it)" value={d.note} onChange={e => setDrafts(ds => ({ ...ds, [board.id]: { ...d, note: e.target.value } }))} />
              <button type="button" onClick={() => addItem(board.id)} className="rounded-xl bg-[#7a6841] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#6a5938]">Add</button>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {board.items.map(item => (
                <article key={item.id} className="overflow-hidden rounded-xl border border-[#efe7dc] bg-[#fffdfa]">
                  {item.url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.url} alt={item.note || "Inspiration image"} className="h-44 w-full object-cover bg-[#f0ebe3]" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none" }} />
                  ) : <div className="h-44 w-full bg-[#f0ebe3]" />}
                  <div className="p-4">
                    {item.note && <p className="text-sm leading-6 text-[#4d403a]">{item.note}</p>}
                    {item.url && <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-2 block truncate text-xs text-[#7a6841] underline">{item.url}</a>}
                    <button type="button" onClick={() => removeItem(board.id, item.id)} className="mt-3 text-xs font-semibold text-[#8a7f74] hover:text-[#7a6841]">Remove</button>
                  </div>
                </article>
              ))}
              {!board.items.length && <p className="text-sm text-[#6b6058]">{hydrated ? "No inspiration saved yet." : "Loading..."}</p>}
            </div>
          </section>
        )
      })}
      <p className="text-xs leading-5 text-[#6b6058]">Saved locally in your browser. Image links are stored as URLs; they are not uploaded to CeremonyVerse.</p>
    </div>
  )
}
