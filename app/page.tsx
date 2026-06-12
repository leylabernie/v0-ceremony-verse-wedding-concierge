import Link from 'next/link';

export const metadata = {
  title: 'CeremonyVerse | Bespoke Indian Bridal Shopping for NRI Brides',
  description: 'Your personal concierge for authentic Indian bridal wear. We source, verify via live video, and ship your dream lehenga directly to the USA.',
  keywords: 'buy lehenga online USA, NRI bride shopping India, Indian bridal wear delivery to US',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased">
      
      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-b from-stone-100 via-white to-stone-50 py-28 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-700 font-serif italic mb-6 uppercase text-xs tracking-widest">Bespoke Bridal Concierge</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-8 text-stone-900">
            Authentic Indian Bridal Wear,<br />
            <span className="text-amber-700 italic">Curated & Delivered to the USA</span>
          </h1>
          <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto font-light">
            Stop worrying about scams, bad sizing, and shipping nightmares. 
            CeremonyVerse is your on-the-ground luxury shopping concierge in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-stone-900 hover:bg-stone-800 text-white font-medium py-4 px-10 uppercase text-sm tracking-wider">
              Book Discovery Call
            </Link>
            <Link href="/guide" className="border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white font-medium py-4 px-10 uppercase text-sm tracking-wider">
              Get the Shopping Guide
            </Link>
            <a href="https://wa.me/12153419990" className="bg-amber-700 hover:bg-amber-800 text-white font-medium py-4 px-10 uppercase text-sm tracking-wider flex items-center justify-center gap-2">
               WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* VALUE PROPOSITION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-stone-900 mb-16">Why NRI Brides Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-serif font-bold mb-3">Live Video Sourcing</h3>
              <p className="text-stone-600 font-light">See the exact fabric and embroidery via live WhatsApp call before you pay.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-serif font-bold mb-3">Scam-Proof</h3>
              <p className="text-stone-600 font-light">We physically verify authenticity of every piece.</p>
            </div>
            <div className="text-center p-8">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-serif font-bold mb-3">Perfect Fit</h3>
              <p className="text-stone-600 font-light">Expert tailors ensure your outfit fits flawlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-stone-900 mb-16">Choose Your Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Tier 1 */}
            <div className="bg-white p-10 border border-stone-200">
              <h3 className="text-2xl font-serif font-bold mb-2">The Style Guide</h3>
              <p className="text-4xl font-serif font-bold text-amber-700 mb-6">$149</p>
              <ul className="space-y-3 mb-8 text-stone-700 text-sm">
                <li>✓ Digital shopping guide</li>
                <li>✓ Measurement tutorial</li>
                <li>✓ Customs cheat sheet</li>
              </ul>
              <Link href="/guide" className="block text-center border border-stone-900 py-3 uppercase text-xs tracking-wider hover:bg-stone-900 hover:text-white">Get the Guide</Link>
            </div>

            {/* Tier 2 - DARK CARD WITH LIGHT TEXT */}
            <div className="bg-stone-900 p-10 border border-stone-800 relative">
              <div className="absolute top-0 right-0 bg-amber-600 text-white text-xs px-3 py-1 uppercase">Most Popular</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Sourcing Concierge</h3>
              <p className="text-4xl font-serif font-bold text-amber-400 mb-6">$599</p>
              <ul className="space-y-3 mb-8 text-stone-200 text-sm">
                <li>✓ Everything in Style Guide</li>
                <li>✓ We source 3-5 options for you</li>
                <li>✓ Live video verification calls</li>
                <li>✓ Vendor negotiation</li>
                <li>✓ Direct shipping to US</li>
              </ul>
              <Link href="/contact" className="block text-center bg-amber-600 hover:bg-amber-700 text-white py-3 uppercase text-xs tracking-wider">Book Consultation</Link>
            </div>

            {/* Tier 3 */}
            <div className="bg-white p-10 border border-stone-200">
              <h3 className="text-2xl font-serif font-bold mb-2">VIP Experience</h3>
              <p className="text-4xl font-serif font-bold text-amber-700 mb-6">$1,499</p>
              <ul className="space-y-3 mb-8 text-stone-700 text-sm">
                <li>✓ Everything in Concierge</li>
                <li>✓ In-person fittings in India</li>
                <li>✓ Premium packaging</li>
                <li>✓ Priority DHL shipping</li>
                <li>✓ 24/7 WhatsApp support</li>
              </ul>
              <Link href="/contact" className="block text-center border border-stone-900 py-3 uppercase text-xs tracking-wider hover:bg-stone-900 hover:text-white">Book Consultation</Link>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-4 text-center">
        <h3 className="text-2xl font-serif font-bold text-white mb-4">CeremonyVerse</h3>
        <p className="text-sm mb-8">Making NRI bridal shopping safe and seamless.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          <a href="https://wa.me/12153419990" className="text-stone-300 hover:text-amber-400 transition-colors font-light">
            WhatsApp: +1 (215) 341-9990
          </a>
          <span className="hidden sm:block text-stone-600">|</span>
          <a href="mailto:hello@ceremonyverse.com" className="text-stone-300 hover:text-amber-400 transition-colors font-light">
            hello@ceremonyverse.com
          </a>
        </div>

        <p className="text-xs text-stone-600">© {new Date().getFullYear()} CeremonyVerse</p>
      </footer>
    </div>
  );
}
