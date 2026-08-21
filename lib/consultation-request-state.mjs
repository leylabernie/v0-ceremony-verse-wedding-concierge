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

    async markQuestionnaireCompleted(requestId) {
      const existing = await read(requestRedisKey(requestId))
      if (!existing) return { found: false, transitioned: false, state: undefined }
      if (existing.status === "questionnaire_completed") {
        return { found: true, transitioned: false, state: existing }
      }

      const state = await write({ ...existing, status: "questionnaire_completed", updatedAt: new Date().toISOString() })
      return { found: true, transitioned: true, state }
    },

    async forget(state) {
      await Promise.all([
        command(["DEL", dedupeRedisKey(state.dedupeHash)]),
        command(["DEL", requestRedisKey(state.requestId)]),
      ])
    },
  }
}
