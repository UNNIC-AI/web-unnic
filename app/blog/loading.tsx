import { Navigation } from "@/components/navigation"

export default function BlogLoading() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-14 w-80 bg-gray-200 rounded-xl mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-96 bg-gray-200 rounded-lg mx-auto animate-pulse" />
          </div>
          <div className="h-[480px] w-full bg-gray-200 rounded-3xl mb-8 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200 animate-pulse" />
                <div className="p-6 space-y-3">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
