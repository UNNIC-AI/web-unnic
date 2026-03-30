"use client"

import Script from "next/script"
import { useEffect, useState } from "react"
import { hasAnalyticsConsent } from "@/lib/cookie-consent"

const GA_MEASUREMENT_ID = "G-YS8CSB0BMK"

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    setHasConsent(hasAnalyticsConsent())

    // Escuchar cambios de consentimiento (cuando el usuario acepta)
    const handleConsentChange = () => {
      setHasConsent(hasAnalyticsConsent())
    }

    window.addEventListener("cookie-consent-changed", handleConsentChange)
    return () => {
      window.removeEventListener("cookie-consent-changed", handleConsentChange)
    }
  }, [])

  if (!hasConsent) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  )
}
