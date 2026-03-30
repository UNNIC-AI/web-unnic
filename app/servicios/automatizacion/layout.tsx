import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = genMeta("automatizacion")

export default function AutomatizacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
