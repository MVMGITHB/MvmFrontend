"use client";

import Link from "next/link";
import { useCountry } from "./context/CountryContext";

function Hire() {
  const { country } = useCountry();

  return (
    <section className="relative bg-black text-center flex flex-col items-center justify-center min-h-[60vh] py-20 px-6 overflow-hidden">
      {/* Decorative glowing background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-600 opacity-20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-snug">
          Let’s collaborate and craft{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            innovative marketing strategies
          </span>{" "}
          to elevate your brand and drive{" "}
          <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">
            remarkable customer acquisition
          </span>
          .
        </h2>

        <Link href={`${country === "india" ? "" : "/au"}/contact`}>
          <button className="mt-10 w-56 py-3 px-6 rounded-xl text-lg font-semibold text-black bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.7)] transition-all duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hire;
