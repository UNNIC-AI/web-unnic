import 'server-only'
import { apiPlugin, storyblokInit, getStoryblokApi } from '@storyblok/react/rsc'
import { cookies } from 'next/headers'

import type {
  SBTeamMember,
  SBCaseStudy,
  SBCompanyLogo,
  SBTechPartner,
  SBBlogPost,
  SBAsset,
  SBKpi,
} from './storyblok.types'

// ─── Init SAFE (runtime) ──────────────────────────────────────────────

let initialized = false

function initStoryblok() {
  if (initialized) return
  

  if (!process.env.STORYBLOK_API_TOKEN) {
    console.error('❌ STORYBLOK_API_TOKEN is undefined')
    return
  }

  storyblokInit({
    accessToken: process.env.STORYBLOK_API_TOKEN,
    use: [apiPlugin],
  })

  initialized = true
}

function getApi() {
  initStoryblok()
  return getStoryblokApi()
}

const version =
  process.env.VERCEL_ENV === 'production' ? 'published' : 'draft'

// ─── Locale ───────────────────────────────────────────────────────────

async function getLocale(): Promise<string> {
  try {
    const cookieStore = await cookies()
    return cookieStore.get('unnic-locale')?.value || 'es'
  } catch {
    return 'es'
  }
}

// ─── Generic Types ────────────────────────────────────────────────────

type SBStory<T> = {
  uuid: string
  slug: string
  content: T
}

type SBResponse<T> = {
  story: {
    content: T
  }
  rels?: SBStory<any>[]
}

// ─── Internal Types ───────────────────────────────────────────────────

type SBBlogPostContent = {
  title: string
  excerpt: string
  cover_image: SBAsset
  body?: any
  category: string
  author: string
  author_image?: SBAsset
  author_position?: string
  author_url?: { cached_url?: string; url?: string; linktype?: string }
  date: string
  read_time: number
  featured?: boolean
  seo_keywords?: string
}

type SBMetricContent = {
  value: string
  description: string
}

type SBCaseStudyContent = {
  client?: string
  title: string
  sector: string
  year: string
  service: string
  challenge: string
  solution: string
  cover_image: SBAsset
  logo?: SBAsset
  results?: string[]
  context_client?: string
}

type SBTeamSection = {
  component: 'team_section'
  members: Array<{ content: SBTeamMember }>
}

type SBCompanySection = {
  component: 'companies_list'
  company: Array<{ content: SBCompanyLogo }>
}

type SBBlogListSection = {
  component: 'blog_list'
  blog: Array<SBStory<SBBlogPostContent>>
}

type SBCaseStudySection = {
  component: 'case_study_list'
  cases: Array<SBStory<SBCaseStudyContent>>
}

type SBTechSection = {
  component: 'technologies_list'
  technology: Array<{ content: SBTechPartner }>
}

type SBFormacionKpiItem = {
  component: 'formacion_kpi'
  value: string
  label: string
}

type SBListFormacionKpi = {
  component: 'list_formacion_kpi'
  kpi: Array<{ content: SBFormacionKpiItem }>
}

type SBFormacionItemContent = {
  title: string
  subtitle: string
  category: string | string[]  // UUID — Storyblok puede devolver string o array
  level: string | string[]
  duration_label: string
  short_description: string
  topics?: string | string[]
  fundable?: boolean
  fundable_title?: string
  fundable_text?: string
  cta_label?: string
  cta_url?: string
  body?: string
  logo?: SBAsset
  initials?: string
  order?: number
}

// TODO: ajusta el nombre del componente si en Storyblok no es 'formaciones_list'
type SBFormacionesListSection = {
  component: 'formaciones_list'
  // TODO: ajusta 'formaciones' al nombre real del campo de relaciones en Storyblok
  formaciones: Array<SBStory<SBFormacionItemContent>>
}

type SBPageContent = {
  body: Array<
    SBTeamSection | SBCompanySection | SBCaseStudySection | SBTechSection | SBBlogListSection | SBListFormacionKpi | SBFormacionesListSection | { component: string }
  >
}

// ─── Helpers ──────────────────────────────────────────────────────────

function getInitials(name?: string) {
  if (!name) return ''
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

async function fetchMetrics(uuids: string[]) {
  if (!uuids.length) return []

  const api = getApi()
  const locale = await getLocale()

  const { data } = await api.get('cdn/stories', {
    version,
    language: locale,
    fallback_lang: 'es',
    by_uuids: uuids.join(','),
    per_page: 100,
  })

  const stories = (data.stories ?? []) as SBStory<SBMetricContent>[]

  return stories.map((s) => ({
    uuid: s.uuid,
    metric: s.content.value,
    description: s.content.description,
  }))
}

// ─── Team ─────────────────────────────────────────────────────────────

export async function fetchTeamSection(
  slug: string
): Promise<SBTeamMember[] | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get(`cdn/stories/${slug}`, {
      version,
      language: locale,
      fallback_lang: 'es',
      resolve_relations: 'team_section.members',
    })

    const body = (data.story.content as SBPageContent).body || []

    const section = body.find(
      (b): b is SBTeamSection => b.component === 'team_section'
    )

    return section?.members?.map((m) => m.content) || null
  } catch (e) {
    console.error('fetchTeamSection error', e)
    return null
  }
}

