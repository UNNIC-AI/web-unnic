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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage || undefined,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      ...(post.author_url ? { url: post.author_url } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "Unnic AI",
      logo: {
        "@type": "ImageObject",
        url: "https://unnic.ai/un-logo-azulamarillo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://unnic.ai/blog/${slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navigation />
      <BlogPostContent post={post} />
    </>
  )
}
