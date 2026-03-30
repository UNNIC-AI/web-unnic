const es = {
  hero: {
    title: "Recursos para tu Empresa",
    subtitle: "Descubre automatizaciones, guías y herramientas gratuitas para optimizar tu negocio con inteligencia artificial.",
  },
  categories: [
    { label: "Diagnóstico", description: "Evalúa tu empresa" },
    { label: "Automatizaciones", description: "Listas para usar" },
    { label: "Cursos", description: "Aprende paso a paso" },
    { label: "Herramientas", description: "Gratuitas y premium" },
    { label: "Prompts", description: "Plantillas listas" },
    { label: "Otros", description: "Más recursos útiles" },
  ],
  sidebar: {
    searchPlaceholder: "Buscar recurso",
    categoriesTitle: "Categorías",
  },
  card: {
    featured: "Destacado",
    comingSoon: "Próximamente",
    free: "Gratuito",
    premium: "Premium",
    viewResource: "Ver Recurso",
    notAvailable: "No disponible actualmente",
  },
  noResults: "No se encontraron recursos con esos filtros.",
  resources: [
    {
      category: "Diagnóstico",
      title: "Diagnóstico Inicial de IA",
      description: "Formulario interactivo que analiza el estado actual de tu empresa en materia de IA: procesos, datos, equipo y tecnología. Obtén un informe personalizado con tu nivel de madurez y un plan de acción con los próximos pasos para acelerar tu transformación.",
      tags: ["#diagnostico", "#madurez-ia", "#estrategia", "#gratuito"],
    },
    {
      category: "Automatizaciones",
      title: "Clasificación automática de correos con IA",
      description: "Automatiza la clasificación de emails entrantes según prioridad, departamento y acción requerida. Integra con Gmail o Outlook y conecta con tu CRM.",
      tags: ["#email", "#clasificación", "#automatización"],
    },
    {
      category: "Cursos",
      title: "Cómo implementar un agente de IA en atención al cliente",
      description: "Guía paso a paso para desplegar un agente conversacional que gestione consultas frecuentes, escale incidencias y reduzca tiempos de respuesta.",
      tags: ["#agente", "#atencion-cliente", "#chatbot"],
    },
    {
      category: "Herramientas",
      title: "Plantilla de evaluación de madurez en IA",
      description: "Cuestionario y matriz de evaluación para conocer en qué punto de adopción de IA se encuentra tu empresa y qué pasos dar a continuación.",
      tags: ["#madurez", "#evaluacion", "#estrategia"],
    },
    {
      category: "Otros",
      title: "Pack de prompts para generar contenido de LinkedIn",
      description: "50 prompts optimizados para crear posts, artículos y carruseles de LinkedIn orientados a empresas B2B que quieren posicionarse como referentes.",
      tags: ["#linkedin", "#contenido", "#b2b"],
    },
    {
      category: "Otros",
      title: "Automatiza la generación de informes semanales",
      description: "Conecta tus fuentes de datos con un flujo n8n para generar y enviar informes de negocio automáticamente cada semana sin intervención manual.",
      tags: ["#informes", "#n8n", "#datos"],
    },
    {
      category: "Otros",
      title: "Prompts para cualificar leads con IA generativa",
      description: "Conjunto de prompts para analizar conversaciones, perfilar leads y priorizar oportunidades comerciales usando ChatGPT o Claude.",
      tags: ["#leads", "#ventas", "#crm"],
    },
    {
      category: "Prompts",
      title: "Plantillas de prompts para análisis de documentos",
      description: "Extrae información clave de contratos, facturas y presupuestos con estas plantillas de prompts listas para usar en cualquier LLM.",
      tags: ["#documentos", "#extraccion", "#prompts"],
    },
    {
      category: "Otros",
      title: "Checklist de automatización de procesos con IA",
      description: "Lista de verificación completa para auditar, priorizar e implementar automatizaciones con IA en empresas medianas y grandes.",
      tags: ["#checklist", "#procesos", "#implementacion"],
    },
    {
      category: "Otros",
      title: "Prompts para screening de candidatos con IA",
      description: "Reduce el tiempo de selección con prompts que analizan CVs, generan preguntas de entrevista y evalúan competencias automáticamente.",
      tags: ["#rrhh", "#seleccion", "#ia"],
    },
    {
      category: "Otros",
      title: "Caso real: IA en gestión de inventario retail",
      description: "Análisis detallado de cómo una empresa retail redujo el exceso de stock un 34% utilizando modelos predictivos y automatización de pedidos.",
      tags: ["#retail", "#inventario", "#prediccion"],
    },
    {
      category: "Cursos",
      title: "Guía de Cumplimiento con el Reglamento IA Europeo",
      description: "Todo lo que necesitas saber para adaptar tu empresa a la normativa europea de IA: clasificación de riesgos, documentación requerida y plazos.",
      tags: ["#ria", "#cumplimiento", "#regulacion"],
    },
    {
      category: "Automatizaciones",
      title: "Automatiza respuestas a reseñas de Google",
      description: "Plantilla Make lista para responder reseñas de 4-5 estrellas automáticamente y recibir alertas por email ante valoraciones negativas.",
      tags: ["#google", "#reseñas", "#reputacion"],
    },
  ],
}

