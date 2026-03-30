import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import { getFAQPageSchema, StructuredData } from "@/lib/structured-data"

export const metadata: Metadata = genMeta("faq")

const faqs = [
    {
      question: "¿Qué servicios ofrece Unnic AI?",
      answer:
        "Ofrecemos servicios de consultoría estratégica en IA, desarrollo de soluciones personalizadas con IA, automatización de procesos empresariales, integración de sistemas con IA, y formación especializada para equipos.",
    },
    {
      question: "¿Cuánto tiempo tarda un proyecto de IA?",
      answer:
        "La duración varía según la complejidad del proyecto. Un proyecto de consultoría puede tomar 2-4 semanas, mientras que el desarrollo de una solución completa puede requerir 2-6 meses. Realizamos una evaluación inicial para proporcionar un cronograma específico.",
    },
    {
      question: "¿Qué sectores atienden?",
      answer:
        "Trabajamos con múltiples sectores incluyendo finanzas, salud, retail, manufactura, logística, educación y servicios profesionales. Cada solución se personaliza según las necesidades específicas de cada industria.",
    },
    {
      question: "¿Necesito conocimientos técnicos previos?",
      answer:
        "No es necesario. Nos encargamos de todo el proceso técnico y proporcionamos la formación necesaria para que su equipo pueda utilizar las soluciones de IA de manera efectiva. Traducimos la complejidad técnica en resultados empresariales claros.",
    },
    {
      question: "¿Cómo garantizan la seguridad de nuestros datos?",
      answer:
        "Implementamos las mejores prácticas de seguridad incluyendo cifrado de datos, acceso controlado, auditorías regulares y cumplimiento con GDPR. Trabajamos con infraestructuras cloud seguras como AWS y Azure, y firmamos acuerdos de confidencialidad con todos nuestros clientes.",
    },
    {
      question: "¿Cuál es el coste de implementar IA en mi empresa?",
      answer:
        "El coste varía según el alcance y complejidad del proyecto. Ofrecemos desde consultorías iniciales asequibles hasta soluciones enterprise completas. Tras una reunión inicial gratuita, proporcionamos un presupuesto detallado adaptado a sus necesidades y presupuesto.",
    },
    {
      question: "¿Ofrecen soporte post-implementación?",
      answer:
        "Sí, ofrecemos diferentes planes de soporte que incluyen mantenimiento técnico, actualizaciones, resolución de incidencias, y mejoras continuas. También proporcionamos formación adicional cuando sea necesario.",
    },
    {
      question: "¿Qué tecnologías de IA utilizan?",
      answer:
        "Trabajamos con las tecnologías líderes del mercado incluyendo OpenAI (GPT), Anthropic (Claude), modelos open-source, frameworks como TensorFlow y PyTorch, y plataformas cloud como AWS, Azure y Google Cloud. Seleccionamos la tecnología más adecuada para cada proyecto.",
    },
    {
      question: "¿Puedo integrar la IA con mis sistemas actuales?",
      answer:
        "Sí, diseñamos soluciones que se integran perfectamente con sus sistemas existentes incluyendo ERPs (SAP, Odoo), CRMs, bases de datos, y otras aplicaciones empresariales. La integración se realiza de forma gradual para minimizar disrupciones.",
    },
    {
      question: "¿Cómo miden el ROI de un proyecto de IA?",
      answer:
        "Establecemos KPIs claros al inicio del proyecto que pueden incluir: reducción de costes operativos, aumento de productividad, mejora en precisión de predicciones, tiempo ahorrado en procesos, y aumento de ingresos. Proporcionamos informes regulares con métricas medibles.",
    },
    {
      question: "¿Realizan proyectos piloto?",
      answer:
        "Sí, recomendamos empezar con un proyecto piloto o PoC (Proof of Concept) para validar la viabilidad y beneficios antes de una implementación completa. Esto permite evaluar resultados con una inversión inicial controlada.",
    },
    {
      question: "¿Cómo empiezo a trabajar con Unnic AI?",
      answer:
        "El primer paso es agendar una consulta inicial gratuita. En esta reunión, analizamos tus necesidades, objetivos y situación actual. Después, preparamos una propuesta personalizada con plan de acción, cronograma y presupuesto. Contáctanos en contacto@unnic.ai o al +34 685 756 630.",
    },
  ]

export default function PreguntasFrecuentesPage() {
  const faqSchema = getFAQPageSchema(faqs)

  return (
    <>
      <StructuredData data={faqSchema} />
      <Navigation />
      <main className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#031d40] hover:text-[#bbbd26] transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de IA
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-gray-600 mb-6">
              Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-bold rounded-lg transition-all"
            >
              Contactar
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
