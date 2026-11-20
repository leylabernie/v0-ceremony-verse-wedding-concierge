import {
  bookingSlots,
  BOOKING_TIME_ZONE,
} from "@/lib/booking-availability.mjs";
import { createBookingStore } from "@/lib/booking-store.mjs";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const slots = await createBookingStore().available(bookingSlots());
    return Response.json(
      { success: true, timeZone: BOOKING_TIME_ZONE, slots },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return Response.json(
      { error: "Calendar temporarily unavailable. Please WhatsApp Mini." },
      { status: 503 },
    );
  }
}
