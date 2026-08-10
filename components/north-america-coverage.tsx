import Link from "next/link"

interface NorthAmericaCoverageProps {
  guideName?: string
  ctaHref?: string
  ctaLabel?: string
}

export function NorthAmericaCoverage({
  guideName,
  ctaHref = "/indian-wedding-shopping-canada/",
  ctaLabel = "View Canada Service Details",
}: NorthAmericaCoverageProps) {
  return (
    <aside className="border-y border-[#e6dfd5] bg-[#f4eee4] px-6 py-8">
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">
            United States &amp; Canada coverage
          </p>
          <p className="mt-2 leading-7 text-[#4d403a]">
            {guideName ? `This ${guideName} guide provides local context, but it is not a service boundary. ` : ""}
            CeremonyVerse works remotely with families in all 50 U.S. states, Washington, D.C., and across every
            Canadian province and territory. Tracked shipping and customs-document coordination depend on the selected
            carrier, destination, shipment, and current written quote.
          </p>
        </div>
        <Link
          href={ctaHref}
          className="inline-flex justify-center rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841] transition hover:bg-[#7a6841] hover:text-white"
        >
          {ctaLabel}
        </Link>
      </div>
    </aside>
  )
}
