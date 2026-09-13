import Link from "next/link"

export function PlanningNextStep({ sourcing = false }: { sourcing?: boolean }) {
  return (
    <section className="border-y border-[#d9cfbf] bg-[#f4eee4] px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Your next wedding decision</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
          {sourcing ? "Planning the outfits and the destination wedding?" : "Will this destination fit your wedding?"}
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#4d403a]">
          {sourcing ? "Connect your wardrobe timeline with the wedding budget, guest travel, and ceremony schedule. " : "Bring your dates, guest count, event list, and any resort proposals. "}
          Start with a free 30-minute consultation. If you need a written decision plan, the optional $300 Feasibility Plan includes a working session, review of up to two current proposals, a written action brief, and a follow-up.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/contact/?from=planning-next-step" className="inline-flex rounded-full bg-[#7a6841] px-6 py-3 text-center font-semibold text-white">Book a Free Consultation</Link>
          <Link href="/destination-wedding-feasibility-plan/" className="inline-flex rounded-full border border-[#7a6841] px-6 py-3 text-center font-semibold text-[#7a6841]">Start with the $300 Feasibility Plan</Link>
        </div>
        <p className="mt-5 text-sm leading-6 text-[#4d403a]">Compare <Link href="/indian-destination-wedding-planner-mexico/" className="underline">Mexico wedding planning</Link>, <Link href="/destinations/punta-cana-indian-wedding/" className="underline">Punta Cana</Link>, and <Link href="/destinations/jamaica-indian-wedding/" className="underline">Jamaica</Link>, or review <Link href="/pricing/" className="underline">packages and pricing</Link>. The paid plan is separate from the free consultation.</p>
      </div>
    </section>
  )
}
