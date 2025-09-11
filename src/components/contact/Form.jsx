"use client";

import { motion } from "framer-motion";
import Details from "./Details";

export default function Form() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <hr />
      <div className="relative min-h-screen bg-gradient-to-r from-[#0f172a] via-black-200 to-[#0f172a] text-white flex flex-col items-center justify-center p-6 md:p-8 lg:p-12">
        {/* Radial Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,0,0.08),transparent_70%)]" />

        {/* Main Grid */}
        <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 md:mt-24 lg:mt-32">
          {/* LEFT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 font-semibold tracking-wide uppercase"
            >
              Contact Us
            </motion.h4>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-yellow-400"
            >
              Get in Touch
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Want to make an impactful and compelling brand?{" "}
              <span className="text-white font-semibold">
                We&apos;ve got you covered.
              </span>{" "}
              Contact us for any enquiries.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-4 text-gray-300">
              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <span className="text-yellow-400 text-xl">📧</span>
                <span>contact@mvmbs.com</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <span className="text-yellow-400 text-xl">📍</span>
                <span>I Thum I.T. Park, Sector 62 Noida, Uttar Pradesh</span>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 rounded-lg overflow-hidden shadow-xl border border-gray-700"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0784869880545!2d77.36979007536928!3d28.627409684313502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce569b7660581%3A0xc967ef0b896097d5!2sMVM%20Business%20Services!5e0!3m2!1sen!2sin!4v1745561694261!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: DETAILS FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Details />
          </motion.div>
        </div>
      </div>
    </>
  );
}
