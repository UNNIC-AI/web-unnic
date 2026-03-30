"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { legalTranslations } from "@/lib/i18n/pages/legal"

export function PrivacyContent() {
  const { locale } = useTranslation()
  const t = legalTranslations[locale]
  const s = t.privacy.sections

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
          {t.privacy.title}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">{t.common.lastUpdated}</p>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.dataController.heading}</h2>
            <p>
              <strong>Unnic AI HUB SL</strong> {s.dataController.text.replace("Unnic AI HUB SL ", "")}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Email:</strong> {s.dataController.email}</li>
              <li><strong>{locale === "es" ? "Teléfono" : "Phone"}:</strong> {s.dataController.phone}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.dataCollected.heading}</h2>
            <p>{s.dataCollected.intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.dataCollected.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.purpose.heading}</h2>
            <p>{s.purpose.intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.purpose.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.legalBasis.heading}</h2>
            <p>{s.legalBasis.intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.legalBasis.items.map((item, i) => (
                <li key={i}><strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.dataRetention.heading}</h2>
            <p>{s.dataRetention.text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.dataRecipients.heading}</h2>
            <p>{s.dataRecipients.intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.dataRecipients.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">{s.dataRecipients.noSale}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.rights.heading}</h2>
            <p>{s.rights.intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.rights.items.map((item, i) => (
                <li key={i}><strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            <p className="mt-4">
              {s.rights.contact}{" "}
              <a href="mailto:contacto@unnic.ai" className="text-[#bbbd26] hover:underline">contacto@unnic.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.security.heading}</h2>
            <p>{s.security.text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.cookies.heading}</h2>
            <p>
              {s.cookies.text}{" "}
              <Link href="/cookies" className="text-[#bbbd26] hover:underline">{s.cookies.linkText}</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.complaints.heading}</h2>
            <p>
              {s.complaints.text}{" "}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#bbbd26] hover:underline">www.aepd.es</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.modifications.heading}</h2>
            <p>{s.modifications.text}</p>
          </section>
        </div>
      </div>
    </main>
  )
}
