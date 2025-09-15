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
              <Crown className="h-3.5 w-3.5" /> LanÃ§amento exclusivo
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 font-heading">
              3 banheiros, varanda gourmet e torre Ãºnica: o lanÃ§amento exclusivo do Parque Prado.
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              O Casa Prado Ã© diferente de tudo o que vocÃª jÃ¡ viu em Campinas: apartamentos de 2 e 3 dormitÃ³rios, plantas de 69 a 96 mÂ², todas com 3 banheiros, varanda gourmet integrada e apenas 102 unidades em torre Ãºnica. A mais de 10 anos o Parque Prado nÃ£o via algo como essa oportunidade e quem chega primeiro, escolhe melhor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-figueira-purple hover:bg-figueira-700 text-white px-6 py-6 text-base">
                <Link href="#cadastro">Quero receber condiÃ§Ãµes de prÃ©-lanÃ§amento</Link>
              </Button>
              <Button asChild variant="outline" className="border-figueira-300 text-figueira-800 hover:bg-figueira-100 px-6 py-6 text-base">
                <Link href="#plantas">Ver plantas</Link>
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">Sem spam. Atendimento consultivo e personalizado.</p>

            {/* Destaque visual removido para dar lugar à foto do projeto no hero */}
          </div>
          <div className="max-w-lg mx-auto w-full">
            <div className="rounded-xl overflow-hidden border border-figueira-200 shadow-sm">
              <AspectRatio ratio={4/3}>
                <Image
                  src="/images/casa-prado/predio.jpg"
                  alt="Fachada do Casa Prado Residence"
                  fill
                  className="object-cover"
                  priority
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 1 - Lazer */}
      <section id="lazer" className="py-14">
        <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-heading text-center">+15 ambientes pensados para sua famÃ­lia</h2>
            <p className="text-gray-600 mb-8 text-center">Lazer de clube com a privacidade de uma torre Ãºnica.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              {[
                "Piscina com deck molhado",
                "OfurÃ´ e solarium",
                "EspaÃ§o yoga",
                "Academia completa",
                "Coworking com estÃºdio de gravaÃ§Ã£o",
                "Pub com cinema",
                "SalÃ£o de festas gourmet",
                "Brinquedoteca e playground",
                "Sala de jogos",
                "Quadra de areia",
                "Pet place",
                "Mini-mercado",
                "EspaÃ§o delivery",
                "BicicletÃ¡rio",
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
                <Image
                  src="/images/piscina.webp"
                  alt="Piscina com deck molhado e solarium"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden border border-figueira-200 shadow-sm">
                <AspectRatio ratio={4/3} className="bg-neutral-50">
                  <Image
                    src="/images/gym.webp"
                    alt="Academia completa com equipamentos modernos"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="rounded-lg overflow-hidden border border-figueira-200 shadow-sm">
                <AspectRatio ratio={4/3} className="bg-neutral-50">
                  <Image
                    src="/images/interior-01.webp"
                    alt="Ãrea de convivÃªncia com acabamento de alto padrÃ£o"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SeÃ§Ã£o 2 â€“ Diferenciais */}
      <section id="diferenciais" className="py-14 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-heading text-center">Exclusividade em cada detalhe</h2>
          <p className="text-gray-600 mb-8 text-center">Diferenciais que resolvem seu dia a dia.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Bath, text: "3 banheiros em todas as plantas â†’ fim da fila do banho, privacidade para visitas." },
              { icon: Building2, text: "Torre Ãºnica com apenas 102 unidades â†’ menos moradores e mais privacidade." },
              { icon: Utensils, text: "Varanda gourmet integrada ao living â†’ o espaÃ§o que transforma jantar em experiÃªncia." },
              { icon: Archive, text: "Vaga com depÃ³sito privativo â†’ organizaÃ§Ã£o atÃ© para quem tem muito." },
              { icon: Plug, text: "Infraestrutura para carro elÃ©trico â†’ preparado para o futuro." },
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

      {/* SeÃ§Ã£o 3 â€“ Plantas */}
      <section id="plantas" className="py-14">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-heading text-center">Plantas pensadas em vocÃª!</h2>
          <p className="text-gray-600 mb-8 text-center">Escolhas inteligentes para diferentes perfis.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "69,23 mÂ² â€“ 2 dormitÃ³rios | 3 banheiros", desc: "Duas suÃ­tes + lavabo.", alt: "Planta 69mÂ²" },
              { title: "96,04 mÂ² â€“ 3 dormitÃ³rios | 3 banheiros", desc: "Uma suÃ­te + banheiro social + lavabo.", alt: "Planta 96mÂ²" },
              { title: "Garden 123,77 mÂ²", desc: "SensaÃ§Ã£o de casa com seguranÃ§a.", alt: "Garden" },
              { title: "Cobertura 127,62 mÂ²", desc: "Vista exclusiva do Parque Prado.", alt: "Cobertura" },
            ].map((p, i) => (
              <div key={p.title} className="rounded-xl border border-figueira-200 bg-white overflow-hidden shadow-sm">
                <AspectRatio ratio={4/3}>
                  <Image
                    src={[
                      "/images/plantas/planta-tipo-meio-69-23m.webp",
                      "/images/plantas/planta-tipo-ponta-96-04m.webp",
                      "/images/plantas/planta-garden-123-77mwebp.webp",
                      "/images/plantas/planta-cobertura-127-62m.webp",
                    ][i]}
                    alt={[
                      "Planta Tipo Meio",
                      "Planta Tipo Ponta",
                      "Planta Garden",
                      "Planta Cobertura",
                    ][i]}
                    fill
                    className="object-contain p-2"
                  />
                </AspectRatio>
                <div className="p-4">
                  <h3 className="font-bold text-center font-heading text-lg">
                    {[
                      "PLANTA TIPO MEIO",
                      "Planta Tipo Ponta",
                      "PLANTA GARDEN",
                      "PLANTA COBERTURA",
                    ][i]}
                  </h3>
                  <p className="text-gray-600 text-sm text-center mb-3">
                    {[
                      "Com suÃ­te",
                      "Com suÃ­te",
                      "Ãrea privativa descoberta",
                      "Com suÃ­te",
                    ][i]}
                  </p>
                  <div className="space-y-2 text-sm text-gray-800">
                    <div className="flex items-center gap-2 justify-center"><Ruler className="h-4 w-4 text-figueira-purple" />
                      {[
                        "69.23 m2",
                        "96.04 m2",
                        "123.77 m2",
                        "127.62 m2",
                      ][i]}
                    </div>
                    <div className="flex items-center gap-2 justify-center"><Bed className="h-4 w-4 text-figueira-purple" />
                      {[
                        "2 DormitÃ³rio(s)",
                        "3 DormitÃ³rio(s)",
                        "3 DormitÃ³rio(s)",
                        "3 DormitÃ³rio(s)",
                      ][i]}
                    </div>
                    <div className="flex items-center gap-2 justify-center"><Bath className="h-4 w-4 text-figueira-purple" />
                      {[
                        "3 Banheiro(s)",
                        "3 Banheiro(s)",
                        "3 Banheiro(s)",
                        "3 Banheiro(s)",
                      ][i]}
                    </div>
                    <div className="flex items-center gap-2 justify-center"><Bed className="h-4 w-4 text-figueira-purple" />
                      {[
                        "2 SuÃ­te(s)",
                        "1 SuÃ­te",
                        "1 SuÃ­te",
                        "1 SuÃ­te",
                      ][i]}
                    </div>
                    {[null, null, "1 Vaga", null][i] && (
                      <div className="flex items-center gap-2 justify-center"><Car className="h-4 w-4 text-figueira-purple" />
                        {["", "", "1 Vaga", ""][i]}
                      </div>
                    )}
                    <div className="flex items-center gap-2 justify-center"><Archive className="h-4 w-4 text-figueira-purple" />
                      {[
                        "1 Caracteristica extra",
                        "1 Caracteristica extra",
                        "1 Caracteristica extra",
                        "1 Caracteristica extra",
                      ][i]}
                    </div>
                  </div>
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

      {/* SeÃ§Ã£o 4 â€“ Bairro */}
      {/* Galeria – Imagens do Projeto */}
      <section id="galeria" className="py-14">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-heading text-center">Imagens do projeto</h2>
          <p className="text-gray-600 mb-6 text-center">Conheça mais detalhes do Casa Prado.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/casa-prado/predio.jpg", alt: "Fachada do Casa Prado" },
              { src: "/images/casa-prado/entrada-casa-prado.jpg", alt: "Entrada do empreendimento" },
              { src: "/images/casa-prado/piscina-new.jpg", alt: "Piscina com deck" },
              { src: "/images/casa-prado/imagem-01.jpg", alt: "Ambiente interno 1" },
              { src: "/images/casa-prado/imagem-02.jpg", alt: "Ambiente interno 2" },
              { src: "/images/casa-prado/imagem-03.jpg", alt: "Ambiente interno 3" },
              { src: "/images/casa-prado/imagem-04.jpg", alt: "Ambiente interno 4" },
              { src: "/images/casa-prado/imagem-05.jpg", alt: "Ambiente interno 5" },
              { src: "/images/casa-prado/imagem-06.jpg", alt: "Ambiente interno 6" },
              { src: "/images/casa-prado/imagem-07.jpg", alt: "Ambiente interno 7" },
              { src: "/images/casa-prado/imagem-08.jpg", alt: "Ambiente interno 8" },
              { src: "/images/casa-prado/imagem-09.jpg", alt: "Ambiente interno 9" },
              { src: "/images/casa-prado/imagem-10.jpg", alt: "Ambiente interno 10" },
              { src: "/images/casa-prado/imagem-11.jpg", alt: "Ambiente interno 11" },
            ].map(({ src, alt }) => (
              <div key={src} className="rounded-lg overflow-hidden border border-figueira-200 shadow-sm">
                <AspectRatio ratio={4/3} className="bg-neutral-50">
                  <Image src={src} alt={alt} fill className="object-cover" />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bairro" className="py-14 bg-neutral-50">
        <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-heading text-center lg:text-left">Parque Prado: onde a vida acontece</h2>
            <p className="text-gray-700 text-lg text-center lg:text-left">
              O bairro que une tranquilidade residencial e conveniÃªncia. PrÃ³ximo ao Shopping Prado Boulevard, com acesso fÃ¡cil a rodovias e serviÃ§os, o Parque Prado Ã© hoje uma das regiÃµes mais valorizadas de Campinas. Morar aqui significa viver melhor agora e investir em um endereÃ§o que sÃ³ cresce.
            </p>
            <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-figueira-100 text-figueira-800">
                <MapPinIcon className="h-4 w-4" /> LocalizaÃ§Ã£o valorizada
              </span>
              <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-figueira-100 text-figueira-800">
                <ShoppingBag className="h-4 w-4" /> PrÃ³ximo ao Prado Boulevard
              </span>
              <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-figueira-100 text-figueira-800">
                <Navigation className="h-4 w-4" /> FÃ¡cil acesso Ã s rodovias
              </span>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-xl overflow-hidden border border-figueira-200 shadow-sm">
            <AspectRatio ratio={4/3}>
              <Image
                src="/images/casa-prado/mapa-casa-prado.jpg"
                alt="Ambiente do empreendimento prÃ³ximo ao Parque Prado"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* SeÃ§Ã£o 5 â€“ Oportunidade */}
      <section id="oportunidade" className="py-14">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center font-heading flex items-center justify-center gap-2">
            <Timer className="h-5 w-5 text-figueira-purple" /> Poucas unidades, muito valor
          </h2>
          <p className="text-gray-700 text-lg mb-6 text-center max-w-3xl mx-auto">
            O primeiro lanÃ§amento desse porte no Parque Prado em mais de 10 anos. O Casa Prado Ã© a chance de conquistar exclusividade e conforto em um produto sem concorrÃªncia direta. SÃ£o apenas 102 unidades e no prÃ©-lanÃ§amento, quem chega primeiro escolhe melhor â€” e com condiÃ§Ãµes especiais.
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-figueira-purple hover:bg-figueira-700 text-white">
              <Link href="#cadastro">Quero escolher minha unidade</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SeÃ§Ã£o 6 â€“ Cadastro */}
      <section id="cadastro" className="py-16 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 font-heading">Garanta acesso antecipado</h2>
            <p className="text-gray-700">
              Cadastre-se agora e receba plantas, condiÃ§Ãµes de prÃ©-lanÃ§amento e atendimento exclusivo direto no seu WhatsApp e e-mail.
            </p>
          </div>
          <div className="max-w-xl mx-auto rounded-xl border border-figueira-200 bg-white/80 backdrop-blur-sm p-4 shadow-sm">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* SeÃ§Ã£o 7 â€“ FAQ */}
      {/* LocalizaÃ§Ã£o */}
      <section id="localizacao" className="py-14">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading text-center">LocalizaÃ§Ã£o</h2>
          <div className="rounded-xl overflow-hidden border border-figueira-200 shadow-sm">
            <AspectRatio ratio={16/9}>
              <iframe
                src="https://www.google.com/maps?q=Parque%20Prado,%20Campinas%20-%20SP,%20Brasil&hl=pt-BR&output=embed"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Parque Prado, Campinas"
              />
            </AspectRatio>
          </div>
          <div className="flex justify-center mt-4">
            <Button asChild variant="outline" className="border-figueira-300 text-figueira-800 hover:bg-figueira-100">
              <Link href="https://www.google.com/maps/place/Parque+Prado,+Campinas+-+SP,+Brasil/@-22.939538,-47.050069,14z/data=!4m6!3m5!1s0x94c8cec8c0b3590f:0x8b290f64db1c7f6!8m2!3d-22.9407606!4d-47.0497877!16s%2Fg%2F1ymwk7954?hl=pt-BR&entry=ttu">
                Ver no Google Maps
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Footer principal */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="font-bold text-xl mb-4">Casa Prado</div>
              <p className="text-gray-400 mb-4">Apartamentos de alto padrÃ£o ao lado do Shopping Iguatemi Campinas.</p>
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
                <span>Avenida Nossa Senhora de FÃ¡tima, 1325 - Taquaral
                  Campinas/SP</span>
              </div>
            </div>
            <div>
              <div className="font-bold text-lg mb-4">Links RÃ¡pidos</div>
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
                    LocalizaÃ§Ã£o
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
              <div className="font-bold text-lg mb-4">InformaÃ§Ãµes Legais</div>
              <p className="text-gray-400 mb-4">MetrÃ³pole Investimentos ImobiliÃ¡rios | CRECI 34150</p>
              <p className="text-gray-400 mb-4">Â© 2025 MetrÃ³pole Investimentos ImobiliÃ¡rios â€“ Todos os direitos reservados.</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PolÃ­tica de Privacidade
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
                Imagens ilustrativas. O empreendimento serÃ¡ comercializado apÃ³s registro do memorial de incorporaÃ§Ã£o. EspecificaÃ§Ãµes tÃ©cnicas, valores e condiÃ§Ãµes podem sofrer alteraÃ§Ãµes sem aviso prÃ©vio. Consulte disponibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}








