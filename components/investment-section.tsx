"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, DollarSign, Map, Star, Briefcase, Award, Landmark, Home } from "lucide-react"

export function InvestmentSection() {
  return (
    <section id="investment" className="py-12 md:py-20">
      <div className="container">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-blue-50 text-blue-800 px-3 py-1 text-xs font-medium rounded-md mb-2">
            ANÁLISE DE INVESTIMENTO
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Retorno sobre investimento superior ao mercado
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Dados reais que comprovam o potencial de valorização do seu investimento no Avenida 105.
          </p>
        </div>

        {/* Desktop version with tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="appreciation" className="w-full">
            <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2">
              <TabsTrigger value="appreciation">Valorização</TabsTrigger>
              {/* <TabsTrigger value="comparison">Comparativo</TabsTrigger> */}
            </TabsList>
            <TabsContent value="appreciation" className="mt-6">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-medium mb-4">Valorização estimada - Avenida 105</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Lançamento (abril de 2025)</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2 bg-gray-100" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Durante a obra (2025)</span>
                        <span className="font-medium text-blue-600">+15%</span>
                      </div>
                      <Progress value={115} className="h-2 bg-gray-100" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Entrega (abril de 2028)</span>
                        <span className="font-medium text-blue-700">+35%</span>
                      </div>
                      <Progress value={130} className="h-2 bg-gray-100" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>3 anos após entrega (2029)</span>
                        <span className="font-medium text-blue-800">+45%</span>
                      </div>
                      <Progress value={145} className="h-2 bg-gray-100" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Valores estimados com base no histórico de valorização de empreendimentos similares na região
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Por que investir no Avenida 105?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-50 p-1.5 rounded-full">
                        <ArrowUpRight className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Valorização acima da média</h4>
                        <p className="text-sm text-muted-foreground">
                          O bairro Casa Figueira tem projeção de valorização 35% acima da média de Campinas nos próximos
                          5 anos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-50 p-1.5 rounded-full">
                        <DollarSign className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Preços de lançamento</h4>
                        <p className="text-sm text-muted-foreground">
                          Ao investir na fase de pré-lançamento, você garante o menor preço possível e o maior potencial
                          de valorização
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-blue-50 p-1.5 rounded-full">
                        <Map className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Desenvolvimento da região</h4>
                        <p className="text-sm text-muted-foreground">
                          A expansão do eixo Iguatemi Campinas vai transformar a região, trazendo novos serviços e
                          elevando o padrão urbanístico
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            {/* <TabsContent value="comparison" className="mt-6">
              <div className="bg-white p-6 rounded-lg border max-w-4xl mx-auto">
                <h3 className="text-lg font-medium mb-4">Comparativo com outros bairros de Campinas</h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-3 text-sm font-medium">Região</th>
                        <th className="text-center py-2 px-3 text-sm font-medium">Valorização anual</th>
                        <th className="text-center py-2 px-3 text-sm font-medium">Valor do m²</th>
                        <th className="text-center py-2 px-3 text-sm font-medium">Potencial de locação</th>
                        <th className="text-center py-2 px-3 text-sm font-medium">Infraestrutura</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-blue-50">
                        <td className="py-3 px-3 text-sm font-medium">Casa Figueira (Avenida 105)</td>
                        <td className="py-3 px-3 text-sm text-center text-green-600 font-medium">15% a.a.</td>
                        <td className="py-3 px-3 text-sm text-center">R$ 15.000/m²</td>
                        <td className="py-3 px-3 text-sm text-center">
                          <div className="flex justify-center">
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                          </div>
                        </td>
                        <td className="py-3 px-3 text-sm text-center">Premium</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-3 text-sm">Cambuí</td>
                        <td className="py-3 px-3 text-sm text-center">8% a.a.</td>
                        <td className="py-3 px-3 text-sm text-center">R$ 9.800/m²</td>
                        <td className="py-3 px-3 text-sm text-center">
                          <div className="flex justify-center">
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-gray-200" />
                          </div>
                        </td>
                        <td className="py-3 px-3 text-sm text-center">Boa</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-3 text-sm">Nova Campinas</td>
                        <td className="py-3 px-3 text-sm text-center">10% a.a.</td>
                        <td className="py-3 px-3 text-sm text-center">R$ 10.500/m²</td>
                        <td className="py-3 px-3 text-sm text-center">
                          <div className="flex justify-center">
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-gray-200" />
                          </div>
                        </td>
                        <td className="py-3 px-3 text-sm text-center">Muito Boa</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 text-sm">Barão Geraldo</td>
                        <td className="py-3 px-3 text-sm text-center">7% a.a.</td>
                        <td className="py-3 px-3 text-sm text-center">R$ 8.200/m²</td>
                        <td className="py-3 px-3 text-sm text-center">
                          <div className="flex justify-center">
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-purple-500 fill-purple-500" />
                            <Star className="h-3 w-3 text-gray-200" />
                            <Star className="h-3 w-3 text-gray-200" />
                          </div>
                        </td>
                        <td className="py-3 px-3 text-sm text-center">Média</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Dados baseados em relatórios imobiliários de 2023 e projeções para 2024-2026
                </p>
              </div>
            </TabsContent> */}

          </Tabs>
        </div>

        {/* Mobile version of investment data - Simplified */}
        <div className="md:hidden space-y-6">
          <div className="bg-white p-5 rounded-lg border">
            <h3 className="text-base font-medium mb-3">Valorização estimada</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Lançamento (abril de 2025)</span>
                  <span className="font-medium">100%</span>
                </div>
                <Progress value={100} className="h-2 bg-gray-100" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Entrega (2028)</span>
                  <span className="font-medium text-blue-700">+35%</span>
                </div>
                <Progress value={130} className="h-2 bg-gray-100" />
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border">
            <h3 className="text-base font-medium mb-3">Retorno de aluguel</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Média de Campinas</span>
                  <span className="font-medium">0,4% a.m.</span>
                </div>
                <Progress value={40} max={100} className="h-2 bg-gray-100" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Avenida 105</span>
                  <span className="font-medium text-blue-700">0,6% a.m.</span>
                </div>
                <Progress value={60} max={100} className="h-2 bg-gray-100" />
              </div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg mt-3">
              <p className="text-xs font-medium">Retorno total estimado: 22,2% a.a.</p>
              <p className="text-xs text-muted-foreground">(7,2% aluguel + 15% valorização)</p>
            </div>
          </div>

          <div className="text-center mt-2">
            <Button
              className="py-3 text-base font-medium bg-figueira-purple hover:bg-blue-700 text-white rounded-md w-full h-12"
              onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Quero receber simulação completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
