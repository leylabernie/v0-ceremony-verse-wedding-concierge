import Link from 'next/link'

const rows = [
  { destination: 'Cancún', cost: 'Moon Palace Luxe: $15,000 package for up to 75 guests, not a 300-guest wedding total.', transfer: 'CUN: request a timed quote to the exact property, including group loading.', capacity: 'Moon Palace Lake Terrace: 300 cocktail or 180 buffet guests before layout approval.', source: '/guides/moon-palace-cancun-wedding-planning/', costSource: '/resorts/moon-palace-cancun-indian-wedding/' },
  { destination: 'Riviera Maya', cost: 'Hard Rock Riviera Maya lists $1,500 per outside vendor/service for one person and one day; get a current quote.', transfer: 'CUN to Dreams Riviera Cancun (Puerto Morelos): resort estimates 20 minutes; not a regional average.', capacity: 'Request the signed ceremony, dinner and rain-backup layouts separately.', source: 'https://www.hyatt.com/dreams/en-US/drerc-dreams-riviera-cancun', costSource: '/guides/hard-rock-riviera-maya-wedding-planning/' },
  { destination: 'Los Cabos', cost: 'Request itemized USD proposals; no verified destination-wide 300-guest average.', transfer: 'SJD to Hyatt Ziva Los Cabos: Hyatt cited 20 minutes in 2015. Reconfirm current transfer time.', capacity: 'Confirm seated capacity including mandap, dance floor and service aisles.', source: 'https://newsroom.hyatt.com/091515-Hyatt-Ziva-Los-Cabos-Returns-to-San-Jose-Del-Cabo', costSource: '/planning-tools/budget-tracker/' },
]

export function MexicoPlanningBenchmarks({destination}: {destination?: string}) {
  const selected = rows.filter(row => !destination || row.destination === destination)
  if (!selected.length) return null
  return <section className="mx-auto max-w-6xl px-6 py-12">
    <h2 className="font-serif text-3xl">What can we compare before a deposit?</h2>
    <div className="mt-6 overflow-x-auto"><table className="w-full text-left text-sm leading-6">
      <caption className="pb-3 text-left">Property examples, not destination averages or guarantees. Transfer estimates exclude immigration, baggage and group assembly.</caption>
      <thead><tr>{['Destination','Cost benchmark (USD)','Airport transfer','Event capacity'].map(label => <th key={label} scope="col" className="p-3">{label}</th>)}</tr></thead>
      <tbody>{selected.map(row => <tr key={row.destination} className="border-t align-top"><th scope="row" className="p-3">{row.destination}</th><td className="p-3">{row.cost} <Link href={row.costSource} className="underline">Cost details</Link></td><td className="p-3">{row.transfer}</td><td className="p-3">{row.capacity} <a href={row.source} className="underline">{row.destination==='Cancún'?'Venue guide':'Airport estimate source'}</a></td></tr>)}</tbody>
    </table></div>
    <details className="mt-5 rounded-xl border p-5"><summary className="cursor-pointer font-semibold">Can we bring an outside Satvik chef without per-head fees{destination ? ` in ${destination}` : ''}?</summary><p className="mt-3">No fee waiver is verified here. An in-house Indian menu does not guarantee outside kitchen access. Ask the resort to name the chef, preparation space, vendor passes and per-person charges in a signed catering addendum for each event.</p></details>
  </section>
}
