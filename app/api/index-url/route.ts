import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/seo';

/**
 * Manual URL indexing submission — a one-stop utility to tell search engines
 * a page is new or updated (e.g., after publishing a blog post, guide, or
 * agreement landing page).
 *
 * POST /api/index-url
 *   Body: { "urls": ["https://www.ceremonyverse.com/blog/new-post/"] }
 *   Header: X-IndexNow-Secret: <value of INDEXNOW_SECRET env var>
 *
 * What it does per submission:
 *   1. Validates and normalizes the URLs (https, same-host as this site,
 *      trailing slash to match the site's canonical form).
 *   2. Submits them to IndexNow (api.indexnow.org) — instant discovery for
 *      Bing, Yandex, Seznam, and Naver.
 *   3. Pings Google's sitemap endpoint so Google re-reads /sitemap.xml
 *      promptly.
 *
 * Honest note on Google: the official Google Indexing API only accepts
 * JobPosting and BroadcastEvent pages, so general page submission for Google
 * happens through Search Console (URL Inspection → Request Indexing) and the
 * sitemap ping below. The IndexNow submission covers the engines that do
 * support instant submission.
 *
 * Security: same shared-secret model as /api/indexnow — INDEXNOW_SECRET env
 * var must match the X-IndexNow-Secret header. If the env var is unset the
 * route refuses to run.
 */

const INDEXNOW_KEY = '6cd69a51200138df356a9c3a81421474';
const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '');

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function normalizeUrl(raw: string): string | null {
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== 'https:' || parsed.hostname !== SITE_HOST) return null;
    // Match the site's canonical trailing-slash form.
    return parsed.pathname.endsWith('/')
      ? `${SITE_URL}${parsed.pathname}`
      : `${SITE_URL}${parsed.pathname}/`;
  } catch {
    return null;
  }
}

async function submitIndexNow(urls: string[]): Promise<{ ok: boolean; status: number | string }> {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
      cache: 'no-store',
    });
    return { ok: response.ok || response.status === 202, status: response.status };
  } catch (error) {
    return { ok: false, status: error instanceof Error ? error.message : 'network error' };
  }
}

async function pingGoogleSitemap(): Promise<{ ok: boolean; status: number | string }> {
  try {
    const response = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`,
      { cache: 'no-store' },
    );
    return { ok: response.ok, status: response.status };
  } catch (error) {
    return { ok: false, status: error instanceof Error ? error.message : 'network error' };
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    usage: {
      method: 'POST',
      headers: { 'X-IndexNow-Secret': '<INDEXNOW_SECRET env var value>' },
      body: { urls: ['https://www.ceremonyverse.com/blog/example/'] },
      notes: 'URLs must be https and on the ceremonyverse.com host. Trailing slashes are normalized automatically.',
    },
  });
}

export async function POST(req: NextRequest) {
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: 'INDEXNOW_SECRET env var not set on server' },
      { status: 500 },
    );
  }
  const provided = req.headers.get('x-indexnow-secret');
  if (provided !== secret) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  let raw: string[] = [];
  try {
    const body = await req.json();
    raw = Array.isArray(body?.urls) ? body.urls : body?.url ? [body.url] : [];
  } catch {
    try {
      const urlParam = req.nextUrl.searchParams.get('url');
      if (urlParam) raw = [urlParam];
    } catch {
      raw = [];
    }
  }

  const urls = [...new Set(raw.filter((u): u is string => typeof u === 'string').map(normalizeUrl).filter((u): u is string => !!u))];
  if (urls.length === 0) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Provide at least one valid https URL on this host, e.g. { "urls": ["https://www.ceremonyverse.com/costs/"] }',
      },
      { status: 400 },
    );
  }

  const [indexNow, google] = await Promise.all([submitIndexNow(urls), pingGoogleSitemap()]);

  return NextResponse.json({
    ok: indexNow.ok,
    submitted: urls,
    results: {
      indexNow,
      googleSitemapPing: google,
    },
  });
}
