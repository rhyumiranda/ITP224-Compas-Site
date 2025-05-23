import { SectionTitle } from "@/components/section-title"
import { PackageCard } from "./package-card"

export function PackagesSection() {
  return (
    <section id="packages" className="w-full py-12 md:py-24 lg:py-32 dark:bg-zinc-950 bg-gray-50">
      <div className="wrapper px-4 md:px-6">
        <SectionTitle
          badge="Travel Packages"
          title="Adventure Awaits"
          description="Compass works hard to bring you the best possible trips for your rugged lifestyle. Here you'll find our latest travel packages suited for the adventure spirit."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <PackageCard
            id="package-a"
            title="Package A"
            description="In this three day trip you'll scale the majestic cliffs of beautiful Devil's Tower, Wyoming"
            price={740}
            imageSrc="/images/packages/rock.jpg"
            imageAlt="Rock climbing at Devil's Tower"
          />
          <PackageCard
            id="package-b"
            title="Package B"
            description="Be ready to go on a moment's notice. We will call you when the surf is pumping and fly you out for five mornings of hurricane inspired summertime swells."
            price={960}
            imageSrc="/images/packages/surf.jpg"
            imageAlt="Surfing on hurricane swells"
            inverted={true}
          />
          <PackageCard
            id="package-c"
            title="Package C"
            description="Beautiful scenery combined with steep inclines and fast roads allowed for some great cycling. Don't forget the helmet!!"
            price={1490}
            imageSrc="/images/packages/bike.jpg"
            imageAlt="Cycling through scenic roads"
          />
        </div>
      </div>
    </section>
  )
}
