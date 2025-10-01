import React from "react";

const PerformanceMarket = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full mt-10 h-[500px] md:h-[500px] lg:h-[500px]">
        <img
          src="/images/Services/backgroundImage.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full gap-6 md:gap-10 px-4 md:px-20">
          <img
            src="/images/Services/performanceMarket/performancemarkethero.png"
            alt="overlay"
            className="w-[250px] md:w-[300px] lg:w-[600px] object-contain"
          />
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center md:text-left">
            Performance
            <br />
            <span style={{ color: "#F9E143" }}>Marketing</span>
          </h1>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-20 my-12 px-4 md:px-20">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">
            What is{" "}
            <span style={{ color: "#F9E143" }}>Performance Marketing?</span>
          </h2>
          <p className="text-base md:text-lg mt-2">
            Performance marketing is a{" "}
            <span style={{ color: "#F9E143" }}>data-driven strategy</span> where
            advertisers pay only when measurable actions -- like{" "}
            <span style={{ color: "#F9E143" }}>
              clicks, leads,
            </span>{" "}
            or sales—are{" "}
            <span style={{ color: "#F9E143" }}>successfully completed.</span>
          </p>
        </div>
        <img
          src="/images/Services/performanceMarket/performancebrand_1.png"
          alt="brandImage"
          className="w-full md:w-auto max-w-sm md:max-w-md"
        />
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-20 my-12 px-4 md:px-20">
        <img
          src="/images/Services/performanceMarket/performancebrand_2.png"
          alt="brandImage"
          className="w-full md:w-auto max-w-sm md:max-w-md"
        />
        <div className="text-center md:text-left">
          <p className="text-3xl md:text-4xl">
            What are some <span style={{ color: "#F9E143" }}>tools</span> for{" "}
            <br />
            Performance Marketing?
          </p>
          <p className="mt-3 text-base md:text-lg">
            <span style={{ color: "#F9E143" }}>
              Email, SMS, Social media, Google Adwords, Appsflyer,
              <br /> WhatsApp,
            </span>{" "}
            and <span style={{ color: "#F9E143" }}>RCS</span> are some common
            tools for <br /> performance marketing.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-20 my-12 px-4 md:px-20">
        <div className="text-center md:text-left">
          <p className="text-3xl md:text-4xl">
            Types of <span style={{ color: "#F9E143" }}>campaign categories</span>
          </p>
          <p className="mt-3 text-base md:text-lg">
            Campaign categories for performance marketing include <br /> CPC [
            <span style={{ color: "#F9E143" }}>cost per click</span>], CPL [
            <span style={{ color: "#F9E143" }}>cost per lead</span>], CPI [
            <span style={{ color: "#F9E143" }}>cost per install</span>], CPV [
            <span style={{ color: "#F9E143" }}>cost per visit</span>] and CPM [
            <span style={{ color: "#F9E143" }}>cost per impression</span>].
          </p>
        </div>
        <img
          src="/images/Services/performanceMarket/performancebrand_3.png"
          alt="brandImage"
          className="w-full md:w-auto max-w-sm md:max-w-md"
        />
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-20 my-12 px-4 md:px-20">
        <img
          src="/images/Services/performanceMarket/performancebrand_4.png"
          alt="brandImage"
          className="w-full md:w-auto max-w-sm md:max-w-md"
        />
        <div className="text-center md:text-left">
          <p className="text-3xl md:text-4xl">
            <span style={{ color: "#F9E143" }}>Impact</span> of Performance Marketing?
          </p>
          <p className="mt-3 text-base md:text-lg">
            Effective performance marketing gives businesses <br />
            <span style={{ color: "#F9E143" }}>measurable</span> and{" "}
            <span style={{ color: "#F9E143" }}>effective results.</span> It boosts
            the overall <br /> <span style={{ color: "#F9E143" }}>return on investment</span> [ROI].
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMarket;