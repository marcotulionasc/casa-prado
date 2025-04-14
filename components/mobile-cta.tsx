"use client"

import { Button } from "@/components/ui/button"

export function MobileCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg">
      <Button
        className="py-3 px-6 text-base font-medium bg-figueira-purple hover:bg-figueira-indigo text-white rounded-md w-full py-6"
        onClick={() => document.getElementById("hero-form-mobile")?.scrollIntoView({ behavior: "smooth" })}
      >
        Quero acessar a pré-venda
      </Button>
    </div>
  )
}
