import SocialMediaMarketing from '@/components/Services/SocialMediaMarketing'

export const metadata = {
  title: "Social Media That Drives Real Engagement",
  description: "From strategy to growth—turn followers into customers with expert-led social media marketing campaigns.",
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
    <SocialMediaMarketing/>
  )
}

export default page