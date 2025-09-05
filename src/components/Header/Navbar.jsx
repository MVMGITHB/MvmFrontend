"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useCountry } from "../context/CountryContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { country, setCountry } = useCountry();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 20);
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
  const makePath = (path) =>
    path.startsWith("/") ? `${basePath}${path}` : `${basePath}/${path}`;

  // Helper to check if link is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#141313]/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center flex-wrap py-2 px-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href={makePath("/")}>
              <div className="flex items-center">
                <img
                  src="/images/logo.webp"
                  alt="MVM logo"
                  className="w-16 h-16 object-contain"
                />
                <p className="text-lg font-bold text-white leading-tight ml-2">
                  <span>MVM</span>
                  <br />
                  <span className="text-white">Business</span>
                  <br />
                  <span>Services</span>
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-white text-lg">
            {/* Home */}
            <Link
              href={makePath("/")}
              className={`relative group ${
                isActive(makePath("/")) ? "text-orange-400 font-semibold" : ""
              }`}
            >
              <span className="hover:text-orange-400 transition">HOME</span>
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-300 ${
                  isActive(makePath("/")) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <div
                className={`cursor-pointer hover:text-orange-400 ${
                  isActive(makePath("/services"))
                    ? "text-orange-400 font-semibold"
                    : ""
                }`}
                onClick={() => router.push(makePath("/services"))}
              >
                SERVICES
              </div>
              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-full mt-3 grid grid-cols-1 gap-2 
                               bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] 
                               text-white border border-[#444] 
                               rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.5)] 
                               p-4 z-50 w-72 font-serif"
                  >
                    {services.map((service, index) => {
                      const href = makePath(
                        `/services/${service
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      );
                      return (
                        <Link
                          key={index}
                          href={href}
                          className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${
                            isActive(href)
                              ? "bg-gradient-to-r from-[#654321] to-[#a97449] text-yellow-100"
                              : "hover:bg-gradient-to-r hover:from-[#654321] hover:to-[#a97449] hover:text-yellow-100"
                          }`}
                        >
                          {service}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            {[
              { label: "BLOG", path: "/blog" },
              { label: "PARTNERS", path: "/#partners" },
              { label: "CONTACT", path: "/contact" },
            ].map((item, idx) => {
              const href = makePath(item.path);
              return (
                <Link
                  key={idx}
                  href={href}
                  className={`relative group ${
                    isActive(href) ? "text-orange-400 font-semibold" : ""
                  }`}
                >
                  <span className="hover:text-orange-400 transition">
                    {item.label}
                  </span>
                  <span
                    className={`absolute left-0 bottom-[-4px] h-[2px] bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-300 ${
                      isActive(href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}

            {/* Country Switch */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#222]/70 hover:bg-[#333]/70 transition"
              >
                <img
                  src={
                    country === "au"
                      ? "/images/australia.webp"
                      : "/images/india.webp"
                  }
                  alt={country}
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm">
                  {country === "au" ? "AU" : "IN"}
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 bg-[#222] border border-gray-700 rounded-md shadow-lg w-28">
                  {[
                    { code: "india", label: "IN", flag: "/images/india.webp" },
                    {
                      code: "au",
                      label: "AU",
                      flag: "/images/australia.webp",
                    },
                  ]
                    .filter((c) => c.code !== country)
                    .map((option) => (
                      <div
                        key={option.code}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 cursor-pointer"
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
                      </div>
                    ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#141313] text-white absolute top-[70px] left-0 w-full z-40 shadow-lg"
          >
            <nav className="flex flex-col items-start py-6 px-8 space-y-4">
              {["Home", "Services", "Blog", "Partners", "Contact"].map(
                (label, idx) => {
                  const href =
                    label === "Home"
                      ? makePath("/")
                      : makePath(`/${label.toLowerCase()}`);
                  return (
                    <Link
                      key={idx}
                      href={href}
                      onClick={handleLinkClick}
                      className={`block text-lg ${
                        isActive(href)
                          ? "text-orange-400 font-semibold"
                          : "hover:text-orange-400"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                }
              )}
              <div className="w-full">
                <label className="text-sm text-gray-400">Select Country</label>
                <select
                  value={country}
                  onChange={handleCountryChange}
                  className="bg-[#222] border border-gray-600 text-white px-3 py-2 rounded w-full mt-2"
                >
                  <option value="india">India</option>
                  <option value="au">Australia</option>
                </select>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
