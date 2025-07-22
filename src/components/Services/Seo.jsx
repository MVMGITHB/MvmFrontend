import React from 'react'
import MainServices from './MainServices';

function Seo() {
  const data = {
    title: "SEO",
    img: "/images/seo.webp",
    points: [
      {
        heading: "What is Search Engine Optimisation?",
        description:
          "SEO, or Search Engine Optimisation, is a digital marketing strategy that is used to improve the ranking of a business on Google’s Search Engine Results Page [SERPs].",
      },
      {
        heading: "What are some tools for Search Engine Optimisation?",
        description:
          "Some common tools for Search Engine Optimisation include Semrush, Ahrefs, Yoast and Mangools. These tools provide businesses with the best SEO practices.",
      },
      {
        heading: "Impact of Search Engine Optimisation",
        description:
          "SEO gets more traffic and views to a business’ website [the higher the rank, the more traffic it gets]. This means more leads, which can then be converted to sales.  ",
      },
    
    ],
  };

  return <MainServices data={data} />
}

export default Seo