import WebDevelopment from "@/components/Services/WebDevelopment"

export const metadata = {
  title:"Website Development That Drives Growth",
  description:
    "Build fast, scalable websites that convert. Our dev team creates digital experiences your customers love.",
  metadataBase: new URL("https://mvmbs.com"),
  alternates: {
    canonical: "./",
  },

  robots: {
    index: false,
    follow: false, 
  },
};


function page() {
  return (
    <WebDevelopment/>
  )
}

export default page