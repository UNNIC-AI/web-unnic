export interface Company {
  name: string
  src: string
}

export const companies: Company[] = [
  { name: "Solanes Mobiliari", src: "/logos/solanes.png" },
  { name: "SKFK", src: "/logos/skfk.png" },
  { name: "JOM Metal Parts", src: "/logos/jom.png" },
  { name: "Shingels", src: "/logos/shingels.png" },
  { name: "BEHQ", src: "/logos/behq.png" },
  { name: "Fecosauto", src: "/logos/fecosauto.png" },
  { name: "VISA Coaching Institute", src: "/logos/visa-coaching.png" },
  { name: "Tekniatest", src: "/logos/tekniatest.png" },
  { name: "Catalonia Ceramic", src: "/logos/catalonia-ceramic.png" },
  { name: "Ribes & Casals", src: "/logos/ribes-casals.png" },
]

export interface Service {
  kicker: string
  title: string
  description: string
  image: string
  href: string
}

export const services: Service[] = [
  {
    kicker: "Diseñamos la estrategia de IA",
    title: "Consultoría",
    description: "Identificamos procesos con impacto, priorizamos quick wins y definimos una hoja de ruta con retorno.",
    image: "/service-consulting.png",
    href: "/servicios/consultoria",
  },
  {
    kicker: "Hacemos realidad la solución",
    title: "Implementación",
    description: "Asistentes, automatizaciones y modelos predictivos integrados con tus sistemas.",
    image: "/service-implementation.png",
    href: "/servicios/desarrollo",
  },
  {
    kicker: "Impulsamos la adopción",
    title: "Formación",
    description: "Capacitamos a dirección y equipos para usar la IA de forma eficaz y segura.",
    image: "/service-training.png",
    href: "/servicios/formacion",
  },
  {
    kicker: "Uso responsable por defecto",
    title: "Cumplimiento RIA",
    description: "Gobernanza y evaluación de riesgos alineadas con el Reglamento Europeo de IA.",
    image: "/cumplimiento-ria-regulacion-europea-documentacion.png",
    href: "/servicios/cumplimiento-ria",
  },
]

