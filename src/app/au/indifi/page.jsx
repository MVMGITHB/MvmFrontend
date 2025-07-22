import Indifi from "@/components/Partners/PartnerNames/Indifi"

export const metadata = {
  title: "MVM Business Services | Data-Driven Digital Marketing Agency",
  description: "Grow your brand with MVM Business Services – experts in digital marketing, SEO, social media, and web development.",
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
    <>
    <Indifi/>
    </>
  )
}

export default page