import { PackageDetailLayout } from "@/components/package-detail-layout"

export default function PackageCPage() {
  return (
    <PackageDetailLayout
      title="New Zealand Mountain Biking"
      price={1490}
      heroImage="/images/detail/package-c/c-main.avif"
      descriptions={[
        "The Karapoti Trail, home to the Trek Karapoti Classic, twists around the Akatarawa Range and delivers 31 miles of technical single track and challenging fire road climbs. During the ride there are several vistas to soothe those eyes while you reward your burning legs by taking a quick breather.",
        "Upper Hutt is New Zealand's mountain biking hub, and if you're looking for a group ride, stop by Mountain Trails bike shop. Or if you want a number plate on your handlebar, the Trek Karapoti Classic is scheduled for March 4, 2001.",
      ]}
      services={["Airfare", "Lodging", "Food", "Local Guide"]}
      otherThingsToDoText="Take a look at our slide show. We've got several snap shots of the area around your hotel, including some great places to eat, drink, or just hang out."
      galleryImages={[
        {
          src: "/images/detail/package-c/c-1.avif",
          alt: "Devil's Tower landscape",
        },
        {
          src: "/images/detail/package-c/c-2.jpg",
          alt: "Local restaurant",
        },
        {
          src: "/images/detail/package-c/c-3.jpg",
          alt: "Hiking trail",
        }
      ]}
    />
  )
}
