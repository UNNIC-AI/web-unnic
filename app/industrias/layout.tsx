import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = genMeta("industrias")

export default function IndustriasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
