import type React from "react"
import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import GradientBackground from "@/components/gradient-background"
import { GTM } from "@/components/GTM"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" })

export const metadata = {
  title: "Casa Prado – Lançamento exclusivo no Parque Prado",
  description:
    "Apartamentos de 2 e 3 dormitórios, 69 a 96 m², todos com 3 banheiros e varanda gourmet. Torre única com 102 unidades no Parque Prado, Campinas.",
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
      <body className={`${inter.variable} ${playfair.variable} overflow-x-hidden`}>
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