export interface Testimonial {
  quote: string
  author: string
  role: string
  initials: string
  source: string
  sourceLogo: string
  sourceUrl: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ugo i Nico han estat totalment implicats, cuidant cada detall amb una dedicació que es nota en el resultat final. Molt satisfeta amb el procés i l'acompanyament.",
    author: "Joana Visa",
    role: "Fundadora, Visa Coaching Institute",
    initials: "JV",
    source: "Web",
    sourceLogo: "web-icon",
    sourceUrl: "/contacto",
  },
  {
    quote:
      "Una experiència excel·lent: molt pròxims, accessibles i clars, adaptant-se perfectament als nostres horaris i necessitats. Totalment recomanables.",
    author: "Judit Raja",
    role: "Directora de Compras, Tekniatest",
    initials: "JR",
    source: "Web",
    sourceLogo: "web-icon",
    sourceUrl: "/contacto",
  },
  {
    quote:
      "Están superando nuestras expectativas y ayudándonos a entender dónde la IA aporta valor, priorizando cambios y acompañando tanto a nivel técnico como cultural.",
    author: "Josep Maria Tey",
    role: "Director General, Catalonia Cerámica",
    initials: "JT",
    source: "Google Maps",
    sourceLogo: "/google-logo.png",
    sourceUrl: "https://www.google.com/search?sca_esv=2bbc76108a4ecd6f&rlz=1C1GCEA_enES1128ES1128&q=opiniones+de+unnic+ai&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXZeUcDWVH_1dkeAiLId1o7bCm0cia1WZQXpgBhP2tB31tmQgmzF5hdfyHm46UOKE5hSNf4%3D&uds=ALYpb_lx5Hup9BUa31h6AkHudUb2x72SWRA50lDYH9BwIUP7mtmNEFS8eOnToRjLE5dedkzWUf_R9586yTxgCo1jHcVmXHrDenpTxhyXXcflFImVvJ-FsGnFbfHX_KXKwt0DFqR4H2Uf&sa=X&ved=2ahUKEwjfn9HA8d2SAxVgdqQEHRZzAJMQ3PALegQIMxAF&biw=1920&bih=911",
  },
  {
    quote:
      "Experiencia inmejorable en un proyecto del Kit Consulting; trato exquisito y trabajo increíble por parte de todo el equipo de Unnic.",
    author: "Marisol Huertas",
    role: "Directora de Calidad, Shingels",
    initials: "MH",
    source: "Google Maps",
    sourceLogo: "/google-logo.png",
    sourceUrl: "https://www.google.com/search?sca_esv=2bbc76108a4ecd6f&rlz=1C1GCEA_enES1128ES1128&q=opiniones+de+unnic+ai&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXZeUcDWVH_1dkeAiLId1o7bCm0cia1WZQXpgBhP2tB31tmQgmzF5hdfyHm46UOKE5hSNf4%3D&uds=ALYpb_lx5Hup9BUa31h6AkHudUb2x72SWRA50lDYH9BwIUP7mtmNEFS8eOnToRjLE5dedkzWUf_R9586yTxgCo1jHcVmXHrDenpTxhyXXcflFImVvJ-FsGnFbfHX_KXKwt0DFqR4H2Uf&sa=X&ved=2ahUKEwjfn9HA8d2SAxVgdqQEHRZzAJMQ3PALegQIMxAF&biw=1920&bih=911",
  },
  {
    quote:
      "Unnic mostró una mentalidad muy proactiva, mejoró nuestros indicadores clave y destacó por su gestión, respuesta al feedback y alineación con los objetivos.",
    author: "Ignacio Mosquera Sopena",
    role: "CEO, Vive España",
    initials: "IM",
    source: "Clutch",
    sourceLogo: "/clutch-logo.png",
    sourceUrl: "https://clutch.co/profile/unnic-ai",
  },
  {
    quote:
      "Formación práctica y muy didáctica sobre IA; la proximidad y claridad de Nieves hicieron que fuera útil, amena y fácil de aplicar en el día a día.",
    author: "David Berenguera",
    role: "Catalonia Cerámica",
    initials: "DB",
    source: "Trustpilot",
    sourceLogo: "/trustpilot-logo.png",
    sourceUrl: "https://es.trustpilot.com/review/unnic.ai",
  },
]

export interface TechPartner {
  name: string
  logo: string
}

export const techPartners: TechPartner[] = [
  { name: "OpenAI", logo: "/logos/tech/openai.png" },
  { name: "Anthropic", logo: "/logos/tech/anthropic.png" },
  { name: "AWS", logo: "/logos/tech/aws.png" },
  { name: "Azure", logo: "/logos/tech/azure.png" },
  { name: "Google Cloud", logo: "/logos/tech/google-cloud.png" },
  { name: "Vercel", logo: "/logos/tech/vercel.png" },
  { name: "GitHub", logo: "/logos/tech/github.png" },
  { name: "Microsoft", logo: "/logos/tech/microsoft.png" },
  { name: "Dynamics 365", logo: "/logos/tech/dynamics365.png" },
  { name: "PostgreSQL", logo: "/logos/tech/postgresql.png" },
  { name: "VAPI", logo: "/logos/tech/vapi.png" },
  { name: "LangChain", logo: "/logos/tech/langchain.png" },
  { name: "n8n", logo: "/logos/tech/n8n.png" },
  { name: "Lightning", logo: "/logos/tech/lightning.png" },
  { name: "Odoo", logo: "/logos/tech/odoo.png" },
  { name: "SAP", logo: "/logos/tech/sap.png" },
]

export interface SuccessStory {
  id: string
  company: string
  logo: string
  logoUrl?: string // Added optional logoUrl for real company logos
  logoGradient: string
  industry: string
  year: string
  service: string
  challenge: string
  solution: string
  results: Array<{ metric: string; description: string }>
  image: string
  shortTitle: string
}

