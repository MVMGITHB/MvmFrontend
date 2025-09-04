"use client";
import Link from "next/link";
import { useCountry } from "../context/CountryContext";
import { motion } from "framer-motion";

function Blog() {
  const { country } = useCountry();

  const blogData = [
    { image: "/images/work1.webp", title: "Impact of Ai" },
    { image: "/images/work2.webp", title: "E-commerce" },
    { image: "/images/blog.webp", title: "Sugar is bitter" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-300 tracking-wide">
            Featured Blogs
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            Insights, strategies, and stories that inspire innovation.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-gray-800/70 rounded-xl shadow-lg 
                         hover:shadow-yellow-300/30 transform hover:-translate-y-2 
                         transition-all duration-300 overflow-hidden border border-gray-700/40"
            >
              {/* Blog Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                  {blog.title}
                </h3>

                <Link
                  href={`${country === "india" ? "" : "/au"}/blog/${blog?.title
                    ?.replace(/\s+/g, "-")
                    ?.toLowerCase()}`}
                >
                  <button
                    className="px-6 py-2 bg-yellow-300 text-black font-medium rounded-full 
                                     hover:bg-yellow-400 shadow-md transition-all duration-300"
                  >
                    View More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
