"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { legalTranslations } from "@/lib/i18n/pages/legal"

export function CookiesContent() {
  const { locale } = useTranslation()
  const t = legalTranslations[locale]
  const s = t.cookiePolicy.sections

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
          {t.cookiePolicy.title}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">{t.common.lastUpdated}</p>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.whatAreCookies.heading}</h2>
            <p>{s.whatAreCookies.text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.cookiesWeUse.heading}</h2>

            <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">{s.cookiesWeUse.technical.heading}</h3>
            <p>{s.cookiesWeUse.technical.text}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.cookiesWeUse.technical.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">{s.cookiesWeUse.analytics.heading}</h3>
            <p>{s.cookiesWeUse.analytics.text}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.cookiesWeUse.analytics.items.map((item, i) => (
                <li key={i}><strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">{s.cookiesWeUse.marketing.heading}</h3>
            <p>{s.cookiesWeUse.marketing.text}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.cookiesWeUse.marketing.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.duration.heading}</h2>

            <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">{s.duration.session.heading}</h3>
            <p>{s.duration.session.text}</p>

            <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">{s.duration.persistent.heading}</h3>
            <p>{s.duration.persistent.text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.thirdParty.heading}</h2>
            <p>{s.thirdParty.intro}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>{s.thirdParty.googleAnalytics}</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#bbbd26] hover:underline">{s.thirdParty.privacyPolicy}</a></li>
              <li><strong>{s.thirdParty.linkedin}</strong> <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#bbbd26] hover:underline">{s.thirdParty.privacyPolicy}</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.management.heading}</h2>
            <p>{s.management.intro}{" "}<a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#bbbd26] hover:underline">aboutcookies.org</a>.</p>

            <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">{s.management.browserConfig.heading}</h3>
            <p>{s.management.browserConfig.text}</p>
            <ul className="list-disc pl-6 space-y-2">
              {s.management.browserConfig.items.map((item, i) => (
                <li key={i}><strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            <p className="mt-4">
              <strong>{s.management.warning.split(":")[0]}:</strong>{s.management.warning.substring(s.management.warning.indexOf(":"))}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.policyUpdate.heading}</h2>
            <p>{s.policyUpdate.text}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">{s.moreInfo.heading}</h2>
            <p>
              {s.moreInfo.text}{" "}
              <Link href="/politica-privacidad" className="text-[#bbbd26] hover:underline">{s.moreInfo.privacyLinkText}</Link>.
            </p>
            <p className="mt-4">
              {s.moreInfo.contactText}{" "}
              <a href="mailto:contacto@unnic.ai" className="text-[#bbbd26] hover:underline">contacto@unnic.ai</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
