'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { es } from './es'
import { en } from './en'
import { ca } from './ca'

export type Locale = 'es' | 'en' | 'ca'

export type Translations = typeof es

const translations: Record<Locale, Translations> = { es, en, ca }

const VALID_LOCALES: Locale[] = ['es', 'en', 'ca']

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const STORAGE_KEY = 'unnic-locale'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored && VALID_LOCALES.includes(stored as Locale)) {
      setLocaleState(stored as Locale)
      document.cookie = `${STORAGE_KEY}=${stored}; path=/; max-age=31536000; SameSite=Lax`
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
    document.cookie = `${STORAGE_KEY}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
    document.documentElement.lang = newLocale
    router.refresh()
  }, [router])

  const t = translations[locale]

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within a LanguageProvider')
  return ctx
}
