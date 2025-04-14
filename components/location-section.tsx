"use client"

import Image from "next/image"
import { useState } from "react"

export default function LocationSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      style={{
        height: "min(70vh, 600px)",
        maxHeight: "600px",
      }}
    >
      <Image
        src="/images/avenida105.png"
        alt="Vista aérea do Avenida 105 Casa Figueira"
        fill
        className={`object-cover object-center transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoadingComplete={() => setIsLoaded(true)}
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
        <div className="container px-4 pb-6 md:pb-8">
          <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2">Avenida 105 Casa Figueira</h3>
          <p className="text-white/90 max-w-md text-sm md:text-base">
            Localização privilegiada ao lado do Shopping Iguatemi Campinas, com vista panorâmica da cidade
          </p>
        </div>
      </div>
    </div>
  )
}
