"use client"

import Image from "next/image"
import { techPartners } from "@/lib/data"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/i18n"
import type { SBTechPartner } from "@/lib/storyblok.types"

interface TechnologiesSectionProps {
  className?: string
  techItems?: SBTechPartner[] | null
}

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

    if (ref.current) {
      observer.observe(ref.current)
    }

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

export function TechnologiesSection({ techItems }: TechnologiesSectionProps) {
  const [activeTab, setActiveTab] = useState(0)
  const rawPartners = techItems
    ? techItems.map((t) => ({ name: t.name, logo: t.image.filename }))
    : techPartners
  const duplicatedPartners = [...rawPartners, ...rawPartners, ...rawPartners]
  const { t } = useTranslation()
  const catTranslations = t.technologies.categories

  const categories = [
    {
      title: catTranslations[0].title,
      items: [
        {
          title: catTranslations[0].items[0],
          icon: (
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          ),
        },
        {
          title: catTranslations[0].items[1],
          icon: (
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          ),
        },
        {
          title: catTranslations[0].items[2],
          icon: (
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: catTranslations[1].title,
      items: [
        {
          title: catTranslations[1].items[0],
          image: "/images/tech/n8n.svg",
        },
        {
          title: catTranslations[1].items[1],
          image: "/images/tech/power-automate.svg",
        },
      ],
    },
    {
      title: catTranslations[2].title,
      items: [
        {
          title: catTranslations[2].items[0],
          image: "/images/tech/power-bi.svg",
        },
        {
          title: catTranslations[2].items[1],
          icon: (
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          ),
        },
        {
          title: catTranslations[2].items[2],
          icon: (
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: catTranslations[3].title,
      items: [
        {
          title: catTranslations[3].items[0],
          icon: (
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          ),
        },
        {
          title: catTranslations[3].items[1],
          icon: (
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          ),
        },
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Wrapped the top content in a container to restore margins, keeping the carousel full-width below */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#031d40] mb-4">
            {t.technologies.title}
            <UnderlinedText>
              <span className="text-[#031d40]">{t.technologies.titleHighlight}</span>
            </UnderlinedText>
          </h2>
        </div>

        {/* Category Tabs/Headers */}
        <div className="flex overflow-x-auto pb-4 gap-3 sm:gap-4 lg:grid lg:grid-cols-4 lg:pb-0 mb-6 lg:mb-12 scrollbar-hide snap-x">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={cn(
                "min-w-[150px] sm:min-w-[200px] lg:min-w-0 snap-center flex-shrink-0",
                "rounded-xl p-4 sm:p-6 text-center font-bold text-sm sm:text-lg transition-[background-color,color,box-shadow] duration-300 cursor-pointer shadow-lg hover:shadow-2xl",
                // Mobile: Active state styling
                // Desktop: Always default styling (hover effect only)
                index === activeTab
                  ? "bg-[#bbbd26] text-[#031d40] lg:bg-[#031d40] lg:text-white lg:hover:bg-[#bbbd26] lg:hover:text-[#031d40]"
                  : "bg-[#031d40] text-white hover:bg-[#bbbd26] hover:text-[#031d40]",
              )}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Technology Services Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={cn("flex-col gap-6", activeTab === categoryIndex ? "flex" : "hidden lg:flex")}
            >
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white border-2 border-[#bbbd26] rounded-2xl p-6 hover:border-[#031d40] hover:scale-105 transition-[transform,border-color,box-shadow] duration-300 shadow-sm hover:shadow-xl flex flex-col items-center justify-center min-h-[160px]"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center">
                    {"image" in item && item.image ? (
                      <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-100">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          sizes="64px"
                          className="object-contain p-2 grayscale"
                        />
                      </div>
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                        {"icon" in item ? item.icon : null}
                      </div>
                    )}
                  </div>
                  <span className="text-lg font-semibold text-[#031d40]">{item.title}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Technology Partners Carousel */}
      <div className="mt-10 sm:mt-16 w-full">
        <div className="container mx-auto px-4 mb-6 sm:mb-10">
          <p className="text-center text-gray-600 font-medium text-base sm:text-lg">
            {t.technologies.carouselText}
          </p>
        </div>
        <div className="relative overflow-hidden w-full">
          <div className="flex gap-12 animate-scroll-fast items-center w-max min-w-full">
            {duplicatedPartners.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[120px] h-[60px] relative"
              >
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  fill
                  className="object-contain grayscale transition-opacity duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
