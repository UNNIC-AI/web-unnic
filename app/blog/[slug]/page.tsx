import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { fetchBlogPost } from "@/lib/storyblok"
import { BlogPostContent } from "../_components/blog-post-content"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await fetchBlogPost(slug)

  if (!post) return { title: "Artículo no encontrado | Unnic AI" }

  return {
    title: `${post.title} | Unnic AI`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await fetchBlogPost(slug)

  if (!post) notFound()

  return (
    <>
      <Navigation />
      <BlogPostContent post={post} />
    </>
  )
}