export const successStories: SuccessStory[] = [
  {
    id: "catalonia-ceramic",
    company: "Catalonia Ceramic",
    logo: "CC",
    logoUrl: "/catalonia-ceramic-logo.png",
    logoGradient: "from-red-600 to-red-400",
    industry: "Distribución",
    year: "2025",
    service: "Automatización Operativa con IA",
    challenge:
      "La empresa operaba con procesos manuales en logística, administración y compras, consumiendo cientos de horas y generando errores. Esta carga reducía la eficiencia y dificultaba el control operativo.",
    solution:
      "Unnic AI priorizó los procesos críticos, desarrolló automatizaciones en logística y validación documental y formó al equipo. Además, se garantizó el cumplimiento del Reglamento de IA.",
    results: [
      { metric: "+200h", description: "Trabajo manual ahorrado semanalmente" },
      { metric: "25%", description: "Aumento de productividad en procesos" },
      { metric: "0%", description: "Riesgo de sanciones por uso de IA" },
    ],
    image: "/catalonia-ceramic-warehouse.jpg",
    shortTitle: "Automatización Operativa Integral",
  },
  {
    id: "conectap",
    company: "Conectap",
    logo: "CT",
    logoUrl: "/conectap-logo.png",
    logoGradient: "from-orange-500 to-orange-600",
    industry: "Restauración & Hostelería",
    year: "2024",
    service: "Plataforma SaaS con IA",
    challenge:
      "Los grupos de restauración con múltiples locales enfrentaban el reto de garantizar una experiencia coherente en todos sus establecimientos. Miles de reseñas en Google Maps contenían información valiosa, pero el volumen era inabarcable y poco estructurado, imposibilitando detectar problemas críticos o variaciones entre locales sin auditorías costosas.",
    solution:
      "Diseñamos y desarrollamos Conectap, una plataforma SaaS que integra directamente con Google My Business para importar reseñas automáticamente. Aplicamos modelos de IA para análisis de sentimiento y clasificación temática (servicio, atención, ambiente, precios, limpieza), convirtiendo opiniones en insights operativos visualizados en dashboards intuitivos.",
    results: [
      { metric: "80%", description: "Reducción en tiempo de análisis" },
      { metric: "85%", description: "CMOs toman mejores decisiones" },
      { metric: "<48h", description: "Detección de problemas críticos" },
    ],
    image: "/conectap-dashboard-screenshot.png",
    shortTitle: "Control Operativo con IA",
  },
  {
    id: "construccion-distributor",
    company: "Empresa de Construcción (Confidencial)",
    logo: "EC",
    logoGradient: "from-amber-600 to-orange-500",
    industry: "Construcción & Distribución",
    year: "2024",
    service: "Automatización Documental con IA",
    challenge:
      "Distribuidora española con +220 empleados debía cotejar manualmente cada factura con su pedido y albarán correspondiente. Este proceso repetitivo, realizado en papel o herramientas tradicionales, era propenso a errores, dependía de intervención constante del personal administrativo y cualquier discrepancia requería trabajo adicional de revisión, incrementando tiempos de gestión y riesgo de pérdidas económicas.",
    solution:
      "Desarrollamos un lector y validador automático de documentos con OCR avanzado para digitalizar facturas, albaranes y pedidos. Los sistemas de IA extraen y estructuran datos clave (referencias, productos, cantidades, importes, fechas) y el motor de validación coteja automáticamente cada factura con su pedido y albarán en segundos, identificando discrepancias y alertando en tiempo real. Integración completa con ERP para alimentar procesos contables.",
    results: [
      { metric: "90%", description: "Reducción en tiempo de cotejo" },
      { metric: "€8.500", description: "Ahorro mensual estimado" },
      { metric: "100%", description: "Trazabilidad de documentos" },
    ],
    image: "/construction-warehouse-documents.jpg",
    shortTitle: "Validación Automática de Documentos",
  },
  {
    id: "pinturas-personalizadas",
    company: "Empresa de Pinturas Personalizadas (Confidencial)",
    logo: "EP",
    logoGradient: "from-blue-600 to-indigo-500",
    industry: "Industrial & Fabricación",
    year: "2025",
    service: "Consultoría Estratégica de IA",
    challenge:
      "Fabricante español de pinturas personalizadas afrontaba fuerte dependencia de procesos manuales, herramientas tecnológicas poco integradas y centralización del conocimiento crítico en perfiles clave. Esto generaba cuellos de botella en formulación de productos, generación y validación de ofertas, gestión de pedidos y transferencia de conocimiento técnico.",
    solution:
      "Unnic AI ejecutó una consultoría estratégica en dos fases: 1) Análisis exhaustivo mediante entrevistas con todas las áreas críticas y mapeo completo de procesos; 2) Definición de hoja de ruta con cuatro soluciones concretas: asistente RAG de conocimiento interno, modelo predictivo de formulación, generador automatizado de ofertas y sistema de cotejo inteligente pedidos-ofertas. Cada propuesta incluyó arquitectura funcional, tecnología, backlog y ROI estimado.",
    results: [
      { metric: "+4", description: "Proyectos con ROI < 6 meses" },
      { metric: "80%", description: "Menos tiempo en búsqueda de información" },
      { metric: "9,7/10", description: "Valoración del cliente" },
    ],
    image: "/paint-manufacturing-facility.jpg",
    shortTitle: "Consultoría IA Industrial",
  },
  {
    id: "vivi-coaching",
    company: "Visa Coaching Institute",
    logo: "VC",
    logoUrl: "/visa-coaching-logo.png",
    logoGradient: "from-[#00bfa5] to-[#00897b]",
    industry: "HealthTech & Coaching",
    year: "2025",
    service: "IA Conversacional & Voz",
    challenge:
      "El reto era doble: convertir una metodología compleja y personal en un flujo conversacional robusto, y garantizar que la IA mantuviera la neutralidad y empatía necesarias para el bienestar emocional.",
    solution:
      "Creamos Vivi, una aplicación integral que combina diseño conversacional con IA generativa. Utilizamos GPT-4.1 para el razonamiento, Whisper para transcripción y Eleven Labs para voz, todo integrado en una interfaz React accesible.",
    results: [
      { metric: "+200", description: "Sesiones de prueba" },
      { metric: "70%", description: "Impacto emocional alto" },
      { metric: "8/10", description: "NPS (Satisfacción)" },
    ],
    image: "/vivi-app-screenshot.png",
    shortTitle: "Coaching con IA",
  },
  {
    id: "restauracion-predictiva",
    company: "Cadena de Restauración (Confidencial)",
    logo: "CR",
    logoGradient: "from-emerald-600 to-green-500",
    industry: "Restauración Organizada",
    year: "2024",
    service: "Modelos Predictivos de Compras",
    challenge:
      "Cadena con +50 franquicias sufría alta variabilidad en la demanda, dificultades para prever consumo real y frecuentes incidencias de sobrestock y roturas. Las compras basadas en intuición generaban desperdicio alimentario elevado, costes ocultos y falta de poder de negociación con proveedores.",
    solution:
      "Desarrollamos un sistema de predicción de demanda y optimización de compras. Auditoría de datos históricos, modelos de machine learning (XGBoost) para prever demanda semanal por referencia, integración con ERP para pedidos automáticos y dashboards personalizados para responsables de compras y franquicias.",
    results: [
      { metric: "27%", description: "Menos desperdicio alimentario" },
      { metric: "38%", description: "Menos roturas de stock" },
      { metric: "€9.000", description: "Ahorro mensual estimado" },
    ],
    image: "/restaurant-inventory-analytics.jpg",
    shortTitle: "Optimización Predictiva Compras",
  },
]

