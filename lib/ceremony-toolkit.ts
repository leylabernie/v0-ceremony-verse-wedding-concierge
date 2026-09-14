export const TOOLKIT_PATH = "/planning-tools/ceremony-timeline/"
export const TOOLKIT_PDF = "/downloads/ceremonyverse-ceremony-toolkit.pdf"
export const TOOLKIT_CONSENT_VERSION = "ceremony-toolkit-2026-09-14"
export const PRIVACY_CONSENT_TEXT = "I agree that CeremonyVerse may use these details to provide my requested toolkit, as described in the Privacy Notice."
export const PLANNING_CONSENT_TEXT = "Yes, CeremonyVerse may email me about planning support for my wedding. I can unsubscribe by replying stop."

export const VENUES = ["Not decided", "Moon Palace Cancun", "Hard Rock Riviera Maya", "Lopesan Costa Bavaro", "Another venue in Mexico", "Another venue in Punta Cana", "Jamaica", "Other destination"] as const
export const BUDGETS = ["Not sure yet", "Under $30,000", "$30,000–$59,999", "$60,000–$99,999", "$100,000+"] as const
export type CeremonyKind = "hindu" | "symbolic"
export interface TimelineOptions { kind: CeremonyKind; startTime: string; duration: number; guests: number }
export interface TimelineRow { time: string; title: string; note: string }

export function clockTime(minutes: number): string {
  const day = Math.floor(minutes / 1440)
  const normalized = ((minutes % 1440) + 1440) % 1440
  const hour = Math.floor(normalized / 60)
  return `${hour % 12 || 12}:${String(normalized % 60).padStart(2, "0")} ${hour < 12 ? "AM" : "PM"}${day < 0 ? " (previous day)" : day > 0 ? " (next day)" : ""}`
}

export const symbolicSegments = [
  { title: "Processional", minutes: 1, direction: "Play the chosen entrance music. Wait until everyone is settled before speaking." },
  { title: "Welcome", minutes: 1.5, direction: "Welcome, everyone. Today we make room for a promise: to choose each other, with care, through the ordinary days as well as the extraordinary ones. [Name] and [Name], the people gathered here bring different stories, traditions, and journeys. What connects us is our love for you. Thank you to those who travelled, to those joining from afar, and to the people whose presence we carry in our hearts. Take a breath. Look at each other. There is nowhere else you need to be in this moment. [Pause; invite guests to be seated. Allow time for any agreed acknowledgement.]" },
  { title: "Your story", minutes: 2, direction: "[Officiant: prepare about 180–220 words, approved by the couple. Tell one specific story about their everyday kindness, one quality each admires in the other, and what they hope to build together. Leave private details and surprise jokes out. Finish:] A shared life is made in these small acts of attention. Today you promise to keep noticing, keep listening, and keep making room for one another. [Pause.]" },
  { title: "Reading or reflection", minutes: 1, direction: "[Invite a loved one to read an original, public-domain, or permission-cleared passage of about 90–110 words, or keep a quiet reflection. Rehearse the walk to the microphone as part of this minute.]" },
  { title: "Personal vows", minutes: 3, direction: "The promises you make belong to you. [Name], please share yours. [Allow about 75 seconds.] [Name], please share yours. [Allow about 75 seconds. Keep 30 seconds for transitions and emotion. Each partner can begin: I love the way you… I promise to… When life becomes difficult, I will… The life I hope we create together is…]" },
  { title: "Ring exchange", minutes: 1.5, direction: "[If exchanging rings, invite the ring holder forward.] Let these rings remind you of the promises you have made, and of the care those promises will ask of you. [Each partner repeats slowly:] I give you this ring as a reminder of my love. I choose to stand beside you, to listen with patience, and to build our life with honesty and kindness. [Allow time to place each ring. If there are no rings, use this time for a mutually chosen gesture or shorten the ceremony.]" },
  { title: "Closing", minutes: 1, direction: "Your promises have been spoken, and your community has heard them. May you find joy in each other's company, courage in each other's support, and room to grow as individuals and together. Friends and family, carry the spirit of this moment into the years ahead: celebrate with them, listen to them, and remind them of the love that surrounds them. [If the couple wants a kiss, invite it.] Please join me in celebrating [Name] and [Name]! [Pause for applause.]" },
  { title: "Recessional", minutes: 1, direction: "Cue the exit song, let the couple clear the aisle, then release the wedding party. Tell guests where to go next and who can help with transport." },
] as const

export function buildTimeline(options: TimelineOptions): TimelineRow[] {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(options.startTime)) throw new Error("Choose a valid start time.")
  if (!Number.isInteger(options.duration) || options.duration < 15 || options.duration > 180) throw new Error("Choose a ceremony duration between 15 and 180 minutes.")
  if (!Number.isInteger(options.guests) || options.guests < 1 || options.guests > 1000) throw new Error("Enter 1–1,000 guests.")
  const [hours, minutes] = options.startTime.split(":").map(Number)
  const start = hours * 60 + minutes
  const duration = options.kind === "symbolic" ? 12 : options.duration
  return [
    { time: clockTime(start - 120), title: "Setup readiness check", note: "Confirm the contracted vendor access window, weather decision owner, power, shade and water. This is a proposed checkpoint, not permission to enter the venue." },
    { time: clockTime(start - 60), title: "Sound check & officiant briefing", note: "Test every microphone with music off and on; confirm pronunciations, cues, rings and any ritual materials." },
    { time: clockTime(start - (options.guests > 150 ? 45 : 30)), title: "Guest arrival & seating", note: `Plan a staffed welcome point for ${options.guests} guests. Walk the accessible route with the venue team; add transfer time if needed. Arrival allowance is an editable planning assumption, not a venue capacity benchmark.` },
    ...(options.kind === "hindu" ? [{ time: clockTime(start - 30), title: "Baraat / family welcome — if included", note: "Illustrative placeholder: agree the route, sound permission and actual length with your families, pandit and resort. Coordinate seating separately." }] : []),
    { time: clockTime(start), title: options.kind === "hindu" ? "Ceremony begins" : "Symbolic ceremony begins", note: options.kind === "hindu" ? `A ${duration}-minute planning block only. Your pandit and families set the rituals, order and duration; this tool does not prescribe them.` : "Use the original 12-minute symbolic script in the toolkit. Personalise and rehearse: speaking pace and pauses change the actual length." },
    { time: clockTime(start + duration), title: "Ceremony closes", note: "Announce the next location, water station and assistance point before guests move." },
    { time: clockTime(start + duration + 15), title: "Family photographs & guest transition", note: "Use a named family-photo coordinator. Confirm shade, seating and step-free transfers for guests who are waiting." },
    { time: clockTime(start + duration + 30), title: "Hospitality / next event", note: "Provisional handoff only. Confirm catering service time, reception access, overtime and strike deadlines in the venue contract." },
  ]
}

export function timelineText(options: TimelineOptions, details: { names: string; weddingDate: string; venue: string }): string {
  return ["CEREMONYVERSE | YOUR CEREMONY TIMELINE", details.names, `Wedding date: ${details.weddingDate || "Not decided"}`, `Venue: ${details.venue}`, "All times are local to the venue. Working draft: confirm every timing with your resort and officiant.", "", ...buildTimeline(options).map(row => `${row.time} — ${row.title}\n${row.note}\n`), "NEXT: Assign an owner to every cue. Confirm vendor access, audio cutoff, weather backup and strike in writing.", "Free 30-minute consultation: https://www.ceremonyverse.com/contact/?from=ceremony-toolkit", "Toolkit: https://www.ceremonyverse.com/planning-tools/ceremony-timeline/"].join("\n")
}
