const es = {
  hero: {
    titlePrefix: "¿Qué hace la IA en ",
    titleHighlight: "tu sector",
    titleSuffix: "?",
    subtitle:
      "Selecciona tu industria y descubre cómo la inteligencia artificial puede transformar tu negocio con casos reales.",
    scrollIndicator: "Selecciona una industria",
  },
  industries: [
    "Distribución",
    "Restauración",
    "Construcción",
    "Industrial",
    "Salud",
    "Retail",
    "Finanzas",
    "Tecnología",
    "Educación",
    "Energía",
  ],
  industryNames: {
    distribucion: "Distribución",
    restauracion: "Restauración",
    construccion: "Construcción",
    industrial: "Industrial",
    salud: "Salud",
    retail: "Retail",
    finanzas: "Finanzas",
    tecnologia: "Tecnología",
    educacion: "Educación",
    energia: "Energía",
  } as Record<string, string>,
  common: {
    useCasesTitlePrefix: "Aplicaciones de IA en ",
    useCasesSubtitle: "Descubre las soluciones más impactantes que estamos implementando en el sector",
    successStoryTitlePrefix: "Esta podría ser ",
    successStoryTitleHighlight: "tu empresa",
    successStorySubtitle: "Descubre cómo empresas de tu sector están mejorando sus resultados con IA",
    challenge: "El Desafío",
    solution: "La Solución",
    results: "Los Resultados",
    industryLabel: "Industria:",
    yearLabel: "Año:",
    serviceLabel: "Servicio:",
    viewCase: "Ver más sobre el caso",
    faqTitlePrefix: "Preguntas ",
    faqTitleHighlight: "Frecuentes",
    pioneerTitlePrefix: "¿Quieres ser el ",
    pioneerTitleHighlight: "pionero",
    pioneerTitleSuffix: "?",
    pioneerButton: "Hablemos de tu proyecto",
    ctaButton: "Quiero empezar",
    caseStudyAlt: "caso de estudio",
    logoAlt: "logo",
  },
  distribucion: {
    badge: "Distribución & Logística",
    imageAlt: "Optimización de procesos en distribución",
    headline: "Optimiza tus procesos y decisiones",
    description:
      "La inteligencia artificial está revolucionando la distribución y logística. Desde la predicción de demanda hasta la automatización de almacenes, descubre cómo las empresas del sector están reduciendo costes y mejorando su eficiencia operativa.",
    beneficios: [
      {
        title: "Reducción de costes",
        description: "Hasta un 30% menos en costes operativos gracias a la optimización inteligente de recursos",
      },
      {
        title: "Reducción de errores e incidencias",
        description: "Minimiza errores humanos y detecta anomalías antes de que se conviertan en problemas",
      },
      {
        title: "Mejores decisiones",
        description:
          "Datos en tiempo real y análisis predictivo para tomar decisiones estratégicas con confianza",
      },
    ],
    useCasesHighlight: "Distribución",
    casosDeUso: [
      {
        title: "Predicción de demanda",
        description: "Modelos que anticipan las necesidades de stock por producto, temporada y ubicación",
      },
      {
        title: "Optimización de rutas",
        description: "Algoritmos que calculan las rutas más eficientes considerando tráfico y restricciones",
      },
      {
        title: "Comparaciones automáticas",
        description: "Cotejo inteligente de documentos, precios y proveedores para optimizar compras",
      },
      {
        title: "Detección de anomalías",
        description: "IA que identifica pedidos inusuales, fraudes o errores antes de que ocurran",
      },
      {
        title: "Validación documental",
        description: "Cotejo automático de facturas, albaranes y pedidos con OCR avanzado",
      },
      {
        title: "Atención automatizada",
        description: "Chatbots para gestionar consultas de clientes y proveedores 24/7",
      },
    ],
    ctaTitle: "¿Listo para transformar tu ",
    ctaHighlight: "distribución",
    ctaTitleSuffix: "?",
    ctaSubtitle: "Agenda una consulta gratuita y descubre cómo la IA puede optimizar tus operaciones logísticas",
    faqSubtitle: "Todo lo que necesitas saber sobre IA en distribución",
    pioneerText:
      "Todavía no tenemos un caso de éxito publicado en distribución. Sé el primero y obtén condiciones especiales.",
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
  },
  construccion: {
    badge: "Construcción & Obra",
    imageAlt: "Digitalización y optimización en construcción",
    headline: "Digitaliza y optimiza tu gestión de obra",
    description:
      "La inteligencia artificial está transformando el sector de la construcción. Desde la validación automática de documentos hasta la predicción de desviaciones en proyectos, descubre cómo las empresas del sector están ganando eficiencia y control.",
    beneficios: [
      {
        title: "Reducción de costes",
        description:
          "Hasta un 25% menos en costes administrativos gracias a la automatización documental",
      },
      {
        title: "Reducción de errores e incidencias",
        description:
          "Minimiza discrepancias en facturas, albaranes y pedidos con validación automática",
      },
      {
        title: "Mejores decisiones",
        description:
          "Visibilidad completa de proyectos y proveedores para decisiones más informadas",
      },
    ],
    useCasesHighlight: "Construcción",
    casosDeUso: [
      {
        title: "Validación de facturas",
        description: "Cotejo automático de facturas con pedidos y albaranes mediante OCR e IA",
      },
      {
        title: "Gestión documental",
        description: "Clasificación y extracción automática de datos de documentos de obra",
      },
      {
        title: "Control de costes",
        description: "Seguimiento en tiempo real de desviaciones presupuestarias por proyecto",
      },
      {
        title: "Gestión de proveedores",
        description: "Evaluación automática de proveedores basada en histórico y rendimiento",
      },
      {
        title: "Planificación predictiva",
        description: "Modelos que anticipan retrasos y cuellos de botella en la ejecución",
      },
      {
        title: "Cumplimiento normativo",
        description: "Verificación automática de documentación legal y certificaciones",
      },
    ],
    ctaTitle: "¿Listo para optimizar tu ",
    ctaHighlight: "construcción",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Agenda una consulta gratuita y descubre cómo la IA puede mejorar la eficiencia de tus obras.",
    faqSubtitle: "Todo lo que necesitas saber sobre IA en construcción",
    pioneerText:
      "Todavía no tenemos un caso de éxito publicado en construcción. Sé el primero y obtén condiciones especiales.",
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
  },
  restauracion: {
    badge: "Restauración & Hostelería",
    imageAlt: "Mejora de experiencia y optimización en restauración",
    headline: "Mejora la experiencia y optimiza operaciones",
    description:
      "La inteligencia artificial está transformando la restauración y hostelería. Desde el análisis de reseñas hasta la predicción de demanda, descubre cómo los grupos de restauración están mejorando la experiencia del cliente y reduciendo costes operativos.",
    beneficios: [
      {
        title: "Mejor experiencia cliente",
        description:
          "Detecta y resuelve problemas antes de que impacten en la satisfacción del cliente",
      },
      {
        title: "Reducción de costes",
        description:
          "Optimiza compras, reduce desperdicio alimentario y mejora la eficiencia operativa",
      },
      {
        title: "Decisiones basadas en datos",
        description:
          "Convierte reseñas y datos operativos en insights accionables para tu negocio",
      },
    ],
    useCasesHighlight: "Restauración",
    casosDeUso: [
      {
        title: "Análisis de reseñas con IA",
        description:
          "Clasificación automática de opiniones por temática y sentimiento para detectar problemas",
      },
      {
        title: "Predicción de demanda",
        description:
          "Modelos que anticipan la afluencia y consumo para optimizar personal y compras",
      },
      {
        title: "Gestión inteligente de inventario",
        description: "Control automático de stock con alertas de reposición y caducidad",
      },
      {
        title: "Atención al cliente 24/7",
        description: "Chatbots para reservas, consultas y gestión de incidencias sin esperas",
      },
      {
        title: "Optimización de menús",
        description:
          "Análisis de rentabilidad y preferencias para diseñar cartas más efectivas",
      },
      {
        title: "Planificación de turnos",
        description: "Asignación inteligente de personal basada en previsión de demanda",
      },
    ],
    ctaTitle: "¿Listo para optimizar tu ",
    ctaHighlight: "restauración",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Agenda una consulta gratuita y descubre cómo la IA puede mejorar la experiencia y la eficiencia de tu negocio.",
    faqSubtitle: "Todo lo que necesitas saber sobre IA en restauración",
    pioneerText:
      "Todavía no tenemos un caso de éxito publicado en restauración. Sé el primero y obtén condiciones especiales.",
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
  },
  industrial: {
    badge: "Industrial & Fabricación",
    imageAlt: "Impulso de producción industrial con IA",
    headline: "Impulsa tu producción con IA",
    description:
      "La inteligencia artificial está transformando la industria manufacturera. Desde la optimización de procesos hasta el mantenimiento predictivo, descubre cómo las empresas industriales están aumentando su productividad y reduciendo costes operativos.",
    beneficios: [
      {
        title: "Reducción de costes",
        description:
          "Hasta un 35% menos en costes operativos gracias a la optimización de procesos y recursos",
      },
      {
        title: "Reducción de errores e incidencias",
        description:
          "Minimiza defectos de producción y detecta fallos antes de que afecten a la calidad",
      },
      {
        title: "Mejores decisiones",
        description:
          "Datos en tiempo real de producción para tomar decisiones estratégicas con confianza",
      },
    ],
    useCasesHighlight: "Industria",
    casosDeUso: [
      {
        title: "Mantenimiento predictivo",
        description:
          "Modelos que anticipan fallos en maquinaria antes de que ocurran paradas no planificadas",
      },
      {
        title: "Optimización de producción",
        description:
          "Algoritmos que maximizan el rendimiento de líneas de producción y recursos",
      },
      {
        title: "Control de calidad automático",
        description:
          "Visión artificial para detectar defectos en productos de forma instantánea",
      },
      {
        title: "Gestión de conocimiento",
        description:
          "Asistentes RAG que centralizan y facilitan el acceso al conocimiento técnico interno",
      },
      {
        title: "Generación de ofertas",
        description:
          "Automatización de cotizaciones y propuestas basadas en históricos y reglas de negocio",
      },
      {
        title: "Cotejo de pedidos",
        description:
          "Validación automática entre pedidos, ofertas y especificaciones técnicas",
      },
    ],
    ctaTitle: "¿Listo para impulsar tu ",
    ctaHighlight: "producción",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Agenda una consulta gratuita y descubre cómo la IA puede optimizar tus procesos industriales.",
    faqSubtitle: "Todo lo que necesitas saber sobre IA en industria",
    pioneerText:
      "Todavía no tenemos un caso de éxito publicado en industria. Sé el primero y obtén condiciones especiales.",
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
  },
  salud: {
    badge: "Salud & Sanidad",
    imageAlt: "Transformación de la atención sanitaria con IA",
    headline: "Transforma la atención sanitaria",
    description:
      "La inteligencia artificial está revolucionando el sector salud, desde el diagnóstico hasta la gestión hospitalaria. Descubre cómo podemos ayudarte a mejorar la atención al paciente y optimizar tus operaciones.",
    beneficios: [
      {
        title: "Reducción de costes",
        description:
          "Hasta un 30% menos en costes operativos gracias a la automatización de procesos administrativos",
      },
      {
        title: "Reducción de errores",
        description:
          "Minimiza errores en diagnósticos, prescripciones y gestión de historiales clínicos",
      },
      {
        title: "Mejores decisiones",
        description:
          "Datos clínicos en tiempo real para tomar decisiones médicas con mayor precisión y rapidez",
      },
    ],
    useCasesHighlight: "Salud",
    casosDeUso: [
      {
        title: "Asistentes de diagnóstico",
        description:
          "IA que ayuda a los profesionales a interpretar síntomas y sugerir diagnósticos diferenciales",
      },
      {
        title: "Automatización administrativa",
        description:
          "Gestión automática de citas, historiales, informes y documentación clínica",
      },
      {
        title: "Chatbots de triaje",
        description:
          "Atención 24/7 para orientar a pacientes y derivar según urgencia y especialidad",
      },
      {
        title: "Análisis de historiales",
        description:
          "Extracción inteligente de información clave de historiales clínicos extensos",
      },
      {
        title: "Predicción de demanda",
        description:
          "Modelos que anticipan picos de demanda para optimizar recursos y personal",
      },
      {
        title: "Coaching y bienestar",
        description:
          "Aplicaciones de IA conversacional para apoyo emocional y seguimiento de hábitos",
      },
    ],
    ctaTitle: "¿Listo para transformar tu ",
    ctaHighlight: "sanidad",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Agenda una consulta gratuita y descubre cómo la IA puede mejorar la atención al paciente y optimizar tus operaciones.",
    faqSubtitle: "Todo lo que necesitas saber sobre IA en salud",
    pioneerText:
      "Todavía no tenemos un caso de éxito publicado en salud. Sé el primero y obtén condiciones especiales.",
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
  },
  retail: {
    badge: "Retail & Comercio",
    imageAlt: "Transformación del comercio con IA",
    headline: "Transforma tu comercio con IA",
    description:
      "La inteligencia artificial está revolucionando el retail. Desde la personalización de la experiencia del cliente hasta la optimización del inventario, descubre cómo las empresas del sector están aumentando ventas y fidelizando clientes.",
    beneficios: [
      {
        title: "Reducción de costes",
        description:
          "Hasta un 25% menos en costes operativos gracias a la optimización de inventario y procesos",
      },
      {
        title: "Reducción de errores e incidencias",
        description:
          "Minimiza roturas de stock, errores en pedidos y problemas de atención al cliente",
      },
      {
        title: "Mejores decisiones",
        description:
          "Datos de ventas y comportamiento del cliente en tiempo real para decisiones estratégicas",
      },
    ],
    useCasesHighlight: "Retail",
    casosDeUso: [
      {
        title: "Personalización de experiencia",
        description:
          "Recomendaciones de productos basadas en comportamiento y preferencias del cliente",
      },
      {
        title: "Predicción de demanda",
        description:
          "Modelos que anticipan tendencias de ventas para optimizar stock y compras",
      },
      {
        title: "Atención al cliente 24/7",
        description:
          "Chatbots inteligentes que resuelven dudas, gestionan pedidos y fidelizan clientes",
      },
      {
        title: "Análisis de comportamiento",
        description:
          "Insights sobre patrones de compra para optimizar layout, promociones y pricing",
      },
      {
        title: "Gestión automatizada de inventario",
        description:
          "Control inteligente de stock con alertas predictivas y reposición automática",
      },
      {
        title: "Optimización de precios",
        description:
          "Pricing dinámico basado en demanda, competencia y márgenes objetivos",
      },
    ],
    ctaTitle: "¿Listo para transformar tu ",
    ctaHighlight: "retail",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Agenda una consulta gratuita y descubre cómo la IA puede aumentar tus ventas y fidelizar a tus clientes.",
    faqSubtitle: "Todo lo que necesitas saber sobre IA en retail",
    pioneerText:
      "Todavía no tenemos un caso de éxito publicado en retail. Sé el primero y obtén condiciones especiales.",
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
  },
  finanzas: {
    badge: "Finanzas & Seguros",
    imageAlt: "Optimización de procesos financieros con IA",
    headline: "Optimiza tus procesos financieros",
    description:
      "La inteligencia artificial está transformando el sector financiero. Desde la detección de fraude hasta la automatización de análisis, descubre cómo las empresas financieras están mejorando la eficiencia y reduciendo riesgos.",
    beneficios: [
      {
        title: "Reducción de costes",
        description:
          "Hasta un 40% menos en costes operativos gracias a la automatización de procesos financieros",
      },
      {
        title: "Reducción de errores e incidencias",
        description:
          "Minimiza errores en transacciones, informes y cumplimiento normativo",
      },
      {
        title: "Mejores decisiones",
        description:
          "Análisis predictivo y datos en tiempo real para decisiones de inversión y riesgo más precisas",
      },
    ],
    useCasesHighlight: "Finanzas",
    casosDeUso: [
      {
        title: "Detección de fraude",
        description:
          "Modelos que identifican patrones sospechosos y transacciones fraudulentas en tiempo real",
      },
      {
        title: "Análisis predictivo de riesgos",
        description:
          "Evaluación automática de riesgos crediticios y de inversión con mayor precisión",
      },
      {
        title: "Automatización de informes",
        description:
          "Generación automática de informes financieros, regulatorios y de cumplimiento",
      },
      {
        title: "Atención al cliente 24/7",
        description:
          "Chatbots especializados para consultas de cuentas, productos y operaciones bancarias",
      },
      {
        title: "Análisis de documentación",
        description:
          "Extracción inteligente de datos de contratos, pólizas y documentación legal",
      },
      {
        title: "Conciliación automática",
        description:
          "Cotejo y validación automática de transacciones, facturas y movimientos bancarios",
      },
    ],
    ctaTitle: "¿Listo para optimizar tus ",
    ctaHighlight: "finanzas",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Agenda una consulta gratuita y descubre cómo la IA puede mejorar la eficiencia y reducir riesgos en tu negocio financiero.",
    faqSubtitle: "Todo lo que necesitas saber sobre IA en finanzas",
    pioneerText:
      "Todavía no tenemos un caso de éxito publicado en finanzas. Sé el primero y obtén condiciones especiales.",
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
  },
  tecnologia: {
    badge: "Tecnología & Software",
    imageAlt: "Aceleración de desarrollo tecnológico con IA",
    headline: "Acelera tu desarrollo con IA",
    description:
      "La inteligencia artificial está transformando el sector tecnológico. Desde la automatización de desarrollo hasta la optimización de infraestructura, descubre cómo las empresas tech están mejorando su productividad y calidad del software.",
    beneficios: [
      {
        title: "Reducción de costes",
        description:
          "Hasta un 40% menos en costes de desarrollo gracias a la automatización y optimización",
      },
      {
        title: "Reducción de errores e incidencias",
        description:
          "Minimiza bugs, vulnerabilidades y problemas de rendimiento antes de producción",
      },
      {
        title: "Mejores decisiones",
        description:
          "Análisis de código y métricas en tiempo real para tomar decisiones técnicas con confianza",
      },
    ],
    useCasesHighlight: "Tecnología",
    casosDeUso: [
      {
        title: "Asistentes de código",
        description:
          "Copilots de IA que aceleran el desarrollo, sugieren soluciones y documentan código automáticamente",
      },
      {
        title: "Detección de bugs",
        description:
          "Análisis automático de código para identificar errores, vulnerabilidades y code smells",
      },
      {
        title: "Generación de tests",
        description:
          "Creación automática de tests unitarios y de integración basados en el código existente",
      },
      {
        title: "Documentación automática",
        description:
          "Generación de documentación técnica, APIs y comentarios de código con IA",
      },
      {
        title: "Monitorización predictiva",
        description:
          "Predicción de fallos en infraestructura y aplicaciones antes de que ocurran",
      },
      {
        title: "Code reviews automáticos",
        description:
          "Revisión inteligente de pull requests con sugerencias de mejora y detección de problemas",
      },
    ],
    ctaTitle: "¿Listo para acelerar tu ",
    ctaHighlight: "desarrollo",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Agenda una consulta gratuita y descubre cómo la IA puede potenciar tu equipo de desarrollo y calidad de software.",
    faqSubtitle: "Todo lo que necesitas saber sobre IA en tecnología",
    pioneerText:
      "Todavía no tenemos un caso de éxito publicado en tecnología. Sé el primero y obtén condiciones especiales.",
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
  },
  educacion: {
    badge: "Educación & Formación",
    imageAlt: "Revolución del aprendizaje con IA",
    headline: "Revoluciona el aprendizaje con IA",
    description:
      "La inteligencia artificial está transformando la educación. Desde la personalización del aprendizaje hasta la automatización de tareas administrativas, descubre cómo las instituciones educativas están mejorando los resultados y la experiencia de estudiantes.",
    beneficios: [
      {
        title: "Reducción de costes",
        description:
          "Hasta un 30% menos en costes operativos gracias a la automatización de procesos administrativos",
      },
      {
        title: "Reducción de errores e incidencias",
        description:
          "Minimiza errores en evaluaciones, gestión académica y seguimiento de estudiantes",
      },
      {
        title: "Mejores decisiones",
        description:
          "Datos de rendimiento y progreso en tiempo real para decisiones pedagógicas más efectivas",
      },
    ],
    useCasesHighlight: "Educación",
    casosDeUso: [
      {
        title: "Personalización del aprendizaje",
        description:
          "Sistemas que adaptan contenidos y ritmo según el nivel y estilo de cada estudiante",
      },
      {
        title: "Tutores virtuales 24/7",
        description:
          "Asistentes de IA que resuelven dudas, explican conceptos y guían el aprendizaje",
      },
      {
        title: "Corrección automática",
        description:
          "Evaluación inteligente de exámenes, trabajos y ejercicios con feedback personalizado",
      },
      {
        title: "Análisis de rendimiento",
        description:
          "Detección temprana de dificultades y predicción de riesgo de abandono escolar",
      },
      {
        title: "Gestión de contenidos",
        description:
          "Organización inteligente de materiales didácticos y generación de recursos personalizados",
      },
      {
        title: "Traducción y accesibilidad",
        description:
          "Traducción automática de materiales y adaptación para estudiantes con necesidades especiales",
      },
    ],
    ctaTitle: "¿Listo para revolucionar tu ",
    ctaHighlight: "educación",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Agenda una consulta gratuita y descubre cómo la IA puede mejorar la experiencia educativa y optimizar la gestión de tu institución.",
    faqSubtitle: "Todo lo que necesitas saber sobre IA en educación",
    pioneerText:
      "Todavía no tenemos un caso de éxito publicado en educación. Sé el primero y obtén condiciones especiales.",
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
  },
  energia: {
    badge: "Energía & Utilities",
    imageAlt: "Optimización de la gestión energética con IA",
    headline: "Optimiza tu gestión energética",
    description:
      "La inteligencia artificial está transformando el sector energético. Desde la predicción de consumo hasta la optimización de redes, descubre cómo las empresas del sector están reduciendo costes y mejorando la eficiencia operativa.",
    beneficios: [
      {
        title: "Reducción de costes",
        description:
          "Hasta un 30% menos en costes operativos gracias a la optimización del consumo y producción",
      },
      {
        title: "Reducción de errores e incidencias",
        description:
          "Minimiza fallos en la red, detecta anomalías y previene interrupciones del servicio",
      },
      {
        title: "Mejores decisiones",
        description:
          "Datos en tiempo real de producción y consumo para decisiones estratégicas con confianza",
      },
    ],
    useCasesHighlight: "Energía",
    casosDeUso: [
      {
        title: "Predicción de consumo",
        description:
          "Modelos que anticipan la demanda energética por zona, horario y condiciones climáticas",
      },
      {
        title: "Optimización de redes",
        description:
          "Algoritmos que equilibran la distribución de energía y reducen pérdidas en la red",
      },
      {
        title: "Mantenimiento predictivo",
        description:
          "Detección temprana de fallos en infraestructura para evitar interrupciones del servicio",
      },
      {
        title: "Gestión de renovables",
        description:
          "Optimización de producción solar y eólica basada en predicciones meteorológicas",
      },
      {
        title: "Facturación inteligente",
        description:
          "Automatización de lecturas, cálculos y emisión de facturas con detección de anomalías",
      },
      {
        title: "Atención al cliente 24/7",
        description:
          "Chatbots para gestionar consultas sobre consumo, tarifas y averías en tiempo real",
      },
    ],
    ctaTitle: "¿Listo para optimizar tu ",
    ctaHighlight: "gestión energética",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Agenda una consulta gratuita y descubre cómo la IA puede mejorar la eficiencia de tu red y reducir costes.",
    faqSubtitle: "Todo lo que necesitas saber sobre IA en energía",
    pioneerText:
      "Todavía no tenemos un caso de éxito publicado en energía. Sé el primero y obtén condiciones especiales.",
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
  },
}

