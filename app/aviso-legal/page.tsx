import { Navigation } from "@/components/navigation"
import { LegalNoticeContent } from "@/components/legal/legal-notice-content"
import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"

export const metadata: Metadata = genMeta("avisoLegal")

export default function AvisoLegalPage() {
  return (
    <>
      <Navigation />
      <LegalNoticeContent />
    </>
  )
}
