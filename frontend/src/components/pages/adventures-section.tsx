import { SectionTitle } from "@/components/section-title"
import { AdventureCard } from "./adventure-card"

export function AdventuresSection() {
  return (
    <section id="adventures" className=" wrapper w-full py-12 md:py-24 lg:py-32">
      <div className=" flex-col justify-center items-center px-4 md:px-6">
        <SectionTitle
          badge="Featured Adventures"
          title="Explore Our Top Destinations"
          description="Discover our most thrilling adventures and breathtaking destinations around the world."
        />

        <div className="grid gap-10">
          <AdventureCard
            title="Conquering the rapids of the Rutan Islands"
            description="Definitely our craziest journey ever! A beautiful collage of nature. Rapids reaching nearly 50 mph, more than a dozen waterfalls (various sizes), and some killer rocks gave us the biggest rush. Nothing beats the feeling of complete loss of control! The Rutan Islands also has a lighter, more relaxing side -- check out the local villages."
            imageSrc="/images/adventures/rutan.jpg"
            imageAlt="Rapids in the Rutan Islands"
            direct="/adventure/rutan-islands"
          />

          <AdventureCard
            title="Scaling mountains in Manurai"
            description="Some of the steepest cliffs around! My buddy and I began our 3 day scale above the majestic raging waters of Nanna. The views from the summit are absolutely breathtaking and worth every moment of the challenging climb."
            imageSrc="/images/adventures/mountains.jpg"
            imageAlt="Mountain climbing in Manurai"
            reversed={true}
            direct="/adventure/manurai-mountains"
          />

          <AdventureCard
            title="Cycling the Irma coastline"
            description="Beautiful scenery combined with steep inclines and fast roads allowed for some great cycling. Don't forget the helmet!! The coastal views and fresh sea breeze make this one of our most popular adventures for cycling enthusiasts."
            imageSrc="/images/adventures/cycle.jpg"
            imageAlt="Cycling along the Irma coastline"
            direct="/adventure/cycling-coastline"
          />
        </div>
      </div>
    </section>
  )
}
