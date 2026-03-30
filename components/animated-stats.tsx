"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslation } from "@/lib/i18n"

export default function AnimatedStats() {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const [retentionCount, setRetentionCount] = useState(0)
  const [satisfactionCount, setSatisfactionCount] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Animate retention count from 0 to 83
    const retentionDuration = 1500
    const retentionSteps = 60
    const retentionIncrement = 83 / retentionSteps
    let retentionStep = 0

    const retentionInterval = setInterval(() => {
      retentionStep++
      setRetentionCount(Math.min(retentionStep * retentionIncrement, 83))
      if (retentionStep >= retentionSteps) clearInterval(retentionInterval)
    }, retentionDuration / retentionSteps)

    // Animate satisfaction count from 0 to 9.2
    const satisfactionDuration = 1500
    const satisfactionSteps = 60
    const satisfactionIncrement = 9.2 / satisfactionSteps
    let satisfactionStep = 0

    const satisfactionInterval = setInterval(() => {
      satisfactionStep++
      setSatisfactionCount(Math.min(satisfactionStep * satisfactionIncrement, 9.2))
      if (satisfactionStep >= satisfactionSteps) clearInterval(satisfactionInterval)
    }, satisfactionDuration / satisfactionSteps)

    return () => {
      clearInterval(retentionInterval)
      clearInterval(satisfactionInterval)
    }
  }, [isVisible])

  return (
    <div ref={sectionRef} className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-12 md:mt-16">
      {/* Retention Stat */}
      <div className="relative group">
        <div className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#bbbd26]/30 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 shadow-lg hover:shadow-xl">
          <div className="flex items-baseline gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#031d40]">{retentionCount.toFixed(0)}%</span>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            {t.stats.retentionText1}<span className="font-bold text-[#031d40]">{t.stats.retentionBold}</span>{t.stats.retentionText2}
          </p>
          {/* Decorative element */}
          <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#bbbd26]/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
        </div>
      </div>

      {/* Satisfaction Stat */}
      <div className="relative group">
        <div className="bg-gradient-to-br from-[#031d40]/10 to-[#031d40]/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#031d40]/30 hover:border-[#031d40] transition-[border-color,box-shadow] duration-300 shadow-lg hover:shadow-xl">
          <div className="flex items-baseline gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#031d40]">{satisfactionCount.toFixed(1)}</span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600">/10</span>
          </div>
          <p className="text-base sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            {t.stats.satisfactionText1}<span className="font-bold text-[#031d40]">{t.stats.satisfactionBold}</span>{t.stats.satisfactionText2}
          </p>
          {/* Decorative element */}
          <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-[#031d40]/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
        </div>
      </div>
    </div>
  )
}
