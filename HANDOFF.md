# CEREMONYVERSE — Agent Brief Handoff (Tasks 6–12)

**Repo:** https://github.com/leylabernie/v0-ceremony-verse-wedding-concierge
**Branch:** `repositioning` — 7 new commits on top of `7b52d79`
**⚠️ NOT PUSHED.** The sandbox has no GitHub credentials; `git push` fails with
`could not read Username`. GitHub's `repositioning` is still at `7b52d79`.
**Not merged, not deployed** — as the brief requires.

Work was done against the real brief at `origin/docs/agent-brief`
(`docs/AGENT_BRIEF.md` + `docs/TASKS-8-11-VERBATIM.md`), not a paraphrase.

## Status: 12 of 12 tasks complete

| Task | Status | Commit |
|---|---|---|
| 1 — Remove boutique-markup + shipping claim | ✅ prev. agent | `7ae8f03` |
| 2 — Replace H1 | ✅ prev. agent | `6b33163` |
| 3 — Swatch Box hero CTA | ✅ prev. agent | `63607a6` |
| 4 — Move risk section up | ✅ no-op, already correct | none |
| 5 — Twelve services → three | ✅ prev. agent | `7b52d79` |
| 6 — Rewrite global metadata | ✅ | `bd21837` |
| 7 — Delete 11 location pages + redirects | ✅ | `40a8967` |
| 8 — Price range table | ✅ figures verbatim | `c605bd5` |
| 9 — Swatch Box page | ✅ | `ccb03ff` |
| 10 — Email capture | ✅ intentionally unwired | `b567c47` |
| 11 — Business address | ✅ placeholders as specified | `df9e1e6` |
| 12 — Trim testimonials | ✅ | `8ab97fa` |

---

## 1. Files changed, by task

**Task 6** — `app/layout.tsx` (description, og:description, added twitter:description
+ twitter:title), `app/page.tsx` (description, keywords), `lib/seo.tsx`
(`buildLocalBusinessSchema` description + removed 3 Mexico offers).

**Task 7** — deleted 11 route folders; `next.config.mjs` (+11 redirects, merged);
`components/global-footer.tsx` (locationLinks + Locations column);
`app/sitemap.ts`; `public/llms.txt`; `app/indian-bridal-wear-california/page.tsx`;
`app/indian-bridal-wear-texas/page.tsx`;
`app/blog/how-to-buy-authentic-kanchipuram-silk-sarees-online-usa/page.tsx`.

**Task 8** — `components/pages/home-page.tsx` (`priceRanges` array + price section).

**Task 9** — new `app/swatch-box/page.tsx`; `app/sitemap.ts`; `components/global-footer.tsx`.

**Task 10** — `components/pages/home-page.tsx` (email capture block).

**Task 11** — `components/global-footer.tsx` (`<address>` block); `lib/seo.tsx`
(PostalAddress with streetAddress + postalCode).

**Task 12** — `components/pages/home-page.tsx` (5 testimonials removed, Trustpilot
link replaced, array exported); `app/page.tsx` (review schema rebound).

## 2. Build status

**`npm run build` — PASS, exit 0, zero warnings.** 67 static pages.
`/swatch-box` prerenders as static (`○`). All 11 deleted routes absent.

**`npm run lint` — CANNOT RUN. Pre-existing repo bug, not caused by this work.**
`package.json` defines `"lint": "eslint ."` but eslint is not in `dependencies`
or `devDependencies`, so it fails `eslint: not found`. Verified the same on
`origin/main` and `origin/docs/agent-brief`. Type safety was covered instead with
`npx tsc --noEmit` (exit 0) after every single task. **Recommend adding
`eslint` + `eslint-config-next` to devDependencies.**

## 3. Every `TODO(owner)` left

| File:line | What it needs |
|---|---|
| `components/pages/home-page.tsx:263` | Price figures — replace via landed-cost × 2.5 after customs broker confirms duty by HTS line |
| `components/pages/home-page.tsx:693` | Google Business Profile reviews URL (replaces `href="#"`) |
| `components/pages/home-page.tsx:943` | Connect email form to Klaviyo / ConvertKit / Mailchimp |
| `app/swatch-box/page.tsx:99` | Stripe Payment Link / Shopify checkout URL (hero CTA) |
| `app/swatch-box/page.tsx:192` | Same link, closing CTA |
| `components/global-footer.tsx:64` | `[STREET ADDRESS]` and `[ZIP]` |
| `components/global-footer.tsx:93` | Google Business Profile URL |
| `lib/seo.tsx:329` | Same address placeholders in LocalBusiness schema |

(`home-page.tsx:48` is a cross-reference comment, not an action item.)

## 4. Search strings from the brief that returned no matches

- **Task 6** assumed Mexico was in the *site-wide* description. It was not —
  `app/layout.tsx` contained no Mexico string. The Cancun/Riviera Maya text was in
  the **homepage** description (`app/page.tsx:10`) and in the global LocalBusiness
  schema. Both fixed; the global description was set to the brief's exact copy.
