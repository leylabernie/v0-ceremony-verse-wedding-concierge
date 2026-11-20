import assert from 'node:assert/strict'
import test from 'node:test'
import { POST } from '../app/api/schedule/route'
import { GET as invite } from '../app/api/booking-invite/[id]/route'
import { bookingSlots } from '../lib/booking-availability.mjs'
const request = (data:object)=>new Request('https://example.test/api/schedule/',{method:'POST',body:JSON.stringify(data)})
const lead = {startIso:bookingSlots()[0],name:'Test Family',email:'test@example.com',phone:'+15555550100',privacyConsent:true}
test('rejects missing consent before storage',async()=>assert.equal((await POST(request({...lead,privacyConsent:false}))).status,400))
test('POST rejects out-of-horizon appointments',async()=>assert.equal((await POST(request({...lead,startIso:'2099-01-05T15:00:00.000Z'}))).status,409))
test('confirmed booking notifies both recipients, supplies a matching download and refuses the losing claim',async t=>{
 const env = {KV_REST_API_URL:'https://example.test/redis',KV_REST_API_TOKEN:'test',RESEND_API_KEY:'test',CEREMONYVERSE_LEAD_FROM_EMAIL:'test@example.com'}
 for(const [k,v] of Object.entries(env)){const prev=process.env[k];process.env[k]=v;t.after(()=>{if(prev===undefined)delete process.env[k];else process.env[k]=prev})}
 let record:string|undefined;const emails:{to:string[],attachments:{content:string}[]}[]=[]
 t.mock.method(globalThis,'fetch',async(url:string,init:RequestInit)=>{
 const payload=JSON.parse(String(init.body)); if(url.includes('resend.com')) {emails.push(payload);return Response.json({id:'mock'})}
 if(payload[0]==='GET')return Response.json({result:record});if(payload[1].includes('INCR'))return Response.json({result:1})
 assert.match(payload[1],/'NX'/);if(record)return Response.json({result:0});record=payload[6];return Response.json({result:1})
 })
 const responses=await Promise.all([POST(request(lead)),POST(request(lead))]);assert.deepEqual(responses.map(r=>r.status).sort(),[200,409]);const {bookingId}=await responses.find(r=>r.ok)!.json();assert.deepEqual(emails.map(e=>e.to[0]).sort(),['bhamini@ceremonyverse.com',lead.email]);const result=await invite(request({}),{params:Promise.resolve({id:bookingId})});assert.equal(result.status,200);assert.equal(await result.text(),Buffer.from(emails[0].attachments[0].content,'base64').toString())
})
