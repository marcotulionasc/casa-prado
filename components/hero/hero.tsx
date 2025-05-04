import LeadForm from "../lead-form";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full lg:min-h-screen overflow-hidden">
      {/* Background com imagem */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vista-ultimo-andar.webp"
          alt="Vista aérea do Avenida 105 Casa Figueira ao pôr do sol"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Conteúdo acima da imagem */}
      <div className="relative z-10 h-full mt-2">
        <div className="container h-full px-4 mx-auto flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-20">
            {/* Texto */}
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
            </div>

            {/* Formulário */}
            <div className="mt-8 lg:mt-0">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
