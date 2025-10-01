import React from "react";

const BrandMarket = () => {
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
          <div className="relative z-10 flex items-center justify-center h-[500px] gap-[10px]">
            {/* Foreground image (200x200) */}
            <img
              src="/images/Services/servicesImage.png"
              alt="overlay"
              className="w-auto h-full object-contain"
            />

            {/* Text */}
            <h1 className="text-white text-7xl font-bold mt-14 leading-none mb-4">
              Brand <br /> <span style={{ color: "#F9E143" }}>Marketing</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div className="text-4xl mt-8">
          <h1>
            What is <span style={{ color: "#F9E143" }}>Brand Marketing?</span>
          </h1>
          <p className="text-[20px] mt-2">
            Brand Marketing refers to a{" "}
            <span style={{ color: "#F9E143" }}>long-term</span> plan for{" "}
            <span style={{ color: "#F9E143" }}>
              building,
              <br /> establishing{" "}
            </span>{" "}
            and <span style={{ color: "#F9E143" }}>promoting brands.</span> Its
            end goal is to <br /> establish a{" "}
            <span style={{ color: "#F9E143" }}>positive brand image</span> and
            build <span style={{ color: "#F9E143" }}>brand equity.</span>
          </p>
        </div>
        <img
          src="/images/Services/brandix_1.png"
          alt="brandImage"
          className="w-auto h-full"
        />
      </div>

      <div className="flex justify-around items-center">
        <img
          src="/images/Services/brandix_2.png"
          alt="image mageBrandix"
          className="w-auto h-full"
        />
        <div>
          <p className="text-4xl">
            What are some <span style={{ color: "#F9E143" }}>tools</span> for{" "}
            <br />
            Brand Marketing?
          </p>
          <p className="mt-[10px]">
            Branding tools help to establish and maintain a{" "}
            <span style={{ color: "#F9E143" }}>
              cohesive <br /> brand identity.
            </span>{" "}
            Some examples include: <br />     {" "}
            <span style={{ color: "#F9E143" }}>Ahrefs :</span> Search Engine
            Marketing <br />     
            <span style={{ color: "#F9E143" }}>Brandwatch:</span> Brand
            monitoring <br />     
            <span style={{ color: "#F9E143" }}> Hootsuite:</span> social media
            management
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
            Campaign categories are generally on the basis of industry. <br />{" "}
            Some common examples include –{" "}
            <span style={{ color: "#F9E143" }}>
              BFSI, real estate,
              <br /> automobiles, education{" "}
            </span>
            and <span style={{ color: "#F9E143" }}>e-commerce.</span>
          </p>
        </div>
        <img
          src="/images/Services/brandix_3.png"
          alt="image mageBrandix"
          className="w-auto h-full"
        />
      </div>

      <div className="flex justify-around items-center">
        <img
          src="/images/Services/brandix_4.png"
          alt="image mageBrandix"
          className="w-auto h-full"
        />
        <div>
          <p className="text-4xl">
            <span style={{ color: "#F9E143" }}>Impact</span> of Brand Marketing?
          </p>
          <p className="mt-[10px]">
            <span style={{ color: "#F9E143" }}>Successful</span> brand marketing{" "}
            <span style={{ color: "#F9E143" }}>drives</span> overall{" "}
            <span style={{ color: "#F9E143" }}>revenue growth</span> <br /> and
            builds a <span style={{ color: "#F9E143" }}>loyal community.</span>{" "}
            It also gives you a <br />{" "}
            <span style={{ color: "#F9E143" }}>competitive advantage.</span>  
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandMarket;
