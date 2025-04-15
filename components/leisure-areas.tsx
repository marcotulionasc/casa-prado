"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const leisureAreas = [
  { id: 1, name: "Academia Externa", image: "/area-lazer/Academia Externa.webp" },
  { id: 2, name: "Academia", image: "/area-lazer/Academia.webp" },
  { id: 3, name: "Arena de Areia", image: "/area-lazer/Arena de Areia.webp" },
  { id: 4, name: "Bicicletário", image: "/area-lazer/Bicicletário.webp" },
  { id: 5, name: "Brinquedoteca", image: "/area-lazer/Academia Externa.webp" },
  { id: 6, name: "Estares", image: "/area-lazer/Brinquedoteca.webp" },
  { id: 7, name: "Casa de Festas", image: "/area-lazer/Casa de Festas.webp" },
  { id: 8, name: "Floresta de bolso", image: "/area-lazer/Academia Externa.webp" },
  { id: 9, name: "Cobertura Duplex 1", image: "/area-lazer/Cobertura Duplex 1.webp" },
  { id: 10, name: "Cobertura Duplex 2", image: "/area-lazer/Cobertura Duplex 2.webp" },
  { id: 11, name: "Coworking 1", image: "/area-lazer/Coworking 1.webp" },
  { id: 12, name: "Coworking 2", image: "/area-lazer/Coworking 2.webp" },
  { id: 13, name: "Entrada das Jabuticabeiras", image: "/area-lazer/Entrada das Jabuticabeiras.webp" },
  { id: 14, name: "Espaço Gourmet 1", image: "/area-lazer/Espaço Gourmet 1.webp" },
  { id: 15, name: "Espaço Gourmet 2", image: "/area-lazer/Espaço Gourmet 2.webp" },
  { id: 16, name: "Espaço Pet", image: "/area-lazer/Espaço Pet.webp" },
  { id: 17, name: "Estacionamento", image: "/area-lazer/Estacionamento.webp" },
  { id: 18, name: "Estares", image: "/area-lazer/Estares.webp" },
  { id: 19, name: "Fachada 1", image: "/area-lazer/Fachada 1.webp" },
  { id: 20, name: "Fachada 2", image: "/area-lazer/Fachada 2.webp" },
  { id: 21, name: "Floresta de Bolso", image: "/area-lazer/Floresta de Bolso.webp" },
  { id: 22, name: "Fogueira", image: "/area-lazer/Fogueira.webp" },
  { id: 23, name: "Parquinho Naturalizado 1", image: "/area-lazer/Parquinho Naturalizado 1.webp" },
  { id: 24, name: "Parquinho Naturalizado 2", image: "/area-lazer/Parquinho Naturalizado 2.webp" },
  { id: 25, name: "Pilates", image: "/area-lazer/Pilates.webp" },
  { id: 26, name: "Piscina 1", image: "/area-lazer/Piscina 1.webp" },
  { id: 27, name: "Piscina 2", image: "/area-lazer/Piscina 2.webp" },
  { id: 28, name: "Praça Gramada", image: "/area-lazer/Praça Gramada.webp" },
  { id: 29, name: "Praça Molhada", image: "/area-lazer/Praça Molhada.webp" },
  { id: 30, name: "Sala de Estar", image: "/area-lazer/Sala de Estar.webp" },
  { id: 31, name: "Sala de Jantar", image: "/area-lazer/Sala de Jantar.webp" },
  { id: 32, name: "Sala de Gaming", image: "/area-lazer/Sala Gaming.webp" },
  { id: 33, name: "Sala de Jogos", image: "/area-lazer/Sala de Jogos.webp" },
  { id: 34, name: "Suite Master", image: "/area-lazer/Suíte Master.webp" },
  { id: 35, name: "Yoga", image: "/area-lazer/Yoga.webp" },
]

export default function LeisureAreas() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6
  const totalPages = Math.ceil(leisureAreas.length / itemsPerPage)
  const currentItems = leisureAreas.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  function nextPage() {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  function prevPage() {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Áreas de Lazer e Convivência
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O Avenida 105 oferece mais de 20 opções de lazer e convivência para todos os momentos
          </p>
        </div>

        {/* Imagem principal sem placeholder e sem aspect-ratio forçada */}
        <div className="mb-12">
          <div className="rounded-xl overflow-hidden">
            <div className="relative w-full h-auto">
              <Image
                src="/images/planta-geral-lazer.webp"
                alt="Planta geral das áreas de lazer"
                width={1200}
                height={600}
                className="object-contain w-full h-auto"
                // Desabilita a otimização do Next caso queira evitar reprocessamento:
                // unoptimized
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Conheça cada espaço</h3>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentItems.map((area) => (
              <div
                key={area.id}
                className="relative w-full h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover"

                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center">
                  <div className="bg-figueira-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                    {area.id}
                  </div>
                  <h4 className="text-white font-medium">{area.name}</h4>
                </div>
              </div>
            ))}
          </div>

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
