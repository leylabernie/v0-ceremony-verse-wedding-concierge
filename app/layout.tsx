import type { Metadata } from "next"
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import WhatsAppFloat from "@/components/ui/whatsapp-float"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant" })

export const metadata: Metadata = {
  title: "CeremonyVerse",
  description: "Indian wedding outfit sourcing concierge"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased" style={{ backgroundColor: "var(--cv-bg)" }}>

        {children}
        <WhatsAppFloat />

        {/* ✅ CLEAN SCHEMA (WORKING) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "name": "CeremonyVerse",
                  "url": "https://ceremonyverse.com",
                  "description": "Personal Indian wedding outfit sourcing service helping US-based clients shop directly from trusted designers in India.",
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Can I buy Indian wedding outfits without traveling to India?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. CeremonyVerse helps you shop directly from India through guided video sessions."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I ensure quality when buying from India?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You review fabrics, colors, and designs through live video and every item is checked before delivery."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you help with bridal, groom, and group outfits?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We assist with bridal, groom, bridesmaid, groomsmen, and family outfits with coordinated styling."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I customize my outfit?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. You can share references or choose from options and everything is tailored to your preferences."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the typical timeline?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Timelines vary based on design and quantity, but we guide you with clear schedules to ensure timely delivery."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />

        <Analytics />
      </body>
    </html>
  )
}
