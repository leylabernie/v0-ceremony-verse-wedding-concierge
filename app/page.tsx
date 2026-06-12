import Link from 'next/link';

// SEO Metadata
export const metadata = {
  title: 'CeremonyVerse | Bespoke Indian Bridal Shopping for NRI Brides',
  description: 'Your personal concierge for authentic Indian bridal wear. We source, verify via live video, and ship your dream lehenga directly to the USA. Stress-free, scam-free, perfectly fitted.',
  keywords: 'buy lehenga online USA, NRI bride shopping India, Indian bridal wear delivery to US, wedding concierge, live video lehenga shopping',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans antialiased">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-gradient-to-b from-stone-100 via-white to-stone-50 py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-100 rounded-full blur-3xl opacity-40"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <p className="text-amber-700 font-serif italic text-lg mb-6 tracking-widest uppercase text-xs">Bespoke Bridal Concierge</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-8 text-stone-900 leading-[1.1]">
            Authentic Indian Bridal Wear,<br />
            <span className="text-amber-700 italic font-normal">Curated & Delivered to the USA</span>
          </h1>
          <p className="text-lg text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Stop worrying about scams, bad sizing, and shipping nightmares. 
            CeremonyVerse is your on-the-ground luxury shopping concierge in India. 
            We source, verify via live video, and ship your dream outfit directly to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-stone-900 hover:bg-stone-800 text-white font-medium py-4 px-10 rounded-none text-sm tracking-wider uppercase transition-all shadow-sm"
            >
              Book Discovery Call
            </Link>
            <Link 
              href="/guide"
              className="bg-transparent border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white font-medium py-4 px-10 rounded-none text-sm tracking-wider uppercase transition-all"
            >
              Get the Shopping Guide
            </Link>
          </div>
        </div>
      </header>

      {/* --- VALUE PROPOSITION SECTION --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-700 font-serif italic text-sm mb-3 tracking-widest uppercase">The CeremonyVerse Difference</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
              Why NRI Brides Choose Us
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 border border-stone-100 bg-stone-50/50">
              <div className="text-4xl mb-6 text-amber-700">📹</div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Live Video Sourcing</h3>
              <p className="text-stone-600 leading-relaxed font-light text-sm">
                Don't rely on heavily edited photos. We get on a live WhatsApp video call with you from the markets in India. See the exact fabric, real color, and actual embroidery before you pay.
              </p>
            </div>
            <div className="text-center p-8 border border-stone-100 bg-stone-50/50">
              <div className="text-4xl mb-6 text-amber-700">🛡️</div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Scam-Proof Authentication</h3>
              <p className="text-stone-600 leading-relaxed font-light text-sm">
                The Indian bridal market is full of counterfeits. We physically verify the authenticity of every piece, ensuring you get exactly the designer quality you paid for.
              </p>
            </div>
            <div className="text-center p-8 border border-stone-100 bg-stone-50/50">
              <div className="text-4xl mb-6 text-amber-700"></div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-4">Perfect Fit, Guaranteed</h3>
              <p className="text-stone-600 leading-relaxed font-light text-sm">
                No more guessing sizes. We provide a foolproof measurement guide, and our expert tailors do a final quality check to ensure your outfit fits flawlessly in the US.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING / SERVICES SECTION --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-amber-700 font-serif italic text-sm mb-3 tracking-widest uppercase">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">
              Choose Your Shopping Experience
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto font-light">
              Transparent pricing. No hidden vendor markups. Just premium, stress-free service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-white p-10 border border-stone-200 flex flex-col">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">The Style Guide</h3>
              <p className="text-4xl font-serif font-bold text-amber-700 mb-6">$149</p>
              <p className="text-stone-600 mb-8 flex-grow font-light text-sm leading-relaxed">Perfect for the DIY bride who wants to shop independently but safely.</p>
              <ul className="space-y-4 mb-10 text-stone-700 text-sm">
                <li className="flex items-start"><span className="text-amber-600 mr-3 text-lg leading-none">✓</span> Comprehensive digital shopping guide</li>
                <li className="flex items-start"><span className="text-amber-600 mr-3 text-lg leading-none">✓</span> Foolproof at-home measurement tutorial</li>
                <li className="flex items-start"><span className="text-amber-600 mr-3 text-lg leading-none">✓</span> Customs & shipping cheat sheet</li>
              </ul>
              <Link href="/guide" className="block text-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white py-3 font-medium text-xs tracking-wider uppercase transition-colors">
                Get the Guide
              </Link>
            </div>

            {/* Tier 2 (Highlighted) - FIXED CONTRAST */}
            <div className="bg-stone-900 p-10 border border-stone-900 flex flex-col relative shadow-xl">
              <div className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest">Most Popular</div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Sourcing Concierge</h3>
              <p className="text-4xl font-serif font-bold text-amber-500 mb-6">$599</p>
              <p className="text-stone-300 mb-8 flex-grow font-light text-sm leading-relaxed">We do the heavy lifting. Tell us your vision, we find it.</p>
              <ul className="space-y-4 mb-10 text-stone-100 text-sm">
                <li className="flex items-start"><span className="text-amber-500 mr-3 text-lg leading-none">✓</span> Everything in the Style Guide</li>
                <li className="flex items-start"><span className="text-amber-500 mr-3 text-lg leading-none">✓</span> We source 3-5 custom options for you</li>
                <li className="flex items-start"><span className="text-amber-500 mr-3 text-lg leading-none">✓</span> Live video verification calls</li>
                <li className="flex items-start"><span className="text-amber-500 mr-3 text-lg leading-none">✓</span> Vendor negotiation & quality checks</li>
                <li className="flex items-start"><span className="text-amber-500 mr-3 text-lg leading-none">✓</span> Direct international shipping to US</li>
              </ul>
              <Link href="/contact" className="block text-center bg-amber-600 hover:bg-amber-700 text-white py-3 font-medium text-xs tracking-wider uppercase transition-colors">
                Book Free Consultation
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="bg-white p-10 border border-stone-200 flex flex-col">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">VIP NRI Experience</h3>
              <p className="text-4xl font-serif font-bold text-amber-700 mb-6">$1,499</p>
              <p className="text-stone-600 mb-8 flex-grow font-light text-sm leading-relaxed">The ultimate white-glove service for the discerning bride.</p>
              <ul className="space-y-4 mb-10 text-stone-700 text-sm">
                <li className="flex items-start"><span className="text-amber-600 mr-3 text-lg leading-none">✓</span> Everything in Sourcing Concierge</li>
                <li className="flex items-start"><span className="text-amber-600 mr-3 text-lg leading-none">✓</span> In-person tailor fittings in India (if visiting)</li>
                <li className="flex items-start"><span className="text-amber-600 mr-3 text-lg leading-none">✓</span> Custom alterations & premium packaging</li>
                <li className="flex items-start"><span className="text-amber-600 mr-3 text-lg leading-none">✓</span> Priority DHL Express shipping</li>
                <li className="flex items-start"><span className="text-amber-600 mr-3 text-lg leading-none">✓</span> Dedicated 24/7 WhatsApp support line</li>
              </ul>
              <Link href="/contact" className="block text-center border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white py-3 font-medium text-xs tracking-wider uppercase transition-colors">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-4 border-t border-stone-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif font-bold text-white mb-4 tracking-wide">CeremonyVerse</h3>
          <p className="mb-8 font-light text-sm text-stone-400">Making NRI bridal shopping safe, seamless, and stress-free.</p>
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <a href="mailto:hello@ceremonyverse.com" className="hover:text-amber-500 transition-colors font-light">hello@ceremonyverse.com</a>
            <a href="https://wa.me/+1-215-341-9990" className="hover:text-amber-500 transition-colors font-light">WhatsApp Us</a>
          </div>
          <p className="text-xs text-stone-600">© {new Date().getFullYear()} CeremonyVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
