import test from "node:test";
import assert from "node:assert/strict";
import { bookingSlots } from "../lib/booking-availability.mjs";
import { createBookingStore } from "../lib/booking-store.mjs";
import { buildConsultationInvite } from "../lib/booking-invite.mjs";
const now = new Date("2026-10-29T14:00:00Z");
const grid = bookingSlots(now);
for (const [name, slot, expected] of [
  ["exact 24-hour minimum", "2026-10-30T14:00:00.000Z", true],
  ["no same-day appointments", "2026-10-29T17:00:00.000Z", false],
  ["last weekday appointment", "2026-10-30T21:30:00.000Z", true],
  ["weekday close", "2026-10-30T22:00:00.000Z", false],
  ["Saturday opening", "2026-10-31T14:00:00.000Z", true],
  ["Saturday last start", "2026-10-31T16:30:00.000Z", true],
  ["Saturday close", "2026-10-31T17:00:00.000Z", false],
  ["Sunday closed", "2026-11-01T15:00:00.000Z", false],
  ["Eastern opening after DST", "2026-11-02T15:00:00.000Z", true],
  ["no obsolete daylight offset", "2026-11-02T14:00:00.000Z", false],
  ["last horizon day", "2026-11-18T15:00:00.000Z", true],
  ["no appointment beyond horizon", "2026-11-19T15:00:00.000Z", false],
  ["off-grid instant", "2026-11-02T15:07:00.000Z", false],
])
  test(name, () => assert.equal(grid.includes(slot), expected));
test("blocked dates are Eastern calendar dates", () =>
  assert.ok(
    !bookingSlots(now, ["2026-10-31"]).some((iso) =>
      iso.startsWith("2026-10-31"),
    ),
  ));
test("only verified unclaimed slots are returned", async () =>
  assert.deepEqual(
    await createBookingStore(async () => [null, "taken"]).available(
      grid.slice(0, 2),
    ),
    grid.slice(0, 1),
  ));
test("invalid Redis response fails closed", async () =>
  assert.rejects(createBookingStore(async () => []).available(grid)));
test("calendar invite is 30 minutes, UTC, with CRLF and a stable UID", () => {
  const invite = buildConsultationInvite("test-id", grid[0], now);
  assert.match(invite, /UID:test-id@ceremonyverse.com\r\n/);
  assert.match(invite, /DTSTART:20261030T140000Z\r\nDTEND:20261030T143000Z/);
  assert.ok(invite.endsWith("END:VCALENDAR\r\n"));
  assert.ok(
    invite.split("\r\n").every((line) => Buffer.byteLength(line) <= 75),
  );
});
