import { Metadata } from "next"

// Base configuration
const siteConfig = {
  name: "Unnic AI",
  url: "https://unnic.ai",
  ogImage: "/og-image.png", // Equipo Unnic AI - Imagen optimizada para redes sociales
}

// Page routes mapping para canonical URLs
const pageRoutes: Record<string, string> = {
  home: "/",
  servicios: "/servicios",
  consultoria: "/servicios/consultoria",
  automatizacion: "/servicios/automatizacion",
  desarrollo: "/servicios/desarrollo",
  data: "/servicios/data",
  iaGenerativa: "/servicios/ia-generativa",
  formacion: "/servicios/formacion",
  cumplimientoRIA: "/servicios/cumplimiento-ria",
  nosotros: "/nosotros",
  portfolio: "/portfolio",
  contacto: "/contacto",
  industrias: "/industrias",
  recursos: "/recursos",
  blog: "/blog",
  faq: "/preguntas-frecuentes",
  avisoLegal: "/aviso-legal",
  politicaPrivacidad: "/politica-privacidad",
  cookies: "/cookies",
}

// Common metadata structure
type PageMetadata = {
  title: string
  description: string
  keywords?: string[]
}

// Page-specific metadata
export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "Unnic AI | Consultoría e Implementación de IA para Empresas",
    description:
      "Transformamos empresas con Inteligencia Artificial. Consultoría, automatización e implementación con ROI demostrado. +50 empresas confían en nosotros. Agenda tu consulta gratuita.",
    keywords: [
      "inteligencia artificial",
      "IA empresas",
      "consultoría IA",
      "automatización IA",
      "implementación IA",
      "transformación digital",
    ],
  },
  servicios: {
    title: "Servicios de IA: Consultoría, Automatización y Formación | Unnic AI",
    description:
      "Descubre nuestros servicios de IA: consultoría estratégica, automatización inteligente, desarrollo a medida y formación especializada. Soluciones con ROI demostrado.",
    keywords: [
      "servicios IA",
      "consultoría inteligencia artificial",
      "automatización empresas",
      "formación IA",
      "desarrollo IA",
    ],
  },
  consultoria: {
    title: "Consultoría Estratégica de IA | Identifica Oportunidades con ROI Real",
    description:
      "Metodología OptimIA™ probada en +50 empresas. Identificamos oportunidades de IA con impacto medible en tu negocio. Resultados garantizados en 90 días.",
    keywords: [
      "consultoría IA",
      "estrategia inteligencia artificial",
      "OptimIA",
      "ROI IA",
      "transformación IA",
    ],
  },
  automatizacion: {
    title: "Automatización con IA | Ahorra +200h/Mes en Procesos Manuales",
    description:
      "Automatiza procesos empresariales con IA. Chatbots inteligentes, análisis de documentos, integración de sistemas. Casos de éxito con ahorro de +200 horas mensuales.",
    keywords: [
      "automatización IA",
      "chatbots inteligentes",
      "RPA",
      "automatización procesos",
      "ahorro tiempo IA",
    ],
  },
  desarrollo: {
    title: "Desarrollo de Soluciones IA a Medida | Software Personalizado | Unnic AI",
    description:
      "Desarrollamos soluciones de IA personalizadas para tu empresa. Chatbots, análisis predictivo, visión artificial y más. Tecnología de vanguardia con soporte continuo.",
    keywords: [
      "desarrollo IA",
      "soluciones IA personalizadas",
      "software IA",
      "desarrollo chatbots",
      "machine learning",
    ],
  },
  data: {
    title: "Ciencia de Datos e IA | Transforma tus Datos en Decisiones | Unnic AI",
    description:
      "Desbloquea el valor de tus datos con ciencia de datos e IA. Análisis predictivo, modelos ML personalizados y visualización avanzada. Decisiones basadas en datos reales.",
    keywords: [
      "ciencia de datos",
      "data science IA",
      "análisis predictivo",
      "machine learning",
      "visualización datos",
    ],
  },
  iaGenerativa: {
    title: "IA Generativa para Empresas | GPT, Claude, Gemini | Unnic AI",
    description:
      "Implementa IA generativa en tu empresa. Automatiza creación de contenido, asistentes virtuales y análisis inteligente con GPT-4, Claude y tecnologías LLM de última generación.",
    keywords: [
      "IA generativa",
      "GPT empresas",
      "LLM",
      "ChatGPT empresarial",
      "asistentes IA",
      "generación contenido IA",
    ],
  },
  formacion: {
    title: "Formación en IA para Empresas | Capacita tu Equipo | Unnic AI",
    description:
      "Formación práctica en IA para equipos empresariales. Cursos personalizados, workshops y certificaciones. Desde fundamentos hasta implementación avanzada.",
    keywords: [
      "formación IA",
      "cursos inteligencia artificial",
      "capacitación IA empresas",
      "workshops IA",
      "certificación IA",
    ],
  },
  cumplimientoRIA: {
    title: "Cumplimiento Normativo IA | Ley IA Europea y RGPD | Unnic AI",
    description:
      "Asegura el cumplimiento normativo de tus soluciones IA. Expertos en Ley de IA Europea, RGPD y regulaciones. Auditorías, documentación y certificaciones.",
    keywords: [
      "cumplimiento IA",
      "ley IA europea",
      "regulación IA",
      "RGPD IA",
      "auditoría IA",
      "RIA",
    ],
  },
  nosotros: {
    title: "Equipo Experto en IA | Más de 50 Empresas Confían en Unnic AI",
    description:
      "Conoce al equipo detrás de Unnic AI. Expertos en IA con más de 50 proyectos exitosos. Nuestra misión: democratizar la IA para empresas de todos los tamaños.",
    keywords: ["equipo IA", "expertos inteligencia artificial", "sobre Unnic AI", "misión visión"],
  },
  portfolio: {
    title: "Casos de Éxito de IA | Resultados Reales en Empresas Españolas",
    description:
      "Descubre cómo empresas como la tuya han transformado sus operaciones con IA. Casos reales con métricas de ROI, ahorro de tiempo y mejora de eficiencia.",
    keywords: [
      "casos de éxito IA",
      "portfolio inteligencia artificial",
      "resultados IA empresas",
      "ROI IA",
    ],
  },
  industrias: {
    title: "IA por Sectores: Industria, Distribución, Retail y más | Unnic AI",
    description:
      "Soluciones de IA especializadas por sector: manufactura, distribución, retail, servicios profesionales y más. Conoce las aplicaciones específicas para tu industria.",
    keywords: [
      "IA por sectores",
      "IA industria",
      "IA distribución",
      "IA retail",
      "soluciones verticales IA",
    ],
  },
  contacto: {
    title: "Contacta con Unnic AI | Agenda tu Consultoría Gratuita de IA",
    description:
      "¿Listo para transformar tu empresa con IA? Agenda una consultoría gratuita. Te ayudamos a identificar las mejores oportunidades para tu negocio. Respuesta en 24h.",
    keywords: ["contacto Unnic AI", "consultoría gratuita IA", "agendar llamada IA", "presupuesto IA"],
  },
  blog: {
    title: "Blog de Inteligencia Artificial para Empresas | Unnic AI",
    description:
      "Artículos, guías y tendencias sobre IA empresarial. Aprende cómo implementar inteligencia artificial en tu empresa con casos reales y consejos prácticos.",
    keywords: [
      "blog IA",
      "artículos inteligencia artificial",
      "tendencias IA empresas",
      "guías IA",
      "noticias inteligencia artificial",
    ],
  },
  recursos: {
    title: "Recursos de IA | Guías, Casos de Uso y Tendencias | Unnic AI",
    description:
      "Accede a recursos gratuitos sobre IA empresarial: guías prácticas, casos de uso, tendencias del sector y mejores prácticas de implementación.",
    keywords: ["recursos IA", "guías IA", "casos de uso IA", "tendencias inteligencia artificial"],
  },
  faq: {
    title: "Preguntas Frecuentes sobre IA | Todo lo que Necesitas Saber | Unnic AI",
    description:
      "Resolvemos tus dudas sobre IA empresarial: costes, plazos, tecnologías, ROI y proceso de implementación. Respuestas claras a las preguntas más comunes.",
    keywords: ["FAQ IA", "preguntas frecuentes inteligencia artificial", "dudas IA empresas"],
  },
  // Legal pages (lower priority, no keywords needed)
  avisoLegal: {
    title: "Aviso Legal | Unnic AI",
    description: "Información legal de Unnic AI: datos de la empresa, términos de uso y condiciones.",
  },
  politicaPrivacidad: {
    title: "Política de Privacidad | Unnic AI",
    description:
      "Política de privacidad y protección de datos de Unnic AI. Cumplimiento con RGPD y legislación española.",
  },
  cookies: {
    title: "Política de Cookies | Unnic AI",
    description:
      "Información sobre el uso de cookies en unnic.ai. Gestiona tus preferencias de cookies.",
  },
}

