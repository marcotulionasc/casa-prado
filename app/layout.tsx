import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GradientBackground from "@/components/gradient-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Avenida 105 Figueira - Apartamentos de Alto Padrão em Campinas",
  description:
    "Apartamentos de alto padrão ao lado do Shopping Iguatemi Campinas. Pré-lançamento exclusivo com apenas 80 unidades disponíveis.",
    generator: 'marco.nascimento.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <GradientBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'