import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

/**
 * Escalation alert endpoint for Mini's Assistant "hot lead" triggers.
 *
 * When the agent detects a hot lead (guest count >= 75, budget >= $60k, or the
 * wedding is <= 8 months away, or the visitor asks for a human), it POSTs here.
 * We format a WhatsApp-style alert message and forward it to
 * ESCALATION_WEBHOOK_URL — a Zapier/Make webhook that sends the WhatsApp
 * message to Mini at +1 (215) 341-9990. No WhatsApp API SDK is required.
 *
 * The alert message mirrors the escalation template in the system prompt.
 */

const optionalText = (max: number) =>
  z.string().trim().max(max).optional().default("");

const escalationSchema = z.object({
  name: z.string().trim().min(1).max(120),
  whatsapp: optionalText(40),
  destination: optionalText(160),
  guestCount: optionalText(16),
  budget: optionalText(80),
  weddingDate: optionalText(80),
  trigger: optionalText(200),
  siteSource: optionalText(60),
});

type Escalation = z.infer<typeof escalationSchema>;

/** Mini's WhatsApp number for escalations (also in env as MINI_WHATSAPP_NUMBER). */
const MINI_WHATSAPP = process.env.MINI_WHATSAPP_NUMBER || "12153419990";

function buildAlertMessage(lead: Escalation): string {
  return [
    "🔥 HOT LEAD — Mini's Assistant",
    "",
    `Name: ${lead.name}`,
    lead.whatsapp ? `WhatsApp: ${lead.whatsapp}` : "",
    lead.destination ? `Destination: ${lead.destination}` : "",
    lead.guestCount ? `Guests: ${lead.guestCount}` : "",
    lead.budget ? `Budget: ${lead.budget}` : "",
    lead.weddingDate ? `Wedding date: ${lead.weddingDate}` : "",
    `Trigger: ${lead.trigger || "hot-lead"}`,
    `Source: ${lead.siteSource || "ceremonyverse.com"}`,
    "",
    "Follow up personally as soon as possible.",
  ]
    .filter(Boolean)
    .join("\n");
}

async function postJson(url: string | undefined, payload: unknown): Promise<boolean> {
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
  const timeout = setTimeout(() => controller.abort(), 8000);
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

  const parsed = escalationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "A lead name is required." },
      { status: 400 },
    );
  }

  const lead = parsed.data;
  const message = buildAlertMessage(lead);

  console.log("[escalation] hot lead:", JSON.stringify({ ...lead, message }));

  const delivered = await postJson(process.env.ESCALATION_WEBHOOK_URL, {
    event: "ceremonyverse.lead.escalation",
    to: MINI_WHATSAPP,
    message,
    lead,
    sentAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true, delivered });
}
