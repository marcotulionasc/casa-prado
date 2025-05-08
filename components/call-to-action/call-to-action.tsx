"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, CalendarClock, CheckCircle } from "lucide-react"

interface CountdownTimerProps {
  targetDate: string
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

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
  }, [targetDate])

  return (
    <div className="flex justify-center gap-3 mt-2">
      {["Dias", "Horas", "Min", "Seg"].map((label, i) => (
        <div key={label} className="flex flex-col items-center min-w-0">
          <div className="bg-white/10 rounded-lg w-14 h-14 flex items-center justify-center text-2xl font-bold">
            {Object.values(timeLeft)[i]}
          </div>
          <span className="text-xs mt-1 break-words">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default function CallToAction() {
  const totalUnits = 30
  const reservedUnits = 18
  const percentReserved = (reservedUnits / totalUnits) * 100

  return (
    <section className="py-16 md:py-24 relative text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/call-to-action/image 2.webp')" }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#3F4FA9]/90 to-[#A55298]/90"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-white/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 container px-4 mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/10">
          <div className="flex flex-col md:flex-row gap-8 items-stretch md:items-center break-words">
            <div className="flex-1 text-left md:pr-6 min-w-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6 whitespace-nowrap">
                <CalendarClock className="h-4 w-4" />
                <span>Oferta por tempo limitado</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight break-words">
                Garanta sua unidade com condições exclusivas
              </h2>

              <p className="text-base md:text-lg text-gray-100 mb-6 break-words">
                Condições especiais válidas até{" "}
                <span className="font-bold">10/05/2025</span>.
              </p>

              <div className="flex items-start gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-300 shrink-0" />
                <p className="text-base font-medium break-words">
                  <span className="font-bold text-white"><strong>+50 clientes</strong> já com pastas montadas para o evento de lançamento.</span>
                </p>
              </div>

              <div className="w-full bg-white/10 rounded-full h-3 mb-1 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#7E60B9] to-[#A55298] h-full rounded-full transition-all duration-500"
                  style={{ width: `${percentReserved}%` }}
                ></div>
              </div>

              <Button className="w-full mt-8 md:w-auto px-6 sm:px-10 md:px-14 h-14 text-base md:text-lg font-semibold bg-white hover:bg-gray-100 text-[#3F4FA9] transition-all whitespace-nowrap">
                <Link href="#lead-form" className="flex items-center justify-center w-full h-full">
                  Quero receber informações
                </Link>
              </Button>
            </div>

            <div className="w-full md:w-auto">
              <div className="bg-gradient-to-br from-[#3F4FA9]/40 to-[#A55298]/40 p-6 rounded-2xl border border-white/10 text-center">
                <h3 className="text-xl font-bold mb-3 break-words">Oferta expira em:</h3>
                <CountdownTimer targetDate="2025-05-15T00:00:00" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
