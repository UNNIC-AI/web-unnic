"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Bot } from 'lucide-react'
import Link from "next/link"
import { faqs } from "@/lib/data"
import { useEffect, useRef, useState } from "react"

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

export function FAQSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#bbbd26]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#031d40]/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Header & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6 leading-tight">
              Preguntas{" "}
              <UnderlinedText>
                <span className="text-[#031d40]">Frecuentes</span>
              </UnderlinedText>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Resolvemos las dudas más habituales sobre cómo la Inteligencia Artificial puede transformar tu negocio. ¿Tienes otra pregunta?
            </p>

            <div className="flex flex-col gap-4 w-full sm:max-w-xs">
              <Button 
                className="w-full bg-[#031d40] hover:bg-[#031d40]/90 text-white shadow-md group h-12 text-lg justify-between px-6" 
                asChild
              >
                <Link href="/contacto">
                  Contactar
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-2 border-[#031d40] text-[#031d40] hover:bg-[#031d40] hover:text-white bg-transparent shadow-sm group h-12 text-lg justify-between px-6" 
                asChild
              >
                <Link href="/contacto">
                  Chat con IA
                  <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-none bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 px-6 py-2 data-[state=open]:shadow-lg data-[state=open]:ring-1 data-[state=open]:ring-[#bbbd26]/20"
                >
                  <AccordionTrigger className="text-lg md:text-xl font-bold text-[#031d40] hover:text-[#031d40] hover:no-underline py-6 text-left [&[data-state=open]]:text-[#bbbd26] transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
