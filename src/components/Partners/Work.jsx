"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useCountry } from "../context/CountryContext";
 
const workData = [
  {
    image: "/images/bajaj.webp",
    title: "Personal Loan",
    link: "/bajajfinserv",
    description:
      "Want a personal loan that charges low interest? With Bajaj Finserv’s personal loan, India’s best lending partners can guide in an online, quick and hassle free process.",
  },
  {
    image: "/images/tata.webp",
    title: "Credit Card",
    link: "/tataneu",
    description:
      "With Tata Neu HDFC credit card, save up to 10% across all our partner brands. And enjoy unmatched privileges powered by RuPay/Visa.",
  },
  {
    image: "/images/cars.webp",
    title: "Buy/Sell Used Cars",
    link: "/cars24",
    description:
      "Sell your car, at the best price with ease. Instant online valuation, doorstep inspection, hassle-free RC transfer, loan & insurance support.",
  },
  {
    image: "/images/flexi.webp",
    title: "Business Loan",
    link: "/flexiloans",
    description:
      "Get instant access to flexible personal loans with low interest, minimal documentation, and quick approvals—tailored to meet your needs, anytime and anywhere in India.",
  },
  {
    image: "/images/myntra.webp",
    title: "Online Fashion Store",
    link: "/myntra",
    description:
      "Shop the latest fashion with Myntra—enjoy great deals, top brands, easy returns, and a seamless shopping experience all in one place.",
  },
  {
    image: "/images/money.webp",
    title: "Personal Loan",
    link: "/moneycontrol",
    description:
      "Get quick personal loans with Moneycontrol—easy online process, fast approval, minimal documents, and attractive interest rates tailored for professionals.",
  },
  {
    image: "/images/indifi.webp",
    title: "Business Loan",
    link: "/indifi",
    description:
      "Get fast and flexible business loans with Indifi—tailored solutions, minimal paperwork, and quick approvals to help your business grow with ease.",
  },
  {
    image: "/images/tvs logo.webp",
    title: "Sporty Bikes",
    link: "/tvsmotor",
    description:
      "Want a bike with sporty designs and value for money? With TVS, get all that and more without breaking the bank",
  },
  {
    image: "/images/v3carslogo.webp",
    title: "Sell Used Cars",
    link: "/v3car",
    description:
      "Car sales made hassle free At V3 Cars, sell your cars quickly and with no hassle. Click to know more",
  },
  {
    image: "/images/dbslogo.webp",
    title: "Savings Account",
    link: "/dbssavingaccount",
    description:
      "Need funds fast? Get instant personal loans with DBS Digibank. 100% digital, no paperwork, quick approval, and great rates—ideal for emergencies, travel, education.",
  },
  {
    image: "/images/cibillogo.webp",
    title: "Credit Score",
    link: "/cibil",
    description:
      "Understand your CIBIL score—it reflects your credit reliability and impacts your chances of getting loans or credit cards, securing better financial opportunities.",
  },
  {
    image: "/images/abhiloans.webp",
    title: "Loan",
    link: "/abhiloan",
    description:
      "Your reliable resource for immediate financial assistance. When you need money most, you can get it quickly and easily without having to provide any documentation.",
  },
  {
    image: "/images/ajiologo.webp",
    title: "Ecommerce",
    link: "/ajio",
    description:
      "Upgrade your wardrobe with AJIO! Discover trending styles, top quality, and great deals. From work to weekends, shop size-inclusive fashion with fast returns and fresh arrivals.",
  },
  {
    image: "/images/acklogo.webp",
    title: "Car Insurance",
    link: "/acko",
    description:
      "Skip the hussle with ACKO Car Insurance. Get instant, affordable coverage with a 100% digital process. Enjoy cashless repairs, quick claims, and add-ons like zero depreciation.",
  },
  {
    image: "/images/ola logo.webp",
    title: "Automobile",
    link: "/olaelectric",
    description:
      "Ride into the future with the new Ola Electric Motorbike—where performance meets sustainability. Enjoy 150–200 km+ on a single charge, lightning-fast hypercharging.",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 ml-[-16px] transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
    onClick={onClick}
  >
    <FaArrowLeft className="text-black" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 mr-[-16px] top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
    onClick={onClick}
  >
    <FaArrowRight className="text-black" />
  </button>
);

export default function WorkCarousel() {
  const { country } = useCountry();

  const settings = {
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      id="partners"
      className="py-10 bg-[#323336] min-h-screen text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-6 underline">Our Partners</h2>
      <div className="relative max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {workData?.map((work, index) => (
            <div key={index} className="p-4">
              <div className="bg-[#414247] rounded-lg p-6 h-[508px] flex flex-col transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-[#505155]">
                <div className="bg-white overflow-hidden mb-4">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-[160px] object-cover"
                  />
                </div>
                <p className="text-2xl font-bold mb-2">{work.title}</p>
                <div className="flex-grow overflow-y-auto pr-1 text-left">
                  <p className="text-base">{work.description}</p>
                </div>
                <div className="pt-4">
                  <Link
                    href={`${country === "india" ? "" : "/au"}${
                      work.link || "/"
                    }`}
                  >
                    <button className="bg-blue-400 text-black cursor-pointer py-2 px-6 rounded hover:bg-blue-500 transition duration-300">
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
