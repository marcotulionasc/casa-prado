"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function FAQSection() {

    return (
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
                O Avenida 105 está localizado em Campinas/SP, ao lado do Shopping Iguatemi, em uma das regiões mais valorizadas da cidade. Endereço: Avenida Iguatemi, 105 — a apenas 200 metros da entrada principal do shopping.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">O decorado está disponível para visitação?</AccordionTrigger>
                <AccordionContent>
                Sim, o apartamento decorado já está pronto. Devido à alta procura, as visitas são realizadas exclusivamente com horário agendado com um de nossos especialistas. Também oferecemos um tour virtual em 3D com alto nível de realismo.

                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Quantas unidades compõem o empreendimento?</AccordionTrigger>
                <AccordionContent>
                O Avenida 105 possui apenas 80 unidades exclusivas em torre única, garantindo privacidade aos moradores. São 4 unidades por andar, com plantas de 154 m², 158 m² e 263 m², todas com vista livre e projeto autoral.

                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">O empreendimento é ideal para morar ou investir?</AccordionTrigger>
                <AccordionContent>
                Ambas as opções são vantajosas. Como moradia, proporciona bem-estar, sofisticação e localização privilegiada. Como investimento, tem alto potencial de valorização e rentabilidade média de 0,6% ao mês, acima da média da cidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Quais são as condições de pagamento?</AccordionTrigger>
                <AccordionContent>
                Durante o pré-lançamento, oferecemos condições facilitadas com parcelamento da entrada ao longo dos 36 meses de obra. Consulte um especialista para um plano personalizado.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">Qual é o prazo de entrega?</AccordionTrigger>
                <AccordionContent>
                A previsão de entrega é abril de 2028, com possibilidade de antecipação conforme o andamento da obra. Informações detalhadas estão disponíveis no stand de vendas e atualizações mensais são enviadas aos compradores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                Quais são os diferenciais de sustentabilidade?
                </AccordionTrigger>
                <AccordionContent>
                O Avenida 105 possui certificação AQUA e soluções sustentáveis como: captação e reuso de águas pluviais, iluminação LED com sensores, infraestrutura para veículos elétricos e paisagismo Floresta de Bolso® com espécies nativas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                O empreendimento possui infraestrutura para veículos elétricos?
                </AccordionTrigger>
                <AccordionContent>
                Sim. Estações para carregamento de veículos elétricos estão previstas nas áreas comuns, alinhando conforto, inovação e responsabilidade ambiental.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    )
}