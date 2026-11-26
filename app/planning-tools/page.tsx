import Image from "next/image"
import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/planning-tools/",
  title: "Free Gujarati & South Asian Wedding Planning Tools | CeremonyVerse",
  description:
    "Free wedding planning tools designed for Gujarati and South Asian weddings: checklist, guest list, budget tracker, vendor manager, vision boards, and more. Simple tools saved in your browser.",
  keywords:
    "Gujarati wedding planning tools, South Asian wedding planning tools, wedding checklist, guest list manager, wedding budget tracker, vendor manager, vision board",
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Planning Tools", url: "/planning-tools/" }])

const tools = [
  {
    title: "Wedding Checklist",
    description: "Plan every milestone with a timeline built for Gujarati and South Asian weddings — from Garba and Sangeet to ceremony and reception.",
    href: "/planning-tools/wedding-checklist/",
    label: "Set Up Checklist",
    badge: "Free",
    image: "/images/planning-tools/wedding-checklist.jpg",
  },
  {
    title: "Guest List Manager",
    description: "Track households, family sides, RSVPs, party size, and event-by-event invites for multi-day celebrations.",
    href: "/planning-tools/guest-list/",
    label: "Manage Guests",
    badge: "Free",
    image: "/images/planning-tools/guest-list.jpg",
  },
  {
    title: "Budget Tracker",
    description: "Track estimated vs. actual costs across mandap, outfits, entertainment, ceremonies, and guest logistics.",
    href: "/planning-tools/budget-tracker/",
    label: "Build Your Budget",
    badge: "Free",
    image: "/images/planning-tools/budget-tracker.jpg",
  },
  {
    title: "Vendor Manager",
    description: "Organize pandits, mehndi artists, DJs/dhol, decor, catering, and other vendors by event, quote, and booking status.",
    href: "/planning-tools/vendor-manager/",
    label: "Track Vendors",
    badge: "Free",
    image: "/images/planning-tools/vendor-manager.jpg",
  },
  {
    title: "Vision Boards",
    description: "Save inspiration for Garba, mandap, outfits, jewelry, and reception decor in one simple, visual place.",
    href: "/planning-tools/vision-boards/",
    label: "Save Inspiration",
    badge: "Free",
    image: "/images/planning-tools/vision-board.jpg",
  },
  {
    title: "Ceremony Timeline & Toolkit",
    description: "Preview ceremony handoffs and download a personalized timeline, symbolic script, and friend-officiant guide.",
    href: "/planning-tools/ceremony-timeline/",
    label: "Build Your Timeline",
    badge: "Free",
    image: "/images/planning-tools/ceremony-timeline.jpg",
  },
  {
    title: "Family Responsibility Map",
    description: "Assign one owner, approver, deadline, and status to key family decisions so planning stays clear across both sides.",
    href: "/planning-tools/family-responsibility-map/",
    label: "Organize Decisions",
    badge: "Free",
    image: "/images/planning-tools/family-responsibility.jpg",
  },
  {
    title: "Baraat & Event Logistics Planner",
    description: "Select the events you’re hosting and get a practical checklist for venues, sound, power, and baraat logistics.",
    href: "/planning-tools/baraat-event-planner/",
    label: "Plan Event Logistics",
    badge: "Free",
    image: "/images/planning-tools/baraat-logistics.jpg",
  },
  {
    title: "Catering Deadline Tracker",
    description: "Enter your wedding date and get key catering deadlines for chef requests, dietary requirements, and vendor meals.",
    href: "/planning-tools/catering-deadline-tracker/",
    label: "Track Deadlines",
    badge: "Free",
    image: "/images/planning-tools/catering-deadline.jpg",
  },
]

const comingSoon = [
  {
    title: "Digital Invitations & RSVP",
    description: "Beautiful invitations with guest tracking and simple RSVP collection — designed for multi-event South Asian weddings.",
  },
  {
    title: "Wedding Website",
    description: "A shareable wedding website with your story, events, travel details, and updates for guests.",
  },
  {
    title: "AI Wedding Planner",
    description: "An AI assistant that helps organize planning details, vendor info, and next steps in one conversation.",
  },
  {
    title: "Seating Chart",
    description: "Plan tables and seating with guest households, meal preferences, and event-specific arrangements.",
  },
]

export default function PlanningToolsPage() {
  return (
    <main className="bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      <section className="bg-[#1f1f1f] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">
            Free CeremonyVerse planning tools
          </p>
          <h1 className="font-serif text-4xl font-semibold sm:text-6xl">Free Wedding Planning Tools</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#e8dfd2]">
            Simple tools designed for Gujarati and South Asian weddings — from Garba and Sangeet to mandap, guest logistics, and reception planning. No complicated calculators, just clear planning.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Plan with ease</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">Tools you can use right now</h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => (
              <article key={tool.href} className="group flex flex-col overflow-hidden rounded-2xl border border-[#e6dfd5] bg-white shadow-sm transition hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#efe7dc]">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-4 inline-flex self-start rounded-full bg-[#f3ede3] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7a6841]">
                    {tool.badge}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold">{tool.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-[#4d403a]">{tool.description}</p>
                  <Link
                    href={tool.href}
                    className="mt-7 inline-flex self-start rounded-full border border-[#7a6841] px-6 py-3 text-sm font-semibold text-[#7a6841] transition hover:bg-[#7a6841] hover:text-white"
                  >
                    {tool.label} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e6dfd5] bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6841]">Coming soon</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">More tools on the way</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#4d403a]">
            We’re building a fuller CeremonyVerse planning suite for Gujarati and South Asian weddings — with the multi-event, family, and destination details that matter most.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {comingSoon.map((tool) => (
              <article key={tool.title} className="rounded-2xl border border-[#e6dfd5] bg-[#faf8f5] p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7a6841]">Coming soon</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{tool.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#4d403a]">{tool.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0ebe3] px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Want help planning it all?</h2>
          <p className="mt-4 leading-7 text-[#4d403a]">
            These free tools help you get organized. If you want expert support for destination venues, contracts, guest travel, or Gujarati and South Asian wedding logistics, CeremonyVerse can guide you.
          </p>
          <Link
            href="/schedule/?from=planning-tools"
            className="mt-7 inline-flex rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white hover:bg-[#6a5938]"
          >
            Request a Free 30-Minute Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
