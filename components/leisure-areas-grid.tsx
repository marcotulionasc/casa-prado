import Image from "next/image"

type LeisureArea = {
  id: number
  name: string
  image: string
}

interface LeisureAreasGridProps {
  areas: LeisureArea[]
}

export default function LeisureAreasGrid({ areas }: LeisureAreasGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {areas.map((area) => (
        <div
          key={area.id}
          className="relative w-full h-64 rounded-lg overflow-hidden"
        >
          <Image
            src={area.image}
            alt={area.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center">
            <div className="bg-figueira-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
              {area.id}
            </div>
            <h4 className="text-white font-medium">{area.name}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}
