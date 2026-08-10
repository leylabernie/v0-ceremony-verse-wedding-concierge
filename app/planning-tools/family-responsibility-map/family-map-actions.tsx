"use client"

import { trackEvent } from "@/lib/analytics"

export function FamilyMapActions() {
  const trackDownload = () => {
    trackEvent("planning_tool_download", {
      planning_tool: "family_responsibility_map",
      file_type: "csv",
    })
  }

  const printMap = () => {
    trackEvent("planning_tool_download", {
      planning_tool: "family_responsibility_map",
      file_type: "print_pdf",
    })
    window.print()
  }

  return (
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row print:hidden">
      <a
        href="/downloads/ceremonyverse-family-responsibility-map.csv"
        download="CeremonyVerse-Family-Responsibility-Map.csv"
        onClick={trackDownload}
        className="rounded-full bg-[#7a6841] px-7 py-3 text-center text-sm font-semibold text-white"
      >
        Download Editable CSV
      </a>
      <button type="button" onClick={printMap} className="rounded-full border border-[#7a6841] px-7 py-3 text-sm font-semibold text-[#7a6841]">
        Print or Save as PDF
      </button>
    </div>
  )
}
