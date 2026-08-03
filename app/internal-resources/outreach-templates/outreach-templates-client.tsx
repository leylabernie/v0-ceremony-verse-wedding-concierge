"use client";

// Internal outreach templates for community engagement
export default function OutreachTemplatesClient() {
  const templates = [
    {
      title: "Planner Partnership DM / Email",
      content: `Subject: A sourcing backstop for your South Asian wedding clients

Hi [Planner Name] — I’m Bhamini, founder of CeremonyVerse. I noticed you plan [South Asian / multicultural / destination] weddings in [market].

One outfit problem planners often inherit late is a bride or family whose India order is delayed, mismatched, or impossible to coordinate across a large wedding party. We act as the sourcing and quality-control layer: direct partner access in India, live exact-item approval, measurement coordination, inspection, and insured US delivery.

I’m not asking you to change your vendor list. Could I send you our one-page “India Outfit Risk Checklist” to keep as a client resource? If one of your couples ever needs a second opinion, I’m also happy to give them a free 15-minute timeline check with no obligation and keep you copied.

Either way, I’d love to learn which outfit issues create the most work for your team.

Warmly,
Bhamini
Founder, CeremonyVerse
[phone] · ceremonyverse.com`,
    },
    {
      title: "Bride Follow-Up After a Helpful Public Reply",
      content: `Hi [Name] — I saw your post about [specific issue: 14 bridesmaids / Kanchipuram silk / an India seller / a Mexico wedding]. I replied publicly with the steps I’d use so everyone in the thread can benefit.

One extra thought that may help: [one genuinely specific observation, such as “for 14 people, freeze fabric and color before collecting measurements; otherwise you create 14 moving targets”].

I run CeremonyVerse, a US-based India outfit sourcing concierge, so I want to be transparent about my affiliation. I’m not assuming you need a service. If useful, send me your event date and the number of people you’re dressing, and I’ll reply with a realistic order-by date and the three questions I’d ask any vendor. No pitch and no need to share a phone number.

Wishing you a much calmer planning week,
Bhamini`,
    },
    {
      title: "Public Forum Answer — No Link Unless Asked",
      content: `For an order this important, I would pause before paying and ask the seller for five things in writing:

1. A live video showing the exact garment or fabric in natural light — not only catalog photos.
2. A final measurement chart that you approve before cutting.
3. Dated production milestones and the latest safe ship date.
4. A video inspection of stitching, closures, hem, embroidery, and color before shipment.
5. The remake, alteration, or refund remedy if the delivered item differs from the approved specification.

For a large bridal party, add one approved sample size and color before releasing the whole batch. Also leave local-alteration time after delivery.

Disclosure: I run an India-to-US wedding outfit concierge, so this is the same risk checklist we use internally. I’m intentionally not linking it here; happy to paste the full checklist if the moderators and OP want it.`,
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
        <p className="mb-12 text-stone-600">Personalize every bracketed field. Lead with a useful public answer, disclose the CeremonyVerse affiliation, and never send an unsolicited link or repeat the same comment across groups.</p>
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
