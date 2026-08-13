/**
 * Lead / conversion tracking helper.
 *
 * WHY THIS EXISTS (plain English):
 * The site loads Google Analytics, but analytics only counts page views by
 * default. It does NOT know when a visitor completes a consultation
 * registration. CTA and WhatsApp clicks are tracked separately by the global
 * attribution component because they show intent, not a completed lead.
 *
 * `trackLead(...)` is intentionally reserved for a successfully submitted
 * consultation registration. Ordinary CTA, WhatsApp, email, and scheduling
 * clicks are useful intent signals, but they are not verified leads and must
 * not inflate the lead count.
 *
 * SAFETY: this is purely additive. It pushes to the analytics dataLayer if it
 * exists and never throws — if analytics is blocked or not yet loaded, nothing
 * breaks and the user's action proceeds normally.
 */

type LeadMethod = "form";

export interface AcquisitionContext {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  landing_page: string;
  referrer: string;
  gclid: string;
}

export const ATTRIBUTION_STORAGE_KEY = "cv_first_touch_attribution";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLead(method: LeadMethod, location = "site"): void {
  if (typeof window === "undefined") return;
  try {
    // Ensure the dataLayer exists so the event is captured even if the GA
    // script hasn't finished initializing yet (GA replays the dataLayer).
    window.dataLayer = window.dataLayer || [];

    const payload = {
      event: "generate_lead",
      lead_method: method, // form | whatsapp | phone | email | calendly
      lead_location: location, // which page/section triggered it
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", payload);
    } else {
      // gtag.js expects queued commands in its `arguments`-like array form.
      // Pushing a GTM-style object here can silently lose the visitor's first
      // CTA click because this site intentionally defers loading gtag.js until
      // the first interaction.
      window.dataLayer.push(["event", "generate_lead", payload]);
    }
  } catch {
    // Never let analytics break a real user action.
  }
}

export function trackEvent(
  eventName: string,
  parameters: Record<string, string | number | boolean> = {},
): void {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, parameters);
    } else {
      window.dataLayer.push(["event", eventName, parameters]);
    }
  } catch {
    // Analytics must never block a visitor's next step.
  }
}

export function getAcquisitionContext(): AcquisitionContext {
  const fallback: AcquisitionContext = {
    source: "direct",
    medium: "none",
    campaign: "",
    content: "",
    term: "",
    landing_page: "",
    referrer: "",
    gclid: "",
  };

  if (typeof window === "undefined") return fallback;

  try {
    const saved = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return saved ? { ...fallback, ...JSON.parse(saved) } : fallback;
  } catch {
    return fallback;
  }
}
