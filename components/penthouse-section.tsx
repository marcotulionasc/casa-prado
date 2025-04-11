"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function PenthouseSection() {
  const penthouses = [
    {
      id: "duplex-a",
      title: "Cobertura Duplex A",
      description: "Cobertura duplex com terraço e piscina privativa",
      features: [
        "245 m² de área total",
        "220 m² de área privativa + 25 m² de terraço",
        "4 suítes com closet",
        "Piscina privativa com deck",
        "Terraço gourmet integrado",
        "4 vagas na garagem",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "duplex-b",
      title: "Cobertura Duplex B",
      description: "Cobertura duplex com terraço panorâmico",
      features: [
        "280 m² de área total",
        "250 m² de área privativa + 30 m² de terraço",
        "4 suítes com closet",
        "Spa privativo com vista panorâmica",
        "Espaço gourmet com churrasqueira",
        "4 vagas na garagem",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Coberturas Exclusivas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossas coberturas duplex com terraço privativo e vista panorâmica de Campinas
          </p>
        </div>

        {/* Imagem de destaque da cobertura */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/cobertura-terraco.png"
            alt="Terraço exclusivo das coberturas com piscina privativa e vista panorâmica"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
            <div className="container p-6 md:p-8">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Terraço privativo com piscina</h3>
              <p className="text-white/90 max-w-md">
                Desfrute de momentos únicos em seu próprio oásis particular com vista panorâmica da cidade
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="duplex-a" className="w-full">
          <TabsList className="flex flex-wrap w-full mb-6 md:mb-8 overflow-x-auto tabs-list">
            {penthouses.map((penthouse) => (
              <TabsTrigger
                key={penthouse.id}
                value={penthouse.id}
                className="flex-1 py-3 px-2 md:py-2 md:px-3 text-xs md:text-sm whitespace-nowrap min-w-[120px] h-auto"
              >
                {penthouse.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {penthouses.map((penthouse) => (
            <TabsContent key={penthouse.id} value={penthouse.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-white">
                  <Image
                    src={penthouse.image || "/placeholder.svg"}
                    alt={`${penthouse.title} - Avenida 105 Figueira`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">{penthouse.title}</h3>
                    <p className="text-gray-600">{penthouse.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {penthouse.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-figueira-purple font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <p className="text-figueira-purple font-bold mb-2">Exclusividade e sofisticação</p>
                    <p className="text-gray-600 mb-4">
                      Nossas coberturas oferecem o máximo em privacidade e conforto, com acabamentos premium e vista
                      privilegiada da cidade. Apenas 8 unidades disponíveis.
                    </p>
                    <Button className="w-full md:w-auto bg-figueira-purple hover:bg-figueira-indigo text-white text-sm md:text-base py-3 px-4">
                      Solicitar informações e valores
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Receba detalhes completos, incluindo tour virtual 360° e tabela de preços
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
