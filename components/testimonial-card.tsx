"use client"

import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  rating: number
  testimonial: string
}

export default function TestimonialCard({ name, role, image, rating, testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>

      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-figueira-lavender fill-figueira-lavender" : "text-gray-300"}`}
          />
        ))}
      </div>

      <p className="text-gray-600 italic">"{testimonial}"</p>
    </div>
  )
}
