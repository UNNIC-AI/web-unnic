// Tipos de consentimiento
export type ConsentLevel = "all" | "necessary" | null

export type ConsentState = {
  level: ConsentLevel
  date: string // ISO string
}

const COOKIE_CONSENT_KEY = "unnic_cookie_consent"
const CONSENT_EXPIRY_DAYS = 365

/**
 * Obtiene el estado de consentimiento actual del usuario
 */
export function getConsentState(): ConsentState | null {
  if (typeof window === "undefined") return null

  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!stored) return null

    const parsed: ConsentState = JSON.parse(stored)

    // Verificar si ha expirado (12 meses)
    const consentDate = new Date(parsed.date)
    const now = new Date()
    const daysDiff = Math.floor(
      (now.getTime() - consentDate.getTime()) / (1000 * 60 * 60 * 24)
    )

    if (daysDiff > CONSENT_EXPIRY_DAYS) {
      localStorage.removeItem(COOKIE_CONSENT_KEY)
      return null
    }

    return parsed
  } catch {
    return null
  }
}

/**
 * Guarda la decisión de consentimiento del usuario
 */
export function setConsentState(level: ConsentLevel): void {
  if (typeof window === "undefined") return

  const state: ConsentState = {
    level,
    date: new Date().toISOString(),
  }

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state))
}

/**
 * Comprueba si el usuario ha aceptado cookies analíticas
 */
export function hasAnalyticsConsent(): boolean {
  const state = getConsentState()
  return state?.level === "all"
}

/**
 * Resetea el consentimiento (para el boton de "Configurar cookies")
 */
export function resetConsent(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(COOKIE_CONSENT_KEY)
}
