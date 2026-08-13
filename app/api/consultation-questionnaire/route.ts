import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import {
  ceremonyVerseBusinessEmail,
  escapeHtml,
  sendCeremonyVerseEmail,
} from "@/lib/consultation-email"

export const runtime = "nodejs"

const serviceFocusOptions = [
  "Destination wedding planning",
  "Destination Wedding Feasibility & Action Plan ($300)",
  "India wedding shopping and sourcing",
  "Both destination planning and India sourcing",
  "Not sure yet",
] as const

const relationshipOptions = ["Bride", "Groom", "Parent", "Family member", "Other"] as const

const dateFlexibilityOptions = [
  "Exact dates are fixed",
  "Month is fixed; dates are flexible",
  "Season or year only",
  "Dates are not decided",
] as const

const weekdayAvailabilityOptions = [
  "Yes — weekdays are possible",
  "Maybe — depends on pricing and travel",
  "No — weekends only",
  "Not sure yet",
] as const

const planningSupportOptions = [
  "No planner yet; need a complete one-stop solution",
  "Have a planner; need selected CeremonyVerse support",
  "Comparing planners or service scopes",
  "Not sure yet",
] as const

const eventOptions = [
  "Welcome event",
  "Mehndi",
  "Garba or Sangeet",
  "Pithi, Haldi, or Vidhi",
  "Wedding ceremony",
  "Reception",
  "Farewell event",
  "Other",
] as const

const optionalText = (max: number) => z.string().trim().max(max).optional().default("")

const questionnaireSchema = z.object({
  requestId: z.string().trim().uuid(),
  serviceFocus: z.enum(serviceFocusOptions),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  relationship: z.enum(relationshipOptions),
  decisionMakers: optionalText(500),
  weddingTimeframe: z.string().trim().min(2).max(120),
  dateFlexibility: z.union([z.enum(dateFlexibilityOptions), z.literal("")]),
  weekdayAvailability: z.union([z.enum(weekdayAvailabilityOptions), z.literal("")]),
  planningStage: optionalText(160),
  planningSupportStatus: z.union([z.enum(planningSupportOptions), z.literal("")]),
  destinationIdeas: optionalText(500),
  resortStatusDetails: optionalText(1200),
  likelyGuestCount: optionalText(8),
  maximumGuestCount: optionalText(8),
  guestsFromIndia: optionalText(8),
  events: z.array(z.enum(eventOptions)).max(eventOptions.length).optional().default([]),
  otherEvents: optionalText(300),
  essentialRequirements: optionalText(1800),
  comfortableBudget: optionalText(160),
  budgetMustCover: optionalText(1200),
  guestTravelPayment: optionalText(600),
  topPriorities: z.string().trim().min(2).max(1600),
  possibleSimplifications: optionalText(1200),
  biggestConcern: optionalText(1200),
  indiaSourcingNeeds: optionalText(1600),
  sourcingPartySize: optionalText(8),
  sourcingDeadline: optionalText(160),
  questionsForCall: optionalText(1600),
  privacyConsent: z.literal(true),
  website: optionalText(120),
})

type Questionnaire = z.infer<typeof questionnaireSchema>
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

