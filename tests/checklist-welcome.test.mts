import assert from 'node:assert/strict'
import test from 'node:test'
import { NextRequest } from 'next/server'
import { POST } from '../app/api/guest-checklist/route'
import { POST as preference } from '../app/api/checklist-preferences/route'
import { actionToken,subscriberId,validAction } from '../lib/checklist-store.mjs'
import { welcomeMessage } from '../lib/emails/checklist-welcome'
const secret='test-secret-for-checklist-signing'
test('confirmation tokens cannot be replayed as unsubscribe or for another subscriber',()=>{
 const id=subscriberId('person@example.test',secret),token=actionToken(id,'confirm',secret)
 assert.equal(id,subscriberId(' PERSON@EXAMPLE.TEST ',secret))
 assert.ok(validAction(id,'confirm',token,secret))
 assert.equal(validAction(id,'unsubscribe',token,secret),false)
 assert.equal(validAction(subscriberId('other@example.test',secret),'confirm',token,secret),false)
 assert.equal(validAction(id,'confirm','short',secret),false)
})
test('three distinct welcome emails contain opt-out and business address without invented client proof',()=>{
 const messages=[0,1,2].map(i=>welcomeMessage(i,'https://www.ceremonyverse.com/checklist-preferences/?token=test','Test Business, PO Box 123, PA, USA')!)
 assert.equal(new Set(messages.map(m=>m.subject)).size,3)
 for (const m of messages) {assert.match(m.text,/Unsubscribe:/);assert.match(m.text,/PO Box 123/)}
 assert.match(messages[0].text,/family events, not client projects/)
 assert.match(messages[1].text,/Benefits|benefits.*conditional/)
 assert.match(messages[2].text,/independent affiliate/)
 assert.equal(welcomeMessage(3,'',''),undefined)
})
test('cross-origin, invalid inputs, and forged confirmation never call an external service',async()=>{
 const original=globalThis.fetch
 let calls=0
 globalThis.fetch=async()=>{calls++;throw new Error('Unexpected network call')}
 const make=(body:object,origin='https://www.ceremonyverse.com')=>new NextRequest('https://www.ceremonyverse.com/api/guest-checklist/',{method:'POST',headers:{origin,'Content-Type':'application/json'},body:JSON.stringify(body)})
 try {
  assert.equal((await POST(make({email:'person@example.test',consent:true},'https://evil.example'))).status,403)
  assert.equal((await POST(make({email:'invalid',consent:true}))).status,400)
  assert.equal((await POST(make({email:'person@example.test',consent:true,website:'bot'}))).status,400)
  assert.equal((await preference(make({id:'a'.repeat(64),token:'forged',action:'confirm'}))).status,400)
  assert.equal(calls,0)
 } finally {globalThis.fetch=original}
})
test('missing email configuration cannot report a successful signup',async()=>{
 const previous=process.env.RESEND_API_KEY;delete process.env.RESEND_API_KEY
 try {
  const request=new NextRequest('https://www.ceremonyverse.com/api/guest-checklist/',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email:'person@example.test',consent:false})})
  const response=await POST(request)
  assert.equal(response.status,503)
  assert.equal((await response.json()).success,undefined)
 } finally {if(previous===undefined) delete process.env.RESEND_API_KEY;else process.env.RESEND_API_KEY=previous}
})

