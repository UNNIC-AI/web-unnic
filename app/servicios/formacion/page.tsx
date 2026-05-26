import { fetchFormacionKPIs } from "@/lib/storyblok"
import { FormacionContent } from "@/components/formacion-content"

export default async function FormacionPage() {
  const kpis = await fetchFormacionKPIs()
  return <FormacionContent kpis={kpis} />
}
