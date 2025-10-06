import React from "react";

const PerformanceMarket = () => {
  const sections = [
    {
      id: 1,
      title: (
        <>
          "What is{" "}
          <span style={{ color: "#F9E143" }}>Performance Marketing?</span>
        </>
      ),
      content: (
        <>
          Performance marketing is a{" "}
          <span style={{ color: "#F9E143" }}>data-driven strategy</span> where{" "}
          <br />
          advertisers pay only when measurable actions — like{" "}
          <span style={{ color: "#F9E143" }}>
            clicks,
            <br /> leads,
          </span>{" "}
          or <span style={{ color: "#F9E143" }}>sales</span> — are{" "}
          <span style={{ color: "#F9E143" }}>successfully completed</span>.
        </>
      ),
      image: "/images/Services/performanceMarket/performancebrand_1.png",
      alt: "Illustration explaining performance marketing concept",
    },
    {
      id: 2,
      title: (
        <>
          What are some <span style={{color:"#F9E143"}}>tools</span> for <br />
          Performance Marketing?
        </>
      ),
      content: (
        <>
          <span style={{ color: "#F9E143" }}>
            Email, SMS, Social Media, Google Ads, Appsflyer,
            <br /> WhatsApp,
          </span>{" "}
          and <span style={{ color: "#F9E143" }}>RCS</span>are some common tools
          for <br /> performance marketing.
        </>
      ),
      image: "/images/Services/performanceMarket/performancebrand_2.png",
      alt: "Tools used for performance marketing like Google Ads and Appsflyer",
    },
    {
      id: 3,
      title: (
        <>
          Types of <span style={{ color: "#F9E143" }}>campaign categories</span>
        </>
      ),
      content: (
        <>
          Campaign categories for performance marketing include <br /> CPC [
          <span style={{ color: "#F9E143" }}>cost per click</span>], CPL [{" "}
          <span style={{ color: "#F9E143" }}>cost per lead</span>], CPI [{" "}
          <span style={{ color: "#F9E143" }}>
            cost per <br /> install
          </span>
          ], CPV [ <span style={{ color: "#F9E143" }}>cost per visit</span>] and
          CPM [ <span style={{ color: "#F9E143" }}>cost per impression</span>].
        </>
      ),
      image: "/images/Services/performanceMarket/performancebrand_3.png",
      alt: "Graph showing campaign categories like CPC, CPL, and CPM",
    },
    {
      id: 4,
      title: (
        <>
          <span style={{ color: "#F9E143" }}>Impact</span> of Performance
          Marketing.
        </>
      ),
      content: (
        <>
          Effective performance marketing gives businesses <br />{" "}
          <span style={{ color: "#F9E143" }}>measurable</span> and{" "}
          <span style={{ color: "#F9E143" }}>effective results.</span>It boosts
          the overall <br />{" "}
          <span style={{ color: "#F9E143" }}>return on investment</span> [ROI].
        </>
      ),
      image: "/images/Services/performanceMarket/performancebrand_4.png",
      alt: "Visualization of ROI growth from performance marketing",
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <header className="relative w-full mt-10 h-[500px] md:h-[500px] lg:h-[500px]">
        <img
          src="/images/Services/backgroundImage.png"
          alt="Abstract performance marketing background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full gap-5 md:gap-10 px-4 md:px-20">
          <img
            src="/images/Services/performanceMarket/performancemarkethero.png"
            alt="Performance marketing concept illustration"
            className="w-[300px] md:w-[300px] lg:w-[500px] object-contain"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center md:text-left mt-8 md:mt-0">
            Performance
            <br />
            <span style={{ color: "#F9E143" }}>Marketing</span>
          </h1>
        </div>
      </header>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`flex flex-col md:flex-row justify-around items-center gap-6 md:gap-20 my-16 px-4 md:px-20 ${
            index % 2 !== 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <img
            src={section.image}
            alt={section.alt}
            loading="lazy"
            className="w-full md:w-auto max-w-sm md:max-w-md rounded-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              {section.title}
            </h2>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              {section.content}
            </p>
          </div>
        </section>
      ))}

      {/* Footer */}
      {/* <footer className="text-center py-6 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </footer> */}
    </main>
  );
};

export default PerformanceMarket;
