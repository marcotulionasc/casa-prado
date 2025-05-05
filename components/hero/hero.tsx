"use client"

import type React from "react"
import LeadForm from "../lead-form"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] pt-20">
      {/* BG */}
      <Image
        src="/images/vista-ultimo-andar.webp"
        alt="Vista aérea do Avenida 105 Casa Figueira ao pôr do sol"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Conteúdo */}
      <div className="relative z-20 flex h-full w-full items-center justify-center px-4">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid h-full gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Texto */}
            <div className="space-y-6 text-center lg:text-left lg:flex lg:flex-col lg:justify-center">
              {/* FIX: w-max evita esticar; justify-self-start garante que fique à esquerda */}
              <span className="inline-block w-max justify-self-start rounded-full bg-figueira-100/90 px-3 py-1 text-xs font-medium text-figueira-blue">
                Pré-lançamento exclusivo
              </span>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Apartamentos de Alto&nbsp;Padrão ao&nbsp;Lado do&nbsp;Iguatemi&nbsp;Campinas
              </h1>

              <p className="text-base text-white/90 sm:text-lg md:text-xl">
                Pré‑lançamento com unidades limitadas — apenas 80 apartamentos disponíveis em localização privilegiada
              </p>
            </div>

            {/* Formulário */}
            <div className="mx-auto w-full max-w-sm lg:mx-0">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
