"use client";

import { Analytics } from "@vercel/analytics/next";
import { analyticsPageUrl } from "@/lib/analytics-page-url";

export function VisitorAnalytics() {
  return <Analytics beforeSend={(event) => {
    const url = analyticsPageUrl(event.url);
    return url ? { ...event, url } : null;
  }} />;
}
