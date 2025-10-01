import React from 'react'
import MainServices from './MainServices';

import PerformanceMarket from './performanceMarketing/PerformanceMarket';

function PerformanceMarketing() {
  const data = {
    title: "Performance Marketing",
    img: "/images/performance_marketing.webp",
    points: [
      {
        heading: "What is Performance Marketing?", 
        description:
          "We define your brand's unique value in the market and position it to resonate with your target audience. Our strategies ensure long-term brand loyalty and differentiation.",
      }, 
      {
        heading: "Types of campaign categories",
        description:
          "Campaign categories for performance marketing include CPC [cost per click], CPL [cost per lead], CPI [cost per install], CPV [cost per visit] and CPM [cost per impression]. ",
      },
     
      {
        heading: "Impact of Perfomance Marketing",
        description:
          "Effective performance marketing gives businesses measurable and effective results. It boosts the overall return on investment [ROI].",
      },
    ],
  };

  //<MainServices data={data} />
  return <PerformanceMarket /> 
}

export default PerformanceMarketing