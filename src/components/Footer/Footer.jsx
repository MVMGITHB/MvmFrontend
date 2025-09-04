"use client";

import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useCountry } from "../context/CountryContext";
import { motion } from "framer-motion";

const Footer = () => {
  const { country } = useCountry();
  const prefix = country === "au" ? "/au" : "";

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Top Section */}

      <footer className="bg-gradient-to-b from-[#0d0d0d] to-black text-gray-300 px-6 py-12 relative overflow-hidden ">
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-10"
          style={{
            backgroundImage: "url(/images/logo2.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "400px",
          }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left relative z-10">
          {/* Address + Email */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg font-semibold text-yellow-400">Address:</p>
            <span className="block text-gray-300 leading-relaxed">
              I Thum I.T. Park, Sector 62 <br /> Noida, Uttar Pradesh
            </span>
            <p className="text-lg font-semibold text-yellow-400 mt-4">Email:</p>
            <span className="block text-gray-300">contact@mvmbs.com</span>
          </motion.div>

          {/* Company Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h6 className="text-lg font-semibold mb-4 text-yellow-400">
              Company
            </h6>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-yellow-300 transition-colors"
                  href={`${prefix}/`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-300 transition-colors"
                  href={`${prefix}/contact`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-300 transition-colors"
                  href={`${prefix}/blog`}
                >
                  Campaigns
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h6 className="text-lg font-semibold mb-4 text-yellow-400">
              Legal
            </h6>
            <ul className="space-y-2">
              <li>
                <Link
                  className="hover:text-yellow-300 transition-colors"
                  href={`${prefix}/terms-of-use`}
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-300 transition-colors"
                  href={`${prefix}/privacy-policy`}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h6 className="text-lg font-semibold mb-4 text-yellow-400">
              Follow Us
            </h6>
            <div className="flex justify-center sm:justify-start flex-wrap gap-5 text-2xl">
              {[
                { href: "https://www.facebook.com/mvmbs/", Icon: FaFacebook },
                {
                  href: "https://in.linkedin.com/company/mvm-business-services",
                  Icon: FaLinkedin,
                },
                {
                  href: "https://www.instagram.com/mvmbs_official/",
                  Icon: FaInstagram,
                },
                { href: "#", Icon: FaYoutube },
              ].map(({ href, Icon }, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer"
                >
                  <Link
                    href={href}
                    className="text-white hover:text-yellow-300 transition"
                  >
                    <Icon />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <footer className="bg-black text-gray-400 flex flex-col md:flex-row justify-between items-center px-6 py-5 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href={`${prefix}/`} className="flex items-center gap-4">
            <img
              src="/images/logo.webp"
              alt="MVM logo"
              className="w-14 h-14 object-contain"
            />
            <p className="text-md text-gray-200">MVM Business Services</p>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm mt-3 md:mt-0"
        >
          &copy; {new Date().getFullYear()} All rights reserved.
        </motion.p>
      </footer>
    </>
  );
};

export default Footer;
