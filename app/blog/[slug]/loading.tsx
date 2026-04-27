import { Navigation } from "@/components/navigation"

export default function BlogPostLoading() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 pb-16">
        <div className="h-[50vh] min-h-[400px] bg-gray-200 animate-pulse" />
        <div className="container mx-auto px-4 max-w-3xl mt-8">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-6" />
          <div className="h-5 w-20 bg-gray-200 rounded-full animate-pulse mb-4" />
          <div className="h-12 w-full bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-6" />
          <div className="flex gap-6 mb-8 pb-8 border-b border-gray-100">
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
          </div>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-4 w-full bg-gray-200 rounded animate-pulse mb-3" />
          ))}
        </div>
      </main>
    </>
  )
}
