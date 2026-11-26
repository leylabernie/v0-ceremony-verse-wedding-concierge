import { type NextRequest, NextResponse } from "next/server";
import {
  buildGuidedAssistantResponse,
  GUIDED_ASSISTANT_ACTIONS,
  GUIDED_ASSISTANT_TOPICS,
  isChatRateLimited,
} from "@/lib/guided-assistant";

export const runtime = "nodejs";

/**
 * Server-side chat proxy for Mini's Assistant with a $0-cost, zero-failure
 * deterministic guided-assistant fallback.
 *
 * The browser widget POSTs { message, sessionId?, conversationId?, siteSource? }.
 * Whenever AI credentials (ABACUS_DEPLOYMENT_ID / ABACUS_DEPLOYMENT_TOKEN,
 * OPENAI_API_KEY, or AI_GATEWAY_API_KEY) are missing, rate-limited, or
 * upstream returns an error (401/402/429/500/etc.), this route seamlessly
 * responds with the deterministic guided assistant instead of an error.
 */

const ALLOWED_ORIGINS = new Set<string>([
  "https://ceremonyversetravel.com",
  "https://www.ceremonyversetravel.com",
  "https://ceremonyverse.com",
  "https://www.ceremonyverse.com",
  ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : []),
]);

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
  deploymentConversationId?: string;
  messages?: AbacusMessage[];
  response?: string;
};

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const cors = corsHeaders(origin);

  let body: {
    message?: unknown;
    sessionId?: unknown;
    conversationId?: unknown;
    siteSource?: unknown;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400, headers: cors },
    );
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  const rawSession =
    typeof body.sessionId === "string" && body.sessionId.trim()
      ? body.sessionId.trim()
      : typeof body.conversationId === "string" && body.conversationId.trim()
        ? body.conversationId.trim()
        : undefined;
  const sessionId =
    rawSession && rawSession.length < 128 ? rawSession : undefined;

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

  const ip = clientIp(req);
  const abacusDeploymentId = process.env.ABACUS_DEPLOYMENT_ID?.trim() ?? "";
  const abacusDeploymentToken =
    process.env.ABACUS_DEPLOYMENT_TOKEN?.trim() ?? "";
  const abacusPredictEndpoint =
    process.env.ABACUS_PREDICT_ENDPOINT?.trim() || "https://apps.abacus.ai";

  // Zero-failure fallback when credentials are missing or upstream is rate-limited
  if (
    !abacusDeploymentId ||
    !abacusDeploymentToken ||
    isChatRateLimited(ip)
  ) {
    return NextResponse.json(
      buildGuidedAssistantResponse(message, sessionId),
      { status: 200, headers: cors },
    );
  }

  const url =
    `${abacusPredictEndpoint}/api/v0/getConversationResponse` +
    `?deploymentId=${encodeURIComponent(abacusDeploymentId)}` +
    `&deploymentToken=${encodeURIComponent(abacusDeploymentToken)}`;

  const abacusBody: Record<string, unknown> = {
    message,
    messages: [{ is_user: true, text: message }],
  };
  if (sessionId && sessionId !== "guided-concierge") {
    abacusBody.deploymentConversationId = sessionId;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);

    let res: Response;
    try {
      res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(abacusBody),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!res.ok) {
      console.warn(
        `[api/chat] Abacus HTTP ${res.status}, switching to guided assistant`,
      );
      return NextResponse.json(
        buildGuidedAssistantResponse(message, sessionId),
        { status: 200, headers: cors },
      );
    }

    const data: { success?: boolean; result?: AbacusResult; error?: string } =
      await res.json();

    if (!data.success || !data.result) {
      console.warn(
        `[api/chat] Abacus error (${data.error ?? "unknown"}), switching to guided assistant`,
      );
      return NextResponse.json(
        buildGuidedAssistantResponse(message, sessionId),
        { status: 200, headers: cors },
      );
    }

    const result = data.result;
    const conversationId =
      result.deployment_conversation_id ??
      result.deploymentConversationId ??
      sessionId ??
      "";

    let reply = "";
    if (Array.isArray(result.messages) && result.messages.length > 0) {
      const assistantMessages = result.messages.filter(
        (m) => m.is_user === false && typeof m.text === "string",
      );
      reply =
        assistantMessages.length > 0
          ? String(assistantMessages[assistantMessages.length - 1].text).trim()
          : "";
    }
    if (!reply && typeof result.response === "string") {
      reply = result.response.trim();
    }

    if (!reply) {
      return NextResponse.json(
        buildGuidedAssistantResponse(message, sessionId),
        { status: 200, headers: cors },
      );
    }

    return NextResponse.json(
      {
        reply,
        conversationId,
        mode: "ai",
        quickReplies: GUIDED_ASSISTANT_TOPICS,
        actions: GUIDED_ASSISTANT_ACTIONS,
      },
      { status: 200, headers: cors },
    );
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    console.warn(
      `[api/chat] ${aborted ? "timeout" : "fetch error"}, switching to guided assistant`,
      err instanceof Error ? err.message : err,
    );
    return NextResponse.json(
      buildGuidedAssistantResponse(message, sessionId),
      { status: 200, headers: cors },
    );
  }
}
