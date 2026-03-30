const es = {
  hero: {
    badge: "Completa en ~6 minutos",
    title: "Diagnóstico Inicial de IA",
    ctaButton: "Empezar diagnóstico",
    privacyNote: "Tus datos están protegidos y no serán compartidos con terceros.",
  },
  benefits: [
    {
      title: "Conoce tu nivel de madurez",
      description: "Descubre en qué punto está tu empresa respecto a la adopción de IA y compárate con tu sector.",
    },
    {
      title: "Identifica oportunidades",
      description: "Detecta las áreas de tu negocio donde la IA puede generar mayor impacto y ROI.",
    },
    {
      title: "Recibe recomendaciones",
      description: "Obtén un plan de acción con los próximos pasos concretos para tu transformación.",
    },
    {
      title: "Informe ejecutivo gratuito",
      description: "Descarga un documento profesional que puedes compartir con tu equipo directivo.",
    },
  ],
  faq: {
    title1: "Preguntas",
    titleHighlight: "Frecuentes",
    subtitle: "Todo lo que necesitas saber antes de realizar el diagnóstico de madurez en IA.",
    ctaButton: "Empezar diagnóstico",
    items: [
      {
        question: "¿Cuánto tiempo tarda el diagnóstico?",
        answer: "El cuestionario se completa en aproximadamente 5 minutos. Las preguntas son de selección múltiple y están diseñadas para ser respondidas de forma ágil sin necesidad de consultar datos.",
      },
      {
        question: "¿Qué información necesito para completarlo?",
        answer: "No necesitas preparar ningún documento. Las preguntas son sobre la situación general de tu empresa: estrategia, procesos, tecnología y cultura organizacional respecto a la IA.",
      },
      {
        question: "¿Mis datos están seguros?",
        answer: "Absolutamente. Tus respuestas se tratan de forma confidencial y solo se utilizan para generar tu diagnóstico personalizado. Cumplimos con RGPD y no compartimos información con terceros.",
      },
      {
        question: "¿El diagnóstico tiene algún coste?",
        answer: "No, el diagnóstico inicial es completamente gratuito. Es nuestra forma de ayudarte a dar el primer paso en tu transformación con IA.",
      },
      {
        question: "¿Qué incluye el informe que recibiré?",
        answer: "El informe incluye: tu puntuación de madurez en IA, análisis por cada área evaluada (estrategia, gobernanza, operativa, tecnología y cultura), y recomendaciones priorizadas con los siguientes pasos.",
      },
    ],
  },
  overlay: {
    closeAriaLabel: "Cerrar formulario",
    prevButton: "Anterior",
    pressEnter: "Pulsa",
    enterKey: "Enter",
    toContinue: "para continuar",
  },
  intro: {
    kicker: "Diagnóstico de Madurez en IA",
    title: "Este diagnóstico vale lo que tú le des.",
    description: "Detrás de cada pregunta hay años de experiencia ayudando a empresas a integrar la inteligencia artificial de forma real y rentable. No es un cuestionario genérico: cada respuesta alimenta un análisis hecho por nuestro equipo.",
    bullet1Title: "Sé honesto.",
    bullet1Text: "No hay respuestas correctas ni incorrectas. Cuanto más refleje tu situación real, más útil será el informe.",
    bullet2Title: "Tómate tu tiempo.",
    bullet2Text: "Son preguntas sobre la realidad de tu empresa. Merece la pena pensar cada respuesta.",
    bullet3Title: "El resultado es accionable.",
    bullet3Text: "Recibirás un informe con tu nivel de madurez, áreas de mejora prioritarias y pasos concretos.",
    startButton: "Empezar el diagnóstico",
  },
  nombre: {
    kicker: "Empecemos",
    title: "¿Cómo te llamas?",
    subtitle: "Lo usaremos para personalizar tu informe.",
    placeholder: "Ej: Steve Jobs",
    continueButton: "Continuar",
    error: "Tu nombre es obligatorio",
  },
  empresa: {
    kicker: "Sobre tu empresa",
    title: "¿Cómo se llama tu empresa?",
    subtitleTemplate: "El diagnóstico se personalizará para {name}.",
    subtitleFallback: "tu empresa",
    placeholder: "Ej: Apple Inc.",
    continueButton: "Continuar",
    error: "El nombre de empresa es obligatorio",
  },
  empleados: {
    kicker: "Tamaño",
    titleTemplate: "¿Cuántas personas trabajan en {company}?",
    titleFallback: "tu empresa",
    error: "Selecciona el número de empleados",
    options: [
      { value: "1-10", label: "1-10 empleados" },
      { value: "11-50", label: "11-50 empleados" },
      { value: "51-200", label: "51-200 empleados" },
      { value: "201-500", label: "201-500 empleados" },
      { value: "500+", label: "Más de 500 empleados" },
    ],
  },
  email: {
    kicker: "Casi listo",
    title: "¿Dónde enviamos tu informe?",
    subtitle: "Recibirás tu diagnóstico completo en un máximo de 30 minutos.",
    placeholder: "tu@empresa.com",
    sendButton: "Enviar diagnóstico",
    sending: "Enviando...",
    privacyNote: "Tus datos están protegidos y no serán compartidos con terceros.",
    errorRequired: "El email es obligatorio",
    errorInvalid: "Introduce un email válido",
  },
  question: {
    error: "Selecciona una opción para continuar",
  },
  success: {
    title: "Diagnóstico enviado",
    messageTemplate: "Gracias, <strong>{name}</strong>. Tu informe personalizado llegará a <strong>{email}</strong> en un máximo de 30 minutos.",
    ctaTitle: "¿Quieres que lo revisemos juntos?",
    ctaDescription: "Agenda una llamada gratuita con nuestro equipo y te ayudamos a interpretar tu diagnóstico y a trazar los próximos pasos.",
    ctaButton: "Agendar llamada gratuita",
    backButton: "Volver a la página",
  },
  formSteps: [
    {
      title: "Datos de tu empresa",
      subtitle: "Cuéntanos un poco sobre ti y tu organización",
    },
    {
      title: "Estrategia e Inversión",
      subtitle: "Evaluamos la integración de IA en tu planificación estratégica",
      questions: [
        {
          text: "¿En qué medida la IA está integrada en la planificación estratégica de la empresa?",
          options: [
            "Forma parte del plan estratégico con objetivos y métricas definidas",
            "Está incluida como línea estratégica, pero sin métricas claras",
            "Existen iniciativas aisladas sin alineación estratégica",
            "No forma parte de la planificación actual",
          ],
        },
        {
          text: "¿Existen objetivos medibles asociados a iniciativas de IA o automatización?",
          options: [
            "Sí, con métricas claras y seguimiento periódico",
            "Sí, definidos pero sin seguimiento sistemático",
            "Objetivos generales sin métricas concretas",
            "No existen objetivos definidos",
          ],
        },
        {
          text: "¿Existe un responsable claro de la estrategia digital/IA con presupuesto y capacidad de decisión?",
          options: [
            "Sí, con autoridad formal y presupuesto asignado",
            "Sí, pero con capacidad limitada",
            "Existe figura informal sin responsabilidad clara",
            "No hay responsable definido",
          ],
        },
        {
          text: "¿Cuál es el presupuesto anual destinado a digitalización/IA?",
          options: [
            "Más de 150.000 €",
            "Entre 50.000 € y 150.000 €",
            "Entre 10.000 € y 50.000 €",
            "Menos de 10.000 €",
          ],
        },
        {
          text: "¿El presupuesto de digitalización/IA es estructural o puntual?",
          options: [
            "Partida anual recurrente integrada en planificación",
            "Presupuesto anual revisable",
            "Presupuesto por proyectos puntuales",
            "No existe presupuesto específico",
          ],
        },
      ],
    },
    {
      title: "Gobernanza y Seguridad",
      subtitle: "Analizamos tus políticas de control y protección de datos",
      questions: [
        {
          text: "¿Existe una política formal sobre el uso de herramientas de IA?",
          options: [
            "Política formal documentada y comunicada",
            "Directrices internas no formalizadas",
            "Recomendaciones informales",
            "No existe ninguna política",
          ],
        },
        {
          text: "¿Está definido qué herramientas pueden utilizarse y en qué contextos?",
          options: [
            "Sí, con criterios claros y documentación interna",
            "Parcialmente definido",
            "Decisión descentralizada por equipos",
            "No está definido",
          ],
        },
        {
          text: "¿Se utilizan datos sensibles o estratégicos en herramientas externas de IA?",
          options: [
            "No se utilizan datos sensibles",
            "Se utilizan bajo criterios y control formal",
            "Se utilizan ocasionalmente sin protocolo claro",
            "Se desconoce qué datos se están utilizando",
          ],
        },
        {
          text: "¿Existe clasificación formal de datos (sensibles, estratégicos, internos)?",
          options: [
            "Sí, con niveles definidos y documentados",
            "Parcialmente estructurada",
            "Definición informal",
            "No existe clasificación",
          ],
        },
        {
          text: "¿Hay control sobre qué datos se introducen en herramientas externas?",
          options: [
            "Sí, con revisión y trazabilidad",
            "Control parcial",
            "Recomendaciones sin seguimiento",
            "Sin control definido",
          ],
        },
      ],
    },
    {
      title: "Uso de IA",
      subtitle: "Evaluamos cómo se utiliza la IA en tu organización",
      questions: [
        {
          text: "¿Los empleados utilizan herramientas públicas de IA por iniciativa propia?",
          options: [
            "No, el uso está centralizado y autorizado",
            "Uso limitado y supervisado",
            "Uso frecuente sin supervisión clara",
            "Uso extendido sin control",
          ],
        },
        {
          text: "¿Tiene la organización visibilidad sobre ese uso informal de IA?",
          options: [
            "Visibilidad total y seguimiento",
            "Visibilidad parcial",
            "Visibilidad muy limitada",
            "Ninguna visibilidad",
          ],
        },
        {
          text: "¿En cuántas áreas se utiliza actualmente IA o automatización de forma oficial?",
          options: [
            "En múltiples áreas clave integradas en procesos",
            "En varias áreas con impacto parcial",
            "En una o dos áreas de forma experimental",
            "No se utiliza actualmente",
          ],
        },
        {
          text: "¿Las iniciativas actuales de IA están integradas en procesos operativos?",
          options: [
            "Totalmente integradas y estandarizadas",
            "Integración parcial",
            "Pruebas piloto aisladas",
            "No existen iniciativas",
          ],
        },
        {
          text: "¿Se ha formado a empleados en el uso profesional de herramientas de IA?",
          options: [
            "Formación estructurada y recurrente",
            "Formación puntual en algunos equipos",
            "Formación informal o autodidacta",
            "No se ha realizado formación",
          ],
        },
      ],
    },
    {
      title: "Tecnología y Procesos",
      subtitle: "Analizamos tu infraestructura tecnológica y operativa",
      questions: [
        {
          text: "¿Qué nivel de integración existe entre ERP, CRM y sistemas operativos?",
          options: [
            "Sistemas plenamente integrados",
            "Integración parcial",
            "Sistemas en silos con intercambios manuales",
            "Sistemas completamente aislados",
          ],
        },
        {
          text: "¿Con qué frecuencia se realizan transcripciones manuales de datos?",
          options: [
            "Raramente o nunca",
            "Ocasionalmente",
            "Frecuentemente",
            "Es práctica habitual diaria",
          ],
        },
        {
          text: "¿Están documentados los procesos críticos de negocio?",
          options: [
            "Totalmente documentados y actualizados",
            "Parcialmente documentados",
            "Documentación informal",
            "No están documentados",
          ],
        },
        {
          text: "¿Existen métricas de rendimiento asociadas a esos procesos?",
          options: [
            "Métricas claras y seguimiento periódico",
            "Métricas parciales",
            "Indicadores no estructurados",
            "No existen métricas",
          ],
        },
        {
          text: "¿Tiene identificados los principales cuellos de botella operativos?",
          options: [
            "Claramente identificados y priorizados",
            "Identificados parcialmente",
            "Intuidos pero no analizados",
            "No se han analizado",
          ],
        },
      ],
    },
    {
      title: "Cultura y Contacto",
      subtitle: "Última sección: cultura organizativa y datos de contacto",
      questions: [
        {
          text: "¿Cómo reacciona el equipo ante nuevas herramientas digitales?",
          options: [
            "Proactivo y orientado a mejora continua",
            "Generalmente receptivo",
            "Resistencia frecuente",
            "Alta resistencia estructural",
          ],
        },
        {
          text: "¿Se ha ejecutado con éxito algún proyecto de transformación tecnológica en los últimos 3 años?",
          options: [
            "Sí, con impacto medible",
            "Sí, con resultados mixtos",
            "Intentos sin consolidación",
            "No",
          ],
        },
      ],
    },
  ],
}

