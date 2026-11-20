import { createHash, randomUUID } from "node:crypto";
import { z } from "zod";
import {
  bookingSlots,
  BOOKING_TIME_ZONE,
} from "@/lib/booking-availability.mjs";
import { buildConsultationInvite } from "@/lib/booking-invite.mjs";
import { createBookingStore } from "@/lib/booking-store.mjs";
import { redisCommand } from "@/lib/checklist-store.mjs";
import {
  ceremonyVerseBusinessEmail,
  escapeHtml,
  sendCeremonyVerseEmail,
} from "@/lib/consultation-email";

const schema = z.object({
  startIso: z.string().max(30),
  name: z.string().trim().min(2).max(100),
  email: z.string().email().max(254),
  phone: z.string().trim().min(7).max(40),
  mainQuestion: z.string().max(600).optional(),
  from: z.string().max(120).optional(),
  privacyConsent: z.literal(true),
  website: z.string().max(200).optional(),
});
const error = (message: string, status: number) =>
  Response.json({ error: message }, { status });
export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success)
    return error("Please check your contact details and privacy consent.", 400);
  const { website, ...lead } = parsed.data;
  const id = randomUUID();
  if (website) return Response.json({ success: true, bookingId: id });
  const now = new Date();
  if (!bookingSlots(now).includes(lead.startIso))
    return error("Please choose a current opening.", 409);
  try {
    const ip =
      request.headers.get("x-vercel-forwarded-for") ||
      request.headers.get("x-forwarded-for") ||
      "unknown";
    const key =
      "ceremonyverse:booking:limit:" +
      createHash("sha256").update(ip).digest("hex");
    const count = await redisCommand([
      "EVAL",
      "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n",
      1,
      key,
    ]);
    if (count > 6) return error("Please try again in ten minutes.", 429);
    if (
      !(await createBookingStore().claim(id, {
        ...lead,
        createdAt: now.toISOString(),
      }))
    )
      return error("That time was just booked. Please select another.", 409);
  } catch {
    return error(
      "Calendar temporarily unavailable. Please WhatsApp Mini.",
      503,
    );
  }
  const label =
    new Date(lead.startIso).toLocaleString("en-US", {
      timeZone: BOOKING_TIME_ZONE,
      dateStyle: "full",
      timeStyle: "short",
    }) + " Eastern";
  const url = `https://www.ceremonyverse.com/booking-confirmed/?id=${id}`;
  const invite = buildConsultationInvite(id, lead.startIso, now);
  const attachments = [
    {
      filename: "consultation.ics",
      content: Buffer.from(invite).toString("base64"),
      content_type: "text/calendar",
    },
  ];
  const text = `Your free 30-minute call with Mini is confirmed for ${label}. Mini will call ${lead.phone}. View your invitation: ${url}. To reschedule, WhatsApp +1 (215) 341-9990.`;
  const business = `${label}\n${lead.name}\n${lead.email}\n${lead.phone}\n${lead.mainQuestion || ""}\n${url}`;
  const mini = ceremonyVerseBusinessEmail();
  const sent = await Promise.all(
    [
      [lead.email, mini, text, "Consultation confirmed"],
      [mini, lead.email, business, "New consultation booking"],
    ].map(([to, replyTo, body, subject], i) =>
      sendCeremonyVerseEmail({
        to,
        replyTo,
        text: body,
        html: `<p style="white-space:pre-line">${escapeHtml(body)}</p>`,
        subject,
        attachments,
        idempotencyKey: `booking-${id}-${i}`,
      }),
    ),
  );
  if (sent.includes(false))
    console.error("Booking saved; confirmation email not accepted", {
      client: sent[0],
      business: sent[1],
    });
  return Response.json({ success: true, bookingId: id });
}
