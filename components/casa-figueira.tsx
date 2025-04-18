"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VideoPlayer from "./video-player"
import { MapPin, Building, Leaf, ArrowRight } from "lucide-react"
import { MasterplanDesktop, MasterplanMobile } from "./master-plan/masterplan-component"

export default function CasaFigueiraSection() {
  const [activeTab, setActiveTab] = useState("visao-geral")

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 text-xs font-medium bg-figueira-100 text-figueira-blue rounded-full mb-4">
            Bairro planejado
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Casa Figueira</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um novo conceito de bairro planejado em Campinas, onde o Avenida 105 é o primeiro empreendimento a ser
            lançado
          </p>
        </div>

        <div className="mb-12">
          <VideoPlayer
            videoUrl="https://ia601509.us.archive.org/17/items/apresentation/apresentation.mp4"
            posterUrl="/casa-figueira/foto-video.png"
            title="Conheça o Casa Figueira - Um novo conceito de bairro planejado"
          />
        </div>

        <Tabs defaultValue="visao-geral" className="w-full" onValueChange={setActiveTab}>
          {/* Tabs – Desktop */}
          <TabsList className="hidden lg:flex flex-wrap w-full mb-8 overflow-x-auto">
            <TabsTrigger
              value="visao-geral"
              className="flex-1 py-3 px-4 text-sm whitespace-nowrap min-w-[120px] h-auto"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger
              value="masterplan"
              className="flex-1 py-3 px-4 text-sm whitespace-nowrap min-w-[120px] h-auto"
            >
              Masterplan
            </TabsTrigger>
            <TabsTrigger
              value="sustentabilidade"
              className="flex-1 py-3 px-4 text-sm whitespace-nowrap min-w-[120px] h-auto"
            >
              Sustentabilidade
            </TabsTrigger>
            <TabsTrigger
              value="avenida-105"
              className="flex-1 py-3 px-4 text-sm whitespace-nowrap min-w-[120px] h-auto"
            >
              Avenida 105
            </TabsTrigger>
          </TabsList>

          {/* Tabs – Mobile / Tablet */}
          <TabsList
            className="
                grid grid-cols-2 grid-rows-2 gap-2 py-5 w-full h-full mb-8
                md:flex md:flex-wrap md:gap-0
                lg:hidden">

            <TabsTrigger
              value="visao-geral"
              className="py-3 px-4 text-sm whitespace-nowrap min-w-[120px] h-auto"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger
              value="masterplan"
              className="py-3 px-4 text-sm whitespace-nowrap min-w-[120px] h-auto"
            >
              Masterplan
            </TabsTrigger>
            <TabsTrigger
              value="sustentabilidade"
              className="py-3 px-4 text-sm whitespace-nowrap min-w-[120px] h-auto"
            >
              Sustentabilidade
            </TabsTrigger>
            <TabsTrigger
              value="avenida-105"
              className="py-3 px-4 text-sm whitespace-nowrap min-w-[120px] h-auto"
            >
              Avenida 105
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visao-geral" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold">Um novo conceito de viver bem</h3>
                <p className="text-gray-600">
                  O Casa Figueira é um bairro planejado que redefine o conceito de viver bem em Campinas. Com mais de 1
                  milhão de m² de área total, o projeto integra residências, comércio, serviços e amplas áreas verdes em
                  um ambiente planejado para proporcionar qualidade de vida.
                </p>
                <p className="text-gray-600">
                  Desenvolvido com base nos princípios de urbanismo sustentável, o Casa Figueira prioriza a mobilidade a
                  pé, a preservação ambiental e a criação de espaços de convivência que promovem o bem-estar e a conexão
                  entre os moradores.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="bg-figueira-50 p-4 rounded-lg text-center">
                    <div className="font-bold text-2xl text-figueira-purple">1M+</div>
                    <div className="text-sm text-gray-600">m² de área total</div>
                  </div>
                  <div className="bg-figueira-50 p-4 rounded-lg text-center">
                    <div className="font-bold text-2xl text-figueira-purple">24%</div>
                    <div className="text-sm text-gray-600">de áreas verdes</div>
                  </div>
                  <div className="bg-figueira-50 p-4 rounded-lg text-center">
                    <div className="font-bold text-2xl text-figueira-purple">15+</div>
                    <div className="text-sm text-gray-600">empreendimentos</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/casa-figueira/a-casa-figueira.png"
                  alt="Vista aérea do bairro planejado Casa Figueira"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="masterplan" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
              <MasterplanDesktop />
              <MasterplanMobile />

              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-xl md:text-2xl font-bold">Masterplan integrado</h3>
                <p className="text-gray-600">
                  O masterplan do Casa Figueira foi desenvolvido por um time de urbanistas renomados, com foco na
                  criação de um bairro completo e autossuficiente, onde os moradores encontram tudo o que precisam a
                  poucos minutos de casa.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-figueira-purple mt-0.5" />
                    <div>
                      <div className="font-bold">Setorização inteligente</div>
                      <p className="text-gray-600 text-sm">
                        Áreas residenciais, comerciais e de lazer estrategicamente posicionadas para garantir
                        conveniência e tranquilidade
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-figueira-purple mt-0.5" />
                    <div>
                      <div className="font-bold">Mix de empreendimentos</div>
                      <p className="text-gray-600 text-sm">
                        Residenciais verticais e horizontais, áreas comerciais, escritórios e serviços integrados
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Leaf className="h-5 w-5 text-figueira-purple mt-0.5" />
                    <div>
                      <div className="font-bold">Parques e áreas verdes</div>
                      <p className="text-gray-600 text-sm">
                        Mais de 240 mil m² de áreas verdes, incluindo parques, praças e corredores ecológicos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sustentabilidade" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-xl md:text-2xl font-bold">Compromisso com a sustentabilidade</h3>
                <p className="text-gray-600">
                  O Casa Figueira foi concebido com base em princípios de sustentabilidade e respeito ao meio ambiente.
                  Todos os empreendimentos seguem rigorosos critérios de eficiência energética, gestão de recursos
                  hídricos e utilização de materiais sustentáveis.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-figueira-50 p-4 rounded-lg">
                    <div className="font-bold text-figueira-purple mb-1">Certificação AQUA</div>
                    <div className="text-sm text-gray-600">
                      Todos os empreendimentos com certificação de sustentabilidade
                    </div>
                  </div>
                  <div className="bg-figueira-50 p-4 rounded-lg">
                    <div className="font-bold text-figueira-purple mb-1">Energia solar</div>
                    <div className="text-sm text-gray-600">Sistemas fotovoltaicos em áreas comuns</div>
                  </div>
                  <div className="bg-figueira-50 p-4 rounded-lg">
                    <div className="font-bold text-figueira-purple mb-1">Reuso de água</div>
                    <div className="text-sm text-gray-600">Captação e tratamento de águas pluviais</div>
                  </div>
                  <div className="bg-figueira-50 p-4 rounded-lg">
                    <div className="font-bold text-figueira-purple mb-1">Floresta de Bolso®</div>
                    <div className="text-sm text-gray-600">Paisagismo com espécies nativas</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/casa-figueira/sustentabilidade.png"
                    alt="Áreas verdes e sustentabilidade no Casa Figueira"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="avenida-105" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/casa-figueira/avenida105.png"
                    alt="Avenida 105 - O primeiro empreendimento do Casa Figueira"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-xl md:text-2xl font-bold">Avenida 105: o primeiro lançamento do Casa Figueira</h3>
                <p className="text-gray-600">
                  O Avenida 105 é o empreendimento inaugural do bairro planejado Casa Figueira, estabelecendo um novo patamar de sofisticação e qualidade para os futuros lançamentos da região.
                </p>
                <p className="text-gray-600">
                  Localizado em posição estratégica, ao lado do Shopping Iguatemi Campinas, o Avenida 105 une a exclusividade de um projeto boutique — com torre única e arquitetura autoral — à infraestrutura completa de um bairro concebido para o futuro.
                </p>
                <Button className="bg-figueira-purple hover:bg-figueira-indigo text-white mt-2 group">
                  Conheça o Avenida 105
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
