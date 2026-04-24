import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import { getOrganizationSchema, StructuredData } from "@/lib/structured-data"
import { fetchCompanyLogos } from "@/lib/storyblok"
import type { Metadata } from "next"

// Sections below the fold — split into separate JS chunks to reduce initial bundle
// ssr: true so the HTML arrives pre-rendered (critical for LCP)
const CompanyLogosSection   = dynamic(() => import("@/components/sections/company-logos-section").then(m => m.CompanyLogosSection))
const ServicesSection       = dynamic(() => import("@/components/sections/services-section").then(m => m.ServicesSection))
const TestimonialsSection   = dynamic(() => import("@/components/sections/testimonials-section").then(m => m.TestimonialsSection))
const TechnologiesSection   = dynamic(() => import("@/components/sections/technologies-section").then(m => m.TechnologiesSection))
const CTASection            = dynamic(() => import("@/components/sections/cta-section").then(m => m.CTASection))
const SuccessStoriesSection = dynamic(() => import("@/components/sections/success-stories-section").then(m => m.SuccessStoriesSection))
const FAQSection            = dynamic(() => import("@/components/sections/faq-section").then(m => m.FAQSection))

export const metadata: Metadata = genMeta("home")

export default async function HomePage() {
  const sbLogos = await fetchCompanyLogos('companies_home')

  return (
    <>
      <StructuredData data={getOrganizationSchema()} />
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <CompanyLogosSection logos={sbLogos} />
        <ServicesSection />
        <TestimonialsSection />
        <TechnologiesSection />
        <CTASection />
        <SuccessStoriesSection showHighlights={true} />
        <FAQSection />
      </main>
    </>
  )
}
