import 'server-only'
import { apiPlugin, storyblokInit, getStoryblokApi } from '@storyblok/react/rsc'
import { cookies } from 'next/headers'

import type {
  SBTeamMember,
  SBCaseStudy,
  SBCompanyLogo,
  SBTechPartner,
  SBAsset,
} from './storyblok.types'

// ─── Init ─────────────────────────────────────────────────────────────

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
})

const version = process.env.NODE_ENV === 'production' ? 'published' : 'draft'

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

type SBCaseStudySection = {
  component: 'case_study_list'
  cases: Array<SBStory<SBCaseStudyContent>>
}

type SBTechSection = {
  component: 'technologies_list'
  technology: Array<{ content: SBTechPartner }>
}

type SBPageContent = {
  body: Array<
    SBTeamSection | SBCompanySection | SBCaseStudySection | SBTechSection | { component: string }
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

  const api = getStoryblokApi()
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
    const api = getStoryblokApi()
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
    const api = getStoryblokApi()
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
    const api = getStoryblokApi()
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
    const api = getStoryblokApi()
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
    const api = getStoryblokApi()
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