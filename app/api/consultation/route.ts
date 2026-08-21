import { NextRequest, NextResponse } from "next/server"
import { createHash } from "node:crypto"
import { z } from "zod"
import {
  ceremonyVerseBusinessEmail,
  escapeHtml,
  sendCeremonyVerseEmail,
} from "@/lib/consultation-email"
import { consultationDedupeKey } from "@/lib/consultation-dedup.mjs"
import {
  consultationRequestDedupeHash,
  createConsultationRequestStateStore,
} from "@/lib/consultation-request-state.mjs"
import { finalizeConsultationRegistration } from "@/lib/consultation-registration-lifecycle.mjs"

export const runtime = "nodejs"

const serviceOptions = [
  "India shopping",
  "Destination wedding planning",
  "Destination Wedding Feasibility & Action Plan ($300)",
  "India shopping + destination wedding planning",
  "Not sure",
] as const

const optionalText = (max: number) => z.string().trim().max(max).optional().default("")

const leadSchema = z.object({
  serviceInterest: z.enum(serviceOptions),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: optionalText(40),
  clientCountry: optionalText(40),
  eventTimeframe: z.string().trim().min(2).max(80),
  eventLocation: optionalText(160),
  guestCount: optionalText(8),
  eventCount: optionalText(8),
  budgetRange: optionalText(80),
  budgetIncludes: optionalText(500),
  travelOrigins: optionalText(300),
  outfitPartySize: optionalText(8),
  vision: optionalText(3000),
  referralSource: optionalText(120),
  privacyConsent: z.literal(true),
  website: optionalText(120),
  submissionId: z.string().trim().uuid().optional(),
  attribution: z
    .object({
      source: optionalText(120),
      medium: optionalText(120),
      campaign: optionalText(160),
      content: optionalText(160),
      term: optionalText(160),
      landing_page: optionalText(300),
      referrer: optionalText(500),
      gclid: optionalText(200),
    })
    .optional(),
})

type Lead = z.infer<typeof leadSchema>

type RateLimitRecord = { count: number; resetAt: number }

const rateLimitStore = new Map<string, RateLimitRecord>()
const consultationRequestStateStore = createConsultationRequestStateStore()
const rateLimitWindowMs = 10 * 60 * 1000
const rateLimitMax = 8

function emailIdempotencyKey(prefix: string, lead: Lead): string {
  const digest = createHash("sha256")
    .update(consultationDedupeKey([lead.email, lead.name, lead.serviceInterest, lead.eventTimeframe]))
    .digest("hex")
  return `${prefix}-${digest}`
}

function requestIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const current = rateLimitStore.get(ip)

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs })
    return false
  }

  current.count += 1
  rateLimitStore.set(ip, current)
  return current.count > rateLimitMax
}

function safeOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin")
  if (!origin) return true

  try {
    const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim()
    const requestHost = forwardedHost || request.headers.get("host") || request.nextUrl.host
    return new URL(origin).host === requestHost
  } catch {
    return false
  }
}

function leadRows(lead: Lead, requestId: string): Array<[string, string]> {
  return [
    ["Request ID", requestId],
    ["Service", lead.serviceInterest],
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone / WhatsApp", lead.phone],
    ["Home country", lead.clientCountry],
    ["Wedding timeframe", lead.eventTimeframe],
    ["Destination or location", lead.eventLocation],
    ["Estimated guests", lead.guestCount],
    ["Number of events", lead.eventCount],
    ["Budget range", lead.budgetRange],
    ["What the budget must cover", lead.budgetIncludes],
    ["Guest travel origins", lead.travelOrigins],
    ["Outfit party size", lead.outfitPartySize],
    ["Priorities and concerns", lead.vision],
    ["How they found CeremonyVerse", lead.referralSource],
    ["First-touch source", lead.attribution?.source || "direct"],
    ["First-touch medium", lead.attribution?.medium || "none"],
    ["Campaign", lead.attribution?.campaign || ""],
    ["Landing page", lead.attribution?.landing_page || ""],
    ["Referrer", lead.attribution?.referrer || ""],
    ["Google click ID", lead.attribution?.gclid || ""],
  ]
}

async function deliverToWebhook(lead: Lead, requestId: string): Promise<boolean> {
  const webhookUrl = process.env.CEREMONYVERSE_LEAD_WEBHOOK_URL?.trim()
  if (!webhookUrl) return false

  let url: URL
  try {
    url = new URL(webhookUrl)
  } catch {
    return false
  }

  if (url.protocol !== "https:") return false

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8_000)

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CEREMONYVERSE_LEAD_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.CEREMONYVERSE_LEAD_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify({
        event: "ceremonyverse.consultation.requested",
        requestId,
        submittedAt: new Date().toISOString(),
        lead,
      }),
      cache: "no-store",
      signal: controller.signal,
    })

    return response.ok
  } catch {
    return false
  } finally {
    clearTimeout(timeout)
  }
}

