"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { successStories } from "@/lib/data"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { portfolioTranslations } from "@/lib/i18n/pages/portfolio"

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
      { threshold: 0.1, rootMargin: "-50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className="inline box-decoration-clone transition-[background-size] duration-700 ease-out isolate"
      style={{
        backgroundImage: "linear-gradient(to bottom, transparent 59%, #bbbd26 59%)",
        backgroundSize: isVisible ? "100% 100%" : "0% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        transitionDelay: `${delay}ms`,
        zIndex: -10,
      }}
    >
      {children}
    </span>
  )
}

export default function PortfolioPage() {
  const { locale, t: globalT } = useTranslation()
  const t = portfolioTranslations[locale]
  
  const localizedStories = successStories.map((baseStory, index) => {
    const translatedStory = globalT.successStories.items[index]
    return translatedStory
      ? { ...baseStory, ...translatedStory }
      : baseStory
  })
  
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gray-50">
        {/* Header Section */}
        <section className="container mx-auto px-4 mb-12 sm:mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#031d40] animate-in fade-in slide-in-from-bottom-4 duration-500">
              {t.list.title1}
              <UnderlinedText>
                <span className="text-[#bbbd26] text-foreground">{t.list.titleHighlight}</span>
              </UnderlinedText>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 px-2 sm:px-0">
              {t.list.subtitle}
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {localizedStories.map((story, index) => (
              <Link
                key={story.id}
                href={`/portfolio/${story.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.company}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031d40]/80 to-transparent opacity-60" />

                  {/* Logo Overlay */}
                  <div className="absolute bottom-4 left-4">
                    {story.logoUrl ? (
                      <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-lg overflow-hidden relative">
                        <Image
                          src={story.logoUrl || "/placeholder.svg"}
                          alt={`${story.company} logo`}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${story.logoGradient} flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-white font-bold text-sm">{story.logo}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#bbbd26]/10 text-[#031d40] text-xs font-bold rounded-full mb-3">
                      {story.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-[#031d40] mb-2 group-hover:text-[#bbbd26] transition-colors">
                      {story.company}
                    </h3>
                    <p className="text-gray-600 font-medium">{story.shortTitle}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <span className="w-full flex justify-between items-center text-[#031d40] group-hover:text-[#bbbd26] transition-colors p-0 font-bold">
                      {t.list.verCaso}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
