"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function GallerySection() {
  const [currentImage, setCurrentImage] = useState<number | null>(null)

  const images = [
    { src: "/images/fachada.png", alt: "Fachada Avenida 105" },
    { src: "/images/lobby-entrada.png", alt: "Lobby de entrada" },
    { src: "/images/piscina.png", alt: "Piscina" },
    { src: "/images/área gourmet.png", alt: "Espaço gourmet" },
    { src: "/images/coworking.png", alt: "Coworking" },
    { src: "/images/vista-ultimo-andar.png", alt: "Vista do apartamento" },
  ]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setCurrentImage(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (currentImage === null) return
    setCurrentImage((currentImage + 1) % images.length)
  }

  const prevImage = () => {
    if (currentImage === null) return
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Galeria de Imagens</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os detalhes do Avenida 105 através de nossas imagens
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full bg-gradient-to-t from-black to-transparent">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {currentImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
            onClick={closeLightbox}
          >
            <X className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button
            className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative h-[80vh] w-[80vw] max-w-5xl">
            <Image
              src={images[currentImage].src || "/placeholder.svg"}
              alt={images[currentImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 text-white text-center">
            <p className="font-medium">{images[currentImage].alt}</p>
            <p className="text-sm text-gray-300">
              {currentImage + 1} de {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
