'use client'

import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ProposalDropzone } from './ProposalDropzone'
import { RiskGauge } from './RiskGauge'
import { calculateResortAudit, auditMoney, type ResortAuditInput } from '@/lib/resort-audit'
import { captureEvent } from '@/lib/analytics'
import { getAttributionParams } from '@/lib/attribution'
import { useCalculatorThreshold } from '@/hooks/use-calculator-threshold'

const initial: ResortAuditInput = { guests: 250, rooms: 50, nights: 3, rate: 400, guarantee: 80, pickup: 60, catering: 0, mandap: 0 }
export function ResortQuickAudit() {
  const [values, setValues] = useState(initial)
  const [edited, setEdited] = useState(false)
  const audit = calculateResortAudit(values)
  useCalculatorThreshold('resort', 'quick_audit_attrition', edited && audit.level === 'high', audit.exposure)
  function update(key: keyof ResortAuditInput, value: string, max: number) {
    const number = Number(value)
    setEdited(true)
    setValues(previous => ({ ...previous, [key]: Number.isFinite(number) ? Math.min(max, Math.max(0, number)) : 0 }))
  }
  function numberInput(key: keyof ResortAuditInput, label: string, max: number, prefix = '') {
    return <label className="block text-sm font-medium">{label}<div className="mt-3 flex items-center gap-2">{prefix && <span aria-hidden="true">{prefix}</span>}<input type="number" min="0" max={max} step={key === 'rate' || key === 'catering' || key === 'mandap' ? '0.01' : '1'} value={values[key]} onChange={event => update(key, event.target.value, max)} className="w-full min-w-0 rounded-lg border border-stone-300 bg-white p-3 text-xl text-stone-900 focus-visible:outline-2 focus-visible:outline-[#7a6841]" /></div></label>
  }
  function trackBooking() { captureEvent({ name: 'calc_cta_clicked', properties: { calculator: 'resort', cta_target: '30min_consult', source_rule: audit.level === 'high' ? 'quick_audit_high_risk' : 'quick_audit_review' } }) }
  const whatsapp = `https://wa.me/12153419990?text=${encodeURIComponent(`Hi Mini, I would like a resort proposal review. My scenario estimates ${auditMoney(audit.exposure)} in attrition exposure for ${values.rooms} rooms over ${values.nights} nights. May I send my proposal and request a free 15-minute audit?`)}`
  return <div className="mx-auto max-w-5xl space-y-6 px-6 py-10">
    <ProposalDropzone />
    <section id="quick-audit-inputs" aria-labelledby="inputs-heading" className="scroll-mt-24">
      <h2 id="inputs-heading" className="mb-2 font-serif text-2xl">Start with three numbers</h2>
      <p className="mb-5 text-sm text-stone-600">Illustrative defaults, not extracted quote data. Assumes 3 nights, 80% guarantee and 60% pickup. Customize below.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-stone-200 bg-white p-6"><p aria-hidden="true" className="mb-4 text-3xl">👥</p>{numberInput('guests', 'Total Guests', 100000)}<p className="mt-3 text-xs text-stone-600">Used for per-guest catering fees, not room pickup.</p></div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6"><p aria-hidden="true" className="mb-4 text-3xl">🏨</p>{numberInput('rooms', 'Rooms Guaranteed', 10000)}<div className="mt-4">{numberInput('nights', 'Stay Nights', 365)}</div></div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6"><p aria-hidden="true" className="mb-4 text-3xl">💵</p>{numberInput('rate', 'Average Nightly Rate (USD)', 100000, '$')}<p className="mt-3 text-xs text-stone-600">Per room, per night.</p></div>
      </div>
    </section>
    <RiskGauge audit={audit} guarantee={values.guarantee} />
    <section className={`rounded-2xl border p-6 sm:p-8 ${audit.level === 'high' ? 'border-red-200 bg-red-50' : 'border-[#ded5c8] bg-white'}`}>
      <h2 className="font-serif text-2xl">{audit.level === 'high' ? `⚠️ High Contract Risk: estimated attrition exposure of ${auditMoney(audit.exposure)}` : 'Get clarity before you sign'}</h2>
      <p className="mt-3 text-sm leading-6">Review the actual attrition clause and vendor terms with Mini. This estimate is not a confirmed penalty. Files selected above are not attached to either action.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={`/schedule/?from=${audit.level === 'high' ? 'resort-calc-high-risk' : 'resort-calc-quick-audit'}`} onClick={event => { event.currentTarget.href = getAttributionParams(`/schedule/?from=${audit.level === 'high' ? 'resort-calc-high-risk' : 'resort-calc-quick-audit'}`); trackBooking() }} className="rounded-full bg-[#302923] px-6 py-3 text-center font-semibold text-white">Send Proposal to Mini for Free 15-Min Audit</a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => captureEvent({ name: 'calc_cta_clicked', properties: { calculator: 'resort', cta_target: 'whatsapp', source_rule: 'quick_audit_review' } })} className="rounded-full border border-stone-500 bg-white px-6 py-3 text-center font-semibold">Instant Audit via WhatsApp</a>
      </div>
      <p className="mt-3 text-xs text-stone-600">Request a 15-minute review; the scheduling page shows available appointment lengths. WhatsApp starts a conversation, not an automated or instant completed audit. Share documents there only when ready.</p>
    </section>
    <Accordion type="single" collapsible className="rounded-2xl border border-[#ded5c8] bg-white px-6">
      <AccordionItem value="fine-print"><AccordionTrigger>⚙️ Customize Contract Fine-Print (Percentages, Outside Chef Fees &amp; Deposit Dates)</AccordionTrigger><AccordionContent>
        <div className="grid gap-6 py-3 sm:grid-cols-2">
          {(['guarantee', 'pickup'] as const).map(key => <label key={key} className="text-sm font-medium">{key === 'guarantee' ? 'Attrition guarantee' : 'Expected pickup'}: {values[key]}%<input type="range" min={key === 'guarantee' ? 70 : 40} max={key === 'guarantee' ? 90 : 100} value={values[key]} onChange={e => update(key, e.target.value, 100)} className="mt-4 block w-full accent-[#7a6841]" /></label>)}
          {numberInput('catering', 'Outside catering pass fee per guest (USD)', 100000, '$')}
          {numberInput('mandap', 'Daily mandap decorator pass fee (USD)', 100000, '$')}
        </div>
        <p className="mt-4 text-sm text-stone-600">Check deposit and attrition release dates in your signed terms. Dates are not modeled here. Catering assumes every guest incurs the fee once; decorator fees assume every stay night is a vendor day.</p>
      </AccordionContent></AccordionItem>
    </Accordion>
  </div>
}
