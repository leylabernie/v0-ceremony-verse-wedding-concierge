'use client'

import { useRef, useState, type ChangeEvent, type DragEvent } from 'react'

export function ProposalDropzone() {
  const input = useRef<HTMLInputElement>(null)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)
  function select(files: FileList | null) {
    setError(''); setName('')
    const file = files?.[0]
    if (!file) return
    if (files!.length !== 1 || !/\.(pdf|png|jpe?g)$/i.test(file.name) || !['application/pdf', 'image/png', 'image/jpeg'].includes(file.type)) {
      setError('Choose one PDF, PNG or JPG file.'); return
    }
    if (!file.size || file.size > 10 * 1024 * 1024) { setError('Choose a non-empty file up to 10 MB.'); return }
    setName(file.name)
  }
  function drop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault(); setDragging(false); select(event.dataTransfer.files)
  }
  return <section aria-labelledby="proposal-heading" className="rounded-2xl border border-[#ded5c8] bg-white p-6 sm:p-8">
    <h2 id="proposal-heading" className="font-serif text-2xl">Have a Resort Proposal PDF or Quote Screenshot?</h2>
    <div onDragOver={e => { e.preventDefault(); setDragging(true) }} onDragLeave={() => setDragging(false)} onDrop={drop} className={`mt-5 rounded-xl border-2 border-dashed p-7 text-center ${dragging ? 'border-[#7a6841] bg-amber-50' : 'border-[#d8cebf] bg-[#faf8f5]'}`}>
      <p aria-hidden="true" className="mb-3 text-3xl">📄</p>
      <button type="button" onClick={() => input.current?.click()} className="rounded-lg font-semibold underline underline-offset-4 focus-visible:outline-2">Choose a proposal or drop it here</button>
      <input ref={input} type="file" accept=".pdf,.png,.jpg,.jpeg" className="sr-only" aria-label="Choose resort proposal" onChange={(e: ChangeEvent<HTMLInputElement>) => select(e.target.files)} />
      <p className="mt-2 text-sm text-stone-600">PDF, PNG or JPG · One file, up to 10 MB</p>
      <p className="mt-3 text-sm text-stone-600">Local selection only. Automatic parsing is not available yet. Nothing is uploaded or sent to Mini; enter your quote figures below.</p>
      {name && <p role="status" className="mt-3 break-all">Selected: {name} <button type="button" className="ml-2 underline" onClick={() => { setName(''); if (input.current) input.current.value = '' }}>Remove</button></p>}
      {error && <p role="alert" className="mt-3 text-red-800">{error}</p>}
    </div>
    <a href="#quick-audit-inputs" className="mt-4 inline-block text-sm font-semibold underline">Or check your numbers manually below in 10 seconds →</a>
  </section>
}
