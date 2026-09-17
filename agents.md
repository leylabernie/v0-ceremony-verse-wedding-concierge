# agents.md — CeremonyVerse Project Constraints & Identity

This file stores the core project constraints and marketing identity for all
future content generation on ceremonyverse.com. Every writer, editor, or AI
agent producing copy, schema, or pages for this repo must follow these rules.
Detailed rationale lives in `EEAT_PLAYBOOK.md`, `IMAGE_SEO_GUIDE.md`, and
`TOPICAL_AUTHORITY_MAP.md`.

---

## Business Information

- **Founder & Expert:** Bhamini "Mini" Patel
- **Main Site (Inspiration & Booking Queries):** https://www.ceremonyverse.com
- **Booking Portal (Resorts & Cruises):** https://ceremonyversetravel.com
- **Host Agency Relationship:** Affiliate of A.S.A.P. Cruises Inc. / OutsideAgents.com
- **Contact:** +1-215-341-9990 | hello@ceremonyverse.com
- **Location Baseline:** Newtown Township, PA, US

### Canonical URL forms (do not deviate)

- Main site is **www-canonical**: link to `https://www.ceremonyverse.com/...` (non-www redirects to www).
- Booking portal is **apex-canonical**: link to `https://ceremonyversetravel.com/...` (www redirects to the apex).

### Disclosure rule

When any page, blog post, or landing page promotes booking travel through the
portal, it must disclose the host-agency relationship (affiliate of A.S.A.P.
Cruises Inc. / OutsideAgents.com). Planning content on the main site must not
promise bookings, contracts, or rates that CeremonyVerse does not control —
resort and cruise suppliers control their own contracts and availability.

---

## Target Audience & Niche

- **Primary Market:** NRI (Non-Resident Indian) Gujarati and Hindu families based across the USA and Canada.
- **Specialization:** Highly customized destination weddings, large family group room blocks, and luxury beach honeymoons.
- **Core Destinations:** Mexico, Jamaica, and Punta Cana.

---

## Strategic Content Rules

1. **Never use the old surname.** The founder's name must strictly be kept as
   "Mini Patel" or "Bhamini 'Mini' Patel" across all metadata, schema, and
   page headers. The surname "Shah" must not appear anywhere in output.
2. **Promote the dual-site engine.** When writing blogs or landing pages,
   always point users looking for planning advice to `ceremonyverse.com` and
   users looking to directly browse/book travel suppliers to
   `ceremonyversetravel.com`.
3. **Focus on cultural pain points.** Content must focus heavily on
   coordinating large guest allocations, South Asian catering/dietary needs
   (Jain, satvik, vegetarian distinctions), multi-day traditional event spaces
   at all-inclusive resorts, and simplifying the room-block process for
   elderly family members.

---

## Destination Coverage & Claim Boundaries

- CeremonyVerse's current service coverage is **Mexico, Jamaica, and Punta Cana (Dominican Republic)**.
- The three family weddings documented on `/real-weddings/` (Hard Rock Hotel Cancún 2019, Generations Riviera Maya 2023, Royalton 2024) are **all in Mexico and are family events, not client projects**. Jamaica and Punta Cana are part of service coverage but are **not** part of those three weddings — never blur this line.
- **No invented package rates** for Jamaica or any unlisted resort; only Mexico package pricing from `lib/mexico-packages.ts` may appear in offers/schema.
- **No fabricated testimonials, client logos, or savings guarantees.** When real client case studies exist with written permission, label them as such.

---

## Voice & Authorship

- All guides are written in **Mini's first-person voice**, grounded in her actual experience. Use "I" for decisions and lessons; "we" only for the service.
- Every post sets `authorName: "Mini"` in `buildMetadata()` and shows a visible byline linking to `/about/mini/`. **Never** attribute content to "CeremonyVerse" as an author.
- If a topic cannot be grounded in Mini's real experience, do not publish it — interview her or skip the topic.
- Avoid programmatic-SEO patterns: perfectly parallel sections, identical bullet counts, verbatim boilerplate repeated across pages.

---

## Dating & Sources

- `publishedTime` is immutable once live. `modifiedTime` changes only with a material content edit, and must match the visible "Updated" date.
- Factual claims (customs duties, tariffs, resort policies, visa rules) require outbound citations to authoritative sources (CBP.gov, resort official pages, embassies, USTR).
- Long-form guides end with a "Sources" section.

---

## Technical SEO Rules (Next.js App Router)

- All internal URLs use **trailing slashes** (`trailingSlash: true`) — keep canonicals and sitemap entries consistent.
- Every indexable page sets its own canonical via `buildMetadata()`. Never set a layout-level canonical (it collapses all pages to one URL).
- Never hardcode a `<meta name="robots">` tag in the root layout head; robots directives come from the metadata API (layout default is index/follow; noindex pages override).
- Utility pages (`thank-you`, `consultation-completed`, `consultation-questionnaire`, `planning-preview`, `internal-resources`) stay `noindex`.
- `robots.txt` is generated by `app/robots.ts` — **do not** add a `public/robots.txt` (build conflict).
- New URLs must be added to `app/sitemap.ts`; blog posts must also be added to the `articles` array in `app/blog/author/mini/page.tsx`.
- Schema changes belong in `lib/seo.tsx`; the business entity is a `ProfessionalService` with `@id: #business` and must stay consistent with the `Organization` node. The founder entity must read "Bhamini \"Mini\" Patel" (see Strategic Content Rule 1).
- Follow `IMAGE_SEO_GUIDE.md` for every image: descriptive hyphenated filenames, 12–20 word natural alt text, no "Image of…" openers.

---

## Verification & Deployment

- Before any push to `main`: run `npx tsc --noEmit` and `npm test` — both must pass. `main` auto-deploys to production via Vercel.
- The tests in `tests/` are contractual: e.g., destination-coverage tests enforce the claim boundaries above. If a test fails because of your copy, fix the copy (or the test only when the business rule itself has genuinely changed).
