import { auditMoney, type calculateResortAudit } from '@/lib/resort-audit'

type Audit = ReturnType<typeof calculateResortAudit>
export function RiskGauge({ audit, guarantee }: { audit: Audit; guarantee: number }) {
  const labels = { low: 'Lower estimated fee', moderate: 'Watch Out (Moderate Risk)', high: '⚠️ Warning: Potential Empty Room Penalty Found' }
  const position = `${audit.exposure < 2500 ? audit.exposure / 2500 * 33.33 : audit.exposure <= 5000 ? 33.33 + (audit.exposure - 2500) / 2500 * 33.33 : 66.67 + Math.min(1, (audit.exposure - 5000) / 10000) * 31.33}%`
  const badge = audit.level === 'high' ? 'bg-rose-100 text-burgundy-900' : audit.level === 'moderate' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'
  return <section aria-labelledby="risk-heading" className="rounded-3xl border border-warmBorder bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] sm:p-10">
    <p className="text-xs font-semibold uppercase tracking-widest text-[#6E635C]">Your estimated extra room costs</p>
    <h2 id="risk-heading" className="mt-3 font-serif text-3xl tracking-tight">Could empty rooms cost you extra?</h2>
    <p className={`mt-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${badge}`}>{labels[audit.level]}</p>
    <div role="img" aria-label={`${labels[audit.level]}: ${auditMoney(audit.exposure)} estimated empty room fee`} className="mt-7">
      <div className="relative flex h-4 rounded-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-red-500"><span style={{ left: position }} className="absolute -top-2 h-8 w-1 -translate-x-1/2 rounded bg-stone-900 transition-[left] duration-500 ease-out motion-reduce:transition-none" /></div>
      <div className="mt-4 grid grid-cols-3 text-center text-xs text-[#6E635C]"><span>Lower fee · Below $2,500</span><span>Watch out · $2,500–$5,000</span><span>High extra cost · Above $5,000</span></div>
    </div>
    <dl className="mt-7 grid gap-3 sm:grid-cols-2">
      {[['Rooms You Promised to Fill (%)', `${audit.commitment.toLocaleString('en-US', { maximumFractionDigits: 2 })} room nights (${guarantee}%)`], ['Estimated Out-of-Pocket Empty Room Fee ($)', auditMoney(audit.exposure)], ['Outside caterer fee', auditMoney(audit.catering)]].map(([label, value]) => <div key={label} className="rounded-xl bg-alabaster p-4"><dt className="text-sm text-[#6E635C]">{label}</dt><dd className="mt-2 text-xl font-semibold tabular-nums">{value}</dd></div>)}
    </dl>
    <p className="mt-4 text-sm leading-6 text-[#6E635C]">{audit.roomNights} reserved room nights − guests expected to book {audit.expected.toLocaleString('en-US', { maximumFractionDigits: 2 })}; empty nights you may still pay for after free reductions: {audit.shortfall.toLocaleString('en-US', { maximumFractionDigits: 2 })} room nights. Outside decorator fee estimate: {auditMoney(audit.mandap)} (daily fee × stay nights; adjust for actual vendor days).</p>
    <p className="mt-3 text-sm leading-6 text-[#6E635C]">One room night means one room for one night. Outside supplier fees are separate from the empty room estimate; do not add them together unless your contract charges both. This is a scenario estimate, not a contract or legal audit. It assumes you pay the full nightly rate for each empty night above your free allowance. Taxes, credits for rooms the hotel resells, cancellation rules and deadlines may change what you owe. A lower estimated fee does not mean no fees or a safe contract.</p>
  </section>
}
