import { fetchPortfolioCases } from "@/lib/storyblok"
import { PortfolioContent } from "./_components/portfolio-content"

export default async function PortfolioPage() {
  const sbCases = await fetchPortfolioCases()
  return <PortfolioContent sbCases={sbCases} />
}
