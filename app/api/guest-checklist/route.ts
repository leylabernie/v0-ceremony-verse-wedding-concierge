import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createChecklistStore, subscriberId, redisCommand } from '@/lib/checklist-store.mjs'
import { CHECKLIST_CONSENT, CHECKLIST_VERSION, CHECKLIST_FILE } from '@/lib/guest-checklist'
import { preferenceUrl } from '@/lib/checklist-delivery'
import { sendCeremonyVerseEmail, escapeHtml } from '@/lib/consultation-email'
import { marketingAddress } from '@/lib/emails/checklist-welcome'
import { createHash } from 'node:crypto'
export const runtime='nodejs'
const schema=z.object({email:z.string().trim().email().max(254),consent:z.boolean(),website:z.string().max(120).optional().default('')})
const reply=(body:object,status=200)=>NextResponse.json(body,{status,headers:{'Cache-Control':'no-store'}})
async function ready() {
 try { return Boolean(process.env.RESEND_API_KEY && process.env.CEREMONYVERSE_LEAD_FROM_EMAIL && process.env.CEREMONYVERSE_AUTOMATION_SECRET && (process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN) && await marketingAddress() && await redisCommand(['PING']) === 'PONG') } catch { return false }
}
export async function GET() {return reply({ready:await ready()})}
export async function POST(request:NextRequest) {
 if (request.headers.get('origin') && request.headers.get('origin')!==request.nextUrl.origin) return reply({error:'Please use the website form.'},403)
 try {
  const raw=await request.text()
  if (Buffer.byteLength(raw)>2000) return reply({error:'The request is too large.'},413)
  const parsed=schema.safeParse(JSON.parse(raw))
  if (!parsed.success || parsed.data.website) return reply({error:'Please enter a valid email address.'},400)
  if (!await ready()) return reply({error:'Email delivery is temporarily unavailable. Please try again later.'},503)
  const {email:rawEmail,consent}=parsed.data, email=rawEmail.toLowerCase()
  const ip=request.headers.get('x-vercel-forwarded-for')?.split(',')[0] || request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  const rateKey=`ceremonyverse:checklist:rate:${createHash('sha256').update(ip).digest('hex')}`
  const count=await redisCommand(['EVAL',"local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],3600) end; return n",1,rateKey])
  if (Number(count)>5) return reply({error:'Please wait an hour before requesting another email.'},429)
  const id=subscriberId(email,process.env.CEREMONYVERSE_AUTOMATION_SECRET!)
  const store=createChecklistStore()
  await store.register(id,email,consent,JSON.stringify({version:CHECKLIST_VERSION,text:CHECKLIST_CONSENT}))
  const lease=await store.lock(id)
  if (!lease) return reply({error:'Your request is being processed. Please try again shortly.'},409)
  try {
   const state=await store.read(id)
   if (!state) throw new Error('Missing subscriber')
   // Never restart a completed or unsubscribed series, or silently change stored consent.
   if (state.resourceSent!=='1') {
    const confirm=state.status==='pending' ? preferenceUrl(id,'confirm') : undefined
    const text=`Your requested Complete Guest Logistics & Gift Coordination Checklist:\nhttps://www.ceremonyverse.com${CHECKLIST_FILE}\n\n${confirm ? `You also requested three planning emails. Confirm that request here: ${confirm}\n\nIf you did not request this, ignore the confirmation. The series will not start.` : 'You have not been enrolled in a new planning email series.'}\n\nMini Patel | CeremonyVerse\nQuestions: bhamini@ceremonyverse.com`
    const delivered=await sendCeremonyVerseEmail({to:email,replyTo:'bhamini@ceremonyverse.com',subject:'Your CeremonyVerse guest logistics & gift checklist',text,html:`<p>Your requested checklist is ready.</p><p><a href="https://www.ceremonyverse.com${CHECKLIST_FILE}">Download your checklist</a></p>${confirm?`<p>You requested three planning emails. <a href="${escapeHtml(confirm)}">Confirm the three-part series</a>. It will not start until you confirm.</p>`:'<p>No new planning email series has been started.</p>'}<p>Mini Patel | CeremonyVerse</p>`,idempotencyKey:`checklist-resource-${id}`})
    if (!delivered) return reply({error:'We could not confirm email delivery. Please try again later.'},503)
    await store.resourceSent(id)
   }
   if (state.notificationSent !== '1') {
    const notified = await sendCeremonyVerseEmail({to:'bhamini@ceremonyverse.com',replyTo:email,subject:'CeremonyVerse checklist request',text:`Checklist request from ${email}. Planning-series consent: ${state.consent === '1' ? 'requested; confirmation required' : 'not requested'}. This is a resource subscriber, not a booked consultation or client.`,html:`<p>Checklist request: ${escapeHtml(email)}</p><p>Planning-series consent: ${state.consent === '1' ? 'requested; confirmation required' : 'not requested'}. Resource subscriber only; no consultation or contract.</p>`,idempotencyKey:`checklist-notification-${id}`})
    if (notified) await redisCommand(['HSET',`ceremonyverse:checklist:subscriber:${id}`,'notificationSent','1'])
   }
   return reply({success:true,download:CHECKLIST_FILE,message:'Check your inbox for the checklist. If you requested the planning series, use the confirmation link in that email. Previously fulfilled requests do not restart the series.'})
  } finally {await store.unlock(id,lease)}
 } catch {return reply({error:'Email delivery is temporarily unavailable. Please try again later.'},503)}
}
