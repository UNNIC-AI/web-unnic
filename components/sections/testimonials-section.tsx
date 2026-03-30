"use client"

import { ChevronLeft, ChevronRight, Globe } from 'lucide-react'
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import AnimatedStats from "@/components/animated-stats"
import { testimonials } from "@/lib/data"

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

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#bbbd26]/10 rounded-full blur-[60px] md:blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#031d40]/8 rounded-full blur-[80px] md:blur-[120px]" />

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#031d40] mb-4">
            Nuestra filosofía:{" "}
            <UnderlinedText>
              <span className="text-[#031d40]">Win-Win</span>
            </UnderlinedText>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Nuestras estrategias y nuestro Partnership son a largo plazo. Por ello, proveemos un servicio de 10, porque
            si a ti te va bien, a nosotros también
          </p>
        </div>

        <div className="relative mb-20">
          <div className="flex items-center justify-center gap-6">
            {/* Left Card - Previous */}
            <div
              className="hidden lg:block w-[300px] opacity-60 hover:opacity-80 transition-opacity duration-300 cursor-pointer flex-shrink-0"
              onClick={prevTestimonial}
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 h-[380px] flex flex-col">
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between flex-shrink-0">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#bbbd26] text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                    <Link
                      href={testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].sourceUrl}
                      target={testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].sourceUrl.startsWith("/") ? undefined : "_blank"}
                      rel={testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].sourceUrl.startsWith("/") ? undefined : "noopener noreferrer"}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-gray-300 hover:border-[#bbbd26] transition-colors"
                    >
                      <div className="relative w-4 h-4 flex items-center justify-center">
                        {testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].source ===
                        "Web" ? (
                          <Globe className="w-3 h-3 text-[#031d40]" />
                        ) : (
                          <Image
                            src={
                              testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length]
                                .sourceLogo || "/placeholder.svg"
                            }
                            alt={
                              testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].source
                            }
                            fill
                            className="object-contain"
                          />
                        )}
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        {testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].source}
                      </span>
                    </Link>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic line-clamp-6 flex-1">
                    "{testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-300 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#031d40] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#031d40] text-sm truncate">
                      {testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].author}
                    </p>
                    <p className="text-gray-600 text-xs line-clamp-2">
                      {testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Card - Current (Larger) */}
            <div className="w-full lg:w-[500px] z-10 flex-shrink-0">
              <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 border-2 border-[#bbbd26] shadow-2xl min-h-[360px] sm:min-h-[420px] lg:h-[500px] flex flex-col lg:scale-105">
                <div className="space-y-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between flex-shrink-0">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#bbbd26] text-lg sm:text-2xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <Link
                      href={testimonials[currentTestimonial].sourceUrl}
                      target={testimonials[currentTestimonial].sourceUrl.startsWith("/") ? undefined : "_blank"}
                      rel={testimonials[currentTestimonial].sourceUrl.startsWith("/") ? undefined : "noopener noreferrer"}
                      className="flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-300 hover:border-[#bbbd26] transition-colors"
                    >
                      <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                        {testimonials[currentTestimonial].source === "Web" ? (
                          <Globe className="w-4 h-4 text-[#031d40]" />
                        ) : (
                          <Image
                            src={testimonials[currentTestimonial].sourceLogo || "/placeholder.svg"}
                            alt={testimonials[currentTestimonial].source}
                            fill
                            className="object-contain"
                          />
                        )}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {testimonials[currentTestimonial].source}
                      </span>
                    </Link>
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg md:text-2xl leading-relaxed italic font-light line-clamp-6 sm:line-clamp-8 flex-1">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-300 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#031d40] flex items-center justify-center text-white font-bold text-base sm:text-xl flex-shrink-0">
                    {testimonials[currentTestimonial].initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#031d40] text-base sm:text-xl truncate">{testimonials[currentTestimonial].author}</p>
                    <p className="text-gray-600 text-sm sm:text-base line-clamp-2">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - Next */}
            <div
              className="hidden lg:block w-[300px] opacity-60 hover:opacity-80 transition-opacity duration-300 cursor-pointer flex-shrink-0"
              onClick={nextTestimonial}
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 h-[380px] flex flex-col">
                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between flex-shrink-0">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-[#bbbd26] text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                    <Link
                      href={testimonials[(currentTestimonial + 1) % testimonials.length].sourceUrl}
                      target={testimonials[(currentTestimonial + 1) % testimonials.length].sourceUrl.startsWith("/") ? undefined : "_blank"}
                      rel={testimonials[(currentTestimonial + 1) % testimonials.length].sourceUrl.startsWith("/") ? undefined : "noopener noreferrer"}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-gray-300 hover:border-[#bbbd26] transition-colors"
                    >
                      <div className="relative w-4 h-4 flex items-center justify-center">
                        {testimonials[(currentTestimonial + 1) % testimonials.length].source === "Web" ? (
                          <Globe className="w-3 h-3 text-[#031d40]" />
                        ) : (
                          <Image
                            src={
                              testimonials[(currentTestimonial + 1) % testimonials.length].sourceLogo ||
                              "/placeholder.svg"
                            }
                            alt={testimonials[(currentTestimonial + 1) % testimonials.length].source}
                            fill
                            className="object-contain"
                          />
                        )}
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        {testimonials[(currentTestimonial + 1) % testimonials.length].source}
                      </span>
                    </Link>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed italic line-clamp-6 flex-1">
                    "{testimonials[(currentTestimonial + 1) % testimonials.length].quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-300 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#031d40] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonials[(currentTestimonial + 1) % testimonials.length].initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-[#031d40] text-sm truncate">
                      {testimonials[(currentTestimonial + 1) % testimonials.length].author}
                    </p>
                    <p className="text-gray-600 text-xs line-clamp-2">
                      {testimonials[(currentTestimonial + 1) % testimonials.length].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-[#031d40] text-white flex items-center justify-center hover:bg-[#031d40]/80 transition-colors duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-[width,background-color] duration-300 ${
                    index === currentTestimonial ? "bg-[#bbbd26] w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-[#031d40] text-white flex items-center justify-center hover:bg-[#031d40]/80 transition-colors duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <AnimatedStats />
      </div>
    </section>
  )
}
