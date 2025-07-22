import Merge from "../Merge";

function Carstf() {
  const slides = [
    {
      image: "/images/cars.webp",
      offer: " Buy or sell cars within 30 minutes",
      logo: "/images/car1.webp",
      benifirst:"/images/car1.webp",
      benisec:"/images/car2.webp",
      keydesc: `With Cars 24, buy or sell car in only 30 minutes.- Get a free car inspection, multiple quality checks and the option of a 7 day return. Quick, simple and convenient. In addition to providing immediate payment, Cars 24 handles all paperwork to ensure a hassle free transaction. Discover how to buy and sell cars quickly with Cars 24 today..  
`,
      site: `https://www.cars24.com/sell-marketing/`,
      pros: [
        "Doorstep test drive Facility",
        "Hassle Free experience, across the buying journey",
        "Warranty, extended warranty and easy 7-day returns",
        "Easy Loans, flexible repayment options, and upto zero down payment",
        "Complete Car Care Package",
        "Free Car Inspection Report"
      ]
      
    },
      ];

  return (
    <div >
      <Merge slides={slides} />
    </div>
  );
}

export default Carstf;
