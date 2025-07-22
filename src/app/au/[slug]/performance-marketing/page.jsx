import PerformanceMarketing from "@/components/Services/PerformanceMarketing"

export const metadata = {
  title: "Performance Marketing That Fuels Sales",
  description: "Data-driven performance marketing with guaranteed ROI. Get leads, sales, and measurable success across platforms.",
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
    <PerformanceMarketing/>
    </>
  )
}

export default page