"use client"

import React from "react"

import type { ReactNode } from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Search,
  PenTool,
  Cog,
  Layers,
  Rocket,
  Brain,
  Target,
  TrendingUp,
  Eye,
  Lightbulb,
  FileText,
  ChevronDown,
  Headphones,
  GraduationCap,
  Scale,
  ShieldCheck,
  AlertTriangle,
  Handshake,
  CheckCircle2,
  Loader2,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

function UnderlinedText({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => the_observer(ref.current, setIsVisible, { threshold: 0.1, rootMargin: "-50px" }), [])

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

function AnimatedSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => the_observer(ref.current, setIsVisible, { threshold: 0.1, rootMargin: "-50px" }), [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  )
}

function SimpleTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Análisis",
      description: "Comprendemos tus objetivos, procesos y datos para detectar áreas de mejora",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Diagnóstico",
      description: "Transformamos esas áreas en proyectos de IA viables, definidos técnica y económicamente",
    },
    {
      number: "03",
      icon: Target,
      title: "Diseño",
      description: "Validamos los proyectos, cerramos presupuestos y creamos el plan de implementación",
    },
  ]

  useEffect(() => the_observer(timelineRef.current, setIsVisible, { threshold: 0.2 }), [])

  return (
    <div className="relative" ref={timelineRef}>
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        {/* Progress bar */}
        <div className="absolute top-6 left-[15%] right-[15%] h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#bbbd26] to-[#d4d62a] rounded-full transition-all duration-1000 ease-out"
            style={{ width: isVisible ? "100%" : "0%" }}
          />
        </div>

        <div className="grid grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="text-center transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                  transitionDelay: `${300 + index * 250}ms`,
                }}
              >
                {/* Step circle */}
                <div className="relative z-10 w-12 h-12 mx-auto mb-6 rounded-full bg-[#bbbd26] flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-[#031d40]">{step.number}</span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <Icon className="w-5 h-5 text-[#bbbd26]" />
                  <h3 className="text-lg font-bold text-[#031d40]">{step.title}</h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-6">
        <div className="relative pl-8 border-l-2 border-[#bbbd26] space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(15px)",
                  transitionDelay: `${200 + index * 200}ms`,
                }}
              >
                <div className="absolute -left-[25px] w-10 h-10 bg-[#bbbd26] rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-[#031d40]">{step.number}</span>
                </div>
                <div className="pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-[#bbbd26]" />
                    <h3 className="text-lg font-bold text-[#031d40]">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function AnimatedDesarrolloSteps({ steps }: { steps: { icon: React.ElementType; title: string; desc: string }[] }) {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleSteps.length === 0) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, index])
            }, index * 400)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [visibleSteps.length, steps])

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0 mb-16">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {/* Card */}
          <div
            className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex-1 transition-all duration-500 ease-out ${
              visibleSteps.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-[#031d40]">
              <step.icon className="w-7 h-7 text-[#bbbd26]" />
            </div>
            <h3 className="text-lg font-bold text-[#031d40] mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>

          {index < 4 && (
            <div
              className={`hidden md:flex items-center justify-center px-2 transition-all duration-300 ease-out ${
                visibleSteps.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: visibleSteps.includes(index) ? "200ms" : "0ms" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#bbbd26] flex items-center justify-center shadow-md">
                <ArrowRight className="w-5 h-5 text-[#031d40]" />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

function AnimatedRIATimeline() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSteps, setActiveSteps] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      num: "01",
      title: "Diagnóstico y formación directiva",
      desc: "Identificación de usos actuales y alineación estratégica",
    },
    {
      num: "02",
      title: "Responsables y control",
      desc: "Estructura de gobernanza y registro centralizado",
    },
    {
      num: "03",
      title: "Evaluación de riesgos",
      desc: "Análisis legal, ético y de protección de datos",
    },
    {
      num: "04",
      title: "Guía interna y formación",
      desc: "Políticas documentadas y capacitación operativa",
    },
    {
      num: "05",
      title: "Supervisión continua",
      desc: "Mantenimiento actualizado y mejora progresiva",
    },
  ]

  useEffect(() => the_observer(containerRef.current, setIsVisible, { threshold: 0.2 }), [])

  useEffect(() => {
    if (isVisible) {
      steps.forEach((_, index) => {
        setTimeout(() => {
          setActiveSteps((prev) => [...prev, index])
        }, index * 400)
      })
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className="relative">
      {/* Línea vertical */}
      <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200">
        <div
          className="w-full bg-[#bbbd26] transition-all duration-1000 ease-out"
          style={{
            height: isVisible ? "100%" : "0%",
          }}
        />
      </div>

      {/* Pasos */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-5 relative"
            style={{
              opacity: activeSteps.includes(index) ? 1 : 0.3,
              transform: activeSteps.includes(index) ? "translateX(0)" : "translateX(-10px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            {/* Nodo/círculo */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 transition-all duration-500"
              style={{
                backgroundColor: activeSteps.includes(index) ? "#bbbd26" : "#e5e7eb",
              }}
            >
              <span
                className="text-sm font-bold transition-colors duration-500"
                style={{
                  color: activeSteps.includes(index) ? "#031d40" : "#9ca3af",
                }}
              >
                {step.num}
              </span>
            </div>

            {/* Card */}
            <div
              className="flex-1 bg-white rounded-xl p-5 shadow-sm border transition-all duration-500"
              style={{
                borderColor: activeSteps.includes(index) ? "#bbbd26" : "#f3f4f6",
              }}
            >
              <h4 className="font-bold text-[#031d40] mb-1">{step.title}</h4>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ServiciosPage() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [consentChecked, setConsentChecked] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if (!consentChecked) {
      setErrorMessage("Debes aceptar el tratamiento de datos para continuar")
      return
    }

    setFormState("loading")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("_subject", "Nuevo contacto desde Servicios - Unnic AI")
    formData.append("_consent", "Sí, autorizo el tratamiento de datos")

    try {
      const response = await fetch("https://formspree.io/f/meelpapo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormState("success")
        setConsentChecked(false)
        formRef.current?.reset()
      } else {
        setFormState("error")
        setErrorMessage("Error al enviar el mensaje. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      setFormState("error")
      setErrorMessage("Error de conexión. Por favor, inténtalo de nuevo.")
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
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
                <UnderlinedText>
                  <span className="text-[#031d40]">Rentable</span>
                </UnderlinedText>
                <span className="text-[#031d40]">, </span>
                <UnderlinedText delay={200}>
                  <span className="text-[#031d40]">Segura</span>
                </UnderlinedText>
                <span className="text-[#031d40]"> y </span>
                <UnderlinedText delay={400}>
                  <span className="text-[#031d40]">Escalable</span>
                </UnderlinedText>
              </h1>

              <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Aplicamos IA de forma práctica en tu empresa: ayudamos a tu equipo a mejorar procesos, reducir costes y ver resultados reales de forma segura              
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

        <section
          id="consultoria"
          className="py-12 sm:py-16 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-[#031d40]/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative">
            <AnimatedSection>
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                  <Link
                    href="/servicios/consultoria"
                    className="inline-flex items-center gap-2 bg-[#031d40] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 hover:bg-[#031d40]/80 transition-colors"
                  >
                    <Lightbulb className="w-4 h-4" />
                    CONSULTORÍA
                  </Link>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>
                      <span className="text-[#031d40]">Primero,</span>
                    </UnderlinedText>{" "}
                    tu Estrategia
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Identificamos dónde la IA puede generar impacto real en tu negocio y trazamos el camino para
                    conseguirlo
                  </p>
                </div>

                {/* Timeline */}
                <SimpleTimeline />

                <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
                  {/* Columna izquierda - Mensaje */}
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                      Crea tu{" "}
                      <UnderlinedText>
                        <span className="text-[#031d40]">plan de acción</span>
                      </UnderlinedText>{" "}
                      
                    </h3>
                    <p className="text-lg text-gray-600">
                      Con proyectos definidos, priorizados y presupuestados listos para ejecutar
                    </p>
                  </div>

                  {/* Columna derecha - Card con entregables */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <p className="text-sm font-semibold text-[#bbbd26] uppercase tracking-wide mb-6">Lo que obtienes</p>
                    <div className="space-y-5 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#bbbd26]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-4 h-4 text-[#031d40]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#031d40]">Diagnóstico completo</p>
                          <p className="text-sm text-gray-500">Análisis detallado de tu situación actual</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#bbbd26]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="w-4 h-4 text-[#031d40]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#031d40]">Proyectos de alto impacto</p>
                          <p className="text-sm text-gray-500">Oportunidades priorizadas por ROI</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#bbbd26]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-4 h-4 text-[#031d40]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#031d40]">Inversión clara</p>
                          <p className="text-sm text-gray-500">Presupuesto y timeline definidos</p>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="w-full text-lg py-6 bg-[#031d40] hover:bg-[#031d40]/90 text-white shadow-xl transition-all group"
                      asChild
                    >
                      <Link href="/contacto">
                        Agendar Análisis
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Link
                      href="/servicios/consultoria"
                      className="w-full mt-4 inline-flex items-center justify-center text-[#031d40] hover:text-[#bbbd26] font-medium transition-colors group"
                    >
                      Más sobre Consultoría
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Desarrollo/Implementación Section */}
        <section className="py-12 sm:py-16 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative">
            <AnimatedSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Link
                    href="/servicios/desarrollo"
                    className="inline-flex items-center gap-2 bg-[#031d40] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 hover:bg-[#031d40]/80 transition-colors"
                  >
                    <Layers className="w-4 h-4" />
                    IMPLEMENTACION
                  </Link>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4">
                    Proyectos{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">100% a Medida</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                    Un proceso probado que garantiza resultados desde la primera fase
                  </p>
                </div>

                <AnimatedDesarrolloSteps
                  steps={[
                    { icon: Search, title: "Análisis", desc: "Entendemos tu negocio y objetivos" },
                    { icon: PenTool, title: "Diseño", desc: "Arquitectura técnica y prototipado" },
                    { icon: Cog, title: "Desarrollo", desc: "Sprints con entregas frecuentes" },
                    { icon: Rocket, title: "Despliegue", desc: "Producción e integración" },
                    { icon: Headphones, title: "Soporte", desc: "Mantenimiento y evolución continua" },
                  ]}
                />

                {/* Áreas de desarrollo */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Brain,
                      title: "IA Generativa",
                      desc: "Agentes de IA, Llamadas con IA, Sistemas RAG",
                      href: "/servicios/ia-generativa",
                    },
                    {
                      icon: Cog,
                      title: "Automatizaciones",
                      desc: "N8n, PowerAutomate, RPA a medida",
                      href: "/servicios/automatizacion",
                    },
                    {
                      icon: TrendingUp,
                      title: "Data & BI",
                      desc: "Power BI, estudios de datos, modelos predictivos",
                      href: "/servicios/data",
                    },
                    {
                      icon: Layers,
                      title: "Desarrollo",
                      desc: "Apps Web, Software Ad Hoc, integraciones",
                      href: "/servicios/desarrollo",
                    },
                  ].map((area, index) => (
                    <Link key={index} href={area.href} className="group">
                      <div className="bg-white rounded-2xl p-8 border-2 border-[#bbbd26] hover:bg-[#bbbd26]/5 transition-all h-full flex flex-col">
                        <div className="w-16 h-16 bg-[#bbbd26]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#bbbd26]/20 transition-all">
                          <area.icon className="w-8 h-8 text-[#031d40]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#031d40] mb-3">{area.title}</h3>
                        <p className="text-gray-600 flex-grow">{area.desc}</p>
                        <div className="mt-4 flex items-center text-[#031d40] font-medium group-hover:text-[#bbbd26] transition-colors">
                          Saber más
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    className="text-lg px-10 py-7 bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-bold shadow-xl transition-all group"
                    asChild
                  >
                    <Link href="/contacto">
                      Cuéntanos tu proyecto
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Banner CTA Section - MOVED HERE */}
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
          <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-[#bbbd26]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-20 w-[500px] h-[500px] bg-[#bbbd26]/15 rounded-full blur-[140px]" />

          <div className="container mx-auto px-4 max-w-5xl relative">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-white/70 mt-4 text-lg">Déjanos tu contacto y te respondemos en menos de 24h</p>
            </div>

            {/* Contact form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <input
                  type="text"
                  name="contact"
                  placeholder="Tu email o teléfono"
                  required
                  disabled={formState === "loading"}
                  className="flex-1 h-14 px-6 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#bbbd26] focus:ring-2 focus:ring-[#bbbd26]/20 transition-all disabled:opacity-50"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={formState === "loading"}
                  className="w-full sm:w-auto h-14 px-8 bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-bold shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Te contactamos
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="services-consent"
                  checked={consentChecked}
                  onChange={(e) => {
                    setConsentChecked(e.target.checked)
                    if (e.target.checked && errorMessage.includes("aceptar")) {
                      setErrorMessage("")
                    }
                  }}
                  disabled={formState === "loading"}
                  className="w-4 h-4 rounded border-white/30 text-[#bbbd26] focus:ring-[#bbbd26] cursor-pointer flex-shrink-0 disabled:opacity-50"
                />
                <label htmlFor="services-consent" className="text-xs text-white/60 leading-tight cursor-pointer">
                  Autorizo el tratamiento de datos según{" "}
                  <a href="/politica-privacidad" className="text-[#bbbd26] hover:underline">
                    política de privacidad
                  </a>
                </label>
              </div>

              {/* Success Message */}
              {formState === "success" && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-100">¡Mensaje enviado! Te contactaremos pronto.</p>
                </div>
              )}

              {/* Error Message */}
              {(formState === "error" || errorMessage) && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-sm text-red-100">{errorMessage || "Hubo un error. Por favor, inténtalo de nuevo."}</p>
                </div>
              )}
            </form>

            <p className="text-white/50 text-sm text-center mt-6">Sin compromiso. Queremos conocer tu proyecto.</p>
          </div>
        </section>

        {/* Formación Section */}
        <section className="py-12 sm:py-16 md:py-28 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, #031d40 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative">
            <AnimatedSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <Link
                    href="/servicios/formacion"
                    className="inline-flex items-center gap-2 bg-[#031d40] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 hover:bg-[#031d40]/80 transition-colors"
                  >
                    <GraduationCap className="w-4 h-4" />
                    FORMACIÓN
                  </Link>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#031d40]">
                    Forma a tu equipo{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">con Expertos</span>
                    </UnderlinedText>
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                  {/* Imagen de formación */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/formacion-equipo-ia-capacitacion-empresarial.png"
                      alt="Formación en IA para equipos"
                      className="w-full h-[400px] object-cover"
                      style={{ objectPosition: 'center 65%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031d40]/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white text-lg font-medium">Formación práctica y adaptada a tu negocio</p>
                    </div>
                  </div>

                  {/* Características */}
                  <div className="space-y-8">
                    {[
                      {
                        icon: Target,
                        title: "Enfoque práctico",
                        desc: "Casos reales y ejercicios aplicables desde el día uno",
                      },
                      {
                        icon: TrendingUp,
                        title: "Orientado a tu negocio",
                        desc: "Contenido adaptado a tu industria y objetivos",
                      },
                      {
                        icon: Eye,
                        title: "Visión estratégica",
                        desc: "No solo herramientas, sino cómo aplicarlas con impacto",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-5">
                        <div className="w-14 h-14 bg-[#bbbd26]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-7 h-7 text-[#bbbd26]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#031d40] mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-16">
                  <h3 className="text-2xl font-bold text-[#031d40] mb-8 text-center">Nuestros Cursos</h3>

                  <div className="relative">
                    {/* Fade izquierdo */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    {/* Fade derecho */}
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="overflow-hidden">
                      <div className="flex gap-4 animate-scroll-courses" style={{ width: "max-content" }}>
                        {/* Duplicamos los cursos para el efecto infinito */}
                        {[...Array(2)].map((_, setIndex) => (
                          <React.Fragment key={setIndex}>
                            {[
                              {
                                name: "Introducción a la IA",
                                desc: "Fundamentos de inteligencia artificial para cualquier perfil profesional",
                                highlight: false,
                              },
                              {
                                name: "IA para Directivos",
                                desc: "Toma de decisiones estratégicas con inteligencia artificial",
                                highlight: false,
                              },
                              {
                                name: "IA para Comerciales",
                                desc: "Potencia tus ventas con herramientas de IA",
                                highlight: false,
                              },
                              {
                                name: "IA para Marketers",
                                desc: "Automatiza y optimiza tus campañas de marketing",
                                highlight: false,
                              },
                              {
                                name: "IA para RRHH",
                                desc: "Gestión del talento y procesos de selección con IA",
                                highlight: false,
                              },
                              {
                                name: "IA para Finanzas",
                                desc: "Análisis financiero y predicción con machine learning",
                                highlight: false,
                              },
                              {
                                name: "IA para Desarrolladores",
                                desc: "Integración de modelos y APIs de IA en tus proyectos",
                                highlight: false,
                              },
                              {
                                name: "Ad Hoc",
                                desc: "Formación personalizada según tus necesidades específicas",
                                highlight: true,
                              },
                            ].map((course, index) => (
                              <div
                                key={`${setIndex}-${index}`}
                                className={`flex-shrink-0 w-[280px] rounded-2xl p-6 transition-all flex flex-col ${
                                  course.highlight
                                    ? "bg-[#031d40] text-white"
                                    : "bg-gray-100 text-[#031d40] hover:bg-gray-200"
                                }`}
                              >
                                <div className="flex items-center justify-between mb-3">
                                  <span className="font-bold text-lg">{course.name}</span>
                                  <div className={`w-3 h-3 rounded-full bg-[#bbbd26]`} />
                                </div>
                                <p
                                  className={`text-sm mb-4 flex-grow ${course.highlight ? "text-gray-300" : "text-gray-600"}`}
                                >
                                  {course.desc}
                                </p>
                                <Link
                                  href="/contacto"
                                  className={`text-sm font-medium inline-flex items-center gap-1 mt-auto ${
                                    course.highlight
                                      ? "text-[#bbbd26] hover:text-[#bbbd26]/80"
                                      : "text-[#031d40] hover:text-[#031d40]/70"
                                  } transition-colors`}
                                >
                                  Saber más
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
                            ))}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-7 bg-[#031d40] hover:bg-[#031d40]/90 text-white shadow-xl transition-all group"
                    asChild
                  >
                    <Link href="/servicios/formacion">
                      Solicita una Formación
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-7 border-2 border-[#031d40] text-[#031d40] hover:bg-[#031d40]/5 transition-all group bg-transparent"
                    asChild
                  >
                    <Link href="/contacto">
                      Formación Personalizada
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Cumplimiento RIA Section */}
        <section className="py-12 sm:py-16 md:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-[#031d40]/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative">
            <AnimatedSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                  <Link
                    href="/servicios/cumplimiento-ria"
                    className="inline-flex items-center gap-2 bg-[#031d40] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 hover:bg-[#031d40]/80 transition-colors"
                  >
                    <Scale className="w-4 h-4" />
                    CUMPLIMIENTO RIA
                  </Link>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-[#031d40]">
                    Transformación{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">Segura y Legal</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                    Impulsa la IA en tu empresa cumpliendo con el Reglamento Europeo
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                  {/* Timeline - 3 columnas */}
                  <div className="lg:col-span-3">
                    <AnimatedRIATimeline />
                  </div>

                  {/* Badges y CTA - 2 columnas */}
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 sticky top-24">
                      <h3 className="text-xl font-bold text-[#031d40] mb-6">¿Qué consigues?</h3>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#bbbd26]/20 flex items-center justify-center flex-shrink-0">
                            <ShieldCheck className="w-5 h-5 text-[#bbbd26]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#031d40]">Cumplimiento total</h4>
                            <p className="text-sm text-gray-600">Alineación con el Reglamento Europeo de IA</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#bbbd26]/20 flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-[#bbbd26]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#031d40]">Reducción de riesgos</h4>
                            <p className="text-sm text-gray-600">Mitigación de sanciones y problemas legales</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#bbbd26]/20 flex items-center justify-center flex-shrink-0">
                            <Handshake className="w-5 h-5 text-[#bbbd26]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#031d40]">Cultura y confianza</h4>
                            <p className="text-sm text-gray-600">Genera confianza en el uso responsable de IA</p>
                          </div>
                        </div>
                      </div>

                      <Button
                        size="lg"
                        className="w-full text-lg py-6 bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-white shadow-xl transition-all group bg-foreground"
                        asChild
                      >
                        <Link href="/contacto">
                          Quiero proteger mi empresa
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>

                      <Link
                        href="/servicios/cumplimiento-ria"
                        className="flex items-center justify-center gap-2 mt-4 text-[#031d40]/70 hover:text-[#bbbd26] transition-colors text-sm font-medium"
                      >
                        Más sobre RIA
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Final Section */}
      </main>
    </>
  )
}

// Helper function for IntersectionObserver
function the_observer(
  element: HTMLElement | null,
  setState: (value: boolean) => void,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: "-50px" },
) {
  if (!element) return

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setState(true)
      observer.disconnect()
    }
  }, options)

  observer.observe(element)
  return () => observer.disconnect()
}
