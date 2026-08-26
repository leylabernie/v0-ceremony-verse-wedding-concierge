import { NextRequest, NextResponse } from "next/server"
import { createConsultationRequestStateStore } from "@/lib/consultation-request-state.mjs"
import { sendNurtureMessage } from "@/lib/consultation-nurture"

export const runtime = "nodejs"
export const maxDuration = 60

const consultationRequestStateStore = createConsultationRequestStateStore()

function authorized(request: NextRequest): boolean {
  const secret = process.env.CRON_SECRET?.trim()
  return Boolean(secret && request.headers.get("authorization") === `Bearer ${secret}`)
}

export async function GET(request: NextRequest) {
  if (!authorized(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized." }, { status: 401 })
  }

  try {
    const dueStates = await consultationRequestStateStore.claimDueNurture({ limit: 6 })
    const results = await Promise.all(
      dueStates.map(async (state: { requestId: string; nurtureStep?: number }) => {
        const step = Number(state.nurtureStep || 0)
        const delivery = await sendNurtureMessage(state)
        if (!delivery.sent) {
          await consultationRequestStateStore.releaseNurtureLock(state.requestId)
          return { requestId: state.requestId, sent: false }
        }

        await consultationRequestStateStore.advanceNurture(state.requestId, {
          expectedStep: step,
          nextDueAt: delivery.nextDueAt,
        })
        return { requestId: state.requestId, sent: true }
      }),
    )

    return NextResponse.json({ success: true, processed: results.length, sent: results.filter((result) => result.sent).length })
  } catch {
    return NextResponse.json({ success: false, error: "Nurture processing is temporarily unavailable." }, { status: 503 })
  }
}
