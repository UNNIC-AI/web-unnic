import { fetchFormacionCatalog, fetchFormacionCategories, fetchFormacionLevels, fetchFormacionTopics } from "@/lib/storyblok"
import { FormacionCatalogoContent } from "@/components/formacion-catalogo-content"

export default async function FormacionCatalogoPage() {
  const [formacionesRaw, categories, levels, topics] = await Promise.all([
    fetchFormacionCatalog(),
    fetchFormacionCategories(),
    fetchFormacionLevels(),
    fetchFormacionTopics(),
  ])

  const catMap = new Map((categories ?? []).map((c) => [c.uuid, c]))
  const lvlMap = new Map((levels ?? []).map((l) => [l.uuid, l]))
  const topicMap = new Map((topics ?? []).map((t) => [t.uuid, t.name]))

  const formaciones = formacionesRaw?.map((f) => {
    const cat = catMap.get(f.categorySlug)
    const lvl = lvlMap.get(f.levelSlug)

    if (f.isManual) {
      return f
    }

    return {
      ...f,
      categorySlug: cat?.slug ?? f.categorySlug,
      categoryName: cat?.name ?? '',
      levelSlug: lvl?.slug ?? f.levelSlug,
      levelName: lvl?.name ?? '',
      topics: f.topics?.map((uuid) => topicMap.get(uuid) ?? uuid),
    }
  }) ?? null

  return (
    <FormacionCatalogoContent
      formaciones={formaciones}
      categories={categories}
      levels={levels}
    />
  )
}
