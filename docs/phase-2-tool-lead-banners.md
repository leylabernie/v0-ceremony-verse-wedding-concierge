# Phase 2 — Contextual planning-tool consultation banners

## Implementation

- `components/planning-tools/ToolLeadBanner.tsx`: reusable client component with the requested props, soft-white/warm-border card, burgundy primary link, serif heading, bronze icon, mobile-stacked actions, and visible keyboard focus. No popup, email gate, or tool-data submission.
- `lib/tool-lead-banners.ts`: shared tool-specific copy, destinations, and optional budget WhatsApp link.
- Five existing client tools integrate one banner each; server page metadata/schema stay unchanged:
  - Budget tracker: immediately below summary stat cards.
  - Vendor manager: after the add-vendor form and above the vendor roster.
  - Guest list: immediately below guest-count summaries. This version has **no room-night counter**; no fabricated room-night estimate was introduced.
  - Wedding checklist: after the timeline groups. This version displays all timeline sections rather than a single active timeline tab; one banner follows them, not one per section.
  - Vision boards: after the collection of boards.
- `tests/tool-lead-banner.test.mts`: nine regressions cover five rendered integrations, placements, optional props, CTA event payloads, and blocked analytics.

## Offer and claim safeguards

The existing appointment remains a free **30-minute introductory consultation**, not a new 15-minute audit. Every banner distinguishes the intro from paid detailed reviews/written plans. No unsupported catering fee range, preferred attrition percentage, guaranteed customs savings, or free-checklist deliverable is advertised. Flat-fee India sourcing and destination coordination remain subject to their written scopes.

## Attribution

Primary links preserve the requested sources:

- `/schedule/?from=tool-budget-tracker`
- `/schedule/?from=tool-vendor-manager`
- `/schedule/?from=tool-guest-list`
- `/schedule/?from=tool-checklist`
- `/schedule/?from=tool-vision-boards`

Each click uses the existing `trackEvent` helper to send `calculator_cta_click` with `calculator_name`, `source`, `placement: tool_lead_banner`, `cta_position`, and `next_step`. Neither contact details nor worksheet/guest/vendor contents enter the payload. No `generate_lead` event is emitted by these banners. Sources identify the tool that prompted scheduling intent; completed Google Calendar bookings require separate booking-provider confirmation and are **not** proven by a click or the `from` parameter.

## Verification

- `npm test`: **169/169 pass**.
- `npm run build`: exit 0.
- `npx tsc --noEmit`: exit 0.
- `npm run lint`: exit 0, zero errors; three pre-existing unused-variable warnings remain.
- `git diff --check`: pass.
- Built-server HTTP smoke checks: all five tool URLs return 200, include their contextual banner, and preserve their exact attributed schedule URL.
- Visual browser/mobile checks remain outstanding due to the sandbox browser-library limitation documented in `2026-11-27-conversion-audit.md`. Responsive classes and keyboard focus affordances are implemented, but are not a substitute for device testing.

No new payment URL, Founding Families discount, booking duration, host-agency term, or production setting was invented. The PR includes the earlier website checklist changes in a separate commit; it should not be merged until the owner reviews those changes and confirms the supplied Google embed is the intended active calendar.