- **Task 7** says redirects go in `next.config.js`. The file is `next.config.mjs`.
- **Task 11** says the site claims *"a real Philadelphia address, phone number"* —
  that exact phrase does not appear anywhere in the repo.
- **Task 2** (prev. agent) — `.accent` / `.lede` classes don't exist; inline styles used.

## 5. Skipped or partially completed

Nothing skipped. Four tasks are deliberately left non-functional **because the
brief says so** — they are not incomplete work:

- **Task 8** figures are the brief's placeholders, reproduced exactly. I
  programmatically diffed all 8 rows against the brief: character-for-character
  match. The verbatim `TODO(owner)` comment sits directly above the table.
- **Task 9** CTA is `href="#"` as instructed — the page cannot take payment.
- **Task 10** form is not wired to any provider, as instructed. It has no submit
  handler, so `home-page.tsx` stays a server component.
- **Task 11** renders the literal text `[STREET ADDRESS]` and `Philadelphia, PA [ZIP]`.

## 6. Routes deleted + redirect confirmation

All 11 deleted and verified against a running production build (`next start`):
every one returns **308 → `/`** in a single hop.

```
indian-wedding-shopping-{philadelphia,washington-dc,new-york,new-jersey,
  massachusetts,georgia,florida,california,texas,illinois}
indian-bridal-wear-new-york-new-jersey
```

`indian-bridal-wear-california` and `indian-bridal-wear-texas` were **not** on the
list and remain live. Sitemap regenerates with zero deleted routes and includes
`/swatch-box/`. Zero inbound links to deleted routes remain anywhere in the repo.

---

## Judgement calls worth your review

1. **Review-schema fix bundled into Task 12 (hard rule 7).** `app/page.tsx` built
   the homepage Review + AggregateRating schema from `VISIBLE_TESTIMONIALS`
   (4 couples). After trimming to 3, that schema would have declared reviews no
   longer visible on the page — including Karan & Sonal, deleted outright. That is
   the exact violation commits `93c917b` and the `layout.tsx` FAQ removal were
   cleaning up. The rendered array is now exported as `HOMEPAGE_TESTIMONIALS` and
   the schema maps over it, so `reviewCount: 3` and the two cannot desync.
   Verified in rendered HTML. `/real-weddings/` still shows all 4 and is
   self-consistent — untouched.

2. **Mexico removed from the global LocalBusiness schema.** `layout.tsx` injects it
   on every page, which makes it sitewide metadata. Mexico remains as body content
   on its dedicated pages, `/services/`, `/pricing/`, `/about/` — the brief permits this.

3. **A second "Charly & Viola" quote still renders.** It is a hardcoded pull-quote in
   the *Intercultural Couples* section (`home-page.tsx:748`), not one of the eight
   testimonial blocks Task 12 scopes. Hard rule 2 forbids deleting testimonials, so
   I left it. **If you wanted all non-kept client quotes gone from the homepage,
   this one needs a decision.**

4. **Trustpilot beyond the testimonial section.** Task 12's link is replaced. Others
   remain out of scope: a "Read all reviews on Trustpilot" CTA in the reviews strip
   (`home-page.tsx:~806`), `global-footer.tsx` ("5.0 stars on Trustpilot"),
   `app/real-weddings/page.tsx`, and a `sameAs` entry in `lib/seo.tsx`. Given Task 1
   removed unfalsifiable claims, the footer's "5.0 stars" is arguably the same class
   of claim. **Owner decision.**

5. **Two-hop chains on *other* redirects.** The 11 new ones are single-hop. But
   pre-existing rules like `/consultation` → `/contact` → `/contact/` cost an extra
   hop because of `trailingSlash: true`. Predates this work; a one-hop middleware fix
   would be a small win.

6. **`buildGlobalFaqSchema()` in `lib/seo.tsx` is dead code** — exported, never
   imported, still mentions Mexico. Renders nowhere, so not global metadata. Left alone.

---

## How to get this code

```bash
git clone https://github.com/leylabernie/v0-ceremony-verse-wedding-concierge.git
cd v0-ceremony-verse-wedding-concierge
git checkout repositioning        # at 7b52d79
git am /path/to/patches/*.patch   # 7 patches — verified to apply cleanly
git push origin repositioning
```

Patches live in `patches/` in the workspace clone
(`/home/user/v0-ceremony-verse-wedding-concierge/patches/`), numbered 0001–0007.
Or push straight from that clone once credentials exist.

A backup branch `backup/agent-guessed-version` holds an earlier attempt made
before the real brief was located. **It does not match the brief — do not merge
it.** Delete it once this is reviewed.

---

## Owner's checklist (from the brief — nothing ships until these are done)

- [ ] Replace all placeholder prices in Task 8
- [ ] Fill `[STREET ADDRESS]` and `[ZIP]`
- [ ] Create the Stripe Payment Link, wire the Swatch Box button
- [ ] Connect the email form to a provider; write the checklist PDF
- [ ] Claim the Google Business Profile, replace both `#` links
- [ ] Confirm all three testimonials are from clients who paid
- [ ] Submit the deleted URLs to Google Search Console for recrawl
