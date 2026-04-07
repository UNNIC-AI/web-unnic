"use client"

import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { successStories } from "@/lib/data"
import Image from "next/image"
import {
  ArrowRight,
  ChevronDown,
  ClipboardList,
  PenTool,
  Code2,
  Plug,
  TrendingUp,
  Bot,
  Phone,
  BookOpen,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { getServiceSchema, StructuredData } from "@/lib/structured-data"
import { useTranslation } from "@/lib/i18n"
import { iaGenerativaTranslations } from "@/lib/i18n/pages/ia-generativa"

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

const solutionsMeta = [
  { icon: Bot, color: "from-[#031d40]/5 to-[#031d40]/10", iconBg: "bg-[#031d40]/8" },
  { icon: Phone, color: "from-[#bbbd26]/5 to-[#bbbd26]/10", iconBg: "bg-[#bbbd26]/15" },
  { icon: BookOpen, color: "from-[#031d40]/5 to-[#031d40]/10", iconBg: "bg-[#031d40]/8" },
]

const stepsMeta = [
  { number: "01", icon: ClipboardList },
  { number: "02", icon: PenTool },
  { number: "03", icon: Code2 },
  { number: "04", icon: Plug },
  { number: "05", icon: TrendingUp },
]

function SimpleTimeline({ steps }: { steps: { number: string; icon: typeof ClipboardList; title: string; description: string }[] }) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (timelineRef.current) observer.observe(timelineRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative" ref={timelineRef}>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-gray-200 rounded-full overflow-hidden -translate-y-1/2 z-0">
          <div className="h-full bg-gradient-to-r from-[#bbbd26] to-[#d4d62a] rounded-full transition-all duration-[1500ms] ease-out" style={{ width: isVisible ? "100%" : "0%" }} />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isTop = index % 2 === 0
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
                  transition: `opacity 0.7s ease-out ${200 + index * 150}ms, transform 0.7s ease-out ${200 + index * 150}ms`,
                }}
              >
                <div className={`h-24 flex flex-col justify-end pb-3 ${isTop ? "" : "invisible"}`}>
                  <div className="flex flex-col items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-[#bbbd26]" />
                    <h3 className="text-base font-bold text-[#031d40] text-center">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-xs max-w-[160px] mx-auto text-center">{step.description}</p>
                </div>
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#bbbd26] flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-sm font-bold text-[#031d40]">{step.number}</span>
                </div>
                <div className={`h-24 flex flex-col justify-start pt-3 ${isTop ? "invisible" : ""}`}>
                  <div className="flex flex-col items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-[#bbbd26]" />
                    <h3 className="text-base font-bold text-[#031d40] text-center">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-xs max-w-[160px] mx-auto text-center">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden relative pl-8">
        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-200">
          <div className="w-full bg-gradient-to-b from-[#bbbd26] to-[#d4d62a] transition-all duration-[2000ms] ease-out" style={{ height: isVisible ? "100%" : "0%" }} />
        </div>
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                  transition: `opacity 0.6s ease-out ${300 + index * 150}ms, transform 0.6s ease-out ${300 + index * 150}ms`,
                }}
              >
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-[#bbbd26] flex items-center justify-center shadow-md z-10">
                  <span className="text-xs font-bold text-[#031d40]">{step.number}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-5 h-5 text-[#bbbd26]" />
                  <h3 className="text-lg font-bold text-[#031d40]">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function IAGenerativaPage() {
  const { locale, t: globalT } = useTranslation()
  const t = iaGenerativaTranslations[locale]

  const steps = stepsMeta.map((s, i) => ({
    ...s,
    title: t.process.steps[i].title,
    description: t.process.steps[i].description,
  }))

  const serviceSchema = getServiceSchema({
    name: t.schema.name,
    description: t.schema.description,
    url: "https://unnic.ai/servicios/ia-generativa",
    serviceType: t.schema.serviceType,
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button size="lg" className="text-base px-8 py-6 bg-[#031d40] hover:bg-[#031d40]/90 text-white shadow-xl transition-[transform,background-color] duration-300 group rounded-full" asChild>
                  <Link href="/contacto">
                    {t.hero.ctaButton}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col items-center pt-1">
                
              </div>
            </div>
          </div>
        </section>

        {/* Soluciones */}
        <section id="soluciones" className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 md:mb-16 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40]">{t.solutions.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {t.solutions.subtitle}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {solutionsMeta.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className={`group relative bg-gradient-to-br ${item.color} border border-gray-200/50 rounded-2xl p-8 hover:shadow-xl hover:scale-[1.02] transition-[transform,box-shadow] duration-300`}>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CheckCircle2 className="w-6 h-6 text-[#bbbd26]" />
                      </div>
                      <div className={`${item.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-[#031d40]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#031d40] mb-3">{t.solutions.items[index].title}</h3>
                      <p className="text-gray-600 leading-relaxed">{t.solutions.items[index].description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Pruébalo ahora */}
        <section className="relative py-12 sm:py-16 md:py-20 bg-[#031d40] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#bbbd26 1px, transparent 1px), linear-gradient(90deg, #bbbd26 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          </div>
          <div className="absolute right-10 top-10 w-[300px] h-[300px] bg-[#bbbd26]/10 rounded-full blur-[80px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              {/* Center content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#bbbd26]/20 border border-[#bbbd26]/30 rounded-full px-4 py-2">
                  <Phone className="w-4 h-4 text-[#bbbd26]" />
                  <span className="text-[#bbbd26] text-sm font-semibold">{t.tryIt.badge}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {t.tryIt.title}
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  {t.tryIt.description1}{" "}
                  <a href="tel:+34872432750" className="text-[#bbbd26] font-bold hover:underline">
                    +34 872 43 27 50
                  </a>{" "}
                  {t.tryIt.description2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[100px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40]">{t.process.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {t.process.subtitle}
                </p>
              </div>
              <SimpleTimeline steps={steps} />
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
              <div className="inline-flex items-center gap-2 bg-[#031d40]/10 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-[#031d40]" />
                <span className="text-[#031d40] text-sm font-semibold">{t.cta.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] text-balance">
                {t.cta.title}
              </h2>
              <p className="text-[#031d40]/80 text-lg leading-relaxed max-w-2xl mx-auto">
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
          const c = {
            ...successStories.find((cs) => cs.id === "conectap")!,
            ...globalT.successStories.items[1],
          }
          return (
            <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50/40 overflow-hidden">
              <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#bbbd26]/5 rounded-full blur-[140px]" />
              <div className="container relative mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4">{t.caseStudy.sectionTitle}</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                      {t.caseStudy.sectionSubtitle}
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
