"use client"

import Image from "next/image"
import { companies } from "@/lib/data"
import { useTranslation } from "@/lib/i18n"
import type { SBCompanyLogo } from "@/lib/storyblok.types"

type Props = {
  logos?: SBCompanyLogo[] | null
}

export function CompanyLogosSection({ logos }: Props) {
  const { t } = useTranslation()

  const displayCompanies = logos
    ? logos.map((l) => ({ name: l.name, src: l.image.filename }))
    : companies

  const duplicatedCompanies = [...displayCompanies, ...displayCompanies]

  return (
    <section className="py-8 sm:py-11 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 font-medium text-base sm:text-lg mb-6 sm:mb-10">
          {t.companyLogos.subtitle}
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max gap-4 sm:gap-8 animate-scroll-logos-responsive">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[100px] sm:min-w-[200px]"
              >
                <div className="relative h-10 w-[90px] sm:h-20 sm:w-[180px]">
                  <Image
                    src={company.src || "/placeholder.svg"}
                    alt={company.name}
                    fill
                    sizes="180px"
                    className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
