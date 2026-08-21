export const consultationDeliveryTtlMs = 24 * 60 * 60 * 1000

export function normalizeConsultationPart(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ")
}

export function consultationDedupeKey(parts) {
  return parts.map(normalizeConsultationPart).join("|")
}

export function createConsultationDeliveryStore(ttlMs = consultationDeliveryTtlMs) {
  const deliveries = new Map()

  return {
    get(key, now = Date.now()) {
      const existing = deliveries.get(key)
      if (!existing) return undefined
      if (existing.expiresAt <= now) {
        deliveries.delete(key)
        return undefined
      }
      return existing
    },
    set(key, delivery, now = Date.now()) {
      const stored = { ...delivery, expiresAt: now + ttlMs }
      deliveries.set(key, stored)
      return stored
    },
    size() {
      return deliveries.size
    },
  }
}
