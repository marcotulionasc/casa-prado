"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Mail, Phone } from "lucide-react"

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [errors, setErrors] = useState({
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
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }))

    if (e.type === "blur" || value.length > 3) {
      setErrors((prev: FormErrors) => ({
        ...prev,
        [name]: validateField(name as keyof FormData, value),
      }))
    }
  }

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
        })
      }, 3000)
    }, 1000)
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-lg max-w-sm w-full mx-auto">
      <h3 className="text-base md:text-lg font-semibold mb-3 text-center">
        {isSubmitted ? "Obrigado pelo interesse!" : "Quero acessar as informações da pré-venda"}
      </h3>

      {isSubmitted ? (
        <p className="text-green-600 text-sm text-center">
          Em breve, nossa equipe entrará em contato com mais informações sobre o Avenida 105.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-9 w-4 text-gray-400" />
            <Input
              type="text"
              name="name"
              placeholder="Seu nome"
              className={`pl-10 h-9 text-sm ${errors.name ? "border-red-500" : ""}`}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-9 w-4 text-gray-400" />
            <Input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="pl-10 h-9 text-sm"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-2.5 h-9 w-4 text-gray-400" />
            <Input
              type="tel"
              name="phone"
              placeholder="Seu telefone"
              className="pl-10 h-9 text-sm"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-figueira-purple hover:bg-figueira-indigo text-white text-sm h-9"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Quero receber informações"}
          </Button>

          <p className="text-sm text-gray-500 text-center leading-snug">
            Seus dados estão seguros. Não compartilhamos suas informações.
          </p>
        </form>
      )}
    </div>
  )
}
