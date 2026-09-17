"use client"

import { trackEvent } from "@/lib/analytics"

/**
 * Booking-portal CTA shown in the final results/output area of the planning
 * calculators and map tools — part of the dual-site engine in agents.md:
 * planning tools stay on ceremonyverse.com, direct bookings route to the
 * CeremonyVerse Travel portal. Because this unit promotes booking travel, it
 * carries the required host-agency disclosure line.
 */
export function TravelPortalCta({ source, className = "" }: { source: string; className?: string }) {
  return (
    <div className={`rounded-2xl border-2 border-[#7a6841] bg-[#f8f6f2] p-5 text-center ${className}`.trim()}>
      <p className="font-serif text-lg font-semibold text-[#7a6841]">Ready to Book Rooms &amp; Flights?</p>
      <a
        href="https://ceremonyversetravel.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("calculator_cta_click", { calculator_name: source, next_step: "travel_portal" })}
        className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#7a6841] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#5e4a40]"
      >
        Browse Verified Resorts on CeremonyVerse Travel
      </a>
      <p className="mt-2 text-xs leading-5 text-[#5e4a40]">
        Opens ceremonyversetravel.com in a new tab. CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc.
      </p>
    </div>
  )
}
