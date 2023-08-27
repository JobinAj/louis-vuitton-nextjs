import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type TextProps = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  children: ReactNode
  className?: string
}

const Text = ({ as: Element = "h1", children, className = "" }: TextProps) => {
  return (
    <Element
      className={twMerge(
        "text-[32px] leading-[40px] tracking-[.4px]",
        className
      )}
    >
      {children}
    </Element>
  )
}

export default Text
