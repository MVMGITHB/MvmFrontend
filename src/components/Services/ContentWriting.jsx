import React from "react";
import MainServices from "./MainServices";

function ContentWriting() {
  const data = {
    title: "Content Writing",
    img: "/images/content.webp",
    points: [
      {
        heading: "What is Content Writing?",
        description: `Content Marketing is a strategy used to engage with the target audience through useful and relevant content. 
 
`,
      },
      {
        heading: "What are some tools for Content Marketing",
        description: `Some common tools for Content Marketing include Trello, WordPress and BuzzSumo. These tools ensure improved visibility. 
`,
      },
      {
        heading: "Impact of Content Marketing?",
        description:
          "Content Marketing has several advantages, such as effective SEO, more sales and audience engagement. ",
      },
     
    ],
  };

  return (
    <>
      <MainServices data={data} />
    </>
  );
}

export default ContentWriting;
