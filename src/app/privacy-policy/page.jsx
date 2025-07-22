import Policy from "@/components/Policy"


export const metadata = {
  title: "MVMBS Privacy Policy",
  description: "Learn how MVMB collects, stores, and protects your data. We respect your privacy and keep it secure.",
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
    <Policy/>
    </>
  )
}

export default page