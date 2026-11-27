"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export interface ToolLeadBannerProps {
  title: string
  description: string
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  badgeText?: string
}

/** Static, optional help: never gates tool results or sends worksheet/guest data. */
export function ToolLeadBanner({
  title,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  badgeText,
}: ToolLeadBannerProps) {
  const source = new URL(primaryCtaHref, "https://www.ceremonyverse.com").searchParams.get("from") || "planning-tools"
  const recordClick = (href: string, position: "primary" | "secondary") => {
    trackEvent("calculator_cta_click", {
      calculator_name: source.replace(/^tool-/, ""),
      source,
      placement: "tool_lead_banner",
      cta_position: position,
      next_step: /https:\/\/(api\.whatsapp\.com|wa\.me)\//.test(href) ? "whatsapp" : "consultation",
    })
  }

  return (
    <section aria-label={title} data-tool-lead-banner={source} className="rounded-2xl border border-[#EFE7DC] bg-white p-6 shadow-sm sm:rounded-3xl">
      <div className="flex items-start gap-4">
        <Sparkles aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#8C5D37]" />
        <div className="min-w-0 flex-1">
          {badgeText && <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#8C5D37]">{badgeText}</p>}
          <h2 className="font-serif text-2xl leading-snug text-[#3D2529]">{title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5E5048]">{description}</p>
          <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link href={primaryCtaHref} onClick={() => recordClick(primaryCtaHref, "primary")} className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#6B2A35] px-6 py-2.5 text-center font-serif text-sm font-medium !text-white transition-all hover:bg-[#542129] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2A35] focus-visible:ring-offset-2 motion-reduce:transition-none">
              {primaryCtaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && <a href={secondaryCtaHref} onClick={() => recordClick(secondaryCtaHref, "secondary")} className="inline-flex min-h-11 items-center justify-center rounded-full px-4 py-2.5 text-center text-sm font-medium text-[#6B2A35] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2A35] focus-visible:ring-offset-2">
              {secondaryCtaText}
            </a>}
          </div>
          <p className="mt-3 text-xs leading-5 text-[#75675E]">Free 30-minute introductory consultation. Detailed proposal reviews and written plans are separate paid services, agreed in writing.</p>
        </div>
      </div>
    </section>
  )
}
