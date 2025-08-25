import ThankYou from "@/components/Thankyou.jsx";

export const metadata = {
  title: "Thank You | MVMB",
  description:
    "Thank you for contacting MVMB. We will get back to you shortly.",
  metadataBase: new URL("https://mvmbs.com"),
  alternates: {
    canonical: "./thank-you",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Page() {
  return (
    <div>
      <ThankYou />
    </div>
  );
}

export default Page;
