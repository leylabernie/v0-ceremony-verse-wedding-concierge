import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { test } from "node:test";
import { NextRequest } from "next/server";
import { POST } from "../app/api/chat/route.ts";
import { GOOGLE_CALENDAR_BOOKING_URL } from "../lib/consultation-booking.ts";
import {
  buildGuidedAssistantResponse,
  GUIDED_ASSISTANT_ACTIONS,
  GUIDED_ASSISTANT_TOPICS,
  MINI_WHATSAPP_DISPLAY,
  MINI_WHATSAPP_URL,
  PRICING_PATH,
  resetChatRateLimiterForTests,
} from "../lib/guided-assistant.ts";
import {
  botMeta,
  destinationNameFromSlug,
  extractDestinationSlug,
  isWidgetExcludedPath,
  widgetConfig,
} from "../lib/widget-config.ts";

test("widget is excluded on legal pages", () => {
  assert.equal(isWidgetExcludedPath("/privacy-policy"), true);
  assert.equal(isWidgetExcludedPath("/terms-of-service"), true);
  assert.equal(isWidgetExcludedPath("/privacy"), true);
  assert.equal(isWidgetExcludedPath("/privacy/"), true);
  assert.equal(isWidgetExcludedPath("/terms"), true);
  assert.equal(isWidgetExcludedPath("/terms/"), true);
});

test("widget renders on normal pages", () => {
  assert.equal(isWidgetExcludedPath("/"), false);
  assert.equal(isWidgetExcludedPath("/pricing/"), false);
  assert.equal(
    isWidgetExcludedPath("/destinations/cancun-indian-wedding/"),
    false,
  );
});

test("destination slug is extracted only on destination detail pages", () => {
  assert.equal(
    extractDestinationSlug("/destinations/cancun-indian-wedding/"),
    "cancun-indian-wedding",
  );
  assert.equal(
    extractDestinationSlug("/destinations/jamaica-indian-wedding"),
    "jamaica-indian-wedding",
  );
  assert.equal(extractDestinationSlug("/destinations/"), null);
  assert.equal(extractDestinationSlug("/pricing/"), null);
});

test("destination name maps from slug", () => {
  assert.equal(destinationNameFromSlug("cancun-indian-wedding"), "Cancún");
  assert.equal(
    destinationNameFromSlug("punta-cana-indian-wedding"),
    "Punta Cana",
  );
  assert.equal(destinationNameFromSlug(null), null);
  assert.equal(destinationNameFromSlug("tulum-indian-wedding"), "Tulum");
});

test("escalation thresholds match the system spec", () => {
  assert.equal(widgetConfig.escalationThresholds.guestCountMin, 75);
  assert.equal(widgetConfig.escalationThresholds.budgetMin, 60000);
  assert.equal(widgetConfig.escalationThresholds.monthsToWeddingMax, 8);
  assert.equal(botMeta.whatsappNumber, "12153419990");
});

test("widget config exposes real Abacus bot identifiers (public only)", () => {
  assert.equal(widgetConfig.appId, "c033a53c2");
  assert.equal(widgetConfig.deploymentId, "d4e208a68");
  assert.equal(
    widgetConfig.iframeUrl,
    "https://apps.abacus.ai/chatllm/?appId=c033a53c2&hideTopBar=2",
  );
  assert.equal("token" in widgetConfig, false);
});

