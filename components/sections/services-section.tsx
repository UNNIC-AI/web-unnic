"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { services } from "@/lib/data"
import { useTranslation } from "@/lib/i18n"

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

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0)
  const { t } = useTranslation()
  const serviceItems = t.services.items

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4">
            {t.services.title}
            <UnderlinedText>
              <span className="text-[#031d40]">{t.services.titleHighlight}</span>
            </UnderlinedText>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            {t.services.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Sticky Big Card */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] lg:h-[600px]">
              {/* Replaced img with Next.js Image component using fill */}
              <Image
                src={services[activeService].image || "/placeholder.svg"}
                alt={`${services[activeService].title} - ${services[activeService].description}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-500 ease-out"
                priority
              />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-12 sm:pt-24 pb-6 sm:pb-24 px-5 sm:px-8">
                <div className="space-y-2 sm:space-y-3 transition-all duration-400">
                  <p className="text-[#bbbd26] text-xs sm:text-sm font-bold uppercase tracking-wider">
                    {serviceItems[activeService].kicker}
                  </p>
                  <h3 className="text-white text-xl sm:text-2xl lg:text-4xl font-bold">{serviceItems[activeService].title}</h3>
                  <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed hidden sm:block">{serviceItems[activeService].description}</p>
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 hidden sm:block">
                  <Button
                    size="sm"
                    className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-bold transition-all group"
                    asChild
                  >
                    <Link href="/servicios">
                      {t.services.saberMas}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Service Cards Stack */}
          <div className="flex flex-col gap-3 sm:gap-0 sm:justify-between lg:h-[600px]">
            {services.map((service, index) => {
              const cardClasses = `group cursor-pointer rounded-xl border-2 transition-colors duration-300 flex items-center ${
                activeService === index
                  ? "border-[#bbbd26] shadow-lg bg-white"
                  : "border-gray-200 bg-white/50"
              }`

              const cardContent = (
                <div className="p-4 sm:p-6 lg:p-8 w-full">
                  <div className="space-y-1 sm:space-y-3">
                    <p
                      className={`text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors ${
                        activeService === index ? "text-[#031d40]" : "text-gray-500"
                      }`}
                    >
                      {serviceItems[index].kicker}
                    </p>
                    <h4
                      className={`text-lg sm:text-xl lg:text-3xl font-bold transition-colors ${
                        activeService === index ? "text-[#031d40]" : "text-gray-700"
                      }`}
                    >
                      {serviceItems[index].title}
                    </h4>
                  </div>
                </div>
              )

              return (
                <div key={index} className="flex items-center gap-2">
                  {/* Mobile: Button without navigation */}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveService(index)
                    }}
                    className={`${cardClasses} md:hidden flex-1 text-left`}
                  >
                    {cardContent}
                  </button>

                  {/* Desktop: Link with navigation */}
                  <Link
                    href={service.href}
                    onMouseEnter={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    className={`${cardClasses} hidden md:flex flex-1`}
                  >
                    {cardContent}
                  </Link>
                  
                  {/* Mobile: Arrow link for navigation */}
                  <Link
                    href={service.href}
                    className="md:hidden flex-shrink-0"
                  >
                    <ArrowRight className="w-6 h-6 text-[#bbbd26] hover:text-[#031d40] transition-colors" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
