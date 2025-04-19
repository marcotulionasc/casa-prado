"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function ApartmentPlans() {
  const plans = [
    {
      id: "tipo-a",
      title: "Planta Tipo A",
      description: "4 suítes com varanda e closet",
      features: [
        "154 m² de área total",
        "150,8 m² de área privativa",
        "Pé-direito de 3,2m",
        "Suíte master com closet",
        "Varanda gourmet integrada",
        "3 vagas na garagem",
      ],
      image: "/images/planta-a.webp",
    },
    {
      id: "tipo-b",
      title: "Planta Tipo B",
      description: "3 suítes com home theater",
      features: [
        "158 m² de área total",
        "154,3 m² de apartamento + 3,2 m² de depósito",
        "Closet ampliado",
        "Home theater",
        "Banho de serviço",
        "3 vagas na garagem",
      ],
      image: "/images/planta-b.webp",
    },
    {
      id: "tipo-c",
      title: "Planta Tipo C",
      description: "3 suítes com sala estendida",
      features: [
        "158 m² de área total",
        "154,3 m² de apartamento + 3,2 m² de depósito",
        "Ampla suíte master",
        "Closet maior",
        "Sala estendida",
        "3 vagas na garagem",
      ],
      image: "/images/planta-c.webp",
    },
    {
      id: "tipo-d",
      title: "Planta Tipo D",
      description: "4 quartos (2 suítes + 2 quartos)",
      features: [
        "154 m² de área total",
        "150,8 m² de apartamento + 3,2 m² de depósito",
        "2 suítes com varanda",
        "2 quartos com 1 banheiro compartilhado",
        "Banho de serviço",
        "3 vagas na garagem",
      ],
      image: "/images/planta-d.webp",
    },
    {
      id: "duplex-a",
      title: "Cobertura Duplex",
      description: "Cobertura duplex com terraço e piscina privativa",
      features: [
        "245 m² de área total",
        "220 m² de área privativa + 25 m² de terraço",
        "4 suítes com closet",
        "Piscina privativa com deck",
        "Terraço gourmet integrado",
        "4 vagas na garagem",
      ],
      image: "/images/planta-a-cobertura.webp",
    },
  ]

  // Dividindo as tabs para o layout mobile (3 na primeira linha, 2 na segunda)
  const firstRowPlans = plans.slice(0, 3)
  const secondRowPlans = plans.slice(3)

  return (
    <section className="py-12 md:py-24 bg-neutral-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Plantas e Especificações</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça as opções de plantas e escolha a que melhor se adapta ao seu estilo de vida
          </p>
        </div>

        <Tabs defaultValue={plans[0].id} className="w-full">
          {/* Tabs desktop */}
          <TabsList className="hidden lg:flex flex-wrap w-full mb-8 overflow-x-auto">
            {plans.map((plan) => (
              <TabsTrigger
                key={plan.id}
                value={plan.id}
                className="flex-1 py-3 px-4 text-sm whitespace-nowrap min-w-[120px] h-auto"
              >
                {plan.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs mobile - com segunda linha centralizada */}
          <div className="lg:hidden w-full mb-8">
            {/* Primeira linha - 3 tabs */}
            <TabsList className="flex w-full mb-2">
              {firstRowPlans.map((plan) => (
                <TabsTrigger
                  key={plan.id}
                  value={plan.id}
                  className="flex-1 py-3 px-4 text-sm whitespace-nowrap min-w-[100px] h-auto shadow-sm border border-gray-100 data-[state=inactive]:bg-white/80 data-[state=inactive]:hover:bg-white data-[state=inactive]:hover:shadow-md transition-all"
                >
                  {plan.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Segunda linha - centralizada */}
            <TabsList className="flex justify-center w-full">
              {secondRowPlans.map((plan) => (
                <TabsTrigger
                  key={plan.id}
                  value={plan.id}
                  className="py-3 px-4 text-sm whitespace-nowrap min-w-[100px] max-w-[160px] h-auto shadow-sm border border-gray-100 data-[state=inactive]:bg-white/80 data-[state=inactive]:hover:bg-white data-[state=inactive]:hover:shadow-md transition-all mx-1"
                >
                  {plan.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Conteúdo das plantas */}
          {plans.map((plan) => (
            <TabsContent key={plan.id} value={plan.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden bg-white">
                  <Image
                    src={plan.image || "/placeholder.svg"}
                    alt={`Planta ${plan.title}`}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">{plan.title}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-figueira-purple font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button className="w-full md:w-auto bg-figueira-purple hover:bg-figueira-indigo text-white text-sm md:text-base py-3 px-4">
                      <Link href="#lead-form">Solicitar informações e valores</Link>
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
