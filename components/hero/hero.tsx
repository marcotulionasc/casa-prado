"use client"

import type React from "react"
import Image from "next/image"
import { useEffect, useState } from "react"
import LeadForm from "../lead-form"

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = new Date("2025-05-10T00:00:00").getTime() - Date.now()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / 86_400_000),
          hours: Math.floor((diff / 3_600_000) % 24),
          minutes: Math.floor((diff / 60_000) % 60),
          seconds: Math.floor((diff / 1_000) % 60),
        })
      }
    }
    tick()
    const id = setInterval(tick, 1_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full pt-14 pb-14 lg:min-h-[calc(100vh-72px)] lg:flex lg:items-center lg:justify-center overflow-x-hidden mb-10">
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
      <div className="relative z-20 w-full max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* COLUNA ESQUERDA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 w-full lg:w-1/2">
          <span className="inline-block w-max rounded-full bg-figueira-100/90 px-3 py-1 text-xs font-medium text-figueira-blue">
            Pré-lançamento exclusivo
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            Apartamentos de Alto&nbsp;Padrão ao&nbsp;Lado do&nbsp;Iguatemi&nbsp;Campinas
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90">
            Pré‑lançamento com unidades limitadas — apenas 80 apartamentos disponíveis em localização privilegiada
          </p>
          {/* COUNTDOWN */}
          <div className="w-full max-w-[90vw] max-w-xs bg-gradient-to-r from-figueira-50 via-white/80 to-figueira-50/80 border border-figueira-purple/20 shadow-lg rounded-2xl p-4 text-figueira-blue">
            <h3 className="text-base font-bold mb-3 text-center">A pré‑venda termina em</h3>
            <div className="grid grid-cols-4 gap-3">
              {["Dias", "Horas", "Min", "Seg"].map((l, i) => (
                <div key={l} className="flex flex-col items-center">
                  <span className="w-14 h-14 flex items-center justify-center rounded-lg bg-white/20 text-2xl font-extrabold">
                    {Object.values(timeLeft)[i]}
                  </span>
                  <span className="mt-1 text-xs font-medium">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* COLUNA FORM */}
        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:w-1/2">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
