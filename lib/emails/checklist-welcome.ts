import { escapeHtml } from '@/lib/consultation-email'
import { CHECKLIST_PATH } from '@/lib/guest-checklist'
const site = 'https://www.ceremonyverse.com'
export function welcomeMessage(step: number, unsubscribe: string, address: string) {
 const messages = [
  { subject: 'Your guest logistics & gift coordination checklist', body: `Thank you for confirming. I’m Mini Patel. My approach comes from helping my own family coordinate Indian wedding celebrations and shopping across countries, including family weddings in Mexico. Those were family events, not client projects.\n\nStart with one list: households, room needs, arrivals, outfits and gifts. Assign one owner and one due date to each open item. The checklist helps you see what needs attention before it becomes an urgent family message.\n\nOpen your checklist: ${site}${CHECKLIST_PATH}\n\nWhich part feels hardest right now—rooms, outfits or gifts? Reply with that one question.` },
  { subject: 'Three written answers before you commit to a resort', body: `A headline wedding offer cannot tell you the full cost of your celebration. I would compare three written answers before committing:\n\n1. What room-block pickup, cancellation and unused-inventory obligations would your family accept?\n2. What is included for each event, and what costs extra for catering, production, guest access and transfers?\n3. Who owns the guest list and the follow-up when arrivals or bookings change?\n\nFree rooms, credits and group benefits are conditional; do not count them until the supplier confirms the qualifying terms.\n\nUse the room-block guide: ${site}/indian-wedding-room-block-mexico/\n\nReply with your destination, approximate date and guest count. Leave passport and payment details out of email.` },
  { subject: 'Let’s turn the family checklist into a clear next step', body: `If the checklist showed you several moving pieces, we can start with one practical conversation. CeremonyVerse supports destination planning and optional India outfit and gift sourcing. The right scope depends on what your family needs help owning.\n\nFor a free consultation, share your approximate dates, destination, guest count and planning budget: ${site}/contact/?from=checklist-welcome\n\nIf your immediate need is travel, browse current supplier offers: https://ceremonyversetravel.com/deals/\n\nCeremonyVerse Travel is an independent affiliate of A.S.A.P. Cruises Inc. / OutsideAgents.com. Supplier availability, contracts and terms apply. No booking or consultation is created by this email.\n\nYou can also message me on WhatsApp: https://wa.me/12153419990` },
 ]
 const message=messages[step]
 if (!message) return undefined
 const footer=`\n\nWarmly,\nMini Patel | CeremonyVerse\n${address}\nYou confirmed the three-part planning series. Unsubscribe: ${unsubscribe}`
 const text=message.body+footer
 return {subject:message.subject,text,html:`<div style="font-family:Arial,sans-serif;max-width:640px;line-height:1.7;color:#302923">${text.split('\n\n').map(p=>`<p>${escapeHtml(p).replace(/\n/g,'<br>')}</p>`).join('')}<p><a href="${escapeHtml(unsubscribe)}">Unsubscribe from this series</a></p></div>`}
}
export async function marketingAddress(): Promise<string | undefined> {
 const configured=process.env.CEREMONYVERSE_MARKETING_ADDRESS?.trim()
 if (configured) return configured
 const server=process.env.MAILCHIMP_SERVER?.trim(), audience=process.env.MAILCHIMP_AUDIENCE_ID?.trim(), token=process.env.MAILCHIMP_API_KEY?.trim()
 if (!server || !/^us\d+$/.test(server) || !audience || !token) return undefined
 try {
  const response=await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${encodeURIComponent(audience)}?fields=contact`,{headers:{Authorization:`Bearer ${token}`},cache:'no-store',signal:AbortSignal.timeout(5000)})
  if (!response.ok) return undefined
  const {contact:c}=await response.json()
  if (!c?.address1 || !c?.city || !c?.country) return undefined
  return [c.company,c.address1,c.address2,c.city,c.state,c.zip,c.country].filter(Boolean).join(', ')
 } catch {return undefined}
}
