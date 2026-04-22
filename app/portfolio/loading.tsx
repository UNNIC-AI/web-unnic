export default function Loading() {
  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gray-50">
      <div className="container mx-auto px-4 mb-12 sm:mb-20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="h-12 sm:h-16 w-2/3 mx-auto bg-gray-200 rounded-xl animate-pulse" />
          <div className="h-5 w-3/4 mx-auto bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-5 w-1/2 mx-auto bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="h-64 bg-gray-200 animate-pulse" />
              <div className="p-6 flex-1 flex flex-col gap-3">
                <div className="h-4 w-20 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-7 w-3/4 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-4 w-1/2 bg-gray-200 rounded-lg animate-pulse" />
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="h-4 w-24 bg-gray-200 rounded-lg animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
