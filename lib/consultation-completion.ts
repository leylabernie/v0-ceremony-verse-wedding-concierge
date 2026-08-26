import { createHmac, timingSafeEqual } from "node:crypto"

function automationSecret(): string | undefined {
  const value = process.env.CEREMONYVERSE_AUTOMATION_SECRET?.trim()
  return value && value.length >= 16 ? value : undefined
}

function actionDigest(action: "completion" | "nurture-opt-out", requestId: string, secret: string): string {
  return createHmac("sha256", secret).update(`ceremonyverse:${action}:${requestId}`).digest("hex")
}

export function buildConsultationCompletionUrl(origin: string, requestId: string): string | undefined {
  const secret = automationSecret()
  if (!secret) return undefined

  const url = new URL("/consultation-completed/", origin)
  url.searchParams.set("request", requestId)
  url.searchParams.set("token", actionDigest("completion", requestId, secret))
  return url.toString()
}

export function validConsultationCompletionToken(requestId: string, token: string): boolean {
  const secret = automationSecret()
  if (!secret || !/^[0-9a-f]{64}$/i.test(token)) return false

  const expected = Buffer.from(actionDigest("completion", requestId, secret), "utf8")
  const received = Buffer.from(token, "utf8")
  return expected.length === received.length && timingSafeEqual(expected, received)
}

export function buildNurtureOptOutUrl(origin: string, requestId: string): string | undefined {
  const secret = automationSecret()
  if (!secret) return undefined

  const url = new URL("/nurture-preferences/", origin)
  url.searchParams.set("request", requestId)
  url.searchParams.set("token", actionDigest("nurture-opt-out", requestId, secret))
  return url.toString()
}

export function validNurtureOptOutToken(requestId: string, token: string): boolean {
  const secret = automationSecret()
  if (!secret || !/^[0-9a-f]{64}$/i.test(token)) return false

  const expected = Buffer.from(actionDigest("nurture-opt-out", requestId, secret), "utf8")
  const received = Buffer.from(token, "utf8")
  return expected.length === received.length && timingSafeEqual(expected, received)
}
