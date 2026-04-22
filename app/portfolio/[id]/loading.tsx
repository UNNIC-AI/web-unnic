export default function Loading() {
  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 mb-10 sm:mb-20">
        <div className="h-5 w-24 bg-gray-200 rounded-lg animate-pulse mb-6 sm:mb-8" />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-10 sm:mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gray-200 animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 w-24 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 w-32 bg-gray-200 rounded-lg animate-pulse" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-12 sm:h-16 w-3/4 bg-gray-200 rounded-xl animate-pulse" />
              <div className="h-6 w-full bg-gray-200 rounded-lg animate-pulse" />
              <div className="h-6 w-2/3 bg-gray-200 rounded-lg animate-pulse" />
            </div>
            <div className="bg-gray-100 p-6 rounded-xl h-28 animate-pulse" />
          </div>
          <div className="h-[280px] sm:h-[400px] lg:h-[550px] rounded-2xl sm:rounded-3xl bg-gray-200 animate-pulse" />
        </div>
      </div>

      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 space-y-3">
              <div className="h-9 w-64 mx-auto bg-gray-200 rounded-xl animate-pulse" />
              <div className="h-5 w-96 mx-auto bg-gray-200 rounded-lg animate-pulse" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white rounded-3xl h-48 animate-pulse" />
              <div className="bg-white rounded-3xl h-48 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 sm:mt-24">
        <div className="text-center mb-10 space-y-3">
          <div className="h-9 w-48 mx-auto bg-gray-200 rounded-xl animate-pulse" />
          <div className="h-5 w-80 mx-auto bg-gray-200 rounded-lg animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-2xl h-32 bg-gray-200 animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
