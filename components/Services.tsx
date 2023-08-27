import classNames from "classnames"
import CardService from "./CardService"
import Text from "./Text"

const cardItems = [
  {
    image: "/images/service_1.webp",
    imgAlt: "",
    title: "How Can We Help You?",
    description:
      "Wherever you are, Louis Vuitton Client Advisors will be delighted to assist you.",
    links: [
      {
        url: "#",
        label: "Contact Us",
      },
    ],
  },
  {
    image: "/images/service_2.webp",
    imgAlt: "",
    title: "Art of Gifting",
    description:
      "Choose the perfect gift from our specially curated selection of products. ",
    links: [
      {
        url: "#her",
        label: "Gifts for Her",
      },
      {
        url: "#him",
        label: "Gifts for Him",
      },
    ],
  },
  {
    image: "/images/service_3.webp",
    imgAlt: "",
    title: "Personalization",
    description:
      "Louis Vuitton's personalization offer spans a wide range of services.",
    links: [
      {
        url: "#explore-collection",
        label: "Explore our Collections",
      },
    ],
  },
]

type ServicesProps = {
  title: string
}

const Services = ({ title = "Section Title" }: ServicesProps) => {
  return (
    <section
      className={classNames(
        "py-[60px] px-[24px] bg-white text-black",
        "md:py-[80px] md:px-[66px]"
      )}
    >
      <Text as="h2" className="text-center text-[24px] leading-[28px]">
        {title}
      </Text>

      <div
        className={classNames(
          "flex flex-col gap-8 mt-10 items-start",
          "lg:flex-row lg:gap-4"
        )}
      >
        {cardItems.map((card, i) => (
          <CardService
            key={i}
            imgSrc={card.image}
            imgAlt={card.imgAlt}
            title={card.title}
            description={card.description}
            links={card.links}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
