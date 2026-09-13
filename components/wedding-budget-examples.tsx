import Link from "next/link"

const usd = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n)

export function WeddingBudgetExamples() {
  return <section className="bg-white px-6 py-16">
    <div className="mx-auto max-w-6xl">
      <h2 className="font-serif text-4xl font-semibold">Sample wedding budgets by guest count</h2>
      <p className="mt-4 max-w-4xl leading-7 text-[#4d403a]"><strong>These are arithmetic examples, not resort quotes or destination averages.</strong> To show how guest count changes a budget, assume $25,000 for fixed event costs, $250 per guest across the planned private events, an $8,000 starting full-planning fee, and a 15% reserve. Replace each assumption with your written quotes. Taxes and service charges must be included in those inputs; they are not estimated separately here.</p>
      <div className="mt-7 overflow-x-auto rounded-xl border border-[#d9cfbf]">
        <table className="w-full min-w-[610px] text-left text-sm leading-6">
          <caption className="sr-only">Illustrative host event budgets, excluding rooms, flights, outfits, planner travel and lodging, and airport transfers</caption>
          <thead className="bg-[#f4eee4]"><tr><th className="p-4">Guests</th><th className="p-4">Fixed events</th><th className="p-4">Guest-dependent costs</th><th className="p-4">Planning</th><th className="p-4">Total with 15% reserve</th></tr></thead>
          <tbody>{[50,100,150,200].map(guests=><tr key={guests} className="border-t border-[#d9cfbf]"><th className="p-4">{guests}</th><td className="p-4">$25,000</td><td className="p-4">{usd(guests*250)}</td><td className="p-4">$8,000</td><td className="p-4 font-semibold">{usd((25000+guests*250+8000)*1.15)}</td></tr>)}</tbody>
        </table>
      </div>
      <p className="mt-5 leading-7 text-[#4d403a]">These examples exclude rooms, flights, outfits, planner travel and lodging, and airport transfers. Add any host-paid VIP travel separately. A $90,000 budget for 200 guests can look comfortable until room subsidies, extra event hours, décor, and family travel are added. Use your actual spending limit and guest commitments in the <Link href="/planning-tools/budget/" className="font-semibold text-[#7a6841] underline">free wedding cost calculator</Link>.</p>
      <h3 className="mt-10 font-serif text-3xl font-semibold">Mexico vs Punta Cana vs Jamaica: compare the same wedding</h3>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <article className="rounded-xl border border-[#d9cfbf] p-6"><h4 className="text-xl font-semibold">Mexico</h4><p className="mt-3 leading-7">Price the exact Cancún, Riviera Maya, Los Cabos, or Puerto Vallarta property. Compare event hours, Indian menus, outside-vendor fees, room nights, and local production. A different city can change the vendor and transfer budget.</p><Link href="/indian-destination-wedding-planner-mexico/" className="mt-4 inline-block font-semibold text-[#7a6841] underline">Mexico planning and packages</Link></article>
        <article className="rounded-xl border border-[#d9cfbf] p-6"><h4 className="text-xl font-semibold">Punta Cana</h4><p className="mt-3 leading-7">Use the same guest count and event list. Ask which South Asian services are available locally and which providers must travel. A lower ceremony package can still produce a higher complete budget.</p><Link href="/destinations/punta-cana-indian-wedding/" className="mt-4 inline-block font-semibold text-[#7a6841] underline">Punta Cana comparison</Link></article>
        <article className="rounded-xl border border-[#d9cfbf] p-6"><h4 className="text-xl font-semibold">Jamaica</h4><p className="mt-3 leading-7">Separate Montego Bay, Trelawny, and Ocho Rios proposals. Confirm the Hindu ceremony, menu, production, priest travel, airport route, and current package year before comparing the total with Mexico or Punta Cana.</p><Link href="/destinations/jamaica-indian-wedding/" className="mt-4 inline-block font-semibold text-[#7a6841] underline">Jamaica comparison</Link></article>
      </div>
      <p className="mt-5 leading-7 text-[#4d403a]">There is no verified same-scope quote set establishing that one of these destinations is always cheaper. The <Link href="/planning-tools/resort-comparison/" className="font-semibold text-[#7a6841] underline">resort comparison calculator</Link> lets you compare current offers without treating an omitted cost as free.</p>
    </div>
  </section>
}
