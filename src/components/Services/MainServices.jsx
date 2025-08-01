"use client";
import Link from "next/link";
import { useCountry } from "../context/CountryContext";

function MainServices({ data }) {
  const { country } = useCountry();

  const services = [
    {
      title: "Social Media Marketing",
      description: "From likes to loyalty, watch your brand blow up, the right way.",
      image: "/images/SocialMarketing.svg",
    },
    {
      title: "WhatsApp Marketing",
      description: "Cut through the noise, convert leads with click-worthy conversations.",
      image: "/images/whatsapplogo.svg",
    },
    {
      title: "Display/ Mobile Ads",
      description: "Scroll-stopping visuals that get clicks, not skips.",
      image: "/images/socialmediatargetted.svg",
    },
    {
      title: "Influencer Marketing",
      description: "Real voices. Real reach. Authentic influence that sells.",
      image: "/images/popularman.svg",
    },
    {
      title: "E-Mail Marketing",
      description: "Turn inboxes into income with campaigns that click.",
      image: "/images/envelop.svg",
    },
    {
      title: "RCS",
      description: "Say more, sell more – with rich, interactive RCS messages.",
      image: "/images/problemsolving.svg",
    },
  ];

  return (
    <div className="bg-[#1e1e1e] w-full mx-auto px-4 md:px-12 pt-6">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-center items-center gap-10 py-8">
        <div className="space-y-4 max-w-xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-snug">
            Growth,
          </h2>
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-snug">
            Curated with Intent
          </h2>

          <p className="text-md md:text-lg text-white">
            <span>Concept → </span>
            <span>Story → </span>
            <span>Audience → </span>
            <span>Engage → </span>
            <span>Recall</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
            <button className="bg-[#008BCB] text-white rounded px-6 py-2 text-sm md:text-base hover:bg-[#0075af] transition">
              Get Started
            </button>
            <Link
              href={`/${country}/case-studies`}
              className="text-sm md:text-base text-white underline hover:text-[#008BCB] transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        <img
          src="/images/graph with arrow.webp"
          alt="Growth Graph"
          className="w-full max-w-md"
        />
      </section>

      {/* Services Section */}
      <section className="pt-8 pb-14">
        <h3 className="text-center text-2xl md:text-4xl font-bold mb-10 text-white">
          Our Services
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#1e1c3b] border border-white rounded-xl px-6 py-8 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-center bg-no-repeat bg-contain  pointer-events-none"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-4 h-full">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-white/80">
                  {service.description}
                </p>
                <button className="bg-black text-[#1fb7ff] font-semibold px-4 py-2 rounded-md text-sm md:text-base hover:bg-[#1fb7ff] hover:text-black transition-colors">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainServices;
