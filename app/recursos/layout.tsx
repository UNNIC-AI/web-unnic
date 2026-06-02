import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"

export const metadata: Metadata = genMeta("recursos")

export default function RecursosLayout({ children }: { children: React.ReactNode }) {
  return children
}
