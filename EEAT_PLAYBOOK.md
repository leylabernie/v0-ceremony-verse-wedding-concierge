# E-E-A-T Playbook — How to Keep CeremonyVerse Content Human-Created

This document is the source of truth for everyone who writes or edits content on ceremonyverse.com. It exists because Google's **Helpful Content System** (live since 2022, intensified in the March 2024 Core Update and the 2024–2025 Site Reputation Abuse updates) demotes content that exhibits programmatic-SEO patterns. The fixes already applied to this repo (founder author page, real Person author schema, visible bylines linking to `/about/mini/`, substantive first-person narratives on `/real-weddings/`) only stay effective if every future post follows the same rules.

If you are about to publish a new blog post, landing page, or rewrite, **read this first**.

---

## 1. Authorship is non-negotiable

Every blog post MUST:

1. Set `authorName: "Mini"` in the `buildMetadata()` call
2. Use the default `buildBlogPosting()` author (which emits `AUTHOR_PERSON` from `lib/seo.tsx`) — do NOT override the author with the organization
3. Include a visible byline in the page body that links to `/about/mini/` — either the eyebrow `By Mini · <Month> <Year>` or the editorial-style `By <a href="/about/mini/">Mini</a> · Updated <date>`

**Never** set `authorName: "CeremonyVerse"`. An Organization author on an article reads as faceless/programmatic content and undoes every other E-E-A-T signal on the page.

If a guest author ever writes a post, create a `Person` schema for them in `lib/seo.tsx`, build them an `/about/<slug>/` page, and pass their Person object to `buildBlogPosting` via the `author` field. Do not invent credentials.

---

## 2. Write in Mini's first-person voice

Mini is the founder. Every guide on this site is written from her firsthand experience — either from the three family weddings in Mexico (Hard Rock Hotel Cancún 2019, Generations Riviera Maya Feb 2023, Royalton 2024) or from her documented remote-sourcing practice.

When writing a new post:

- Use "I" when describing decisions, mistakes, or lessons learned
- Use "we" only when referring to CeremonyVerse as a service (not as a generic content team)
- Include at least one concrete, specific anecdote per major section — a real moment, a real number, a real piece of vendor correspondence
- Avoid the AI-content signature: perfectly parallel structure ("Step 1 / Step 2 / Step 3" with identical sentence lengths), every section with exactly 3 bullets, every FAQ with exactly 4 questions
- Vary paragraph length. Include some 1-sentence paragraphs for emphasis. Allow the occasional rhetorical question.

If you can't write the post from Mini's actual experience, **don't publish it**. Either interview her for 15 minutes and ground the post in her answers, or skip the topic.

---

## 3. Honest dating — never bulk-bump `modifiedTime`

Google compares `publishedTime` to its first-crawl date and `modifiedTime` to its re-crawl date. Mismatches are a trust signal.

- `publishedTime` is the date the post first went live. **Never change it retroactively.**
- `modifiedTime` is the date of the last material content change. **Only update it when you actually changed something substantive** — not for a typo fix, not for a sitemap bulk update, not for SEO busywork.
- If you're auditing content but not materially changing it, leave `modifiedTime` alone.
- The visible date on the page should match the structured date. If the page says "Updated August 21, 2026" the `modifiedTime` should be `2026-08-21`.

The repo has a historical pattern of mass `modifiedTime: "2026-09-13T12:00:00Z"` timestamps from a bulk sitemap update. That's water under the bridge. Don't repeat the pattern.

---

## 4. Cite authoritative sources for any factual claim

If a post claims something about:

- **US customs duties** → link to CBP.gov or the actual HTS chapter
- **Resort policies** → link to the resort's official page
- **Visa or travel rules** → link to the relevant embassy or state.gov page
- **Tariffs or trade policy** → link to the White House EO, the USTR, or a recognized trade publication

Unsourced claims are the second-biggest E-E-A-T red flag (after authorless content). Every long-form guide should end with a "Sources" section that lists the authoritative URLs reviewed.

---

## 5. De-templatize regional pages

