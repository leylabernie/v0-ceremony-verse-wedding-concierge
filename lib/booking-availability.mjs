export const BOOKING_TIME_ZONE = "America/New_York";
export const blockedDates = []; // Eastern dates, YYYY-MM-DD; only add dates confirmed by Mini.
const dayFormat = new Intl.DateTimeFormat("en-CA", {
  timeZone: BOOKING_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const hourFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: BOOKING_TIME_ZONE,
  hour: "numeric",
  hourCycle: "h23",
});

// Start from an Eastern calendar date. A UTC-noon probe gives that day's
// Eastern offset after any DST transition, before our daytime appointments.
export function bookingSlots(now = new Date(), blocked = blockedDates) {
  const today = Date.parse(dayFormat.format(now) + "T12:00:00Z");
  const slots = [];
  for (let i = 0; i < 21; i++) {
    const noon = new Date(today + i * 86400000);
    const weekday = noon.getUTCDay();
    if (!weekday || blocked.includes(dayFormat.format(noon))) continue;
    const start =
      noon.getTime() + (10 - Number(hourFormat.format(noon))) * 3600000;
    const count = weekday === 6 ? 6 : 16;
    for (let n = 0; n < count; n++) {
      const ms = start + n * 1800000;
      if (ms >= now.getTime() + 86400000)
        slots.push(new Date(ms).toISOString());
    }
  }
  return slots;
}
