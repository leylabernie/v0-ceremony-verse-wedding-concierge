import { escapeHtml } from "@/lib/consultation-email"

/**
 * Automated confirmation email for the Resort Strategy Matcher
 * (source: "strategy-matcher" in /api/lead-capture). Written from Mini Patel
 * in the signature gold-and-paper theme, personalizing on the wizard's
 * compiled results payload (vision, guest logistics, cultural events,
 * dietary priorities).
 *
 * Brand rules honored here:
 *  - Main site referenced as https://www.ceremonyverse.com (www-canonical)
 *  - Booking portal referenced as https://ceremonyversetravel.com (apex-canonical)
 *  - Full host-agency licensing string placed prominently in the footer per
 *    the agents.md disclosure rule (the email promotes the booking portal)
 */

const PORTAL_URL = "https://ceremonyversetravel.com"
const STRATEGY_CALL_URL = "https://www.ceremonyverse.com/contact/?service=mexico&from=strategy-matcher-email"
const LICENSING_STRING =
  "CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc., Florida Seller of Travel No. FST ST15578 - California Seller of Travel No. 2090937-50 - Washington UBID No 603189022."

export interface StrategyMatchEmailInput {
  /** Raw lead name; only the first word is used and it is HTML-escaped. */
  name: string
  email: string
  /** The compiled wizard payload from the client — parsed defensively. */
  results?: unknown
}

function sanitizeText(value: unknown, maxLength: number): string {
  return typeof value === "string" && value.trim() ? escapeHtml(value.trim().slice(0, maxLength)) : ""
}

function sanitizeList(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && !!item.trim()) : []
}

