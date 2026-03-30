import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = genMeta("consultoria")

export default function ConsultoriaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
