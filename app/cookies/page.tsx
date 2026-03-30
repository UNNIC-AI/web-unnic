import { Navigation } from "@/components/navigation"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from "next"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"

export const metadata: Metadata = genMeta("cookies")

export default function CookiesPage() {
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
            Política de Cookies
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Última actualización: Enero 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">1. ¿Qué son las Cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">2. ¿Qué Cookies Utilizamos?</h2>
              
              <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">Cookies Técnicas (Necesarias)</h3>
              <p>Son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cookies de sesión para mantener su navegación</li>
                <li>Cookies de seguridad para proteger el sitio</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">Cookies Analíticas</h3>
              <p>Nos ayudan a entender cómo los visitantes interactúan con el sitio web:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> Para análisis de tráfico y comportamiento</li>
                <li><strong>Vercel Analytics:</strong> Para métricas de rendimiento</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">Cookies de Marketing</h3>
              <p>Se utilizan para mostrar anuncios relevantes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cookies de LinkedIn para anuncios dirigidos</li>
                <li>Cookies de redes sociales para compartir contenido</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">3. Duración de las Cookies</h2>
              
              <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">Cookies de Sesión</h3>
              <p>Se eliminan automáticamente cuando cierra el navegador.</p>

              <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">Cookies Persistentes</h3>
              <p>Permanecen en su dispositivo durante un período determinado o hasta que las elimine manualmente. La duración varía según el tipo de cookie.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">4. Cookies de Terceros</h2>
              <p>Algunos servicios externos pueden instalar cookies en su dispositivo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#bbbd26] hover:underline">Política de Privacidad</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#bbbd26] hover:underline">Política de Privacidad</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">5. Cómo Gestionar las Cookies</h2>
              <p>Puede controlar y/o eliminar las cookies como desee. Para más información, visite <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#bbbd26] hover:underline">aboutcookies.org</a>.</p>
              
              <h3 className="text-xl font-semibold text-[#031d40] mt-6 mb-3">Configuración del Navegador</h3>
              <p>Puede eliminar todas las cookies de su dispositivo y configurar la mayoría de los navegadores para bloquear su instalación:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
                <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies</li>
                <li><strong>Edge:</strong> Configuración &gt; Cookies y permisos del sitio</li>
              </ul>
              <p className="mt-4">
                <strong>Nota:</strong> Si bloquea todas las cookies, algunas funciones del sitio web pueden no estar disponibles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">6. Actualización de la Política</h2>
              <p>
                Esta política de cookies puede ser actualizada periódicamente. Le recomendamos revisar esta página regularmente para estar informado sobre cómo utilizamos las cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#031d40] mt-8 mb-4">7. Más Información</h2>
              <p>
                Para más información sobre cómo tratamos sus datos personales, consulte nuestra <Link href="/politica-privacidad" className="text-[#bbbd26] hover:underline">Política de Privacidad</Link>.
              </p>
              <p className="mt-4">
                Si tiene alguna pregunta sobre esta política de cookies, puede contactarnos en <a href="mailto:contacto@unnic.ai" className="text-[#bbbd26] hover:underline">contacto@unnic.ai</a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