export function buildStrategyMatchEmail(lead: StrategyMatchEmailInput): {
  subject: string
  html: string
  text: string
} {
  const firstName = escapeHtml((lead.name.trim().split(/\s+/)[0] || "there").replace(/[^\p{L}\p{M}\s'.-]/gu, ""))

  // Defensive parse of the wizard's results payload (typed unknown at the API).
  const results = (lead.results ?? {}) as Record<string, unknown>
  const vision = sanitizeText(results.vision, 60)
  const guestCount = sanitizeText(results.guestCount, 10)
  const eldersTraveling = results.eldersTraveling === true
  const culturalEvents = sanitizeList(results.culturalEvents)
  const baraatStyle = sanitizeText(results.baraatStyle, 30)
  const dietaryPriorities = sanitizeList(results.dietaryPriorities)
  const targetDates = sanitizeText(results.targetDates, 40)

  const reviewRows: [string, string][] = []
  if (vision) reviewRows.push(["Celebration", vision])
  if (guestCount) reviewRows.push(["Estimated guests", guestCount])
  reviewRows.push(["Elder-friendly layout", eldersTraveling ? "Yes — lobby-level filtering" : "Not flagged"])
  if (culturalEvents.length) reviewRows.push(["Cultural events", culturalEvents.map(escapeHtml).join(", ")])
  if (baraatStyle) reviewRows.push(["Baraat style", baraatStyle])
  if (dietaryPriorities.length) reviewRows.push(["Dietary priorities", dietaryPriorities.map(escapeHtml).join(", ")])
  if (targetDates) reviewRows.push(["Target dates", targetDates])

  const reviewTable =
    reviewRows.length > 0
      ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 18px;border-collapse:collapse;background-color:#ffffff;border:1px solid #e6dfd5;border-radius:8px;">${reviewRows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:10px 14px;border-bottom:1px solid #f0ebe3;font-size:12px;font-weight:bold;letter-spacing:0.06em;text-transform:uppercase;color:#5e4a40;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:10px 14px;border-bottom:1px solid #f0ebe3;font-size:14px;color:#2f2f2f;">${value}</td></tr>`,
          )
          .join("")}</table>`
      : ""

  const subject = `${firstName === "there" ? "Your Resort Strategy Match" : `${firstName}, your Resort Strategy Match`} is in review — Mini Patel`

  const html = `
<div style="margin:0;padding:24px 12px;background-color:#faf8f5;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background-color:#ffffff;border:1px solid #e6dfd5;border-radius:8px;overflow:hidden;">
    <tr>
      <td style="background-color:#1f1f1f;padding:20px 28px;text-align:center;">
        <span style="color:#f8f6f2;font-size:18px;letter-spacing:0.18em;font-weight:600;">CEREMONY<span style="color:#c5a059;font-weight:300;">VERSE</span></span>
        <div style="color:#9a9284;font-size:11px;letter-spacing:0.12em;margin-top:6px;">DESTINATION WEDDING PLANNING</div>
      </td>
    </tr>
    <tr>
      <td style="padding:30px 32px 10px;color:#2f2f2f;font-family:Georgia,serif;font-size:16px;line-height:1.7;">
        <p style="margin:0 0 16px;">Hi ${firstName},</p>
        <p style="margin:0 0 16px;">Thank you for completing our <strong>Resort Strategy Matcher</strong>. I am already
        reviewing your layout needs, dietary timelines, and celebration preferences.</p>
        ${reviewTable}
        <div style="margin:0 0 20px;border:2px dashed #c5a059;border-radius:10px;background-color:#f8f6f2;padding:16px 20px;">
          <p style="margin:0;font-size:13px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:#7a6841;">📎 Your Custom Tracking Tracker</p>
          <p style="margin:8px 0 0;font-size:14px;line-height:1.6;color:#4d403a;">
            <strong>Attached to this email.</strong> Your personalized room-block matrix, dietary deadline dates, and
            traveling-vendor meal count — pre-filled from the answers above and ready to take to your resort
            negotiation.
          </p>
        </div>
        <p style="margin:0 0 18px;">While I finish the review, you can see which resorts currently have the outdoor
        space, room inventory, and kitchen flexibility your celebration needs:</p>
        <p style="margin:0 0 18px;text-align:center;">
          <a href="${PORTAL_URL}" style="display:inline-block;background-color:#7a6841;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:bold;font-size:15px;">Explore Live Resort Availability</a>
        </p>
        <p style="margin:0 0 8px;">And when you&apos;re ready to talk it through person-to-person:</p>
        <p style="margin:0 0 20px;text-align:center;">
          <a href="${STRATEGY_CALL_URL}" style="font-size:15px;font-weight:bold;color:#7a6841;text-decoration:underline;">Lock in your free 15-minute Strategy Call →</a>
        </p>
        <p style="margin:0 0 8px;">Warmly,</p>
        <p style="margin:0 0 4px;"><strong>Mini Patel</strong></p>
        <p style="margin:0 0 20px;color:#5e4a40;">Founder, CeremonyVerse Destination Wedding Planning<br/>
        <a href="mailto:hello@ceremonyverse.com" style="color:#7a6841;">hello@ceremonyverse.com</a> · +1 (215) 341-9990</p>
      </td>
    </tr>
    <tr>
      <td style="background-color:#f8f6f2;padding:18px 32px;border-top:2px solid #7a6841;">
        <p style="margin:0 0 8px;font-size:12px;line-height:1.7;color:#4d403a;font-family:Georgia,serif;">
          <strong>${LICENSING_STRING}</strong><br/>
          All travel bookings made via ceremonyversetravel.com are subject to supplier terms and availability.
        </p>
        <p style="margin:0;color:#8c8478;font-size:11px;line-height:1.6;font-family:Georgia,serif;">
          You received this email because you completed the Resort Strategy Matcher at www.ceremonyverse.com.
        </p>
      </td>
    </tr>
  </table>
</div>`.trim()

  const textLines: string[] = [
    `Hi ${firstName},`,
    "",
    "Thank you for completing our Resort Strategy Matcher. I am already reviewing your layout needs, dietary timelines, and celebration preferences.",
    "",
  ]
  if (reviewRows.length) {
    textLines.push("What I'm reviewing:")
    reviewRows.forEach(([label, value]) => textLines.push(`- ${label}: ${value}`))
    textLines.push("")
  }
  textLines.push(
    "Your Custom Tracking Tracker is attached to this email — your personalized room-block matrix, dietary deadline dates, and traveling-vendor meal count, pre-filled from your answers.",
    "",
    `See which resorts can host your celebration: ${PORTAL_URL}`,
    `Lock in your free 15-minute Strategy Call: ${STRATEGY_CALL_URL}`,
    "",
    "Warmly,",
    "Mini Patel",
    "Founder, CeremonyVerse Destination Wedding Planning",
    "hello@ceremonyverse.com · +1 (215) 341-9990",
    "",
    LICENSING_STRING,
    "All travel bookings made via ceremonyversetravel.com are subject to supplier terms and availability.",
    "You received this email because you completed the Resort Strategy Matcher at www.ceremonyverse.com.",
  )

  return { subject, html, text: textLines.join("\n") }
}
