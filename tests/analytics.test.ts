import assert from 'node:assert/strict'
import test from 'node:test'
import { captureEvent, type AnalyticsEvent } from '../lib/analytics'
import { aiReferral, getAttributionParams, persistAttribution, readAttribution } from '../lib/attribution'

const event: AnalyticsEvent = {name:'calc_threshold_triggered',properties:{calculator:'resort',threshold_type:'attrition_penalty',value:5001}}
function browser(t: {after: (cleanup:()=>void)=>void}) {
  const data = new Map<string,string>()
  const fake = { location:new URL('https://www.ceremonyverse.com/faq/?utm_campaign=fall&utm_medium=referral&ref=guide'),
    sessionStorage:{getItem:(key:string)=>data.get(key),setItem:(key:string,value:string)=>data.set(key,value)} }
  Object.defineProperty(globalThis,'window',{value:fake, configurable:true})
  Object.defineProperty(globalThis,'document',{value:{referrer:'https://chatgpt.com/c/private?token=test'},configurable:true})
  t.after(()=>{Reflect.deleteProperty(globalThis,'window');Reflect.deleteProperty(globalThis,'document')})
}
test('captureEvent is inert during SSR',()=>assert.doesNotThrow(()=>captureEvent(event)))
test('sends the same named and typed properties to both providers',t=>{
  browser(t);const ga=t.mock.fn(),va=t.mock.fn(); window.gtag=ga;window.va=va
  captureEvent(event)
  assert.deepEqual(ga.mock.calls[0].arguments,['event',event.name,event.properties]);
  assert.deepEqual(va.mock.calls[0].arguments[1].data,event.properties)
  assert.equal(va.mock.calls[0].arguments[1].name,event.name)
})
test('missing analytics scripts queue each event without throwing',t=>{
  browser(t);captureEvent(event)
  assert.deepEqual(Array.from(window.dataLayer![0] as ArrayLike<unknown>),['event',event.name,event.properties]);assert.equal(window.vaq?.length,1)
})
test('first touch survives navigation and only decorates internal schedule links',t=>{
  browser(t);assert.deepEqual(persistAttribution(),{engine:'chatgpt',referrer_url:'https://chatgpt.com'});assert.equal(persistAttribution(),undefined)
  assert.equal(readAttribution().utm_campaign,'fall');assert.equal(readAttribution().utm_medium,'referral');
  const dest=new URL(getAttributionParams('/schedule/?from=resort-calc#times'))
  assert.equal(dest.searchParams.get('from'),'resort-calc');assert.equal(dest.searchParams.get('ref'),'guide');assert.equal(dest.searchParams.get('utm_source'),'chatgpt');assert.equal(dest.hash,'#times')
  assert.equal(getAttributionParams('https://example.org/schedule/'),'https://example.org/schedule/');assert.equal(getAttributionParams('/contact/'),'/contact/')
})
test('GEO honors hostname boundaries and never includes conversation IDs or queries',()=>{
  for(const host of ['www.perplexity.ai','chat.openai.com','chatgpt.com','gemini.google.com','claude.ai'])assert.equal(aiReferral(`https://${host}/private?q=secret`)?.referrer_url,`https://${host}`)
  for(const bad of ['https://chatgpt.com.evil.test','https://notclaude.ai','https://example.org/?ref=perplexity.ai','invalid'])assert.equal(aiReferral(bad),undefined)
})
