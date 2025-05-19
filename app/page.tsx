"use client"

import {
  MapPin,
  Building,
  Leaf,
  Palette,
  Coffee,
  Wifi,
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
  Award,
  Users,
  Shield,
  DollarSign,
  HeartPulse,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import ScrollToTop from "@/components/scroll-to-top"
import TestimonialCard from "@/components/testimonial-card"
import CountdownTimer from "@/components/countdown-timer"
import { MobileCta } from "@/components/mobile-cta"
import CasaFigueiraSection from "@/components/casa-figueira"
import { InvestmentSection } from "@/components/investment-section"
import VisaoGeralSection from "@/components/visao-geral/VisaoGeral"
import PortfolioSection from "@/components/portfolio/Portfolio"
import DiferenciasSection from "@/components/diferencias/diferencias"
import LocalizacaoSection from "@/components/localizacao/localizacao"
import HeroSection from "@/components/hero/hero"
import AboutSection from "@/components/about/about"
import ApartmentPlans from "@/components/apartment-plans"
import FAQSection from "@/components/faq/faq-section"
import VimeoPlayer from "@/components/vimeo/video-vimeo"
import CallToAction from "@/components/call-to-action/call-to-action"
import { AutoVideoPlayer } from "@/components/video/auto-video-player"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">

      <MobileCta />
      <SiteHeader />
      <HeroSection />
      <CasaFigueiraSection />
      {/* <VimeoPlayer
        url="https://player.vimeo.com/video/993635020?playsinline=1&badge=0"
        options={{ loop: true }}
      /> */}
      <AutoVideoPlayer
        src="/casafigueira.mp4"
        title="Big Buck Bunny"
      />
      <DiferenciasSection />
      <InvestmentSection />
      <VisaoGeralSection />
      <ApartmentPlans />
      <PortfolioSection />
      <LocalizacaoSection />
      <AboutSection />


      {/* Testimonials Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">O que dizem nossos clientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Depoimentos de quem já investiu em nossos empreendimentos anteriores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Carlos Mendes"
              role="Empresário"
              image="/homem01.webp"
              rating={5}
              testimonial="Investir com a Metrópole foi uma decisão acertada. O atendimento personalizado e a qualidade dos empreendimentos superaram minhas expectativas. Já estou no terceiro imóvel."
            />
            <TestimonialCard
              name="Ana Luiza Costa"
              role="Médica"
              image="/mulher01.webp"
              rating={5}
              testimonial="A localização e o acabamento do meu apartamento são impecáveis. O processo de compra foi tranquilo e transparente. Recomendo a todos que buscam qualidade."
            />
            <TestimonialCard
              name="Roberto Almeida"
              role="Advogado"
              image="/homem02.webp"
              rating={5}
              testimonial="A valorização do meu imóvel superou as projeções iniciais. O compromisso da Metrópole com a qualidade e os prazos faz toda a diferença no mercado."
            />
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-figueira-purple to-figueira-indigo text-white text-center">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Não perca essa oportunidade!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            As condições especiais de pré-lançamento são válidas até 30/05/2025. 
            Restam poucas unidades disponíveis.
          </p>
          <CountdownTimer targetDate="2025-05-30T00:00:00" />
          <div className="mt-10">
            <Button 
              className="bg-white text-figueira-purple hover:bg-gray-100 text-base font-semibold px-8 py-3"
              asChild
            >
              <Link href="#lead-form">Falar com um consultor</Link>
            </Button>
          </div>
        </div>
      </section>

      <CallToAction />

      <FAQSection />
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-figueira-100 via-white to-white overflow-hidden">
        {/* glow */}
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-figueira-purple/20 blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-figueira-purple/30 bg-white/70 p-8 shadow-xl backdrop-blur-sm">
            <h3 className="mb-6 text-center text-2xl font-extrabold leading-tight text-figueira-purple md:text-3xl">
              Este lançamento é ideal para quem quer:
            </h3>

            <ul className="mx-auto mb-10 grid max-w-lg gap-4 text-left text-lg text-gray-800">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-figueira-purple" />
                Morar com sofisticação&nbsp;e&nbsp;mobilidade ao lado do Iguatemi
              </li>
              <li className="flex items-start gap-3">
                <HeartPulse className="mt-1 h-5 w-5 shrink-0 text-figueira-purple" />
                Qualidade de vida garantida por estrutura de alto&nbsp;padrão
              </li>
            </ul>

            <p className="mb-8 text-center text-lg font-medium text-gray-900">
              Se você se identifica, fale agora com um especialista e garanta sua prioridade.
            </p>

            <div className="flex justify-center">
              <Button
                className="w-full max-w-xs bg-gradient-to-r from-figueira-purple to-figueira-indigo text-base font-semibold transition-colors hover:from-figueira-indigo hover:to-figueira-purple md:w-auto"
                asChild
              >
                <Link href="#lead-form">Falar com um especialista</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-neutral-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Uma oportunidade rara em Campinas!</h2>
            <p className="text-gray-600 text-lg mb-8">
              São apenas 80 unidades exclusivas no pré-lançamento. Antecipe-se, aproveite condições especiais e garanta prioridade na escolha da sua unidade. Restam poucas opções com valores promocionais.
            </p>
            <Button
              className="w-full md:w-auto bg-figueira-purple hover:bg-figueira-indigo text-white text-sm md:text-base py-3 px-4"
              asChild
            >
              <Link href="#lead-form">Quero garantir minha unidade</Link>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Ao clicar, você será atendido por um consultor especializado sem qualquer compromisso de compra.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-white" id="quem-somos">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Quem Somos</h2>
              <p className="text-gray-600">
                A Metrópole Investimentos Imobiliários é uma boutique especializada em imóveis de alto padrão em
                Campinas e região, com mais de 5 anos no mercado e centenas de clientes satisfeitos.
              </p>
              <p className="text-gray-600">
                Nosso diferencial está no atendimento humano e consultivo, focado em entender as necessidades de cada
                cliente para oferecer as melhores oportunidades imobiliárias. Trabalhamos exclusivamente com
                empreendimentos de alto padrão, selecionados criteriosamente por nossa equipe.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-neutral-100 p-4 rounded-full">
                  <CheckCircle className="h-6 w-6 text-figueira-purple" />
                </div>
                <div>
                  <div className="font-bold">Especialistas em alto padrão</div>
                  <div className="text-gray-600">Conhecimento profundo do mercado premium de Campinas.</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-neutral-100 p-4 rounded-full">
                  <Users className="h-6 w-6 text-figueira-purple" />
                </div>
                <div>
                  <div className="font-bold">Atendimento personalizado</div>
                  <div className="text-gray-600">Consultoria imobiliária exclusiva com profissionais certificados.</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-neutral-100 p-4 rounded-full">
                  <Award className="h-6 w-6 text-figueira-purple" />
                </div>
                <div>
                  <div className="font-bold">Reconhecimento do mercado</div>
                  <div className="text-gray-600">
                    Reconhecida por sua excelência no atendimento e indicada por quem valoriza exclusividade e segurança na hora de investir.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/call-to-action/about-us.webp"
                alt="Metrópole Investimentos Imobiliários - Especialista em imóveis de alto padrão em Campinas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-bold text-xl mb-4">Avenida 105</div>
              <p className="text-gray-400 mb-4">Apartamentos de alto padrão ao lado do Shopping Iguatemi Campinas.</p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+55 (19) 98253-5896</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mt-2">
                <Mail className="h-4 w-4" />
                <span>eduardocampari<br></br>@metropoleinvestimentosimobiliarios.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mt-2">
                <MapPin className="h-4 w-4" />
                <span>Avenida Nossa Senhora de Fátima, 1325 - Taquaral
                  Campinas/SP</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-lg mb-4">Links Rápidos</div>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#projeto" className="text-gray-400 hover:text-white transition-colors">
                    Sobre o Projeto
                  </Link>
                </li>
                <li>
                  <Link href="#localizacao" className="text-gray-400 hover:text-white transition-colors">
                    Localização
                  </Link>
                </li>
                <li>
                  <Link href="#diferenciais" className="text-gray-400 hover:text-white transition-colors">
                    Diferenciais
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#quem-somos" className="text-gray-400 hover:text-white transition-colors">
                    Quem Somos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-lg mb-4">Informações Legais</div>
              <p className="text-gray-400 mb-4">Metrópole Investimentos Imobiliários | CRECI 34150</p>
              <p className="text-gray-400 mb-4">© 2025 Metrópole Investimentos Imobiliários – Todos os direitos reservados.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Política de Privacidade
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}

