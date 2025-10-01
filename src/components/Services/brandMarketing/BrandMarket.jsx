import React from "react";

const BrandMarket = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full mt-10 h-[500px] md:h-[500px] lg:h-[500px]">
        <img
          src="/images/Services/backgroundImage.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full gap-6 md:gap-10 px-4 md:px-20">
          <img
            src="/images/Services/servicesImage.png"
            alt="overlay"
            className="w-[250px] md:w-[300px] lg:w-[600px] object-contain"
          />
          <h1 className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left mt-8 md:mt-0">
            Brand <br /> <span style={{ color: "#F9E143" }}>Marketing</span>
          </h1>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-20 my-12 px-4 md:px-20">
        <img
          src="/images/Services/brandix_1.png"
          alt="brandImage"
          className="w-full md:w-auto max-w-sm md:max-w-md order-1"
        />
        <div className="text-center md:text-left order-2">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            What is <span style={{ color: "#F9E143" }}>Brand Marketing?</span>
          </h2>
          <p className="text-gray-200 text-base md:text-lg mt-2">
            Brand Marketing refers to a{" "}
            <span style={{ color: "#F9E143" }}>long-term</span> plan for{" "}
            <span style={{ color: "#F9E143" }}>building, establishing</span> and{" "}
            <span style={{ color: "#F9E143" }}>promoting brands.</span> Its end
            goal is to establish a{" "}
            <span style={{ color: "#F9E143" }}>positive brand image</span> and
            build <span style={{ color: "#F9E143" }}>brand equity.</span>
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-20 my-12 px-4 md:px-20">
        <img
          src="/images/Services/brandix_2.png"
          alt="brandImage"
          className="w-full md:w-auto max-w-sm md:max-w-md order-1"
        />
        <div className="text-center md:text-left order-2">
          <p className="text-white text-3xl md:text-4xl">
            What are some <span style={{ color: "#F9E143" }}>tools</span> for
            Brand Marketing?
          </p>
          <p className="mt-3 text-gray-200 text-base md:text-lg">
            Branding tools help to establish and maintain a{" "}
            <span style={{ color: "#F9E143" }}>cohesive brand identity.</span>{" "}
            Some examples include: <br />
            <span style={{ color: "#F9E143" }}>Ahrefs:</span> Search Engine
            Marketing <br />
            <span style={{ color: "#F9E143" }}>Brandwatch:</span> Brand
            monitoring <br />
            <span style={{ color: "#F9E143" }}>Hootsuite:</span> Social media
            management
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-20 my-12 px-4 md:px-20">
        <img
          src="/images/Services/brandix_3.png"
          alt="brandImage"
          className="w-full md:w-auto max-w-sm md:max-w-md order-1"
        />
        <div className="text-center md:text-left order-2">
          <p className="text-white text-3xl md:text-4xl">
            Types of{" "}
            <span style={{ color: "#F9E143" }}>campaign categories</span>
          </p>
          <p className="mt-3 text-gray-200 text-base md:text-lg">
            Campaign categories are generally on the basis of industry. <br />
            Some common examples include –{" "}
            <span style={{ color: "#F9E143" }}>
              BFSI, real estate, automobiles, education
            </span>{" "}
            and <span style={{ color: "#F9E143" }}>e-commerce.</span>
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-20 my-12 px-4 md:px-20">
        <img
          src="/images/Services/brandix_4.png"
          alt="brandImage"
          className="w-full md:w-auto max-w-sm md:max-w-md order-1"
        />
        <div className="text-center md:text-left order-2">
          <p className="text-white text-3xl md:text-4xl">
            <span style={{ color: "#F9E143" }}>Impact</span> of Brand Marketing?
          </p>
          <p className="mt-3 text-gray-200 text-base md:text-lg">
            <span style={{ color: "#F9E143" }}>Successful</span> brand marketing{" "}
            <span style={{ color: "#F9E143" }}>drives</span> overall{" "}
            <span style={{ color: "#F9E143" }}>revenue growth</span> and builds
            a <span style={{ color: "#F9E143" }}>loyal community.</span> <br />
            It also gives you a{" "}
            <span style={{ color: "#F9E143" }}>competitive advantage.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandMarket;
