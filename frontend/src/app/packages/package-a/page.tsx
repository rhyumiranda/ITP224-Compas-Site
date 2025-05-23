import { PackageDetailLayout } from "@/components/package-detail-layout"
export default function PackageAPage() {
  return (
    <PackageDetailLayout
      title="Devil's Tower Climbing Adventure"
      price={740}
      heroImage="/images/detail/package-a/a-main.avif"
      descriptions={[
        "Wyoming's climbing Mecca, Devil's Tower, stands at 865 feet and offers the beginner or the expert 200 fun and challenging routes. (In fact a 6-year-old boy conquered the tower in 1994.) The array of cracks in the walls allows you to use your imagination as you test your climbing skills.",
        "President Teddy Roosevelt named Devil's Tower the national monument in 1906. Today, the park hosts approximately 450,000 visitors annually. And 5,000 of those visitors are climbers. But beware, environmentalists are trying to limit that number, so treat the park with respect.",
      ]}
      services={["Airfare", "Lodging", "Food", "Local Guide"]}
      otherThingsToDoText="Take a look at our slide show. We've got several snap shots of the area around your hotel, including some great places to eat, drink, or just hang out."
      galleryImages={[
        {
          src: "/images/detail/package-a/a-1.avif",
          alt: "Devil's Tower landscape",
        },
        {
          src: "/images/detail/package-a/a-2.avif",
          alt: "Local restaurant",
        },
        {
          src: "/images/detail/package-a/a-3.avif",
          alt: "Hiking trail",
        }
      ]}
    />
  )
}
