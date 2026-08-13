import Link from "next/link"

export const metadata = {
  robots: { index: false, follow: true },
}

export default function CeremonialItemsPauseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <aside className="border-y border-[#d7c7a4] bg-[#f4eee4] px-6 py-7">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Service review</p>
            <p className="mt-2 leading-7 text-[#4d403a]">
              Standalone ceremonial-item sourcing is paused while supplier, shipping, and delivery requirements are verified. Current India sourcing focuses on wedding outfits and approved related accessories.
            </p>
          </div>
          <Link href="/buy-indian-wedding-outfits-from-india/" className="inline-flex justify-center rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841]">
            Explore Outfit Sourcing
          </Link>
        </div>
      </aside>
      {children}
    </>
  )
}
