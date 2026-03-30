"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "@/lib/i18n"
import { faqPageTranslations } from "@/lib/i18n/pages/preguntas-frecuentes"

export function FAQPageContent() {
  const { locale } = useTranslation()
  const t = faqPageTranslations[locale]

  return (
    <main className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#031d40] hover:text-[#bbbd26] transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.volver}
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
          {t.titulo}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
          {t.subtitulo}
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {t.items.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 py-2"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[#031d40] hover:text-[#bbbd26] transition-colors hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-[#031d40] mb-4">
            {t.noEncuentras}
          </h2>
          <p className="text-gray-600 mb-6">
            {t.noEncuentrasSub}
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-bold rounded-lg transition-all"
          >
            {t.contactar}
          </Link>
        </div>
      </div>
    </main>
  )
}
