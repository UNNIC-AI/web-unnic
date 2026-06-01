"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "@/lib/i18n"

function UnderlinedText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className="inline box-decoration-clone transition-[background-size] duration-700 ease-out isolate"
      style={{
        backgroundImage: "linear-gradient(to bottom, transparent 59%, #bbbd26 59%)",
        backgroundSize: isVisible ? "100% 100%" : "0% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        transitionDelay: `${delay}ms`,
        zIndex: -10,
      }}
    >
      {children}
    </span>
  )
}

export function HeroSection() {
  const { t } = useTranslation()
  return (
    <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-14 md:pt-40 md:pb-22 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Grid texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Dot pattern texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #031d40 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Diagonal lines texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #bbbd26 0px, #bbbd26 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      {/* Yellow blurred backgrounds */}
      <div className="hidden sm:block absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/20 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="hidden sm:block absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/25 rounded-full blur-[100px] md:blur-[140px]" />
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#bbbd26]/15 rounded-full blur-[60px] md:blur-[100px]" />
      <div className="hidden sm:block absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-[#bbbd26]/18 rounded-full blur-[110px]" />
      <div className="hidden sm:block absolute bottom-1/4 left-1/2 w-[350px] h-[350px] bg-[#bbbd26]/22 rounded-full blur-[90px]" />

      {/* Gray shadows */}
      <div className="hidden sm:block absolute top-40 left-20 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-gray-400/15 rounded-full blur-[50px] md:blur-[80px]" />
      <div className="hidden sm:block absolute bottom-32 right-32 w-[400px] h-[400px] bg-gray-500/12 rounded-full blur-[100px]" />
      <div className="hidden sm:block absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-gray-600/10 rounded-full blur-[70px]" />
      <div className="hidden sm:block absolute bottom-1/2 left-1/3 w-[350px] h-[350px] bg-gray-400/14 rounded-full blur-[90px]" />

      {/* Blue blurred backgrounds */}
      <div className="hidden sm:block absolute top-20 right-10 w-[220px] h-[220px] md:w-[450px] md:h-[450px] bg-[#031d40]/12 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="hidden sm:block absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#031d40]/10 rounded-full blur-[130px]" />
      <div className="hidden sm:block absolute top-1/2 right-1/2 w-[380px] h-[380px] bg-[#031d40]/8 rounded-full blur-[100px]" />
      <div className="hidden sm:block absolute bottom-20 left-20 w-[200px] h-[200px] md:w-[420px] md:h-[420px] bg-[#031d40]/14 rounded-full blur-[70px] md:blur-[110px]" />
      <div className="hidden sm:block absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-[#031d40]/11 rounded-full blur-[95px]" />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-20">
            

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-[1.05] tracking-tight">
              <span className="text-[#031d40]">{t.hero.titlePart1}</span>
              <UnderlinedText>
                <span className="text-[#031d40]">{t.hero.titleHighlight1}</span>
              </UnderlinedText>
              <span className="text-[#031d40]">{t.hero.titlePart2}</span>
              <br />
              <UnderlinedText delay={200}>
                <span className="text-[#031d40]">{t.hero.titleHighlight2}</span>
              </UnderlinedText>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-gray-600 text-balance max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4 sm:px-0">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-8 bg-[#031d40] hover:bg-[#031d40]/90 text-white shadow-2xl transition-all group border-0"
                asChild
              >
                <Link href="/contacto">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-8 border-2 border-[#031d40] text-[#031d40] hover:bg-[#031d40] hover:text-white transition-all bg-transparent"
                asChild
              >
                <Link href="/servicios">{t.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
