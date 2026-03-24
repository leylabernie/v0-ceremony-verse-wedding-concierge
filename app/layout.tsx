import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CeremonyVerse | Premium South Asian Wedding Sourcing Concierge',
  description: 'Source authentic, custom-made wedding outfits, ethical heritage weaves, jewelry, and ceremonial items directly from factory manufacturers in India. Your trusted personal sourcing team.',
  keywords: 'South Asian wedding, Indian wedding outfits, custom sherwanis, lehengas, Kanchipuram silk sarees, wedding sourcing USA, groomsmen outfits',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased" style={{ backgroundColor: 'var(--cv-bg)' }}>
        {children}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
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
                "text": "Yes. CeremonyVerse helps you shop directly from India through guided video sessions, so you can select outfits without traveling."
              }
            },

            {
              "@type": "Question",
              "name": "How do I ensure quality when buying from India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Each outfit is reviewed before delivery. You also see fabrics, colors, and designs during live video selection."
              }
            },

            {
              "@type": "Question",
              "name": "Can you help with bridesmaid and family outfits?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We coordinate outfits for bridesmaids, groomsmen, and family members with consistent colors, styles, and sizing."
              }
            },

            {
              "@type": "Question",
              "name": "Do you offer custom bridal lehengas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. You can create custom designs or choose from ready options, with guidance throughout the process."
              }
            },

            {
              "@type": "Question",
              "name": "How long does delivery take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Timelines depend on design complexity, but we guide you with clear schedules and ensure delivery before your event."
              }
            }

          ]
        }

      ]
    })
  }}
/>
  }}
/>

<Analytics />
      </body>
    </html>
  )
}
