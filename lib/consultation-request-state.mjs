import { createHash } from "node:crypto"

export const consultationRequestStateTtlSeconds = 60 * 60 * 24 * 90

export function consultationRequestDedupeHash(value) {
  return createHash("sha256").update(value).digest("hex")
}

function redisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim() || process.env.KV_REST_API_URL?.trim()
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim() || process.env.KV_REST_API_TOKEN?.trim()

  if (!url || !token) {
    throw new Error("Consultation state storage is not configured")
  }

  return { url, token }
}

async function upstashCommand(command) {
  const { url, token } = redisConfig()
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error("Consultation state storage request failed")
  }

  const payload = await response.json()
  if (payload.error) {
    throw new Error("Consultation state storage command failed")
  }

  return payload.result
}

function dedupeRedisKey(dedupeHash) {
  return `ceremonyverse:consultation:dedupe:${dedupeHash}`
}

function requestRedisKey(requestId) {
  return `ceremonyverse:consultation:request:${requestId}`
}

function nurtureDueRedisKey() {
  return "ceremonyverse:consultation:nurture:due"
}

function nurtureLockRedisKey(requestId) {
  return `ceremonyverse:consultation:nurture:lock:${requestId}`
}

function serialize(state) {
  return JSON.stringify(state)
}

function parseState(value) {
  if (typeof value !== "string") return undefined

  try {
    const parsed = JSON.parse(value)
    if (!parsed?.requestId || !parsed?.questionnaireUrl || !parsed?.dedupeHash || !parsed?.status) {
      return undefined
    }
    return parsed
  } catch {
    return undefined
  }
}

export function createConsultationRequestStateStore({ command = upstashCommand, ttlSeconds = consultationRequestStateTtlSeconds } = {}) {
  async function read(key) {
    return parseState(await command(["GET", key]))
  }

  async function write(state) {
    const value = serialize(state)
    await Promise.all([
      command(["SET", dedupeRedisKey(state.dedupeHash), value, "EX", ttlSeconds]),
      command(["SET", requestRedisKey(state.requestId), value, "EX", ttlSeconds]),
    ])
    return state
  }

  return {
    async claim(dedupeHash, candidate) {
      const state = {
        ...candidate,
        dedupeHash,
        status: "created",
        updatedAt: new Date().toISOString(),
      }
      const claimed = await command([
        "SET",
        dedupeRedisKey(dedupeHash),
        serialize(state),
        "NX",
        "EX",
        ttlSeconds,
      ])

      if (claimed === "OK") {
        await command(["SET", requestRedisKey(state.requestId), serialize(state), "EX", ttlSeconds])
        return { created: true, state }
      }

      const existing = await read(dedupeRedisKey(dedupeHash))
      if (!existing) {
        throw new Error("Consultation state could not be read after duplicate claim")
      }

      return { created: false, state: existing }
    },

    async markQuestionnaireSent(state) {
      return write({ ...state, status: "questionnaire_sent", updatedAt: new Date().toISOString() })
    },

    async getByRequest(requestId) {
      return read(requestRedisKey(requestId))
    },

    async markQuestionnaireCompleted(requestId, { nurtureConsent = false } = {}) {
      const existing = await read(requestRedisKey(requestId))
      if (!existing) return { found: false, transitioned: false, state: undefined }
      if (existing.status === "questionnaire_completed") {
        return { found: true, transitioned: false, state: existing }
      }

      const state = await write({
        ...existing,
        status: "questionnaire_completed",
        nurtureConsent: Boolean(nurtureConsent),
        updatedAt: new Date().toISOString(),
      })
      return { found: true, transitioned: true, state }
    },

    async markConsultationCompleted(requestId, { nurtureNote = "" } = {}) {
      const existing = await read(requestRedisKey(requestId))
      if (!existing || existing.status !== "questionnaire_completed") {
        return { found: Boolean(existing), transitioned: false, nurtureEligible: false, state: existing }
      }

      const completedAt = new Date().toISOString()
      const nurtureEligible = Boolean(existing.nurtureConsent && existing.email)
      const state = await write({
        ...existing,
        status: "consultation_completed",
        consultationCompletedAt: completedAt,
        nurtureNote: typeof nurtureNote === "string" ? nurtureNote.trim() : "",
        nurtureStep: nurtureEligible ? 0 : undefined,
        nurtureNextAt: nurtureEligible ? completedAt : undefined,
        updatedAt: completedAt,
      })

      if (nurtureEligible) {
        await command(["ZADD", nurtureDueRedisKey(), Date.parse(completedAt), requestId])
      }

      return { found: true, transitioned: true, nurtureEligible, state }
    },

    async claimDueNurture({ now = Date.now(), limit = 8 } = {}) {
      const requestIds = await command(["ZRANGEBYSCORE", nurtureDueRedisKey(), "-inf", now, "LIMIT", 0, limit])
      if (!Array.isArray(requestIds)) return []

      const due = []
      for (const requestId of requestIds) {
        const locked = await command(["SET", nurtureLockRedisKey(requestId), "1", "NX", "EX", 300])
        if (locked !== "OK") continue

        const state = await read(requestRedisKey(requestId))
        if (!state || state.status !== "consultation_completed" || !state.nurtureConsent || state.nurtureCompletedAt) {
          await Promise.all([
            command(["ZREM", nurtureDueRedisKey(), requestId]),
            command(["DEL", nurtureLockRedisKey(requestId)]),
          ])
          continue
        }

        due.push(state)
      }

      return due
    },

    async advanceNurture(requestId, { expectedStep, nextDueAt } = {}) {
      const existing = await read(requestRedisKey(requestId))
      if (!existing || existing.status !== "consultation_completed" || Number(existing.nurtureStep) !== Number(expectedStep)) {
        await command(["DEL", nurtureLockRedisKey(requestId)])
        return { advanced: false, state: existing }
      }

      const nextStep = Number(expectedStep) + 1
      const completed = !nextDueAt
      const state = await write({
        ...existing,
        nurtureStep: nextStep,
        nurtureNextAt: completed ? undefined : new Date(nextDueAt).toISOString(),
        nurtureCompletedAt: completed ? new Date().toISOString() : undefined,
        updatedAt: new Date().toISOString(),
      })

      await Promise.all([
        completed
          ? command(["ZREM", nurtureDueRedisKey(), requestId])
          : command(["ZADD", nurtureDueRedisKey(), Number(nextDueAt), requestId]),
        command(["DEL", nurtureLockRedisKey(requestId)]),
      ])

      return { advanced: true, state }
    },

    async releaseNurtureLock(requestId) {
      await command(["DEL", nurtureLockRedisKey(requestId)])
    },

    async withdrawNurture(requestId) {
      const existing = await read(requestRedisKey(requestId))
      if (!existing) return { found: false, state: undefined }

      const state = await write({
        ...existing,
        nurtureConsent: false,
        nurtureNextAt: undefined,
        nurtureOptedOutAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
      await Promise.all([
        command(["ZREM", nurtureDueRedisKey(), requestId]),
        command(["DEL", nurtureLockRedisKey(requestId)]),
      ])
      return { found: true, state }
    },

    async forget(state) {
      await Promise.all([
        command(["DEL", dedupeRedisKey(state.dedupeHash)]),
        command(["DEL", requestRedisKey(state.requestId)]),
        command(["ZREM", nurtureDueRedisKey(), state.requestId]),
        command(["DEL", nurtureLockRedisKey(state.requestId)]),
      ])
    },
  }
}
