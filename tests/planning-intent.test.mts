import assert from 'node:assert/strict'
import test from 'node:test'
import { conciergeIntent, proposalRisk, customsAlert } from '../lib/planning-intent'
import { calculatorSchema, agencyFields } from '../lib/schema'

test('strict risk thresholds exclude retail room value and unrelated duty', () => {
 assert.equal(proposalRisk(10,500,3000).high,false)
 assert.equal(proposalRisk(11,500,0).high,true)
 assert.equal(proposalRisk(0,0,3001).high,true)
 assert.equal(customsAlert('Other',1800),false)
 assert.equal(customsAlert('Bridal lehenga',1500),false)
 assert.equal(customsAlert('Sherwani',1501),true)
})
test('segment recommendations and handoffs use only visitor turns',()=>{
 const visitor=(text:string)=>({role:'user',text})
 assert.deepEqual(conciergeIntent([visitor('Satvik food for 150 guests'),{role:'assistant',text:'Ready to sign a contract?'}]),{audience:'parent',high:false})
 assert.deepEqual(conciergeIntent([visitor('attire for 151 guests')]),{audience:'couple',high:true})
 for(const text of ['review my contract','January 2028'])assert.equal(conciergeIntent([visitor(text)]).high,true)
})
test('schema describes a free finance app and attributes registrations to the travel affiliate',()=>{
 const schema=calculatorSchema({name:'Budget',url:'https://www.ceremonyverse.com/planning-tools/budget-tracker/',description:'Budget worksheet'})
 assert.deepEqual(schema.offers,{'@type':'Offer',price:'0',priceCurrency:'USD'})
 assert.equal(schema.operatingSystem,'All');assert.equal(schema.applicationCategory,'FinanceApplication')
 assert.equal(agencyFields().memberOf.identifier.length,3);assert.match(agencyFields().description,/family weddings, not client projects/)
})
