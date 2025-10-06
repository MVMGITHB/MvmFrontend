import React from "react";

const BrandMarket = () => {
  const sections = [
    {
      id: 1,
      title: <>What is <span style={{color:"#F9E143"}}>Brand Marketing?</span></>,
      image: "/images/Services/brandix_1.png",
      content: (
        <>
          Brand marketing refers to a{" "}
          <span style={{ color: "#F9E143" }}>long-term</span> strategy for{" "}
          <span style={{ color: "#F9E143" }}>
            building, <br /> establishing
          </span>
          , and <span style={{ color: "#F9E143" }}>promoting brands</span>. Its
          goal is to <br /> create a{" "}
          <span style={{ color: "#F9E143" }}>positive brand image</span> and
          build <span style={{ color: "#F9E143" }}>brand equity</span>.
        </>
      ),
      alt: "Illustration describing what brand marketing means",
    },
    {
      id: 2,
      title: (
        <>
          What are some <span style={{ color: "#F9E143" }}>tools</span> for{" "}
          <br />
          Brand Marketing?
        </>
      ),
      image: "/images/Services/brandix_2.png",
      content: (
        <>
          Branding tools help maintain a{" "}
          <span style={{ color: "#F9E143" }}>consistent brand identity</span>.
          Common examples include: <br />
          <span style={{color:"#F9E143"}}>Ahrefs:</span> Search engine marketing <br />
          <span style={{color:"#F9E143"}}>Brandwatch:</span> Brand monitoring <br />
          <span style={{color:"#F9E143"}}>Hootsuite:</span> Social media management
        </>
      ),
      alt: "Brand marketing tools like Ahrefs, Brandwatch, and Hootsuite",
    },
    {
      id: 3,
      title: <><span style={{color:"#F9E143"}}>Campaign Categories</span> in Brand Marketing</>,
      image: "/images/Services/brandix_3.png",
      content: (
        <>
          Brand marketing campaigns often vary by industry. <br /> Common categories
          include{" "}
          <span style={{ color: "#F9E143" }}>
            BFSI, real estate,<br /> automobiles, education
          </span>{" "}
          and <span style={{ color: "#F9E143" }}>e-commerce</span>.
        </>
      ),
      alt: "Various campaign categories like real estate, BFSI, and education",
    },
    {
      id: 4,
      title: <><span style={{color:"#F9E143"}}>Impact</span> of Brand Marketing?</>,
      image: "/images/Services/brandix_4.png",
      content: (
        <>
          <span style={{ color: "#F9E143" }}>Successful</span> brand marketing{" "}
          <span style={{ color: "#F9E143" }}>drives</span> business growth,<br />
          builds a <span style={{ color: "#F9E143" }}>loyal community</span>,
          and creates a{" "} <br />
          <span style={{ color: "#F9E143" }}>competitive advantage</span> in the
          market.
        </>
      ),
      alt: "Graph showing the positive impact of brand marketing on business growth",
    },
  ];

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <header className="relative w-full mt-10 h-[500px]">
        <img
          src="/images/Services/backgroundImage.png"
          alt="Marketing background abstract pattern"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full gap-6 px-4 md:px-20">
          <img
            src="/images/Services/servicesImage.png"
            alt="Marketing services illustration"
            className="w-[400px] md:w-[300px] lg:w-[600px] object-contain"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center md:text-left mt-8 md:mt-0">
            Brand <br />
            <span style={{ color: "#F9E143" }}>Marketing</span>
          </h1>
        </div>
      </header>

      {/* Content Sections */}
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

export default BrandMarket;
