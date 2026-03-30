import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { successStories } from "@/lib/data"
import { generatePortfolioMetadata } from "@/lib/seo-metadata"
import type { Metadata } from "next"
import { PortfolioDetailContent } from "@/components/portfolio-detail-content"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return successStories.map((story) => ({
    id: story.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const story = successStories.find((s) => s.id === id)

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
    id: id,
  })
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id } = await params
  const story = successStories.find((s) => s.id === id)

  if (!story) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <PortfolioDetailContent story={story} />
    </>
  )
}
