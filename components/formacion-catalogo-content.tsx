"use client"

import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import { marked } from "marked"
import { Navigation } from "@/components/navigation"
import { UnderlinedText } from "@/components/underlined-text"
import { BadgeCheck, Search, ArrowRight, X, Clock, CheckCircle2, Star, Trash2, SlidersHorizontal } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { formacionCatalogoTranslations } from "@/lib/i18n/pages/formacion-catalogo"
import type { SBFormacion, SBTrainingRef } from "@/lib/storyblok.types"
import Link from "next/link"

// Colores de card por categorySlug — ajusta los slugs si difieren en Storyblok
const CATEGORY_CARD_GRADIENT: Record<string, string> = {
  fundamentos: "from-blue-100 to-indigo-100",
  claude: "from-rose-100 to-pink-100",
  herramientas: "from-emerald-100 to-teal-100",
  a_medida: "from-purple-100 to-violet-100",
}

const CATEGORY_TAG_STYLE: Record<string, string> = {
  fundamentos: "bg-blue-50 text-blue-700 border-blue-200",
  claude: "bg-rose-50 text-rose-700 border-rose-200",
  herramientas: "bg-emerald-50 text-emerald-700 border-emerald-200",
  a_medida: "bg-purple-50 text-purple-700 border-purple-200",
}

interface Props {
  formaciones: SBFormacion[] | null
  categories: SBTrainingRef[] | null
  levels: SBTrainingRef[] | null
}

