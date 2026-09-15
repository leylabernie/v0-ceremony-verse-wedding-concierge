"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";
import {
  ceremonyVerseWidgetConfig,
  destinationNameFromSlug,
  extractDestinationSlug,
  isWidgetExcludedPath,
} from "@/lib/widget-config";

/**
 * Mini's Assistant — global chat widget loader for ceremonyverse.com.
 *
 * Behaviour:
 *  - Returns null on excluded paths (/privacy, /terms) so no script loads.
 *  - Reads page context (pathname, title, destination slug/name) and exposes it
 *    on window.MINIS_ASSISTANT_CONFIG so the agent can greet contextually.
 *  - Loads the embed script with next/script strategy="lazyOnload" (async +
 *    deferred until the page is idle) to protect LCP / CLS / Lighthouse.
 *  - Positions the launcher bottom-right, clearing the mobile sticky footer
 *    CTA (safe-area-inset-bottom + 70px) so it never covers the sticky CTA.
 *
 * NOTE: This component intentionally does NOT render a WhatsApp floating
 * button. The site already ships a global <WhatsAppButton /> (see
 * components/whatsapp-button.tsx) rendered in app/layout.tsx. That existing
 * button should be audited for overlap with this launcher on the 1280–1660px
 * breakpoint where it is visible; do not add a duplicate here.
 */

declare global {
  interface Window {
    MINIS_ASSISTANT_CONFIG?: Record<string, unknown>;
    MinisAssistant?: { open?: () => void; close?: () => void };
  }
}

export default function MinisAssistantWidget() {
  const pathname = usePathname() || "/";

  const excluded = isWidgetExcludedPath(pathname);

  const pageContext = useMemo(() => {
    const destinationSlug = extractDestinationSlug(pathname);
    const destinationName = destinationNameFromSlug(destinationSlug);
    return {
      pathname,
      pageTitle: typeof document !== "undefined" ? document.title : "",
      destinationSlug,
      destinationName,
    };
  }, [pathname]);

  // Publish config + page context to the global object the embed script reads.
  // Runs on every route change so the agent always has fresh page context.
  useEffect(() => {
    if (excluded || typeof window === "undefined") return;

    window.MINIS_ASSISTANT_CONFIG = {
      site: ceremonyVerseWidgetConfig.site,
      botName: ceremonyVerseWidgetConfig.botName,
      botId: ceremonyVerseWidgetConfig.botId,
      siteKey: ceremonyVerseWidgetConfig.siteKey,
      calendarUrl: ceremonyVerseWidgetConfig.calendarUrl,
      whatsappNumber: ceremonyVerseWidgetConfig.whatsappNumber,
      escalationTriggers: {
        guestCountMin: ceremonyVerseWidgetConfig.escalation.guestMin,
        budgetMin: ceremonyVerseWidgetConfig.escalation.budgetMin,
        monthsToWeddingMax: ceremonyVerseWidgetConfig.escalation.monthsMax,
      },
      pageContext,
    };
  }, [excluded, pageContext]);

  if (excluded) return null;

  return (
    <>
      {/*
        Launcher positioning. Kept in a scoped style tag so we do not touch the
        global stylesheet. Mobile: lift above the sticky footer CTA
        (safe-area-inset-bottom + 70px). Desktop: standard bottom-right offset.
      */}
      <style>{`
        :root { --minis-assistant-mobile-clearance: calc(env(safe-area-inset-bottom, 0px) + 70px); }
        .minis-assistant-launcher,
        #minis-assistant-root,
        [data-minis-assistant-root] {
          position: fixed;
          right: 16px;
          bottom: var(--minis-assistant-mobile-clearance);
          z-index: 9998;
        }
        @media (min-width: 1280px) {
          .minis-assistant-launcher,
          #minis-assistant-root,
          [data-minis-assistant-root] {
            bottom: 24px;
            right: 24px;
          }
        }
      `}</style>

      <div
        id="minis-assistant-root"
        data-minis-assistant-root
        className="minis-assistant-launcher"
        aria-live="polite"
      />

      <Script
        id="minis-assistant-embed"
        src={ceremonyVerseWidgetConfig.widgetScriptUrl}
        strategy="lazyOnload"
        data-bot-id={ceremonyVerseWidgetConfig.botId}
        data-site-key={ceremonyVerseWidgetConfig.siteKey}
        data-position="bottom-right"
        data-theme="light"
        data-target="minis-assistant-root"
      />
    </>
  );
}

/**
 * Opens the chat widget programmatically. Used by the "Chat with Mini's
 * Assistant" CTA buttons. Falls back to a custom event that the embed script
 * (or a future custom launcher) can listen for.
 */
export function openMinisAssistant(): void {
  if (typeof window === "undefined") return;
  if (window.MinisAssistant?.open) {
    window.MinisAssistant.open();
    return;
  }
  window.dispatchEvent(new CustomEvent("minis-assistant:open"));
}
