"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Target, Lightbulb, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n"
import { portfolioTranslations } from "@/lib/i18n/pages/portfolio"
import type { SBCaseStudy } from "@/lib/storyblok.types"

export function PortfolioDetailContent({ story }: { story: SBCaseStudy }) {
  const { locale } = useTranslation()
  const t = portfolioTranslations[locale].detail

  return (
    <main className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
      <section className="container mx-auto px-4 mb-10 sm:mb-20">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-gray-600 hover:text-[#031d40] mb-6 sm:mb-8 transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          {t.volver}
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-10 sm:mb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              {story.logoUrl ? (
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl overflow-hidden relative border border-gray-100">
                  <Image
                    src={story.logoUrl || "/placeholder.svg"}
                    alt={`${story.company} logo`}
                    fill
                    className="object-contain p-3"
                  />
                </div>
              ) : (
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${story.logoGradient} flex items-center justify-center shadow-xl`}
                >
                  <span className="text-white font-bold text-2xl">{story.logo}</span>
                </div>
              )}
              <div>
                <Badge variant="outline" className="text-[#031d40] border-[#031d40] mb-2">
                  {story.industry}
                </Badge>
                <p className="text-sm text-gray-500">
                  {story.service} · {story.year}
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#031d40] leading-tight mb-4 sm:mb-6">{story.company}</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">{story.shortTitle}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#bbbd26]">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="h-5 w-5 text-[#031d40]" />
                <h3 className="font-semibold text-[#031d40]">{t.contextoCliente}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {story.contextClient}
              </p>
            </div>
          </div>

          <div className="relative h-[280px] sm:h-[400px] lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl lg:sticky lg:top-28">
            <Image
              src={story.image || "/placeholder.svg"}
              alt={story.shortTitle}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#031d40]/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 mb-10 sm:mb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">{t.retoSolucion}</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                {t.retoSolucionSub}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg border-2 border-red-100 hover:border-red-200 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-red-100 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                    <Target className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#031d40]">{t.desafio}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{story.challenge}</p>
              </div>

              <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-lg border-2 border-[#bbbd26]/30 hover:border-[#bbbd26]/50 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-[#bbbd26]/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
                    <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-[#031d40]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#031d40]">{t.solucion}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{story.solution}</p>
              </div>
            </div>

            <div className="bg-[#031d40] text-white p-5 sm:p-8 rounded-xl sm:rounded-2xl">
              <p className="text-center text-sm sm:text-base md:text-lg leading-relaxed">
                <span className="text-[#bbbd26] font-semibold">{t.metodologia}</span> {t.metodologiaTexto}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-12 sm:mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/5 rounded-full blur-[80px] md:blur-[120px] -z-10" />

        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4 sm:mb-6">{t.resultados}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            {t.resultadosSub1}{story.company}{t.resultadosSub2}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {story.results.map((result, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#bbbd26]/20 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031d40] mb-2 sm:mb-4">{result.metric}</div>
              <div className="text-sm sm:text-base md:text-lg font-medium text-gray-700">{result.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#031d40] to-[#031d40]/90 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">{t.ctaTitulo}</h2>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-10 leading-relaxed">
              {t.ctaTexto1}{story.company}{t.ctaTexto2}
            </p>
            <Button
              size="lg"
              className="bg-[#bbbd26] text-[#031d40] hover:bg-[#bbbd26]/90 text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 h-auto font-semibold shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
              asChild
            >
              <Link href="/#contacto">{t.contactanos}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
