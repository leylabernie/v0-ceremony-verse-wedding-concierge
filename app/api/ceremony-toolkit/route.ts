import { createHash, randomUUID } from "node:crypto"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { ceremonyVerseBusinessEmail, escapeHtml, sendCeremonyVerseEmail } from "@/lib/consultation-email"
import { BUDGETS, VENUES, TOOLKIT_PDF, TOOLKIT_CONSENT_VERSION, PRIVACY_CONSENT_TEXT, PLANNING_CONSENT_TEXT } from "@/lib/ceremony-toolkit"

export const runtime = "nodejs"
const schema = z.object({
  names: z.string().trim().min(2).max(140), email: z.string().trim().email().max(254).transform(v => v.toLowerCase()),
  weddingDate: z.string().max(10).refine(v => v === "" || (/^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v)) && new Date(v).toISOString().slice(0, 10) === v), "Enter a valid date, or choose not decided."),
  venue: z.enum(VENUES), budget: z.enum(BUDGETS), kind: z.enum(["hindu", "symbolic"]),
  startTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/), duration: z.number().int().min(15).max(180), guests: z.number().int().min(1).max(1000),
  privacyConsent: z.literal(true), planningConsent: z.boolean(), website: z.string().max(200).optional().default(""),
}).strict()
const digest = (v: string) => createHash("sha256").update(v).digest("hex")
const reply = (body: object, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } })
const unavailable = () => reply({ error: "Your download could not be unlocked yet. Please try again shortly. Your preview is still available; no consultation has been booked." }, 503)

async function redis(...command: (string | number)[]): Promise<unknown> {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
  if (!url || !token) throw new Error("Toolkit storage unavailable")
  const response = await fetch(url, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(command), cache: "no-store", signal: AbortSignal.timeout(5000) })
  if (!response.ok) throw new Error("Toolkit storage unavailable")
  const payload = await response.json()
  if (payload.error) throw new Error("Toolkit storage unavailable")
  return payload.result
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin")
  if (origin && origin !== request.nextUrl.origin) return reply({ error: "Please submit the form from this website." }, 403)
  if (!request.headers.get("content-type")?.includes("application/json")) return reply({ error: "Use the toolkit form to request your download." }, 415)
  let input: unknown
  try {
    const raw = await request.text()
    if (Buffer.byteLength(raw, "utf8") > 12000) return reply({ error: "The request is too large." }, 413)
    input = JSON.parse(raw)
  } catch { return reply({ error: "Please check the form and try again." }, 400) }
  const parsed = schema.safeParse(input)
  if (!parsed.success || parsed.data.website) return reply({ error: "Please check your name, email, date and privacy consent." }, 400)
  const { website: _website, ...lead } = parsed.data
  // Stable payload identity means a network retry cannot change consent or create a second lead.
  const id = digest(JSON.stringify({ ...lead, consentVersion: TOOLKIT_CONSENT_VERSION }))
  const key = `ceremonyverse:toolkit:lead:${id}`
  const lockKey = `${key}:lock`
  const lock = randomUUID()
  let locked = false
  try {
    const existing = await redis("GET", key)
    const state = typeof existing === "string" ? JSON.parse(existing) : null
    if (state?.status === "delivered") return reply({ success: true, pdf: TOOLKIT_PDF, repeated: true })
    // Vercel supplies this header; hash it and keep only a short-lived rate counter.
    const ip = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
    const count = await redis("EVAL", "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],3600) end; return n", 1, `ceremonyverse:toolkit:rate:${digest(ip)}`)
    if (Number(count) > 10) return reply({ error: "Too many requests. Please try again in an hour; your preview remains available." }, 429)
    locked = (await redis("SET", lockKey, lock, "NX", "EX", 60)) === "OK"
    if (!locked) return reply({ error: "Your request is being processed. Please try again in a moment." }, 409)
    // Read again after locking so a concurrent completed request cannot resend mail.
    const fresh = await redis("GET", key)
    const saved = typeof fresh === "string" ? JSON.parse(fresh) : null
    if (saved?.status === "delivered") return reply({ success: true, pdf: TOOLKIT_PDF, repeated: true })
    const record = saved || { ...lead, id, status: "pending", receivedAt: new Date().toISOString(), consentVersion: TOOLKIT_CONSENT_VERSION, privacyConsentText: PRIVACY_CONSENT_TEXT, planningConsentText: PLANNING_CONSENT_TEXT }
    await redis("SET", key, JSON.stringify(record), "EX", 7776000)
    const lines = ["CEREMONY TOOLKIT DOWNLOAD — RESOURCE LEAD", "This is not a consultation request or a paying client.", `Names: ${record.names}`, `Email: ${record.email}`, `Date: ${record.weddingDate || "Not decided"}`, `Venue: ${record.venue}`, `Budget (USD, self-reported): ${record.budget}`, `Guests: ${record.guests}`, `Ceremony: ${record.kind}; start ${record.startTime}; block ${record.kind === "symbolic" ? 12 : record.duration} minutes`, `Planning follow-up permission: ${record.planningConsent ? "YES" : "NO — fulfil the resource request only; do not send a planning pitch"}`, `Consent wording: ${record.planningConsentText}`, `Privacy consent: ${record.privacyConsentText}`, `Consent version: ${record.consentVersion}`, `Received: ${record.receivedAt}`, `Resource ID: ${id}`, "No consultation nurture sequence has been started.", "For opted-in leads: use the existing approved outreach process. Honour stop/unsubscribe replies before any further follow-up."]
    const delivered = await sendCeremonyVerseEmail({ to: ceremonyVerseBusinessEmail(), replyTo: record.email, subject: `Ceremony toolkit download — ${record.names}`, text: lines.join("\n"), html: lines.map(line => `<p>${escapeHtml(line)}</p>`).join(""), idempotencyKey: `ceremony-toolkit-${id}` })
    if (!delivered) return unavailable()
    await redis("SET", key, JSON.stringify({ ...record, status: "delivered" }), "EX", 7776000)
    return reply({ success: true, pdf: TOOLKIT_PDF, repeated: false })
  } catch { return unavailable() }
  finally {
    if (locked) {
      try { await redis("EVAL", "if redis.call('GET',KEYS[1])==ARGV[1] then return redis.call('DEL',KEYS[1]) else return 0 end", 1, lockKey, lock) } catch { /* Lease expires automatically. */ }
    }
  }
}
