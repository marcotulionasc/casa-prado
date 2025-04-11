"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible || !isMobile) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-3 shadow-lg z-50 border-t border-gray-200 flex items-center justify-center">
      <Button
      className="bg-figueira-purple hover:bg-figueira-indigo text-white text-sm h-10 w-220"
      asChild
      >
      <Link href="#lead-form">Ver preços e plantas</Link>
      </Button>
    </div>
  )
}
