import { Navigation } from "@/components/navigation"
import { PrivacyContent } from "@/components/legal/privacy-content"
import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"

export const metadata: Metadata = genMeta("politicaPrivacidad")

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Navigation />
      <PrivacyContent />
    </>
  )
}
