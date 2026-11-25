'use client'

import { useState, type ReactNode } from 'react'
import { UsersRound, Hotel, CircleDollarSign, Zap, Scale, FileCheck2 } from 'lucide-react'
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
    return <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label={`${key === 'guests' ? 'Guest' : 'Room'} presets`}>{options.map(value => <button key={value} type="button" aria-pressed={values[key] === value} onClick={() => update(key, String(value), key === 'guests' ? 100000 : 10000)} className="min-h-11 rounded-full border border-[#E8DCCB] px-3 text-xs font-medium transition-colors bg-[#F7F2EB] text-[#8C5D37] hover:border-[#6B2A35] aria-pressed:border-[#6B2A35] aria-pressed:bg-[#6B2A35] aria-pressed:text-white">{value} {key === 'guests' ? 'Guests' : 'Rooms'}</button>)}</div>
  }
  function trackWhatsapp(source: string) { captureEvent({ name: 'calc_cta_clicked', properties: { calculator: 'resort', cta_target: 'whatsapp', source_rule: source } }) }
  function trackBooking() { captureEvent({ name: 'calc_cta_clicked', properties: { calculator: 'resort', cta_target: '30min_consult', source_rule: audit.level === 'high' ? 'quick_audit_high_risk' : 'quick_audit_review' } }) }
  const whatsapp = `https://wa.me/12153419990?text=${encodeURIComponent(`Hi Mini, I would like a resort proposal review. My scenario estimates ${auditMoney(audit.exposure)} in estimated empty room fees for ${values.rooms} rooms over ${values.nights} nights. May I send my proposal and request a free 15-minute audit?`)}`
  return <div className="mx-auto max-w-7xl px-4 pb-32 pt-8 sm:px-6 sm:pb-12">
    <Tabs defaultValue="quick-audit" className="gap-7">
      <TabsList aria-label="Resort audit mode" className="grid h-auto w-full grid-cols-3 gap-1 rounded-full border border-[#E6DCCF] bg-[#F4EFE6] p-1.5">
        {([{ value: 'quick-audit', Icon: Zap, label: '10-Second Quick Check' }, { value: 'compare', Icon: Scale, label: 'Compare 2 Resorts' }, { value: 'fine-print', Icon: FileCheck2, label: 'Detailed Contract Audit' }]).map(({ value, Icon, label }) => <TabsTrigger key={value} value={value} className="min-h-16 flex-col whitespace-normal rounded-full px-2 py-3 text-center text-xs text-[#6E635C] data-[state=active]:bg-white data-[state=active]:text-[#2C221E] data-[state=active]:shadow-sm sm:flex-row sm:text-sm"><Icon aria-hidden="true" className="size-4 shrink-0" />{label}</TabsTrigger>)}
      </TabsList>
      <TabsContent value="quick-audit" forceMount className="mx-auto w-full max-w-5xl space-y-6 data-[state=inactive]:hidden">
    <ProposalDropzone />
    <section id="quick-audit-inputs" aria-labelledby="inputs-heading" className="scroll-mt-24">
      <h2 id="inputs-heading" className="mb-2 font-serif text-2xl font-normal tracking-tight text-[#2C221E]">Start with three numbers</h2>
      <p className="mb-5 text-sm text-[#6E635C]">Illustrative defaults, not extracted quote data. Assumes 3 nights, a promise to fill 80% of reserved rooms, and guests actually booking 60%. Customize below.</p>
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-[#EFE7DC] bg-white p-6 sm:p-10 lg:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-shadow duration-200 hover:shadow-md"><div className="mb-6 inline-flex size-12 items-center justify-center rounded-full border border-[#E8DCCB] bg-[#F7F2EB] text-[#8C5D37]"><UsersRound aria-hidden="true" className="size-5" /></div>{numberInput('guests', 'Total Guests', 100000)}{presets('guests', [150, 250, 350])}<p className="mt-3 text-xs text-[#6E635C]">Used for per-guest catering fees, not how many rooms guests book.</p></div>
        <div className="rounded-3xl border border-[#EFE7DC] bg-white p-6 sm:p-10 lg:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-shadow duration-200 hover:shadow-md"><div className="mb-6 inline-flex size-12 items-center justify-center rounded-full border border-[#E8DCCB] bg-[#F7F2EB] text-[#8C5D37]"><Hotel aria-hidden="true" className="size-5" /></div>{numberInput('rooms', 'Rooms Guaranteed', 10000)}{presets('rooms', [40, 60, 80])}<div className="mt-4">{numberInput('nights', 'Stay Nights', 365)}</div></div>
        <div className="rounded-3xl border border-[#EFE7DC] bg-white p-6 sm:p-10 lg:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-shadow duration-200 hover:shadow-md"><div className="mb-6 inline-flex size-12 items-center justify-center rounded-full border border-[#E8DCCB] bg-[#F7F2EB] text-[#8C5D37]"><CircleDollarSign aria-hidden="true" className="size-5" /></div>{numberInput('rate', 'Nightly Room Rate (USD)', 100000, '$')}<label className="mt-4 block text-xs text-[#6E635C]">Explore $250–$700 / night<input type="range" min="250" max="700" step="25" value={Math.max(250, Math.min(700, values.rate))} onChange={e => update('rate', e.target.value, 100000)} className="mt-3 w-full accent-[#6B2A35]" /></label><p className="mt-2 text-xs text-stone-500">Type any quoted rate above; slider is a shortcut.</p></div>
      </div>
    </section>
    <RiskGauge audit={audit} guarantee={values.guarantee} />
    <section className={`rounded-3xl border p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] sm:p-10 ${audit.level === 'high' ? 'border-[#E8DCCB] bg-[#F7F2EB]' : 'border-[#EFE7DC] bg-white'}`}>
      <h2 className="font-serif text-2xl font-normal tracking-tight text-[#2C221E]">{audit.level === 'high' ? `⚠️ Warning: Your current contract setup exposes you to an estimated ${auditMoney(audit.exposure)} empty room fee.` : 'Get clarity before you sign'}</h2>
      <p className="mt-3 text-sm leading-6">Review the actual empty-room fee rules and outside supplier terms with Mini. This estimate is not a confirmed penalty. Files selected above are not attached to either action.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={`/schedule/?from=${audit.level === 'high' ? 'resort-calc-high-risk' : 'resort-calc-quick-audit'}`} onClick={event => { event.currentTarget.href = getAttributionParams(`/schedule/?from=${audit.level === 'high' ? 'resort-calc-high-risk' : 'resort-calc-quick-audit'}`); trackBooking() }} className="rounded-full bg-[#6B2A35] hover:bg-[#542129] transition-colors px-6 py-3 text-center font-serif text-lg shadow-sm text-white">Have Mini Audit Your Contract Line-by-Line (Free 15-Min Call)</a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsapp('quick_audit_review')} className="rounded-full border border-stone-500 bg-white px-6 py-3 text-center font-semibold">Ask Mini About This Penalty on WhatsApp</a>
      </div>
      <p className="mt-3 text-xs text-[#6E635C]">Request a 15-minute review; the scheduling page shows available appointment lengths. WhatsApp starts a conversation, not an automated or instant completed audit. Share documents there only when ready.</p>
    </section>
    <Accordion type="single" collapsible className="rounded-3xl border border-[#EFE7DC] bg-white px-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] sm:px-10">
      <AccordionItem value="fine-print"><AccordionTrigger>⚙️ Customize Contract Fine-Print (Percentages, Outside Chef Fees &amp; Deposit Dates)</AccordionTrigger><AccordionContent>
        <div className="grid gap-6 py-3 sm:grid-cols-2">
          {(['guarantee', 'pickup'] as const).map(key => <label key={key} className="text-sm font-medium">{key === 'guarantee' ? 'Rooms You Promised to Fill (%)' : 'Rooms Guests Will Actually Book (%)'}: {values[key]}%<input type="range" min={key === 'guarantee' ? 70 : 40} max={key === 'guarantee' ? 90 : 100} value={values[key]} onChange={e => update(key, e.target.value, 100)} className="mt-4 block w-full accent-[#6B2A35]" /></label>)}
          {numberInput('catering', 'Outside caterer fee per guest (USD)', 100000, '$')}
          {numberInput('mandap', 'Daily fee for bringing your mandap decorator (USD)', 100000, '$')}
        </div>
        <p className="mt-4 text-sm text-[#6E635C]">Check deposit deadlines and dates when you can reduce reserved rooms without a fee in your signed terms. Dates are not modeled here. Catering assumes every guest incurs the fee once; decorator fees assume every stay night is a vendor day.</p>
      </AccordionContent></AccordionItem>
    </Accordion>
      </TabsContent>
      <TabsContent value="compare" forceMount className="data-[state=inactive]:hidden">{comparison}</TabsContent>
      <TabsContent value="fine-print" forceMount className="data-[state=inactive]:hidden">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#EFE7DC] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#8C5D37]">Before you sign</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight">Your contract, line by line</h2>
          <p className="mt-3 text-sm leading-6 text-[#6E635C]">Use this checklist beside your written proposal. Checked items stay in this tab session only, are not saved or sent, and do not change the numerical risk score. For numerical assumptions, use Customize Contract Fine-Print in 10-Second Quick Check.</p>
          {finePrint}
        </div>
      </TabsContent>
    </Tabs>
    <div className="cv-audit-dock fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-[#EFE7DC] bg-white/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 shadow-lg backdrop-blur-md sm:hidden print:hidden">
      <div><p className="text-xs text-stone-500">Est. Empty Room Fee</p><p className="text-lg font-bold tabular-nums text-[#6B2A35]">{auditMoney(audit.exposure)}</p></div>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsapp('quick_audit_mobile_dock')} className="rounded-full bg-emerald-700 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-800">Audit on WhatsApp →</a>
    </div>
  </div>
}
