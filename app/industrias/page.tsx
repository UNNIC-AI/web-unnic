"use client"

import { Navigation } from "@/components/navigation"
import { useTranslation } from "@/lib/i18n"
import { industriasTranslations } from "@/lib/i18n/pages/industrias"
import { useState, useRef, useEffect } from "react"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Truck,
  UtensilsCrossed,
  HardHat,
  Factory,
  HeartPulse,
  ShoppingBag,
  Landmark,
  MonitorSmartphone,
  GraduationCap,
  Zap,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Brain,
  Route,
  Search,
  MessageSquare,
  CheckCircle,
  GitCompare,
  FileCheck,
  ClipboardList,
  Calculator,
  Building,
  Ruler,
  Shield,
  Star,
  ChefHat,
  BarChart3,
  Clock,
  Settings,
  BarChart2,
  Users,
  Code,
  Bug,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { successStories } from "@/lib/data"

// UnderlinedText component - same as rest of site
function UnderlinedText({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
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

// Industry icon mappings (text comes from translations)
const industryIconMap: Record<string, typeof Truck> = {
  distribucion: Truck,
  restauracion: UtensilsCrossed,
  construccion: HardHat,
  industrial: Factory,
  salud: HeartPulse,
  retail: ShoppingBag,
  finanzas: Landmark,
  tecnologia: MonitorSmartphone,
  educacion: GraduationCap,
  energia: Zap,
}

const industryOrder = [
  "distribucion", "restauracion", "construccion", "industrial", "salud",
  "retail", "finanzas", "tecnologia", "educacion", "energia",
] as const

const beneficioIconMap: Record<string, (typeof TrendingDown)[]> = {
  distribucion: [TrendingDown, AlertTriangle, Lightbulb],
  construccion: [TrendingDown, AlertTriangle, Lightbulb],
  restauracion: [Star, TrendingDown, BarChart3],
  industrial: [TrendingDown, AlertTriangle, Lightbulb],
  salud: [TrendingDown, AlertTriangle, Lightbulb],
  retail: [TrendingDown, AlertTriangle, Lightbulb],
  finanzas: [TrendingDown, AlertTriangle, Lightbulb],
  tecnologia: [TrendingDown, AlertTriangle, Lightbulb],
  educacion: [TrendingDown, AlertTriangle, Lightbulb],
  energia: [TrendingDown, AlertTriangle, Lightbulb],
}

const casoDeUsoIconMap: Record<string, (typeof Brain)[]> = {
  distribucion: [Brain, Route, GitCompare, Search, CheckCircle, MessageSquare],
  construccion: [FileCheck, ClipboardList, Calculator, Building, Ruler, Shield],
  restauracion: [Star, Brain, ClipboardList, MessageSquare, ChefHat, Clock],
  industrial: [Brain, Settings, CheckCircle, Search, FileCheck, GitCompare],
  salud: [Brain, FileCheck, MessageSquare, Search, BarChart2, Users],
  retail: [Users, BarChart2, MessageSquare, Search, FileCheck, GitCompare],
  finanzas: [Shield, BarChart2, FileCheck, MessageSquare, Search, GitCompare],
  tecnologia: [Code, Bug, FileCheck, Search, BarChart2, GitCompare],
  educacion: [Users, MessageSquare, FileCheck, BarChart2, Search, Brain],
  energia: [Brain, BarChart2, Settings, Zap, FileCheck, MessageSquare],
}

export default function IndustriasPage() {
  const { locale, t: globalT } = useTranslation()
  const t = industriasTranslations[locale]
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const buildLocalizedCase = (id: string, translationIndex: number) => {
    const baseCase = successStories.find((story) => story.id === id)
    const translatedCase = globalT.successStories.items[translationIndex]

    return baseCase && translatedCase
      ? {
          ...baseCase,
          ...translatedCase,
        }
      : baseCase
  }

  const cataloniaCeramicCase = buildLocalizedCase("catalonia-ceramic", 0)
  const conectapCase = buildLocalizedCase("conectap", 1)
  const construccionCase = buildLocalizedCase("construccion-distributor", 2)
  const pinturasCase = buildLocalizedCase("pinturas-personalizadas", 3)
  const viviCoachingCase = buildLocalizedCase("vivi-coaching", 4)

  const handleSelectIndustry = (industryId: string) => {
    setSelectedIndustry(industryId)
    setOpenFaqIndex(null)
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const industries = industryOrder.map((id) => ({
    id,
    name: t.industryNames[id],
    icon: industryIconMap[id],
  }))

  function buildIndustryData(key: string) {
    const data = t[key as keyof typeof t] as typeof t.distribucion
    return {
      headline: data.headline,
      description: data.description,
      beneficios: data.beneficios.map((b: { title: string; description: string }, i: number) => ({
        ...b,
        icon: beneficioIconMap[key][i],
      })),
      casosDeUso: data.casosDeUso.map((c: { title: string; description: string }, i: number) => ({
        ...c,
        icon: casoDeUsoIconMap[key][i],
      })),
      faqs: data.faqs,
    }
  }

  const distribucionData = buildIndustryData("distribucion")
  const construccionData = buildIndustryData("construccion")
  const restauracionData = buildIndustryData("restauracion")
  const industrialData = buildIndustryData("industrial")
  const saludData = buildIndustryData("salud")
  const retailData = buildIndustryData("retail")
  const finanzasData = buildIndustryData("finanzas")
  const tecnologiaData = buildIndustryData("tecnologia")
  const educacionData = buildIndustryData("educacion")
  const energiaData = buildIndustryData("energia")

  const duplicatedIndustries = [...industries, ...industries, ...industries]
  const selectedIndustryData = industries.find((i) => i.id === selectedIndustry)

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20">
        {/* Background textures - same as rest of site */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, #031d40 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Diagonal lines */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #031d40 0, #031d40 1px, transparent 0, transparent 50%)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Yellow blur elements */}
          <div
            className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
            style={{ background: "#bbbd26" }}
          />
          <div
            className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
            style={{ background: "#bbbd26" }}
          />

          {/* Blue blur elements */}
          <div
            className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-10"
            style={{ background: "#031d40" }}
          />
          <div
            className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] rounded-full blur-[120px] opacity-12"
            style={{ background: "#031d40" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#031d40] mb-6 leading-tight">
            {t.hero.titlePrefix}<UnderlinedText>{t.hero.titleHighlight}</UnderlinedText>{t.hero.titleSuffix}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 px-2 sm:px-0">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Industry selector carousel */}
        <div className="relative z-10 w-full mt-4">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none hidden sm:block" />

          <div className="overflow-hidden py-4">
            <div ref={carouselRef} className="flex w-max gap-4 sm:gap-6 animate-scroll-logos-responsive">
              {duplicatedIndustries.map((industry, index) => {
                const Icon = industry.icon
                const isSelected = selectedIndustry === industry.id

                return (
                  <button
                    key={`${industry.id}-${index}`}
                    onClick={() => handleSelectIndustry(industry.id)}
                    className={`
                      flex-shrink-0 group relative flex flex-col items-center justify-center
                      w-[120px] h-[110px] sm:w-[160px] sm:h-[140px] rounded-xl sm:rounded-2xl
                      transition-[transform,opacity] duration-300 ease-out
                      ${
                        isSelected
                          ? "bg-[#031d40] text-white shadow-xl scale-105"
                          : "bg-white hover:bg-gray-50 text-[#031d40] shadow-md hover:shadow-lg"
                      }
                      border-2 ${isSelected ? "border-[#bbbd26]" : "border-gray-200 hover:border-[#bbbd26]"}
                    `}
                  >
                    <div
                      className={`
                      w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3
                      transition-[transform,opacity] duration-300
                      ${
                        isSelected
                          ? "bg-[#bbbd26] text-[#031d40]"
                          : "bg-gray-100 text-[#031d40] group-hover:bg-[#bbbd26]/20"
                      }
                    `}
                    >
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="font-semibold text-xs sm:text-sm">{industry.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {!selectedIndustry && (
          <div className="relative z-10 mt-12 animate-bounce">
            <ChevronUp className="w-6 h-6 text-gray-400 mx-auto" />
            <p className="text-gray-400 text-sm mt-2">{t.hero.scrollIndicator}</p>
          </div>
        )}
      </section>

      {/* Content section - Distribución */}
      {selectedIndustry === "distribucion" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/ai-strategy-consulting-business-meeting.jpg"
                      alt={t.distribucion.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <Truck className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">{t.distribucion.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{distribucionData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{distribucionData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {distribucionData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.useCasesTitlePrefix}<UnderlinedText>{t.distribucion.useCasesHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t.common.useCasesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {distribucionData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito */}
          {cataloniaCeramicCase && (
            <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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

              {/* Yellow blurred backgrounds */}
              <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

              <div className="container mx-auto px-4 max-w-7xl relative">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                    {t.common.successStoryTitlePrefix}{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    {t.common.successStorySubtitle}
                  </p>
                </div>

                {/* Main Case Study Card - Replicating home format exactly */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-2 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4 sm:gap-6">
                      {/* Featured Image */}
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 relative">
                        <Image
                          src={cataloniaCeramicCase.image || "/placeholder.svg"}
                          alt={`${cataloniaCeramicCase.company} case study`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Company Logo */}
                      {cataloniaCeramicCase.logoUrl ? (
                        <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden relative border border-gray-100">
                          <Image
                            src={cataloniaCeramicCase.logoUrl || "/placeholder.svg"}
                            alt={`${cataloniaCeramicCase.company} logo`}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${cataloniaCeramicCase.logoGradient} flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-3xl font-bold">{cataloniaCeramicCase.logo}</span>
                        </div>
                      )}

                      {/* Company Details */}
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40]">{cataloniaCeramicCase.company}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.industryLabel}</span>
                            <span className="text-gray-800">{cataloniaCeramicCase.industry}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.yearLabel}</span>
                            <span className="text-gray-800">{cataloniaCeramicCase.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.serviceLabel}</span>
                            <span className="inline-block px-3 py-1 bg-[#bbbd26]/20 text-[#031d40] rounded-full text-xs font-bold">
                              {cataloniaCeramicCase.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Case Study Details */}
                    <div className="lg:col-span-3 p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
                      {/* The Challenge */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.challenge}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{cataloniaCeramicCase.challenge}</p>
                      </div>

                      {/* The Solution */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.solution}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{cataloniaCeramicCase.solution}</p>
                      </div>

                      {/* The Results */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.results}</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                          {cataloniaCeramicCase.results.map((result, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl p-6 border border-[#bbbd26]/20"
                            >
                              <div className="text-2xl sm:text-4xl font-bold text-[#031d40] mb-1 sm:mb-2">{result.metric}</div>
                              <div className="text-sm text-gray-700 font-medium">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          size="lg"
                          className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group"
                          asChild
                        >
                          <Link href={`/portfolio/${cataloniaCeramicCase.id}`}>
                            {t.common.viewCase}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t.distribucion.ctaTitle}<span className="text-[#bbbd26]">{t.distribucion.ctaHighlight}</span>{t.distribucion.ctaTitleSuffix}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {t.distribucion.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    {t.common.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.faqTitlePrefix}<UnderlinedText>{t.common.faqTitleHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">{t.distribucion.faqSubtitle}</p>
              </div>

              <div className="space-y-4">
                {distribucionData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Construcción */}
      {selectedIndustry === "construccion" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios - Same format as Distribución */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/construction-site-building-modern-architecture.jpg"
                      alt={t.construccion.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <HardHat className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">{t.construccion.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{construccionData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{construccionData.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {construccionData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso - Same format as Distribución */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.useCasesTitlePrefix}<UnderlinedText>{t.construccion.useCasesHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t.common.useCasesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {construccionData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito */}
          {construccionCase ? (
            <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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

              {/* Yellow blurred backgrounds */}
              <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

              <div className="container mx-auto px-4 max-w-7xl relative">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                    {t.common.successStoryTitlePrefix}{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    {t.common.successStorySubtitle}
                  </p>
                </div>

                {/* Main Case Study Card - Same format as home/distribucion */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-2 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4 sm:gap-6">
                      {/* Featured Image */}
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 relative">
                        <Image
                          src={construccionCase.image || "/construction-warehouse-documents-invoices-organize.jpg"}
                          alt={`${construccionCase.company} case study`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Company Logo */}
                      {construccionCase.logoUrl ? (
                        <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden relative border border-gray-100">
                          <Image
                            src={construccionCase.logoUrl || "/placeholder.svg"}
                            alt={`${construccionCase.company} logo`}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${construccionCase.logoGradient} flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-3xl font-bold">{construccionCase.logo}</span>
                        </div>
                      )}

                      {/* Company Details */}
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40]">{construccionCase.company}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.industryLabel}</span>
                            <span className="text-gray-800">{construccionCase.industry}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.yearLabel}</span>
                            <span className="text-gray-800">{construccionCase.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.serviceLabel}</span>
                            <span className="inline-block px-3 py-1 bg-[#bbbd26]/20 text-[#031d40] rounded-full text-xs font-bold">
                              {construccionCase.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Case Study Details */}
                    <div className="lg:col-span-3 p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
                      {/* The Challenge */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.challenge}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{construccionCase.challenge}</p>
                      </div>

                      {/* The Solution */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.solution}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{construccionCase.solution}</p>
                      </div>

                      {/* The Results */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.results}</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                          {construccionCase.results.map((result, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl p-6 border border-[#bbbd26]/20"
                            >
                              <div className="text-2xl sm:text-4xl font-bold text-[#031d40] mb-1 sm:mb-2">{result.metric}</div>
                              <div className="text-sm text-gray-700 font-medium">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          size="lg"
                          className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group"
                          asChild
                        >
                          <Link href={`/portfolio/${construccionCase.id}`}>
                            {t.common.viewCase}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            /* Placeholder for industries without success story */
            <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                  }}
                />
              </div>
              <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

              <div className="container mx-auto px-4 max-w-7xl relative">
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                    {t.common.successStoryTitlePrefix}{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    {t.common.successStorySubtitle}
                  </p>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                    <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                      <Rocket className="w-10 h-10 text-[#bbbd26]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                      {t.common.pioneerTitlePrefix}<span className="text-[#bbbd26]">{t.common.pioneerTitleHighlight}</span>{t.common.pioneerTitleSuffix}
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                      {t.construccion.pioneerText}
                    </p>
                    <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                      <Link href="/contacto">
                        {t.common.pioneerButton}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t.construccion.ctaTitle}<span className="text-[#bbbd26]">{t.construccion.ctaHighlight}</span>{t.construccion.ctaTitleSuffix}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {t.construccion.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    {t.common.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.faqTitlePrefix}<UnderlinedText>{t.common.faqTitleHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">{t.construccion.faqSubtitle}</p>
              </div>

              <div className="space-y-4">
                {construccionData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Restauración */}
      {selectedIndustry === "restauracion" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/fine-dining-restaurant-interior-with-modern-decor.jpg"
                      alt={t.restauracion.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <UtensilsCrossed className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">{t.restauracion.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{restauracionData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{restauracionData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {restauracionData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.useCasesTitlePrefix}<UnderlinedText>{t.restauracion.useCasesHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t.common.useCasesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restauracionData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Restauracion */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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

            {/* Yellow blurred backgrounds */}
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              {/* Section Header */}
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  {t.common.successStoryTitlePrefix}{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  {t.common.successStorySubtitle}
                </p>
              </div>

              {/* Pioneer Card - Same card structure */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    {t.common.pioneerTitlePrefix}<span className="text-[#bbbd26]">{t.common.pioneerTitleHighlight}</span>{t.common.pioneerTitleSuffix}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    {t.restauracion.pioneerText}
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      {t.common.pioneerButton}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t.restauracion.ctaTitle}<span className="text-[#bbbd26]">{t.restauracion.ctaHighlight}</span>{t.restauracion.ctaTitleSuffix}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {t.restauracion.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    {t.common.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.faqTitlePrefix}<UnderlinedText>{t.common.faqTitleHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">{t.restauracion.faqSubtitle}</p>
              </div>

              <div className="space-y-4">
                {restauracionData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Industrial */}
      {selectedIndustry === "industrial" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/modern-industrial-factory-automation-equipment.jpg"
                      alt={t.industrial.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <Factory className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">{t.industrial.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{industrialData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{industrialData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {industrialData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.useCasesTitlePrefix}<UnderlinedText>{t.industrial.useCasesHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t.common.useCasesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industrialData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito */}
          {pinturasCase && (
            <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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

              {/* Yellow blurred backgrounds */}
              <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

              <div className="container mx-auto px-4 max-w-7xl relative">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                    {t.common.successStoryTitlePrefix}{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    {t.common.successStorySubtitle}
                  </p>
                </div>

                {/* Main Case Study Card - Replicating home format exactly */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-2 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4 sm:gap-6">
                      {/* Featured Image */}
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 relative">
                        <Image
                          src={pinturasCase.image || "/paint-manufacturing-facility.jpg"}
                          alt={`${pinturasCase.company} case study`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Company Logo */}
                      {pinturasCase.logoUrl ? (
                        <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden relative border border-gray-100">
                          <Image
                            src={pinturasCase.logoUrl || "/placeholder.svg"}
                            alt={`${pinturasCase.company} logo`}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${pinturasCase.logoGradient} flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-3xl font-bold">{pinturasCase.logo}</span>
                        </div>
                      )}

                      {/* Company Details */}
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40]">{pinturasCase.company}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.industryLabel}</span>
                            <span className="text-gray-800">{pinturasCase.industry}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.yearLabel}</span>
                            <span className="text-gray-800">{pinturasCase.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.serviceLabel}</span>
                            <span className="inline-block px-3 py-1 bg-[#bbbd26]/20 text-[#031d40] rounded-full text-xs font-bold">
                              {pinturasCase.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Case Study Details */}
                    <div className="lg:col-span-3 p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
                      {/* The Challenge */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.challenge}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{pinturasCase.challenge}</p>
                      </div>

                      {/* The Solution */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.solution}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{pinturasCase.solution}</p>
                      </div>

                      {/* The Results */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.results}</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                          {pinturasCase.results.map((result, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl p-6 border border-[#bbbd26]/20"
                            >
                              <div className="text-2xl sm:text-4xl font-bold text-[#031d40] mb-1 sm:mb-2">{result.metric}</div>
                              <div className="text-sm text-gray-700 font-medium">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          size="lg"
                          className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group"
                          asChild
                        >
                          <Link href={`/portfolio/${pinturasCase.id}`}>
                            {t.common.viewCase}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t.industrial.ctaTitle}<span className="text-[#bbbd26]">{t.industrial.ctaHighlight}</span>{t.industrial.ctaTitleSuffix}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {t.industrial.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    {t.common.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.faqTitlePrefix}<UnderlinedText>{t.common.faqTitleHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">{t.industrial.faqSubtitle}</p>
              </div>

              <div className="space-y-4">
                {industrialData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Salud */}
      {selectedIndustry === "salud" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/doctor-analyzing-medical-data-on-digital-screen.jpg"
                      alt={t.salud.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <HeartPulse className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">{t.salud.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{saludData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{saludData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {saludData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.useCasesTitlePrefix}<UnderlinedText>{t.salud.useCasesHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t.common.useCasesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {saludData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito */}
          {viviCoachingCase && (
            <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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

              {/* Yellow blurred backgrounds */}
              <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

              <div className="container mx-auto px-4 max-w-7xl relative">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                    {t.common.successStoryTitlePrefix}{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    {t.common.successStorySubtitle}
                  </p>
                </div>

                {/* Main Case Study Card - Replicating home format exactly */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-2 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4 sm:gap-6">
                      {/* Featured Image */}
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 relative">
                        <Image
                          src={viviCoachingCase.image || "/vivi-coaching-landing-page.jpg"}
                          alt={`${viviCoachingCase.company} case study`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Company Logo */}
                      {viviCoachingCase.logoUrl ? (
                        <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden relative border border-gray-100">
                          <Image
                            src={viviCoachingCase.logoUrl || "/placeholder.svg"}
                            alt={`${viviCoachingCase.company} logo`}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${viviCoachingCase.logoGradient} flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-3xl font-bold">{viviCoachingCase.logo}</span>
                        </div>
                      )}

                      {/* Company Details */}
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40]">{viviCoachingCase.company}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.industryLabel}</span>
                            <span className="text-gray-800">{viviCoachingCase.industry}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.yearLabel}</span>
                            <span className="text-gray-800">{viviCoachingCase.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{t.common.serviceLabel}</span>
                            <span className="inline-block px-3 py-1 bg-[#bbbd26]/20 text-[#031d40] rounded-full text-xs font-bold">
                              {viviCoachingCase.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Case Study Details */}
                    <div className="lg:col-span-3 p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
                      {/* The Challenge */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.challenge}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{viviCoachingCase.challenge}</p>
                      </div>

                      {/* The Solution */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.solution}</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{viviCoachingCase.solution}</p>
                      </div>

                      {/* The Results */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">{t.common.results}</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                          {viviCoachingCase.results.map((result, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl p-6 border border-[#bbbd26]/20"
                            >
                              <div className="text-2xl sm:text-4xl font-bold text-[#031d40] mb-1 sm:mb-2">{result.metric}</div>
                              <div className="text-sm text-gray-700 font-medium">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          size="lg"
                          className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group"
                          asChild
                        >
                          <Link href={`/portfolio/${viviCoachingCase.id}`}>
                            {t.common.viewCase}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t.salud.ctaTitle}<span className="text-[#bbbd26]">{t.salud.ctaHighlight}</span>{t.salud.ctaTitleSuffix}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {t.salud.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    {t.common.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.faqTitlePrefix}<UnderlinedText>{t.common.faqTitleHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">{t.salud.faqSubtitle}</p>
              </div>

              <div className="space-y-4">
                {saludData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Retail */}
      {selectedIndustry === "retail" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/retail-store-checkout-counter-with-modern-technology.jpg"
                      alt={t.retail.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <ShoppingBag className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">{t.retail.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{retailData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{retailData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {retailData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.useCasesTitlePrefix}<UnderlinedText>{t.retail.useCasesHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t.common.useCasesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {retailData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Retail */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  {t.common.successStoryTitlePrefix}{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  {t.common.successStorySubtitle}
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    {t.common.pioneerTitlePrefix}<span className="text-[#bbbd26]">{t.common.pioneerTitleHighlight}</span>{t.common.pioneerTitleSuffix}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    {t.retail.pioneerText}
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      {t.common.pioneerButton}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t.retail.ctaTitle}<span className="text-[#bbbd26]">{t.retail.ctaHighlight}</span>{t.retail.ctaTitleSuffix}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {t.retail.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    {t.common.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.faqTitlePrefix}<UnderlinedText>{t.common.faqTitleHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">{t.retail.faqSubtitle}</p>
              </div>

              <div className="space-y-4">
                {retailData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Finanzas */}
      {selectedIndustry === "finanzas" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/financial-analyst-working-with-data-charts-reports.jpg"
                      alt={t.finanzas.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <Landmark className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">{t.finanzas.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{finanzasData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{finanzasData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {finanzasData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.useCasesTitlePrefix}<UnderlinedText>{t.finanzas.useCasesHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t.common.useCasesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {finanzasData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Finanzas */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  {t.common.successStoryTitlePrefix}{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  {t.common.successStorySubtitle}
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    {t.common.pioneerTitlePrefix}<span className="text-[#bbbd26]">{t.common.pioneerTitleHighlight}</span>{t.common.pioneerTitleSuffix}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    {t.finanzas.pioneerText}
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      {t.common.pioneerButton}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t.finanzas.ctaTitle}<span className="text-[#bbbd26]">{t.finanzas.ctaHighlight}</span>{t.finanzas.ctaTitleSuffix}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {t.finanzas.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    {t.common.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.faqTitlePrefix}<UnderlinedText>{t.common.faqTitleHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">{t.finanzas.faqSubtitle}</p>
              </div>

              <div className="space-y-4">
                {finanzasData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Tecnologia */}
      {selectedIndustry === "tecnologia" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/tecnologia-industria.png"
                      alt={t.tecnologia.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <MonitorSmartphone className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">{t.tecnologia.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{tecnologiaData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{tecnologiaData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {tecnologiaData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.useCasesTitlePrefix}<UnderlinedText>{t.tecnologia.useCasesHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t.common.useCasesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tecnologiaData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Tecnologia */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  {t.common.successStoryTitlePrefix}{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  {t.common.successStorySubtitle}
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    {t.common.pioneerTitlePrefix}<span className="text-[#bbbd26]">{t.common.pioneerTitleHighlight}</span>{t.common.pioneerTitleSuffix}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    {t.tecnologia.pioneerText}
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      {t.common.pioneerButton}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t.tecnologia.ctaTitle}<span className="text-[#bbbd26]">{t.tecnologia.ctaHighlight}</span>{t.tecnologia.ctaTitleSuffix}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {t.tecnologia.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    {t.common.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.faqTitlePrefix}<UnderlinedText>{t.common.faqTitleHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">{t.tecnologia.faqSubtitle}</p>
              </div>

              <div className="space-y-4">
                {tecnologiaData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Educación */}
      {selectedIndustry === "educacion" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/education-modern-classroom-technology-learning.jpg"
                      alt={t.educacion.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <GraduationCap className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">{t.educacion.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{educacionData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{educacionData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {educacionData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.useCasesTitlePrefix}<UnderlinedText>{t.educacion.useCasesHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t.common.useCasesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {educacionData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Educación */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  {t.common.successStoryTitlePrefix}{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  {t.common.successStorySubtitle}
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    {t.common.pioneerTitlePrefix}<span className="text-[#bbbd26]">{t.common.pioneerTitleHighlight}</span>{t.common.pioneerTitleSuffix}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    {t.educacion.pioneerText}
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      {t.common.pioneerButton}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t.educacion.ctaTitle}<span className="text-[#bbbd26]">{t.educacion.ctaHighlight}</span>{t.educacion.ctaTitleSuffix}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {t.educacion.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    {t.common.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.faqTitlePrefix}<UnderlinedText>{t.common.faqTitleHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">{t.educacion.faqSubtitle}</p>
              </div>

              <div className="space-y-4">
                {educacionData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Energia */}
      {selectedIndustry === "energia" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/smart-grid-technology-energy-distribution-network.jpg"
                      alt={t.energia.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <Zap className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">{t.energia.badge}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{energiaData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{energiaData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {energiaData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.useCasesTitlePrefix}<UnderlinedText>{t.energia.useCasesHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t.common.useCasesSubtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {energiaData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Energía */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  {t.common.successStoryTitlePrefix}{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">{t.common.successStoryTitleHighlight}</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  {t.common.successStorySubtitle}
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    {t.common.pioneerTitlePrefix}<span className="text-[#bbbd26]">{t.common.pioneerTitleHighlight}</span>{t.common.pioneerTitleSuffix}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    {t.energia.pioneerText}
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      {t.common.pioneerButton}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t.energia.ctaTitle}<span className="text-[#bbbd26]">{t.energia.ctaHighlight}</span>{t.energia.ctaTitleSuffix}
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                {t.energia.ctaSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    {t.common.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  {t.common.faqTitlePrefix}<UnderlinedText>{t.common.faqTitleHighlight}</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">{t.energia.faqSubtitle}</p>
              </div>

              <div className="space-y-4">
                {energiaData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
