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
    else if (/\b(satvik|sattvic|jain|room[- ]block|family travel|guest safety)\b/.test(text)) audience = 'parent'
    else if (/\b(decor|décor|timeline|attire|lehenga|sherwani)\b/.test(text)) audience = 'couple'
  }
  const high = turns.some(text => /\b(contract\w*|attrition|deposit\w*|cancellation|proposal\w*)\b|\b20\d{2}\b|\b\d{1,2}[/-]\d{1,2}\b|\b(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d/i.test(text) || Array.from(text.matchAll(/\b(\d[\d,]*)\s*\+?\s*(?:guests?|attendees?|people)\b/g)).some(m => Number(m[1].replace(/,/g,'')) > 150))
  return {audience, high}
}