const en: typeof es = {
  hero: {
    titlePrefix: "What does AI do in ",
    titleHighlight: "your industry",
    titleSuffix: "?",
    subtitle:
      "Select your industry and discover how artificial intelligence can transform your business with real cases.",
    scrollIndicator: "Select an industry",
  },
  industries: [
    "Distribution",
    "Hospitality",
    "Construction",
    "Industrial",
    "Healthcare",
    "Retail",
    "Finance",
    "Technology",
    "Education",
    "Energy",
  ],
  industryNames: {
    distribucion: "Distribution",
    restauracion: "Hospitality",
    construccion: "Construction",
    industrial: "Industrial",
    salud: "Healthcare",
    retail: "Retail",
    finanzas: "Finance",
    tecnologia: "Technology",
    educacion: "Education",
    energia: "Energy",
  } as Record<string, string>,
  common: {
    useCasesTitlePrefix: "AI Applications in ",
    useCasesSubtitle: "Discover the most impactful solutions we are implementing in the sector",
    successStoryTitlePrefix: "This could be ",
    successStoryTitleHighlight: "your company",
    successStorySubtitle: "Discover how companies in your sector are improving their results with AI",
    challenge: "The Challenge",
    solution: "The Solution",
    results: "The Results",
    industryLabel: "Industry:",
    yearLabel: "Year:",
    serviceLabel: "Service:",
    viewCase: "Learn more about this case",
    faqTitlePrefix: "Frequently ",
    faqTitleHighlight: "Asked Questions",
    pioneerTitlePrefix: "Want to be the ",
    pioneerTitleHighlight: "pioneer",
    pioneerTitleSuffix: "?",
    pioneerButton: "Let's talk about your project",
    ctaButton: "Get started",
    caseStudyAlt: "case study",
    logoAlt: "logo",
  },
  distribucion: {
    badge: "Distribution & Logistics",
    imageAlt: "Process optimization in distribution",
    headline: "Optimize your processes and decisions",
    description:
      "Artificial intelligence is revolutionizing distribution and logistics. From demand forecasting to warehouse automation, discover how companies in the sector are reducing costs and improving operational efficiency.",
    beneficios: [
      {
        title: "Cost reduction",
        description: "Up to 30% less in operational costs thanks to intelligent resource optimization",
      },
      {
        title: "Fewer errors and incidents",
        description: "Minimize human errors and detect anomalies before they become problems",
      },
      {
        title: "Better decisions",
        description:
          "Real-time data and predictive analytics to make strategic decisions with confidence",
      },
    ],
    useCasesHighlight: "Distribution",
    casosDeUso: [
      {
        title: "Demand forecasting",
        description: "Models that anticipate stock needs by product, season and location",
      },
      {
        title: "Route optimization",
        description: "Algorithms that calculate the most efficient routes considering traffic and constraints",
      },
      {
        title: "Automatic comparisons",
        description: "Intelligent matching of documents, prices and suppliers to optimize purchasing",
      },
      {
        title: "Anomaly detection",
        description: "AI that identifies unusual orders, fraud or errors before they occur",
      },
      {
        title: "Document validation",
        description: "Automatic matching of invoices, delivery notes and orders with advanced OCR",
      },
      {
        title: "Automated support",
        description: "Chatbots to manage customer and supplier inquiries 24/7",
      },
    ],
    ctaTitle: "Ready to transform your ",
    ctaHighlight: "distribution",
    ctaTitleSuffix: "?",
    ctaSubtitle: "Schedule a free consultation and discover how AI can optimize your logistics operations",
    faqSubtitle: "Everything you need to know about AI in distribution",
    pioneerText:
      "We don't have a published success story in distribution yet. Be the first and get special conditions.",
    faqs: [
      {
        question: "What types of processes can be automated in distribution companies?",
        answer:
          "We can automate tasks such as order management, stock control, demand forecasting, delivery note and invoice reconciliation, email classification, route creation and report generation. Automation reduces errors and frees up operational time from the first month.",
      },
      {
        question: "What specific benefits does AI bring to distribution?",
        answer:
          "It increases inventory visibility, improves planning, reduces stockouts, optimizes routes, speeds up customer service and reduces warehouse downtime. In most cases, ROI is achieved in less than 6 months.",
      },
      {
        question: "Do I need to have my data well organized to implement AI?",
        answer:
          "No. We start by analyzing your current data and evaluating what can be leveraged as-is. If necessary, we design steps to organize or structure the information, but we never delay the project because of it.",
      },
      {
        question: "How long does it take to implement an AI or automation solution?",
        answer:
          "It depends on the project, but quick wins are usually ready in 4-8 weeks. Broader projects, such as stock optimization or internal assistants, can take between 6 and 12 months.",
      },
      {
        question: "Do the solutions integrate with my current systems (ERP, WMS, CRM)?",
        answer:
          "Yes. We integrate with the systems you already use (such as SAGE, SAP, Odoo, Dynamics, Generix, etc.). We analyze your tools and design the solution to coexist with them without changes to your operations.",
      },
      {
        question: "Can AI improve demand forecasting or inventory turnover?",
        answer:
          "Yes. Predictive models analyze historical data, seasonality, categories, customers and trends to improve demand forecasting and optimize purchasing. This reduces both excess stock and stockouts.",
      },
      {
        question: "Is it safe to apply AI to critical processes like logistics or purchasing?",
        answer:
          "Absolutely. We implement controls, human validations and traceability for all automatic decisions. We always prioritize reliability and stability over speed.",
      },
      {
        question: "What size does my company need to be to apply these solutions?",
        answer:
          "We work with SMEs and medium-sized distribution companies. You don't need to be a large corporation to benefit: many improvements can be applied with basic data and existing processes.",
      },
      {
        question: "What initial investment is needed?",
        answer:
          "It depends on the project, but most automation solutions have an accessible cost and quick return. We ensure that any proposal has a clear impact on savings or productivity.",
      },
      {
        question: "How do we get started?",
        answer:
          "With an Analysis phase where we understand your operation, your data and your needs. From there, we define a clear plan of opportunities and prioritize the projects with the best return for your business.",
      },
    ],
  },
  construccion: {
    badge: "Construction & Building",
    imageAlt: "Digitalization and optimization in construction",
    headline: "Digitize and optimize your construction management",
    description:
      "Artificial intelligence is transforming the construction sector. From automatic document validation to project deviation prediction, discover how companies in the sector are gaining efficiency and control.",
    beneficios: [
      {
        title: "Cost reduction",
        description: "Up to 25% less in administrative costs thanks to document automation",
      },
      {
        title: "Fewer errors and incidents",
        description: "Minimize discrepancies in invoices, delivery notes and orders with automatic validation",
      },
      {
        title: "Better decisions",
        description: "Complete visibility of projects and suppliers for more informed decisions",
      },
    ],
    useCasesHighlight: "Construction",
    casosDeUso: [
      {
        title: "Invoice validation",
        description: "Automatic matching of invoices with orders and delivery notes using OCR and AI",
      },
      {
        title: "Document management",
        description: "Automatic classification and data extraction from construction documents",
      },
      {
        title: "Cost control",
        description: "Real-time tracking of budget deviations by project",
      },
      {
        title: "Supplier management",
        description: "Automatic supplier evaluation based on history and performance",
      },
      {
        title: "Predictive planning",
        description: "Models that anticipate delays and bottlenecks in execution",
      },
      {
        title: "Regulatory compliance",
        description: "Automatic verification of legal documentation and certifications",
      },
    ],
    ctaTitle: "Ready to optimize your ",
    ctaHighlight: "construction",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Schedule a free consultation and discover how AI can improve the efficiency of your projects.",
    faqSubtitle: "Everything you need to know about AI in construction",
    pioneerText:
      "We don't have a published success story in construction yet. Be the first and get special conditions.",
    faqs: [
      {
        question: "What processes can be automated in a construction company?",
        answer:
          "We can automate tasks such as construction document management, delivery note control, material tracking, resource planning, progress reports, cost control and communication between offices and sites. The goal is to reduce paperwork and avoid deviations.",
      },
      {
        question: "What benefits does AI bring to the construction sector?",
        answer:
          "AI helps predict cost deviations, anticipate delays, improve construction planning, optimize purchasing and control actual material usage. It also centralizes documentation and reduces errors that typically appear in manual processes.",
      },
      {
        question: "Do I need to have all my processes digitized to apply AI?",
        answer:
          "No. We start by understanding your current operation and the systems you use. From there we identify applicable opportunities even if part of the process is still in Excel, WhatsApp or paper.",
      },
      {
        question: "Can AI help reduce construction deviations?",
        answer:
          "Yes. It analyzes historical data, construction pace, consumption, reports, estimated vs. actual costs and planning models. This allows anticipating delays, detecting cost overruns and making decisions before the problem becomes critical.",
      },
      {
        question: "Do the solutions integrate with my current software (Presto, Sigrid, SAGE, ERP...)?",
        answer:
          "Yes. We adapt to your current stack and develop integrations that work with your construction, management or accounting tools. You don't need to change systems to implement AI.",
      },
      {
        question: "Can I digitize the management of delivery notes, reports or certifications?",
        answer:
          "Yes. We automate the reception, classification and consolidation of documents using advanced OCR and automatic workflows. This avoids errors, duplicates and information loss.",
      },
      {
        question: "Does AI improve coordination between office and site?",
        answer:
          "Very much. We can centralize information, automate progress updates, generate daily reports, send automatic alerts and structure communication between teams without relying on calls or notes.",
      },
      {
        question: "What minimum size does the company need to benefit?",
        answer:
          "We work with construction companies, installers and renovation companies of any size that manage projects, teams and documentation. SMEs in the sector typically achieve very quick returns.",
      },
      {
        question: "What return can I expect?",
        answer:
          "It depends on the project, but in construction the ROI is usually very clear: fewer errors, less deviation, fewer hours spent on paperwork and more reliable planning. Many projects recover the investment in less than six months.",
      },
      {
        question: "How do we get started?",
        answer:
          "With an Analysis phase of how your projects, teams, systems and data work. We identify where AI can generate immediate impact and define a prioritized implementation plan.",
      },
    ],
  },
  restauracion: {
    badge: "Hospitality & Food Service",
    imageAlt: "Experience improvement and optimization in hospitality",
    headline: "Improve the experience and optimize operations",
    description:
      "Artificial intelligence is transforming the hospitality and food service industry. From review analysis to demand forecasting, discover how restaurant groups are improving customer experience and reducing operational costs.",
    beneficios: [
      {
        title: "Better customer experience",
        description: "Detect and resolve problems before they impact customer satisfaction",
      },
      {
        title: "Cost reduction",
        description: "Optimize purchasing, reduce food waste and improve operational efficiency",
      },
      {
        title: "Data-driven decisions",
        description: "Turn reviews and operational data into actionable insights for your business",
      },
    ],
    useCasesHighlight: "Hospitality",
    casosDeUso: [
      {
        title: "AI review analysis",
        description: "Automatic classification of opinions by topic and sentiment to detect problems",
      },
      {
        title: "Demand forecasting",
        description: "Models that anticipate footfall and consumption to optimize staff and purchasing",
      },
      {
        title: "Smart inventory management",
        description: "Automatic stock control with replenishment and expiry alerts",
      },
      {
        title: "24/7 customer support",
        description: "Chatbots for reservations, inquiries and incident management without waiting",
      },
      {
        title: "Menu optimization",
        description: "Profitability and preference analysis to design more effective menus",
      },
      {
        title: "Shift planning",
        description: "Intelligent staff assignment based on demand forecasting",
      },
    ],
    ctaTitle: "Ready to optimize your ",
    ctaHighlight: "hospitality",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Schedule a free consultation and discover how AI can improve the experience and efficiency of your business.",
    faqSubtitle: "Everything you need to know about AI in hospitality",
    pioneerText:
      "We don't have a published success story in hospitality yet. Be the first and get special conditions.",
    faqs: [
      {
        question: "What processes can be automated in hospitality?",
        answer:
          "We can automate review analysis, reservation management, inventory control, demand forecasting, shift planning, supplier management and operational report generation. Automation reduces errors and frees up time to focus on customer experience.",
      },
      {
        question: "How can AI improve the customer experience?",
        answer:
          "AI analyzes reviews and feedback in real time, detects problems before they escalate, personalizes recommendations and enables faster responses to incidents. This translates into greater satisfaction and loyalty.",
      },
      {
        question: "Do I need a lot of data to get started?",
        answer:
          "Not necessarily. We can start with the data you already have: Google reviews, sales history, POS data. We analyze what information is available and design solutions adapted to your current situation.",
      },
      {
        question: "How long does it take to implement a solution?",
        answer:
          "It depends on the project. Solutions like review analysis can be operational in 4-6 weeks. More complex projects like demand forecasting or comprehensive inventory management can take 2 to 4 months.",
      },
      {
        question: "Does it integrate with my POS and current systems?",
        answer:
          "Yes. We integrate with the main POS systems on the market (Revo, Last, Agora, etc.) and with reservation, delivery and management platforms. We analyze your tools and design the optimal integration.",
      },
      {
        question: "Can AI reduce food waste?",
        answer:
          "Absolutely. With accurate demand forecasting, we adjust purchases to actual consumption. Our clients have reduced waste by 20% to 35%, which directly impacts costs and sustainability.",
      },
      {
        question: "How does review analysis work?",
        answer:
          "We connect with Google My Business and other platforms to automatically import reviews. AI classifies each opinion by topic (service, food, atmosphere, price) and sentiment, generating dashboards with real-time alerts.",
      },
      {
        question: "Is it useful for a single location or only for chains?",
        answer:
          "It's useful for both. A single restaurant can benefit from review analysis and demand forecasting. Chains also take advantage of cross-location comparison and process standardization.",
      },
      {
        question: "What is the expected return on investment?",
        answer:
          "Typical ROI in hospitality includes 20-30% waste reduction, 15-25% improvement in operational efficiency and increased customer satisfaction. Most clients recover their investment in less than 6 months.",
      },
      {
        question: "How do we get started?",
        answer:
          "We schedule a free diagnostic call to understand your operations, identify opportunities and propose a plan with high-impact quick wins. No commitment and full transparency.",
      },
    ],
  },
  industrial: {
    badge: "Industrial & Manufacturing",
    imageAlt: "Boosting industrial production with AI",
    headline: "Boost your production with AI",
    description:
      "Artificial intelligence is transforming the manufacturing industry. From process optimization to predictive maintenance, discover how industrial companies are increasing productivity and reducing operational costs.",
    beneficios: [
      {
        title: "Cost reduction",
        description: "Up to 35% less in operational costs thanks to process and resource optimization",
      },
      {
        title: "Fewer errors and incidents",
        description: "Minimize production defects and detect failures before they affect quality",
      },
      {
        title: "Better decisions",
        description: "Real-time production data to make strategic decisions with confidence",
      },
    ],
    useCasesHighlight: "Industry",
    casosDeUso: [
      {
        title: "Predictive maintenance",
        description: "Models that anticipate machinery failures before unplanned shutdowns occur",
      },
      {
        title: "Production optimization",
        description: "Algorithms that maximize production line and resource performance",
      },
      {
        title: "Automatic quality control",
        description: "Computer vision to detect product defects instantly",
      },
      {
        title: "Knowledge management",
        description: "RAG assistants that centralize and facilitate access to internal technical knowledge",
      },
      {
        title: "Quote generation",
        description: "Automation of quotes and proposals based on historical data and business rules",
      },
      {
        title: "Order matching",
        description: "Automatic validation between orders, quotes and technical specifications",
      },
    ],
    ctaTitle: "Ready to boost your ",
    ctaHighlight: "production",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Schedule a free consultation and discover how AI can optimize your industrial processes.",
    faqSubtitle: "Everything you need to know about AI in industry",
    pioneerText:
      "We don't have a published success story in industry yet. Be the first and get special conditions.",
    faqs: [
      {
        question: "What types of processes can be automated in industrial companies?",
        answer:
          "We can automate tasks such as visual quality control, predictive maintenance, production planning, technical knowledge management, quote generation, order matching and technical documentation. Automation reduces errors and frees up operational time from the first month.",
      },
      {
        question: "What specific benefits does AI bring to industry?",
        answer:
          "It increases production efficiency, reduces unplanned downtime, improves product quality, optimizes raw material usage and speeds up decision-making. In most cases, ROI is achieved in less than 6 months.",
      },
      {
        question: "Do I need to have my data well organized to implement AI?",
        answer:
          "No. We start by analyzing your current data and evaluating what can be leveraged as-is. If necessary, we design steps to organize or structure the information, but we never delay the project because of it.",
      },
      {
        question: "How long does it take to implement an AI solution in production?",
        answer:
          "It depends on the project, but quick wins are usually ready in 4-8 weeks. Broader projects, such as predictive maintenance or automated quality control, can take between 3 and 9 months.",
      },
      {
        question: "Do the solutions integrate with my current systems (ERP, MES, SCADA)?",
        answer:
          "Yes. We integrate with the systems you already use (such as SAP, SAGE, Odoo, MES systems, SCADA, etc.). We analyze your tools and design the solution to coexist with them without changes to your operations.",
      },
      {
        question: "Can AI help with product formulation?",
        answer:
          "Yes. We develop predictive models that learn from formulation history to suggest optimal compositions, reducing laboratory tests and accelerating new product development time.",
      },
      {
        question: "How to centralize technical knowledge from key employees?",
        answer:
          "We create RAG (Retrieval-Augmented Generation) assistants that index technical documentation, historical data and tacit knowledge, enabling natural language queries and reducing dependence on specific individuals.",
      },
      {
        question: "What if my company is small or medium-sized?",
        answer:
          "Our solutions are scalable and adapt to the size of your company. We start with small, high-impact projects to demonstrate value before scaling.",
      },
      {
        question: "What is the initial investment needed?",
        answer:
          "It depends on the scope of the project. We offer everything from strategic consultancies to complete developments. We always ensure that the ROI is clear and measurable from the first project.",
      },
      {
        question: "How can I get started?",
        answer:
          "Schedule a free diagnostic call. In 30 minutes we understand your situation, identify opportunities and propose a concrete action plan with no commitment.",
      },
    ],
  },
  salud: {
    badge: "Healthcare & Medical",
    imageAlt: "Transforming healthcare with AI",
    headline: "Transform healthcare delivery",
    description:
      "Artificial intelligence is revolutionizing the healthcare sector, from diagnostics to hospital management. Discover how we can help you improve patient care and optimize your operations.",
    beneficios: [
      {
        title: "Cost reduction",
        description: "Up to 30% less in operational costs thanks to administrative process automation",
      },
      {
        title: "Fewer errors",
        description: "Minimize errors in diagnostics, prescriptions and clinical record management",
      },
      {
        title: "Better decisions",
        description: "Real-time clinical data to make medical decisions with greater precision and speed",
      },
    ],
    useCasesHighlight: "Healthcare",
    casosDeUso: [
      {
        title: "Diagnostic assistants",
        description: "AI that helps professionals interpret symptoms and suggest differential diagnoses",
      },
      {
        title: "Administrative automation",
        description: "Automatic management of appointments, records, reports and clinical documentation",
      },
      {
        title: "Triage chatbots",
        description: "24/7 care to guide patients and refer them by urgency and specialty",
      },
      {
        title: "Medical record analysis",
        description: "Intelligent extraction of key information from extensive clinical records",
      },
      {
        title: "Demand forecasting",
        description: "Models that anticipate demand peaks to optimize resources and staff",
      },
      {
        title: "Coaching and wellness",
        description: "Conversational AI applications for emotional support and habit tracking",
      },
    ],
    ctaTitle: "Ready to transform your ",
    ctaHighlight: "healthcare",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Schedule a free consultation and discover how AI can improve patient care and optimize your operations.",
    faqSubtitle: "Everything you need to know about AI in healthcare",
    pioneerText:
      "We don't have a published success story in healthcare yet. Be the first and get special conditions.",
    faqs: [
      {
        question: "What types of processes can be automated in the healthcare sector?",
        answer:
          "We can automate appointment management, initial triage, clinical documentation, medical reports, patient follow-up, medication reminders and medical record analysis. Automation reduces administrative burden and allows professionals to focus on care.",
      },
      {
        question: "What specific benefits does AI bring to healthcare?",
        answer:
          "It improves diagnostic accuracy, reduces waiting times, optimizes resource management, facilitates chronic patient follow-up and improves the patient experience. In most cases, ROI is achieved in less than 12 months.",
      },
      {
        question: "How is patient data privacy guaranteed?",
        answer:
          "We strictly comply with GDPR, HIPAA and local healthcare regulations. We implement end-to-end encryption, data anonymization and, when necessary, deploy models on the client's own infrastructure.",
      },
      {
        question: "How long does it take to implement an AI solution in healthcare?",
        answer:
          "It depends on the project. Triage chatbots or administrative automation can be ready in 4-8 weeks. More complex projects like diagnostic assistants can take between 3 and 6 months.",
      },
      {
        question: "Do the solutions integrate with hospital management systems (HIS)?",
        answer:
          "Yes. We integrate with the systems you already use (Epic, Cerner, SAP Healthcare, etc.). We analyze your tools and design the solution to coexist with them without changes to your operations.",
      },
      {
        question: "Can AI help with emotional care and coaching?",
        answer:
          "Yes. We develop conversational AI applications with voice and text that provide emotional support, habit tracking and personalized coaching, always as a complement to professional care.",
      },
      {
        question: "How does AI help with clinical documentation management?",
        answer:
          "We automate consultation transcription, report generation, data extraction from medical records and document classification, reducing professionals' administrative time by up to 70%.",
      },
      {
        question: "What if my center is small?",
        answer:
          "Our solutions are scalable and adapt to the size of your organization. We start with small, high-impact projects to demonstrate value before scaling.",
      },
      {
        question: "What is the initial investment needed?",
        answer:
          "It depends on the scope of the project. We offer everything from strategic consultancies to complete developments. We always ensure that the ROI is clear and measurable from the first project.",
      },
      {
        question: "How can I get started?",
        answer:
          "Schedule a free diagnostic call. In 30 minutes we understand your situation, identify opportunities and propose a concrete action plan with no commitment.",
      },
    ],
  },
  retail: {
    badge: "Retail & Commerce",
    imageAlt: "Transforming commerce with AI",
    headline: "Transform your retail with AI",
    description:
      "Artificial intelligence is revolutionizing retail. From personalizing the customer experience to inventory optimization, discover how companies in the sector are increasing sales and building customer loyalty.",
    beneficios: [
      {
        title: "Cost reduction",
        description: "Up to 25% less in operational costs thanks to inventory and process optimization",
      },
      {
        title: "Fewer errors and incidents",
        description: "Minimize stockouts, order errors and customer service problems",
      },
      {
        title: "Better decisions",
        description: "Real-time sales and customer behavior data for strategic decisions",
      },
    ],
    useCasesHighlight: "Retail",
    casosDeUso: [
      {
        title: "Experience personalization",
        description: "Product recommendations based on customer behavior and preferences",
      },
      {
        title: "Demand forecasting",
        description: "Models that anticipate sales trends to optimize stock and purchasing",
      },
      {
        title: "24/7 customer support",
        description: "Intelligent chatbots that answer questions, manage orders and build loyalty",
      },
      {
        title: "Behavior analysis",
        description: "Insights on purchase patterns to optimize layout, promotions and pricing",
      },
      {
        title: "Automated inventory management",
        description: "Intelligent stock control with predictive alerts and automatic replenishment",
      },
      {
        title: "Price optimization",
        description: "Dynamic pricing based on demand, competition and target margins",
      },
    ],
    ctaTitle: "Ready to transform your ",
    ctaHighlight: "retail",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Schedule a free consultation and discover how AI can increase your sales and build customer loyalty.",
    faqSubtitle: "Everything you need to know about AI in retail",
    pioneerText:
      "We don't have a published success story in retail yet. Be the first and get special conditions.",
    faqs: [
      {
        question: "What types of processes can be automated in retail?",
        answer:
          "We can automate customer service, inventory management, product recommendations, sales analysis, demand forecasting, dynamic pricing and order management. Automation improves customer experience and optimizes operations from the first month.",
      },
      {
        question: "What specific benefits does AI bring to commerce?",
        answer:
          "It increases sales through personalization, reduces stockouts, improves customer satisfaction, optimizes inventory and facilitates decision-making. In most cases, ROI is achieved in less than 6 months.",
      },
      {
        question: "Do I need an online store to benefit from AI?",
        answer:
          "No. AI adds value in both physical and online retail. In physical stores we optimize inventory, analyze behavior and improve service. In e-commerce we also personalize the digital experience.",
      },
      {
        question: "How long does it take to implement an AI solution in retail?",
        answer:
          "It depends on the project. Customer service chatbots or basic recommendation systems can be ready in 4-8 weeks. More complex projects like demand forecasting can take between 3 and 6 months.",
      },
      {
        question: "Do the solutions integrate with my management system (ERP, POS)?",
        answer:
          "Yes. We integrate with the systems you already use (Shopify, WooCommerce, SAP, SAGE, etc.). We analyze your tools and design the solution to coexist with them without changes to your operations.",
      },
      {
        question: "Can AI help build customer loyalty?",
        answer:
          "Yes. We develop personalized recommendation systems, intelligent loyalty programs and automated communications that increase customer recurrence and average ticket.",
      },
      {
        question: "How does AI help with inventory management?",
        answer:
          "We forecast demand by product and location, generate replenishment alerts, identify slow-moving products and optimize warehouse and store space. We reduce working capital tied up in stock by up to 30%.",
      },
      {
        question: "What if my business is small?",
        answer:
          "Our solutions are scalable and adapt to the size of your business. We start with small, high-impact projects to demonstrate value before scaling.",
      },
      {
        question: "What is the initial investment needed?",
        answer:
          "It depends on the scope of the project. We offer everything from strategic consultancies to complete developments. We always ensure that the ROI is clear and measurable from the first project.",
      },
      {
        question: "How can I get started?",
        answer:
          "Schedule a free diagnostic call. In 30 minutes we understand your situation, identify opportunities and propose a concrete action plan with no commitment.",
      },
    ],
  },
  finanzas: {
    badge: "Finance & Insurance",
    imageAlt: "Optimizing financial processes with AI",
    headline: "Optimize your financial processes",
    description:
      "Artificial intelligence is transforming the financial sector. From fraud detection to analysis automation, discover how financial companies are improving efficiency and reducing risks.",
    beneficios: [
      {
        title: "Cost reduction",
        description: "Up to 40% less in operational costs thanks to financial process automation",
      },
      {
        title: "Fewer errors and incidents",
        description: "Minimize errors in transactions, reports and regulatory compliance",
      },
      {
        title: "Better decisions",
        description: "Predictive analytics and real-time data for more precise investment and risk decisions",
      },
    ],
    useCasesHighlight: "Finance",
    casosDeUso: [
      {
        title: "Fraud detection",
        description: "Models that identify suspicious patterns and fraudulent transactions in real time",
      },
      {
        title: "Predictive risk analysis",
        description: "Automatic evaluation of credit and investment risks with greater precision",
      },
      {
        title: "Report automation",
        description: "Automatic generation of financial, regulatory and compliance reports",
      },
      {
        title: "24/7 customer support",
        description: "Specialized chatbots for account, product and banking operation inquiries",
      },
      {
        title: "Documentation analysis",
        description: "Intelligent data extraction from contracts, policies and legal documentation",
      },
      {
        title: "Automatic reconciliation",
        description: "Automatic matching and validation of transactions, invoices and bank movements",
      },
    ],
    ctaTitle: "Ready to optimize your ",
    ctaHighlight: "finances",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Schedule a free consultation and discover how AI can improve efficiency and reduce risks in your financial business.",
    faqSubtitle: "Everything you need to know about AI in finance",
    pioneerText:
      "We don't have a published success story in finance yet. Be the first and get special conditions.",
    faqs: [
      {
        question: "What types of processes can be automated in finance?",
        answer:
          "We can automate bank reconciliation, fraud detection, risk analysis, report generation, customer service, document data extraction and regulatory compliance. Automation reduces errors and frees up operational time from the first month.",
      },
      {
        question: "What specific benefits does AI bring to the financial sector?",
        answer:
          "It improves fraud detection, reduces analysis times, optimizes risk management, automates regulatory compliance and improves customer experience. In most cases, ROI is achieved in less than 6 months.",
      },
      {
        question: "How is the security of financial data guaranteed?",
        answer:
          "We strictly comply with GDPR, PCI-DSS and financial regulations. We implement end-to-end encryption, access auditing and, when necessary, deploy models on the client's own infrastructure.",
      },
      {
        question: "How long does it take to implement an AI solution in finance?",
        answer:
          "It depends on the project. Customer service chatbots or report automation can be ready in 4-8 weeks. More complex projects like fraud detection can take between 3 and 6 months.",
      },
      {
        question: "Do the solutions integrate with banking systems and ERPs?",
        answer:
          "Yes. We integrate with core banking systems, financial ERPs (SAP, Oracle, SAGE), trading platforms and risk management systems. We analyze your tools and design the solution to coexist with them.",
      },
      {
        question: "Can AI help with regulatory compliance?",
        answer:
          "Yes. We automate regulatory report generation, suspicious operation monitoring (AML), identity verification (KYC) and compliance auditing, reducing risks and costs.",
      },
      {
        question: "How does AI help with financial documentation management?",
        answer:
          "We automate data extraction from contracts, invoices, policies and legal documentation, automatically classify documents and facilitate intelligent searches in large volumes of information.",
      },
      {
        question: "What if my financial company is small?",
        answer:
          "Our solutions are scalable and adapt to the size of your organization. We start with small, high-impact projects to demonstrate value before scaling.",
      },
      {
        question: "What is the initial investment needed?",
        answer:
          "It depends on the scope of the project. We offer everything from strategic consultancies to complete developments. We always ensure that the ROI is clear and measurable from the first project.",
      },
      {
        question: "How can I get started?",
        answer:
          "Schedule a free diagnostic call. In 30 minutes we understand your situation, identify opportunities and propose a concrete action plan with no commitment.",
      },
    ],
  },
  tecnologia: {
    badge: "Technology & Software",
    imageAlt: "Accelerating technology development with AI",
    headline: "Accelerate your development with AI",
    description:
      "Artificial intelligence is transforming the technology sector. From development automation to infrastructure optimization, discover how tech companies are improving their productivity and software quality.",
    beneficios: [
      {
        title: "Cost reduction",
        description: "Up to 40% less in development costs thanks to automation and optimization",
      },
      {
        title: "Fewer errors and incidents",
        description: "Minimize bugs, vulnerabilities and performance issues before production",
      },
      {
        title: "Better decisions",
        description: "Real-time code analysis and metrics to make technical decisions with confidence",
      },
    ],
    useCasesHighlight: "Technology",
    casosDeUso: [
      {
        title: "Code assistants",
        description: "AI copilots that accelerate development, suggest solutions and document code automatically",
      },
      {
        title: "Bug detection",
        description: "Automatic code analysis to identify errors, vulnerabilities and code smells",
      },
      {
        title: "Test generation",
        description: "Automatic creation of unit and integration tests based on existing code",
      },
      {
        title: "Automatic documentation",
        description: "Generation of technical documentation, APIs and code comments with AI",
      },
      {
        title: "Predictive monitoring",
        description: "Prediction of infrastructure and application failures before they occur",
      },
      {
        title: "Automatic code reviews",
        description: "Intelligent pull request review with improvement suggestions and problem detection",
      },
    ],
    ctaTitle: "Ready to accelerate your ",
    ctaHighlight: "development",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Schedule a free consultation and discover how AI can empower your development team and software quality.",
    faqSubtitle: "Everything you need to know about AI in technology",
    pioneerText:
      "We don't have a published success story in technology yet. Be the first and get special conditions.",
    faqs: [
      {
        question: "What types of processes can be automated in technology companies?",
        answer:
          "We can automate code generation, PR reviews, testing, documentation, deployments, infrastructure monitoring and technical customer support. Automation accelerates development and improves quality from day one.",
      },
      {
        question: "What specific benefits does AI bring to software development?",
        answer:
          "It increases development speed, reduces production bugs, improves code quality, facilitates onboarding of new developers and optimizes application performance. In most cases, ROI is achieved in less than 3 months.",
      },
      {
        question: "Do AI assistants replace developers?",
        answer:
          "No. AI assistants empower developers, freeing them from repetitive tasks so they can focus on solving complex problems and designing architectures. They are tools, not replacements.",
      },
      {
        question: "How long does it take to implement AI solutions in development?",
        answer:
          "Code assistants and review tools can be ready in 1-2 weeks. More complex projects like automatic testing systems or predictive monitoring can take between 4 and 12 weeks.",
      },
      {
        question: "Do the solutions integrate with our current tech stack?",
        answer:
          "Yes. We integrate with Git, CI/CD pipelines, IDEs, testing tools and cloud platforms you already use. We analyze your stack and design the solution to fit perfectly.",
      },
      {
        question: "How is code security and intellectual property guaranteed?",
        answer:
          "We work with private models when necessary, implement local code analysis and guarantee that your code is never used to train public models. We comply with the strictest security policies.",
      },
      {
        question: "Can AI help with legacy code?",
        answer:
          "Yes. We develop tools to document legacy code, identify critical dependencies, suggest refactoring and facilitate migration to new technologies. We reduce the risk of working with old code.",
      },
      {
        question: "What if my development team is small?",
        answer:
          "Our solutions are scalable and especially valuable for small teams that need to multiply their productivity. We start with high-impact tools that easily integrate into your workflow.",
      },
      {
        question: "What is the initial investment needed?",
        answer:
          "It depends on the scope of the project. We offer everything from consultancies to identify opportunities to complete tool implementation. We always ensure that the ROI is clear and measurable from the first sprint.",
      },
      {
        question: "How can I get started?",
        answer:
          "Schedule a free diagnostic call. In 30 minutes we understand your stack, identify automation opportunities and propose a concrete action plan with no commitment.",
      },
    ],
  },
  educacion: {
    badge: "Education & Training",
    imageAlt: "Revolutionizing learning with AI",
    headline: "Revolutionize learning with AI",
    description:
      "Artificial intelligence is transforming education. From learning personalization to administrative task automation, discover how educational institutions are improving results and student experience.",
    beneficios: [
      {
        title: "Cost reduction",
        description: "Up to 30% less in operational costs thanks to administrative process automation",
      },
      {
        title: "Fewer errors and incidents",
        description: "Minimize errors in assessments, academic management and student tracking",
      },
      {
        title: "Better decisions",
        description: "Real-time performance and progress data for more effective pedagogical decisions",
      },
    ],
    useCasesHighlight: "Education",
    casosDeUso: [
      {
        title: "Learning personalization",
        description: "Systems that adapt content and pace to each student's level and learning style",
      },
      {
        title: "24/7 virtual tutors",
        description: "AI assistants that answer questions, explain concepts and guide learning",
      },
      {
        title: "Automatic grading",
        description: "Intelligent evaluation of exams, assignments and exercises with personalized feedback",
      },
      {
        title: "Performance analysis",
        description: "Early detection of difficulties and prediction of dropout risk",
      },
      {
        title: "Content management",
        description: "Intelligent organization of teaching materials and generation of personalized resources",
      },
      {
        title: "Translation and accessibility",
        description: "Automatic material translation and adaptation for students with special needs",
      },
    ],
    ctaTitle: "Ready to revolutionize your ",
    ctaHighlight: "education",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Schedule a free consultation and discover how AI can improve the educational experience and optimize your institution's management.",
    faqSubtitle: "Everything you need to know about AI in education",
    pioneerText:
      "We don't have a published success story in education yet. Be the first and get special conditions.",
    faqs: [
      {
        question: "What types of processes can be automated in educational institutions?",
        answer:
          "We can automate exam grading, student inquiry support, teaching material generation, progress tracking, enrollment management, family communication and performance analysis. Automation frees up time for teachers to focus on teaching.",
      },
      {
        question: "What specific benefits does AI bring to education?",
        answer:
          "It improves learning outcomes through personalization, reduces teachers' administrative burden, facilitates early detection of difficulties, increases student engagement and optimizes resource management. In most cases, ROI is achieved in less than 12 months.",
      },
      {
        question: "Can AI replace teachers?",
        answer:
          "No. AI is a tool that complements and enhances teachers' work, automating repetitive tasks and providing insights, but the human role in education is irreplaceable for motivation, empathy and pedagogical guidance.",
      },
      {
        question: "How long does it take to implement an AI solution in education?",
        answer:
          "It depends on the project. Virtual tutors or automatic grading systems can be ready in 4-8 weeks. More complex projects like adaptive learning platforms can take between 3 and 6 months.",
      },
      {
        question: "Do the solutions integrate with educational platforms (LMS, Moodle)?",
        answer:
          "Yes. We integrate with the platforms you already use (Moodle, Canvas, Blackboard, Google Classroom, etc.). We analyze your tools and design the solution to coexist with them without changes to your operations.",
      },
      {
        question: "How is student data privacy guaranteed?",
        answer:
          "We strictly comply with GDPR and child protection regulations. We implement encryption, sensitive data anonymization and, when necessary, deploy models on the institution's own infrastructure.",
      },
      {
        question: "Can AI help students with special needs?",
        answer:
          "Yes. We develop accessibility tools such as automatic transcription, text reading, sign language translation and content adaptation according to individual needs, facilitating educational inclusion.",
      },
      {
        question: "What if my educational center is small?",
        answer:
          "Our solutions are scalable and adapt to the size of your institution. We start with small, high-impact projects to demonstrate value before scaling.",
      },
      {
        question: "What is the initial investment needed?",
        answer:
          "It depends on the scope of the project. We offer everything from strategic consultancies to complete developments. We always ensure that the ROI is clear and measurable from the first project.",
      },
      {
        question: "How can I get started?",
        answer:
          "Schedule a free diagnostic call. In 30 minutes we understand your situation, identify opportunities and propose a concrete action plan with no commitment.",
      },
    ],
  },
  energia: {
    badge: "Energy & Utilities",
    imageAlt: "Optimizing energy management with AI",
    headline: "Optimize your energy management",
    description:
      "Artificial intelligence is transforming the energy sector. From consumption prediction to network optimization, discover how companies in the sector are reducing costs and improving operational efficiency.",
    beneficios: [
      {
        title: "Cost reduction",
        description: "Up to 30% less in operational costs thanks to consumption and production optimization",
      },
      {
        title: "Fewer errors and incidents",
        description: "Minimize network failures, detect anomalies and prevent service interruptions",
      },
      {
        title: "Better decisions",
        description: "Real-time production and consumption data for strategic decisions with confidence",
      },
    ],
    useCasesHighlight: "Energy",
    casosDeUso: [
      {
        title: "Consumption prediction",
        description: "Models that anticipate energy demand by zone, schedule and weather conditions",
      },
      {
        title: "Network optimization",
        description: "Algorithms that balance energy distribution and reduce network losses",
      },
      {
        title: "Predictive maintenance",
        description: "Early detection of infrastructure failures to prevent service interruptions",
      },
      {
        title: "Renewable management",
        description: "Optimization of solar and wind production based on weather forecasts",
      },
      {
        title: "Smart billing",
        description: "Automation of readings, calculations and invoice issuance with anomaly detection",
      },
      {
        title: "24/7 customer support",
        description: "Chatbots to manage inquiries about consumption, rates and outages in real time",
      },
    ],
    ctaTitle: "Ready to optimize your ",
    ctaHighlight: "energy management",
    ctaTitleSuffix: "?",
    ctaSubtitle:
      "Schedule a free consultation and discover how AI can improve your network efficiency and reduce costs.",
    faqSubtitle: "Everything you need to know about AI in energy",
    pioneerText:
      "We don't have a published success story in energy yet. Be the first and get special conditions.",
    faqs: [
      {
        question: "What types of processes can be automated in the energy sector?",
        answer:
          "We can automate demand forecasting, network management, infrastructure maintenance, billing, customer service, consumption monitoring and renewable production optimization. Automation improves efficiency and reduces interruptions from the first month.",
      },
      {
        question: "What specific benefits does AI bring to energy?",
        answer:
          "It improves network stability, reduces distribution losses, optimizes renewable production, anticipates infrastructure failures and improves customer experience. In most cases, ROI is achieved in less than 12 months.",
      },
      {
        question: "Do I need historical data to implement AI?",
        answer:
          "It's recommended, but not essential. We start by analyzing your current data and, if necessary, design a data collection phase before training predictive models.",
      },
      {
        question: "How long does it take to implement an AI solution in energy?",
        answer:
          "It depends on the project. Customer service chatbots or billing automation can be ready in 4-8 weeks. More complex projects like demand forecasting can take between 3 and 9 months.",
      },
      {
        question: "Do the solutions integrate with SCADA and energy management systems?",
        answer:
          "Yes. We integrate with SCADA systems, network management systems, energy ERPs and monitoring platforms. We analyze your tools and design the solution to coexist with them without changes to your operations.",
      },
      {
        question: "Can AI help with renewable energy management?",
        answer:
          "Yes. We develop solar and wind production prediction models, storage optimization algorithms and intelligent microgrid management systems to maximize renewable energy usage.",
      },
      {
        question: "How does AI help with infrastructure maintenance?",
        answer:
          "We implement predictive maintenance that analyzes sensor data, failure history and operating conditions to anticipate failures in transformers, lines and equipment, reducing unplanned interruptions by up to 40%.",
      },
      {
        question: "What if my energy company is small or medium-sized?",
        answer:
          "Our solutions are scalable and adapt to the size of your organization. We start with small, high-impact projects to demonstrate value before scaling.",
      },
      {
        question: "What is the initial investment needed?",
        answer:
          "It depends on the scope of the project. We offer everything from strategic consultancies to complete developments. We always ensure that the ROI is clear and measurable from the first project.",
      },
      {
        question: "How can I get started?",
        answer:
          "Schedule a free diagnostic call. In 30 minutes we understand your situation, identify opportunities and propose a concrete action plan with no commitment.",
      },
    ],
  },
}

export const industriasTranslations = { es, en }
