export type SBAsset = {
  filename: string
  alt?: string
}

export type SBCompanyLogo = {
  component: 'company_logo'
  name: string
  image: SBAsset
}

export type SBTechPartner = {
  component: 'tech_partner'
  name: string
  image: SBAsset
}

export type SBBlogPost = {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  coverImageAlt?: string
  category: string
  author: string
  authorImage?: string
  author_position?: string
  author_url?: string
  date: string
  readTime: number
  featured: boolean
  seoKeywords?: string
  body?: any
}

export type SBLink = {
  url: string
  linktype: 'url' | 'story'
}

export type SBTeamMember = {
  component: 'team_member'
  name: string
  role: string
  photo: SBAsset
  bio?: string
  linkedin?: SBLink
}

export type SBKpi = {
  value: string
  label: string
}

export type SBTrainingRef = {
  uuid: string
  slug: string
  name: string
}

export type SBFormacion = {
  slug: string
  title: string
  subtitle: string
  categorySlug: string
  categoryName: string
  levelSlug: string
  levelName: string
  durationLabel: string
  shortDescription: string
  body?: string
  topics?: string[]
  fundable?: boolean
  logo?: string
  initials?: string
  order?: number
  isManual: boolean
}

export type SBCaseStudy = {
  id: string
  company: string
  logo: string
  logoUrl?: string
  logoGradient: string
  industry: string
  year: string
  service: string
  challenge: string
  solution: string
  image: string
  shortTitle: string
  contextClient?: string
  results: Array<{ metric: string; description: string }>
}
