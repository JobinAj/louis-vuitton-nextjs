"use client"
import { useRef, useState } from "react"
import Button from "./Button"
import Text from "./Text"
import classNames from "classnames"
import Image from "next/image"

type ButtonData = {
  label?: string
  url?: string
}

type VideoBannerProps = {
  videoSrc?: string
  title?: string
  headingElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  imageSrc?: string
  imgAlt?: string
  primary?: boolean
  buttons?: ButtonData[]
  imgOption?: "image" | "video"
}

const VideoBanner = ({
  videoSrc = "/videos/video1.mp4",
  title = "Title",
  headingElement = "h1",
  imageSrc = "",
  imgAlt = "Image Alt",
  primary = false,
  buttons = [],
  imgOption = "video",
}: VideoBannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(false)
    }
  }

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(true)
    }
  }

  return (
    <section className={classNames("relative h-[660px]", "md:h-[80vh]")}>
      <div className="h-full">
        {imgOption === "image" ? (
          <Image
            src={imageSrc}
            alt={imgAlt}
            width={1405}
            height={791}
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Background Opacity */}
      <div
        className={classNames(
          "absolute bottom-0 w-full bg-video-gradient h-[400px]",
          primary ? "opacity-100" : " opacity-30"
        )}
      ></div>

      {/* CTA  */}
      <div className={classNames("absolute z-[1] bottom-0 left-0 w-full ")}>
        <div className="relative text-white flex flex-col items-center justify-center gap-6 text-center p-12">
          <Text as={headingElement} className="">
            {title}
          </Text>

          <div className={classNames("flex flex-col gap-4", "sm:flex-row ")}>
            {buttons.map((button, index) => (
              <Button
                url={button.url as string}
                label={button.label as string}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Play/Pause Button */}
      {imgOption === "video" ? (
        <div className="absolute bottom-0 right-0 z-20 text-white">
          <div className="relative">
            <button
              className={classNames(
                "pause m-[1rem] p-[.75rem] absolute",
                isPlaying ? "z-0 opacity-0" : "z-[1] opacity-100",
                "md:m-[3rem] "
              )}
              onClick={handlePauseVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            </button>

            <button
              className={classNames(
                "play m-[1rem] p-[.75rem] relative",
                isPlaying ? "z-[1] opacity-100" : "z-0 opacity-0",
                "md:m-[3rem] "
              )}
              onClick={handlePlayVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-inherit"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default VideoBanner
