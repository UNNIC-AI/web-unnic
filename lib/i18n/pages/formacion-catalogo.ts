import { title } from "process"

const es = {
  hero: {
    badge: "Subvencionable FUNDAE",
    titlePrefix: "Catálogo de ",
    titleHighlight: "Formaciones IA",
    subtitle: "Forma a tu equipo con las herramientas de IA más utilizadas.\nFormadores que trabajan con IA en proyectos reales, cada día.",
  },
  kpis: {
    formaciones: "Formaciones",
    horasTotales: "Horas totales",
    subvencionable: "Subvencionable",
  },
  custom_training:{
    duration:"Duración flexible",
    consult:"Consultar",
  },
  filters: {
    areaLabel: "Área",
    allAreas: "Todos",
    durationLabel: "Dur.",
    allDurations: "Todas",
    levelLabel: "Nivel",
    allLevels: "Todos",
    searchPlaceholder: "Buscar formación...",
    button: "Filtros",
    clear: "Limpiar",
  },
  results: (count: number, hours: number) => `${count} formaciones · ${hours} horas`,
  empty: "No se encontraron formaciones con los filtros seleccionados.",
  viewFormacion: "Ver formación",
  modal: {
    contents: "Contenidos",
    requestTraining: "Solicitar formación",
    fundable:{
      title:"Subvencionable FUNDAE",
      text:"Esta formación puede financiarse a través de FUNDAE"
    }
  },
}

const en = {
  hero: {
    badge: "FUNDAE Subsidized",
    titlePrefix: "AI Training ",
    titleHighlight: "Catalog",
    subtitle: "Train your team with the most widely used AI tools.\nTrainers who work with AI on real projects, every day.",
  },
  kpis: {
    formaciones: "Trainings",
    horasTotales: "Total hours",
    subvencionable: "Subsidizable",
  },
  custom_training:{
    duration:"Flexible duration",
    consult:"Consult",
  },
  filters: {
    areaLabel: "Area",
    allAreas: "All",
    durationLabel: "Dur.",
    allDurations: "All",
    levelLabel: "Level",
    allLevels: "All",
    searchPlaceholder: "Search training...",
    button: "Filters",
    clear: "Clear",
  },
  results: (count: number, hours: number) => `${count} trainings · ${hours} hours`,
  empty: "No trainings found with the selected filters.",
  viewFormacion: "View training",
  modal: {
    contents: "Contents",
    requestTraining: "Request training",
    fundable:{
      title:"FUNDAE eligible for funding",
      text:"This training can be financed through FUNDAE"
    }
  },
}

const ca = {
  hero: {
    badge: "Subvencionable FUNDAE",
    titlePrefix: "Catàleg de ",
    titleHighlight: "Formacions IA",
    subtitle: "Forma el teu equip amb les eines d'IA més utilitzades.\nFormadors que treballen amb IA en projectes reals, cada dia.",
  },
  kpis: {
    formaciones: "Formacions",
    horasTotales: "Hores totals",
    subvencionable: "Subvencionable",
  },
  custom_training:{
    duration:"Durada flexible",
    consult:"Consultar",
  },
  filters: {
    areaLabel: "Àrea",
    allAreas: "Tots",
    durationLabel: "Dur.",
    allDurations: "Totes",
    levelLabel: "Nivell",
    allLevels: "Tots",
    searchPlaceholder: "Buscar formació...",
    button: "Filtres",
    clear: "Netejar",
  },
  results: (count: number, hours: number) => `${count} formacions · ${hours} hores`,
  empty: "No s'han trobat formacions amb els filtres seleccionats.",
  viewFormacion: "Veure formació",
  modal: {
    contents: "Continguts",
    requestTraining: "Sol·licitar formació",
    fundable:{
      title:"Subvencionable FUNDAE",
      text:"Aquesta formació es pot finançar a través de FUNDAE"
    }
  },
}

export const formacionCatalogoTranslations = { es, en, ca }
