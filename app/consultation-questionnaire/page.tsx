import { Suspense } from "react"
import { ConsultationQuestionnairePage } from "@/components/pages/consultation-questionnaire-page"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/consultation-questionnaire/",
  title: "Pre-Call Wedding Questionnaire — CeremonyVerse",
  description:
    "Prepare for a CeremonyVerse wedding consultation by sharing the timing, events, priorities, destination status, budget scope, and India-sourcing needs known today.",
  noIndex: true,
})

export default function ConsultationQuestionnaireRoute() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-[#faf8f5] px-6 text-[#4d403a]">
          Preparing your questionnaire…
        </main>
      }
    >
      <ConsultationQuestionnairePage />
    </Suspense>
  )
}
