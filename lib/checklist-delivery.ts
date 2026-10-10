import { createChecklistStore, actionToken } from '@/lib/checklist-store.mjs'
import { sendCeremonyVerseEmail } from '@/lib/consultation-email'
import { marketingAddress, welcomeMessage } from '@/lib/emails/checklist-welcome'
export function preferenceUrl(id: string, action: 'confirm' | 'unsubscribe') {
 const secret=process.env.CEREMONYVERSE_AUTOMATION_SECRET?.trim()
 if (!secret) throw new Error('Checklist signing is unavailable')
 return `https://www.ceremonyverse.com/checklist-preferences/?id=${id}&action=${action}&token=${actionToken(id,action,secret)}`
}
export async function processChecklistWelcome(onlyId?: string) {
 const store=createChecklistStore()
 const address=await marketingAddress()
 if (!address) return {processed:0,sent:0,available:false}
 const due=onlyId ? [onlyId] : await store.due()
 let sent=0
 for (const id of Array.isArray(due) ? due : []) {
  const lease=await store.lock(id)
  if (!lease) continue
  try {
   const state=await store.read(id)
   if (!state || state.status!=='active') {await store.removeDue(id);continue}
   const step=Number(state.step), unsubscribe=preferenceUrl(id,'unsubscribe')
   const message=welcomeMessage(step,unsubscribe,address)
   if (!message) {await store.removeDue(id);continue}
   const delivered=await sendCeremonyVerseEmail({to:state.email,replyTo:'bhamini@ceremonyverse.com',...message,idempotencyKey:`checklist-welcome-${id}-${step}`})
   if (delivered) {
    await store.advance(id,step,step<2 ? Number(state.confirmedAt)+(step+1)*2*86400000 : undefined)
    sent++
   }
  } finally {await store.unlock(id,lease)}
 }
 return {processed:Array.isArray(due)?due.length:0,sent,available:true}
}
