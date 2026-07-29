import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // AI search / answer-engine crawlers. main's `userAgent: '*'` rule already
  // permits these, but declaring them EXPLICITLY is a stronger, unambiguous
  // opt-in signal — several AI operators only treat a named allow rule as
  // consent to cite/surface content. Purely additive; no disallow tightening.
  const aiCrawlers = [
    'GPTBot',            // OpenAI / ChatGPT Search
    'ChatGPT-User',      // ChatGPT user-initiated browsing
    'OAI-SearchBot',     // OpenAI Search crawler
    'PerplexityBot',     // Perplexity.ai
    'Perplexity-User',   // Perplexity user-initiated browsing
    'Google-Extended',   // Google Gemini / AI Overviews
    'ClaudeBot',         // Anthropic Claude
    'anthropic-ai',      // Anthropic
    'Applebot-Extended', // Apple Intelligence
    'CCBot',             // Common Crawl (feeds many AI datasets)
  ].map((ua) => ({ userAgent: ua, allow: '/' }))

  return {
    rules: [
      ...aiCrawlers,
      {
        userAgent: '*',
        allow: [
          '/',
          // CRITICAL: Allow Next.js static assets (JS/CSS/fonts) and optimized images.
          // A blanket "Disallow: /_next/" previously blocked Googlebot from fetching
          // all CSS/JS required for rendering, which caused pages to appear as
          // unstyled/broken content in Google's rendering engine. That is the #1
          // reason an otherwise-good site gets stuck in "Crawled - currently not
          // indexed" or drops out of the index entirely.
          // See: https://developers.google.com/search/docs/crawling-indexing/rendering
          '/_next/static/',
          '/_next/image/',
        ],
        disallow: [
          // Block server-side Next.js internals that should never be crawled
          // (these aren't needed for rendering; accessing them as a user 404s).
          '/_next/data/',
          // Block API routes (server-side endpoints, no indexable content)
          '/api/',
          // Block the dedicated 404 page itself
          '/404/',
          // Block internal-only utility pages (outreach templates, staging tools).
          // These pages are not meant for public indexing and should not burn
          // crawl budget or dilute the site's keyword focus.
          '/internal-resources/',
        ],
      },
    ],
    sitemap: [
      'https://www.ceremonyverse.com/sitemap.xml',
      'https://www.ceremonyverse.com/sitemap-images.xml',
    ],
    host: 'https://www.ceremonyverse.com',
  }
}
