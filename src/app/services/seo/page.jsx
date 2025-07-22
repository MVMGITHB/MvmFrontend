import Seo from "@/components/Services/Seo"

export const metadata = {
  title: "SEO Services That Rank & Convert",
  description: "Climb Google rankings and get traffic that converts. Our SEO experts ensure your brand is always found first.",
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
    <Seo/>
  )
}

export default page