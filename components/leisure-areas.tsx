"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { leisureAreas } from "./leisure-areas-data"

import LeisureAreasHero from "./leisure-areas-hero"
import LeisureAreasGrid from "./leisure-areas-grid"

export default function LeisureAreas() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 9
  const totalPages = Math.ceil(leisureAreas.length / itemsPerPage)

  const currentItems = leisureAreas.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  function nextPage() {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  function prevPage() {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 mx-auto">

        {/* Hero + imagem principal */}
        <LeisureAreasHero />

        {/* Grid de itens */}
        <LeisureAreasGrid areas={currentItems} />

        {/* Paginação */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevPage}
            className="rounded-full"
            aria-label="Página anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="text-sm">
            Página {currentPage + 1} de {totalPages}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            className="rounded-full"
            aria-label="Próxima página"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
