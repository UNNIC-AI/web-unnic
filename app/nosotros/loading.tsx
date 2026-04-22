export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-10 sm:pt-32 sm:pb-14 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
          <div className="h-5 w-32 mx-auto bg-gray-200 rounded-full animate-pulse" />
          <div className="h-12 sm:h-16 w-3/4 mx-auto bg-gray-200 rounded-xl animate-pulse" />
          <div className="h-5 w-2/3 mx-auto bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-5 w-1/2 mx-auto bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="h-10 w-24 mx-auto bg-gray-200 rounded-xl animate-pulse" />
                <div className="h-4 w-32 mx-auto bg-gray-200 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 space-y-3">
            <div className="h-9 w-48 mx-auto bg-gray-200 rounded-xl animate-pulse" />
            <div className="h-5 w-80 mx-auto bg-gray-200 rounded-lg animate-pulse" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="h-64 bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-2">
                  <div className="h-6 w-36 bg-gray-200 rounded-lg animate-pulse" />
                  <div className="h-4 w-24 bg-gray-200 rounded-lg animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
