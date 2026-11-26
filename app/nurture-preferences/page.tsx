import type { Metadata } from "next"
import { NurturePreferencesPage } from "@/components/pages/nurture-preferences-page"
import { canonicalUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Planning Follow-Up Preferences — CeremonyVerse",
  alternates: { canonical: canonicalUrl("/nurture-preferences/") },
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
