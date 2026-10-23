#!/usr/bin/env node
/**
 * Submits all live sitemap URLs on www.ceremonyverse.com directly to IndexNow
 * (powering Bing, ChatGPT Search, DuckDuckGo, Seznam, and Yandex discovery).
 *
 * Usage: npm run indexnow
 */

const HOST = "www.ceremonyverse.com"
const SITE_URL = `https://${HOST}`
const KEY = "6cd69a51200138df356a9c3a81421474"
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`

async function main() {
  const smRes = await fetch(`${SITE_URL}/sitemap.xml`)
  if (!smRes.ok) {
    throw new Error(`Failed to fetch ${SITE_URL}/sitemap.xml: HTTP ${smRes.status}`)
  }
  const xml = await smRes.text()
  const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g), (m) => m[1].trim()).filter(Boolean)

  console.log(`Submitting ${urls.length} URLs from ${SITE_URL}/sitemap.xml to IndexNow...`)

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  })

  const body = await res.text()
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow rejected batch (${res.status}): ${body}`)
  }
  console.log(`IndexNow accepted ${urls.length} URLs (HTTP ${res.status}).`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
