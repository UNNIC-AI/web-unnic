import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"

export const metadata: Metadata = genMeta("avisoLegal")

export default function AvisoLegalPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#031d40] hover:text-[#bbbd26] transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#031d40] mb-6 sm:mb-8">
            Aviso Legal
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Última actualización: Enero 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">1. Información General</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de los datos del titular del sitio web:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Denominación social:</strong> Unnic AI HUB SL</li>
                <li><strong>Domicilio social:</strong> Carrer de Gomis 34, 08023 Barcelona</li>
                <li><strong>Email:</strong> contacto@unnic.ai</li>
                <li><strong>Teléfono:</strong> +34 610 757 689</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">2. Objeto</h2>
              <p>
                El presente aviso legal regula el uso del sitio web de Unnic AI HUB SL (en adelante, "el sitio web"). El acceso y uso del sitio web implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este aviso legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">3. Condiciones de Uso</h2>
              <p>El usuario se compromete a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hacer un uso adecuado y lícito del sitio web</li>
                <li>No utilizar el sitio web para fines ilegales o contrarios a la buena fe</li>
                <li>No introducir virus, malware o cualquier código dañino</li>
                <li>No realizar acciones que puedan dañar, inutilizar o sobrecargar el sitio web</li>
                <li>No suplantar la identidad de otro usuario</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">4. Propiedad Intelectual e Industrial</h2>
              <p>
                Todos los contenidos del sitio web, incluyendo pero no limitado a textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Unnic AI HUB SL o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos.
              </p>
              <p className="mt-4">
                Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier contenido sin la autorización expresa del titular.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">5. Exclusión de Garantías y Responsabilidad</h2>
              <p>Unnic AI HUB SL no se hace responsable de:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La disponibilidad continua e ininterrumpida del sitio web</li>
                <li>Los errores o inexactitudes en los contenidos</li>
                <li>Los daños causados por virus o malware</li>
                <li>El uso ilícito o contrario a este aviso legal por parte de los usuarios</li>
                <li>Los contenidos de sitios web de terceros enlazados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">6. Enlaces Externos</h2>
              <p>
                El sitio web puede contener enlaces a sitios web de terceros. Unnic AI HUB SL no controla ni se hace responsable del contenido de dichos sitios web. El acceso a estos sitios es responsabilidad exclusiva del usuario.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">7. Protección de Datos</h2>
              <p>
                Para información sobre el tratamiento de datos personales, consulte nuestra <Link href="/politica-privacidad" className="text-[#bbbd26] hover:underline">Política de Privacidad</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">8. Modificaciones</h2>
              <p>
                Unnic AI HUB SL se reserva el derecho a modificar el presente aviso legal en cualquier momento. Los cambios serán efectivos desde su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">9. Legislación Aplicable y Jurisdicción</h2>
              <p>
                El presente aviso legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Barcelona, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">10. Contacto</h2>
              <p>
                Para cualquier consulta relacionada con este aviso legal, puede contactarnos en:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li><strong>Email:</strong> <a href="mailto:contacto@unnic.ai" className="text-[#bbbd26] hover:underline">contacto@unnic.ai</a></li>
                <li><strong>Teléfono:</strong> <a href="tel:+34610757689" className="text-[#bbbd26] hover:underline">+34 610 757 689</a></li>
                <li><strong>Dirección:</strong> Carrer de Gomis 34, 08023 Barcelona</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
