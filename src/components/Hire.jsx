"use client"

import Link from "next/link";
import { useCountry } from "./context/CountryContext";

function Hire() {
  const { country } = useCountry();
  return (
    <div className="bg-gray-200 text-black text-center flex flex-col items-center justify-center h-screen px-4 md:px-12">
      <p className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 w-[90%] sm:w-4/5 lg:w-3/5 text-center leading-snug">
        Let’s collaborate and craft innovative marketing strategies to elevate
        your brand and drive remarkable customer acquisition.
      </p>
      <Link href={`${country === "india" ? "" : "/au"}/contact`}>
        <button className="w-56 bg-gray-800 cursor-pointer text-white text-lg px-6 py-3 rounded-md transition duration-300 mt-6 hover:bg-gray-700">
          Contact Us
        </button>
      </Link>
    </div> 
  );
}

export default Hire;
