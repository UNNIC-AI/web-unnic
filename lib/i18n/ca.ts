import { es } from "./es"

export const ca = {
  nav: {
    servicios: "Serveis",
    industrias: "Indústries",
    portfolio: "Portfolio",
    unnickers: "Unnickers",
    recursos: "Recursos",
    contacto: "Contacte",
    verTodos: "Veure-ho tot",
    abrirMenu: "Obrir menú",
    menuNav: "Menú de navegació",
    submenu: {
      consultoria: "Consultoria",
      automatizacion: "Automatització",
      desarrollo: "Desenvolupament",
      data: "Data",
      iaGenerativa: "IA generativa",
      formacion: "Formació",
      cumplimientoRia: "Compliment RIA",
    },
  },

  hero: {
    titlePart1: "Som el teu ",
    titleHighlight1: "Partner",
    titlePart2: " en",
    titleHighlight2: "Intel·ligència Artificial",
    subtitle:
      "Dissenyem un pla de transformació únic per a la teva empresa i t’acompanyem durant tot el procés",
    ctaPrimary: "Agendar una reunió",
    ctaSecondary: "Saber-ne més",
  },

  companyLogos: {
    subtitle: "Empreses com la teva ja han fet el pas:",
  },

  services: {
    title: "Així és ",
    titleHighlight: "com ho fem",
    subtitle:
      "La nostra metodologia està dissenyada perquè hi hagi impacte en els teus processos, decisions i compte de resultats",
    saberMas: "Saber-ne més",
    items: [
      {
        kicker: "Dissenyem l’estratègia d’IA",
        title: "Consultoria",
        description:
          "Identifiquem processos amb impacte, prioritzem quick wins i definim una full de ruta amb retorn.",
      },
      {
        kicker: "Fem realitat la solució",
        title: "Implementació",
        description:
          "Assistents, automatitzacions i models predictius integrats amb els teus sistemes.",
      },
      {
        kicker: "Impulsem l’adopció",
        title: "Formació",
        description: "Capacitem direcció i equips per usar la IA de manera eficaç i segura.",
      },
      {
        kicker: "Ús responsable per defecte",
        title: "Compliment RIA",
        description: "Governança i avaluació de riscos alineades amb el Reglament Europeu d’IA.",
      },
    ],
  },

  testimonials: {
    title: "La nostra filosofia: ",
    titleHighlight: "Win-Win",
    subtitle:
      "Les nostres estratègies i el nostre partnership són a llarg termini. Per això oferim un servei de 10, perquè si a tu et va bé, a nosaltres també",
  },

  stats: {
    retentionText1: "dels clients amb els quals hem treballat ",
    retentionBold: "continuen fent-ho",
    retentionText2: " avui dia",
    satisfactionText1: "és l’",
    satisfactionBold: "índex de satisfacció mitjà",
    satisfactionText2: " de tots els nostres serveis",
  },

  technologies: {
    title: "Experts en ",
    titleHighlight: "Tecnologia",
    carouselText: "Treballem amb les millors tecnologies del mercat",
    categories: [
      {
        title: "IA generativa",
        items: ["Agents d’IA", "Trucades amb IA", "Sistemes RAG"],
      },
      {
        title: "Automatitzacions",
        items: ["N8n", "Power Automate RPA"],
      },
      {
        title: "BI i ML",
        items: ["Power BI", "Estudis de dades", "Models predictius"],
      },
      {
        title: "Desenvolupament de programari",
        items: ["Aplicacions web", "Programari a mida"],
      },
    ],
  },

  cta: {
    line1: "La IA és aquí per quedar-se…",
    line2: "No és qüestió de fer-ho,",
    line3: "sinó de quan.",
    button: "Vull començar",
  },

  successStories: {
    title: "Aquesta podria ser ",
    titleHighlight: "la teva empresa",
    subtitle: "Empreses reals, resultats mesurables. Descobreix com transformem operacions amb IA.",
    verCaso: "Veure el cas complet",
    verCasoCorto: "Veure el cas",
    verTodos: "Veure tots els casos d’èxit",
    items: [
      {
        industry: "Distribució",
        shortTitle: "Automatització operativa integral",
        challenge:
          "L’empresa operava amb processos manuals en logística, administració i compres, consumint centenars d’hores i generant errors. Aquesta càrrega reduïa l’eficiència i dificultava el control operatiu.",
        solution:
          "Unnic AI va prioritzar els processos crítics, va desenvolupar automatitzacions en logística i validació documental i va formar l’equip. A més, es va garantir el compliment del Reglament d’IA.",
        results: [
          { metric: "+200h", description: "Treball manual estalviat setmanalment" },
          { metric: "25%", description: "Augment de productivitat en processos" },
          { metric: "0%", description: "Risc de sancions per ús d’IA" },
        ],
      },
      {
        industry: "Restauració i hostaleria",
        shortTitle: "Control operatiu amb IA",
        results: [
          { metric: "80%", description: "Reducció en temps d’anàlisi" },
          { metric: "85%", description: "Els CMO prenen millors decisions" },
          { metric: "<48h", description: "Detecció de problemes crítics" },
        ],
      },
      {
        industry: "Construcció i distribució",
        shortTitle: "Validació automàtica de documents",
        results: [
          { metric: "90%", description: "Reducció en temps de contrast" },
          { metric: "€8.500", description: "Estalvi mensual estimat" },
          { metric: "100%", description: "Traçabilitat de documents" },
        ],
      },
      {
        industry: "Industrial i fabricació",
        shortTitle: "Consultoria IA industrial",
        results: [
          { metric: "+4", description: "Projectes amb ROI < 6 mesos" },
          { metric: "80%", description: "Menys temps cercant informació" },
          { metric: "9,7/10", description: "Valoració del client" },
        ],
      },
      {
        industry: "HealthTech i coaching",
        shortTitle: "Coaching amb IA",
        results: [
          { metric: "+200", description: "Sessions de prova" },
          { metric: "70%", description: "Impacte emocional alt" },
          { metric: "8/10", description: "NPS (satisfacció)" },
        ],
      },
      {
        industry: "Restauració organitzada",
        shortTitle: "Optimització predictiva de compres",
        results: [
          { metric: "27%", description: "Menys malbaratament alimentari" },
          { metric: "38%", description: "Menys ruptures d’estoc" },
          { metric: "€9.000", description: "Estalvi mensual estimat" },
        ],
      },
    ],
  },

  faq: {
    title: "Preguntes ",
    titleHighlight: "freqüents",
    subtitle:
      "Resolem els dubtes més habituals sobre com la intel·ligència artificial pot transformar el teu negoci. Tens una altra pregunta?",
    contactar: "Contactar",
    chatIA: "Xat amb IA",
    items: [
      {
        question: "Quin tipus d’empreses es poden beneficiar de la IA?",
        answer:
          "La IA no és només per a grans tecnològiques. Treballem amb empreses de més de 50 treballadors en sectors com retail, logística, salut, finances i manufactura. Si tens processos repetitius, grans volums de dades o necessites millorar la presa de decisions, la IA pot transformar el teu negoci.",
      },
      {
        question: "Quant de temps triga a implementar-se una solució?",
        answer:
          "Depèn de la complexitat del projecte. Els nostres «quick wins» poden estar operatius en 2-4 setmanes, mentre que transformacions més profundes o models predictius complexos poden trigar de 3 a 6 mesos. Sempre treballem amb lliuraments incrementals perquè vegis valor des del primer mes.",
      },
      {
        question: "Cal tenir un equip tècnic intern?",
        answer:
          "No. Nosaltres actuem com el teu soci tecnològic. Ens encarreguem del desenvolupament, implementació i manteniment. Tanmateix, si tens equip tècnic, col·laborem estretament amb ells per assegurar una transferència de coneixement efectiva.",
      },
      {
        question: "Com garantiu la seguretat de les dades?",
        answer:
          "La seguretat és la nostra prioritat. Implementem solucions que compleixen el GDPR i normatives europees. Treballem amb entorns aïllats, xifrat extrem a extrem i, quan cal, despleguem models locals (on-premise) perquè les dades no surtin mai de la teva infraestructura.",
      },
      {
        question: "Quin és el retorn d’inversió (ROI) esperat?",
        answer:
          "Els nostres projectes estan dissenyats per tenir un ROI clar i mesurable. Normalment els clients veuen retorns de 3x a 10x el primer any gràcies a la reducció de costos operatius, augment de vendes o millora de l’eficiència dels empleats.",
      },
    ],
  },

  contact: {
    title: "Parlem de com la IA ",
    titleHighlight: "et pot ajudar",
    subtitle:
      "Estem preparats per ajudar-te a transformar el teu negoci amb solucions tecnològiques a mida. Explica’ns les teves idees i les farem realitat.",
    form: {
      nombre: "Nom",
      email: "Correu electrònic",
      canal: "Canal",
      canalPlaceholder: "Com ens has conegut?",
      mensaje: "Missatge",
      mensajePlaceholder: "Explica’ns més sobre el teu projecte…",
      enviar: "Enviar missatge",
      enviando: "Enviant…",
      consentimiento:
        "Autoritzo Unnic AI a recopilar i processar les meves dades personals segons la",
      politicaPrivacidad: "Política de privacitat",
      consentimientoFin:
        ". Podré revocar aquest consentiment en qualsevol moment donant-me de baixa de les comunicacions.",
      errorConsent: "Has d’acceptar el tractament de dades per continuar",
      errorEnvio: "Error en enviar el missatge. Torna-ho a provar.",
      errorConexion: "Error de connexió. Torna-ho a provar.",
      exitoTitulo: "Missatge enviat",
      exitoTexto: "Gràcies per contactar-nos. Et respondrem com més aviat millor.",
      otroMensaje: "Enviar un altre missatge",
      canalOptions: {
        linkedin: "LinkedIn",
        eventoPresencial: "Esdeveniment presencial",
        webinar: "Webinar",
        google: "Google",
        instagram: "Instagram",
        conocido: "Per un conegut",
        otros: "Altres",
      },
    },
    info: {
      titulo: "Informació de contacte",
      texto:
        "Tens alguna pregunta o vols començar un projecte? Som aquí per ajudar-te. Contacta’ns per qualsevol d’aquests mitjans.",
      emailLabel: "Correu",
      telefonoLabel: "Telèfon",
      oficinaLabel: "Oficina",
    },
  },

  footer: {
    headline: "Millorem els resultats de la teva empresa amb ",
    headlineHighlight: "Intel·ligència Artificial",
    empecemos: "Comencem",
    explorar: "Explorar",
    legal: "Legal",
    derechos: "© 2026 Unnic AI. Tots els drets reservats.",
    avisoLegal: "Avís legal",
    links: {
      servicios: "Serveis",
      industrias: "Indústries",
      casosExito: "Casos d’èxit",
      unnickers: "Unnickers",
      recursos: "Recursos",
    },
    legalLinks: {
      privacidad: "Política de privacitat",
      avisoLegal: "Avís legal",
      cookies: "Política de cookies",
      faq: "Preguntes freqüents",
    },
  },

  cookies: {
    texto:
      "Utilitzem cookies pròpies i de tercers per analitzar l’ús del lloc i millorar els nostres serveis. Pots acceptar totes les cookies o només les necessàries.",
    politica: "Política de cookies",
    soloNecesarias: "Només necessàries",
    aceptarTodas: "Acceptar totes",
  },
} as unknown as typeof es
