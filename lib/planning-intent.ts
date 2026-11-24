/** Only uncovered room-nights AFTER allowed attrition, at the contractual penalty rate. */
export function proposalRisk(uncoveredNights: number, penaltyPerNight: number, vendorFees: number) {
  const penalty = uncoveredNights * penaltyPerNight
  return { penalty, high: penalty > 5000 || vendorFees > 3000 }
}
export const customsAlert = (item: string, duty: number) => ['Bridal lehenga','Sherwani'].includes(item) && duty > 1500

/** Infer the topic to suggest, never assert a visitor's identity. User messages only. */
export function conciergeIntent(messages: {role:string; text:string}[]) {
  const turns = messages.filter(m => m.role === 'user').map(m => m.text.toLowerCase())
  let audience: 'parent'|'couple'|undefined
  for (const text of turns) {
    if (/\b(my (son|daughter)|as a parent)\b/.test(text)) audience = 'parent'
    else if (/\b(my (wedding|fianc[ée]+)|our wedding)\b/.test(text)) audience = 'couple'
    else if (/\b(satvik|sattvic|jain|room[- ]block|family travel|flight logistics|guest safety)\b/.test(text)) audience = 'parent'
    else if (/\b(decor|décor|timeline|aesthetics|multi-day flow|attire|lehenga|sherwani)\b/.test(text)) audience = 'couple'
  }
  const high = turns.some(text => /\b(contract\w*|attrition|deposit\w*|cancellation|proposal\w*)\b|\b20\d{2}\b|\b\d{1,2}[/-]\d{1,2}\b|\b(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d/i.test(text) || Array.from(text.matchAll(/\b(\d[\d,]*)\s*\+?\s*(?:guests?|attendees?|people)\b/g)).some(m => Number(m[1].replace(/,/g,'')) > 150))
  return {audience, high}
}

/** Analytics labels are a fixed vocabulary; never forward visitor messages. */
export function conciergeTopic(messages: {role: string; text: string}[]) {
  const topics: [RegExp, string][] = [
    [/\b(satvik|sattvic|jain|catering)\b/i, 'dietary_requirements'],
    [/\b(room[- ]block|attrition|contract)\b/i, 'room_block_contract'],
    [/\b(flight|flights|guest safety|family travel)\b/i, 'guest_travel'],
    [/\b(attire|sherwani|lehenga)\b/i, 'wedding_attire'],
    [/\b(decor|décor|aesthetics)\b/i, 'decor'],
    [/\b(timeline|multi-day flow)\b/i, 'event_timeline'],
  ]
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role !== 'user') continue
    const topic = topics.find(([pattern]) => pattern.test(messages[i].text))
    if (topic) return topic[1]
  }
  return 'general_planning'
}