export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: "¿Qué tipo de empresas pueden beneficiarse de la IA?",
    answer:
      "La IA no es solo para grandes tecnológicas. Trabajamos con empresas de más de 50 trabajadores en sectores como retail, logística, salud, finanzas y manufactura. Si tienes procesos repetitivos, grandes volúmenes de datos o necesitas mejorar la toma de decisiones, la IA puede transformar tu negocio.",
  },
  {
    question: "¿Cuánto tiempo tarda en implementarse una solución?",
    answer:
      "Depende de la complejidad del proyecto. Nuestros 'Quick Wins' pueden estar operativos en 2-4 semanas, mientras que transformaciones más profundas o modelos predictivos complejos pueden llevar de 3 a 6 meses. Siempre trabajamos con entregables incrementales para que veas valor desde el primer mes.",
  },
  {
    question: "¿Es necesario tener un equipo técnico interno?",
    answer:
      "No. Nosotros actuamos como tu socio tecnológico. Nos encargamos del desarrollo, implementación y mantenimiento. Sin embargo, si tienes equipo técnico, colaboramos estrechamente con ellos para asegurar una transferencia de conocimiento efectiva.",
  },
  {
    question: "¿Cómo garantizan la seguridad de los datos?",
    answer:
      "La seguridad es nuestra prioridad. Implementamos soluciones que cumplen con GDPR y normativas europeas. Trabajamos con entornos aislados, encriptación de extremo a extremo y, cuando es necesario, desplegamos modelos locales (On-Premise) para que los datos nunca salgan de tu infraestructura.",
  },
  {
    question: "¿Cuál es el retorno de inversión (ROI) esperado?",
    answer:
      "Nuestros proyectos están diseñados para tener un ROI claro y medible. Típicamente, nuestros clientes ven retornos de 3x a 10x en el primer año gracias a la reducción de costes operativos, aumento de ventas o mejora en la eficiencia de los empleados.",
  },
]

