import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = genMeta("portfolio")

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
