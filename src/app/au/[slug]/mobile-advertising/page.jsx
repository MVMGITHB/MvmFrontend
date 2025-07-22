import MobileAdvertising from '@/components/Services/MobileAdvertising'

export const metadata = {
  title: "Mobile Ads That Capture User Attention",
  description: "Reach users where they are—on mobile. Deliver high-converting ads with precision targeting and creative design.",
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
    <MobileAdvertising/>
  )
}

export default page