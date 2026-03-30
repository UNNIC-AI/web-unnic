"use client"

import { Navigation } from "@/components/navigation"
import { useState, useRef, useEffect } from "react"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Truck,
  UtensilsCrossed,
  HardHat,
  Factory,
  HeartPulse,
  ShoppingBag,
  Landmark,
  MonitorSmartphone,
  GraduationCap,
  Zap,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Brain,
  Route,
  Search,
  MessageSquare,
  CheckCircle,
  GitCompare,
  FileCheck,
  ClipboardList,
  Calculator,
  Building,
  Ruler,
  Shield,
  Star,
  ChefHat,
  BarChart3,
  Clock,
  Settings,
  BarChart2,
  Users,
  Code,
  Bug,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { successStories } from "@/lib/data"

// UnderlinedText component - same as rest of site
function UnderlinedText({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
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
      { threshold: 0.1, rootMargin: "-50px" },
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

// Industry data
const industries = [
  { id: "distribucion", name: "Distribución", icon: Truck },
  { id: "restauracion", name: "Restauración", icon: UtensilsCrossed },
  { id: "construccion", name: "Construcción", icon: HardHat },
  { id: "industrial", name: "Industrial", icon: Factory },
  { id: "salud", name: "Salud", icon: HeartPulse },
  { id: "retail", name: "Retail", icon: ShoppingBag },
  { id: "finanzas", name: "Finanzas", icon: Landmark },
  { id: "tecnologia", name: "Tecnología", icon: MonitorSmartphone },
  { id: "educacion", name: "Educación", icon: GraduationCap },
  { id: "energia", name: "Energía", icon: Zap },
]

const distribucionData = {
  headline: "Optimiza tus procesos y decisiones",
  description:
    "La inteligencia artificial está revolucionando la distribución y logística. Desde la predicción de demanda hasta la automatización de almacenes, descubre cómo las empresas del sector están reduciendo costes y mejorando su eficiencia operativa.",
  beneficios: [
    {
      icon: TrendingDown,
      title: "Reducción de costes",
      description: "Hasta un 30% menos en costes operativos gracias a la optimización inteligente de recursos",
    },
    {
      icon: AlertTriangle,
      title: "Reducción de errores e incidencias",
      description: "Minimiza errores humanos y detecta anomalías antes de que se conviertan en problemas",
    },
    {
      icon: Lightbulb,
      title: "Mejores decisiones",
      description: "Datos en tiempo real y análisis predictivo para tomar decisiones estratégicas con confianza",
    },
  ],
  casosDeUso: [
    {
      icon: Brain,
      title: "Predicción de demanda",
      description: "Modelos que anticipan las necesidades de stock por producto, temporada y ubicación",
    },
    {
      icon: Route,
      title: "Optimización de rutas",
      description: "Algoritmos que calculan las rutas más eficientes considerando tráfico y restricciones",
    },
    {
      icon: GitCompare,
      title: "Comparaciones automáticas",
      description: "Cotejo inteligente de documentos, precios y proveedores para optimizar compras",
    },
    {
      icon: Search,
      title: "Detección de anomalías",
      description: "IA que identifica pedidos inusuales, fraudes o errores antes de que ocurran",
    },
    {
      icon: CheckCircle,
      title: "Validación documental",
      description: "Cotejo automático de facturas, albaranes y pedidos con OCR avanzado",
    },
    {
      icon: MessageSquare,
      title: "Atención automatizada",
      description: "Chatbots para gestionar consultas de clientes y proveedores 24/7",
    },
  ],
  faqs: [
    {
      question: "¿Qué tipo de procesos se pueden automatizar en empresas de distribución?",
      answer:
        "Podemos automatizar tareas como gestión de pedidos, control de stock, previsión de demanda, conciliación de albaranes y facturas, clasificación de emails, creación de rutas y generación de informes. La automatización reduce errores y libera tiempo operativo desde el primer mes.",
    },
    {
      question: "¿Qué beneficios concretos aporta la IA en la distribución?",
      answer:
        "Aumenta la visibilidad del inventario, mejora la planificación, reduce roturas de stock, optimiza rutas, acelera la atención al cliente y disminuye tiempos muertos en almacén. En la mayoría de casos, se consigue un ROI en menos de 6 meses.",
    },
    {
      question: "¿Necesito tener mis datos muy ordenados para implementar IA?",
      answer:
        "No. Empezamos analizando tus datos actuales y evaluando qué puede aprovecharse tal como está. Si es necesario, diseñamos pasos para organizar o estructurar la información, pero nunca retrasamos el proyecto por ello.",
    },
    {
      question: "¿Cuánto tiempo lleva implantar una solución de IA o automatización?",
      answer:
        "Depende del proyecto, pero los quick wins suelen estar listos en 4–8 semanas. Proyectos más amplios, como optimización de stock o asistentes internos, pueden llevar entre 6 y 12 meses.",
    },
    {
      question: "¿Las soluciones se integran con mis sistemas actuales (ERP, WMS, CRM)?",
      answer:
        "Sí. Nos integramos con los sistemas que ya utilizas (como SAGE, SAP, Odoo, Dynamics, Generix, etc.). Analizamos tus herramientas y diseñamos la solución para convivir con ellas sin cambios en tu operativa.",
    },
    {
      question: "¿Puede la IA mejorar la previsión de demanda o rotación de inventario?",
      answer:
        "Sí. Modelos predictivos analizan históricos, estacionalidad, categorías, clientes y tendencias para mejorar la previsión de demanda y optimizar compras. Esto reduce tanto el exceso de stock como las roturas.",
    },
    {
      question: "¿Es seguro aplicar IA en procesos críticos como la logística o compras?",
      answer:
        "Totalmente. Implementamos controles, validaciones humanas y trazabilidad de todas las decisiones automáticas. Siempre priorizamos fiabilidad y estabilidad antes que velocidad.",
    },
    {
      question: "¿Qué tamaño debe tener mi empresa para aplicar estas soluciones?",
      answer:
        "Trabajamos con pymes y medianas empresas de distribución. No necesitas ser una gran corporación para beneficiarte: muchas mejoras se pueden aplicar con datos básicos y procesos ya existentes.",
    },
    {
      question: "¿Qué inversión inicial se necesita?",
      answer:
        "Depende del proyecto, pero la mayoría de soluciones de automatización tienen un coste accesible y un retorno rápido. Buscamos que cualquier propuesta tenga un impacto claro en ahorros o productivity.",
    },
    {
      question: "¿Cómo empezamos?",
      answer:
        "Con una fase de Análisis donde entendemos tu operación, tus datos y tus necesidades. A partir de ahí, definimos un plan claro de oportunidades y priorizamos los proyectos con mejor retorno para tu negocio.",
    },
  ],
}

const construccionData = {
  headline: "Digitaliza y optimiza tu gestión de obra",
  description:
    "La inteligencia artificial está transformando el sector de la construcción. Desde la validación automática de documentos hasta la predicción de desviaciones en proyectos, descubre cómo las empresas del sector están ganando eficiencia y control.",
  beneficios: [
    {
      icon: TrendingDown,
      title: "Reducción de costes",
      description: "Hasta un 25% menos en costes administrativos gracias a la automatización documental",
    },
    {
      icon: AlertTriangle,
      title: "Reducción de errores e incidencias",
      description: "Minimiza discrepancias en facturas, albaranes y pedidos con validación automática",
    },
    {
      icon: Lightbulb,
      title: "Mejores decisiones",
      description: "Visibilidad completa de proyectos y proveedores para decisiones más informadas",
    },
  ],
  casosDeUso: [
    {
      icon: FileCheck,
      title: "Validación de facturas",
      description: "Cotejo automático de facturas con pedidos y albaranes mediante OCR e IA",
    },
    {
      icon: ClipboardList,
      title: "Gestión documental",
      description: "Clasificación y extracción automática de datos de documentos de obra",
    },
    {
      icon: Calculator,
      title: "Control de costes",
      description: "Seguimiento en tiempo real de desviaciones presupuestarias por proyecto",
    },
    {
      icon: Building,
      title: "Gestión de proveedores",
      description: "Evaluación automática de proveedores basada en histórico y rendimiento",
    },
    {
      icon: Ruler,
      title: "Planificación predictiva",
      description: "Modelos que anticipan retrasos y cuellos de botella en la ejecución",
    },
    {
      icon: Shield,
      title: "Cumplimiento normativo",
      description: "Verificación automática de documentación legal y certificaciones",
    },
  ],
  faqs: [
    {
      question: "¿Qué procesos se pueden automatizar en una empresa de construcción?",
      answer:
        "Podemos automatizar tareas como gestión de documentación de obra, control de albaranes, seguimiento de materiales, planificación de recursos, informes de avance, control de costes y comunicación entre oficinas y obra. El objetivo es reducir papeleo y evitar desviaciones.",
    },
    {
      question: "¿Qué beneficios aporta la IA en el sector de la construcción?",
      answer:
        "La IA ayuda a prever desviaciones de coste, anticipar retrasos, mejorar la planificación de obra, optimizar compras y controlar el uso real de materiales. También permite centralizar documentación y reducir errores que suelen aparecer en procesos manuales.",
    },
    {
      question: "¿Necesito tener todos mis procesos digitalizados para aplicar IA?",
      answer:
        "No. Empezamos entendiendo tu operación actual y los sistemas que utilizas. A partir de ahí identificamos oportunidades aplicables incluso si parte del proceso sigue en Excel, WhatsApp o papel.",
    },
    {
      question: "¿Puede la IA ayudar a reducir desviaciones de obra?",
      answer:
        "Sí. Analiza históricos, ritmos de obra, consumos, partes, costes previstos vs. reales y modelos de planificación. Esto permite anticipar retrasos, detectar sobrecostes y tomar decisiones antes de que el problema sea crítico.",
    },
    {
      question: "¿Las soluciones se integran con mi software actual (Presto, Sigrid, SAGE, ERP…)?",
      answer:
        "Sí. Nos adaptamos a tu stack actual y desarrollamos integraciones que funcionan con tus herramientas de obra, gestión o contabilidad. No necesitas cambiar de sistema para implementar IA.",
    },
    {
      question: "¿Puedo digitalizar la gestión de albaranes, partes o certificaciones?",
      answer:
        "Sí. Automatizamos la recepción, clasificación y consolidación de documentos mediante OCR avanzado y flujos de trabajo automáticos. Así evitas errores, duplicados y pérdidas de información.",
    },
    {
      question: "¿La IA mejora la coordinación entre oficina y obra?",
      answer:
        "Mucho. Podemos centralizar información, automatizar la actualización de avances, generar informes diarios, enviar avisos automáticos y estructurar la comunicación entre equipos sin depender de llamadas o notas.",
    },
    {
      question: "¿Qué tamaño mínimo debe tener la empresa para beneficiarse?",
      answer:
        "Trabajamos con constructoras, instaladoras y empresas de reformas de cualquier tamaño que gestionen obras, equipos y documentación. Las pymes del sector suelen obtener retornos muy rápidos.",
    },
    {
      question: "¿Qué retorno puedo esperar?",
      answer:
        "Depende del proyecto, pero en construcción el ROI suele ser muy claro: menos errores, menor desviación, menos horas dedicadas a papeleo y una planificación más fiable. Muchos proyectos recuperan la inversión en menos de seis meses.",
    },
    {
      question: "¿Cómo empezamos?",
      answer:
        "Con una fase de Análisis del funcionamiento de tus obras, tus equipos, tus sistemas y tus datos. Identificamos dónde la IA puede generar impacto inmediato y definimos un plan de implantación priorizado.",
    },
  ],
}

const restauracionData = {
  headline: "Mejora la experiencia y optimiza operaciones",
  description:
    "La inteligencia artificial está transformando la restauración y hostelería. Desde el análisis de reseñas hasta la predicción de demanda, descubre cómo los grupos de restauración están mejorando la experiencia del cliente y reduciendo costes operativos.",
  beneficios: [
    {
      icon: Star,
      title: "Mejor experiencia cliente",
      description: "Detecta y resuelve problemas antes de que impacten en la satisfacción del cliente",
    },
    {
      icon: TrendingDown,
      title: "Reducción de costes",
      description: "Optimiza compras, reduce desperdicio alimentario y mejora la eficiencia operativa",
    },
    {
      icon: BarChart3,
      title: "Decisiones basadas en datos",
      description: "Convierte reseñas y datos operativos en insights accionables para tu negocio",
    },
  ],
  casosDeUso: [
    {
      icon: Star,
      title: "Análisis de reseñas con IA",
      description: "Clasificación automática de opiniones por temática y sentimiento para detectar problemas",
    },
    {
      icon: Brain,
      title: "Predicción de demanda",
      description: "Modelos que anticipan la afluencia y consumo para optimizar personal y compras",
    },
    {
      icon: ClipboardList,
      title: "Gestión inteligente de inventario",
      description: "Control automático de stock con alertas de reposición y caducidad",
    },
    {
      icon: MessageSquare,
      title: "Atención al cliente 24/7",
      description: "Chatbots para reservas, consultas y gestión de incidencias sin esperas",
    },
    {
      icon: ChefHat,
      title: "Optimización de menús",
      description: "Análisis de rentabilidad y preferencias para diseñar cartas más efectivas",
    },
    {
      icon: Clock,
      title: "Planificación de turnos",
      description: "Asignación inteligente de personal basada en previsión de demanda",
    },
  ],
  faqs: [
    {
      question: "¿Qué procesos se pueden automatizar en restauración?",
      answer:
        "Podemos automatizar análisis de reseñas, gestión de reservas, control de inventario, predicción de demanda, planificación de turnos, gestión de proveedores y generación de informes operativos. La automatización reduce errores y libera tiempo para enfocarse en la experiencia del cliente.",
    },
    {
      question: "¿Cómo puede la IA mejorar la experiencia del cliente?",
      answer:
        "La IA analiza reseñas y feedback en tiempo real, detecta problemas antes de que escalen, personaliza recomendaciones y permite respuestas más rápidas a incidencias. Esto se traduce en mayor satisfacción y fidelización.",
    },
    {
      question: "¿Necesito tener muchos datos para empezar?",
      answer:
        "No necesariamente. Podemos empezar con los datos que ya tienes: reseñas de Google, histórico de ventas, datos del TPV. Analizamos qué información está disponible y diseñamos soluciones adaptadas a tu situación actual.",
    },
    {
      question: "¿Cuánto tiempo lleva implementar una solución?",
      answer:
        "Depende del proyecto. Soluciones como análisis de reseñas pueden estar operativas en 4-6 semanas. Proyectos más complejos como predicción de demanda o gestión integral de inventario pueden llevar de 2 a 4 meses.",
    },
    {
      question: "¿Se integra con mi TPV y sistemas actuales?",
      answer:
        "Sí. Nos integramos con los principales TPV del mercado (Revo, Last, Agora, etc.) y con plataformas de reservas, delivery y gestión. Analizamos tus herramientas y diseñamos la integración óptima.",
    },
    {
      question: "¿Puede la IA reducir el desperdicio alimentario?",
      answer:
        "Absolutamente. Con predicción de demanda precisa, ajustamos las compras al consumo real. Nuestros clientes han reducido el desperdicio entre un 20% y 35%, lo que impacta directamente en costes y sostenibilidad.",
    },
    {
      question: "¿Cómo funciona el análisis de reseñas?",
      answer:
        "Conectamos con Google My Business y otras plataformas para importar reseñas automáticamente. La IA clasifica cada opinión por temática (servicio, comida, ambiente, precio) y sentimiento, generando dashboards con alertas en tiempo real.",
    },
    {
      question: "¿Es útil para una sola ubicación o solo para cadenas?",
      answer:
        "Es útil para ambos. Un restaurante individual puede beneficiarse del análisis de reseñas y predicción de demanda. Las cadenas además aprovechan la comparativa entre locales y la estandarización de procesos.",
    },
    {
      question: "¿Cuál es el retorno de inversión esperado?",
      answer:
        "El ROI típico en restauración incluye reducción de 20-30% en desperdicio, mejora de 15-25% en eficiencia operativa y aumento de satisfacción del cliente. La mayoría de clientes recuperan la inversión en menos de 6 meses.",
    },
    {
      question: "¿Cómo empezamos?",
      answer:
        "Agendamos una llamada de diagnóstico gratuita para entender tu operativa, identificar oportunidades y proponerte un plan con quick wins de alto impacto. Sin compromiso y con total transparencia.",
    },
  ],
}

const industrialData = {
  headline: "Impulsa tu producción con IA",
  description:
    "La inteligencia artificial está transformando la industria manufacturera. Desde la optimización de procesos hasta el mantenimiento predictivo, descubre cómo las empresas industriales están aumentando su productividad y reduciendo costes operativos.",
  beneficios: [
    {
      icon: TrendingDown,
      title: "Reducción de costes",
      description: "Hasta un 35% menos en costes operativos gracias a la optimización de procesos y recursos",
    },
    {
      icon: AlertTriangle,
      title: "Reducción de errores e incidencias",
      description: "Minimiza defectos de producción y detecta fallos antes de que afecten a la calidad",
    },
    {
      icon: Lightbulb,
      title: "Mejores decisiones",
      description: "Datos en tiempo real de producción para tomar decisiones estratégicas con confianza",
    },
  ],
  casosDeUso: [
    {
      icon: Brain,
      title: "Mantenimiento predictivo",
      description: "Modelos que anticipan fallos en maquinaria antes de que ocurran paradas no planificadas",
    },
    {
      icon: Settings, // Added icon
      title: "Optimización de producción",
      description: "Algoritmos que maximizan el rendimiento de líneas de producción y recursos",
    },
    {
      icon: CheckCircle,
      title: "Control de calidad automático",
      description: "Visión artificial para detectar defectos en productos de forma instantánea",
    },
    {
      icon: Search,
      title: "Gestión de conocimiento",
      description: "Asistentes RAG que centralizan y facilitan el acceso al conocimiento técnico interno",
    },
    {
      icon: FileCheck,
      title: "Generación de ofertas",
      description: "Automatización de cotizaciones y propuestas basadas en históricos y reglas de negocio",
    },
    {
      icon: GitCompare,
      title: "Cotejo de pedidos",
      description: "Validación automática entre pedidos, ofertas y especificaciones técnicas",
    },
  ],
  casoDeExito: {
    id: "pinturas-personalizadas",
    company: "Empresa de Pinturas Personalizadas",
    logo: "EP",
    logoGradient: "from-blue-600 to-indigo-500",
    industry: "Industrial & Fabricación",
    year: "2025",
    service: "Consultoría Estratégica de IA",
    challenge:
      "Fabricante español de pinturas personalizadas afrontaba fuerte dependencia de procesos manuales, herramientas tecnológicas poco integradas y centralización del conocimiento crítico en perfiles clave. Esto generaba cuellos de botella en formulación de productos, generación y validación de ofertas, gestión de pedidos y transferencia de conocimiento técnico.",
    solution:
      "Unnic AI ejecutó una consultoría estratégica en dos fases: 1) Análisis exhaustivo mediante entrevistas con todas las áreas críticas y mapeo completo de procesos; 2) Definición de hoja de ruta con cuatro soluciones concretas: asistente RAG de conocimiento interno, modelo predictivo de formulación, generador automatizado de ofertas y sistema de cotejo inteligente pedidos-ofertas.",
    results: [
      { metric: "+4", description: "Proyectos con ROI < 6 meses" },
      { metric: "80%", description: "Menos tiempo en búsqueda de información" },
      { metric: "9,7/10", description: "Valoración del cliente" },
    ],
    image: "/paint-manufacturing-facility.jpg",
  },
  faqs: [
    {
      question: "¿Qué tipo de procesos se pueden automatizar en empresas industriales?",
      answer:
        "Podemos automatizar tareas como control de calidad visual, mantenimiento predictivo, planificación de producción, gestión de conocimiento técnico, generación de ofertas, cotejo de pedidos y documentación técnica. La automatización reduce errores y libera tiempo operativo desde el primer mes.",
    },
    {
      question: "¿Qué beneficios concretos aporta la IA en la industria?",
      answer:
        "Aumenta la eficiencia de producción, reduce tiempos de parada no planificados, mejora la calidad del producto, optimiza el uso de materias primas y acelera la toma de decisiones. En la mayoría de casos, se consigue un ROI en menos de 6 meses.",
    },
    {
      question: "¿Necesito tener mis datos muy ordenados para implementar IA?",
      answer:
        "No. Empezamos analizando tus datos actuales y evaluando qué puede aprovecharse tal como está. Si es necesario, diseñamos pasos para organizar o estructurar la información, pero nunca retrasamos el proyecto por ello.",
    },
    {
      question: "¿Cuánto tiempo lleva implantar una solución de IA en producción?",
      answer:
        "Depende del proyecto, pero los quick wins suelen estar listos en 4–8 semanas. Proyectos más amplios, como mantenimiento predictivo o control de calidad automatizado, pueden llevar entre 3 y 9 meses.",
    },
    {
      question: "¿Las soluciones se integran con mis sistemas actuales (ERP, MES, SCADA)?",
      answer:
        "Sí. Nos integramos con los sistemas que ya utilizas (como SAP, SAGE, Odoo, sistemas MES, SCADA, etc.). Analizamos tus herramientas y diseñamos la solución para convivir con ellas sin cambios en tu operativa.",
    },
    {
      question: "¿La IA puede ayudar con la formulación de productos?",
      answer:
        "Sí. Desarrollamos modelos predictivos que aprenden de históricos de formulación para sugerir composiciones óptimas, reduciendo pruebas de laboratorio y acelerando el tiempo de desarrollo de nuevos productos.",
    },
    {
      question: "¿Cómo centralizar el conocimiento técnico de empleados clave?",
      answer:
        "Creamos asistentes RAG (Retrieval-Augmented Generation) que indexan documentación técnica, históricos y conocimiento tácito, permitiendo consultas en lenguaje natural y reduciendo la dependencia de personas específicas.",
    },
    {
      question: "¿Qué pasa si mi empresa es pequeña o mediana?",
      answer:
        "Nuestras soluciones son escalables y se adaptan al tamaño de tu empresa. Empezamos con proyectos pequeños y de alto impacto para demostrar valor antes de escalar.",
    },
    {
      question: "¿Cuál es la inversión inicial necesaria?",
      answer:
        "Depende del alcance del proyecto. Ofrecemos desde consultorías estratégicas hasta desarrollos completos. Siempre buscamos que el ROI sea claro y medible desde el primer proyecto.",
    },
    {
      question: "¿Cómo puedo empezar?",
      answer:
        "Agenda una llamada de diagnóstico gratuita. En 30 minutos entendemos tu situación, identificamos oportunidades y te proponemos un plan de acción concreto sin compromiso.",
    },
  ],
}

const cataloniaCeramicCase = successStories.find((s) => s.id === "catalonia-ceramic")
const construccionCase = successStories.find((s) => s.id === "construccion-distributor")
const conectapCase = successStories.find((story) => story.id === "conectap")
const pinturasCase = successStories.find((s) => s.id === "pinturas-personalizadas")
const viviCoachingCase = successStories.find((s) => s.id === "vivi-coaching")

const saludData = {
  headline: "Transforma la atención sanitaria",
  description:
    "La inteligencia artificial está revolucionando el sector salud, desde el diagnóstico hasta la gestión hospitalaria. Descubre cómo podemos ayudarte a mejorar la atención al paciente y optimizar tus operaciones.",
  beneficios: [
    {
      icon: TrendingDown,
      title: "Reducción de costes",
      description: "Hasta un 30% menos en costes operativos gracias a la automatización de procesos administrativos",
    },
    {
      icon: AlertTriangle,
      title: "Reducción de errores",
      description: "Minimiza errores en diagnósticos, prescripciones y gestión de historiales clínicos",
    },
    {
      icon: Lightbulb,
      title: "Mejores decisiones",
      description: "Datos clínicos en tiempo real para tomar decisiones médicas con mayor precisión y rapidez",
    },
  ],
  casosDeUso: [
    {
      icon: Brain,
      title: "Asistentes de diagnóstico",
      description: "IA que ayuda a los profesionales a interpretar síntomas y sugerir diagnósticos diferenciales",
    },
    {
      icon: FileCheck,
      title: "Automatización administrativa",
      description: "Gestión automática de citas, historiales, informes y documentación clínica",
    },
    {
      icon: MessageSquare,
      title: "Chatbots de triaje",
      description: "Atención 24/7 para orientar a pacientes y derivar según urgencia y especialidad",
    },
    {
      icon: Search,
      title: "Análisis de historiales",
      description: "Extracción inteligente de información clave de historiales clínicos extensos",
    },
    {
      icon: BarChart2,
      title: "Predicción de demanda",
      description: "Modelos que anticipan picos de demanda para optimizar recursos y personal",
    },
    {
      icon: Users,
      title: "Coaching y bienestar",
      description: "Aplicaciones de IA conversacional para apoyo emocional y seguimiento de hábitos",
    },
  ],
  casoDeExito: viviCoachingCase,
  faqs: [
    {
      question: "¿Qué tipo de procesos se pueden automatizar en el sector salud?",
      answer:
        "Podemos automatizar gestión de citas, triaje inicial, documentación clínica, informes médicos, seguimiento de pacientes, recordatorios de medicación y análisis de historiales. La automatización reduce carga administrativa y permite a los profesionales centrarse en la atención.",
    },
    {
      question: "¿Qué beneficios concretos aporta la IA en salud?",
      answer:
        "Mejora la precisión diagnóstica, reduce tiempos de espera, optimiza la gestión de recursos, facilita el seguimiento de pacientes crónicos y mejora la experiencia del paciente. En la mayoría de casos, se consigue un ROI en menos de 12 meses.",
    },
    {
      question: "¿Cómo se garantiza la privacidad de los datos de pacientes?",
      answer:
        "Cumplimos estrictamente con GDPR, HIPAA y normativas sanitarias locales. Implementamos encriptación de extremo a extremo, anonimización de datos y, cuando es necesario, desplegamos modelos en infraestructura propia del cliente.",
    },
    {
      question: "¿Cuánto tiempo lleva implantar una solución de IA en salud?",
      answer:
        "Depende del proyecto. Chatbots de triaje o automatización administrativa pueden estar listos en 4-8 semanas. Proyectos más complejos como asistentes de diagnóstico pueden llevar entre 3 y 6 meses.",
    },
    {
      question: "¿Las soluciones se integran con sistemas de gestión hospitalaria (HIS)?",
      answer:
        "Sí. Nos integramos con los sistemas que ya utilizas (Epic, Cerner, SAP Healthcare, etc.). Analizamos tus herramientas y diseñamos la solución para convivir con ellas sin cambios en tu operativa.",
    },
    {
      question: "¿La IA puede ayudar con la atención emocional y coaching?",
      answer:
        "Sí. Desarrollamos aplicaciones de IA conversacional con voz y texto que proporcionan apoyo emocional, seguimiento de hábitos y coaching personalizado, siempre como complemento a la atención profesional.",
    },
    {
      question: "¿Cómo ayuda la IA en la gestión de documentación clínica?",
      answer:
        "Automatizamos la transcripción de consultas, generación de informes, extracción de datos de historiales y clasificación de documentos, reduciendo hasta un 70% el tiempo administrativo de los profesionales.",
    },
    {
      question: "¿Qué pasa si mi centro es pequeño?",
      answer:
        "Nuestras soluciones son escalables y se adaptan al tamaño de tu organización. Empezamos con proyectos pequeños y de alto impacto para demostrar valor antes de escalar.",
    },
    {
      question: "¿Cuál es la inversión inicial necesaria?",
      answer:
        "Depende del alcance del proyecto. Ofrecemos desde consultorías estratégicas hasta desarrollos completos. Siempre buscamos que el ROI sea claro y medible desde el primer proyecto.",
    },
    {
      question: "¿Cómo puedo empezar?",
      answer:
        "Agenda una llamada de diagnóstico gratuita. En 30 minutos entendemos tu situación, identificamos oportunidades y te proponemos un plan de acción concreto sin compromiso.",
    },
  ],
}

const retailData = {
  headline: "Transforma tu comercio con IA",
  description:
    "La inteligencia artificial está revolucionando el retail. Desde la personalización de la experiencia del cliente hasta la optimización del inventario, descubre cómo las empresas del sector están aumentando ventas y fidelizando clientes.",
  beneficios: [
    {
      icon: TrendingDown,
      title: "Reducción de costes",
      description: "Hasta un 25% menos en costes operativos gracias a la optimización de inventario y procesos",
    },
    {
      icon: AlertTriangle,
      title: "Reducción de errores e incidencias",
      description: "Minimiza roturas de stock, errores en pedidos y problemas de atención al cliente",
    },
    {
      icon: Lightbulb,
      title: "Mejores decisiones",
      description: "Datos de ventas y comportamiento del cliente en tiempo real para decisiones estratégicas",
    },
  ],
  casosDeUso: [
    {
      icon: Users,
      title: "Personalización de experiencia",
      description: "Recomendaciones de productos basadas en comportamiento y preferencias del cliente",
    },
    {
      icon: BarChart2,
      title: "Predicción de demanda",
      description: "Modelos que anticipan tendencias de ventas para optimizar stock y compras",
    },
    {
      icon: MessageSquare,
      title: "Atención al cliente 24/7",
      description: "Chatbots inteligentes que resuelven dudas, gestionan pedidos y fidelizan clientes",
    },
    {
      icon: Search,
      title: "Análisis de comportamiento",
      description: "Insights sobre patrones de compra para optimizar layout, promociones y pricing",
    },
    {
      icon: FileCheck,
      title: "Gestión automatizada de inventario",
      description: "Control inteligente de stock con alertas predictivas y reposición automática",
    },
    {
      icon: GitCompare,
      title: "Optimización de precios",
      description: "Pricing dinámico basado en demanda, competencia y márgenes objetivos",
    },
  ],
  casoDeExito: null, // No hay caso de éxito de Retail
  faqs: [
    {
      question: "¿Qué tipo de procesos se pueden automatizar en retail?",
      answer:
        "Podemos automatizar atención al cliente, gestión de inventario, recomendaciones de productos, análisis de ventas, predicción de demanda, pricing dinámico y gestión de pedidos. La automatización mejora la experiencia del cliente y optimiza operaciones desde el primer mes.",
    },
    {
      question: "¿Qué beneficios concretos aporta la IA en el comercio?",
      answer:
        "Aumenta las ventas mediante personalización, reduce roturas de stock, mejora la satisfacción del cliente, optimiza el inventario y facilita la toma de decisiones. En la mayoría de casos, se consigue un ROI en menos de 6 meses.",
    },
    {
      question: "¿Necesito tener una tienda online para beneficiarme de la IA?",
      answer:
        "No. La IA aporta valor tanto en comercio físico como online. En tiendas físicas optimizamos inventario, analizamos comportamiento y mejoramos la atención. En ecommerce además personalizamos la experiencia digital.",
    },
    {
      question: "¿Cuánto tiempo lleva implantar una solución de IA en retail?",
      answer:
        "Depende del proyecto. Chatbots de atención o sistemas de recomendación básicos pueden estar listos en 4-8 semanas. Proyectos más complejos como predicción de demanda pueden llevar entre 3 y 6 meses.",
    },
    {
      question: "¿Las soluciones se integran con mi sistema de gestión (ERP, TPV)?",
      answer:
        "Sí. Nos integramos con los sistemas que ya utilizas (Shopify, WooCommerce, SAP, SAGE, etc.). Analizamos tus herramientas y diseñamos la solución para convivir con ellas sin cambios en tu operativa.",
    },
    {
      question: "¿La IA puede ayudar a fidelizar clientes?",
      answer:
        "Sí. Desarrollamos sistemas de recomendación personalizados, programas de fidelización inteligentes y comunicaciones automatizadas que aumentan la recurrencia y el ticket medio de tus clientes.",
    },
    {
      question: "¿Cómo ayuda la IA en la gestión de inventario?",
      answer:
        "Predecimos demanda por producto y ubicación, generamos alertas de reposición, identificamos productos de baja rotación y optimizamos el espacio en almacén y tienda. Reducimos hasta un 30% el capital inmovilizado en stock.",
    },
    {
      question: "¿Qué pasa si mi negocio es pequeño?",
      answer:
        "Nuestras soluciones son escalables y se adaptan al tamaño de tu negocio. Empezamos con proyectos pequeños y de alto impacto para demostrar valor antes de escalar.",
    },
    {
      question: "¿Cuál es la inversión inicial necesaria?",
      answer:
        "Depende del alcance del proyecto. Ofrecemos desde consultorías estratégicas hasta desarrollos completos. Siempre buscamos que el ROI sea claro y medible desde el primer proyecto.",
    },
    {
      question: "¿Cómo puedo empezar?",
      answer:
        "Agenda una llamada de diagnóstico gratuita. En 30 minutos entendemos tu situación, identificamos oportunidades y te proponemos un plan de acción concreto sin compromiso.",
    },
  ],
}

const finanzasData = {
  headline: "Optimiza tus procesos financieros",
  description:
    "La inteligencia artificial está transformando el sector financiero. Desde la detección de fraude hasta la automatización de análisis, descubre cómo las empresas financieras están mejorando la eficiencia y reduciendo riesgos.",
  beneficios: [
    {
      icon: TrendingDown,
      title: "Reducción de costes",
      description: "Hasta un 40% menos en costes operativos gracias a la automatización de procesos financieros",
    },
    {
      icon: AlertTriangle,
      title: "Reducción de errores e incidencias",
      description: "Minimiza errores en transacciones, informes y cumplimiento normativo",
    },
    {
      icon: Lightbulb,
      title: "Mejores decisiones",
      description: "Análisis predictivo y datos en tiempo real para decisiones de inversión y riesgo más precisas",
    },
  ],
  casosDeUso: [
    {
      icon: Shield,
      title: "Detección de fraude",
      description: "Modelos que identifican patrones sospechosos y transacciones fraudulentas en tiempo real",
    },
    {
      icon: BarChart2,
      title: "Análisis predictivo de riesgos",
      description: "Evaluación automática de riesgos crediticios y de inversión con mayor precisión",
    },
    {
      icon: FileCheck,
      title: "Automatización de informes",
      description: "Generación automática de informes financieros, regulatorios y de cumplimiento",
    },
    {
      icon: MessageSquare,
      title: "Atención al cliente 24/7",
      description: "Chatbots especializados para consultas de cuentas, productos y operaciones bancarias",
    },
    {
      icon: Search,
      title: "Análisis de documentación",
      description: "Extracción inteligente de datos de contratos, pólizas y documentación legal",
    },
    {
      icon: GitCompare,
      title: "Conciliación automática",
      description: "Cotejo y validación automática de transacciones, facturas y movimientos bancarios",
    },
  ],
  casoDeExito: null, // No hay caso de éxito de Finanzas (placeholder updated below)
  faqs: [
    {
      question: "¿Qué tipo de procesos se pueden automatizar en finanzas?",
      answer:
        "Podemos automatizar conciliación bancaria, detección de fraude, análisis de riesgos, generación de informes, atención al cliente, extracción de datos de documentos y cumplimiento normativo. La automatización reduce errores y libera tiempo operativo desde el primer mes.",
    },
    {
      question: "¿Qué beneficios concretos aporta la IA en el sector financiero?",
      answer:
        "Mejora la detección de fraude, reduce tiempos de análisis, optimiza la gestión de riesgos, automatiza el cumplimiento regulatorio y mejora la experiencia del cliente. En la mayoría de casos, se consigue un ROI en menos de 6 meses.",
    },
    {
      question: "¿Cómo se garantiza la seguridad de los datos financieros?",
      answer:
        "Cumplimos estrictamente con GDPR, PCI-DSS y normativas financieras. Implementamos encriptación de extremo a extremo, auditoría de accesos y, cuando es necesario, desplegamos modelos en infraestructura propia del cliente.",
    },
    {
      question: "¿Cuánto tiempo lleva implantar una solución de IA en finanzas?",
      answer:
        "Depende del proyecto. Chatbots de atención o automatización de informes pueden estar listos en 4-8 semanas. Proyectos más complejos como detección de fraude pueden llevar entre 3 y 6 meses.",
    },
    {
      question: "¿Las soluciones se integran con sistemas bancarios y ERPs?",
      answer:
        "Sí. Nos integramos con core bancarios, ERPs financieros (SAP, Oracle, SAGE), plataformas de trading y sistemas de gestión de riesgos. Analizamos tus herramientas y diseñamos la solución para convivir con ellas.",
    },
    {
      question: "¿La IA puede ayudar con el cumplimiento normativo?",
      answer:
        "Sí. Automatizamos la generación de informes regulatorios, monitorización de operaciones sospechosas (AML), verificación de identidad (KYC) y auditoría de cumplimiento, reduciendo riesgos y costes.",
    },
    {
      question: "¿Cómo ayuda la IA en la gestión de documentación financiera?",
      answer:
        "Automatizamos la extracción de datos de contratos, facturas, pólizas y documentación legal, clasificamos documentos automáticamente y facilitamos búsquedas inteligentes en grandes volúmenes de información.",
    },
    {
      question: "¿Qué pasa si mi empresa financiera es pequeña?",
      answer:
        "Nuestras soluciones son escalables y se adaptan al tamaño de tu organización. Empezamos con proyectos pequeños y de alto impacto para demostrar valor antes de escalar.",
    },
    {
      question: "¿Cuál es la inversión inicial necesaria?",
      answer:
        "Depende del alcance del proyecto. Ofrecemos desde consultorías estratégicas hasta desarrollos completos. Siempre buscamos que el ROI sea claro y medible desde el primer proyecto.",
    },
    {
      question: "¿Cómo puedo empezar?",
      answer:
        "Agenda una llamada de diagnóstico gratuita. En 30 minutos entendemos tu situación, identificamos oportunidades y te proponemos un plan de acción concreto sin compromiso.",
    },
  ],
}

const tecnologiaData = {
  headline: "Acelera tu desarrollo con IA",
  description:
    "La inteligencia artificial está transformando el sector tecnológico. Desde la automatización de desarrollo hasta la optimización de infraestructura, descubre cómo las empresas tech están mejorando su productividad y calidad del software.",
  beneficios: [
    {
      icon: TrendingDown,
      title: "Reducción de costes",
      description: "Hasta un 40% menos en costes de desarrollo gracias a la automatización y optimización",
    },
    {
      icon: AlertTriangle,
      title: "Reducción de errores e incidencias",
      description: "Minimiza bugs, vulnerabilidades y problemas de rendimiento antes de producción",
    },
    {
      icon: Lightbulb,
      title: "Mejores decisiones",
      description: "Análisis de código y métricas en tiempo real para tomar decisiones técnicas con confianza",
    },
  ],
  casosDeUso: [
    {
      icon: Code,
      title: "Asistentes de código",
      description: "Copilots de IA que aceleran el desarrollo, sugieren soluciones y documentan código automáticamente",
    },
    {
      icon: Bug,
      title: "Detección de bugs",
      description: "Análisis automático de código para identificar errores, vulnerabilidades y code smells",
    },
    {
      icon: FileCheck,
      title: "Generación de tests",
      description: "Creación automática de tests unitarios y de integración basados en el código existente",
    },
    {
      icon: Search,
      title: "Documentación automática",
      description: "Generación de documentación técnica, APIs y comentarios de código con IA",
    },
    {
      icon: BarChart2,
      title: "Monitorización predictiva",
      description: "Predicción de fallos en infraestructura y aplicaciones antes de que ocurran",
    },
    {
      icon: GitCompare,
      title: "Code reviews automáticos",
      description: "Revisión inteligente de pull requests con sugerencias de mejora y detección de problemas",
    },
  ],
  casoDeExito: null,
  faqs: [
    {
      question: "¿Qué tipo de procesos se pueden automatizar en empresas de tecnología?",
      answer:
        "Podemos automatizar generación de código, revisión de PRs, testing, documentación, despliegues, monitorización de infraestructura y atención al cliente técnico. La automatización acelera el desarrollo y mejora la calidad desde el primer día.",
    },
    {
      question: "¿Qué beneficios concretos aporta la IA en el desarrollo de software?",
      answer:
        "Aumenta la velocidad de desarrollo, reduce bugs en producción, mejora la calidad del código, facilita el onboarding de nuevos desarrolladores y optimiza el rendimiento de aplicaciones. En la mayoría de casos, se consigue un ROI en menos de 3 meses.",
    },
    {
      question: "¿Los asistentes de IA reemplazan a los desarrolladores?",
      answer:
        "No. Los asistentes de IA potencian a los desarrolladores, liberándoles de tareas repetitivas para que puedan enfocarse en resolver problemas complejos y diseñar arquitecturas. Son herramientas, no reemplazos.",
    },
    {
      question: "¿Cuánto tiempo lleva implantar soluciones de IA en desarrollo?",
      answer:
        "Asistentes de código y herramientas de revisión pueden estar listos en 1-2 semanas. Proyectos más complejos como sistemas de testing automático o monitorización predictiva pueden llevar entre 4 y 12 semanas.",
    },
    {
      question: "¿Las soluciones se integran con nuestro stack tecnológico actual?",
      answer:
        "Sí. Nos integramos con Git, CI/CD pipelines, IDEs, herramientas de testing y plataformas cloud que ya utilizas. Analizamos tu stack y diseñamos la solución para que encaje perfectamente.",
    },
    {
      question: "¿Cómo se garantiza la seguridad del código y propiedad intelectual?",
      answer:
        "Trabajamos con modelos privados cuando es necesario, implementamos análisis local de código y garantizamos que tu código nunca se usa para entrenar modelos públicos. Cumplimos con las políticas de seguridad más estrictas.",
    },
    {
      question: "¿La IA puede ayudar con código legacy?",
      answer:
        "Sí. Desarrollamos herramientas para documentar código legacy, identificar dependencias críticas, sugerir refactorizaciones y facilitar la migración a nuevas tecnologías. Reducimos el riesgo de trabajar con código antiguo.",
    },
    {
      question: "¿Qué pasa si mi equipo de desarrollo es pequeño?",
      answer:
        "Nuestras soluciones son escalables y especialmente valiosas para equipos pequeños que necesitan multiplicar su productividad. Empezamos con herramientas de alto impacto que se integran fácilmente en tu workflow.",
    },
    {
      question: "¿Cuál es la inversión inicial necesaria?",
      answer:
        "Depende del alcance del proyecto. Ofrecemos desde consultorías para identificar oportunidades hasta implementación completa de herramientas. Siempre buscamos que el ROI sea claro y medible desde el primer sprint.",
    },
    {
      question: "¿Cómo puedo empezar?",
      answer:
        "Agenda una llamada de diagnóstico gratuita. En 30 minutos entendemos tu stack, identificamos oportunidades de automatización y te proponemos un plan de acción concreto sin compromiso.",
    },
  ],
}

const educacionData = {
  headline: "Revoluciona el aprendizaje con IA",
  description:
    "La inteligencia artificial está transformando la educación. Desde la personalización del aprendizaje hasta la automatización de tareas administrativas, descubre cómo las instituciones educativas están mejorando los resultados y la experiencia de estudiantes.",
  beneficios: [
    {
      icon: TrendingDown,
      title: "Reducción de costes",
      description: "Hasta un 30% menos en costes operativos gracias a la automatización de procesos administrativos",
    },
    {
      icon: AlertTriangle,
      title: "Reducción de errores e incidencias",
      description: "Minimiza errores en evaluaciones, gestión académica y seguimiento de estudiantes",
    },
    {
      icon: Lightbulb,
      title: "Mejores decisiones",
      description: "Datos de rendimiento y progreso en tiempo real para decisiones pedagógicas más efectivas",
    },
  ],
  casosDeUso: [
    {
      icon: Users,
      title: "Personalización del aprendizaje",
      description: "Sistemas que adaptan contenidos y ritmo según el nivel y estilo de cada estudiante",
    },
    {
      icon: MessageSquare,
      title: "Tutores virtuales 24/7",
      description: "Asistentes de IA que resuelven dudas, explican conceptos y guían el aprendizaje",
    },
    {
      icon: FileCheck,
      title: "Corrección automática",
      description: "Evaluación inteligente de exámenes, trabajos y ejercicios con feedback personalizado",
    },
    {
      icon: BarChart2,
      title: "Análisis de rendimiento",
      description: "Detección temprana de dificultades y predicción de riesgo de abandono escolar",
    },
    {
      icon: Search,
      title: "Gestión de contenidos",
      description: "Organización inteligente de materiales didácticos y generación de recursos personalizados",
    },
    {
      icon: Brain,
      title: "Traducción y accesibilidad",
      description: "Traducción automática de materiales y adaptación para estudiantes con necesidades especiales",
    },
  ],
  casoDeExito: null, // No hay caso de éxito de Educación
  faqs: [
    {
      question: "¿Qué tipo de procesos se pueden automatizar en instituciones educativas?",
      answer:
        "Podemos automatizar corrección de exámenes, atención a consultas de estudiantes, generación de materiales didácticos, seguimiento de progreso, gestión de matrículas, comunicación con familias y análisis de rendimiento. La automatización libera tiempo para que los docentes se centren en la enseñanza.",
    },
    {
      question: "¿Qué beneficios concretos aporta la IA en educación?",
      answer:
        "Mejora los resultados de aprendizaje mediante personalización, reduce la carga administrativa de los docentes, facilita la detección temprana de dificultades, aumenta el engagement de los estudiantes y optimiza la gestión de recursos. En la mayoría de casos, se consigue un ROI en menos de 12 meses.",
    },
    {
      question: "¿La IA puede reemplazar a los profesores?",
      answer:
        "No. La IA es una herramienta que complementa y potencia el trabajo de los docentes, automatizando tareas repetitivas y proporcionando insights, pero el rol humano en la educación es insustituible para la motivación, empatía y guía pedagógica.",
    },
    {
      question: "¿Cuánto tiempo lleva implantar una solución de IA en educación?",
      answer:
        "Depende del proyecto. Tutores virtuales o sistemas de corrección automática pueden estar listos en 4-8 semanas. Proyectos más complejos como plataformas de aprendizaje adaptativo pueden llevar entre 3 y 6 meses.",
    },
    {
      question: "¿Las soluciones se integran con plataformas educativas (LMS, Moodle)?",
      answer:
        "Sí. Nos integramos con las plataformas que ya utilizas (Moodle, Canvas, Blackboard, Google Classroom, etc.). Analizamos tus herramientas y diseñamos la solución para convivir con ellas sin cambios en tu operativa.",
    },
    {
      question: "¿Cómo se garantiza la privacidad de los datos de los estudiantes?",
      answer:
        "Cumplimos estrictamente con GDPR y normativas de protección de menores. Implementamos encriptación, anonimización de datos sensibles y, cuando es necesario, desplegamos modelos en infraestructura propia de la institución.",
    },
    {
      question: "¿La IA puede ayudar con estudiantes con necesidades especiales?",
      answer:
        "Sí. Desarrollamos herramientas de accesibilidad como transcripción automática, lectura de textos, traducción a lengua de signos y adaptación de contenidos según necesidades individuales, facilitando la inclusión educativa.",
    },
    {
      question: "¿Qué pasa si mi centro educativo es pequeño?",
      answer:
        "Nuestras soluciones son escalables y se adaptan al tamaño de tu institución. Empezamos con proyectos pequeños y de alto impacto para demostrar valor antes de escalar.",
    },
    {
      question: "¿Cuál es la inversión inicial necesaria?",
      answer:
        "Depende del alcance del proyecto. Ofrecemos desde consultorías estratégicas hasta desarrollos completos. Siempre buscamos que el ROI sea claro y medible desde el primer proyecto.",
    },
    {
      question: "¿Cómo puedo empezar?",
      answer:
        "Agenda una llamada de diagnóstico gratuita. En 30 minutos entendemos tu situación, identificamos oportunidades y te proponemos un plan de acción concreto sin compromiso.",
    },
  ],
}

const energiaData = {
  headline: "Optimiza tu gestión energética",
  description:
    "La inteligencia artificial está transformando el sector energético. Desde la predicción de consumo hasta la optimización de redes, descubre cómo las empresas del sector están reduciendo costes y mejorando la eficiencia operativa.",
  beneficios: [
    {
      icon: TrendingDown,
      title: "Reducción de costes",
      description: "Hasta un 30% menos en costes operativos gracias a la optimización del consumo y producción",
    },
    {
      icon: AlertTriangle,
      title: "Reducción de errores e incidencias",
      description: "Minimiza fallos en la red, detecta anomalías y previene interrupciones del servicio",
    },
    {
      icon: Lightbulb,
      title: "Mejores decisiones",
      description: "Datos en tiempo real de producción y consumo para decisiones estratégicas con confianza",
    },
  ],
  casosDeUso: [
    {
      icon: Brain,
      title: "Predicción de consumo",
      description: "Modelos que anticipan la demanda energética por zona, horario y condiciones climáticas",
    },
    {
      icon: BarChart2,
      title: "Optimización de redes",
      description: "Algoritmos que equilibran la distribución de energía y reducen pérdidas en la red",
    },
    {
      icon: Settings,
      title: "Mantenimiento predictivo",
      description: "Detección temprana de fallos en infraestructura para evitar interrupciones del servicio",
    },
    {
      icon: Zap,
      title: "Gestión de renovables",
      description: "Optimización de producción solar y eólica basada en predicciones meteorológicas",
    },
    {
      icon: FileCheck,
      title: "Facturación inteligente",
      description: "Automatización de lecturas, cálculos y emisión de facturas con detección de anomalías",
    },
    {
      icon: MessageSquare,
      title: "Atención al cliente 24/7",
      description: "Chatbots para gestionar consultas sobre consumo, tarifas y averías en tiempo real",
    },
  ],
  casoDeExito: null, // No hay caso de éxito de Energía
  faqs: [
    {
      question: "¿Qué tipo de procesos se pueden automatizar en el sector energético?",
      answer:
        "Podemos automatizar predicción de demanda, gestión de redes, mantenimiento de infraestructura, facturación, atención al cliente, monitorización de consumo y optimización de producción renovable. La automatización mejora la eficiencia y reduce interrupciones desde el primer mes.",
    },
    {
      question: "¿Qué beneficios concretos aporta la IA en energía?",
      answer:
        "Mejora la estabilidad de la red, reduce pérdidas de distribución, optimiza la producción renovable, anticipa fallos de infraestructura y mejora la experiencia del cliente. En la mayoría de casos, se consigue un ROI en menos de 12 meses.",
    },
    {
      question: "¿Necesito tener datos históricos para implementar IA?",
      answer:
        "Es recomendable, pero no imprescindible. Empezamos analizando tus datos actuales y, si es necesario, diseñamos una fase de recopilación de información antes de entrenar modelos predictivos.",
    },
    {
      question: "¿Cuánto tiempo lleva implantar una solución de IA en energía?",
      answer:
        "Depende del proyecto. Chatbots de atención o automatización de facturación pueden estar listos en 4-8 semanas. Proyectos más complejos como predicción de demanda pueden llevar entre 3 y 9 meses.",
    },
    {
      question: "¿Las soluciones se integran con sistemas SCADA y de gestión energética?",
      answer:
        "Sí. Nos integramos con sistemas SCADA, sistemas de gestión de red, ERPs energéticos y plataformas de monitorización. Analizamos tus herramientas y diseñamos la solución para convivir con ellas sin cambios en tu operativa.",
    },
    {
      question: "¿La IA puede ayudar con la gestión de energías renovables?",
      answer:
        "Sí. Desarrollamos modelos de predicción de producción solar y eólica, algoritmos de optimización de almacenamiento y sistemas de gestión inteligente de microrredes para maximizar el uso de renovables.",
    },
    {
      question: "¿Cómo ayuda la IA en el mantenimiento de infraestructura?",
      answer:
        "Implementamos mantenimiento predictivo que analiza datos de sensores, históricos de averías y condiciones operativas para anticipar fallos en transformadores, líneas y equipos, reduciendo hasta un 40% las interrupciones no planificadas.",
    },
    {
      question: "¿Qué pasa si mi empresa energética es pequeña o mediana?",
      answer:
        "Nuestras soluciones son escalables y se adaptan al tamaño de tu organización. Empezamos con proyectos pequeños y de alto impacto para demostrar valor antes de escalar.",
    },
    {
      question: "¿Cuál es la inversión inicial necesaria?",
      answer:
        "Depende del alcance del proyecto. Ofrecemos desde consultorías estratégicas hasta desarrollos completos. Siempre buscamos que el ROI sea claro y medible desde el primer proyecto.",
    },
    {
      question: "¿Cómo puedo empezar?",
      answer:
        "Agenda una llamada de diagnóstico gratuita. En 30 minutos entendemos tu situación, identificamos oportunidades y te proponemos un plan de acción concreto sin compromiso.",
    },
  ],
}

export default function IndustriasPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleSelectIndustry = (industryId: string) => {
    setSelectedIndustry(industryId)
    setOpenFaqIndex(null)
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
  }

  const duplicatedIndustries = [...industries, ...industries, ...industries]
  const selectedIndustryData = industries.find((i) => i.id === selectedIndustry)

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20">
        {/* Background textures - same as rest of site */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, #031d40 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* Diagonal lines */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #031d40 0, #031d40 1px, transparent 0, transparent 50%)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Yellow blur elements */}
          <div
            className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
            style={{ background: "#bbbd26" }}
          />
          <div
            className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
            style={{ background: "#bbbd26" }}
          />

          {/* Blue blur elements */}
          <div
            className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-10"
            style={{ background: "#031d40" }}
          />
          <div
            className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] rounded-full blur-[120px] opacity-12"
            style={{ background: "#031d40" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#031d40] mb-6 leading-tight">
            ¿Qué hace la IA en <UnderlinedText>tu sector</UnderlinedText>?
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 px-2 sm:px-0">
            Selecciona tu industria y descubre cómo la inteligencia artificial puede transformar tu negocio con casos
            reales.
          </p>
        </div>

        {/* Industry selector carousel */}
        <div className="relative z-10 w-full mt-4">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none hidden sm:block" />

          <div className="overflow-hidden py-4">
            <div ref={carouselRef} className="flex w-max gap-4 sm:gap-6 animate-scroll-logos-responsive">
              {duplicatedIndustries.map((industry, index) => {
                const Icon = industry.icon
                const isSelected = selectedIndustry === industry.id

                return (
                  <button
                    key={`${industry.id}-${index}`}
                    onClick={() => handleSelectIndustry(industry.id)}
                    className={`
                      flex-shrink-0 group relative flex flex-col items-center justify-center
                      w-[120px] h-[110px] sm:w-[160px] sm:h-[140px] rounded-xl sm:rounded-2xl
                      transition-[transform,opacity] duration-300 ease-out
                      ${
                        isSelected
                          ? "bg-[#031d40] text-white shadow-xl scale-105"
                          : "bg-white hover:bg-gray-50 text-[#031d40] shadow-md hover:shadow-lg"
                      }
                      border-2 ${isSelected ? "border-[#bbbd26]" : "border-gray-200 hover:border-[#bbbd26]"}
                    `}
                  >
                    <div
                      className={`
                      w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3
                      transition-[transform,opacity] duration-300
                      ${
                        isSelected
                          ? "bg-[#bbbd26] text-[#031d40]"
                          : "bg-gray-100 text-[#031d40] group-hover:bg-[#bbbd26]/20"
                      }
                    `}
                    >
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <span className="font-semibold text-xs sm:text-sm">{industry.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {!selectedIndustry && (
          <div className="relative z-10 mt-12 animate-bounce">
            <ChevronUp className="w-6 h-6 text-gray-400 mx-auto" />
            <p className="text-gray-400 text-sm mt-2">Selecciona una industria</p>
          </div>
        )}
      </section>

      {/* Content section - Distribución */}
      {selectedIndustry === "distribucion" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/ai-strategy-consulting-business-meeting.jpg"
                      alt="Optimización de procesos en distribución"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <Truck className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">Distribución & Logística</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{distribucionData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{distribucionData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {distribucionData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Aplicaciones de IA en <UnderlinedText>Distribución</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubre las soluciones más impactantes que estamos implementando en el sector
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {distribucionData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito */}
          {cataloniaCeramicCase && (
            <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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

              {/* Yellow blurred backgrounds */}
              <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

              <div className="container mx-auto px-4 max-w-7xl relative">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                    Esta podría ser{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">tu empresa</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                  </p>
                </div>

                {/* Main Case Study Card - Replicating home format exactly */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-2 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4 sm:gap-6">
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
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40]">{cataloniaCeramicCase.company}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Industria:</span>
                            <span className="text-gray-800">{cataloniaCeramicCase.industry}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Año:</span>
                            <span className="text-gray-800">{cataloniaCeramicCase.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Servicio:</span>
                            <span className="inline-block px-3 py-1 bg-[#bbbd26]/20 text-[#031d40] rounded-full text-xs font-bold">
                              {cataloniaCeramicCase.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Case Study Details */}
                    <div className="lg:col-span-3 p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
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
                          <h4 className="text-xl font-bold text-[#031d40]">El Desafío</h4>
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
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">La Solución</h4>
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
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">Los Resultados</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                          {cataloniaCeramicCase.results.map((result, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl p-6 border border-[#bbbd26]/20"
                            >
                              <div className="text-2xl sm:text-4xl font-bold text-[#031d40] mb-1 sm:mb-2">{result.metric}</div>
                              <div className="text-sm text-gray-700 font-medium">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          size="lg"
                          className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group"
                          asChild
                        >
                          <Link href={`/portfolio/${cataloniaCeramicCase.id}`}>
                            Ver más sobre el caso
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para transformar tu <span className="text-[#bbbd26]">distribución</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede optimizar tus operaciones logísticas
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    Quiero empezar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Preguntas <UnderlinedText>Frecuentes</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre IA en distribución</p>
              </div>

              <div className="space-y-4">
                {distribucionData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Construcción */}
      {selectedIndustry === "construccion" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios - Same format as Distribución */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/construction-site-building-modern-architecture.jpg"
                      alt="Digitalización y optimización en construcción"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <HardHat className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">Construcción & Obra</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{construccionData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{construccionData.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {construccionData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso - Same format as Distribución */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Aplicaciones de IA en <UnderlinedText>Construcción</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubre las soluciones más impactantes que estamos implementando en el sector
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {construccionData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito */}
          {construccionCase ? (
            <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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

              {/* Yellow blurred backgrounds */}
              <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

              <div className="container mx-auto px-4 max-w-7xl relative">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                    Esta podría ser{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">tu empresa</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                  </p>
                </div>

                {/* Main Case Study Card - Same format as home/distribucion */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-2 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4 sm:gap-6">
                      {/* Featured Image */}
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 relative">
                        <Image
                          src={construccionCase.image || "/construction-warehouse-documents-invoices-organize.jpg"}
                          alt={`${construccionCase.company} case study`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Company Logo */}
                      {construccionCase.logoUrl ? (
                        <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden relative border border-gray-100">
                          <Image
                            src={construccionCase.logoUrl || "/placeholder.svg"}
                            alt={`${construccionCase.company} logo`}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${construccionCase.logoGradient} flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-3xl font-bold">{construccionCase.logo}</span>
                        </div>
                      )}

                      {/* Company Details */}
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40]">{construccionCase.company}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Industria:</span>
                            <span className="text-gray-800">{construccionCase.industry}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Año:</span>
                            <span className="text-gray-800">{construccionCase.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Servicio:</span>
                            <span className="inline-block px-3 py-1 bg-[#bbbd26]/20 text-[#031d40] rounded-full text-xs font-bold">
                              {construccionCase.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Case Study Details */}
                    <div className="lg:col-span-3 p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
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
                          <h4 className="text-xl font-bold text-[#031d40]">El Desafío</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{construccionCase.challenge}</p>
                      </div>

                      {/* The Solution */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">La Solución</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{construccionCase.solution}</p>
                      </div>

                      {/* The Results */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">Los Resultados</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                          {construccionCase.results.map((result, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl p-6 border border-[#bbbd26]/20"
                            >
                              <div className="text-2xl sm:text-4xl font-bold text-[#031d40] mb-1 sm:mb-2">{result.metric}</div>
                              <div className="text-sm text-gray-700 font-medium">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          size="lg"
                          className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group"
                          asChild
                        >
                          <Link href={`/portfolio/${construccionCase.id}`}>
                            Ver más sobre el caso
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            /* Placeholder for industries without success story */
            <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                  }}
                />
              </div>
              <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

              <div className="container mx-auto px-4 max-w-7xl relative">
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                    Esta podría ser{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">tu empresa</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                  </p>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                    <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                      <Rocket className="w-10 h-10 text-[#bbbd26]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                      ¿Quieres ser el <span className="text-[#bbbd26]">pionero</span>?
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                      Todavía no tenemos un caso de éxito publicado en construcción. Sé el primero y obtén condiciones especiales.
                    </p>
                    <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                      <Link href="/contacto">
                        Hablemos de tu proyecto
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para optimizar tu <span className="text-[#bbbd26]">construcción</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede mejorar la eficiencia de tus obras.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    Quiero empezar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Preguntas <UnderlinedText>Frecuentes</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre IA en construcción</p>
              </div>

              <div className="space-y-4">
                {construccionData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Restauración */}
      {selectedIndustry === "restauracion" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/fine-dining-restaurant-interior-with-modern-decor.jpg"
                      alt="Mejora de experiencia y optimización en restauración"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <UtensilsCrossed className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">Restauración & Hostelería</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{restauracionData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{restauracionData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {restauracionData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Aplicaciones de IA en <UnderlinedText>Restauración</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubre las soluciones más impactantes que estamos implementando en el sector
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restauracionData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Restauracion */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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

            {/* Yellow blurred backgrounds */}
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              {/* Section Header */}
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  Esta podría ser{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">tu empresa</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                </p>
              </div>

              {/* Pioneer Card - Same card structure */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    ¿Quieres ser el <span className="text-[#bbbd26]">pionero</span>?
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Todavía no tenemos un caso de éxito publicado en restauración. Sé el primero y obtén condiciones especiales.
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      Hablemos de tu proyecto
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para optimizar tu <span className="text-[#bbbd26]">restauración</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede mejorar la experiencia y la eficiencia de tu
                negocio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    Quiero empezar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Preguntas <UnderlinedText>Frecuentes</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre IA en restauración</p>
              </div>

              <div className="space-y-4">
                {restauracionData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Industrial */}
      {selectedIndustry === "industrial" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/modern-industrial-factory-automation-equipment.jpg"
                      alt="Impulso de producción industrial con IA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <Factory className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">Industrial & Fabricación</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{industrialData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{industrialData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {industrialData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Aplicaciones de IA en <UnderlinedText>Industria</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubre las soluciones más impactantes que estamos implementando en el sector
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industrialData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito */}
          {pinturasCase && (
            <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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

              {/* Yellow blurred backgrounds */}
              <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

              <div className="container mx-auto px-4 max-w-7xl relative">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                    Esta podría ser{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">tu empresa</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                  </p>
                </div>

                {/* Main Case Study Card - Replicating home format exactly */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-2 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4 sm:gap-6">
                      {/* Featured Image */}
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 relative">
                        <Image
                          src={pinturasCase.image || "/paint-manufacturing-facility.jpg"}
                          alt={`${pinturasCase.company} case study`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Company Logo */}
                      {pinturasCase.logoUrl ? (
                        <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden relative border border-gray-100">
                          <Image
                            src={pinturasCase.logoUrl || "/placeholder.svg"}
                            alt={`${pinturasCase.company} logo`}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${pinturasCase.logoGradient} flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-3xl font-bold">{pinturasCase.logo}</span>
                        </div>
                      )}

                      {/* Company Details */}
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40]">{pinturasCase.company}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Industria:</span>
                            <span className="text-gray-800">{pinturasCase.industry}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Año:</span>
                            <span className="text-gray-800">{pinturasCase.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Servicio:</span>
                            <span className="inline-block px-3 py-1 bg-[#bbbd26]/20 text-[#031d40] rounded-full text-xs font-bold">
                              {pinturasCase.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Case Study Details */}
                    <div className="lg:col-span-3 p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
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
                          <h4 className="text-xl font-bold text-[#031d40]">El Desafío</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{pinturasCase.challenge}</p>
                      </div>

                      {/* The Solution */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">La Solución</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{pinturasCase.solution}</p>
                      </div>

                      {/* The Results */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">Los Resultados</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                          {pinturasCase.results.map((result, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl p-6 border border-[#bbbd26]/20"
                            >
                              <div className="text-2xl sm:text-4xl font-bold text-[#031d40] mb-1 sm:mb-2">{result.metric}</div>
                              <div className="text-sm text-gray-700 font-medium">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          size="lg"
                          className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group"
                          asChild
                        >
                          <Link href={`/portfolio/${pinturasCase.id}`}>
                            Ver más sobre el caso
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para impulsar tu <span className="text-[#bbbd26]">producción</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede optimizar tus procesos industriales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    Quiero empezar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Preguntas <UnderlinedText>Frecuentes</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre IA en industria</p>
              </div>

              <div className="space-y-4">
                {industrialData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Salud */}
      {selectedIndustry === "salud" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/doctor-analyzing-medical-data-on-digital-screen.jpg"
                      alt="Transformación de la atención sanitaria con IA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <HeartPulse className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">Salud & Sanidad</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{saludData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{saludData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {saludData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Aplicaciones de IA en <UnderlinedText>Salud</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubre las soluciones más impactantes que estamos implementando en el sector
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {saludData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito */}
          {viviCoachingCase && (
            <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
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

              {/* Yellow blurred backgrounds */}
              <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
              <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

              <div className="container mx-auto px-4 max-w-7xl relative">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                    Esta podría ser{" "}
                    <UnderlinedText>
                      <span className="text-[#031d40]">tu empresa</span>
                    </UnderlinedText>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                    Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                  </p>
                </div>

                {/* Main Case Study Card - Replicating home format exactly */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-2 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col gap-4 sm:gap-6">
                      {/* Featured Image */}
                      <div className="w-full h-48 rounded-xl overflow-hidden bg-gray-100 relative">
                        <Image
                          src={viviCoachingCase.image || "/vivi-coaching-landing-page.jpg"}
                          alt={`${viviCoachingCase.company} case study`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Company Logo */}
                      {viviCoachingCase.logoUrl ? (
                        <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-lg overflow-hidden relative border border-gray-100">
                          <Image
                            src={viviCoachingCase.logoUrl || "/placeholder.svg"}
                            alt={`${viviCoachingCase.company} logo`}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${viviCoachingCase.logoGradient} flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-3xl font-bold">{viviCoachingCase.logo}</span>
                        </div>
                      )}

                      {/* Company Details */}
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40]">{viviCoachingCase.company}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Industria:</span>
                            <span className="text-gray-800">{viviCoachingCase.industry}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Año:</span>
                            <span className="text-gray-800">{viviCoachingCase.year}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">Servicio:</span>
                            <span className="inline-block px-3 py-1 bg-[#bbbd26]/20 text-[#031d40] rounded-full text-xs font-bold">
                              {viviCoachingCase.service}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Case Study Details */}
                    <div className="lg:col-span-3 p-5 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
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
                          <h4 className="text-xl font-bold text-[#031d40]">El Desafío</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{viviCoachingCase.challenge}</p>
                      </div>

                      {/* The Solution */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">La Solución</h4>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{viviCoachingCase.solution}</p>
                      </div>

                      {/* The Results */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <svg className="w-6 h-6 text-[#bbbd26]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z"
                            />
                          </svg>
                          <h4 className="text-xl font-bold text-[#031d40]">Los Resultados</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                          {viviCoachingCase.results.map((result, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-[#bbbd26]/10 to-[#bbbd26]/5 rounded-xl p-6 border border-[#bbbd26]/20"
                            >
                              <div className="text-2xl sm:text-4xl font-bold text-[#031d40] mb-1 sm:mb-2">{result.metric}</div>
                              <div className="text-sm text-gray-700 font-medium">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          size="lg"
                          className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group"
                          asChild
                        >
                          <Link href={`/portfolio/${viviCoachingCase.id}`}>
                            Ver más sobre el caso
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para transformar tu <span className="text-[#bbbd26]">sanidad</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede mejorar la atención al paciente y optimizar tus
                operaciones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    Quiero empezar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Preguntas <UnderlinedText>Frecuentes</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre IA en salud</p>
              </div>

              <div className="space-y-4">
                {saludData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Retail */}
      {selectedIndustry === "retail" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/retail-store-checkout-counter-with-modern-technology.jpg"
                      alt="Transformación del comercio con IA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <ShoppingBag className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">Retail & Comercio</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{retailData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{retailData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {retailData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Aplicaciones de IA en <UnderlinedText>Retail</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubre las soluciones más impactantes que estamos implementando en el sector
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {retailData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Retail */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  Esta podría ser{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">tu empresa</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    ¿Quieres ser el <span className="text-[#bbbd26]">pionero</span>?
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Todavía no tenemos un caso de éxito publicado en retail. Sé el primero y obtén condiciones especiales.
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      Hablemos de tu proyecto
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para transformar tu <span className="text-[#bbbd26]">retail</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede aumentar tus ventas y fidelizar a tus clientes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    Quiero empezar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Preguntas <UnderlinedText>Frecuentes</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre IA en retail</p>
              </div>

              <div className="space-y-4">
                {retailData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Finanzas */}
      {selectedIndustry === "finanzas" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/financial-analyst-working-with-data-charts-reports.jpg"
                      alt="Optimización de procesos financieros con IA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <Landmark className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">Finanzas & Seguros</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{finanzasData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{finanzasData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {finanzasData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Aplicaciones de IA en <UnderlinedText>Finanzas</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubre las soluciones más impactantes que estamos implementando en el sector
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {finanzasData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Finanzas */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  Esta podría ser{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">tu empresa</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    ¿Quieres ser el <span className="text-[#bbbd26]">pionero</span>?
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Todavía no tenemos un caso de éxito publicado en finanzas. Sé el primero y obtén condiciones especiales.
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      Hablemos de tu proyecto
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para optimizar tus <span className="text-[#bbbd26]">finanzas</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede mejorar la eficiencia y reducir riesgos en tu
                negocio financiero.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    Quiero empezar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Preguntas <UnderlinedText>Frecuentes</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre IA en finanzas</p>
              </div>

              <div className="space-y-4">
                {finanzasData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Tecnologia */}
      {selectedIndustry === "tecnologia" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/abstract-blue-background-with-geometric-shapes.jpg"
                      alt="Aceleración de desarrollo tecnológico con IA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <MonitorSmartphone className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">Tecnología & Software</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{tecnologiaData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{tecnologiaData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {tecnologiaData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Aplicaciones de IA en <UnderlinedText>Tecnología</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubre las soluciones más impactantes que estamos implementando en el sector
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tecnologiaData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Tecnologia */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  Esta podría ser{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">tu empresa</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    ¿Quieres ser el <span className="text-[#bbbd26]">pionero</span>?
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Todavía no tenemos un caso de éxito publicado en tecnología. Sé el primero y obtén condiciones especiales.
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      Hablemos de tu proyecto
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para acelerar tu <span className="text-[#bbbd26]">desarrollo</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede potenciar tu equipo de desarrollo y calidad de
                software.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    Quiero empezar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Preguntas <UnderlinedText>Frecuentes</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre IA en tecnología</p>
              </div>

              <div className="space-y-4">
                {tecnologiaData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Educación */}
      {selectedIndustry === "educacion" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/education-modern-classroom-technology-learning.jpg"
                      alt="Revolución del aprendizaje con IA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <GraduationCap className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">Educación & Formación</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{educacionData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{educacionData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {educacionData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Aplicaciones de IA en <UnderlinedText>Educación</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubre las soluciones más impactantes que estamos implementando en el sector
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {educacionData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Educación */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  Esta podría ser{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">tu empresa</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    ¿Quieres ser el <span className="text-[#bbbd26]">pionero</span>?
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Todavía no tenemos un caso de éxito publicado en educación. Sé el primero y obtén condiciones especiales.
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      Hablemos de tu proyecto
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para revolucionar tu <span className="text-[#bbbd26]">educación</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede mejorar la experiencia educativa y optimizar la
                gestión de tu institución.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    Quiero empezar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Preguntas <UnderlinedText>Frecuentes</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre IA en educación</p>
              </div>

              <div className="space-y-4">
                {educacionData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Content section - Energia */}
      {selectedIndustry === "energia" && (
        <div ref={contentRef} className="scroll-mt-20">
          {/* A. Headline + Beneficios */}
          <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 md:mb-16">
                {/* Image */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/smart-grid-technology-energy-distribution-network.jpg"
                      alt="Optimización de la gestión energética con IA"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#bbbd26]/20 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#031d40]/10 rounded-xl -z-10" />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#031d40]/5 rounded-full px-4 py-2 mb-6">
                    <Zap className="w-5 h-5 text-[#031d40]" />
                    <span className="text-sm font-medium text-[#031d40]">Energía & Utilities</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#031d40] mb-4 sm:mb-6">
                    <UnderlinedText>{energiaData.headline}</UnderlinedText>
                  </h2>
                  <p className="text-lg text-gray-600">{energiaData.description}</p>
                </div>
              </div>

              {/* Beneficios grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {energiaData.beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[border-color,box-shadow] duration-300 hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-[#bbbd26]/20 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{beneficio.title}</h3>
                      <p className="text-gray-600 text-sm">{beneficio.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* B. Casos de Uso */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Aplicaciones de IA en <UnderlinedText>Energía</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Descubre las soluciones más impactantes que estamos implementando en el sector
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {energiaData.casosDeUso.map((caso, index) => {
                  const Icon = caso.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#bbbd26] transition-[transform,opacity] duration-300 hover:shadow-lg group"
                    >
                      <div className="w-12 h-12 bg-[#031d40] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#bbbd26] transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white group-hover:text-[#031d40]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#031d40] mb-2">{caso.title}</h3>
                      <p className="text-gray-600 text-sm">{caso.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* C. Caso de Éxito - No specific case for Energía */}
          <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(#031d40 1px, transparent 1px), linear-gradient(90deg, #031d40 1px, transparent 1px)`,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>
            <div className="absolute top-20 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#bbbd26]/15 rounded-full blur-[80px] md:blur-[120px]" />
            <div className="absolute bottom-20 left-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#031d40]/10 rounded-full blur-[100px] md:blur-[140px]" />

            <div className="container mx-auto px-4 max-w-7xl relative">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#031d40] mb-4">
                  Esta podría ser{" "}
                  <UnderlinedText>
                    <span className="text-[#031d40]">tu empresa</span>
                  </UnderlinedText>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
                  Descubre cómo empresas de tu sector están mejorando sus resultados con IA
                </p>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center py-20 px-8">
                  <div className="w-20 h-20 bg-[#bbbd26]/20 rounded-full flex items-center justify-center mb-6">
                    <Rocket className="w-10 h-10 text-[#bbbd26]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#031d40] mb-4">
                    ¿Quieres ser el <span className="text-[#bbbd26]">pionero</span>?
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Todavía no tenemos un caso de éxito publicado en energía. Sé el primero y obtén condiciones especiales.
                  </p>
                  <Button size="lg" className="bg-[#031d40] hover:bg-[#031d40]/90 text-white font-bold transition-colors duration-300 group" asChild>
                    <Link href="/contacto">
                      Hablemos de tu proyecto
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* D. CTA Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-[#031d40] relative overflow-hidden">
            {/* Background textures */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                  backgroundSize: "60px 60px",
                }}
              />
              <div
                className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: "#bbbd26" }}
              />
              <div
                className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-15"
                style={{ background: "#bbbd26" }}
              />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                ¿Listo para optimizar tu <span className="text-[#bbbd26]">gestión energética</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo la IA puede mejorar la eficiencia de tu red y reducir
                costes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contacto">
                  <Button className="bg-[#bbbd26] hover:bg-[#bbbd26]/90 text-[#031d40] font-semibold">
                    Quiero empezar
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* E. FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031d40] mb-4">
                  Preguntas <UnderlinedText>Frecuentes</UnderlinedText>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas saber sobre IA en energía</p>
              </div>

              <div className="space-y-4">
                {energiaData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-[border-color] duration-300 hover:border-[#bbbd26]"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-[#031d40] pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#031d40] flex-shrink-0 transition-transform duration-300 ${
                          openFaqIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        openFaqIndex === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="px-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
