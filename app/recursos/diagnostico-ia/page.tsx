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
  Send,
  X
} from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { diagnosticoIaTranslations } from "@/lib/i18n/pages/diagnostico-ia"

// ─── Question IDs & Option Values (structural, locale-independent) ────────────

const QUESTION_IDS: string[][] = [
  [],
  ["1_1", "1_2", "2_1", "3_2", "3_3"],
  ["4_1", "4_2", "5_1", "5_2", "5_3"],
  ["6_1", "6_2", "7_1", "7_2", "7_3"],
  ["8_1", "8_2", "9_1", "9_2", "9_3"],
  ["10_1", "10_2"],
]

const OPTION_VALUES = ["A", "B", "C", "D"]

// ─── Flat question list for Typeform flow ─────────────────────────────────────

type FlatStep =
  | { kind: "intro" }
  | { kind: "nombre" }
  | { kind: "empresa" }
  | { kind: "empleados" }
  | { kind: "question"; questionId: string; sectionIndex: number; questionIndex: number }
  | { kind: "email" }

function buildFlatSteps(): FlatStep[] {
  const steps: FlatStep[] = [
    { kind: "intro" },
    { kind: "nombre" },
    { kind: "empresa" },
    { kind: "empleados" },
  ]
  QUESTION_IDS.slice(1).forEach((ids, sectionOffset) => {
    ids.forEach((qId, qIndex) => {
      steps.push({
        kind: "question",
        questionId: qId,
        sectionIndex: sectionOffset + 1,
        questionIndex: qIndex,
      })
    })
  })
  steps.push({ kind: "email" })
  return steps
}

const FLAT_STEPS = buildFlatSteps()

// ─── Typeform Overlay ─────────────────────────────────────────────────────────

type DiagTranslations = typeof diagnosticoIaTranslations.es

