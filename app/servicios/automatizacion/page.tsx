"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import {
  ChevronDown,
  CheckCircle2,
  Repeat,
  Wrench,
  Network,
  AlertCircle,
  FileCheck,
  ClipboardList,
  Lightbulb,
  Code,
  Rocket,
  GraduationCap,
  Mail,
  Phone,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { successStories } from "@/lib/data"
import { useTranslation } from "@/lib/i18n"
import { automatizacionTranslations } from "@/lib/i18n/pages/automatizacion"

function UnderlinedText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "-50px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <span
      ref={ref}
      className="inline box-decoration-clone transition-[background-size] duration-700 ease-out isolate"
      style={{
        backgroundImage: "linear-gradient(to bottom, transparent 59%, #bbbd26 59%)",
        backgroundSize: isVisible ? "100% 100%" : "0% 100%",
        backgroundRepeat: "no-repeat",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </span>
  )
}

const timelineIcons = [ClipboardList, Lightbulb, Code, Rocket, GraduationCap]
const timelineNumbers = ["01", "02", "03", "04", "05"]

function SimpleTimeline({ translatedSteps }: { translatedSteps: { title: string; description: string }[] }) {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const steps = translatedSteps.map((step, i) => ({
    number: timelineNumbers[i],
    icon: timelineIcons[i],
    title: step.title,
    description: step.description,
  }))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative" ref={timelineRef}>
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        {/* Progress bar */}
        <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-gray-200 rounded-full overflow-hidden -translate-y-1/2 z-0">
          <div
            className="h-full bg-gradient-to-r from-[#bbbd26] to-[#d4d62a] rounded-full transition-all duration-[1500ms] ease-out"
            style={{ width: isVisible ? "100%" : "0%" }}
          />
        </div>

        {/* Grid with fixed structure */}
        <div className="grid grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isTop = index % 2 === 0 // 0, 2, 4 arriba - 1, 3 abajo

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
                  transitionDelay: `${200 + index * 150}ms`,
                  transitionProperty: "opacity, transform",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Top text area - fixed height */}
                <div className={`h-24 flex flex-col justify-end pb-3 ${isTop ? "" : "invisible"}`}>
                  <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col items-center justify-center gap-2 mb-1 group-hover:text-[#bbbd26] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#bbbd26] group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-base font-bold text-[#031d40] group-hover:text-[#bbbd26] transition-colors duration-300 text-center">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-xs max-w-[160px] mx-auto text-center group-hover:text-[#031d40] transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Circle - always centered on line */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#bbbd26] flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-sm font-bold text-[#031d40]">{step.number}</span>
                </div>

                {/* Bottom text area - fixed height */}
                <div className={`h-24 flex flex-col justify-start pt-3 ${isTop ? "invisible" : ""}`}>
                  <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
                    <div className="flex flex-col items-center justify-center gap-2 mb-1 group-hover:text-[#bbbd26] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#bbbd26] group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-base font-bold text-[#031d40] group-hover:text-[#bbbd26] transition-colors duration-300 text-center">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-xs max-w-[160px] mx-auto text-center group-hover:text-[#031d40] transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-200">
          <div
            className="w-full bg-gradient-to-b from-[#bbbd26] to-[#d4d62a] transition-all duration-[2000ms] ease-out"
            style={{ height: isVisible ? "100%" : "0%" }}
          />
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${300 + index * 150}ms`,
                }}
              >
                {/* Circle */}
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-[#bbbd26] flex items-center justify-center shadow-md z-10">
                  <span className="text-xs font-bold text-[#031d40]">{step.number}</span>
                </div>

                <div className="group cursor-pointer text-left transition-all duration-300 hover:translate-x-1">
                  <div className="flex flex-col items-start gap-2 mb-1 group-hover:text-[#bbbd26] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#bbbd26] group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-[#031d40] group-hover:text-[#bbbd26] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-[#031d40] transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
  }

import { getServiceSchema, StructuredData } from "@/lib/structured-data"

export default function AutomatizacionPage() {
  const { locale, t: globalT } = useTranslation()
  const t = automatizacionTranslations[locale]

  const serviceSchema = getServiceSchema({
    name: t.schema.name,
    description: t.schema.description,
    url: "https://unnic.ai/servicios/automatizacion",
    serviceType: t.schema.serviceType,
  })
  const processTypesMeta = [
    { icon: Repeat, color: "from-[#031d40]/5 to-[#031d40]/10", iconBg: "bg-[#031d40]/8", iconColor: "text-[#031d40]" },
    { icon: Wrench, color: "from-[#bbbd26]/5 to-[#bbbd26]/10", iconBg: "bg-[#bbbd26]/15", iconColor: "text-[#031d40]" },
    { icon: Network, color: "from-[#031d40]/5 to-[#031d40]/10", iconBg: "bg-[#031d40]/8", iconColor: "text-[#031d40]" },
    { icon: AlertCircle, color: "from-[#bbbd26]/5 to-[#bbbd26]/10", iconBg: "bg-[#bbbd26]/15", iconColor: "text-[#031d40]" },
    { icon: FileCheck, color: "from-[#031d40]/5 to-[#031d40]/10", iconBg: "bg-[#031d40]/8", iconColor: "text-[#031d40]" },
    { icon: CheckCircle2, color: "from-[#bbbd26]/5 to-[#bbbd26]/10", iconBg: "bg-[#bbbd26]/15", iconColor: "text-[#031d40]" },
  ]

  const processTypes = processTypesMeta.map((meta, i) => ({
    ...meta,
    title: t.processTypes[i].title,
    description: t.processTypes[i].description,
  }))

  const [chatMessages, setChatMessages] = useState([
    { type: "bot", text: t.chatbot.initialMessage },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setChatMessages([...chatMessages, { type: "user", text: inputValue }])
      setInputValue("")
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          { type: "bot", text: t.chatbot.autoReply },
        ])
      }, 1000)
    }
  }

  const cataloniaCeramicCase = {
    ...successStories[0],
    ...globalT.successStories.items[0],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <Navigation />

      <main>
        <section className="relative pt-24 pb-8 sm:pt-32 sm:pb-10 md:pt-40 md:pb-14 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
          {/* Grid texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          {/* Dot pattern texture */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, #031d40 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Yellow blurred backgrounds */}
          <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/25 rounded-full blur-[100px] md:blur-[140px]" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#bbbd26]/15 rounded-full blur-[100px]" />

          {/* Blue blurred backgrounds */}
          <div className="absolute top-1/2 right-1/2 w-[380px] h-[380px] bg-[#031d40]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-[420px] h-[420px] bg-[#031d40]/14 rounded-full blur-[110px]" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-[1.05] tracking-tight">
                <span className="text-[#031d40]">{t.hero.title1}</span>
                <UnderlinedText>
                  <span className="text-[#031d40]">{t.hero.titleHighlight}</span>
                </UnderlinedText>
              </h1>

              <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col items-center pt-3">
                
              </div>
            </div>
          </div>
        </section>

        {/* What processes to automate section */}
        <section id="procesos" className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="container relative mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section header */}
              <div className="text-center mb-10 md:mb-16 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40]">{t.processSection.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {t.processSection.subtitle}
                </p>
              </div>

              {/* Process type cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processTypes.map((process, index) => {
                  const Icon = process.icon
                  return (
                    <div
                      key={index}
                      className={`group relative bg-gradient-to-br ${process.color} border border-gray-200/50 rounded-2xl p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
                    >
                      {/* Check icon - appears on hover */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <CheckCircle2 className="w-6 h-6 text-[#bbbd26]" />
                      </div>

                      {/* Icon */}
                      <div
                        className={`${process.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-8 h-8 ${process.iconColor}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-[#031d40] mb-3">{process.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{process.description}</p>
                    </div>
                  )
                })}
              </div>

              {/* Bottom CTA */}
            </div>
          </div>
        </section>

        {/* How to automate Processes section */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Background textures */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Yellow blur */}
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#bbbd26]/10 rounded-full blur-[100px]" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Section header */}
              <div className="text-center mb-20 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40]">{t.howSection.title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {t.howSection.subtitle}
                </p>
              </div>

              <SimpleTimeline translatedSteps={t.timelineSteps} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-[#031d40] overflow-hidden isolate">
          {/* Grid texture overlay */}
          <div className="absolute inset-0 opacity-[0.05] -z-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#bbbd26 1px, transparent 1px), linear-gradient(90deg, #bbbd26 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Diagonal lines texture */}
          <div className="absolute inset-0 opacity-[0.03] -z-10">
            
          </div>

          <div className="absolute top-10 right-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/20 rounded-full blur-[100px] md:blur-[140px] -z-10 pointer-events-none" />
          <div className="absolute bottom-10 left-20 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-[#bbbd26]/15 rounded-full blur-[120px] md:blur-[160px] -z-10 pointer-events-none" />
          <div className="hidden sm:block absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#bbbd26]/12 rounded-full blur-[130px] -z-10 pointer-events-none" />

          <div className="container relative mx-auto px-4 z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column - CTA */}
                <div className="space-y-6">
                  {/* Updated badge */}

                  {/* Updated heading */}
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
                    {t.cta.title}
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed">
                    {t.cta.subtitle}
                  </p>

                  {/* Contact buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    {/* Updated button */}
                    <Button
                      size="lg"
                      className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-bold transition-all hover:scale-105 group shadow-2xl"
                      asChild
                    >
                      <a href="mailto:info@unnic.ai">
                        <Mail className="mr-2 w-5 h-5" />
                        {t.cta.emailButton}
                      </a>
                    </Button>
                    {/* Updated outline button */}
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-[#bbbd26] text-white hover:bg-[#bbbd26] hover:text-[#031d40] font-bold transition-all hover:scale-105 group bg-transparent"
                      asChild
                    >
                      <a href="tel:+34610757689">
                        <Phone className="mr-2 w-5 h-5" />
                        {t.cta.callButton}
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right Column - Chatbot UI */}
                <div className="relative z-20 isolate">
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden relative z-10">
                    {/* Chatbot Header */}
                    <div className="bg-gradient-to-r from-[#031d40] to-[#031d40]/90 p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/chatbot-avatar.png"
                          alt={t.chatbot.avatarAlt}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{t.chatbot.headerTitle}</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-sm text-gray-300">{t.chatbot.headerSubtitle}</span>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-6 space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto bg-gradient-to-br from-gray-50 to-white">
                      {chatMessages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          {message.type === "bot" && (
                            <div className="w-8 h-8 rounded-full bg-[#bbbd26]/20 flex items-center justify-center mr-3 flex-shrink-0">
                              <Sparkles className="w-4 h-4 text-[#031d40]" />
                            </div>
                          )}
                          <div
                            className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                              message.type === "bot" ? "bg-gray-100 text-gray-800" : "bg-[#031d40] text-white"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{message.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-gray-200 bg-white">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") {
                              handleSendMessage()
                            }
                          }}
                          placeholder={t.chatbot.inputPlaceholder}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#bbbd26] focus:border-transparent text-sm"
                        />
                        <button
                          onClick={handleSendMessage}
                          className="px-6 py-3 bg-[#031d40] hover:bg-[#031d40]/90 text-white rounded-xl transition-colors flex items-center gap-2 font-medium"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        {t.chatbot.demoNote}
                      </p>
                    </div>
                  </div>

                  {/* Updated decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#bbbd26]/30 rounded-full blur-2xl" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#bbbd26]/20 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study section */}
        <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Background textures */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          {/* Blurred backgrounds */}
          <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-[#bbbd26]/10 rounded-full blur-[140px]" />

          <div className="container relative mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4">{t.caseStudy.sectionTitle}</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  {t.caseStudy.sectionSubtitle}
                </p>
              </div>

              {/* Main Case Study Card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left Column - Company Info */}
                  <div className="lg:col-span-2 p-10 border-r border-gray-200 flex flex-col gap-6">
                    {/* Featured Image */}
                    <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 relative">
                      <Image
                        src={cataloniaCeramicCase.image || "/placeholder.svg"}
                        alt={`${cataloniaCeramicCase.company} case study`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Company Logo */}
                    {cataloniaCeramicCase.logoUrl ? (
                      <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden relative border border-gray-100">
                        <Image
                          src={cataloniaCeramicCase.logoUrl || "/placeholder.svg"}
                          alt={`${cataloniaCeramicCase.company} logo`}
                          fill
                          className="object-contain p-4"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${cataloniaCeramicCase.logoGradient} flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-white text-3xl font-bold">{cataloniaCeramicCase.logo}</span>
                      </div>
                    )}

                    {/* Company Details */}
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-[#031d40]">{cataloniaCeramicCase.company}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-600">{t.caseStudy.industryLabel}</span>
                          <span className="text-gray-800">{cataloniaCeramicCase.industry}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-600">{t.caseStudy.yearLabel}</span>
                          <span className="text-gray-800">{cataloniaCeramicCase.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-600">{t.caseStudy.serviceLabel}</span>
                          <span className="inline-block px-3 py-1 bg-[#bbbd26]/20 text-[#031d40] rounded-full text-xs font-bold">
                            {cataloniaCeramicCase.service}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Case Study Details */}
                  <div className="lg:col-span-3 p-10 space-y-8">
                    {/* The Challenge */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <h4 className="text-xl font-bold text-[#031d40]">{t.caseStudy.challengeTitle}</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{cataloniaCeramicCase.challenge}</p>
                    </div>

                    {/* The Solution */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 014.438 0 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138-3.138z"
                          />
                        </svg>
                        <h4 className="text-xl font-bold text-[#031d40]">{t.caseStudy.solutionTitle}</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{cataloniaCeramicCase.solution}</p>
                    </div>

                    {/* The Results */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 014.438 0 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        <h4 className="text-xl font-bold text-[#031d40]">{t.caseStudy.resultsTitle}</h4>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {cataloniaCeramicCase.results.map((result, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl p-6 border border-[#bbbd26]/20"
                          >
                            <div className="text-4xl font-bold text-[#031d40] mb-2">{result.metric}</div>
                            <div className="text-sm text-gray-700 font-medium">{result.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        size="lg"
                        className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-all group"
                        asChild
                      >
                        <Link href={`/portfolio/${cataloniaCeramicCase.id}`}>
                          {t.caseStudy.viewFullCase}
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
