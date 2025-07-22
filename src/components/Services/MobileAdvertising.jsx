import React from 'react'
import MainServices from './MainServices';

function MobileAdvertising() {
  const data = {
    title: "Mobile Advertising",
    img: "/images/mobile.webp",
    points: [
      {
        heading: "What is Mobile Advertising?",
        description:
          "Mobile Advertising is a form of advertising that appears mainly on mobile devices like smartphones & tablets.",
      },
      {
        heading: "What are some tools for Mobile Advertising?",
        description:
          "Some common tools for mobile advertising, include Google Ads, Appsflyer and Airship. Through these tools, businesses can reach their target demographics effectively.",
      },
      {
        heading: "Types of Campaign Categories",
        description:
          "The common campaign categories for Mobile Advertising include gaming, BFSI and automobiles.",
      },
      {
        heading: "Impact of Mobile Advertising", 
        description:
          "Mobile Advertising is cost-effective and helps businesses to create personalised advertising strategies.",
      },
    ],
  };

  return <MainServices data={data} />
}

export default MobileAdvertising