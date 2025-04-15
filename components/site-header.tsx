"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Building } from "lucide-react"

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2 md:py-3" : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Building className="h-5 w-5 md:h-6 md:w-6 text-figueira-purple" /> */}
            <img src="/logo-metropole.png" alt="Logo" className="h-8 w-auto rounded-lg" /> 
            <span className="text-black font-bold text-base md:text-lg">|</span>
            <span className="text-black font-bold text-base md:text-lg">Avenida 105</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#projeto" className="text-sm font-medium hover:text-figueira-purple transition-colors">
              O Projeto
            </Link>
            <Link href="#localizacao" className="text-sm font-medium hover:text-figueira-purple transition-colors">
              Localização
            </Link>
            <Link href="#diferenciais" className="text-sm font-medium hover:text-figueira-purple transition-colors">
              Diferenciais
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-figueira-purple transition-colors">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
