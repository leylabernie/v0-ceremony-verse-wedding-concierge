"use client";
import { useEffect, useState, type FormEvent } from "react";
import { trackLead } from "@/lib/analytics";
const easternTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
});
const isPreferred = (iso: string) => easternTime.format(new Date(iso)) > "17:00";

export function SchedulePage() {
  const [slots, setSlots] = useState<string[]>([]),
    [notice, setNotice] = useState("Loading available times…"),
    [loading, setLoading] = useState(true),
    [busy, setBusy] = useState(false);
  async function load() {
    setLoading(true);
    setNotice("Loading available times…");
    try {
      const res = await fetch("/api/availability/", { cache: "no-store" });
      if (!res.ok) throw Error();
      const data = await res.json();
      setSlots(data.slots);
      setNotice(data.slots.length ? "" : "No openings in the next 21 days.");
    } catch {
      setSlots([]);
      setNotice("Calendar temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    void load();
  }, []);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setNotice("Confirming your time…");
    const form = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/schedule/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          privacyConsent: form.privacyConsent === "on",
          from: new URLSearchParams(location.search).get("from")?.slice(0, 120),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 409) await load();
        throw Error(data.error || "Booking could not be confirmed.");
      }
      trackLead("schedule");
      location.assign(
        "/booking-confirmed/?id=" + encodeURIComponent(data.bookingId),
      );
    } catch (err) {
      setNotice(
        err instanceof Error
          ? err.message
          : "Please WhatsApp Mini to check your booking.",
      );
      setBusy(false);
    }
  }
  const field =
    "mt-1 block w-full rounded-lg border border-stone-300 bg-white p-3";
  return (
    <main className="mx-auto max-w-xl space-y-5 px-6 py-16">
      <p className="text-sm uppercase tracking-widest text-[#7a6841]">
        CeremonyVerse · Consultation
      </p>
      <h1 className="font-serif text-4xl">Book 30 minutes with Mini</h1>
      <p>
        Your first call is free. Choose a time shown in your local time zone,
        then confirm your contact details.
      </p>
      <p>Mini prefers meetings after 5 p.m. Eastern. Other listed times are welcome too.</p>
      <p>For a question or a time not listed, reach Mini anytime at +1 (215) 341-9990: {" "}
        <a className="underline" href="sms:+12153419990">Text</a>, {" "}
        <a className="underline" href="tel:+12153419990">call</a>, or {" "}
        <a className="underline" href="https://wa.me/12153419990">WhatsApp</a>.
      </p>
      <p role="status">{notice}</p>
      {!loading && !slots.length && (
        <section className="space-y-4 rounded-2xl border bg-white p-6">
          <h2 className="font-serif text-2xl">Arrange your call directly with Mini</h2>
          <p>Send a time that works for you and your time zone. Your call is booked once Mini confirms it.</p>
          <a className="inline-block rounded-full bg-[#7a6841] px-6 py-3 text-white" href="https://wa.me/12153419990?text=Hi%20Mini%2C%20I%27d%20like%20to%20arrange%20a%20free%2030-minute%20call.%20My%20preferred%20time%20and%20time%20zone%20are%3A%20">Ask for a time on WhatsApp</a>
          <button type="button" onClick={() => void load()} className="block underline">Check the calendar again</button>
        </section>
      )}
      {slots.length > 0 && <form onSubmit={submit} className="space-y-4">
        <label className="block">
          Available times
          <select required name="startIso" className={field} defaultValue="">
            <option value="">Choose a time</option>
            {[true, false].map(preferred => {
              const group = slots.filter(iso => isPreferred(iso) === preferred);
              return group.length ? <optgroup key={String(preferred)} label={preferred ? "Preferred · after 5 p.m. Eastern" : "Other available times"}>
              {group.map((iso) => (
              <option key={iso} value={iso}>
                {new Date(iso).toLocaleString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  timeZoneName: "short",
                })}
              </option>
            ))}</optgroup> : null;
            })}
          </select>
        </label>
        {(
          [
            ["Name", "name", "text", 100],
            ["Email", "email", "email", 254],
            ["Phone or WhatsApp (include country code)", "phone", "tel", 40],
          ] as const
        ).map(([label, name, type, max]) => (
          <label key={name} className="block">
            {label}
            <input
              required
              type={type}
              name={name}
              maxLength={max}
              className={field}
            />
          </label>
        ))}
        <label className="block">
          Your main question (optional)
          <textarea name="mainQuestion" maxLength={600} className={field} />
        </label>
        <input name="website" tabIndex={-1} autoComplete="off" hidden />
        <label className="block">
          <input type="checkbox" required name="privacyConsent" /> I agree to
          the{" "}
          <a href="/privacy/" className="underline">
            privacy policy
          </a>{" "}
          and to be contacted for this consultation.
        </label>
        <button
          disabled={busy || !slots.length}
          className="rounded-full bg-[#7a6841] px-7 py-3 text-white disabled:opacity-50"
        >
          Confirm my time
        </button>
      </form>}

    </main>
  );
}
