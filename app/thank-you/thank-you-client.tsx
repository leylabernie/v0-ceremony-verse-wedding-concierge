"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// This component handles reading the URL parameters
function ThankYouMessage() {
  const searchParams = useSearchParams();
  // This checks if your form passed a name (e.g., ?name=Sarah)
  const name = searchParams.get('name'); 

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-lg text-center bg-white p-10 rounded-2xl shadow-lg border border-stone-200">
        <div className="text-5xl mb-4">💌</div>
        <h1 className="text-3xl font-bold text-stone-900 mb-4">
          Thank You{name ? `, ${name}` : ''}!
        </h1>
        <p className="text-stone-600 text-lg mb-8 leading-relaxed">
          Your message has been received. A member of the CeremonyVerse team will be in touch within 24 hours to schedule your free discovery call.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-rose-700 hover:bg-rose-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}

// The Suspense wrapper and "use client" directive fix the Vercel build error!
export function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-stone-500">Loading...</div>}>
      <ThankYouMessage />
    </Suspense>
  );
}
