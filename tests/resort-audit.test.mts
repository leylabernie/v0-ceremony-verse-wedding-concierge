import test from 'node:test'
import assert from 'node:assert/strict'
import { calculateResortAudit } from '../lib/resort-audit.ts'

const defaults = { guests: 250, rooms: 50, nights: 3, rate: 400, guarantee: 80, pickup: 60, catering: 0, mandap: 0 }
test('quick audit derives commitment and shortfall from room nights, not guest count', () => {
  const result = calculateResortAudit(defaults)
  assert.equal(result.roomNights, 150)
  assert.equal(result.commitment, 120)
  assert.equal(result.expected, 90)
  assert.equal(result.shortfall, 30)
  assert.equal(result.exposure, 12000)
  assert.equal(result.level, 'high')
  assert.equal(calculateResortAudit({ ...defaults, guests: 10 }).exposure, 12000)
})
test('risk boundaries are inclusive at $2,500 and $5,000', () => {
  for (const [exposure, level] of [[2499, 'low'], [2500, 'moderate'], [5000, 'moderate'], [5001, 'high']] as const) {
    assert.equal(calculateResortAudit({ ...defaults, rooms: 10, nights: 1, guarantee: 80, pickup: 70, rate: exposure }).level, level)
  }
})
test('pickup above commitment cannot create negative exposure; vendor fees are separate', () => {
  const result = calculateResortAudit({ ...defaults, pickup: 100, catering: 20, mandap: 300 })
  assert.equal(result.exposure, 0)
  assert.equal(result.catering, 5000)
  assert.equal(result.mandap, 900)
  assert.equal(result.level, 'low')
})
test('empty, negative and non-finite numeric scenarios remain safe', () => {
  for (const value of [0, -1, NaN, Infinity]) {
    assert.equal(calculateResortAudit({ ...defaults, rooms: value }).exposure, 0)
    assert.equal(calculateResortAudit({ ...defaults, rate: value }).exposure, 0)
  }
})
