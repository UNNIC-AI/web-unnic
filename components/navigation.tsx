"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { LanguageSwitcher, LanguageSwitcherMobile } from "@/components/language-switcher"
import { useTranslation } from "@/lib/i18n"

const serviciosHrefs = [
  "/servicios/consultoria",
  "/servicios/automatizacion",
  "/servicios/desarrollo",
  "/servicios/data",
  "/servicios/ia-generativa",
  "/servicios/formacion",
  "/servicios/cumplimiento-ria",
] as const

const submenuKeys = [
  "consultoria",
  "automatizacion",
  "desarrollo",
  "data",
  "iaGenerativa",
  "formacion",
  "cumplimientoRia",
] as const

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [serviciosOpen, setServiciosOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServiciosOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled || !isHome ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/un-logo-azulamarillo.png"
              alt="Unnic AI"
              width={160}
              height={40}
              sizes="160px"
              className="w-auto h-5 sm:h-6"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div className="relative group">
              <Link
                href="/servicios"
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative flex items-center gap-1"
              >
                {t.nav.servicios}
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>

              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                  {serviciosHrefs.map((href, i) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors"
                    >
                      {t.nav.submenu[submenuKeys[i]]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/industrias"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {t.nav.industrias}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {t.nav.portfolio}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/nosotros"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {t.nav.unnickers}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/recursos"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {t.nav.recursos}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {t.nav.blog}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>

            <LanguageSwitcher />

            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 shadow-sm hover:shadow-md transition-all"
            >
              <Link href="/contacto">{t.nav.contacto}</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground h-10 w-10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t.nav.abrirMenu}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] p-0 bg-background">
                <SheetTitle className="sr-only">{t.nav.menuNav}</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                    <Image
                      src="/un-logo-azulamarillo.png"
                      alt="Unnic AI"
                      width={120}
                      height={30}
                      className="w-auto h-5"
                    />
                  </div>

                  <LanguageSwitcherMobile />

                  <div className="flex-1 overflow-y-auto py-4">
                    <div>
                      <button
                        onClick={() => setServiciosOpen(!serviciosOpen)}
                        className="flex items-center justify-between w-full px-6 py-3.5 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        {t.nav.servicios}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${serviciosOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          serviciosOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <Link
                          href="/servicios"
                          onClick={() => setMobileOpen(false)}
                          className="block px-10 py-2.5 text-sm text-primary font-medium hover:bg-muted/50 transition-colors"
                        >
                          {t.nav.verTodos}
                        </Link>
                        {serviciosHrefs.map((href, i) => (
                          <Link
                            key={href}
                            href={href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-10 py-2.5 text-sm text-foreground/60 hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {t.nav.submenu[submenuKeys[i]]}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/industrias"
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-3.5 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                    >
                      {t.nav.industrias}
                    </Link>
                    <Link
                      href="/portfolio"
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-3.5 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                    >
                      {t.nav.portfolio}
                    </Link>
                    <Link
                      href="/nosotros"
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-3.5 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                    >
                      {t.nav.unnickers}
                    </Link>
                    <Link
                      href="/recursos"
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-3.5 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                    >
                      {t.nav.recursos}
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-3.5 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                    >
                      {t.nav.blog}
                    </Link>
                  </div>

                  <div className="px-6 py-5 border-t border-border">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm"
                    >
                      <Link href="/contacto" onClick={() => setMobileOpen(false)}>
                        {t.nav.contacto}
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
