"use client"

import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { successStories } from "@/lib/data"
import Image from "next/image"
import {
  ArrowRight,
  ChevronDown,
  Shield,
  Search,
  TriangleAlert,
  FileSearch,
  UsersRound,
  ScrollText,
  BookOpenCheck,
  CalendarClock,
  CheckCircle2,
  Euro,
  FileX,
  ShieldOff,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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

const risks = [
  {
    icon: Euro,
    title: "Sanciones",
    description: "Hasta 35M€ o el 7% de la facturación global",
  },
  {
    icon: FileX,
    title: "Datos sin control",
    description: "Uso de datos de clientes o empleados sin documentación",
  },
  {
    icon: ShieldOff,
    title: "Sin políticas",
    description: "Ninguna norma interna sobre qué IA se puede usar y cómo",
  },
]

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    description: "Mapeamos todas las herramientas de IA que usa tu empresa, visibles y ocultas",
  },
  {
    number: "02",
    icon: TriangleAlert,
    title: "Evaluación de riesgos",
    description: "Clasificamos cada uso según el Reglamento: prohibido, alto riesgo, limitado o mínimo",
  },
  {
    number: "03",
    icon: FileSearch,
    title: "Diagnóstico",
    description: "Te mostramos tus brechas de cumplimiento antes de tomar ninguna decisión",
  },
  {
    number: "04",
    icon: UsersRound,
    title: "Sesión directiva",
    description: "Con la dirección, decidís qué se permite, qué se limita y quién es responsable",
  },
  {
    number: "05",
    icon: ScrollText,
    title: "Marco normativo",
    description: "Redactamos vuestra política de uso responsable de IA y el protocolo para nuevas herramientas",
  },
  {
    number: "06",
    icon: BookOpenCheck,
    title: "Formación al equipo",
    description: "Explicamos las normas a toda la plantilla y lo dejamos documentado legalmente",
  },
  {
    number: "07",
    icon: CalendarClock,
    title: "Mantenimiento",
    description: "Os dejamos el sistema para que podáis actualizar el cumplimiento solos cada 6 meses",
  },
]

const deliverables = [
  { title: "Acta de Decisiones", desc: "Firmada por Dirección" },
  { title: "Inventario de sistemas v1.0", desc: "Firmado por el Responsable de IA" },
  { title: "Política de Uso Responsable", desc: "Distribuida a toda la plantilla" },
  { title: "Protocolo de nuevas herramientas", desc: "Para aprobar futuras incorporaciones sin llamarnos" },
  { title: "Registro de formación", desc: "Firmado por los empleados, con valor como evidencia legal" },
  { title: "Plan de mantenimiento semestral", desc: "Para que el cumplimiento no caduque" },
]

function StepsTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.05 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative pl-8 md:pl-12">
      <div className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-0.5 bg-gray-200">
        <div
          className="w-full bg-gradient-to-b from-[#bbbd26] to-[#d4d62a] transition-all duration-[2000ms] ease-out"
          style={{ height: isVisible ? "100%" : "0%" }}
        />
      </div>
      <div className="space-y-5">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={step.number}
              className="relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                transition: `opacity 0.6s ease-out ${300 + index * 120}ms, transform 0.6s ease-out ${300 + index * 120}ms`,
              }}
            >
              <div className="absolute -left-8 md:-left-12 top-3 w-8 h-8 rounded-full bg-[#bbbd26] flex items-center justify-center shadow-md z-10">
                <span className="text-xs font-bold text-[#031d40]">{step.number}</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#bbbd26] hover:shadow-md transition-[border-color,box-shadow] duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#bbbd26]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#031d40]" />
                  </div>
                  <h3 className="font-bold text-[#031d40] text-lg">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function CumplimientoRIAPage() {
  return (
    <>
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
                <span className="text-[#031d40]">IA </span>
                <UnderlinedText>
                  <span className="text-[#031d40]">Sin Riesgos</span>
                </UnderlinedText>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                El Reglamento Europeo de IA ya está en vigor. No se trata de dejar de usar IA, sino de documentar que la usas bien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button size="lg" className="text-base px-8 py-6 bg-[#031d40] hover:bg-[#031d40]/90 text-white shadow-xl transition-[transform,background-color] duration-300 group rounded-full" asChild>
                  <Link href="/contacto">
                    Solicitar diagnóstico RIA
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col items-center pt-1">
                <button
                  onClick={() => document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex flex-col items-center gap-3 text-[#031d40]/60 hover:text-[#031d40] transition-colors cursor-pointer"
                >
                  <span className="text-sm font-medium tracking-wide">Ver el problema real</span>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-2 bg-current opacity-40" />
                    <ChevronDown className="w-5 h-5 -mt-1" />
                  </div>
                </button>
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
                  La mayoría de empresas ya usa IA: ChatGPT para redactar, herramientas de RRHH, chatbots de atención al cliente. El problema no es usarla, sino no tener ningún control documentado sobre cómo se usa.
                </p>
                <p className="text-[#bbbd26] font-bold text-xl mt-4">Si mañana hay una inspección, ¿qué demuestras?</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {risks.map((risk) => {
                  const Icon = risk.icon
                  return (
                    <div key={risk.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <div className="w-10 h-10 bg-[#bbbd26]/15 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-[#bbbd26]" />
                      </div>
                      <p className="text-white font-bold mb-1">{risk.title}</p>
                      <p className="text-white/70 text-sm">{risk.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Cómo lo hacemos */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[100px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40]">Cómo lo hacemos</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                  Siete pasos para pasar de la exposición legal a la tranquilidad documentada.
                </p>
              </div>
              <StepsTimeline />
            </div>
          </div>
        </section>

        {/* Qué tienes al terminar */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40]">Qué obtienes al terminar</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  Un sistema de cumplimiento completo y operativo desde el primer día.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {deliverables.map((d, i) => (
                  <div key={i} className="bg-gradient-to-br from-[#031d40]/5 to-[#031d40]/10 border border-gray-200/50 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#bbbd26] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-[#031d40] mb-1">{d.title}</p>
                        <p className="text-gray-500 text-sm">{d.desc}</p>
                      </div>
                    </div>
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
              <div className="inline-flex items-center gap-2 bg-[#031d40]/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-[#031d40]" />
                <span className="text-[#031d40] text-sm font-semibold">Gratuito · Sin compromiso</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] whitespace-nowrap">
                ¿Sabes qué IA usa tu empresa hoy mismo?
              </h2>
              <p className="text-[#031d40]/80 text-lg leading-relaxed max-w-2xl mx-auto">
                En la mayoría de empresas, la respuesta sorprende. Empieza por el diagnóstico: es gratuito y sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base px-8 py-6 bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold shadow-xl transition-[transform,background-color] duration-300 group rounded-full" asChild>
                  <Link href="/contacto">
                    Solicitar diagnóstico RIA
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
          const c = successStories.find((cs) => cs.id === "vivi-coaching")!
          return (
            <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50/40 overflow-hidden">
              <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#bbbd26]/5 rounded-full blur-[140px]" />
              <div className="container relative mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4">Caso de éxito</h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                      Descubre cómo ayudamos a implementar un sistema de cumplimiento RIA
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
