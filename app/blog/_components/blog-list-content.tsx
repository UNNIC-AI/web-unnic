"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { SBBlogPost } from "@/lib/storyblok.types"
import { useTranslation } from "@/lib/i18n"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

interface BlogListContentProps {
  posts: SBBlogPost[] | null
}

export function BlogListContent({ posts }: BlogListContentProps) {
  const [activeCategory, setActiveCategory] = useState('todos')
  const { t } = useTranslation()
  const tb = t.blog

  if (!posts?.length) {
    return (
      <main className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <p className="text-gray-400 text-lg">{tb.empty}</p>
      </main>
    )
  }

  const categories = ['todos', ...new Set(posts.map((p) => p.category).filter(Boolean))]

  const filtered =
    activeCategory === 'todos' ? posts : posts.filter((p) => p.category === activeCategory)

  const featured = filtered.find((p) => p.featured) ?? filtered[0]
  const rest = filtered.filter((p) => p.slug !== featured.slug)

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 mb-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4">
            {tb.title}{" "}
            <span
              className="inline"
              style={{
                backgroundImage: "linear-gradient(to bottom, transparent 59%, #bbbd26 59%)",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              {tb.titleHighlight}
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {tb.subtitle}
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer",
                activeCategory === cat
                  ? "bg-[#031d40] text-white shadow-md"
                  : "bg-white text-[#031d40] border border-[#031d40]/20 hover:border-[#031d40]"
              )}
            >
              {tb.categories[cat as keyof typeof tb.categories] ?? cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group relative rounded-3xl overflow-hidden min-h-[480px] flex flex-col justify-end mb-8 block"
        >
          <div className="absolute inset-0">
            <Image
              src={featured.coverImage || "/placeholder.svg"}
              alt={featured.coverImageAlt || featured.title}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031d40] via-[#031d40]/60 to-transparent" />
          </div>
          <div className="relative p-8 sm:p-12 space-y-4">
            <span className="inline-block px-3 py-1 bg-[#bbbd26] text-[#031d40] text-xs font-bold rounded-full">
              {tb.categories[featured.category as keyof typeof tb.categories] ?? featured.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white group-hover:text-[#bbbd26] transition-colors duration-300 max-w-3xl">
              {featured.title}
            </h2>
            <p className="text-white/70 text-base max-w-2xl line-clamp-2">{featured.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(featured.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {featured.readTime} {tb.min}
              </span>
              <span className="font-medium text-white/80">{featured.author}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 group-hover:text-[#bbbd26] transition-colors duration-300 text-sm font-semibold">
              {tb.readMore}{" "}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </Link>

        {/* Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.coverImageAlt || post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block px-2 py-0.5 bg-[#bbbd26] text-[#031d40] text-[10px] font-bold rounded-full mb-3 self-start">
                    {tb.categories[post.category as keyof typeof tb.categories] ?? post.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#031d40] mb-2 line-clamp-2 group-hover:text-[#031d40]/75 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3 flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime} {tb.min}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
