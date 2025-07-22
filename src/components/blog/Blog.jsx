"use client";
import Link from "next/link";
import { useCountry } from "../context/CountryContext";

function Blog() {
  const { country } = useCountry();

  const blogData = [
    {
      image: "/images/work1.webp",
      title: "Impact of Ai",
    },
    {
      image: "/images/work2.webp",
      title: "E-commerce",
    },
    {
      image: "/images/blog.webp",
      title: "Sugar is bitter",
    },
  ];

  return (
    <div className="bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-56 w-full overflow-hidden rounded-t-lg">
                <img
                  src={blog?.image}
                  alt={blog?.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {blog?.title}
                </h2>
                <Link
                  href={`${country === "india" ? "" : "/au"}/blog/${blog?.title
                    ?.replace(/\s+/g, "-")
                    ?.toLowerCase()}`}
                >
                  {" "}
                  <button className="bg-yellow-500 cursor-pointer text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
