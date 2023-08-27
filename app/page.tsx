import Services from "@/components/Services"
import VideoBanner from "@/components/VideoBanner"

export default function Home() {
  return (
    <main className="">
      <VideoBanner
        primary
        headingElement="h1"
        title="Louis Vuitton Blossom"
        imgOption="image"
        imageSrc="/images/jewelry_blossom.webp"
        imgAlt="Jewelry Blossom"
        buttons={[
          {
            label: "Discover the Collection",
            url: "#",
          },
          {
            label: "Explore the Campaign",
            url: "#",
          },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        title="LV by the Pool"
        imgOption="video"
        videoSrc="/videos/video2.mp4"
        imgAlt="Jewelry Blossom"
        buttons={[
          {
            label: "Discover the Collection",
            url: "#",
          },
          {
            label: "Explore the Campaign",
            url: "#",
          },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        title="Taurillon Monogram and Monogram Macassar"
        imgOption="video"
        videoSrc="/videos/video3.mp4"
        imgAlt="Jewelry Blossom"
        buttons={[
          {
            label: "Explore the Collection",
            url: "#",
          },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        title="The Capucines"
        imgOption="video"
        videoSrc="/videos/video4.mp4"
        imgAlt="Jewelry Blossom"
        buttons={[
          {
            label: "Discover the Bag",
            url: "#",
          },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        title="Tambour"
        imgOption="video"
        videoSrc="/videos/video7.mp4"
        imgAlt="Jewelry Blossom"
        buttons={[
          {
            label: "Explore the Collection",
            url: "#",
          },
          {
            label: "Discover the Campaign",
            url: "#",
          },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        title="Pacific Chill"
        imgOption="image"
        imageSrc="/images/fragrances.webp"
        imgAlt="Pacific Chill Fragrance"
        buttons={[
          {
            label: "Shop the Fragrance",
            url: "#",
          },
          {
            label: "Explore the Campaign",
            url: "#",
          },
        ]}
      />

      <VideoBanner
        headingElement="h2"
        title="LV Academy"
        imgOption="image"
        imageSrc="/images/academy.jpeg"
        imgAlt="LV Academy"
        buttons={[
          {
            label: "Discover the Collection",
            url: "#",
          },
        ]}
      />

      <Services title="Services" />
    </main>
  )
}
