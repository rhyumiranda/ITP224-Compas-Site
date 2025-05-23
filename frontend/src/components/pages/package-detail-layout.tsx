import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "./site-footer"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

interface PackageDetailLayoutProps {
  title: string
  price: number
  heroImage: string
  descriptions: string[]
  services: string[]
  otherThingsToDoText: string
  galleryImages: { src: string; alt: string }[]
}

export function PackageDetailLayout({
  title,
  price,
  heroImage,
  descriptions,
  services,
  otherThingsToDoText,
  galleryImages,
}: PackageDetailLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full">
          <Image src={heroImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="container px-4 md:px-6 py-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{title}</h1>
              <p className="text-xl md:text-2xl text-white/90">${price.toLocaleString()} - All Inclusive</p>
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 py-8 md:py-12">
          <Link
            href="/#packages"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black mb-6"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to all packages
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Descriptions */}
              <div className="space-y-6">
                {descriptions.map((description, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {description}
                  </p>
                ))}
              </div>

              <Separator />

              {/* Services Offered */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mr-2 text-black"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Other Things To Do */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Other Things To Do</h2>
                <p className="text-gray-700 mb-6">{otherThingsToDoText}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square relative overflow-hidden rounded-md">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Book This Package</h3>
                  <p className="text-gray-500 mb-4">Secure your adventure today!</p>
                  <Button className="w-full bg-black text-white hover:bg-black/90">Book Now</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                  <p className="text-gray-500 mb-4">Our adventure specialists are ready to assist you.</p>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
