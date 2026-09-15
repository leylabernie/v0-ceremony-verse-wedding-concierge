import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Server-side chat proxy for Mini's Assistant.
 *
 * The browser widget POSTs { message, sessionId?, siteSource? } here. This
 * route forwards the message to the CeremonyVerse Abacus AI ChatLLM deployment
 * and returns { reply, conversationId }.
 *
 * SECURITY: The Abacus deployment token is read from a server-only env var
 * (ABACUS_DEPLOYMENT_TOKEN) and is NEVER exposed to the browser. All Abacus
 * calls happen here, on the server.
 *
 * Abacus REST call (verified working with the deployment token alone):
 *   POST {predictEndpoint}/api/v0/getConversationResponse
 *        ?deploymentId=<id>&deploymentToken=<token>
 *   body: { message, deploymentConversationId? }
 *   -> result.deployment_conversation_id   (create-on-first-call)
 *   -> result.messages[last].text          (assistant reply)
 *
 * The prediction endpoint for this deployment resolves to
 * https://apps.abacus.ai — kept overridable via ABACUS_PREDICT_ENDPOINT.
 */

const ABACUS_DEPLOYMENT_ID = process.env.ABACUS_DEPLOYMENT_ID ?? "";
const ABACUS_DEPLOYMENT_TOKEN = process.env.ABACUS_DEPLOYMENT_TOKEN ?? "";
const ABACUS_PREDICT_ENDPOINT =
  process.env.ABACUS_PREDICT_ENDPOINT ?? "https://apps.abacus.ai";

// Allowed browser origins for CORS (WordPress site + main app domains).
const ALLOWED_ORIGINS = new Set<string>([
  "https://ceremonyversetravel.com",
  "https://www.ceremonyversetravel.com",
  "https://ceremonyverse.com",
  "https://www.ceremonyverse.com",
]);

// ── Simple in-memory rate limiter: max 30 requests / minute per IP ──────────
const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 60_000;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  if (bucket.count > RATE_LIMIT) return true;
  return false;
}

// Opportunistic cleanup so the Map does not grow unbounded.
function sweepBuckets() {
  const now = Date.now();
  for (const [ip, bucket] of rateBuckets) {
    if (now > bucket.resetAt) rateBuckets.delete(ip);
  }
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function corsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(req.headers.get("origin")),
  });
}

type AbacusMessage = { is_user?: boolean; text?: string; role?: string };
type AbacusResult = {
  deployment_conversation_id?: string;
  messages?: AbacusMessage[];
  response?: string;
};

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const cors = corsHeaders(origin);

  if (!ABACUS_DEPLOYMENT_ID || !ABACUS_DEPLOYMENT_TOKEN) {
    return NextResponse.json(
      { error: "Chat is not configured yet. Please try again later." },
      { status: 500, headers: cors },
    );
  }

  // Rate limit.
  sweepBuckets();
  const ip = clientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a moment and try again." },
      { status: 429, headers: cors },
    );
  }

  // Parse + validate body.
  let body: { message?: unknown; sessionId?: unknown; siteSource?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400, headers: cors },
    );
  }

  const message =
    typeof body.message === "string" ? body.message.trim() : "";
  const sessionId =
    typeof body.sessionId === "string" && body.sessionId.trim()
      ? body.sessionId.trim()
      : undefined;

  if (!message) {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400, headers: cors },
    );
  }
  if (message.length > 4000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400, headers: cors },
    );
  }

  // Forward to Abacus. deploymentId + deploymentToken go in the query string;
  // the message + (optional) conversation id go in the JSON body.
  const url =
    `${ABACUS_PREDICT_ENDPOINT}/api/v0/getConversationResponse` +
    `?deploymentId=${encodeURIComponent(ABACUS_DEPLOYMENT_ID)}` +
    `&deploymentToken=${encodeURIComponent(ABACUS_DEPLOYMENT_TOKEN)}`;

  const abacusBody: Record<string, unknown> = { message };
  if (sessionId) abacusBody.deploymentConversationId = sessionId;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(abacusBody),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      console.error(`[api/chat] Abacus HTTP ${res.status}`);
      return NextResponse.json(
        { error: "The assistant is unavailable right now. Please try again." },
        { status: 502, headers: cors },
      );
    }

    const data: { success?: boolean; result?: AbacusResult; error?: string } =
      await res.json();

    if (!data.success || !data.result) {
      console.error(`[api/chat] Abacus error: ${data.error ?? "unknown"}`);
      return NextResponse.json(
        { error: "The assistant could not respond. Please try again." },
        { status: 502, headers: cors },
      );
    }

    const result = data.result;
    const conversationId = result.deployment_conversation_id ?? sessionId ?? "";

    // The reply is the last non-user message; fall back to result.response.
    let reply = "";
    if (Array.isArray(result.messages) && result.messages.length > 0) {
      const assistantMessages = result.messages.filter(
        (m) => m.is_user === false && typeof m.text === "string",
      );
      reply =
        assistantMessages.length > 0
          ? String(assistantMessages[assistantMessages.length - 1].text)
          : "";
    }
    if (!reply && typeof result.response === "string") reply = result.response;
    if (!reply) {
      reply =
        "Sorry, I didn't catch that. Could you rephrase, or would you like to book a quick call?";
    }

    return NextResponse.json(
      { reply, conversationId },
      { status: 200, headers: cors },
    );
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    console.error(`[api/chat] ${aborted ? "timeout" : "fetch error"}`, err);
    return NextResponse.json(
      { error: "The assistant timed out. Please try again." },
      { status: 504, headers: cors },
    );
  }
}
