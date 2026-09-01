import type { ReactNode } from "react"
import Link from "next/link"
import { SeoNav } from "@/components/seo-nav"
import { SourcingCallout } from "@/components/sourcing-callout"
import { JsonLd } from "@/lib/seo"

type Faq = { q: string; a: string }

export function EditorialBlogPage({
  title,
  dek,
  date,
  schemas,
  faqs,
  children,
  related,
}: {
  title: string
  dek: string
  date: string
  schemas: Array<{ id: string; data: object }>
  faqs: Faq[]
  children: ReactNode
  related: Array<{ href: string; label: string }>
}) {
  return (
    <main style={{ background: "#f8f6f2", minHeight: "100vh" }}>
      {schemas.map((schema) => <JsonLd key={schema.id} id={schema.id} data={schema.data} />)}
      <SeoNav />
      <header style={{ background: "#2f2f2f", padding: "4rem 1.5rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={{ color: "#c5a059", fontSize: ".9rem", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: "1rem" }}>CeremonyVerse · {date}</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#f8f6f2", lineHeight: 1.2, margin: "0 0 1.25rem" }}>{title}</h1>
          <p style={{ color: "#e8dfd2", fontSize: "1.05rem", lineHeight: 1.75, margin: 0 }}>{dek}</p>
        </div>
      </header>
      <article style={{ maxWidth: 820, margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div className="editorial-article" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.08rem", lineHeight: 1.8, color: "#2f2f2f" }}>
          {children}
          <SourcingCallout />
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq) => (
            <section key={faq.q} style={{ marginBottom: "1.5rem" }}>
              <h3>{faq.q}</h3><p>{faq.a}</p>
            </section>
          ))}
          <h2>Continue Planning</h2>
          <ul>
            {related.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
          </ul>
        </div>
      </article>
      <style>{`
        .editorial-article h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.85rem; line-height: 1.25; margin: 2.7rem 0 1rem; }
        .editorial-article h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.35rem; margin: 1.5rem 0 .4rem; }
        .editorial-article p { margin: 0 0 1.2rem; }
        .editorial-article ul, .editorial-article ol { padding-left: 1.4rem; margin: 0 0 1.4rem; }
        .editorial-article li { margin-bottom: .65rem; }
        .editorial-article a { color: #7a6841; font-weight: 600; }
        .editorial-article table { width: 100%; border-collapse: collapse; margin: 1.2rem 0 2rem; background: #fff; font-size: .95rem; }
        .editorial-article th, .editorial-article td { border: 1px solid #e6dfd5; padding: .8rem; text-align: left; vertical-align: top; }
        .editorial-article th { background: #f4eee4; }
        @media (max-width: 640px) { .editorial-article table { display: block; overflow-x: auto; } }
      `}</style>
    </main>
  )
}
