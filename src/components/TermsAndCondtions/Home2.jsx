"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}

      <div className="absolute inset-0 opacity-90 bg-black">
        <Image
          src="/images/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority // optional, ensures hero image loads quickly
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mx-w-2xl"
        >
          <span className="text-yellow-300">360°</span> Digital Marketing <br />
          Solutions Backed by <br />
          <span className="text-yellow-300"> 11+ Years</span> <br />
          of Experience
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-md mx-auto text-center"
        >
          We help brands{" "}
          <span className="text-yellow-300 font-medium">grow</span> with{" "}
          <span className="text-yellow-300 font-medium">
            performance marketing, SEO, social media management, mobile ad,
            content creation
          </span>{" "}
          & more.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <Link href="/contact">
            <button className="px-8 py-4 bg-transparent border border-yellow-400 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Get a free strategy consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
