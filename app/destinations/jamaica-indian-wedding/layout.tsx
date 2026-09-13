import Link from "next/link"

export default function JamaicaDestinationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <aside className="border-y border-[#d7c7a4] bg-[#f4eee4] px-6 py-7">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Jamaica destination weddings</p>
            <p className="mt-2 leading-7 text-[#4d403a]">
              CeremonyVerse offers destination-wedding planning in Mexico, Jamaica, and Punta Cana. For each wedding,
              the written proposal confirms the selected resort, destination team, dates, and planning responsibilities.
            </p>
          </div>
          <Link href="/destinations/" className="inline-flex justify-center rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841]">
            View Current Destinations
          </Link>
        </div>
      </aside>
      {children}
    </>
  )
}
