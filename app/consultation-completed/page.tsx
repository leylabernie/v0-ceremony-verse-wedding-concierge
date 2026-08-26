import type { Metadata } from "next"
import { ConsultationCompletedPage } from "@/components/pages/consultation-completed-page"

export const metadata: Metadata = {
  title: "Consultation Completion — CeremonyVerse",
  robots: { index: false, follow: false },
}

export default async function ConsultationCompletedRoute({
  searchParams,
}: {
  searchParams: Promise<{ request?: string; token?: string }>
}) {
  const params = await searchParams
  const requestId = params.request || ""
  const token = params.token || ""

  return <ConsultationCompletedPage requestId={requestId} token={token} />
}
