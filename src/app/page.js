import HomeMain from "@/components/home/HomeMain";

export const metadata = {
  title: "Drive Growth with Expert Digital Marketing",
  description:
    "Unlock business success with top digital marketing experts in Noida. From SEO to paid ads, we deliver results that matter.",
  metadataBase: new URL("https://mvmbs.com"),
  alternates: {
    canonical: "./",
  },
};

export default function Home() {
  return (
    <div>
      <HomeMain />
    </div>
  );
}
