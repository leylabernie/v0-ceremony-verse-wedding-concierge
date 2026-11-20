const stamp = (ms) =>
  new Date(ms)
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
// Do not include user-provided names, notes or contact data in downloadable files.
export function buildConsultationInvite(id, iso, createdAt) {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CeremonyVerse//Consultations//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${id}@ceremonyverse.com`,
    `DTSTAMP:${stamp(createdAt)}`,
    `DTSTART:${stamp(iso)}`,
    `DTEND:${stamp(Date.parse(iso) + 1800000)}`,
    "SUMMARY:Free wedding consultation with Mini",
    "LOCATION:Phone or WhatsApp +1 (215) 341-9990",
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    "DESCRIPTION:Consultation with Mini in 30 minutes",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");
}
