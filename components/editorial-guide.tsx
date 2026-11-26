import Link from "next/link"
import { BlogFeasibilityInvitation } from "@/components/blog-feasibility-invitation"
import { JsonLd, buildBlogPosting, buildBreadcrumb, buildFaqSchema } from "@/lib/seo"

export type EditorialGuideSection = {
  id?: string
  title: string
  paragraphs?: string[]
  links?: { label: string; href: string }[]
}

export type EditorialGuideData = {
  title: string
  description: string
  path: string
  published: string
  modified?: string
  intro?: string
  sections?: EditorialGuideSection[]
  faqs?: { question: string; answer: string }[]
  sources?: { label: string; href: string }[]
}

export function EditorialGuide({ data }: { data: EditorialGuideData }) {
  const modified = data.modified || data.published
  const parsedModified = modified ? new Date(modified) : null
  const hasValidModified = parsedModified !== null && !Number.isNaN(parsedModified.getTime())
  const sections = (data.sections ?? []).map((section, index) => ({
    ...section,
    id: section.id || `section-${index + 1}`,
    paragraphs: section.paragraphs ?? [],
    links: section.links ?? [],
  }))
  const faqs = data.faqs ?? []
  const sources = data.sources ?? []
  const showGuideNav = sections.length > 1

  let headingCount = 0
  const claimHeadingSlot = () => {
    headingCount += 1
    return headingCount === 2
  }
  const inviteAfterNav = showGuideNav ? claimHeadingSlot() : false
  const sectionInviteFlags = sections.map(() => claimHeadingSlot())
  const inviteAfterFaqs = faqs.length > 0 ? claimHeadingSlot() : false
  const inviteAfterSources = sources.length > 0 ? claimHeadingSlot() : false
  const inviteAsFallback = headingCount < 2

  return <main className="bg-[#faf8f5] px-6 py-16 text-[#1f1f1f]">
    <JsonLd id="schema-blogposting" data={buildBlogPosting({headline:data.title, description:data.description, url:data.path, datePublished:data.published, dateModified:modified})} />
    <JsonLd id="schema-breadcrumb" data={buildBreadcrumb([{name:"Wedding guides",url:"/blog/"},{name:data.title,url:data.path}])} />
    {faqs.length > 0 ? <JsonLd id="schema-faq" data={buildFaqSchema(faqs)} /> : null}
    <article className="mx-auto max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">CeremonyVerse wedding planning guide</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-6xl">{data.title}</h1>
      {data.intro ? <p className="mt-6 text-xl font-medium leading-8 text-[#4d403a]">{data.intro}</p> : null}
      <p className="mt-5 text-sm text-[#5e4a40]">By <Link href="/about/mini/" className="text-[#7a6841] underline underline-offset-4">Mini</Link>{hasValidModified ? <> · Updated <time dateTime={modified}>{parsedModified.toLocaleDateString("en-US", {month:"long",day:"numeric",year:"numeric",timeZone:"UTC"})}</time></> : null}</p>
      <div className="mt-7 flex flex-wrap gap-3"><Link href="/schedule/?from=wedding-guide" className="rounded-full bg-[#7a6841] px-6 py-3 font-semibold text-white">Book a Free Consultation</Link><Link href="/destination-wedding-feasibility-plan/" className="rounded-full border border-[#7a6841] px-6 py-3 font-semibold text-[#7a6841]">Explore the $300 Feasibility Plan</Link></div>
      {showGuideNav ? <nav aria-label="In this guide" className="my-10 rounded-2xl border border-[#d9cfbf] bg-white p-7"><h2 className="font-serif text-2xl font-semibold">In this guide</h2>{inviteAfterNav ? <BlogFeasibilityInvitation /> : null}<ul className="mt-4 grid gap-3 sm:grid-cols-2">{sections.map(s=><li key={s.id}><a href={`#${s.id}`} className="text-[#7a6841] underline">{s.title}</a></li>)}</ul></nav> : null}
      {sections.map((section, sectionIndex)=><section id={section.id} key={section.id} className="my-12 scroll-mt-40"><h2 className="font-serif text-3xl font-semibold sm:text-4xl">{section.title}</h2>{sectionInviteFlags[sectionIndex] ? <BlogFeasibilityInvitation /> : null}{section.paragraphs.map((p,i)=><p key={i} className="mt-5 text-lg leading-8 text-[#4d403a]">{p}</p>)}{section.links.length > 0 && <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">{section.links.map(link=><li key={link.href}><Link href={link.href} className="font-semibold text-[#7a6841] underline">{link.label}</Link></li>)}</ul>}</section>)}
      {faqs.length > 0 ? <section className="my-12"><h2 className="font-serif text-4xl font-semibold">Frequently asked questions</h2>{inviteAfterFaqs ? <BlogFeasibilityInvitation /> : null}{faqs.map(faq=><article key={faq.question} className="mt-6 rounded-xl border border-[#d9cfbf] bg-white p-6"><h3 className="font-serif text-2xl font-semibold">{faq.question}</h3><p className="mt-3 leading-7 text-[#4d403a]">{faq.answer}</p></article>)}</section> : null}
      {sources.length > 0 ? <section className="border-t border-[#d9cfbf] pt-8"><h2 className="font-serif text-3xl font-semibold">Sources and current proposals</h2>{inviteAfterSources ? <BlogFeasibilityInvitation /> : null}<p className="mt-4 leading-7 text-[#4d403a]">Official sources reviewed September 13, 2026. Package prices, participation, access, and availability can change. The schedules and decision worksheets above are CeremonyVerse planning examples; your wedding-specific written proposals control the services and amounts.</p><ul className="mt-5 list-disc space-y-3 pl-5">{sources.map(source=><li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="text-[#7a6841] underline">{source.label}</a></li>)}</ul></section> : null}
      {inviteAsFallback ? <BlogFeasibilityInvitation /> : null}
    </article>
  </main>
}
