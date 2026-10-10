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
