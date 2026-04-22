export type SBAsset = {
  filename: string
  alt?: string
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
