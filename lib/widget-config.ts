/**
 * Mini's Assistant — CeremonyVerse chat widget configuration.
 *
 * All public values are read from NEXT_PUBLIC_* environment variables so that
 * bot IDs / site keys / calendar links can be rotated without a code change.
 * Populate them in `.env.local` (never commit real values) and in the Vercel
 * project's Environment Variables dashboard for production.
 *
 * See /home/ubuntu/minis_assistant/03_widget_and_whatsapp.md for the reference
 * widget config structure this mirrors.
 */

export type EscalationThresholds = {
  /** Guest count at or above which a lead is a "hot lead". */
  guestMin: number;
  /** Total budget (USD) at or above which a lead is a "hot lead". */
  budgetMin: number;
  /** Months-to-wedding at or below which a lead is a "hot lead". */
  monthsMax: number;
};

export type WidgetConfig = {
  site: string;
  botName: string;
  botId: string;
  siteKey: string;
  /** Abacus AI ChatLLM embed script URL (falls back to the public embed). */
  widgetScriptUrl: string;
  calendarUrl: string;
  whatsappNumber: string;
  escalation: EscalationThresholds;
  /** Pathnames on which the widget must NOT load. */
  excludedPaths: string[];
};

/**
 * Fallback embed script URL. Overridden by NEXT_PUBLIC_WIDGET_SCRIPT_URL when
 * set. Kept as a placeholder so the component has a deterministic src during
 * local development before the real Abacus AI bot is provisioned.
 */
const DEFAULT_WIDGET_SCRIPT_URL = "https://apps.abacus.ai/chatllm/embed.js";

export const ceremonyVerseWidgetConfig: WidgetConfig = {
  site: "ceremonyverse.com",
  botName: "Mini's Assistant",
  botId: process.env.NEXT_PUBLIC_BOT_ID ?? "",
  siteKey: process.env.NEXT_PUBLIC_SITE_KEY ?? "",
  widgetScriptUrl:
    process.env.NEXT_PUBLIC_WIDGET_SCRIPT_URL ?? DEFAULT_WIDGET_SCRIPT_URL,
  calendarUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  whatsappNumber: "12153419990",
  escalation: {
    guestMin: 75,
    budgetMin: 60000,
    monthsMax: 8,
  },
  excludedPaths: ["/privacy-policy", "/terms-of-service"],
};

/**
 * Returns true when the widget must NOT render on the given pathname.
 * Handles both exact matches and trailing-slash variants used across the site
 * (e.g. `/terms/`, `/privacy/`). We match the configured excluded paths plus
 * the site's actual legal routes (`/privacy`, `/terms`) defensively.
 */
export function isWidgetExcludedPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const excluded = new Set<string>([
    ...ceremonyVerseWidgetConfig.excludedPaths,
    // Actual legal routes on ceremonyverse.com.
    "/privacy",
    "/terms",
  ]);
  return excluded.has(normalized);
}

/**
 * Extracts a destination slug from a `/destinations/<slug>` pathname so the
 * agent can open with a destination-specific greeting. Returns null when the
 * current page is not a destination detail page.
 */
export function extractDestinationSlug(pathname: string): string | null {
  const match = pathname.match(/^\/destinations\/([^/]+)\/?$/);
  return match ? match[1] : null;
}

/**
 * Human-readable destination name from a destination slug.
 * e.g. "cancun-indian-wedding" -> "Cancún".
 */
export function destinationNameFromSlug(slug: string | null): string | null {
  if (!slug) return null;
  const map: Record<string, string> = {
    "cancun-indian-wedding": "Cancún",
    "riviera-maya-indian-wedding": "Riviera Maya",
    "los-cabos-indian-wedding": "Los Cabos",
    "jamaica-indian-wedding": "Jamaica",
    "punta-cana-indian-wedding": "Punta Cana",
  };
  if (map[slug]) return map[slug];
  // Fallback: strip the "-indian-wedding" suffix and title-case the rest.
  return slug
    .replace(/-indian-wedding$/, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
