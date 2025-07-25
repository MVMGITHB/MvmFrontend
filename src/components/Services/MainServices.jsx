"use client";
import Link from "next/link";
import { useCountry } from "../context/CountryContext";

function MainServices({ data }) {
  const { country } = useCountry();

  return (
    <div className="bg-[#1e1e1e] w-full mx-auto p-4  pt-6">
     <section>
       <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold text-white">Growth,</h2>
          <h2 className="text-4xl font-semibold text-white">Curated with Intent</h2>

          <p className="text-md text-white">
            <span>Concept → </span>
            <span>Story → </span>
            <span>Audience → </span>
            <span>Engage → </span>
            <span>Recall</span>
          </p>

          <div className="flex flex-row items-center gap-6">
            <button className="bg-[#008BCB] text-white rounded px-4 py-2 hover:bg-[#0075af] transition">
              Get Started
            </button>
            <Link href={`/${country}/case-studies`} className="text-base text-white underline hover:text-[#008BCB]">
              View Case Studies
            </Link>
          </div>
        </div>

        <img src="/images/graph with arrow.webp" alt="Growth Graph" className="w-full max-w-md" />
      </div>
     </section>

     <section className="w-full mx-auto p-4  pt-6">
      <h3 className="text-center pt-6 text-[30px] font-bold">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        
      </div>
     </section>
    </div>
  );
}

export default MainServices;
