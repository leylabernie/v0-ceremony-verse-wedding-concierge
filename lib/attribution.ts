export const attributionKey = 'cv_attribution'
const engines = {
  'perplexity.ai': 'perplexity', 'chatgpt.com': 'chatgpt', 'chat.openai.com': 'chatgpt',
  'gemini.google.com': 'gemini', 'claude.ai': 'claude',
} as const

export function aiReferral(referrer: string) {
  try {
    const { hostname, origin, protocol } = new URL(referrer)
    if (protocol !== 'https:' && protocol !== 'http:') return
    for (const [host, engine] of Object.entries(engines)) {
      if (hostname === host || hostname.endsWith(`.${host}`)) return { engine, referrer_url: origin }
    }
  } catch { /* absent or malformed referrer */ }
}

// Campaign labels, not free text, URLs, email addresses, or booking tokens.
function label(value: unknown) {
  return typeof value === 'string' && /^[\w .-]{1,80}$/.test(value) ? value : ''
}
function landingAttribution(href: string, referrer: string) {
  const p = new URL(href).searchParams
  const ai = aiReferral(referrer)?.engine
  return { from: label(p.get('from')), utm_source: label(p.get('utm_source')) || ai || '',
    utm_medium: label(p.get('utm_medium')), utm_campaign: label(p.get('utm_campaign')), ref: label(p.get('ref')) || ai || '' }
}
type Attribution = ReturnType<typeof landingAttribution>

/** First touch per tab. Return a GEO event only for the initial external landing. */
export function persistAttribution() {
  if (typeof window === 'undefined') return
  try {
    if (window.sessionStorage.getItem(attributionKey)) return
    window.sessionStorage.setItem(attributionKey, JSON.stringify(landingAttribution(window.location.href, document.referrer)))
    return aiReferral(document.referrer)
  } catch { /* storage denied; navigation is unaffected */ }
}
export function readAttribution(): Partial<Attribution> {
  try {
    const parsed = JSON.parse(window.sessionStorage.getItem(attributionKey) || '{}')
    return { from: label(parsed.from), ref: label(parsed.ref), utm_source: label(parsed.utm_source),
      utm_medium: label(parsed.utm_medium), utm_campaign: label(parsed.utm_campaign) }
  } catch { return {} }
}

/** Only decorate internal scheduling URLs. Explicit CTA placement always wins. */
export function getAttributionParams(href: string): string {
  if (typeof window === 'undefined') return href
  try {
    const url = new URL(href, window.location.href)
    if (url.origin !== window.location.origin || !/^\/schedule\/?$/.test(url.pathname)) return href
    const a = readAttribution()
    const tags = { from: label(a.from) || window.location.pathname.split('/').filter(Boolean).pop() || 'home', utm_source: label(a.utm_source), ref: label(a.ref) }
    for (const [k,v] of Object.entries(tags)) if (label(v) && !url.searchParams.has(k)) url.searchParams.set(k,v)
    return url.href
  } catch { return href }
}
