import { Award, Building, Coffee, Leaf, MapPin, Palette } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX } from "react"

export default function DiferenciasSection(): JSX.Element {
    return (
        <section className="py-8 md:py-16 lg:py-24 bg-white" id="diferenciais">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Diferenciais Exclusivos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Um empreendimento único que redefine o conceito de morar bem em Campinas, com arquitetura premiada e
              localização estratégica
            </p>
          </div>

          {/* Dados centralizados para evitar duplicação */}
          {(() => {
            const benefits = [
              {
                icon: <MapPin className="h-6 w-6 text-figueira-purple" />,
                title: "Localização Premium",
                description: "Ao lado do Shopping Iguatemi Campinas, com toda conveniência ao seu alcance",
              },
              {
                icon: <Building className="h-6 w-6 text-figueira-purple" />,
                title: "Torre Única",
                description: "Vista panorâmica e apenas 80 apartamentos exclusivos para máxima privacidade",
              },
              {
                icon: <Palette className="h-6 w-6 text-figueira-purple" />,
                title: "Arquitetura Premiada",
                description: "Assinada pelo renomado escritório Dal Pian (Natura, Nubank)",
              },
              {
                icon: <Leaf className="h-6 w-6 text-figueira-purple" />,
                title: "Paisagismo Exclusivo",
                description: "Projeto Floresta de Bolso® de Ricardo Cardim valorizando a biodiversidade",
              },
              {
                icon: <Coffee className="h-6 w-6 text-figueira-purple" />,
                title: "Lazer Completo",
                description: "Coworking, espaço gourmet e áreas de lazer para todas as idades",
              },
              {
                icon: <Award className="h-6 w-6 text-figueira-purple" />,
                title: "Sustentabilidade AQUA",
                description: "Certificação AQUA, eficiência energética e reuso de água",
              },
            ]

            return (
              <>
                {/* Mobile / Tablet – lista simples */}
                <div className="md:hidden space-y-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-neutral-50 rounded-lg">
                      {b.icon}
                      <span className="font-medium">{b.title}</span>
                    </div>
                  ))}
                </div>

                {/* Desktop – grade 3 × 3 */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                  {benefits.map((b, i) => (
                    <BenefitCard key={i} icon={b.icon} title={b.title} description={b.description} />
                  ))}
                </div>
              </>
            )
          })()}

          <div className="mt-12 text-center">
            <Button className="w-96 bg-figueira-purple hover:bg-figueira-indigo text-white text-sm h-10">
              <Link href="#lead-form">Ver tabela e plantas exclusivas</Link>
            </Button>
            <p className="text-xs text-gray-500 mt-2">Informações enviadas sem compromisso em até 24h</p>
          </div>
        </div>
      </section>
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