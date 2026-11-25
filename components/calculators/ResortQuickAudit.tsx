'use client'

import { useState, type ReactNode } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { AuditNumberInput } from './AuditNumberInput'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ProposalDropzone } from './ProposalDropzone'
import { RiskGauge } from './RiskGauge'
import { calculateResortAudit, auditMoney, type ResortAuditInput } from '@/lib/resort-audit'
import { captureEvent } from '@/lib/analytics'
import { getAttributionParams } from '@/lib/attribution'
import { useCalculatorThreshold } from '@/hooks/use-calculator-threshold'

const initial: ResortAuditInput = { guests: 250, rooms: 50, nights: 3, rate: 400, guarantee: 80, pickup: 60, catering: 0, mandap: 0 }
export function ResortQuickAudit({ comparison, finePrint }: { comparison: ReactNode; finePrint: ReactNode }) {
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
    return <AuditNumberInput label={label} value={values[key]} max={max} prefix={prefix} step={key === 'rate' ? 25 : key === 'catering' || key === 'mandap' ? 1 : 1} onChange={value => update(key, String(value), max)} />
  }
  function presets(key: 'guests' | 'rooms', options: number[]) {
    return <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={`${key === 'guests' ? 'Guest' : 'Room'} presets`}>{options.map(value => <button key={value} type="button" aria-pressed={values[key] === value} onClick={() => update(key, String(value), key === 'guests' ? 100000 : 10000)} className="min-h-11 rounded-full border border-stone-200 px-3 text-xs font-medium text-stone-600 transition-colors hover:border-rose-900 hover:text-rose-900 aria-pressed:border-rose-900 aria-pressed:bg-rose-50 aria-pressed:text-rose-900">{value} {key === 'guests' ? 'Guests' : 'Rooms'}</button>)}</div>
  }
  function trackWhatsapp(source: string) { captureEvent({ name: 'calc_cta_clicked', properties: { calculator: 'resort', cta_target: 'whatsapp', source_rule: source } }) }
  function trackBooking() { captureEvent({ name: 'calc_cta_clicked', properties: { calculator: 'resort', cta_target: '30min_consult', source_rule: audit.level === 'high' ? 'quick_audit_high_risk' : 'quick_audit_review' } }) }
  const whatsapp = `https://wa.me/12153419990?text=${encodeURIComponent(`Hi Mini, I would like a resort proposal review. My scenario estimates ${auditMoney(audit.exposure)} in attrition exposure for ${values.rooms} rooms over ${values.nights} nights. May I send my proposal and request a free 15-minute audit?`)}`
  return <div className="mx-auto max-w-7xl px-4 pb-32 pt-8 sm:px-6 sm:pb-12">
    <Tabs defaultValue="quick-audit" className="gap-7">
      <TabsList aria-label="Resort audit mode" className="grid h-auto w-full grid-cols-3 gap-1 rounded-2xl bg-stone-200/60 p-1.5">
        {[['quick-audit', '⚡', 'Quick Risk Audit'], ['compare', '⚖️', '2-Resort Comparison'], ['fine-print', '📑', 'Contract Fine-Print']].map(([value, icon, label]) => <TabsTrigger key={value} value={value} className="min-h-16 flex-col whitespace-normal rounded-xl px-2 py-3 text-center text-xs text-stone-600 data-[state=active]:bg-white data-[state=active]:text-rose-900 sm:flex-row sm:text-sm"><span aria-hidden="true">{icon}</span>{label}</TabsTrigger>)}
      </TabsList>
      <TabsContent value="quick-audit" forceMount className="mx-auto w-full max-w-5xl space-y-6 data-[state=inactive]:hidden">
    <ProposalDropzone />
    <section id="quick-audit-inputs" aria-labelledby="inputs-heading" className="scroll-mt-24">
      <h2 id="inputs-heading" className="mb-2 font-serif text-2xl">Start with three numbers</h2>
      <p className="mb-5 text-sm text-stone-600">Illustrative defaults, not extracted quote data. Assumes 3 nights, 80% guarantee and 60% pickup. Customize below.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"><p aria-hidden="true" className="mb-4 text-3xl">👥</p>{numberInput('guests', 'Total Guests', 100000)}{presets('guests', [200, 250, 300])}<p className="mt-3 text-xs text-stone-600">Used for per-guest catering fees, not room pickup.</p></div>
        <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"><p aria-hidden="true" className="mb-4 text-3xl">🏨</p>{numberInput('rooms', 'Rooms Guaranteed', 10000)}{presets('rooms', [40, 60, 80])}<div className="mt-4">{numberInput('nights', 'Stay Nights', 365)}</div></div>
        <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"><p aria-hidden="true" className="mb-4 text-3xl">💵</p>{numberInput('rate', 'Average Nightly Rate (USD)', 100000, '$')}<label className="mt-4 block text-xs text-stone-600">Explore $250–$600 / night<input type="range" min="250" max="600" step="25" value={Math.max(250, Math.min(600, values.rate))} onChange={e => update('rate', e.target.value, 100000)} className="mt-3 w-full accent-rose-900" /></label><p className="mt-2 text-xs text-stone-500">Type any quoted rate above; slider is a shortcut.</p></div>
      </div>
    </section>
    <RiskGauge audit={audit} guarantee={values.guarantee} />
    <section className={`rounded-2xl border p-6 sm:p-8 ${audit.level === 'high' ? 'border-red-200 bg-red-50' : 'border-[#ded5c8] bg-white'}`}>
      <h2 className="font-serif text-2xl">{audit.level === 'high' ? `⚠️ High Contract Risk: estimated attrition exposure of ${auditMoney(audit.exposure)}` : 'Get clarity before you sign'}</h2>
      <p className="mt-3 text-sm leading-6">Review the actual attrition clause and vendor terms with Mini. This estimate is not a confirmed penalty. Files selected above are not attached to either action.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={`/schedule/?from=${audit.level === 'high' ? 'resort-calc-high-risk' : 'resort-calc-quick-audit'}`} onClick={event => { event.currentTarget.href = getAttributionParams(`/schedule/?from=${audit.level === 'high' ? 'resort-calc-high-risk' : 'resort-calc-quick-audit'}`); trackBooking() }} className="rounded-full bg-rose-900 hover:bg-rose-950 transition-colors px-6 py-3 text-center font-semibold text-white">Review Contract Line-by-Line with Mini (Free 15-Min Call)</a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsapp('quick_audit_review')} className="rounded-full border border-stone-500 bg-white px-6 py-3 text-center font-semibold">Instant Audit via WhatsApp</a>
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
      </TabsContent>
      <TabsContent value="compare" forceMount className="data-[state=inactive]:hidden">{comparison}</TabsContent>
      <TabsContent value="fine-print" forceMount className="data-[state=inactive]:hidden">
        <div className="mx-auto max-w-5xl rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-800">Before you sign</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight">Your contract, line by line</h2>
          <p className="mt-3 text-sm leading-6 text-stone-600">Use this checklist beside your written proposal. Checked items stay in this tab session only, are not saved or sent, and do not change the numerical risk score. For numerical assumptions, use Customize Contract Fine-Print in Quick Risk Audit.</p>
          {finePrint}
        </div>
      </TabsContent>
    </Tabs>
    <div className="cv-audit-dock fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-stone-200 bg-white/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 shadow-lg backdrop-blur-md sm:hidden print:hidden">
      <div><p className="text-xs text-stone-500">Quick-check estimate</p><p className="text-lg font-bold tabular-nums text-rose-900">{auditMoney(audit.exposure)}</p></div>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsapp('quick_audit_mobile_dock')} className="rounded-full bg-emerald-700 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-800">Audit on WhatsApp →</a>
    </div>
  </div>
}
