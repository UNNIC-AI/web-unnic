import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { successStories } from "@/lib/data"
import { fetchCaseStudyBySlug } from "@/lib/storyblok"
import { generatePortfolioMetadata } from "@/lib/seo-metadata"
import type { Metadata } from "next"
import { PortfolioDetailContent } from "@/components/portfolio-detail-content"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const story = await fetchCaseStudyBySlug(id) ?? successStories.find((s) => s.id === id)

  if (!story) {
    return {
      title: "Caso de Éxito No Encontrado | Unnic AI",
      description: "El caso de éxito que buscas no existe.",
    }
  }

  return generatePortfolioMetadata({
    company: story.company,
    sector: story.industry,
    metric: story.results[0]?.description || story.shortTitle,
    id,
  })
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id } = await params
  const sbStory = await fetchCaseStudyBySlug(id)
  const fallback = successStories.find((s) => s.id === id)
  const story = sbStory ?? fallback

  if (!story) notFound()

  return (
    <>
      <Navigation />
      <PortfolioDetailContent story={story} />
    </>
  )
}
