import React from "react";

const PerformanceMarket = () => {
  return (
    <div>
      <div className="relative w-full mt-10">
        {/* Background image */}
        <img
          src="/images/Services/backgroundImage.png"
          alt="background"
          className="absolute inset-0 w-full h-[500px] object-cover"
        />

        {/* Foreground content */}
        <div className="relative w-full mt-10">
          {/* Background image */}
          <img
            src="/images/Services/backgroundImage.png"
            alt="background"
            className="absolute inset-0 w-full h-[500px] object-cover"
          />

          {/* Foreground content */}
          <div className="relative z-10 flex items-center justify-center h-[500px] gap-[40px]">
            {/* Foreground image (200x200) */}
            <img
              src="/images/Services/performanceMarket/performancemarkethero.png"
              alt="overlay"
              className="w-auto h-full object-contain"
            />

            {/* Text */}
            <h1 className="text-white text-7xl font-bold mt-14 leading-none mb-4">
              Performance
              <br /> <span style={{ color: "#F9E143" }}>Marketing </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div className="text-4xl mt-8">
          <h1>
            What is{" "}
            <span style={{ color: "#F9E143" }}>Performance Marketing?</span>
          </h1>
          <p className="text-[20px] mt-2">
             Performance marketing is a{" "}
            <span style={{ color: "#F9E143" }}>data-driven strategy</span> where{" "}
            <br /> advertisers pay only when measurable actions -- like{" "}
            <span style={{ color: "#F9E143" }}>
              clicks,
              <br /> leads,
            </span>{" "}
            or sales—are{" "}
            <span style={{ color: "#F9E143" }}>successfully completed.</span>  
          </p>
        </div>
        <img
          src="/images/Services/performanceMarket/performancebrand_1.png"
          alt="brandImage"
          className="w-auto h-full"
        />
      </div>

      <div className="flex justify-around items-center">
        <img
          src="/images/Services/performanceMarket/performancebrand_2.png"
          alt="image mageBrandix"
          className="w-auto h-full"
        />
        <div>
          <p className="text-4xl">
            What are some <span style={{ color: "#F9E143" }}>tools</span> for{" "}
            <br />
            Performance Marketing?
          </p>
          <p className="mt-[10px]">
            <span style={{ color: "#F9E143" }}>
              Email, SMS, Social media, Google Adwords, Appsflyer,
              <br /> WhatsApp,
            </span>{" "}
            and <span style={{ color: "#F9E143" }}>RCS</span> are some common
            tools for <br /> performance marketing. 
          </p>
        </div>
      </div>

      <div className="flex justify-around items-center">
        <div>
          <p className="text-4xl">
            Types of{" "}
            <span style={{ color: "#F9E143" }}>campaign categories</span>
          </p>
          <p className="mt-[10px]">
            Campaign categories for performance marketing include <br /> CPC [
            <span style={{ color: "#F9E143" }}>cost per click</span>], CPL [
            <span style={{ color: "#F9E143" }}>cost per lead</span>], CPI [
            <span style={{ color: "#F9E143" }}>
              cost per <br /> install
            </span>
            ], CPV [<span style={{ color: "#F9E143" }}>cost per visit</span>]
            and CPM [
            <span style={{ color: "#F9E143" }}>cost per impression</span>].
          </p>
        </div>
        <img
          src="/images/Services/performanceMarket/performancebrand_3.png"
          alt="image mageBrandix"
          className="w-auto h-full"
        />
      </div>

      <div className="flex justify-around items-center">
        <img
          src="/images/Services/performanceMarket/performancebrand_4.png"
          alt="image mageBrandix"
          className="w-auto h-full"
        />
        <div>
          <p className="text-4xl">
            <span style={{ color: "#F9E143" }}>Impact</span> of Performance
            Marketing?
          </p>
          <p className="mt-[10px]">
            Effective performance marketing gives businesses <br />{" "}
            <span style={{ color: "#F9E143" }}>measurable</span>
            and <span style={{ color: "#F9E143" }}>effective results.</span> It
            boosts the overall <br />{" "}
            <span style={{ color: "#F9E143" }}>return on investment</span>{" "}
            [ROI].
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMarket;
