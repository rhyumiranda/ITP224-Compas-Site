import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AdventureCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reversed?: boolean
  direct: string
}

export function AdventureCard({ title, description, imageSrc, imageAlt, reversed = false, direct }: AdventureCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className={`order-2 ${reversed ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-500 max-w-sm">{description}</p>
      </div>
      <div className={`order-1 ${reversed ? "md:order-1" : "md:order-2"}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg object-cover w-full h-[300px]"
        />
      </div>
    </div>
  )
}
