"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import SiteHeader from "@/components/site-header"
import ScrollToTop from "@/components/scroll-to-top"
import { MobileCta } from "@/components/mobile-cta"
import LeadForm from "@/components/lead-form"
import FAQSection from "@/components/faq/faq-section"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  CheckCircle2,
  Sparkles,
  Bath,
  Building2,
  Utensils,
  Archive,
  Plug,
  Car,
  BatteryCharging,
  Ruler,
  Bed,
  MapPin as MapPinIcon,
  ShoppingBag,
  Navigation,
  Trees,
  Timer,
  Crown,
  Tag,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MobileCta />
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-figueira-lavender to-white" />
        <div className="container relative px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-figueira-100 text-figueira-800 px-3 py-1 text-xs font-medium mb-4">
              <Crown className="h-3.5 w-3.5" /> Lançamento exclusivo
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 font-heading">
              3 banheiros, varanda gourmet e torre única: o lançamento exclusivo do Parque Prado.
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              O Casa Prado é diferente de tudo o que você já viu em Campinas: apartamentos de 2 e 3 dormitórios, plantas de 69 a 96 m², todas com 3 banheiros, varanda gourmet integrada e apenas 102 unidades em torre única. A mais de 10 anos o Parque Prado não via algo como essa oportunidade e quem chega primeiro, escolhe melhor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-figueira-purple hover:bg-figueira-700 text-white px-6 py-6 text-base">
                <Link href="#cadastro">Quero receber condições de pré-lançamento</Link>
              </Button>
              <Button asChild variant="outline" className="border-figueira-300 text-figueira-800 hover:bg-figueira-100 px-6 py-6 text-base">
                <Link href="#plantas">Ver plantas</Link>
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">Sem spam. Atendimento consultivo e personalizado.</p>
          </div>
          <div className="max-w-lg mx-auto w-full">
            <div className="rounded-xl border border-figueira-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 1 – Lazer */}
      <section id="lazer" className="py-14">
        <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-heading text-center">+15 ambientes pensados para sua família</h2>
            <p className="text-gray-600 mb-8 text-center">Lazer de clube com a privacidade de uma torre única.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              {[
                "Piscina com deck molhado",
                "Ofurô e solarium",
                "Espaço yoga",
                "Academia completa",
                "Coworking com estúdio de gravação",
                "Pub com cinema",
                "Salão de festas gourmet",
                "Brinquedoteca e playground",
                "Sala de jogos",
                "Quadra de areia",
                "Pet place",
                "Mini-mercado",
                "Espaço delivery",
                "Bicicletário",
              ].map((item) => (
                <div key={item} className="p-3 bg-neutral-100 rounded-md border border-neutral-200 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-figueira-purple" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-figueira-200 shadow-sm">
              <AspectRatio ratio={16/9}>
                <Image src="/placeholder-media.svg" alt="Área de lazer - substitua pela imagem real" fill className="object-cover"/>
              </AspectRatio>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-figueira-200 shadow-sm">
                <AspectRatio ratio={4/3}>
                  <Image src="/placeholder-media.svg" alt="Ambiente 1" fill className="object-cover"/>
                </AspectRatio>
              </div>
              <div className="rounded-lg overflow-hidden border border-figueira-200 shadow-sm">
                <AspectRatio ratio={4/3}>
                  <Image src="/placeholder-media.svg" alt="Ambiente 2" fill className="object-cover"/>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 – Diferenciais */}
      <section id="diferenciais" className="py-14 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-heading text-center">Exclusividade em cada detalhe</h2>
          <p className="text-gray-600 mb-8 text-center">Diferenciais que resolvem seu dia a dia.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Bath, text: "3 banheiros em todas as plantas → fim da fila do banho, privacidade para visitas." },
              { icon: Building2, text: "Torre única com apenas 102 unidades → menos moradores e mais privacidade." },
              { icon: Utensils, text: "Varanda gourmet integrada ao living → o espaço que transforma jantar em experiência." },
              { icon: Archive, text: "Vaga com depósito privativo → organização até para quem tem muito." },
              { icon: Plug, text: "Infraestrutura para carro elétrico → preparado para o futuro." },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="rounded-xl border border-figueira-200 bg-white p-5 shadow-sm text-center">
                <div className="flex justify-center mb-3">
                  <div className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-figueira-100 text-figueira-purple">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-gray-800">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 3 – Plantas */}
      <section id="plantas" className="py-14">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-heading text-center">Plantas pensadas em você!</h2>
          <p className="text-gray-600 mb-8 text-center">Escolhas inteligentes para diferentes perfis.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "69,23 m² – 2 dormitórios | 3 banheiros", desc: "Duas suítes + lavabo.", alt: "Planta 69m²" },
              { title: "96,04 m² – 3 dormitórios | 3 banheiros", desc: "Uma suíte + banheiro social + lavabo.", alt: "Planta 96m²" },
              { title: "Garden 123,77 m²", desc: "Sensação de casa com segurança.", alt: "Garden" },
              { title: "Cobertura 127,62 m²", desc: "Vista exclusiva do Parque Prado.", alt: "Cobertura" },
            ].map((p) => (
              <div key={p.title} className="rounded-xl border border-figueira-200 bg-white overflow-hidden shadow-sm">
                <AspectRatio ratio={4/3}>
                  <Image src="/placeholder-media.svg" alt={p.alt} fill className="object-cover" />
                </AspectRatio>
                <div className="p-4">
                  <div className="flex items-center justify-center gap-2">
                    <Ruler className="h-4 w-4 text-figueira-purple" />
                    <h3 className="font-semibold text-center">{p.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm text-center">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-6 text-center">Cada planta foi pensada para maximizar conforto e praticidade.</p>
          <div className="flex justify-center mt-6">
            <Button asChild className="bg-figueira-purple hover:bg-figueira-700 text-white">
              <Link href="#cadastro">Quero receber as plantas no WhatsApp</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 4 – Bairro */}
      <section id="bairro" className="py-14 bg-neutral-50">
        <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-heading text-center lg:text-left">Parque Prado: onde a vida acontece</h2>
            <p className="text-gray-700 text-lg text-center lg:text-left">
              O bairro que une tranquilidade residencial e conveniência. Próximo ao Shopping Prado Boulevard, com acesso fácil a rodovias e serviços, o Parque Prado é hoje uma das regiões mais valorizadas de Campinas. Morar aqui significa viver melhor agora e investir em um endereço que só cresce.
            </p>
            <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-figueira-100 text-figueira-800">
                <MapPinIcon className="h-4 w-4" /> Localização valorizada
              </span>
              <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-figueira-100 text-figueira-800">
                <ShoppingBag className="h-4 w-4" /> Próximo ao Prado Boulevard
              </span>
              <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-figueira-100 text-figueira-800">
                <Navigation className="h-4 w-4" /> Fácil acesso às rodovias
              </span>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-xl overflow-hidden border border-figueira-200 shadow-sm">
            <AspectRatio ratio={16/9}>
              <Image src="/placeholder-media.svg" alt="Bairro Parque Prado - substitua por imagem real" fill className="object-cover" />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Seção 5 – Oportunidade */}
      <section id="oportunidade" className="py-14">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center font-heading flex items-center justify-center gap-2">
            <Timer className="h-5 w-5 text-figueira-purple" /> Poucas unidades, muito valor
          </h2>
          <p className="text-gray-700 text-lg mb-6 text-center max-w-3xl mx-auto">
            O primeiro lançamento desse porte no Parque Prado em mais de 10 anos. O Casa Prado é a chance de conquistar exclusividade e conforto em um produto sem concorrência direta. São apenas 102 unidades e no pré-lançamento, quem chega primeiro escolhe melhor — e com condições especiais.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-figueira-purple hover:bg-figueira-700 text-white">
              <Link href="#cadastro">Quero escolher minha unidade</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 6 – Cadastro */}
      <section id="cadastro" className="py-16 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 font-heading">Garanta acesso antecipado</h2>
            <p className="text-gray-700">
              Cadastre-se agora e receba plantas, condições de pré-lançamento e atendimento exclusivo direto no seu WhatsApp e e-mail.
            </p>
          </div>
          <div className="max-w-xl mx-auto rounded-xl border border-figueira-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Seção 7 – FAQ */}
      <FAQSection />

      {/* Footer principal */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-bold text-xl mb-4">Casa Prado</div>
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

      {/* Aviso legal abaixo do footer */}
      <div className="bg-neutral-900 text-white py-10">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-gray-200 text-center">
                Imagens ilustrativas. O empreendimento será comercializado após registro do memorial de incorporação. Especificações técnicas, valores e condições podem sofrer alterações sem aviso prévio. Consulte disponibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
