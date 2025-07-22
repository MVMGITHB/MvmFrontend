"use client";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { useCountry } from "../context/CountryContext";

const Footer = () => {
  const { country } = useCountry();
  const prefix = country === "au" ? "/au" : "";

  return (
    <>
      <footer className="bg-black text-gray-200 px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left items-center sm:items-start">
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-white">Address:</p>
            <span>I Thum I.T. Park, Sector 62 Noida, Uttar Pradesh</span>
            <p className="text-2xl font-semibold text-white">Email:</p>
            <span>contact@mvmbs.com</span>
          </div>

          <div>
            <h6 className="text-xl font-semibold mb-4 text-white">Company</h6>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-orange-400 transition" href={`${prefix}/`}>
                  About us
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-400 transition" href={`${prefix}/contact`}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-400 transition" href={`${prefix}/blog`}>
                  Campaigns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-semibold mb-4 text-white">Legal</h6>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-orange-400 transition" href={`${prefix}/terms-of-use`}>
                  Terms of use
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-400 transition" href={`${prefix}/privacy-policy`}>
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-semibold mb-4 text-white">Follow Us</h6>
            <div className="flex justify-center sm:justify-start flex-wrap gap-4 text-white text-2xl">
              <Link
                href="https://www.facebook.com/mvmbs/"
                className="hover:text-orange-400 transition"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://in.linkedin.com/company/mvm-business-services"
                className="hover:text-orange-400 transition"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/mvmbs_official/"
                className="hover:text-orange-400 transition"
              >
                <FaInstagram />
              </Link>
              <Link href="#" className="hover:text-orange-400 transition">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-black text-gray-300 flex flex-col md:flex-row justify-between items-center px-6 py-4 border-t border-gray-700">
        <Link href={`${prefix}/`} className="flex items-center gap-4">
          <img
            src="/images/logo.webp"
            alt="MVM logo"
            className="w-16 h-16 object-contain"
          />
          <p className="text-md">MVM Business Services</p>
        </Link>
        <p className="text-sm mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
