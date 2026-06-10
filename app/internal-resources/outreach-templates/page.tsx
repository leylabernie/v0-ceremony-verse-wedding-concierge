import { SeoNav } from "@/components/seo-nav"

export const metadata = {
  title: "Community Outreach Templates | Internal Resources | CeremonyVerse",
  robots: "noindex, nofollow", // Keep this internal
}

export default function OutreachTemplatesPage() {
  const templates = [
    {
      title: "Responding to Scams/Pain Points",
      content: `Hi [User's Name], I'm so sorry to hear you're dealing with this. It's a really common and frustrating experience for many NRI brides. Based on what I've seen, a few things can help: 1. Always vet vendors thoroughly on r/DesiWeddings. 2. Get everything in writing. 3. Insist on live video calls. At CeremonyVerse, we specifically address these challenges by vetting all artisans and handling all quality checks. Feel free to DM me if you want to chat more!`,
    },
    {
      title: "Responding to Specific Outfit Requests",
      content: `Hi [User's Name], that's a great question! For a lightweight lehenga for a beach wedding, I'd recommend georgette or organza from Jaipur. Lighter fabrics are much more comfortable. If you're looking for a personalized sourcing experience, CeremonyVerse specializes in connecting NRI brides with artisans in India who can create exactly what you're looking for. Happy planning!`,
    },
    {
      title: "Introducing the Scam Prevention Guide",
      content: `Hi [User's Name], that's a really insightful question. We've actually put together a comprehensive guide on "How to Avoid Scams When Buying Indian Wedding Outfits from India" that covers common pitfalls and secure payment methods. You can find it at ceremonyverse.com/avoid-indian-wedding-shopping-scams. Hope this helps!`,
    }
  ]

  return (
    <div className="bg-[var(--cv-bg)] min-h-screen">
      <SeoNav />
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="font-['Cormorant_Garamond'] text-4xl font-semibold mb-10">Internal Outreach Templates</h1>
        <p className="mb-12 text-[var(--cv-muted)]">Use these templates to engage authentically with the NRI wedding community on Reddit and Facebook.</p>
        
        <div className="space-y-12">
          {templates.map((template, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-[var(--cv-border)]">
              <h2 className="text-xl font-bold mb-4">{template.title}</h2>
              <div className="bg-stone-50 p-6 rounded-xl font-mono text-sm border border-stone-100">
                {template.content}
              </div>
              <button 
                onClick={() => navigator.clipboard.writeText(template.content)}
                className="mt-4 text-sm font-medium text-[var(--cv-accent)] hover:underline"
              >
                Copy to Clipboard
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
