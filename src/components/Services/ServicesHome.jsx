"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCircleCheck } from "react-icons/fa6";
import Details from "../contact/Details";
import Services from "./Services";
import Clients from "../Clients";



function ServicesHome() {
  const span = [
    " Brand Marketing",
    "Performance Marketing",
    "Affiliate Marketing",
    "SMM",
    "Mobile Advertising",
    "SEO",
    "Content Writing",
    "Web Development",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % span.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-[#272626] py-10 px-6 md:px-24 flex flex-col md:flex-row justify-center gap-10 md:gap-4 lg:gap-6 items-center">
        <div className="w-full md:w-[50%] py-6">
          <h1 className="text-3xl md:text-[37px] font-semibold text-center md:text-left">
            Digital Marketing Services In Noida
          </h1>
          <div className="text-xl md:text-[24px] mt-2 text-center md:text-left flex justify-center md:justify-start items-center">
            Best in
            <span className="text-orange-400 flex items-center mx-2">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={span[index]}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="font-bold"
                >
                  {span[index]}
                </motion.h3>
              </AnimatePresence>
            </span>{" "}
          </div>

          <p className="text-base md:text-[19px] mt-4 font-bold text-center md:text-left leading-7">
            Greetings from MVM Business, your go-to source for all-inclusive
            social media, digital marketing, and SEO services. Our website is
            made to assist companies of all sizes in increasing their online
            presence, connecting with their target markets, and achieving
            quantifiable growth. Discover how we can improve your brand's
            visibility online by looking through our selection of services,
            success stories, and tools.
          </p>

          <div className="space-y-3 mt-6">
            {[
              "Small and medium-sized businesses: Seeking to increase their web presence and take on bigger names.",
              "E-commerce Companies: Using SEO and sponsored advertisements to boost traffic, conversions, and consumer engagement.",
              "Startups: On a tight budget, they want to increase brand recognition and provide quality leads.",
              "Local Service Providers: Seeking to use social media and optimized local search to draw in local clients.",
              "Corporates and enterprises require complete digital solutions at scale and data-driven initiatives.",
            ]?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FaRegCircleCheck className="text-orange-400 text-xl md:text-2xl" />
                <span className="text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="shadow-2xl w-full md:w-[40%] py-6 px-4">
          <Details />
        </div>
      </div>

      <Services />

      <Clients />

      <div className="bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 py-12">
        <p className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Digital Marketing Process
        </p>

        <div className="flex flex-wrap justify-center gap-10 px-4 md:px-0">
          {[
            { src: "/images/strategy.webp", label: "Strategy" },
            { src: "/images/design.webp", label: "Design" },
            { src: "/images/implement.webp", label: "Implement" },
            { src: "/images/measure.webp", label: "Measure" },
            {
              src: "https://cdn-icons-png.freepik.com/256/17247/17247423.png?ga=GA1.1.1414107002.1745826214&semt=ais_hybrid",
              label: "Optimize",
            },
          ]?.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-32 md:w-48 h-32 md:h-48 rounded-full bg-white overflow-hidden flex justify-center items-center mb-2">
                <img
                  src={item?.src}
                  alt={item?.label}
                  className="w-20 md:w-32 h-20 md:h-32 object-contain"
                />
              </div>
              <p className="text-lg md:text-xl font-semibold text-center">
                {item?.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen bg-gray-200 px-6 md:px-24 py-12 flex flex-col relative overflow-hidden">
        <div
          className="hidden md:block absolute inset-0 bg-no-repeat bg-center bg-contain md:bg-fixed"
          style={{
            backgroundImage: "url('/images/aboutus.webp')",
            zIndex: 0,
            opacity: 0.5,
          }}
        ></div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-violet-800 max-w-4xl mx-auto">
              “Fuel Your Brand’s Growth—Turn Traffic into Loyal Customers with
              Data-Driven Marketing.”
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl text-violet-700 font-bold mb-4">
                Why Choose Us
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our goal at MVM Business is to help brands grow through powerful
                SEO, Social Media, and Digital Marketing strategies. We use our
                years of experience and expertise to provide our clients with
                innovative, performance-driven solutions.
                <br />
                <br />
                Reasons why businesses choose us to improve their internet
                presence:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-violet-700 mb-2">
                    Marketing Expertise
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                    <li>
                      Profound knowledge of social media growth, digital
                      marketing, and SEO.
                    </li>
                    <li>
                      Demonstrated effectiveness in increasing traffic,
                      rankings, and conversions.
                    </li>
                    <li>
                      Define your brand's unique value in the market and
                      position it to resonate with your target audience.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-violet-700 mb-2">
                    Data-Based Approaches
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                    <li>
                      Advanced analytics to optimize return on investment.
                    </li>
                    <li>
                      Campaigns tailored according to current market trends and
                      findings.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-violet-700 mb-2">
                    Comprehensive Digital Partner
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                    <li>
                      From social media management and sponsored advertisements
                      to SEO and content production.
                    </li>
                    <li>
                      A comprehensive strategy for digital growth tailored to
                      your brand's specific objectives.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-violet-700 mb-2">
                  Transparency
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>
                    Frequent, thorough reporting on growth and performance
                    indicators.
                  </li>
                  <li>
                    Effective communication throughout the entire process.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-violet-700 mb-2">
                  Committed Assistance
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>
                    Managers of personal accounts who are familiar with your
                    brand.
                  </li>
                  <li>
                    We're always available to help and mentor you on your
                    digital journey.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-violet-700 mb-2">
                  Verified Growth
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-base md:text-lg">
                  <li>Quantifiable effect on income and brand awareness.</li>
                  <li>
                    Our strategies ensure long-term brand loyalty and
                    differentiation.
                  </li>
                  <li>
                    Success stories from a range of sectors and company sizes.
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h2 className="text-xl md:text-2xl font-semibold text-violet-800 max-w-4xl mx-auto">
                  "Take Your Brand to New Heights. Collaborate with Us and See
                  Your Company Thrive."
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesHome;
