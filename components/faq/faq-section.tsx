"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function FAQSection() {

  return (
    <section className="py-8 md:py-16 lg:py-24 bg-white" id="faq">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Perguntas frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Tire suas dúvidas sobre o Casa Prado</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">O empreendimento já está registrado?</AccordionTrigger>
              <AccordionContent>
                Sim, já está com o RI (registro de incorporação) aprovado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Há opções Garden e Cobertura?</AccordionTrigger>
              <AccordionContent>
                Sim, com até 132 m² privativos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Quando poderei visitar o decorado?</AccordionTrigger>
              <AccordionContent>
                O decorado já está pronto e liberado para visitação.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
