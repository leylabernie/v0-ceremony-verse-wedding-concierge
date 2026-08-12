import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import {
  ceremonyVerseBusinessEmail,
  escapeHtml,
  sendCeremonyVerseEmail,
} from "@/lib/consultation-email"

export const runtime = "nodejs"

const serviceOptions = [
  "India shopping",
  "Destination wedding planning",
  "Destination Wedding Feasibility & Action Plan ($300)",
  "India shopping + destination wedding planning",
  "Not sure",
] as const

const clientCountryOptions = ["United States", "Canada", "Other"] as const

const optionalText = (max: number) => z.string().trim().max(max).optional().default("")

const leadSchema = z.object({
  serviceInterest: z.enum(serviceOptions),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: optionalText(40),
  clientCountry: z.enum(clientCountryOptions),
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
const rateLimitWindowMs = 10 * 60 * 1000
const rateLimitMax = 8

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

async function sendQuestionnaireInvitation(lead: Lead, url: URL, requestId: string): Promise<boolean> {
  const firstName = lead.name.trim().split(/\s+/)[0] || lead.name.trim()
  const safeFirstName = escapeHtml(firstName)
  const safeUrl = escapeHtml(url.toString())
  const safeSchedulingUrl = escapeHtml(schedulingUrl(lead, requestId))
  const businessEmail = ceremonyVerseBusinessEmail()

  const html = `
    <div style="font-family:Arial,sans-serif;color:#2f2925;line-height:1.65;max-width:680px;margin:0 auto">
      <p>Hi ${safeFirstName},</p>
      <p>Thank you for reaching out to CeremonyVerse. Your consultation request was received through our website.</p>
      <p>You can request a consultation time now—there is no prior review or approval wait. Please also complete the short questionnaire before the call so CeremonyVerse can prepare around your wedding timing, guest count, events, budget scope, family priorities, and any India-sourcing needs.</p>
      <p style="margin:28px 0"><a href="${safeSchedulingUrl}" style="display:inline-block;background:#128c7e;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:999px;font-weight:700">Request my consultation time</a></p>
      <p style="margin:28px 0"><a href="${safeUrl}" style="display:inline-block;border:1px solid #7a6841;color:#7a6841;text-decoration:none;padding:13px 22px;border-radius:999px;font-weight:700">Complete the pre-call questionnaire</a></p>
      <p>Scheduling and questionnaire completion can happen in either order, but the questionnaire is due before the call. Most questions are optional and it usually takes 5–7 minutes. If you already have a resort proposal, room-block information, or vendor estimate, keep it nearby for the call. Please do not upload or email passport numbers, payment-card details, medical records, or other sensitive documents.</p>
      <p>Warmly,<br><strong>CeremonyVerse Client Services</strong><br><a href="mailto:${escapeHtml(businessEmail)}" style="color:#7a6841">${escapeHtml(businessEmail)}</a><br><a href="https://www.ceremonyverse.com" style="color:#7a6841">ceremonyverse.com</a></p>
    </div>
  `

  const text = `Hi ${firstName},

Thank you for reaching out to CeremonyVerse. Your consultation request was received through our website.

You can request a consultation time now—there is no prior review or approval wait. Please also complete the short questionnaire before the call so CeremonyVerse can prepare.

Request a consultation time: ${schedulingUrl(lead, requestId)}

Complete the pre-call questionnaire: ${url.toString()}

Scheduling and questionnaire completion can happen in either order, but the questionnaire is due before the call. Most questions are optional and it usually takes 5–7 minutes. If you already have a resort proposal, room-block information, or vendor estimate, keep it nearby for the call. Please do not upload or email passport numbers, payment-card details, medical records, or other sensitive documents.

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

  const requestId = crypto.randomUUID()
  const formQuestionnaireUrl = questionnaireUrl(request, parsed.data, requestId)
  const [webhookDelivered, emailDelivered] = await Promise.all([
    deliverToWebhook(parsed.data, requestId),
    deliverByEmail(parsed.data, requestId),
  ])
  const delivered = webhookDelivered || emailDelivered

  if (!delivered) {
    return NextResponse.json(
      {
        success: false,
        fallbackRequired: true,
        error: "Secure form delivery is temporarily unavailable. Please use WhatsApp or email below so your request is not lost.",
      },
      { status: 503 },
    )
  }

  const questionnaireSent = await sendQuestionnaireInvitation(parsed.data, formQuestionnaireUrl, requestId)

  return NextResponse.json({
    success: true,
    questionnaireSent,
    questionnaireUrl: `${formQuestionnaireUrl.pathname}${formQuestionnaireUrl.search}`,
    requestId,
  })
}
