import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { GoogleAnalytics } from "@/components/google-analytics"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { DiagnosticPopup } from "@/components/diagnostic-popup"
import { LanguageProvider } from "@/lib/i18n"
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
  preload: true,
})

// Default metadata - será sobrescrita por las páginas individuales
export const metadata: Metadata = {
  metadataBase: new URL("https://unnic.ai"),
  title: {
    default: "Unnic AI | Consultoría e Implementación de IA para Empresas",
    template: "%s | Unnic AI",
  },
  description: "Transformamos empresas con Inteligencia Artificial. Consultoría, automatización e implementación con ROI demostrado.",
  applicationName: "Unnic AI",
  authors: [{ name: "Unnic AI" }],
  generator: "Next.js",
  keywords: ["inteligencia artificial", "IA empresas", "consultoría IA", "automatización IA"],
  referrer: "origin-when-cross-origin",
  creator: "Unnic AI",
  publisher: "Unnic AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

// Viewport configuration para SEO móvil
export const viewport: Viewport = {
  themeColor: "#031d40",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} font-sans antialiased`}>
        <LanguageProvider>
          <GoogleAnalytics />
          {children}
          <Footer />
          <CookieConsentBanner />
          <DiagnosticPopup />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