function questionnaireRows(questionnaire: Questionnaire): Array<[string, string]> {
  return [
    ["Request ID", questionnaire.requestId],
    ["Consultation focus", questionnaire.serviceFocus],
    ["Name", questionnaire.name],
    ["Email", questionnaire.email],
    ["Relationship to the couple", questionnaire.relationship],
    ["Decision-makers", questionnaire.decisionMakers],
    ["Wedding timeframe", questionnaire.weddingTimeframe],
    ["Date flexibility", questionnaire.dateFlexibility],
    ["Weekday wedding events possible", questionnaire.weekdayAvailability],
    ["Current planning stage", questionnaire.planningStage],
    ["Planning support already in place or needed", questionnaire.planningSupportStatus],
    ["Destination ideas", questionnaire.destinationIdeas],
    ["Resorts, proposals, contracts, or deposits", questionnaire.resortStatusDetails],
    ["Likely guest count", questionnaire.likelyGuestCount],
    ["Maximum guest count", questionnaire.maximumGuestCount],
    ["Guests expected from India", questionnaire.guestsFromIndia],
    ["Planned events", questionnaire.events.join(", ")],
    ["Other events", questionnaire.otherEvents],
    ["Essential traditions, food, accessibility, or family needs", questionnaire.essentialRequirements],
    ["Total amount comfortable spending", questionnaire.comfortableBudget],
    ["What the budget must cover", questionnaire.budgetMustCover],
    ["Who will pay for guest rooms and travel", questionnaire.guestTravelPayment],
    ["Top three priorities", questionnaire.topPriorities],
    ["What may be simplified", questionnaire.possibleSimplifications],
    ["Biggest concern", questionnaire.biggestConcern],
    ["India-sourcing needs", questionnaire.indiaSourcingNeeds],
    ["People needing sourced outfits", questionnaire.sourcingPartySize],
    ["Outfit or item deadline", questionnaire.sourcingDeadline],
    ["Questions for the call", questionnaire.questionsForCall],
  ]
}

async function deliverQuestionnaireByEmail(questionnaire: Questionnaire): Promise<boolean> {
  const rows = questionnaireRows(questionnaire)
  const htmlRows = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><th style="text-align:left;vertical-align:top;padding:9px;border-bottom:1px solid #e6dfd5;width:34%">${escapeHtml(label)}</th><td style="padding:9px;border-bottom:1px solid #e6dfd5;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")
  const textRows = rows
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n\n")

  return sendCeremonyVerseEmail({
    to: ceremonyVerseBusinessEmail(),
    replyTo: questionnaire.email,
    subject: `Completed consultation questionnaire — ${questionnaire.name}`,
    html: `<h1 style="font-family:Georgia,serif">Completed CeremonyVerse pre-call questionnaire</h1><p>Reply to this email to contact the prospective client.</p><table style="border-collapse:collapse;width:100%;max-width:820px">${htmlRows}</table>`,
    text: `Completed CeremonyVerse pre-call questionnaire\n\n${textRows}`,
  })
}

async function deliverQuestionnaireToWebhook(questionnaire: Questionnaire): Promise<boolean> {
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
        event: "ceremonyverse.consultation.questionnaire.completed",
        requestId: questionnaire.requestId || null,
        submittedAt: new Date().toISOString(),
        questionnaire,
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

export async function POST(request: NextRequest) {
  if (!safeOrigin(request)) {
    return NextResponse.json({ success: false, error: "Invalid request origin." }, { status: 403 })
  }

  const contentLength = Number(request.headers.get("content-length") || 0)
  if (contentLength > 32_000) {
    return NextResponse.json({ success: false, error: "Request is too large." }, { status: 413 })
  }

  if (isRateLimited(requestIp(request))) {
    return NextResponse.json(
      { success: false, fallbackRequired: true, error: "Too many attempts. Please email your answers instead." },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    const rawBody = await request.text()
    if (Buffer.byteLength(rawBody, "utf8") > 32_000) {
      return NextResponse.json({ success: false, error: "Request is too large." }, { status: 413 })
    }
    body = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 })
  }

  const parsed = questionnaireSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Please review the required fields and try again." },
      { status: 400 },
    )
  }

  if (parsed.data.website) {
    return NextResponse.json({ success: true })
  }

  const [emailDelivered] = await Promise.all([
    deliverQuestionnaireByEmail(parsed.data),
    deliverQuestionnaireToWebhook(parsed.data),
  ])

  if (!emailDelivered) {
    return NextResponse.json(
      {
        success: false,
        fallbackRequired: true,
        error: "The questionnaire could not be delivered securely. Your answers are still on this page; please send them by email below.",
      },
      { status: 503 },
    )
  }

  return NextResponse.json({ success: true })
}