async function deliverByEmail(lead: Lead, requestId: string): Promise<boolean> {
  const rows = leadRows(lead, requestId)
  const htmlRows = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><th style="text-align:left;vertical-align:top;padding:8px;border-bottom:1px solid #e6dfd5">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #e6dfd5;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")

  const textRows = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n\n")

  return sendCeremonyVerseEmail({
    to: ceremonyVerseBusinessEmail(),
    replyTo: lead.email,
    subject: `CeremonyVerse consultation request — ${lead.name}`,
    html: `<h1 style="font-family:Georgia,serif">New CeremonyVerse consultation request</h1><table style="border-collapse:collapse;width:100%;max-width:760px">${htmlRows}</table>`,
    text: `New CeremonyVerse consultation request\n\n${textRows}`,
    idempotencyKey: emailIdempotencyKey("consultation-owner", lead),
  })
}

function questionnaireType(serviceInterest: Lead["serviceInterest"]): string {
  if (serviceInterest === "India shopping") return "india"
  if (serviceInterest === "Destination Wedding Feasibility & Action Plan ($300)") return "feasibility"
  if (serviceInterest === "India shopping + destination wedding planning") return "both"
  if (serviceInterest === "Destination wedding planning") return "destination"
  return "unsure"
}

function questionnaireUrl(request: NextRequest, lead: Lead, requestId: string): URL {
  const origin = request.headers.get("origin") || request.nextUrl.origin
  const url = new URL("/consultation-questionnaire/", origin)
  url.searchParams.set("request", requestId)
  url.searchParams.set("type", questionnaireType(lead.serviceInterest))
  return url
}

function schedulingUrl(lead: Lead, requestId: string): string {
  const message = [
    "Hello CeremonyVerse, I registered on the website and would like to request a time for my free 30-minute consultation.",
    `Request ID: ${requestId}`,
    `Name: ${lead.name}`,
    `Service: ${lead.serviceInterest}`,
  ].join("\n")
  return `https://wa.me/12153419990?text=${encodeURIComponent(message)}`
}

function schedulingEmailUrl(lead: Lead, requestId: string, businessEmail: string): string {
  const message = [
    "Hello CeremonyVerse, I registered on the website and would like to arrange my free 30-minute consultation.",
    `Request ID: ${requestId}`,
    `Name: ${lead.name}`,
    `Service: ${lead.serviceInterest}`,
    "My preferred dates and times are:",
  ].join("\n")
  return `mailto:${businessEmail}?subject=${encodeURIComponent("Arrange my CeremonyVerse consultation")}&body=${encodeURIComponent(message)}`
}

