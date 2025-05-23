import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface PackageCardProps {
  id: string
  title: string
  description: string
  price: number
  imageSrc: string
  imageAlt: string
  inverted?: boolean
}

export function PackageCard({ id, title, description, price, imageSrc, imageAlt, inverted = false }: PackageCardProps) {
  return (
    <Card className={`overflow-hidden ${inverted ? "bg-black text-white" : "bg-white"}`}>
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className={`min-h-25 mt-4 ${inverted ? "text-gray-300" : "text-gray-500"}`}>
          <p>{description}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-3xl font-bold">${price.toLocaleString()}</span>
        </div>
        <p className={`mt-1 text-sm ${inverted ? "text-gray-300" : "text-gray-500"}`}>
          Includes lodging, food and airfare
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button
          className={`min-w-3xs ${
            inverted ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90"
          }`}
          asChild
        >
          <Link href={`/packages/${id}`}>Book Now</Link>
        </Button>
        <Button
          variant="outline"
          className={`${
            inverted ? "border-white text-white bg-transparent" : "border-black text-black hover:bg-black/10"
          }`}
          asChild
        >
          <Link href={`/packages/${id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
