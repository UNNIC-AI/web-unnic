import { Navigation } from "@/components/navigation"
import { CookiesContent } from "@/components/legal/cookies-content"
import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"

export const metadata: Metadata = genMeta("cookies")

export default function CookiesPage() {
  return (
    <>
      <Navigation />
      <CookiesContent />
    </>
  )
}
