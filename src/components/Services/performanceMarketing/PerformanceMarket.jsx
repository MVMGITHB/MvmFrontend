import React from "react";

const PerformanceMarket = () => {
  const sections = [
    {
      id: 1,
      title: "What is Performance Marketing?",
      content: (
        <>
          Performance marketing is a{" "}
          <span style={{ color: "#F9E143" }}>data-driven strategy</span> where
          advertisers pay only when measurable actions — like{" "}
          <span style={{ color: "#F9E143" }}>clicks, leads,</span> or{" "}
          <span style={{ color: "#F9E143" }}>sales</span> — are{" "}
          <span style={{ color: "#F9E143" }}>successfully completed</span>.
        </>
      ),
      image: "/images/Services/performanceMarket/performancebrand_1.png",
      alt: "Illustration explaining performance marketing concept",
    },
    {
      id: 2,
      title: "Top Tools for Performance Marketing",
      content: (
        <>
          Common performance marketing tools include{" "}
          <span style={{ color: "#F9E143" }}>
            Email, SMS, Social Media, Google Ads, Appsflyer, WhatsApp,
          </span>{" "}
          and <span style={{ color: "#F9E143" }}>RCS</span>. These platforms help
          track, analyze, and improve{" "}
          <span style={{ color: "#F9E143" }}>campaign effectiveness</span>.
        </>
      ),
      image: "/images/Services/performanceMarket/performancebrand_2.png",
      alt: "Tools used for performance marketing like Google Ads and Appsflyer",
    },
    {
      id: 3,
      title: "Campaign Categories in Performance Marketing",
      content: (
        <>
          Performance marketing campaigns are typically based on specific
          metrics like: <br />
          CPC (<span style={{ color: "#F9E143" }}>Cost Per Click</span>), CPL (
          <span style={{ color: "#F9E143" }}>Cost Per Lead</span>), CPI (
          <span style={{ color: "#F9E143" }}>Cost Per Install</span>), CPV (
          <span style={{ color: "#F9E143" }}>Cost Per Visit</span>), and CPM (
          <span style={{ color: "#F9E143" }}>Cost Per Impression</span>).
        </>
      ),
      image: "/images/Services/performanceMarket/performancebrand_3.png",
      alt: "Graph showing campaign categories like CPC, CPL, and CPM",
    },
    {
      id: 4,
      title: "Impact of Performance Marketing",
      content: (
        <>
          <span style={{ color: "#F9E143" }}>Effective</span> performance
          marketing provides{" "}
          <span style={{ color: "#F9E143" }}>measurable</span> and{" "}
          <span style={{ color: "#F9E143" }}>cost-effective</span> results,
          helping businesses maximize{" "}
          <span style={{ color: "#F9E143" }}>ROI</span> and achieve{" "}
          <span style={{ color: "#F9E143" }}>scalable growth</span>.
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
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full gap-6 md:gap-10 px-4 md:px-20">
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
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
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