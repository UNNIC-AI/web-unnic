"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { ExternalLink, Search, Zap, Video, Wrench, TrendingUp, Building2, ShoppingCart, Terminal, Settings, Users, Lightbulb, ClipboardList } from "lucide-react"


// ─── Types ───────────────────────────────────────────────────────────────────

type Resource = {
  id: number
  category: string
  title: string
  description: string
  tags: string[]
  free: boolean
  href?: string
  featured?: boolean
}

// ─── Data ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { label: "Diagnóstico", description: "Evalúa tu empresa", icon: ClipboardList, color: "bg-[#031d40]/10 text-[#031d40]" },
  { label: "Automatizaciones", description: "Listas para usar", icon: Zap, color: "bg-[#031d40]/10 text-[#031d40]" },
  { label: "Cursos", description: "Aprende paso a paso", icon: Video, color: "bg-[#031d40]/10 text-[#031d40]" },
  { label: "Herramientas", description: "Gratuitas y premium", icon: Wrench, color: "bg-[#031d40]/10 text-[#031d40]" },
  { label: "Prompts", description: "Plantillas listas", icon: Terminal, color: "bg-[#031d40]/10 text-[#031d40]" },
  { label: "Otros", description: "Más recursos útiles", icon: Lightbulb, color: "bg-[#031d40]/10 text-[#031d40]" },
]

const RESOURCES: Resource[] = [
  {
    id: 0,
    category: "Diagnóstico",
    title: "Diagnóstico Inicial de IA",
    description: "Formulario interactivo que analiza el estado actual de tu empresa en materia de IA: procesos, datos, equipo y tecnología. Obtén un informe personalizado con tu nivel de madurez y un plan de acción con los próximos pasos para acelerar tu transformación.",
    tags: ["#diagnostico", "#madurez-ia", "#estrategia", "#gratuito"],
    free: true,
    href: "/recursos/diagnostico-ia",
    featured: true,
  },
  {
    id: 1,
    category: "Automatizaciones",
    title: "Clasificación automática de correos con IA",
    description: "Automatiza la clasificación de emails entrantes según prioridad, departamento y acción requerida. Integra con Gmail o Outlook y conecta con tu CRM.",
    tags: ["#email", "#clasificación", "#automatización"],
    free: true,
  },
  {
    id: 2,
    category: "Cursos",
    title: "Cómo implementar un agente de IA en atención al cliente",
    description: "Guía paso a paso para desplegar un agente conversacional que gestione consultas frecuentes, escale incidencias y reduzca tiempos de respuesta.",
    tags: ["#agente", "#atencion-cliente", "#chatbot"],
    free: true,
  },
  {
    id: 3,
    category: "Herramientas",
    title: "Plantilla de evaluación de madurez en IA",
    description: "Cuestionario y matriz de evaluación para conocer en qué punto de adopción de IA se encuentra tu empresa y qué pasos dar a continuación.",
    tags: ["#madurez", "#evaluacion", "#estrategia"],
    free: true,
  },
  {
    id: 4,
    category: "Otros",
    title: "Pack de prompts para generar contenido de LinkedIn",
    description: "50 prompts optimizados para crear posts, artículos y carruseles de LinkedIn orientados a empresas B2B que quieren posicionarse como referentes.",
    tags: ["#linkedin", "#contenido", "#b2b"],
    free: true,
  },
  {
    id: 5,
    category: "Otros",
    title: "Automatiza la generación de informes semanales",
    description: "Conecta tus fuentes de datos con un flujo n8n para generar y enviar informes de negocio automáticamente cada semana sin intervención manual.",
    tags: ["#informes", "#n8n", "#datos"],
    free: true,
  },
  {
    id: 6,
    category: "Otros",
    title: "Prompts para cualificar leads con IA generativa",
    description: "Conjunto de prompts para analizar conversaciones, perfilar leads y priorizar oportunidades comerciales usando ChatGPT o Claude.",
    tags: ["#leads", "#ventas", "#crm"],
    free: true,
  },
  {
    id: 7,
    category: "Prompts",
    title: "Plantillas de prompts para análisis de documentos",
    description: "Extrae información clave de contratos, facturas y presupuestos con estas plantillas de prompts listas para usar en cualquier LLM.",
    tags: ["#documentos", "#extraccion", "#prompts"],
    free: true,
  },
  {
    id: 8,
    category: "Otros",
    title: "Checklist de automatización de procesos con IA",
    description: "Lista de verificación completa para auditar, priorizar e implementar automatizaciones con IA en empresas medianas y grandes.",
    tags: ["#checklist", "#procesos", "#implementacion"],
    free: false,
  },
  {
    id: 9,
    category: "Otros",
    title: "Prompts para screening de candidatos con IA",
    description: "Reduce el tiempo de selección con prompts que analizan CVs, generan preguntas de entrevista y evalúan competencias automáticamente.",
    tags: ["#rrhh", "#seleccion", "#ia"],
    free: true,
  },
  {
    id: 10,
    category: "Otros",
    title: "Caso real: IA en gestión de inventario retail",
    description: "Análisis detallado de cómo una empresa retail redujo el exceso de stock un 34% utilizando modelos predictivos y automatización de pedidos.",
    tags: ["#retail", "#inventario", "#prediccion"],
    free: true,
  },
  {
    id: 11,
    category: "Cursos",
    title: "Guía de Cumplimiento con el Reglamento IA Europeo",
    description: "Todo lo que necesitas saber para adaptar tu empresa a la normativa europea de IA: clasificación de riesgos, documentación requerida y plazos.",
    tags: ["#ria", "#cumplimiento", "#regulacion"],
    free: true,
  },
  {
    id: 12,
    category: "Automatizaciones",
    title: "Automatiza respuestas a reseñas de Google",
    description: "Plantilla Make lista para responder reseñas de 4-5 estrellas automáticamente y recibir alertas por email ante valoraciones negativas.",
    tags: ["#google", "#reseñas", "#reputacion"],
    free: true,
  },
]

