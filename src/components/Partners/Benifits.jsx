"use client";
import Link from "next/link";

export default function Benifits({ benifits, pros }) {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex flex-col lg:flex-row gap-4 w-full max-w-6xl items-stretch">
        
       <div className="w-full lg:w-1/4 flex items-center justify-center   p-2 min-h-[400px]">
          <Link href={benifits[0].site} target="_blank"   rel="noopener" className="block w-full h-full">
            <img
              src={benifits[0].benifirst}
              alt="Left Banner"
              className="w-full h-full rounded-2xl shadow-lg object-fill"
            />
          </Link>
        </div>

        <div
          className="flex-grow min-h-[400px] rounded-2xl shadow-2xl p-6 flex items-center justify-center relative bg-white"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/flat-design-minimalist-background_23-2149987685.jpg?ga=GA1.1.1414107002.1745826214&semt=ais_hybrid&w=740')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-2xl z-0"></div>
          <div className="relative z-10 w-full max-w-3xl text-center flex flex-col items-center justify-center space-y-6">
            <h2 className="text-3xl text-blue-700 font-bold font-rubik underline">
              Key Benefits
            </h2>

            <ul className="list-disc list-outside text-blue-700 font-rubik text-lg lg:text-xl text-left px-4">
              {pros?.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <Link href={benifits[0].site} target="_blank"  rel="noopener">
              <button className="bg-orange-600 cursor-pointer text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-700 transition">
                Know More
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/4 flex items-center justify-center  p-2 min-h-[400px]">
          <Link href={benifits[0].site} target="_blank"  rel="noopener" className="block w-full h-full">
            <img
              src={benifits[0].benisec}
              alt="Right Banner"
              className="w-full h-full  rounded-2xl shadow-lg object-fill"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
