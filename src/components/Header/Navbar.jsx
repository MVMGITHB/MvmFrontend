"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useCountry } from "../context/CountryContext";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { country, setCountry } = useCountry();
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const services = [
    "Brand Marketing",
    "Performance Marketing",
    "Affiliate Marketing",
    "Social Media Marketing",
    "Mobile Advertising",
    "SEO",
    "Content Writing",
    "Web Development",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setCountry(newCountry);
    router.push(newCountry === "india" ? "/" : "/au");
  };

  const basePath = country === "au" ? "/au" : "";

  const makePath = (path) => {
    if (path.startsWith("/")) return `${basePath}${path}`;
    return `${basePath}/${path}`;
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="flex justify-between items-center flex-wrap bg-[#141313]">
        <div className="flex items-center w-2/5 gap-4 ml-[4%]">
          <Link href={makePath("/")}>
            <div className="flex items-center">
              <img
                src="/images/logo.webp"
                alt="MVM logo"
                className="w-24 h-24 object-contain"
              />
              <p className="text-[1.2rem] font-bold leading-tight text-white">
               <span className=" text-orange-300">MVM </span> <br /> <span>Business</span> <br />  <span className=" text-green-400">Services</span>
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="w-2/5 justify-end hidden md:flex">
          <ul className="flex gap-5 text-[1.2rem] pr-[10%] text-white">
            <li>
              <Link href={makePath("/")} className="hover:text-orange-400">
                HOME
              </Link>
            </li>
            <li>
              <div
                className="relative group"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <div
                  className="text-white font-medium hover:text-orange-400 cursor-pointer"
                  onClick={() => router.push(makePath("/services"))}
                >
                  SERVICES
                </div>

                <div
                  className={`absolute top-full left-0 mt-2 bg-violet-200 border border-gray-300 rounded-md shadow-lg z-50 w-64 transition-all duration-200 ${
                    showServices
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95"
                  }`}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={makePath(
                        `/services/${service
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      )}
                      className="block px-5 py-3 text-sm font-medium text-gray-800 hover:bg-blue-600 hover:text-white transition"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link href={makePath("/blog")} className="hover:text-orange-400">
                BLOG
              </Link>
            </li>
            <li>
              <Link
                href={makePath("/#partners")}
                className="hover:text-orange-400"
              >
                PARTNERS
              </Link>
            </li>
            <li>
              <Link
                href={makePath("/contact")}
                className="hover:text-orange-400"
              >
                CONTACT
              </Link>
            </li>
            <li className="relative">
  <div className="flex items-center gap-2 text-white justify-center">
    <button
      onClick={() => setDropdownOpen((prev) => !prev)}
      className="flex items-center gap-2 focus:outline-none"
    >
      <img
        src={
          country === "au"
            ? "/images/australia.webp"
            : "/images/india.webp"
        }
        alt={country}
        className="w-6 h-6 rounded-full"
      />
      <span className="text-sm font-semibold">
        {country === "au" ? "AU" : "IN"}
      </span>
    </button>

    {dropdownOpen && (
      <ul className="absolute top-full mt-2   bg-[#222] border border-gray-600 rounded-md z-50 w-28 shadow">
        {[
          { code: "india", label: "IN", flag: "/images/india.webp" },
          { code: "au", label: "AU", flag: "/images/australia.webp" },
        ]
          .filter((c) => c.code !== country)
          .map((option) => (
            <li
              key={option.code}
              className="flex items-center gap-2 px-3 py-2 text-white text-sm hover:bg-gray-700 cursor-pointer"
              onClick={() =>
                handleCountryChange({
                  target: { value: option.code },
                })
              }
            >
              <img
                src={option.flag}
                alt={option.label}
                className="w-5 h-5 rounded-full"
              />
              <span>{option.label}</span>
            </li>
          ))}
      </ul>
    )}
  </div>
</li>

          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-lg w-full absolute left-0 z-50">
          <nav className="flex flex-col items-center py-6 space-y-4">
            <ul className="text-white text-lg font-semibold space-y-4 w-full px-6">
              <li>
                <Link
                  href={makePath("/")}
                  onClick={handleLinkClick}
                  className="hover:text-orange-400 block"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <Link
                      href={makePath("/services")}
                      onClick={handleLinkClick}
                      className="hover:text-orange-400"
                    >
                      Services
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowServices((prev) => !prev);
                      }}
                      aria-label="Toggle services dropdown"
                    >
                      <span
                        className={`transform transition-transform duration-300 ${
                          showServices ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                  </div>

                  {showServices && (
                    <ul className="pl-4 pt-2 space-y-2 text-sm text-white">
                      {services.map((service, index) => (
                        <li key={index}>
                          <Link
                            href={makePath(
                              `/services/${service
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`
                            )}
                            onClick={handleLinkClick}
                            className="block hover:text-orange-400"
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link
                  href={makePath("/#partners")}
                  onClick={handleLinkClick}
                  className="hover:text-orange-400 block"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href={makePath("/blog")}
                  onClick={handleLinkClick}
                  className="hover:text-orange-400 block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={makePath("/contact")}
                  onClick={handleLinkClick}
                  className="hover:text-orange-400 block"
                >
                  Contact Us
                </Link>
              </li>
              <li className="pt-2">
                <select
                  value={country}
                  onChange={handleCountryChange}
                  className="bg-[#222] border border-gray-600 text-white px-3 py-1 rounded focus:outline-none w-full"
                >
                  <option value="india">India</option>
                  <option value="au">Australia</option>
                </select>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <hr />
    </>
  );
};

export default Navbar;
