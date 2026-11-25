import { auditMoney, type calculateResortAudit } from '@/lib/resort-audit'

type Audit = ReturnType<typeof calculateResortAudit>
export function RiskGauge({ audit, guarantee }: { audit: Audit; guarantee: number }) {
  const labels = { low: 'Low Attrition Risk', moderate: 'Moderate Attrition Risk', high: 'High Financial Risk Detected' }
  const position = `${audit.exposure < 2500 ? audit.exposure / 2500 * 33.33 : audit.exposure <= 5000 ? 33.33 + (audit.exposure - 2500) / 2500 * 33.33 : 66.67 + Math.min(1, (audit.exposure - 5000) / 10000) * 31.33}%`
  const badge = audit.level === 'high' ? 'bg-rose-100 text-rose-900' : audit.level === 'moderate' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'
  return <section aria-labelledby="risk-heading" className="rounded-3xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-8">
    <p className="text-xs font-semibold uppercase tracking-widest text-stone-600">Your estimated financial exposure</p>
    <h2 id="risk-heading" className="mt-3 font-serif text-3xl tracking-tight">Financial risk snapshot</h2>
    <p className={`mt-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${badge}`}>{labels[audit.level]}</p>
    <div role="img" aria-label={`${labels[audit.level]}: ${auditMoney(audit.exposure)} estimated attrition exposure`} className="mt-7">
      <div className="relative flex h-4 rounded-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-red-500"><span style={{ left: position }} className="absolute -top-2 h-8 w-1 -translate-x-1/2 rounded bg-stone-900 transition-[left] duration-500 ease-out motion-reduce:transition-none" /></div>
      <div className="mt-4 grid grid-cols-3 text-center text-xs text-stone-600"><span>Low · Below $2,500</span><span>Moderate · $2,500–$5,000</span><span>High · Above $5,000</span></div>
    </div>
    <dl className="mt-7 grid gap-3 sm:grid-cols-2">
      {[['Room Block Commitment', `${audit.commitment.toLocaleString('en-US', { maximumFractionDigits: 2 })} room nights (${guarantee}%)`], ['Est. Penalty Shortfall', auditMoney(audit.exposure)], ['Modeled Unhedged Attrition Exposure', auditMoney(audit.exposure)], ['Outside Caterer Pass-Through Fee', auditMoney(audit.catering)]].map(([label, value]) => <div key={label} className="rounded-xl bg-[#faf8f5] p-4"><dt className="text-sm text-stone-600">{label}</dt><dd className="mt-2 text-xl font-semibold tabular-nums">{value}</dd></div>)}
    </dl>
    <p className="mt-4 text-sm leading-6 text-stone-600">{audit.roomNights} blocked room nights − expected pickup of {audit.expected.toLocaleString('en-US', { maximumFractionDigits: 2 })}; shortfall after allowance: {audit.shortfall.toLocaleString('en-US', { maximumFractionDigits: 2 })} room nights. Decorator pass estimate: {auditMoney(audit.mandap)} (daily fee × stay nights; adjust for actual vendor days).</p>
    <p className="mt-3 text-sm leading-6 text-stone-600">Penalty shortfall and unhedged attrition exposure describe the same modeled amount; do not add them together. Vendor fees are separate. Scenario estimate, not a contract or legal audit. Assumes the full nightly rate applies to each shortfall night. Taxes, resale credits, cancellation terms, deadlines and negotiated damages may change liability. Low attrition exposure does not mean a low-risk contract.</p>
  </section>
}
