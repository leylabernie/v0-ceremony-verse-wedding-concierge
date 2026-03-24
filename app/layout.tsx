import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";

export const metadata = {
  title: "CeremonyVerse",
  description: "Indian Wedding Shopping & Sourcing",
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
