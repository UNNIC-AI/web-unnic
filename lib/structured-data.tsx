import type { Organization, Service, FAQPage, BreadcrumbList, WithContext } from "schema-dts"

// URL base del sitio
const SITE_URL = "https://unnic.ai"

/**
 * Schema Organization - Información de la empresa Unnic AI
 * Aparece en el Knowledge Panel de Google
 */
export function getOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Unnic AI",
    legalName: "Unnic AI SL",
    url: SITE_URL,
    logo: `${SITE_URL}/un-logo-azulamarillo.png`,
    description:
      "Consultoría e implementación de Inteligencia Artificial para empresas. Transformamos negocios con IA generativa, automatización y análisis de datos.",
    foundingDate: "2020",
    slogan: "Tu Partner en Inteligencia Artificial",
    email: "info@unnic.ai",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Can Fatjó dels Aurons, 9 - Planta 4 - Oficina D",
      postalCode: "08174",
      addressLocality: "Sant Cugat del Vallès",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    sameAs: [
      // Redes sociales (añadir las URLs reales)
      "https://www.linkedin.com/company/unnic-ai",
      "https://twitter.com/unnic_ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "info@unnic.ai",
      availableLanguage: ["Spanish", "English", "Catalan"],
    },
    areaServed: {
      "@type": "Country",
      name: "Spain",
    },
    knowsAbout: [
      "Inteligencia Artificial",
      "Machine Learning",
      "IA Generativa",
      "Automatización de Procesos",
      "Consultoría Tecnológica",
      "Ciencia de Datos",
      "ChatGPT",
      "LLM",
    ],
  }
}

/**
 * Schema Service - Para páginas de servicios
 */
interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  serviceType: string
  areaServed?: string
  provider?: {
    name: string
    url: string
  }
}

export function getServiceSchema(props: ServiceSchemaProps): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.name,
    description: props.description,
    url: props.url,
    serviceType: props.serviceType,
    provider: {
      "@type": "Organization",
      name: props.provider?.name || "Unnic AI",
      url: props.provider?.url || SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: props.areaServed || "Spain",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de IA",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: props.name,
          },
        },
      ],
    },
  }
}

/**
 * Schema FAQPage - Para la página de preguntas frecuentes
 */
interface FAQItem {
  question: string
  answer: string
}

export function getFAQPageSchema(faqs: FAQItem[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * Schema BreadcrumbList - Para navegación breadcrumb
 */
interface BreadcrumbItem {
  name: string
  url: string
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Componente para renderizar el script de Schema
 */
export function StructuredData({ data }: { data: WithContext<Organization | Service | FAQPage | BreadcrumbList> }) {
  return (
    <template
      dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${JSON.stringify(data)}</script>`,
      }}
    />
  )
}
