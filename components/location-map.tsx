"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import Image from "next/image"

export default function LocationMap() {
  const [activePoint, setActivePoint] = useState<string | null>(null)

  const points = [
    { id: "shopping", name: "Shopping Iguatemi", distance: "2 min a pé", x: 60, y: 40 },
    { id: "parque", name: "Parque das Flores", distance: "5 min a pé", x: 30, y: 60 },
    { id: "hospital", name: "Hospital São Lucas", distance: "8 min de carro", x: 75, y: 70 },
    { id: "escola", name: "Colégio Objetivo", distance: "6 min a pé", x: 45, y: 25 },
  ]

  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-200">
      <Image
        src="/placeholder.svg?height=400&width=600"
        alt="Mapa de localização Avenida 105"
        fill
        className="object-cover"
      />

      {/* Pontos no mapa */}
      {points.map((point) => (
        <div
          key={point.id}
          className="absolute z-10 cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
          onMouseEnter={() => setActivePoint(point.id)}
          onMouseLeave={() => setActivePoint(null)}
        >
          <div className="relative p-2">
            {" "}
            {/* Adicionado padding para aumentar área de toque */}
            <MapPin className="h-6 w-6 text-figueira-purple" />
            {activePoint === point.id && (
              <div className="absolute left-6 top-0 bg-white p-2 rounded shadow-md text-sm min-w-[150px] max-w-[200px]">
                <div className="font-bold">{point.name}</div>
                <div className="text-gray-600">{point.distance}</div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Marcador principal */}
      <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2" style={{ left: "50%", top: "50%" }}>
        <div className="relative">
          <div className="h-8 w-8 bg-figueira-purple rounded-full flex items-center justify-center">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 translate-y-full bg-figueira-purple text-white px-2 py-1 rounded text-xs whitespace-nowrap">
            Avenida 105
          </div>
        </div>
      </div>
    </div>
  )
}
