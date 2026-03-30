"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <div className="animate-in fade-in slide-in-from-top-4 duration-700">{children}</div>
}
