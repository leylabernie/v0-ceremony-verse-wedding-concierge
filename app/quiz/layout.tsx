import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Find Your Indian Wedding Style — Free Quiz | CeremonyVerse",
  description:
    "Take our 2-minute quiz to get personalized Indian wedding outfit recommendations based on your style, tradition, budget, and timeline. Free for NRI brides and grooms.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/quiz",
  },
  openGraph: {
    title: "Find Your Indian Wedding Style — Free Quiz | CeremonyVerse",
    description:
      "Take our 2-minute quiz to get personalized Indian wedding outfit recommendations.",
    type: "website",
    url: "https://www.ceremonyverse.com/quiz",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ceremonyverse",
    title: "Find Your Indian Wedding Style — Free Quiz | CeremonyVerse",
    description:
      "Take our 2-minute quiz to get personalized Indian wedding outfit recommendations.",
  },
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