export interface TeamMember {
  name: string
  role: string
  image: string
  initials: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ugo Pérez",
    role: "CEO & Cofounder",
    image: "/team/ugo.jpg",
    initials: "UP",
  },
  {
    name: "Nieves Torres",
    role: "CCO & Cofounder",
    image: "/team/nieves.jpg",
    initials: "NT",
  },
  {
    name: "Nicolás Carrasco",
    role: "CTO & Cofounder",
    image: "/team/nicolas.jpg",
    initials: "NC",
  },
  {
    name: "Josep Molinero",
    role: "CFO & Advisor",
    image: "/team/josep.jpg",
    initials: "JM",
  },
  {
    name: "Lucía Nogales",
    role: "Head of Administration",
    image: "/team/lucia.jpg",
    initials: "LN",
  },
  {
    name: "Alba Viches",
    role: "CHRO",
    image: "/team/alba.jpg",
    initials: "AV",
  },
  {
    name: "Roger Perramon",
    role: "AI & Data Lead Engineer",
    image: "/team/roger.jpg",
    initials: "RP",
  },
  {
    name: "Joan Navarro",
    role: "AI Developer",
    image: "/team/joan.jpg",
    initials: "JN",
  },
  {
    name: "Tomás Figueroa",
    role: "AI Developer",
    image: "/team/tomas.jpg",
    initials: "TF",
  },
  {
    name: "Carlos Forriol",
    role: "AI Engineer",
    image: "/team/carlos.jpg",
    initials: "CF",
  },
  {
    name: "Rafa Herrera",
    role: "AI Consultant",
    image: "/team/rafael.jpg",
    initials: "RH",
  },
  {
    name: "Ainhoa Borja",
    role: "Marketing",
    image: "/team/ainhoa.jpg",
    initials: "AB",
  },
  {
    name: "Monserrat Farrés",
    role: "AI Consultant",
    image: "/team/monserrat.jpg",
    initials: "MF",
  },
  {
    name: "Victor Martínez",
    role: "Formador",
    image: "/team/victor.jpg",
    initials: "VM",
  },
]

export interface CompanyValue {
  number: string
  title: string
  description: string
}

export const companyValues: CompanyValue[] = [
  {
    number: "I",
    title: "Personas primero",
    description: "Ponemos la tecnología al servicio de las personas, no al contrario",
  },
  {
    number: "II",
    title: "Aprendizaje constante",
    description: "La tecnología avanza rápido, nosotros más, TODOS nos formamos.",
  },
  {
    number: "III",
    title: "Impacto medible",
    description: "Nunca hacemos por hacer, todo está medido y orientado a resultados",
  },
  {
    number: "IV",
    title: "Comunicación honesta",
    description: "Comunicamos dentro y fuera de forma respetuosa, pero transparente.",
  },
  {
    number: "V",
    title: "Win-Win",
    description: "Solo nos va bien si a nuestros clientes también.",
  },
  {
    number: "VI",
    title: "Fail Fast",
    description: "Probamos rápido, aprendemos de los errores y pivotamos sin miedo",
  },
]

export interface CompanyMetric {
  value: string
  label: string
  description: string
}

export const companyMetrics: CompanyMetric[] = [
  {
    value: "+50",
    label: "Empresas",
    description: "Transformadas con IA",
  },
  {
    value: "+15",
    label: "Profesionales",
    description: "Expertos en IA",
  },
  {
    value: "9.3/10",
    label: "Valoración",
    description: "Satisfacción del equipo",
  },
]
