import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = genMeta("servicios")

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
