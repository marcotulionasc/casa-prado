"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function LeisureAreas() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  const leisureAreas = [
    { id: 1, name: "Piscina Adulto", image: "/placeholder.svg?height=300&width=500" },
    { id: 2, name: "Piscina Infantil", image: "/placeholder.svg?height=300&width=500" },
    { id: 3, name: "Praça molhada", image: "/placeholder.svg?height=300&width=500" },
    { id: 4, name: "Casa de festas", image: "/placeholder.svg?height=300&width=500" },
    { id: 5, name: "Sauna", image: "/placeholder.svg?height=300&width=500" },
    { id: 6, name: "Estares", image: "/placeholder.svg?height=300&width=500" },
    { id: 7, name: "Parquinho Naturalizado", image: "/placeholder.svg?height=300&width=500" },
    { id: 8, name: "Floresta de bolso", image: "/placeholder.svg?height=300&width=500" },
    { id: 9, name: "Espaço Pet", image: "/placeholder.svg?height=300&width=500" },
    { id: 10, name: "Redários", image: "/placeholder.svg?height=300&width=500" },
    { id: 11, name: "Arena de areia", image: "/placeholder.svg?height=300&width=500" },
    { id: 12, name: "Lounge praia", image: "/placeholder.svg?height=300&width=500" },
    { id: 13, name: "Academia Externa", image: "/placeholder.svg?height=300&width=500" },
    { id: 14, name: "Praça gramada", image: "/placeholder.svg?height=300&width=500" },
    { id: 15, name: "Horta", image: "/placeholder.svg?height=300&width=500" },
    { id: 16, name: "Fogueira", image: "/placeholder.svg?height=300&width=500" },
    { id: 17, name: "Academia", image: "/placeholder.svg?height=300&width=500" },
    { id: 18, name: "Yoga", image: "/placeholder.svg?height=300&width=500" },
    { id: 19, name: "Pilates", image: "/placeholder.svg?height=300&width=500" },
    { id: 20, name: "Brinquedoteca", image: "/placeholder.svg?height=300&width=500" },
    { id: 21, name: "Coworking", image: "/placeholder.svg?height=300&width=500" },
    { id: 22, name: "Sala de jogos", image: "/placeholder.svg?height=300&width=500" },
    { id: 23, name: "Sala Gaming", image: "/placeholder.svg?height=300&width=500" },
    { id: 24, name: "Espaço Gourmet", image: "/placeholder.svg?height=300&width=500" },
  ]

  const totalPages = Math.ceil(leisureAreas.length / itemsPerPage)
  const currentItems = leisureAreas.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Áreas de Lazer e Convivência</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O Avenida 105 oferece mais de 20 opções de lazer e convivência para todos os momentos
          </p>
        </div>

        <div className="mb-12">
          <div className="relative rounded-xl overflow-hidden">
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
              <Image
                src="/images/planta-geral-lazer.png"
                alt="Planta geral das áreas de lazer"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Conheça cada espaço</h3>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentItems.map((area) => (
              <div key={area.id} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src={area.image || "/placeholder.svg"} alt={area.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center">
                    <div className="bg-figueira-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                      {area.id}
                    </div>
                    <h4 className="text-white font-medium">{area.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de paginação */}
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
      </div>
    </section>
  )
}
