"use client"

import type React from "react"
import LeadForm from "../lead-form"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date("2025-05-10T00:00:00").getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

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
          <div className="grid h-full gap-6 lg:gap-16 lg:grid-cols-2 lg:items-center">
            {/* Texto */}
            <div className="space-y-4 text-center lg:text-left lg:flex lg:flex-col lg:justify-center">
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

              <div className="lg:hidden bg-figueira-100/90 p-2 rounded-2xl border border-white/10 text-center">
                <h3 className="text-xl font-bold mb-2 break-words text-figueira-blue">A Pré-Venda acaba em:</h3>
                <div className="flex justify-center gap-3 mt-2">
                  {["Dias", "Horas", "Min", "Seg"].map((label, i) => (
                    <div key={label} className="flex flex-col items-center min-w-0">
                      <div className="bg-white/10 rounded-lg w-14 h-14 flex items-center justify-center text-2xl font-bold text-figueira-blue">
                        {Object.values(timeLeft)[i]}
                      </div>
                      <span className="text-xs mt-1 break-words text-figueira-blue">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

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
