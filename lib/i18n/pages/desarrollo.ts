const es = {
  hero: {
    titlePrefix: "Tu software, ",
    titleHighlight: "exactamente como lo necesitas",
    subtitle:
      "Cuando la solución requiere código a medida, construimos exactamente lo que tu empresa necesita. Sin plantillas, sin limitaciones.",
    ctaPrimary: "Cuéntanoslo",
    ctaSecondary: "Ver portfolio",
  },
  noLockIn: {
    title: "Sin ataduras ",
    titleHighlight: "tecnológicas",
    subtitle:
      "Trabajamos con el stack que mejor se adapta al problema, no al revés. Elegimos la tecnología según las necesidades reales del cliente: infraestructura, equipo, presupuesto y escalabilidad.",
    cards: [
      { label: "Infraestructura", desc: "Cloud, on-premise o híbrido según tus necesidades" },
      { label: "Equipo", desc: "Nos adaptamos a tu stack actual o proponemos el más adecuado" },
      { label: "Escalabilidad", desc: "Arquitecturas que crecen contigo sin reescribir todo" },
    ],
  },
  techCarousel: {
    subtitle: "Trabajamos con las mejores tecnologías del mercado",
  },
  whatWeBuild: {
    title: "¿Qué construimos?",
    subtitle:
      "Cuatro líneas de desarrollo donde tenemos experiencia probada y resultados reales.",
    items: [
      {
        title: "SaaS escalable",
        description:
          "Aplicaciones web con miles de usuarios concurrentes y arquitectura pronta para crecer.",
      },
      {
        title: "APIs y microservicios",
        description:
          "Backends robustos, seguros y documentados que tu frontend o terceros pueden consumir.",
      },
      {
        title: "Integraciones complejas",
        description:
          "Conectamos tus sistemas internos con plataformas externas — sincronización, webhooks, ETL.",
      },
      {
        title: "Aplicaciones real-time",
        description:
          "Chats, colaboración en vivo, notificaciones y dashboards que reaccionan instantáneamente.",
      },
    ],
  },
  howWeWork: {
    title: "Cómo trabajamos",
    subtitle:
      "Un proceso estructurado para que cada euro invertido en desarrollo tenga retorno medible.",
    steps: [
      {
        title: "Análisis de requisitos",
        description: "Entendemos el problema real antes de escribir una línea de código",
      },
      {
        title: "Arquitectura técnica",
        description: "Elegimos el stack adecuado al problema, no al revés",
      },
      {
        title: "Desarrollo ágil",
        description: "Sprints con demos periódicas para que el cliente valide en cada paso",
      },
      {
        title: "Despliegue",
        description: "On premise, cloud o híbrido según tus necesidades",
      },
      {
        title: "Soporte y evolución",
        description: "Mantenemos y escalamos la solución a medida que crece tu empresa",
      },
    ],
  },
  cta: {
    title: "¿Tienes un proyecto en mente?",
    subtitle:
      "Cuéntanoslo. En una primera llamada te decimos si tiene sentido técnico y qué costaría construirlo.",
    ctaPrimary: "Cuéntanoslo",
    ctaSecondary: "Ver todos los servicios",
  },
  caseStudy: {
    title: "Caso de éxito",
    subtitle:
      "Descubre cómo ayudamos a Catalonia Ceramic a transformar sus operaciones con desarrollo a medida",
    industryLabel: "Industria:",
    yearLabel: "Año:",
    serviceLabel: "Servicio:",
    challengeTitle: "El Desafío",
    solutionTitle: "La Solución",
    resultsTitle: "Los Resultados",
    viewFullCase: "Ver caso completo",
  },
}

const en: typeof es = {
  hero: {
    titlePrefix: "Your software, ",
    titleHighlight: "exactly as you need it",
    subtitle:
      "When the solution requires custom code, we build exactly what your company needs. No templates, no limitations.",
    ctaPrimary: "Tell us about it",
    ctaSecondary: "View portfolio",
  },
  noLockIn: {
    title: "No technology ",
    titleHighlight: "lock-in",
    subtitle:
      "We work with the stack that best fits the problem, not the other way around. We choose the technology based on the client's real needs: infrastructure, team, budget, and scalability.",
    cards: [
      { label: "Infrastructure", desc: "Cloud, on-premise, or hybrid according to your needs" },
      { label: "Team", desc: "We adapt to your current stack or propose the most suitable one" },
      { label: "Scalability", desc: "Architectures that grow with you without rewriting everything" },
    ],
  },
  techCarousel: {
    subtitle: "We work with the best technologies on the market",
  },
  whatWeBuild: {
    title: "What do we build?",
    subtitle:
      "Four development areas where we have proven experience and real results.",
    items: [
      {
        title: "Scalable SaaS",
        description:
          "Web applications with thousands of concurrent users and architecture ready to grow.",
      },
      {
        title: "APIs & microservices",
        description:
          "Robust, secure, and documented backends that your frontend or third parties can consume.",
      },
      {
        title: "Complex integrations",
        description:
          "We connect your internal systems with external platforms — synchronization, webhooks, ETL.",
      },
      {
        title: "Real-time applications",
        description:
          "Chats, live collaboration, notifications, and dashboards that react instantly.",
      },
    ],
  },
  howWeWork: {
    title: "How we work",
    subtitle:
      "A structured process so that every euro invested in development has measurable returns.",
    steps: [
      {
        title: "Requirements analysis",
        description: "We understand the real problem before writing a single line of code",
      },
      {
        title: "Technical architecture",
        description: "We choose the right stack for the problem, not the other way around",
      },
      {
        title: "Agile development",
        description: "Sprints with periodic demos so the client validates at every step",
      },
      {
        title: "Deployment",
        description: "On-premise, cloud, or hybrid according to your needs",
      },
      {
        title: "Support & evolution",
        description: "We maintain and scale the solution as your company grows",
      },
    ],
  },
  cta: {
    title: "Have a project in mind?",
    subtitle:
      "Tell us about it. In a first call, we'll tell you if it makes technical sense and what it would cost to build.",
    ctaPrimary: "Tell us about it",
    ctaSecondary: "View all services",
  },
  caseStudy: {
    title: "Success story",
    subtitle:
      "Discover how we helped Catalonia Ceramic transform their operations with custom development",
    industryLabel: "Industry:",
    yearLabel: "Year:",
    serviceLabel: "Service:",
    challengeTitle: "The Challenge",
    solutionTitle: "The Solution",
    resultsTitle: "The Results",
    viewFullCase: "View full case",
  },
}

export const desarrolloTranslations = { es, en }