// ─── UnderlinedText Component ─────────────────────────────────────────────────

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

// ─── Component ────────────────────────────────────────────────────────────────

export default function RecursosPage() {
  const [search, setSearch] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const uniqueCategories = Array.from(new Set(RESOURCES.map((r) => r.category)))

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
    // Si seleccionas una categoría en sidebar, deselecciona el hero
    setActiveCategory(null)
  }

  const filteredResources = useMemo(() => {
    return RESOURCES.filter((r) => {
      const matchesSearch =
        search === "" ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(r.category)

      const matchesActive = activeCategory === null || r.category === activeCategory

      return matchesSearch && matchesCategory && matchesActive
    })
  }, [search, selectedCategories, activeCategory])

  const handleCategoryClick = (label: string) => {
    setActiveCategory((prev) => (prev === label ? null : label))
    setSelectedCategories([])
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* ── Hero + Category grid ── */}
        <section className="relative pt-32 pb-16 text-center px-4 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
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
          {/* Yellow blobs */}
          <div className="absolute top-10 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/25 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#bbbd26]/15 rounded-full blur-[60px] md:blur-[100px]" />
          {/* Blue blobs */}
          <div className="absolute top-10 right-10 w-[220px] h-[220px] md:w-[450px] md:h-[450px] bg-[#031d40]/12 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-10 left-20 w-[200px] h-[200px] md:w-[420px] md:h-[420px] bg-[#031d40]/14 rounded-full blur-[70px] md:blur-[110px]" />
          {/* Gray blobs */}
          <div className="absolute top-1/3 left-20 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-gray-400/15 rounded-full blur-[50px] md:blur-[80px]" />

          <div className="relative space-y-12">
            {/* Title section */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#031d40] mb-4 text-balance">
                <UnderlinedText>
                  <span className="text-[#031d40]">Recursos para tu Empresa</span>
                </UnderlinedText>
              </h1>
              <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Descubre automatizaciones, guías y herramientas gratuitas para
                optimizar tu negocio con inteligencia artificial.
              </p>
            </div>

            {/* Category grid */}
            <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-4 sm:gap-y-5">
              {CATEGORIES.map(({ label, description, icon: Icon, color }) => (
                <button
                  key={label}
                  onClick={() => handleCategoryClick(label)}
                  className={`flex items-center gap-2 sm:gap-3 text-left group transition-opacity min-w-0 ${
                    activeCategory !== null && activeCategory !== label
                      ? "opacity-40"
                      : "opacity-100"
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${color} transition-transform group-hover:scale-110`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-[#031d40] text-xs sm:text-sm leading-tight truncate">{label}</p>
                    <p className="text-xs text-gray-400 truncate hidden sm:block">{description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Main content: sidebar + cards ── */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="hidden md:block md:w-64 flex-shrink-0 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Buscar recurso"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 rounded-full border-gray-200 bg-white focus-visible:ring-[#bbbd26]"
                />
              </div>

              {/* Categories */}
              <div>
                <p className="font-bold text-[#031d40] mb-3">Categorías</p>
                <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                  {uniqueCategories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <Checkbox
                        checked={selectedCategories.includes(cat)}
                        onCheckedChange={() => toggleCategory(cat)}
                        className="border-gray-300 data-[state=checked]:bg-[#031d40] data-[state=checked]:border-[#031d40]"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-[#031d40] transition-colors">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Cards grid */}
            <div className="flex-1">
              {filteredResources.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  No se encontraron recursos con esos filtros.
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-5">
                  {filteredResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

// ─── Resource Card ────────────────────────────────────────────────────────────

function ResourceCard({ resource }: { resource: Resource }) {
  const isFeatured = resource.featured === true
  const isAvailable = !!resource.href

  return (
    <div
      className={`relative rounded-2xl p-5 flex flex-col gap-3 shadow-sm transition-shadow ${
        isFeatured
          ? "bg-[#031d40] border border-[#031d40] col-span-full sm:col-span-2 hover:shadow-md"
          : isAvailable
          ? "bg-white border border-gray-100 hover:shadow-md"
          : "bg-gray-50 border border-gray-200 opacity-75"
      }`}
    >
      {/* Featured label */}
      {isFeatured && (
        <div className="absolute -top-3 left-5">
          <span className="bg-[#bbbd26] text-[#031d40] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            Destacado
          </span>
        </div>
      )}

      {/* Próximamente label */}
      {!isAvailable && (
        <div className="absolute -top-3 left-5">
          <span className="bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Próximamente
          </span>
        </div>
      )}

      {/* Top badges row */}
      <div className="flex items-center justify-between mt-1">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isFeatured
              ? "bg-white/20 text-white"
              : isAvailable
              ? "bg-[#031d40] text-white"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          {resource.category}
        </span>
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${
            !isAvailable
              ? "bg-gray-200 text-gray-400"
              : resource.free
              ? "bg-[#bbbd26] text-[#031d40]"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {resource.free ? "Gratuito" : "Premium"}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-bold text-lg leading-snug ${
          isFeatured ? "text-white" : isAvailable ? "text-[#031d40]" : "text-gray-400"
        }`}
      >
        {resource.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed flex-1 ${
          isFeatured ? "text-white/70" : isAvailable ? "text-gray-500" : "text-gray-400"
        }`}
      >
        {resource.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {resource.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2 py-0.5 rounded-full ${
              isFeatured
                ? "bg-white/15 text-white/80"
                : isAvailable
                ? "bg-gray-100 text-gray-500"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      {isAvailable ? (
        <Link href={resource.href!}>
          <Button
            className={`w-full rounded-xl gap-2 mt-1 ${
              isFeatured
                ? "bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-bold"
                : "bg-[#031d40] hover:bg-[#031d40]/90 text-white"
            }`}
          >
            Ver Recurso
            <ExternalLink className="w-4 h-4" />
          </Button>
        </Link>
      ) : (
        <Button
          disabled
          className="w-full bg-gray-200 text-gray-400 rounded-xl gap-2 mt-1 cursor-not-allowed hover:bg-gray-200"
        >
          No disponible actualmente
        </Button>
      )}
    </div>
  )
}
