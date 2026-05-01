import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Bridal Lehenga Consultation — Source Direct from India | CeremonyVerse",
  description:
    "Book a free 30-minute consultation with CeremonyVerse. See real bridal lehengas from India on live video, get honest pricing, and have your dream outfit delivered to your door in the USA.",
  alternates: {
    canonical: "https://www.ceremonyverse.com/bridal-lehenga-free-consultation",
  },
  openGraph: {
    title: "Free Bridal Lehenga Consultation — Source Direct from India",
    description:
      "See real lehengas from India on live video. Free consultation, no commitment.",
    type: "website",
    url: "https://www.ceremonyverse.com/bridal-lehenga-free-consultation",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ceremonyverse",
    title: "Free Bridal Lehenga Consultation — Source Direct from India",
    description:
      "See real lehengas from India on live video. Free consultation, no commitment.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AdLandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
