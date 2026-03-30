'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useTranslation, type Locale } from '@/lib/i18n'
import { ChevronDown } from 'lucide-react'

const languages: {
  code: Locale
  label: string
  /** Ruta local (/flags/...) o URL absoluta (flagcdn) */
  flagSrc: string
  flagAlt: string
}[] = [
  { code: 'ca', label: 'Català', flagSrc: '/flags/ca.svg', flagAlt: 'Catalunya' },
  { code: 'es', label: 'Español', flagSrc: 'https://flagcdn.com/w80/es.png', flagAlt: 'España' },
  { code: 'en', label: 'English', flagSrc: 'https://flagcdn.com/w80/gb.png', flagAlt: 'United Kingdom' },
]

function CircularFlag({ src, alt }: { src: string; alt: string }) {
  return (
    <span
      className="relative inline-flex h-[22px] w-[22px] shrink-0 overflow-hidden rounded-full border border-black/10 bg-muted/30 shadow-sm ring-1 ring-black/5 dark:border-white/15 dark:ring-white/10"
      aria-hidden
    >
      <Image
        src={src}
        alt={alt}
        width={44}
        height={44}
        className="h-full w-full object-cover"
        sizes="22px"
      />
    </span>
  )
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = languages.find(l => l.code === locale)!

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors px-2 py-1.5 rounded-md hover:bg-muted/50"
        aria-label="Canviar idioma"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <CircularFlag src={current.flagSrc} alt={current.flagAlt} />
        <span className="text-[10px] font-bold uppercase leading-none min-w-[1.25rem] text-center text-muted-foreground">
          {locale.toUpperCase()}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg py-1 min-w-[160px] z-50"
          role="listbox"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={locale === lang.code}
              onClick={() => {
                setLocale(lang.code)
                setOpen(false)
              }}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 hover:bg-muted/50 transition-colors ${
                locale === lang.code ? 'text-primary font-semibold' : 'text-foreground/70'
              }`}
            >
              <CircularFlag src={lang.flagSrc} alt={lang.flagAlt} />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function LanguageSwitcherMobile() {
  const { locale, setLocale } = useTranslation()

  return (
    <div className="flex flex-wrap gap-2 px-6 py-3">
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => setLocale(lang.code)}
          className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            locale === lang.code
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-foreground/70 hover:bg-muted/80'
          }`}
        >
          <CircularFlag src={lang.flagSrc} alt={lang.flagAlt} />
          <span>{lang.label}</span>
        </button>
      ))}
    </div>
  )
}
