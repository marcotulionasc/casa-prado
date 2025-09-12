"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ObrigadoPage() {
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "5519982535896"
    const message = "Olá! Acabei de me cadastrar no site do Casa Prado e gostaria de mais informações."

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900">✅ Parabéns pela sua decisão</h1>
            <p className="mt-2 text-gray-600">Sua solicitação foi recebida com sucesso.</p>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-gray-700">
              Devido à alta demanda e número limitado de unidades, um dos nossos consultores entrará em contato em breve
              para apresentar todos os detalhes do Casa Prado.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-amber-700 font-medium">Atenção:</p>
                  <p className="text-sm text-amber-700">
                    As melhores unidades estão sendo reservadas nas primeiras conversas. Se quiser garantir prioridade,
                    fale agora com um especialista.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleWhatsAppClick}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md flex items-center justify-center gap-2"
          >
            Quero falar no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  )
}
