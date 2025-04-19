"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaLeaf, FaTree } from "react-icons/fa";
import { FiGrid, FiLock, FiStar } from "react-icons/fi";
import { MdArchitecture } from "react-icons/md";

export default function AboutSection() {
    return (
        <section className="py-8 md:py-16 lg:py-24 bg-white" id="projeto">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold">Sobre o Avenida 105</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Um projeto único que redefine o conceito de morar bem em Campinas, combinando sofisticação,
                        sustentabilidade e exclusividade
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
                        <div className="flex items-center justify-center mb-2">
                            <FiStar className="text-figueira-purple text-2xl" />
                        </div>
                        <div className="text-figueira-purple font-bold text-lg mb-2 text-center">
                            Primeiro lançamento
                        </div>
                        <p className="text-gray-700">
                            Primeiro lançamento do bairro planejado Casa Figueira, com infraestrutura completa e planejamento urbano
                            de excelência, estabelecendo um novo padrão para Campinas.
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
                        <div className="flex items-center justify-center mb-2">
                            <MdArchitecture className="text-figueira-purple text-2xl" />
                        </div>
                        <div className="text-figueira-purple font-bold text-lg mb-2 text-center">
                            Arquitetura diferenciada
                        </div>
                        <p className="text-gray-700">
                            Fachada viva com brises móveis que proporcionam conforto térmico e visual único, assinada pelo renomado
                            escritório Dal Pian, vencedor de múltiplos prêmios de arquitetura.
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
                        <div className="flex items-center justify-center mb-2">
                            <FiLock className="text-figueira-purple text-2xl" />
                        </div>
                        <div className="text-figueira-purple font-bold text-lg mb-2 text-center">
                            Exclusividade
                        </div>
                        <p className="text-gray-700">
                            Apenas 80 apartamentos em torre única, garantindo privacidade e exclusividade para os moradores, com
                            controle de acesso e segurança 24 horas.
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
                        <div className="flex items-center justify-center mb-2">
                            <FaTree className="text-figueira-purple text-2xl" />
                        </div>
                        <div className="text-figueira-purple font-bold text-lg mb-2 text-center">
                            Paisagismo Floresta de Bolso®
                        </div>
                        <p className="text-gray-700">
                            Paisagismo assinado por Ricardo Cardim, com o conceito Floresta de Bolso® que traz a natureza para dentro do
                            empreendimento, com espécies nativas que atraem pássaros e borboletas.
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
                        <div className="flex items-center justify-center mb-2">
                            <FiGrid className="text-figueira-purple text-2xl" />
                        </div>
                        <div className="text-figueira-purple font-bold text-lg mb-2 text-center">
                            Ampla área livre
                        </div>
                        <p className="text-gray-700">
                            Condomínio com ampla área livre: apenas 12% do terreno construído, priorizando áreas verdes e espaços de
                            convivência, criando um oásis urbano em meio à cidade.
                        </p>
                    </div>
                    <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
                        <div className="flex items-center justify-center mb-2">
                            <FaLeaf className="text-figueira-purple text-2xl" />
                        </div>
                        <div className="text-figueira-purple font-bold text-lg mb-2 text-center">
                            Sustentabilidade
                        </div>
                        <p className="text-gray-700">
                            Projeto com certificação AQUA de sustentabilidade, captação de água da chuva e iluminação LED
                            em todas as áreas comuns, reduzindo o impacto ambiental e o custo do condomínio.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Button className="w-full bg-figueira-purple hover:bg-figueira-indigo text-white text-sm h-10 w-120">
                        <Link href="#lead-form">Quero conhecer o projeto completo</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}