"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { UnderlinedText } from "@/components/underlined-text"
import {
  ArrowRight,
  ChevronDown,
  GraduationCap,
  Users,
  Repeat,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { getServiceSchema, StructuredData } from "@/lib/structured-data"
import { companies, successStories } from "@/lib/data"
import { useTranslation } from "@/lib/i18n"
import { formacionTranslations } from "@/lib/i18n/pages/formacion"

const duplicatedCompanies = [...companies, ...companies]

function UnderlinedText({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1, rootMargin: "-50px" },
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

const techLogos = [
  { logo: "/logos/chatgpt.png", logoBg: "bg-white" },
  { logo: "/logos/copilot.png", logoBg: "bg-white" },
  { logo: "/logos/gemini-isotipo.png", logoBg: "bg-white" },
  { logo: "/logos/claude-isotipo.jpg", logoBg: "bg-white" },
]

export default function FormacionPage() {
  const { locale } = useTranslation()
  const t = formacionTranslations[locale]

  const serviceSchema = getServiceSchema({
    name: t.meta.serviceName,
    description: t.meta.serviceDescription,
    url: "https://unnic.ai/servicios/formacion",
    serviceType: t.meta.serviceType,
  })

  return (
    <>
      <StructuredData data={serviceSchema} />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-8 sm:pt-32 sm:pb-10 md:pt-40 md:pb-14 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
          </div>
          <div className="absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #031d40 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          </div>
          <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/25 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="hidden sm:block absolute top-1/2 right-1/2 w-[380px] h-[380px] bg-[#031d40]/8 rounded-full blur-[100px]" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.05] tracking-tight">
                <span className="text-[#031d40]">{t.hero.titlePrefix}</span>
                <UnderlinedText>
                  <span className="text-[#031d40]">{t.hero.titleHighlight}</span>
                </UnderlinedText>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.hero.subtitle}
              </p>
              {/* FUNDAE badge */}
              <div className="inline-flex items-center gap-3 bg-[#bbbd26]/10 border border-[#bbbd26]/30 rounded-2xl px-6 py-3">
                <BadgeCheck className="w-5 h-5 text-[#031d40] flex-shrink-0" />
                <span className="text-[#031d40] font-semibold text-sm sm:text-base">
                  {t.hero.fundaeBadge}
                </span>
              </div>
              
            </div>
          </div>
        </section>

        {/* Dos modelos */}
        <section id="modelos" className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40]">{t.models.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {t.models.subtitle}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Talleres */}
                <div className="bg-gradient-to-br from-[#031d40]/5 to-[#031d40]/10 border border-gray-200/50 rounded-2xl p-8">
                  <div className="w-14 h-14 bg-[#031d40]/8 rounded-xl flex items-center justify-center mb-5">
                    <Users className="w-7 h-7 text-[#031d40]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#031d40] mb-3">{t.models.workshops.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {t.models.workshops.description}
                  </p>
                  <ul className="space-y-2">
                    {t.models.workshops.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#bbbd26] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Formación Continua */}
                <div className="bg-[#031d40] rounded-2xl p-8">
                  <div className="w-14 h-14 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-5">
                    <Repeat className="w-7 h-7 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{t.models.continuous.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-5">
                    {t.models.continuous.description}
                  </p>
                  <ul className="space-y-2">
                    {t.models.continuous.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[#bbbd26] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Empresas que ya han formado */}
        <section className="py-8 sm:py-11 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-500 font-medium text-base sm:text-lg mb-6 sm:mb-10">
              {t.companies.title}
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              <div className="flex w-max gap-4 sm:gap-8 animate-scroll-logos-responsive">
                {duplicatedCompanies.map((company, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[100px] sm:min-w-[200px]">
                    <div className="relative h-10 w-[90px] sm:h-20 sm:w-[180px]">
                      <Image
                        src={company.src || "/placeholder.svg"}
                        alt={company.name}
                        fill
                        sizes="180px"
                        className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Talleres por perfil */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[100px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40]">{t.workshopsByProfile.title}</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {t.workshopsByProfile.subtitle}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.workshopsByProfile.items.map((w) => (
                  <div key={w.title} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#bbbd26] hover:shadow-md transition-[border-color,box-shadow] duration-300 flex flex-col gap-4">
                    <div>
                      <h4 className="font-bold text-[#031d40] mb-1">{w.title}</h4>
                      <p className="text-gray-500 text-sm">{w.desc}</p>
                    </div>
                    <Link href="/contacto" className="flex items-center gap-2 text-[#bbbd26] hover:text-[#a8aa22] font-semibold text-sm transition-colors mt-auto">
                      {t.workshopsByProfile.learnMore}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Talleres por tecnología */}
        <section className="relative py-12 sm:py-16 md:py-20 bg-gray-50 border-t border-gray-200 overflow-hidden">
          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40]">{t.workshopsByTech.title}</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  {t.workshopsByTech.subtitle}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {t.workshopsByTech.items.map((tech, idx) => (
                  <div key={tech.name} className="bg-gradient-to-br from-[#031d40]/5 to-[#031d40]/10 border border-gray-200/50 rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${techLogos[idx].logoBg} shadow-sm border border-gray-100 p-2`}>
                      <Image
                        src={techLogos[idx].logo}
                        alt={`${tech.name} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[#031d40] font-bold text-lg">{tech.name}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{tech.brand}</p>
                      <p className="text-gray-600 text-sm mt-2">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formación Continua detalle */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-[#031d40] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#bbbd26 1px, transparent 1px), linear-gradient(90deg, #bbbd26 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          </div>
          <div className="absolute top-10 right-20 w-[300px] h-[300px] bg-[#bbbd26]/10 rounded-full blur-[80px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {t.continuousDetail.title}
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                  {t.continuousDetail.subtitle}
                </p>
              </div>
              <div className="space-y-4">
                {t.continuousDetail.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                    <CheckCircle2 className="w-6 h-6 text-[#bbbd26] flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-base sm:text-lg">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-[#bbbd26] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          </div>
          <div className="absolute top-10 left-20 w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-20 w-[300px] h-[300px] bg-[#031d40]/10 rounded-full blur-[80px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40]">
                {t.cta.title}
              </h2>
              <p className="text-[#031d40]/80 text-lg leading-relaxed">
                {t.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base px-8 py-6 bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold shadow-xl transition-[transform,background-color] duration-300 group rounded-full" asChild>
                  <Link href="/contacto">
                    {t.cta.primaryButton}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2 border-[#031d40]/30 text-[#031d40] hover:bg-[#031d40] hover:text-white transition-[background-color,color] duration-300 rounded-full bg-transparent" asChild>
                  <Link href="/servicios">{t.cta.secondaryButton}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Caso de éxito */}
        {(() => {
          const c = successStories.find((cs) => cs.id === "pinturas-personalizadas")!
          return (
            <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50/40 overflow-hidden">
              <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#bbbd26]/5 rounded-full blur-[140px]" />
              <div className="container relative mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4">{t.caseStudy.title}</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                      {t.caseStudy.subtitle}
                    </p>
                  </div>
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                    <div className="grid lg:grid-cols-5 gap-0">
                      {/* Left Column */}
                      <div className="lg:col-span-2 p-10 border-r border-gray-200 flex flex-col gap-6">
                        <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 relative">
                          <Image
                            src={c.image || "/placeholder.svg"}
                            alt={`${c.company} case study`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {c.logoUrl ? (
                          <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden relative border border-gray-100">
                            <Image
                              src={c.logoUrl}
                              alt={`${c.company} logo`}
                              fill
                              className="object-contain p-4"
                            />
                          </div>
                        ) : (
                          <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${c.logoGradient} flex items-center justify-center shadow-lg`}>
                            <span className="text-white text-3xl font-bold">{c.logo}</span>
                          </div>
                        )}
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold text-[#031d40]">{c.company}</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-600">{t.caseStudy.industryLabel}</span>
                              <span className="text-gray-800">{c.industry}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-600">{t.caseStudy.yearLabel}</span>
                              <span className="text-gray-800">{c.year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-600">{t.caseStudy.serviceLabel}</span>
                              <span className="inline-block px-3 py-1 bg-[#bbbd26]/20 text-[#031d40] rounded-full text-xs font-bold">{c.service}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Right Column */}
                      <div className="lg:col-span-3 p-10 space-y-8">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <h4 className="text-xl font-bold text-[#031d40]">{t.caseStudy.challengeTitle}</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{c.challenge}</p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138z" />
                            </svg>
                            <h4 className="text-xl font-bold text-[#031d40]">{t.caseStudy.solutionTitle}</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{c.solution}</p>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <h4 className="text-xl font-bold text-[#031d40]">{t.caseStudy.resultsTitle}</h4>
                          </div>
                          <div className="grid md:grid-cols-3 gap-6">
                            {c.results.map((result, index) => (
                              <div key={index} className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl p-6 border border-[#bbbd26]/20">
                                <div className="text-4xl font-bold text-[#031d40] mb-2">{result.metric}</div>
                                <div className="text-sm text-gray-700 font-medium">{result.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="pt-4">
                          <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-all group" asChild>
                            <Link href={`/portfolio/${c.id}`}>
                              {t.caseStudy.viewFullCase}
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })()}
      </main>
    </>
  )
}
