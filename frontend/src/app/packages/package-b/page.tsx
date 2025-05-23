import { PackageDetailLayout } from "@/components/package-detail-layout"

export default function PackageBPage() {
  return (
    <PackageDetailLayout
      title="California Surfing Adventure"
      price={960}
      heroImage="/images/detail/package-b/b-main.avif"
      descriptions={[
        "Summertime in southern California, what could be better? Let us know what you're looking for and we'll find it and take you there. Do you want big, fast waves or gentle rollers? Do you prefer a slamming beach break or a long, peeling point break? California's got it all so sign up now before summer's gone.",
        "You'll stay at the centrally located Newport Bonita in Newport Beach. From there you can strike out to Trestles, Malibu, Salt Creek, The Wedge, San Onofre, and a dozen secret spots. Or, you can just walk out to the local beach breaks.",
      ]}
      services={["Airfare", "Lodging", "Food", "Local Guide"]}
      otherThingsToDoText="Take a look at our slide show. We've got several snap shots of the area around your hotel, including some great places to eat, drink, or just hang out."
      galleryImages={[
        {
          src: "/images/detail/package-b/b-1.avif",
          alt: "Devil's Tower landscape",
        },
        {
          src: "/images/detail/package-b/b-2.avif",
          alt: "Local restaurant",
        },
        {
          src: "/images/detail/package-b/b-3.avif",
          alt: "Hiking trail",
        }
      ]}
    />
  )
}
