"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getConsentState, setConsentState } from "@/lib/cookie-consent"
import type { ConsentLevel } from "@/lib/cookie-consent"

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Mostrar banner solo si el usuario no ha tomado una decision
    const consent = getConsentState()
    if (!consent) {
      // Delay para no bloquear el render inicial
      const timer = setTimeout(() => setShowBanner(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  function handleConsent(level: ConsentLevel) {
    setConsentState(level)
    setShowBanner(false)

    // Disparar evento para que GA se active si acepta
    window.dispatchEvent(new Event("cookie-consent-changed"))
  }

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] animate-in slide-in-from-bottom duration-500"
      role="dialog"
      aria-label="Configuracion de cookies"
    >
      <div className="bg-[#031d40] border-t border-[#bbbd26]/20 shadow-2xl">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Texto */}
            <div className="flex-1 text-white">
              <p className="text-sm leading-relaxed text-gray-300">
                Utilizamos cookies propias y de terceros para analizar el uso del sitio y mejorar nuestros servicios.
                Puedes aceptar todas las cookies o solo las necesarias.{" "}
                <Link
                  href="/cookies"
                  className="text-[#bbbd26] underline underline-offset-2 hover:text-[#bbbd26]/80 transition-colors"
                >
                  Politica de Cookies
                </Link>
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 lg:flex-shrink-0">
              <button
                onClick={() => handleConsent("necessary")}
                className="px-5 py-2.5 text-sm font-medium text-gray-300 border border-gray-500 rounded-lg hover:border-white hover:text-white transition-all"
              >
                Solo necesarias
              </button>
              <button
                onClick={() => handleConsent("all")}
                className="px-5 py-2.5 text-sm font-bold bg-[#bbbd26] text-[#031d40] rounded-lg hover:bg-[#bbbd26]/90 transition-all"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
