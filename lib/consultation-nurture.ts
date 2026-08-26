import { buildNurtureOptOutUrl } from "@/lib/consultation-completion"
import { escapeHtml, sendCeremonyVerseEmail } from "@/lib/consultation-email"

interface NurtureState {
  requestId: string
  email?: string
  firstName?: string
  nurtureNote?: string
  nurtureStep?: number
}

interface NurtureMessage {
  subject: string
  html: string
  text: string
  nextDelayMs?: number
}

const day = 24 * 60 * 60 * 1000

function greeting(state: NurtureState): string {
  return escapeHtml(state.firstName?.trim() || "there")
}

function optionalNextQuestion(state: NurtureState): { html: string; text: string } {
  const note = state.nurtureNote?.trim()
  if (!note) return { html: "", text: "" }

  return {
    html: `<p>The next question from your consultation was:</p><p style="padding:16px 18px;border-left:3px solid #7a6841;background:#f4eee4"><strong>${escapeHtml(note)}</strong></p>`,
    text: `The next question from your consultation was:\n${note}\n\n`,
  }
}

function optOutFooter(state: NurtureState): { html: string; text: string } {
  const url = buildNurtureOptOutUrl("https://www.ceremonyverse.com", state.requestId)
  if (!url) {
    return {
      html: "<p style=\"font-size:12px;color:#6d625c\">You can ask to stop planning follow-ups at any time by replying to this email.</p>",
      text: "\nYou can ask to stop planning follow-ups at any time by replying to this email.",
    }
  }

  const safeUrl = escapeHtml(url)
  return {
    html: `<p style="font-size:12px;color:#6d625c">You requested these optional planning follow-ups after your consultation. <a href="${safeUrl}" style="color:#7a6841">Stop these follow-ups</a> at any time.</p>`,
    text: `\nYou requested these optional planning follow-ups after your consultation. Stop these follow-ups at any time: ${url}`,
  }
}

