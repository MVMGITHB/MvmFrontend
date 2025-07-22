import TermsConditions from "@/components/TermsAndCondtions/TermsConditions";

export const metadata = {
  title: "MVMB Terms of Use",
  description: "Read the terms of use for accessing and using MVMB’s digital marketing website and services.",
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
    <div><TermsConditions/></div>
  )
}

export default page