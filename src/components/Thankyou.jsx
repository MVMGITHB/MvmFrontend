import React from "react";
import { CheckCircle2 } from "lucide-react"; // ✅ Success icon

export const metadata = {
  title: "Thank You | JobKityaari",
  description:
    "Thank you for registering at JobKityaari. Our team will get in touch with you shortly.",
  metadataBase: new URL("https://jobkityaari.com"),
  alternates: {
    canonical: "./thank-you",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Thankyou() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-black to-gray-800 px-6">
      <div className="bg-white shadow-2xl rounded-3xl p-14 text-center max-w-2xl transform transition-all hover:scale-[1.01]">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <CheckCircle2 className="text-blue-600 w-20 h-20 animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-blue-600 mb-5 tracking-tight">
          Thank You!
        </h1>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-10 px-2">
          <span className="font-semibold">
            We’ve received your registration.{" "}
          </span>
          An expert from our team will reach out to you shortly to understand
          your requirements. Meanwhile, feel free to explore our offerings and
          see how <span className="font-bold">JobKityaari</span> can help you
          find your dream job.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white text-lg px-8 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Back to Home
          </a>
          <a
            href="/jobs"
            className="inline-block bg-gray-200 text-gray-900 text-lg px-8 py-3 rounded-2xl font-semibold hover:bg-gray-300 transition shadow-lg"
          >
            Explore Jobs
          </a>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
