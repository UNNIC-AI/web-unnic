import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-10 sm:py-16 relative overflow-hidden bg-[#031d40]">
      {/* Grid texture overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#bbbd26 1px, transparent 1px), linear-gradient(90deg, #bbbd26 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Diagonal lines texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #bbbd26 0px, #bbbd26 1px, transparent 1px, transparent 80px)",
          }}
        />
      </div>

      {/* Yellow blurred backgrounds */}
      <div className="absolute top-10 right-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#bbbd26]/20 rounded-full blur-[100px] md:blur-[140px]" />
      <div className="absolute bottom-10 left-20 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-[#bbbd26]/15 rounded-full blur-[110px] md:blur-[160px]" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#bbbd26]/12 rounded-full blur-[130px]" />

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="max-w-5xl">
          {/* Text */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              La IA está aquí para quedarse...
              <br />
              <span className="text-white">No es cuestión de hacerlo,</span>
              <br />
              <span className="text-white">Sino de cuándo.</span>
            </h2>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6">
            {/* Primary CTA Button */}
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 bg-[#bbbd26] hover:bg-[#bbbd26]/90 hover:scale-105 text-[#031d40] font-bold shadow-2xl transition-[transform,background-color] duration-300 group w-full sm:w-auto"
              asChild
            >
              <Link href="/contacto">
                Quiero empezar
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            {/* Secondary Contact Buttons */}
            <div className="flex gap-3 sm:gap-4">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/34610757689"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title="WhatsApp"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#bbbd26] bg-transparent flex items-center justify-center hover:bg-[#bbbd26] hover:scale-110 transition-[transform,background-color] duration-300 shadow-lg">
                  <svg
                    className="w-7 h-7 text-[#bbbd26] group-hover:text-[#031d40] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </a>

              {/* Email Button */}
              <a href="mailto:contact@unnicai.com" className="group" title="Email">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#bbbd26] bg-transparent flex items-center justify-center hover:bg-[#bbbd26] hover:scale-110 transition-[transform,background-color] duration-300 shadow-lg">
                  <svg
                    className="w-7 h-7 text-[#bbbd26] group-hover:text-[#031d40] transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/company/93352502/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title="LinkedIn"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#bbbd26] bg-transparent flex items-center justify-center hover:bg-[#bbbd26] hover:scale-110 transition-[transform,background-color] duration-300 shadow-lg">
                  <svg
                    className="w-7 h-7 text-[#bbbd26] group-hover:text-[#031d40] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
