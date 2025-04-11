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
    <div className="fixed bottom-0 left-0 right-0 bg-white p-3 shadow-lg z-50 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-xs md:text-sm">Avenida 105</div>
          <div className="text-xs text-gray-600">Pré-lançamento exclusivo</div>
        </div>
        <Button
          className="bg-figueira-purple hover:bg-figueira-indigo text-white h-10 md:h-12 px-3 md:px-4 text-sm"
          asChild
        >
          <Link href="#lead-form">Ver preços e plantas</Link>
        </Button>
      </div>
    </div>
  )
}
