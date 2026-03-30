"use client"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Clock, 
  Shield, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  BarChart3, 
  Target, 
  Lightbulb,
  FileText,
  Users,
  Building2,
  Mail,
  Send,
  X
} from "lucide-react"
import { useEffect, useRef, useState } from "react"

// ─── Types ────────────────────────────────────────────────────────────────────

type Question = {
  id: string
  text: string
  options: { value: string; label: string }[]
}

type FormStep = {
  id: number
  title: string
  subtitle: string
  questions: Question[]
}

// ─── Questions Data ───────────────────────────────────────────────────────────

const FORM_STEPS: FormStep[] = [
  {
    id: 1,
    title: "Datos de tu empresa",
    subtitle: "Cuéntanos un poco sobre ti y tu organización",
    questions: [], // Handled separately with custom fields
  },
  {
    id: 2,
    title: "Estrategia e Inversión",
    subtitle: "Evaluamos la integración de IA en tu planificación estratégica",
    questions: [
      {
        id: "1_1",
        text: "¿En qué medida la IA está integrada en la planificación estratégica de la empresa?",
        options: [
          { value: "A", label: "Forma parte del plan estratégico con objetivos y métricas definidas" },
          { value: "B", label: "Está incluida como línea estratégica, pero sin métricas claras" },
          { value: "C", label: "Existen iniciativas aisladas sin alineación estratégica" },
          { value: "D", label: "No forma parte de la planificación actual" },
        ],
      },
      {
        id: "1_2",
        text: "¿Existen objetivos medibles asociados a iniciativas de IA o automatización?",
        options: [
          { value: "A", label: "Sí, con métricas claras y seguimiento periódico" },
          { value: "B", label: "Sí, definidos pero sin seguimiento sistemático" },
          { value: "C", label: "Objetivos generales sin métricas concretas" },
          { value: "D", label: "No existen objetivos definidos" },
        ],
      },
      {
        id: "2_1",
        text: "¿Existe un responsable claro de la estrategia digital/IA con presupuesto y capacidad de decisión?",
        options: [
          { value: "A", label: "Sí, con autoridad formal y presupuesto asignado" },
          { value: "B", label: "Sí, pero con capacidad limitada" },
          { value: "C", label: "Existe figura informal sin responsabilidad clara" },
          { value: "D", label: "No hay responsable definido" },
        ],
      },
      {
        id: "3_2",
        text: "¿Cuál es el presupuesto anual destinado a digitalización/IA?",
        options: [
          { value: "A", label: "Más de 150.000 €" },
          { value: "B", label: "Entre 50.000 € y 150.000 €" },
          { value: "C", label: "Entre 10.000 € y 50.000 €" },
          { value: "D", label: "Menos de 10.000 €" },
        ],
      },
      {
        id: "3_3",
        text: "¿El presupuesto de digitalización/IA es estructural o puntual?",
        options: [
          { value: "A", label: "Partida anual recurrente integrada en planificación" },
          { value: "B", label: "Presupuesto anual revisable" },
          { value: "C", label: "Presupuesto por proyectos puntuales" },
          { value: "D", label: "No existe presupuesto específico" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Gobernanza y Seguridad",
    subtitle: "Analizamos tus políticas de control y protección de datos",
    questions: [
      {
        id: "4_1",
        text: "¿Existe una política formal sobre el uso de herramientas de IA?",
        options: [
          { value: "A", label: "Política formal documentada y comunicada" },
          { value: "B", label: "Directrices internas no formalizadas" },
          { value: "C", label: "Recomendaciones informales" },
          { value: "D", label: "No existe ninguna política" },
        ],
      },
      {
        id: "4_2",
        text: "¿Está definido qué herramientas pueden utilizarse y en qué contextos?",
        options: [
          { value: "A", label: "Sí, con criterios claros y documentación interna" },
          { value: "B", label: "Parcialmente definido" },
          { value: "C", label: "Decisión descentralizada por equipos" },
          { value: "D", label: "No está definido" },
        ],
      },
      {
        id: "5_1",
        text: "¿Se utilizan datos sensibles o estratégicos en herramientas externas de IA?",
        options: [
          { value: "A", label: "No se utilizan datos sensibles" },
          { value: "B", label: "Se utilizan bajo criterios y control formal" },
          { value: "C", label: "Se utilizan ocasionalmente sin protocolo claro" },
          { value: "D", label: "Se desconoce qué datos se están utilizando" },
        ],
      },
      {
        id: "5_2",
        text: "¿Existe clasificación formal de datos (sensibles, estratégicos, internos)?",
        options: [
          { value: "A", label: "Sí, con niveles definidos y documentados" },
          { value: "B", label: "Parcialmente estructurada" },
          { value: "C", label: "Definición informal" },
          { value: "D", label: "No existe clasificación" },
        ],
      },
      {
        id: "5_3",
        text: "¿Hay control sobre qué datos se introducen en herramientas externas?",
        options: [
          { value: "A", label: "Sí, con revisión y trazabilidad" },
          { value: "B", label: "Control parcial" },
          { value: "C", label: "Recomendaciones sin seguimiento" },
          { value: "D", label: "Sin control definido" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Uso de IA",
    subtitle: "Evaluamos cómo se utiliza la IA en tu organización",
    questions: [
      {
        id: "6_1",
        text: "¿Los empleados utilizan herramientas públicas de IA por iniciativa propia?",
        options: [
          { value: "A", label: "No, el uso está centralizado y autorizado" },
          { value: "B", label: "Uso limitado y supervisado" },
          { value: "C", label: "Uso frecuente sin supervisión clara" },
          { value: "D", label: "Uso extendido sin control" },
        ],
      },
      {
        id: "6_2",
        text: "¿Tiene la organización visibilidad sobre ese uso informal de IA?",
        options: [
          { value: "A", label: "Visibilidad total y seguimiento" },
          { value: "B", label: "Visibilidad parcial" },
          { value: "C", label: "Visibilidad muy limitada" },
          { value: "D", label: "Ninguna visibilidad" },
        ],
      },
      {
        id: "7_1",
        text: "¿En cuántas áreas se utiliza actualmente IA o automatización de forma oficial?",
        options: [
          { value: "A", label: "En múltiples áreas clave integradas en procesos" },
          { value: "B", label: "En varias áreas con impacto parcial" },
          { value: "C", label: "En una o dos áreas de forma experimental" },
          { value: "D", label: "No se utiliza actualmente" },
        ],
      },
      {
        id: "7_2",
        text: "¿Las iniciativas actuales de IA están integradas en procesos operativos?",
        options: [
          { value: "A", label: "Totalmente integradas y estandarizadas" },
          { value: "B", label: "Integración parcial" },
          { value: "C", label: "Pruebas piloto aisladas" },
          { value: "D", label: "No existen iniciativas" },
        ],
      },
      {
        id: "7_3",
        text: "¿Se ha formado a empleados en el uso profesional de herramientas de IA?",
        options: [
          { value: "A", label: "Formación estructurada y recurrente" },
          { value: "B", label: "Formación puntual en algunos equipos" },
          { value: "C", label: "Formación informal o autodidacta" },
          { value: "D", label: "No se ha realizado formación" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Tecnología y Procesos",
    subtitle: "Analizamos tu infraestructura tecnológica y operativa",
    questions: [
      {
        id: "8_1",
        text: "¿Qué nivel de integración existe entre ERP, CRM y sistemas operativos?",
        options: [
          { value: "A", label: "Sistemas plenamente integrados" },
          { value: "B", label: "Integración parcial" },
          { value: "C", label: "Sistemas en silos con intercambios manuales" },
          { value: "D", label: "Sistemas completamente aislados" },
        ],
      },
      {
        id: "8_2",
        text: "¿Con qué frecuencia se realizan transcripciones manuales de datos?",
        options: [
          { value: "A", label: "Raramente o nunca" },
          { value: "B", label: "Ocasionalmente" },
          { value: "C", label: "Frecuentemente" },
          { value: "D", label: "Es práctica habitual diaria" },
        ],
      },
      {
        id: "9_1",
        text: "¿Están documentados los procesos críticos de negocio?",
        options: [
          { value: "A", label: "Totalmente documentados y actualizados" },
          { value: "B", label: "Parcialmente documentados" },
          { value: "C", label: "Documentación informal" },
          { value: "D", label: "No están documentados" },
        ],
      },
      {
        id: "9_2",
        text: "¿Existen métricas de rendimiento asociadas a esos procesos?",
        options: [
          { value: "A", label: "Métricas claras y seguimiento periódico" },
          { value: "B", label: "Métricas parciales" },
          { value: "C", label: "Indicadores no estructurados" },
          { value: "D", label: "No existen métricas" },
        ],
      },
      {
        id: "9_3",
        text: "¿Tiene identificados los principales cuellos de botella operativos?",
        options: [
          { value: "A", label: "Claramente identificados y priorizados" },
          { value: "B", label: "Identificados parcialmente" },
          { value: "C", label: "Intuidos pero no analizados" },
          { value: "D", label: "No se han analizado" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Cultura y Contacto",
    subtitle: "Última sección: cultura organizativa y datos de contacto",
    questions: [
      {
        id: "10_1",
        text: "¿Cómo reacciona el equipo ante nuevas herramientas digitales?",
        options: [
          { value: "A", label: "Proactivo y orientado a mejora continua" },
          { value: "B", label: "Generalmente receptivo" },
          { value: "C", label: "Resistencia frecuente" },
          { value: "D", label: "Alta resistencia estructural" },
        ],
      },
      {
        id: "10_2",
        text: "¿Se ha ejecutado con éxito algún proyecto de transformación tecnológica en los últimos 3 años?",
        options: [
          { value: "A", label: "Sí, con impacto medible" },
          { value: "B", label: "Sí, con resultados mixtos" },
          { value: "C", label: "Intentos sin consolidación" },
          { value: "D", label: "No" },
        ],
      },
    ],
  },
]

const EMPLOYEE_OPTIONS = [
  { value: "1-10", label: "1-10 empleados" },
  { value: "11-50", label: "11-50 empleados" },
  { value: "51-200", label: "51-200 empleados" },
  { value: "201-500", label: "201-500 empleados" },
  { value: "500+", label: "Más de 500 empleados" },
]

// ─── Flat question list for Typeform flow ─────────────────────────────────────

type FlatStep =
  | { kind: "intro" }
  | { kind: "nombre" }
  | { kind: "empresa" }
  | { kind: "empleados" }
  | { kind: "question"; question: Question; sectionTitle: string; sectionIndex: number; totalSections: number }
  | { kind: "email" }

function buildFlatSteps(): FlatStep[] {
  const steps: FlatStep[] = [
    { kind: "intro" },
    { kind: "nombre" },
    { kind: "empresa" },
    { kind: "empleados" },
  ]
  // Skip step index 0 (datos empresa — no questions)
  FORM_STEPS.slice(1).forEach((section) => {
    section.questions.forEach((question) => {
      steps.push({
        kind: "question",
        question,
        sectionTitle: section.title,
        sectionIndex: section.id - 1,
        totalSections: FORM_STEPS.length - 1,
      })
    })
  })
  steps.push({ kind: "email" })
  return steps
}

const FLAT_STEPS = buildFlatSteps()

// ─── Typeform Overlay ─────────────────────────────────────────────────────────

function TypeformOverlay({ onClose, startAtNombre = false }: { onClose: () => void; startAtNombre?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(startAtNombre ? 1 : 0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<"forward" | "back">("forward")

  const [nombre, setNombre] = useState("")
  const [empresa, setEmpresa] = useState("")
  const [empleados, setEmpleados] = useState("")
  const [email, setEmail] = useState("")
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [error, setError] = useState("")

  const total = FLAT_STEPS.length
  const progress = ((currentIndex) / total) * 100
  const step = FLAT_STEPS[currentIndex]

  // Prevent body scroll while overlay is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  const goNext = () => {
    setDirection("forward")
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex((i) => i + 1)
      setError("")
      setAnimating(false)
    }, 200)
  }

  const goPrev = () => {
    if (currentIndex === 0) return
    setDirection("back")
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex((i) => i - 1)
      setError("")
      setAnimating(false)
    }, 200)
  }

  const handleContinue = () => {
    if (step.kind === "intro") {
      goNext(); return
    } else if (step.kind === "nombre") {
      if (!nombre.trim()) { setError("Tu nombre es obligatorio"); return }
    } else if (step.kind === "empresa") {
      if (!empresa.trim()) { setError("El nombre de empresa es obligatorio"); return }
    } else if (step.kind === "empleados") {
      if (!empleados) { setError("Selecciona el número de empleados"); return }
    } else if (step.kind === "question") {
      if (!answers[step.question.id]) { setError("Selecciona una opción para continuar"); return }
    } else if (step.kind === "email") {
      if (!email.trim()) { setError("El email es obligatorio"); return }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Introduce un email válido"); return }
      handleSubmit(); return
    }
    goNext()
  }

  const handleOptionSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
    setError("")
    // Auto-advance after a short delay
    setTimeout(() => goNext(), 350)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Question ID → short descriptive key mapping
    const KEY_MAP: Record<string, string> = {
      "1_1": "integracion_ia_estrategia",
      "1_2": "objetivos_medibles_ia",
      "2_1": "responsable_estrategia_digital",
      "3_2": "presupuesto_anual_ia",
      "3_3": "presupuesto_estructural_o_puntual",
      "4_1": "politica_uso_herramientas_ia",
      "4_2": "herramientas_definidas_y_contextos",
      "5_1": "uso_datos_sensibles_en_ia",
      "5_2": "clasificacion_formal_datos",
      "5_3": "control_datos_herramientas_externas",
      "6_1": "uso_ia_publica_por_empleados",
      "6_2": "visibilidad_uso_informal_ia",
      "7_1": "areas_con_ia_o_automatizacion",
      "7_2": "ia_integrada_en_procesos_operativos",
      "7_3": "formacion_empleados_ia",
      "8_1": "integracion_erp_crm_sistemas",
      "8_2": "frecuencia_transcripciones_manuales",
      "9_1": "procesos_criticos_documentados",
      "9_2": "metricas_de_rendimiento_procesos",
      "9_3": "cuellos_de_botella_identificados",
      "10_1": "reaccion_equipo_nuevas_herramientas",
      "10_2": "proyectos_transformacion_exitosos",
    }

    const respuestas: Record<string, string> = {}
    FORM_STEPS.slice(1).forEach((section) => {
      section.questions.forEach((question) => {
        const selectedValue = answers[question.id]
        if (selectedValue) {
          const key = KEY_MAP[question.id] ?? question.id
          respuestas[key] = selectedValue
        }
      })
    })

    const payload = {
      cliente: {
        nombre_contacto: nombre,
        nombre_empresa: empresa,
        num_empleados: empleados,
        email,
      },
      respuestas,
      fecha: new Date().toISOString(),
    }

    try {
      await fetch("/api/webhook-diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    } catch {
      // Silent fail — do not block the user if the webhook is unreachable
    }

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleContinue()
    if (e.key === "Escape") onClose()
  }

  // ── Success screen ──
  if (isSubmitted) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col items-center justify-center px-6 py-12"
           style={{
             top: "var(--nav-height, 72px)",
             backgroundColor: "#f7f7f5",
             backgroundImage: "radial-gradient(circle, #d1d1cc 1px, transparent 1px)",
             backgroundSize: "24px 24px",
           }}>
        <div className="max-w-lg w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#bbbd26]/20 rounded-full mb-8">
            <CheckCircle2 className="w-10 h-10 text-[#031d40]" />
          </div>
          <h2 className="text-3xl font-bold text-[#031d40] mb-4">Diagnóstico enviado</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Gracias, <strong className="text-[#031d40]">{nombre}</strong>. Tu informe personalizado llegará a{" "}
            <strong className="text-[#031d40]">{email}</strong> en un máximo de 30 minutos.
          </p>
          <div className="bg-[#031d40] rounded-2xl p-8 mb-6 text-left">
            <h3 className="text-lg font-semibold text-white mb-2">¿Quieres que lo revisemos juntos?</h3>
            <p className="text-white/60 text-sm mb-5">
              Agenda una llamada gratuita con nuestro equipo y te ayudamos a interpretar tu diagnóstico y a trazar los próximos pasos.
            </p>
            <Button
              className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold"
              onClick={() => window.location.href = "/contacto"}
            >
              Agendar llamada gratuita
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <Button variant="ghost" className="text-gray-400 hover:text-[#031d40]" onClick={onClose}>
            Volver a la página
          </Button>
        </div>
      </div>
    )
  }

  // ── Main overlay ──
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex flex-col"
      style={{
        top: "var(--nav-height, 72px)",
        backgroundColor: "#f7f7f5",
        backgroundImage: "radial-gradient(circle, #d1d1cc 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
      onKeyDown={handleKeyDown}
    >
      {/* Top bar: progress + close */}
      <div className="flex items-center gap-4 px-6 py-4 shrink-0">
        {/* Progress bar */}
        <div className="flex-1 h-1.5 bg-black/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#bbbd26] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Close button */}
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/8 transition-colors text-gray-400 hover:text-[#031d40] shrink-0"
          aria-label="Cerrar formulario"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Question area — centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 overflow-y-auto">
        <div
          className={`w-full max-w-2xl transition-all duration-200 ease-out ${
            animating
              ? direction === "forward"
                ? "opacity-0 translate-y-4"
                : "opacity-0 -translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          {/* INTRO */}
          {step.kind === "intro" && (
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-4">Diagnóstico de Madurez en IA</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#031d40] leading-tight mb-4">
                  Este diagnóstico vale lo que tú le des.
                </h2>
                <p className="text-gray-500 leading-relaxed text-base sm:text-lg">
                  Detrás de cada pregunta hay años de experiencia ayudando a empresas a integrar la inteligencia artificial de forma real y rentable. No es un cuestionario genérico: cada respuesta alimenta un análisis hecho por nuestro equipo.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#bbbd26] shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#031d40]" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-[#031d40]">Sé honesto.</strong> No hay respuestas correctas ni incorrectas. Cuanto más refleje tu situación real, más útil será el informe.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#bbbd26] shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#031d40]" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-[#031d40]">Tómate tu tiempo.</strong> Son preguntas sobre la realidad de tu empresa. Merece la pena pensar cada respuesta.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#bbbd26] shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#031d40]" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-[#031d40]">El resultado es accionable.</strong> Recibirás un informe con tu nivel de madurez, áreas de mejora prioritarias y pasos concretos.
                  </p>
                </div>
              </div>
              <Button
                onClick={handleContinue}
                className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-semibold px-10 h-12 text-base"
              >
                Empezar el diagnóstico
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {/* NOMBRE */}
          {step.kind === "nombre" && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-2">Empecemos</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-1">¿Cómo te llamas?</h2>
                <p className="text-gray-400 text-sm">Lo usaremos para personalizar tu informe.</p>
              </div>
              <Input
                autoFocus
                type="text"
                placeholder="Ej: Steve Jobs"
                value={nombre}
                onChange={(e) => { setNombre(e.target.value); setError("") }}
                className="h-14 text-lg border-0 border-b-2 border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-[#bbbd26] text-[#031d40] placeholder:text-gray-300 px-0 bg-transparent"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                onClick={handleContinue}
                className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-semibold px-8 h-12"
              >
                Continuar
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {/* EMPRESA */}
          {step.kind === "empresa" && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-2">Sobre tu empresa</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-1">¿Cómo se llama tu empresa?</h2>
                <p className="text-gray-400 text-sm">El diagnóstico se personalizará para {nombre || "tu empresa"}.</p>
              </div>
              <Input
                autoFocus
                type="text"
                placeholder="Ej: Apple Inc."
                value={empresa}
                onChange={(e) => { setEmpresa(e.target.value); setError("") }}
                className="h-14 text-lg border-0 border-b-2 border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-[#bbbd26] text-[#031d40] placeholder:text-gray-300 px-0 bg-transparent"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                onClick={handleContinue}
                className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-semibold px-8 h-12"
              >
                Continuar
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {/* EMPLEADOS */}
          {step.kind === "empleados" && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-2">Tamaño</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-1">¿Cuántas personas trabajan en {empresa || "tu empresa"}?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EMPLOYEE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => { setEmpleados(opt.value); setError(""); setTimeout(() => goNext(), 200) }}
                    className={`p-4 rounded-xl border-2 text-left transition-all font-medium text-sm ${
                      empleados === opt.value
                        ? "bg-[#031d40] border-[#031d40] text-white"
                        : "bg-white border-gray-200 text-[#031d40] hover:border-[#031d40]/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          )}

          {/* QUESTION */}
          {step.kind === "question" && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-2">
                  {step.sectionTitle}
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-[#031d40] leading-snug">
                  {step.question.text}
                </h2>
              </div>
              <div className="space-y-3">
                {step.question.options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleOptionSelect(step.question.id, opt.value)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 group ${
                      answers[step.question.id] === opt.value
                        ? "bg-[#031d40] border-[#031d40] text-white"
                        : "bg-white border-gray-200 text-[#031d40] hover:border-[#031d40]/50 hover:bg-gray-50"
                    }`}
                  >
                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-sm font-bold shrink-0 transition-colors ${
                      answers[step.question.id] === opt.value
                        ? "bg-[#bbbd26] text-[#031d40]"
                        : "bg-gray-100 text-gray-500 group-hover:bg-[#031d40]/10"
                    }`}>
                      {opt.value}
                    </span>
                    <span className="text-sm leading-relaxed font-medium">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* EMAIL */}
          {step.kind === "email" && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-2">Casi listo</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-1">¿Dónde enviamos tu informe?</h2>
                <p className="text-gray-400 text-sm">Recibirás tu diagnóstico completo en un máximo de 30 minutos.</p>
              </div>
              <Input
                autoFocus
                type="email"
                placeholder="tu@empresa.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError("") }}
                className="h-14 text-lg border-0 border-b-2 border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-[#bbbd26] text-[#031d40] placeholder:text-gray-300 px-0 bg-transparent"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex items-center gap-4">
                <Button
                  onClick={handleContinue}
                  disabled={isSubmitting}
                  className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold px-8 h-12"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Enviando...</span>
                  ) : (
                    <>Enviar diagnóstico <Send className="ml-2 w-4 h-4" /></>
                  )}
                </Button>
              </div>
              <p className="text-gray-400 text-xs flex items-center gap-1.5">
                <Shield className="w-3 h-3 shrink-0" />
                Tus datos están protegidos y no serán compartidos con terceros.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 shrink-0">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#031d40] transition-colors ${currentIndex === 0 ? "invisible" : ""}`}
        >
          <ArrowLeft className="w-4 h-4" />
          Anterior
        </button>
        <p className="text-xs text-gray-300 hidden sm:block">
          Pulsa <kbd className="font-mono bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-xs">Enter</kbd> para continuar
        </p>
        <div className="w-20" />
      </div>
    </div>
  )
}

// ─── Underlined Text Animation ────────────────────────────────────────────────

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

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className="inline box-decoration-clone transition-[background-size] duration-700 ease-out"
      style={{
        backgroundImage: "linear-gradient(to bottom, transparent 59%, #bbbd26 59%)",
        backgroundSize: isVisible ? "100% 100%" : "0% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </span>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: BarChart3,
    title: "Conoce tu nivel de madurez",
    description: "Descubre en qué punto está tu empresa respecto a la adopción de IA y compárate con tu sector.",
  },
  {
    icon: Target,
    title: "Identifica oportunidades",
    description: "Detecta las áreas de tu negocio donde la IA puede generar mayor impacto y ROI.",
  },
  {
    icon: Lightbulb,
    title: "Recibe recomendaciones",
    description: "Obtén un plan de acción con los próximos pasos concretos para tu transformación.",
  },
  {
    icon: FileText,
    title: "Informe ejecutivo gratuito",
    description: "Descarga un documento profesional que puedes compartir con tu equipo directivo.",
  },
]


const FAQS = [
  {
    question: "¿Cuánto tiempo tarda el diagnóstico?",
    answer: "El cuestionario se completa en aproximadamente 5 minutos. Las preguntas son de selección múltiple y están diseñadas para ser respondidas de forma ágil sin necesidad de consultar datos.",
  },
  {
    question: "¿Qué información necesito para completarlo?",
    answer: "No necesitas preparar ningún documento. Las preguntas son sobre la situación general de tu empresa: estrategia, procesos, tecnología y cultura organizacional respecto a la IA.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer: "Absolutamente. Tus respuestas se tratan de forma confidencial y solo se utilizan para generar tu diagnóstico personalizado. Cumplimos con RGPD y no compartimos información con terceros.",
  },
  {
    question: "¿El diagnóstico tiene algún coste?",
    answer: "No, el diagnóstico inicial es completamente gratuito. Es nuestra forma de ayudarte a dar el primer paso en tu transformación con IA.",
  },
  {
    question: "¿Qué incluye el informe que recibiré?",
    answer: "El informe incluye: tu puntuación de madurez en IA, análisis por cada área evaluada (estrategia, gobernanza, operativa, tecnología y cultura), y recomendaciones priorizadas con los siguientes pasos.",
  },
]

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function DiagnosticoIAPage() {
  const [formOpen, setFormOpen] = useState(false)
  const [startAtNombre, setStartAtNombre] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("start") === "1") {
      setStartAtNombre(true)
      setFormOpen(true)
    }
  }, [])

  const openForm = (skipIntro = false) => {
    setStartAtNombre(skipIntro)
    setFormOpen(true)
  }
  const closeForm = () => setFormOpen(false)

  return (
    <>
      <Navigation />
      {formOpen && <TypeformOverlay onClose={closeForm} startAtNombre={startAtNombre} />}
      <main className="min-h-screen">
        {/* ══════════════════════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
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
          <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#bbbd26]/15 rounded-full blur-[60px] md:blur-[100px]" />
          <div className="hidden sm:block absolute top-1/3 right-1/3 w-[450px] h-[450px] bg-[#bbbd26]/18 rounded-full blur-[110px]" />

          {/* Gray shadows */}
          <div className="absolute top-40 left-20 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-gray-400/15 rounded-full blur-[50px] md:blur-[80px]" />
          <div className="hidden sm:block absolute bottom-32 right-32 w-[400px] h-[400px] bg-gray-500/12 rounded-full blur-[100px]" />

          {/* Blue blurred backgrounds */}
          <div className="absolute top-20 right-10 w-[220px] h-[220px] md:w-[450px] md:h-[450px] bg-[#031d40]/12 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="hidden sm:block absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#031d40]/10 rounded-full blur-[130px]" />
          <div className="absolute bottom-20 left-20 w-[200px] h-[200px] md:w-[420px] md:h-[420px] bg-[#031d40]/14 rounded-full blur-[70px] md:blur-[110px]" />

          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 shadow-sm">
                <Clock className="w-4 h-4 text-[#bbbd26]" />
                <span>Completa en ~6 minutos</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.1] tracking-tight">
                <UnderlinedText>
                  <span className="text-[#031d40]">Diagnóstico Inicial de IA</span>
                </UnderlinedText>
              </h1>

              {/* CTA Button */}
              <div className="pt-2">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 bg-[#031d40] hover:bg-[#031d40]/90 text-white shadow-2xl transition-all group"
                  onClick={() => openForm()}
                >
                  Empezar diagnóstico
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Privacy note */}
              <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                Tus datos están protegidos y no serán compartidos con terceros.
              </p>

              {/* Benefits cards inside hero */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {BENEFITS.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-left group"
                  >
                    <div className="w-10 h-10 bg-[#bbbd26]/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#bbbd26]/30 transition-colors">
                      <benefit.icon className="w-5 h-5 text-[#031d40]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#031d40] mb-1 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            FAQ SECTION
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#031d40]/5 rounded-full blur-[100px]" />
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
              {/* Left Column: Header */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6 leading-tight">
                  Preguntas{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">Frecuentes</span>
                  </UnderlinedText>
                </h2>

                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Todo lo que necesitas saber antes de realizar el diagnóstico de madurez en IA.
                </p>

                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-[#031d40] hover:bg-[#031d40]/90 text-white font-semibold shadow-lg transition-all group"
                  onClick={() => openForm()}
                >
                  Empezar diagnóstico
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Right Column: Accordion */}
              <div className="lg:col-span-7">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {FAQS.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-none bg-gray-50 rounded-2xl shadow-sm hover:bg-gray-100 transition-all duration-300 px-6 py-2 data-[state=open]:bg-gray-50 data-[state=open]:ring-1 data-[state=open]:ring-[#bbbd26]/40"
                    >
                      <AccordionTrigger className="text-lg font-bold text-[#031d40] hover:text-[#031d40] hover:no-underline py-5 text-left [&[data-state=open]]:text-[#031d40] transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-500 text-base leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
