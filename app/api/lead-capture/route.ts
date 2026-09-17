import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { buildWelcomeLeadEmail } from "@/lib/emails/welcome-lead";

export const runtime = "nodejs";

/**
 * Lead-capture endpoint for Mini's Assistant surfaces:
 *  - Calculator "email me these results" offers (source: "calculator")
 *  - Chat-widget lead handoffs (source: "chat")
 *
 * Behaviour:
 *  1. Validates required fields (name, email).
 *  2. Logs the lead to the server console (placeholder for CRM integration).
 *  3. Forwards the mapped CRM record to LEAD_SHEET_WEBHOOK_URL if set
 *     (Zapier/Make webhook -> Google Sheet row).
 *  4. If escalationFlag is true, also POSTs an alert to ESCALATION_WEBHOOK_URL.
 *  5. If FOLLOW_UP_WEBHOOK_URL is set, triggers the Day 1/3/7/14 sequence.
 *  6. Sends a confirmation email via SMTP if SMTP_* env vars are set.
 *  7. Returns { success: true }.
 *
 * All outbound integrations are best-effort and never block the success
 * response to the visitor — a missing webhook simply logs and continues.
 */

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

/**
 * Sends a confirmation email via SMTP if SMTP_* env vars are configured.
 * Uses nodemailer only when present; if the dependency is not installed the
 * function logs and returns false so the route still succeeds.
 */
async function sendConfirmationEmail(lead: LeadCapture): Promise<boolean> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    return false;
  }

  // Minimal structural types so we do not need nodemailer's type declarations
  // at build time. Install `nodemailer` to enable confirmation emails.
  type MailTransport = {
    sendMail: (options: Record<string, unknown>) => Promise<unknown>;
  };
  type NodemailerModule = {
    createTransport: (options: Record<string, unknown>) => MailTransport;
  };

  try {
    // Variable module specifier + webpackIgnore so the bundler/type-checker does
    // not hard-require nodemailer when SMTP is not configured. Resolved lazily
    // at runtime only when SMTP_* env vars are present.
    const moduleName = "nodemailer";
    const imported = await import(/* webpackIgnore: true */ moduleName).catch(
      () => null,
    );
    const nodemailer = (imported?.default ?? imported) as NodemailerModule | null;
    if (!nodemailer?.createTransport) {
      console.warn(
        "[lead-capture] SMTP configured but 'nodemailer' is not installed; skipping confirmation email.",
      );
      return false;
    }

    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const firstName = lead.name.trim().split(/\s+/)[0] || lead.name.trim();

    // Room-block tracker leads receive the branded welcome sequence from Mini;
    // other surfaces keep their short results-style confirmation.
    const welcome =
      lead.source === "room-block-tracker"
        ? buildWelcomeLeadEmail({ name: lead.name, targetDates: lead.targetDates })
        : null;

    await transport.sendMail({
      from: SMTP_FROM,
      to: lead.email,
      ...(welcome
        ? {
            replyTo: "hello@ceremonyverse.com",
            subject: welcome.subject,
            html: welcome.html,
            text: welcome.text,
          }
        : {
            subject: "Your CeremonyVerse results + the 5 Decision Questions",
            text: `Hi ${firstName},\n\nThanks for using the CeremonyVerse planning tools. Your saved results and the 5 Decision Questions are on their way. Mini or her assistant will follow up with the next practical step.\n\nWarmly,\nCeremonyVerse\nhello@ceremonyverse.com`,
          }),
    });
    return true;
  } catch (error) {
    console.error("[lead-capture] confirmation email failed:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 },
    );
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
  const requestId = crypto.randomUUID();
  const crmRecord = buildCrmRecord(lead, requestId);

  // 1. Console log — placeholder for direct CRM integration.
  console.log("[lead-capture] new lead:", JSON.stringify(crmRecord));

  // 2-5. Fire best-effort integrations in parallel.
  const [sheetDelivered, followUpTriggered, confirmationSent] = await Promise.all([
    postJson(process.env.LEAD_SHEET_WEBHOOK_URL, {
      event: "ceremonyverse.lead.captured",
      ...crmRecord,
    }),
    process.env.FOLLOW_UP_WEBHOOK_URL
      ? postJson(process.env.FOLLOW_UP_WEBHOOK_URL, {
          email: lead.email,
          name: lead.name,
          sequence: "seq1-no-consult",
          leadData: crmRecord,
        })
      : Promise.resolve(false),
    sendConfirmationEmail(lead),
  ]);

  // If flagged as a hot lead, alert Mini via the escalation webhook.
  let escalationSent = false;
  if (lead.escalationFlag) {
    escalationSent = await postJson(process.env.ESCALATION_WEBHOOK_URL, {
      event: "ceremonyverse.lead.escalation",
      requestId,
      name: lead.name,
      whatsapp: lead.whatsapp,
      destination: lead.destination,
      guestCount: lead.guestCount,
      budget: lead.budgetRange,
      weddingDate: lead.targetDates,
      trigger: lead.escalationReason || "hot-lead",
      siteSource: "ceremonyverse.com",
    });
  }

  return NextResponse.json({
    success: true,
    requestId,
    delivery: {
      sheet: sheetDelivered,
      followUp: followUpTriggered,
      confirmationEmail: confirmationSent,
      escalation: escalationSent,
    },
  });
}
