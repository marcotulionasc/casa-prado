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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      
      <MobileCta />
      <SiteHeader />
      <HeroSection />
      <CasaFigueiraSection />
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
              image="/homem01.png"
              rating={5}
              testimonial="Investir com a Metrópole foi uma decisão acertada. O atendimento personalizado e a qualidade dos empreendimentos superaram minhas expectativas. Já estou no terceiro imóvel."
            />
            <TestimonialCard
              name="Ana Luiza Costa"
              role="Médica"
              image="/mulher01.png"
              rating={5}
              testimonial="A localização e o acabamento do meu apartamento são impecáveis. O processo de compra foi tranquilo e transparente. Recomendo a todos que buscam qualidade."
            />
            <TestimonialCard
              name="Roberto Almeida"
              role="Advogado"
              image="/homem02.png"
              rating={5}
              testimonial="A valorização do meu imóvel superou as projeções iniciais. O compromisso da Metrópole com a qualidade e os prazos faz toda a diferença no mercado."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 relative text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/call-to-action/image 2.png')" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#3F4FA9]/80 via-[#6E48AE]/80 to-[#A55298]/80 mix-blend-multiply"></div>

        <div className="relative z-10 container px-4 mx-auto max-w-3xl text-center">
          <div className="bg-white/10 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-extrabold mt-8 mb-4 text-white">
              Oferta Exclusiva por Tempo Limitado
            </h3>
            <p className="text-sm md:text-base text-gray-200 mb-6">
              Condições especiais válidas para as <strong>30 primeiras unidades</strong> ou até <strong>10/05/2025</strong>.
              Já temos <strong className="text-white">18 reservas confirmadas</strong>.
            </p>

            <div className="w-full bg-white/20 rounded-full h-5 mb-2 overflow-hidden shadow-inner">
              <div className="bg-[#7E60B9] h-full rounded-full transition-all duration-500" style={{ width: "60%" }}></div>
            </div>
            <p className="text-xs text-gray-300 mb-6">
              60% das unidades reservadas — ainda dá tempo de garantir a sua
            </p>

            <Button className="w-full h-12 text-lg font-semibold bg-figueira-wine hover:bg-figueira-magenta text-black transition-all">
              <Link href="#lead-form">Ver preços e plantas agora</Link>
            </Button>

            <div className="mt-6 text-sm text-gray-200">
              Oferta válida até: <CountdownTimer targetDate="2025-05-10T00:00:00" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Final CTA Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-neutral-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Uma oportunidade rara em Campinas!</h2>
            <p className="text-gray-600 text-lg mb-8">
            São apenas 80 unidades exclusivas no pré-lançamento. Antecipe-se, aproveite condições especiais e garanta prioridade na escolha da sua unidade. Restam poucas opções com valores promocionais.
            </p>
            <Button
              className="w-full bg-figueira-purple hover:bg-figueira-indigo text-white text-sm h-10 w-120"
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
                src="/call-to-action/about-us.png"
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
                <span>eduardocampai<br></br>@metropoleinvestimentosimobiliarios.com</span>
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

