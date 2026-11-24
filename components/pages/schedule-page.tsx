import { consultationBookingUrl } from "@/lib/consultation-booking";

export function SchedulePage() {
  return (
    <main className="mx-auto max-w-xl space-y-6 px-6 py-16">
      <p className="text-sm uppercase tracking-widest text-[#7a6841]">CeremonyVerse · Consultation</p>
      <h1 className="font-serif text-4xl">Book 30 minutes with Mini</h1>
      <p>Your first call is free. Bring your dates, destination ideas, and the question you want to discuss. Mini prefers meetings after 5 p.m. Eastern.</p>
      <section className="space-y-4">
        <p>Choose your time and confirm your appointment on Google Calendar.</p>
        <a href={consultationBookingUrl} className="inline-block rounded-full bg-[#7a6841] px-7 py-3 font-semibold text-white">Choose a time on Google Calendar</a>
      </section>
      <section className="space-y-3 rounded-2xl border bg-white p-6">
        <h2 className="font-serif text-2xl">Prefer to ask a question first?</h2>
        <p>Reach Mini anytime at +1 (215) 341-9990.</p>
        <div className="flex flex-wrap gap-5 underline"><a href="https://wa.me/12153419990">WhatsApp Mini</a><a href="sms:+12153419990">Send a text</a><a href="tel:+12153419990">Call Mini</a></div>
      </section>
    </main>
  );
}
