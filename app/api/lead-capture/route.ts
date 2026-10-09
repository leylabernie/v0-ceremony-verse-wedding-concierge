import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createHash } from "node:crypto";
import { sendCeremonyVerseEmail, ceremonyVerseBusinessEmail, escapeHtml } from "@/lib/consultation-email";
import { buildCalculatorResultsEmail } from "@/lib/emails/calculator-results";
import { buildWelcomeLeadEmail } from "@/lib/emails/welcome-lead";
import { buildStrategyMatchEmail } from "@/lib/emails/strategy-match-confirmation";

export const runtime = "nodejs";

// Customer-facing success requires the requested email and a confirmed business handoff.

const optionalText = (max: number) =>
  z.string().trim().max(max).optional().default("");

const leadCaptureSchema = z.object({
  // Required
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  // Optional contact
  whatsapp: optionalText(40),
  // Source context
  source: optionalText(40), // "calculator" | "chat" | ...
  calculatorType: optionalText(60),
  pageUrl: optionalText(500),
  destination: optionalText(160),
  // CRM detail (all optional; chat/calculator may supply a subset)
  targetDates: optionalText(80),
  guestCount: optionalText(16),
  eventsPlanned: optionalText(300),
  budgetRange: optionalText(80),
  // Escalation
  escalationFlag: z.boolean().optional().default(false),
  escalationReason: optionalText(200),
  // Arbitrary calculator results payload (kept as JSON string or object)
  results: z.unknown().optional(),
  // Honeypot
  website: optionalText(120),
});

type LeadCapture = z.infer<typeof leadCaptureSchema>;

/** CRM field mapping shared with the Google Sheet / HubSpot schema. */
function buildCrmRecord(lead: LeadCapture, requestId: string) {
  return {
    requestId,
    timestamp: new Date().toISOString(),
    name: lead.name,
    email: lead.email,
    phone: lead.whatsapp,
    whatsapp: lead.whatsapp,
    stage: lead.source === "chat" ? "chat-lead" : "calculator-lead",
    destination: lead.destination,
    targetDates: lead.targetDates,
    guestCount: lead.guestCount,
    eventsPlanned: lead.eventsPlanned,
    budgetRange: lead.budgetRange,
    siteSource: "ceremonyverse.com",
    nextStep: lead.source === "chat" ? "follow-up" : "email-results",
    status: "New Lead",
    offerTag: lead.source === "chat" ? "chat" : "calculator",
    calculatorType: lead.calculatorType,
    pageUrl: lead.pageUrl,
    escalationFlag: lead.escalationFlag,
    escalationReason: lead.escalationReason,
    results: lead.results ?? null,
  };
}

async function postJson(
  url: string | undefined,
  payload: unknown,
  timeoutMs = 8000,
): Promise<boolean> {
  const target = url?.trim();
  if (!target) return false;

  let parsed: URL;
  try {
    parsed = new URL(target);
  } catch {
    return false;
  }
  if (parsed.protocol !== "https:") return false;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(parsed, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });
    return response.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function sendConfirmationEmail(lead: LeadCapture, key: string): Promise<boolean> {
  if (lead.source === "chat") return false;
  const message = lead.source === "room-block-tracker"
    ? buildWelcomeLeadEmail({ name: lead.name, targetDates: lead.targetDates })
    : lead.source === "strategy-matcher"
      ? buildStrategyMatchEmail({ name: lead.name, email: lead.email, results: lead.results })
      : buildCalculatorResultsEmail(lead);
  return sendCeremonyVerseEmail({
    to: lead.email,
    replyTo: ceremonyVerseBusinessEmail(),
    ...message,
    idempotencyKey: `lead-customer-${key}`,
  });
}

async function sendBusinessHandoff(lead: LeadCapture, requestId: string, key: string): Promise<boolean> {
  const { timestamp: _timestamp, ...record } = buildCrmRecord(lead, requestId);
  const details = JSON.stringify(record, null, 2);
  return sendCeremonyVerseEmail({
    to: ceremonyVerseBusinessEmail(),
    replyTo: lead.email,
    subject: `CeremonyVerse ${lead.source === "chat" ? "chat" : "calculator"} request — ${lead.name}`,
    text: details,
    html: `<h1>New CeremonyVerse request</h1><pre style="white-space:pre-wrap">${escapeHtml(details)}</pre>`,
    idempotencyKey: `lead-business-${key}`,
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ success: false, error: "Invalid request origin." }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  if (JSON.stringify(body).length > 100_000) {
    return NextResponse.json({ success: false, error: "This worksheet is too large to email." }, { status: 413 });
  }
  const parsed = leadCaptureSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Please provide at least a name and a valid email." },
      { status: 400 },
    );
  }

  // Honeypot: silently accept bot submissions.
  if (parsed.data.website) {
    return NextResponse.json({ success: true });
  }

  const lead = parsed.data;
  // Retries of the same request reuse provider idempotency keys within the day.
  const key = createHash("sha256").update(JSON.stringify({
    ...lead, day: new Date().toISOString().slice(0, 10),
  })).digest("hex");
  const requestId = key.slice(0, 32);
  const crmRecord = buildCrmRecord(lead, requestId);

  // 2-5. Fire best-effort integrations in parallel.
  const [sheetDelivered, confirmationSent, businessDelivered] = await Promise.all([
    postJson(process.env.LEAD_SHEET_WEBHOOK_URL, {
      event: "ceremonyverse.lead.captured",
      ...crmRecord,
    }),
    sendConfirmationEmail(lead, key),
    sendBusinessHandoff(lead, requestId, key),
  ]);

  const handoffConfirmed = sheetDelivered || businessDelivered;
  const emailRequired = lead.source !== "chat";
  const success = handoffConfirmed && (!emailRequired || confirmationSent);

  // A requested worksheet email is not consent for an automated marketing sequence.
  if (!success) {
    return NextResponse.json({
      success: false,
      error: confirmationSent
        ? "Your email was sent, but we could not confirm Mini received your request. Please contact hello@ceremonyverse.com."
        : "We could not confirm delivery. Please try again or contact hello@ceremonyverse.com.",
      delivery: { sheet: sheetDelivered, business: businessDelivered, confirmationEmail: confirmationSent },
    }, { status: 503 });
  }

  if (lead.escalationFlag) {
    await postJson(process.env.ESCALATION_WEBHOOK_URL, {
      event: "ceremonyverse.lead.escalation", requestId,
      name: lead.name, whatsapp: lead.whatsapp, destination: lead.destination,
      guestCount: lead.guestCount, budget: lead.budgetRange,
      weddingDate: lead.targetDates, trigger: lead.escalationReason || "hot-lead",
      siteSource: "ceremonyverse.com",
    });
  }
  return NextResponse.json({
    success: true, requestId,
    delivery: { sheet: sheetDelivered, business: businessDelivered, confirmationEmail: confirmationSent },
  });
}