test("guided assistant answers all 4 core questions deterministically", () => {
  assert.equal(GUIDED_ASSISTANT_TOPICS.length, 4);

  const destinationRes = buildGuidedAssistantResponse(
    "How does destination wedding planning work for Mexico, Jamaica, or Punta Cana?",
  );
  assert.equal(destinationRes.mode, "guided");
  assert.equal(destinationRes.topicId, "destination-planning");
  assert.match(destinationRes.reply, /Mexico/i);
  assert.match(destinationRes.reply, /Jamaica/i);
  assert.match(destinationRes.reply, /Punta Cana/i);
  assert.match(destinationRes.reply, /\$4,000/);
  assert.match(destinationRes.reply, /\$5,500/);
  assert.match(destinationRes.reply, /\$8,000/);

  const feasibilityRes = buildGuidedAssistantResponse(
    "Tell me about the $300 Feasibility & Action Plan and Venmo payment",
  );
  assert.equal(feasibilityRes.mode, "guided");
  assert.equal(feasibilityRes.topicId, "feasibility-plan");
  assert.match(feasibilityRes.reply, /\$300/);
  assert.match(feasibilityRes.reply, /Feasibility & Action Plan/);
  assert.match(feasibilityRes.reply, /Venmo/i);
  assert.match(feasibilityRes.reply, /scope/i);
  assert.match(feasibilityRes.reply, /30 days/i);

  const sourcingRes = buildGuidedAssistantResponse(
    "How does $799 Guided India Sourcing work for outfits?",
  );
  assert.equal(sourcingRes.mode, "guided");
  assert.equal(sourcingRes.topicId, "india-sourcing");
  assert.match(sourcingRes.reply, /\$799/);
  assert.match(sourcingRes.reply, /Guided Sourcing/i);
  assert.match(sourcingRes.reply, /\$2,499/);

  const cateringRes = buildGuidedAssistantResponse(
    "How do resorts handle Jain and satvik catering?",
  );
  assert.equal(cateringRes.mode, "guided");
  assert.equal(cateringRes.topicId, "jain-catering");
  assert.match(cateringRes.reply, /Jain/i);
  assert.match(cateringRes.reply, /satvik/i);
  assert.match(cateringRes.reply, /three paths/i);
});

test("guided assistant quick-reply actions route to Book Free 30-Min Call, WhatsApp Mini, and View Pricing", () => {
  assert.equal(GUIDED_ASSISTANT_ACTIONS.length, 3);

  const bookCall = GUIDED_ASSISTANT_ACTIONS.find((a) => a.id === "book-call");
  assert.ok(bookCall);
  assert.equal(bookCall.label, "Book Free 30-Min Call");
  assert.equal(bookCall.href, GOOGLE_CALENDAR_BOOKING_URL);
  assert.equal(bookCall.href, "https://calendar.app.google/sgZc3odvDrbicVuW8");
  assert.equal(bookCall.external, true);

  const whatsapp = GUIDED_ASSISTANT_ACTIONS.find(
    (a) => a.id === "whatsapp-mini",
  );
  assert.ok(whatsapp);
  assert.match(whatsapp.label, /WhatsApp Mini/i);
  assert.ok(whatsapp.label.includes(MINI_WHATSAPP_DISPLAY));
  assert.equal(whatsapp.phone, "+1 (215) 341-9990");
  assert.equal(whatsapp.href, MINI_WHATSAPP_URL);
  assert.equal(whatsapp.href, "https://wa.me/12153419990");
  assert.equal(whatsapp.external, true);

  const viewPricing = GUIDED_ASSISTANT_ACTIONS.find(
    (a) => a.id === "view-pricing",
  );
  assert.ok(viewPricing);
  assert.equal(viewPricing.label, "View Pricing");
  assert.equal(viewPricing.href, PRICING_PATH);
  assert.equal(viewPricing.href, "/pricing/");
  assert.equal(viewPricing.external, false);
});

