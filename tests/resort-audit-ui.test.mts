import test from 'node:test'
import assert from 'node:assert/strict'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { AuditNumberInput } from '../components/calculators/AuditNumberInput.tsx'
import { RiskGauge } from '../components/calculators/RiskGauge.tsx'
import { calculateResortAudit } from '../lib/resort-audit.ts'

test('stepper exposes labeled touch controls and disables increments at the bounds', () => {
  const render = (value: number) => renderToStaticMarkup(createElement(AuditNumberInput, { label: 'Rooms', value, max: 100, onChange() {} }))
  assert.match(render(0), /aria-label="Decrease Rooms" disabled=""/)
  assert.match(render(100), /aria-label="Increase Rooms" disabled=""/)
  assert.match(render(50), /type="number" min="0" max="100"/)
  assert.doesNotMatch(render(50), /disabled=""/)
})
test('gauge describes risk in words and currency, and respects reduced motion', () => {
  const audit = calculateResortAudit({ guests: 250, rooms: 50, nights: 3, rate: 400, guarantee: 80, pickup: 60, catering: 0, mandap: 0 })
  const html = renderToStaticMarkup(createElement(RiskGauge, { audit, guarantee: 80 }))
  assert.match(html, /High Financial Risk Detected/)
  assert.match(html, /\$12,000/)
  assert.match(html, /motion-reduce:transition-none/)
  assert.match(html, /do not add them together/)
})
