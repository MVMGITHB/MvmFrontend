"use client";

import { useEffect, useRef } from "react";

function Home() {
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const words = entry.target.querySelectorAll(".word");
          if (entry.isIntersecting) {
            words.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add("show");
              }, index * 700);
            });
          } else {
            words.forEach((word) => word.classList.remove("show"));
          }
        });
      },
      { threshold: 0.5 }
    );

    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => quoteRef.current && observer.unobserve(quoteRef.current);
  }, []);

  return (
    <div className="py-8 px-8 bg-[#141313]"
  //    style={{
  //   backgroundImage: `url("https://i.pinimg.com/originals/27/f2/86/27f2862dcfa829432a4b05650a4b2e42.gif")`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat"
  // }}
  
  >
      <div className="flex items-center justify-between gap-2 lg:gap-2   lg:px-2 flex-wrap lg:flex-nowrap ">
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <img
            src="/images/Home.webp"
            alt="Home"
            width={600}
            height={400}
            className="max-w-full rounded-xl object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left order-2 lg:order-1">
          <h1 className="text-white text-[1.6rem]  md:text-[1.8rem] lg:text-[2.0rem] leading-snug hyphens-auto">
            Driving exponential digital growth for your brand with our data & AI
            driven marketing strategies
          </h1>
          <div
            className="text-orange-500 font-bold  lg:text-[1.5rem] sm:text-[1.3rem] md:text-[1.4rem] border-b-2 border-gray-300 inline-block mt-4"
            ref={quoteRef}
          >
            <p>
              <span className="word">Strategy →</span>
              <span className="word"> Design →</span>
              <span className="word"> Implement →</span>
              <span className="word"> Measure →</span>
              <span className="word"> Optimize</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
