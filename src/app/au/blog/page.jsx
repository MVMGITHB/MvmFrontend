import Blog from "@/components/blog/Blog"

export const metadata = {
  title: "Digital Marketing Insights & Expert Tips",
  description: "Stay ahead with expert blogs on SEO, branding, paid ads, and social media. Actionable insights to boost your business.",
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
    <div><Blog/></div>
  )
}

export default page