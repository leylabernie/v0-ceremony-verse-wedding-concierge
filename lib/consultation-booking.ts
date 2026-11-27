// Public Google Calendar appointment schedule shared by Mini.
export const GOOGLE_CALENDAR_BOOKING_URL = "https://calendar.app.google/sgZc3odvDrbicVuW8";
export const GOOGLE_CALENDAR_EMBED_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2v0G6jchauNDBxKuAjpYzHCpMENSHuWm1q79aY4xt54AyoAuUWmg04sNf0a0AVoqnalCg5nHDl?gv=true";
export const consultationBookingUrl = GOOGLE_CALENDAR_BOOKING_URL;

export type ConsultationBookingResolution = {
  mode: "embed" | "direct";
  provider: "cal.com" | "calendly" | "google-calendar";
  embedUrl: string | null;
  directUrl: string;
  googleCalendarUrl: string;
};

export function resolveConsultationBooking(
  envOrUrl: Record<string, string | undefined> | string | undefined = process.env,
): ConsultationBookingResolution {
  const rawCandidate =
    typeof envOrUrl === "string"
      ? envOrUrl
      : envOrUrl?.NEXT_PUBLIC_CAL_COM_URL ??
        envOrUrl?.NEXT_PUBLIC_CALENDLY_URL ??
        envOrUrl?.NEXT_PUBLIC_CONSULTATION_BOOKING_URL ??
        "";
  const candidate = rawCandidate.trim();

  if (candidate && /^https?:\/\/([^/]+\.)?(cal\.com|calendly\.com)\//i.test(candidate)) {
    const provider = /cal\.com/i.test(candidate) ? "cal.com" : "calendly";
    return {
      mode: "embed",
      provider,
      embedUrl: candidate,
      directUrl: candidate,
      googleCalendarUrl: GOOGLE_CALENDAR_BOOKING_URL,
    };
  }

  return {
    mode: "direct",
    provider: "google-calendar",
    embedUrl: null,
    directUrl: GOOGLE_CALENDAR_BOOKING_URL,
    googleCalendarUrl: GOOGLE_CALENDAR_BOOKING_URL,
  };
}

export const WARM_LEAD_FEASIBILITY_TEMPLATE =
  `Hi [Name] — Mini from CeremonyVerse here. I just opened a few spots this week for our $300 Feasibility & Action Plan (60 minutes tearing apart up to two resort quotes, hidden fees, and your guest budget—and 100% credited toward planning if you work with us within 30 days). You can grab a free 30-minute intro slot directly on my calendar here: ${GOOGLE_CALENDAR_BOOKING_URL}`;

export function buildWarmLeadFeasibilityMessage(
  name?: string,
  calendarUrl: string = GOOGLE_CALENDAR_BOOKING_URL,
): string {
  const displayName = name?.trim().split(/\s+/)[0] || "[Name]";
  return `Hi ${displayName} — Mini from CeremonyVerse here. I just opened a few spots this week for our $300 Feasibility & Action Plan (60 minutes tearing apart up to two resort quotes, hidden fees, and your guest budget—and 100% credited toward planning if you work with us within 30 days). You can grab a free 30-minute intro slot directly on my calendar here: ${calendarUrl}`;
}
