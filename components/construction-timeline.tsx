import { Clock } from "lucide-react"

export default function ConstructionTimeline() {
  const timelineSteps = [
    {
      date: "Junho 2025",
      title: "Lançamento",
      description: "Início oficial das vendas e abertura do decorado",
      status: "current",
    },
    {
      date: "Dezembro 2025",
      title: "Início das obras",
      description: "Preparação do terreno e fundações",
      status: "upcoming",
    },
    {
      date: "Junho 2026",
      title: "Estrutura",
      description: "Conclusão da estrutura principal do edifício",
      status: "upcoming",
    },
    {
      date: "Dezembro 2026",
      title: "Fechamento",
      description: "Instalação de esquadrias e fechamentos externos",
      status: "upcoming",
    },
    {
      date: "Junho 2027",
      title: "Acabamentos",
      description: "Instalação de acabamentos internos e paisagismo",
      status: "upcoming",
    },
    {
      date: "Dezembro 2027",
      title: "Entrega",
      description: "Entrega das chaves e inauguração oficial",
      status: "upcoming",
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-neutral-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Cronograma de Construção</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Acompanhe as etapas de desenvolvimento do Avenida 105</p>
        </div>

        <div className="relative">
          {/* Linha do tempo */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {timelineSteps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2"></div>

                <div className="relative flex items-center justify-center">
                  <div
                    className={`z-10 rounded-full p-2 ${step.status === "current" ? "bg-figueira-purple" : "bg-gray-200"}`}
                  >
                    {step.status === "current" ? (
                      <Clock className="h-6 w-6 text-white" />
                    ) : (
                      <Clock className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>

                <div className="md:w-1/2 pt-4 md:pt-0 md:px-6">
                  <div
                    className={`p-4 rounded-lg ${
                      step.status === "current"
                        ? "bg-figueira-50 border border-figueira-200"
                        : "bg-white border border-gray-100"
                    }`}
                  >
                    <div className="font-bold text-figueira-purple">{step.date}</div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
