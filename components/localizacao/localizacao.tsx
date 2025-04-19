import { CheckCircle } from "lucide-react"
import LocationSection from "../location-section"

export default function LocalizacaoSection() {
    return (
              <section className="py-8 md:py-16 lg:py-24 bg-neutral-50" id="localizacao">
                <div className="container px-4 mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Tudo a distância de um passo!</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Viva com tudo ao seu alcance em um dos endereços mais valorizados de Campinas
                    </p>
                  </div>
        
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-6">
                      <h3 className="text-xl md:text-2xl font-bold">Viva com tudo ao seu redor</h3>
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
                    </div>
        
                    <div className="lg:col-span-7">
                      <LocationSection />
                    </div>
                  </div>
                </div>
              </section>
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