// ─── Tech Partners ────────────────────────────────────────────────────

export async function fetchTechPartners(
  slug: string
): Promise<SBTechPartner[] | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get(`cdn/stories/${slug}`, {
      version,
      language: locale,
      fallback_lang: 'es',
      resolve_relations: 'technologies_list.technology',
    })

    const body = (data.story.content as SBPageContent).body || []

    const section = body.find(
      (b): b is SBTechSection => b.component === 'technologies_list'
    )

    return section?.technology?.map((t) => t.content) || null
  } catch (e) {
    console.error('fetchTechPartners error', e)
    return null
  }
}

// ─── Company Logos ────────────────────────────────────────────────────

export async function fetchCompanyLogos(
  slug: string
): Promise<SBCompanyLogo[] | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get(`cdn/stories/${slug}`, {
      version,
      language: locale,
      fallback_lang: 'es',
      resolve_relations: 'companies_list.company',
    })

    const body = (data.story.content as SBPageContent).body || []

    const section = body.find(
      (b): b is SBCompanySection => b.component === 'companies_list'
    )

    return section?.company?.map((c) => c.content) || null
  } catch (e) {
    console.error('fetchCompanyLogos error', e)
    return null
  }
}

// ─── Case Study Detail ────────────────────────────────────────────────

export async function fetchCaseStudyBySlug(
  slug: string
): Promise<SBCaseStudy | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get(
      `cdn/stories/casos-de-exito/${slug}`,
      {
        version,
        language: locale,
        fallback_lang: 'es',
      }
    )

    const c = data.story.content as SBCaseStudyContent

    const metrics = await fetchMetrics(c.results || [])
    const metricMap = new Map(metrics.map((m) => [m.uuid, m]))
    const results = (c.results || [])
      .map((uuid) => {
        const m = metricMap.get(uuid)
        return m ? { metric: m.metric, description: m.description } : null
      })
      .filter(Boolean) as SBCaseStudy['results']

    return {
      id: slug,
      company: c.client || '',
      logo: getInitials(c.client),
      logoUrl: c.logo?.filename,
      logoGradient: 'from-[#031d40] to-[#031d40]/70',
      industry: c.sector,
      year: c.year,
      service: c.service,
      challenge: c.challenge,
      solution: c.solution,
      image: c.cover_image?.filename || '',
      shortTitle: c.title,
      contextClient: c.context_client,
      results,
    }
  } catch (e) {
    console.error('fetchCaseStudyBySlug error', e)
    return null
  }
}

// ─── Portfolio ────────────────────────────────────────────────────────

export async function fetchPortfolioCases(): Promise<SBCaseStudy[] | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get('cdn/stories/portfolio', {
      version,
      language: locale,
      fallback_lang: 'es',
      resolve_relations: 'case_study_list.cases',
    })

    const body = (data.story.content as SBPageContent).body || []
    const section = body.find(
      (b): b is SBCaseStudySection => b.component === 'case_study_list'
    )
    const cases = section?.cases ?? []

    if (!cases.length) return null

    const allMetricIds = [
      ...new Set(cases.flatMap((r) => r.content.results || [])),
    ]

    const metrics = await fetchMetrics(allMetricIds)
    const metricMap = new Map(metrics.map((m) => [m.uuid, m]))

    return cases.map((rel) => {
      const c = rel.content

      return {
        id: rel.slug,
        company: c.client || '',
        logo: getInitials(c.client),
        logoUrl: c.logo?.filename,
        logoGradient: 'from-[#031d40] to-[#031d40]/70',
        industry: c.sector,
        year: c.year,
        service: c.service,
        challenge: c.challenge,
        solution: c.solution,
        image: c.cover_image?.filename || '',
        shortTitle: c.title,
        contextClient: c.context_client,
        results: (c.results || [])
          .map((uuid) => {
            const m = metricMap.get(uuid)
            return m ? { metric: m.metric, description: m.description } : null
          })
          .filter(Boolean) as SBCaseStudy['results'],
      }
    })
  } catch (e) {
    console.error('fetchPortfolioCases error', e)
    return null
  }
}

// ─── Formacion KPIs ───────────────────────────────────────────────────

