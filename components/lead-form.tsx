"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Phone } from "lucide-react"
import { AvatarImage } from "@radix-ui/react-avatar"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { useRouter } from "next/navigation"
import { useUTM } from "../hooks/useUTM"

export default function LeadForm() {
  const router = useRouter()
  const { sendUTMData } = useUTM()

  interface FormData { name: string; phone: string }
  interface FormErrors { name: string; phone: string }

  const [formData, setFormData] = useState<FormData>({ name: "", phone: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [errors, setErrors] = useState<FormErrors>({ name: "", phone: "" })

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        return value.length < 3 ? "Nome deve ter pelo menos 3 caracteres" : ""
      case "phone":
        return !/^(\d{10,11})$/.test(value.replace(/\D/g, "")) ? "Telefone inválido (10 ou 11 dígitos)" : ""
      default:
        return ""
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.target as HTMLInputElement
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (e.type === "blur" || value.length > 3) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name as keyof FormData, value) }))
    }
  }

  const formatPhoneNumber = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, "")
    if (cleaned.length === 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`
    }
    return cleaned
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setSubmitError("")
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      phone: validateField("phone", formData.phone),
    }
    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    const payload = {
      name: formData.name,
      email: null,
      cellPhone: formatPhoneNumber(formData.phone),
      interessePrincipal: null,
      field01: "morador",
      field02: null,
      field03: null,
      tenantId: 2,
      product: "casa-prado",
    }

    try {
      const response = await fetch("https://backend-ingressar.onrender.com/metropole/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error(`Erro ao enviar: ${response.status}`)
      try {
        await sendUTMData(formatPhoneNumber(formData.phone))
      } catch (_) {}
      router.push("/obrigado")
    } catch {
      setSubmitError("Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      id="lead-form"
      className="bg-white/95 mt-14 backdrop-blur-sm px-4 py-6 pb-10 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
    >
      <h3 className="text-base sm:text-lg font-semibold mb-2 text-center">Garanta acesso antecipado</h3>
      <h5 className="text-sm text-gray-500 text-center mb-4">
        Cadastre-se e receba plantas e condições de pré-lançamento no seu WhatsApp.
      </h5>

      {isSubmitted ? (
        <p className="text-green-600 text-sm text-center">Obrigado! Em breve entraremos em contato.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              name="name"
              placeholder="Seu nome"
              className={`pl-10 h-10 text-base ${errors.name ? "border-red-500" : ""}`}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="tel"
              name="phone"
              placeholder="Seu telefone"
              className={`pl-10 h-10 text-base ${errors.phone ? "border-red-500" : ""}`}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleChange}
              required
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {submitError && <p className="text-red-500 text-xs text-center">{submitError}</p>}

          <Button
            type="submit"
            className="w-full bg-figueira-purple hover:bg-figueira-indigo text-white h-10 rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Quero receber condições de pré-lançamento"}
          </Button>
          <SocialProofBlock />
        </form>
      )}
    </div>
  )
}

function SocialProofBlock() {
  const [count, setCount] = useState(258)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const id = setInterval(() => setCount((c) => c + 1), 10_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col items-center gap-1 mt-2 w-full">
      <div className="flex -space-x-2 overflow-hidden">
        {["aurora", "gil", "monica"].map((img, i) => (
          <Avatar key={i} className="border-2 border-white w-10 h-10">
            <AvatarImage src={`/clientes/${img}.webp`} alt={`Cliente ${i + 1}`} />
            <AvatarFallback />
          </Avatar>
        ))}
      </div>
      <p className="text-xs text-gray-700 font-medium mt-1 text-center">
        venda ativa: Interessados desde o lançamento {isMounted ? count : "..."}
      </p>
      <p className="text-[11px] text-gray-400 text-center">Atualizado em tempo real</p>
    </div>
  )
}
