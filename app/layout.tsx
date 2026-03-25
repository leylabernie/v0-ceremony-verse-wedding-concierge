import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "Indian Wedding Outfit Sourcing from India | Bridal Concierge for US Families | CeremonyVerse",
  description: "CeremonyVerse helps US-based South Asian families source authentic bridal lehengas, sherwanis, bridesmaid outfits, and jewelry directly from India — with live video shopping, quality checks, and delivery to your door. No flights. No scams.",
  keywords: "Indian wedding outfit sourcing USA, bridal lehenga from India, buy sherwani USA, Indian bridal concierge, NRI wedding shopping, Indian wedding outfits delivered USA, live video shopping India, South Asian bridal lehenga",
  openGraph: {
    title: "Indian Wedding Outfit Sourcing from India | CeremonyVerse",
    description: "Authentic Indian bridal lehengas, sherwanis, and family outfits sourced directly from India — with live video shopping and delivery to the US.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* SINGLE WhatsApp Button (global) */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
