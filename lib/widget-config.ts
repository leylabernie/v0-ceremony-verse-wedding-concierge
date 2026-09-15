/**
 * Mini's Assistant — CeremonyVerse chat widget configuration.
 *
 * The widget now talks to a real Abacus AI ChatLLM deployment via the
 * server-side proxy at /api/chat. The deployment token is NEVER exposed to the
 * browser — only the public appId / deploymentId and the shareable iframe URL
 * live here. Server-only secrets (ABACUS_DEPLOYMENT_TOKEN) stay in env vars.
 *
 * See /home/ubuntu/minis_assistant/03_widget_and_whatsapp.md for reference.
 */

export type EscalationThresholds = {
  /** Guest count at or above which a lead is a "hot lead". */
  guestCountMin: number;
  /** Total budget (USD) at or above which a lead is a "hot lead". */
  budgetMin: number;
  /** Months-to-wedding at or below which a lead is a "hot lead". */
  monthsToWeddingMax: number;
};

export type WidgetConfig = {
  /** Abacus external application id (safe to be public). */
  appId: string;
  /** Abacus deployment id (safe to be public; token stays server-side). */
  deploymentId: string;
  /** Embeddable ChatLLM iframe URL (used by the standalone WordPress snippet). */
  iframeUrl: string;
  /** Shareable bot URL. */
  botShareableUrl: string;
  /** Hot-lead escalation thresholds. */
  escalationThresholds: EscalationThresholds;
  /** Pathnames on which the widget must NOT load. */
  excludedPaths: string[];
};

export const widgetConfig: WidgetConfig = {
  appId: "c033a53c2",
  deploymentId: "d4e208a68",
  iframeUrl: "https://apps.abacus.ai/chatllm/?appId=c033a53c2&hideTopBar=2",
  botShareableUrl: "https://apps.abacus.ai/chatllm/?appId=c033a53c2",
  escalationThresholds: {
    guestCountMin: 75,
    budgetMin: 60000,
    monthsToWeddingMax: 8,
  },
  excludedPaths: ["/privacy-policy", "/terms-of-service", "/terms"],
};

/**
 * Backwards-compatible alias. Existing imports use `ceremonyVerseWidgetConfig`;
 * they keep working while new code can import `widgetConfig`.
 */
export const ceremonyVerseWidgetConfig = widgetConfig;

/** Bot display metadata used by the in-app chat panel. */
export const botMeta = {
  name: "Mini's Assistant",
  icon: "🌸",
  whatsappNumber: "12153419990",
} as const;

/**
 * Returns true when the widget must NOT render on the given pathname.
 * Handles exact matches and trailing-slash variants (e.g. `/terms/`).
 * Matches the configured excluded paths plus the site's short legal routes
 * (`/privacy`, `/terms`) defensively.
 */
export function isWidgetExcludedPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const excluded = new Set<string>([
    ...widgetConfig.excludedPaths,
    // Short legal-route aliases used across the site.
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
