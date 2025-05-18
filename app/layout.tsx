import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GradientBackground from "@/components/gradient-background"
import { GTM } from "@/components/GTM"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Avenida 105 Figueira - Apartamentos de Alto Padrão em Campinas",
  description:
    "Apartamentos de alto padrão ao lado do Shopping Iguatemi Campinas. Pré-lançamento exclusivo com apenas 80 unidades disponíveis.",
  generator: "marco.nascimento.dev",
  icons: {
    icon: [
      { url: '/logo-metropolev2.jpg' }
    ],
    apple: [
      { url: '/logo-metropolev2.jpg' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} overflow-x-hidden`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRPCGBGH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <GTM gtmId="GTM-KRPCGBGH" />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <GradientBackground />
          {children}
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
