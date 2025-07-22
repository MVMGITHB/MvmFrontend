"use client"
import Link from "next/link";
import { useCountry } from "../context/CountryContext";

function MainServices({ data }) {

  const {country}= useCountry()
  return (
    <div className="bg-gray-900 text-white py-12 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center underline text-violet-400 mb-12">
        {data.title}
      </h1>

      <div className="min-h-s mx-auto flex flex-col lg:flex-row bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl">
        {data.img && (
          <div className="w-full lg:w-1/2">
            <img
              src={data.img}
              alt={data.title}
              className="w-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        )}

        <div className="w-full lg:w-1/2 p-4 sm:p-6">
          <ol className="list-decimal list-inside space-y-6">
            {data.points.map((item, index) => (
              <li
                key={index}
                className="text-2xl font-semibold text-violet-300"
              >
                {item.heading}
                <p className="text-base sm:text-lg leading-relaxed text-gray-300 mt-2 font-normal">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="flex justify-center pt-6">
            <Link href={`${country === "india" ? "" : "/au"}/contact`}>
              <button className="bg-violet-600 hover:bg-violet-700 text-white  font-semibold py-3 px-8 rounded-full shadow-lg transition-transform cursor-pointer duration-300 hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServices;
