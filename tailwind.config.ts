import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          "Louis Vuitton Web",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        border: "inset  0 0 0 1px #fff",
        "link-underline": "0 1px 0 rgba(0,0,0, .6)",
      },
      backgroundImage: {
        "video-gradient": "linear-gradient(0deg, #000 0%, transparent 100%)",
      },
    },
  },
  plugins: [],
}
export default config
