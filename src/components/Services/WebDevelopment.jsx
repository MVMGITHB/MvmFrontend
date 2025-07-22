import React from 'react'
import MainServices from './MainServices';

function WebDevelopment() {
  const data = {
    title: "Web Development",
    img: "/images/web.webp",
    points: [
      {
        heading: "What is Web Development?",
        description:
          `Web Development is the process that’s used to build and maintain websites or applications. Steps involved include planning, design, development, testing and maintenance.  
`,
      },
      {
        heading: "What are some common tools for Web Development? ",
        description:`Web Development can be of different types, like version control, responsive design, front end development and back end development. The most popular ones today – GitHub, Figma and Flutter.   
`
      },
     
      {
        heading: "Impact of Brand Marketing",
        description:
          "Web Development is extremely useful in today’s digital world. It promotes economic development, encourages international connectivity, improves automation, and facilitates education and innovation.",
      },
    ],
  };
  return (
    <div><MainServices data={data}/></div>
  )
}

export default WebDevelopment