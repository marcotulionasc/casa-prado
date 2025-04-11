import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LifestyleSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/redario-picnic.png"
          alt="Área de redário e piquenique do Avenida 105"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-xl">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">Um novo estilo de vida</h2>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex-1 text-center">
              <h3 className="text-white font-medium text-base">Natureza</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex-1 text-center">
              <h3 className="text-white font-medium text-base">Tranquilidade</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex-1 text-center">
              <h3 className="text-white font-medium text-base">Bem-estar</h3>
            </div>
          </div>

          <Button
            className="bg-figueira-purple hover:bg-figueira-indigo text-white px-5 py-2 text-sm rounded-full"
            asChild
          >
            <Link href="#lead-form">Conheça este estilo de vida</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
