"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "12153419990"; // no + or spaces
  const message = encodeURIComponent(
    "Hi, I'm interested in wedding shopping services from CeremonyVerse."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </Link>
    </div>
  );
}