export function nurtureMessageFor(state: NurtureState): NurtureMessage | undefined {
  const step = Number(state.nurtureStep || 0)
  const name = greeting(state)
  const nextQuestion = optionalNextQuestion(state)
  const optOut = optOutFooter(state)
  const footerHtml = `<p style="margin-top:28px">Warmly,<br><strong>CeremonyVerse</strong><br><a href="https://www.ceremonyverse.com" style="color:#7a6841">ceremonyverse.com</a></p>${optOut.html}`
  const footerText = `\nWarmly,\nCeremonyVerse\nhttps://www.ceremonyverse.com${optOut.text}`

  if (step === 0) {
    return {
      subject: "Your next CeremonyVerse planning question",
      html: `<div style="font-family:Arial,sans-serif;color:#2f2925;line-height:1.65;max-width:680px;margin:0 auto"><p>Hi ${name},</p><p>Thank you for taking time for your free CeremonyVerse consultation. You do not need to solve the entire wedding at once; the most useful next move is usually to make one open question clear enough to compare in writing.</p>${nextQuestion.html}<p>If you receive a new proposal, answer, or family decision that changes the picture, you can reply to this email with the one detail that remains unresolved.</p>${footerHtml}</div>`,
      text: `Hi ${state.firstName?.trim() || "there"},\n\nThank you for taking time for your free CeremonyVerse consultation. You do not need to solve the entire wedding at once; the most useful next move is usually to make one open question clear enough to compare in writing.\n\n${nextQuestion.text}If you receive a new proposal, answer, or family decision that changes the picture, you can reply to this email with the one detail that remains unresolved.${footerText}`,
      nextDelayMs: 2 * day,
    }
  }

  if (step === 1) {
    return {
      subject: "Make the next answer easier to compare",
      html: `<div style="font-family:Arial,sans-serif;color:#2f2925;line-height:1.65;max-width:680px;margin:0 auto"><p>Hi ${name},</p><p>The free Destination Decision Map remains available whenever you want to return to the question in front of you. It separates <strong>guest reality</strong>, <strong>celebration rhythm</strong>, and the <strong>written evidence</strong> needed before a decision.</p><p style="margin:28px 0"><a href="https://www.ceremonyverse.com/destination-decision-map/" style="display:inline-block;border:1px solid #7a6841;color:#7a6841;text-decoration:none;padding:13px 22px;border-radius:999px;font-weight:700">Open the free Decision Map</a></p><p>It is open without an email gate. If you reply, let us know which of the three lenses is most active for your family.</p>${footerHtml}</div>`,
      text: `Hi ${state.firstName?.trim() || "there"},\n\nThe free Destination Decision Map remains available whenever you want to return to the question in front of you. It separates guest reality, celebration rhythm, and the written evidence needed before a decision.\n\nOpen the free Decision Map: https://www.ceremonyverse.com/destination-decision-map/\n\nIt is open without an email gate. If you reply, let us know which of the three lenses is most active for your family.${footerText}`,
      nextDelayMs: 4 * day,
    }
  }

  if (step === 2) {
    return {
      subject: "Choose the planning route that fits the question",
      html: `<div style="font-family:Arial,sans-serif;color:#2f2925;line-height:1.65;max-width:680px;margin:0 auto"><p>Hi ${name},</p><p>If you are comparing destinations or need to separate guest, ceremony, and budget questions, the free Decision Map and budget tool may be the right next resources.</p><p>If you already have one or two current proposals and need a formal written comparison, CeremonyVerse offers a separate <strong>$300 Destination Wedding Feasibility &amp; Action Plan</strong>. It is a paid service with a defined written scope; it does not promise savings, bookings, or venue outcomes.</p><p>Reply with the question you are deciding between if you would like help identifying which route fits.</p>${footerHtml}</div>`,
      text: `Hi ${state.firstName?.trim() || "there"},\n\nIf you are comparing destinations or need to separate guest, ceremony, and budget questions, the free Decision Map and budget tool may be the right next resources.\n\nIf you already have one or two current proposals and need a formal written comparison, CeremonyVerse offers a separate $300 Destination Wedding Feasibility & Action Plan. It is a paid service with a defined written scope; it does not promise savings, bookings, or venue outcomes.\n\nReply with the question you are deciding between if you would like help identifying which route fits.${footerText}`,
      nextDelayMs: 6 * day,
    }
  }

  if (step === 3) {
    return {
      subject: "Whenever the next question is ready",
      html: `<div style="font-family:Arial,sans-serif;color:#2f2925;line-height:1.65;max-width:680px;margin:0 auto"><p>Hi ${name},</p><p>Destination-wedding planning often moves in stages as family conversations, travel assumptions, and resort responses take shape.</p><p>If the question from your consultation is still active, reply with the one answer you are waiting for and CeremonyVerse will help identify the right next planning route. If the timing is not right, no reply is needed.</p><p>The free Destination Decision Map remains available whenever you are ready: <a href="https://www.ceremonyverse.com/destination-decision-map/" style="color:#7a6841">ceremonyverse.com/destination-decision-map</a>.</p>${footerHtml}</div>`,
      text: `Hi ${state.firstName?.trim() || "there"},\n\nDestination-wedding planning often moves in stages as family conversations, travel assumptions, and resort responses take shape.\n\nIf the question from your consultation is still active, reply with the one answer you are waiting for and CeremonyVerse will help identify the right next planning route. If the timing is not right, no reply is needed.\n\nThe free Destination Decision Map remains available whenever you are ready: https://www.ceremonyverse.com/destination-decision-map/${footerText}`,
    }
  }

  return undefined
}

export async function sendNurtureMessage(state: NurtureState): Promise<{ sent: boolean; nextDueAt?: number }> {
  if (!state.email) return { sent: false }
  const message = nurtureMessageFor(state)
  if (!message) return { sent: false }

  const sent = await sendCeremonyVerseEmail({
    to: state.email,
    replyTo: "hello@ceremonyverse.com",
    subject: message.subject,
    html: message.html,
    text: message.text,
    idempotencyKey: `consultation-nurture-${state.requestId}-${Number(state.nurtureStep || 0)}`,
  })

  return { sent, nextDueAt: message.nextDelayMs ? Date.now() + message.nextDelayMs : undefined }
}