const en: typeof es = {
  hero: {
    badge: "Complete in ~6 minutes",
    title: "Initial AI Diagnosis",
    ctaButton: "Start diagnosis",
    privacyNote: "Your data is protected and will not be shared with third parties.",
  },
  benefits: [
    {
      title: "Know your maturity level",
      description: "Discover where your company stands in AI adoption and compare with your industry.",
    },
    {
      title: "Identify opportunities",
      description: "Detect the areas of your business where AI can generate the greatest impact and ROI.",
    },
    {
      title: "Receive recommendations",
      description: "Get an action plan with concrete next steps for your transformation.",
    },
    {
      title: "Free executive report",
      description: "Download a professional document you can share with your leadership team.",
    },
  ],
  faq: {
    title1: "Frequently",
    titleHighlight: "Asked Questions",
    subtitle: "Everything you need to know before taking the AI maturity diagnosis.",
    ctaButton: "Start diagnosis",
    items: [
      {
        question: "How long does the diagnosis take?",
        answer: "The questionnaire takes approximately 5 minutes to complete. The questions are multiple choice and designed to be answered quickly without needing to look up data.",
      },
      {
        question: "What information do I need to complete it?",
        answer: "You don't need to prepare any documents. The questions are about your company's general situation: strategy, processes, technology, and organizational culture regarding AI.",
      },
      {
        question: "Is my data secure?",
        answer: "Absolutely. Your responses are treated confidentially and are only used to generate your personalized diagnosis. We comply with GDPR and do not share information with third parties.",
      },
      {
        question: "Does the diagnosis have any cost?",
        answer: "No, the initial diagnosis is completely free. It's our way of helping you take the first step in your AI transformation.",
      },
      {
        question: "What does the report I'll receive include?",
        answer: "The report includes: your AI maturity score, analysis for each evaluated area (strategy, governance, operations, technology, and culture), and prioritized recommendations with next steps.",
      },
    ],
  },
  overlay: {
    closeAriaLabel: "Close form",
    prevButton: "Previous",
    pressEnter: "Press",
    enterKey: "Enter",
    toContinue: "to continue",
  },
  intro: {
    kicker: "AI Maturity Diagnosis",
    title: "This diagnosis is worth what you put into it.",
    description: "Behind each question are years of experience helping companies integrate artificial intelligence in a real and profitable way. This is not a generic questionnaire: each answer feeds an analysis made by our team.",
    bullet1Title: "Be honest.",
    bullet1Text: "There are no right or wrong answers. The more it reflects your real situation, the more useful the report will be.",
    bullet2Title: "Take your time.",
    bullet2Text: "These are questions about the reality of your company. It's worth thinking through each answer.",
    bullet3Title: "The result is actionable.",
    bullet3Text: "You'll receive a report with your maturity level, priority improvement areas, and concrete steps.",
    startButton: "Start the diagnosis",
  },
  nombre: {
    kicker: "Let's begin",
    title: "What's your name?",
    subtitle: "We'll use it to personalize your report.",
    placeholder: "E.g.: Steve Jobs",
    continueButton: "Continue",
    error: "Your name is required",
  },
  empresa: {
    kicker: "About your company",
    title: "What's your company's name?",
    subtitleTemplate: "The diagnosis will be personalized for {name}.",
    subtitleFallback: "your company",
    placeholder: "E.g.: Apple Inc.",
    continueButton: "Continue",
    error: "Company name is required",
  },
  empleados: {
    kicker: "Size",
    titleTemplate: "How many people work at {company}?",
    titleFallback: "your company",
    error: "Select the number of employees",
    options: [
      { value: "1-10", label: "1-10 employees" },
      { value: "11-50", label: "11-50 employees" },
      { value: "51-200", label: "51-200 employees" },
      { value: "201-500", label: "201-500 employees" },
      { value: "500+", label: "More than 500 employees" },
    ],
  },
  email: {
    kicker: "Almost done",
    title: "Where should we send your report?",
    subtitle: "You'll receive your complete diagnosis within 30 minutes.",
    placeholder: "you@company.com",
    sendButton: "Send diagnosis",
    sending: "Sending...",
    privacyNote: "Your data is protected and will not be shared with third parties.",
    errorRequired: "Email is required",
    errorInvalid: "Enter a valid email",
  },
  question: {
    error: "Select an option to continue",
  },
  success: {
    title: "Diagnosis sent",
    messageTemplate: "Thank you, <strong>{name}</strong>. Your personalized report will arrive at <strong>{email}</strong> within 30 minutes.",
    ctaTitle: "Want us to review it together?",
    ctaDescription: "Schedule a free call with our team and we'll help you interpret your diagnosis and outline next steps.",
    ctaButton: "Schedule free call",
    backButton: "Back to page",
  },
  formSteps: [
    {
      title: "Your company data",
      subtitle: "Tell us a bit about yourself and your organization",
    },
    {
      title: "Strategy & Investment",
      subtitle: "We assess how AI is integrated into your strategic planning",
      questions: [
        {
          text: "To what extent is AI integrated into the company's strategic planning?",
          options: [
            "Part of the strategic plan with defined objectives and metrics",
            "Included as a strategic line, but without clear metrics",
            "Isolated initiatives without strategic alignment",
            "Not part of current planning",
          ],
        },
        {
          text: "Are there measurable objectives associated with AI or automation initiatives?",
          options: [
            "Yes, with clear metrics and periodic monitoring",
            "Yes, defined but without systematic monitoring",
            "General objectives without concrete metrics",
            "No defined objectives exist",
          ],
        },
        {
          text: "Is there a clear person responsible for the digital/AI strategy with budget and decision-making authority?",
          options: [
            "Yes, with formal authority and assigned budget",
            "Yes, but with limited capacity",
            "Informal figure without clear responsibility",
            "No responsible person defined",
          ],
        },
        {
          text: "What is the annual budget allocated to digitalization/AI?",
          options: [
            "More than \u20AC150,000",
            "Between \u20AC50,000 and \u20AC150,000",
            "Between \u20AC10,000 and \u20AC50,000",
            "Less than \u20AC10,000",
          ],
        },
        {
          text: "Is the digitalization/AI budget structural or one-off?",
          options: [
            "Recurring annual allocation integrated into planning",
            "Reviewable annual budget",
            "Budget for one-off projects",
            "No specific budget exists",
          ],
        },
      ],
    },
    {
      title: "Governance & Security",
      subtitle: "We analyze your data control and protection policies",
      questions: [
        {
          text: "Is there a formal policy on the use of AI tools?",
          options: [
            "Formal policy documented and communicated",
            "Internal guidelines not formalized",
            "Informal recommendations",
            "No policy exists",
          ],
        },
        {
          text: "Is it defined which tools can be used and in which contexts?",
          options: [
            "Yes, with clear criteria and internal documentation",
            "Partially defined",
            "Decentralized decision by teams",
            "Not defined",
          ],
        },
        {
          text: "Are sensitive or strategic data used in external AI tools?",
          options: [
            "No sensitive data is used",
            "Used under formal criteria and control",
            "Used occasionally without clear protocol",
            "It is unknown what data is being used",
          ],
        },
        {
          text: "Is there a formal data classification (sensitive, strategic, internal)?",
          options: [
            "Yes, with defined and documented levels",
            "Partially structured",
            "Informal definition",
            "No classification exists",
          ],
        },
        {
          text: "Is there control over what data is entered into external tools?",
          options: [
            "Yes, with review and traceability",
            "Partial control",
            "Recommendations without follow-up",
            "No defined control",
          ],
        },
      ],
    },
    {
      title: "AI Usage",
      subtitle: "We assess how AI is used in your organization",
      questions: [
        {
          text: "Do employees use public AI tools on their own initiative?",
          options: [
            "No, usage is centralized and authorized",
            "Limited and supervised usage",
            "Frequent usage without clear supervision",
            "Widespread usage without control",
          ],
        },
        {
          text: "Does the organization have visibility over this informal AI usage?",
          options: [
            "Full visibility and monitoring",
            "Partial visibility",
            "Very limited visibility",
            "No visibility",
          ],
        },
        {
          text: "In how many areas is AI or automation currently used officially?",
          options: [
            "In multiple key areas integrated into processes",
            "In several areas with partial impact",
            "In one or two areas experimentally",
            "Not currently used",
          ],
        },
        {
          text: "Are current AI initiatives integrated into operational processes?",
          options: [
            "Fully integrated and standardized",
            "Partial integration",
            "Isolated pilot tests",
            "No initiatives exist",
          ],
        },
        {
          text: "Have employees been trained in the professional use of AI tools?",
          options: [
            "Structured and recurring training",
            "One-time training in some teams",
            "Informal or self-taught training",
            "No training has been conducted",
          ],
        },
      ],
    },
    {
      title: "Technology & Processes",
      subtitle: "We analyze your technological and operational infrastructure",
      questions: [
        {
          text: "What level of integration exists between ERP, CRM, and operational systems?",
          options: [
            "Fully integrated systems",
            "Partial integration",
            "Siloed systems with manual exchanges",
            "Completely isolated systems",
          ],
        },
        {
          text: "How often are manual data transcriptions performed?",
          options: [
            "Rarely or never",
            "Occasionally",
            "Frequently",
            "It is a daily common practice",
          ],
        },
        {
          text: "Are critical business processes documented?",
          options: [
            "Fully documented and up to date",
            "Partially documented",
            "Informal documentation",
            "Not documented",
          ],
        },
        {
          text: "Are there performance metrics associated with those processes?",
          options: [
            "Clear metrics with periodic monitoring",
            "Partial metrics",
            "Unstructured indicators",
            "No metrics exist",
          ],
        },
        {
          text: "Have the main operational bottlenecks been identified?",
          options: [
            "Clearly identified and prioritized",
            "Partially identified",
            "Intuited but not analyzed",
            "They have not been analyzed",
          ],
        },
      ],
    },
    {
      title: "Culture & Contact",
      subtitle: "Last section: organizational culture and contact information",
      questions: [
        {
          text: "How does the team react to new digital tools?",
          options: [
            "Proactive and oriented towards continuous improvement",
            "Generally receptive",
            "Frequent resistance",
            "High structural resistance",
          ],
        },
        {
          text: "Has any technology transformation project been successfully executed in the last 3 years?",
          options: [
            "Yes, with measurable impact",
            "Yes, with mixed results",
            "Attempts without consolidation",
            "No",
          ],
        },
      ],
    },
  ],
}

