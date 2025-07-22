"use client";
import Link from 'next/link'
export default function HeroFirst({ herofirst }) {
  return (
    <div className="w-full flex flex-col items-center gap-6 px-1 lg:px-4 py-6">
      {herofirst?.map((slide, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-xl w-full max-w-4xl text-center"
        >
          <Link href={slide?.site} target='_blank'  rel="noopener">
          <img
            src={slide?.logo}
            alt={slide?.title}
            className="w-full lg:h-[50vh] rounded-md"
          />
          </Link>
          <p className="text-[1.4rem] font-semibold font-serif text-blue-500 mt-2">
            {slide?.offer}
          </p>
        </div>
      ))}
    </div>
  );
}
