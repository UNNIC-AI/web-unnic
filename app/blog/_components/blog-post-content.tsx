"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { renderRichText } from "@storyblok/react"
import { marked } from "marked"
import type { SBBlogPost } from "@/lib/storyblok.types"
import { useTranslation } from "@/lib/i18n"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function normalizeRichtext(body: any): any {
  if (!body?.content) return body

  const raw: any[] = body.content
  const normalized: any[] = []
  let i = 0

  while (i < raw.length) {
    const node = raw[i]

    if (node.type === 'paragraph') {
      const children: any[] = node.content ?? []
      if (children.length === 1 && children[0].type === 'text') {
        const text: string = children[0].text ?? ''

        const headingMatch = text.match(/^(#{1,6})\s+(.+)$/)
        if (headingMatch) {
          normalized.push({
            type: 'heading',
            attrs: { level: headingMatch[1].length },
            content: [{ type: 'text', text: headingMatch[2] }],
          })
          i++
          continue
        }

        if (text.startsWith('- ') || text.startsWith('* ')) {
          const listItems: any[] = []
          while (i < raw.length) {
            const n = raw[i]
            if (n.type !== 'paragraph') break
            const c: any[] = n.content ?? []
            if (c.length !== 1 || c[0].type !== 'text') break
            const t: string = c[0].text ?? ''
            if (!t.startsWith('- ') && !t.startsWith('* ')) break
            listItems.push({
              type: 'list_item',
              content: [{ type: 'paragraph', content: [{ type: 'text', text: t.slice(2) }] }],
            })
            i++
          }
          normalized.push({ type: 'bullet_list', content: listItems })
          continue
        }
      }
    }

    normalized.push(node)
    i++
  }

  return { ...body, content: normalized }
}

function renderBody(body: any): string {
  if (!body) return ''
  if (typeof body === 'string') return marked.parse(body, { async: false }) ?? ''
  return renderRichText(normalizeRichtext(body)) ?? ''
}

interface BlogPostContentProps {
  post: SBBlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const { t } = useTranslation()
  const tb = t.blog
  const html = renderBody(post.body)

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
