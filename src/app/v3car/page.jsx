import BajajFinserv from "@/components/Partners/PartnerNames/BajajFinserv";
import V3car from "@/components/Partners/PartnerNames/V3car";

export const metadata = {
  title: "MVM Business Services | Data-Driven Digital Marketing Agency",
  description: "Grow your brand with MVM Business Services – experts in digital marketing, SEO, social media, and web development.",
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
      <V3car />
    </>
  );
}

export default page;
