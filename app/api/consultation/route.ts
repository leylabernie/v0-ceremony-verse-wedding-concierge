import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

export const runtime = "nodejs"

const serviceOptions = [
  "India shopping",
  "Destination wedding planning",
  "India shopping + destination wedding planning",
  "Not sure",
] as const

const optionalText = (max: number) => z.string().trim().max(max).optional().default("")

const leadSchema = z.object({
  serviceInterest: z.enum(serviceOptions),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: optionalText(40),
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

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;",
    }
    return entities[character]
  })
}

function leadRows(lead: Lead): Array<[string, string]> {
  return [
    ["Service", lead.serviceInterest],
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone / WhatsApp", lead.phone],
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

async function deliverToWebhook(lead: Lead): Promise<boolean> {
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

async function deliverByEmail(lead: Lead): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.CEREMONYVERSE_LEAD_FROM_EMAIL?.trim()
  const to = process.env.CEREMONYVERSE_LEAD_TO_EMAIL?.trim() || "bhamini@ceremonyverse.com"

  if (!apiKey || !from) return false

  const rows = leadRows(lead)
  const htmlRows = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><th style="text-align:left;vertical-align:top;padding:8px;border-bottom:1px solid #e6dfd5">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #e6dfd5;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: lead.email,
        subject: `CeremonyVerse consultation request — ${lead.name}`,
        html: `<h1 style="font-family:Georgia,serif">New CeremonyVerse consultation request</h1><table style="border-collapse:collapse;width:100%;max-width:760px">${htmlRows}</table>`,
      }),
      cache: "no-store",
    })

    return response.ok
  } catch {
    return false
  }
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

  const delivered = (await deliverToWebhook(parsed.data)) || (await deliverByEmail(parsed.data))

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

  return NextResponse.json({ success: true })
}
