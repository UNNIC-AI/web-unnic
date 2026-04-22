import { fetchTeamSection } from "@/lib/storyblok"
import { NosotrosContent } from "./_components/nosotros-content"

export default async function NosotrosPage() {
  const sbTeamMembers = await fetchTeamSection('unnickers')
  return <NosotrosContent sbTeamMembers={sbTeamMembers} />
}
