"use client"

import Link from "next/link"
import { useState } from "react"

type PartySize = "1" | "2-4" | "5-8" | "9+"
type OutfitCount = "1" | "2-3" | "4+"
type SupportLevel = "guided" | "managed"
type TierKey = "guided-sourcing" | "full-concierge" | "custom"

const tierDetails: Record<
  TierKey,
  { name: string; price: string; explanation: string; note: string }
> = {
  "guided-sourcing": {
    name: "Guided Sourcing",
    price: "$799",
    explanation:
      "Guided Sourcing fits selected outfit decisions that benefit from live shopping, measurement support, written approvals, and an available pre-shipping review.",
    note: "Includes two to four live video shopping sessions plus selection, measurement, order, and applicable quality-review coordination.",
  },
  "full-concierge": {
    name: "Full Bridal Concierge",
    price: "$2,499",
    explanation:
      "Full Bridal Concierge is the stronger starting point when several people or multiple looks need one organized measurement, approval, and delivery process.",
    note: "Covers the bride, groom, and wedding party of up to eight people. Item costs, shipping, customs, insurance, and local alterations remain separate.",
  },
  custom: {
    name: "Custom Written Scope",
    price: "Proposal-based",
    explanation:
      "Parties larger than eight need a written scope so the number of people, outfits, vendors, approvals, shipments, and deadlines can be priced responsibly.",
    note: "CeremonyVerse will define the work and outside costs in writing before paid coordination begins. No fixed package is promised for a large group.",
  },
}

function recommendTier(
  partySize: PartySize,
  outfitCount: OutfitCount,
  supportLevel: SupportLevel,
): TierKey {
  if (partySize === "9+") return "custom"
  if (supportLevel === "managed") return "full-concierge"
  if (partySize === "5-8" || outfitCount === "4+") return "full-concierge"
  return "guided-sourcing"
}

export function SourcingTierGuide() {
  const [partySize, setPartySize] = useState<PartySize>("1")
  const [outfitCount, setOutfitCount] = useState<OutfitCount>("1")
  const [supportLevel, setSupportLevel] = useState<SupportLevel>("guided")

  const recommendation = tierDetails[recommendTier(partySize, outfitCount, supportLevel)]

  const selectClass =
    "mt-2 w-full rounded-xl border border-[#d9cfbf] bg-white px-4 py-3 text-base text-[#1f1f1f] outline-none transition focus:border-[#7a6841] focus:ring-2 focus:ring-[#7a6841]/20"

  return (
    <section aria-labelledby="sourcing-tier-guide-title" className="bg-[#f4eee4] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#7a6841]">
              Instant sourcing-tier guide
            </p>
            <h2 id="sourcing-tier-guide-title" className="font-serif text-4xl font-semibold sm:text-5xl">
              See which level of India-shopping help fits your group
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#4d403a]">
              Choose the number of people, outfit complexity, and support you want. The result is immediate, private,
              and does not require an email address.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#5e4a40]">
              This is a starting recommendation, not a binding quote. Availability, timing, item costs, shipping,
              customs, insurance, and alterations are confirmed separately in writing.
            </p>
          </div>

          <div className="rounded-3xl border border-[#d9cfbf] bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-[#1f1f1f]">
                People needing coordinated outfits
                <select
                  className={selectClass}
                  value={partySize}
                  onChange={(event) => setPartySize(event.target.value as PartySize)}
                >
                  <option value="1">1 person</option>
                  <option value="2-4">2–4 people</option>
                  <option value="5-8">5–8 people</option>
                  <option value="9+">9 or more people</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-[#1f1f1f]">
                Outfit looks per person
                <select
                  className={selectClass}
                  value={outfitCount}
                  onChange={(event) => setOutfitCount(event.target.value as OutfitCount)}
                >
                  <option value="1">1 look</option>
                  <option value="2-3">2–3 looks</option>
                  <option value="4+">4 or more looks</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-[#1f1f1f] sm:col-span-2">
                How much support do you want?
                <select
                  className={selectClass}
                  value={supportLevel}
                  onChange={(event) => setSupportLevel(event.target.value as SupportLevel)}
                >
                  <option value="guided">Live shopping + selected order help</option>
                  <option value="managed">Full measurement, approval + delivery support</option>
                </select>
              </label>
            </div>

            <div className="mt-7 rounded-2xl bg-[#1f1f1f] p-6 text-white sm:p-7" aria-live="polite">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] !text-[#c5a059]">
                Recommended starting point
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="font-serif text-3xl font-semibold !text-white">{recommendation.name}</h3>
                <p className="font-serif text-2xl font-semibold !text-[#e8cf9d]">{recommendation.price}</p>
              </div>
              <p className="mt-4 leading-7 !text-white/80">{recommendation.explanation}</p>
              <p className="mt-3 text-sm leading-6 !text-white/65">{recommendation.note}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact/?service=india"
                  className="inline-flex items-center justify-center rounded-full bg-[#c5a059] px-6 py-3 text-sm font-semibold !text-[#1f1f1f] transition hover:bg-[#d6bb7d]"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold !text-white transition hover:bg-white/10"
                >
                  Compare Full Tier Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
