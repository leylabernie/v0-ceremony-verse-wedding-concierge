import { createRequire } from 'node:module'
const load = createRequire(import.meta.url)
import test from 'node:test'
import assert from 'node:assert/strict'
import { Children, isValidElement, type ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { JsonLd } from '../lib/seo'
const Budget = load('../app/planning-tools/budget-tracker/page').default
const Checklist = load('../app/planning-tools/wedding-checklist/page').default
const Guests = load('../app/planning-tools/guest-list/page').default
const Vendors = load('../app/planning-tools/vendor-manager/page').default
const Faq = load('../app/faq/page').default
const Parents = load('../app/nri-gujarati-parents-guide-destination-wedding/page').default
const Proposal = load('../app/before-signing-indian-wedding-resort-proposal/page').default
const Timeline = load('../app/nri-gujarati-wedding-timeline-12-months/page').default

// Render the actual route's JSON-LD scripts without mounting interactive calculators.
function scripts(tree: ReactNode): Record<string,any>[] {
  return Children.toArray(tree).flatMap(child => {
    if (!isValidElement<{children?:ReactNode}>(child)) return []
    if (child.type !== JsonLd) return scripts(child.props.children)
    const html = renderToStaticMarkup(child)
    assert.match(html,/type=\"application\/ld\+json\"/)
    return [JSON.parse(html.slice(html.indexOf('>')+1,html.lastIndexOf('</script>')))]
  })
}
for (const Page of [Budget,Checklist,Guests,Vendors]) test(`${Page.name} emits one free WebApplication`,()=>{
 const apps=scripts(Page()).filter(s=>s['@type']==='WebApplication')
 assert.equal(apps.length,1);assert.equal(apps[0].offers.price,'0');assert.equal(apps[0].operatingSystem,'All')
})
for (const Page of [Faq,Parents,Proposal]) test(`${Page.name} emits answered questions`,()=>{
 const faq=scripts(Page()).find(s=>s['@type']==='FAQPage');assert.ok(faq?.mainEntity.length)
 assert.ok(faq.mainEntity.every((q:any)=>q.name && q.acceptedAnswer?.text))
})
test('timeline emits ordered HowTo instructions for the year',()=>{
 const how=scripts(Timeline()).find(s=>s['@type']==='HowTo');assert.equal(how?.totalTime,'P12M');assert.ok(how.step.length>1)
 assert.ok(how.step.every((s:any)=>s['@type']==='HowToStep' && s.text))
})