export async function fetchFormacionKPIs(): Promise<SBKpi[] | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get('cdn/stories/kpi-global/kpis', {
      version,
      language: locale,
      fallback_lang: 'es',
      resolve_relations: 'list_formacion_kpi.kpi',
    })

    const body = (data.story.content as SBPageContent).body || []
    const section = body.find(
      (b): b is SBListFormacionKpi => b.component === 'list_formacion_kpi'
    )

    if (!section?.kpi?.length) return null

    return section.kpi.map((item) => ({
      value: item.content.value,
      label: item.content.label,
    }))
  } catch (e) {
    console.error('fetchFormacionKPIs error', e)
    return null
  }
}

// ─── Blog ─────────────────────────────────────────────────────────────

function normalizeStoryblokLink(link?: { cached_url?: string; url?: string; linktype?: string }) {
  const rawUrl = link?.url || link?.cached_url

  if (!rawUrl) return undefined
  if (rawUrl.startsWith("http")) return rawUrl
  if (rawUrl.startsWith("/")) return rawUrl

  return `https://${rawUrl}`
}

function mapBlogPost(
  story: SBStory<SBBlogPostContent>,
  includeBody = false
): SBBlogPost {
  const c = story.content
  return {
    slug: story.slug,
    title: c.title,
    excerpt: c.excerpt,
    coverImage: c.cover_image?.filename || '',
    coverImageAlt: c.cover_image?.alt,
    category: c.category,
    author: c.author,
    authorImage: c.author_image?.filename,
    author_position:c.author_position,
    author_url: normalizeStoryblokLink(c.author_url),
    date: c.date,
    readTime: c.read_time,
    featured: c.featured ?? false,
    seoKeywords: c.seo_keywords || undefined,
    body: includeBody ? c.body : undefined,
  }
}

export async function fetchBlogPosts(): Promise<SBBlogPost[] | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get('cdn/stories/blog_home', {
      version,
      language: locale,
      fallback_lang: 'es',
      resolve_relations: 'blog_list.blog',
    })

    const body = (data.story.content as SBPageContent).body || []
    const section = body.find(
      (b): b is SBBlogListSection => b.component === 'blog_list'
    )

    const posts = section?.blog ?? []

    if (!posts.length) return null

    return posts.map((s: SBStory<SBBlogPostContent>) => mapBlogPost(s))
  } catch (e) {
    console.error('fetchBlogPosts error', e)
    return null
  }
}

// ─── Formacion Catalog ────────────────────────────────────────────────

export async function fetchFormacionCategories(): Promise<import('./storyblok.types').SBTrainingRef[] | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get('cdn/stories', {
      version,
      language: locale,
      fallback_lang: 'es',
      content_type: 'training_category',
      per_page: 100,
    })

    const stories = (data.stories ?? []) as SBStory<{ name: string; slug: string }>[]
    return stories.map((s) => ({
      uuid: s.uuid,
      slug: s.content.slug ?? s.slug,
      name: s.content.name ?? '',
    }))
  } catch (e) {
    console.error('fetchFormacionCategories error', e)
    return null
  }
}

export async function fetchFormacionLevels(): Promise<import('./storyblok.types').SBTrainingRef[] | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get('cdn/stories', {
      version,
      language: locale,
      fallback_lang: 'es',
      content_type: 'training_level',
      per_page: 100,
    })

    const stories = (data.stories ?? []) as SBStory<{ name: string; slug: string }>[]
    return stories.map((s) => ({
      uuid: s.uuid,
      slug: s.content.slug ?? s.slug,
      name: s.content.name ?? '',
    }))
  } catch (e) {
    console.error('fetchFormacionLevels error', e)
    return null
  }
}

export async function fetchFormacionTopics(): Promise<import('./storyblok.types').SBTrainingRef[] | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get('cdn/stories', {
      version,
      language: locale,
      fallback_lang: 'es',
      content_type: 'training_topic',
      per_page: 100,
    })

    const stories = (data.stories ?? []) as SBStory<{ text: string; slug: string }>[]
    return stories.map((s) => ({
      uuid: s.uuid,
      slug: s.content.slug ?? s.slug,
      name: s.content.text ?? '',
    }))
  } catch (e) {
    console.error('fetchFormacionTopics error', e)
    return null
  }
}

