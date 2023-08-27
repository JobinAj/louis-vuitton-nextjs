import Image from "next/image"
import Link from "next/link"
import Text from "./Text"
import classNames from "classnames"

type LinkItem = {
  label?: string
  url?: string
}

type CardServiceProps = {
  imgSrc?: string
  imgLink?: string
  imgAlt?: string
  title?: string
  description?: string
  links?: LinkItem[]
}

const CardService = ({
  imgSrc = "http://via.placeholder.com/413x233",
  imgLink = "#img-link",
  imgAlt = "",
  title = " Card Title",
  description = "",
  links = [],
}: CardServiceProps) => {
  return (
    <div className={classNames("flex flex-col w-full", "md:flex-1")}>
      <Link href={imgLink}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={413}
          height={233}
          className="w-full"
        />
      </Link>

      <div className="mt-6">
        <Text as="h3" className="mb-2 text-[18px] leading-[24px]">
          {title}
        </Text>

        <div className="text-[14px]">{description}</div>

        <ul className="flex items-start gap-4 mt-2">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                href={link.url as string}
                className="shadow-link-underline text-[14px] leading-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CardService
