import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = genMeta("nosotros")

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
