"use client";

import { consultationBookingUrl } from "@/lib/consultation-booking";
import { useEffect } from "react";
import { getAttributionParams, persistAttribution, readAttribution } from "@/lib/attribution";
import { usePathname, useRouter } from "next/navigation";
import {
  captureEvent,
  ATTRIBUTION_STORAGE_KEY,
  type AcquisitionContext,
  getAcquisitionContext,
  trackEvent,
} from "@/lib/analytics";

function referringHost(referrer: string): string {
  if (!referrer) return "";
  try {
    return new URL(referrer).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function saveFirstTouch(): void {
  if (window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const referrer = document.referrer;
  const referrerHost = referringHost(referrer);
  const hasExternalReferrer =
    Boolean(referrerHost) && referrerHost !== window.location.hostname.replace(/^www\./, "");

  const context: AcquisitionContext = {
    source: params.get("utm_source") || (hasExternalReferrer ? referrerHost : "direct"),
    medium: params.get("utm_medium") || (hasExternalReferrer ? "referral" : "none"),
    campaign: params.get("utm_campaign") || "",
    content: params.get("utm_content") || "",
    term: params.get("utm_term") || "",
    landing_page: window.location.pathname,
    referrer: hasExternalReferrer ? referrer : "",
    gclid: params.get("gclid") || "",
  };

  window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(context));
}

function ctaType(href: string): string | null {
  if (href.startsWith("mailto:")) return "email";
  if (href.startsWith("sms:")) return "sms";
  if (href.startsWith("tel:")) return "phone";
  if (href.includes("wa.me/") || href.includes("api.whatsapp.com/")) return "whatsapp";
  if (href === consultationBookingUrl) return "google_calendar";
  if (href.includes("trustpilot.com/review/ceremonyverse.com")) return "review_profile";

  try {
    const url = new URL(href, window.location.origin);
    if (url.origin === window.location.origin && /^\/schedule\/?$/.test(url.pathname)) return "schedule_page";
    if (
      url.origin === window.location.origin &&
      (url.pathname === "/contact/" || url.pathname === "/contact")
    ) {
      return "contact_page";
    }
  } catch {
    return null;
  }

  return null;
}

export function AcquisitionAttribution() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const referral = persistAttribution();
      if (referral) captureEvent({ name: "geo_referrer_detected", properties: referral });
      saveFirstTouch();
    } catch {
      // Storage can be disabled; the site and CTAs must continue to work.
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const type = ctaType(link.href);
      if (!type) return;

      let ctaLocation = "";
      let requestedService = "";
      try {
        const linkUrl = new URL(link.href, window.location.origin);
        ctaLocation = linkUrl.searchParams.get("from") || "";
        requestedService = linkUrl.searchParams.get("service") || "";
      } catch {
        // The click remains trackable even when an unusual link cannot be parsed.
      }

      trackEvent("cv_cta_click", {
        cta_type: type,
        page_path: window.location.pathname,
        link_text: (link.textContent || "").trim().slice(0, 80),
        cta_location: ctaLocation || (type === "google_calendar" ? new URLSearchParams(window.location.search).get("from") || "" : ""),
        utm_source: readAttribution().utm_source || "",
        ref: readAttribution().ref || "",
        requested_service: requestedService,
      });
    };

    // Next Link uses its href prop rather than a mutated DOM href. For decorated
    // same-tab clicks route explicitly; modified clicks retain native behavior.
    const decorate = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
      if (!link || event.defaultPrevented || link.hasAttribute('download')) return;
      const href = getAttributionParams(link.href);
      if (href === link.href) return;
      if (event.type === 'click' && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && (!link.target || link.target === '_self')) {
        event.preventDefault();
        const url = new URL(href);
        router.push(url.pathname + url.search + url.hash);
      } else {
        const previous = link.getAttribute('href')!;
        link.href = href;
        setTimeout(() => { if (link.href === href) link.setAttribute('href', previous); }, 0);
      }
    };
    document.addEventListener("click", decorate, true);
    document.addEventListener("auxclick", decorate, true);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", decorate, true);
      document.removeEventListener("auxclick", decorate, true);
      document.removeEventListener("click", handleClick);
    };
  }, [router]);

  useEffect(() => {
    if (pathname === "/contact/" || pathname === "/contact") {
      const params = new URLSearchParams(window.location.search);
      const acquisition = getAcquisitionContext();
      trackEvent("consultation_page_view", {
        page_path: pathname,
        entry_point: params.get("from") || "direct",
        requested_service: params.get("service") || "",
        source: acquisition.source,
        medium: acquisition.medium,
      });
    }
  }, [pathname]);

  return null;
}
