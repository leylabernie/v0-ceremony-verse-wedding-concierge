import { auditMoney, type calculateResortAudit } from '@/lib/resort-audit'

type Audit = ReturnType<typeof calculateResortAudit>
export function RiskGauge({ audit, guarantee }: { audit: Audit; guarantee: number }) {
  const labels = { low: 'Low Attrition Risk', moderate: 'Moderate Attrition Risk', high: 'High Financial Risk Detected' }
  const position = audit.level === 'low' ? '16.67%' : audit.level === 'moderate' ? '50%' : '83.33%'
  return <section aria-labelledby="risk-heading" className="rounded-2xl border border-[#ded5c8] bg-white p-6 sm:p-8">
    <p className="text-xs font-semibold uppercase tracking-widest text-stone-600">Your estimated financial exposure</p>
    <h2 id="risk-heading" className="mt-2 font-serif text-3xl">{labels[audit.level]}</h2>
    <div role="img" aria-label={`${labels[audit.level]}: ${auditMoney(audit.exposure)} estimated attrition exposure`} className="mt-7">
      <div className="relative flex h-4 rounded-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-red-500"><span style={{ left: position }} className="absolute -top-2 h-8 w-1 -translate-x-1/2 rounded bg-stone-900" /></div>
      <div className="mt-4 grid grid-cols-3 text-center text-xs text-stone-600"><span>Low · Below $2,500</span><span>Moderate · $2,500–$5,000</span><span>High · Above $5,000</span></div>
    </div>
    <dl className="mt-7 grid gap-3 sm:grid-cols-3">
      {[['Room Block Commitment', `${audit.commitment.toLocaleString('en-US', { maximumFractionDigits: 2 })} room nights (${guarantee}%)`], ['Est. Penalty Exposure', auditMoney(audit.exposure)], ['Outside Caterer Pass-Through Fee', auditMoney(audit.catering)]].map(([label, value]) => <div key={label} className="rounded-xl bg-[#faf8f5] p-4"><dt className="text-sm text-stone-600">{label}</dt><dd className="mt-2 text-xl font-semibold">{value}</dd></div>)}
    </dl>
    <p className="mt-4 text-sm leading-6 text-stone-600">{audit.roomNights} blocked room nights − expected pickup of {audit.expected.toLocaleString('en-US', { maximumFractionDigits: 2 })}; shortfall after allowance: {audit.shortfall.toLocaleString('en-US', { maximumFractionDigits: 2 })} room nights. Decorator pass estimate: {auditMoney(audit.mandap)} (daily fee × stay nights; adjust for actual vendor days).</p>
    <p className="mt-3 text-sm leading-6 text-stone-600">Scenario estimate, not a contract or legal audit. Assumes the full nightly rate applies to each shortfall night. Taxes, resale credits, cancellation terms, deadlines and negotiated damages may change liability. Low attrition exposure does not mean a low-risk contract.</p>
  </section>
}
