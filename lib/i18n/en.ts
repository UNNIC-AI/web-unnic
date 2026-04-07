import type { es } from './es'

export const en: typeof es = {
  nav: {
    servicios: "Services",
    industrias: "Industries",
    portfolio: "Portfolio",
    unnickers: "Unnickers",
    recursos: "Resources",
    contacto: "Contact",
    verTodos: "See all",
    abrirMenu: "Open menu",
    menuNav: "Navigation menu",
    submenu: {
      consultoria: "Consulting",
      automatizacion: "Automation",
      desarrollo: "Development",
      data: "Data",
      iaGenerativa: "Generative AI",
      formacion: "Training",
      cumplimientoRia: "EU AI Act Compliance",
    },
  },

  hero: {
    titlePart1: "We are your ",
    titleHighlight1: "Partner",
    titlePart2: " in",
    titleHighlight2: "Artificial Intelligence",
    subtitle: "We design a unique transformation plan for your company and support you throughout the entire process",
    ctaPrimary: "Schedule a Meeting",
    ctaSecondary: "Learn more",
  },

  companyLogos: {
    subtitle: "Companies like yours have already taken the step:",
  },

  services: {
    title: "This is ",
    titleHighlight: "how we do it",
    subtitle: "Our methodology is designed to have an impact on your processes, decisions, and bottom line",
    saberMas: "Learn more",
    items: [
      {
        kicker: "We design the AI strategy",
        title: "Consulting",
        description: "We identify high-impact processes, prioritize quick wins and define a roadmap with ROI.",
      },
      {
        kicker: "We make the solution a reality",
        title: "Implementation",
        description: "Assistants, automations and predictive models integrated with your systems.",
      },
      {
        kicker: "We drive adoption",
        title: "Training",
        description: "We train management and teams to use AI effectively and safely.",
      },
      {
        kicker: "Responsible use by default",
        title: "EU AI Act Compliance",
        description: "Governance and risk assessment aligned with the European AI Regulation.",
      },
    ],
  },

  testimonials: {
    title: "Our philosophy: ",
    titleHighlight: "Win-Win",
    subtitle: "Our strategies and our Partnership are long-term. That's why we provide a 10/10 service — because if you succeed, so do we",
  },

  stats: {
    retentionText1: "of the clients we've worked with ",
    retentionBold: "still work with us",
    retentionText2: " today",
    satisfactionText1: "is the ",
    satisfactionBold: "average satisfaction score",
    satisfactionText2: " across all our services",
  },

  technologies: {
    title: "Experts in ",
    titleHighlight: "Technology",
    carouselText: "We work with the best technologies on the market",
    categories: [
      {
        title: "Generative AI",
        items: ["AI Agents", "AI Calls", "RAG Systems"],
      },
      {
        title: "Automations",
        items: ["N8n", "PowerAutomate RPA"],
      },
      {
        title: "BI & ML",
        items: ["Power BI", "Data Studies", "Predictive Models"],
      },
      {
        title: "Software Development",
        items: ["Web Applications", "Custom Software"],
      },
    ],
  },

  cta: {
    line1: "AI is here to stay...",
    line2: "It's not a matter of if,",
    line3: "But when.",
    button: "Let's get started",
  },

  successStories: {
    title: "This could be ",
    titleHighlight: "your company",
    subtitle: "Real companies, measurable results. Discover how we transform operations with AI.",
    verCaso: "View full case study",
    verCasoCorto: "View case",
    verTodos: "View all success stories",
    items: [
      {
        industry: "Distribution",
        service: "Operational Automation with AI",
        shortTitle: "Comprehensive Operational Automation",
        challenge: "The company operated with manual processes in logistics, administration and procurement, consuming hundreds of hours and generating errors. This burden reduced efficiency and hindered operational control.",
        solution: "Unnic AI prioritized critical processes, developed automations in logistics and document validation and trained the team. Additionally, compliance with the AI Regulation was ensured.",
        results: [
          { metric: "+200h", description: "Manual work saved weekly" },
          { metric: "25%", description: "Increase in process productivity" },
          { metric: "0%", description: "Risk of AI compliance penalties" },
        ],
      },
      {
        industry: "Restaurant & Hospitality",
        service: "SaaS Platform with AI",
        shortTitle: "Operational Control with AI",
        challenge:
          "Restaurant groups with multiple locations faced the challenge of ensuring a consistent experience across all their establishments. Thousands of Google Maps reviews contained valuable information, but the volume was overwhelming and unstructured, making it impossible to detect critical issues or variations between locations without costly audits.",
        solution:
          "We designed and developed Conectap, a SaaS platform that integrates directly with Google My Business to automatically import reviews. We apply AI models for sentiment analysis and thematic classification (service, attention, atmosphere, prices, cleanliness), turning opinions into operational insights visualized in intuitive dashboards.",
        results: [
          { metric: "80%", description: "Reduction in analysis time" },
          { metric: "85%", description: "CMOs make better decisions" },
          { metric: "<48h", description: "Critical issue detection" },
        ],
      },
      {
        industry: "Construction & Distribution",
        service: "Document Automation with AI",
        shortTitle: "Automatic Document Validation",
        challenge:
          "Spanish distributor with +220 employees had to manually reconcile each invoice with its corresponding order and delivery note. This repetitive process, performed on paper or traditional tools, was error-prone, depended on constant administrative staff intervention, and any discrepancy required additional review work, increasing management times and risk of financial losses.",
        solution:
          "We developed an automatic document reader and validator with advanced OCR to digitize invoices, delivery notes, and orders. AI systems extract and structure key data (references, products, quantities, amounts, dates) and the validation engine automatically reconciles each invoice with its order and delivery note in seconds, identifying discrepancies and alerting in real time. Complete integration with ERP to feed accounting processes.",
        results: [
          { metric: "90%", description: "Reduction in reconciliation time" },
          { metric: "€8,500", description: "Estimated monthly savings" },
          { metric: "100%", description: "Document traceability" },
        ],
      },
      {
        industry: "Industrial & Manufacturing",
        service: "Strategic AI Consulting",
        shortTitle: "Industrial AI Consulting",
        challenge:
          "Spanish manufacturer of custom paints faced strong dependence on manual processes, poorly integrated technological tools, and centralization of critical knowledge in key profiles. This generated bottlenecks in product formulation, quote generation and validation, order management, and technical knowledge transfer.",
        solution:
          "Unnic AI executed strategic consulting in two phases: 1) Exhaustive analysis through interviews with all critical areas and complete process mapping; 2) Roadmap definition with four concrete solutions: internal knowledge RAG assistant, predictive formulation model, automated quote generator, and intelligent order-quote reconciliation system. Each proposal included functional architecture, technology, backlog, and estimated ROI.",
        results: [
          { metric: "+4", description: "Projects with ROI < 6 months" },
          { metric: "80%", description: "Less time searching for information" },
          { metric: "9.7/10", description: "Client rating" },
        ],
      },
      {
        industry: "HealthTech & Coaching",
        service: "Conversational AI & Voice",
        shortTitle: "AI Coaching",
        challenge:
          "The challenge was twofold: convert a complex and personal methodology into a robust conversational flow, and ensure that AI maintained the neutrality and empathy necessary for emotional well-being.",
        solution:
          "We created Vivi, a comprehensive application that combines conversational design with generative AI. We use GPT-4.1 for reasoning, Whisper for transcription, and Eleven Labs for voice, all integrated into an accessible React interface.",
        results: [
          { metric: "+200", description: "Trial sessions" },
          { metric: "70%", description: "High emotional impact" },
          { metric: "8/10", description: "NPS (Satisfaction)" },
        ],
      },
      {
        industry: "Organized Restaurants",
        service: "Predictive Purchasing Models",
        shortTitle: "Predictive Purchasing Optimization",
        challenge:
          "Chain with +50 franchises suffered from high demand variability, difficulties forecasting real consumption, and frequent overstock and stockout incidents. Purchases based on intuition generated high food waste, hidden costs, and lack of negotiating power with suppliers.",
        solution:
          "We developed a demand prediction and purchasing optimization system. Historical data audit, machine learning models (XGBoost) to forecast weekly demand by reference, ERP integration for automatic orders, and personalized dashboards for purchasing managers and franchises.",
        results: [
          { metric: "27%", description: "Less food waste" },
          { metric: "38%", description: "Fewer stock shortages" },
          { metric: "€9,000", description: "Estimated monthly savings" },
        ],
      },
    ],
  },

  faq: {
    title: "Frequently ",
    titleHighlight: "Asked Questions",
    subtitle: "We answer the most common questions about how Artificial Intelligence can transform your business. Have another question?",
    contactar: "Contact us",
    chatIA: "AI Chat",
    items: [
      {
        question: "What types of companies can benefit from AI?",
        answer: "AI is not just for big tech companies. We work with companies of 50+ employees in sectors like retail, logistics, healthcare, finance and manufacturing. If you have repetitive processes, large data volumes or need to improve decision-making, AI can transform your business.",
      },
      {
        question: "How long does it take to implement a solution?",
        answer: "It depends on the project complexity. Our 'Quick Wins' can be operational in 2-4 weeks, while deeper transformations or complex predictive models can take 3 to 6 months. We always work with incremental deliverables so you see value from the first month.",
      },
      {
        question: "Is an internal technical team necessary?",
        answer: "No. We act as your technology partner. We handle development, implementation and maintenance. However, if you have a technical team, we work closely with them to ensure effective knowledge transfer.",
      },
      {
        question: "How do you ensure data security?",
        answer: "Security is our priority. We implement solutions that comply with GDPR and European regulations. We work with isolated environments, end-to-end encryption and, when necessary, deploy local models (On-Premise) so data never leaves your infrastructure.",
      },
      {
        question: "What is the expected return on investment (ROI)?",
        answer: "Our projects are designed to have a clear and measurable ROI. Typically, our clients see 3x to 10x returns in the first year thanks to reduced operational costs, increased sales or improved employee efficiency.",
      },
    ],
  },

  contact: {
    title: "Let's talk about how AI ",
    titleHighlight: "can help you",
    subtitle: "We're ready to help you transform your business with tailored technology solutions. Tell us your ideas and we'll make them a reality.",
    form: {
      nombre: "Name",
      email: "Email",
      canal: "Channel",
      canalPlaceholder: "How did you hear about us?",
      mensaje: "Message",
      mensajePlaceholder: "Tell us more about your project...",
      enviar: "Send message",
      enviando: "Sending...",
      consentimiento: "I authorize Unnic AI to collect and process my personal data according to the",
      politicaPrivacidad: "Privacy Policy",
      consentimientoFin: ". I may revoke this consent at any time by unsubscribing from communications.",
      errorConsent: "You must accept data processing to continue",
      errorEnvio: "Error sending the message. Please try again.",
      errorConexion: "Connection error. Please try again.",
      exitoTitulo: "Message sent",
      exitoTexto: "Thank you for contacting us. We will respond as soon as possible.",
      otroMensaje: "Send another message",
      canalOptions: {
        linkedin: "LinkedIn",
        eventoPresencial: "In-person Event",
        webinar: "Webinar",
        google: "Google",
        instagram: "Instagram",
        conocido: "From a contact",
        otros: "Other",
      },
    },
    info: {
      titulo: "Contact Information",
      texto: "Have a question or want to start a project? We're here to help. Contact us through any of these channels.",
      emailLabel: "Email",
      telefonoLabel: "Phone",
      oficinaLabel: "Office",
    },
  },

  footer: {
    headline: "We improve your company's results with ",
    headlineHighlight: "Artificial Intelligence",
    empecemos: "Let's start",
    explorar: "Explore",
    legal: "Legal",
    derechos: "© 2026 Unnic AI. All rights reserved.",
    avisoLegal: "Legal Notice",
    links: {
      servicios: "Services",
      industrias: "Industries",
      casosExito: "Success Stories",
      unnickers: "Unnickers",
      recursos: "Resources",
    },
    legalLinks: {
      privacidad: "Privacy Policy",
      avisoLegal: "Legal Notice",
      cookies: "Cookie Policy",
      faq: "FAQ",
    },
  },

  cookies: {
    texto: "We use our own and third-party cookies to analyze site usage and improve our services. You can accept all cookies or only the necessary ones.",
    politica: "Cookie Policy",
    soloNecesarias: "Only necessary",
    aceptarTodas: "Accept all",
  },
} as const
