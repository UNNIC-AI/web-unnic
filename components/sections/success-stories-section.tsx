"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { successStories } from "@/lib/data"

function UnderlinedText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className="inline box-decoration-clone transition-[background-size] duration-700 ease-out"
      style={{
        backgroundImage: "linear-gradient(to bottom, transparent 59%, #bbbd26 59%)",
        backgroundSize: isVisible ? "100% 100%" : "0% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </span>
  )
}

interface SuccessStoriesSectionProps {
  showHighlights?: boolean
}

export function SuccessStoriesSection({ showHighlights }: SuccessStoriesSectionProps) {
  // Show first 5 cases in a bento-style layout
  const featured = successStories[0]
  const rest = successStories.slice(1, 5)

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Glow accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#bbbd26]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4">
            Esta podría ser{" "}
            <UnderlinedText>
              <span className="text-[#031d40]">tu empresa</span>
            </UnderlinedText>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Empresas reales, resultados medibles. Descubre cómo transformamos operaciones con IA.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">

          {/* Featured card — large */}
          <Link
            href={`/portfolio/${featured.id}`}
            className="lg:col-span-7 group relative rounded-2xl overflow-hidden min-h-[420px] flex flex-col justify-end cursor-pointer"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={featured.image || "/placeholder.svg"}
                alt={featured.company}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031d40] via-[#031d40]/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-6 sm:p-8 space-y-4">
              {/* Industry badge */}
              <span className="inline-block px-3 py-1 bg-[#bbbd26] text-[#031d40] text-xs font-bold rounded-full">
                {featured.industry}
              </span>

              {/* Company + title */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-[#bbbd26] transition-colors duration-300">
                  {featured.company}
                </h3>
                <p className="text-white/70 text-sm">{featured.shortTitle}</p>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-3">
                {featured.results.map((r, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                    <div className="text-[#bbbd26] text-xl font-bold">{r.metric}</div>
                    <div className="text-white/70 text-xs">{r.description}</div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex items-center gap-2 text-white/80 group-hover:text-[#bbbd26] transition-colors duration-300 text-sm font-semibold">
                Ver caso completo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </Link>

          {/* Right column — 2×2 smaller cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {rest.map((story) => (
              <Link
                key={story.id}
                href={`/portfolio/${story.id}`}
                className="group relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-end cursor-pointer"
              >
                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.company}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031d40] via-[#031d40]/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-4 space-y-2">
                  <span className="inline-block px-2 py-0.5 bg-[#bbbd26] text-[#031d40] text-[10px] font-bold rounded-full">
                    {story.industry}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#bbbd26] transition-colors duration-300 leading-tight">
                    {story.company}
                  </h3>
                  {/* Top metric */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#bbbd26] text-lg font-bold">{story.results[0].metric}</span>
                    <span className="text-white/60 text-xs">{story.results[0].description}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/60 group-hover:text-[#bbbd26] transition-colors duration-300 text-xs font-semibold">
                    Ver caso <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#bbbd26] hover:bg-[#a8aa22] text-[#031d40] font-bold px-8 py-6 text-base group"
            asChild
          >
            <Link href="/portfolio">
              Ver todos los casos de éxito
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
