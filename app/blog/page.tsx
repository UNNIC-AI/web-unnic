import { Navigation } from "@/components/navigation"
import { fetchBlogPosts } from "@/lib/storyblok"
import { BlogListContent } from "./_components/blog-list-content"
import { generateMetadata as genMeta } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = genMeta("blog")

export default async function BlogPage() {
  const posts = await fetchBlogPosts()
  return (
    <>
      <Navigation />
      <BlogListContent posts={posts} />
    </>
  )
}
