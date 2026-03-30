const es = {
  meta: {
    serviceName: "Formación en IA para Empresas",
    serviceDescription:
      "Formación en Inteligencia Artificial impartida por profesionales que aplican IA en proyectos reales. Talleres intensivos y programas continuos, subvencionables mediante FUNDAE.",
    serviceType: "Formación Empresarial en IA",
  },
  hero: {
    titlePrefix: "Forma a tu Equipo con ",
    titleHighlight: "Expertos",
    subtitle:
      "Nuestros formadores no son docentes: son profesionales que aplican IA en empresas reales cada día.",
    fundaeBadge:
      "Toda nuestra formación es subvencionable a través de FUNDAE",
  },
  models: {
    title: "Dos modelos de formación",
    subtitle:
      "Elige el formato que mejor encaja con la madurez y las necesidades de tu equipo.",
    workshops: {
      title: "Talleres",
      description:
        "Sesiones intensivas de 3 horas, enfocadas en una herramienta o perfil concreto. Prácticas, directas y aplicables desde el primer día.",
      features: [
        "Duración: 3 horas",
        "Perfil o herramienta específica",
        "Aplicable desde el día 1",
        "Subvencionable FUNDAE",
      ],
    },
    continuous: {
      title: "Formación Continua",
      description:
        "Programa diseñado a medida para tu empresa. Adaptamos contenido, ritmo y objetivos a tu equipo y tu sector. Sin rigidez, sin temarios genéricos.",
      features: [
        "Programa a medida",
        "Ritmo adaptado a tu empresa",
        "Contenido actualizado mensualmente",
        "Subvencionable FUNDAE",
      ],
    },
  },
  companies: {
    title: "Empresas que ya han formado a sus equipos con nosotros",
  },
  workshopsByProfile: {
    title: "Talleres por perfil",
    subtitle: "Contenido adaptado al rol real de cada persona en la empresa.",
    learnMore: "Saber más",
    items: [
      { title: "Introducción a la IA", desc: "Fundamentos para cualquier perfil profesional" },
      { title: "IA para Directivos", desc: "Toma de decisiones estratégicas con IA" },
      { title: "IA para Comerciales", desc: "Potencia tus ventas con herramientas de IA" },
      { title: "IA para Marketers", desc: "Automatiza y optimiza tus campañas" },
      { title: "IA para RRHH", desc: "Gestión del talento y selección con IA" },
      { title: "IA para Finanzas", desc: "Análisis financiero y predicción con ML" },
      { title: "IA para Desarrolladores", desc: "Integración de modelos y APIs de IA" },
      { title: "Ad Hoc", desc: "Formación personalizada según tus necesidades específicas" },
    ],
  },
  workshopsByTech: {
    title: "Talleres por tecnología",
    subtitle: "Domina las herramientas que el mercado ya está usando.",
    items: [
      { name: "ChatGPT", brand: "OpenAI", desc: "Prompt engineering y casos de uso prácticos" },
      { name: "Copilot", brand: "Microsoft", desc: "Integración con Microsoft 365 y productividad" },
      { name: "Gemini", brand: "Google", desc: "Análisis multimodal y generación de contenido" },
      { name: "Claude", brand: "Anthropic", desc: "Reasoning avanzado y tareas complejas" },
    ],
  },
  continuousDetail: {
    title: "Formación Continua",
    subtitle:
      "La IA evoluciona cada mes. Tu equipo también debería. Diseñamos un programa formativo continuo adaptado a tu empresa, tu sector y tu nivel de madurez. Ajustamos el ritmo y el contenido según vuestras necesidades, y todo ello subvencionable a través de FUNDAE.",
    features: [
      "Contenido actualizado con las últimas novedades del mercado",
      "Formadores que trabajan con IA en proyectos reales, no en teoría",
      "Subvencionable a través de FUNDAE",
    ],
  },
  cta: {
    title: "¿Quieres saber qué formación necesita tu equipo?",
    subtitle:
      "Analizamos el nivel de madurez de tu empresa y te proponemos el programa más adecuado, incluyendo la tramitación FUNDAE si lo necesitas.",
    primaryButton: "Hablemos de tu equipo",
    secondaryButton: "Ver todos los servicios",
  },
  caseStudy: {
    title: "Caso de éxito",
    subtitle: "Descubre cómo un programa de formación transformó a un equipo",
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
  meta: {
    serviceName: "AI Training for Companies",
    serviceDescription:
      "Artificial Intelligence training delivered by professionals who apply AI in real projects. Intensive workshops and continuous programs, subsidizable through FUNDAE.",
    serviceType: "Corporate AI Training",
  },
  hero: {
    titlePrefix: "Train your Team with ",
    titleHighlight: "Experts",
    subtitle:
      "Our trainers are not lecturers: they are professionals who apply AI in real companies every day.",
    fundaeBadge:
      "All our training is subsidizable through FUNDAE",
  },
  models: {
    title: "Two training models",
    subtitle:
      "Choose the format that best fits your team's maturity and needs.",
    workshops: {
      title: "Workshops",
      description:
        "Intensive 3-hour sessions focused on a specific tool or profile. Practical, direct, and applicable from day one.",
      features: [
        "Duration: 3 hours",
        "Specific profile or tool",
        "Applicable from day 1",
        "FUNDAE subsidizable",
      ],
    },
    continuous: {
      title: "Continuous Training",
      description:
        "A tailor-made program for your company. We adapt content, pace, and objectives to your team and sector. No rigidity, no generic syllabi.",
      features: [
        "Tailor-made program",
        "Pace adapted to your company",
        "Content updated monthly",
        "FUNDAE subsidizable",
      ],
    },
  },
  companies: {
    title: "Companies that have already trained their teams with us",
  },
  workshopsByProfile: {
    title: "Workshops by profile",
    subtitle: "Content tailored to each person's real role in the company.",
    learnMore: "Learn more",
    items: [
      { title: "Introduction to AI", desc: "Fundamentals for any professional profile" },
      { title: "AI for Executives", desc: "Strategic decision-making with AI" },
      { title: "AI for Sales", desc: "Boost your sales with AI tools" },
      { title: "AI for Marketers", desc: "Automate and optimize your campaigns" },
      { title: "AI for HR", desc: "Talent management and recruitment with AI" },
      { title: "AI for Finance", desc: "Financial analysis and prediction with ML" },
      { title: "AI for Developers", desc: "Integration of AI models and APIs" },
      { title: "Ad Hoc", desc: "Customized training tailored to your specific needs" },
    ],
  },
  workshopsByTech: {
    title: "Workshops by technology",
    subtitle: "Master the tools the market is already using.",
    items: [
      { name: "ChatGPT", brand: "OpenAI", desc: "Prompt engineering and practical use cases" },
      { name: "Copilot", brand: "Microsoft", desc: "Microsoft 365 integration and productivity" },
      { name: "Gemini", brand: "Google", desc: "Multimodal analysis and content generation" },
      { name: "Claude", brand: "Anthropic", desc: "Advanced reasoning and complex tasks" },
    ],
  },
  continuousDetail: {
    title: "Continuous Training",
    subtitle:
      "AI evolves every month. Your team should too. We design a continuous training program adapted to your company, your industry, and your maturity level. We adjust the pace and content according to your needs, all subsidizable through FUNDAE.",
    features: [
      "Content updated with the latest market developments",
      "Trainers who work with AI on real projects, not just theory",
      "Subsidizable through FUNDAE",
    ],
  },
  cta: {
    title: "Want to know what training your team needs?",
    subtitle:
      "We analyze your company's maturity level and propose the most suitable program, including FUNDAE processing if you need it.",
    primaryButton: "Let's talk about your team",
    secondaryButton: "View all services",
  },
  caseStudy: {
    title: "Success story",
    subtitle: "Discover how a training program transformed a team",
    industryLabel: "Industry:",
    yearLabel: "Year:",
    serviceLabel: "Service:",
    challengeTitle: "The Challenge",
    solutionTitle: "The Solution",
    resultsTitle: "The Results",
    viewFullCase: "View full case",
  },
}

export const formacionTranslations = { es, en }
