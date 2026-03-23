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
      <body className="font-sans antialiased" style={{ backgroundColor: '#F4E0E0' }}>
        {children}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "CeremonyVerse",
      "url": "https://ceremonyverse.com",
      "description": "Personal Indian wedding outfit sourcing service helping US-based clients shop directly from trusted manufacturers in India through live video consultations.",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "serviceType": [
        "Indian Wedding Outfit Sourcing",
        "Bridal Lehenga Sourcing",
        "Sherwani Sourcing"
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "name": "Live Video Shopping",
        "description": "Clients view fabrics and embroidery in real-time via video calls from verified boutiques in India."
      },
      "availableService": {
        "@type": "Service",
        "name": "August 2026 Availability",
        "description": "Accepting limited clients for August 2026 weddings."
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-215-341-9990",
        "contactType": "customer service"
      }
    })
  }}
/>

<Analytics />
      </body>
    </html>
  )
}
