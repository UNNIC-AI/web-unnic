/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Rutas de idioma antiguas
      { source: '/es/:path*', destination: '/:path*', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      { source: '/ca/:path*', destination: '/:path*', permanent: true },

      // Case studies → portfolio
      { source: '/case-studies/:slug', destination: '/portfolio/:slug', permanent: true },

      // Discover → blog/recursos
      { source: '/discover/whats-new', destination: '/blog', permanent: true },
      { source: '/discover/getting-started', destination: '/recursos', permanent: true },
      { source: '/discover/other-industries', destination: '/industrias', permanent: true },
      { source: '/discover/:slug', destination: '/blog', permanent: true },
      { source: '/discover', destination: '/blog', permanent: true },

      // Páginas renombradas
      { source: '/soluciones', destination: '/servicios', permanent: true },
      { source: '/terminos-y-condiciones', destination: '/aviso-legal', permanent: true },
      { source: '/politica-de-privacidad', destination: '/politica-privacidad', permanent: true },

      // Posts del blog antiguo
      { source: '/la-inteligencia-artificial-en-la-medicina', destination: '/blog', permanent: true },
      { source: '/la-inteligencia-artificial-en-la-medicina/', destination: '/blog', permanent: true },
      { source: '/la-inteligencia-artificial-es-peligrosa', destination: '/blog', permanent: true },
      { source: '/la-inteligencia-artificial-es-peligrosa/', destination: '/blog', permanent: true },
      { source: '/asistente-virtual', destination: '/servicios/ia-generativa', permanent: true },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
