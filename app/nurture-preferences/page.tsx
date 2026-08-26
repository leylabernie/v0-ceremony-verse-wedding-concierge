import type { Metadata } from "next"
import { NurturePreferencesPage } from "@/components/pages/nurture-preferences-page"

export const metadata: Metadata = {
  title: "Planning Follow-Up Preferences — CeremonyVerse",
  robots: { index: false, follow: false },
}

export default async function NurturePreferencesRoute({
  searchParams,
}: {
  searchParams: Promise<{ request?: string; token?: string }>
}) {
  const params = await searchParams
  return <NurturePreferencesPage requestId={params.request || ""} token={params.token || ""} />
}
