"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Mail, Phone } from "lucide-react"
import { AvatarImage } from "@radix-ui/react-avatar"
import { Avatar, AvatarFallback } from "./ui/avatar"

export default function LeadForm() {
  interface FormData {
    name: string
    email: string
    phone: string
  }

  interface FormErrors {
    name: string
    email: string
    phone: string
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
  })

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        return value.length < 3 ? "Nome deve ter pelo menos 3 caracteres" : ""
      case "email":
        return !/^\S+@\S+\.\S+$/.test(value) ? "Email inválido" : ""
      case "phone":
        return !/^(\d{10,11})$/.test(value.replace(/\D/g, "")) ? "Telefone inválido (10 ou 11 dígitos)" : ""
      default:
        return ""
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Valida conforme o usuário digita ou sai do campo
    if (e.type === "blur" || value.length > 3) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name as keyof FormData, value),
      }))
    }
  }

  const formatPhoneNumber = (phone: string): string => {
    // Remove todos os caracteres não numéricos
    return phone.replace(/\D/g, "")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setSubmitError("")

    // Validação completa antes do envio
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    }

    // Se houver algum erro, interrompe o envio
    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Preparar o payload conforme o formato solicitado
    const payload = {
      name: formData.name,
      email: formData.email,
      cellPhone: formatPhoneNumber(formData.phone),
      interessePrincipal: null,
      field01: "morador",
      field02: null,
      field03: null,
    }

    try {
      const response = await fetch("https://backend-ingressar.onrender.com/metropole/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Erro ao enviar: ${response.status}`)
      }

      // Sucesso
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
        })
        setErrors({
          name: "",
          email: "",
          phone: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitError("Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg max-w-md w-full mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-center">
        {isSubmitted ? "Obrigado pelo interesse!" : "Quero acessar as informações da pré-venda"}
      </h3>

      {isSubmitted ? (
        <p className="text-green-600 text-sm text-center">
          Em breve, nossa equipe entrará em contato com mais informações sobre o Avenida 105.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              name="name"
              placeholder="Seu nome"
              className={`pl-10 h-10 w-full text-sm ${errors.name ? "border-red-500" : ""}`}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleChange}
              aria-invalid={!!errors.name}
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className={`pl-10 h-10 w-full text-sm ${errors.email ? "border-red-500" : ""}`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleChange}
              aria-invalid={!!errors.email}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="tel"
              name="phone"
              placeholder="Seu telefone"
              className={`pl-10 h-10 w-full text-sm ${errors.phone ? "border-red-500" : ""}`}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleChange}
              aria-invalid={!!errors.phone}
              required
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {submitError && <p className="text-red-500 text-xs text-center">{submitError}</p>}

          <Button
            type="submit"
            className="w-full bg-figueira-purple hover:bg-figueira-indigo text-white text-sm h-10"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Quero receber informações"}
          </Button>

          {/* Ajuste para exibir as bolinhas lado a lado (igual ao exemplo da imagem) */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex -space-x-2 overflow-hidden mb-4">
              <Avatar className="border-2 border-white">
                <AvatarImage src="/clientes/aurora.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="/clientes/gil.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white">
                <AvatarImage src="/clientes/monica.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            </div>
            <p className="text-sm text-gray-400">201 pessoas já preencheram o formulário!</p>
          </div>
        </form>
      )}
    </div>
  )
}