// Generate metadata for Next.js pages
export function generateMetadata(page: keyof typeof pageMetadata): Metadata {
  const data = pageMetadata[page]
  const canonicalUrl = `${siteConfig.url}${pageRoutes[page]}`

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

// Special function for dynamic portfolio pages
export function generatePortfolioMetadata(params: {
  company: string
  sector: string
  metric?: string
  id?: string
}): Metadata {
  const title = `${params.company} - Caso de Éxito en ${params.sector} | Unnic AI`
  const description = params.metric
    ? `Descubre cómo ${params.company} transformó sus operaciones con IA. ${params.metric}. Caso de éxito con resultados medibles y ROI demostrado.`
    : `Caso de éxito: cómo ${params.company} implementó IA en el sector ${params.sector}. Resultados reales, métricas de ROI y lecciones aprendidas.`
  
  const canonicalUrl = params.id 
    ? `${siteConfig.url}/portfolio/${params.id}`
    : `${siteConfig.url}/portfolio`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${params.company} - Caso de Éxito`,
        },
      ],
      locale: "es_ES",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  }
}

// Metadata for "coming soon" pages (noindex to avoid indexing incomplete pages)
export function generateComingSoonMetadata(serviceName: string): Metadata {
  return {
    title: `${serviceName} | Próximamente en Unnic AI`,
    description: `Servicio de ${serviceName} con IA. Página en desarrollo. Contacta con nosotros para más información.`,
    robots: {
      index: false, // Don't index until page is ready
      follow: true,
    },
  }
}
