import AffiliateMarketing from "@/components/Services/AffiliateMarketing";

export const metadata = {
  title: "Affiliate Marketing for Scalable Revenue",
  description: "Tap into top affiliate networks to drive results. Boost ROI with smart, performance-based marketing strategies.",
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
 < AffiliateMarketing/>
  </>
 )
}

export default page