test("POST /api/chat switches to guided assistant when API keys are missing or upstream returns 401/402/429/500", async () => {
  const prevId = process.env.ABACUS_DEPLOYMENT_ID;
  const prevToken = process.env.ABACUS_DEPLOYMENT_TOKEN;
  const originalFetch = globalThis.fetch;

  try {
    resetChatRateLimiterForTests();

    // 1. Missing API keys -> 200 guided fallback (never 500 error)
    delete process.env.ABACUS_DEPLOYMENT_ID;
    delete process.env.ABACUS_DEPLOYMENT_TOKEN;

    const missingKeyReq = new NextRequest("https://www.ceremonyverse.com/api/chat", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        message: "How does the $300 Feasibility & Action Plan work?",
      }),
    });
    const missingKeyRes = await POST(missingKeyReq);
    assert.equal(missingKeyRes.status, 200);
    const missingKeyData = await missingKeyRes.json();
    assert.equal(missingKeyData.error, undefined);
    assert.equal(missingKeyData.mode, "guided");
    assert.equal(missingKeyData.topicId, "feasibility-plan");
    assert.match(missingKeyData.reply, /\$300/);
    assert.match(missingKeyData.reply, /Venmo/i);
    assert.equal(missingKeyData.actions.length, 3);
    assert.equal(missingKeyData.quickReplies.length, 4);

    // 2. Upstream returns 401, 402, 429, 500 -> 200 guided fallback (never an error message)
    process.env.ABACUS_DEPLOYMENT_ID = "d4e208a68";
    process.env.ABACUS_DEPLOYMENT_TOKEN = "test-token";

    const testCases: Array<{
      status: number;
      prompt: string;
      expectedTopic: string;
      expectedPattern: RegExp;
    }> = [
      {
        status: 401,
        prompt: "Mexico, Jamaica & Punta Cana planning",
        expectedTopic: "destination-planning",
        expectedPattern: /Mexico.*Jamaica.*Punta Cana/s,
      },
      {
        status: 402,
        prompt: "$300 Feasibility & Action Plan (Venmo)",
        expectedTopic: "feasibility-plan",
        expectedPattern: /\$300.*Venmo/s,
      },
      {
        status: 429,
        prompt: "$799 Guided India Sourcing",
        expectedTopic: "india-sourcing",
        expectedPattern: /\$799/,
      },
      {
        status: 500,
        prompt: "Jain, satvik & Gujarati catering",
        expectedTopic: "jain-catering",
        expectedPattern: /Jain.*satvik/i,
      },
    ];

    for (const tc of testCases) {
      resetChatRateLimiterForTests();
      globalThis.fetch = async () =>
        new Response(JSON.stringify({ error: `Upstream HTTP ${tc.status}` }), {
          status: tc.status,
          headers: { "content-type": "application/json" },
        });

      const req = new NextRequest("https://www.ceremonyverse.com/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: tc.prompt }),
      });

      const res = await POST(req);
      assert.equal(
        res.status,
        200,
        `Expected status 200 for upstream ${tc.status}`,
      );
      const data = await res.json();
      assert.equal(data.error, undefined);
      assert.equal(data.mode, "guided");
      assert.equal(data.topicId, tc.expectedTopic);
      assert.match(data.reply, tc.expectedPattern);
      assert.equal(
        data.actions.find((a: { id: string }) => a.id === "book-call")?.href,
        "https://calendar.app.google/sgZc3odvDrbicVuW8",
      );
      assert.equal(
        data.actions.find((a: { id: string }) => a.id === "whatsapp-mini")?.href,
        "https://wa.me/12153419990",
      );
      assert.equal(
        data.actions.find((a: { id: string }) => a.id === "view-pricing")?.href,
        "/pricing/",
      );
    }
  } finally {
    if (prevId === undefined) {
      delete process.env.ABACUS_DEPLOYMENT_ID;
    } else {
      process.env.ABACUS_DEPLOYMENT_ID = prevId;
    }
    if (prevToken === undefined) {
      delete process.env.ABACUS_DEPLOYMENT_TOKEN;
    } else {
      process.env.ABACUS_DEPLOYMENT_TOKEN = prevToken;
    }
    globalThis.fetch = originalFetch;
    resetChatRateLimiterForTests();
  }
});

test("MinisAssistantWidget renders guided quick-reply buttons, direct routing actions, and client-side error fallback", () => {
  const widgetSource = readFileSync(
    path.join(process.cwd(), "components/MinisAssistantWidget.tsx"),
    "utf8",
  );

  // Verify the widget imports the deterministic guided assistant and quick-reply actions
  assert.match(widgetSource, /buildGuidedAssistantResponse/);
  assert.match(widgetSource, /GUIDED_ASSISTANT_TOPICS/);
  assert.match(widgetSource, /GUIDED_ASSISTANT_ACTIONS/);

  // Verify quick-reply topics and direct action routing sections exist in the same chat UI
  assert.match(widgetSource, /data-guided-topics/);
  assert.match(widgetSource, /data-guided-actions/);
  assert.match(widgetSource, /onClick=\{\(\) => sendMessage\(topic\.question\)\}/);
  assert.match(widgetSource, /href=\{action\.href\}/);

  // Verify no error string is ever pushed into chat messages on API failure
  assert.equal(
    widgetSource.includes("Sorry, something went wrong"),
    false,
    "Widget should never display raw error messages to the user",
  );
  assert.equal(
    widgetSource.includes("Could not reach the assistant"),
    false,
    "Widget should fall back to guided assistant on network errors",
  );
});
