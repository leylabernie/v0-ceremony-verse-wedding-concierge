/**
 * Resort deep-page linking map.
 *
 * The destination and resort landing pages list comparable properties as
 * plain names (`DestinationPageData.resortExamples`). Some of those names
 * have a dedicated written feasibility profile under /resorts/. This map
 * connects the two so the profile pages are reachable from the relevant
 * destination pages and from each other — they were previously orphaned.
 *
 * Rule: only link a name to a profile when that profile genuinely covers
 * the named property. Destinations without a matching profile (e.g. Jamaica)
 * are intentionally not linked. Inclusion remains an evaluation, not an
 * endorsement — the destination copy states this verbatim.
 */

export type ResortProfileLink = {
  /** Display label used for the cross-link / hub card. */
  label: string
  /** Canonical deep-page path. */
  href: string
  /**
   * Exact `resortExamples` strings on other pages that should resolve to this
   * profile. Matched case-sensitively after trimming; use the exact strings as
   * they appear in lib/destination-pages.ts and lib/resort-pages.ts.
   */
  matchNames: string[]
  /** Short, factual one-line summary for the hub page. */
  summary: string
}

export const resortProfiles: ResortProfileLink[] = [
  {
    label: "Moon Palace Cancún",
    href: "/resorts/moon-palace-cancun-indian-wedding/",
    matchNames: ["Moon Palace The Grand – Cancún"],
    summary:
      "Published package prices, the in-house Indian kitchen, room-block questions, and the event, Mandap, Baraat, sound, and weather-backup terms to confirm.",
  },
  {
    label: "Hard Rock Riviera Maya",
    href: "/resorts/hard-rock-riviera-maya-indian-wedding/",
    matchNames: ["Hard Rock Hotel Riviera Maya"],
    summary:
      "The published South Asian ceremony program, on-site Indian Wedding Specialists, venue questions, and the written-proposal terms that decide feasibility.",
  },
  {
    label: "Hyatt Inclusive Collection",
    href: "/resorts/hyatt-inclusive-collection-indian-wedding/",
    matchNames: [
      "Hyatt Ziva Cancún",
      "Hyatt Ziva Riviera Cancún",
      "Hyatt Ziva Los Cabos",
      "Hyatt Ziva Cap Cana",
    ],
    summary:
      "The published Dulha & Dulhan South Asian package price, five-event program, and room-night requirements across Cancún, Riviera Maya, Los Cabos, and Punta Cana.",
  },
  {
    label: "Lopesan Costa Bávaro",
    href: "/resorts/lopesan-costa-bavaro-indian-wedding/",
    matchNames: ["Lopesan Costa Bávaro Resort, Spa & Casino"],
    summary:
      "Published package prices, venue options, guest-count tiers, and the multi-event, catering, and room-block questions to confirm in writing for Punta Cana.",
  },
]

/**
 * Lookup from an exact resort-example name -> deep-page href.
 * Built once from `resortProfiles`.
 */
export const resortProfileHrefByName: Record<string, string> = resortProfiles.reduce(
  (acc, profile) => {
    for (const name of profile.matchNames) acc[name] = profile.href
    return acc
  },
  {} as Record<string, string>,
)

/**
 * Sibling resort profiles to cross-link from a given resort page, excluding
 * the page itself. Pass the current page's resort href.
 */
export function siblingResortProfiles(currentHref: string): ResortProfileLink[] {
  return resortProfiles.filter((profile) => profile.href !== currentHref)
}
