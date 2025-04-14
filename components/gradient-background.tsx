"use client"

import { useEffect, useRef } from "react"

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar o canvas para o tamanho da tela
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGradient()
    }

    // Desenhar o padrão de pontos com gradiente
    const drawGradient = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Cores do Avenida 105 Figueira
      const colors = [
        "#3F4FA9", // Azul
        "#4659B8", // Indigo
        "#6E48AE", // Roxo
        "#7E60B9", // Lavanda
        "#A55298", // Magenta
        "#CC607F", // Rosa/Vinho
      ]

      // Criar pontos com tamanhos variados
      const numPoints = Math.floor((canvas.width * canvas.height) / 1000)

      for (let i = 0; i < numPoints; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 5 + 1

        // Selecionar cor baseada na posição vertical (gradiente)
        const colorIndex = Math.floor((y / canvas.height) * colors.length)
        const color = colors[Math.min(colorIndex, colors.length - 1)]

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-10" aria-hidden="true" />
}
