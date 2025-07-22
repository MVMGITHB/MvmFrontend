import Merge from "../Merge";

function TvsMotor() {
  const slides = [
    { 
      image: "/images/tvs logo.webp",
      offer: "TVS: Stylish bikes with high performance",
      logo: "/images/tvsCenter.webp",
      keydesc: ` With TVS Motors, get the best range of sporty and affordable bikes 

These bikes offer value for money, high performance and innovative segment-first features. Beginner, intermediate or seasoned, TVS has a bike for all. So, experience the thrill and get your own bike now
.   
`,
benifirst:'/images/tvsleft.webp',
benisec:'/images/tvsright.webp',
      site: `https://trk.mrndigital.in/t/NDUwXzM4NTY/?p1=%7Bclick_id%7D&source=%7Bsource%7D`,
      pros: [
        "Wide product range",
        "Value for money",
        "Environment friendly",
        "Fuel efficiency",
        "Smooth features",
        
      ]
      
    },
   
  ];

  return (
    <div>
      <Merge slides={slides} />
    </div>
  );
}

export default TvsMotor;
