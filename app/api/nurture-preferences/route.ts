import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { validNurtureOptOutToken } from "@/lib/consultation-completion"
import { createConsultationRequestStateStore } from "@/lib/consultation-request-state.mjs"

export const runtime = "nodejs"

const preferenceSchema = z.object({
  requestId: z.string().uuid(),
  token: z.string().regex(/^[0-9a-f]{64}$/i),
})

const consultationRequestStateStore = createConsultationRequestStateStore()

function safeOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin")
  if (!origin) return true
  try {
    const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim()
    const requestHost = forwardedHost || request.headers.get("host") || request.nextUrl.host
    return new URL(origin).host === requestHost
  } catch {
    return false
  }
}

export async function POST(request: NextRequest) {
  if (!safeOrigin(request)) {
    return NextResponse.json({ success: false, error: "Invalid request origin." }, { status: 403 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, error: "Invalid preference request." }, { status: 400 })
  }

  const parsed = preferenceSchema.safeParse(body)
  if (!parsed.success || !validNurtureOptOutToken(parsed.data.requestId, parsed.data.token)) {
    return NextResponse.json({ success: false, error: "This preference link is not valid." }, { status: 403 })
  }

  try {
    const result = await consultationRequestStateStore.withdrawNurture(parsed.data.requestId)
    if (!result.found) {
      return NextResponse.json({ success: false, error: "This consultation request could not be found." }, { status: 404 })
    }
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, error: "Preference tracking is temporarily unavailable." }, { status: 503 })
  }
}
