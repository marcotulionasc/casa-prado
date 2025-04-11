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

  const validateField = (name, value) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Validate on blur or when user stops typing
    if (e.type === "blur" || value.length > 3) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
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
    <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg max-w-md w-full">
      <h3 className="text-xl font-bold mb-4">
        {isSubmitted ? "Obrigado pelo interesse!" : "Quero acessar as informações da pré-venda"}
      </h3>

      {isSubmitted ? (
        <p className="text-green-600">
          Em breve, nossa equipe entrará em contato com mais informações sobre o Avenida 105.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              name="name"
              placeholder="Seu nome"
              className={`pl-10 h-11 md:h-12 text-sm md:text-base ${errors.name ? "border-red-500" : ""}`}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="pl-10 h-12 text-base"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="tel"
              name="phone"
              placeholder="Seu telefone"
              className="pl-10 h-12 text-base"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-figueira-purple hover:bg-figueira-indigo text-white py-3 md:py-6 text-base h-auto min-h-[44px] md:min-h-[50px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Quero receber informações"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Seus dados estão seguros. Não compartilhamos suas informações.
          </p>
        </form>
      )}
    </div>
  )
}
