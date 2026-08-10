const DEFAULT_BUSINESS_EMAIL = "bhamini@ceremonyverse.com"

interface SendEmailOptions {
  to: string | string[]
  replyTo?: string
  subject: string
  html: string
  text: string
}

export function ceremonyVerseBusinessEmail(): string {
  return process.env.CEREMONYVERSE_LEAD_TO_EMAIL?.trim() || DEFAULT_BUSINESS_EMAIL
}

export function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;",
    }
    return entities[character]
  })
}

function safeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim()
}

export async function sendCeremonyVerseEmail(options: SendEmailOptions): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.CEREMONYVERSE_LEAD_FROM_EMAIL?.trim()

  if (!apiKey || !from) return false

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 8_000)

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: Array.isArray(options.to) ? options.to : [options.to],
        ...(options.replyTo ? { reply_to: safeHeader(options.replyTo) } : {}),
        subject: safeHeader(options.subject),
        html: options.html,
        text: options.text,
      }),
      cache: "no-store",
      signal: controller.signal,
    })

    return response.ok
  } catch {
    return false
  } finally {
    clearTimeout(timeout)
  }
}
