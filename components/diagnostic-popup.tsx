"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { X, BarChart3, ArrowRight, Clock, FileText, CheckCircle, ChevronLeft } from "lucide-react"

/**
 * LOGIC:
 *
 * localStorage  "unnic_seen"      → set the moment the user first lands.
 *                                   Persists across sessions. Second session+ → tab directly.
 * sessionStorage "unnic_dismissed" → popup was closed in THIS session → tab on next page navigation.
 *
 *  "waiting" → timer running, nothing visible yet
 *  "popup"   → full popup shown after 10 s (first session only)
 *  "tab"     → arrow tab visible on right edge
 *  "open"    → user clicked the arrow, popup re-opened
 */

const LK = "unnic_seen"       // localStorage — survives across sessions
const SK = "unnic_dismissed"  // sessionStorage — resets each session
const DELAY = 10_000

type Phase = "waiting" | "popup" | "tab" | "open"

export function DiagnosticPopup() {
  const [phase, setPhase]   = useState<Phase | null>(null)
  const [ready, setReady]   = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Already dismissed within this session → tab
    if (sessionStorage.getItem(SK)) {
      setPhase("tab")
      return
    }

    // Already seen in a previous session → tab (no popup this time)
    if (localStorage.getItem(LK)) {
      setPhase("tab")
      return
    }

    // Genuine first-ever visit: mark seen in localStorage immediately,
    // then show popup after delay
    localStorage.setItem(LK, "1")
    setPhase("waiting")
    const t = setTimeout(() => {
      setPhase("popup")
      requestAnimationFrame(() => setTimeout(() => setReady(true), 16))
    }, DELAY)

    return () => clearTimeout(t)
  }, [])

  const closePopup = () => {
    setReady(false)
    sessionStorage.setItem(SK, "1")
    setTimeout(() => setPhase("tab"), 320)
  }

  const openTab = () => {
    setReady(false)
    setPhase("open")
    requestAnimationFrame(() => setTimeout(() => setReady(true), 16))
  }

  const closeTab = () => {
    setReady(false)
    setTimeout(() => setPhase("tab"), 320)
  }

  const goToDiagnostic = () => {
    setReady(false)
    sessionStorage.setItem(SK, "1")
    setTimeout(() => {
      setPhase("tab")
      router.push("/recursos/diagnostico-ia?start=1")
    }, 160)
  }

  // Shared popup markup
  const onClose = phase === "open" ? closeTab : closePopup
  const PopupContent = (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: ready ? 1 : 0 }}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Diagnóstico de IA gratuito"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          className="relative w-full max-w-lg pointer-events-auto rounded-2xl overflow-hidden shadow-2xl transition-all duration-300"
          style={{
            transform: ready ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
            opacity: ready ? 1 : 0,
          }}
        >
          {/* Navy top */}
          <div className="bg-[#031D40] px-8 pt-8 pb-6 relative">
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors rounded-full p-1 hover:bg-white/10"
            >
              <X size={18} />
            </button>

            <div className="inline-flex items-center gap-2 bg-[#BBBD26]/15 border border-[#BBBD26]/30 rounded-full px-3 py-1 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#BBBD26] animate-pulse" />
              <span className="text-[#BBBD26] text-xs font-semibold tracking-wide uppercase">
                Gratuito · Sin compromiso
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#BBBD26] flex items-center justify-center">
                <BarChart3 size={24} className="text-[#031D40]" />
              </div>
              <div>
                <h2 className="text-white text-xl font-bold leading-snug">
                  ¿Está tu empresa lista para la IA?
                </h2>
                <p className="text-white/80 text-sm mt-1 leading-relaxed">
                  Descúbrelo en 5 minutos con nuestro diagnóstico gratuito.
                </p>
              </div>
            </div>
          </div>

          {/* White bottom */}
          <div className="bg-white px-8 py-6">
            <ul className="space-y-3 mb-6">
              {[
                { icon: FileText,    text: "Informe personalizado con tu nivel de madurez en IA" },
                { icon: CheckCircle, text: "Identifica las áreas con mayor potencial de mejora" },
                { icon: Clock,       text: "Solo 5 minutos · 22 preguntas clave" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={16} className="text-[#BBBD26] shrink-0 mt-0.5" />
                  <span className="text-[#031D40] text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={goToDiagnostic}
              className="w-full flex items-center justify-center gap-2 bg-[#BBBD26] hover:bg-[#a8aa22] text-[#031D40] font-bold text-sm py-3.5 rounded-xl transition-colors duration-200 group"
            >
              Empezar el diagnóstico
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              Ya lo han hecho más de 150 empresas
            </p>
          </div>
        </div>
      </div>
    </>
  )

  // Arrow tab — always visible once dismissed
  const TabButton = (
    <button
      onClick={openTab}
      aria-label="Abrir diagnóstico de IA gratuito"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center rounded-l-lg overflow-hidden shadow-lg transition-transform duration-200 hover:-translate-x-0.5"
    >
      <span className="flex items-center justify-center w-7 h-10 bg-[#031D40]">
        <ChevronLeft size={14} className="text-white" />
      </span>
      <span className="block w-7 h-1.5 bg-[#BBBD26]" />
    </button>
  )

  if (phase === null || phase === "waiting") return null
  if (phase === "popup") return <>{PopupContent}</>
  if (phase === "tab")   return <>{TabButton}</>
  if (phase === "open")  return <>{TabButton}{PopupContent}</>
  return null
}
