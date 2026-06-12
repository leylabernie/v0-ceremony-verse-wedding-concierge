import Link from 'next/link';

// SEO Metadata: This tells Google exactly what your site is about
export const metadata = {
  title: 'Buy Authentic Indian Bridal Lehengas in the USA | CeremonyVerse',
  description: 'Stop worrying about scams, bad sizing, and shipping nightmares. CeremonyVerse is your personal on-the-ground shopping concierge in India. We source, verify via live video, and ship your dream outfit directly to your door in the US.',
  keywords: 'buy lehenga online USA, NRI bride shopping India, Indian bridal wear delivery to US, wedding concierge, live video lehenga shopping',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <header className="bg-stone-900 text-stone-50 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-rose-100">
            Buy Authentic Indian Bridal Lehengas in the USA
          </h1>
          <p className="text-xl sm:text-2xl text-stone-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Stop worrying about scams, bad sizing, and shipping nightmares. 
            CeremonyVerse is your personal on-the-ground shopping concierge in India. 
            We source, verify via live video, and ship your dream outfit directly to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-rose-700 hover:bg-rose-800 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
            >
              Book Your Free Discovery Call
            </Link>
            <Link 
              href="/guide" 
              className="bg-transparent border-2 border-rose-400 text-rose-100 hover:bg-rose-900/50 font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Get the $149 NRI Bride Shopping Guide
            </Link>
          </div>
        </div>
      </header>

      {/* --- VALUE PROPOSITION SECTION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-stone-900 mb-16">
            Why NRI Brides Trust CeremonyVerse Over Big Retailers
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="text-center p-6 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Live Video Sourcing</h3>
              <p className="text-stone-600 leading-relaxed">
                Don't rely on heavily edited website photos. We go to the markets and designers in India and get on a live WhatsApp video call with you. You see the exact fabric, real color, and actual embroidery before you pay.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-6 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Scam-Proof Authentication</h3>
              <p className="text-stone-600 leading-relaxed">
                The Indian bridal market is full of counterfeit designers and bait-and-switch tactics. We physically verify the authenticity of every piece, ensuring you get exactly what you paid for.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-6 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-4xl mb-4">📏</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Perfect Fit, Guaranteed</h3>
              <p className="text-stone-600 leading-relaxed">
                No more guessing your sizes over email. We provide a foolproof, step-by-step measurement guide, and our tailors in India do a final quality check to ensure your outfit fits perfectly in the US.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING / SERVICES SECTION --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-stone-900 mb-4">
            Choose Your Shopping Experience
          </h2>
          <p className="text-center text-stone-600 mb-16 max-w-2xl mx-auto">
            Transparent pricing. No hidden vendor markups. Just premium, stress-free service.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">The Style Guide</h3>
              <p className="text-4xl font-bold text-rose-700 mb-6">$149</p>
              <p className="text-stone-600 mb-6 flex-grow">Perfect for the DIY bride who wants to shop independently but safely.</p>
              <ul className="space-y-3 mb-8 text-stone-700">
                <li className="flex items-start"><span className="text-rose-600 mr-2">✓</span> Comprehensive digital shopping guide</li>
                <li className="flex items-start"><span className="text-rose-600 mr-2">✓</span> Foolproof at-home measurement tutorial</li>
                <li className="flex items-start"><span className="text-rose-600 mr-2">✓</span> Customs & shipping cheat sheet</li>
              </ul>
              <Link href="/guide" className="block text-center bg-stone-900 text-white py-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors">
                Get the Guide
              </Link>
            </div>

            {/* Tier 2 (Highlighted) */}
            <div className="bg-stone-900 text-stone-50 p-8 rounded-2xl shadow-xl border-2 border-rose-500 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Sourcing Concierge</h3>
              <p className="text-4xl font-bold text-rose-400 mb-6">$599</p>
              <p className="text-stone-300 mb-6 flex-grow">We do the heavy lifting. Tell us your vision, we find it.</p>
              <ul className="space-y-3 mb-8 text-stone-200">
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span> Everything in the Style Guide</li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span> We source 3-5 custom options for you</li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span> Live video verification calls</li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span> Vendor negotiation & quality checks</li>
                <li className="flex items-start"><span className="text-rose-400 mr-2">✓</span> Direct international shipping to US</li>
              </ul>
              <Link href="/contact" className="block text-center bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors">
                Book Free Consultation
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex flex-col">
              <h3 className="text-2xl font-bold text-stone-900 mb-2">VIP NRI Experience</h3>
              <p className="text-4xl font-bold text-rose-700 mb-6">$1,499</p>
              <p className="text-stone-600 mb-6 flex-grow">The ultimate white-glove service for the discerning bride.</p>
              <ul className="space-y-3 mb-8 text-stone-700">
                <li className="flex items-start"><span className="text-rose-600 mr-2">✓</span> Everything in Sourcing Concierge</li>
                <li className="flex items-start"><span className="text-rose-600 mr-2">✓</span> In-person tailor fittings in India (if visiting)</li>
                <li className="flex items-start"><span className="text-rose-600 mr-2">✓</span> Custom alterations & premium packaging</li>
                <li className="flex items-start"><span className="text-rose-600 mr-2">✓</span> Priority DHL Express shipping</li>
                <li className="flex items-start"><span className="text-rose-600 mr-2">✓</span> Dedicated 24/7 WhatsApp support line</li>
              </ul>
              <Link href="/contact" className="block text-center bg-stone-900 text-white py-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-stone-100 mb-4">CeremonyVerse</h3>
          <p className="mb-6">Making NRI bridal shopping safe, seamless, and stress-free.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:hello@ceremonyverse.com" className="hover:text-rose-400 transition-colors">hello@ceremonyverse.com</a>
            <a href="https://wa.me/+1-215-341-9990" className="hover:text-rose-400 transition-colors">WhatsApp Us</a>
          </div>
          <p className="text-sm text-stone-600">© {new Date().getFullYear()} CeremonyVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
