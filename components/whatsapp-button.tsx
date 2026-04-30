"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "12153419990";
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
        {/* Inline WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="24"
          height="24"
          fill="white"
        >
          <path d="M16.001 3.2c-7.058 0-12.8 5.742-12.8 12.8 0 2.257.59 4.458 1.71 6.4L3.2 28.8l6.528-1.707a12.734 12.734 0 006.273 1.707h.001c7.058 0 12.8-5.742 12.8-12.8S23.059 3.2 16.001 3.2zm0 23.467a10.6 10.6 0 01-5.4-1.493l-.386-.229-3.875 1.013 1.035-3.779-.251-.395a10.62 10.62 0 01-1.635-5.783c0-5.876 4.724-10.667 10.533-10.667 5.806 0 10.533 4.791 10.533 10.667 0 5.875-4.727 10.666-10.533 10.666zm5.835-7.92c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.57-1.588-.95-.848-1.59-1.893-1.776-2.213-.187-.32-.02-.493.14-.653.147-.146.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.626-.526-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.257 3.447 5.467 4.827.764.33 1.36.527 1.825.674.767.244 1.466.21 2.02.127.616-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373z" />
        </svg>
      </Link>
    </div>
  );
}
