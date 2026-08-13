import { NextRequest, NextResponse } from "next/server"
import { POST as submitConsultation } from "@/app/api/consultation/route"
import { POST as submitQuestionnaire } from "@/app/api/consultation-questionnaire/route"

export const runtime = "nodejs"

const expiresAt = Date.parse("2026-08-13T17:50:00Z")
const testToken = "scE01OVfmVCuS2E1vX2qfYWaFgjX6Z2g"

function unavailable(): NextResponse {
  return NextResponse.json({ success: false }, { status: 404 })
}

export async function GET(request: NextRequest) {
  if (
    process.env.VERCEL_ENV !== "preview" ||
    Date.now() >= expiresAt ||
    request.nextUrl.searchParams.get("token") !== testToken
  ) {
    return unavailable()
  }

  const origin = request.nextUrl.origin
  const testEmail = "hello@ceremonyverse.com"
  const testName = "CeremonyVerse Preview Test"

  const consultationRequest = new NextRequest(`${origin}/api/consultation/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: origin,
      Host: request.nextUrl.host,
      "x-forwarded-host": request.nextUrl.host,
      "x-forwarded-for": "127.0.0.1",
    },
    body: JSON.stringify({
      serviceInterest: "Destination wedding planning",
      name: testName,
      email: testEmail,
      phone: "",
      clientCountry: "United States",
      eventTimeframe: "Preview test only — not a real inquiry",
      eventLocation: "Mexico or Punta Cana test",
      guestCount: "100",
      eventCount: "4",
      budgetRange: "Test only",
      budgetIncludes: "Test only",
      travelOrigins: "Test only",
      outfitPartySize: "",
      vision: "Automated preview verification. Do not treat as a lead.",
      referralSource: "Internal preview test",
      privacyConsent: true,
      website: "",
      attribution: {
        source: "internal-preview-test",
        medium: "e2e",
        campaign: "consultation-flow-verification",
        content: "",
        term: "",
        landing_page: "/contact/",
        referrer: "",
        gclid: "",
      },
    }),
  })

  const consultationResponse = await submitConsultation(consultationRequest)
  const consultationResult = (await consultationResponse.json()) as {
    success?: boolean
    questionnaireSent?: boolean
    requestId?: string
    error?: string
  }

  if (!consultationResponse.ok || !consultationResult.success || !consultationResult.requestId) {
    return NextResponse.json(
      {
        success: false,
        stage: "consultation",
        status: consultationResponse.status,
        questionnaireSent: Boolean(consultationResult.questionnaireSent),
        error: consultationResult.error || "Consultation submission failed.",
      },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    )
  }

  const questionnaireRequest = new NextRequest(`${origin}/api/consultation-questionnaire/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: origin,
      Host: request.nextUrl.host,
      "x-forwarded-host": request.nextUrl.host,
      "x-forwarded-for": "127.0.0.1",
    },
    body: JSON.stringify({
      requestId: consultationResult.requestId,
      serviceFocus: "Destination wedding planning",
      name: testName,
      email: testEmail,
      relationship: "Other",
      weddingTimeframe: "Preview test only — not a real inquiry",
      dateFlexibility: "",
      weekdayAvailability: "",
      planningSupportStatus: "",
      topPriorities: "Verify secure questionnaire delivery.",
      privacyConsent: true,
      website: "",
    }),
  })

  const questionnaireResponse = await submitQuestionnaire(questionnaireRequest)
  const questionnaireResult = (await questionnaireResponse.json()) as {
    success?: boolean
    error?: string
  }

  return NextResponse.json(
    {
      success: Boolean(questionnaireResult.success),
      consultationAccepted: true,
      questionnaireInvitationAccepted: Boolean(consultationResult.questionnaireSent),
      questionnaireAccepted: Boolean(questionnaireResult.success),
      questionnaireStatus: questionnaireResponse.status,
      error: questionnaireResult.error || null,
    },
    {
      status: questionnaireResponse.ok && questionnaireResult.success ? 200 : 500,
      headers: { "Cache-Control": "no-store" },
    },
  )
}
