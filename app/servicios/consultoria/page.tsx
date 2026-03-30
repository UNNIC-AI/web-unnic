"use client"

import type { ReactNode } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ChevronDown,
  ClipboardList,
  Stethoscope,
  PenTool,
  Rocket,
  LineChart,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { getServiceSchema, StructuredData } from "@/lib/structured-data"

function UnderlinedText({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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

function SimpleTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Análisis",
      description: "Exploramos tus procesos, sistemas y forma de trabajar para detectar oportunidades reales",
      anchor: "fase-analisis",
    },
    {
      number: "02",
      icon: Stethoscope,
      title: "Diagnóstico",
      description: "Convertimos los problemas en proyectos realizables con viabilidad técnica y de negocio",
      anchor: "fase-diagnostico",
    },
    {
      number: "03",
      icon: PenTool,
      title: "Diseño",
      description: "Creamos tu plan de implementación a medida con fases, tiempos y presupuestos cerrados",
      anchor: "fase-diseno",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Implantación",
      description: "Desarrollamos e integramos tus soluciones con metodología ágil y comunicación continua",
      anchor: "fase-implantacion",
    },
    {
      number: "05",
      icon: LineChart,
      title: "Seguimiento",
      description: "Medimos, optimizamos y escalamos la IA en toda tu organización",
      anchor: "fase-seguimiento",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (anchor: string) => {
    const element = document.getElementById(anchor)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative" ref={timelineRef}>
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        {/* Progress bar */}
        <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-gray-200 rounded-full overflow-hidden -translate-y-1/2 z-0">
          <div
            className="h-full bg-gradient-to-r from-[#bbbd26] to-[#d4d62a] rounded-full transition-all duration-[1500ms] ease-out"
            style={{ width: isVisible ? "100%" : "0%" }}
          />
        </div>

        {/* Grid with fixed structure */}
        <div className="grid grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isTop = index % 2 === 0 // 0, 2, 4 arriba - 1, 3 abajo

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
                  transitionDelay: `${200 + index * 150}ms`,
                  transitionProperty: "opacity, transform",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Top text area - fixed height */}
                <div className={`h-24 flex flex-col justify-end pb-3 ${isTop ? "" : "invisible"}`}>
                  <button
                    onClick={() => scrollToSection(step.anchor)}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-1 group-hover:text-[#bbbd26] transition-colors duration-300">
                      <Icon className="w-4 h-4 text-[#bbbd26] group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-base font-bold text-[#031d40] group-hover:text-[#bbbd26] transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-xs max-w-[160px] mx-auto text-center group-hover:text-[#031d40] transition-colors duration-300">
                      {step.description}
                    </p>
                  </button>
                </div>

                {/* Circle - always centered on line */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#bbbd26] flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-sm font-bold text-[#031d40]">{step.number}</span>
                </div>

                {/* Bottom text area - fixed height */}
                <div className={`h-24 flex flex-col justify-start pt-3 ${isTop ? "invisible" : ""}`}>
                  <button
                    onClick={() => scrollToSection(step.anchor)}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-1 group-hover:text-[#bbbd26] transition-colors duration-300">
                      <Icon className="w-4 h-4 text-[#bbbd26] group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-base font-bold text-[#031d40] group-hover:text-[#bbbd26] transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-xs max-w-[160px] mx-auto text-center group-hover:text-[#031d40] transition-colors duration-300">
                      {step.description}
                    </p>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-200">
          <div
            className="w-full bg-gradient-to-b from-[#bbbd26] to-[#d4d62a] transition-all duration-[2000ms] ease-out"
            style={{ height: isVisible ? "100%" : "0%" }}
          />
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
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${300 + index * 150}ms`,
                }}
              >
                {/* Circle */}
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-[#bbbd26] flex items-center justify-center shadow-md z-10">
                  <span className="text-xs font-bold text-[#031d40]">{step.number}</span>
                </div>

                <button
                  onClick={() => scrollToSection(step.anchor)}
                  className="group cursor-pointer text-left transition-all duration-300 hover:translate-x-1"
                >
                  <div className="flex items-center gap-2 mb-1 group-hover:text-[#bbbd26] transition-colors duration-300">
                    <Icon className="w-4 h-4 text-[#bbbd26] group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-[#031d40] group-hover:text-[#bbbd26] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm group-hover:text-[#031d40] transition-colors duration-300">
                    {step.description}
                  </p>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const optimiaPhases = [
  {
    number: "01",
    title: "Análisis",
    subtitle: "Conocemos tu negocio de verdad",
    description:
      "Realizamos una exploración profunda de tus procesos, sistemas y forma de trabajar. Entendemos qué te frena, dónde se pierde tiempo y qué oportunidades existen para que la IA genere impacto real desde el primer día.",
    image: "/analisis-consultoria-ia-evaluacion-procesos-negocio.png",
    icon: ClipboardList,
    deliverables: [
      "Informes detallados por departamento",
      "Evaluación de sistemas y herramientas actuales",
      "Inventario de datos y fuentes disponibles",
      "Identificación de oportunidades reales de mejora",
    ],
  },
  {
    number: "02",
    title: "Diagnóstico",
    subtitle: "Convertimos los problemas en proyectos realizables",
    description:
      "Transformamos todo lo analizado en oportunidades concretas de IA y automatización. Evaluamos la viabilidad técnica y de negocio de cada iniciativa, priorizando aquellas con mayor impacto y menor complejidad.",
    image: "/ai-diagnosis-planning-whiteboard.jpg",
    icon: Stethoscope,
    deliverables: [
      "Lista priorizada de proyectos IA",
      "Viabilidad técnica y operativa por proyecto",
      "Viabilidad de negocio y retorno estimado",
      "Matriz de impacto–beneficio",
    ],
  },
  {
    number: "03",
    title: "Diseño",
    subtitle: "Creamos tu plan de implementación a medida",
    description:
      "Definimos cómo se ejecutarán los proyectos seleccionados. Ordenamos fases, estimamos tiempos, cerramos presupuestos y establecemos los recursos necesarios para llevarlo a cabo con éxito.",
    image: "/diseno-arquitectura-sistemas-ia-planificacion-tecnica.png",
    icon: PenTool,
    objectPosition: "center bottom",
    deliverables: [
      "Roadmap de implantación por fases",
      "Presupuesto cerrado y planificado",
      "Plan de recursos, roles y equipo necesario",
      "Cronograma detallado de ejecución",
    ],
  },
  {
    number: "04",
    title: "Implantación",
    subtitle: "Construimos e integramos tus soluciones",
    description:
      "Desarrollamos y desplegamos las soluciones definidas, con metodología ágil y comunicación continua. Nos integramos con tus sistemas actuales para que la transición sea fluida y sin interrupciones.",
    image: "/implantacion-desarrollo-equipo-programacion-ia.png",
    icon: Rocket,
    deliverables: [
      "Desarrollo iterativo con demos periódicas",
      "Integración con tus sistemas actuales",
      "Testing avanzado y validación funcional",
      "Formación para tu equipo interno",
    ],
  },
  {
    number: "05",
    title: "Seguimiento",
    subtitle: "Medimos, optimizamos y escalamos tu IA",
    description:
      "Monitorizamos el rendimiento de las soluciones implementadas y te acompañamos para seguir mejorando. Ajustamos modelos, optimizamos procesos y te ayudamos a escalar la IA en toda la organización.",
    image: "/seguimiento-monitorizacion-ia-kpis-optimizacion.png",
    icon: LineChart,
    deliverables: [
      "Dashboard de KPIs y resultados en tiempo real",
      "Informes mensuales de evolución",
      "Propuestas de mejora continua",
      "Soporte técnico y acompañamiento",
    ],
  },
]

function PhaseSection({ phase, index }: { phase: (typeof optimiaPhases)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isEven = index % 2 === 0
  const Icon = phase.icon

  const anchorId = `fase-${phase.title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15, rootMargin: "-50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      id={anchorId}
      ref={ref}
      className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center transition-all duration-700 scroll-mt-24 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Image - changes order based on even/odd */}
      <div className={`relative ${isEven ? "md:order-1" : "md:order-2"}`}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src={phase.image || "/placeholder.svg"} 
            alt={`${phase.title} - ${phase.subtitle} - Fase ${phase.number} de consultoría IA`} 
            fill 
            className="object-cover" 
            style={{ objectPosition: (phase as any).objectPosition || 'center' }}
          />
          {/* Overlay with phase number */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#031d40]/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-white/20">{phase.number}</span>
          </div>
        </div>
        {/* Decorative element */}
        <div
          className={`absolute -z-10 w-full h-full rounded-2xl bg-[#bbbd26]/20 ${isEven ? "-bottom-4 -right-4" : "-bottom-4 -left-4"}`}
        />
      </div>

      {/* Content */}
      <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#bbbd26] rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#031d40]" />
          </div>
          <span className="text-sm font-bold text-[#bbbd26] uppercase tracking-wider">Fase {phase.number}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-2">{phase.title}</h3>
        <p className="text-base sm:text-lg md:text-xl text-[#bbbd26] font-medium mb-3 sm:mb-4">{phase.subtitle}</p>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{phase.description}</p>

        {/* Deliverables */}
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-sm font-semibold text-[#031d40] uppercase tracking-wide mb-4">Entregables</p>
          <ul className="space-y-3">
            {phase.deliverables.map((deliverable, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#bbbd26] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function ConsultoriaPage() {
  const serviceSchema = getServiceSchema({
    name: "Consultoría Estratégica en IA",
    description:
      "Consultoría experta en Inteligencia Artificial para transformar tu empresa. Estrategia, casos de uso y hoja de ruta personalizada para implementar IA con ROI garantizado.",
    url: "https://unnic.ai/servicios/consultoria",
    serviceType: "Consultoría en Inteligencia Artificial",
  })

  return (
    <>
      <StructuredData data={serviceSchema} />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero section */}
        <section className="relative pt-24 pb-8 sm:pt-32 sm:pb-10 md:pt-40 md:pb-14 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
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
          <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/25 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="hidden sm:block absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#bbbd26]/15 rounded-full blur-[100px]" />

          {/* Blue blurred backgrounds */}
          <div className="hidden sm:block absolute top-1/2 right-1/2 w-[380px] h-[380px] bg-[#031d40]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-[200px] h-[200px] md:w-[420px] md:h-[420px] bg-[#031d40]/14 rounded-full blur-[70px] md:blur-[110px]" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.05] tracking-tight">
                <span className="text-[#031d40]">Empieza con </span>
                <UnderlinedText>
                  <span className="text-[#031d40]">Estrategia</span>
                </UnderlinedText>
              </h1>

              <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                La IA sin estrategia es solo tecnología. Diseñamos el camino para que genere impacto real en tu negocio.
              </p>

              <div className="flex flex-col items-center pt-3">
                <button
                  onClick={() => {
                    document.getElementById("consultoria")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="group flex flex-col items-center gap-3 text-[#031d40]/60 hover:text-[#031d40] transition-colors cursor-pointer"
                >
                  <span className="text-sm font-medium tracking-wide">Ver cómo</span>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-2 bg-current opacity-40" />
                    <ChevronDown className="w-5 h-5 -mt-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Consultoria section */}
        <section
          id="consultoria"
          className="py-12 sm:py-16 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="hidden sm:block absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#031d40]/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4 sm:mb-6">
                  <UnderlinedText>
                    <span className="text-[#031d40]">Un plan Únnico</span>
                  </UnderlinedText>{" "}
                  para tu Empresa
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
                  Identificamos dónde la IA puede generar impacto real en tu negocio y trazamos el camino para
                  conseguirlo
                </p>
              </div>

              {/* Timeline */}
              <SimpleTimeline />

              <div className="mt-10 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Columna izquierda - Mensaje */}
                <div className="md:order-1"></div>

                {/* Columna derecha - Card con entregables */}
                <div className="md:order-2"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-16 relative overflow-hidden bg-[#031d40]">
          {/* Grid texture overlay */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#bbbd26 1px, transparent 1px), linear-gradient(90deg, #bbbd26 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Diagonal lines texture */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #bbbd26 0px, #bbbd26 1px, transparent 1px, transparent 80px)",
              }}
            />
          </div>

          {/* Yellow blurred backgrounds */}
          <div className="absolute top-10 right-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/20 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="absolute bottom-10 left-20 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-[#bbbd26]/15 rounded-full blur-[120px] md:blur-[160px]" />
          <div className="hidden sm:block absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#bbbd26]/12 rounded-full blur-[130px]" />

          <div className="container mx-auto px-4 max-w-7xl relative">
            <div className="max-w-5xl">
              {/* Text */}
              <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  La IA está aquí para quedarse...
                  <br />
                  <span className="text-white">No es cuestión de hacerlo,</span>
                  <br />
                  <span className="text-white">Sino de cuándo.</span>
                </h2>
              </div>

              {/* Buttons Row */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-6">
                {/* Primary CTA Button */}
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 bg-[#bbbd26] hover:bg-[#bbbd26]/90 hover:scale-105 text-[#031d40] font-bold shadow-2xl transition-all group w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contacto">
                    Quiero empezar
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                {/* Secondary Contact Buttons */}
                <div className="flex gap-4 justify-center sm:justify-start">
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/34610757689"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    title="WhatsApp"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-[#bbbd26] bg-transparent flex items-center justify-center hover:bg-[#bbbd26] hover:scale-110 transition-all shadow-lg">
                      <svg
                        className="w-7 h-7 text-[#bbbd26] group-hover:text-[#031d40] transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                  </a>

                  {/* Email Button */}
                  <a href="mailto:contact@unnicai.com" className="group" title="Email">
                    <div className="w-14 h-14 rounded-full border-2 border-[#bbbd26] bg-transparent flex items-center justify-center hover:bg-[#bbbd26] hover:scale-110 transition-all shadow-lg">
                      <svg
                        className="w-7 h-7 text-[#bbbd26] group-hover:text-[#031d40] transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </a>

                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/company/93352502/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    title="LinkedIn"
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-[#bbbd26] bg-transparent flex items-center justify-center hover:bg-[#bbbd26] hover:scale-110 transition-all shadow-lg">
                      <svg
                        className="w-7 h-7 text-[#bbbd26] group-hover:text-[#031d40] transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-32 bg-white relative overflow-hidden">
          {/* Section Header */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-20">
              <span className="inline-block text-sm font-bold text-[#bbbd26] uppercase tracking-wider mb-4">
                Nuestra metodología
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4 sm:mb-6">
                El Método{" "}
                <UnderlinedText>
                  <span className="text-[#031d40]">OptimIA</span>
                </UnderlinedText>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                Un proceso probado en más de 50 empresas para implementar IA con éxito. Cinco fases que garantizan
                resultados medibles y sostenibles.
              </p>
            </div>
          </div>

          {/* Phases in Zigzag Layout */}
          <div className="max-w-6xl mx-auto px-4 space-y-12 sm:space-y-20 md:space-y-32">
            {optimiaPhases.map((phase, index) => (
              <PhaseSection key={phase.number} phase={phase} index={index} />
            ))}
          </div>

          {/* CTA at the end */}
          <div className="mt-20 md:mt-32">
            <div className="container mx-auto px-4 text-center"></div>
          </div>
        </section>
      </main>
    </>
  )
}
