import BrandMarketing from "@/components/Services/BrandMarketing"

export const metadata = {
  title: "Build a Powerful Brand That Converts",
  description: "Create a brand people remember. From identity to strategy—we craft brands that drive loyalty and growth.",
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
    <BrandMarketing/>
  )
}

export default page