async function sendQuestionnaireInvitation(lead: Lead, url: URL, requestId: string): Promise<boolean> {
  const firstName = lead.name.trim().split(/\s+/)[0] || lead.name.trim()
  const safeFirstName = escapeHtml(firstName)
  const safeUrl = escapeHtml(url.toString())
  const safeSchedulingUrl = escapeHtml(schedulingUrl(lead, requestId))
  const businessEmail = ceremonyVerseBusinessEmail()
  const safeSchedulingEmailUrl = escapeHtml(schedulingEmailUrl(lead, requestId, businessEmail))

  const html = `
    <div style="font-family:Arial,sans-serif;color:#2f2925;line-height:1.65;max-width:680px;margin:0 auto">
      <p>Hi ${safeFirstName},</p>
      <p>Thank you for reaching out to CeremonyVerse. Your consultation request was received through our website.</p>
      <p>Share your preferred dates and times by WhatsApp, phone, or email, then complete the short questionnaire before the call so Mini can prepare.</p>
      <p style="margin:28px 0">
        <a href="${safeSchedulingUrl}" style="display:inline-block;background:#128c7e;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:999px;font-weight:700;margin:0 8px 8px 0">WhatsApp availability</a>
        <a href="tel:+12153419990" style="display:inline-block;background:#7a6841;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:999px;font-weight:700;margin:0 8px 8px 0">Call (215) 341-9990</a>
        <a href="${safeSchedulingEmailUrl}" style="display:inline-block;border:1px solid #7a6841;color:#7a6841;text-decoration:none;padding:12px 21px;border-radius:999px;font-weight:700;margin:0 0 8px">Email preferred times</a>
      </p>
      <p>Mini confirms the agreed time directly after you share availability. No payment or calendar account is required.</p>
      <p>If you have already completed a questionnaire for this request, you do not need to complete it again. Please use the same request link or reply to this email if you need help.</p>
      <p style="margin:28px 0"><a href="${safeUrl}" style="display:inline-block;border:1px solid #7a6841;color:#7a6841;text-decoration:none;padding:13px 22px;border-radius:999px;font-weight:700">Complete the pre-call questionnaire</a></p>
      <p>You may complete these steps in either order. Only the essentials are required, and most couples finish the questionnaire in 3–5 minutes. Keep any resort proposal or estimate nearby for the call; please do not send sensitive personal or payment information.</p>
      <p>Warmly,<br><strong>CeremonyVerse Client Services</strong><br><a href="mailto:${escapeHtml(businessEmail)}" style="color:#7a6841">${escapeHtml(businessEmail)}</a><br><a href="https://www.ceremonyverse.com" style="color:#7a6841">ceremonyverse.com</a></p>
    </div>
  `

  const text = `Hi ${firstName},

Thank you for reaching out to CeremonyVerse. Your consultation request was received through our website.

Share your preferred dates and times by WhatsApp, phone, or email, then complete the short questionnaire before the call so Mini can prepare.

WhatsApp availability: ${schedulingUrl(lead, requestId)}
Call: +1 (215) 341-9990
Email preferred times: ${schedulingEmailUrl(lead, requestId, businessEmail)}

Mini confirms the agreed time directly after you share availability. No payment or calendar account is required.

If you have already completed a questionnaire for this request, you do not need to complete it again. Please use the same request link or reply to this email if you need help.

Complete the pre-call questionnaire: ${url.toString()}

You may complete these steps in either order. Only the essentials are required, and most couples finish the questionnaire in 3–5 minutes. Keep any resort proposal or estimate nearby for the call; please do not send sensitive personal or payment information.

Warmly,
CeremonyVerse Client Services
${businessEmail}
https://www.ceremonyverse.com`

  return sendCeremonyVerseEmail({
    to: lead.email,
    replyTo: businessEmail,
    subject: "Your CeremonyVerse consultation questionnaire",
    html,
    text,
    idempotencyKey: emailIdempotencyKey("consultation-questionnaire", lead),
  })
}

export async function POST(request: NextRequest) {
  if (!safeOrigin(request)) {
    return NextResponse.json({ success: false, error: "Invalid request origin." }, { status: 403 })
  }

  const contentLength = Number(request.headers.get("content-length") || 0)
  if (contentLength > 24_000) {
    return NextResponse.json({ success: false, error: "Request is too large." }, { status: 413 })
  }

  if (isRateLimited(requestIp(request))) {
    return NextResponse.json(
      { success: false, fallbackRequired: true, error: "Too many attempts. Please use WhatsApp or email." },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    const rawBody = await request.text()
    if (Buffer.byteLength(rawBody, "utf8") > 24_000) {
      return NextResponse.json({ success: false, error: "Request is too large." }, { status: 413 })
    }
    body = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Please review the required fields and try again." },
      { status: 400 },
    )
  }

  if (parsed.data.website) {
    return NextResponse.json({ success: true })
  }

  const dedupeKey = parsed.data.submissionId || consultationDedupeKey([
    parsed.data.email,
    parsed.data.name,
    parsed.data.serviceInterest,
    parsed.data.eventTimeframe,
  ])
  const dedupeHash = consultationRequestDedupeHash(dedupeKey)
  const initialRequestId = crypto.randomUUID()
  const initialQuestionnaireUrl = questionnaireUrl(request, parsed.data, initialRequestId)
  const initialQuestionnairePath = `${initialQuestionnaireUrl.pathname}${initialQuestionnaireUrl.search}`

  let result
  try {
    result = await finalizeConsultationRegistration({
      stateStore: consultationRequestStateStore,
      dedupeHash,
      initialState: {
        requestId: initialRequestId,
        questionnaireUrl: initialQuestionnairePath,
      },
      deliverLead: async (requestId: string) => {
        const [webhookDelivered, emailDelivered] = await Promise.all([
          deliverToWebhook(parsed.data, requestId),
          deliverByEmail(parsed.data, requestId),
        ])
        return webhookDelivered || emailDelivered
      },
      sendQuestionnaire: async (state: { requestId: string; questionnaireUrl: string }) => {
        const url = new URL(state.questionnaireUrl, request.nextUrl.origin)
        return sendQuestionnaireInvitation(parsed.data, url, state.requestId)
      },
    })
  } catch {
    return NextResponse.json(
      {
        success: false,
        fallbackRequired: true,
        error: "Secure request tracking is temporarily unavailable. Please use WhatsApp or email below so your request is not lost.",
      },
      { status: 503 },
    )
  }

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        fallbackRequired: true,
        error: "Secure form delivery is temporarily unavailable. Please use WhatsApp or email below so your request is not lost.",
      },
      { status: 503 },
    )
  }

  return NextResponse.json(result)
}