export async function fetchFormacionCatalog(): Promise<import('./storyblok.types').SBFormacion[] | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    // Paso 1: obtener los UUIDs del page sin resolve_relations
    // (resolve_relations falla con idiomas distintos de 'es' si las stories no tienen traducción)
    // TODO: ajusta el slug al path real de la story en Storyblok (Content > ...)
    const { data: pageData } = await api.get('cdn/stories/training_catalog_page', {
      version,
      language: locale,
      fallback_lang: 'es',
    })

    const body = (pageData.story.content as SBPageContent).body || []
    const section = body.find(
      (b): b is SBFormacionesListSection => b.component === 'formaciones_list'
    )

    const uuids: string[] = (section?.formaciones as unknown as string[]) ?? []
    if (!uuids.length) return null

    // Paso 2: buscar las stories por UUID con language + fallback
    const { data: storiesData } = await api.get('cdn/stories', {
      version,
      language: locale,
      fallback_lang: 'es',
      by_uuids: uuids.join(','),
      per_page: 100,
    })

    const items = (storiesData.stories ?? []) as SBStory<SBFormacionItemContent>[]
    items.sort((a, b) => (a.content.order ?? 999) - (b.content.order ?? 999))

    const storyblokFormaciones =  items.map((item) => ({
      slug: item.slug,
      title: item.content.title,
      subtitle: item.content.subtitle,
      categorySlug: Array.isArray(item.content.category)
        ? (item.content.category[0] ?? '')
        : (item.content.category ?? ''),
      categoryName: '',
      levelSlug: Array.isArray(item.content.level)
        ? (item.content.level[0] ?? '')
        : (item.content.level ?? ''),
      levelName: '',
      durationLabel: item.content.duration_label,
      shortDescription: item.content.short_description,
      topics: Array.isArray(item.content.topics)
        ? item.content.topics
        : item.content.topics
          ? [item.content.topics]
          : undefined,
      fundable: item.content.fundable,
      fundableTitle: item.content.fundable_title,
      fundableText: item.content.fundable_text,
      ctaLabel: item.content.cta_label,
      ctaUrl: item.content.cta_url,
      body: item.content.body,
      logo: item.content.logo?.filename,
      initials: item.content.initials,
      order: item.content.order,
      isManual: false
    }))
    const manualCustomTraining = getManualCustomTraining(locale)

  return [...storyblokFormaciones, manualCustomTraining]

  } catch (e) {
    console.error('fetchFormacionCatalog error', e)
    return null
  }
}

export async function fetchBlogPost(slug: string): Promise<SBBlogPost | null> {
  try {
    const api = getApi()
    const locale = await getLocale()

    const { data } = await api.get(`cdn/stories/blog/${slug}`, {
      version,
      language: locale,
      fallback_lang: 'es',
    })

    return mapBlogPost(data.story as SBStory<SBBlogPostContent>, true)
  } catch (e) {
    console.error('fetchBlogPost error', e)
    return null
  }
}

function getManualCustomTraining(locale: string): import('./storyblok.types').SBFormacion {
  const labels = {
    es: {
      title: 'Formación a medida',
      subtitle: 'Diseñada según tus necesidades específicas',
      categoryName: 'A medida',
      levelName: '',
      durationLabel: 'A consultar',
      shortDescription:
        'Diseñamos contigo una formación completamente adaptada a los objetivos, herramientas y nivel de madurez de tu equipo. Analizamos vuestro contexto y construimos el programa ideal.',
      topics: [
        'Diagnóstico de necesidades y nivel',
        'Diseño curricular personalizado',
        'Formadores especializados en tu sector',
        'Seguimiento y evaluación de impacto',
      ],
    },
    en: {
      title: 'Custom Training',
      subtitle: 'Designed according to your specific needs',
      categoryName: 'Custom',
      levelName: '',
      durationLabel: 'To be consulted',
      shortDescription:
        "We work with you to design training fully tailored to your team's objectives, tools, and experience level. We analyze your context and build the ideal program.",
      topics: [
        'Needs and skill level assessment',
        'Personalized curriculum design',
        'Trainers specializing in your sector',
        'Monitoring and impact evaluation',
      ],
    },
    ca: {
      title: 'Formació a mida',
      subtitle: 'Dissenyada segons les teves necessitats específiques',
      categoryName: 'A mida',
      levelName: '',
      durationLabel: 'A consultar',
      shortDescription:
        'Dissenyem amb tu una formació completament adaptada als objectius, eines i nivell de maduresa del teu equip. Analitzem el vostre context i construïm el programa ideal.',
      topics: [
        'Diagnòstic de necessitats i nivell',
        'Disseny curricular personalitzat',
        'Formadors especialitzats en el teu sector',
        "Seguiment i avaluació d'impacte",
      ],
    },
  }

  const l = labels[locale as keyof typeof labels] ?? labels.es

  return {
    slug: 'formacion-a-medida',
    title: l.title,
    subtitle: l.subtitle,
    categorySlug: 'a_medida',
    categoryName: l.categoryName,
    levelSlug: 'all-levels',
    levelName: l.levelName,
    durationLabel: l.durationLabel,
    shortDescription: l.shortDescription,
    topics: l.topics,
    fundable: true,
    body: undefined,
    logo: undefined,
    initials: 'IA',
    order: 999,
    isManual: true,
  }
}