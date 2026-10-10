"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const offers = [
  { id: "riu", supplier: "RIU · Pleasant Holidays", title: "Selected resort savings & wedding benefits", deadline: "October 19, 2026", expires: "2026-10-20T00:00:00-04:00", detail: "Selected hotels and dates. Wedding benefits and resort-credit vouchers depend on your qualifying stay or group proposal." },
  { id: "hyatt", supplier: "Hyatt Inclusive Collection", title: "Up to 25% off all-inclusive stays", deadline: "November 2, 2026", expires: "2026-11-03T00:00:00-05:00", detail: "Participating resorts. Eligible travel through December 20, 2027. Ask Mini to compare honeymoon or guest stays for your dates." },
  { id: "fives", supplier: "The Fives · Mexico", title: "Complimentary 2026 Wedding Collection", deadline: "December 10, 2026", expires: "2026-12-11T00:00:00-05:00", detail: "Eligible contracted all-inclusive room blocks for 2026 travel. FIT/FLEX groups excluded. Indian wedding events and cultural needs require a separate scope." },
]

export function CurrentTravelOffers() {
  // Resolve the visitor's current time after hydration so expired promotions
  // never depend on when the static homepage was last deployed.
  const [now, setNow] = useState<number | null>(null)
  useEffect(() => {
    const update = () => setNow(Date.now())
    update()
    const timer = window.setInterval(update, 60_000)
    return () => window.clearInterval(timer)
  }, [])
  const active = now === null ? [] : offers.filter((offer) => now < Date.parse(offer.expires))

  return (
    <section aria-labelledby="current-travel-offers-heading" className="border-b border-[#e6dfd5] bg-[#f4eee4] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">CeremonyVerse Travel · Current offers</p>
        <h2 id="current-travel-offers-heading" className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">A resort offer can be the start of your celebration</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#4d403a]">Compare a honeymoon, family stay or wedding room block with Mini. Send your dates, departure airport, travelers or rooms, and budget for an availability check and written quote.</p>
        {active.length > 0 ? (
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {active.map((offer) => (
              <article key={offer.id} className="flex flex-col rounded-2xl border border-[#d9cfbf] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7a6841]">{offer.supplier}</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{offer.title}</h3>
                <p className="mt-3 text-sm font-semibold text-[#7a6841]">Book by {offer.deadline}</p>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#4d403a]">{offer.detail}</p>
                <a href={`https://ceremonyversetravel.com/deals/?utm_source=ceremonyverse&utm_medium=referral&utm_campaign=current_offers#${offer.id}-offer`} className="mt-5 font-semibold text-[#7a6841] underline underline-offset-4">See {offer.supplier.split(" · ")[0]} offer details</a>
              </article>
            ))}
          </div>
        ) : null}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={`https://wa.me/12153419990?text=${encodeURIComponent("Hi Mini, I found the travel offers on CeremonyVerse. Please check availability and send a written quote. Dates: __. Departure airport: __. Travelers / rooms: __. Total budget: __. Wedding or honeymoon needs: __.")}`} className="inline-flex items-center justify-center rounded-full bg-[#7a6841] px-7 py-3.5 text-sm font-semibold text-white">WhatsApp Mini for My Quote</a>
          <Link href="/contact/?service=mexico&from=current-travel-offers" className="inline-flex items-center justify-center rounded-full border border-[#7a6841] px-7 py-3.5 text-sm font-semibold text-[#7a6841]">Request My Free Wedding Consultation</Link>
          <a href="https://ceremonyversetravel.com/deals/?utm_source=ceremonyverse&utm_medium=referral&utm_campaign=current_offers" className="inline-flex items-center justify-center px-3 py-3.5 text-sm font-semibold text-[#7a6841] underline underline-offset-4">Browse All Travel Offers</a>
        </div>
        <p className="mt-5 text-xs leading-5 text-[#5e4a40]">Offer summaries reviewed October 10, 2026. Booking deadlines differ from travel dates. Availability and supplier terms apply; public promotions may not apply to contracted groups. Travel booking and wedding planning have separate agreements. CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc. / OutsideAgents.com.</p>
      </div>
    </section>
  )
}