test('signup fulfils the resource, confirms the series once, and unsubscribe suppresses later sends',async()=>{
 const originalFetch=globalThis.fetch
 const keys=['RESEND_API_KEY','CEREMONYVERSE_LEAD_FROM_EMAIL','CEREMONYVERSE_AUTOMATION_SECRET','CEREMONYVERSE_MARKETING_ADDRESS','UPSTASH_REDIS_REST_URL','UPSTASH_REDIS_REST_TOKEN']
 const previous=keys.map(k=>process.env[k])
 keys.forEach(k=>{process.env[k]='local-test'})
 process.env.CEREMONYVERSE_AUTOMATION_SECRET=secret
 process.env.UPSTASH_REDIS_REST_URL='https://redis.checklist.test'
 const hashes=new Map<string,Record<string,string>>(),locks=new Map<string,string>(),due=new Map<string,number>(),emails:Record<string,any>[]=[]
 let failEmail=false
 globalThis.fetch=async(input,init)=>{
  if(String(input)==='https://api.resend.com/emails') {
   if(failEmail) return Response.json({}, {status:503})
   emails.push(JSON.parse(String(init?.body)));return Response.json({id:'test-delivery'})
  }
  assert.equal(String(input),'https://redis.checklist.test')
  const c=JSON.parse(String(init?.body)), [op,key]=c
  let result:any=null
  if(op==='PING') result='PONG'
  else if(op==='HGETALL') result=Object.entries(hashes.get(key)||{}).flat()
  else if(op==='HSET') {const state=hashes.get(key)!;for(let i=2;i<c.length;i+=2) state[c[i]]=String(c[i+1]);result=1}
  else if(op==='SET') {if(!locks.has(key)){locks.set(key,c[2]);result='OK'}}
  else if(op==='ZRANGEBYSCORE') result=[...due].filter(([,time])=>time<=Number(c[3])).map(([id])=>id)
  else if(op==='ZREM') {due.delete(c[2]);result=1}
  else if(op==='EVAL') {
   const script=c[1],n=c[2],k1=c[3],args=c.slice(3+n)
   if(script.includes('INCR')) result=1
   else if(script.includes("'EXISTS'") && script.includes("'resourceSent'")) {
    if(hashes.has(k1)) result=0
    else {hashes.set(k1,{email:args[0],status:args[1],consent:args[2],version:args[3],createdAt:String(args[4]),step:'0',resourceSent:'0'});result=1}
   } else if(script.includes("'GET',KEYS[1]")) {if(locks.get(k1)===args[0]) locks.delete(k1);result=1}
   else if(script.includes("'confirmedAt'")) {const s=hashes.get(k1);result=0;if(s?.status==='pending'&&s.consent==='1'){s.status='active';s.confirmedAt=String(args[1]);due.set(args[0],Number(args[1]));result=1}}
   else if(script.includes("'unsubscribed'")) {const s=hashes.get(k1);if(s)s.status='unsubscribed';due.delete(args[0]);result=1}
   else if(script.includes('tonumber')) {const s=hashes.get(k1);result=0;if(s?.status==='active'&&s.step===String(args[1])){s.step=String(Number(s.step)+1);if(args[2]==='done'){s.status='completed';due.delete(args[0])}else due.set(args[0],Number(args[2]));result=1}}
   else throw new Error('Unexpected Lua operation')
  } else throw new Error('Unexpected Redis operation')
  return Response.json({result})
 }
 const request=(path:string,body:object)=>new NextRequest(`https://www.ceremonyverse.com${path}`,{method:'POST',headers:{origin:'https://www.ceremonyverse.com','content-type':'application/json'},body:JSON.stringify(body)})
 const email='subscriber@example.test', id=subscriberId(email,secret)
 try {
  failEmail=true
  assert.equal((await POST(request('/api/guest-checklist/',{email,consent:true}))).status,503)
  assert.equal(emails.length,0)
  failEmail=false
  assert.equal((await POST(request('/api/guest-checklist/',{email,consent:true}))).status,200)
  assert.equal(emails.length,2) // resource to the subscriber and notification to the owner
  assert.equal(due.size,0)
  assert.equal((await POST(request('/api/guest-checklist/',{email,consent:true}))).status,200)
  assert.equal(emails.length,2)
  const confirm={id,action:'confirm',token:actionToken(id,'confirm',secret)}
  assert.equal((await preference(request('/api/checklist-preferences/',confirm))).status,200)
  assert.equal(emails.length,3)
  assert.ok(due.get(id)! >= Date.now()+2*86400000-5000)
  assert.equal((await preference(request('/api/checklist-preferences/',confirm))).status,200)
  assert.equal(emails.length,3)
  const unsubscribe={id,action:'unsubscribe',token:actionToken(id,'unsubscribe',secret)}
  assert.equal((await preference(request('/api/checklist-preferences/',unsubscribe))).status,200)
  assert.equal(due.size,0)
  assert.equal((await preference(request('/api/checklist-preferences/',confirm))).status,400)
  assert.equal(emails.length,3)
  const resourceOnly='resource@example.test',resourceId=subscriberId(resourceOnly,secret)
  assert.equal((await POST(request('/api/guest-checklist/',{email:resourceOnly,consent:false}))).status,200)
  assert.equal((await preference(request('/api/checklist-preferences/',{id:resourceId,action:'confirm',token:actionToken(resourceId,'confirm',secret)}))).status,400)
 } finally {
  globalThis.fetch=originalFetch
  keys.forEach((k,i)=>{if(previous[i]===undefined)delete process.env[k];else process.env[k]=previous[i]})
 }
})
