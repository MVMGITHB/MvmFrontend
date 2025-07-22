import ContentWriting from "@/components/Services/ContentWriting"

export const metadata = {
  title: "Content Writing That Converts & Ranks",
  description: "Engage, rank, and convert with expert content. From blogs to websites—we write words that work for your brand.",
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
    <ContentWriting/>
  )
}

export default page

