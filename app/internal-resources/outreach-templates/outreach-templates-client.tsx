"use client";

// Internal outreach templates for community engagement
export default function OutreachTemplatesClient() {
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Template copied to clipboard!")
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="font-serif text-4xl font-semibold mb-10 text-stone-900">Internal Outreach Templates</h1>
        <p className="mb-12 text-stone-600">Use these templates to engage authentically with the NRI wedding community on Reddit and Facebook.</p>
        <div className="space-y-8">
          {templates.map((tpl, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
              <h2 className="text-xl font-semibold text-stone-900 mb-4">{tpl.title}</h2>
              <pre className="whitespace-pre-wrap text-stone-700 font-sans text-sm bg-stone-50 p-4 rounded border border-stone-100 mb-4">{tpl.content}</pre>
              <button
                onClick={() => copyToClipboard(tpl.content)}
                className="bg-[#7a6841] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#5e4a40] transition"
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
