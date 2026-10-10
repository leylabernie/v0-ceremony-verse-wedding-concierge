import { NextRequest, NextResponse } from 'next/server'
import { createChecklistStore, validAction } from '@/lib/checklist-store.mjs'
import { processChecklistWelcome } from '@/lib/checklist-delivery'
import { z } from 'zod'
export const runtime='nodejs'
const schema=z.object({id:z.string().regex(/^[a-f0-9]{64}$/),token:z.string(),action:z.enum(['confirm','unsubscribe'])})
export async function POST(request:NextRequest) {
 if (request.headers.get('origin') && request.headers.get('origin')!==request.nextUrl.origin) return NextResponse.json({error:'Use the preference page.'},{status:403})
 try {
  const parsed=schema.safeParse(await request.json())
  if (!parsed.success || !validAction(parsed.data.id,parsed.data.action,parsed.data.token,process.env.CEREMONYVERSE_AUTOMATION_SECRET)) return NextResponse.json({error:'This link is invalid.'},{status:400})
  const {id,action}=parsed.data, store=createChecklistStore()
  if (action==='unsubscribe') {await store.unsubscribe(id);return NextResponse.json({success:true,message:'You have unsubscribed from this checklist planning series.'})}
  const state=await store.read(id)
  if (!state || ['unsubscribed','resource-only'].includes(state.status)) return NextResponse.json({error:'This request cannot start a planning series.'},{status:400})
  const activated=await store.confirm(id)
  if (activated) {try {await processChecklistWelcome(id)} catch {/* Durable queue retries through the daily cron. */}}
  return NextResponse.json({success:true,message:'Your planning series is confirmed. The first email is on its way; the next two arrive about two and four days later.'})
 } catch {return NextResponse.json({error:'We could not save your preference. Please try again.'},{status:503})}
}
