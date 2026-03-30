import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"

export const metadata: Metadata = genMeta("politicaPrivacidad")

export default function PoliticaPrivacidadPage() {
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
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Última actualización: Enero 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">1. Responsable del Tratamiento</h2>
              <p>
                <strong>Unnic AI HUB SL</strong> (en adelante, "Unnic AI") con domicilio social en Carrer de Gomis 34, 08023 Barcelona, es la responsable del tratamiento de los datos personales que nos facilite.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> contacto@unnic.ai</li>
                <li><strong>Teléfono:</strong> +34 685 756 630</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">2. Datos que Recopilamos</h2>
              <p>Podemos recopilar y procesar los siguientes datos personales:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Datos de identificación: nombre, apellidos, email, teléfono</li>
                <li>Datos de la empresa: nombre de la empresa, cargo, sector</li>
                <li>Datos de navegación: dirección IP, cookies, datos de uso del sitio web</li>
                <li>Datos proporcionados en formularios de contacto y consultas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">3. Finalidad del Tratamiento</h2>
              <p>Utilizamos sus datos personales para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder a sus consultas y solicitudes de información</li>
                <li>Proporcionar nuestros servicios de inteligencia artificial</li>
                <li>Enviar comunicaciones comerciales sobre nuestros productos y servicios</li>
                <li>Mejorar la experiencia de usuario en nuestro sitio web</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">4. Base Legal</h2>
              <p>El tratamiento de sus datos se basa en:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consentimiento:</strong> Al proporcionar sus datos a través de formularios</li>
                <li><strong>Ejecución de contrato:</strong> Para prestar los servicios solicitados</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicaciones comerciales</li>
                <li><strong>Obligación legal:</strong> Para cumplir con requisitos legales aplicables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">5. Conservación de Datos</h2>
              <p>
                Conservaremos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas, y posteriormente durante los plazos legales de prescripción aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">6. Destinatarios de los Datos</h2>
              <p>Sus datos pueden ser comunicados a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proveedores de servicios tecnológicos (hosting, email, CRM)</li>
                <li>Asesores legales y fiscales</li>
                <li>Autoridades públicas cuando sea legalmente requerido</li>
              </ul>
              <p className="mt-4">No vendemos ni cedemos sus datos a terceros con fines comerciales.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">7. Sus Derechos</h2>
              <p>Tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Revocar consentimiento:</strong> Retirar el consentimiento en cualquier momento</li>
              </ul>
              <p className="mt-4">
                Para ejercer sus derechos, puede contactarnos en <a href="mailto:contacto@unnic.ai" className="text-[#bbbd26] hover:underline">contacto@unnic.ai</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">8. Seguridad</h2>
              <p>
                Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la destrucción accidental.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">9. Cookies</h2>
              <p>
                Utilizamos cookies para mejorar la experiencia del usuario. Para más información, consulte nuestra <Link href="/cookies" className="text-[#bbbd26] hover:underline">Política de Cookies</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">10. Reclamaciones</h2>
              <p>
                Si considera que sus derechos no han sido atendidos adecuadamente, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-[#bbbd26] hover:underline">www.aepd.es</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">11. Modificaciones</h2>
              <p>
                Nos reservamos el derecho a modificar esta política de privacidad. Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
