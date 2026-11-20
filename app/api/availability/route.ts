import {
  bookingSlots,
  BOOKING_TIME_ZONE,
} from "@/lib/booking-availability.mjs";
import { createBookingStore } from "@/lib/booking-store.mjs";
import { StorageError } from "@/lib/checklist-store.mjs";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const slots = await createBookingStore().available(bookingSlots());
    return Response.json(
      { success: true, timeZone: BOOKING_TIME_ZONE, slots },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("booking_availability_failed", { reason: error instanceof StorageError ? error.code : "unexpected_result" });
    return Response.json(
      { error: "Calendar temporarily unavailable. Please WhatsApp Mini." },
      { status: 503 },
    );
  }
}