const en: typeof es = {
  hero: {
    title: "Resources for Your Business",
    subtitle: "Discover automations, guides and free tools to optimize your business with artificial intelligence.",
  },
  categories: [
    { label: "Diagnostics", description: "Evaluate your company" },
    { label: "Automations", description: "Ready to use" },
    { label: "Courses", description: "Learn step by step" },
    { label: "Tools", description: "Free and premium" },
    { label: "Prompts", description: "Ready-made templates" },
    { label: "Other", description: "More useful resources" },
  ],
  sidebar: {
    searchPlaceholder: "Search resource",
    categoriesTitle: "Categories",
  },
  card: {
    featured: "Featured",
    comingSoon: "Coming Soon",
    free: "Free",
    premium: "Premium",
    viewResource: "View Resource",
    notAvailable: "Not currently available",
  },
  noResults: "No resources found with those filters.",
  resources: [
    {
      category: "Diagnostics",
      title: "Initial AI Diagnostic",
      description: "Interactive form that analyzes your company's current state regarding AI: processes, data, team and technology. Get a personalized report with your maturity level and an action plan with next steps to accelerate your transformation.",
      tags: ["#diagnostics", "#ai-maturity", "#strategy", "#free"],
    },
    {
      category: "Automations",
      title: "Automatic email classification with AI",
      description: "Automate the classification of incoming emails by priority, department and required action. Integrates with Gmail or Outlook and connects with your CRM.",
      tags: ["#email", "#classification", "#automation"],
    },
    {
      category: "Courses",
      title: "How to implement an AI agent in customer service",
      description: "Step-by-step guide to deploy a conversational agent that handles frequent queries, escalates incidents and reduces response times.",
      tags: ["#agent", "#customer-service", "#chatbot"],
    },
    {
      category: "Tools",
      title: "AI maturity assessment template",
      description: "Questionnaire and evaluation matrix to understand where your company stands in AI adoption and what steps to take next.",
      tags: ["#maturity", "#assessment", "#strategy"],
    },
    {
      category: "Other",
      title: "LinkedIn content generation prompt pack",
      description: "50 optimized prompts to create LinkedIn posts, articles and carousels aimed at B2B companies wanting to position themselves as industry leaders.",
      tags: ["#linkedin", "#content", "#b2b"],
    },
    {
      category: "Other",
      title: "Automate weekly report generation",
      description: "Connect your data sources with an n8n workflow to automatically generate and send business reports every week without manual intervention.",
      tags: ["#reports", "#n8n", "#data"],
    },
    {
      category: "Other",
      title: "Prompts for qualifying leads with generative AI",
      description: "Set of prompts to analyze conversations, profile leads and prioritize business opportunities using ChatGPT or Claude.",
      tags: ["#leads", "#sales", "#crm"],
    },
    {
      category: "Prompts",
      title: "Prompt templates for document analysis",
      description: "Extract key information from contracts, invoices and budgets with these ready-to-use prompt templates for any LLM.",
      tags: ["#documents", "#extraction", "#prompts"],
    },
    {
      category: "Other",
      title: "AI process automation checklist",
      description: "Complete verification checklist to audit, prioritize and implement AI automations in medium and large enterprises.",
      tags: ["#checklist", "#processes", "#implementation"],
    },
    {
      category: "Other",
      title: "Prompts for candidate screening with AI",
      description: "Reduce selection time with prompts that analyze CVs, generate interview questions and evaluate competencies automatically.",
      tags: ["#hr", "#recruitment", "#ai"],
    },
    {
      category: "Other",
      title: "Real case: AI in retail inventory management",
      description: "Detailed analysis of how a retail company reduced excess stock by 34% using predictive models and order automation.",
      tags: ["#retail", "#inventory", "#prediction"],
    },
    {
      category: "Courses",
      title: "EU AI Regulation Compliance Guide",
      description: "Everything you need to know to adapt your company to European AI regulations: risk classification, required documentation and deadlines.",
      tags: ["#aia", "#compliance", "#regulation"],
    },
    {
      category: "Automations",
      title: "Automate Google review responses",
      description: "Ready-made Make template to automatically respond to 4-5 star reviews and receive email alerts for negative ratings.",
      tags: ["#google", "#reviews", "#reputation"],
    },
  ],
}