const ca: typeof es = {
  hero: {
    badge: "Completa en ~6 minuts",
    title: "Diagnòstic inicial d'IA",
    ctaButton: "Començar el diagnòstic",
    privacyNote: "Les teves dades estan protegides i no es compartiran amb tercers.",
  },
  benefits: [
    {
      title: "Coneix el teu nivell de maduresa",
      description:
        "Descobreix en quin punt està la teva empresa respecte a l'adopció d'IA i compara't amb el teu sector.",
    },
    {
      title: "Identifica oportunitats",
      description:
        "Detecta les àrees del teu negoci on la IA pot generar més impacte i ROI.",
    },
    {
      title: "Rep recomanacions",
      description:
        "Obtén un pla d'acció amb els propers passos concrets per a la teva transformació.",
    },
    {
      title: "Informe executiu gratuït",
      description:
        "Descarrega un document professional que pots compartir amb el teu equip directiu.",
    },
  ],
  faq: {
    title1: "Preguntes",
    titleHighlight: "freqüents",
    subtitle:
      "Tot el que necessites saber abans de fer el diagnòstic de maduresa en IA.",
    ctaButton: "Començar el diagnòstic",
    items: [
      {
        question: "Quant de temps triga el diagnòstic?",
        answer:
          "El qüestionari es completa en aproximadament 5 minuts. Les preguntes són de selecció múltiple i estan pensades per respondre-les amb agilitat sense necessitat de consultar dades.",
      },
      {
        question: "Quina informació necessito per completar-lo?",
        answer:
          "No cal preparar cap document. Les preguntes tracten la situació general de la teva empresa: estratègia, processos, tecnologia i cultura organitzativa respecte a la IA.",
      },
      {
        question: "Les meves dades estan segures?",
        answer:
          "Absolutament. Les teves respostes es tracten de manera confidencial i només s'utilitzen per generar el teu diagnòstic personalitzat. Complim el RGPD i no compartim informació amb tercers.",
      },
      {
        question: "El diagnòstic té algun cost?",
        answer:
          "No, el diagnòstic inicial és completament gratuït. És la nostra manera d'ajudar-te a fer el primer pas en la teva transformació amb IA.",
      },
      {
        question: "Què inclou l'informe que rebré?",
        answer:
          "L'informe inclou: la teva puntuació de maduresa en IA, anàlisi per cada àrea avaluada (estratègia, governança, operativa, tecnologia i cultura), i recomanacions prioritzades amb els següents passos.",
      },
    ],
  },
  overlay: {
    closeAriaLabel: "Tancar el formulari",
    prevButton: "Anterior",
    pressEnter: "Prem",
    enterKey: "Retorn",
    toContinue: "per continuar",
  },
  intro: {
    kicker: "Diagnòstic de maduresa en IA",
    title: "Aquest diagnòstic val el que tu hi posis.",
    description:
      "Darrere de cada pregunta hi ha anys d'experiència ajudant empreses a integrar la intel·ligència artificial de manera real i rendible. No és un qüestionari genèric: cada resposta alimenta una anàlisi feta pel nostre equip.",
    bullet1Title: "Sigues honest.",
    bullet1Text:
      "No hi ha respostes correctes ni incorrectes. Com més reflecteixi la teva situació real, més útil serà l'informe.",
    bullet2Title: "Pren-te el teu temps.",
    bullet2Text:
      "Són preguntes sobre la realitat de la teva empresa. Val la pena pensar cada resposta.",
    bullet3Title: "El resultat és accionable.",
    bullet3Text:
      "Rebràs un informe amb el teu nivell de maduresa, àrees de millora prioritàries i passos concrets.",
    startButton: "Començar el diagnòstic",
  },
  nombre: {
    kicker: "Comencem",
    title: "Com et dius?",
    subtitle: "Ho farem servir per personalitzar el teu informe.",
    placeholder: "Ex.: Steve Jobs",
    continueButton: "Continuar",
    error: "El nom és obligatori",
  },
  empresa: {
    kicker: "Sobre la teva empresa",
    title: "Com es diu la teva empresa?",
    subtitleTemplate: "El diagnòstic es personalitzarà per a {name}.",
    subtitleFallback: "la teva empresa",
    placeholder: "Ex.: Apple Inc.",
    continueButton: "Continuar",
    error: "El nom de l'empresa és obligatori",
  },
  empleados: {
    kicker: "Mida",
    titleTemplate: "Quantes persones treballen a {company}?",
    titleFallback: "la teva empresa",
    error: "Selecciona el nombre d'empleats",
    options: [
      { value: "1-10", label: "1-10 empleats" },
      { value: "11-50", label: "11-50 empleats" },
      { value: "51-200", label: "51-200 empleats" },
      { value: "201-500", label: "201-500 empleats" },
      { value: "500+", label: "Més de 500 empleats" },
    ],
  },
  email: {
    kicker: "Gairebé llest",
    title: "On t'enviem l'informe?",
    subtitle: "Rebràs el teu diagnòstic complet en un màxim de 30 minuts.",
    placeholder: "tu@empresa.com",
    sendButton: "Enviar diagnòstic",
    sending: "Enviant...",
    privacyNote: "Les teves dades estan protegides i no es compartiran amb tercers.",
    errorRequired: "El correu electrònic és obligatori",
    errorInvalid: "Introdueix un correu electrònic vàlid",
  },
  question: {
    error: "Selecciona una opció per continuar",
  },
  success: {
    title: "Diagnòstic enviat",
    messageTemplate:
      "Gràcies, <strong>{name}</strong>. El teu informe personalitzat arribarà a <strong>{email}</strong> en un màxim de 30 minuts.",
    ctaTitle: "Vols que el revisem junts?",
    ctaDescription:
      "Agenda una trucada gratuïta amb el nostre equip i t'ajudem a interpretar el teu diagnòstic i a traçar els propers passos.",
    ctaButton: "Agendar trucada gratuïta",
    backButton: "Tornar a la pàgina",
  },
  formSteps: [
    {
      title: "Dades de la teva empresa",
      subtitle: "Explica'ns una mica sobre tu i la teva organització",
    },
    {
      title: "Estratègia i inversió",
      subtitle: "Avaluem la integració de la IA en la teva planificació estratègica",
      questions: [
        {
          text: "En quina mesura la IA està integrada en la planificació estratègica de l'empresa?",
          options: [
            "Forma part del pla estratègic amb objectius i mètriques definides",
            "Està inclosa com a línia estratègica, però sense mètriques clares",
            "Existeixen iniciatives aïllades sense alineació estratègica",
            "No forma part de la planificació actual",
          ],
        },
        {
          text: "Existeixen objectius mesurables associats a iniciatives d'IA o automatització?",
          options: [
            "Sí, amb mètriques clares i seguiment periòdic",
            "Sí, definits però sense seguiment sistemàtic",
            "Objectius generals sense mètriques concretes",
            "No existeixen objectius definits",
          ],
        },
        {
          text: "Hi ha una persona clara responsable de l'estratègia digital/IA amb pressupost i capacitat de decisió?",
          options: [
            "Sí, amb autoritat formal i pressupost assignat",
            "Sí, però amb capacitat limitada",
            "Existeix una figura informal sense responsabilitat clara",
            "No hi ha responsable definit",
          ],
        },
        {
          text: "Quin és el pressupost anual destinat a digitalització/IA?",
          options: [
            "Més de 150.000 €",
            "Entre 50.000 € i 150.000 €",
            "Entre 10.000 € i 50.000 €",
            "Menys de 10.000 €",
          ],
        },
        {
          text: "El pressupost de digitalització/IA és estructural o puntual?",
          options: [
            "Partida anual recurrent integrada en la planificació",
            "Pressupost anual revisable",
            "Pressupost per projectes puntuals",
            "No existeix pressupost específic",
          ],
        },
      ],
    },
    {
      title: "Governança i seguretat",
      subtitle: "Analitzem les teves polítiques de control i protecció de dades",
      questions: [
        {
          text: "Existeix una política formal sobre l'ús d'eines d'IA?",
          options: [
            "Política formal documentada i comunicada",
            "Directrius internes no formalitzades",
            "Recomanacions informals",
            "No existeix cap política",
          ],
        },
        {
          text: "Està definit quines eines es poden utilitzar i en quins contextos?",
          options: [
            "Sí, amb criteris clars i documentació interna",
            "Parcialment definit",
            "Decentralitzada per equips",
            "No està definit",
          ],
        },
        {
          text: "S'utilitzen dades sensibles o estratègiques en eines externes d'IA?",
          options: [
            "No s'utilitzen dades sensibles",
            "S'utilitzen sota criteris i control formal",
            "S'utilitzen ocasionalment sense protocol clar",
            "Es desconeix quines dades s'estan utilitzant",
          ],
        },
        {
          text: "Existeix classificació formal de dades (sensibles, estratègiques, internes)?",
          options: [
            "Sí, amb nivells definits i documentats",
            "Parcialment estructurada",
            "Definició informal",
            "No existeix classificació",
          ],
        },
        {
          text: "Hi ha control sobre quines dades s'introdueixen en eines externes?",
          options: [
            "Sí, amb revisió i traçabilitat",
            "Control parcial",
            "Recomanacions sense seguiment",
            "Sense control definit",
          ],
        },
      ],
    },
    {
      title: "Ús d'IA",
      subtitle: "Avaluem com s'utilitza la IA a la teva organització",
      questions: [
        {
          text: "Els empleats utilitzen eines públiques d'IA per iniciativa pròpia?",
          options: [
            "No, l'ús està centralitzat i autoritzat",
            "Ús limitat i supervisat",
            "Ús freqüent sense supervisió clara",
            "Ús estès sense control",
          ],
        },
        {
          text: "L'organització té visibilitat sobre aquest ús informal d'IA?",
          options: [
            "Visibilitat total i seguiment",
            "Visibilitat parcial",
            "Visibilitat molt limitada",
            "Cap visibilitat",
          ],
        },
        {
          text: "En quantes àrees s'utilitza actualment IA o automatització de manera oficial?",
          options: [
            "En múltiples àrees clau integrades en processos",
            "En diverses àrees amb impacte parcial",
            "En una o dues àrees de manera experimental",
            "No s'utilitza actualment",
          ],
        },
        {
          text: "Les iniciatives actuals d'IA estan integrades en processos operatius?",
          options: [
            "Totalment integrades i estandarditzades",
            "Integració parcial",
            "Proves pilot aïllades",
            "No existeixen iniciatives",
          ],
        },
        {
          text: "S'ha format el personal en l'ús professional d'eines d'IA?",
          options: [
            "Formació estructurada i recurrent",
            "Formació puntual en alguns equips",
            "Formació informal o autodidacta",
            "No s'ha realitzat formació",
          ],
        },
      ],
    },
    {
      title: "Tecnologia i processos",
      subtitle: "Analitzem la teva infraestructura tecnològica i operativa",
      questions: [
        {
          text: "Quin nivell d'integració hi ha entre ERP, CRM i sistemes operatius?",
          options: [
            "Sistemes plenament integrats",
            "Integració parcial",
            "Sistemes en silos amb intercanvis manuals",
            "Sistemes completament aïllats",
          ],
        },
        {
          text: "Amb quina freqüència es fan transcripcions manuals de dades?",
          options: [
            "Rarament o mai",
            "Ocasionalment",
            "Freqüentment",
            "És pràctica habitual diària",
          ],
        },
        {
          text: "Estan documentats els processos crítics de negoci?",
          options: [
            "Totalment documentats i actualitzats",
            "Parcialment documentats",
            "Documentació informal",
            "No estan documentats",
          ],
        },
        {
          text: "Existeixen mètriques de rendiment associades a aquests processos?",
          options: [
            "Mètriques clares i seguiment periòdic",
            "Mètriques parcials",
            "Indicadors no estructurats",
            "No existeixen mètriques",
          ],
        },
        {
          text: "Tens identificats els principals colls d'ampolla operatius?",
          options: [
            "Clarament identificats i prioritzats",
            "Identificats parcialment",
            "Intuïts però no analitzats",
            "No s'han analitzat",
          ],
        },
      ],
    },
    {
      title: "Cultura i contacte",
      subtitle: "Última secció: cultura organitzativa i dades de contacte",
      questions: [
        {
          text: "Com reacciona l'equip davant noves eines digitals?",
          options: [
            "Proactiu i orientat a la millora contínua",
            "Generalment receptiu",
            "Resistència freqüent",
            "Alta resistència estructural",
          ],
        },
        {
          text: "S'ha executat amb èxit algun projecte de transformació tecnològica en els últims 3 anys?",
          options: [
            "Sí, amb impacte mesurable",
            "Sí, amb resultats mixtos",
            "Intents sense consolidació",
            "No",
          ],
        },
      ],
    },
  ],
}

export const diagnosticoIaTranslations = { es, en, ca }
