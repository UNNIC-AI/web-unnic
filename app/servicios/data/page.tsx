"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ChevronDown,
  Database,
  Search,
  BarChart3,
  Brain,
  LayoutDashboard,
  Shuffle,
  CheckCircle2,
  AlertTriangle,
  GitBranch,
  FileWarning,
  UserX,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { getServiceSchema, StructuredData } from "@/lib/structured-data"
import { successStories } from "@/lib/data"

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

const problems = [
  {
    icon: GitBranch,
    title: "Datos dispersos",
    description: "Múltiples sistemas sin consolidar",
  },
  {
    icon: AlertTriangle,
    title: "Intuición vs evidencia",
    description: "Decisiones sin respaldo en datos",
  },
  {
    icon: FileWarning,
    title: "Informes sin uso",
    description: "Nadie los entiende ni los consulta",
  },
  {
    icon: UserX,
    title: "Conocimiento frágil",
    description: "Depende de una sola persona",
  },
]

const whatWeBuild = [
  {
    icon: Shuffle,
    title: "Centralización y pipelines",
    description: "Una única fuente de verdad para todos tus datos. Conectamos todos los sistemas y automatizamos el flujo.",
    color: "from-[#031d40]/5 to-[#031d40]/10",
    iconBg: "bg-[#031d40]/8",
  },
  {
    icon: Database,
    title: "Limpieza y preparación",
    description: "Datos ordenados, fiables y listos para trabajar. Sin datos bien estructurados, no hay análisis útil.",
    color: "from-[#bbbd26]/5 to-[#bbbd26]/10",
    iconBg: "bg-[#bbbd26]/15",
  },
  {
    icon: Search,
    title: "Estudios y análisis",
    description: "Respuestas concretas a preguntas de negocio reales. No informes genéricos, sino análisis orientado a decisión.",
    color: "from-[#031d40]/5 to-[#031d40]/10",
    iconBg: "bg-[#031d40]/8",
  },
  {
    icon: Brain,
    title: "Modelos predictivos / ML",
    description: "Anticipa demanda, comportamiento o riesgo antes de que ocurra. Decisiones proactivas en lugar de reactivas.",
    color: "from-[#bbbd26]/5 to-[#bbbd26]/10",
    iconBg: "bg-[#bbbd26]/15",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards con Power BI",
    description: "Visualización que tu equipo realmente entiende y usa. Diseñados para personas de negocio, no para técnicos.",
    color: "from-[#031d40]/5 to-[#031d40]/10",
    iconBg: "bg-[#031d40]/8",
  },
]

const steps = [
  {
    number: "01",
    title: "Diagnóstico de datos",
    description: "Qué tienes, dónde está, en qué estado y qué valor tiene realmente",
  },
  {
    number: "02",
    title: "Arquitectura y centralización",
    description: "Construimos la base para que todo fluya hacia un punto único de verdad",
  },
  {
    number: "03",
    title: "Análisis / modelado / visualización",
    description: "Convertimos datos en respuestas concretas para tu negocio",
  },
  {
    number: "04",
    title: "Entrega y acompañamiento",
    description: "Formamos a tu equipo y mantenemos la solución viva a lo largo del tiempo",
  },
]

function StepsTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="absolute top-1/2 left-[12%] right-[12%] h-1 bg-white/20 rounded-full overflow-hidden -translate-y-1/2 z-0">
          <div
            className="h-full bg-gradient-to-r from-[#bbbd26] to-[#d4d62a] rounded-full transition-all duration-[1500ms] ease-out"
            style={{ width: isVisible ? "100%" : "0%" }}
          />
        </div>
        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const isTop = index % 2 === 0
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.7s ease-out ${200 + index * 150}ms, transform 0.7s ease-out ${200 + index * 150}ms`,
                }}
              >
                <div className={`h-28 flex flex-col justify-end pb-3 ${isTop ? "" : "invisible"}`}>
                  <h3 className="text-base font-bold text-white text-center mb-1">{step.title}</h3>
                  <p className="text-white/60 text-xs max-w-[160px] mx-auto text-center">{step.description}</p>
                </div>
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#bbbd26] flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-sm font-bold text-[#031d40]">{step.number}</span>
                </div>
                <div className={`h-28 flex flex-col justify-start pt-3 ${isTop ? "invisible" : ""}`}>
                  <h3 className="text-base font-bold text-white text-center mb-1">{step.title}</h3>
                  <p className="text-white/60 text-xs max-w-[160px] mx-auto text-center">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden relative pl-8">
        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/20">
          <div className="w-full bg-gradient-to-b from-[#bbbd26] to-[#d4d62a] transition-all duration-[2000ms] ease-out" style={{ height: isVisible ? "100%" : "0%" }} />
        </div>
        <div className="space-y-8">
          {steps.map((step, index) => (
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
              <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
              <p className="text-white/60 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function DataPage() {
  const serviceSchema = getServiceSchema({
    name: "Ciencia de Datos e Inteligencia Artificial",
    description:
      "Convierte los datos de tu empresa en decisiones estratégicas. Centralización, análisis, modelos predictivos y dashboards Power BI.",
    url: "https://unnic.ai/servicios/data",
    serviceType: "Ciencia de Datos y Machine Learning",
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
                <span className="text-[#031d40]">La Experiencia de tu Empresa </span>
                <UnderlinedText>
                  <span className="text-[#031d40]">está en tus Datos</span>
                </UnderlinedText>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cada operación, cada venta, cada error: tu empresa lleva años acumulando conocimiento. El problema es que nadie lo está leyendo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button size="lg" className="text-base px-8 py-6 bg-[#031d40] hover:bg-[#031d40]/90 text-white shadow-xl transition-[transform,background-color] duration-300 group rounded-full" asChild>
                  <Link href="/contacto">
                    Analiza tus datos con nosotros
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col items-center pt-1">
                
              </div>
            </div>
          </div>
        </section>

        {/* El problema real */}
        <section id="problema" className="relative py-12 sm:py-16 md:py-24 bg-[#031d40] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#bbbd26 1px, transparent 1px), linear-gradient(90deg, #bbbd26 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          </div>
          <div className="absolute top-10 right-20 w-[300px] h-[300px] bg-[#bbbd26]/10 rounded-full blur-[80px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">El problema <span className="text-[#bbbd26]">real</span></h2>
                <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Decisiones tomadas por intuición, problemas que se repiten sin que nadie los detecte, y oportunidades que pasan desapercibidas. No es un problema de tecnología. Es un problema de estructura.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {problems.map((problem) => {
                  const Icon = problem.icon
                  return (
                    <div key={problem.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <div className="w-10 h-10 bg-[#bbbd26]/15 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-[#bbbd26]" />
                      </div>
                      <p className="text-white font-bold mb-1">{problem.title}</p>
                      <p className="text-white/60 text-sm">{problem.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Qué construimos */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 md:mb-16 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40]">Qué construimos contigo</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Desde la centralización hasta la visualización: cubrimos todo el ciclo del dato.
                </p>
              </div>
              <div className="space-y-6">
                {/* First row: 3 cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  {whatWeBuild.slice(0, 3).map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className={`group relative bg-gradient-to-br ${item.color} border border-gray-200/50 rounded-2xl p-8 hover:shadow-xl hover:scale-[1.02] transition-[transform,box-shadow] duration-300`}>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <CheckCircle2 className="w-6 h-6 text-[#bbbd26]" />
                        </div>
                        <div className={`${item.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-[#031d40]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#031d40] mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
                {/* Second row: 2 cards centered */}
                <div className="grid md:grid-cols-2 gap-6 md:max-w-2xl lg:max-w-3xl mx-auto">
                  {whatWeBuild.slice(3).map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className={`group relative bg-gradient-to-br ${item.color} border border-gray-200/50 rounded-2xl p-8 hover:shadow-xl hover:scale-[1.02] transition-[transform,box-shadow] duration-300`}>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <CheckCircle2 className="w-6 h-6 text-[#bbbd26]" />
                        </div>
                        <div className={`${item.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-[#031d40]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#031d40] mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-[#031d40] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]">
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#bbbd26 1px, transparent 1px), linear-gradient(90deg, #bbbd26 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          </div>
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[100px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">Cómo trabajamos</h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                  Cuatro fases para convertir tus datos dispersos en una ventaja competitiva real.
                </p>
              </div>
              <StepsTimeline />
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
                ¿Sabes realmente qué te están diciendo tus datos?
              </h2>
              <p className="text-[#031d40]/80 text-lg leading-relaxed">
                En una primera sesión de diagnóstico analizamos qué datos tienes, en qué estado y qué valor pueden generar para tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base px-8 py-6 bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold shadow-xl transition-[transform,background-color] duration-300 group rounded-full" asChild>
                  <Link href="/contacto">
                    Solicitar diagnóstico de datos
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2 border-[#031d40]/30 text-[#031d40] hover:bg-[#031d40] hover:text-white transition-[background-color,color] duration-300 rounded-full bg-transparent" asChild>
                  <Link href="/servicios">Ver todos los servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Caso de éxito */}
        {(() => {
          const c = successStories.find((cs) => cs.id === "restauracion-predictiva")!
          return (
            <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50/40 overflow-hidden">
              <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#bbbd26]/5 rounded-full blur-[140px]" />
              <div className="container relative mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4">Caso de éxito</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                      Descubre cómo ayudamos a una cadena de restauración a convertir sus datos en ahorro real
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
                              <span className="font-semibold text-gray-600">Industria:</span>
                              <span className="text-gray-800">{c.industry}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-600">Año:</span>
                              <span className="text-gray-800">{c.year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-600">Servicio:</span>
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
                            <h4 className="text-xl font-bold text-[#031d40]">El Desafío</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{c.challenge}</p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138z" />
                            </svg>
                            <h4 className="text-xl font-bold text-[#031d40]">La Solución</h4>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{c.solution}</p>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <h4 className="text-xl font-bold text-[#031d40]">Los Resultados</h4>
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
                              Ver caso completo
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
