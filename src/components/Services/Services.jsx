"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    icon: "/images/p1.png",
    title: "Performance Marketing",
    desc: "Results-driven ad strategies that convert.",
  },
  {
    icon: "/images/p2.png",
    title: "SEO",
    desc: "Improve rankings and grow organic visibility.",
  },
  {
    icon: "/images/p3.png",
    title: "Mobile Marketing",
    desc: "Reach your audience on-the-go with mobile-first campaigns.",
  },
  {
    icon: "/images/p4.png",
    title: "Social Media Marketing",
    desc: "Build a brand presence across key social platforms.",
  },
  {
    icon: "/images/5.png",
    title: "Affiliate Marketing",
    desc: "Partner with performance-based affiliates for broader reach.",
  },
  {
    icon: "/images/p6.png",
    title: "Content Marketing",
    desc: "Tell stories that engage, educate, and convert.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

export default function WhatWeDo() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-15 px-6 text-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        What <span className="text-yellow-400">We Do?</span>
      </motion.h2>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {services.map(({ icon, title, desc }, idx) => (
          <motion.div
            key={idx}
            variants={card}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0px 8px 30px rgba(255,165,0,0.3)",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="relative bg-white text-black rounded-xl p-6 shadow-lg flex flex-col justify-between group overflow-hidden"
          >
            {/* Top floating glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-yellow-400 to-orange-500 transition duration-500" />

            {/* Icon */}
            <motion.div
              className="w-32 h-32 mb-6 mx-auto relative"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={icon}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
            <p className="text-gray-600 text-center mb-6">{desc}</p>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button className="px-6 py-4 text-sm font-semibold bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition">
                Request
              </button>
              <button className="px-6 py-4 text-sm font-semibold border border-gray-400 rounded-md hover:border-black transition">
                More Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
