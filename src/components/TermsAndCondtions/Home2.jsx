"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[100vh]  flex items-center justify-center text-white overflow-x-hidden">
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
      <div className="relative z-10 text-center px-1 md:px-6 ">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-[65px] font-bold leading-tight "
        >
          <span className="text-yellow-300">360°</span> Digital Marketing <br />
          Solutions Backed by 
          <span className="text-yellow-300"> 11+ Years</span> <br />
          of Experience
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-xl md:text-[25px] text-gray-200 font-medium leading-relaxed  mx-auto text-center"
        >
          We help brands{" "}
          <span className="text-yellow-300 font-medium">grow</span> with performance marketing,
          <br />
          <span className="text-yellow-300 font-medium">
             SEO, social media management, mobile ad,
            content 
          </span>{" "} 
          <br />
          <span> creation & more.</span>
        
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <Link href="/contact">
            <button className="px-8 py-4 bg-transparent cursor-pointer border border-yellow-400 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Get a free strategy consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}