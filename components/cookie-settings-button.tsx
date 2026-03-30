"use client"

import { resetConsent } from "@/lib/cookie-consent"

export function CookieSettingsButton() {
  function handleClick() {
    resetConsent()
    // Recargar para que el banner vuelva a aparecer
    window.location.reload()
  }

  return (
    <button
      onClick={handleClick}
      className="text-sm text-gray-400 hover:text-[#bbbd26] transition-colors cursor-pointer"
    >
      Configurar cookies
    </button>
  )
}
