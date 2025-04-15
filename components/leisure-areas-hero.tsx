import Image from "next/image"

export default function LeisureAreasHero() {
  return (
    <>
      {/* Título e subtítulo */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Áreas de Lazer e Convivência
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          O Avenida 105 oferece mais de 20 opções de lazer e convivência para todos os momentos
        </p>
      </div>

      {/* Imagem principal */}
      <div className="mb-12">
        <div className="rounded-xl overflow-hidden">
          <div className="relative w-full h-auto">
            <Image
              src="/images/planta-geral-lazer.webp"
              alt="Planta geral das áreas de lazer"
              width={1200}
              height={600}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Título da lista */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Conheça cada espaço</h3>
      </div>
    </>
  )
}
