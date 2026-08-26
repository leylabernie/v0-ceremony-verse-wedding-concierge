import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { validConsultationCompletionToken } from "@/lib/consultation-completion"
import { createConsultationRequestStateStore } from "@/lib/consultation-request-state.mjs"

export const runtime = "nodejs"

const completionSchema = z.object({
  requestId: z.string().uuid(),
  token: z.string().regex(/^[0-9a-f]{64}$/i),
  nurtureNote: z.string().trim().max(800).optional().default(""),
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
    return NextResponse.json({ success: false, error: "Invalid completion request." }, { status: 400 })
  }

  const parsed = completionSchema.safeParse(body)
  if (!parsed.success || !validConsultationCompletionToken(parsed.data.requestId, parsed.data.token)) {
    return NextResponse.json({ success: false, error: "This completion link is not valid." }, { status: 403 })
  }

  try {
    const result = await consultationRequestStateStore.markConsultationCompleted(parsed.data.requestId, {
      nurtureNote: parsed.data.nurtureNote,
    })

    if (!result.found) {
      return NextResponse.json({ success: false, error: "This consultation request could not be found." }, { status: 404 })
    }

    if (!result.transitioned && result.state?.status !== "consultation_completed") {
      return NextResponse.json(
        { success: false, error: "Complete the pre-call questionnaire before recording the consultation." },
        { status: 409 },
      )
    }

    if (!result.transitioned) {
      return NextResponse.json({ success: true, alreadyCompleted: true, nurtureEligible: result.nurtureEligible })
    }

    return NextResponse.json({ success: true, nurtureEligible: result.nurtureEligible })
  } catch {
    return NextResponse.json({ success: false, error: "Completion tracking is temporarily unavailable." }, { status: 503 })
  }
}
