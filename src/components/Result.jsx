"use client";
import { useEffect, useRef } from "react";

function Result() {
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
    <>
      <div className="py-4 px-6 bg-[#141313]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1">
            <img
              src="/images/result.webp"
              alt="Results"
              width={600}
              height={400}
              className="max-w-full rounded-xl object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 text-left order-2 lg:order-2">
            <h2 className="text-white text-[1.6rem] md:text-[1.8rem] lg:text-[2.0rem] leading-snug hyphens-auto ">
              At MVM we love making beautiful brand stories with our engaging
              content strategy, intelligent campaign implementation &
              optimization
            </h2>
            <div
              className="text-orange-500 font-bold lg:text-[1.5rem] sm:text-[1.3rem] md:text-[1.4rem] border-b-2 border-gray-300 inline-block mt-4"
              ref={quoteRef}
            >
              <p>
                <span className="word">Concept→</span>
                <span className="word"> Story→</span>
                <span className="word"> Audience→</span>
                <span className="word"> Engage→</span>
                <span className="word"> Recall</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden whitespace-nowrap py-4 bg-gradient-to-r from-yellow-800 via-yellow-300 to-yellow-100">
        <div className="animate-marquee-left inline-block">
          <ul className="flex gap-12 font-bold text-black text-2xl">
            <li>Marketing Strategies</li>
            <li>SEO Optimization</li>
            <li>Brand Growth</li>
            <li>Customer Engagement</li>
            <li>Content Creation</li>
          </ul>
        </div>
      </div>

      <div className="w-full overflow-hidden whitespace-nowrap py-4 bg-gradient-to-r from-[#16213e] to-[#1a1a2e]">
        <div className="animate-marquee-right inline-block">
          <ul className="flex gap-12 font-bold text-white text-2xl">
            <li>Social Media Campaigns</li>
            <li>Business Expansion</li>
            <li>Data Analysis</li>
            <li>Web Development</li>
            <li>Client Retention</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Result;
