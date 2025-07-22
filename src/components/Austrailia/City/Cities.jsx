"use client";
import { Check, CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  {
    title: "Brand Marketing",
    description:
      "We run brand campaigns across all categories. Our AI enabled media buying strategy enables brands to achieve maximum reach and engagement out of their awareness marketing campaigns.",
    href: "/brand-marketing",
  },
  {
    title: "Performance Marketing",
    description:
      "We create smart performance marketing campaigns that give maximum ROAS to you. We optimize campaign by our smart tracking and data analytics to give your best performance.",
    href: "/performance-marketing",
  },
  {
    title: "Affiliate Marketing",
    description:
      "We deliver affiliate marketing campaigns across all categories i.e. BFSI, Real Estate, Automobile, Education, E commerce, fashion & lifestyle etc. We do high performance-oriented affiliate campaigns with scale.",
    href: "/affiliate-marketing",
  },
  {
    title: "Social Media Marketing",
    description:
      "We build interesting social media campaigns with very high engagement and high shareability. We ensure to build that social connect with audience through our social campaigns.",
    href: "/social-media-marketing",
  },
  {
    title: "Mobile Advertising",
    description:
      "We tap customers across all platforms, the journey from desktop to mobile & from search to social is monitored and campaigns with high performance are created for mobile performance delivery.",
    href: "/mobile-advertising",
  },
  {
    title: "SEO",
    description:
      "To tap into customers with highest intent, it’s important to tap customers doing relative searches. Our strong SEO & content team work tirelessly to ensure you get the highest share of that organic traffic.",
    href: "/seo",
  },
  {
    title: "Content Writing",
    description:
      "Content is an important pillar of digital marketing, we create highly engaging, innovative content for websites, marketing collaterals, PR activities etc.",
    href: "/content-writing",
  },
  {
    title: "Web Development",
    description:
      "We go beyond marketing to support our customers, our experience in building smart desktop and mobile applications ensures that high quality performance oriented & optimized products are created for our partners.",
    href: "/web-development",
  },
];

const cities = [
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Canberra",
  "Hobart",
  "Perth",
  "Newcastle",
  "Adelaide",
  "Wollongong",
  "Gold Coast",
  "Cairns",
  "Darwin",
  "Coffs Harbour",
  "Dubbo",
  "Bendigo",
  "Devonport",
  "Ballarat",
  "Launceston",
  "Townsville City",
  "Albany",
  "Toowoomba",
  "Warrnambool",
  "Bundaberg Central",
  "Busselton",
  "Geelong",
  "Mildura",
  "Armidale",
  "Broken Hill",
  "Port Macquarie",
  "Port Lincoln",
  "Maryborough",
  "Murray Bridge",
  "Horsham",
  "Tamworth",
  "Wagga Wagga",
  "Taree",
  "Wangaratta",
  "Nowra",
  "Bathurst",
  "Shepparton",
  "Grafton",
  "Forster",
  "Muswellbrook",
  "Rockhampton City",
  "Mackay",
  "Hervey Bay",
  "Gladstone Central",
  "Geraldton",
  "Bunbury",
  "Mount Gambier",
];

function Cities({ city }) {
  const pathname = usePathname();

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/cities.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for darkening (optional) */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Digital Marketing & SEO Services in{" "}
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </h1>
          <p className="mt-4 text-lg">
            Empowering businesses in {city} with SEO, Web Development, and
            Marketing Services.
          </p>
          <Link
            href="/au/contact"
            className="inline-block mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services in {city}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {services.map((service, index) => (
            <Link
              href={`${pathname}/${service.href}`}
              key={service.slug}
              className="relative w-full max-w-xs bg-gray-100 rounded-xl p-10 overflow-hidden shadow-md cursor-pointer transition-transform duration-300 group hover:scale-105 hover:shadow-2xl"
            >
              {/* Number Badge */}
              <div className="absolute top-[-90px] right-[-85px] px-[100px] pt-[80px] pb-[30px] bg-violet-500 rounded-full z-[5]">
                <p className="text-[24px] font-semibold text-white mt-5">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="absolute top-1/2 right-1/2 w-[50px] h-[50px] bg-violet-500 rounded-full z-[-1] transform translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-[900px] group-hover:h-[900px]"></div>
              </div>

              {/* Card Content */}
              <div className="relative z-[5] flex flex-col items-center text-center space-y-4">
                <p className="text-xl font-extrabold group-hover:text-white transition duration-500 mt-4">
                  {service.title}
                </p>

                <p className="text-md text-gray-700 group-hover:text-white transition duration-500">
                  {service.description}
                </p>

                <p className="mt-4 inline-block text-violet-600 group-hover:text-white font-semibold text-base transition duration-500">
                  Explore →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Serving All Major Cities in Australia
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We offer SEO, Web Development & Marketing Services in top Australian
            cities
          </p>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  p-4">
  {cities.map((city) => (
    <Link
      key={city}
      href={`/au/${city.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
    >
      <CircleCheckBig className="w-5 h-5" />
      <span className="text-lg font-medium">Explore services in {city}</span>
    </Link>
  ))}
</div>

        </div>
      </section>
    </div>
  );
}

export default Cities;