The 11 city landing pages (`/indian-wedding-shopping-<city>/`) are the highest-risk content on the site because they follow a near-identical template with only the city name swapped. Google's March 2024 "Scaled Content Abuse" policy explicitly targets this pattern.

For each new city page (or rewrite of an existing one):

- Include at least 1-2 paragraphs of **genuinely local content** — named Indian neighborhoods (Edison's Oak Tree Road, Jersey City's Newark Avenue, Iselin's India Square), actual bridal shops there with their addresses, real local tailors known for Indian garment alterations
- Replace template bullet lists with city-specific advice
- Honestly label any illustrative scenario as illustrative — don't dress up a generic planning worksheet as a "New Jersey story"
- If you can't add real local specificity, **consolidate the page** into the main `/buy-indian-wedding-outfits-from-india/` page and 301 the city URL

---

## 6. No fake testimonials, no fake savings claims

The `/about/mini/` page makes three commitments. Honor them:

- **No fabricated testimonials.** If a real client has agreed in writing to be featured, label their case study as such with their permission. The three family weddings on `/real-weddings/` are family events, not client projects — keep them labelled that way.
- **No promised savings.** Outfit prices, customs duties, resort fees, and shipping costs all change. Organize the questions and the written estimates; do not guarantee a number you cannot control.
- **No bulk-bumped dates.** See section 3 above.

---

## 7. The repeated-disclaimer problem

Several pages currently repeat boilerplate disclaimer paragraphs verbatim. Google's duplicate-content detection reads repeated boilerplate as templated/programmatic SEO. **Each disclaimer should appear on at most one page** (e.g. `/terms/` or `/how-it-works/`), and other pages should link to it once with a plain-text summary if needed for context. Do not paste the same paragraph across 20 pages.

---

## 8. Image SEO — already documented, still mandatory

Follow `IMAGE_SEO_GUIDE.md` for every image upload:

- Descriptive hyphen-separated file names
- 12–20 word alt text that includes the primary keyword and reads naturally to a screen reader
- Don't start alt text with "Image of" or "Picture of"

---

## 9. Internal linking — connect Mini to her work

Every blog post should link to `/about/mini/` at least once (the byline counts). The `/about/mini/` page should link to the blog posts that demonstrate her expertise on a given topic. The `/blog/author/mini/` archive is the canonical hub.

When a new post is published, **add it to the `articles` array in `app/blog/author/mini/page.tsx`** with the correct slug, title, description, and publication date. The archive is hand-maintained — there is no automatic sync.

---

## 10. What to do if you're unsure

If you're about to publish something and you're not sure whether it follows these rules, the default answer is **don't publish it yet**. Email Mini, explain what you want to publish, and let her decide whether it's grounded in her experience or whether it should be skipped.

The cost of one bad post is not just one bad post — it's a signal to Google that the site's content quality is uneven, which can affect the ranking of every other page. Helpful Content is a site-wide evaluation.

---

## Pre-publish checklist

Before you ship a new blog post:

- [ ] `authorName: "Mini"` in metadata
- [ ] Visible byline links to `/about/mini/`
- [ ] At least one first-person anecdote from Mini's experience
- [ ] No `By CeremonyVerse` anywhere
- [ ] No future-dated `publishedTime`
- [ ] `modifiedTime` only updated if content materially changed
- [ ] At least 2 outbound citations to authoritative sources (CBP, resort, government, etc.)
- [ ] No verbatim boilerplate disclaimer repeated from another page (summarize and link instead)
- [ ] Image file names and alt text follow `IMAGE_SEO_GUIDE.md`
- [ ] Post added to the `articles` array in `app/blog/author/mini/page.tsx`
- [ ] Sitemap entry added or updated in `app/sitemap.ts` if it's a new URL

---

## Why this matters

Google's 2024 Helpful Content evaluator asks: "Was this content produced primarily for search engines, or for people?" The single most reliable signal Google uses to answer that question is **authorship transparency** — does a real, identifiable human with verifiable expertise stand behind this content?

The founder page, author archive, Person schema, and visible bylines together answer that question with "yes, Mini does." Every future post that follows this playbook reinforces that signal. Every post that doesn't weakens it for the whole site.

This is the difference between page 1 and page 5.
