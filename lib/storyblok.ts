import 'server-only'
import { apiPlugin, storyblokInit, getStoryblokApi } from '@storyblok/react/rsc'
import { unstable_cache } from 'next/cache'
export type { SBTeamMember, SBCaseStudy, SBCompanyLogo } from './storyblok.types'
import type { SBTeamMember, SBCaseStudy, SBCompanyLogo } from './storyblok.types'

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
})

const version = process.env.NODE_ENV === 'production' ? 'published' : 'draft'

// ─── Internal types ───────────────────────────────────────────────────────────

type SBAsset = { filename: string; alt?: string }

type SBTeamSection = {
  component: 'team_section'
  members: Array<{ content: SBTeamMember; uuid: string; slug: string }>
}

type SBCaseStudySection = {
  component: 'case_study_section'
  cases: string[]
}

type SBCompanyLogosSection = {
  component: 'companies_list'
  company: Array<{ content: SBCompanyLogo; uuid: string; slug: string }>
}

type SBBlock = SBTeamSection | SBCaseStudySection | SBCompanyLogosSection | { component: string }

type SBMetricContent = { value: string; description: string }

type SBCaseStudyContent = {
  client: string
  title: string
  sector: string
  year: string
  service: string
  challenge: string
  solution: string
  cover_image: SBAsset
  logo: SBAsset
  results: string[]
  context_client?: string
}

type SBCaseStudyRel = {
  uuid: string
  slug: string
  content: SBCaseStudyContent
}

// ─── Fetchers ─────────────────────────────────────────────────────────────────

export async function fetchTeamSection(slug: string): Promise<SBTeamMember[] | null> {
  try {
    const storyblokApi = getStoryblokApi()
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version,
      resolve_relations: 'team_section.members',
    })

    const body: SBBlock[] = data?.story?.content?.body ?? []
    const teamSection = body.find((b): b is SBTeamSection => b.component === 'team_section')

    if (!teamSection?.members?.length) return null
    return teamSection.members.map((m) => m.content)
  } catch (error) {
    console.error('[Storyblok] fetchTeamSection error:', error)
    return null
  }
}

export async function fetchCaseStudyBySlug(slug: string): Promise<SBCaseStudy | null> {
  try {
    const storyblokApi = getStoryblokApi()
        console.log("a");

    const { data } = await storyblokApi.get(`cdn/stories/casos-de-exito/${slug}`, { version })

    console.log("a");

    const c = data.story.content as {
      client: string; title: string; sector: string; year: string
      service: string; challenge: string; solution: string
      cover_image: { filename: string }; logo: { filename: string }
      results: string[]; context_client?: string
    }

    const metricsMap = new Map<string, { value: string; description: string }>()
    const uuids = c.results ?? []
    if (uuids.length) {
      const { data: md } = await storyblokApi.get('cdn/stories', {
        version,
        by_uuids: uuids.join(','),
        per_page: 100,
      })
      for (const s of md.stories ?? []) {
        metricsMap.set(s.uuid, s.content)
      }
    }

    const initials = c.client.split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase()

    return {
      id: slug,
      company: c.client,
      logo: initials,
      logoUrl: c.logo?.filename || undefined,
      logoGradient: 'from-[#031d40] to-[#031d40]/70',
      industry: c.sector,
      year: c.year,
      service: c.service,
      challenge: c.challenge,
      solution: c.solution,
      image: c.cover_image?.filename ?? '',
      shortTitle: c.title,
      contextClient: c.context_client || undefined,
      results: uuids
        .map((uuid) => metricsMap.get(uuid))
        .filter((m): m is { value: string; description: string } => !!m)
        .map((m) => ({ metric: m.value, description: m.description })),
    }
  } catch (error) {
    console.error('[Storyblok] fetchCaseStudyBySlug error:', error)
    return null
  }
}

export async function fetchCompanyLogos(slug: string): Promise<SBCompanyLogo[] | null> {
  try {
    const storyblokApi = getStoryblokApi()
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version,
      resolve_relations: 'companies_list.company',
    })

    const body: SBBlock[] = data?.story?.content?.body ?? []
    const section = body.find((b): b is SBCompanyLogosSection => b.component === 'companies_list')

    if (!section?.company?.length) return null
    return section.company.map((m) => m.content)
  } catch (error) {
    console.error('[Storyblok] fetchCompanyLogos error:', error)
    return null
  }
}

export async function fetchPortfolioCases(): Promise<SBCaseStudy[] | null> {
  try {
    const storyblokApi = getStoryblokApi()

    const { data } = await storyblokApi.get('cdn/stories/portfolio', {
      version,
      resolve_relations: 'case_study_list.cases',
    })
    console.log(data);

    const rels: SBCaseStudyRel[] = data.rels ?? []
    if (!rels.length) return null

    const allUuids = [...new Set(rels.flatMap((r) => r.content.results ?? []))]

    const metricsMap = new Map<string, SBMetricContent>()
    if (allUuids.length) {
      const { data: metricsData } = await storyblokApi.get('cdn/stories', {
        version,
        by_uuids: allUuids.join(','),
        per_page: 100,
      })
      for (const s of metricsData.stories ?? []) {
        metricsMap.set(s.uuid, s.content as SBMetricContent)
      }
    }

    return rels.map((rel) => {
      const c = rel.content
      const initials = c.client.split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase()

      return {
        id: rel.slug,
        company: c.client,
        logo: initials,
        logoUrl: c.logo?.filename || undefined,
        logoGradient: 'from-[#031d40] to-[#031d40]/70',
        industry: c.sector,
        year: c.year,
        service: c.service,
        challenge: c.challenge,
        solution: c.solution,
        image: c.cover_image?.filename ?? '',
        shortTitle: c.title,
        contextClient: c.context_client || undefined,
        results: (c.results ?? [])
          .map((uuid) => metricsMap.get(uuid))
          .filter((m): m is SBMetricContent => !!m)
          .map((m) => ({ metric: m.value, description: m.description })),
      }
    })
  } catch (error) {
    console.error('[Storyblok] fetchPortfolioCases error:', error)
    return null
  }
}