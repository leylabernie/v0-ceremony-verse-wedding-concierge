export interface ResortAuditInput {
  guests: number; rooms: number; nights: number; rate: number;
  guarantee: number; pickup: number; catering: number; mandap: number;
}
const clamp = (n: number, max: number) => Number.isFinite(n) ? Math.min(max, Math.max(0, n)) : 0
export function calculateResortAudit(input: ResortAuditInput) {
  const roomNights = clamp(input.rooms, 10000) * clamp(input.nights, 365)
  const commitment = roomNights * clamp(input.guarantee, 100) / 100
  const expected = roomNights * clamp(input.pickup, 100) / 100
  const shortfall = Math.max(0, commitment - expected)
  const exposure = shortfall * clamp(input.rate, 100000)
  const catering = clamp(input.guests, 100000) * clamp(input.catering, 100000)
  const mandap = clamp(input.nights, 365) * clamp(input.mandap, 100000)
  return { roomNights, commitment, expected, shortfall, exposure, catering, mandap,
    level: exposure < 2500 ? 'low' : exposure <= 5000 ? 'moderate' : 'high' } as const
}
export const auditMoney = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
