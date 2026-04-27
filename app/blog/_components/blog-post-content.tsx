"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { renderRichText } from "@storyblok/react"
import type { SBBlogPost } from "@/lib/storyblok.types"
import { useTranslation } from "@/lib/i18n"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

interface BlogPostContentProps {
  post: SBBlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const { t } = useTranslation()
  const tb = t.blog
  const html = post.body ? renderRichText(post.body) : ''

  return (
    <main className="min-h-screen pt-20 pb-16">
      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[400px] max-h-[600px] w-full">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.coverImageAlt || post.title}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031d40]/80 via-[#031d40]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#031d40]/60 hover:text-[#031d40] text-sm font-medium mt-8 mb-6 transition-colors"
        >
          <ArrowLeft size={16} /> {tb.back}
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="inline-block px-3 py-1 bg-[#bbbd26] text-[#031d40] text-xs font-bold rounded-full mb-4">
            {tb.categories[post.category as keyof typeof tb.categories] ?? post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#031d40] mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              {post.authorImage && (
                <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
                </div>
              )}
              <span className="font-semibold text-[#031d40]">{post.author}</span>
            </div>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime} {tb.readTime}
            </span>
          </div>
        </div>

        {/* Richtext body */}
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  )
}
