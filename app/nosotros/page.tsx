"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { teamMembers, companyValues, companyMetrics } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useTranslation } from "@/lib/i18n"
import { nosotrosTranslations } from "@/lib/i18n/pages/nosotros"

function UnderlinedText({
  children,
  delay = 0,
  opacity = 1,
}: { children: React.ReactNode; delay?: number; opacity?: number }) {
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
      { threshold: 0.1, rootMargin: "-50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const underlineColor = `rgba(187, 189, 38, ${opacity})`

  return (
    <span
      ref={ref}
      className="inline box-decoration-clone transition-[background-size] duration-700 ease-out isolate relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 59%, ${underlineColor} 59%)`,
        backgroundSize: isVisible ? "100% 100%" : "0% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        transitionDelay: `${delay}ms`,
      }}
    >
      <span className="relative z-10">{children}</span>
    </span>
  )
}

export default function AboutPage() {
  const { locale } = useTranslation()
  const t = nosotrosTranslations[locale]
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
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
          <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/25 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="hidden sm:block absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#bbbd26]/15 rounded-full blur-[100px]" />

          {/* Gray shadows */}
          <div className="hidden sm:block absolute top-40 left-20 w-[300px] h-[300px] bg-gray-400/15 rounded-full blur-[80px]" />
          <div className="hidden sm:block absolute bottom-32 right-32 w-[400px] h-[400px] bg-gray-500/12 rounded-full blur-[100px]" />

          {/* Blue blurred backgrounds */}
          <div className="absolute top-20 right-10 w-[220px] h-[220px] md:w-[450px] md:h-[450px] bg-[#031d40]/12 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="hidden sm:block absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#031d40]/10 rounded-full blur-[130px]" />

          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-[1.05] tracking-tight">
                  <span className="text-[#031d40]">{t.hero.title1}</span>
                  <br />
                  <UnderlinedText>
                    <span className="text-[#031d40]">{t.hero.title2}</span>
                  </UnderlinedText>
                </h1>

                <p className="text-base sm:text-lg md:text-2xl text-gray-600 text-balance max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
                  {t.hero.subtitle}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y bg-white py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
              {companyMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 sm:mb-3 text-4xl sm:text-5xl md:text-7xl font-bold text-[#031d40]">{metric.value}</div>
                  <div className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold text-[#031d40]">{t.metrics.items[index]?.label ?? metric.label}</div>
                  <div className="text-sm sm:text-base text-gray-600">{t.metrics.items[index]?.description ?? metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/nosotros-equipo.jpg"
                  alt="Equipo Unnic AI trabajando"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[#bbbd26] text-sm font-bold uppercase tracking-wider mb-4">{t.history.kicker}</p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    {t.history.title1}
                    <UnderlinedText>
                      <span className="text-[#031d40]">{t.history.titleHighlight}</span>
                    </UnderlinedText>
                  </h2>
                </div>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-600">
                  <p>{t.history.p1}</p>
                  <p>{t.history.p2}</p>
                  <p>{t.history.p3}</p>
                  <p>{t.history.p4}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden bg-[#031d40]">
          {/* Grid texture overlay */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          {/* Dot pattern texture */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Diagonal lines texture */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #bbbd26 0px, #bbbd26 1px, transparent 1px, transparent 60px)",
              }}
            />
          </div>

          {/* Yellow blurred backgrounds */}
          <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/15 rounded-full blur-[100px] md:blur-[140px]" />

          <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <p className="text-[#bbbd26] text-sm font-bold uppercase tracking-wider mb-4">{t.vision.kicker}</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight text-balance">
              {t.vision.title1}
              <UnderlinedText opacity={0.7}>
                <span className="text-white">{t.vision.highlight1}</span>
              </UnderlinedText>
              {t.vision.titleMid}
              <UnderlinedText delay={200} opacity={0.7}>
                <span className="text-white">{t.vision.highlight2}</span>
              </UnderlinedText>
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              {t.vision.subtitle}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-10 md:mb-16">
              <p className="text-[#bbbd26] text-sm font-bold uppercase tracking-wider mb-4">{t.values.kicker}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4">
                {t.values.title1}
                <UnderlinedText>
                  <span className="text-[#031d40]">{t.values.titleHighlight}</span>
                </UnderlinedText>
                {t.values.title2}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                {t.values.subtitle}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {companyValues.map((value, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 border-gray-200 bg-white p-6 transition-all hover:border-[#bbbd26] hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-2xl font-bold text-[#031d40] transition-all group-hover:bg-[#bbbd26] group-hover:text-white group-hover:scale-110">
                    {value.number}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#031d40]">{t.values.items[index]?.title ?? value.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{t.values.items[index]?.description ?? value.description}</p>
                  <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#bbbd26]/5 transition-all group-hover:scale-150" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-10 md:mb-16">
              <p className="text-[#bbbd26] text-sm font-bold uppercase tracking-wider mb-4">{t.team.kicker}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4">
                {t.team.title1}
                <UnderlinedText>
                  <span className="text-[#031d40]">{t.team.titleHighlight}</span>
                </UnderlinedText>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                {t.team.subtitle}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-2 border-gray-200 transition-all hover:border-[#bbbd26] hover:shadow-xl hover:scale-[1.02] bg-white"
                >
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#031d40] to-[#031d40]/80">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        unoptimized
                        className="object-cover transition-all group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center transition-all group-hover:scale-110">
                        <span className="text-7xl font-bold text-white">{member.initials}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold text-[#031d40]">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#031d40] text-[#031d40] hover:bg-[#031d40] hover:text-white transition-all px-8 py-6 text-lg font-semibold group bg-transparent"
              >
                <a
                  href="https://www.linkedin.com/company/93352502/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  {t.team.verMas}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative pt-16 pb-10 sm:pt-24 sm:pb-14 md:pt-40 md:pb-22 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
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

          {/* Yellow blurred backgrounds */}
          <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/15 rounded-full blur-[100px] md:blur-[140px]" />

          {/* Blue blurred backgrounds */}
          <div className="absolute top-20 right-10 w-[220px] h-[220px] md:w-[450px] md:h-[450px] bg-[#031d40]/12 rounded-full blur-[80px] md:blur-[120px]" />

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#031d40]">
                {t.cta.title1}
                <UnderlinedText>
                  <span className="text-[#031d40]">{t.cta.titleHighlight}</span>
                </UnderlinedText>
                {t.cta.title2}
              </h2>

              <p className="text-base sm:text-lg md:text-2xl text-gray-600 text-balance max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                {t.cta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4 sm:px-0">
                <Button
                  asChild
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-8 bg-[#031d40] hover:bg-[#031d40]/90 text-white shadow-2xl transition-all group"
                >
                  <Link href="/contacto">
                    {t.cta.aplicar}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-8 border-2 border-[#031d40] text-[#031d40] hover:bg-[#031d40] hover:text-white transition-all bg-transparent"
                >
                  <a href="https://www.linkedin.com/company/93352502/" target="_blank" rel="noopener noreferrer">
                    {t.cta.cultura}
                  </a>
                </Button>
              </div>

              <p className="text-base text-gray-600 pt-4">
                {t.cta.dudas}
                <a href="mailto:hola@unnic.ai" className="font-semibold text-[#031d40] hover:underline">
                  contacto@unnic.ai
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
