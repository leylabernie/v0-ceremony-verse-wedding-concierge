'use client'

import { useId } from 'react'

export function AuditNumberInput({ label, value, max, step = 1, prefix, onChange }: {
  label: string; value: number; max: number; step?: number; prefix?: string; onChange: (value: number) => void
}) {
  const id = useId()
  const buttonClass = 'h-11 w-11 shrink-0 rounded-full border border-[#EFE7DC] bg-white text-xl text-[#6B2A35] hover:bg-[#F7F2EB] focus-visible:ring-2 focus-visible:ring-[#6B2A35] disabled:opacity-40'
  return <div>
    <label htmlFor={id} className="block text-sm font-medium text-[#51443D]">{label}</label>
    <div className="mt-3 flex items-center gap-2">
      <button type="button" aria-label={`Decrease ${label}`} disabled={value <= 0} onClick={() => onChange(Math.max(0, value - step))} className={buttonClass}>−</button>
      <div className="flex min-w-0 flex-1 items-center rounded-xl border border-[#EFE7DC] bg-[#FDFBF7] px-2 focus-within:ring-2 focus-within:ring-[#6B2A35]/30">
        {prefix && <span aria-hidden="true" className="text-stone-500">{prefix}</span>}
        <input id={id} type="number" min={0} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} className="w-full min-w-0 bg-transparent px-1 py-3 text-center text-xl font-semibold tabular-nums text-[#2C221E] outline-none" />
      </div>
      <button type="button" aria-label={`Increase ${label}`} disabled={value >= max} onClick={() => onChange(Math.min(max, value + step))} className={buttonClass}>+</button>
    </div>
  </div>
}