export function FormacionCatalogoContent({ formaciones, categories, levels }: Props) {
  const { locale } = useTranslation()
  const t = formacionCatalogoTranslations[locale]

  const [selected, setSelected] = useState<SBFormacion | null>(null)
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [durationFilter, setDurationFilter] = useState("all")
  const [levelFilter, setLevelFilter] = useState("all")

  const [showFilters, setShowFilters] = useState(false)
  const hasActiveFilters =
  search.trim() !== "" ||
  categoryFilter !== "all" ||
  durationFilter !== "all" ||
  levelFilter !== "all"

  const clearFilters = () => {
    setSearch("")
    setCategoryFilter("all")
    setDurationFilter("all")
    setLevelFilter("all")
  }

  const data = useMemo(() => formaciones ?? [], [formaciones])
  const allCategories = categories ?? []
  const allLevels = levels ?? []

  const durations = useMemo(() => {
    const set = new Set<string>()

    data.forEach((f) => {
      if (!f.isManual) {
        set.add(f.durationLabel)
      }
    })

    return Array.from(set).sort()
  }, [data])

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return data.filter((f) => {
      const matchSearch =
        !q ||
        f.title.toLowerCase().includes(q) ||
        f.subtitle.toLowerCase().includes(q) ||
        f.shortDescription.toLowerCase().includes(q)
      const matchCategory = categoryFilter === "all" || f.categorySlug === categoryFilter
      const matchDuration = durationFilter === "all" || f.durationLabel === durationFilter
      const matchLevel = levelFilter === "all" || f.levelSlug === levelFilter
      return matchSearch && matchCategory && matchDuration && matchLevel
    })
  }, [data, search, categoryFilter, durationFilter, levelFilter])

  const totalHours = useMemo(
    () =>
      filtered.reduce((sum, f) => {
        const h = parseInt(f.durationLabel.replace(/\D/g, "")) || 0
        return sum + h
      }, 0),
    [filtered]
  )

  const globalHours = useMemo(
    () =>
      data.reduce((sum, f) => {
        const h = parseInt(f.durationLabel.replace(/\D/g, "")) || 0
        return sum + h
      }, 0),
    [data]
  )

  const kpis = [
    { value: String(data.length), label: t.kpis.formaciones },
    { value: `${globalHours}h`, label: t.kpis.horasTotales },
    { value: "100%", label: t.kpis.subvencionable },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-8 sm:pt-32 sm:pb-10 md:pt-40 md:pb-14 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/25 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-3 bg-[#bbbd26]/10 border border-[#bbbd26]/30 rounded-2xl px-6 py-3">
                <BadgeCheck className="w-5 h-5 text-[#031d40] flex-shrink-0" />
                <span className="text-[#031d40] font-semibold text-sm sm:text-base">
                  {t.hero.badge}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.05] tracking-tight">
                <span className="text-[#031d40]">{t.hero.titlePrefix}</span>
                <UnderlinedText>
                  <span className="text-[#031d40]">{t.hero.titleHighlight}</span>
                </UnderlinedText>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
                {t.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* KPIs */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {kpis.map((kpi, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center py-5 px-8 text-center bg-gray-50 border border-gray-200 rounded-2xl min-w-[160px]"
                >
                  <span className="text-3xl sm:text-4xl font-bold text-[#031d40]">{kpi.value}</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mt-1">
                    {kpi.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
      {selected && (
        <FormacionModal formacion={selected} onClose={() => setSelected(null)} t={t} />
      )}

      {/* Filters + Grid */}
        <section className="py-8 sm:py-12 bg-gray-50 min-h-[50vh]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Filter panel */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t.filters.searchPlaceholder}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#bbbd26]/40 focus:border-[#bbbd26]"
                    />
                  </div>

                  {/* Toggle filters */}
                  <button
                    onClick={() => setShowFilters((v) => !v)}
                    className={`px-5 py-3 rounded-xl text-sm font-bold border transition-colors ${
                      showFilters || hasActiveFilters
                        ? "bg-[#031d40] text-white border-[#031d40]"
                        : "bg-white text-[#031d40] border-gray-200 hover:border-[#031d40]"
                    }`}
                  >
                      <SlidersHorizontal className="w-5 h-5" />
                  </button>

                  {/* Clear filters */}
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="px-5 py-3 rounded-xl text-sm font-bold border border-gray-200 text-gray-500 hover:text-[#031d40] hover:border-[#031d40] transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {showFilters && (
                  <div className="mt-5 pt-5 border-t border-gray-100 space-y-5">
                    {/* Area */}
                    <CompactFilterGroup label={t.filters.areaLabel}>
                      <FilterChip
                        label={`${t.filters.allAreas}`}
                        active={categoryFilter === "all"}
                        onClick={() => setCategoryFilter("all")}
                      />
                      {allCategories.map((cat) => (
                        <FilterChip
                          key={cat.slug}
                          label={`${cat.name}`}
                          active={categoryFilter === cat.slug}
                          onClick={() => setCategoryFilter(cat.slug)}
                        />
                      ))}
                    </CompactFilterGroup>

                    {/* Duration */}
                    <CompactFilterGroup label={t.filters.durationLabel}>
                      <FilterChip
                        label={t.filters.allDurations}
                        active={durationFilter === "all"}
                        onClick={() => setDurationFilter("all")}
                      />
                      {durations.map((dur) => (
                        <FilterChip
                          key={dur}
                          label={dur}
                          active={durationFilter === dur}
                          onClick={() => setDurationFilter(dur)}
                        />
                      ))}
                    </CompactFilterGroup>

                    {/* Level */}
                    <CompactFilterGroup label={t.filters.levelLabel}>
                      <FilterChip
                        label={t.filters.allLevels}
                        active={levelFilter === "all"}
                        onClick={() => setLevelFilter("all")}
                      />
                      {allLevels.map((lvl) => (
                        <FilterChip
                          key={lvl.slug}
                          label={lvl.name}
                          active={levelFilter === lvl.slug}
                          onClick={() => setLevelFilter(lvl.slug)}
                        />
                      ))}
                    </CompactFilterGroup>
                  </div>
                )}
              </div>

              {/* Results count */}
              <p className="text-sm text-gray-500 mb-6">
                {t.results(filtered.length, totalHours)}
              </p>

              {/* Cards */}
              {filtered.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  {t.empty}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((f) => (
                    <FormacionCard
                      key={f.slug}
                      formacion={f}
                      viewLabel={t.viewFormacion}
                      t={t}
                      onOpen={() => setSelected(f)}
                    />
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

function CompactFilterGroup({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-[90px_1fr] sm:items-start">
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pt-2">
        {label}
      </span>

      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  )
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
        active
          ? "bg-[#031d40] text-white"
          : "border border-gray-300 text-gray-600 hover:border-[#031d40] hover:text-[#031d40]"
      }`}
    >
      {label}
    </button>
  )
}

function FormacionModal({
  formacion,
  onClose,
  t,
}: {
  formacion: SBFormacion
  onClose: () => void
  t: (typeof formacionCatalogoTranslations)["es"]
}) {
  const isManual = formacion.isManual === true
  
  const tagStyle =
    CATEGORY_TAG_STYLE[formacion.categorySlug] ??
    "bg-gray-100 text-gray-700 border-gray-200"

  const bodyHtml = formacion.body ? (marked(formacion.body) as string) : null

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  if (isManual) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#031d40]/55 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <div className="relative bg-[#031d40] text-white rounded-[28px] shadow-2xl w-full max-w-[560px] max-h-[92vh] overflow-y-auto border border-white/10">
          {/* Background shapes */}
          <div className="absolute -top-20 right-0 w-52 h-52 rounded-full bg-[#bbbd26]/10" />
          <div className="absolute top-32 -left-16 w-40 h-40 rounded-full bg-[#bbbd26]/10" />

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-xl bg-white/95 hover:bg-gray-100 shadow-sm transition-colors"
          >
            <X className="w-4 h-4 text-[#031d40]" />
          </button>

          {/* Header */}
          <div className="relative z-10 px-7 sm:px-8 pt-12 pb-8">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#c8d800] shadow-[0_0_28px_rgba(200,216,0,0.55)] flex items-center justify-center">
                <Star className="w-7 h-7 text-[#031d40] fill-[#031d40]" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#c8d800]/50 bg-[#c8d800]/10 text-[#c8d800]">
                {formacion.categoryName}
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-white leading-tight">
              {formacion.title}
            </h2>

            <p className="text-sm text-white/60 italic mt-1">
              {formacion.subtitle}
            </p>
          </div>

          {/* Content */}
          <div className="relative z-10 px-7 sm:px-8 pb-7 space-y-6">
            <p className="text-[15px] text-white/75 leading-relaxed">
              {formacion.shortDescription}
            </p>

            {/* Topics */}
            {formacion.topics && formacion.topics.length > 0 && (
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/35 mb-3">
                  {t.modal.contents}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                  {formacion.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/75">
                      <span className="w-5 h-5 rounded-md bg-[#c8d800]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c8d800]" />
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FUNDAE badge */}
            {formacion.fundable && (
              <div className="flex gap-3 bg-[#c8d800]/10 border border-[#c8d800]/40 rounded-xl p-4">
                <Star className="w-4.5 h-4.5 text-[#c8d800] fill-[#c8d800] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-extrabold text-[#c8d800] text-sm leading-tight">
                    {t.modal.fundable.title}
                  </p>
                  <p className="text-xs text-white/65 mt-1 leading-relaxed">
                    {t.modal.fundable.text}
                  </p>
                </div>
              </div>
            )}

            {/* Flexible duration */}
            <div className="border-t border-white/15 pt-4 flex items-center justify-between">
              <span className="text-[#c8d800] font-extrabold text-sm">
                Duración flexible
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#031d40] bg-[#c8d800] px-3.5 py-1.5 rounded-full whitespace-nowrap">
                <Clock className="w-3.5 h-3.5" />
                {formacion.durationLabel}
              </span>
            </div>

            <Link
              href="/contacto"
              className="flex items-center justify-center gap-2 w-full bg-[#c8d800] hover:bg-[#b7c600] text-[#031d40] font-extrabold py-4 rounded-xl transition-colors text-sm"
            >
              {t.modal.requestTraining}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#031d40]/45 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative bg-white rounded-[28px] shadow-2xl w-full max-w-[560px] max-h-[92vh] overflow-y-auto border border-white/70">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-xl bg-white/95 hover:bg-gray-100 shadow-sm transition-colors"
        >
          <X className="w-4 h-4 text-[#031d40]" />
        </button>

        {/* Header */}
        <div className="relative bg-[#eaf2ff] px-7 sm:px-8 pt-10 pb-9 rounded-t-[28px] overflow-hidden">
          <div className="absolute -top-12 -right-10 w-36 h-36 rounded-full bg-[#d4e3fb]" />

          <div className="relative flex items-start gap-5">
            <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center overflow-hidden flex-shrink-0">
              {formacion.logo ? (
                <Image
                  src={formacion.logo}
                  alt={formacion.title}
                  width={56}
                  height={56}
                  className="object-contain p-2"
                />
              ) : (
                <span className="text-blue-600 font-extrabold text-lg">
                  {formacion.initials ?? formacion.title.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>

            <div className="min-w-0 pt-0.5">
              <div className="flex flex-wrap gap-2 mb-2">
                <span
                  className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${tagStyle}`}
                >
                  {formacion.categoryName}
                </span>

                <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
                  {formacion.levelName}
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-[#031d40] leading-tight">
                {formacion.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-7 sm:px-8 py-7 space-y-6">
          {/* Subtitle + duration */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <p className="text-sm italic text-[#50658b] leading-relaxed">
              {formacion.subtitle}
            </p>

            <span className="inline-flex items-center gap-1.5 self-start text-xs font-extrabold text-[#031d40] bg-[#f6f8d7] border border-[#d5d961] px-3.5 py-1.5 rounded-full whitespace-nowrap">
              <Clock className="w-3.5 h-3.5" />
              {formacion.durationLabel}
            </span>
          </div>

          {/* Short description */}
          <p className="text-[15px] text-[#415985] leading-relaxed">
            {formacion.shortDescription}
          </p>

          {/* Topics */}
          {formacion.topics && formacion.topics.length > 0 && (
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#8b9abc] mb-3">
                {t.modal.contents}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                {formacion.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#415985]">
                    <span className="w-5 h-5 rounded-md bg-[#f2f5d0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#031d40]" />
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FUNDAE badge */}
          {formacion.fundable && (
            <div className="flex gap-3 bg-[#f6f8d7] border border-[#d5d961] rounded-xl p-4">
              <Star className="w-4.5 h-4.5 text-[#bbbd26] fill-[#bbbd26] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-[#031d40] text-sm leading-tight">
                  {t.modal.fundable.title}
                </p>
                <p className="text-xs text-[#415985] mt-1 leading-relaxed">
                  {t.modal.fundable.text}
                </p>
              </div>
            </div>
          )}

          {/* Body markdown */}
          {/* {bodyHtml && (
            <div
              className="prose prose-sm max-w-none text-[#415985] prose-headings:text-[#031d40] prose-a:text-[#bbbd26] pt-1"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          )} */}

          <Link
            href="/contacto"
            className="flex items-center justify-center gap-2 w-full bg-[#c8d800] hover:bg-[#b7c600] text-[#031d40] font-extrabold py-4 rounded-xl transition-colors text-sm"
          >
            {t.modal.requestTraining}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function FormacionCard({
  formacion,
  viewLabel,
  t,
  onOpen,
}: {
  formacion: SBFormacion
  viewLabel: string
  t: (typeof formacionCatalogoTranslations)["es"]
  onOpen: () => void
}) {
  const isManual = formacion.isManual === true

  const gradient =
    CATEGORY_CARD_GRADIENT[formacion.categorySlug] ?? "from-gray-100 to-slate-100"

  const tagStyle =
    CATEGORY_TAG_STYLE[formacion.categorySlug] ?? "bg-gray-100 text-gray-700 border-gray-200"

  if (isManual) {
    return (
      <div className="relative bg-[#031d40] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col min-h-[420px] text-white">
        {/* Background shapes */}
        <div className="absolute -top-16 right-0 w-44 h-44 rounded-full bg-[#bbbd26]/10" />
        <div className="absolute top-28 -left-14 w-36 h-36 rounded-full bg-[#bbbd26]/10" />

        {/* Duration badge */}
        <div className="absolute top-4 right-4 z-10 bg-[#c8d800] text-[#031d40] text-xs font-extrabold px-4 py-2 rounded-full">
          {formacion.durationLabel}
        </div>

        {/* Icon */}
        <div className="relative z-10 h-40 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-[#c8d800] shadow-[0_0_28px_rgba(200,216,0,0.55)] flex items-center justify-center">
            <Star className="w-7 h-7 text-[#031d40] fill-[#031d40]" />
          </div>
        </div>

        <div className="relative z-10 p-5 flex flex-col flex-1 gap-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#c8d800]/50 bg-[#c8d800]/10 text-[#c8d800]">
              {formacion.categoryName}
            </span>
          </div>

          {/* Title + subtitle */}
          <div>
            <h3 className="font-bold text-white text-lg leading-tight">
              {formacion.title}
            </h3>
            <p className="text-sm text-white/60 italic mt-0.5">
              {formacion.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-white/75 leading-relaxed flex-1">
            {formacion.shortDescription}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-white/15 mt-auto">
            <span className="text-[#c8d800] font-extrabold text-sm">
            {t.custom_training.duration}
            </span>

            <button
              onClick={onOpen}
              className="flex items-center gap-1.5 text-white/40 hover:text-[#c8d800] font-semibold text-sm transition-colors"
            >
            {t.custom_training.consult}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col">
      {/* Image area */}
      <div
        className={`relative h-40 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        <div className="absolute top-4 right-8 w-16 h-16 bg-white/30 rounded-full blur-md" />
        <div className="absolute bottom-4 left-8 w-20 h-20 bg-white/20 rounded-full blur-lg" />

        {/* Duration badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#031d40] text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
          {formacion.durationLabel}
        </div>

        {/* Logo or initials */}
        <div className="relative w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center overflow-hidden">
          {formacion.logo ? (
            <Image
              src={formacion.logo}
              alt={formacion.title}
              fill
              className="object-contain p-2"
            />
          ) : (
            <span className="text-[#031d40] font-bold text-xl">
              {formacion.initials ?? formacion.title.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${tagStyle}`}
          >
            {formacion.categoryName}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600">
            {formacion.levelName}
          </span>
        </div>

        {/* Title + subtitle */}
        <div>
          <h3 className="font-bold text-[#031d40] text-lg leading-tight">
            {formacion.title}
          </h3>
          <p className="text-sm text-gray-500 italic mt-0.5">
            {formacion.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          {formacion.shortDescription}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <button
            onClick={onOpen}
            className="flex items-center gap-1.5 text-[#031d40] hover:text-[#bbbd26] font-semibold text-sm transition-colors"
          >
            {viewLabel}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
