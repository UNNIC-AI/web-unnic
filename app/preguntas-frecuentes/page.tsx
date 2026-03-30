import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import { getFAQPageSchema, StructuredData } from "@/lib/structured-data"
import { FAQPageContent } from "@/components/faq-page-content"

export const metadata: Metadata = genMeta("faq")

const faqs = [
  { question: "¿Qué servicios ofrece Unnic AI?", answer: "Ofrecemos servicios de consultoría estratégica en IA, desarrollo de soluciones personalizadas con IA, automatización de procesos empresariales, integración de sistemas con IA, y formación especializada para equipos." },
  { question: "¿Cuánto tiempo tarda un proyecto de IA?", answer: "La duración varía según la complejidad del proyecto. Un proyecto de consultoría puede tomar 2-4 semanas, mientras que el desarrollo de una solución completa puede requerir 2-6 meses." },
  { question: "¿Qué sectores atienden?", answer: "Trabajamos con múltiples sectores incluyendo finanzas, salud, retail, manufactura, logística, educación y servicios profesionales." },
  { question: "¿Necesito conocimientos técnicos previos?", answer: "No es necesario. Nos encargamos de todo el proceso técnico y proporcionamos la formación necesaria." },
  { question: "¿Cómo garantizan la seguridad de nuestros datos?", answer: "Implementamos las mejores prácticas de seguridad incluyendo cifrado de datos, acceso controlado, auditorías regulares y cumplimiento con GDPR." },
  { question: "¿Cuál es el coste de implementar IA en mi empresa?", answer: "El coste varía según el alcance y complejidad del proyecto. Ofrecemos desde consultorías iniciales asequibles hasta soluciones enterprise completas." },
  { question: "¿Ofrecen soporte post-implementación?", answer: "Sí, ofrecemos diferentes planes de soporte que incluyen mantenimiento técnico, actualizaciones, resolución de incidencias, y mejoras continuas." },
  { question: "¿Qué tecnologías de IA utilizan?", answer: "Trabajamos con las tecnologías líderes del mercado incluyendo OpenAI (GPT), Anthropic (Claude), modelos open-source, frameworks como TensorFlow y PyTorch, y plataformas cloud." },
  { question: "¿Puedo integrar la IA con mis sistemas actuales?", answer: "Sí, diseñamos soluciones que se integran perfectamente con sus sistemas existentes incluyendo ERPs, CRMs, bases de datos y otras aplicaciones." },
  { question: "¿Cómo miden el ROI de un proyecto de IA?", answer: "Establecemos KPIs claros al inicio del proyecto que pueden incluir: reducción de costes operativos, aumento de productividad, mejora en precisión de predicciones." },
  { question: "¿Realizan proyectos piloto?", answer: "Sí, recomendamos empezar con un proyecto piloto o PoC (Proof of Concept) para validar la viabilidad y beneficios antes de una implementación completa." },
  { question: "¿Cómo empiezo a trabajar con Unnic AI?", answer: "El primer paso es agendar una consulta inicial gratuita. Contáctanos en contacto@unnic.ai o al +34 685 756 630." },
]

export default function PreguntasFrecuentesPage() {
  const faqSchema = getFAQPageSchema(faqs)

  return (
    <>
      <StructuredData data={faqSchema} />
      <Navigation />
      <FAQPageContent />
    </>
  )
}