function TypeformOverlay({ onClose, startAtNombre = false, t }: { onClose: () => void; startAtNombre?: boolean; t: DiagTranslations }) {

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
      if (!nombre.trim()) { setError(t.nombre.error); return }
    } else if (step.kind === "empresa") {
      if (!empresa.trim()) { setError(t.empresa.error); return }
    } else if (step.kind === "empleados") {
      if (!empleados) { setError(t.empleados.error); return }
    } else if (step.kind === "question") {
      if (!answers[step.questionId]) { setError(t.question.error); return }
    } else if (step.kind === "email") {
      if (!email.trim()) { setError(t.email.errorRequired); return }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError(t.email.errorInvalid); return }
      handleSubmit(); return
    }
    goNext()
  }

  const handleOptionSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
    setError("")
    setTimeout(() => goNext(), 350)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

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
    QUESTION_IDS.slice(1).forEach((ids) => {
      ids.forEach((qId) => {
        const selectedValue = answers[qId]
        if (selectedValue) {
          const key = KEY_MAP[qId] ?? qId
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
          <h2 className="text-3xl font-bold text-[#031d40] mb-4">{t.success.title}</h2>
          <p className="text-gray-500 mb-8 leading-relaxed"
             dangerouslySetInnerHTML={{
               __html: t.success.messageTemplate
                 .replace("{name}", nombre)
                 .replace("{email}", email)
             }}
          />
          <div className="bg-[#031d40] rounded-2xl p-8 mb-6 text-left">
            <h3 className="text-lg font-semibold text-white mb-2">{t.success.ctaTitle}</h3>
            <p className="text-white/60 text-sm mb-5">
              {t.success.ctaDescription}
            </p>
            <Button
              className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold"
              onClick={() => window.location.href = "/contacto"}
            >
              {t.success.ctaButton}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <Button variant="ghost" className="text-gray-400 hover:text-[#031d40]" onClick={onClose}>
            {t.success.backButton}
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
        <div className="flex-1 h-1.5 bg-black/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#bbbd26] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/8 transition-colors text-gray-400 hover:text-[#031d40] shrink-0"
          aria-label={t.overlay.closeAriaLabel}
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
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-4">{t.intro.kicker}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#031d40] leading-tight mb-4">
                  {t.intro.title}
                </h2>
                <p className="text-gray-500 leading-relaxed text-base sm:text-lg">
                  {t.intro.description}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#bbbd26] shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#031d40]" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-[#031d40]">{t.intro.bullet1Title}</strong> {t.intro.bullet1Text}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#bbbd26] shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#031d40]" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-[#031d40]">{t.intro.bullet2Title}</strong> {t.intro.bullet2Text}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#bbbd26] shrink-0 mt-0.5 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#031d40]" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <strong className="text-[#031d40]">{t.intro.bullet3Title}</strong> {t.intro.bullet3Text}
                  </p>
                </div>
              </div>
              <Button
                onClick={handleContinue}
                className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-semibold px-10 h-12 text-base"
              >
                {t.intro.startButton}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {/* NOMBRE */}
          {step.kind === "nombre" && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-2">{t.nombre.kicker}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-1">{t.nombre.title}</h2>
                <p className="text-gray-400 text-sm">{t.nombre.subtitle}</p>
              </div>
              <Input
                autoFocus
                type="text"
                placeholder={t.nombre.placeholder}
                value={nombre}
                onChange={(e) => { setNombre(e.target.value); setError("") }}
                className="h-14 text-lg border-0 border-b-2 border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-[#bbbd26] text-[#031d40] placeholder:text-gray-300 px-0 bg-transparent"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                onClick={handleContinue}
                className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-semibold px-8 h-12"
              >
                {t.nombre.continueButton}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {/* EMPRESA */}
          {step.kind === "empresa" && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-2">{t.empresa.kicker}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-1">{t.empresa.title}</h2>
                <p className="text-gray-400 text-sm">{t.empresa.subtitleTemplate.replace("{name}", nombre || t.empresa.subtitleFallback)}</p>
              </div>
              <Input
                autoFocus
                type="text"
                placeholder={t.empresa.placeholder}
                value={empresa}
                onChange={(e) => { setEmpresa(e.target.value); setError("") }}
                className="h-14 text-lg border-0 border-b-2 border-gray-200 rounded-none focus-visible:ring-0 focus-visible:border-[#bbbd26] text-[#031d40] placeholder:text-gray-300 px-0 bg-transparent"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                onClick={handleContinue}
                className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-semibold px-8 h-12"
              >
                {t.empresa.continueButton}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {/* EMPLEADOS */}
          {step.kind === "empleados" && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-2">{t.empleados.kicker}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-1">{t.empleados.titleTemplate.replace("{company}", empresa || t.empleados.titleFallback)}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.empleados.options.map((opt) => (
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
          {step.kind === "question" && (() => {
            const section = t.formSteps[step.sectionIndex]
            const questions = "questions" in section ? section.questions : undefined
            const q = questions?.[step.questionIndex]
            return (
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-2">
                    {section.title}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#031d40] leading-snug">
                    {q?.text}
                  </h2>
                </div>
                <div className="space-y-3">
                  {q?.options.map((label, optIdx) => {
                    const value = OPTION_VALUES[optIdx]
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => handleOptionSelect(step.questionId, value)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 group ${
                          answers[step.questionId] === value
                            ? "bg-[#031d40] border-[#031d40] text-white"
                            : "bg-white border-gray-200 text-[#031d40] hover:border-[#031d40]/50 hover:bg-gray-50"
                        }`}
                      >
                        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-sm font-bold shrink-0 transition-colors ${
                          answers[step.questionId] === value
                            ? "bg-[#bbbd26] text-[#031d40]"
                            : "bg-gray-100 text-gray-500 group-hover:bg-[#031d40]/10"
                        }`}>
                          {value}
                        </span>
                        <span className="text-sm leading-relaxed font-medium">{label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })()}

          {/* EMAIL */}
          {step.kind === "email" && (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#bbbd26] uppercase tracking-widest mb-2">{t.email.kicker}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-1">{t.email.title}</h2>
                <p className="text-gray-400 text-sm">{t.email.subtitle}</p>
              </div>
              <Input
                autoFocus
                type="email"
                placeholder={t.email.placeholder}
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
                    <span className="animate-pulse">{t.email.sending}</span>
                  ) : (
                    <>{t.email.sendButton} <Send className="ml-2 w-4 h-4" /></>
                  )}
                </Button>
              </div>
              <p className="text-gray-400 text-xs flex items-center gap-1.5">
                <Shield className="w-3 h-3 shrink-0" />
                {t.email.privacyNote}
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
          {t.overlay.prevButton}
        </button>
        <p className="text-xs text-gray-300 hidden sm:block">
          {t.overlay.pressEnter} <kbd className="font-mono bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-xs">{t.overlay.enterKey}</kbd> {t.overlay.toContinue}
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

// ─── Benefit icons (stable across locales) ─────────────────────────────────────

const BENEFIT_ICONS = [BarChart3, Target, Lightbulb, FileText]

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function DiagnosticoIAPage() {
  const { locale } = useTranslation()
  const t = diagnosticoIaTranslations[locale]

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
      {formOpen && <TypeformOverlay onClose={closeForm} startAtNombre={startAtNombre} t={t} />}
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
                <span>{t.hero.badge}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.1] tracking-tight">
                <UnderlinedText>
                  <span className="text-[#031d40]">{t.hero.title}</span>
                </UnderlinedText>
              </h1>

              {/* CTA Button */}
              <div className="pt-2">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 bg-[#031d40] hover:bg-[#031d40]/90 text-white shadow-2xl transition-all group"
                  onClick={() => openForm()}
                >
                  {t.hero.ctaButton}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Privacy note */}
              <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                {t.hero.privacyNote}
              </p>

              {/* Benefits cards inside hero */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {t.benefits.map((benefit, index) => {
                  const BenefitIcon = BENEFIT_ICONS[index]
                  return (
                    <div
                      key={index}
                      className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-left group"
                    >
                      <div className="w-10 h-10 bg-[#bbbd26]/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#bbbd26]/30 transition-colors">
                        <BenefitIcon className="w-5 h-5 text-[#031d40]" />
                      </div>
                      <h3 className="text-sm font-bold text-[#031d40] mb-1 leading-snug">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  )
                })}
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
                  {t.faq.title1}{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">{t.faq.titleHighlight}</span>
                  </UnderlinedText>
                </h2>

                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  {t.faq.subtitle}
                </p>

                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-[#031d40] hover:bg-[#031d40]/90 text-white font-semibold shadow-lg transition-all group"
                  onClick={() => openForm()}
                >
                  {t.faq.ctaButton}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Right Column: Accordion */}
              <div className="lg:col-span-7">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {t.faq.items.map((faq, index) => (
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
