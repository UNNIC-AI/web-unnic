"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, CheckCircle2, Loader2 } from 'lucide-react'
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

export function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [consentChecked, setConsentChecked] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if (!consentChecked) {
      setErrorMessage("Debes aceptar el tratamiento de datos para continuar")
      return
    }

    setFormState("loading")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("_consent", "Sí, autorizo el tratamiento de datos")

    try {
      const response = await fetch("https://formspree.io/f/xlgwojnq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormState("success")
        setConsentChecked(false)
        formRef.current?.reset()
      } else {
        setFormState("error")
        setErrorMessage("Error al enviar el mensaje. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      setFormState("error")
      setErrorMessage("Error de conexión. Por favor, inténtalo de nuevo.")
    }
  }

  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
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

      {/* Diagonal lines texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #bbbd26 0px, #bbbd26 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      {/* Yellow blurred backgrounds */}
      <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/20 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/25 rounded-full blur-[100px] md:blur-[140px]" />
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#bbbd26]/15 rounded-full blur-[100px]" />

      {/* Blue blurred backgrounds */}
      <div className="absolute top-20 right-10 w-[220px] h-[220px] md:w-[450px] md:h-[450px] bg-[#031d40]/12 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="hidden sm:block absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#031d40]/10 rounded-full blur-[130px]" />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#031d40] text-balance leading-tight">
            Hablemos de como la IA{" "}
            <UnderlinedText>
              te puede ayudar  
            </UnderlinedText>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-balance max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Estamos listos para ayudarte a transformar tu negocio con soluciones tecnológicas a medida.
            Cuéntanos tus ideas y las haremos realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-12 shadow-xl border border-gray-200/50 relative">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#bbbd26]/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#031d40]">Mensaje enviado</h3>
                  <p className="text-gray-600 max-w-md">
                    Gracias por contactarnos. Te responderemos lo antes posible.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-[#031d40] text-[#031d40] hover:bg-[#031d40] hover:text-white"
                    onClick={() => setFormState("idle")}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden subject field */}
                  <input type="hidden" name="_subject" value="Nuevo formulario en unnic.ai" />
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#031d40] font-semibold">Nombre <span className="text-red-500">*</span></Label>
                      <Input id="name" name="name" placeholder="Tu nombre" className="h-12" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#031d40] font-semibold">Email <span className="text-red-500">*</span></Label>
                      <Input id="email" name="email" type="email" placeholder="tu@email.com" className="h-12" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="canal" className="text-[#031d40] font-semibold">Canal</Label>
                    <Select name="canal">
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="¿Cómo nos has conocido?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="evento-presencial">Evento Presencial</SelectItem>
                        <SelectItem value="webinar">Webinar</SelectItem>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="conocido">De un conocido</SelectItem>
                        <SelectItem value="otros">Otros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#031d40] font-semibold">Mensaje <span className="text-red-500">*</span></Label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Cuéntanos más sobre tu proyecto..." 
                      className="min-h-[180px] resize-none"
                      required
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-3 p-4 bg-[#031d40]/5 rounded-lg border border-[#031d40]/10">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consentChecked}
                      onChange={(e) => {
                        setConsentChecked(e.target.checked)
                        if (e.target.checked && errorMessage.includes("aceptar")) {
                          setErrorMessage("")
                        }
                      }}
                      className="w-5 h-5 mt-0.5 rounded border-gray-300 text-[#bbbd26] focus:ring-[#bbbd26] cursor-pointer flex-shrink-0"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed cursor-pointer flex-1">
                      Autorizo a Unnic AI a recopilar y procesar mis datos personales según la{" "}
                      <a href="/politica-privacidad" className="text-[#bbbd26] hover:underline font-semibold">
                        Política de Privacidad
                      </a>
                      . Podré revocar este consentimiento en cualquier momento desuscribiéndome de las comunicaciones.
                    </label>
                  </div>

                  {formState === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <Button 
                    className="w-full h-12 text-base bg-[#031d40] hover:bg-[#031d40]/90 text-white" 
                    size="lg"
                    type="submit"
                    disabled={formState === "loading"}
                  >
                    {formState === "loading" ? (
                      <>
                        Enviando...
                        <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#031d40]">Información de contacto</h3>
              <p className="text-gray-600 leading-relaxed">
                ¿Tienes alguna pregunta o quieres empezar un proyecto? 
                Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:contacto@unnic.ai" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#bbbd26]/10 flex items-center justify-center group-hover:bg-[#bbbd26] transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[#bbbd26] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-[#031d40] font-semibold">contacto@unnic.ai</p>
                  </div>
                </a>

                <a 
                  href="tel:+34610757689" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#bbbd26]/10 flex items-center justify-center group-hover:bg-[#bbbd26] transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#bbbd26] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Teléfono</p>
                    <p className="text-[#031d40] font-semibold">+34 610 757 689</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#bbbd26]/10 flex items-center justify-center group-hover:bg-[#bbbd26] transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-[#bbbd26] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Oficina</p>
                    <p className="text-[#031d40] font-semibold">Carrer de Gomis 38, 08023 Barcelona</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/company/93352502/" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, index) => (
                  null
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
