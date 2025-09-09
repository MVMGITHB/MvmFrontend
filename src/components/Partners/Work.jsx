"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    image: "/images/idfclogo.webp",
    title: "IDFC Credit Card",
    link: "/idfc",
    description:
      "Lifetime-free IDFC credit card with low interest, 10X rewards on milestone spends & unmatched privileges across categories.",
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

export default function PartnerCards() {
  const { country } = useCountry();
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(workData.length / itemsPerPage);

  // Auto-slide every 5s (pause on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages, isHovered]);

  const currentItems = workData.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className="relative  bg-gradient-to-br from-black via-[#0d0d0d] to-gray-900 text-white py-16 sm:py-40 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 mb-12">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-snug">
            Brands That Trust MVM Business Services
          </h2>

          <h3 className="text-base sm:text-lg font-semibold text-gray-200 mt-4">
            Loans • Credit Cards • Insurance • E-Commerce • Automobiles
          </h3>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium tracking-wide font-serif">
            We partner with{" "}
            <strong className="text-white font-semibold">
              India’s leading banks, global financial institutions, e-commerce
              giants, insurance providers,
            </strong>{" "}
            and{" "}
            <strong className="text-white font-semibold">
              automobile brands
            </strong>{" "}
            to bring you products and services you can trust. 🚀
            <br />
            <br />
            From{" "}
            <span className="text-purple-400 font-bold">
              personal loans, business loans, and credit cards
            </span>{" "}
            💳 to{" "}
            <span className="text-blue-400 font-bold">
              car insurance, savings accounts, and online shopping
            </span>{" "}
            🛍️ — our network covers all your lifestyle and financial needs.
            <br />
            <br />
            With trusted partners like{" "}
            <strong className="text-white font-semibold">
              Bajaj Finserv, HDFC, ICICI, SBI, Myntra, Cars24, TVS, Ola Electric
            </strong>{" "}
            and more, you get{" "}
            <em className="italic text-gray-100 font-light">
              secure, affordable, and reliable solutions
            </em>{" "}
            designed to empower your everyday life. 🌟
          </p>
        </div>
      </div>

      {/* Cards Grid with Animation */}
      <div
        className="max-w-7xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {currentItems.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="bg-white rounded-2xl shadow-lg sm:shadow-xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-purple-500/40"
              >
                {/* Image */}
                <div className="relative h-32 sm:h-40 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-contain max-h-20 sm:max-h-28 transition-transform duration-500 group-hover:scale-110"
                  />
                  {work.tag && (
                    <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md">
                      {work.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 flex-grow line-clamp-3 text-sm sm:text-base">
                    {work.description}
                  </p>

                  {/* Button */}
                  <Link
                    href={`${country === "india" ? "" : "/au"}${
                      work.link || "/"
                    }`}
                    className="mt-4"
                  >
                    <button className="w-full py-2 sm:py-2.5 rounded-lg font-semibold text-white text-sm sm:text-base bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 shadow-md group-hover:shadow-lg transition-all">
                      Explore Now 🚀
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setPage(i)}
              animate={{
                scale: i === page ? 1.4 : 1,
                backgroundColor: i === page ? "#a855f7" : "#6b7280",
              }}
              className="w-3 h-3 rounded-full"
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