const ca: typeof es = {
  hero: {
    title: "Recursos per a la teva empresa",
    subtitle:
      "Descobreix automatitzacions, guies i eines gratuïtes per optimitzar el teu negoci amb intel·ligència artificial.",
  },
  categories: [
    { label: "Diagnòstic", description: "Avalua la teva empresa" },
    { label: "Automatitzacions", description: "Llestes per usar" },
    { label: "Cursos", description: "Aprèn pas a pas" },
    { label: "Eines", description: "Gratuïtes i premium" },
    { label: "Prompts", description: "Plantilles llestes" },
    { label: "Altres", description: "Més recursos útils" },
  ],
  sidebar: {
    searchPlaceholder: "Cercar recurs",
    categoriesTitle: "Categories",
  },
  card: {
    featured: "Destacat",
    comingSoon: "Properament",
    free: "Gratuït",
    premium: "Premium",
    viewResource: "Veure el recurs",
    notAvailable: "No disponible actualment",
  },
  noResults: "No s'han trobat recursos amb aquests filtres.",
  resources: [
    {
      category: "Diagnòstic",
      title: "Diagnòstic inicial d'IA",
      description:
        "Formulari interactiu que analitza l'estat actual de la teva empresa en matèria d'IA: processos, dades, equip i tecnologia. Obtén un informe personalitzat amb el teu nivell de maduresa i un pla d'acció amb els propers passos per accelerar la teva transformació.",
      tags: ["#diagnostic", "#maduresa-ia", "#estrategia", "#gratuit"],
    },
    {
      category: "Automatitzacions",
      title: "Classificació automàtica de correus amb IA",
      description:
        "Automatitza la classificació dels correus entrants segons prioritat, departament i acció requerida. Integra amb Gmail o Outlook i connecta amb el teu CRM.",
      tags: ["#correu", "#classificacio", "#automatitzacio"],
    },
    {
      category: "Cursos",
      title: "Com implementar un agent d'IA en atenció al client",
      description:
        "Guia pas a pas per desplegar un agent conversacional que gestioni consultes freqüents, escali incidències i redueixi els temps de resposta.",
      tags: ["#agent", "#atencio-client", "#chatbot"],
    },
    {
      category: "Eines",
      title: "Plantilla d'avaluació de maduresa en IA",
      description:
        "Qüestionari i matriu d'avaluació per conèixer en quin punt d'adopció d'IA es troba la teva empresa i quins passos cal donar a continuació.",
      tags: ["#maduresa", "#avaluacio", "#estrategia"],
    },
    {
      category: "Altres",
      title: "Pack de prompts per generar contingut de LinkedIn",
      description:
        "50 prompts optimitzats per crear publicacions, articles i carrusels de LinkedIn orientats a empreses B2B que volen posicionar-se com a referents.",
      tags: ["#linkedin", "#contingut", "#b2b"],
    },
    {
      category: "Altres",
      title: "Automatitza la generació d'informes setmanals",
      description:
        "Connecta les teves fonts de dades amb un flux n8n per generar i enviar informes de negoci automàticament cada setmana sense intervenció manual.",
      tags: ["#informes", "#n8n", "#dades"],
    },
    {
      category: "Altres",
      title: "Prompts per qualificar leads amb IA generativa",
      description:
        "Conjunt de prompts per analitzar converses, perfilar leads i prioritzar oportunitats comercials mitjançant ChatGPT o Claude.",
      tags: ["#leads", "#vendes", "#crm"],
    },
    {
      category: "Prompts",
      title: "Plantilles de prompts per a l'anàlisi de documents",
      description:
        "Extreu informació clau de contractes, factures i pressupostos amb aquestes plantilles de prompts llestes per usar en qualsevol LLM.",
      tags: ["#documents", "#extraccio", "#prompts"],
    },
    {
      category: "Altres",
      title: "Llista de verificació d'automatització de processos amb IA",
      description:
        "Llista de verificació completa per auditar, prioritzar i implementar automatitzacions amb IA en empreses mitjanes i grans.",
      tags: ["#llista", "#processos", "#implementacio"],
    },
    {
      category: "Altres",
      title: "Prompts per al screening de candidats amb IA",
      description:
        "Redueix el temps de selecció amb prompts que analitzen CV, generen preguntes d'entrevista i avaluen competències automàticament.",
      tags: ["#rrhh", "#seleccio", "#ia"],
    },
    {
      category: "Altres",
      title: "Cas real: IA en la gestió d'estoc retail",
      description:
        "Anàlisi detallada de com una empresa retail va reduir l'excés d'estoc un 34% utilitzant models predictius i automatització de comandes.",
      tags: ["#retail", "#estoc", "#prediccio"],
    },
    {
      category: "Cursos",
      title: "Guia de compliment del Reglament europeu d'IA",
      description:
        "Tot el que necessites saber per adaptar la teva empresa a la normativa europea d'IA: classificació de riscos, documentació requerida i terminis.",
      tags: ["#ria", "#compliment", "#regulacio"],
    },
    {
      category: "Automatitzacions",
      title: "Automatitza les respostes a ressenyes de Google",
      description:
        "Plantilla Make llesta per respondre ressenyes de 4-5 estrelles automàticament i rebre alertes per correu davant valoracions negatives.",
      tags: ["#google", "#ressenyes", "#reputacio"],
    },
  ],
}

export const recursosTranslations = { es, en, ca }
