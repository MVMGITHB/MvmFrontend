import ContactHome from "@/components/contact/ContactHome"

export const metadata = {
  title: "Contact MVMB – Digital Marketing in Noida",
  description: "Visit our office in Noida Sector 62 or get in touch online. Let’s build your brand with data-driven digital strategies.",
  metadataBase: new URL("https://mvmbs.com"),
  alternates: {
    canonical: "./",
  },
  robots: {
    follow: false, 
  },
};



function page() {
  return (
    <div>
        <ContactHome />
    </div>
  )
}

export default page