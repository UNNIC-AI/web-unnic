"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { legalTranslations } from "@/lib/i18n/pages/legal"

export function LegalNoticeContent() {
  const { locale } = useTranslation()
  const t = legalTranslations[locale]
  const s = t.legalNotice.sections

  return (
    <main className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#031d40] hover:text-[#bbbd26] transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.common.backToHome}
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031d40] mb-6 sm:mb-8">
          {t.legalNotice.title}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">{t.common.lastUpdated}</p>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.generalInfo.heading}</h2>
            <p>{s.generalInfo.text}</p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>{s.generalInfo.companyName}</strong> {s.generalInfo.companyNameValue}</li>
              <li><strong>{s.generalInfo.address}</strong> {s.generalInfo.addressValue}</li>
              <li><strong>{s.generalInfo.email}</strong> {s.generalInfo.emailValue}</li>
              <li><strong>{s.generalInfo.phone}</strong> {s.generalInfo.phoneValue}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.purpose.heading}</h2>
            <p>{s.purpose.text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.termsOfUse.heading}</h2>
            <p>{s.termsOfUse.intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.termsOfUse.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.intellectualProperty.heading}</h2>
            <p>{s.intellectualProperty.text1}</p>
            <p className="mt-4">{s.intellectualProperty.text2}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.disclaimer.heading}</h2>
            <p>{s.disclaimer.intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.disclaimer.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.externalLinks.heading}</h2>
            <p>{s.externalLinks.text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.dataProtection.heading}</h2>
            <p>
              {s.dataProtection.text}{" "}
              <Link href="/politica-privacidad" className="text-[#bbbd26] hover:underline">{s.dataProtection.linkText}</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.modifications.heading}</h2>
            <p>{s.modifications.text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.jurisdiction.heading}</h2>
            <p>{s.jurisdiction.text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.contact.heading}</h2>
            <p>{s.contact.intro}</p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>{s.contact.email}</strong> <a href="mailto:contacto@unnic.ai" className="text-[#bbbd26] hover:underline">contacto@unnic.ai</a></li>
              <li><strong>{s.contact.phone}</strong> <a href="tel:+34610757689" className="text-[#bbbd26] hover:underline">{s.contact.phoneValue}</a></li>
              <li><strong>{s.contact.addressLabel}</strong> {s.contact.addressValue}</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
