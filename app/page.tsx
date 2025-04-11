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
import LeadForm from "@/components/lead-form"
import FloatingCta from "@/components/floating-cta"
import SiteHeader from "@/components/site-header"
import ScrollToTop from "@/components/scroll-to-top"
import TestimonialCard from "@/components/testimonial-card"
import LocationSection from "@/components/location-section"
import ApartmentPlans from "@/components/apartment-plans"
import ConstructionTimeline from "@/components/construction-timeline"
import TrustedPartners from "@/components/trusted-partners"
import GallerySection from "@/components/gallery-section"
import LeisureAreas from "@/components/leisure-areas"
import LifestyleSection from "@/components/lifestyle-section"
import PenthouseSection from "@/components/penthouse-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <FloatingCta />
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative w-full pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vista-ultimo-andar.png"
            alt="Vista aérea do Avenida 105 Casa Figueira ao pôr do sol"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="container relative z-10 px-4 py-4 md:py-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 text-xs font-medium bg-figueira-100/90 text-figueira-blue rounded-full">
                Pré-lançamento exclusivo
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Apartamentos de Alto Padrão ao Lado do Iguatemi Campinas
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Pré-lançamento com unidades limitadas — apenas 80 apartamentos disponíveis em localização privilegiada
              </p>
              <div className="hidden lg:block max-w-md">
                <LeadForm />
              </div>
            </div>
            <div className="lg:hidden" id="lead-form">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <TrustedPartners />

      {/* Benefits Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-white" id="diferenciais">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Diferenciais Exclusivos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Um empreendimento único que redefine o conceito de morar bem em Campinas, com arquitetura premiada e
              localização estratégica
            </p>
          </div>

          {/* Versão mobile simplificada */}
          <div className="md:hidden">
            <div className="space-y-4">
              {[
                {
                  icon: <MapPin className="h-6 w-6 text-figueira-purple" />,
                  text: "Ao lado do Shopping Iguatemi Campinas",
                },
                {
                  icon: <Building className="h-6 w-6 text-figueira-purple" />,
                  text: "Torre única com vista panorâmica",
                },
                {
                  icon: <Palette className="h-6 w-6 text-figueira-purple" />,
                  text: "Arquitetura autoral da Dal Pian (Natura, Nubank)",
                },
                {
                  icon: <Leaf className="h-6 w-6 text-figueira-purple" />,
                  text: "Paisagismo Floresta de Bolso® de Ricardo Cardim",
                },
                {
                  icon: <Coffee className="h-6 w-6 text-figueira-purple" />,
                  text: "Lazer completo com coworking e espaço gourmet",
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-figueira-purple" />,
                  text: "Valorização projetada de 30% em 3 anos",
                },
                {
                  icon: <Shield className="h-6 w-6 text-figueira-purple" />,
                  text: "Segurança 24h com tecnologia de ponta",
                },
                {
                  icon: <Award className="h-6 w-6 text-figueira-purple" />,
                  text: "Certificação de sustentabilidade AQUA",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-neutral-50 rounded-lg">
                  <div>{item.icon}</div>
                  <div className="font-medium">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Versão desktop completa */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <BenefitCard
                icon={<MapPin className="h-6 w-6 text-figueira-purple" />}
                title="Localização Premium"
                description="A apenas 2 minutos a pé do Shopping Iguatemi Campinas, com toda conveniência ao seu alcance"
              />
              <BenefitCard
                icon={<Building className="h-6 w-6 text-figueira-purple" />}
                title="Torre Única"
                description="Torre única com vista panorâmica e apenas 80 apartamentos exclusivos para máxima privacidade"
              />
              <BenefitCard
                icon={<Palette className="h-6 w-6 text-figueira-purple" />}
                title="Arquitetura Premiada"
                description="Assinada pelo renomado escritório Dal Pian, responsável por projetos icônicos como Natura e Nubank"
              />
              <BenefitCard
                icon={<Leaf className="h-6 w-6 text-figueira-purple" />}
                title="Paisagismo Exclusivo"
                description="Paisagismo assinado por Ricardo Cardim com o conceito Floresta de Bolso® que valoriza a biodiversidade"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <BenefitCard
                icon={<Coffee className="h-6 w-6 text-figueira-purple" />}
                title="Lazer Completo"
                description="Coworking, brinquedoteca, espaço gourmet, piscina e academia equipada com vista para o jardim"
              />
              <BenefitCard
                icon={<Shield className="h-6 w-6 text-figueira-purple" />}
                title="Segurança Avançada"
                description="Sistema de segurança 24h com reconhecimento facial, controle de acesso e monitoramento inteligente"
              />
              <BenefitCard
                icon={<Wifi className="h-6 w-6 text-figueira-purple" />}
                title="Infraestrutura Inteligente"
                description="Energia subterrânea, wi-fi nas áreas comuns e preparação para automação residencial"
              />
              <BenefitCard
                icon={<TrendingUp className="h-6 w-6 text-figueira-purple" />}
                title="Investimento Seguro"
                description="Valorização projetada de 30% em 3 anos, conforme análise do mercado imobiliário de Campinas"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-figueira-purple hover:bg-figueira-indigo text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full">
              Ver tabela e plantas exclusivas
            </Button>
            <p className="text-xs text-gray-500 mt-2">Informações enviadas sem compromisso em até 24h</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Apartment Plans Section */}
      <ApartmentPlans />

      {/* Penthouse Section */}
      <PenthouseSection />

      {/* Leisure Areas Section */}
      <LeisureAreas />

      {/* Neighborhood Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-neutral-50" id="localizacao">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Localização Privilegiada</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Viva com tudo ao seu alcance em um dos endereços mais valorizados de Campinas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold">Viva com tudo ao seu redor</h3>
              {/* <p className="text-gray-600">
                Desfrute da liberdade de ter tudo ao alcance: cafés, academias, farmácias, mercados e o Shopping
                Iguatemi a poucos passos da sua porta.
              </p> */}
              <p className="text-gray-600">
                No Avenida 105, você ganha tempo e qualidade de vida com a mobilidade a pé. Esqueça o trânsito e
                aproveite mais o seu dia em um bairro planejado para o seu bem-estar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-bold text-figueira-purple">Lazer e Compras</h4>
                  <ul className="space-y-3">
                    <FeatureItem text="Shopping Iguatemi a 2 minutos a pé" />
                    <FeatureItem text="Restaurantes e cafés a poucos passos" />
                    <FeatureItem text="Academias e áreas de lazer próximas" />
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-figueira-purple">Conveniência</h4>
                  <ul className="space-y-3">
                    <FeatureItem text="Farmácias e mercados na vizinhança" />
                    <FeatureItem text="Escolas e universidades próximas" />
                    <FeatureItem text="Hospitais e clínicas a menos de 10 min" />
                  </ul>
                </div>
              </div>

              {/* <div className="pt-4">
                <h4 className="font-bold text-figueira-purple mb-2">Valorização Comprovada</h4>
                <p className="text-gray-600">
                  A região do Iguatemi Campinas apresentou valorização média de 12% ao ano nos últimos 5 anos, superando
                  a média da cidade em 30%, segundo dados da Associação de Imóveis de Campinas.
                </p>
              </div> */}
            </div>

            <div className="lg:col-span-7">
              <LocationSection />
            </div>
          </div>
        </div>
      </section>

      {/* About Project Section */}
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
              <div className="text-figueira-purple font-bold text-lg mb-2">Primeiro lançamento</div>
              <p className="text-gray-700">
                Primeiro lançamento do bairro planejado Casa Figueira, com infraestrutura completa e planejamento urbano
                de excelência, estabelecendo um novo padrão para Campinas.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
              <div className="text-figueira-purple font-bold text-lg mb-2">Arquitetura diferenciada</div>
              <p className="text-gray-700">
                Fachada viva com brises móveis que proporcionam conforto térmico e visual único, assinada pelo renomado
                escritório Dal Pian, vencedor de múltiplos prêmios de arquitetura.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
              <div className="text-figueira-purple font-bold text-lg mb-2">Exclusividade</div>
              <p className="text-gray-700">
                Apenas 80 apartamentos em torre única, garantindo privacidade e exclusividade para os moradores, com
                controle de acesso e segurança 24 horas.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
              <div className="text-figueira-purple font-bold text-lg mb-2">Paisagismo Floresta de Bolso®</div>
              <p className="text-gray-700">
                Paisagismo assinado por Ricardo Cardim, com o conceito Floresta de Bolso® que traz a natureza para
                dentro do empreendimento, com espécies nativas que atraem pássaros e borboletas.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
              <div className="text-figueira-purple font-bold text-lg mb-2">Ampla área livre</div>
              <p className="text-gray-700">
                Condomínio com ampla área livre: apenas 12% do terreno construído, priorizando áreas verdes e espaços de
                convivência, criando um oásis urbano em meio à cidade.
              </p>
            </div>
            <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
              <div className="text-figueira-purple font-bold text-lg mb-2">Sustentabilidade</div>
              <p className="text-gray-700">
                Projeto com certificação AQUA de sustentabilidade, captação de água da chuva, painéis solares e
                iluminação LED em todas as áreas comuns, reduzindo o impacto ambiental e o custo do condomínio.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-figueira-purple hover:bg-figueira-indigo text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full">
              Quero conhecer o projeto completo
            </Button>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      {/* <LifestyleSection /> */}

      {/* Construction Timeline */}
      <ConstructionTimeline />

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
              image="/placeholder.svg?height=100&width=100"
              rating={5}
              testimonial="Investir com a Metrópole foi uma decisão acertada. O atendimento personalizado e a qualidade dos empreendimentos superaram minhas expectativas. Já estou no terceiro imóvel."
            />
            <TestimonialCard
              name="Ana Luiza Costa"
              role="Médica"
              image="/placeholder.svg?height=100&width=100"
              rating={5}
              testimonial="A localização e o acabamento do meu apartamento são impecáveis. O processo de compra foi tranquilo e transparente. Recomendo a todos que buscam qualidade."
            />
            <TestimonialCard
              name="Roberto Almeida"
              role="Advogado"
              image="/placeholder.svg?height=100&width=100"
              rating={5}
              testimonial="A valorização do meu imóvel superou as projeções iniciais. O compromisso da Metrópole com a qualidade e os prazos faz toda a diferença no mercado."
            />
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-neutral-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Por que agora é o momento ideal?</h2>
            <p className="text-gray-300 text-lg mb-8">
              O pré-lançamento do Avenida 105 oferece condições exclusivas que não estarão disponíveis posteriormente. É
              a sua oportunidade de escolher as melhores unidades com valor diferenciado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-neutral-800 p-6 rounded-xl">
                <div className="text-figueira-lavender font-bold text-xl mb-2">Preços de lançamento</div>
                <p className="text-gray-300">
                  Valores até 15% abaixo do mercado, disponíveis apenas nesta fase inicial por tempo limitado
                </p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-xl">
                <div className="text-figueira-lavender font-bold text-xl mb-2">Escolha prioritária</div>
                <p className="text-gray-300">
                  Selecione as melhores unidades, andares e vistas antes que sejam reservadas
                </p>
              </div>
              <div className="bg-neutral-800 p-6 rounded-xl">
                <div className="text-figueira-lavender font-bold text-xl mb-2">Condições exclusivas</div>
                <p className="text-gray-300">
                  Entrada facilitada, financiamento direto e possibilidade de personalização das unidades
                </p>
              </div>
            </div>
            <div className="bg-neutral-800 p-6 rounded-xl mb-8">
              <div className="text-figueira-lavender font-bold text-xl mb-2">Oferta por tempo limitado</div>
              <p className="text-gray-300">
                As condições especiais de pré-lançamento estão disponíveis apenas para as primeiras 30 unidades ou até
                30/06/2025, o que ocorrer primeiro. Já temos 18 unidades reservadas.
              </p>
              <div className="mt-4 bg-neutral-700 rounded-full h-4 overflow-hidden">
                <div className="bg-figueira-lavender h-full rounded-full" style={{ width: "60%" }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">60% das unidades com condições especiais já foram reservadas</p>
            </div>
            <Button className="bg-figueira-purple hover:bg-figueira-indigo text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full">
              Ver preços e plantas agora
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-white" id="faq">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">Tire suas dúvidas sobre o Avenida 105</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">Onde fica o projeto?</AccordionTrigger>
                <AccordionContent>
                  O Avenida 105 está localizado em Campinas/SP, ao lado do Shopping Iguatemi, em uma das regiões mais
                  valorizadas da cidade, com fácil acesso às principais vias e serviços. O endereço exato é Avenida
                  Iguatemi, 105, a apenas 200 metros da entrada principal do shopping.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">Tem decorado? Posso visitar?</AccordionTrigger>
                <AccordionContent>
                  Estamos em fase de pré-lançamento, e o apartamento decorado está em construção. No entanto, você pode
                  agendar uma visita ao nosso stand de vendas para conhecer mais detalhes, plantas e maquetes do
                  projeto. Também oferecemos tour virtual em 3D que permite visualizar os ambientes com realismo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Quantas unidades são?</AccordionTrigger>
                <AccordionContent>
                  O Avenida 105 possui apenas 80 unidades exclusivas, garantindo privacidade e exclusividade para os
                  moradores. A torre única com vista aberta proporciona uma experiência de moradia diferenciada. São 4
                  unidades por andar, com plantas de 92m², 110m² e 145m² (duplex).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">O projeto é confiável?</AccordionTrigger>
                <AccordionContent>
                  Sim, o Avenida 105 é desenvolvido pela Casa Figueira Incorporadora, com mais de 20 anos de mercado e
                  15 empreendimentos entregues em Campinas. A Metrópole Investimentos Imobiliários, responsável pelas
                  vendas, atua há mais de 5 anos no mercado de alto padrão com centenas de clientes satisfeitos. O
                  projeto conta com financiamento aprovado pelo Santander e seguro de entrega.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Serve para morar ou investir?</AccordionTrigger>
                <AccordionContent>
                  O Avenida 105 é excelente tanto para moradia quanto para investimento. Para moradia, oferece qualidade
                  de vida, localização privilegiada e infraestrutura completa. Como investimento, apresenta alto
                  potencial de valorização devido à sua localização estratégica e exclusividade. A região apresenta alta
                  demanda para locação, com rentabilidade média de 0,6% ao mês, acima da média de Campinas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">Quais são as condições de pagamento?</AccordionTrigger>
                <AccordionContent>
                  Oferecemos condições flexíveis de pagamento, com entrada facilitada a partir de 20%, possibilidade de
                  financiamento direto com a incorporadora em até 60 meses ou financiamento bancário com os principais
                  bancos. Durante a fase de lançamento, temos condições especiais com descontos de até 15% para
                  pagamentos à vista.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">Qual o prazo de entrega?</AccordionTrigger>
                <AccordionContent>
                  O Avenida 105 tem previsão de entrega para dezembro de 2027, com possibilidade de antecipação conforme
                  o andamento da obra. O cronograma detalhado pode ser consultado em nosso stand de vendas, e
                  atualizações mensais são enviadas aos compradores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  Quais são os diferenciais de sustentabilidade?
                </AccordionTrigger>
                <AccordionContent>
                  O Avenida 105 possui certificação AQUA de sustentabilidade e incorpora diversas tecnologias
                  eco-friendly: captação e reuso de água da chuva, painéis solares para áreas comuns, iluminação LED com
                  sensores de presença, estações para carregamento de veículos elétricos e o exclusivo paisagismo
                  Floresta de Bolso® que utiliza espécies nativas e contribui para a biodiversidade local.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-neutral-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Não perca esta oportunidade única</h2>
            <p className="text-gray-600 text-lg mb-8">
              Apenas 80 unidades disponíveis no pré-lançamento. Garanta já a sua com condições especiais e escolha
              prioritária. Restam poucas unidades com preço promocional.
            </p>
            <Button
              className="bg-figueira-purple hover:bg-figueira-indigo text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full"
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
                  <div className="text-gray-600">Conhecimento profundo do mercado premium de Campinas</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-neutral-100 p-4 rounded-full">
                  <Users className="h-6 w-6 text-figueira-purple" />
                </div>
                <div>
                  <div className="font-bold">Atendimento personalizado</div>
                  <div className="text-gray-600">Consultoria imobiliária exclusiva com profissionais certificados</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-neutral-100 p-4 rounded-full">
                  <Award className="h-6 w-6 text-figueira-purple" />
                </div>
                <div>
                  <div className="font-bold">Reconhecimento do mercado</div>
                  <div className="text-gray-600">
                    Premiada como melhor imobiliária de alto padrão de Campinas em 2023
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
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
                <span>(19) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mt-2">
                <Mail className="h-4 w-4" />
                <span>contato@metropoleimoveis.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 mt-2">
                <MapPin className="h-4 w-4" />
                <span>Av. Iguatemi, 105 - Campinas/SP</span>
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
              <p className="text-gray-400 mb-4">Metrópole Investimentos Imobiliários | CRECI 123456-SP</p>
              <p className="text-gray-400 mb-4">© 2025 Metrópole Imóveis – Todos os direitos reservados.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Política de Privacidade
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Termos de Uso
                </Link>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                As imagens são meramente ilustrativas. O mobiliário e os equipamentos não fazem parte do contrato.
                Registro de Incorporação R-XX na matrícula nº XXXXX do Xº Cartório de Registro de Imóveis de
                Campinas/SP.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-neutral-50 p-4 md:p-6 rounded-xl">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <CheckCircle className="h-5 w-5 text-figueira-purple flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </div>
  )
}
