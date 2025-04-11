import Image from "next/image"

export default function TrustedPartners() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 uppercase tracking-wider">Parceiros de confiança</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <Image
              src="/placeholder-logo.svg"
              alt="Santander"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <Image
              src="/placeholder-logo.svg"
              alt="Dal Pian Arquitetos"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <Image
              src="/placeholder-logo.svg"
              alt="Cardim Paisagismo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <Image
              src="/placeholder-logo.svg"
              alt="Certificação AQUA"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <Image
              src="/placeholder-logo.svg"
              alt="Casa Figueira"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
