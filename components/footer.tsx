"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { CookieSettingsButton } from "@/components/cookie-settings-button"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="relative bg-[#031d40] text-white pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #bbbd26 0px, #bbbd26 1px, transparent 1px, transparent 50px)",
          }}
        />
      </div>

      <div className="absolute top-20 right-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#bbbd26]/10 rounded-full blur-[60px] md:blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/8 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="hidden sm:block absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-[#bbbd26]/6 rounded-full blur-[90px]" />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16 space-y-4 sm:space-y-6">
          <Link href="/" className="block w-fit">
            <Image
              src="/un-isotipo-blancoamarillo.png"
              alt="Unnic AI Logo"
              width={80}
              height={80}
              sizes="80px"
              className="h-12 sm:h-16 w-auto"
            />
          </Link>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl leading-tight px-2 sm:px-0">
            {t.footer.headline}<span className="text-[#bbbd26]">{t.footer.headlineHighlight}</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 items-center">
            {/* Updated LinkedIn button to match CTA section style */}
            <a
              href="https://www.linkedin.com/company/93352502/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              title="LinkedIn"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#bbbd26] bg-transparent flex items-center justify-center hover:bg-[#bbbd26] hover:scale-110 transition-all shadow-lg">
                <svg
                  className="w-7 h-7 text-[#bbbd26] group-hover:text-[#031d40] transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </a>
            {/* Updated button style to match the rest of the website (CTA section style) */}
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 bg-[#bbbd26] hover:bg-[#bbbd26]/90 hover:scale-105 text-[#031d40] font-bold shadow-2xl transition-all group w-full sm:w-auto"
              asChild
            >
              <Link href="/contacto">
                {t.footer.empecemos}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12 border-t border-white/10 pt-8 sm:pt-12">
          {/* Columna 1: Explorar */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              {t.footer.explorar}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1 bg-[#bbbd26] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: t.footer.links.servicios, href: "/servicios" },
                { name: t.footer.links.industrias, href: "/industrias" },
                { name: t.footer.links.casosExito, href: "/portfolio" },
                { name: t.footer.links.unnickers, href: "/nosotros" },
                { name: t.footer.links.recursos, href: "/recursos" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-200 hover:text-[#bbbd26] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 2: Legal */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              {t.footer.legal}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-12 h-1 bg-[#bbbd26] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: t.footer.legalLinks.privacidad, href: "/politica-privacidad" },
                { name: t.footer.legalLinks.avisoLegal, href: "/aviso-legal" },
                { name: t.footer.legalLinks.cookies, href: "/cookies" },
                { name: t.footer.legalLinks.faq, href: "/preguntas-frecuentes" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-[#bbbd26] transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>{t.footer.derechos}</p>
            <p className="text-gray-500">Unnic AI · Av. Can Fatjó dels Aurons, 9 · Sant Cugat del Vallès, Barcelona</p>
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/aviso-legal" className="hover:text-[#bbbd26] transition-colors">
              {t.footer.avisoLegal}
            </Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  )
}
