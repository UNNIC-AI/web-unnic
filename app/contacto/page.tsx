import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/sections/contact-section"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = genMeta("contacto")

export default function ContactoPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <ContactSection />
      </main>
    </>
  )
}
