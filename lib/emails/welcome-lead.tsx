import { escapeHtml } from "@/lib/consultation-email"

/**
 * Automated welcome email for new leads — currently wired to the Master
 * Room-Block Spreadsheet Tracker lead capture (source: "room-block-tracker")
 * in /api/lead-capture. Written in Mini's own voice per agents.md.
 *
 * Brand rules honored here:
 *  - Main site referenced as https://www.ceremonyverse.com (www-canonical)
 *  - Booking portal referenced as https://ceremonyversetravel.com (apex-canonical)
 *  - Host-agency disclosure included because the email promotes the booking portal
 */

const TRACKER_URL = "https://www.ceremonyverse.com/downloads/room-block-tracker.xlsx"
const CONSULT_URL = "https://www.ceremonyverse.com/contact/?service=mexico&from=room-block-tracker-email"
const MAIN_SITE = "https://www.ceremonyverse.com"
const TRAVEL_PORTAL = "https://ceremonyversetravel.com"
const DISCLOSURE =
  "CeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc., Florida Seller of Travel No. FST ST15578. Full seller-of-travel credentials: https://www.ceremonyverse.com/terms/"

export interface WelcomeLeadInput {
  /** Raw lead name; only the first word is used and it is HTML-escaped. */
  name: string
  /** Optional free-text expected wedding date captured by the lead form. */
  targetDates?: string
}

export function buildWelcomeLeadEmail(lead: WelcomeLeadInput): {
  subject: string
  html: string
  text: string
} {
  const firstName = escapeHtml((lead.name.trim().split(/\s+/)[0] || "there").replace(/[^\p{L}\p{M}\s'.-]/gu, ""))
  const targetDates = lead.targetDates?.trim()

  const subject = `${firstName === "there" ? "Your Master Room-Block Tracker" : `${firstName}, your Master Room-Block Tracker`} — from Mini Patel`

  const dateLine = targetDates
    ? `<p style="margin:0 0 14px">I&apos;ve made a note of your expected wedding date as <strong>${escapeHtml(targetDates)}</strong> — hold that week loosely until the resort confirms it in writing, but it shapes everything we plan first.</p>`
    : ""

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
        <p style="margin:0 0 16px;">It&apos;s <strong>Mini Patel</strong> — founder of CeremonyVerse. Thank you for requesting
        the <strong>Master Room-Block Spreadsheet Tracker</strong>. This is the exact tracker my family built across three
        destination weddings in Mexico, and the one I now set up for every NRI Gujarati and Hindu family I work with
        across the USA and Canada.</p>
        <p style="margin:0 0 18px;">Your copy is here:</p>
        <p style="margin:0 0 18px;text-align:center;">
          <a href="${TRACKER_URL}" style="display:inline-block;background-color:#7a6841;color:#ffffff;text-decoration:none;padding:13px 26px;border-radius:999px;font-weight:bold;font-size:15px;">Download the Tracker (Excel)</a>
        </p>
        ${dateLine}
        <p style="margin:0 0 16px;">A quick idea of what this is: guests fill one row each — building, floor, dietary
        requirement, accessibility needs — and the live counts tell you how many Jain meals and elder-accessible rooms
        to confirm in writing <em>before</em> you sign the resort proposal. The room block is where destination weddings
        quietly hurt families; this keeps it from happening to yours.</p>
        <h2 style="font-size:17px;margin:24px 0 10px;color:#7a6841;">Free 15-minute Resort Strategy Call</h2>
        <p style="margin:0 0 16px;">If you tell me your guest count and dietary needs, I&apos;ll review them against your
        resort shortlist and flag what your proposal is missing — buildings, event spaces, Jain and satvik kitchens,
        day passes for elders. No cost, no obligation.</p>
        <p style="margin:0 0 20px;text-align:center;">
          <a href="${CONSULT_URL}" style="display:inline-block;background-color:#1f1f1f;color:#ffffff;text-decoration:none;padding:13px 26px;border-radius:999px;font-weight:bold;font-size:15px;">Book My Free Strategy Call</a>
        </p>
        <h2 style="font-size:17px;margin:24px 0 10px;color:#7a6841;">How CeremonyVerse works</h2>
        <p style="margin:0 0 12px;">Planning — proposals, event spaces, catering requirements, room-block contracts —
        lives at <a href="${MAIN_SITE}" style="color:#7a6841;">www.ceremonyverse.com</a>, where every guide is written
        from firsthand family experience.</p>
        <p style="margin:0 0 12px;">Your guests book their own resort rooms and cruises at
        <a href="${TRAVEL_PORTAL}" style="color:#7a6841;">ceremonyversetravel.com</a> — one link you can drop in the
        family WhatsApp group instead of chasing forty cousins.</p>
        <p style="margin:0 0 8px;">Warmly,</p>
        <p style="margin:0 0 4px;"><strong>Mini Patel</strong></p>
        <p style="margin:0 0 20px;color:#5e4a40;">Founder, CeremonyVerse Destination Wedding Planning<br/>
        <a href="mailto:hello@ceremonyverse.com" style="color:#7a6841;">hello@ceremonyverse.com</a> · +1 (215) 341-9990</p>
      </td>
    </tr>
    <tr>
      <td style="background-color:#f8f6f2;padding:16px 32px;border-top:1px solid #e6dfd5;">
        <p style="margin:0;color:#8c8478;font-size:11px;line-height:1.6;font-family:Georgia,serif;">
          CeremonyVerse plans Gujarati and Hindu destination weddings across Mexico, Jamaica, and Punta Cana for
          South Asian families across the USA and Canada. All travel bookings made via ceremonyversetravel.com are
          subject to supplier terms and availability.<br/>${DISCLOSURE}<br/>
          You received this email because you requested the Master Room-Block Spreadsheet Tracker.
        </p>
      </td>
    </tr>
  </table>
</div>`.trim()

  const text = [
    `Hi ${firstName},`,
    "",
    `It's Mini Patel — founder of CeremonyVerse. Thank you for requesting the Master Room-Block Spreadsheet Tracker.`,
    `Download it here: ${TRACKER_URL}`,
    targetDates ? `I've noted your expected wedding date as ${targetDates} — hold it loosely until the resort confirms in writing.` : "",
    "",
    `Want a second pair of eyes? Book a free 15-minute Resort Strategy Call and I'll review your guest count and dietary needs against your resort shortlist: ${CONSULT_URL}`,
    "",
    `Planning guides live at ${MAIN_SITE}. Your guests book resort rooms and cruises at ${TRAVEL_PORTAL}.`,
    "",
    "Warmly,",
    "Mini Patel",
    "Founder, CeremonyVerse Destination Wedding Planning",
    "hello@ceremonyverse.com · +1 (215) 341-9990",
    "",
    "All travel bookings made via ceremonyversetravel.com are subject to supplier terms and availability.",
    DISCLOSURE,
    "You received this email because you requested the Master Room-Block Spreadsheet Tracker.",
  ]
    .filter((line) => line !== "")
    .join("\n")

  return { subject, html, text }
}
