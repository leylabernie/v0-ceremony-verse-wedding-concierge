import { createBookingStore } from "@/lib/booking-store.mjs";
import { buildConsultationInvite } from "@/lib/booking-invite.mjs";
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (!/^[\da-f-]{36}$/i.test(id)) return new Response(null, { status: 400 });
  try {
    const booking = await createBookingStore().get(id);
    if (!booking) return new Response(null, { status: 404 });
    return new Response(
      buildConsultationInvite(id, booking.startIso, booking.createdAt),
      {
        headers: {
          "Content-Type": "text/calendar; charset=utf-8",
          "Cache-Control": "no-store",
          "Content-Disposition": 'attachment; filename="consultation.ics"',
        },
      },
    );
  } catch {
    return new Response(null, { status: 503 });
  }
}
