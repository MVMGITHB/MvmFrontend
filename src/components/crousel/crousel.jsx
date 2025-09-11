"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { logo: "/images/partners/pic1.png", name: "Amazon" },
  { logo: "/images/partners/pic2.png", name: "Reliance" },
  { logo: "/images/partners/pic3.png", name: "Levi's" },
  { logo: "/images/partners/pic4.png", name: "Ajio" },
  { logo: "/images/partners/pic5.png", name: "Myntra" },
  { logo: "/images/partners/pic6.png", name: "Axis Bank" },
  { logo: "/images/partners/pic8.png", name: "Aditya Birla" },
  { logo: "/images/partners/pic9.png", name: "Aditya Birla" },
  { logo: "/images/partners/pic10.png", name: "Aditya Birla" },
  { logo: "/images/partners/pic11.png", name: "Aditya Birla" },
  { logo: "/images/partners/pic12.png", name: "Aditya Birla" },
  { logo: "/images/partners/pic13.png", name: "Aditya Birla" },
];

// Industry icons
const industries = [
  { icon: "/images/hero/pic1.png", label: "BFSI" },
  {
    icon: "/images/hero/pic2.png",
    label: "E-commerce & Online Shopping",
  },
  { icon: "/images/hero/pic3.png", label: "Real Estate" },
  { icon: "/images/hero/pic4.png", label: "Education & EdTech" },
];

export default function PartnersCarousel() {
  return (
    <section className="bg-black text-white py-16 ">
      {/* Industries Section */}
      <div className="mx-auto text-center mb-14 pl-[10%] pr-[10%]">
        <h2 className="text-2xl md:text-[65px] font-semibold mb-4">
          <span className="text-yellow-400">Proven</span> Results Across
          Industries
        </h2>
        <p className="text-2xl text-gray-300">
          We’ve{" "}
          <span className="text-yellow-400 font-semibold">successfully</span>{" "}
          delivered digital marketing campaigns across
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={100}
                height={100}
                className="object-contain "
              />
              <p className="text-yellow-400 font-bold text-3xl md:text-2xl leading-snug max-w-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Carousel */}
      <h3 className="text-center text-white text-2xl md:text-4xl font-semibold mb-8 px-2">
        Our Trusted Partners
      </h3>
      <div className="overflow-hidden relative bg-white py-4">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center min-w-[150px] h-20 bg-white rounded-lg shadow-md px-6"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
