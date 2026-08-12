import Link from "next/link"

const columns = [
  {
    title: "Planning",
    links: [
      ["Services", "/services/"],
      ["Pricing", "/pricing/"],
      ["Our Process", "/how-it-works/"],
      ["Free Planning Tools", "/planning-tools/"],
    ],
  },
  {
    title: "Destinations",
    links: [
      ["Mexico", "/destinations/"],
      ["Jamaica", "/destinations/jamaica-indian-wedding/"],
      ["Punta Cana", "/destinations/punta-cana-indian-wedding/"],
      ["Complete Wedding Cost", "/indian-destination-wedding-cost/"],
    ],
  },
  {
    title: "CeremonyVerse",
    links: [
      ["About", "/about/"],
      ["India Sourcing", "/buy-indian-wedding-outfits-from-india/"],
      ["Questions", "/faq/"],
      ["Journal", "/blog/"],
    ],
  },
]

export function GlobalFooter() {
  return (
    <footer className="border-t border-[#39312b] bg-[#211d19] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.35fr_2fr] lg:py-20">
        <div className="max-w-md">
          <Link href="/" className="font-serif text-2xl font-semibold uppercase tracking-[0.18em] !text-white">CEREMONY<span className="font-light !text-[#caa867]">VERSE</span></Link>
          <p className="mt-5 text-sm leading-7 !text-white/65">Thoughtful Gujarati and Hindu destination-wedding planning across Mexico, Jamaica, and Punta Cana, with optional India sourcing for families across the USA and Canada.</p>
          <div className="mt-6 space-y-2 text-sm">
            <a href="mailto:hello@ceremonyverse.com" className="block !text-[#e7c98e]">hello@ceremonyverse.com</a>
            <a href="https://wa.me/12153419990" target="_blank" rel="noopener noreferrer" className="block !text-[#e7c98e]">WhatsApp or call +1 (215) 341-9990</a>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] !text-[#caa867]">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map(([label, href]) => <li key={href}><Link href={href} className="text-sm !text-white/68 hover:!text-white">{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs !text-white/45">
          <p className="text-xs !text-white/45">© {new Date().getFullYear()} CeremonyVerse. All rights reserved.</p>
          <div className="flex gap-5"><Link href="/privacy/" className="!text-white/45">Privacy</Link><Link href="/terms/" className="!text-white/45">Terms</Link><Link href="/contact/" className="!text-white/45">Contact</Link></div>
        </div>
      </div>
    </footer>
  )
}
