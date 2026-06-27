# Image SEO Guide — CeremonyVerse

Indian wedding searchers use Google Images constantly for style inspiration.
Optimizing every image file name and alt text on ceremonyverse.com directly
improves our discoverability in Google Image Search, Pinterest, and AI
search engines (Perplexity, ChatGPT Search, Google AI Overviews).

This guide defines the **mandatory pattern** for every image uploaded to the
site going forward.

---

## The Two Fields That Matter

### 1. File Name (the `.jpg` / `.webp` / `.png` name on disk)

**Rule:** Use lowercase, hyphen-separated, descriptive keywords. Never upload
files with camera-default names like `DC_100392.jpg` or `IMG_4521.png`.

| ❌ Bad file name             | ✅ Good file name                                                  |
| ---------------------------- | ----------------------------------------------------------------- |
| `DC_100392.jpg`              | `custom-red-bridal-lehenga-sourced-from-india.jpg`                |
| `IMG_4521.png`               | `handcrafted-groom-sherwani-delhi-india-to-usa.png`               |
| `saree1.jpg`                 | `kanchipuram-pure-silk-saree-sourced-from-india-to-usa.jpg`       |
| `wedding-gift.jpg`           | `bulk-indian-wedding-return-gifts-brass-diya-from-india.jpg`      |
| `Screenshot 2026-06-28.png`  | `live-video-shopping-bridal-lehenga-india-ceremonyverse.png`      |

**Naming formula:**
```
[descriptor-1]-[descriptor-2]-[item-type]-[origin-or-action].jpg
```

Always include:
- The **item type** (bridal-lehenga, sherwani, saree, return-gift, jewelry-set)
- A **distinguishing descriptor** (color, fabric, style, region)
- A **provenance or action word** when relevant (sourced-from-india,
  delivered-to-usa, live-video-shopping)

### 2. Alt Text (the `alt="..."` attribute on every `<img>`)

**Rule:** Write a full descriptive sentence (12–20 words) that includes the
primary keyword and reads naturally to a screen reader. Do NOT stuff keywords.
Do NOT start with "Image of" or "Picture of".

**Template:**
```
Real [subject] wearing / showing [item] [action / origin]
```

**Examples:**

| Image                              | Alt text                                                                                       |
| ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| Hero bridal lehenga                | `Real NRI bride wearing a custom red bridal lehenga sourced directly from India to the USA`    |
| Groom sherwani                     | `Indian-American groom wearing a handcrafted ivory sherwani sourced from Delhi India to USA`  |
| Kanchipuram saree                  | `Pure Kanchipuram silk saree in maroon and gold sourced directly from India for NRI weddings`  |
| Bridesmaid lehengas (group)        | `Four coordinated bridesmaid lehengas in blush pink custom-stitched in India for a USA wedding`|
| Return gifts display               | `Bulk Indian wedding return gifts including brass diyas and potli bags sourced from India`     |
| Live video shopping screenshot     | `Live video shopping session in India showing real bridal lehengas to NRI brides in the USA`   |
| Jewelry set                        | `Polki gold necklace set with matching earrings sourced from Jaipur India to USA brides`       |

---

## Where to Apply This

Every image on the site — including:

- **Homepage hero** (`/images/hero-lehenga.webp`) — updated 2026-06-28
- **Service category images** (`services-bridal.jpg`, `services-groom.jpg`, etc.)
- **Testimonial portraits** (`testimonial-*.jpg`)
- **Blog post featured images**
- **New landing page heroes** (e.g. the new
  `/how-to-buy-bridal-lehenga-from-india-to-usa/` page)
- **PDF thumbnails** linked from download pages
- **OG image** referenced in `app/layout.tsx` (set via `openGraph.images[].alt`)
- **Twitter card image** referenced in `app/layout.tsx`

---

## Workflow When Uploading a New Image

1. **Rename the file locally** before uploading to `/public/images/`.
   Example: `DC_100392.jpg` → `custom-red-bridal-lehenga-sourced-from-india.jpg`
2. **Place it in `/public/images/`** with the new name.
3. **Reference it in the React component** with the full descriptive alt text:
   ```tsx
   <img
     src="/images/custom-red-bridal-lehenga-sourced-from-india.jpg"
     alt="Real NRI bride wearing a custom red bridal lehenga sourced directly from India to the USA"
     width={1200}
     height={800}
   />
   ```
4. **If the image is the page's primary OG image**, also set the alt text in
   the page's `buildMetadata()` call — pass an `image` URL and the alt will
   inherit from the page title by default. For pages where the OG image
   differs from the hero, document the alt text in a code comment.
5. **For Next.js `next/image` components**, always pass `alt` — never leave it
   blank or omit it. Decorative-only images (rare on this site) may use
   `alt=""` to mark them as screen-reader-hidden.

---

## Why This Matters for CeremonyVerse

- **Google Images** is one of the top-3 traffic sources for Indian wedding
  inspiration searches like "red bridal lehenga," "sherwani for groom USA,"
  and "Kanchipuram saree online."
- **Pinterest** scrapes our images with their alt text as the default pin
  description — well-optimized alt text = more repins = more NRI bride
  discovery.
- **AI search engines** (Perplexity, ChatGPT Search, Google AI Overviews)
  parse image alt text alongside body content to understand page topic.
- **Accessibility** — descriptive alt text is required by WCAG 2.1 AA and
  improves the experience for blind and low-vision users using screen readers.

---

## Image Sitemap

CeremonyVerse automatically generates an image sitemap at
`/sitemap-images.xml` (see `app/sitemap-images.xml/route.ts`). Every image
referenced with a proper `alt` attribute is included. No manual action
needed when adding new images — just make sure they are referenced from a
page that is itself in the main sitemap.

---

## File Renaming Existing Images

Renaming an existing image file (e.g. `hero-lehenga.jpg` →
`custom-red-bridal-lehenga-sourced-from-india.jpg`) requires updating every
reference across the codebase AND setting up 301 redirects for SEO. Because
of this risk, we have NOT renamed existing images — only updated their alt
text. New images should follow the new naming convention from the start.

If you do need to rename a high-traffic image (e.g. for a homepage refresh),
coordinate with the dev team to add a 301 redirect from the old URL to the
new one in `next.config.mjs` (`redirects()`).

---

_Last updated: 2026-06-28_
