/**
 * IndexNow API route — lets you submit URLs to Bing (and other IndexNow
 * participants like Yandex, Seznam, Naver) for instant indexing.
 *
 * Why this exists:
 *   Bing Webmaster Tools flagged that ceremonyverse.com lacks inbound links.
 *   While we build backlinks, we can at least make sure Bing discovers new
 *   content the moment it is published. Without IndexNow, Bing can take
 *   days to discover new pages via crawling.
 *
 * How to use:
 *   POST /api/indexnow
 *   Body: { "urls": ["https://www.ceremonyverse.com/blog/new-post/"] }
 *
 *   Or submit a single URL:
 *   POST /api/indexnow?url=https://www.ceremonyverse.com/blog/new-post/
 *
 *   Example with curl:
 *   curl -X POST https://www.ceremonyverse.com/api/indexnow \
 *        -H "Content-Type: application/json" \
 *        -d '{"urls":["https://www.ceremonyverse.com/blog/new-post/"]}'
 *
 * Security:
 *   This route is rate-limited via a simple shared-secret header check.
 *   The secret is read from env var INDEXNOW_SECRET. If not set, the route
 *   refuses to run (so production deployment must have the env var set).
 *
 *   Set this in your .env:
 *   INDEXNOW_SECRET=<any-random-string-of-your-choice>
 *
 *   Then call with header: X-IndexNow-Secret: <same-value>
 */

import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = '6cd69a51200138df356a9c3a81421474';
const INDEXNOW_KEY_LOCATION = `https://www.ceremonyverse.com/${INDEXNOW_KEY}.txt`;
const SITE_HOST = 'www.ceremonyverse.com';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  // 1. Check shared secret (prevents randoms from triggering submissions)
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: 'INDEXNOW_SECRET env var not set on server' },
      { status: 500 }
    );
  }
  const provided = req.headers.get('x-indexnow-secret');
  if (provided !== secret) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  // 2. Parse URLs from body or query
  let urls: string[] = [];
  try {
    const body = await req.json();
    if (Array.isArray(body?.urls)) {
      urls = body.urls;
    } else if (typeof body?.url === 'string') {
      urls = [body.url];
    }
  } catch {
    // body parse failed — try query param
    const q = req.nextUrl.searchParams.get('url');
    if (q) urls = [q];
  }

  if (urls.length === 0) {
    return NextResponse.json(
      { ok: false, error: 'No URLs provided. Send { "urls": [...] } in body or ?url= in query.' },
      { status: 400 }
    );
  }

  // 3. Validate URLs belong to our domain (prevent abuse)
  const valid: string[] = [];
  const rejected: string[] = [];
  for (const u of urls) {
    try {
      const parsed = new URL(u);
      if (parsed.host === SITE_HOST || parsed.host === 'ceremonyverse.com') {
        valid.push(u);
      } else {
        rejected.push(u);
      }
    } catch {
      rejected.push(u);
    }
  }

  if (valid.length === 0) {
    return NextResponse.json(
      { ok: false, error: 'No valid ceremonyverse.com URLs provided', rejected },
      { status: 400 }
    );
  }

  // 4. Submit to IndexNow API (https protocol)
  //    IndexNow accepts up to 10,000 URLs per request.
  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: valid,
      }),
    });

    // IndexNow returns 200 if accepted, 202 if queued, 422 if invalid
    const ok = response.status === 200 || response.status === 202;

    return NextResponse.json({
      ok,
      status: response.status,
      submitted: valid.length,
      rejected,
      message: ok
        ? 'URLs submitted to IndexNow. Bing should crawl within ~24 hours.'
        : `IndexNow returned status ${response.status}. Check that ${INDEXNOW_KEY_LOCATION} is accessible.`,
    });
  } catch (err: unknown) {
    const detail = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { ok: false, error: 'Failed to reach IndexNow API', detail },
      { status: 502 }
    );
  }
}

/**
 * GET endpoint — quick health check + shows usage.
 * Visit /api/indexnow in a browser to see this.
 */
export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'IndexNow submitter for ceremonyverse.com',
    keyLocation: INDEXNOW_KEY_LOCATION,
    usage: `POST /api/indexnow with header X-IndexNow-Secret and body { "urls": ["https://www.ceremonyverse.com/..."] }`,
  });
}
