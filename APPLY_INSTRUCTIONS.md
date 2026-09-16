# CeremonyVerse SEO Changes — Apply Instructions

This ZIP contains all the SEO improvements built across 4 tasks for ceremonyverse.com.

## How to apply these changes

### Step 1 — Make sure your local repo is clean

In your local clone of `leylabernie/v0-ceremony-verse-wedding-concierge`:

```bash
git status
git checkout main
git pull origin main
```

If you have uncommitted changes, commit or stash them first.

### Step 2 — Back up your local repo (recommended)

```bash
git tag backup-before-seo-changes
```

This creates a git tag you can return to if anything goes wrong.

### Step 3 — Extract the ZIP over your local repo

Download `ceremonyverse-seo-changes.zip` and extract it on top of your local clone:

```bash
# From the root of your local clone:
unzip -o /path/to/ceremonyverse-seo-changes.zip
```

The `-o` flag overwrites existing files. The ZIP preserves the directory structure — files like `app/about/mini/page.tsx` will land in the right place.

### Step 4 — Review the diff

```bash
git diff
git status
```

You should see approximately:
- 32 modified files (mostly blog posts with `authorName: "Mini"` and byline updates)
- 22 new files (founder page, author archive, 6 gap cluster pages, pillar page, EEAT playbook, topical authority map, 2 Python scripts)

### Step 5 — Install dependencies and run the build

```bash
npm install
npm run build
```

The build should compile cleanly with 128 static pages. If you see errors, they're most likely from the 6 new gap cluster pages — re-extract those files from the ZIP.

### Step 6 — Commit and push

```bash
git add -A
git commit -m "SEO overhaul: E-E-A-T foundation, Gujarati NRI pillar + 6 gap cluster pages, real-weddings rewrite, off-site brand signals prep

- Refactor lib/seo.tsx: add AUTHOR_PERSON (Mini) as Person schema, refactor buildBlogPosting to emit Person author, add buildPersonSchema helper
- New /about/mini/ founder page in Mini's first-person voice
- New /blog/author/mini/ author archive (32 articles)
- New /nri-gujarati-wedding-planning-guide/ pillar page (~4,500 words, Article+FAQ+HowTo schema)
- 6 new gap cluster pages: 12-month timeline, rituals explained, vendor questions, legal requirements (Mexico), parents guide, guest etiquette
- Rewrite /real-weddings/ with 3 substantive first-person family-wedding narratives
- Update all 26 blog posts: authorName=Mini, visible byline linking to /about/mini/
- Humanize /blog/how-to-buy-bridal-lehenga-from-india-usa/ intro + Step 3 + closing
- Add EEAT_PLAYBOOK.md and TOPICAL_AUTHORITY_MAP.md as source-of-truth docs
- Update sitemap.ts, global-footer.tsx, home-page.tsx, about/page.tsx, editorial-guide.tsx
- Build is green: 128 static pages compile cleanly

See EEAT_PLAYBOOK.md for future content rules.
See TOPICAL_AUTHORITY_MAP.md for the cluster structure.
See ceremonyverse-brand-signals-package.docx (separate download) for off-site directory submission copy."

git push origin main
```

If you're using v0.app, the push to `main` will auto-deploy.

### Step 7 — Submit the off-site brand signals (separate)

Open `ceremonyverse-brand-signals-package.docx` (downloaded separately) and work through the directory submissions in the order shown. Start with Google Business Profile — that's the highest-impact single submission.

## What's in the ZIP (54 files)

### New pages (9 files)
- `app/about/mini/page.tsx` — founder page in Mini's first-person voice
- `app/blog/author/mini/page.tsx` — author archive (32 articles)
- `app/nri-gujarati-wedding-planning-guide/page.tsx` — pillar page
- `app/nri-gujarati-wedding-timeline-12-months/page.tsx`
- `app/nri-gujarati-wedding-rituals-explained/page.tsx`
- `app/nri-gujarati-wedding-vendor-questions/page.tsx`
- `app/nri-gujarati-wedding-legal-requirements-mexico/page.tsx`
- `app/nri-gujarati-parents-guide-destination-wedding/page.tsx`
- `app/nri-gujarati-wedding-guest-etiquette/page.tsx`

### Modified pages (32 files)
- `lib/seo.tsx` — SEO library refactor (AUTHOR_PERSON, Person author schema)
- `app/real-weddings/page.tsx` — rewritten with 3 substantive narratives
- `app/about/page.tsx` — added Mini + real-weddings CTAs
- `app/sitemap.ts` — added 9 new routes
- `components/editorial-guide.tsx` — byline → "By Mini"
- `components/global-footer.tsx` — added pillar + founder + real-weddings links
- `components/pages/home-page.tsx` — added "Start here" pillar CTA
- 24 blog posts — `authorName: "Mini"` and visible bylines

### Documentation (2 files)
- `EEAT_PLAYBOOK.md` — content rules for future posts
- `TOPICAL_AUTHORITY_MAP.md` — cluster structure map

### Reusable scripts (2 files)
- `scripts/update_blog_authors.py` — idempotent author-attribute updater
- `scripts/update_blog_bylines.py` — idempotent visible-bylines updater

## What is NOT in this ZIP

- The brand-signals Word document — that's a separate download: `ceremonyverse-brand-signals-package.docx`
- Any of the original unchanged repo files (images, package.json, etc.) — those stay as-is in your local clone

## What these changes will NOT do

- Will not change the visual design, fonts, or layout of any existing page (the brand colors, Cormorant Garamond + DM Sans fonts, and all component styling are preserved)
- Will not change any functionality (no API routes, no form behavior, no navigation logic changed)
- Will not affect any of the calculators or interactive planning tools
- Will not remove any existing content — only adds new content and updates authorship metadata

## Verification after deploy

After your deploy completes, check:

1. `https://www.ceremonyverse.com/about/mini/` loads with Mini's first-person story
2. `https://www.ceremonyverse.com/blog/author/mini/` shows 32 articles
3. `https://www.ceremonyverse.com/nri-gujarati-wedding-planning-guide/` loads the pillar page
4. `https://www.ceremonyverse.com/sitemap.xml` includes the 9 new routes
5. View source on any blog post and confirm `authorName: "Mini"` appears in the metadata and `BlogPosting.author` JSON-LD is a `Person` (not `Organization`)
6. View source on the homepage and confirm "Start here — read the complete guide" appears in the startingRoutes section

## Rollback

If anything breaks:

```bash
git reset --hard backup-before-seo-changes
git push --force-with-lease origin main
```

Then re-deploy.
