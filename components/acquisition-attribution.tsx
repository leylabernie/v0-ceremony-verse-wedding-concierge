"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
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
  if (href.startsWith("tel:")) return "phone";
  if (href.includes("wa.me/") || href.includes("api.whatsapp.com/")) return "whatsapp";
  if (href.includes("calendly.com/")) return "calendly";
  if (href.includes("trustpilot.com/review/ceremonyverse.com")) return "review_profile";

  try {
    const url = new URL(href, window.location.origin);
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
  const pathname = usePathname();

  useEffect(() => {
    try {
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
        cta_location: ctaLocation,
        requested_service: requestedService,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

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
