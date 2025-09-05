"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "/images/Icons/icon1.png",
    title: "Marketing Strategy",
    highlight: "Delivers Results",
  },
  {
    icon: "/images/Icons/icon2.png",
    title: "Brand Growth & Market",
    highlight: "Positioning",
  },
  {
    icon: "/images/Icons/icon3.png",
    title: "Customer Engagement",
    highlight: "Builds Loyalty",
  },
  {
    icon: "/images/Icons/icon4.png",
    title: "Data Analytics for",
    highlight: "Smarter Decisions",
  },
  {
    icon: "/images/Icons/icon5.png",
    title: "Customer Retargeting",
    highlight: "That Converts",
  },
  {
    icon: "/images/Icons/icon6.png",
    title: "Campaign Optimization",
    highlight: "Maximum ROI",
  },
  {
    icon: "/images/Icons/icon7.png",
    title: "Customer Life Cycle",
    highlight: "Management",
  },
  {
    icon: "/images/Icons/icon8.png",
    title: "Customer Funnel Strategy",
    highlight: "Conversion Optimization",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

export default function HelpBrands() {
  return (
    <section className="relative bg-gradient-to-br from-black via-[#0d0d0d] to-gray-900 text-white py-20 px-6">
      {/* Background Glow */}

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        How We Help Brands <span className="text-yellow-400">Win?</span>
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10"
      >
        {services.map(({ icon, title, highlight }, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center text-center bg-gradient-to-b from-gray-900/70 to-black/70 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition"
          >
            {/* Icon (Image) */}
            <motion.div
              className="w-20 h-20 flex items-center justify-center rounded-full bg-yellow-400/10 border border-yellow-500/30 mb-6 overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={icon}
                alt={title}
                className="w-15 h-15 object-contain"
              />
            </motion.div>

            {/* Title + Highlight */}
            <h3 className="text-lg font-semibold leading-snug">
              {title}{" "}
              <span className="text-yellow-400 font-bold">{highlight}</span>
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
