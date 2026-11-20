import { createBookingStore } from "@/lib/booking-store.mjs";
export const metadata = {
  title: "Consultation details",
  robots: { index: false, follow: false },
  referrer: "no-referrer" as const,
};
export default async function Confirmation({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const booking =
    id &&
    /^[\da-f-]{36}$/i.test(id) &&
    (await createBookingStore()
      .get(id)
      .catch(() => null));
  return (
    <main className="mx-auto max-w-2xl space-y-6 px-6 py-24">
      <h1 className="font-serif text-4xl">
        {booking
          ? "Your consultation is booked"
          : "Unable to verify this booking"}
      </h1>
      {booking && (
        <>
          <p>
            {new Date(booking.startIso).toLocaleString("en-US", {
              dateStyle: "full",
              timeStyle: "short",
              timeZone: "America/New_York",
            })}{" "}
            Eastern · 30 minutes
          </p>
          <p>Bring your dates, guest estimate and biggest planning question.</p>
          <a className="block underline" href={`/api/booking-invite/${id}/`}>
            Download calendar invite (.ics)
          </a>
        </>
      )}
      <a className="underline" href="https://wa.me/12153419990">
        Questions or changes? WhatsApp Mini
      </a>
    </main>
  );
}
